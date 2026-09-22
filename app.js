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

    this.init();
  }

  init() {
    this.loadFolders();
    this.loadCollection();
    this.cacheDOM();
    this.bindEvents();
    this.initFirebaseAuth();
    this.checkUrlForSharedFolder();
    this.updateToolbarControls();
    this.renderFolderTabs();
    this.renderAlbum();
    this.updateHeaderStats();
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
    } catch (e) {
      console.error("Error al cargar carpetas:", e);
      this.personalFolders = [{ id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b', type: 'personal' }];
      this.sharedFolderIds = [];
    }
  }

  saveFolders() {
    try {
      localStorage.setItem('op_tcg_personal_folders_v1', JSON.stringify(this.personalFolders));
      localStorage.setItem('op_tcg_shared_ids_v1', JSON.stringify(this.sharedFolderIds));
    } catch (e) {
      console.error("Error al guardar carpetas:", e);
    }
    this.renderFolderTabs();
    this.populateFolderSelects();
    this.scheduleCloudSync();
  }

  loadCollection() {
    try {
      const raw = localStorage.getItem('op_tcg_cards_v7');
      if (raw) {
        this.collection = JSON.parse(raw);
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
      } else {
        this.collection = [
          { ...findOrGenerateCard("OP17-039"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() },
          { ...findOrGenerateCard("OP17-118"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() },
          { ...findOrGenerateCard("OP17-001"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() },
          { ...findOrGenerateCard("OP09-082"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() },
          { ...findOrGenerateCard("OP09-118"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() },
          { ...findOrGenerateCard("OP09-021"), count: 2, folderId: 'default', addedAt: new Date().toLocaleDateString() }
        ];
        this.saveCollection();
      }
    } catch (e) {
      console.error("Error al cargar colección:", e);
      this.collection = [];
    }
  }

  saveCollection() {
    try {
      localStorage.setItem('op_tcg_cards_v7', JSON.stringify(this.collection));
    } catch (e) {
      console.error("Error al guardar colección:", e);
    }
    this.updateHeaderStats();
    this.scheduleCloudSync();
  }

  cacheDOM() {
    this.dom = {
      headerStats: document.getElementById('header-stats'),

      viewAlbum: document.getElementById('view-album'),
      viewScanner: document.getElementById('view-scanner'),
      viewExport: document.getElementById('view-export'),
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

      // Búsqueda y Filtros de Álbum
      albumSearchInput: document.getElementById('album-search-input'),
      albumSearchClear: document.getElementById('album-search-clear'),
      albumSetBanner: document.getElementById('album-set-banner'),
      albumSetTitle: document.getElementById('album-set-title'),
      albumSetSub: document.getElementById('album-set-sub'),
      btnAlbumOpenSet: document.getElementById('btn-album-open-set'),
      filterPills: document.querySelectorAll('#color-filters .filter-pill'),

      // Visualización Álbum
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
      btnManualSearch: document.getElementById('btn-manual-search'),
      setChips: document.querySelectorAll('.set-chip'),
      exampleChips: document.querySelectorAll('.example-chip'),

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

      // Export / Import
      btnExportSheets: document.getElementById('btn-export-sheets'),
      btnExportExcel: document.getElementById('btn-export-excel'),
      btnPasteSheets: document.getElementById('btn-paste-sheets'),
      csvFileInput: document.getElementById('csv-file-input'),
      pasteModal: document.getElementById('paste-modal'),
      btnClosePasteModal: document.getElementById('btn-close-paste-modal'),
      pasteTextarea: document.getElementById('paste-textarea'),
      btnCancelPasteImport: document.getElementById('btn-cancel-paste-import'),
      btnConfirmPasteImport: document.getElementById('btn-confirm-paste-import'),

      // Auth
      btnGoogleLogin: document.getElementById('btn-google-login'),
      userProfileMenu: document.getElementById('user-profile-menu'),
      userAvatar: document.getElementById('user-avatar'),
      userName: document.getElementById('user-name'),
      cloudSyncStatus: document.getElementById('cloud-sync-status'),
      btnLogout: document.getElementById('btn-logout')
    };
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
      this.dom.manualCodeInput.addEventListener('focus', () => {
        if (!this.dom.manualCodeInput.value) {
          this.dom.manualCodeInput.value = 'OP';
        }
      });
    }

    this.dom.setChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.dom.setChips.forEach(c => c.classList.remove('active'));
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
    });

    this.dom.exampleChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const code = chip.getAttribute('data-code');
        if (code) {
          this.dom.manualCodeInput.value = code;
          const setCode = normalizeSetCode(code);
          if (setCode) {
            this.showSetExplorer(setCode);
          } else {
            const matches = window.searchCardsInDB ? window.searchCardsInDB(code) : [];
            if (matches.length > 1) {
              this.showSearchResults(code, matches);
            } else if (matches.length === 1) {
              this.fetchAndOpenCardModal(matches[0].id);
            } else {
              this.fetchAndOpenCardModal(code);
            }
          }
        }
      });
    });

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

    // Exportar / Importar
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
        this.dom.pasteTextarea.value = '';
        this.dom.pasteModal.classList.add('active');
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
        if (text && text.trim()) {
          this.parseAndImportDelimitedText(text);
          this.dom.pasteModal.classList.remove('active');
        } else {
          this.showToast("Pega texto de filas primero");
        }
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
      } else {
        this.activeFolderId = null;
      }
    }

    this.renderFolderTabs();
    this.renderAlbum();
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

    if (this.folderScope === 'personal' && (this.activeFolderId === 'default' || !this.activeFolderId)) {
      this.dom.folderActiveBanner.style.display = 'none';
      return;
    }

    let folder = null;
    if (this.folderScope === 'personal') {
      folder = this.personalFolders.find(f => f.id === this.activeFolderId);
    } else {
      folder = this.sharedFoldersMap.get(this.activeFolderId) || { id: this.activeFolderId, name: 'Carpeta Compartida', icon: '👥', cards: [] };
    }

    if (!folder) {
      this.dom.folderActiveBanner.style.display = 'none';
      return;
    }

    this.dom.folderActiveBanner.style.display = 'flex';
    this.dom.folderActiveIcon.textContent = folder.icon || (this.folderScope === 'personal' ? '📁' : '👥');
    this.dom.folderActiveTitle.textContent = folder.name;

    if (this.dom.folderActiveTypeBadge) {
      if (this.folderScope === 'shared') {
        this.dom.folderActiveTypeBadge.className = 'folder-type-badge shared';
        this.dom.folderActiveTypeBadge.textContent = '👥 Compartida';
      } else {
        this.dom.folderActiveTypeBadge.className = 'folder-type-badge';
        this.dom.folderActiveTypeBadge.textContent = '📁 Personal';
      }
    }

    let totalCards = 0;
    if (this.folderScope === 'personal') {
      totalCards = this.collection.filter(c => c.folderId === folder.id).reduce((s, c) => s + (c.count || 0), 0);
    } else {
      totalCards = (folder.cards || []).reduce((s, c) => s + (c.count || 0), 0);
    }
    this.dom.folderActiveCount.textContent = `${totalCards} carta(s) en esta carpeta`;

    // Botón de compartir solo visible en carpetas compartidas
    if (this.dom.btnShareActiveFolder) {
      this.dom.btnShareActiveFolder.style.display = (this.folderScope === 'shared') ? 'inline-flex' : 'none';
    }

    // Botón de eliminar cambia según contexto
    if (this.dom.btnDeleteActiveFolder) {
      this.dom.btnDeleteActiveFolder.textContent = (this.folderScope === 'shared') ? '🚪 Salir' : '🗑️ Eliminar';
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
          this.showToast(`✏️ Carpeta \"${name}\" actualizada`);
        }
      } else {
        // Carpeta compartida en Firestore
        await this.updateSharedFolderMetaInFirestore(this.editingFolderId, { name, icon, color });
        this.showToast(`✏️ Carpeta compartida \"${name}\" actualizada`);
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
        this.closeFolderModal();
        this.showToast(`📁 Carpeta personal \"${name}\" creada`);
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

      const confirmDel = confirm(`¿Estás seguro de eliminar la carpeta personal \"${folder.name}\"? Las cartas pasarán al Álbum General.`);
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
      this.showToast(`🗑️ Carpeta \"${folder.name}\" eliminada`);
    } else {
      const folder = this.sharedFoldersMap.get(this.activeFolderId);
      const folderName = folder ? folder.name : 'Compartida';
      const confirmLeave = confirm(`¿Deseas salir de la carpeta compartida \"${folderName}\"? Dejarás de ver sus cartas.`);
      if (!confirmLeave) return;

      this.sharedFolderIds = this.sharedFolderIds.filter(id => id !== this.activeFolderId);
      this.saveFolders();
      
      const nextList = this.getSharedFoldersList();
      this.activeFolderId = nextList.length > 0 ? nextList[0].id : null;
      this.renderFolderTabs();
      this.renderAlbum();
      this.showToast(`🚪 Has salido de la carpeta \"${folderName}\"`);
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

    this.showToast(`👥 ¡Carpeta compartida \"${name}\" creada!`);
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
        if (this.folderScope === 'shared' && this.activeFolderId === folderId) {
          this.renderFolderTabs();
          this.renderAlbum();
        }
      } else {
        // Carpeta no existe en el servidor
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
          this.showToast(`👥 ¡Te has unido a \"${data.name}\"!`);
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
    this.dom.modalCardFolderSelect.innerHTML = '';

    // Opción Personal Álbum General
    const optDefault = document.createElement('option');
    optDefault.value = 'default';
    optDefault.textContent = '📁 Álbum General (Personal)';
    this.dom.modalCardFolderSelect.appendChild(optDefault);

    // Carpetas Personales
    this.personalFolders.forEach(f => {
      if (f.id !== 'default') {
        const opt = document.createElement('option');
        opt.value = f.id;
        opt.textContent = `${f.icon || '📁'} ${f.name} (Personal)`;
        this.dom.modalCardFolderSelect.appendChild(opt);
      }
    });

    // Carpetas Compartidas
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
      this.dom.modalCardFolderSelect.appendChild(optGroup);
    }

    // Preseleccionar carpeta activa actual
    if (this.activeFolderId) {
      this.dom.modalCardFolderSelect.value = this.activeFolderId;
    }
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
      this.showToast(`✅ +${qty} ${card.name} (${card.id}) añadido`);
    }
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
    this.showToast(`👥 +${qty} ${card.name} añadido a \"${folder.name || 'Compartida'}\"`);

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
    this.dom.albumGrid.className = `cards-grid view-mode-${this.albumViewMode} size-${this.albumCardSize}`;

    // Obtener cartas base según el scope activo
    let rawCards = [];
    if (this.folderScope === 'personal') {
      if (this.activeFolderId && this.activeFolderId !== 'default') {
        rawCards = this.collection.filter(c => c.folderId === this.activeFolderId);
      } else {
        rawCards = this.collection;
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
    const filtered = rawCards.filter(card => {
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

    this.dom.albumGrid.innerHTML = '';

    if (filtered.length === 0) {
      this.dom.albumEmpty.style.display = 'block';
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
                <span class="card-id-text">${card.id}</span>
                <span class="card-badge-color col-${colorClass}">${card.color}</span>
                <span class="card-type-chip">${card.cardType || 'Card'} • ${card.rarity || 'R'}</span>
              </div>
              <div class="list-card-name">${card.name}</div>
              <div class="list-card-traits">${card.traits || 'One Piece'}</div>
            </div>
            <div class="list-card-actions">
              <div class="card-stepper-row">
                <button class="step-btn btn-sub" data-id="${card.id}" title="Restar 1 copia">−</button>
                <span class="step-count step-count-interactive" title="Modificar cantidad rápida">x${card.count}</span>
                <button class="step-btn btn-add" data-id="${card.id}" title="Sumar 1 copia">+</button>
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
                <span class="card-id-text">${card.id}</span>
                <span class="card-type-chip">${card.cardType || 'Card'} • ${card.rarity || 'R'}</span>
              </div>
              <div class="card-name-text" title="${card.name}">${card.name}</div>
              <div class="card-meta-row">
                <span class="trait-tag" title="${card.traits || 'One Piece'}">${card.traits || 'One Piece'}</span>
              </div>
              <div class="card-stepper-row">
                <button class="step-btn btn-sub" data-id="${card.id}" title="Restar copia">−</button>
                <span class="step-count step-count-interactive" title="Modificar cantidad rápida">x${card.count}</span>
                <button class="step-btn btn-add" data-id="${card.id}" title="Sumar copia">+</button>
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

          this.dom.albumGrid.appendChild(cardEl);
        }
      });
    }

    this.updateHeaderStats();
    this.updateActiveFolderBanner();
  }

  adjustCardCount(cardId, delta) {
    if (this.folderScope === 'shared') {
      this.adjustSharedFolderCardCount(this.activeFolderId, cardId, delta);
    } else {
      const idx = this.collection.findIndex(c => c.id === cardId && (this.activeFolderId === 'default' || c.folderId === this.activeFolderId));
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
      const idx = this.collection.findIndex(c => c.id === cardId && (this.activeFolderId === 'default' || c.folderId === this.activeFolderId));
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
    this.dom.qtyModalId.textContent = card.id;
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

  submitCodeInput() {
    const raw = this.dom.manualCodeInput.value.trim();
    if (!raw || raw === 'OP' || raw === 'ST') {
      this.showToast("Introduce un nombre o código (ej. Luffy, OP17-039 o ST01)");
      this.dom.manualCodeInput.focus();
      return;
    }

    const setCode = normalizeSetCode(raw);
    if (setCode) {
      this.showSetExplorer(setCode);
      return;
    }

    const cleanCard = this.cleanCardCode(raw);
    if (cleanCard && window.ONE_PIECE_CARDS_DB && window.ONE_PIECE_CARDS_DB[cleanCard]) {
      this.fetchAndOpenCardModal(cleanCard);
      return;
    }

    const matches = window.searchCardsInDB ? window.searchCardsInDB(raw) : [];
    if (matches.length > 0) {
      if (matches.length === 1 && cleanCard) {
        this.fetchAndOpenCardModal(matches[0].id);
      } else {
        this.showSearchResults(raw, matches);
      }
      return;
    }

    if (cleanCard) {
      this.fetchAndOpenCardModal(cleanCard);
      return;
    }

    this.showToast(`No se encontraron cartas para \"${raw}\". Prueba con Luffy, Zoro, ST01...`);
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
      this.showToast(`No se encontraron cartas para el set ${setCode}`);
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

  showSearchResults(query, matches) {
    this.currentSetCode = null;
    this.currentSearchMode = 'search';
    this.searchResults = matches;
    this.searchCurrentPage = 1;

    this.dom.setResultsTitle.textContent = `Resultados para \"${query}\"`;
    this.dom.setResultsSubtitle.textContent = `${matches.length} cartas encontradas • 18 cartas por página`;

    this.updateToolbarControls();
    this.renderSearchResultsPage();
    this.dom.setResultsContainer.style.display = 'block';

    this.showToast(`🔍 ${matches.length} cartas encontradas para \"${query}\"`);

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
              <span class="card-id-text">${card.id}</span>
              <span class="card-badge-color col-${colorClass}">${card.color}</span>
              <span class="card-badge-owned ${count > 0 ? 'has-copies' : ''}">
                ${count > 0 ? `x${count} en álbum` : 'x0'}
              </span>
              <span class="card-type-chip">${card.cardType || 'Card'} • ${card.rarity || 'R'}</span>
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
              <span class="card-id-text">${card.id}</span>
              <span class="card-type-chip">${card.cardType || 'Card'} • ${card.rarity || 'R'}</span>
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
    const cards = getCardsBySet(setCode);
    if (!cards || cards.length === 0) return;

    const targetFolder = (this.folderScope === 'shared' && this.activeFolderId) ? this.activeFolderId : 'default';

    cards.forEach(card => {
      this.addCardToTargetFolder(card, 1, targetFolder);
    });

    this.showToast(`🎉 ¡Añadidas las ${cards.length} cartas de ${setCode}!`);
  }

  cleanCardCode(raw) {
    if (!raw) return null;
    let s = raw.trim().toUpperCase().replace(/[\s_]+/g, '-');
    const match = s.match(/^(OP|ST|EB|P|PRB|PROMO)-?(\d{1,3})-?(\d{1,3})/i);
    if (match) {
      const prefix = match[1].toUpperCase();
      const setNum = match[2].padStart(2, '0');
      const cardNum = match[3].padStart(3, '0');
      return `${prefix}${setNum}-${cardNum}`;
    }
    return null;
  }

  fetchAndOpenCardModal(cardId) {
    const card = findOrGenerateCard(cardId);
    this.pendingCard = card;
    this.pendingQty = 1;

    const existing = this.collection.find(c => c.id === card.id);
    const currentOwned = existing ? existing.count : 0;

    this.dom.modalCardId.textContent = card.id;
    this.dom.modalCardName.textContent = card.name;
    this.dom.modalCardColor.textContent = card.color;
    this.dom.modalCardColor.className = `color-badge col-${card.color.replace('/', '-')}`;
    this.dom.modalCardTraits.textContent = card.traits || 'One Piece Pirates';

    let metaStr = `${card.cardType || 'Character'}`;
    if (card.rarity) metaStr += ` • ${card.rarity}`;
    if (card.cost) metaStr += ` • Coste/Vida: ${card.cost}`;
    if (card.set) metaStr += ` • ${card.set}`;
    this.dom.modalCardMeta.textContent = metaStr;

    if (currentOwned > 0) {
      this.dom.modalExistingMsg.style.display = 'block';
      this.dom.modalExistingMsg.innerHTML = `📦 Ya tienes <strong>${currentOwned} copia(s)</strong> en tu colección.`;
    } else {
      this.dom.modalExistingMsg.style.display = 'none';
    }

    this.populateFolderSelects();
    this.dom.modalCustomQty.value = 1;
    this.dom.qtyBtns.forEach(b => {
      b.classList.toggle('active', parseInt(b.getAttribute('data-q')) === 1);
    });

    this.updateModalForecast();
    this.setupRobustImage(this.dom.modalCardImg, card);
    this.dom.cardModal.classList.add('active');
  }

  updateModalForecast() {
    if (!this.pendingCard) return;
    const existing = this.collection.find(c => c.id === this.pendingCard.id);
    const cur = existing ? existing.count : 0;
    const total = cur + this.pendingQty;

    if (cur > 0) {
      this.dom.modalForecast.textContent = `Añadir +${this.pendingQty} copias (Total: ${total})`;
      this.dom.btnSaveCardToAlbum.textContent = `Sumar +${this.pendingQty} al Álbum`;
    } else {
      this.dom.modalForecast.textContent = `Se añadirá por primera vez (${this.pendingQty} copia${this.pendingQty > 1 ? 's' : ''})`;
      this.dom.btnSaveCardToAlbum.textContent = `Guardar en el Álbum`;
    }
  }

  setupRobustImage(imgElement, card) {
    if (!imgElement || !card) return;
    const urls = card.imageFallbacks || (typeof getCardImageURLs === 'function' ? getCardImageURLs(card.id) : []);
    const fallbackSvg = typeof generateFallbackCardSVG === 'function'
      ? generateFallbackCardSVG(card)
      : (typeof getFallbackCardDataUrl === 'function' ? getFallbackCardDataUrl(card.id, card.name, card.color) : '');

    let urlIdx = 0;
    const tryNext = () => {
      if (urlIdx < urls.length) {
        const nextSrc = urls[urlIdx++];
        imgElement.onerror = tryNext;
        imgElement.src = nextSrc;
      } else {
        imgElement.onerror = null;
        if (fallbackSvg) imgElement.src = fallbackSvg;
      }
    };

    if (card.imageUrl) {
      imgElement.onerror = tryNext;
      imgElement.src = card.imageUrl;
    } else if (urls.length > 0) {
      tryNext();
    } else if (fallbackSvg) {
      imgElement.src = fallbackSvg;
    }
  }

  openLightbox(card) {
    if (!card) return;
    if (this.dom.lightboxCardCode) this.dom.lightboxCardCode.textContent = card.id;
    if (this.dom.lightboxCardName) this.dom.lightboxCardName.textContent = card.name;
    if (this.dom.lightboxCardImg) {
      this.setupRobustImage(this.dom.lightboxCardImg, card);
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

    this.dom.navButtons.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-target') === `view-${tabId}`);
    });

    if (tabId === 'album') {
      this.renderAlbum();
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

  async copyToGoogleSheets() {
    if (this.collection.length === 0) {
      this.showToast("No tienes cartas en la colección");
      return;
    }

    let tsv = "Código\tNombre\tCantidad\tColor\tType / Rasgos\tTipo\tRareza\tCoste/Vida\tExpansión\tCarpeta\tFecha\n";
    this.collection.forEach(c => {
      tsv += `${c.id}\t${c.name}\t${c.count}\t${c.color}\t${c.traits || ''}\t${c.cardType || ''}\t${c.rarity || ''}\t${c.cost || ''}\t${c.set || ''}\t${c.folderId || 'default'}\t${c.addedAt || ''}\n`;
    });

    try {
      await navigator.clipboard.writeText(tsv);
      this.showToast("📋 ¡Copiado! Abre Google Sheets y pulsa Pegar");
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = tsv;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      this.showToast("📋 ¡Copiado para Google Sheets!");
    }
  }

  downloadExcelCSV() {
    if (this.collection.length === 0) {
      this.showToast("No tienes cartas en la colección");
      return;
    }

    let csv = "\uFEFFCódigo,Nombre,Cantidad,Color,Type / Rasgos,Tipo,Rareza,Coste/Vida,Expansión,Carpeta,Fecha\n";
    this.collection.forEach(c => {
      csv += `"${c.id}","${(c.name || '').replace(/"/g, '""')}",${c.count},"${c.color}","${(c.traits || '').replace(/"/g, '""')}","${c.cardType || ''}","${c.rarity || ''}","${c.cost || ''}","${(c.set || '').replace(/"/g, '""')}","${c.folderId || 'default'}","${c.addedAt || ''}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `OnePiece_TCG_Coleccion_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    this.showToast("📊 Archivo Excel CSV descargado");
  }

  handleExcelCSVImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      this.parseAndImportDelimitedText(content);
      e.target.value = '';
    };
    reader.readAsText(file);
  }

  parseAndImportDelimitedText(text) {
    if (!text || !text.trim()) return;

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

    let importedCount = 0;
    let newCardsCount = 0;

    lines.forEach((line, idx) => {
      const cols = this.splitCSVLine(line, delimiter);
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

      for (let c of cols) {
        const num = parseInt(c.trim());
        if (!isNaN(num) && num > 0 && num < 1000 && c.trim() !== cardCode && !c.includes('-')) {
          qty = num;
          break;
        }
      }

      const cardInfo = findOrGenerateCard(cardCode);
      if (cols.length >= 2 && cols[1] && cols[1].trim() && !this.cleanCardCode(cols[1])) {
        if (!cardInfo.name || cardInfo.name.startsWith("Carta ")) {
          cardInfo.name = cols[1].trim();
        }
      }

      const existingIndex = this.collection.findIndex(c => c.id === cardInfo.id && c.folderId === 'default');
      if (existingIndex >= 0) {
        this.collection[existingIndex].count += qty;
      } else {
        this.collection.unshift({
          ...cardInfo,
          count: qty,
          folderId: 'default',
          addedAt: new Date().toLocaleDateString()
        });
        newCardsCount++;
      }
      importedCount += qty;
    });

    this.saveCollection();
    this.renderAlbum();
    this.switchTab('album');
    this.showToast(`✅ ¡Importadas +${importedCount} copias (${newCardsCount} nuevas cartas)!`);
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
        await window.FIREBASE_AUTH.signOut();
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

    this.firestoreUnsubUser = docRef.onSnapshot(async (doc) => {
      if (doc.exists) {
        const data = doc.data();
        if (data) {
          let updated = false;
          if (data.collection && JSON.stringify(data.collection) !== JSON.stringify(this.collection)) {
            this.collection = data.collection;
            localStorage.setItem('op_tcg_cards_v7', JSON.stringify(this.collection));
            updated = true;
          }
          if (data.personalFolders && JSON.stringify(data.personalFolders) !== JSON.stringify(this.personalFolders)) {
            this.personalFolders = data.personalFolders;
            localStorage.setItem('op_tcg_personal_folders_v1', JSON.stringify(this.personalFolders));
            updated = true;
          }
          if (data.sharedFolderIds && JSON.stringify(data.sharedFolderIds) !== JSON.stringify(this.sharedFolderIds)) {
            this.sharedFolderIds = data.sharedFolderIds;
            localStorage.setItem('op_tcg_shared_ids_v1', JSON.stringify(this.sharedFolderIds));
            this.setupAllSharedFolderListeners();
            updated = true;
          }
          if (updated) {
            this.updateHeaderStats();
            this.renderFolderTabs();
            this.renderAlbum();
          }
        }
      } else {
        // Primera vez del usuario: subir colección local existente
        try {
          await docRef.set({
            collection: this.collection || [],
            personalFolders: this.personalFolders || [],
            sharedFolderIds: this.sharedFolderIds || [],
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
          this.showToast("¡Tu colección se ha respaldado en la nube!");
        } catch (err) {
          console.error("Error al inicializar datos en la nube:", err);
        }
      }
    }, (error) => {
      console.error("Error en sincronización de usuario:", error);
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

  showToast(text) {
    const el = document.createElement('div');
    el.className = 'toast-notice';
    el.textContent = text;
    document.body.appendChild(el);

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.3s ease';
      setTimeout(() => el.remove(), 300);
    }, 2400);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new OnePieceApp();
});
