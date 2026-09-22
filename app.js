// One Piece TCG Pocket Dex & Collection Manager - Folders & Custom Quantity Engine

class OnePieceApp {
  constructor() {
    this.collection = [];
    this.folders = [];
    this.activeFolderId = 'ALL';
    this.activeFilter = 'ALL';
    this.searchQuery = '';
    this.currentTab = 'album';
    this.pendingCard = null;
    this.pendingQty = 1;
    this.currentSetCode = null;

    // Estado para modales de edición
    this.editingFolderId = null;
    this.selectedFolderIcon = '📁';
    this.selectedFolderColor = '#f59e0b';
    this.movingCardId = null;
    this.editingQtyCardId = null;

    // Resultados de búsqueda y Paginación (18 cartas por página = 3 filas de 6)
    this.searchResults = [];
    this.searchCurrentPage = 1;
    this.searchCardsPerPage = 18;
    this.currentSearchMode = 'set'; // 'set' | 'search'

    // Preferencias de visualización del Álbum
    this.albumViewMode = localStorage.getItem('op_album_view_mode') || 'grid'; // 'grid' o 'list'
    this.albumCardSize = localStorage.getItem('op_album_card_size') || 'normal'; // 'small', 'normal', 'large'

    // Preferencias de visualización del Explorador de Sets / Starter Decks
    this.setViewMode = localStorage.getItem('op_set_view_mode') || 'grid'; // 'grid' o 'list'
    this.setCardSize = localStorage.getItem('op_set_card_size') || 'normal'; // 'small', 'normal', 'large'

    this.init();
  }

  init() {
    this.loadFolders();
    this.loadCollection();
    this.cacheDOM();
    this.bindEvents();
    this.updateToolbarControls();
    this.renderFoldersBar();
    this.renderAlbum();
    this.updateHeaderStats();
  }

