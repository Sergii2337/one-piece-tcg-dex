// Escáner de cartas: lee con la cámara el código impreso abajo a la derecha (p. ej. "OP09-093"),
// busca la carta y pregunta cuántas copias añadir y en qué carpeta.
// El OCR es Tesseract.js (se descarga solo la primera vez que se abre el escáner).

const TESSERACT_URL = 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';
const SCAN_INTERVAL_MS = 450;
const CARD_RATIO = 63 / 88; // ancho / alto de una carta

// Zona del código dentro de la carta (fracciones del marco guía): abajo a la derecha
const CODE_ZONE = { x: 0.45, y: 0.85, w: 0.55, h: 0.15 };

// Preprocesados que se van alternando en cada fotograma: [invertir, canal, binarizar]
// lum = gris normal; g = verde (texto dorado sobre morado); b = azul (texto dorado sobre fondo rosa/blanco)
// Los binarizados son para las cartas foil / full art (secretas), con el código sobre el dibujo
const FRAME_VARIANTS = [
  [true, 'lum', false], [true, 'g', false], [false, 'lum', false], [false, 'b', false],
  [true, 'lum', true], [false, 'lum', true]
];
const READ_WINDOW_MS = 8000;

// Saca los códigos de carta de un texto de OCR, corrigiendo las confusiones típicas
// (0P09-093 -> OP09-093, OP09-I|9 -> OP09-119, 5727-005 / 5127-005 -> ST27-005, OP0S-O93 -> OP05-093...)
function extractCardCodes(text) {
  const t = String(text || '').toUpperCase();
  const digits = (s) => s.replace(/O/g, '0').replace(/[IL|!]/g, '1').replace(/S/g, '5').replace(/B/g, '8');
  const prefix = (s) => s.replace(/^[0Q]P$/, 'OP').replace(/^[S5][T71I]$/, 'ST').replace(/^E8$/, 'EB').replace(/^PR8$/, 'PRB');
  const re = /(PR[B8]|E[B8]|[O0Q]P|[S5][T71I])\s?([0-9OILSB|!]{2})\s?[-–—~]?\s?([0-9OILSB|!]{3})/g;
  const out = [];
  let m;
  while ((m = re.exec(t))) {
    const id = `${prefix(m[1])}${digits(m[2])}-${digits(m[3])}`;
    if (!out.includes(id)) out.push(id);
  }
  return out;
}

// Umbral de Otsu: el nivel de gris que mejor separa texto y fondo según el histograma
function otsuThreshold(hist, total) {
  let sumAll = 0;
  for (let v = 0; v < 256; v++) sumAll += v * hist[v];
  let sumBack = 0;
  let weightBack = 0;
  let best = 0;
  let threshold = 127;
  for (let v = 0; v < 256; v++) {
    weightBack += hist[v];
    if (!weightBack) continue;
    const weightFore = total - weightBack;
    if (!weightFore) break;
    sumBack += v * hist[v];
    const diff = sumBack / weightBack - (sumAll - sumBack) / weightFore;
    const between = weightBack * weightFore * diff * diff;
    if (between > best) {
      best = between;
      threshold = v;
    }
  }
  return threshold;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error('No se pudo cargar ' + src));
    document.head.appendChild(s);
  });
}

class CardScanner {
  constructor(app) {
    this.app = app;
    this.worker = null;
    this.workerPromise = null;
    this.stream = null;
    this.state = 'closed'; // closed | scanning | result
    this.busy = false;
    this.timer = null;
    this.recentReads = [];  // [{ id, at, variant }] para exigir dos lecturas iguales
    this.frameCount = 0;
    this.attempts = 0;
    this.debug = false;
    this.lastText = '';
    this.addedCount = 0;
    this.result = null;     // { versions, selectedId, qty }
    this.folderId = 'default';
    this.canvas = document.createElement('canvas');

    this.dom = {
      overlay: document.getElementById('scan-overlay'),
      video: document.getElementById('scan-video'),
      viewport: document.getElementById('scan-viewport'),
      guide: document.getElementById('scan-guide'),
      status: document.getElementById('scan-status'),
      counter: document.getElementById('scan-counter'),
      panel: document.getElementById('scan-panel'),
      debug: document.getElementById('scan-debug'),
      zoom: document.getElementById('scan-zoom'),
      photoInput: document.getElementById('scan-photo-input')
    };
    if (!this.dom.overlay) return;

    this.bindEvents();
  }

