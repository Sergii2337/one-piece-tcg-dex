// One Piece TCG Pocket Dex & Collection Manager - Collaborative Shared Folders & Real-Time Sync Engine

class OnePieceApp {
  constructor() {
    this.collection = [];
    this.activeFilter = 'ALL';
    this.searchQuery = '';
    this.currentTab = 'album';
    this.pendingCard = null;
    this.pendingQty = 1;
    this.currentSetCode = null;

    // Carpetas y Colaboración
    this.folderScope = 'personal'; // 'personal' | 'shared'
    this.activeFolderId = 'default'; // 'default' o folderId
    this.personalFolders = [];
    this.sharedFolderIds = [];
    this.sharedFoldersMap = new Map(); // id -> folder object
    this.editingFolderId = null; // para modal de editar carpeta
    this.movingCard = null; // para modal de mover carta

    // Listeners de Firestore
    this.firestoreUnsubUser = null;
    this.activeSharedFolderUnsub = null;
    this.sharedFoldersUnsubs = new Map(); // id -> unsub function

    // Paginación y Búsqueda (18 cartas por página = 3 filas de 6)
    this.searchResults = [];
    this.searchCurrentPage = 1;
    this.searchCardsPerPage = 18;
    this.currentSearchMode = 'set'; // 'set' | 'search'

    // Preferencias de visualización del Álbum
    this.albumViewMode = localStorage.getItem('op_album_view_mode') || 'grid';
    this.albumCardSize = localStorage.getItem('op_album_card_size') || 'normal';

    // Preferencias de visualización del Explorador de Sets / Starter Decks
    this.setViewMode = localStorage.getItem('op_set_view_mode') || 'grid';
    this.setCardSize = localStorage.getItem('op_set_card_size') || 'normal';

    // Firebase & Auth
    this.currentUser = null;
    this.cloudSyncDebounce = null;

    // Modal de edición rápida de cantidad
    this.activeQtyCard = null;

    // Ordenación de Álbum y Poster
    this.albumSortOrder = localStorage.getItem('op_album_sort_order') || 'color';
    this.albumCustomOrders = this.loadAlbumCustomOrders(); // clave carpeta -> [ids]
    this.albumBaseCards = [];
    this.currentImageSortOrder = 'color';
    this.moveFolderMode = 'move';

    // Exportación a Imagen (Poster / Binder)
    this.currentImageTheme = 'dark';
    this.currentImageFolderData = null;
    this.currentImageDataUrl = null;
    this.currentImageBlob = null;

    this.init();
  }

  init() {
    window.opApp = this;
    this.loadFolders();
    this.loadCollection();
    this.cacheDOM();
    this.bindEvents();
    this.setupAllSharedFolderListeners();
    this.initFirebaseAuth();
    this.checkUrlForSharedFolder();
    this.setupCardsDbSyncListeners();
    this.updateToolbarControls();
    this.renderFolderTabs();
    this.renderAlbum();
    this.populateExportFolderSelect();
    this.updateHeaderStats();
    this.loadLivePrices();
  }

  // =========================================================================
  // PRECIOS CARDMARKET (guía diaria vía proxy de Netlify, con respaldo en prices-data.js)
  // =========================================================================