  loadFolders() {
    try {
      const raw = localStorage.getItem('op_tcg_folders_v1');
      if (raw) {
        this.folders = JSON.parse(raw);
      } else {
        this.folders = [
          { id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b' }
        ];
        this.saveFolders();
      }
    } catch (e) {
      console.error("Error al cargar carpetas:", e);
      this.folders = [
        { id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b' }
      ];
    }
  }

  saveFolders() {
    try {
      localStorage.setItem('op_tcg_folders_v1', JSON.stringify(this.folders));
    } catch (e) {
      console.error("Error al guardar carpetas:", e);
    }
  }

  getFolder(folderId) {
    if (!folderId || folderId === 'default') {
      return this.folders.find(f => f.id === 'default') || { id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b' };
    }
    return this.folders.find(f => f.id === folderId) || { id: 'default', name: 'Álbum General', icon: '📁', color: '#f59e0b' };
  }

  loadCollection() {
    try {
      const raw = localStorage.getItem('op_tcg_cards_v7');
      if (raw) {
        this.collection = JSON.parse(raw);
        // Sincronizar atributos exactos (Color, Traits, Tipo, Rareza, Coste) con la base de datos oficial
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
          { ...findOrGenerateCard("OP17-039"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() }, // Rocks.D.Xebec Leader (Azul, Rocks Pirates)
          { ...findOrGenerateCard("OP17-118"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() }, // Rocks.D.Xebec SEC (Azul, Rocks Pirates)
          { ...findOrGenerateCard("OP17-001"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() }, // Gol.D.Roger Leader (Rojo, Roger Pirates)
          { ...findOrGenerateCard("OP09-082"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() }, // Avalo Pizarro (Negro, Blackbeard Pirates)
          { ...findOrGenerateCard("OP09-118"), count: 1, folderId: 'default', addedAt: new Date().toLocaleDateString() }, // Gol.D.Roger SEC (Amarillo, Roger Pirates)
          { ...findOrGenerateCard("OP09-021"), count: 2, folderId: 'default', addedAt: new Date().toLocaleDateString() }  // Edward.Newgate Leader (Verde, Whitebeard Pirates)
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
    this.renderFoldersBar();
  }

  cacheDOM() {
    this.dom = {
      headerStats: document.getElementById('header-stats'),

      viewAlbum: document.getElementById('view-album'),
      viewScanner: document.getElementById('view-scanner'),
      viewExport: document.getElementById('view-export'),
      navButtons: document.querySelectorAll('.nav-button'),

      // Carpetas del Álbum
      foldersPillsContainer: document.getElementById('folders-pills-container'),
      btnAddFolder: document.getElementById('btn-add-folder'),
      folderActiveBanner: document.getElementById('folder-active-banner'),
      folderActiveIcon: document.getElementById('folder-active-icon'),
      folderActiveTitle: document.getElementById('folder-active-title'),
      folderActiveCount: document.getElementById('folder-active-count'),
      btnEditActiveFolder: document.getElementById('btn-edit-active-folder'),
      btnDeleteActiveFolder: document.getElementById('btn-delete-active-folder'),

      // Álbum Search & Filters
      albumSearchInput: document.getElementById('album-search-input'),
      albumSearchClear: document.getElementById('album-search-clear'),
      albumSetBanner: document.getElementById('album-set-banner'),
      albumSetTitle: document.getElementById('album-set-title'),
      albumSetSub: document.getElementById('album-set-sub'),
      btnAlbumOpenSet: document.getElementById('btn-album-open-set'),
      filterPills: document.querySelectorAll('.filter-pill'),

      // Barra de visualización de Álbum (Modo y Zoom)
      btnViewGrid: document.getElementById('btn-view-grid'),
      btnViewList: document.getElementById('btn-view-list'),
      btnSizeDecrease: document.getElementById('btn-size-decrease'),
      btnSizeReset: document.getElementById('btn-size-reset'),
      btnSizeIncrease: document.getElementById('btn-size-increase'),

      cardsGrid: document.getElementById('cards-grid'),
      emptyAlbumMsg: document.getElementById('empty-album-msg'),
      emptyAlbumIcon: document.getElementById('empty-album-icon'),
      emptyAlbumTitle: document.getElementById('empty-album-title'),
      emptyAlbumDesc: document.getElementById('empty-album-desc'),
      btnEmptySearchSt: document.getElementById('btn-empty-search-st'),

      // Vista de Entrada por Código / Starter Decks
      stQuickSelect: document.getElementById('st-quick-select'),
      directCardCodeInput: document.getElementById('direct-card-code-input'),
      btnSubmitCardCode: document.getElementById('btn-submit-card-code'),
      setChips: document.querySelectorAll('.set-chip'),
      exampleChips: document.querySelectorAll('.example-chip'),

      // Resultados del Set / Búsqueda por Nombre
      setResultsContainer: document.getElementById('set-results-container'),
      setResultsIcon: document.getElementById('set-results-icon'),
      setResultsName: document.getElementById('set-results-name'),
      setResultsColorBadge: document.getElementById('set-results-color-badge'),
      setResultsDesc: document.getElementById('set-results-desc'),
      btnAddEntireDeck: document.getElementById('btn-add-entire-deck'),
      btnCloseSetResults: document.getElementById('btn-close-set-results'),
      setCardsGrid: document.getElementById('set-cards-grid'),

      // Paginación de resultados (18 cartas por página = 3 filas de 6)
      setPaginationControls: document.getElementById('set-pagination-controls'),
      btnPagePrev: document.getElementById('btn-page-prev'),
      btnPageNext: document.getElementById('btn-page-next'),
      pageIndicator: document.getElementById('page-indicator'),

      // Barra de visualización del Set / Búsqueda (Modo y Zoom)
      btnSetViewGrid: document.getElementById('btn-set-view-grid'),
      btnSetViewList: document.getElementById('btn-set-view-list'),
      btnSetSizeDecrease: document.getElementById('btn-set-size-decrease'),
      btnSetSizeReset: document.getElementById('btn-set-size-reset'),
      btnSetSizeIncrease: document.getElementById('btn-set-size-increase'),

      // Modal de Carta
      cardModal: document.getElementById('card-modal'),
      modalImgZoomBtn: document.getElementById('modal-img-zoom-btn'),
      btnOpenZoomModal: document.getElementById('btn-open-zoom-modal'),
      lightboxModal: document.getElementById('lightbox-modal'),
      lightboxCardImg: document.getElementById('lightbox-card-img'),
      lightboxCardCode: document.getElementById('lightbox-card-code'),
      lightboxCardName: document.getElementById('lightbox-card-name'),
      btnCloseLightbox: document.getElementById('btn-close-lightbox'),
      btnCloseModal: document.getElementById('btn-close-modal'),
      modalCardImg: document.getElementById('modal-card-img'),
      modalCardId: document.getElementById('modal-card-id'),
      modalCardColor: document.getElementById('modal-card-color'),
      modalCardName: document.getElementById('modal-card-name'),
      modalCardTraits: document.getElementById('modal-card-traits'),
      modalCardMeta: document.getElementById('modal-card-meta'),
      modalExistingMsg: document.getElementById('modal-existing-msg'),
      modalCardFolderSelect: document.getElementById('modal-card-folder-select'),
      modalForecast: document.getElementById('modal-forecast'),
      modalCustomQty: document.getElementById('modal-custom-qty'),
      qtyBtns: document.querySelectorAll('.qty-btn'),
      btnSaveCardToAlbum: document.getElementById('btn-save-card-to-album'),

      // Modal de Edición Directa de Cantidad
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
      btnRemoveChips: document.querySelectorAll('.btn-remove-chip'),
      qtyModalRemoveCount: document.getElementById('qty-modal-remove-count'),
      btnQtyModalRemoveCustom: document.getElementById('btn-qty-modal-remove-custom'),
      btnQtyModalDeleteAll: document.getElementById('btn-qty-modal-delete-all'),

      // Modal de Creación / Edición de Carpeta
      folderModal: document.getElementById('folder-modal'),
      folderModalTitle: document.getElementById('folder-modal-title'),
      btnCloseFolderModal: document.getElementById('btn-close-folder-modal'),
      btnCancelFolder: document.getElementById('btn-cancel-folder'),
      btnSaveFolder: document.getElementById('btn-save-folder'),
      folderNameInput: document.getElementById('folder-name-input'),
      folderIconPicker: document.getElementById('folder-icon-picker'),
      folderColorPicker: document.getElementById('folder-color-picker'),

      // Modal de Mover Carta a Carpeta
      moveFolderModal: document.getElementById('move-folder-modal'),
      btnCloseMoveFolderModal: document.getElementById('btn-close-move-folder-modal'),
      btnCancelMoveFolder: document.getElementById('btn-cancel-move-folder'),
      moveFolderCardImg: document.getElementById('move-folder-card-img'),
      moveFolderCardId: document.getElementById('move-folder-card-id'),
      moveFolderCardName: document.getElementById('move-folder-card-name'),
      moveFolderCurrentBadge: document.getElementById('move-folder-current-badge'),
      moveFolderOptionsList: document.getElementById('move-folder-options-list'),

      // Exportar / Importar
      btnSheetsCopy: document.getElementById('btn-sheets-copy'),
      btnExcelCsv: document.getElementById('btn-excel-csv'),
      importExcelFile: document.getElementById('import-excel-file'),
      btnPasteSheets: document.getElementById('btn-paste-sheets'),
      pasteModal: document.getElementById('paste-modal'),
      pasteTextarea: document.getElementById('paste-textarea'),
      btnConfirmPasteImport: document.getElementById('btn-confirm-paste-import'),
      btnCancelPasteImport: document.getElementById('btn-cancel-paste-import'),
      btnClosePasteModal: document.getElementById('btn-close-paste-modal'),
      btnSaveJson: document.getElementById('btn-save-json'),
      importJsonFile: document.getElementById('import-json-file')
    };
  }

  bindEvents() {
    this.dom.navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Eventos de Carpetas
    if (this.dom.btnAddFolder) {
      this.dom.btnAddFolder.addEventListener('click', () => {
        this.openFolderModal();
      });
    }

    if (this.dom.btnEditActiveFolder) {
      this.dom.btnEditActiveFolder.addEventListener('click', () => {
        if (this.activeFolderId && this.activeFolderId !== 'ALL' && this.activeFolderId !== 'default') {
          this.openFolderModal(this.activeFolderId);
        }
      });
    }

    if (this.dom.btnDeleteActiveFolder) {
      this.dom.btnDeleteActiveFolder.addEventListener('click', () => {
        if (this.activeFolderId && this.activeFolderId !== 'ALL' && this.activeFolderId !== 'default') {
          this.deleteFolder(this.activeFolderId);
        }
      });
    }

    // Modal de Carpetas (Iconos y Colores)
    if (this.dom.folderIconPicker) {
      this.dom.folderIconPicker.addEventListener('click', (e) => {
        const btn = e.target.closest('.emoji-opt-btn');
        if (btn) {
          this.dom.folderIconPicker.querySelectorAll('.emoji-opt-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.selectedFolderIcon = btn.getAttribute('data-icon') || '📁';
        }
      });
    }

    if (this.dom.folderColorPicker) {
      this.dom.folderColorPicker.addEventListener('click', (e) => {
        const btn = e.target.closest('.color-opt-circle');
        if (btn) {
          this.dom.folderColorPicker.querySelectorAll('.color-opt-circle').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.selectedFolderColor = btn.getAttribute('data-color') || '#f59e0b';
        }
      });
    }

    if (this.dom.btnSaveFolder) {
      this.dom.btnSaveFolder.addEventListener('click', () => {
        this.saveFolderModalData();
      });
    }

    if (this.dom.btnCloseFolderModal) {
      this.dom.btnCloseFolderModal.addEventListener('click', () => this.closeFolderModal());
    }
    if (this.dom.btnCancelFolder) {
      this.dom.btnCancelFolder.addEventListener('click', () => this.closeFolderModal());
    }
    if (this.dom.folderModal) {
      this.dom.folderModal.addEventListener('click', (e) => {
        if (e.target === this.dom.folderModal) this.closeFolderModal();
      });
    }

    // Modal de Mover Carta a Carpeta
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

    // Modal de Modificación Directa de Cantidad
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
        let val = parseInt(this.dom.qtyModalDirectInput.value) || 0;
        if (val > 0) this.dom.qtyModalDirectInput.value = val - 1;
      });
    }

    if (this.dom.btnQtyModalPlus) {
      this.dom.btnQtyModalPlus.addEventListener('click', () => {
        let val = parseInt(this.dom.qtyModalDirectInput.value) || 0;
        this.dom.qtyModalDirectInput.value = val + 1;
      });
    }

    if (this.dom.btnQtyModalApply) {
      this.dom.btnQtyModalApply.addEventListener('click', () => {
        const val = parseInt(this.dom.qtyModalDirectInput.value);
        if (!isNaN(val) && this.editingQtyCardId) {
          this.setCardCountDirect(this.editingQtyCardId, Math.max(0, val));
        }
      });
    }

    this.dom.btnRemoveChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const countToRemove = parseInt(chip.getAttribute('data-remove')) || 1;
        if (this.editingQtyCardId) {
          this.removeCardCopiesDirect(this.editingQtyCardId, countToRemove);
        }
      });
    });

    if (this.dom.btnQtyModalRemoveCustom) {
      this.dom.btnQtyModalRemoveCustom.addEventListener('click', () => {
        const countToRemove = parseInt(this.dom.qtyModalRemoveCount.value) || 1;
        if (this.editingQtyCardId) {
          this.removeCardCopiesDirect(this.editingQtyCardId, countToRemove);
        }
      });
    }

    if (this.dom.btnQtyModalDeleteAll) {
      this.dom.btnQtyModalDeleteAll.addEventListener('click', () => {
        if (this.editingQtyCardId) {
          this.removeAllCardCopies(this.editingQtyCardId);
        }
      });
    }

    // Búsqueda en el álbum
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

    if (this.dom.btnEmptySearchSt) {
      this.dom.btnEmptySearchSt.addEventListener('click', () => {
        const setCode = normalizeSetCode(this.searchQuery);
        if (setCode) {
          this.switchTab('scanner');
          this.showSetExplorer(setCode);
        }
      });
    }

    // Controles de Modo de Vista del Álbum (Carta / Lista)
    if (this.dom.btnViewGrid) {
      this.dom.btnViewGrid.addEventListener('click', () => {
        this.setAlbumViewMode('grid');
      });
    }

    if (this.dom.btnViewList) {
      this.dom.btnViewList.addEventListener('click', () => {
        this.setAlbumViewMode('list');
      });
    }

    // Controles de Zoom / Tamaño del Álbum
    if (this.dom.btnSizeDecrease) {
      this.dom.btnSizeDecrease.addEventListener('click', () => {
        this.adjustAlbumCardSize(-1);
      });
    }

    if (this.dom.btnSizeReset) {
      this.dom.btnSizeReset.addEventListener('click', () => {
        this.setAlbumCardSize('normal');
      });
    }

    if (this.dom.btnSizeIncrease) {
      this.dom.btnSizeIncrease.addEventListener('click', () => {
        this.adjustAlbumCardSize(1);
      });
    }

    // Controles de Modo de Vista del Set Explorer (Carta / Lista)
    if (this.dom.btnSetViewGrid) {
      this.dom.btnSetViewGrid.addEventListener('click', () => {
        this.setSetViewMode('grid');
      });
    }

    if (this.dom.btnSetViewList) {
      this.dom.btnSetViewList.addEventListener('click', () => {
        this.setSetViewMode('list');
      });
    }

    // Controles de Zoom / Tamaño del Set Explorer
    if (this.dom.btnSetSizeDecrease) {
      this.dom.btnSetSizeDecrease.addEventListener('click', () => {
        this.adjustSetCardSize(-1);
      });
    }

    if (this.dom.btnSetSizeReset) {
      this.dom.btnSetSizeReset.addEventListener('click', () => {
        this.setSetCardSize('normal');
      });
    }

    if (this.dom.btnSetSizeIncrease) {
      this.dom.btnSetSizeIncrease.addEventListener('click', () => {
        this.adjustSetCardSize(1);
      });
    }

    // Botones de paginación (18 cartas por página)
    if (this.dom.btnPagePrev) {
      this.dom.btnPagePrev.addEventListener('click', () => {
        this.changeSearchPage(-1);
      });
    }

    if (this.dom.btnPageNext) {
      this.dom.btnPageNext.addEventListener('click', () => {
        this.changeSearchPage(1);
      });
    }

    this.dom.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.dom.filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeFilter = pill.getAttribute('data-filter');
        this.renderAlbum();
      });
    });