  bindEvents() {
    const openBtn = document.getElementById('btn-open-card-scanner');
    if (openBtn) openBtn.addEventListener('click', () => this.open());

    this.dom.overlay.addEventListener('click', (e) => {
      const el = e.target.closest('[data-scan]');
      if (el) this.handleAction(el.getAttribute('data-scan'), el);
    });

    this.dom.overlay.addEventListener('change', (e) => {
      if (e.target.id === 'scan-folder-select') this.folderId = e.target.value;
      if (e.target.id === 'scan-qty-input') this.setQty(parseInt(e.target.value, 10));
    });

    this.dom.overlay.addEventListener('keydown', (e) => {
      if (e.target.id === 'scan-manual-input' && e.key === 'Enter') {
        e.preventDefault();
        this.handleAction('manual-search');
      }
    });

    this.dom.photoInput.addEventListener('change', () => {
      const file = this.dom.photoInput.files && this.dom.photoInput.files[0];
      this.dom.photoInput.value = '';
      if (file) this.scanPhoto(file);
    });

    // Al salir de la app en el móvil se libera la cámara; al volver se reanuda
    document.addEventListener('visibilitychange', () => {
      if (this.state === 'closed') return;
      if (document.hidden) this.stopCamera();
      else if (this.state === 'scanning') this.startCamera();
    });
  }

  handleAction(action, el) {
    switch (action) {
      case 'close': this.close(); break;
      case 'debug': this.toggleDebug(); break;
      case 'photo': this.dom.photoInput.click(); break;
      case 'retry-camera': this.startCamera(); break;
      case 'manual': this.showManualEntry(); break;
      case 'manual-search': this.searchManual(); break;
      case 'rescan': this.resumeScanning(); break;
      case 'version': this.selectVersion(el.getAttribute('data-id')); break;
      case 'qty-minus': this.setQty(this.result.qty - 1); break;
      case 'qty-plus': this.setQty(this.result.qty + 1); break;
      case 'qty-preset': this.setQty(parseInt(el.getAttribute('data-qty'), 10)); break;
      case 'add': this.addResult(); break;
    }
  }

  // =========================================================================
  // ABRIR / CERRAR Y CÁMARA
  // =========================================================================

  async open() {
    this.state = 'scanning';
    this.addedCount = 0;
    this.attempts = 0;
    this.recentReads = [];
    this.folderId = (this.app.folderScope === 'shared' && this.app.activeFolderId) ? this.app.activeFolderId : 'default';
    this.dom.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.updateCounter();
    this.renderScanningPanel();
    this.setStatus('⏳ Preparando el lector...');

    this.ensureWorker().catch(() => {
      this.setStatus('⚠️ No se pudo cargar el lector de texto. Comprueba la conexión.');
    });
    await this.startCamera();
  }