  async loadLivePrices() {
    const STORAGE_KEY = 'op_mkm_live_prices_v2'; // v2: solo productos de la versión inglesa
    const MAX_AGE_MS = 12 * 60 * 60 * 1000;
    const snapshot = window.ONE_PIECE_PRICES_DB || {};

    try {
      const cached = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (cached && cached.prices) {
        this.livePrices = cached;
        if (Date.now() - cached.fetchedAt < MAX_AGE_MS) return;
      }
    } catch (e) { /* caché corrupta: se vuelve a descargar */ }

    try {
      const res = await fetch('/mkm-prices/price_guide_18.json', { cache: 'no-cache' });
      if (!res.ok) return;
      const guide = await res.json();

      // Solo guardamos los productos que corresponden a cartas de la app (~200 KB en vez de 2,7 MB)
      const wanted = new Set(Object.values(snapshot).map(p => p.mkmId));
      const prices = {};
      (guide.priceGuides || []).forEach(p => {
        if (wanted.has(p.idProduct)) prices[p.idProduct] = [p.trend, p.low, p.avg7];
      });

      this.livePrices = { fetchedAt: Date.now(), createdAt: guide.createdAt, prices };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.livePrices));
    } catch (e) {
      // Sin proxy (p. ej. servidor local) o sin conexión: se usan los precios de prices-data.js
      console.info('[Precios] Usando precios guardados en prices-data.js');
    }
  }

  getCardPrice(cardId) {
    const snapshot = window.ONE_PIECE_PRICES_DB || {};
    const entry = snapshot[normalizeCardId(cardId)];
    if (!entry) return null;

    const live = this.livePrices && this.livePrices.prices[entry.mkmId];
    if (live) {
      return { trend: live[0], low: live[1], avg7: live[2], date: this.livePrices.createdAt };
    }
    const meta = window.ONE_PIECE_PRICES_META || {};
    return { trend: entry.mkm, low: entry.low, avg7: entry.avg7, date: meta.priceGuideDate };
  }

  // "Character • SR": la rareza se toma de la DB porque la guardada en la colección
  // puede venir de una versión antigua de los datos
  getTypeRarityLabel(card) {
    const dbCard = ONE_PIECE_CARDS_DB[normalizeCardId(card.id)];
    const rarity = (dbCard && dbCard.rarity) || card.rarity;
    return rarity ? `${card.cardType || 'Card'} • ${rarity}` : (card.cardType || 'Card');
  }

  loadFolders() {
    try {
      const rawPersonal = localStorage.getItem('op_tcg_personal_folders_v1');
      if (rawPersonal) {
        this.personalFolders = JSON.parse(rawPersonal);
      } else {
        this.personalFolders = [
          { id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b', type: 'personal' }
        ];
      }

      const rawSharedIds = localStorage.getItem('op_tcg_shared_ids_v1');
      if (rawSharedIds) {
        this.sharedFolderIds = JSON.parse(rawSharedIds);
      } else {
        this.sharedFolderIds = [];
      }

      const rawSharedCache = localStorage.getItem('op_tcg_shared_folders_cache_v1');
      if (rawSharedCache) {
        const cachedObj = JSON.parse(rawSharedCache);
        Object.keys(cachedObj).forEach(id => {
          this.sharedFoldersMap.set(id, cachedObj[id]);
        });
      }
    } catch (e) {
      console.error("Error al cargar carpetas:", e);
      this.personalFolders = [{ id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b', type: 'personal' }];
      this.sharedFolderIds = [];
    }
  }

  saveSharedFoldersCache() {
    try {
      const obj = {};
      this.sharedFoldersMap.forEach((val, key) => {
        obj[key] = val;
      });
      localStorage.setItem('op_tcg_shared_folders_cache_v1', JSON.stringify(obj));
    } catch (e) {
      console.error("Error guardando cache de carpetas compartidas:", e);
    }
  }

  saveFolders() {
    try {
      localStorage.setItem('op_tcg_personal_folders_v1', JSON.stringify(this.personalFolders));
      localStorage.setItem('op_tcg_shared_ids_v1', JSON.stringify(this.sharedFolderIds));
      this.saveSharedFoldersCache();
    } catch (e) {
      console.error("Error al guardar carpetas:", e);
    }
    this.renderFolderTabs();
    this.populateFolderSelects();
    this.populateExportFolderSelect();
    this.scheduleCloudSync();
  }

  loadCollection() {
    try {
      const raw = localStorage.getItem('op_tcg_cards_v7');
      if (raw) {
        const parsed = JSON.parse(raw);
        this.collection = this.normalizeCollection(Array.isArray(parsed) ? parsed : []);
        
        // Limpieza de datos demo residuales antiguos en cuentas vacías
        const legacyDemoIds = ["OP17-039", "OP17-118", "OP17-001", "OP09-082", "OP09-118", "OP09-021"];
        const isLegacyDemo = this.collection.length === 6 && 
          this.collection.every(c => legacyDemoIds.includes(c.id) && (!c.folderId || c.folderId === 'default'));
        
        if (isLegacyDemo) {
          this.collection = [];
          localStorage.setItem('op_tcg_cards_v7', JSON.stringify([]));
        } else {
          this.collection.forEach(c => {
            const fresh = findOrGenerateCard(c.id);
            c.name = (c.name && !c.name.startsWith("Carta ")) ? c.name : fresh.name;
            c.color = fresh.color;
            c.cardType = fresh.cardType;
            c.traits = (c.traits && c.traits !== 'One Piece Pirates') ? c.traits : fresh.traits;
            c.rarity = fresh.rarity;
            c.cost = fresh.cost;
            c.set = fresh.set;
            if (!c.folderId) c.folderId = 'default';
          });
        }
      } else {
        // Colección vacía por defecto
        this.collection = [];
        localStorage.setItem('op_tcg_cards_v7', JSON.stringify([]));
      }
    } catch (e) {
      console.error("Error al cargar colección:", e);
      this.collection = [];
    }
  }

  // Unifica ids con distinto formato (OP09-093_P4 -> OP09-093_p4) y suma las copias duplicadas
  normalizeCollection(cards) {
    const merged = new Map();
    cards.forEach(c => {
      if (!c || !c.id) return;
      let id = normalizeCardId(c.id);
      // Repara ids de importaciones antiguas que incluían la cantidad: "2XOP13-067" -> "OP13-067" x2
      const qtyPrefixed = id.match(/^(\d{1,3})X((?:OP|ST|EB|PRB)\d{2}-\d{3}.*)$/);
      if (qtyPrefixed) {
        id = qtyPrefixed[2];
        c = { ...c, count: (c.count || 1) * parseInt(qtyPrefixed[1]) };
        Object.assign(c, findOrGenerateCard(id), { count: c.count, folderId: c.folderId, addedAt: c.addedAt });
      }
      const key = `${id}|${c.folderId || 'default'}`;
      const existing = merged.get(key);
      if (existing) {
        existing.count = (existing.count || 0) + (c.count || 0);
      } else {
        merged.set(key, { ...c, id });
      }
    });
    return [...merged.values()];
  }

  saveCollection() {
    try {
      localStorage.setItem('op_tcg_cards_v7', JSON.stringify(this.collection));
    } catch (e) {
      console.error("Error al guardar colección:", e);
    }
    this.updateHeaderStats();
    this.populateExportFolderSelect();
    this.scheduleCloudSync();
  }

  cacheDOM() {
    this.dom = {
      headerStats: document.getElementById('header-stats'),
      btnDbSync: document.getElementById('btn-db-sync'),
      dbSyncLabel: document.getElementById('db-sync-label'),

      viewAlbum: document.getElementById('view-album'),
      viewScanner: document.getElementById('view-scanner'),
      viewExport: document.getElementById('view-export'),
      viewPacks: document.getElementById('view-packs'),
      navButtons: document.querySelectorAll('.nav-button'),

      // Sub-pestañas de Carpetas (Personales vs Compartidas)
      tabScopePersonal: document.getElementById('tab-scope-personal'),
      tabScopeShared: document.getElementById('tab-scope-shared'),
      sharedBadgeCount: document.getElementById('shared-badge-count'),
      btnAddFolder: document.getElementById('btn-add-folder'),
      btnJoinSharedFolder: document.getElementById('btn-join-shared-folder'),
      foldersPillsContainer: document.getElementById('folders-pills-container'),

      // Banner de Carpeta Activa
      folderActiveBanner: document.getElementById('folder-active-banner'),
      folderActiveIcon: document.getElementById('folder-active-icon'),
      folderActiveTitle: document.getElementById('folder-active-title'),
      folderActiveTypeBadge: document.getElementById('folder-active-type-badge'),
      folderActiveCount: document.getElementById('folder-active-count'),
      btnShareActiveFolder: document.getElementById('btn-share-active-folder'),
      btnEditActiveFolder: document.getElementById('btn-edit-active-folder'),
      btnDeleteActiveFolder: document.getElementById('btn-delete-active-folder'),
      btnExportActiveFolder: document.getElementById('btn-export-active-folder'),

      // Búsqueda y Filtros de Álbum
      albumSearchInput: document.getElementById('album-search-input'),
      albumSearchClear: document.getElementById('album-search-clear'),
      albumSetBanner: document.getElementById('album-set-banner'),
      albumSetTitle: document.getElementById('album-set-title'),
      albumSetSub: document.getElementById('album-set-sub'),
      btnAlbumOpenSet: document.getElementById('btn-album-open-set'),
      filterPills: document.querySelectorAll('#color-filters .filter-pill'),

      // Visualización Álbum y Ordenación
      albumSortSelect: document.getElementById('album-sort-select'),
      imageSortSelect: document.getElementById('image-sort-select'),
      btnViewGrid: document.getElementById('btn-view-grid'),
      btnViewList: document.getElementById('btn-view-list'),
      btnSizeDecrease: document.getElementById('btn-size-decrease'),
      btnSizeReset: document.getElementById('btn-size-reset'),
      btnSizeIncrease: document.getElementById('btn-size-increase'),
      albumGrid: document.getElementById('album-grid'),
      albumEmpty: document.getElementById('album-empty'),

      // Entrada por Código / Starter Decks
      starterDeckSelect: document.getElementById('starter-deck-select'),
      manualCodeInput: document.getElementById('manual-code-input'),
      prefixBtns: document.querySelectorAll('#quick-prefix-bar .prefix-btn'),
      btnManualSearch: document.getElementById('btn-manual-search'),
      setChips: document.querySelectorAll('.set-chip'),

      // Explorador de Sets
      setResultsContainer: document.getElementById('set-results-container'),
      setResultsTitle: document.getElementById('set-results-title'),
      setResultsSubtitle: document.getElementById('set-results-subtitle'),
      btnSetAddAllDeck: document.getElementById('btn-set-add-all-deck'),
      btnCloseSetResults: document.getElementById('btn-close-set-results'),
      btnSetViewGrid: document.getElementById('btn-set-view-grid'),
      btnSetViewList: document.getElementById('btn-set-view-list'),
      btnSetSizeDecrease: document.getElementById('btn-set-size-decrease'),
      btnSetSizeReset: document.getElementById('btn-set-size-reset'),
      btnSetSizeIncrease: document.getElementById('btn-set-size-increase'),
      setCardsGrid: document.getElementById('set-cards-grid'),
      setPaginationBar: document.getElementById('set-pagination-bar'),
      btnPrevPage: document.getElementById('btn-prev-page'),
      btnNextPage: document.getElementById('btn-next-page'),
      setPaginationInfo: document.getElementById('set-pagination-info'),

      // Modal Detalle Carta
      cardModal: document.getElementById('card-modal'),
      btnCloseModal: document.getElementById('btn-close-modal'),
      modalCardImg: document.getElementById('modal-card-img'),
      modalImgInteractiveWrap: document.getElementById('modal-img-interactive-wrap'),
      btnOpenZoomModal: document.getElementById('btn-open-zoom-modal'),
      modalCardId: document.getElementById('modal-card-id'),
      modalCardColor: document.getElementById('modal-card-color'),
      modalCardName: document.getElementById('modal-card-name'),
      modalCardTraits: document.getElementById('modal-card-traits'),
      modalCardMeta: document.getElementById('modal-card-meta'),
      modalExistingMsg: document.getElementById('modal-existing-msg'),
      modalMkmPriceVal: document.getElementById('modal-mkm-price-val'),
      modalLowPriceVal: document.getElementById('modal-low-price-val'),
      modalPriceDate: document.getElementById('modal-price-date'),
      modalCardFolderSelect: document.getElementById('modal-card-folder-select'),
      modalCustomQty: document.getElementById('modal-custom-qty'),
      qtyBtns: document.querySelectorAll('.qty-preset-group .qty-btn'),
      modalForecast: document.getElementById('modal-forecast'),
      btnSaveCardToAlbum: document.getElementById('btn-save-card-to-album'),

      // Modal Crear / Editar Carpeta
      folderModal: document.getElementById('folder-modal'),
      folderModalTitle: document.getElementById('folder-modal-title'),
      btnCloseFolderModal: document.getElementById('btn-close-folder-modal'),
      folderTypeGroup: document.getElementById('folder-type-group'),
      folderNameInput: document.getElementById('folder-name-input'),
      folderIconBtns: document.querySelectorAll('#folder-icon-picker .emoji-opt-btn'),
      folderColorBtns: document.querySelectorAll('#folder-color-picker .color-opt-circle'),
      btnCancelFolder: document.getElementById('btn-cancel-folder'),
      btnSaveFolder: document.getElementById('btn-save-folder'),

      // Modal Compartir Carpeta
      shareFolderModal: document.getElementById('share-folder-modal'),
      btnCloseShareFolderModal: document.getElementById('btn-close-share-folder-modal'),
      shareFolderIcon: document.getElementById('share-folder-icon'),
      shareFolderName: document.getElementById('share-folder-name'),
      shareLinkInput: document.getElementById('share-link-input'),
      btnCopyShareLink: document.getElementById('btn-copy-share-link'),
      btnDoneShareFolder: document.getElementById('btn-done-share-folder'),

      // Modal Unirse a Carpeta
      joinFolderModal: document.getElementById('join-folder-modal'),
      btnCloseJoinFolderModal: document.getElementById('btn-close-join-folder-modal'),
      joinFolderInput: document.getElementById('join-folder-input'),
      btnCancelJoinFolder: document.getElementById('btn-cancel-join-folder'),
      btnConfirmJoinFolder: document.getElementById('btn-confirm-join-folder'),

      // Modal Mover Carta
      moveFolderModal: document.getElementById('move-folder-modal'),
      btnCloseMoveFolderModal: document.getElementById('btn-close-move-folder-modal'),
      moveFolderCardImg: document.getElementById('move-folder-card-img'),
      moveFolderCardId: document.getElementById('move-folder-card-id'),
      moveFolderCardName: document.getElementById('move-folder-card-name'),
      moveFolderCurrentBadge: document.getElementById('move-folder-current-badge'),
      moveFolderOptionsList: document.getElementById('move-folder-options-list'),
      btnCancelMoveFolder: document.getElementById('btn-cancel-move-folder'),
      moveFolderQtyInput: document.getElementById('move-folder-qty-input'),
      btnMoveAllCopies: document.getElementById('btn-move-all-copies'),
      btnModalMoveFolder: document.getElementById('btn-modal-move-folder'),
      btnModalCopyFolder: document.getElementById('btn-modal-copy-folder'),
      modalFolderActionsChoice: document.getElementById('modal-folder-actions-choice'),
      modalStandardActions: document.getElementById('modal-standard-actions'),
      btnQtyOpenMoveModal: document.getElementById('btn-qty-open-move-modal'),
      btnMoveModeTransfer: document.getElementById('btn-move-mode-transfer'),
      btnMoveModeCopy: document.getElementById('btn-move-mode-copy'),
      moveFolderQtyTitle: document.getElementById('move-folder-qty-title'),

      // Botones rápidos de Importación
      btnImportActiveFolder: document.getElementById('btn-import-active-folder'),
      btnEmptyImportList: document.getElementById('btn-empty-import-list'),
      btnEmptyGoAdd: document.getElementById('btn-empty-go-add'),
      btnScannerImportDeck: document.getElementById('btn-scanner-import-deck'),
      btnPasteCreateFolder: document.getElementById('btn-paste-create-folder'),

      // Modal Editar Cantidad
      qtyEditModal: document.getElementById('qty-edit-modal'),
      btnCloseQtyModal: document.getElementById('btn-close-qty-modal'),
      qtyModalImg: document.getElementById('qty-modal-img'),
      qtyModalId: document.getElementById('qty-modal-id'),
      qtyModalName: document.getElementById('qty-modal-name'),
      qtyModalCurrentCount: document.getElementById('qty-modal-current-count'),
      btnQtyModalMinus: document.getElementById('btn-qty-modal-minus'),
      qtyModalDirectInput: document.getElementById('qty-modal-direct-input'),
      btnQtyModalPlus: document.getElementById('btn-qty-modal-plus'),
      btnQtyModalApply: document.getElementById('btn-qty-modal-apply'),
      removeQtyBtns: document.querySelectorAll('.qty-remove-presets-row .btn-remove-chip'),
      qtyModalRemoveCount: document.getElementById('qty-modal-remove-count'),
      btnQtyModalRemoveCustom: document.getElementById('btn-qty-modal-remove-custom'),
      btnQtyModalDeleteAll: document.getElementById('btn-qty-modal-delete-all'),

      // Lightbox Modal
      lightboxModal: document.getElementById('lightbox-modal'),
      btnCloseLightbox: document.getElementById('btn-close-lightbox'),
      lightboxCardImg: document.getElementById('lightbox-card-img'),
      lightboxCardCode: document.getElementById('lightbox-card-code'),
      lightboxCardName: document.getElementById('lightbox-card-name'),

      // Export Source & Wishlist
      exportFolderSelect: document.getElementById('export-folder-select'),
      exportSourceStatsBadge: document.getElementById('export-source-stats-badge'),
      btnExportWishlist: document.getElementById('btn-export-wishlist') || document.getElementById('btn-export-cardmarket'),
      btnExportCardmarket: document.getElementById('btn-export-cardmarket'),
      btnExportCardtrader: document.getElementById('btn-export-cardtrader'),
      btnExportSim: document.getElementById('btn-export-sim'),

      // Export / Import Spreadsheets
      btnExportSheets: document.getElementById('btn-export-sheets'),
      btnExportExcel: document.getElementById('btn-export-excel'),
      btnPasteSheets: document.getElementById('btn-paste-sheets'),
      csvFileInput: document.getElementById('csv-file-input'),
      importFolderSelect: document.getElementById('import-folder-select'),
      importTargetStatsBadge: document.getElementById('import-target-stats-badge'),
      pasteFolderSelect: document.getElementById('paste-folder-select'),
      pasteModal: document.getElementById('paste-modal'),
      btnClosePasteModal: document.getElementById('btn-close-paste-modal'),
      pasteTextarea: document.getElementById('paste-textarea'),
      btnCancelPasteImport: document.getElementById('btn-cancel-paste-import'),
      btnConfirmPasteImport: document.getElementById('btn-confirm-paste-import'),

      // Export Preview Modal
      exportPreviewModal: document.getElementById('export-preview-modal'),
      exportPreviewTitle: document.getElementById('export-preview-title'),
      exportPreviewSubtitle: document.getElementById('export-preview-subtitle'),
      exportPreviewTextarea: document.getElementById('export-preview-textarea'),
      btnCloseExportPreview: document.getElementById('btn-close-export-preview'),
      btnCopyExportPreview: document.getElementById('btn-copy-export-preview'),
      btnDoneExportPreview: document.getElementById('btn-done-export-preview'),

      // Exportación a Imagen (Poster / Binder) & Backup
      btnImageActiveFolder: document.getElementById('btn-image-active-folder'),
      btnExportFolderImage: document.getElementById('btn-export-folder-image'),
      btnExportJSON: document.getElementById('btn-export-json'),
      imageExportModal: document.getElementById('image-export-modal'),
      imageModalTitle: document.getElementById('image-modal-title'),
      btnCloseImageModal: document.getElementById('btn-close-image-modal'),
      btnImgThemeDark: document.getElementById('btn-img-theme-dark'),
      btnImgThemeMarine: document.getElementById('btn-img-theme-marine'),
      btnImgThemeGold: document.getElementById('btn-img-theme-gold'),
      imageThemeChips: document.querySelectorAll('.image-theme-chip'),
      imageGenStatus: document.getElementById('image-gen-status'),
      folderImageCanvas: document.getElementById('folder-image-canvas'),
      folderImageResult: document.getElementById('folder-image-result'),
      btnDownloadFolderImage: document.getElementById('btn-download-folder-image'),
      btnCopyFolderImage: document.getElementById('btn-copy-folder-image'),
      btnShareFolderImage: document.getElementById('btn-share-folder-image'),

      // Auth
      btnGoogleLogin: document.getElementById('btn-google-login'),
      userProfileMenu: document.getElementById('user-profile-menu'),
      userAvatar: document.getElementById('user-avatar'),
      userName: document.getElementById('user-name'),
      cloudSyncStatus: document.getElementById('cloud-sync-status'),
      btnLogout: document.getElementById('btn-logout')
    };
  }

  setupCardsDbSyncListeners() {
    window.addEventListener('cards-db-syncing', () => {
      if (this.dom.btnDbSync) {
        this.dom.btnDbSync.classList.add('syncing');
        if (this.dom.dbSyncLabel) this.dom.dbSyncLabel.textContent = 'Sincronizando...';
      }
    });

    window.addEventListener('cards-db-synced', (e) => {
      const count = e.detail ? e.detail.count : Object.keys(window.ONE_PIECE_CARDS_DB || {}).length;
      if (this.dom.btnDbSync) {
        this.dom.btnDbSync.classList.remove('syncing');
        if (this.dom.dbSyncLabel) this.dom.dbSyncLabel.textContent = `⚡ ${count.toLocaleString()} cartas`;
        this.dom.btnDbSync.title = `Base de datos al día con CDN punk-records (${count} cartas). Clic para comprobar actualizaciones.`;
      }
      if (e.detail && e.detail.newCards > 0) {
        this.showToast(`✨ Base de datos actualizada: +${e.detail.newCards} cartas nuevas`);
      }
      // Volver a pintar el álbum: las versiones alternativas ya tienen datos y código V.n
      this.renderAlbum();
      if (this.currentSearchMode === 'search' && this.lastCardSearchQuery) {
        this.handleSearch(this.lastCardSearchQuery);
      } else if (this.currentSearchMode === 'set' && this.currentSetCode) {
        this.showSetExplorer(this.currentSetCode);
      }
    });

    window.addEventListener('cards-db-sync-failed', () => {
      if (this.dom.btnDbSync) {
        this.dom.btnDbSync.classList.remove('syncing');
        const count = Object.keys(window.ONE_PIECE_CARDS_DB || {}).length;
        if (this.dom.dbSyncLabel) this.dom.dbSyncLabel.textContent = `⚡ ${count.toLocaleString()} cartas`;
      }
    });

    if (typeof ONE_PIECE_CARDS_DB !== 'undefined' && this.dom.dbSyncLabel) {
      const count = Object.keys(ONE_PIECE_CARDS_DB).length;
      this.dom.dbSyncLabel.textContent = `⚡ ${count.toLocaleString()} cartas`;
    }
  }

  bindEvents() {
    // Google Login & Logout
    if (this.dom.btnGoogleLogin) {
      this.dom.btnGoogleLogin.addEventListener('click', () => this.loginWithGoogle());
    }
    if (this.dom.btnLogout) {
      this.dom.btnLogout.addEventListener('click', () => this.logout());
    }

    // Navegación Inferior
    this.dom.navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        this.switchTab(target.replace('view-', ''));
      });
    });

    // Pestañas de Carpetas (Mis Carpetas vs Compartidas)
    if (this.dom.tabScopePersonal) {
      this.dom.tabScopePersonal.addEventListener('click', () => {
        this.setFolderScope('personal');
      });
    }
    if (this.dom.tabScopeShared) {
      this.dom.tabScopeShared.addEventListener('click', () => {
        this.setFolderScope('shared');
      });
    }

    // Botones de Crear y Unirse a Carpetas
    if (this.dom.btnAddFolder) {
      this.dom.btnAddFolder.addEventListener('click', () => {
        this.openCreateFolderModal();
      });
    }
    if (this.dom.btnJoinSharedFolder) {
      this.dom.btnJoinSharedFolder.addEventListener('click', () => {
        this.openJoinFolderModal();
      });
    }

    // Acciones de Carpeta Activa en el Banner
    if (this.dom.btnShareActiveFolder) {
      this.dom.btnShareActiveFolder.addEventListener('click', () => {
        this.openShareFolderModal(this.activeFolderId);
      });
    }
    if (this.dom.btnEditActiveFolder) {
      this.dom.btnEditActiveFolder.addEventListener('click', () => {
        this.openEditFolderModal(this.activeFolderId);
      });
    }
    if (this.dom.btnDeleteActiveFolder) {
      this.dom.btnDeleteActiveFolder.addEventListener('click', () => {
        this.deleteOrLeaveActiveFolder();
      });
    }
    if (this.dom.btnExportActiveFolder) {
      this.dom.btnExportActiveFolder.addEventListener('click', () => {
        this.exportActiveFolder();
      });
    }

    // Modal Crear / Editar Carpeta
    if (this.dom.btnCloseFolderModal) {
      this.dom.btnCloseFolderModal.addEventListener('click', () => this.closeFolderModal());
    }
    if (this.dom.btnCancelFolder) {
      this.dom.btnCancelFolder.addEventListener('click', () => this.closeFolderModal());
    }
    if (this.dom.folderIconBtns) {
      this.dom.folderIconBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.dom.folderIconBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }
    if (this.dom.folderColorBtns) {
      this.dom.folderColorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.dom.folderColorBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }
    if (this.dom.btnSaveFolder) {
      this.dom.btnSaveFolder.addEventListener('click', () => this.saveFolderFromModal());
    }

    // Modal Compartir
    if (this.dom.btnCloseShareFolderModal) {
      this.dom.btnCloseShareFolderModal.addEventListener('click', () => this.closeShareFolderModal());
    }
    if (this.dom.btnDoneShareFolder) {
      this.dom.btnDoneShareFolder.addEventListener('click', () => this.closeShareFolderModal());
    }
    if (this.dom.btnCopyShareLink) {
      this.dom.btnCopyShareLink.addEventListener('click', () => this.copyShareLinkToClipboard());
    }

    // Modal Unirse
    if (this.dom.btnCloseJoinFolderModal) {
      this.dom.btnCloseJoinFolderModal.addEventListener('click', () => this.closeJoinFolderModal());
    }
    if (this.dom.btnCancelJoinFolder) {
      this.dom.btnCancelJoinFolder.addEventListener('click', () => this.closeJoinFolderModal());
    }
    if (this.dom.btnConfirmJoinFolder) {
      this.dom.btnConfirmJoinFolder.addEventListener('click', () => this.submitJoinFolder());
    }

    // Modal Mover Carta
    if (this.dom.btnCloseMoveFolderModal) {
      this.dom.btnCloseMoveFolderModal.addEventListener('click', () => this.closeMoveFolderModal());
    }
    if (this.dom.btnCancelMoveFolder) {
      this.dom.btnCancelMoveFolder.addEventListener('click', () => this.closeMoveFolderModal());
    }
    if (this.dom.moveFolderModal) {
      this.dom.moveFolderModal.addEventListener('click', (e) => {
        if (e.target === this.dom.moveFolderModal) this.closeMoveFolderModal();
      });
    }
    if (this.dom.btnQtyOpenMoveModal) {
      this.dom.btnQtyOpenMoveModal.addEventListener('click', () => {
        const cardToMove = this.activeQtyCard;
        this.closeQtyModal();
        if (cardToMove) {
          this.openMoveFolderModal(cardToMove);
        }
      });
    }
    if (this.dom.btnMoveModeTransfer) {
      this.dom.btnMoveModeTransfer.addEventListener('click', () => {
        this.setMoveFolderModalMode('move');
      });
    }
    if (this.dom.btnMoveModeCopy) {
      this.dom.btnMoveModeCopy.addEventListener('click', () => {
        this.setMoveFolderModalMode('copy');
      });
    }

    // Botones Rápidos de Importación a Carpetas
    if (this.dom.btnImportActiveFolder) {
      this.dom.btnImportActiveFolder.addEventListener('click', () => {
        this.openImportPasteModal(this.activeFolderId || 'default');
      });
    }
    if (this.dom.btnEmptyImportList) {
      this.dom.btnEmptyImportList.addEventListener('click', () => {
        this.openImportPasteModal(this.activeFolderId || 'default');
      });
    }
    if (this.dom.btnEmptyGoAdd) {
      this.dom.btnEmptyGoAdd.addEventListener('click', () => {
        this.switchTab('scanner');
      });
    }
    if (this.dom.btnScannerImportDeck) {
      this.dom.btnScannerImportDeck.addEventListener('click', () => {
        this.openImportPasteModal(this.activeFolderId || 'default');
      });
    }
    if (this.dom.btnPasteCreateFolder) {
      this.dom.btnPasteCreateFolder.addEventListener('click', () => {
        this.openCreateFolderModal();
      });
    }
    if (this.dom.modalCardFolderSelect) {
      this.dom.modalCardFolderSelect.addEventListener('change', () => {
        this.updateModalForecast();
      });
    }
    if (this.dom.btnModalMoveFolder) {
      this.dom.btnModalMoveFolder.addEventListener('click', () => {
        if (!this.pendingCard) return;
        const currentFolderId = this.activeFolderId || 'default';
        const destFolderId = this.dom.modalCardFolderSelect ? this.dom.modalCardFolderSelect.value : currentFolderId;
        if (destFolderId === currentFolderId) return;
        const curOwned = this.getCardCountInActiveScope(this.pendingCard.id);
        const qtyToMove = Math.min(this.pendingQty, curOwned);
        if (qtyToMove <= 0) return;
        this.executeMoveCard(this.pendingCard, qtyToMove, currentFolderId, destFolderId, false);
        this.closeModal();
      });
    }
    if (this.dom.btnModalCopyFolder) {
      this.dom.btnModalCopyFolder.addEventListener('click', () => {
        if (!this.pendingCard) return;
        const currentFolderId = this.activeFolderId || 'default';
        const destFolderId = this.dom.modalCardFolderSelect ? this.dom.modalCardFolderSelect.value : currentFolderId;
        this.executeMoveCard(this.pendingCard, this.pendingQty, currentFolderId, destFolderId, true);
        this.closeModal();
      });
    }
    if (this.dom.importFolderSelect) {
      this.dom.importFolderSelect.addEventListener('change', () => {
        if (this.dom.pasteFolderSelect) {
          this.dom.pasteFolderSelect.value = this.dom.importFolderSelect.value;
        }
        this.updateImportTargetBadge();
      });
    }
    if (this.dom.pasteFolderSelect) {
      this.dom.pasteFolderSelect.addEventListener('change', () => {
        if (this.dom.importFolderSelect) {
          this.dom.importFolderSelect.value = this.dom.pasteFolderSelect.value;
        }
        this.updateImportTargetBadge();
      });
    }

    // Búsqueda en el Álbum
    this.dom.albumSearchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.dom.albumSearchClear.style.display = this.searchQuery ? 'block' : 'none';
      this.renderAlbum();
    });

    this.dom.albumSearchClear.addEventListener('click', () => {
      this.dom.albumSearchInput.value = '';
      this.searchQuery = '';
      this.dom.albumSearchClear.style.display = 'none';
      this.renderAlbum();
    });

    if (this.dom.btnAlbumOpenSet) {
      this.dom.btnAlbumOpenSet.addEventListener('click', () => {
        const setCode = normalizeSetCode(this.searchQuery);
        if (setCode) {
          this.switchTab('scanner');
          this.showSetExplorer(setCode);
        }
      });
    }

    // Selector de Ordenación de Álbum
    if (this.dom.albumSortSelect) {
      this.dom.albumSortSelect.value = this.albumSortOrder;
      this.dom.albumSortSelect.addEventListener('change', (e) => {
        this.albumSortOrder = e.target.value;
        localStorage.setItem('op_album_sort_order', this.albumSortOrder);
        this.renderAlbum();
      });
    }

    // Arrastrar cartas del álbum para crear un orden personalizado
    this.initAlbumDragSort();

    // Selector de Ordenación en Modal de Imagen
    if (this.dom.imageSortSelect) {
      this.dom.imageSortSelect.addEventListener('change', (e) => {
        this.currentImageSortOrder = e.target.value;
        if (this.currentImageFolderData) {
          this.renderFolderImage(this.currentImageTheme);
        }
      });
    }

    // Controles de Modo y Zoom Álbum
    if (this.dom.btnViewGrid) {
      this.dom.btnViewGrid.addEventListener('click', () => this.setAlbumViewMode('grid'));
    }
    if (this.dom.btnViewList) {
      this.dom.btnViewList.addEventListener('click', () => this.setAlbumViewMode('list'));
    }
    if (this.dom.btnSizeDecrease) {
      this.dom.btnSizeDecrease.addEventListener('click', () => this.adjustAlbumCardSize(-1));
    }
    if (this.dom.btnSizeReset) {
      this.dom.btnSizeReset.addEventListener('click', () => this.setAlbumCardSize('normal'));
    }
    if (this.dom.btnSizeIncrease) {
      this.dom.btnSizeIncrease.addEventListener('click', () => this.adjustAlbumCardSize(1));
    }

    // Filtros de Color
    this.dom.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.dom.filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeFilter = pill.getAttribute('data-color');
        this.renderAlbum();
      });
    });

    // Scanner / Búsqueda Manual
    if (this.dom.starterDeckSelect) {
      this.dom.starterDeckSelect.addEventListener('change', (e) => {
        const stCode = e.target.value;
        if (stCode) {
          this.dom.manualCodeInput.value = stCode;
          this.showSetExplorer(stCode);
        }
      });
    }

    if (this.dom.btnManualSearch) {
      this.dom.btnManualSearch.addEventListener('click', () => this.submitCodeInput());
    }

    if (this.dom.manualCodeInput) {
      this.dom.manualCodeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.submitCodeInput();
        }
      });
      // Quick prefix buttons click
      if (this.dom.prefixBtns) {
        this.dom.prefixBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            const pfx = btn.getAttribute('data-prefix');
            this.setSearchPrefix(pfx);
          });
        });
      }
    }

    if (this.dom.btnDbSync) {
      this.dom.btnDbSync.addEventListener('click', () => {
        if (typeof window.syncCardsDatabase === 'function') {
          this.showToast('🔄 Comprobando nuevas cartas en CDN...');
          window.syncCardsDatabase(true);
        }
      });
    }

    const chipsScroll = document.querySelector('.set-chips-scroll');
    if (chipsScroll) {
      chipsScroll.addEventListener('click', (e) => {
        const chip = e.target.closest('.set-chip');
        if (!chip) return;
        chipsScroll.querySelectorAll('.set-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const setAttr = chip.getAttribute('data-set');
        this.dom.manualCodeInput.value = setAttr;
        const normalizedSet = normalizeSetCode(setAttr);
        if (normalizedSet) {
          this.showSetExplorer(normalizedSet);
        } else {
          this.dom.manualCodeInput.focus();
        }
      });
    }

    // Explorador de Sets
    if (this.dom.btnSetAddAllDeck) {
      this.dom.btnSetAddAllDeck.addEventListener('click', () => {
        if (this.currentSetCode) {
          this.addEntireDeckToCollection(this.currentSetCode);
        }
      });
    }

    if (this.dom.btnCloseSetResults) {
      this.dom.btnCloseSetResults.addEventListener('click', () => {
        this.dom.setResultsContainer.style.display = 'none';
        this.currentSetCode = null;
        this.searchResults = [];
      });
    }

    if (this.dom.btnSetViewGrid) {
      this.dom.btnSetViewGrid.addEventListener('click', () => this.setSetViewMode('grid'));
    }
    if (this.dom.btnSetViewList) {
      this.dom.btnSetViewList.addEventListener('click', () => this.setSetViewMode('list'));
    }
    if (this.dom.btnSetSizeDecrease) {
      this.dom.btnSetSizeDecrease.addEventListener('click', () => this.adjustSetCardSize(-1));
    }
    if (this.dom.btnSetSizeReset) {
      this.dom.btnSetSizeReset.addEventListener('click', () => this.setSetCardSize('normal'));
    }
    if (this.dom.btnSetSizeIncrease) {
      this.dom.btnSetSizeIncrease.addEventListener('click', () => this.adjustSetCardSize(1));
    }

    if (this.dom.btnPrevPage) {
      this.dom.btnPrevPage.addEventListener('click', () => this.changeSearchPage(-1));
    }
    if (this.dom.btnNextPage) {
      this.dom.btnNextPage.addEventListener('click', () => this.changeSearchPage(1));
    }

    // Modal de Carta
    this.dom.qtyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.qtyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.pendingQty = parseInt(btn.getAttribute('data-q')) || 1;
        this.dom.modalCustomQty.value = this.pendingQty;
        this.updateModalForecast();
      });
    });

    this.dom.modalCustomQty.addEventListener('input', (e) => {
      const val = parseInt(e.target.value) || 1;
      this.pendingQty = Math.max(1, val);
      this.dom.qtyBtns.forEach(b => {
        b.classList.toggle('active', parseInt(b.getAttribute('data-q')) === this.pendingQty);
      });
      this.updateModalForecast();
    });

    this.dom.btnSaveCardToAlbum.addEventListener('click', () => {
      if (this.pendingCard) {
        const destFolderId = this.dom.modalCardFolderSelect ? this.dom.modalCardFolderSelect.value : 'default';
        this.addCardToTargetFolder(this.pendingCard, this.pendingQty, destFolderId);
        this.closeModal();
      }
    });

    this.dom.btnCloseModal.addEventListener('click', () => this.closeModal());
    this.dom.cardModal.addEventListener('click', (e) => {
      if (e.target === this.dom.cardModal) this.closeModal();
    });

    if (this.dom.modalImgInteractiveWrap) {
      this.dom.modalImgInteractiveWrap.addEventListener('click', () => {
        if (this.pendingCard) this.openLightbox(this.pendingCard);
      });
    }
    if (this.dom.btnOpenZoomModal) {
      this.dom.btnOpenZoomModal.addEventListener('click', () => {
        if (this.pendingCard) this.openLightbox(this.pendingCard);
      });
    }

    // Modal Cantidad Rápida
    if (this.dom.btnCloseQtyModal) {
      this.dom.btnCloseQtyModal.addEventListener('click', () => this.closeQtyModal());
    }
    if (this.dom.qtyEditModal) {
      this.dom.qtyEditModal.addEventListener('click', (e) => {
        if (e.target === this.dom.qtyEditModal) this.closeQtyModal();
      });
    }
    if (this.dom.btnQtyModalMinus) {
      this.dom.btnQtyModalMinus.addEventListener('click', () => {
        const cur = parseInt(this.dom.qtyModalDirectInput.value) || 0;
        this.dom.qtyModalDirectInput.value = Math.max(0, cur - 1);
      });
    }
    if (this.dom.btnQtyModalPlus) {
      this.dom.btnQtyModalPlus.addEventListener('click', () => {
        const cur = parseInt(this.dom.qtyModalDirectInput.value) || 0;
        this.dom.qtyModalDirectInput.value = cur + 1;
      });
    }
    if (this.dom.btnQtyModalApply) {
      this.dom.btnQtyModalApply.addEventListener('click', () => {
        const exactQty = parseInt(this.dom.qtyModalDirectInput.value) || 0;
        if (this.activeQtyCard) {
          this.setExactCardCount(this.activeQtyCard.id, exactQty);
          this.closeQtyModal();
        }
      });
    }
    this.dom.removeQtyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const removeCount = parseInt(btn.getAttribute('data-remove')) || 1;
        if (this.activeQtyCard) {
          this.adjustCardCount(this.activeQtyCard.id, -removeCount);
          this.closeQtyModal();
        }
      });
    });
    if (this.dom.btnQtyModalRemoveCustom) {
      this.dom.btnQtyModalRemoveCustom.addEventListener('click', () => {
        const removeCount = parseInt(this.dom.qtyModalRemoveCount.value) || 1;
        if (this.activeQtyCard) {
          this.adjustCardCount(this.activeQtyCard.id, -removeCount);
          this.closeQtyModal();
        }
      });
    }
    if (this.dom.btnQtyModalDeleteAll) {
      this.dom.btnQtyModalDeleteAll.addEventListener('click', () => {
        if (this.activeQtyCard) {
          this.setExactCardCount(this.activeQtyCard.id, 0);
          this.closeQtyModal();
        }
      });
    }

    // Lightbox Modal
    if (this.dom.btnCloseLightbox) {
      this.dom.btnCloseLightbox.addEventListener('click', () => this.closeLightbox());
    }
    if (this.dom.lightboxModal) {
      this.dom.lightboxModal.addEventListener('click', (e) => {
        if (e.target === this.dom.lightboxModal) this.closeLightbox();
      });
    }

    // Exportar - Selector de carpeta origen
    if (this.dom.exportFolderSelect) {
      this.dom.exportFolderSelect.addEventListener('change', () => {
        this.updateExportStatsBadge();
      });
    }

    // Exportar - Lista de Deseos (Wishlist) & Tiendas
    if (this.dom.btnExportWishlist) {
      this.dom.btnExportWishlist.addEventListener('click', () => {
        this.exportCardmarketWants();
      });
    }
    if (this.dom.btnExportCardmarket) {
      this.dom.btnExportCardmarket.addEventListener('click', () => {
        this.exportCardmarketWants();
      });
    }
    if (this.dom.btnExportCardtrader) {
      this.dom.btnExportCardtrader.addEventListener('click', () => {
        this.exportCardTraderWishlist();
      });
    }
    if (this.dom.btnExportSim) {
      this.dom.btnExportSim.addEventListener('click', () => {
        this.exportSimulatorDecklist();
      });
    }

    // Exportar / Importar Hojas de Cálculo
    if (this.dom.btnExportSheets) {
      this.dom.btnExportSheets.addEventListener('click', () => this.copyToGoogleSheets());
    }
    if (this.dom.btnExportExcel) {
      this.dom.btnExportExcel.addEventListener('click', () => this.downloadExcelCSV());
    }
    if (this.dom.csvFileInput) {
      this.dom.csvFileInput.addEventListener('change', (e) => this.handleExcelCSVImport(e));
    }
    if (this.dom.btnPasteSheets) {
      this.dom.btnPasteSheets.addEventListener('click', () => {
        const target = this.dom.importFolderSelect ? this.dom.importFolderSelect.value : (this.activeFolderId || 'default');
        this.openImportPasteModal(target);
      });
    }
    if (this.dom.btnClosePasteModal) {
      this.dom.btnClosePasteModal.addEventListener('click', () => this.dom.pasteModal.classList.remove('active'));
    }
    if (this.dom.btnCancelPasteImport) {
      this.dom.btnCancelPasteImport.addEventListener('click', () => this.dom.pasteModal.classList.remove('active'));
    }
    if (this.dom.btnConfirmPasteImport) {
      this.dom.btnConfirmPasteImport.addEventListener('click', () => {
        const text = this.dom.pasteTextarea.value;
        const targetFolder = this.dom.pasteFolderSelect ? this.dom.pasteFolderSelect.value : (this.activeFolderId || 'default');
        if (text && text.trim()) {
          this.parseAndImportDelimitedText(text, targetFolder);
          this.dom.pasteModal.classList.remove('active');
        } else {
          this.showToast("Pega texto de filas o lista primero");
        }
      });
    }

    // Modal Vista Previa de Exportación
    if (this.dom.btnCloseExportPreview) {
      this.dom.btnCloseExportPreview.addEventListener('click', () => {
        if (this.dom.exportPreviewModal) this.dom.exportPreviewModal.classList.remove('active');
      });
    }
    if (this.dom.btnDoneExportPreview) {
      this.dom.btnDoneExportPreview.addEventListener('click', () => {
        if (this.dom.exportPreviewModal) this.dom.exportPreviewModal.classList.remove('active');
      });
    }
    if (this.dom.btnCopyExportPreview) {
      this.dom.btnCopyExportPreview.addEventListener('click', () => {
        this.copyFromExportPreview();
      });
    }

    // Exportación a Imagen y Backup
    if (this.dom.btnImageActiveFolder) {
      this.dom.btnImageActiveFolder.addEventListener('click', () => {
        this.openFolderImageModalForActive();
      });
    }
    if (this.dom.btnExportFolderImage) {
      this.dom.btnExportFolderImage.addEventListener('click', () => {
        this.openFolderImageModalForSelected();
      });
    }
    if (this.dom.btnExportJSON) {
      this.dom.btnExportJSON.addEventListener('click', () => {
        this.exportFolderJSON();
      });
    }
    if (this.dom.btnCloseImageModal) {
      this.dom.btnCloseImageModal.addEventListener('click', () => {
        this.closeFolderImageModal();
      });
    }
    if (this.dom.imageExportModal) {
      this.dom.imageExportModal.addEventListener('click', (e) => {
        if (e.target === this.dom.imageExportModal) this.closeFolderImageModal();
      });
    }
    if (this.dom.imageThemeChips) {
      this.dom.imageThemeChips.forEach(chip => {
        chip.addEventListener('click', () => {
          const theme = chip.getAttribute('data-theme') || 'dark';
          this.switchImageTheme(theme);
        });
      });
    }
    if (this.dom.btnDownloadFolderImage) {
      this.dom.btnDownloadFolderImage.addEventListener('click', () => {
        this.downloadFolderImage();
      });
    }
    if (this.dom.btnCopyFolderImage) {
      this.dom.btnCopyFolderImage.addEventListener('click', () => {
        this.copyFolderImageToClipboard();
      });
    }
    if (this.dom.btnShareFolderImage) {
      this.dom.btnShareFolderImage.addEventListener('click', () => {
        this.shareFolderImage();
      });
    }
  }

  // =========================================================================
  // GESTIÓN DE CARPETAS (PERSONALES Y COMPARTIDAS)
  // =========================================================================

  setFolderScope(scope) {
    this.folderScope = scope;
    if (this.dom.tabScopePersonal && this.dom.tabScopeShared) {
      this.dom.tabScopePersonal.classList.toggle('active', scope === 'personal');
      this.dom.tabScopeShared.classList.toggle('active', scope === 'shared');
    }

    // Si cambiamos de pestaña, seleccionar la primera carpeta disponible
    if (scope === 'personal') {
      const exists = this.personalFolders.some(f => f.id === this.activeFolderId);
      if (!exists) this.activeFolderId = 'default';
    } else {
      const sharedList = this.getSharedFoldersList();
      if (sharedList.length > 0) {
        const exists = sharedList.some(f => f.id === this.activeFolderId);
        if (!exists) this.activeFolderId = sharedList[0].id;
        if (this.activeFolderId) {
          this.setupSharedFolderRealtimeListener(this.activeFolderId);
        }
      } else {
        this.activeFolderId = null;
      }
    }

    this.renderFolderTabs();
    this.renderAlbum();
    this.updateActiveFolderBanner();
  }

  getSharedFoldersList() {
    const list = [];
    this.sharedFolderIds.forEach(id => {
      const f = this.sharedFoldersMap.get(id);
      if (f) {
        list.push(f);
      } else {
        list.push({ id, name: 'Cargando...', icon: '👥', color: '#3b82f6', type: 'shared', cards: [] });
      }
    });
    return list;
  }

  renderFolderTabs() {
    if (!this.dom.foldersPillsContainer) return;
    this.dom.foldersPillsContainer.innerHTML = '';

    // Actualizar badge del contador de compartidas
    if (this.dom.sharedBadgeCount) {
      this.dom.sharedBadgeCount.textContent = this.sharedFolderIds.length;
    }

    let foldersToShow = [];
    if (this.folderScope === 'personal') {
      foldersToShow = this.personalFolders;
    } else {
      foldersToShow = this.getSharedFoldersList();
    }

    if (foldersToShow.length === 0) {
      const emptySpan = document.createElement('span');
      emptySpan.style.fontSize = '0.78rem';
      emptySpan.style.color = '#94a3b8';
      emptySpan.style.padding = '6px 0';
      emptySpan.textContent = this.folderScope === 'personal'
        ? 'No tienes carpetas personales creadas.'
        : 'No te has unido a ninguna carpeta compartida aún.';
      this.dom.foldersPillsContainer.appendChild(emptySpan);
      this.updateActiveFolderBanner();
      return;
    }

    foldersToShow.forEach(f => {
      const tabBtn = document.createElement('button');
      tabBtn.type = 'button';
      tabBtn.className = `folder-tab ${f.id === this.activeFolderId ? 'active' : ''}`;
      
      let count = 0;
      if (this.folderScope === 'personal') {
        count = (f.id === 'default')
          ? this.collection.reduce((sum, c) => sum + (c.count || 0), 0)
          : this.collection.filter(c => c.folderId === f.id).reduce((sum, c) => sum + (c.count || 0), 0);
      } else {
        count = (f.cards || []).reduce((sum, c) => sum + (c.count || 0), 0);
      }

      tabBtn.innerHTML = `
        <span>${f.icon || (this.folderScope === 'personal' ? '📁' : '👥')}</span>
        <span>${f.name}</span>
        <span class="folder-tab-badge">${count}</span>
      `;

      tabBtn.addEventListener('click', () => {
        this.selectFolder(f.id);
      });

      this.dom.foldersPillsContainer.appendChild(tabBtn);
    });

    this.updateActiveFolderBanner();
  }

  selectFolder(folderId) {
    this.activeFolderId = folderId;
    this.renderFolderTabs();
    this.renderAlbum();

    // Si es carpeta compartida, asegurar listener en tiempo real
    if (this.folderScope === 'shared' && folderId) {
      this.setupSharedFolderRealtimeListener(folderId);
    }
  }

  updateActiveFolderBanner() {
    if (!this.dom.folderActiveBanner) return;

    if (this.folderScope === 'personal') {
      if (this.activeFolderId === 'default' || !this.activeFolderId) {
        this.dom.folderActiveBanner.style.display = 'none';
        return;
      }
      const folder = this.personalFolders.find(f => f.id === this.activeFolderId);
      if (!folder) {
        this.dom.folderActiveBanner.style.display = 'none';
        return;
      }

      this.dom.folderActiveBanner.style.display = 'flex';
      this.dom.folderActiveIcon.textContent = folder.icon || '📁';
      this.dom.folderActiveTitle.textContent = folder.name;
      if (this.dom.folderActiveTypeBadge) {
        this.dom.folderActiveTypeBadge.className = 'folder-type-badge';
        this.dom.folderActiveTypeBadge.textContent = '📁 Personal';
      }

      const totalCards = this.collection.filter(c => c.folderId === folder.id).reduce((s, c) => s + (c.count || 0), 0);
      this.dom.folderActiveCount.textContent = `${totalCards} carta(s) en esta carpeta`;

      if (this.dom.btnShareActiveFolder) {
        this.dom.btnShareActiveFolder.style.display = 'none';
      }
      if (this.dom.btnDeleteActiveFolder) {
        this.dom.btnDeleteActiveFolder.textContent = '🗑️ Eliminar';
      }
    } else {
      // Ámbito Compartidas
      if (!this.activeFolderId || this.sharedFolderIds.length === 0) {
        this.dom.folderActiveBanner.style.display = 'none';
        return;
      }

      const folder = this.sharedFoldersMap.get(this.activeFolderId);
      if (!folder) {
        this.dom.folderActiveBanner.style.display = 'none';
        return;
      }

      this.dom.folderActiveBanner.style.display = 'flex';
      this.dom.folderActiveIcon.textContent = folder.icon || '👥';
      this.dom.folderActiveTitle.textContent = folder.name;
      if (this.dom.folderActiveTypeBadge) {
        this.dom.folderActiveTypeBadge.className = 'folder-type-badge shared';
        this.dom.folderActiveTypeBadge.textContent = '👥 Compartida';
      }

      const totalCards = (folder.cards || []).reduce((s, c) => s + (c.count || 0), 0);
      this.dom.folderActiveCount.textContent = `${totalCards} carta(s) en esta carpeta`;

      if (this.dom.btnShareActiveFolder) {
        this.dom.btnShareActiveFolder.style.display = 'inline-flex';
      }
      if (this.dom.btnDeleteActiveFolder) {
        this.dom.btnDeleteActiveFolder.textContent = '🚪 Salir';
      }
    }
  }

  // =========================================================================
  // CREACIÓN Y EDICIÓN DE CARPETAS (MODAL)
  // =========================================================================

  openCreateFolderModal() {
    this.editingFolderId = null;
    this.dom.folderModalTitle.textContent = '📁 Nueva Carpeta';
    this.dom.folderNameInput.value = '';
    
    // Mostrar selector de tipo de carpeta
    if (this.dom.folderTypeGroup) {
      this.dom.folderTypeGroup.style.display = 'block';
      const radios = document.querySelectorAll('input[name="folder-type-choice"]');
      radios.forEach(r => {
        r.checked = (r.value === this.folderScope);
      });
    }

    // Resetear emojis y colores
    this.dom.folderIconBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
    this.dom.folderColorBtns.forEach((b, i) => b.classList.toggle('active', i === 0));

    this.dom.folderModal.classList.add('active');
    setTimeout(() => this.dom.folderNameInput.focus(), 100);
  }

  openEditFolderModal(folderId) {
    if (!folderId || folderId === 'default') return;
    this.editingFolderId = folderId;

    let folder = null;
    if (this.folderScope === 'personal') {
      folder = this.personalFolders.find(f => f.id === folderId);
    } else {
      folder = this.sharedFoldersMap.get(folderId);
    }
    if (!folder) return;

    this.dom.folderModalTitle.textContent = `✏️ Editar Carpeta`;
    this.dom.folderNameInput.value = folder.name || '';

    // En edición ocultamos el selector de tipo (no se cambia de tipo)
    if (this.dom.folderTypeGroup) {
      this.dom.folderTypeGroup.style.display = 'none';
    }

    this.dom.folderIconBtns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-icon') === folder.icon);
    });
    this.dom.folderColorBtns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-color') === folder.color);
    });

    this.dom.folderModal.classList.add('active');
  }

  closeFolderModal() {
    this.dom.folderModal.classList.remove('active');
    this.editingFolderId = null;
  }

  async saveFolderFromModal() {
    const name = this.dom.folderNameInput.value.trim();
    if (!name) {
      this.showToast("⚠️ Introduce un nombre para la carpeta");
      this.dom.folderNameInput.focus();
      return;
    }

    const activeIconEl = document.querySelector('#folder-icon-picker .emoji-opt-btn.active');
    const icon = activeIconEl ? activeIconEl.getAttribute('data-icon') : '📁';

    const activeColorEl = document.querySelector('#folder-color-picker .color-opt-circle.active');
    const color = activeColorEl ? activeColorEl.getAttribute('data-color') : '#f59e0b';

    if (this.editingFolderId) {
      // Editar carpeta existente
      if (this.folderScope === 'personal') {
        const folder = this.personalFolders.find(f => f.id === this.editingFolderId);
        if (folder) {
          folder.name = name;
          folder.icon = icon;
          folder.color = color;
          this.saveFolders();
          this.showToast(`✏️ Carpeta "${name}" actualizada`);
        }
      } else {
        // Carpeta compartida en Firestore
        await this.updateSharedFolderMetaInFirestore(this.editingFolderId, { name, icon, color });
        this.showToast(`✏️ Carpeta compartida "${name}" actualizada`);
      }
      this.closeFolderModal();
    } else {
      // Crear nueva carpeta
      const typeRadio = document.querySelector('input[name="folder-type-choice"]:checked');
      const folderType = typeRadio ? typeRadio.value : 'personal';

      if (folderType === 'personal') {
        const newFolder = {
          id: 'pf_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
          name,
          icon,
          color,
          type: 'personal',
          createdAt: new Date().toISOString()
        };
        this.personalFolders.push(newFolder);
        this.folderScope = 'personal';
        this.activeFolderId = newFolder.id;
        this.saveFolders();
        this.populateImportFolderSelects();
        this.populateExportFolderSelect();
        if (this.dom.pasteFolderSelect) this.dom.pasteFolderSelect.value = newFolder.id;
        this.closeFolderModal();
        this.showToast(`📁 Carpeta personal "${name}" creada`);
      } else {
        // Carpeta Compartida Colaborativa
        this.closeFolderModal();
        await this.createSharedFolderInFirestore({ name, icon, color });
      }
    }
  }

  async deleteOrLeaveActiveFolder() {
    if (!this.activeFolderId || this.activeFolderId === 'default') return;

    if (this.folderScope === 'personal') {
      const folder = this.personalFolders.find(f => f.id === this.activeFolderId);
      if (!folder) return;

      const confirmDel = confirm(`¿Estás seguro de eliminar la carpeta personal "${folder.name}"? Las cartas pasarán al Álbum General.`);
      if (!confirmDel) return;

      this.collection.forEach(c => {
        if (c.folderId === folder.id) {
          c.folderId = 'default';
        }
      });
      this.personalFolders = this.personalFolders.filter(f => f.id !== folder.id);
      this.activeFolderId = 'default';
      this.saveCollection();
      this.saveFolders();
      this.showToast(`🗑️ Carpeta "${folder.name}" eliminada`);
    } else {
      const folder = this.sharedFoldersMap.get(this.activeFolderId);
      const folderName = folder ? folder.name : 'Compartida';
      const confirmLeave = confirm(`¿Deseas salir de la carpeta compartida "${folderName}"? Dejarás de ver sus cartas.`);
      if (!confirmLeave) return;

      this.sharedFolderIds = this.sharedFolderIds.filter(id => id !== this.activeFolderId);
      this.saveFolders();
      
      const nextList = this.getSharedFoldersList();
      this.activeFolderId = nextList.length > 0 ? nextList[0].id : null;
      this.renderFolderTabs();
      this.renderAlbum();
      this.showToast(`🚪 Has salido de la carpeta "${folderName}"`);
    }
  }

  // =========================================================================
  // SISTEMA FIRESTORE: CARPETAS COMPARTIDAS EN TIEMPO REAL
  // =========================================================================

  async createSharedFolderInFirestore({ name, icon, color }) {
    const newFolderId = 'sh_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
    const ownerUid = this.currentUser ? this.currentUser.uid : 'anon_' + Math.random().toString(36).substr(2, 8);
    const ownerName = this.currentUser ? (this.currentUser.displayName || 'Capitán') : 'Amigo';

    const newSharedFolder = {
      id: newFolderId,
      name,
      icon,
      color,
      type: 'shared',
      ownerUid,
      ownerName,
      members: [ownerUid],
      cards: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Guardar en mapa local y lista
    this.sharedFoldersMap.set(newFolderId, newSharedFolder);
    if (!this.sharedFolderIds.includes(newFolderId)) {
      this.sharedFolderIds.push(newFolderId);
    }
    this.folderScope = 'shared';
    this.activeFolderId = newFolderId;
    this.saveFolders();
    this.populateImportFolderSelects();
    this.populateExportFolderSelect();
    if (this.dom.pasteFolderSelect) this.dom.pasteFolderSelect.value = newFolderId;

    // Sincronizar con Firestore si está disponible
    if (window.FIREBASE_DB) {
      try {
        await window.FIREBASE_DB.collection('shared_folders').doc(newFolderId).set({
          ...newSharedFolder,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        this.setupSharedFolderRealtimeListener(newFolderId);
      } catch (err) {
        console.error("Error al crear carpeta compartida en Firestore:", err);
      }
    }

    this.showToast(`👥 ¡Carpeta compartida "${name}" creada!`);
    // Abrir automáticamente el modal de compartir con el enlace listo
    this.openShareFolderModal(newFolderId);
  }

  async updateSharedFolderMetaInFirestore(folderId, meta) {
    const local = this.sharedFoldersMap.get(folderId);
    if (local) {
      Object.assign(local, meta);
      this.renderFolderTabs();
      this.renderAlbum();
    }

    if (window.FIREBASE_DB) {
      try {
        await window.FIREBASE_DB.collection('shared_folders').doc(folderId).update({
          ...meta,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (err) {
        console.error("Error al actualizar meta de carpeta compartida:", err);
      }
    }
  }

  setupSharedFolderRealtimeListener(folderId) {
    if (!window.FIREBASE_DB || !folderId) return;

    // Evitar listeners duplicados para el mismo folderId
    if (this.sharedFoldersUnsubs.has(folderId)) return;

    const docRef = window.FIREBASE_DB.collection('shared_folders').doc(folderId);
    const unsub = docRef.onSnapshot((doc) => {
      if (doc.exists) {
        const data = doc.data();
        this.sharedFoldersMap.set(folderId, data);
        this.saveSharedFoldersCache();
        this.renderFolderTabs();
        if (this.folderScope === 'shared' && this.activeFolderId === folderId) {
          this.renderAlbum();
        }
      } else {
        console.warn(`Carpeta compartida ${folderId} no existe en Firestore.`);
      }
    }, (error) => {
      console.error(`Error en listener de carpeta compartida ${folderId}:`, error);
    });

    this.sharedFoldersUnsubs.set(folderId, unsub);
  }

  setupAllSharedFolderListeners() {
    this.sharedFolderIds.forEach(id => {
      this.setupSharedFolderRealtimeListener(id);
    });
  }

  // =========================================================================
  // ENLACES COMPARTIDOS: INVITACIÓN Y UNIÓN AUTOMÁTICA
  // =========================================================================

  openShareFolderModal(folderId) {
    let folder = this.sharedFoldersMap.get(folderId);
    if (!folder && this.folderScope === 'personal') {
      folder = this.personalFolders.find(f => f.id === folderId);
    }

    if (!folder) return;

    this.dom.shareFolderIcon.textContent = folder.icon || '👥';
    this.dom.shareFolderName.textContent = folder.name;

    // Generar enlace universal
    const url = new URL(window.location.href);
    url.searchParams.set('share', folder.id);
    this.dom.shareLinkInput.value = url.toString();

    this.dom.shareFolderModal.classList.add('active');
  }

  closeShareFolderModal() {
    this.dom.shareFolderModal.classList.remove('active');
  }

  async copyShareLinkToClipboard() {
    const link = this.dom.shareLinkInput.value;
    try {
      await navigator.clipboard.writeText(link);
      this.showToast("📋 ¡Enlace copiado! Envíalo a tus amigos.");
    } catch (e) {
      this.dom.shareLinkInput.select();
      document.execCommand('copy');
      this.showToast("📋 ¡Enlace copiado!");
    }
  }

  openJoinFolderModal() {
    this.dom.joinFolderInput.value = '';
    this.dom.joinFolderModal.classList.add('active');
    setTimeout(() => this.dom.joinFolderInput.focus(), 100);
  }

  closeJoinFolderModal() {
    this.dom.joinFolderModal.classList.remove('active');
  }

  async submitJoinFolder() {
    const raw = this.dom.joinFolderInput.value.trim();
    if (!raw) {
      this.showToast("⚠️ Pega un enlace o código de carpeta");
      return;
    }

    let folderId = raw;
    if (raw.includes('share=')) {
      try {
        const url = new URL(raw);
        folderId = url.searchParams.get('share') || raw;
      } catch (e) {
        const match = raw.match(/share=([a-zA-Z0-9_-]+)/);
        if (match) folderId = match[1];
      }
    }

    await this.joinSharedFolder(folderId);
    this.closeJoinFolderModal();
  }

  async joinSharedFolder(folderId) {
    if (!folderId) return;

    // Añadir a lista si no estaba
    if (!this.sharedFolderIds.includes(folderId)) {
      this.sharedFolderIds.push(folderId);
    }
    this.saveFolders();

    this.folderScope = 'shared';
    this.activeFolderId = folderId;

    if (window.FIREBASE_DB) {
      try {
        const docRef = window.FIREBASE_DB.collection('shared_folders').doc(folderId);
        const doc = await docRef.get();
        if (doc.exists) {
          const data = doc.data();
          this.sharedFoldersMap.set(folderId, data);
          
          // Registrar usuario en miembros
          if (this.currentUser) {
            await docRef.update({
              members: firebase.firestore.FieldValue.arrayUnion(this.currentUser.uid)
            });
          }

          this.setupSharedFolderRealtimeListener(folderId);
          this.renderFolderTabs();
          this.renderAlbum();
          this.showToast(`👥 ¡Te has unido a "${data.name}"!`);
          return;
        } else {
          this.showToast(`⚠️ No se encontró la carpeta compartida (${folderId})`);
        }
      } catch (err) {
        console.error("Error al unirse a carpeta compartida:", err);
      }
    }

    this.renderFolderTabs();
    this.renderAlbum();
    this.showToast(`👥 Te has unido a la carpeta compartida`);
  }

  checkUrlForSharedFolder() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const shareId = urlParams.get('share');
      if (shareId) {
        this.joinSharedFolder(shareId);
        // Limpiar URL sin recargar para estética
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }
    } catch (e) {
      console.warn("Error al comprobar parámetro share en URL:", e);
    }
  }

  // =========================================================================
  // DESTINO DE CARTAS Y OPERACIONES MULTI-CARPETA
  // =========================================================================

  populateFolderSelects() {
    if (!this.dom.modalCardFolderSelect) return;
    this.fillFolderSelect(this.dom.modalCardFolderSelect);

    // Preseleccionar carpeta activa actual
    if (this.activeFolderId) {
      this.dom.modalCardFolderSelect.value = this.activeFolderId;
    }
  }

  populateImportFolderSelects() {
    [this.dom.importFolderSelect, this.dom.pasteFolderSelect].forEach(select => {
      if (!select) return;
      const prevValue = select.value || this.activeFolderId || 'default';
      this.fillFolderSelect(select);
      select.value = prevValue;
      if (!select.value) select.value = 'default';
    });
  }

  // Rellena un <select> con: Álbum General, carpetas personales y compartidas
  fillFolderSelect(select) {
    select.innerHTML = '';

    const optDefault = document.createElement('option');
    optDefault.value = 'default';
    optDefault.textContent = '📁 Álbum General (Personal)';
    select.appendChild(optDefault);

    this.personalFolders.forEach(f => {
      if (f.id === 'default') return;
      const opt = document.createElement('option');
      opt.value = f.id;
      opt.textContent = `${f.icon || '📁'} ${f.name} (Personal)`;
      select.appendChild(opt);
    });

    const sharedList = this.getSharedFoldersList();
    if (sharedList.length > 0) {
      const optGroup = document.createElement('optgroup');
      optGroup.label = '👥 Carpetas Compartidas';
      sharedList.forEach(f => {
        const opt = document.createElement('option');
        opt.value = f.id;
        opt.textContent = `${f.icon || '👥'} ${f.name} (Compartida)`;
        optGroup.appendChild(opt);
      });
      select.appendChild(optGroup);
    }
  }

  updateImportTargetBadge() {
    if (!this.dom.importTargetStatsBadge) return;
    const folderId = (this.dom.importFolderSelect && this.dom.importFolderSelect.value) || 'default';

    let cards;
    const shared = this.sharedFoldersMap.get(folderId);
    if (shared) {
      cards = shared.cards || [];
    } else if (folderId === 'default') {
      cards = this.collection.filter(c => !c.folderId || c.folderId === 'default');
    } else {
      cards = this.collection.filter(c => c.folderId === folderId);
    }

    const totalCopies = cards.reduce((sum, c) => sum + (c.count || 0), 0);
    this.dom.importTargetStatsBadge.textContent = `${totalCopies} cartas (${cards.length} únicas)`;
  }

  async addCardToTargetFolder(card, qty, targetFolderId) {
    const isShared = this.sharedFolderIds.includes(targetFolderId) || this.sharedFoldersMap.has(targetFolderId);

    if (isShared) {
      // Guardar en Carpeta Compartida
      await this.addCardToSharedFolder(targetFolderId, card, qty);
    } else {
      // Guardar en Carpeta Personal
      const existingIndex = this.collection.findIndex(c => c.id === card.id && c.folderId === targetFolderId);
      if (existingIndex >= 0) {
        this.collection[existingIndex].count += qty;
      } else {
        this.collection.unshift({
          ...card,
          count: qty,
          folderId: targetFolderId || 'default',
          addedAt: new Date().toLocaleDateString()
        });
      }
      this.saveCollection();
      this.renderFolderTabs();
      this.renderAlbum();
      this.updateSetGridCardBadges();
      this.showToast(`✅ +${qty} ${card.name} (${formatCardCode(card.id)}) añadido`);
    }
  }

  // Añade varias cartas de golpe ([{ card, qty }]) con un solo guardado / escritura en Firestore
  async addCardsToTargetFolder(items, targetFolderId, { silent = false } = {}) {
    const folderId = targetFolderId || 'default';
    const isShared = this.isSharedFolderId(folderId);
    const folder = isShared ? (this.sharedFoldersMap.get(folderId) || { id: folderId, cards: [] }) : null;
    const target = isShared ? (folder.cards = folder.cards || []) : this.collection;
    const addedAt = new Date().toLocaleDateString();
    let total = 0;
    let newCount = 0;

    items.forEach(({ card, qty }) => {
      const existing = target.find(c => c.id === card.id && (isShared || c.folderId === folderId));
      if (existing) {
        existing.count += qty;
      } else if (isShared) {
        target.unshift({ ...card, count: qty, addedBy: this.currentUser ? (this.currentUser.displayName || 'Amigo') : 'Amigo', addedAt });
        newCount++;
      } else {
        target.unshift({ ...card, count: qty, folderId, addedAt });
        newCount++;
      }
      total += qty;
    });

    if (isShared) {
      this.sharedFoldersMap.set(folderId, folder);
    } else {
      this.saveCollection();
    }
    this.renderFolderTabs();
    this.renderAlbum();
    this.updateSetGridCardBadges();
    if (!silent) {
      this.showToast(`✅ +${total} cartas añadidas${isShared ? ` a "${folder.name || 'Compartida'}"` : ''}`);
    }

    if (isShared && window.FIREBASE_DB) {
      try {
        await window.FIREBASE_DB.collection('shared_folders').doc(folderId).update({
          cards: folder.cards,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (err) {
        console.error("Error al añadir cartas a la carpeta compartida en Firestore:", err);
      }
    }
    return { total, newCount };
  }

  isSharedFolderId(folderId) {
    return this.sharedFolderIds.includes(folderId) || this.sharedFoldersMap.has(folderId);
  }

  // Muestra en el álbum la carpeta (personal o compartida) indicada
  openFolderInAlbum(folderId) {
    const scope = this.isSharedFolderId(folderId) ? 'shared' : 'personal';
    if (this.folderScope !== scope) this.setFolderScope(scope);
    this.selectFolder(folderId);
    this.switchTab('album');
  }

  async addCardToSharedFolder(folderId, card, qty) {
    const folder = this.sharedFoldersMap.get(folderId) || { id: folderId, cards: [] };
    const cards = folder.cards || [];
    const existing = cards.find(c => c.id === card.id);

    if (existing) {
      existing.count += qty;
    } else {
      cards.unshift({
        ...card,
        count: qty,
        addedBy: this.currentUser ? (this.currentUser.displayName || 'Amigo') : 'Amigo',
        addedAt: new Date().toLocaleDateString()
      });
    }
    folder.cards = cards;
    this.sharedFoldersMap.set(folderId, folder);

    this.renderFolderTabs();
    this.renderAlbum();
    this.updateSetGridCardBadges();
    this.showToast(`👥 +${qty} ${card.name} añadido a "${folder.name || 'Compartida'}"`);

    if (window.FIREBASE_DB) {
      try {
        await window.FIREBASE_DB.collection('shared_folders').doc(folderId).update({
          cards: cards,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (err) {
        console.error("Error al actualizar cartas compartidas en Firestore:", err);
      }
    }
  }

  async adjustSharedFolderCardCount(folderId, cardId, delta) {
    const folder = this.sharedFoldersMap.get(folderId);
    if (!folder || !folder.cards) return;

    const idx = folder.cards.findIndex(c => c.id === cardId);
    if (idx < 0) return;

    folder.cards[idx].count += delta;

    if (folder.cards[idx].count <= 0) {
      const removed = folder.cards[idx];
      folder.cards.splice(idx, 1);
      this.showToast(`🗑️ ${removed.name} eliminado de carpeta compartida`);
    } else {
      this.showToast(`👥 Copias actualizadas: x${folder.cards[idx].count}`);
    }

    this.renderFolderTabs();
    this.renderAlbum();
    this.updateSetGridCardBadges();

    if (window.FIREBASE_DB) {
      try {
        await window.FIREBASE_DB.collection('shared_folders').doc(folderId).update({
          cards: folder.cards,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (err) {
        console.error("Error al actualizar conteo en Firestore:", err);
      }
    }
  }

  async setExactSharedFolderCardCount(folderId, cardId, exactCount) {
    const folder = this.sharedFoldersMap.get(folderId);
    if (!folder || !folder.cards) return;

    const idx = folder.cards.findIndex(c => c.id === cardId);
    if (idx < 0) return;

    if (exactCount <= 0) {
      const removed = folder.cards[idx];
      folder.cards.splice(idx, 1);
      this.showToast(`🗑️ ${removed.name} eliminado`);
    } else {
      folder.cards[idx].count = exactCount;
      this.showToast(`👥 Copias fijadas a: x${exactCount}`);
    }

    this.renderFolderTabs();
    this.renderAlbum();
    this.updateSetGridCardBadges();

    if (window.FIREBASE_DB) {
      try {
        await window.FIREBASE_DB.collection('shared_folders').doc(folderId).update({
          cards: folder.cards,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (err) {
        console.error("Error al guardar conteo exacto en Firestore:", err);
      }
    }
  }

  // =========================================================================
  // ÁLBUM: RENDERIZADO Y MODOS (PERSONAL VS COMPARTIDO)
  // =========================================================================

  renderAlbum() {
    if (!this.dom.albumGrid) return;
    if (this.albumDragActive) {
      this.albumRenderPending = true;
      return;
    }
    this.dom.albumGrid.className = `cards-grid view-mode-${this.albumViewMode} size-${this.albumCardSize}`;

    // Obtener cartas base según el scope activo
    let rawCards = [];
    if (this.folderScope === 'personal') {
      if (this.activeFolderId && this.activeFolderId !== 'default') {
        rawCards = this.collection.filter(c => c.folderId === this.activeFolderId);
      } else {
        // En Álbum General se ven todas las cartas juntas
        const map = new Map();
        for (const card of this.collection) {
          if (!map.has(card.id)) {
            map.set(card.id, { ...card });
          } else {
            const existing = map.get(card.id);
            existing.count = (existing.count || 0) + (card.count || 0);
          }
        }
        rawCards = Array.from(map.values());
      }
    } else {
      const sharedFolder = this.sharedFoldersMap.get(this.activeFolderId);
      rawCards = sharedFolder ? (sharedFolder.cards || []) : [];
    }

    // Banner de Starter Deck si la búsqueda coincide
    const detectedSet = this.searchQuery ? normalizeSetCode(this.searchQuery) : null;
    if (detectedSet && this.dom.albumSetBanner) {
      const setMeta = getStarterDeckInfo(detectedSet);
      const setCards = getCardsBySet(detectedSet);
      const title = setMeta ? `${setMeta.name} (${detectedSet})` : `Set ${detectedSet}`;
      this.dom.albumSetTitle.textContent = `📦 ${title}`;
      this.dom.albumSetSub.textContent = `${setCards.length} cartas oficiales en la base de datos • Toca para verlas todas y añadir`;
      this.dom.albumSetBanner.style.display = 'flex';
    } else if (this.dom.albumSetBanner) {
      this.dom.albumSetBanner.style.display = 'none';
    }

    // Filtrar por búsqueda y color
    let filtered = rawCards.filter(card => {
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchName = (card.name || '').toLowerCase().includes(q);
        const matchCode = (card.id || '').toLowerCase().includes(q);
        const matchTraits = (card.traits || '').toLowerCase().includes(q);
        const matchColor = (card.color || '').toLowerCase().includes(q);
        const matchSet = (card.set || '').toLowerCase().includes(q);
        const matchType = (card.cardType || '').toLowerCase().includes(q);
        const matchSetQuery = detectedSet ? (card.id || '').startsWith(detectedSet + '-') : false;
        if (!matchName && !matchCode && !matchTraits && !matchColor && !matchSet && !matchType && !matchSetQuery) return false;
      }

      if (this.activeFilter === 'ALL' || this.activeFilter === 'all') return true;

      const matchColor = (card.color || '').toLowerCase().includes(this.activeFilter.toLowerCase());
      const matchTrait = (card.traits || '').toLowerCase().includes(this.activeFilter.toLowerCase());
      const matchType = (card.cardType || '').toLowerCase().includes(this.activeFilter.toLowerCase());
      return matchColor || matchTrait || matchType;
    });

    // Ordenar cartas (por defecto estilo Mazo Oficial: Líderes -> Color -> Costes -> Eventos)
    this.albumBaseCards = rawCards;
    filtered = this.sortAlbumCards(filtered);

    this.dom.albumGrid.innerHTML = '';

    if (filtered.length === 0) {
      this.dom.albumEmpty.style.display = 'block';
      if (this.folderScope === 'shared') {
        if (!this.activeFolderId || this.sharedFolderIds.length === 0) {
          this.dom.albumEmpty.innerHTML = `
            <div class="empty-shared-welcome" style="padding: 24px 16px; text-align: center;">
              <div style="font-size: 2.6rem; margin-bottom: 12px;">👥</div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">No te has unido a ninguna carpeta compartida aún</h3>
              <p style="font-size: 0.88rem; color: #94a3b8; max-width: 440px; margin: 0 auto 20px auto; line-height: 1.45;">
                Crea una carpeta compartida en la nube para coleccionar junto a tus amigos en tiempo real o únete a una ya existente pegando su enlace.
              </p>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <button class="btn-primary" style="padding: 10px 20px; font-weight: 600;" onclick="window.opApp.openCreateFolderModal()">
                  ➕ Crear Carpeta Compartida
                </button>
                <button class="btn-outline" style="padding: 10px 20px; font-weight: 600;" onclick="window.opApp.openJoinFolderModal()">
                  🔗 Unirse con Enlace
                </button>
              </div>
            </div>
          `;
        } else {
          const sharedFolder = this.sharedFoldersMap.get(this.activeFolderId);
          const folderName = sharedFolder ? sharedFolder.name : 'esta carpeta compartida';
          this.dom.albumEmpty.innerHTML = `
            <div class="empty-shared-welcome" style="padding: 24px 16px; text-align: center;">
              <div style="font-size: 2.6rem; margin-bottom: 12px;">📂</div>
              <h3 style="font-size: 1.15rem; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">"${folderName}" está vacía</h3>
              <p style="font-size: 0.88rem; color: #94a3b8; max-width: 440px; margin: 0 auto 20px auto; line-height: 1.45;">
                Esta carpeta compartida no contiene cartas todavía. Añade cartas para que tú y tus amigos las vean sincronizadas.
              </p>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <button class="btn-primary" style="padding: 10px 20px; font-weight: 600;" onclick="window.opApp.switchTab('scanner')">
                  ➕ Añadir Cartas a "${folderName}"
                </button>
                <button class="btn-outline" style="padding: 10px 20px; font-weight: 600;" onclick="window.opApp.openShareFolderModal('${this.activeFolderId}')">
                  🔗 Invitar Amigos
                </button>
              </div>
            </div>
          `;
        }
      } else {
        this.dom.albumEmpty.innerHTML = `
          <div style="padding: 20px 16px; text-align: center;">
            <p style="font-size: 1.05rem; font-weight: 600; color: #f8fafc; margin-bottom: 6px;">No tienes cartas en este filtro o carpeta</p>
            <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 16px;">¡Usa la pestaña <strong>➕ Añadir</strong> para registrar tus cartas o Starter Decks!</p>
            <button class="btn-primary" style="padding: 10px 20px; font-weight: 600;" onclick="window.opApp.switchTab('scanner')">➕ Buscar y Añadir Cartas</button>
          </div>
        `;
      }
    } else {
      this.dom.albumEmpty.style.display = 'none';

      filtered.forEach(card => {
        const colorClass = (card.color || 'Red').replace('/', '-');

        if (this.albumViewMode === 'list') {
          // Modo Lista
          const rowEl = document.createElement('div');
          rowEl.className = 'card-list-item';
          rowEl.setAttribute('data-id', card.id);

          rowEl.innerHTML = `
            <div class="list-card-thumb-wrap" title="Toca para ver la carta grande">
              <img class="card-img-element" alt="${card.name}" loading="lazy" />
            </div>
            <div class="list-card-details" title="Toca para ver detalles">
              <div class="list-card-header">
                <span class="card-id-text">${formatCardCode(card.id)}</span>
                <span class="card-badge-color col-${colorClass}">${card.color}</span>
                <span class="card-type-chip">${this.getTypeRarityLabel(card)}</span>
              </div>
              <div class="list-card-name">${card.name}</div>
              <div class="list-card-traits">${card.traits || 'One Piece'}</div>
            </div>
            <div class="list-card-actions">
              <div class="card-stepper-row">
                <button class="step-btn btn-sub" data-id="${card.id}" title="Restar 1 copia">−</button>
                <span class="step-count step-count-interactive" title="Modificar cantidad rápida">x${card.count}</span>
                <button class="step-btn btn-add" data-id="${card.id}" title="Sumar 1 copia">+</button>
                <button class="step-btn btn-move btn-card-move" data-id="${card.id}" title="Mover a otra carpeta">↗️</button>
              </div>
            </div>
          `;

          const imgTag = rowEl.querySelector('.card-img-element');
          this.setupRobustImage(imgTag, card);

          rowEl.querySelector('.list-card-thumb-wrap').addEventListener('click', () => {
            this.fetchAndOpenCardModal(card.id);
          });
          rowEl.querySelector('.list-card-details').addEventListener('click', () => {
            this.fetchAndOpenCardModal(card.id);
          });

          rowEl.querySelector('.step-count').addEventListener('click', (e) => {
            e.stopPropagation();
            this.openQtyModal(card);
          });

          rowEl.querySelector('.btn-sub').addEventListener('click', (e) => {
            e.stopPropagation();
            this.adjustCardCount(card.id, -1);
          });

          rowEl.querySelector('.btn-add').addEventListener('click', (e) => {
            e.stopPropagation();
            this.adjustCardCount(card.id, 1);
          });

          const btnListMove = rowEl.querySelector('.btn-move');
          if (btnListMove) {
            btnListMove.addEventListener('click', (e) => {
              e.stopPropagation();
              this.openMoveFolderModal(card);
            });
          }

          this.dom.albumGrid.appendChild(rowEl);

        } else {
          // Modo Cuadrícula (Carta)
          const cardEl = document.createElement('div');
          cardEl.className = 'card-item';
          cardEl.setAttribute('data-id', card.id);

          cardEl.innerHTML = `
            <div class="card-image-wrap" title="Toca para ampliar">
              <img class="card-img-element" alt="${card.name}" loading="lazy" />
              <span class="card-badge-color col-${colorClass}">${card.color}</span>
              <span class="card-badge-count">x${card.count}</span>
            </div>
            <div class="card-info-wrap">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="card-id-text">${formatCardCode(card.id)}</span>
                <span class="card-type-chip">${this.getTypeRarityLabel(card)}</span>
              </div>
              <div class="card-name-text" title="${card.name}">${card.name}</div>
              <div class="card-meta-row">
                <span class="trait-tag" title="${card.traits || 'One Piece'}">${card.traits || 'One Piece'}</span>
              </div>
              <div class="card-stepper-row">
                <button class="step-btn btn-sub" data-id="${card.id}" title="Restar copia">−</button>
                <span class="step-count step-count-interactive" title="Modificar cantidad rápida">x${card.count}</span>
                <button class="step-btn btn-add" data-id="${card.id}" title="Sumar copia">+</button>
                <button class="step-btn btn-move btn-card-move" data-id="${card.id}" title="Mover a otra carpeta">↗️</button>
              </div>
            </div>
          `;

          const imgTag = cardEl.querySelector('.card-img-element');
          this.setupRobustImage(imgTag, card);

          cardEl.querySelector('.card-image-wrap').addEventListener('click', () => {
            this.fetchAndOpenCardModal(card.id);
          });

          cardEl.querySelector('.step-count').addEventListener('click', (e) => {
            e.stopPropagation();
            this.openQtyModal(card);
          });

          cardEl.querySelector('.btn-sub').addEventListener('click', (e) => {
            e.stopPropagation();
            this.adjustCardCount(card.id, -1);
          });

          cardEl.querySelector('.btn-add').addEventListener('click', (e) => {
            e.stopPropagation();
            this.adjustCardCount(card.id, 1);
          });

          const btnGridMove = cardEl.querySelector('.btn-move');
          if (btnGridMove) {
            btnGridMove.addEventListener('click', (e) => {
              e.stopPropagation();
              this.openMoveFolderModal(card);
            });
          }

          this.dom.albumGrid.appendChild(cardEl);
        }
      });
    }

    this.updateHeaderStats();
    this.updateActiveFolderBanner();
  }

  // =========================================================================
  // ORDEN PERSONALIZADO (ARRASTRAR Y SOLTAR)
  // =========================================================================

  loadAlbumCustomOrders() {
    try {
      return JSON.parse(localStorage.getItem('op_album_custom_orders_v1') || '{}') || {};
    } catch (e) {
      return {};
    }
  }

  saveAlbumCustomOrders() {
    localStorage.setItem('op_album_custom_orders_v1', JSON.stringify(this.albumCustomOrders));
  }

  // Cada carpeta (personal o compartida) guarda su propio orden personalizado
  getAlbumOrderKey() {
    return `${this.folderScope}:${this.activeFolderId || 'default'}`;
  }

  sortAlbumCards(cards) {
    if (this.albumSortOrder !== 'custom') {
      return typeof sortCardsDeckStyle === 'function'
        ? sortCardsDeckStyle(cards, this.albumSortOrder || 'color')
        : [...cards];
    }
    // Las cartas sin posición guardada (p. ej. recién añadidas) van al final en orden por color
    const fallback = typeof sortCardsDeckStyle === 'function' ? sortCardsDeckStyle(cards, 'color') : [...cards];
    const order = this.albumCustomOrders[this.getAlbumOrderKey()] || [];
    const pos = new Map(order.map((id, i) => [id, i]));
    const fallbackPos = new Map(fallback.map((c, i) => [c.id, i]));
    return fallback.sort((a, b) => {
      const pa = pos.has(a.id) ? pos.get(a.id) : order.length + fallbackPos.get(a.id);
      const pb = pos.has(b.id) ? pos.get(b.id) : order.length + fallbackPos.get(b.id);
      return pa - pb;
    });
  }

  // Guarda el nuevo orden visible. Si hay filtros activos, las cartas visibles
  // se recolocan en los huecos que ya ocupaban dentro del orden completo.
  commitAlbumCustomOrder(visibleIds) {
    const fullIds = this.sortAlbumCards(this.albumBaseCards).map(c => c.id);
    const visibleSet = new Set(visibleIds);
    let next = 0;
    const merged = fullIds.map(id => (visibleSet.has(id) ? visibleIds[next++] : id));

    this.albumCustomOrders[this.getAlbumOrderKey()] = merged;
    this.saveAlbumCustomOrders();

    this.albumSortOrder = 'custom';
    localStorage.setItem('op_album_sort_order', 'custom');
    if (this.dom.albumSortSelect) this.dom.albumSortSelect.value = 'custom';
    this.renderAlbum();
  }

  initAlbumDragSort() {
    const grid = this.dom.albumGrid;
    if (!grid) return;

    const ITEM_SELECTOR = '.card-item, .card-list-item';
    const NO_DRAG_SELECTOR = 'button, .step-count, input, select, a';
    const LONG_PRESS_MS = 300;    // táctil: mantener pulsado para empezar a arrastrar
    const TOUCH_TOLERANCE = 10;   // táctil: si el dedo se mueve más antes de tiempo, es scroll
    const MOUSE_THRESHOLD = 5;    // ratón: distancia mínima para empezar a arrastrar
    const EDGE = 80;              // zona del borde que activa el autoscroll

    let pending = null;   // pulsación iniciada que aún no es arrastre
    let drag = null;      // arrastre activo
    let suppressClickUntil = 0;
    let rafId = null;

    const itemIds = () => Array.from(grid.querySelectorAll(ITEM_SELECTOR)).map(n => n.dataset.id);

    // Evitar el arrastre nativo de imágenes / enlaces
    grid.addEventListener('dragstart', (e) => e.preventDefault());

    const clearPending = () => {
      if (!pending) return;
      clearTimeout(pending.timer);
      pending.el.classList.remove('album-drag-press');
      pending = null;
    };

    const startDrag = (x, y) => {
      const el = pending.el;
      const touch = pending.touch;
      clearPending();

      const rect = el.getBoundingClientRect();
      const ghost = el.cloneNode(true);
      ghost.classList.add('album-drag-ghost');
      ghost.style.width = `${rect.width}px`;
      ghost.style.height = `${rect.height}px`;
      document.body.appendChild(ghost);

      el.classList.add('album-drag-source');
      grid.classList.add('album-dragging');
      document.body.classList.add('album-drag-active');
      this.albumDragActive = true;

      // Quitar cualquier selección de texto que haya podido iniciar el navegador
      const sel = window.getSelection && window.getSelection();
      if (sel && sel.removeAllRanges) sel.removeAllRanges();
      if (touch && navigator.vibrate) navigator.vibrate(12);

      drag = {
        el,
        ghost,
        touch,
        offsetX: x - rect.left,
        offsetY: y - rect.top,
        x,
        y,
        startOrder: itemIds(),
        needsUpdate: true
      };
      rafId = requestAnimationFrame(frame);
    };

    // Recoloca la carta bajo el dedo / cursor
    const reorderAt = (x, y) => {
      const under = document.elementFromPoint(x, y);
      const target = under ? under.closest(ITEM_SELECTOR) : null;
      if (!target || target === drag.el || target.parentElement !== grid) return;

      // Si el destino está después del origen, insertar detrás; si no, delante
      const items = Array.from(grid.children);
      if (items.indexOf(target) > items.indexOf(drag.el)) {
        target.after(drag.el);
      } else {
        target.before(drag.el);
      }
    };

    // Un único bucle por fotograma: mover la carta fantasma, autoscroll y reordenar
    const frame = () => {
      if (!drag) return;
      const { x, y } = drag;
      const h = window.innerHeight;
      let scrolled = false;

      if (y < EDGE) {
        window.scrollBy(0, -Math.ceil(((EDGE - y) / EDGE) * 18));
        scrolled = true;
      } else if (y > h - EDGE) {
        window.scrollBy(0, Math.ceil(((y - (h - EDGE)) / EDGE) * 18));
        scrolled = true;
      }

      if (drag.needsUpdate || scrolled) {
        drag.ghost.style.transform = `translate3d(${x - drag.offsetX}px, ${y - drag.offsetY}px, 0) rotate(2deg) scale(1.04)`;
        reorderAt(x, y);
        drag.needsUpdate = false;
      }
      rafId = requestAnimationFrame(frame);
    };

    const updatePos = (x, y) => {
      drag.x = x;
      drag.y = y;
      drag.needsUpdate = true;
    };

    const endDrag = (commit) => {
      if (!drag) return;
      cancelAnimationFrame(rafId);
      // Aplicar la última posición aunque no haya llegado a pintarse un fotograma
      if (commit) reorderAt(drag.x, drag.y);
      drag.ghost.remove();
      drag.el.classList.remove('album-drag-source');
      grid.classList.remove('album-dragging');
      document.body.classList.remove('album-drag-active');

      const newOrder = itemIds();
      const changed = newOrder.join('|') !== drag.startOrder.join('|');
      drag = null;
      this.albumDragActive = false;
      // El navegador puede lanzar un "click" justo después de soltar: ignorarlo
      suppressClickUntil = Date.now() + 450;

      if (commit && changed) {
        this.commitAlbumCustomOrder(newOrder);
      } else if (changed || this.albumRenderPending) {
        this.renderAlbum();
      }
      this.albumRenderPending = false;
    };

    const canStartOn = (target) => {
      const el = target.closest ? target.closest(ITEM_SELECTOR) : null;
      if (!el || el.parentElement !== grid || target.closest(NO_DRAG_SELECTOR)) return null;
      return el;
    };

    // ---------- TÁCTIL (móvil / tablet): eventos touch ----------
    // Se usan touch events en vez de pointer events porque permiten bloquear el scroll
    // de forma fiable en iOS y Android una vez que empieza el arrastre.
    grid.addEventListener('touchstart', (e) => {
      if (drag || e.touches.length !== 1) {
        clearPending();
        return;
      }
      const el = canStartOn(e.target);
      if (!el) return;
      const t = e.touches[0];
      pending = { el, x: t.clientX, y: t.clientY, touch: true, timer: null };
      el.classList.add('album-drag-press');
      pending.timer = setTimeout(() => {
        if (pending) startDrag(pending.x, pending.y);
      }, LONG_PRESS_MS);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (drag && drag.touch) {
        if (e.cancelable) e.preventDefault(); // bloquear scroll mientras se arrastra
        const t = e.touches[0];
        if (t) updatePos(t.clientX, t.clientY);
        return;
      }
      if (pending && pending.touch) {
        const t = e.touches[0];
        if (!t || Math.hypot(t.clientX - pending.x, t.clientY - pending.y) > TOUCH_TOLERANCE) {
          clearPending(); // el usuario está haciendo scroll
        }
      }
    }, { passive: false });

    const onTouchEnd = (e) => {
      if (pending && pending.touch) clearPending();
      if (drag && drag.touch) {
        if (e.cancelable) e.preventDefault(); // evita el click fantasma tras soltar
        endDrag(e.type === 'touchend');
      }
    };
    window.addEventListener('touchend', onTouchEnd, { passive: false });
    window.addEventListener('touchcancel', onTouchEnd, { passive: false });

    // Si la app pasa a segundo plano a mitad del arrastre, cancelar
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearPending();
        endDrag(false);
      }
    });

    // ---------- RATÓN / LÁPIZ: pointer events ----------
    grid.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch' || drag || e.button !== 0) return;
      const el = canStartOn(e.target);
      if (!el) return;
      e.preventDefault(); // evita seleccionar texto al arrastrar
      pending = { el, x: e.clientX, y: e.clientY, touch: false, timer: null };
    });

    window.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      if (drag && !drag.touch) {
        updatePos(e.clientX, e.clientY);
        return;
      }
      if (pending && !pending.touch && Math.hypot(e.clientX - pending.x, e.clientY - pending.y) > MOUSE_THRESHOLD) {
        startDrag(e.clientX, e.clientY);
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (e.pointerType === 'touch') return;
      if (pending && !pending.touch) clearPending();
      if (drag && !drag.touch) endDrag(true);
    });

    window.addEventListener('pointercancel', (e) => {
      if (e.pointerType === 'touch') return;
      if (pending && !pending.touch) clearPending();
      if (drag && !drag.touch) endDrag(false);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drag) endDrag(false);
    });

    // Evitar el menú contextual de pulsación larga (Android) sobre las cartas
    grid.addEventListener('contextmenu', (e) => {
      if (drag || pending || e.target.closest(ITEM_SELECTOR)) e.preventDefault();
    });

    // Que soltar una carta no abra su detalle
    grid.addEventListener('click', (e) => {
      if (Date.now() < suppressClickUntil) {
        e.stopPropagation();
        e.preventDefault();
      }
    }, true);
  }

  adjustCardCount(cardId, delta) {
    if (this.folderScope === 'shared') {
      this.adjustSharedFolderCardCount(this.activeFolderId, cardId, delta);
    } else {
      let idx = -1;
      if (this.activeFolderId && this.activeFolderId !== 'default') {
        idx = this.collection.findIndex(c => c.id === cardId && c.folderId === this.activeFolderId);
      } else {
        idx = this.collection.findIndex(c => c.id === cardId && (!c.folderId || c.folderId === 'default'));
        if (idx < 0) {
          idx = this.collection.findIndex(c => c.id === cardId);
        }
      }
      if (idx < 0) return;

      this.collection[idx].count += delta;

      if (this.collection[idx].count <= 0) {
        const removed = this.collection[idx];
        this.collection.splice(idx, 1);
        this.showToast(`🗑️ ${removed.name} eliminado`);
      } else {
        this.showToast(`Copias actualizadas: x${this.collection[idx].count}`);
      }

      this.saveCollection();
      this.renderFolderTabs();
      this.renderAlbum();
      this.updateSetGridCardBadges();
    }
  }

  setExactCardCount(cardId, exactQty) {
    if (this.folderScope === 'shared') {
      this.setExactSharedFolderCardCount(this.activeFolderId, cardId, exactQty);
    } else {
      let idx = -1;
      if (this.activeFolderId && this.activeFolderId !== 'default') {
        idx = this.collection.findIndex(c => c.id === cardId && c.folderId === this.activeFolderId);
      } else {
        idx = this.collection.findIndex(c => c.id === cardId && (!c.folderId || c.folderId === 'default'));
        if (idx < 0) {
          idx = this.collection.findIndex(c => c.id === cardId);
        }
      }
      if (idx < 0) return;

      if (exactQty <= 0) {
        const removed = this.collection[idx];
        this.collection.splice(idx, 1);
        this.showToast(`🗑️ ${removed.name} eliminado`);
      } else {
        this.collection[idx].count = exactQty;
        this.showToast(`Copias actualizadas: x${exactQty}`);
      }

      this.saveCollection();
      this.renderFolderTabs();
      this.renderAlbum();
      this.updateSetGridCardBadges();
    }
  }

  // =========================================================================
  // MODAL EDICIÓN RÁPIDA DE CANTIDAD
  // =========================================================================

  openQtyModal(card) {
    this.activeQtyCard = card;
    this.dom.qtyModalId.textContent = formatCardCode(card.id);
    this.dom.qtyModalName.textContent = card.name;
    this.dom.qtyModalCurrentCount.textContent = card.count;
    this.dom.qtyModalDirectInput.value = card.count;
    this.dom.qtyModalRemoveCount.value = 1;

    this.setupRobustImage(this.dom.qtyModalImg, card);
    this.dom.qtyEditModal.classList.add('active');
  }

  closeQtyModal() {
    this.dom.qtyEditModal.classList.remove('active');
    this.activeQtyCard = null;
  }

  // =========================================================================
  // SISTEMA: MOVER CARTAS ENTRE CARPETAS
  // =========================================================================

  openImportPasteModal(targetFolderId) {
    if (this.dom.pasteTextarea) this.dom.pasteTextarea.value = '';
    this.populateImportFolderSelects();
    const finalTarget = targetFolderId || (this.folderScope === 'shared' && this.activeFolderId ? this.activeFolderId : (this.activeFolderId || 'default'));
    if (this.dom.pasteFolderSelect) {
      this.dom.pasteFolderSelect.value = finalTarget;
    }
    if (this.dom.importFolderSelect) {
      this.dom.importFolderSelect.value = finalTarget;
    }
    this.updateImportTargetBadge();
    if (this.dom.pasteModal) {
      this.dom.pasteModal.classList.add('active');
      setTimeout(() => {
        if (this.dom.pasteTextarea) this.dom.pasteTextarea.focus();
      }, 100);
    }
  }

  setMoveFolderModalMode(mode) {
    this.moveFolderMode = mode;
    if (this.dom.btnMoveModeTransfer && this.dom.btnMoveModeCopy) {
      this.dom.btnMoveModeTransfer.classList.toggle('active', mode === 'move');
      this.dom.btnMoveModeCopy.classList.toggle('active', mode === 'copy');
    }
    const maxCount = this.movingCard ? (this.movingCard.count || 1) : 1;
    // Al mover no se pueden quitar más copias de las que hay; al sumar no hay ese límite
    if (this.dom.moveFolderQtyInput) {
      const input = this.dom.moveFolderQtyInput;
      input.max = (mode === 'move') ? maxCount : 99;
      if (mode === 'move' && (parseInt(input.value) || 1) > maxCount) input.value = maxCount;
    }
    if (this.dom.moveFolderQtyTitle) {
      this.dom.moveFolderQtyTitle.textContent = (mode === 'move')
        ? '¿Cuántas copias deseas mover?:'
        : '¿Cuántas copias deseas sumar / copiar?:';
    }
    if (this.dom.btnMoveAllCopies) {
      this.dom.btnMoveAllCopies.textContent = (mode === 'move')
        ? `Mover todas (x${maxCount})`
        : `Copiar todas (x${maxCount})`;
    }
    if (this.dom.moveFolderOptionsList) {
      const badges = this.dom.moveFolderOptionsList.querySelectorAll('.folder-item-action-badge');
      badges.forEach(b => {
        if (mode === 'move') {
          b.textContent = 'Mover aquí ➔';
          b.style.color = 'var(--accent-gold)';
          b.style.borderColor = 'rgba(245, 158, 11, 0.3)';
          b.style.background = 'rgba(245, 158, 11, 0.12)';
        } else {
          b.textContent = 'Sumar aquí ➔';
          b.style.color = '#34d399';
          b.style.borderColor = 'rgba(16, 185, 129, 0.4)';
          b.style.background = 'rgba(16, 185, 129, 0.15)';
        }
      });
    }
  }

  openMoveFolderModal(card) {
    if (!card) return;
    this.movingCard = card;
    this.movingSourceFolderId = this.activeFolderId || 'default';
    this.moveFolderMode = 'move';

    if (this.dom.moveFolderCardId) this.dom.moveFolderCardId.textContent = formatCardCode(card.id);
    if (this.dom.moveFolderCardName) this.dom.moveFolderCardName.textContent = card.name;
    if (this.dom.moveFolderCardImg) this.setupRobustImage(this.dom.moveFolderCardImg, card);

    // Identificar carpeta de origen actual
    let srcName = 'Álbum General';
    let srcIcon = '📁';
    if (this.folderScope === 'shared') {
      const f = this.sharedFoldersMap.get(this.movingSourceFolderId);
      if (f) {
        srcName = f.name;
        srcIcon = f.icon || '👥';
      }
    } else {
      const f = this.personalFolders.find(p => p.id === this.movingSourceFolderId);
      if (f) {
        srcName = f.name;
        srcIcon = f.icon || '📁';
      }
    }

    if (this.dom.moveFolderCurrentBadge) {
      this.dom.moveFolderCurrentBadge.textContent = `Origen: ${srcIcon} ${srcName} (${card.count || 1} copias)`;
    }

    const maxCount = card.count || 1;
    if (this.dom.moveFolderQtyInput) {
      this.dom.moveFolderQtyInput.value = maxCount;
      this.dom.moveFolderQtyInput.max = maxCount;
      this.dom.moveFolderQtyInput.min = 1;
    }
    if (this.dom.btnMoveAllCopies) {
      this.dom.btnMoveAllCopies.textContent = `Mover todas (x${maxCount})`;
      this.dom.btnMoveAllCopies.onclick = () => {
        if (this.dom.moveFolderQtyInput) this.dom.moveFolderQtyInput.value = maxCount;
      };
    }

    this.setMoveFolderModalMode('move');

    // Renderizar lista de carpetas destino disponibles
    if (this.dom.moveFolderOptionsList) {
      this.dom.moveFolderOptionsList.innerHTML = '';
      const destCandidates = [];

      // Carpetas Personales disponibles
      this.personalFolders.forEach(f => {
        if (this.folderScope === 'personal' && f.id === this.movingSourceFolderId) return;
        destCandidates.push({
          id: f.id,
          name: f.name,
          icon: f.icon || '📁',
          type: 'personal'
        });
      });

      // Carpetas Compartidas disponibles
      const sharedList = this.getSharedFoldersList();
      sharedList.forEach(f => {
        if (this.folderScope === 'shared' && f.id === this.movingSourceFolderId) return;
        destCandidates.push({
          id: f.id,
          name: f.name,
          icon: f.icon || '👥',
          type: 'shared'
        });
      });

      if (destCandidates.length === 0) {
        this.dom.moveFolderOptionsList.innerHTML = `
          <div style="text-align: center; padding: 16px; color: #94a3b8; font-size: 0.85rem;">
            No tienes otras carpetas a las que mover o sumar esta carta. Crea una nueva carpeta en el álbum para organizar tus mazos.
          </div>
          <button type="button" class="btn-primary" style="width: 100%; margin-top: 6px;" onclick="window.opApp.closeMoveFolderModal(); window.opApp.openCreateFolderModal();">
            ➕ Crear Nueva Carpeta
          </button>
        `;
      } else {
        destCandidates.forEach(dest => {
          const item = document.createElement('div');
          item.className = 'folder-select-item';
          item.setAttribute('data-folder-id', dest.id);

          const typeLabel = dest.type === 'shared' ? '👥 Compartida' : '📁 Personal';
          const isMove = (this.moveFolderMode === 'move');

          item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 1.15rem;">${dest.icon}</span>
              <div>
                <div style="font-weight: 700; color: #fff;">${dest.name}</div>
                <div style="font-size: 0.72rem; color: #94a3b8;">${typeLabel}</div>
              </div>
            </div>
            <span class="folder-item-action-badge">${isMove ? 'Mover aquí ➔' : 'Sumar aquí ➔'}</span>
          `;

          item.addEventListener('click', () => {
            const rawQty = this.dom.moveFolderQtyInput ? parseInt(this.dom.moveFolderQtyInput.value) : maxCount;
            const isCopy = (this.moveFolderMode === 'copy');
            const qtyToMove = Math.min(Math.max(1, isNaN(rawQty) ? 1 : rawQty), isCopy ? 99 : maxCount);
            this.executeMoveCard(this.movingCard, qtyToMove, this.movingSourceFolderId, dest.id, isCopy);
            this.closeMoveFolderModal();
          });

          this.dom.moveFolderOptionsList.appendChild(item);
        });
      }
    }

    if (this.dom.moveFolderModal) {
      this.dom.moveFolderModal.classList.add('active');
    }
  }

  closeMoveFolderModal() {
    if (this.dom.moveFolderModal) {
      this.dom.moveFolderModal.classList.remove('active');
    }
    this.movingCard = null;
    this.movingSourceFolderId = null;
  }

  async executeMoveCard(card, qtyToMove, sourceFolderId, destFolderId, isCopyMode = false) {
    if (!card || !destFolderId || sourceFolderId === destFolderId) return;

    const sourceScope = (this.sharedFolderIds.includes(sourceFolderId) || this.sharedFoldersMap.has(sourceFolderId)) ? 'shared' : 'personal';
    const destScope = (this.sharedFolderIds.includes(destFolderId) || this.sharedFoldersMap.has(destFolderId)) ? 'shared' : 'personal';

    // Obtener nombres para los mensajes
    let srcName = 'Álbum General';
    if (sourceScope === 'shared') {
      const f = this.sharedFoldersMap.get(sourceFolderId);
      srcName = f ? f.name : 'Compartida';
    } else {
      const f = this.personalFolders.find(p => p.id === sourceFolderId);
      srcName = f ? f.name : (sourceFolderId === 'default' ? 'Álbum General' : 'Personal');
    }

    let destName = 'Álbum General';
    if (destScope === 'shared') {
      const f = this.sharedFoldersMap.get(destFolderId);
      destName = f ? f.name : 'Compartida';
    } else {
      const f = this.personalFolders.find(p => p.id === destFolderId);
      destName = f ? f.name : (destFolderId === 'default' ? 'Álbum General' : 'Personal');
    }

    // 1. Restar copias de la carpeta origen (sólo si no es modo copia)
    let actualMoved = qtyToMove;
    if (!isCopyMode) {
      if (sourceScope === 'personal') {
        let remaining = qtyToMove;
        const candidateIndices = [];
        this.collection.forEach((c, idx) => {
          if (c.id === card.id) {
            if (sourceFolderId === 'default') {
              candidateIndices.push(idx);
            } else if (c.folderId === sourceFolderId) {
              candidateIndices.push(idx);
            }
          }
        });

        if (sourceFolderId === 'default') {
          candidateIndices.sort((a, b) => {
            const aDef = (!this.collection[a].folderId || this.collection[a].folderId === 'default') ? 0 : 1;
            const bDef = (!this.collection[b].folderId || this.collection[b].folderId === 'default') ? 0 : 1;
            return aDef - bDef;
          });
        }

        if (candidateIndices.length === 0) {
          this.showToast(`No se encontró la carta en "${srcName}"`);
          return;
        }

        actualMoved = 0;
        for (const idx of candidateIndices) {
          if (remaining <= 0) break;
          const take = Math.min(remaining, this.collection[idx].count || 1);
          this.collection[idx].count -= take;
          remaining -= take;
          actualMoved += take;
        }

        this.collection = this.collection.filter(c => (c.count || 0) > 0);
        this.saveCollection();
      } else {
        const sharedFolder = this.sharedFoldersMap.get(sourceFolderId);
        if (!sharedFolder || !sharedFolder.cards) return;
        const srcIdx = sharedFolder.cards.findIndex(c => c.id === card.id);
        if (srcIdx < 0) {
          this.showToast(`No se encontró la carta en "${srcName}"`);
          return;
        }
        actualMoved = Math.min(qtyToMove, sharedFolder.cards[srcIdx].count || 1);
        sharedFolder.cards[srcIdx].count -= actualMoved;
        if (sharedFolder.cards[srcIdx].count <= 0) {
          sharedFolder.cards.splice(srcIdx, 1);
        }
        this.sharedFoldersMap.set(sourceFolderId, sharedFolder);
        this.saveFolders();
        if (window.FIREBASE_DB) {
          try {
            await window.FIREBASE_DB.collection('shared_folders').doc(sourceFolderId).update({
              cards: sharedFolder.cards,
              updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          } catch (e) {
            console.error("Error al actualizar origen en Firestore:", e);
          }
        }
      }
      if (actualMoved <= 0) return;
    }

    // 2. Sumar copias a la carpeta destino
    if (destScope === 'personal') {
      const destIdx = this.collection.findIndex(c => c.id === card.id && (c.folderId || 'default') === (destFolderId || 'default'));
      if (destIdx >= 0) {
        this.collection[destIdx].count += actualMoved;
      } else {
        this.collection.unshift({
          ...card,
          count: actualMoved,
          folderId: destFolderId || 'default',
          addedAt: new Date().toLocaleDateString()
        });
      }
      this.saveCollection();
    } else {
      const destFolder = this.sharedFoldersMap.get(destFolderId) || { id: destFolderId, cards: [] };
      const destCards = destFolder.cards || [];
      const destIdx = destCards.findIndex(c => c.id === card.id);
      if (destIdx >= 0) {
        destCards[destIdx].count += actualMoved;
      } else {
        destCards.unshift({
          ...card,
          count: actualMoved,
          addedBy: this.currentUser ? (this.currentUser.displayName || 'Amigo') : 'Amigo',
          addedAt: new Date().toLocaleDateString()
        });
      }
      destFolder.cards = destCards;
      this.sharedFoldersMap.set(destFolderId, destFolder);
      this.saveFolders();
      if (window.FIREBASE_DB) {
        try {
          await window.FIREBASE_DB.collection('shared_folders').doc(destFolderId).update({
            cards: destCards,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        } catch (e) {
          console.error("Error al actualizar destino en Firestore:", e);
        }
      }
    }

    // 3. Refrescar vistas
    this.renderFolderTabs();
    this.renderAlbum();
    this.updateSetGridCardBadges();
    this.populateExportFolderSelect();
    this.populateImportFolderSelects();
    if (isCopyMode) {
      this.showToast(`➕ Sumada${actualMoved > 1 ? 's ' + actualMoved + ' copias' : ' 1 copia'} de ${card.name} a "${destName}"`);
    } else {
      this.showToast(`📦 Movida${actualMoved > 1 ? 's ' + actualMoved + ' copias' : ' 1 copia'} de ${card.name} a "${destName}"`);
    }
  }

  // =========================================================================
  // EXPLORADOR DE SETS / RESULTADOS DE BÚSQUEDA
  // =========================================================================

  setAlbumViewMode(mode) {
    this.albumViewMode = mode;
    localStorage.setItem('op_album_view_mode', mode);
    this.updateToolbarControls();
    this.renderAlbum();
    this.showToast(mode === 'list' ? '📋 Álbum en Modo Lista' : '🔲 Álbum en Modo Carta');
  }

  setAlbumCardSize(size) {
    this.albumCardSize = size;
    localStorage.setItem('op_album_card_size', size);
    this.updateToolbarControls();
    this.renderAlbum();
  }

  adjustAlbumCardSize(delta) {
    const sizes = ['small', 'normal', 'large'];
    let idx = sizes.indexOf(this.albumCardSize);
    if (idx === -1) idx = 1;
    let newIdx = idx + delta;
    if (newIdx < 0 || newIdx >= sizes.length) return;
    this.setAlbumCardSize(sizes[newIdx]);
  }

  setSetViewMode(mode) {
    this.setViewMode = mode;
    localStorage.setItem('op_set_view_mode', mode);
    this.updateToolbarControls();
    this.renderSearchResultsPage();
    this.showToast(mode === 'list' ? '📋 Resultados en Modo Lista' : '🔲 Resultados en Modo Carta');
  }

  setSetCardSize(size) {
    this.setCardSize = size;
    localStorage.setItem('op_set_card_size', size);
    this.updateToolbarControls();
    this.renderSearchResultsPage();
  }

  adjustSetCardSize(delta) {
    const sizes = ['small', 'normal', 'large'];
    let idx = sizes.indexOf(this.setCardSize);
    if (idx === -1) idx = 1;
    let newIdx = idx + delta;
    if (newIdx < 0 || newIdx >= sizes.length) return;
    this.setSetCardSize(sizes[newIdx]);
  }

  updateToolbarControls() {
    const sizeLabels = { small: 'Pequeño', normal: 'Normal', large: 'Grande' };

    if (this.dom.btnViewGrid && this.dom.btnViewList) {
      this.dom.btnViewGrid.classList.toggle('active', this.albumViewMode === 'grid');
      this.dom.btnViewList.classList.toggle('active', this.albumViewMode === 'list');
    }
    if (this.dom.btnSizeReset) {
      this.dom.btnSizeReset.textContent = sizeLabels[this.albumCardSize] || 'Normal';
    }

    if (this.dom.btnSetViewGrid && this.dom.btnSetViewList) {
      this.dom.btnSetViewGrid.classList.toggle('active', this.setViewMode === 'grid');
      this.dom.btnSetViewList.classList.toggle('active', this.setViewMode === 'list');
    }
    if (this.dom.btnSetSizeReset) {
      this.dom.btnSetSizeReset.textContent = sizeLabels[this.setCardSize] || 'Normal';
    }
  }

  setSearchPrefix(prefix) {
    if (!this.dom.manualCodeInput) return;
    let val = this.dom.manualCodeInput.value.trim().toUpperCase();
    
    // Si ya empieza con algún prefijo conocido (OP, ST, EB, PRB, P), sustituirlo
    const match = val.match(/^(OP|ST|EB|PRB|P)(.*)$/i);
    if (match) {
      val = prefix + match[2];
    } else if (val) {
      val = prefix + val;
    } else {
      val = prefix;
    }
    
    this.dom.manualCodeInput.value = val;
    this.dom.manualCodeInput.focus();
    const len = this.dom.manualCodeInput.value.length;
    this.dom.manualCodeInput.setSelectionRange(len, len);

    if (this.dom.prefixBtns) {
      this.dom.prefixBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-prefix') === prefix);
      });
    }
  }

  submitCodeInput() {
    const raw = this.dom.manualCodeInput.value.trim();
    if (!raw || raw === 'OP' || raw === 'ST' || raw === 'EB' || raw === 'PRB' || raw === 'P') {
      this.showToast("Carta no encontrada");
      this.dom.manualCodeInput.focus();
      return;
    }

    const setCode = normalizeSetCode(raw);
    if (setCode) {
      const cards = getCardsBySet(setCode);
      if (cards && cards.length > 0) {
        this.showSetExplorer(setCode);
        return;
      }
    }

    const cleanCard = this.cleanCardCode(raw);

    // Buscar en la base de datos (encuentra la carta base y todos sus estilos alternativos)
    const matches = window.searchCardsInDB ? window.searchCardsInDB(raw) : [];
    if (matches.length > 0) {
      if (matches.length === 1 && (!cleanCard || matches[0].id.toLowerCase() === cleanCard.toLowerCase())) {
        this.fetchAndOpenCardModal(matches[0].id);
      } else {
        this.showSearchResults(raw, matches);
      }
      return;
    }

    if (cleanCard && window.ONE_PIECE_CARDS_DB && window.ONE_PIECE_CARDS_DB[cleanCard]) {
      this.fetchAndOpenCardModal(cleanCard);
      return;
    }

    this.showToast("Carta no encontrada");
  }

  showSetExplorer(setCodeQuery) {
    const setCode = normalizeSetCode(setCodeQuery) || setCodeQuery.toUpperCase().trim();
    const cards = getCardsBySet(setCode);
    const meta = getStarterDeckInfo(setCode);

    this.currentSetCode = setCode;
    this.currentSearchMode = 'set';
    this.searchResults = cards;
    this.searchCurrentPage = 1;

    if (cards.length === 0) {
      this.showToast('Carta no encontrada');
      return;
    }

    const setName = meta ? `${meta.name} (${setCode})` : `Set ${setCode}`;
    this.dom.setResultsTitle.textContent = setName;
    const traitInfo = meta ? ` • ${meta.traits}` : '';
    this.dom.setResultsSubtitle.textContent = `${cards.length} cartas oficiales en el set${traitInfo} • Pulsa para añadir o ampliar`;

    this.updateToolbarControls();
    this.renderSearchResultsPage();
    this.dom.setResultsContainer.style.display = 'block';

    if (this.dom.starterDeckSelect) {
      this.dom.starterDeckSelect.value = setCode;
    }

    this.showToast(`📦 Mostrando ${cards.length} cartas de ${setCode}`);

    setTimeout(() => {
      this.dom.setResultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  // Re-ejecuta la última búsqueda en silencio (tras sincronizar la base de datos)
  handleSearch(query) {
    const matches = window.searchCardsInDB ? window.searchCardsInDB(query) : [];
    if (matches.length === 0) return;
    this.searchResults = matches;
    this.searchCurrentPage = Math.min(this.searchCurrentPage, Math.max(1, Math.ceil(matches.length / this.searchCardsPerPage)));
    this.dom.setResultsSubtitle.textContent = `${matches.length} cartas encontradas • 18 cartas por página`;
    this.renderSearchResultsPage();
  }

  showSearchResults(query, matches) {
    this.currentSetCode = null;
    this.currentSearchMode = 'search';
    this.lastCardSearchQuery = query;
    this.searchResults = matches;
    this.searchCurrentPage = 1;

    this.dom.setResultsTitle.textContent = `Resultados para "${query}"`;
    this.dom.setResultsSubtitle.textContent = `${matches.length} cartas encontradas • 18 cartas por página`;

    this.updateToolbarControls();
    this.renderSearchResultsPage();
    this.dom.setResultsContainer.style.display = 'block';

    this.showToast(`🔍 ${matches.length} cartas encontradas para "${query}"`);

    setTimeout(() => {
      this.dom.setResultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  changeSearchPage(delta) {
    const totalPages = Math.max(1, Math.ceil(this.searchResults.length / this.searchCardsPerPage));
    const newPage = this.searchCurrentPage + delta;
    if (newPage >= 1 && newPage <= totalPages) {
      this.searchCurrentPage = newPage;
      this.renderSearchResultsPage();
      this.dom.setResultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  renderSearchResultsPage() {
    const totalCards = this.searchResults.length;
    const totalPages = Math.max(1, Math.ceil(totalCards / this.searchCardsPerPage));

    if (this.searchCurrentPage > totalPages) this.searchCurrentPage = totalPages;
    if (this.searchCurrentPage < 1) this.searchCurrentPage = 1;

    const startIdx = (this.searchCurrentPage - 1) * this.searchCardsPerPage;
    const pageCards = this.searchResults.slice(startIdx, startIdx + this.searchCardsPerPage);

    this.renderSetCardsGrid(pageCards);

    if (this.dom.setPaginationBar) {
      if (totalCards > this.searchCardsPerPage) {
        this.dom.setPaginationBar.style.display = 'flex';
        this.dom.setPaginationInfo.textContent = `Página ${this.searchCurrentPage} de ${totalPages} (${totalCards} cartas)`;
        this.dom.btnPrevPage.disabled = (this.searchCurrentPage <= 1);
        this.dom.btnNextPage.disabled = (this.searchCurrentPage >= totalPages);
      } else {
        this.dom.setPaginationBar.style.display = 'none';
      }
    }
  }

  renderSetCardsGrid(cards) {
    this.dom.setCardsGrid.className = `cards-grid set-grid view-mode-${this.setViewMode} size-${this.setCardSize}`;
    this.dom.setCardsGrid.innerHTML = '';

    cards.forEach(card => {
      const existing = this.collection.find(c => c.id === card.id);
      const count = existing ? existing.count : 0;
      const colorClass = (card.color || 'Red').replace('/', '-');

      if (this.setViewMode === 'list') {
        const rowEl = document.createElement('div');
        rowEl.className = 'card-list-item set-card-item';
        rowEl.setAttribute('data-id', card.id);

        rowEl.innerHTML = `
          <div class="list-card-thumb-wrap" title="Toca para ver grande">
            <img class="card-img-element" alt="${card.name}" loading="lazy" />
          </div>
          <div class="list-card-details" title="Toca para ver detalles">
            <div class="list-card-header">
              <span class="card-id-text">${formatCardCode(card.id)}${card.id.includes('_') ? ' <span class="alt-art-pill">ALT ART</span>' : ''}</span>
              <span class="card-badge-color col-${colorClass}">${card.color}</span>
              <span class="card-badge-owned ${count > 0 ? 'has-copies' : ''}">
                ${count > 0 ? `x${count} en álbum` : 'x0'}
              </span>
              <span class="card-type-chip">${this.getTypeRarityLabel(card)}</span>
            </div>
            <div class="list-card-name">${card.name}</div>
            <div class="list-card-traits">${card.traits || 'One Piece'}</div>
          </div>
          <div class="list-card-actions">
            <button class="btn-add-set-card btn-add-set-card-list" data-id="${card.id}">
              ➕ ${count > 0 ? `x${count} (+1)` : 'Añadir'}
            </button>
          </div>
        `;

        const imgTag = rowEl.querySelector('.card-img-element');
        this.setupRobustImage(imgTag, card);

        rowEl.querySelector('.list-card-thumb-wrap').addEventListener('click', () => {
          this.fetchAndOpenCardModal(card.id);
        });
        rowEl.querySelector('.list-card-details').addEventListener('click', () => {
          this.fetchAndOpenCardModal(card.id);
        });

        rowEl.querySelector('.btn-add-set-card').addEventListener('click', (e) => {
          e.stopPropagation();
          const targetFolder = (this.folderScope === 'shared' && this.activeFolderId) ? this.activeFolderId : 'default';
          this.addCardToTargetFolder(card, 1, targetFolder);
        });

        this.dom.setCardsGrid.appendChild(rowEl);

      } else {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-item set-card-item';
        cardEl.setAttribute('data-id', card.id);

        cardEl.innerHTML = `
          <div class="card-image-wrap" title="Toca para ampliar">
            <img class="card-img-element" alt="${card.name}" loading="lazy" />
            <span class="card-badge-color col-${colorClass}">${card.color}</span>
            <span class="card-badge-owned ${count > 0 ? 'has-copies' : ''}">
              ${count > 0 ? `x${count} en álbum` : 'x0 copias'}
            </span>
          </div>
          <div class="card-info-wrap">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="card-id-text">${formatCardCode(card.id)}${card.id.includes('_') ? ' <span class="alt-art-pill">ALT</span>' : ''}</span>
              <span class="card-type-chip">${this.getTypeRarityLabel(card)}</span>
            </div>
            <div class="card-name-text" title="${card.name}">${card.name}</div>
            <div class="trait-tag" title="${card.traits || 'One Piece'}">${card.traits || 'One Piece'}</div>
            <button class="btn-add-set-card" data-id="${card.id}">
              ➕ ${count > 0 ? 'Sumar copias' : 'Añadir al Álbum'}
            </button>
          </div>
        `;

        const imgTag = cardEl.querySelector('.card-img-element');
        this.setupRobustImage(imgTag, card);

        cardEl.addEventListener('click', () => {
          this.fetchAndOpenCardModal(card.id);
        });

        cardEl.querySelector('.btn-add-set-card').addEventListener('click', (e) => {
          e.stopPropagation();
          const targetFolder = (this.folderScope === 'shared' && this.activeFolderId) ? this.activeFolderId : 'default';
          this.addCardToTargetFolder(card, 1, targetFolder);
        });

        this.dom.setCardsGrid.appendChild(cardEl);
      }
    });
  }

  updateSetGridCardBadges() {
    if (!this.dom.setResultsContainer || this.dom.setResultsContainer.style.display === 'none') return;
    const cardItems = this.dom.setCardsGrid.querySelectorAll('.set-card-item');
    cardItems.forEach(el => {
      const cid = el.getAttribute('data-id');
      if (cid) {
        const existing = this.collection.find(c => c.id === cid);
        const count = existing ? existing.count : 0;
        const badge = el.querySelector('.card-badge-owned');
        const btn = el.querySelector('.btn-add-set-card');
        if (badge) {
          badge.className = `card-badge-owned ${count > 0 ? 'has-copies' : ''}`;
          badge.textContent = count > 0 ? `x${count} en álbum` : (this.setViewMode === 'list' ? 'x0' : 'x0 copias');
        }
        if (btn) {
          if (this.setViewMode === 'list') {
            btn.innerHTML = `➕ ${count > 0 ? `x${count} (+1)` : 'Añadir'}`;
          } else {
            btn.innerHTML = `➕ ${count > 0 ? 'Sumar copias' : 'Añadir al Álbum'}`;
          }
        }
      }
    });
  }

  addEntireDeckToCollection(setCode) {
    const allCards = getCardsBySet(setCode);
    // Filtrar artes alternativos del propio set; las cartas que trae el mazo de otros sets
    // (reimpresiones _r1, artes _p del mazo) sí forman parte del mazo
    const ownPrefix = (normalizeSetCode(setCode) || setCode) + '-';
    const cards = allCards.filter(c => !c.id.includes('_') || !c.id.startsWith(ownPrefix));
    if (!cards || cards.length === 0) return;

    const targetFolder = (this.folderScope === 'shared' && this.activeFolderId) ? this.activeFolderId : 'default';

    cards.forEach(card => {
      this.addCardToTargetFolder(card, 1, targetFolder);
    });

    this.showToast(`🎉 ¡Añadidas las ${cards.length} cartas de ${setCode}!`);
  }

  cleanCardCode(raw) {
    if (!raw || typeof raw !== 'string') return null;

    // Código de versión estilo Cardmarket: OP09-093.v2, OP09-093 V2...
    const versionId = resolveVersionCode(raw);
    if (versionId) return versionId;

    let s = raw.trim();

    let suffix = '';
    const altMatch = s.match(/[-_\s]+([pPrRsS]\d+)$/i);
    if (altMatch) {
      suffix = '_' + altMatch[1].toLowerCase();
      s = s.slice(0, altMatch.index).trim();
    } else {
      const directAlt = s.match(/(_[a-zA-Z0-9]+)$/);
      if (directAlt) {
        suffix = directAlt[1].toLowerCase();
        s = s.slice(0, directAlt.index).trim();
      }
    }

    const m1 = s.match(/^(OP|ST|EB|PRB)\s*0*([1-9][0-9]?)[-\s]+0*([1-9][0-9]{0,2})$/i);
    if (m1) {
      const prefix = m1[1].toUpperCase();
      const setNum = m1[2].padStart(2, '0');
      const cardNum = m1[3].padStart(3, '0');
      return `${prefix}${setNum}-${cardNum}${suffix}`;
    }

    const m2 = s.match(/^(?:P|PROMO)[-\s]+0*([1-9][0-9]{0,2})$/i);
    if (m2) {
      const cardNum = m2[1].padStart(3, '0');
      return `P-${cardNum}${suffix}`;
    }

    const m3 = s.match(/^(OP|ST|EB|PRB)(\d{2})(\d{3})$/i);
    if (m3) {
      const prefix = m3[1].toUpperCase();
      return `${prefix}${m3[2]}-${m3[3]}${suffix}`;
    }

    const m4 = s.match(/^([A-Za-z0-9]+-[A-Za-z0-9]+)$/);
    if (m4) {
      return `${m4[1].toUpperCase()}${suffix}`;
    }

    return null;
  }

  getCardCountInActiveScope(cardId) {
    if (this.folderScope === 'shared' && this.activeFolderId) {
      const folder = this.sharedFoldersMap.get(this.activeFolderId);
      if (folder && folder.cards) {
        const found = folder.cards.find(c => c.id === cardId);
        return found ? (found.count || 0) : 0;
      }
      return 0;
    } else {
      if (this.activeFolderId && this.activeFolderId !== 'default') {
        const found = this.collection.find(c => c.id === cardId && c.folderId === this.activeFolderId);
        return found ? (found.count || 0) : 0;
      }
      const found = this.collection.find(c => c.id === cardId);
      return found ? (found.count || 0) : 0;
    }
  }

  fetchAndOpenCardModal(cardId) {
    const card = findOrGenerateCard(cardId);
    this.pendingCard = card;
    this.pendingQty = 1;

    const currentOwned = this.getCardCountInActiveScope(card.id);

    if (this.dom.modalCardId) this.dom.modalCardId.textContent = formatCardCode(card.id);
    if (this.dom.modalCardName) this.dom.modalCardName.textContent = card.name;
    if (this.dom.modalCardColor) {
      this.dom.modalCardColor.textContent = card.color;
      this.dom.modalCardColor.className = `color-badge col-${(card.color || 'Red').replace('/', '-')}`;
    }
    if (this.dom.modalCardTraits) this.dom.modalCardTraits.textContent = card.traits || 'One Piece Pirates';

    let metaStr = `${card.cardType || 'Character'}`;
    if (card.rarity) metaStr += ` • ${card.rarity}`;
    if (card.cost) metaStr += ` • Coste/Vida: ${card.cost}`;
    if (card.set) metaStr += ` • ${card.set}`;
    if (this.dom.modalCardMeta) this.dom.modalCardMeta.textContent = metaStr;

    if (this.dom.modalExistingMsg) {
      if (currentOwned > 0) {
        this.dom.modalExistingMsg.style.display = 'block';
        this.dom.modalExistingMsg.innerHTML = `📦 Ya tienes <strong>${currentOwned} copia(s)</strong> en tu colección.`;
      } else {
        this.dom.modalExistingMsg.style.display = 'none';
      }
    }

    // Precios Cardmarket: tendencia y oferta más barata
    const price = this.getCardPrice(card.id);
    const formatEur = (v) => (typeof v === 'number' ? `${v.toFixed(2).replace('.', ',')} €` : 'No disp.');
    if (this.dom.modalMkmPriceVal) this.dom.modalMkmPriceVal.textContent = formatEur(price && price.trend);
    if (this.dom.modalLowPriceVal) this.dom.modalLowPriceVal.textContent = formatEur(price && price.low);
    if (this.dom.modalPriceDate) {
      this.dom.modalPriceDate.textContent = price && price.date
        ? `📅 ${new Date(price.date.replace(/([+-]\d{2})(\d{2})$/, '$1:$2')).toLocaleDateString('es-ES')}`
        : 'Sin datos';
    }

    this.populateFolderSelects();
    if (this.dom.modalCustomQty) this.dom.modalCustomQty.value = 1;
    if (this.dom.qtyBtns) {
      this.dom.qtyBtns.forEach(b => {
        b.classList.toggle('active', parseInt(b.getAttribute('data-q')) === 1);
      });
    }

    this.updateModalForecast();
    if (this.dom.modalCardImg) this.setupRobustImage(this.dom.modalCardImg, card, 'full');
    if (this.dom.cardModal) this.dom.cardModal.classList.add('active');
  }

  updateModalForecast() {
    if (!this.pendingCard) return;
    const cur = this.getCardCountInActiveScope(this.pendingCard.id);
    const total = cur + this.pendingQty;

    if (cur > 0) {
      this.dom.modalForecast.textContent = `Añadir +${this.pendingQty} copias (Total: ${total})`;
      this.dom.btnSaveCardToAlbum.textContent = `Sumar +${this.pendingQty} a la Carpeta`;
    } else {
      this.dom.modalForecast.textContent = `Se añadirá por primera vez (${this.pendingQty} copia${this.pendingQty > 1 ? 's' : ''})`;
      this.dom.btnSaveCardToAlbum.textContent = `Guardar en la Carpeta`;
    }
  }

  // size 'thumb': miniatura ligera (cuadrículas). size 'full': muestra al instante la miniatura
  // (ya en caché del navegador) y la sustituye por la imagen grande en cuanto termina de cargar.
  setupRobustImage(imgElement, card, size = 'thumb') {
    if (!imgElement || !card) return;
    const urls = card.imageUrl ? [card.imageUrl] : [];
    urls.push(...getCardImageURLs(card.id, 'thumb'));

    // Token para ignorar cargas antiguas si el mismo <img> se reutiliza con otra carta
    const token = Symbol('img');
    imgElement._loadToken = token;
    const isCurrent = () => imgElement._loadToken === token;

    // Miniatura: se carga en el propio <img> (respeta loading="lazy") probando URLs en orden
    let idx = 0;
    imgElement.onload = null;
    imgElement.onerror = () => {
      if (!isCurrent()) return;
      if (idx < urls.length) {
        imgElement.src = urls[idx++];
      } else {
        imgElement.onerror = null;
        imgElement.src = generateFallbackCardSVG(card);
      }
    };
    imgElement.src = urls[idx++];

    if (size !== 'full') return;

    // Imagen grande: se precarga aparte y se cambia solo cuando está lista
    const fullUrls = getCardImageURLs(card.id, 'full');
    let fullIdx = 0;
    const probe = new Image();
    probe.onload = () => {
      if (isCurrent()) {
        imgElement.onerror = null;
        imgElement.src = probe.src;
      }
    };
    probe.onerror = () => {
      if (isCurrent() && fullIdx < fullUrls.length) probe.src = fullUrls[fullIdx++];
    };
    probe.src = fullUrls[fullIdx++];
  }

  openLightbox(card) {
    if (!card) return;
    if (this.dom.lightboxCardCode) this.dom.lightboxCardCode.textContent = formatCardCode(card.id);
    if (this.dom.lightboxCardName) this.dom.lightboxCardName.textContent = card.name;
    if (this.dom.lightboxCardImg) {
      this.setupRobustImage(this.dom.lightboxCardImg, card, 'full');
    }
    if (this.dom.lightboxModal) {
      this.dom.lightboxModal.style.display = 'flex';
    }
  }

  closeLightbox() {
    if (this.dom.lightboxModal) {
      this.dom.lightboxModal.style.display = 'none';
    }
  }

  closeModal() {
    this.dom.cardModal.classList.remove('active');
    this.pendingCard = null;
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    this.dom.viewAlbum.classList.toggle('active', tabId === 'album');
    this.dom.viewScanner.classList.toggle('active', tabId === 'scanner');
    this.dom.viewExport.classList.toggle('active', tabId === 'export');
    if (this.dom.viewPacks) this.dom.viewPacks.classList.toggle('active', tabId === 'packs');

    this.dom.navButtons.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-target') === `view-${tabId}`);
    });

    if (tabId === 'album') {
      this.renderAlbum();
    } else if (tabId === 'export') {
      this.populateExportFolderSelect();
    } else if (tabId === 'packs' && window.packOpener) {
      window.packOpener.renderPackList();
    }
  }

  updateHeaderStats() {
    const totalCopies = this.collection.reduce((sum, c) => sum + (c.count || 0), 0);
    const uniqueCards = this.collection.length;
    if (this.dom.headerStats) {
      this.dom.headerStats.textContent = `${totalCopies} cartas (${uniqueCards} únicas)`;
    }
  }

  // =========================================================================
  // EXPORTACIÓN E IMPORTACIÓN
  // =========================================================================

  populateExportFolderSelect() {
    if (!this.dom.exportFolderSelect) return;

    const currentVal = this.dom.exportFolderSelect.value || 'all';
    this.dom.exportFolderSelect.innerHTML = '';

    // Opción Colección Completa
    const totalAll = this.collection.reduce((sum, c) => sum + (c.count || 0), 0);
    const optAll = document.createElement('option');
    optAll.value = 'all';
    optAll.textContent = `🌐 Toda la Colección (${totalAll} cartas)`;
    this.dom.exportFolderSelect.appendChild(optAll);

    // Grupo Carpetas Personales
    const groupPersonal = document.createElement('optgroup');
    groupPersonal.label = '📁 Mis Carpetas (Personales)';
    this.personalFolders.forEach(f => {
      const opt = document.createElement('option');
      opt.value = `personal:${f.id}`;
      const count = (f.id === 'default')
        ? this.collection.filter(c => !c.folderId || c.folderId === 'default').reduce((sum, c) => sum + (c.count || 0), 0)
        : this.collection.filter(c => c.folderId === f.id).reduce((sum, c) => sum + (c.count || 0), 0);
      opt.textContent = `${f.icon || '📁'} ${f.name} (${count} cartas)`;
      groupPersonal.appendChild(opt);
    });
    this.dom.exportFolderSelect.appendChild(groupPersonal);

    // Grupo Carpetas Compartidas
    const sharedList = this.getSharedFoldersList();
    if (sharedList.length > 0) {
      const groupShared = document.createElement('optgroup');
      groupShared.label = '👥 Carpetas Compartidas';
      sharedList.forEach(f => {
        const opt = document.createElement('option');
        opt.value = `shared:${f.id}`;
        const count = (f.cards || []).reduce((sum, c) => sum + (c.count || 0), 0);
        opt.textContent = `${f.icon || '👥'} ${f.name} (${count} cartas)`;
        groupShared.appendChild(opt);
      });
      this.dom.exportFolderSelect.appendChild(groupShared);
    }

    // Mantener la selección si sigue existiendo
    const exists = Array.from(this.dom.exportFolderSelect.options).some(o => o.value === currentVal);
    if (exists) {
      this.dom.exportFolderSelect.value = currentVal;
    } else {
      this.dom.exportFolderSelect.value = 'all';
    }

    this.updateExportStatsBadge();
  }

  updateExportStatsBadge() {
    if (!this.dom.exportSourceStatsBadge) return;
    const { cards } = this.getSelectedExportCards();
    const totalCopies = cards.reduce((sum, c) => sum + (c.count || 0), 0);
    const uniqueCards = cards.length;
    this.dom.exportSourceStatsBadge.textContent = `${totalCopies} cartas (${uniqueCards} únicas)`;
  }

  getSelectedExportCards() {
    const val = this.dom.exportFolderSelect ? this.dom.exportFolderSelect.value : 'all';
    let targetName = 'Toda la Colección';
    let cards = [];

    if (val === 'all') {
      targetName = 'Toda la Colección';
      cards = [...this.collection];
    } else if (val.startsWith('personal:')) {
      const folderId = val.replace('personal:', '');
      const folder = this.personalFolders.find(f => f.id === folderId);
      targetName = folder ? folder.name : 'Carpeta Personal';
      if (folderId === 'default') {
        cards = this.collection.filter(c => !c.folderId || c.folderId === 'default');
      } else {
        cards = this.collection.filter(c => c.folderId === folderId);
      }
    } else if (val.startsWith('shared:')) {
      const folderId = val.replace('shared:', '');
      const folder = this.sharedFoldersMap.get(folderId);
      targetName = folder ? folder.name : 'Carpeta Compartida';
      cards = folder && folder.cards ? [...folder.cards] : [];
    }

    return { name: targetName, cards };
  }

  exportActiveFolder() {
    let selectVal = 'personal:default';
    if (this.folderScope === 'personal') {
      selectVal = `personal:${this.activeFolderId || 'default'}`;
    } else if (this.folderScope === 'shared' && this.activeFolderId) {
      selectVal = `shared:${this.activeFolderId}`;
    }
    this.switchTab('export');
    if (this.dom.exportFolderSelect) {
      this.dom.exportFolderSelect.value = selectVal;
      this.updateExportStatsBadge();
    }
  }

  async copyAndPreviewExport(text, title, subtitle) {
    try {
      await navigator.clipboard.writeText(text);
      this.showToast("📋 ¡Copiado al portapapeles!");
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      this.showToast("📋 ¡Copiado al portapapeles!");
    }

    if (this.dom.exportPreviewModal && this.dom.exportPreviewTextarea) {
      if (this.dom.exportPreviewTitle) this.dom.exportPreviewTitle.textContent = `📋 ${title}`;
      if (this.dom.exportPreviewSubtitle) this.dom.exportPreviewSubtitle.textContent = subtitle;
      this.dom.exportPreviewTextarea.value = text;
      this.dom.exportPreviewModal.classList.add('active');
    }
  }

  async copyFromExportPreview() {
    if (!this.dom.exportPreviewTextarea) return;
    const text = this.dom.exportPreviewTextarea.value;
    try {
      await navigator.clipboard.writeText(text);
      this.showToast("📋 ¡Copiado de nuevo al portapapeles!");
    } catch (e) {
      this.dom.exportPreviewTextarea.select();
      document.execCommand('copy');
      this.showToast("📋 ¡Copiado al portapapeles!");
    }
  }

  // Suma las copias de una misma carta repartida en varias carpetas
  mergeExportCards(cards) {
    const merged = new Map();
    cards.forEach(c => {
      const id = normalizeCardId(c.id || '');
      if (!id) return;
      const entry = merged.get(id);
      if (entry) entry.qty += c.count || 1;
      else merged.set(id, { card: c, qty: c.count || 1 });
    });
    return [...merged.values()];
  }

  // "OP09-093_p1" -> "OP09-093" (las tiendas no entienden el sufijo interno de versión)
  baseCardCode(cardId) {
    return normalizeCardId(cardId || '').split('_')[0];
  }

  // Línea de la Wants List de Cardmarket con versión (V.n) y expansión inglesa exactas cuando
  // se conocen (prices-data.js); si no, Cardmarket acepta cualquier versión de ese código
  cardmarketWantLine(card, qty) {
    const entry = (window.ONE_PIECE_PRICES_DB || {})[normalizeCardId(card.id)];
    const expansion = entry && (window.ONE_PIECE_MKM_EXPANSIONS || {})[entry.exp];
    const version = entry && entry.v ? ` (V.${entry.v})` : '';
    return `${qty}x ${(card.name || '').trim()} ${this.baseCardCode(card.id)}${version}${expansion ? ' ' + expansion : ''}`;
  }

  exportWishlist() {
    const { name, cards } = this.getSelectedExportCards();
    if (cards.length === 0) {
      this.showToast(`No tienes cartas en "${name}" para exportar`);
      return;
    }

    // Formato Wishlist Universal: [Quantity]x [Card Name] [Collector Number]
    const lines = this.mergeExportCards(cards).map(({ card, qty }) =>
      `${qty}x ${(card.name || '').trim()} ${this.baseCardCode(card.id)}`);

    const text = lines.join('\n');
    const totalCopies = cards.reduce((sum, c) => sum + (c.count || 0), 0);
    this.copyAndPreviewExport(
      text,
      `Wishlist - ${name}`,
      `Formato directo para lista de deseos (${totalCopies} cartas de "${name}"). ¡Ya está copiado en tu portapapeles!`
    );
  }

  exportCardmarketWants() {
    const { name, cards } = this.getSelectedExportCards();
    if (cards.length === 0) {
      this.showToast(`No tienes cartas en "${name}" para exportar`);
      return;
    }

    // Formato Cardmarket Wants (help.cardmarket.com): "2x Roronoa Zoro OP01-025 (V.2) Romance Dawn"
    const lines = this.mergeExportCards(cards).map(({ card, qty }) => this.cardmarketWantLine(card, qty));

    const text = lines.join('\n');
    const totalCopies = cards.reduce((sum, c) => sum + (c.count || 0), 0);
    this.copyAndPreviewExport(
      text,
      `Cardmarket Wants - ${name}`,
      `Formato directo para la Wants List de Cardmarket (${totalCopies} cartas de "${name}"). ¡Ya está en tu portapapeles!`
    );
  }

  exportCardTraderWishlist() {
    const { name, cards } = this.getSelectedExportCards();
    if (cards.length === 0) {
      this.showToast(`No tienes cartas en "${name}" para exportar`);
      return;
    }

    // Formato CardTrader: [Quantity]x [Card Name] [Collector Number]
    const lines = this.mergeExportCards(cards).map(({ card, qty }) =>
      `${qty}x ${(card.name || '').trim()} ${this.baseCardCode(card.id)}`);

    const text = lines.join('\n');
    const totalCopies = cards.reduce((sum, c) => sum + (c.count || 0), 0);
    this.copyAndPreviewExport(
      text,
      `CardTrader Wishlist - ${name}`,
      `Formato directo para importar a CardTrader Wishlist (${totalCopies} cartas de "${name}"). ¡Ya está en tu portapapeles!`
    );
  }

  exportSimulatorDecklist() {
    const { name, cards } = this.getSelectedExportCards();
    if (cards.length === 0) {
      this.showToast(`No tienes cartas en "${name}" para exportar`);
      return;
    }

    // Formato OPTCGSim: [Quantity]x[Code]
    const lines = cards.map(c => {
      const qty = c.count || 1;
      const code = (c.id || '').trim().toUpperCase();
      return `${qty}x${code}`;
    });

    const text = lines.join('\n');
    const totalCopies = cards.reduce((sum, c) => sum + (c.count || 0), 0);
    this.copyAndPreviewExport(
      text,
      `Simulador OPTCG - ${name}`,
      `Formato para mazo de OPTCGSim (${totalCopies} cartas de "${name}"). ¡Ya está en tu portapapeles!`
    );
  }

  async copyToGoogleSheets() {
    const { name, cards } = this.getSelectedExportCards();
    if (cards.length === 0) {
      this.showToast(`No tienes cartas en "${name}" para exportar`);
      return;
    }

    let tsv = "Código\tNombre\tCantidad\tColor\tType / Rasgos\tTipo\tRareza\tCoste/Vida\tExpansión\tCarpeta\tFecha\n";
    cards.forEach(c => {
      tsv += `${c.id}\t${c.name}\t${c.count}\t${c.color}\t${c.traits || ''}\t${c.cardType || ''}\t${c.rarity || ''}\t${c.cost || ''}\t${c.set || ''}\t${c.folderId || 'default'}\t${c.addedAt || ''}\n`;
    });

    try {
      await navigator.clipboard.writeText(tsv);
      this.showToast(`📋 ¡Copiado (${name})! Abre Google Sheets y pulsa Pegar`);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = tsv;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      this.showToast(`📋 ¡Copiado (${name}) para Google Sheets!`);
    }
  }

  exportFolderJSON() {
    const { name, cards } = this.getSelectedExportCards();
    if (cards.length === 0) {
      this.showToast(`No tienes cartas en "${name}" para exportar`);
      return;
    }

    const payload = {
      app: 'OnePieceTCGDex',
      version: '2.6',
      exportedAt: new Date().toISOString(),
      folderName: name,
      totalCards: cards.reduce((sum, c) => sum + (c.count || 0), 0),
      uniqueCards: cards.length,
      cards: cards
    };

    const jsonStr = JSON.stringify(payload, null, 2);
    const sanitizedName = name.replace(/[^a-zA-Z0-9_\u00C0-\u017F-]/g, '_');
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `OnePiece_TCG_Backup_${sanitizedName}_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    this.showToast(`💾 Copia JSON (${name}) descargada`);
  }

  // =========================================================================
  // GENERADOR DE IMÁGENES DE CARPETAS (POSTER / BINDER)
  // =========================================================================

  openFolderImageModalForActive() {
    let folderKey = 'personal:default';
    if (this.folderScope === 'personal') {
      folderKey = `personal:${this.activeFolderId || 'default'}`;
    } else if (this.folderScope === 'shared' && this.activeFolderId) {
      folderKey = `shared:${this.activeFolderId}`;
    }
    this.openFolderImageModal(folderKey);
  }

  openFolderImageModalForSelected() {
    const val = this.dom.exportFolderSelect ? this.dom.exportFolderSelect.value : 'all';
    this.openFolderImageModal(val);
  }

  openFolderImageModal(folderKey) {
    let targetName = 'Toda la Colección';
    let targetIcon = '🌐';
    let targetType = 'Colección Completa';
    let cards = [];

    if (!folderKey || folderKey === 'all') {
      targetName = 'Toda la Colección';
      targetIcon = '🌐';
      targetType = 'Colección Completa';
      cards = [...this.collection];
    } else if (folderKey.startsWith('personal:')) {
      const folderId = folderKey.replace('personal:', '');
      const folder = this.personalFolders.find(f => f.id === folderId);
      targetName = folder ? folder.name : 'Álbum General';
      targetIcon = folder ? (folder.icon || '📁') : '📁';
      targetType = 'Carpeta Personal';
      if (folderId === 'default') {
        cards = this.collection.filter(c => !c.folderId || c.folderId === 'default');
      } else {
        cards = this.collection.filter(c => c.folderId === folderId);
      }
    } else if (folderKey.startsWith('shared:')) {
      const folderId = folderKey.replace('shared:', '');
      const folder = this.sharedFoldersMap.get(folderId);
      targetName = folder ? folder.name : 'Carpeta Compartida';
      targetIcon = folder ? (folder.icon || '👥') : '👥';
      targetType = 'Carpeta Compartida';
      cards = folder && folder.cards ? [...folder.cards] : [];
    }

    // Filtrar cartas con count > 0
    cards = cards.filter(c => (c.count || 0) > 0);

    if (cards.length === 0) {
      this.showToast(`⚠️ No hay cartas en "${targetName}" para generar una imagen`);
      return;
    }

    this.currentImageFolderData = {
      name: targetName,
      icon: targetIcon,
      type: targetType,
      cards: cards
    };

    if (this.dom.imageModalTitle) {
      this.dom.imageModalTitle.textContent = `🖼️ Imagen: ${targetIcon} ${targetName}`;
    }

    if (this.dom.imageExportModal) {
      this.dom.imageExportModal.classList.add('active');
    }

    this.renderFolderImage(this.currentImageTheme);
  }

  closeFolderImageModal() {
    if (this.dom.imageExportModal) {
      this.dom.imageExportModal.classList.remove('active');
    }
  }

  switchImageTheme(theme) {
    this.currentImageTheme = theme;
    if (this.dom.imageThemeChips) {
      this.dom.imageThemeChips.forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-theme') === theme);
      });
    }
    if (this.currentImageFolderData) {
      this.renderFolderImage(theme);
    }
  }

  async renderFolderImage(theme = 'dark') {
    if (!this.currentImageFolderData) return;
    const { name, icon, type, cards } = this.currentImageFolderData;

    if (this.dom.imageGenStatus) {
      this.dom.imageGenStatus.style.display = 'inline-flex';
    }

    const canvas = this.dom.folderImageCanvas || document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const totalCopies = cards.reduce((sum, c) => sum + (c.count || 0), 0);
    const uniqueCount = cards.length;

    // Calcular distribución de columnas óptima
    let cols = 4;
    if (uniqueCount <= 3) cols = uniqueCount;
    else if (uniqueCount <= 8) cols = 4;
    else if (uniqueCount <= 20) cols = 5;
    else cols = 6;

    const rows = Math.ceil(uniqueCount / cols);

    const padding = 36;
    const headerHeight = 110;
    const footerHeight = 46;
    const cardGap = 16;
    const cardWidth = 200;
    const cardHeight = 280; // ratio estándar 5:7

    const totalWidth = padding * 2 + (cols * cardWidth) + ((cols - 1) * cardGap);
    const totalHeight = padding * 2 + headerHeight + (rows * cardHeight) + ((rows - 1) * cardGap) + footerHeight;

    canvas.width = totalWidth;
    canvas.height = totalHeight;

    // Paleta de colores según tema
    let bgGradientStart = '#0b0f19';
    let bgGradientEnd = '#04070e';
    let accentColor = '#f59e0b';
    let textMain = '#ffffff';
    let textMuted = '#94a3b8';
    let borderSubtle = 'rgba(255, 255, 255, 0.12)';
    let cardBg = '#131b2e';

    if (theme === 'marine') {
      bgGradientStart = '#0a192f';
      bgGradientEnd = '#020c1b';
      accentColor = '#38bdf8';
      textMain = '#f0f9ff';
      textMuted = '#7dd3fc';
      borderSubtle = 'rgba(56, 189, 248, 0.25)';
      cardBg = '#0e2444';
    } else if (theme === 'gold') {
      bgGradientStart = '#1f1606';
      bgGradientEnd = '#0d0902';
      accentColor = '#fbbf24';
      textMain = '#fffbeb';
      textMuted = '#d97706';
      borderSubtle = 'rgba(251, 191, 36, 0.3)';
      cardBg = '#291f09';
    }

    // Fondo degradado del Poster
    const bgGrad = ctx.createLinearGradient(0, 0, 0, totalHeight);
    bgGrad.addColorStop(0, bgGradientStart);
    bgGrad.addColorStop(1, bgGradientEnd);
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, totalWidth, totalHeight);

    // Marco exterior con esquinas suaves
    this.drawRoundedRect(ctx, 12, 12, totalWidth - 24, totalHeight - 24, 16);
    ctx.strokeStyle = borderSubtle;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Header del Poster
    ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = textMain;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${icon} ${name}`, padding, padding + 30);

    ctx.font = '600 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = accentColor;
    const statsText = `${type} • ${totalCopies} cartas en total (${uniqueCount} únicas)`;
    ctx.fillText(statsText, padding, padding + 68);

    // Badge OP-TCG DEX en la esquina superior derecha
    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = accentColor;
    ctx.textAlign = 'right';
    ctx.fillText('OP-TCG DEX', totalWidth - padding, padding + 28);
    ctx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = textMuted;
    ctx.fillText(new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }), totalWidth - padding, padding + 54);

    // Línea divisoria bajo el header
    ctx.strokeStyle = borderSubtle;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding + headerHeight - 12);
    ctx.lineTo(totalWidth - padding, padding + headerHeight - 12);
    ctx.stroke();

    // Cargar y dibujar cada carta
    const gridStartY = padding + headerHeight;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = padding + col * (cardWidth + cardGap);
      const y = gridStartY + row * (cardHeight + cardGap);

      // Fondo base de la carta
      this.drawRoundedRect(ctx, x, y, cardWidth, cardHeight, 10);
      ctx.fillStyle = cardBg;
      ctx.fill();
      ctx.strokeStyle = borderSubtle;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Cargar imagen de la carta
      const imgUrls = (typeof getCardImageURLs === 'function') ? getCardImageURLs(card.id) : [];
      let imgLoaded = false;

      for (let url of imgUrls) {
        if (!url) continue;
        try {
          const img = await this.loadImageAsync(url);
          if (img) {
            ctx.save();
            this.drawRoundedRect(ctx, x, y, cardWidth, cardHeight, 10);
            ctx.clip();
            ctx.drawImage(img, x, y, cardWidth, cardHeight);
            ctx.restore();
            imgLoaded = true;
            break;
          }
        } catch (e) {
          // continuar con siguiente url
        }
      }

      if (!imgLoaded) {
        this.drawCardVectorFallback(ctx, card, x, y, cardWidth, cardHeight);
      }

      // Borde sutil de la carta
      this.drawRoundedRect(ctx, x, y, cardWidth, cardHeight, 10);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Badge de Cantidad (x4, x2, etc.) en esquina superior derecha
      const qty = card.count || 1;
      const badgeText = `x${qty}`;
      ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      const badgeMetrics = ctx.measureText(badgeText);
      const badgeW = Math.max(34, badgeMetrics.width + 14);
      const badgeH = 24;
      const badgeX = x + cardWidth - badgeW - 6;
      const badgeY = y + 6;

      this.drawRoundedRect(ctx, badgeX, badgeY, badgeW, badgeH, 6);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.88)';
      ctx.fill();
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = accentColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(badgeText, badgeX + badgeW / 2, badgeY + badgeH / 2);

      // Badge de Código en esquina inferior izquierda
      const codeText = card.id || '';
      ctx.font = 'bold 12px monospace';
      const codeMetrics = ctx.measureText(codeText);
      const codeW = codeMetrics.width + 10;
      const codeH = 20;
      const codeX = x + 6;
      const codeY = y + cardHeight - codeH - 6;

      this.drawRoundedRect(ctx, codeX, codeY, codeW, codeH, 4);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.88)';
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(codeText, codeX + codeW / 2, codeY + codeH / 2);
    }

    // Footer del Poster
    const footerY = totalHeight - padding / 2 - 2;
    ctx.font = '600 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = textMuted;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Generado con One Piece TCG Dex • Colección & Álbum de Cartas', totalWidth / 2, footerY);

    // Exportar resultado
    try {
      this.currentImageDataUrl = canvas.toDataURL('image/png');
      if (this.dom.folderImageResult) {
        this.dom.folderImageResult.src = this.currentImageDataUrl;
      }
      canvas.toBlob(blob => {
        this.currentImageBlob = blob;
      }, 'image/png');
    } catch (e) {
      console.warn('Canvas export warning:', e);
      if (this.dom.folderImageResult) {
        this.dom.folderImageResult.src = canvas.toDataURL();
      }
    }

    if (this.dom.imageGenStatus) {
      this.dom.imageGenStatus.style.display = 'none';
    }
  }

  drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  loadImageAsync(url) {
    return new Promise((resolve, reject) => {
      if (!url) return reject(new Error('No URL'));
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Load error'));
      img.src = url;
    });
  }

  drawCardVectorFallback(ctx, card, x, y, w, h) {
    const colorMap = {
      'Red': ['#991b1b', '#450a0a'],
      'Green': ['#065f46', '#022c22'],
      'Blue': ['#1e40af', '#172554'],
      'Purple': ['#6b21a8', '#3b0764'],
      'Black': ['#334155', '#0f172a'],
      'Yellow': ['#854d0e', '#422006']
    };
    const colors = colorMap[card.color] || ['#1e293b', '#0f172a'];
    const grad = ctx.createLinearGradient(x, y, x, y + h);
    grad.addColorStop(0, colors[0]);
    grad.addColorStop(1, colors[1]);

    ctx.save();
    this.drawRoundedRect(ctx, x, y, w, h, 10);
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const name = card.name || 'Carta One Piece';
    ctx.fillText(name.slice(0, 18), x + w / 2, y + h / 2 - 20);

    ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillText(card.cardType || 'Character', x + w / 2, y + h / 2 + 6);
    if (card.traits) {
      ctx.fillText(card.traits.slice(0, 20), x + w / 2, y + h / 2 + 26);
    }

    ctx.restore();
  }

  downloadFolderImage() {
    if (!this.currentImageDataUrl && !this.dom.folderImageCanvas) {
      this.showToast('⚠️ Primero abre una carpeta para generar la imagen');
      return;
    }
    const folderName = (this.currentImageFolderData ? this.currentImageFolderData.name : 'Carpeta').replace(/[^a-zA-Z0-9_\u00C0-\u017F-]/g, '_');
    const link = document.createElement('a');
    link.download = `OnePiece_TCG_${folderName}_${new Date().toISOString().slice(0, 10)}.png`;
    link.href = this.currentImageDataUrl || (this.dom.folderImageCanvas ? this.dom.folderImageCanvas.toDataURL('image/png') : '');
    link.click();
    this.showToast('📥 Imagen PNG descargada');
  }

  async copyFolderImageToClipboard() {
    if (!this.currentImageBlob && this.dom.folderImageCanvas) {
      try {
        this.dom.folderImageCanvas.toBlob(blob => {
          this.currentImageBlob = blob;
          this.performCopyImageBlob(blob);
        }, 'image/png');
        return;
      } catch (e) {}
    }
    if (this.currentImageBlob) {
      this.performCopyImageBlob(this.currentImageBlob);
    } else {
      this.showToast('⚠️ No se pudo copiar la imagen directamente');
    }
  }

  async performCopyImageBlob(blob) {
    try {
      if (navigator.clipboard && navigator.clipboard.write) {
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        this.showToast('📋 ¡Imagen copiada al portapapeles!');
      } else {
        this.showToast('⚠️ Tu navegador no admite copiar imágenes al portapapeles');
      }
    } catch (e) {
      console.warn('Clipboard write error:', e);
      this.showToast('⚠️ Usa "Descargar PNG" para guardarla');
    }
  }

  async shareFolderImage() {
    if (!this.currentImageBlob) {
      this.downloadFolderImage();
      return;
    }
    const folderName = this.currentImageFolderData ? this.currentImageFolderData.name : 'Carpeta';
    const fileName = `OnePiece_TCG_${folderName.replace(/[^a-zA-Z0-9_-]/g, '_')}.png`;
    const file = new File([this.currentImageBlob], fileName, { type: 'image/png' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: `One Piece TCG - ${folderName}`,
          text: `¡Mira mi carpeta/mazo "${folderName}" de One Piece TCG!`
        });
        this.showToast('📤 Compartido con éxito');
      } catch (e) {
        if (e.name !== 'AbortError') {
          this.downloadFolderImage();
        }
      }
    } else {
      this.downloadFolderImage();
    }
  }

  downloadExcelCSV() {
    const { name, cards } = this.getSelectedExportCards();
    if (cards.length === 0) {
      this.showToast(`No tienes cartas en "${name}" para exportar`);
      return;
    }

    let csv = "\uFEFFCódigo,Nombre,Cantidad,Color,Type / Rasgos,Tipo,Rareza,Coste/Vida,Expansión,Carpeta,Fecha\n";
    cards.forEach(c => {
      csv += `"${c.id}","${(c.name || '').replace(/"/g, '""')}",${c.count},"${c.color}","${(c.traits || '').replace(/"/g, '""')}","${c.cardType || ''}","${c.rarity || ''}","${c.cost || ''}","${(c.set || '').replace(/"/g, '""')}","${c.folderId || 'default'}","${c.addedAt || ''}"\n`;
    });

    const sanitizedName = name.replace(/[^a-zA-Z0-9_\u00C0-\u017F-]/g, '_');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `OnePiece_TCG_${sanitizedName}_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    this.showToast(`📊 Archivo Excel CSV (${name}) descargado`);
  }

  handleExcelCSVImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const target = this.dom.importFolderSelect ? this.dom.importFolderSelect.value : null;
      this.parseAndImportDelimitedText(content, target);
      e.target.value = '';
    };
    reader.readAsText(file);
  }

  async parseAndImportDelimitedText(text, targetFolderId) {
    if (!text || !text.trim()) return;

    // Carpeta destino: la elegida en el selector o, si no hay, la carpeta abierta en el álbum
    const folderId = targetFolderId || this.activeFolderId || 'default';

    // Detectar si es un archivo de respaldo JSON
    const trimmed = text.trim();
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      try {
        const parsed = JSON.parse(trimmed);
        const importedCards = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.cards) ? parsed.cards : null);
        if (importedCards && importedCards.length > 0) {
          const items = [];
          const notFound = [];

          importedCards.forEach(c => {
            const cardCode = c.id || c.code;
            if (!cardCode) return;
            const qty = parseInt(c.count || c.qty) || 1;
            const cardInfo = findExistingCard(cardCode);
            if (!cardInfo) {
              notFound.push(String(cardCode).trim());
              return;
            }
            items.push({ card: cardInfo, qty });
          });

          await this.finishImport(items, notFound, folderId, '💾 ¡Respaldo JSON importado');
          return;
        }
      } catch (err) {
        // Si no era JSON válido, continuar con parseo CSV/TSV
      }
    }

    const lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter(l => l.trim().length > 0);
    if (lines.length === 0) {
      this.showToast("El archivo o texto está vacío");
      return;
    }

    let delimiter = ',';
    const firstLine = lines[0];
    if (firstLine.includes('\t')) {
      delimiter = '\t';
    } else if (firstLine.includes(';')) {
      delimiter = ';';
    }

    const items = [];
    const notFound = [];

    lines.forEach((line, idx) => {
      // Formato lista de mazo: "4xOP01-001", "4 x OP01-001", "4 OP01-001", "OP01-001 x4"
      let lineQty = null;
      const cols = this.splitCSVLine(line, delimiter).map(c => {
        const pre = c.match(/^(\d{1,3})\s*[x×]\s*(\S.*)$/i) || c.match(/^(\d{1,3}) +(\S.*)$/);
        const post = !pre && c.match(/^(.*\S)\s*[x×]\s*(\d{1,3})$/i);
        if (pre && this.cleanCardCode(pre[2])) {
          lineQty = parseInt(pre[1]);
          return pre[2];
        }
        if (post && this.cleanCardCode(post[1])) {
          lineQty = parseInt(post[2]);
          return post[1];
        }
        return c;
      });
      if (cols.length === 0) return;

      const firstCol = cols[0].trim();
      if (idx === 0 && (firstCol.toLowerCase().includes('código') || firstCol.toLowerCase().includes('codigo') || firstCol.toLowerCase().includes('code') || firstCol.toLowerCase().includes('id'))) {
        return;
      }

      let cardCode = null;
      let qty = 1;

      for (let c of cols) {
        const cleaned = this.cleanCardCode(c);
        if (cleaned) {
          cardCode = cleaned;
          break;
        }
      }

      if (!cardCode && firstCol) {
        cardCode = this.cleanCardCode(firstCol) || firstCol.toUpperCase();
      }

      if (!cardCode || cardCode.length < 4) return;

      if (lineQty > 0) {
        qty = lineQty;
      } else {
        for (let c of cols) {
          const num = parseInt(c.trim());
          if (!isNaN(num) && num > 0 && num < 1000 && c.trim() !== cardCode && !c.includes('-')) {
            qty = num;
            break;
          }
        }
      }

      const cardInfo = findExistingCard(cardCode);
      if (!cardInfo) {
        notFound.push(cardCode);
        return;
      }

      items.push({ card: cardInfo, qty });
    });

    await this.finishImport(items, notFound, folderId, '✅ ¡Importadas');
  }

  // Añade las cartas importadas a la carpeta destino (personal o compartida) y la abre en el álbum
  async finishImport(items, notFound, folderId, successPrefix) {
    let total = 0;
    let newCount = 0;
    if (items.length > 0) {
      ({ total, newCount } = await this.addCardsToTargetFolder(items, folderId, { silent: true }));
      this.openFolderInAlbum(folderId);
    }
    const folderName = this.getFolderDisplayName(folderId);
    this.showImportResultToast(`${successPrefix} +${total} copias (${newCount} nuevas) en "${folderName}"!`, total, notFound);
  }

  getFolderDisplayName(folderId) {
    const shared = this.sharedFoldersMap.get(folderId);
    if (shared) return shared.name || 'Compartida';
    const personal = this.personalFolders.find(f => f.id === folderId);
    return personal ? personal.name : 'Álbum General';
  }

  // Resumen de importación avisando de las cartas que no existen en la base de datos
  showImportResultToast(successMsg, importedCount, notFound) {
    const unique = [...new Set(notFound)];
    if (unique.length === 0) {
      this.showToast(successMsg);
      return;
    }
    const shown = unique.slice(0, 5).join(', ') + (unique.length > 5 ? ` y ${unique.length - 5} más` : '');
    const missingMsg = unique.length === 1
      ? `❌ Carta ${unique[0]} no encontrada`
      : `❌ ${unique.length} cartas no encontradas: ${shown}`;
    this.showToast(importedCount > 0 ? `${successMsg}\n${missingMsg}` : missingMsg, 6000);
  }

  splitCSVLine(line, delimiter) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === delimiter && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  }

  // =========================================================================
  // FIREBASE AUTH & FIRESTORE REAL-TIME SYNC
  // =========================================================================

  initFirebaseAuth() {
    if (typeof firebase === 'undefined' || !window.FIREBASE_AUTH) {
      return;
    }

    window.FIREBASE_AUTH.onAuthStateChanged(async (user) => {
      this.currentUser = user;
      this.updateAuthUI(user);

      if (user) {
        this.setupCloudListener(user);
        this.setupAllSharedFolderListeners();
      } else {
        if (this.firestoreUnsubUser) {
          this.firestoreUnsubUser();
          this.firestoreUnsubUser = null;
        }
      }
    });
  }

  updateAuthUI(user) {
    if (!this.dom.btnGoogleLogin || !this.dom.userProfileMenu) return;

    if (user) {
      this.dom.btnGoogleLogin.style.display = 'none';
      this.dom.userProfileMenu.style.display = 'flex';
      if (this.dom.userAvatar) {
        this.dom.userAvatar.src = user.photoURL || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%23f59e0b"/><text x="50" y="65" font-size="45" text-anchor="middle" fill="%23000">🏴‍☠️</text></svg>';
      }
      if (this.dom.userName) {
        this.dom.userName.textContent = user.displayName ? user.displayName.split(' ')[0] : 'Capitán';
      }
      if (this.dom.cloudSyncStatus) {
        this.dom.cloudSyncStatus.textContent = '🟢 Sincronizado';
        this.dom.cloudSyncStatus.className = 'sync-badge-ok';
      }
    } else {
      this.dom.btnGoogleLogin.style.display = 'flex';
      this.dom.userProfileMenu.style.display = 'none';
    }
  }

  async loginWithGoogle() {
    if (!window.IS_FIREBASE_READY || !window.FIREBASE_AUTH) {
      alert("⚠️ Para iniciar sesión con Google, revisa la configuración en 'firebase-config.js'.");
      return;
    }

    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await window.FIREBASE_AUTH.signInWithPopup(provider);
      this.showToast("¡Sesión iniciada con éxito!");
    } catch (err) {
      console.error("Error al iniciar sesión con Google:", err);
      if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
        try {
          const provider = new firebase.auth.GoogleAuthProvider();
          await window.FIREBASE_AUTH.signInWithRedirect(provider);
        } catch (redirectErr) {
          this.showToast("Error de autenticación: " + redirectErr.message);
        }
      } else {
        this.showToast("Error: " + (err.message || "No se pudo iniciar sesión"));
      }
    }
  }

  async logout() {
    if (window.FIREBASE_AUTH) {
      try {
        if (this.firestoreUnsubUser) {
          this.firestoreUnsubUser();
          this.firestoreUnsubUser = null;
        }
        await window.FIREBASE_AUTH.signOut();
        
        // Limpiar estado de usuario y colección para no mezclar cuentas
        this.currentUser = null;
        this.collection = [];
        this.personalFolders = [{ id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b', type: 'personal' }];
        this.sharedFolderIds = [];
        this.sharedFoldersMap.clear();
        this.activeFolderId = 'default';
        this.folderScope = 'personal';

        localStorage.setItem('op_tcg_cards_v7', JSON.stringify([]));
        localStorage.setItem('op_tcg_personal_folders_v1', JSON.stringify(this.personalFolders));
        localStorage.setItem('op_tcg_shared_ids_v1', JSON.stringify([]));

        this.updateHeaderStats();
        this.renderFolderTabs();
        this.renderAlbum();
        this.populateExportFolderSelect();
        this.showToast("Has cerrado sesión.");
      } catch (err) {
        console.error("Error al cerrar sesión:", err);
      }
    }
  }

  setupCloudListener(user) {
    if (!window.FIREBASE_DB) return;

    if (this.firestoreUnsubUser) {
      this.firestoreUnsubUser();
    }

    const docRef = window.FIREBASE_DB.collection('users').doc(user.uid);
    let isFirstSnapshot = true;

    this.firestoreUnsubUser = docRef.onSnapshot(async (doc) => {
      const firstSnapshot = isFirstSnapshot;
      isFirstSnapshot = false;
      if (doc.exists) {
        const data = doc.data();
        if (data) {
          let updated = false;
          let cloudCards = Array.isArray(data.collection) ? data.collection : [];
          
          // Si la nube tenía cartas demo residuales heredadas de cuentas vacías antiguas, limpiarlas
          const legacyDemoIds = ["OP17-039", "OP17-118", "OP17-001", "OP09-082", "OP09-118", "OP09-021"];
          const isLegacyDemo = cloudCards.length === 6 && 
            cloudCards.every(c => legacyDemoIds.includes(c.id) && (!c.folderId || c.folderId === 'default'));
          
          if (isLegacyDemo) {
            cloudCards = [];
            // Actualizar doc en la nube para limpiar definitivamente
            docRef.update({ collection: [], updatedAt: firebase.firestore.FieldValue.serverTimestamp() }).catch(() => {});
          }

          cloudCards = this.normalizeCollection(cloudCards);

          // Al iniciar sesión, las cartas guardadas solo en este navegador (añadidas sin sesión)
          // se suman a la nube en vez de desaparecer al cargar la colección de la cuenta
          let localOnly = [];
          if (firstSnapshot) {
            const cloudKeys = new Set(cloudCards.map(c => `${c.id}|${c.folderId || 'default'}`));
            const cloudFolderIds = new Set((data.personalFolders || []).map(f => f.id));
            localOnly = this.collection
              .filter(c => !cloudKeys.has(`${c.id}|${c.folderId || 'default'}`))
              .map(c => (cloudFolderIds.has(c.folderId) ? c : { ...c, folderId: 'default' }));
            if (localOnly.length) cloudCards = this.normalizeCollection([...cloudCards, ...localOnly]);
          }

          if (JSON.stringify(cloudCards) !== JSON.stringify(this.collection)) {
            this.collection = cloudCards;
            localStorage.setItem('op_tcg_cards_v7', JSON.stringify(this.collection));
            updated = true;
          }

          const personalFolders = Array.isArray(data.personalFolders) && data.personalFolders.length > 0
            ? data.personalFolders
            : [{ id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b', type: 'personal' }];

          if (JSON.stringify(personalFolders) !== JSON.stringify(this.personalFolders)) {
            this.personalFolders = personalFolders;
            localStorage.setItem('op_tcg_personal_folders_v1', JSON.stringify(this.personalFolders));
            updated = true;
          }

          const sharedIds = Array.isArray(data.sharedFolderIds) ? data.sharedFolderIds : [];
          if (JSON.stringify(sharedIds) !== JSON.stringify(this.sharedFolderIds)) {
            this.sharedFolderIds = sharedIds;
            localStorage.setItem('op_tcg_shared_ids_v1', JSON.stringify(this.sharedFolderIds));
            this.setupAllSharedFolderListeners();
            updated = true;
          }

          if (updated) {
            this.updateHeaderStats();
            this.renderFolderTabs();
            this.renderAlbum();
            this.populateExportFolderSelect();
          }

          if (localOnly.length) {
            this.scheduleCloudSync();
            this.showToast(`☁️ ${localOnly.length} cartas de este navegador añadidas a tu cuenta`);
          }
        }
      } else {
        // Primera vez del usuario en la nube:
        // Asegurar que si es una cuenta nueva limpia, no tenga cartas demo residuales
        const legacyDemoIds = ["OP17-039", "OP17-118", "OP17-001", "OP09-082", "OP09-118", "OP09-021"];
        const isLegacyDemo = this.collection.length === 6 && 
          this.collection.every(c => legacyDemoIds.includes(c.id) && (!c.folderId || c.folderId === 'default'));
        
        if (isLegacyDemo) {
          this.collection = [];
          localStorage.setItem('op_tcg_cards_v7', JSON.stringify([]));
        }

        try {
          await docRef.set({
            collection: this.collection || [],
            personalFolders: this.personalFolders || [{ id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b', type: 'personal' }],
            sharedFolderIds: this.sharedFolderIds || [],
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
          if (this.collection.length > 0) {
            this.showToast("¡Tu colección se ha respaldado en la nube!");
          }
        } catch (err) {
          console.error("Error al inicializar datos en la nube:", err);
        }
      }
    }, (error) => {
      console.error("Error en sincronización de usuario:", error);
      if (this.dom.cloudSyncStatus) {
        this.dom.cloudSyncStatus.textContent = '🔴 Error Sync';
      }
      if (error.code === 'permission-denied') {
        this.showToast('⚠️ La nube ha denegado el acceso (revisa las reglas de Firestore)', 6000);
      }
    });
  }

  scheduleCloudSync() {
    if (!this.currentUser || !window.FIREBASE_DB) return;

    if (this.dom.cloudSyncStatus) {
      this.dom.cloudSyncStatus.textContent = '🟡 Guardando...';
      this.dom.cloudSyncStatus.className = 'sync-badge-loading';
    }

    clearTimeout(this.cloudSyncDebounce);
    this.cloudSyncDebounce = setTimeout(async () => {
      try {
        const docRef = window.FIREBASE_DB.collection('users').doc(this.currentUser.uid);
        await docRef.set({
          collection: this.collection || [],
          personalFolders: this.personalFolders || [],
          sharedFolderIds: this.sharedFolderIds || [],
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        if (this.dom.cloudSyncStatus) {
          this.dom.cloudSyncStatus.textContent = '🟢 Sincronizado';
          this.dom.cloudSyncStatus.className = 'sync-badge-ok';
        }
      } catch (err) {
        console.error("Error al sincronizar con Firestore:", err);
        if (this.dom.cloudSyncStatus) {
          this.dom.cloudSyncStatus.textContent = '🔴 Error Sync';
        }
      }
    }, 600);
  }

  showToast(text, duration = 2400) {
    const el = document.createElement('div');
    el.className = 'toast-notice';
    el.style.whiteSpace = 'pre-line';
    el.textContent = text;
    document.body.appendChild(el);

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.3s ease';
      setTimeout(() => el.remove(), 300);
    }, duration);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new OnePieceApp();
});