    // Selector desplegable de Starter Decks
    if (this.dom.stQuickSelect) {
      this.dom.stQuickSelect.addEventListener('change', (e) => {
        const stCode = e.target.value;
        if (stCode) {
          this.dom.directCardCodeInput.value = stCode;
          this.showSetExplorer(stCode);
        }
      });
    }

    // Entrada directa por código, nombre o set
    if (this.dom.btnSubmitCardCode) {
      this.dom.btnSubmitCardCode.addEventListener('click', () => {
        this.submitCodeInput();
      });
    }

    if (this.dom.directCardCodeInput) {
      this.dom.directCardCodeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.submitCodeInput();
        }
      });

      this.dom.directCardCodeInput.addEventListener('focus', () => {
        if (!this.dom.directCardCodeInput.value) {
          this.dom.directCardCodeInput.value = 'OP';
        }
      });
    }

    // Atajos de Set
    this.dom.setChips.forEach(chip => {
      chip.addEventListener('click', () => {
        this.dom.setChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const setAttr = chip.getAttribute('data-set');
        this.dom.directCardCodeInput.value = setAttr;

        const normalizedSet = normalizeSetCode(setAttr);
        if (normalizedSet) {
          this.showSetExplorer(normalizedSet);
        } else {
          this.dom.directCardCodeInput.focus();
        }
      });
    });

    // Atajos de Ejemplos
    this.dom.exampleChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const code = chip.getAttribute('data-code');
        if (code) {
          this.dom.directCardCodeInput.value = code;
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

    // Acciones de Resultados de Starter Deck
    if (this.dom.btnAddEntireDeck) {
      this.dom.btnAddEntireDeck.addEventListener('click', () => {
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

    // Modal de Cantidad
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
        const targetFolder = this.dom.modalCardFolderSelect ? this.dom.modalCardFolderSelect.value : 'default';
        this.addCardToCollection(this.pendingCard, this.pendingQty, targetFolder);
        this.closeModal();
      }
    });

    this.dom.btnCloseModal.addEventListener('click', () => this.closeModal());
    this.dom.cardModal.addEventListener('click', (e) => {
      if (e.target === this.dom.cardModal) this.closeModal();
    });

    // Zoom y Lightbox de Carta
    if (this.dom.modalImgZoomBtn) {
      this.dom.modalImgZoomBtn.addEventListener('click', () => {
        if (this.pendingCard) this.openLightbox(this.pendingCard);
      });
    }

    if (this.dom.btnOpenZoomModal) {
      this.dom.btnOpenZoomModal.addEventListener('click', () => {
        if (this.pendingCard) this.openLightbox(this.pendingCard);
      });
    }

    if (this.dom.btnCloseLightbox) {
      this.dom.btnCloseLightbox.addEventListener('click', () => this.closeLightbox());
    }

    if (this.dom.lightboxModal) {
      this.dom.lightboxModal.addEventListener('click', (e) => {
        if (e.target === this.dom.lightboxModal) this.closeLightbox();
      });
    }

    // Exportar / Importar
    this.dom.btnSheetsCopy.addEventListener('click', () => this.copyToGoogleSheets());
    this.dom.btnExcelCsv.addEventListener('click', () => this.downloadExcelCSV());
    
    if (this.dom.importExcelFile) {
      this.dom.importExcelFile.addEventListener('change', (e) => this.handleExcelCSVImport(e));
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

    this.dom.btnSaveJson.addEventListener('click', () => this.exportBackupJSON());
    this.dom.importJsonFile.addEventListener('change', (e) => this.importBackupJSON(e));
  }

  // =========================================================================
  // GESTIÓN DE CARPETAS Y MAZOS PERSONALIZADOS
  // =========================================================================

  renderFoldersBar() {
    if (!this.dom.foldersPillsContainer) return;
    this.dom.foldersPillsContainer.innerHTML = '';

    // Total de cartas en el álbum
    const totalCardsCount = this.collection.reduce((sum, c) => sum + (c.count || 0), 0);

    // 1. Píldora "Todas"
    const allPill = document.createElement('button');
    allPill.className = `folder-tab ${this.activeFolderId === 'ALL' ? 'active' : ''}`;
    allPill.innerHTML = `🗂️ Todas <span class="folder-tab-badge">${totalCardsCount}</span>`;
    allPill.addEventListener('click', () => {
      this.setActiveFolder('ALL');
    });
    this.dom.foldersPillsContainer.appendChild(allPill);

    // 2. Píldoras de Carpetas existentes
    this.folders.forEach(folder => {
      const folderCardsCount = this.collection
        .filter(c => (folder.id === 'default' ? (!c.folderId || c.folderId === 'default') : c.folderId === folder.id))
        .reduce((sum, c) => sum + (c.count || 0), 0);

      const pill = document.createElement('button');
      pill.className = `folder-tab ${this.activeFolderId === folder.id ? 'active' : ''}`;
      pill.innerHTML = `${folder.icon || '📁'} ${folder.name} <span class="folder-tab-badge">${folderCardsCount}</span>`;
      pill.addEventListener('click', () => {
        this.setActiveFolder(folder.id);
      });
      this.dom.foldersPillsContainer.appendChild(pill);
    });

    // Actualizar Banner de Carpeta Activa
    this.updateActiveFolderBanner();
  }

  setActiveFolder(folderId) {
    this.activeFolderId = folderId;
    this.renderFoldersBar();
    this.renderAlbum();
  }

  updateActiveFolderBanner() {
    if (!this.dom.folderActiveBanner) return;

    if (this.activeFolderId !== 'ALL' && this.activeFolderId !== 'default') {
      const folder = this.folders.find(f => f.id === this.activeFolderId);
      if (folder) {
        const count = this.collection
          .filter(c => c.folderId === folder.id)
          .reduce((sum, c) => sum + (c.count || 0), 0);

        this.dom.folderActiveIcon.textContent = folder.icon || '📁';
        this.dom.folderActiveTitle.textContent = folder.name;
        this.dom.folderActiveCount.textContent = `${count} carta${count === 1 ? '' : 's'} guardada${count === 1 ? '' : 's'} en esta carpeta`;
        this.dom.folderActiveBanner.style.display = 'flex';
        return;
      }
    }
    this.dom.folderActiveBanner.style.display = 'none';
  }

  openFolderModal(folderIdToEdit = null) {
    this.editingFolderId = folderIdToEdit;
    
    if (folderIdToEdit) {
      const folder = this.folders.find(f => f.id === folderIdToEdit);
      if (folder) {
        this.dom.folderModalTitle.textContent = '✏️ Editar Carpeta';
        this.dom.folderNameInput.value = folder.name;
        this.selectedFolderIcon = folder.icon || '📁';
        this.selectedFolderColor = folder.color || '#f59e0b';
      }
    } else {
      this.dom.folderModalTitle.textContent = '📁 Nueva Carpeta';
      this.dom.folderNameInput.value = '';
      this.selectedFolderIcon = '📁';
      this.selectedFolderColor = '#f59e0b';
    }

    // Actualizar selección visual de emojis
    if (this.dom.folderIconPicker) {
      this.dom.folderIconPicker.querySelectorAll('.emoji-opt-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-icon') === this.selectedFolderIcon);
      });
    }

    // Actualizar selección visual de colores
    if (this.dom.folderColorPicker) {
      this.dom.folderColorPicker.querySelectorAll('.color-opt-circle').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-color') === this.selectedFolderColor);
      });
    }

    this.dom.folderModal.classList.add('active');
    setTimeout(() => {
      this.dom.folderNameInput.focus();
    }, 150);
  }

  closeFolderModal() {
    this.dom.folderModal.classList.remove('active');
    this.editingFolderId = null;
  }

  saveFolderModalData() {
    const name = this.dom.folderNameInput.value.trim();
    if (!name) {
      this.showToast("⚠️ Introduce un nombre para la carpeta");
      this.dom.folderNameInput.focus();
      return;
    }

    if (this.editingFolderId) {
      const folder = this.folders.find(f => f.id === this.editingFolderId);
      if (folder) {
        folder.name = name;
        folder.icon = this.selectedFolderIcon;
        folder.color = this.selectedFolderColor;
        this.showToast(`✅ Carpeta "${name}" actualizada`);
      }
    } else {
      const newFolder = {
        id: 'folder_' + Date.now(),
        name: name,
        icon: this.selectedFolderIcon,
        color: this.selectedFolderColor
      };
      this.folders.push(newFolder);
      this.activeFolderId = newFolder.id;
      this.showToast(`🎉 Carpeta "${name}" creada`);
    }

    this.saveFolders();
    this.closeFolderModal();
    this.renderFoldersBar();
    this.renderAlbum();
  }

  deleteFolder(folderId) {
    const folder = this.folders.find(f => f.id === folderId);
    if (!folder || folder.id === 'default') return;

    if (confirm(`¿Eliminar la carpeta "${folder.name}"?\nLas cartas guardadas en ella se moverán a tu Álbum General.`)) {
      // Mover cartas a la carpeta default
      this.collection.forEach(c => {
        if (c.folderId === folderId) {
          c.folderId = 'default';
        }
      });
      this.folders = this.folders.filter(f => f.id !== folderId);
      this.activeFolderId = 'ALL';
      this.saveFolders();
      this.saveCollection();
      this.renderFoldersBar();
      this.renderAlbum();
      this.showToast(`🗑️ Carpeta "${folder.name}" eliminada`);
    }
  }

  openMoveFolderModal(cardId) {
    const card = this.collection.find(c => c.id === cardId);
    if (!card) return;

    this.movingCardId = cardId;
    this.dom.moveFolderCardId.textContent = card.id;
    this.dom.moveFolderCardName.textContent = card.name;
    this.setupRobustImage(this.dom.moveFolderCardImg, card);

    const currentFolder = this.getFolder(card.folderId);
    this.dom.moveFolderCurrentBadge.textContent = `Carpeta actual: ${currentFolder.icon} ${currentFolder.name}`;

    // Renderizar opciones de carpeta
    this.dom.moveFolderOptionsList.innerHTML = '';
    this.folders.forEach(folder => {
      const item = document.createElement('div');
      const isCurrent = (folder.id === (card.folderId || 'default'));
      item.className = `folder-select-item ${isCurrent ? 'active' : ''}`;
      item.innerHTML = `
        <span>${folder.icon} ${folder.name}</span>
        <span>${isCurrent ? '✓ Actual' : '➔ Mover'}</span>
      `;
      item.addEventListener('click', () => {
        this.moveCardToFolder(cardId, folder.id);
      });
      this.dom.moveFolderOptionsList.appendChild(item);
    });

    this.dom.moveFolderModal.classList.add('active');
  }

  closeMoveFolderModal() {
    this.dom.moveFolderModal.classList.remove('active');
    this.movingCardId = null;
  }

  moveCardToFolder(cardId, targetFolderId) {
    const card = this.collection.find(c => c.id === cardId);
    if (!card) return;

    card.folderId = targetFolderId;
    const targetFolder = this.getFolder(targetFolderId);
    this.saveCollection();
    this.closeMoveFolderModal();
    this.renderFoldersBar();
    this.renderAlbum();
    this.showToast(`📂 ${card.name} movida a "${targetFolder.name}"`);
  }

  // =========================================================================
  // MODIFICACIÓN Y ELIMINACIÓN DIRECTA DE CANTIDAD
  // =========================================================================

  openQtyModal(cardId) {
    const card = this.collection.find(c => c.id === cardId);
    if (!card) return;

    this.editingQtyCardId = cardId;
    this.dom.qtyModalId.textContent = card.id;
    this.dom.qtyModalName.textContent = card.name;
    this.dom.qtyModalCurrentCount.textContent = card.count;
    this.dom.qtyModalDirectInput.value = card.count;
    this.dom.qtyModalRemoveCount.value = 1;
    this.setupRobustImage(this.dom.qtyModalImg, card);

    // Ajustar estado de los chips de eliminación rápida
    this.dom.btnRemoveChips.forEach(chip => {
      const q = parseInt(chip.getAttribute('data-remove')) || 1;
      chip.textContent = `−${q} copia${q > 1 ? 's' : ''}`;
    });

    this.dom.qtyEditModal.classList.add('active');
    setTimeout(() => {
      this.dom.qtyModalDirectInput.select();
    }, 150);
  }

  closeQtyModal() {
    this.dom.qtyEditModal.classList.remove('active');
    this.editingQtyCardId = null;
  }

  setCardCountDirect(cardId, newCount) {
    const idx = this.collection.findIndex(c => c.id === cardId);
    if (idx < 0) return;

    const card = this.collection[idx];
    if (newCount <= 0) {
      this.collection.splice(idx, 1);
      this.showToast(`🗑️ ${card.name} (${card.id}) eliminada del álbum`);
    } else {
      card.count = newCount;
      this.showToast(`✅ Cantidad fijada en x${newCount} copias`);
    }

    this.saveCollection();
    this.closeQtyModal();
    this.renderAlbum();
    this.updateSetGridCardBadges();
  }

  removeCardCopiesDirect(cardId, amountToRemove) {
    const idx = this.collection.findIndex(c => c.id === cardId);
    if (idx < 0) return;

    const card = this.collection[idx];
    const newCount = card.count - amountToRemove;

    if (newCount <= 0) {
      this.collection.splice(idx, 1);
      this.showToast(`🗑️ Eliminadas todas las copias de ${card.name}`);
    } else {
      card.count = newCount;
      this.showToast(`🗑️ Restadas ${amountToRemove} copias. Quedan: x${newCount}`);
    }

    this.saveCollection();
    this.closeQtyModal();
    this.renderAlbum();
    this.updateSetGridCardBadges();
  }

  removeAllCardCopies(cardId) {
    const idx = this.collection.findIndex(c => c.id === cardId);
    if (idx < 0) return;

    const card = this.collection[idx];
    if (confirm(`¿Seguro que deseas eliminar TODAS las copias (${card.count}) de ${card.name} (${card.id})?`)) {
      this.collection.splice(idx, 1);
      this.saveCollection();
      this.closeQtyModal();
      this.renderAlbum();
      this.updateSetGridCardBadges();
      this.showToast(`🗑️ ${card.name} eliminada completamente`);
    }
  }

  // =========================================================================
  // MÉTODOS DE VISTA DEL ÁLBUM
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
    if (newIdx < 0) {
      this.showToast("🔍 Tamaño mínimo alcanzado");
      return;
    }
    if (newIdx >= sizes.length) {
      this.showToast("🔍 Tamaño máximo alcanzado");
      return;
    }

    this.setAlbumCardSize(sizes[newIdx]);
    const labels = { small: 'Pequeño (Zoom −)', normal: 'Normal', large: 'Grande (Zoom +)' };
    this.showToast(`Álbum: ${labels[sizes[newIdx]]}`);
  }

  // Métodos de Vista del Set Explorer / Búsqueda
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
    if (newIdx < 0) {
      this.showToast("🔍 Tamaño mínimo alcanzado");
      return;
    }
    if (newIdx >= sizes.length) {
      this.showToast("🔍 Tamaño máximo alcanzado");
      return;
    }

    this.setSetCardSize(sizes[newIdx]);
    const labels = { small: 'Pequeño (Zoom −)', normal: 'Normal', large: 'Grande (Zoom +)' };
    this.showToast(`Resultados: ${labels[sizes[newIdx]]}`);
  }

  updateToolbarControls() {
    const sizeLabels = {
      small: 'Pequeño',
      normal: 'Normal',
      large: 'Grande'
    };

    // Toolbar de Álbum
    if (this.dom.btnViewGrid && this.dom.btnViewList) {
      this.dom.btnViewGrid.classList.toggle('active', this.albumViewMode === 'grid');
      this.dom.btnViewList.classList.toggle('active', this.albumViewMode === 'list');
    }
    if (this.dom.btnSizeReset) {
      this.dom.btnSizeReset.textContent = sizeLabels[this.albumCardSize] || 'Normal';
    }

    // Toolbar de Set Explorer / Búsqueda
    if (this.dom.btnSetViewGrid && this.dom.btnSetViewList) {
      this.dom.btnSetViewGrid.classList.toggle('active', this.setViewMode === 'grid');
      this.dom.btnSetViewList.classList.toggle('active', this.setViewMode === 'list');
    }
    if (this.dom.btnSetSizeReset) {
      this.dom.btnSetSizeReset.textContent = sizeLabels[this.setCardSize] || 'Normal';
    }
  }

  submitCodeInput() {
    const raw = this.dom.directCardCodeInput.value.trim();
    if (!raw || raw === 'OP' || raw === 'ST') {
      this.showToast("Introduce un nombre o código (ej. Luffy, OP17-039 o ST01)");
      this.dom.directCardCodeInput.focus();
      return;
    }

    // 1. ¿Es una búsqueda de Set o Starter Deck completo (ej. OP01, ST01, OP17, ST20)?
    const setCode = normalizeSetCode(raw);
    if (setCode) {
      this.showSetExplorer(setCode);
      return;
    }

    // 2. ¿Es un código de carta individual exacto (ej. OP17-039, ST01-001)?
    const cleanCard = this.cleanCardCode(raw);
    if (cleanCard && window.ONE_PIECE_CARDS_DB && window.ONE_PIECE_CARDS_DB[cleanCard]) {
      this.fetchAndOpenCardModal(cleanCard);
      return;
    }

    // 3. Búsqueda por Nombre o Palabra Clave (Luffy, Zoro, Nami, Kaido, Yonko, etc.)
    const matches = window.searchCardsInDB ? window.searchCardsInDB(raw) : [];
    if (matches.length > 0) {
      if (matches.length === 1 && cleanCard) {
        this.fetchAndOpenCardModal(matches[0].id);
      } else {
        this.showSearchResults(raw, matches);
      }
      return;
    }

    // 4. Fallback si no hay coincidencias exactas en DB pero es un código válido
    if (cleanCard) {
      this.fetchAndOpenCardModal(cleanCard);
      return;
    }

    // Si no hubo coincidencias
    this.showToast(`No se encontraron cartas para "${raw}". Prueba con Luffy, Zoro, ST01...`);
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
    const primaryColor = meta ? meta.color : (cards[0].color || 'Red');

    if (this.dom.setResultsIcon) this.dom.setResultsIcon.textContent = '📦';
    this.dom.setResultsName.textContent = setName;
    this.dom.setResultsColorBadge.style.display = 'inline-block';
    this.dom.setResultsColorBadge.textContent = primaryColor;
    this.dom.setResultsColorBadge.className = `color-badge col-${primaryColor.replace('/', '-')}`;
    
    if (this.dom.btnAddEntireDeck) {
      this.dom.btnAddEntireDeck.style.display = 'inline-flex';
    }

    const traitInfo = meta ? ` • ${meta.traits}` : '';
    this.dom.setResultsDesc.textContent = `${cards.length} cartas oficiales en el set${traitInfo} • Toca para seleccionar o añadir`;

    this.updateToolbarControls();
    this.renderSearchResultsPage();
    this.dom.setResultsContainer.style.display = 'block';

    if (this.dom.stQuickSelect) {
      this.dom.stQuickSelect.value = setCode;
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

    if (this.dom.setResultsIcon) this.dom.setResultsIcon.textContent = '🔍';
    this.dom.setResultsName.textContent = `Resultados para "${query}"`;
    this.dom.setResultsColorBadge.style.display = 'none';

    if (this.dom.btnAddEntireDeck) {
      this.dom.btnAddEntireDeck.style.display = 'none';
    }

    this.dom.setResultsDesc.textContent = `${matches.length} cartas encontradas • 18 cartas por página (3 filas de 6)`;

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
      if (this.dom.setResultsContainer) {
        this.dom.setResultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  renderSearchResultsPage() {
    const totalCards = this.searchResults.length;
    const totalPages = Math.max(1, Math.ceil(totalCards / this.searchCardsPerPage));

    if (this.searchCurrentPage > totalPages) {
      this.searchCurrentPage = totalPages;
    }
    if (this.searchCurrentPage < 1) {
      this.searchCurrentPage = 1;
    }

    const startIdx = (this.searchCurrentPage - 1) * this.searchCardsPerPage;
    const pageCards = this.searchResults.slice(startIdx, startIdx + this.searchCardsPerPage);

    this.renderSetCardsGrid(pageCards);

    // Actualizar controles de paginación (18 cartas por página = 3 filas de 6)
    if (this.dom.setPaginationControls) {
      if (totalCards > this.searchCardsPerPage) {
        this.dom.setPaginationControls.style.display = 'flex';
        if (this.dom.pageIndicator) {
          this.dom.pageIndicator.textContent = `Página ${this.searchCurrentPage} de ${totalPages} (${totalCards} cartas)`;
        }
        if (this.dom.btnPagePrev) {
          this.dom.btnPagePrev.disabled = (this.searchCurrentPage <= 1);
        }
        if (this.dom.btnPageNext) {
          this.dom.btnPageNext.disabled = (this.searchCurrentPage >= totalPages);
        }
      } else {
        this.dom.setPaginationControls.style.display = 'none';
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
        // ================= MODO LISTA EN SET / BÚSQUEDA =================
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
          const targetFolder = (this.activeFolderId && this.activeFolderId !== 'ALL') ? this.activeFolderId : 'default';
          this.addCardToCollection(card, 1, targetFolder);
        });

        this.dom.setCardsGrid.appendChild(rowEl);

      } else {
        // ================= MODO CARTA EN SET / BÚSQUEDA =================
        const cardEl = document.createElement('div');
        cardEl.className = 'card-item set-card-item';
        cardEl.setAttribute('data-id', card.id);

        cardEl.innerHTML = `
          <div class="card-image-wrap" title="Toca para ver detalles o ampliar">
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
          const targetFolder = (this.activeFolderId && this.activeFolderId !== 'ALL') ? this.activeFolderId : 'default';
          this.addCardToCollection(card, 1, targetFolder);
        });

        this.dom.setCardsGrid.appendChild(cardEl);
      }
    });
  }

  updateSetGridCardBadges() {
    if (this.dom.setResultsContainer.style.display === 'none') return;

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

    const targetFolder = (this.activeFolderId && this.activeFolderId !== 'ALL') ? this.activeFolderId : 'default';

    let totalAdded = 0;
    cards.forEach(card => {
      const existing = this.collection.find(c => c.id === card.id);
      if (existing) {
        existing.count += 1;
      } else {
        this.collection.unshift({
          ...card,
          count: 1,
          folderId: targetFolder,
          addedAt: new Date().toLocaleDateString()
        });
      }
      totalAdded++;
    });

    this.saveCollection();
    this.renderAlbum();
    this.updateSetGridCardBadges();
    this.showToast(`🎉 ¡Añadidas las ${totalAdded} cartas de ${setCode} a tu Álbum!`);
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

    // Actualizar selector de carpeta en el modal
    if (this.dom.modalCardFolderSelect) {
      this.dom.modalCardFolderSelect.innerHTML = '';
      this.folders.forEach(folder => {
        const opt = document.createElement('option');
        opt.value = folder.id;
        opt.textContent = `${folder.icon} ${folder.name}`;
        this.dom.modalCardFolderSelect.appendChild(opt);
      });

      if (existing && existing.folderId) {
        this.dom.modalCardFolderSelect.value = existing.folderId;
      } else if (this.activeFolderId && this.activeFolderId !== 'ALL') {
        this.dom.modalCardFolderSelect.value = this.activeFolderId;
      } else {
        this.dom.modalCardFolderSelect.value = 'default';
      }
    }

    if (currentOwned > 0) {
      const folderName = this.getFolder(existing.folderId).name;
      this.dom.modalExistingMsg.style.display = 'block';
      this.dom.modalExistingMsg.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span>📦 Ya tienes <strong>${currentOwned} copia(s)</strong> en <em>${folderName}</em>.</span>
          <button id="btn-modal-open-qty-edit" class="btn-folder-action" type="button">⚡ Editar / Eliminar cantidad</button>
        </div>
      `;

      const btnEditQty = this.dom.modalExistingMsg.querySelector('#btn-modal-open-qty-edit');
      if (btnEditQty) {
        btnEditQty.addEventListener('click', () => {
          this.closeModal();
          this.openQtyModal(card.id);
        });
      }
    } else {
      this.dom.modalExistingMsg.style.display = 'none';
    }

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
      this.dom.modalForecast.textContent = `Añadir +${this.pendingQty} copias (Total resultante: ${total} copias)`;
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
        if (fallbackSvg) {
          imgElement.src = fallbackSvg;
        }
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

  addCardToCollection(card, qty, folderId = 'default') {
    const existingIndex = this.collection.findIndex(c => c.id === card.id);
    if (existingIndex >= 0) {
      this.collection[existingIndex].count += qty;
      if (folderId && folderId !== 'default') {
        this.collection[existingIndex].folderId = folderId;
      }
    } else {
      this.collection.unshift({
        ...card,
        count: qty,
        folderId: folderId || 'default',
        addedAt: new Date().toLocaleDateString()
      });
    }

    this.saveCollection();
    this.renderAlbum();
    this.updateSetGridCardBadges();
    this.showToast(`✅ +${qty} ${card.name} (${card.id}) añadido`);
  }

  adjustCardCount(cardId, delta) {
    const idx = this.collection.findIndex(c => c.id === cardId);
    if (idx < 0) return;

    this.collection[idx].count += delta;

    if (this.collection[idx].count <= 0) {
      const removedCard = this.collection[idx];
      this.collection.splice(idx, 1);
      this.showToast(`🗑️ ${removedCard.name} eliminado`);
    } else {
      this.showToast(`Copias actualizadas: x${this.collection[idx].count}`);
    }

    this.saveCollection();
    this.renderAlbum();
    this.updateSetGridCardBadges();
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    this.dom.viewAlbum.classList.toggle('active', tabId === 'album');
    this.dom.viewScanner.classList.toggle('active', tabId === 'scanner');
    this.dom.viewExport.classList.toggle('active', tabId === 'export');

    this.dom.navButtons.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
    });

    if (tabId === 'album') {
      this.renderAlbum();
    }
  }

  renderAlbum() {
    // Aplicar configuración de vista y tamaño al contenedor
    this.dom.cardsGrid.className = `cards-grid view-mode-${this.albumViewMode} size-${this.albumCardSize}`;

    // Comprobar si la búsqueda es un Starter Deck o Set
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

    const filtered = this.collection.filter(card => {
      // Filtro por Carpeta Activa
      if (this.activeFolderId !== 'ALL') {
        const cardFid = card.folderId || 'default';
        if (cardFid !== this.activeFolderId) return false;
      }

      // Filtro por Búsqueda de Texto
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchName = (card.name || '').toLowerCase().includes(q);
        const matchCode = (card.id || '').toLowerCase().includes(q);
        const matchTraits = (card.traits || '').toLowerCase().includes(q);
        const matchColor = (card.color || '').toLowerCase().includes(q);
        const matchSet = (card.set || '').toLowerCase().includes(q);
        const matchType = (card.cardType || '').toLowerCase().includes(q);

        // Si se buscó un set (ej. OP01, ST01), comprobar si el id empieza por el set
        const matchSetQuery = detectedSet ? (card.id || '').startsWith(detectedSet + '-') : false;

        if (!matchName && !matchCode && !matchTraits && !matchColor && !matchSet && !matchType && !matchSetQuery) return false;
      }

      // Filtro por Color / Rasgo
      if (this.activeFilter === 'ALL') return true;

      const matchColor = (card.color || '').toLowerCase().includes(this.activeFilter.toLowerCase());
      const matchTrait = (card.traits || '').toLowerCase().includes(this.activeFilter.toLowerCase());
      const matchType = (card.cardType || '').toLowerCase().includes(this.activeFilter.toLowerCase());
      return matchColor || matchTrait || matchType;
    });

    this.dom.cardsGrid.innerHTML = '';

    if (filtered.length === 0) {
      this.dom.emptyAlbumMsg.style.display = 'block';

      if (detectedSet) {
        const setCards = getCardsBySet(detectedSet);
        this.dom.emptyAlbumTitle.textContent = `No tienes cartas de ${detectedSet} en esta vista`;
        this.dom.emptyAlbumDesc.textContent = `Hay ${setCards.length} cartas oficiales del Set/Deck ${detectedSet} en la base de datos.`;
        if (this.dom.btnEmptySearchSt) {
          this.dom.btnEmptySearchSt.style.display = 'inline-block';
          this.dom.btnEmptySearchSt.textContent = `📦 Explorar y Añadir Cartas de ${detectedSet}`;
        }
      } else {
        const folderName = this.activeFolderId !== 'ALL' ? this.getFolder(this.activeFolderId).name : 'el álbum';
        this.dom.emptyAlbumTitle.textContent = `No se encontraron cartas en ${folderName}`;
        this.dom.emptyAlbumDesc.textContent = 'Añade cartas con el buscador o muévelas a esta carpeta.';
        if (this.dom.btnEmptySearchSt) {
          this.dom.btnEmptySearchSt.style.display = 'none';
        }
      }
    } else {
      this.dom.emptyAlbumMsg.style.display = 'none';

      filtered.forEach(card => {
        const colorClass = (card.color || 'Red').replace('/', '-');
        const folder = this.getFolder(card.folderId);

        if (this.albumViewMode === 'list') {
          // ================= MODO LISTA (FILA CON IMAGEN + INFO + CONTROLES) =================
          const rowEl = document.createElement('div');
          rowEl.className = 'card-list-item';
          rowEl.setAttribute('data-id', card.id);

          rowEl.innerHTML = `
            <div class="list-card-thumb-wrap" title="Toca para ver detalles o ampliar">
              <img class="card-img-element" alt="${card.name}" loading="lazy" />
            </div>
            <div class="list-card-details" title="Toca para ver detalles">
              <div class="list-card-header">
                <span class="card-id-text">${card.id}</span>
                <span class="card-badge-color col-${colorClass}">${card.color}</span>
                <span class="card-type-chip">${card.cardType || 'Card'} • ${card.rarity || 'R'}</span>
              </div>
              <div class="list-card-name">${card.name}</div>
              <div class="list-card-sub">
                <span class="list-card-traits">${card.traits || 'One Piece'}</span>
                <span class="card-folder-tag" title="Toca para cambiar de carpeta">${folder.icon} ${folder.name}</span>
              </div>
            </div>
            <div class="list-card-actions">
              <div class="card-stepper-row">
                <button class="step-btn btn-sub" data-id="${card.id}" title="Restar 1 copia">−</button>
                <span class="step-count step-count-interactive" data-id="${card.id}" title="Toca para editar cantidad o eliminar copias">
                  x${card.count}
                  <span class="btn-quick-edit-qty" title="Modificar o eliminar copias">✏️</span>
                </span>
                <button class="step-btn btn-add" data-id="${card.id}" title="Sumar 1 copia">+</button>
              </div>
            </div>
          `;

          const imgTag = rowEl.querySelector('.card-img-element');
          this.setupRobustImage(imgTag, card);

          // Click en imagen o datos abre el modal con zoom y detalles
          rowEl.querySelector('.list-card-thumb-wrap').addEventListener('click', () => {
            this.fetchAndOpenCardModal(card.id);
          });
          rowEl.querySelector('.list-card-details').addEventListener('click', () => {
            this.fetchAndOpenCardModal(card.id);
          });

          // Click en la etiqueta de carpeta para moverla
          const folderTag = rowEl.querySelector('.card-folder-tag');
          if (folderTag) {
            folderTag.addEventListener('click', (e) => {
              e.stopPropagation();
              this.openMoveFolderModal(card.id);
            });
          }

          // Click en la cantidad para editar directamente / eliminar de golpe
          const countBadge = rowEl.querySelector('.step-count-interactive');
          if (countBadge) {
            countBadge.addEventListener('click', (e) => {
              e.stopPropagation();
              this.openQtyModal(card.id);
            });
          }

          // Steppers
          rowEl.querySelector('.btn-sub').addEventListener('click', (e) => {
            e.stopPropagation();
            this.adjustCardCount(card.id, -1);
          });

          rowEl.querySelector('.btn-add').addEventListener('click', (e) => {
            e.stopPropagation();
            this.adjustCardCount(card.id, 1);
          });

          this.dom.cardsGrid.appendChild(rowEl);

        } else {
          // ================= MODO CARTA (GRID / CUADRÍCULA) =================
          const cardEl = document.createElement('div');
          cardEl.className = 'card-item';
          cardEl.setAttribute('data-id', card.id);
          
          cardEl.innerHTML = `
            <div class="card-image-wrap" title="Toca para ver detalles o ampliar">
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
                <span class="card-folder-tag" title="Toca para cambiar de carpeta">${folder.icon} ${folder.name}</span>
              </div>
              <div class="card-stepper-row">
                <button class="step-btn btn-sub" data-id="${card.id}" title="Restar 1 copia">−</button>
                <span class="step-count step-count-interactive" data-id="${card.id}" title="Toca para editar cantidad o eliminar copias">
                  x${card.count}
                  <span class="btn-quick-edit-qty" title="Modificar o eliminar copias">✏️</span>
                </span>
                <button class="step-btn btn-add" data-id="${card.id}" title="Sumar 1 copia">+</button>
              </div>
            </div>
          `;

          const imgTag = cardEl.querySelector('.card-img-element');
          this.setupRobustImage(imgTag, card);

          cardEl.querySelector('.card-image-wrap').addEventListener('click', () => {
            this.fetchAndOpenCardModal(card.id);
          });

          // Click en la etiqueta de carpeta para moverla
          const folderTag = cardEl.querySelector('.card-folder-tag');
          if (folderTag) {
            folderTag.addEventListener('click', (e) => {
              e.stopPropagation();
              this.openMoveFolderModal(card.id);
            });
          }

          // Click en la cantidad para editar directamente / eliminar de golpe
          const countBadge = cardEl.querySelector('.step-count-interactive');
          if (countBadge) {
            countBadge.addEventListener('click', (e) => {
              e.stopPropagation();
              this.openQtyModal(card.id);
            });
          }

          cardEl.querySelector('.btn-sub').addEventListener('click', (e) => {
            e.stopPropagation();
            this.adjustCardCount(card.id, -1);
          });

          cardEl.querySelector('.btn-add').addEventListener('click', (e) => {
            e.stopPropagation();
            this.adjustCardCount(card.id, 1);
          });

          this.dom.cardsGrid.appendChild(cardEl);
        }
      });
    }

    this.updateHeaderStats();
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

    let tsv = "Código\tNombre\tCantidad\tCarpeta\tColor\tType / Rasgos\tTipo\tRareza\tCoste/Vida\tExpansión\tFecha\n";
    this.collection.forEach(c => {
      const fName = this.getFolder(c.folderId).name;
      tsv += `${c.id}\t${c.name}\t${c.count}\t${fName}\t${c.color}\t${c.traits || ''}\t${c.cardType || ''}\t${c.rarity || ''}\t${c.cost || ''}\t${c.set || ''}\t${c.addedAt || ''}\n`;
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

    let csv = "\uFEFFCódigo,Nombre,Cantidad,Carpeta,Color,Type / Rasgos,Tipo,Rareza,Coste/Vida,Expansión,Fecha\n";
    this.collection.forEach(c => {
      const fName = this.getFolder(c.folderId).name;
      csv += `"${c.id}","${(c.name || '').replace(/"/g, '""')}",${c.count},"${fName}","${c.color}","${(c.traits || '').replace(/"/g, '""')}","${c.cardType || ''}","${c.rarity || ''}","${c.cost || ''}","${(c.set || '').replace(/"/g, '""')}","${c.addedAt || ''}"\n`;
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

      const existingIndex = this.collection.findIndex(c => c.id === cardInfo.id);
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

  exportBackupJSON() {
    const backupData = {
      version: 2,
      exportedAt: new Date().toISOString(),
      folders: this.folders,
      cards: this.collection
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `OnePiece_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    this.showToast("💾 Respaldo JSON descargado (incluye carpetas)");
  }

  importBackupJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        
        // Soporte formato v2 (con objeto folders y cards) o formato v1 (array de cards)
        let cardsToRestore = [];
        let foldersToRestore = [];

        if (Array.isArray(imported)) {
          cardsToRestore = imported;
        } else if (imported && Array.isArray(imported.cards)) {
          cardsToRestore = imported.cards;
          if (Array.isArray(imported.folders)) {
            foldersToRestore = imported.folders;
          }
        }

        if (cardsToRestore.length > 0) {
          if (confirm(`¿Restaurar ${cardsToRestore.length} cartas a tu álbum?`)) {
            if (foldersToRestore.length > 0) {
              this.folders = foldersToRestore;
              this.saveFolders();
            }

            cardsToRestore.forEach(card => {
              this.addCardToCollection(card, card.count || 1, card.folderId || 'default');
            });

            this.renderFoldersBar();
            this.showToast("¡Colección y carpetas restauradas!");
            this.switchTab('album');
          }
        } else {
          this.showToast("No se encontraron cartas en el archivo");
        }
      } catch (err) {
        this.showToast("Error al procesar el archivo JSON");
      }
    };
    reader.readAsText(file);
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
