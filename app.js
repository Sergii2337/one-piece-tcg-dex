// One Piece TCG Pocket Dex & Collection Manager - Starter Deck & Card Explorer Engine

class OnePieceApp {
  constructor() {
    this.collection = [];
    this.activeFilter = 'ALL';
    this.searchQuery = '';
    this.currentTab = 'album';
    this.pendingCard = null;
    this.pendingQty = 1;
    this.currentSetCode = null;

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
    this.loadCollection();
    this.cacheDOM();
    this.bindEvents();
    this.updateToolbarControls();
    this.renderAlbum();
    this.updateHeaderStats();
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
        });
      } else {
        this.collection = [
          { ...findOrGenerateCard("OP17-039"), count: 1, addedAt: new Date().toLocaleDateString() }, // Rocks.D.Xebec Leader (Azul, Rocks Pirates)
          { ...findOrGenerateCard("OP17-118"), count: 1, addedAt: new Date().toLocaleDateString() }, // Rocks.D.Xebec SEC (Azul, Rocks Pirates)
          { ...findOrGenerateCard("OP17-001"), count: 1, addedAt: new Date().toLocaleDateString() }, // Gol.D.Roger Leader (Rojo, Roger Pirates)
          { ...findOrGenerateCard("OP09-082"), count: 1, addedAt: new Date().toLocaleDateString() }, // Avalo Pizarro (Negro, Blackbeard Pirates)
          { ...findOrGenerateCard("OP09-118"), count: 1, addedAt: new Date().toLocaleDateString() }, // Gol.D.Roger SEC (Amarillo, Roger Pirates)
          { ...findOrGenerateCard("OP09-021"), count: 2, addedAt: new Date().toLocaleDateString() }  // Edward.Newgate Leader (Verde, Whitebeard Pirates)
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
  }

  cacheDOM() {
    this.dom = {
      headerStats: document.getElementById('header-stats'),

      viewAlbum: document.getElementById('view-album'),
      viewScanner: document.getElementById('view-scanner'),
      viewExport: document.getElementById('view-export'),
      navButtons: document.querySelectorAll('.nav-button'),

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
      starterDeckSelect: document.getElementById('starter-deck-select'),
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
      modalForecast: document.getElementById('modal-forecast'),
      modalCustomQty: document.getElementById('modal-custom-qty'),
      qtyBtns: document.querySelectorAll('.qty-btn'),
      btnSaveCardToAlbum: document.getElementById('btn-save-card-to-album'),

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
    if (this.dom.starterDeckSelect) {
      this.dom.starterDeckSelect.addEventListener('change', (e) => {
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
        this.addCardToCollection(this.pendingCard, this.pendingQty);
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

  // Métodos de Vista del Álbum
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

    // 1. ¿Es una búsqueda de Set o Starter Deck completo (ej. OP01, ST01, OP17, ST29)?
    const setCode = normalizeSetCode(raw);
    if (setCode) {
      this.showSetExplorer(setCode);
      return;
    }

    // 2. ¿Es un código de carta individual exacto (ej. OP17-039, ST29-001)?
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
    this.dom.setResultsDesc.textContent = `${cards.length} cartas oficiales en el set${traitInfo} • Pulsa o clic derecho para ampliar`;

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

    if (this.dom.setResultsIcon) this.dom.setResultsIcon.textContent = '🔍';
    this.dom.setResultsName.textContent = `Resultados para "${query}"`;
    this.dom.setResultsColorBadge.style.display = 'none';

    if (this.dom.btnAddEntireDeck) {
      this.dom.btnAddEntireDeck.style.display = 'none';
    }

    this.dom.setResultsDesc.textContent = `${matches.length} cartas encontradas • 18 cartas por página (3 filas de 6) • Pulsa o clic derecho para ampliar`;

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
      const primaryColor = (card.color || 'Red').split('/')[0];
      const colorClass = (card.color || 'Red').replace('/', '-');

      if (this.setViewMode === 'list') {
        // ================= MODO LISTA EN SET / BÚSQUEDA =================
        const rowEl = document.createElement('div');
        rowEl.className = 'card-list-item set-card-item';
        rowEl.setAttribute('data-id', card.id);

        rowEl.innerHTML = `
          <div class="list-card-thumb-wrap" title="Toca o clic derecho para ver grande">
            <img class="card-img-element" alt="${card.name}" loading="lazy" />
          </div>
          <div class="list-card-details" title="Toca o clic derecho para ver detalles">
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

        // Click derecho para ampliar carta

        rowEl.querySelector('.btn-add-set-card').addEventListener('click', (e) => {
          e.stopPropagation();
          this.addCardToCollection(card, 1);
        });

        this.dom.setCardsGrid.appendChild(rowEl);

      } else {
        // ================= MODO CARTA EN SET / BÚSQUEDA =================
        const cardEl = document.createElement('div');
        cardEl.className = 'card-item set-card-item';
        cardEl.setAttribute('data-id', card.id);

        cardEl.innerHTML = `
          <div class="card-image-wrap" title="Toca o haz clic derecho para ampliar">
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

        // Click derecho para ampliar carta

        cardEl.querySelector('.btn-add-set-card').addEventListener('click', (e) => {
          e.stopPropagation();
          this.addCardToCollection(card, 1);
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

    let totalAdded = 0;
    cards.forEach(card => {
      const existing = this.collection.find(c => c.id === card.id);
      if (existing) {
        existing.count += 1;
      } else {
        this.collection.unshift({
          ...card,
          count: 1,
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

    if (currentOwned > 0) {
      this.dom.modalExistingMsg.style.display = 'block';
      this.dom.modalExistingMsg.innerHTML = `📦 Ya tienes <strong>${currentOwned} copia(s)</strong> de esta carta en tu álbum.`;
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

  addCardToCollection(card, qty) {
    const existingIndex = this.collection.findIndex(c => c.id === card.id);
    if (existingIndex >= 0) {
      this.collection[existingIndex].count += qty;
    } else {
      this.collection.unshift({
        ...card,
        count: qty,
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
        this.dom.emptyAlbumTitle.textContent = `No tienes cartas de ${detectedSet} en tu álbum`;
        this.dom.emptyAlbumDesc.textContent = `Hay ${setCards.length} cartas oficiales del Set/Deck ${detectedSet} en la base de datos.`;
        if (this.dom.btnEmptySearchSt) {
          this.dom.btnEmptySearchSt.style.display = 'inline-block';
          this.dom.btnEmptySearchSt.textContent = `📦 Explorar y Añadir Cartas de ${detectedSet}`;
        }
      } else {
        this.dom.emptyAlbumTitle.textContent = 'No se encontraron cartas';
        this.dom.emptyAlbumDesc.textContent = 'Introduce un código en la pestaña Añadir Carta para buscarla.';
        if (this.dom.btnEmptySearchSt) {
          this.dom.btnEmptySearchSt.style.display = 'none';
        }
      }
    } else {
      this.dom.emptyAlbumMsg.style.display = 'none';

      filtered.forEach(card => {
        const primaryColor = (card.color || 'Red').split('/')[0];
        const colorClass = (card.color || 'Red').replace('/', '-');

        if (this.albumViewMode === 'list') {
          // ================= MODO LISTA (FILA CON IMAGEN + INFO + CONTROLES) =================
          const rowEl = document.createElement('div');
          rowEl.className = 'card-list-item';
          rowEl.setAttribute('data-id', card.id);

          rowEl.innerHTML = `
            <div class="list-card-thumb-wrap" title="Toca o clic derecho para ver la carta grande">
              <img class="card-img-element" alt="${card.name}" loading="lazy" />
            </div>
            <div class="list-card-details" title="Toca o clic derecho para ver detalles">
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
                <span class="step-count">x${card.count}</span>
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

          // Click derecho para ampliar carta

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
            <div class="card-image-wrap" title="Toca o haz clic derecho para ampliar">
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
              <div class="trait-tag" title="${card.traits || 'One Piece'}">${card.traits || 'One Piece'}</div>
              <div class="card-stepper-row">
                <button class="step-btn btn-sub" data-id="${card.id}" title="Restar copia">−</button>
                <span class="step-count">${card.count}</span>
                <button class="step-btn btn-add" data-id="${card.id}" title="Sumar copia">+</button>
              </div>
            </div>
          `;

          const imgTag = cardEl.querySelector('.card-img-element');
          this.setupRobustImage(imgTag, card);

          cardEl.querySelector('.card-image-wrap').addEventListener('click', () => {
            this.fetchAndOpenCardModal(card.id);
          });

          // Click derecho sobre la carta para ampliarla en cualquier punto

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

  async copyToGoogleSheets() {
    if (this.collection.length === 0) {
      this.showToast("No tienes cartas en la colección");
      return;
    }

    let tsv = "Código\tNombre\tCantidad\tColor\tType / Rasgos\tTipo\tRareza\tCoste/Vida\tExpansión\tFecha\n";
    this.collection.forEach(c => {
      tsv += `${c.id}\t${c.name}\t${c.count}\t${c.color}\t${c.traits || ''}\t${c.cardType || ''}\t${c.rarity || ''}\t${c.cost || ''}\t${c.set || ''}\t${c.addedAt || ''}\n`;
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

    let csv = "\uFEFFCódigo,Nombre,Cantidad,Color,Type / Rasgos,Tipo,Rareza,Coste/Vida,Expansión,Fecha\n";
    this.collection.forEach(c => {
      csv += `"${c.id}","${(c.name || '').replace(/"/g, '""')}",${c.count},"${c.color}","${(c.traits || '').replace(/"/g, '""')}","${c.cardType || ''}","${c.rarity || ''}","${c.cost || ''}","${(c.set || '').replace(/"/g, '""')}","${c.addedAt || ''}"\n`;
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
    const blob = new Blob([JSON.stringify(this.collection, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `OnePiece_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    this.showToast("💾 Respaldo JSON descargado");
  }

  importBackupJSON(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          if (confirm(`¿Restaurar ${imported.length} cartas a tu álbum?`)) {
            imported.forEach(card => {
              this.addCardToCollection(card, card.count || 1);
            });
            this.showToast("¡Colección restaurada!");
            this.switchTab('album');
          }
        }
      } catch (err) {
        this.showToast("Error al procesar el archivo");
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