  close() {
    this.state = 'closed';
    this.stopLoop();
    this.stopCamera();
    this.dom.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  async startCamera() {
    if (this.stream) return this.startLoop();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.showCameraError('Este navegador no permite usar la cámara aquí.');
      return;
    }
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        // La máxima resolución posible: el marco es pequeño para que la carta quede a una distancia
        // a la que la cámara enfoca, así que el código ocupa pocos píxeles
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 3840 }, height: { ideal: 2160 } }
      });
      if (this.state === 'closed') return this.stopCamera();
      this.dom.video.srcObject = this.stream;
      await this.dom.video.play().catch(() => {});
      this.dom.viewport.classList.remove('is-off');
      this.setupCameraControls();
      this.startLoop();
    } catch (err) {
      console.warn('[Escáner] Cámara no disponible:', err);
      const denied = err && (err.name === 'NotAllowedError' || err.name === 'SecurityError');
      this.showCameraError(denied
        ? 'No hay permiso para usar la cámara. Actívalo en los ajustes del navegador.'
        : 'No se pudo abrir la cámara.');
    }
  }

  // Enfoque continuo y zoom, si el navegador los permite (Chrome en Android sí; Safari no siempre).
  // Con zoom la carta puede estar más lejos, donde la cámara enfoca bien
  setupCameraControls() {
    const track = this.stream && this.stream.getVideoTracks()[0];
    const caps = track && track.getCapabilities ? track.getCapabilities() : {};
    if (caps.focusMode && caps.focusMode.includes('continuous')) {
      track.applyConstraints({ advanced: [{ focusMode: 'continuous' }] }).catch(() => {});
    }

    const zoom = this.dom.zoom;
    if (!zoom) return;
    const hasZoom = caps.zoom && caps.zoom.max > caps.zoom.min;
    zoom.hidden = !hasZoom;
    if (!hasZoom) return;
    const settings = track.getSettings ? track.getSettings() : {};
    zoom.min = caps.zoom.min;
    zoom.max = Math.min(caps.zoom.max, 4);
    zoom.step = caps.zoom.step || 0.1;
    zoom.value = settings.zoom || caps.zoom.min;
    zoom.oninput = () => {
      track.applyConstraints({ advanced: [{ zoom: parseFloat(zoom.value) }] }).catch(() => {});
    };
  }

  stopCamera() {
    this.stopLoop();
    if (this.stream) {
      this.stream.getTracks().forEach(t => t.stop());
      this.stream = null;
    }
    if (this.dom.video) this.dom.video.srcObject = null;
  }

  showCameraError(msg) {
    this.dom.viewport.classList.add('is-off');
    this.setStatus(`📷 ${msg} Puedes hacer una foto de la carta o escribir el código.`);
  }

  setStatus(text) {
    if (this.dom.status) this.dom.status.textContent = text;
  }

  updateCounter() {
    if (!this.dom.counter) return;
    this.dom.counter.textContent = this.addedCount ? `${this.addedCount} añadida${this.addedCount > 1 ? 's' : ''}` : '';
  }

  // =========================================================================
  // OCR
  // =========================================================================

  ensureWorker() {
    if (this.workerPromise) return this.workerPromise;
    this.workerPromise = (async () => {
      if (typeof Tesseract === 'undefined') await loadScript(TESSERACT_URL);
      const worker = await Tesseract.createWorker('eng');
      // 11 = texto disperso: el código está suelto entre otros textos y símbolos
      await worker.setParameters({ tessedit_pageseg_mode: '11' });
      this.worker = worker;
      if (this.state === 'scanning' && this.stream) this.setStatus('🔍 Encuadra la carta en el marco, a un palmo de la cámara');
      return worker;
    })();
    this.workerPromise.catch(() => { this.workerPromise = null; });
    return this.workerPromise;
  }

  startLoop() {
    this.stopLoop();
    if (this.state !== 'scanning') return;
    if (this.worker) this.setStatus('🔍 Encuadra la carta en el marco, a un palmo de la cámara');
    this.timer = setInterval(() => this.scanFrame(), SCAN_INTERVAL_MS);
  }

  stopLoop() {
    clearInterval(this.timer);
    this.timer = null;
  }

  // Rectángulo del marco guía en coordenadas del vídeo (el vídeo se muestra con object-fit: cover)
  guideRectInVideo() {
    const video = this.dom.video;
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    const vRect = video.getBoundingClientRect();
    const gRect = this.dom.guide.getBoundingClientRect();
    const scale = Math.max(vRect.width / vw, vRect.height / vh);
    const offX = (vRect.width - vw * scale) / 2;
    const offY = (vRect.height - vh * scale) / 2;
    return {
      x: (gRect.left - vRect.left - offX) / scale,
      y: (gRect.top - vRect.top - offY) / scale,
      w: gRect.width / scale,
      h: gRect.height / scale
    };
  }

  // Dibuja una zona de la fuente en el canvas, ampliada, en escala de grises y con contraste.
  // invert: el código suele ser texto blanco sobre fondo oscuro y Tesseract lee mejor negro sobre blanco.
  // channel: 'lum' (gris) o un solo canal ('g' / 'b'): el texto dorado se confunde con algunos fondos en gris
  // binarize: blanco/negro puro con umbral de Otsu (separa el texto del arte de fondo en las cartas full art)
  prepareCanvas(source, sx, sy, sw, sh, targetWidth, invert, channel = 'lum', binarize = false) {
    const scale = targetWidth / sw;
    const canvas = this.canvas;
    canvas.width = Math.round(sw * scale);
    canvas.height = Math.round(sh * scale);
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(source, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const d = img.data;
    const hist = new Uint32Array(256);
    for (let i = 0; i < d.length; i += 4) {
      const g = Math.round(channel === 'g' ? d[i + 1] : channel === 'b' ? d[i + 2] : d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114);
      d[i] = g;
      hist[g]++;
    }
    // Contraste por percentiles, no por mínimo/máximo: en las cartas foil (secretas, paralelas)
    // un reflejo de brillo puro dejaba el resto del recorte casi sin contraste
    const total = d.length / 4;
    const percentile = (p) => {
      let acc = 0;
      for (let v = 0; v < 256; v++) if ((acc += hist[v]) >= total * p) return v;
      return 255;
    };
    const min = percentile(0.02);
    const max = percentile(0.98);
    const range = Math.max(1, max - min);
    const threshold = binarize ? otsuThreshold(hist, total) : -1;
    for (let i = 0; i < d.length; i += 4) {
      let v = threshold >= 0
        ? (d[i] > threshold ? 255 : 0)
        : Math.min(255, Math.max(0, ((d[i] - min) / range) * 255));
      if (invert) v = 255 - v;
      d[i] = d[i + 1] = d[i + 2] = v;
    }
    ctx.putImageData(img, 0, 0);
    return canvas;
  }

  async recognize(canvas) {
    const { data } = await this.worker.recognize(canvas);
    this.lastText = data.text;
    return extractCardCodes(data.text).filter(id => ONE_PIECE_CARDS_DB[id]);
  }

  // Modo diagnóstico: muestra el recorte que se manda al lector y el texto que devuelve
  toggleDebug() {
    this.debug = !this.debug;
    this.dom.debug.hidden = !this.debug;
    if (this.debug) this.dom.debug.innerHTML = '<p>Esperando la primera lectura...</p>';
  }

  renderDebug(info) {
    if (!this.debug) return;
    this.dom.debug.innerHTML = `
      <img src="${this.canvas.toDataURL('image/jpeg', 0.7)}" alt="Recorte">
      <p>${escapeHtml(info)}</p>
      <p>Texto: «${escapeHtml((this.lastText || '').replace(/\s+/g, ' ').trim()) || '(nada)'}»</p>
    `;
  }

  async scanFrame() {
    const video = this.dom.video;
    if (this.busy || this.state !== 'scanning' || !this.worker || !video.videoWidth) return;
    this.busy = true;
    try {
      const g = this.guideRectInVideo();
      const sx = Math.max(0, g.x + g.w * CODE_ZONE.x);
      const sy = Math.max(0, g.y + g.h * CODE_ZONE.y);
      const sw = Math.min(video.videoWidth - sx, g.w * CODE_ZONE.w);
      const sh = Math.min(video.videoHeight - sy, g.h * CODE_ZONE.h);
      if (sw < 20 || sh < 8) return;

      // Alterna preprocesados: cada carta se lee mejor con uno (fondo oscuro, claro, texto dorado...)
      const variant = this.frameCount++ % FRAME_VARIANTS.length;
      const [invert, channel, binarize] = FRAME_VARIANTS[variant];
      const started = performance.now();
      const ids = await this.recognize(this.prepareCanvas(video, sx, sy, sw, sh, 1200, invert, channel, binarize));
      this.attempts++;
      this.renderDebug(`Vídeo ${video.videoWidth}x${video.videoHeight} · recorte ${Math.round(sw)}x${Math.round(sh)} px · ` +
        `${[invert ? 'inv' : 'norm', channel, binarize ? 'b/n' : 'gris'].join('/')} · ${Math.round(performance.now() - started)} ms · intento ${this.attempts}`);
      if (this.state !== 'scanning') return;
      if (!ids.length) {
        if (!this.recentReads.length) this.setStatus(`🔍 Buscando el código... (${this.attempts} intentos)`);
        return;
      }

      // Lectura segura: el mismo código con dos preprocesados distintos en los últimos segundos.
      // Lectura dudosa: el mismo preprocesado dos veces (puede equivocarse siempre igual, un 6 que
      // lee como 0, con la carta quieta): se muestra avisando de que hay que comprobarla
      const id = ids[0];
      const now = Date.now();
      this.recentReads = this.recentReads.filter(r => now - r.at < READ_WINDOW_MS);
      this.recentReads.push({ id, at: now, variant });
      const sameId = this.recentReads.filter(r => r.id === id);
      const confirmed = sameId.some(r => r.variant !== variant);
      const doubtful = !confirmed && sameId.length >= 2;
      if (confirmed || doubtful) {
        this.recentReads = [];
        this.showResult(id, { doubtful });
      } else {
        this.setStatus(`👀 ¿${id}? Mantén la carta quieta...`);
      }
    } catch (err) {
      console.warn('[Escáner] Error de OCR:', err);
    } finally {
      this.busy = false;
    }
  }

  // Foto (cámara del sistema o galería): sin marco guía, se busca el código en la mitad inferior
  async scanPhoto(file) {
    this.stopLoop();
    this.state = 'scanning';
    this.setStatus('⏳ Leyendo la foto...');
    let bitmap = null;
    try {
      const worker = await this.ensureWorker();
      if (!worker) throw new Error('Lector no disponible');
      bitmap = await this.loadImage(file);
      const w = bitmap.width;
      const h = bitmap.height;
      const zones = [
        [w * 0.35, h * 0.55, w * 0.65, h * 0.45], // abajo a la derecha (carta de pie)
        [0, h * 0.5, w, h * 0.5],                 // mitad inferior
        [0, 0, w, h]                              // foto entera
      ];
      for (const [sx, sy, sw, sh] of zones) {
        for (const [invert, channel, binarize] of FRAME_VARIANTS) {
          const ids = await this.recognize(this.prepareCanvas(bitmap, sx, sy, sw, sh, Math.min(2000, Math.max(1200, sw)), invert, channel, binarize));
          if (ids.length) {
            this.showResult(ids[0]);
            return;
          }
        }
      }
      this.setStatus('🤔 No he encontrado el código en la foto. Prueba más cerca o escríbelo.');
      this.showManualEntry();
    } catch (err) {
      console.warn('[Escáner] Error leyendo la foto:', err);
      this.setStatus('⚠️ No se pudo leer la foto.');
    } finally {
      if (bitmap && bitmap.close) bitmap.close();
      if (this.state === 'scanning' && this.stream) this.startLoop();
    }
  }

  loadImage(file) {
    if (window.createImageBitmap) return createImageBitmap(file);
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }

  // =========================================================================
  // PANEL INFERIOR
  // =========================================================================

  renderScanningPanel() {
    this.dom.panel.innerHTML = `
      <div class="scan-actions-row">
        <button type="button" class="btn-outline" data-scan="photo">🖼️ Usar una foto</button>
        <button type="button" class="btn-outline" data-scan="manual">⌨️ Escribir código</button>
      </div>
    `;
  }

  showManualEntry() {
    // Desde un resultado: se precarga el código leído para corregir solo el dígito mal leído
    const current = this.result ? this.result.selectedId.split('_')[0] : '';
    this.stopLoop();
    this.state = 'result';
    this.dom.panel.innerHTML = `
      <div class="scan-manual-row">
        <input type="text" id="scan-manual-input" class="main-code-field" placeholder="Ej. OP09-093" value="${escapeHtml(current)}" autocomplete="off" autocapitalize="characters">
        <button type="button" class="btn-primary" data-scan="manual-search">🔍</button>
      </div>
      <div class="scan-actions-row">
        <button type="button" class="btn-outline" data-scan="rescan">📷 Volver a escanear</button>
        <button type="button" class="btn-outline" data-scan="photo">🖼️ Usar una foto</button>
      </div>
    `;
    const input = this.dom.panel.querySelector('#scan-manual-input');
    if (input) input.focus();
  }

  searchManual() {
    const input = this.dom.panel.querySelector('#scan-manual-input');
    const raw = input ? input.value.trim() : '';
    if (!raw) return;
    const card = findExistingCard(raw);
    if (!card) {
      this.app.showToast('Carta no encontrada');
      return;
    }
    this.showResult(card.id);
  }

  resumeScanning() {
    this.state = 'scanning';
    this.result = null;
    this.recentReads = [];
    this.renderScanningPanel();
    if (this.stream) this.startLoop();
    else this.startCamera();
  }

  showResult(cardId, { doubtful = false } = {}) {
    this.stopLoop();
    this.state = 'result';
    if (navigator.vibrate) navigator.vibrate(30);

    // Todas las versiones con el mismo código (arte alternativo, reimpresiones...): se elige cuál es
    const versions = getCardVersions(cardId).filter(id => ONE_PIECE_CARDS_DB[id]);
    this.result = { versions: versions.length ? versions : [cardId], selectedId: normalizeCardId(cardId), qty: 1 };
    this.setStatus(doubtful
      ? `⚠️ He leído ${cardId.split('_')[0]}, pero no estoy seguro: comprueba que es la carta`
      : `✅ ${cardId.split('_')[0]} encontrada`);
    this.renderResultPanel();
  }

  ownedCount(cardId) {
    return this.app.collection
      .filter(c => c.id === cardId)
      .reduce((sum, c) => sum + (c.count || 0), 0);
  }

  renderResultPanel() {
    const { versions, selectedId, qty } = this.result;
    const card = findOrGenerateCard(selectedId);
    const owned = this.ownedCount(selectedId);

    this.dom.panel.innerHTML = `
      <div class="scan-result-head">
        <div class="scan-result-thumb"><img alt="${escapeHtml(card.name)}"></div>
        <div class="scan-result-info">
          <span class="card-id-text">${escapeHtml(formatCardCode(card.id))} · ${escapeHtml(card.rarity || '')}</span>
          <strong class="scan-result-name">${escapeHtml(card.name)}</strong>
          <span class="scan-result-owned">${owned ? `Ya tienes ${owned} en tu colección` : 'Aún no la tienes'}</span>
        </div>
      </div>

      ${versions.length > 1 ? `
        <div class="scan-versions-label">Elige la versión (${versions.length}):</div>
        <div class="scan-versions">
          ${versions.map(id => `
            <button type="button" class="scan-version${id === selectedId ? ' is-selected' : ''}" data-scan="version" data-id="${escapeHtml(id)}">
              <img alt="${escapeHtml(formatCardCode(id))}" loading="lazy">
              <span>${escapeHtml(id.includes('_') ? formatCardCode(id).split(' ')[1] : 'Normal')}</span>
            </button>
          `).join('')}
        </div>
      ` : ''}

      <div class="scan-qty-label">¿Cuántas copias añades?</div>
      <div class="scan-qty-row">
        <button type="button" class="qty-mini-step" data-scan="qty-minus">−</button>
        <input type="number" id="scan-qty-input" class="qty-direct-field" min="1" max="999" value="${qty}" inputmode="numeric">
        <button type="button" class="qty-mini-step" data-scan="qty-plus">+</button>
        ${[1, 2, 4].map(n => `<button type="button" class="scan-qty-preset${n === qty ? ' is-active' : ''}" data-scan="qty-preset" data-qty="${n}">x${n}</button>`).join('')}
      </div>

      <label class="scan-folder-label" for="scan-folder-select">📁 Guardar en:</label>
      <select id="scan-folder-select" class="st-dropdown"></select>

      <div class="scan-actions-row">
        <button type="button" class="btn-outline" data-scan="rescan">✕ No es esta</button>
        <button type="button" class="btn-outline" data-scan="manual">✏️ Corregir</button>
        <button type="button" class="btn-primary" data-scan="add">➕ Añadir ${qty}</button>
      </div>
    `;

    this.app.setupRobustImage(this.dom.panel.querySelector('.scan-result-thumb img'), card);
    this.dom.panel.querySelectorAll('.scan-version').forEach(el => {
      this.app.setupRobustImage(el.querySelector('img'), findOrGenerateCard(el.getAttribute('data-id')));
    });

    const select = this.dom.panel.querySelector('#scan-folder-select');
    this.app.fillFolderSelect(select);
    select.value = this.folderId;
    if (!select.value) select.value = 'default';
    this.folderId = select.value;
  }

  selectVersion(cardId) {
    if (!this.result || !cardId) return;
    this.result.selectedId = cardId;
    const scroll = this.dom.panel.querySelector('.scan-versions');
    const scrollLeft = scroll ? scroll.scrollLeft : 0;
    this.renderResultPanel();
    const newScroll = this.dom.panel.querySelector('.scan-versions');
    if (newScroll) newScroll.scrollLeft = scrollLeft;
  }

  setQty(value) {
    if (!this.result) return;
    this.result.qty = Math.min(999, Math.max(1, Number.isFinite(value) ? value : 1));
    const input = this.dom.panel.querySelector('#scan-qty-input');
    if (input) input.value = this.result.qty;
    this.dom.panel.querySelectorAll('.scan-qty-preset').forEach(b => {
      b.classList.toggle('is-active', parseInt(b.getAttribute('data-qty'), 10) === this.result.qty);
    });
    const addBtn = this.dom.panel.querySelector('[data-scan="add"]');
    if (addBtn) addBtn.textContent = `➕ Añadir ${this.result.qty}`;
  }

  async addResult() {
    if (!this.result) return;
    const input = this.dom.panel.querySelector('#scan-qty-input');
    if (input) this.setQty(parseInt(input.value, 10));
    const { selectedId, qty } = this.result;
    const card = findOrGenerateCard(selectedId);

    await this.app.addCardsToTargetFolder([{ card, qty }], this.folderId, { silent: true });
    this.addedCount += qty;
    this.updateCounter();

    // Seguir escaneando: lo normal es pasar varias cartas seguidas
    this.resumeScanning();
    this.setStatus(`✅ ${formatCardCode(card.id)} x${qty} añadida. Siguiente carta...`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.app) window.cardScanner = new CardScanner(window.app);
});
