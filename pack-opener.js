// Abridor de sobres: simula aperturas con las cartas reales de cada sobre (pack_id de punk-records)
// y permite guardar lo obtenido (todo o cartas sueltas) en cualquier carpeta.

// Probabilidades por sobre (inglés, 12 cartas, cajas de 24 sobres). Bandai no las publica:
// son estimaciones de la comunidad, así que la simulación es aproximada.
const PACK_ODDS = {
  leader: 1 / 3,     // un Líder sustituye a una común
  sr: 7 / 24,        // el último hueco sube a SR...
  sec: 1 / 24,       // ...o a SEC
  parallel: 1 / 12,  // arte alternativo (L / C / UC / R / SR) en el hueco de rara
  altSec: 1 / 576,   // SEC alternativa / manga
  sp: 1 / 288,       // SP (~1 por cada 12 cajas)
  tr: 1 / 1152,      // Treasure Rare
  god: 1 / 4320      // God pack: todo el sobre de rareza alta (~1 cada 180 cajas)
};

const RARITY_RANK = { C: 0, UC: 1, R: 2, L: 3, SR: 4, SEC: 6, SP: 7, TR: 8 };
const PARALLEL_RARITIES = ['L', 'C', 'UC', 'R', 'SR'];

const PACK_COLOR_HEX = {
  Red: '#dc2626', Green: '#059669', Blue: '#2563eb',
  Purple: '#9333ea', Black: '#334155', Yellow: '#ca8a04'
};

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// "OP14" -> "OP-14"
function formatPackCode(prefix) {
  return prefix.replace(/^([A-Z]+)(\d+)$/, '$1-$2');
}

function isAltCard(card) {
  return card.id.includes('_');
}

function cardRank(card) {
  return (RARITY_RANK[card.rarity] || 0) + (isAltCard(card) && !['SP', 'TR'].includes(card.rarity) ? 0.5 : 0);
}

function rarityLabel(card) {
  return isAltCard(card) && !['SP', 'TR'].includes(card.rarity) ? `${card.rarity} ALT` : (card.rarity || '');
}

function rarityClass(card) {
  return `rar-${card.rarity || 'C'}${isAltCard(card) ? ' is-alt' : ''}`;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

class PackOpener {
  constructor(app) {
    this.app = app;
    this.packs = null;
    this.selectedPackId = null;
    this.session = null;

    this.dom = {
      grid: document.getElementById('packs-grid'),
      actionBar: document.getElementById('packs-action-bar'),
      overlay: document.getElementById('pack-open-overlay'),
      overlayTitle: document.getElementById('pack-overlay-title'),
      overlayProgress: document.getElementById('pack-overlay-progress'),
      stage: document.getElementById('pack-stage'),
      actions: document.getElementById('pack-overlay-actions')
    };

    this.bindEvents();

    // Las cartas (y su sobre) llegan con la sincronización: se recalculan los sobres
    window.addEventListener('cards-db-synced', () => {
      this.packs = null;
      if (this.app.currentTab === 'packs') this.renderPackList();
    });
  }

  // =========================================================================
  // DATOS DE LOS SOBRES
  // =========================================================================

  // Nombre y portada oficiales (packs-data.js, generado con tools/update_packs.py)
  packInfo(pack) {
    return (window.ONE_PIECE_PACKS || {})[pack.id] || {};
  }

  packName(pack) {
    return this.packInfo(pack).name || '';
  }

  // Portada vía weserv: Bandai bloquea sus imágenes fuera de su dominio; trim quita el margen
  packCoverUrl(pack) {
    const cover = this.packInfo(pack).cover;
    return cover ? weservUrl(cover.replace(/^https?:\/\//, ''), null) + '&trim=10&h=480' : null;
  }

  getPacks() {
    if (!this.packs) this.packs = this.buildPacks();
    return this.packs;
  }

  getPack(packId) {
    return this.getPacks().find(p => p.id === packId) || null;
  }

  buildPacks() {
    const byPack = new Map();
    Object.values(ONE_PIECE_CARDS_DB).forEach(card => {
      if (!card || !card.pack || !card.id) return;
      if (!byPack.has(card.pack)) byPack.set(card.pack, []);
      byPack.get(card.pack).push(card);
    });

    const packs = [];
    byPack.forEach((cards, id) => {
      // Código del sobre = prefijo más frecuente de sus cartas normales (OP-14 incluye cartas de EB-04)
      const prefixCount = new Map();
      cards.forEach(c => {
        if (isAltCard(c)) return;
        const prefix = c.id.split('-')[0];
        prefixCount.set(prefix, (prefixCount.get(prefix) || 0) + 1);
      });
      const prefixes = [...prefixCount.entries()].sort((a, b) => b[1] - a[1]);
      if (!prefixes.length || !/^(OP|EB)\d+$/.test(prefixes[0][0])) return;
      const main = prefixes[0][0];
      const extra = prefixes.slice(1)
        .filter(([p, n]) => /^(OP|EB)\d+$/.test(p) && n >= 10)
        .map(([p]) => formatPackCode(p));

      const pools = { C: [], UC: [], R: [], SR: [], SEC: [], L: [], parallel: [], altSec: [], SP: [], TR: [] };
      cards.forEach(c => {
        if (c.rarity === 'SP' || c.rarity === 'TR') pools[c.rarity].push(c);
        else if (isAltCard(c)) {
          if (c.rarity === 'SEC') pools.altSec.push(c);
          else if (PARALLEL_RARITIES.includes(c.rarity)) pools.parallel.push(c);
        } else if (pools[c.rarity]) pools[c.rarity].push(c);
      });
      if (!pools.C.length || !pools.R.length) return;

      // Portada: la SEC del set (o SR / Líder si no hay)
      const ownCards = (pool) => pool.filter(c => c.id.startsWith(main)).sort((a, b) => a.id.localeCompare(b.id));
      const cover = ownCards(pools.SEC)[0] || ownCards(pools.SR)[0] || ownCards(pools.L)[0] || cards[0];

      packs.push({ id, main, code: formatPackCode(main), extra, pools, cover });
    });

    const typeOrder = (p) => (p.main.startsWith('OP') ? 0 : 1);
    const num = (p) => parseInt(p.main.replace(/\D/g, ''), 10) || 0;
    return packs.sort((a, b) => typeOrder(a) - typeOrder(b) || num(a) - num(b));
  }

  packColors(pack) {
    const colors = String(pack.cover.color || 'Red').split('/');
    const c1 = PACK_COLOR_HEX[colors[0]] || PACK_COLOR_HEX.Red;
    const c2 = PACK_COLOR_HEX[colors[1]] || '#0f172a';
    return `--pack-c1: ${c1}; --pack-c2: ${c2};`;
  }

  // =========================================================================
  // SIMULACIÓN DE UN SOBRE (12 cartas)
  // =========================================================================

  // Devuelve { cards, god }
  rollPack(pack) {
    const { pools } = pack;
    const godPool = [...pools.parallel, ...pools.altSec, ...pools.SP];
    if (godPool.length >= 6 && Math.random() < PACK_ODDS.god) {
      return { cards: this.rollGodPack(pools, godPool), god: true };
    }

    const used = new Set();
    const take = (pool) => {
      if (!pool || !pool.length) return null;
      const fresh = pool.filter(c => !used.has(c.id));
      const card = pickRandom(fresh.length ? fresh : pool);
      used.add(card.id);
      return card;
    };

    const hasUC = pools.UC.length > 0;
    const hasLeader = pools.L.length > 0 && Math.random() < PACK_ODDS.leader;
    const commons = (hasUC ? 7 : 10) - (hasLeader ? 1 : 0);
    const cards = [];

    for (let i = 0; i < commons; i++) cards.push(take(pools.C));
    if (hasUC) for (let i = 0; i < 3; i++) cards.push(take(pools.UC));
    if (hasLeader) cards.push(take(pools.L));
    cards.push(take(this.rollSpecialPool(pools) || pools.R));
    cards.push(take(this.rollHitPool(pools)));

    return { cards: cards.filter(Boolean), god: false };
  }

  // God pack: las 12 cartas son de rareza alta (alternativas, SEC alternativas y SP),
  // con al menos una SEC normal si el set tiene
  rollGodPack(pools, godPool) {
    const shuffled = [...godPool].sort(() => Math.random() - 0.5);
    const cards = shuffled.slice(0, pools.SEC.length ? 11 : 12);
    while (cards.length < (pools.SEC.length ? 11 : 12)) cards.push(pickRandom(godPool));
    if (pools.SEC.length) cards.push(pickRandom(pools.SEC));
    return cards.sort((a, b) => cardRank(a) - cardRank(b));
  }

  // Hueco de rara: a veces lo ocupa una carta especial
  rollSpecialPool(pools) {
    let r = Math.random();
    const slots = [['TR', PACK_ODDS.tr], ['SP', PACK_ODDS.sp], ['altSec', PACK_ODDS.altSec], ['parallel', PACK_ODDS.parallel]];
    for (const [key, odds] of slots) {
      if (r < odds) return pools[key].length ? pools[key] : null;
      r -= odds;
    }
    return null;
  }

  // Último hueco: R, SR o SEC
  rollHitPool(pools) {
    const r = Math.random();
    if (r < PACK_ODDS.sec && pools.SEC.length) return pools.SEC;
    if (r < PACK_ODDS.sec + PACK_ODDS.sr && pools.SR.length) return pools.SR;
    return pools.R;
  }

  // =========================================================================
  // LISTA DE SOBRES
  // =========================================================================

  packTileHTML(pack) {
    if (this.packCoverUrl(pack)) {
      return `<img class="pack-cover-img" src="${this.packCoverUrl(pack)}" alt="${escapeHtml(pack.code + ' ' + this.packName(pack))}">`;
    }
    return this.packDesignHTML(pack);
  }

  packDesignHTML(pack) {
    const name = this.packName(pack);
    const extra = pack.extra.length ? `<span class="pack-tile-extra">+ ${pack.extra.join(' · ')}</span>` : '';
    return `
      <span class="pack-crimp pack-crimp-top"></span>
      <span class="pack-tile-brand">ONE PIECE CARD GAME</span>
      <span class="pack-tile-art"><img alt="" loading="lazy"></span>
      <span class="pack-tile-code">${escapeHtml(pack.code)}</span>
      ${extra}
      <span class="pack-tile-name">${escapeHtml(name)}</span>
      <span class="pack-crimp pack-crimp-bottom"></span>
    `;
  }

  renderPackList() {
    if (!this.dom.grid) return;
    const packs = this.getPacks();
    this.dom.grid.innerHTML = '';

    if (!packs.length) {
      this.dom.grid.innerHTML = '<p class="packs-empty">⏳ Cargando las cartas de los sobres...</p>';
      this.renderActionBar();
      return;
    }

    packs.forEach(pack => {
      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = `pack-tile${pack.id === this.selectedPackId ? ' is-selected' : ''}`;
      tile.setAttribute('style', this.packColors(pack));
      tile.setAttribute('data-pack', pack.id);
      this.fillPackTile(tile, pack);
      this.dom.grid.appendChild(tile);
    });

    this.renderActionBar();
  }

  fillPackTile(tile, pack) {
    tile.innerHTML = this.packTileHTML(pack);
    const cover = tile.querySelector('.pack-cover-img');
    tile.classList.toggle('has-cover', Boolean(cover));
    const useDesign = () => {
      tile.classList.remove('has-cover');
      tile.innerHTML = this.packDesignHTML(pack);
      this.app.setupRobustImage(tile.querySelector('img'), pack.cover);
    };
    if (cover) cover.onerror = useDesign;
    else useDesign();
  }

  renderActionBar() {
    const bar = this.dom.actionBar;
    if (!bar) return;
    const pack = this.selectedPackId ? this.getPack(this.selectedPackId) : null;

    if (!pack) {
      bar.innerHTML = '<p class="packs-action-hint">👆 Elige un sobre para abrirlo</p>';
      return;
    }

    const name = this.packName(pack);
    const { pools } = pack;
    const oneIn = (p) => `1 de cada ${Math.round(1 / p).toLocaleString('es-ES')} sobres`;
    const oddsRows = [
      pools.L.length && ['Líder', oneIn(PACK_ODDS.leader)],
      pools.SR.length && ['SR', oneIn(PACK_ODDS.sr)],
      pools.SEC.length && ['SEC', oneIn(PACK_ODDS.sec)],
      pools.parallel.length && ['Arte alternativo', oneIn(PACK_ODDS.parallel)],
      pools.altSec.length && ['SEC alternativa / manga', oneIn(PACK_ODDS.altSec)],
      pools.SP.length && ['SP', oneIn(PACK_ODDS.sp)],
      pools.TR.length && ['Treasure Rare', oneIn(PACK_ODDS.tr)],
      ['God pack (todo rareza alta)', oneIn(PACK_ODDS.god)]
    ].filter(Boolean);
    const layout = pools.UC.length ? '7 C · 3 UC · 1 R · 1 R/SR/SEC' : '10 C · 1 R · 1 R/SR/SEC';

    bar.innerHTML = `
      <div class="packs-action-title">
        <strong>${escapeHtml(pack.code)}</strong>${name ? ` · ${escapeHtml(name)}` : ''}
      </div>
      <div class="packs-action-buttons">
        <button type="button" class="btn-primary" data-open="1">🎁 Abrir 1 sobre</button>
        <button type="button" class="btn-primary" data-open="10">🎁 Abrir 10 sobres</button>
      </div>
      <details class="pack-odds">
        <summary>ℹ️ Probabilidades aproximadas</summary>
        <p>12 cartas por sobre: ${layout}</p>
        <ul>${oddsRows.map(([k, v]) => `<li><span>${k}</span><span>${v}</span></li>`).join('')}</ul>
        <p class="pack-odds-note">Bandai no publica las probabilidades oficiales: son estimaciones de la comunidad.</p>
      </details>
    `;
  }

  // =========================================================================
  // APERTURA
  // =========================================================================

  bindEvents() {
    if (this.dom.grid) {
      this.dom.grid.addEventListener('click', (e) => {
        const tile = e.target.closest('.pack-tile');
        if (!tile) return;
        this.selectedPackId = tile.getAttribute('data-pack');
        this.dom.grid.querySelectorAll('.pack-tile').forEach(t => t.classList.toggle('is-selected', t === tile));
        this.renderActionBar();
      });
    }

    if (this.dom.actionBar) {
      this.dom.actionBar.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-open]');
        if (btn) this.startOpening(parseInt(btn.getAttribute('data-open'), 10));
      });
    }

    if (this.dom.overlay) {
      this.dom.overlay.addEventListener('click', (e) => {
        const el = e.target.closest('[data-action]');
        if (el) this.handleAction(el.getAttribute('data-action'), el);
      });
      this.dom.overlay.addEventListener('change', (e) => {
        if (e.target.id === 'pack-folder-select' && this.session) this.session.folderId = e.target.value;
      });
    }
  }

  handleAction(action, el) {
    const s = this.session;
    if (!s) return;
    switch (action) {
      case 'open-pack': this.tearPack(el); break;
      case 'flip': this.flipCard(el); break;
      case 'flip-all': this.dom.stage.querySelectorAll('.pack-card:not(.is-flipped)').forEach(c => this.flipCard(c)); break;
      case 'next-pack': s.index++; this.renderSealed(); break;
      case 'summary': this.renderSummary(); break;
      case 'zoom': this.app.openLightbox(findOrGenerateCard(el.getAttribute('data-id'))); break;
      case 'toggle': this.toggleSelection(el.getAttribute('data-id')); break;
      case 'select-all': this.selectAll(); break;
      case 'add-selected': this.addToCollection([...s.selected]); break;
      case 'add-all': this.addToCollection([...s.summary.keys()]); break;
      case 'close': this.closeOverlay(); break;
    }
  }

  startOpening(count) {
    const pack = this.getPack(this.selectedPackId);
    if (!pack) return;

    const opened = Array.from({ length: count }, () => this.rollPack(pack));
    const summary = new Map();
    opened.flatMap(p => p.cards).forEach(card => {
      const entry = summary.get(card.id);
      if (entry) entry.count++;
      else summary.set(card.id, { card, count: 1 });
    });

    this.session = {
      pack, opened, summary,
      index: 0,
      selected: new Set(),
      added: new Set(),
      folderId: this.app.activeFolderId || 'default'
    };

    this.dom.overlayTitle.textContent = `🎁 ${pack.code}${this.packName(pack) ? ' · ' + this.packName(pack) : ''}`;
    this.dom.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.renderSealed();
  }

  closeOverlay() {
    const s = this.session;
    if (s && s.added.size === 0 && !confirm('¿Cerrar sin añadir ninguna carta a tu colección?')) return;
    this.session = null;
    this.dom.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  setProgress(text) {
    this.dom.overlayProgress.textContent = text;
  }

  renderSealed() {
    const s = this.session;
    const total = s.opened.length;
    this.setProgress(`Sobre ${s.index + 1} / ${total}`);
    this.dom.stage.className = 'pack-stage';

    // Precarga de las imágenes mientras el sobre sigue cerrado
    s.opened[s.index].cards.forEach(card => {
      const url = getCardImageURLs(card.id, 'thumb')[0];
      if (url) new Image().src = url;
    });

    this.dom.stage.innerHTML = `
      <div class="pack-tile pack-tile--big" style="${this.packColors(s.pack)}" data-action="open-pack" role="button" tabindex="0"></div>
      <p class="pack-stage-hint">Toca el sobre para abrirlo</p>
    `;
    this.fillPackTile(this.dom.stage.querySelector('.pack-tile'), s.pack);

    this.dom.actions.innerHTML = total > 1
      ? '<button type="button" class="btn-outline" data-action="summary">⏭️ Saltar al resumen</button>'
      : '';
  }

  tearPack(packEl) {
    if (packEl.classList.contains('is-tearing')) return;
    packEl.classList.add('is-tearing');
    setTimeout(() => this.renderReveal(), 650);
  }

  renderReveal() {
    const s = this.session;
    if (!s) return;
    const { cards, god } = s.opened[s.index];
    this.dom.stage.className = `pack-stage${god ? ' is-god' : ''}`;
    this.dom.stage.innerHTML = `
      ${god ? '<div class="god-pack-banner">✨ ¡GOD PACK! ✨</div>' : ''}
      <div class="pack-reveal-grid">
        ${cards.map((card, i) => `
          <div class="pack-card ${rarityClass(card)}${i >= cards.length - 2 ? ' is-hit' : ''}" data-action="flip" data-id="${escapeHtml(card.id)}" role="button" tabindex="0">
            <div class="pack-card-inner">
              <div class="pack-card-face pack-card-back"><span>ONE PIECE</span></div>
              <div class="pack-card-face pack-card-front">
                <img alt="${escapeHtml(card.name)}">
                <span class="pack-card-rarity">${escapeHtml(rarityLabel(card))}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <p class="pack-stage-hint">Toca las últimas cartas para descubrirlas</p>
    `;

    const cardEls = [...this.dom.stage.querySelectorAll('.pack-card')];
    cardEls.forEach((el, i) => this.app.setupRobustImage(el.querySelector('img'), cards[i]));

    // Las normales se voltean solas; las dos últimas (rara y "hit") las descubre el usuario
    cardEls.slice(0, -2).forEach((el, i) => setTimeout(() => this.flipCard(el), 250 + i * 110));

    this.dom.actions.innerHTML = '<button type="button" class="btn-outline" data-action="flip-all">🔄 Voltear todas</button>';
  }

  flipCard(el) {
    if (!el || !this.session) return;
    if (el.classList.contains('is-flipped')) {
      // Carta ya descubierta: verla en grande
      this.app.openLightbox(findOrGenerateCard(el.getAttribute('data-id')));
      return;
    }
    el.classList.add('is-flipped');
    if (!this.dom.stage.querySelector('.pack-card:not(.is-flipped)')) this.showRevealDone();
  }

  showRevealDone() {
    const s = this.session;
    const isLast = s.index >= s.opened.length - 1;
    const hint = this.dom.stage.querySelector('.pack-stage-hint');
    if (hint) hint.textContent = 'Toca una carta para verla en grande';

    this.dom.actions.innerHTML = isLast
      ? '<button type="button" class="btn-primary" data-action="summary">📋 Ver resumen</button>'
      : `<div class="pack-actions-row">
           <button type="button" class="btn-outline" data-action="summary">⏭️ Resumen</button>
           <button type="button" class="btn-primary" data-action="next-pack">🎁 Siguiente sobre (${s.index + 2}/${s.opened.length})</button>
         </div>`;
  }

  // =========================================================================
  // RESUMEN Y GUARDADO
  // =========================================================================

  renderSummary() {
    const s = this.session;
    const entries = [...s.summary.values()].sort((a, b) =>
      cardRank(b.card) - cardRank(a.card) ||
      ((this.priceOf(b.card) || 0) - (this.priceOf(a.card) || 0)) ||
      a.card.id.localeCompare(b.card.id));

    const totalCards = s.opened.reduce((sum, p) => sum + p.cards.length, 0);
    const godPacks = s.opened.filter(p => p.god).length;
    const totalValue = entries.reduce((sum, e) => sum + (this.priceOf(e.card) || 0) * e.count, 0);

    const rarityCounts = new Map();
    entries.forEach(({ card, count }) => {
      const label = rarityLabel(card);
      rarityCounts.set(label, (rarityCounts.get(label) || 0) + count);
    });
    const chips = [...rarityCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([label, count]) => `<span class="rar-chip">${escapeHtml(label)} x${count}</span>`).join('');

    this.setProgress(`${s.opened.length} sobre${s.opened.length > 1 ? 's' : ''} · ${totalCards} cartas`);
    this.dom.stage.className = 'pack-stage is-summary';
    this.dom.stage.innerHTML = `
      <div class="pack-summary">
        <div class="pack-summary-head">
          <h3>📋 Resumen de la apertura</h3>
          <p class="pack-summary-stats">${entries.length} cartas distintas${totalValue > 0 ? ` · ≈ ${this.formatEur(totalValue)} (tendencia Cardmarket)` : ''}</p>
          <div class="pack-rarity-chips">${godPacks ? `<span class="rar-chip rar-chip--god">✨ God pack x${godPacks}</span>` : ''}${chips}</div>
        </div>
        <p class="pack-stage-hint">Toca las cartas que quieras guardar, o añádelas todas. 🔍 para verlas en grande.</p>
        <div class="pack-summary-grid">
          ${entries.map(({ card, count }) => {
            const price = this.priceOf(card);
            const added = s.added.has(card.id);
            return `
              <div class="pack-sum-card ${rarityClass(card)}${s.selected.has(card.id) ? ' is-selected' : ''}${added ? ' is-added' : ''}"
                   data-action="${added ? '' : 'toggle'}" data-id="${escapeHtml(card.id)}" role="button" tabindex="0">
                <span class="pack-sum-check">${added ? '✔' : (s.selected.has(card.id) ? '✓' : '')}</span>
                <button type="button" class="pack-sum-zoom" data-action="zoom" data-id="${escapeHtml(card.id)}" title="Ver en grande">🔍</button>
                ${count > 1 ? `<span class="pack-sum-count">x${count}</span>` : ''}
                <img alt="${escapeHtml(card.name)}" loading="lazy">
                <div class="pack-sum-info">
                  <span class="pack-sum-name" title="${escapeHtml(card.name)}">${escapeHtml(card.name)}</span>
                  <span class="pack-sum-meta">
                    <span>${escapeHtml(formatCardCode(card.id))} · ${escapeHtml(rarityLabel(card))}</span>
                    <span>${added ? 'Añadida' : (price ? this.formatEur(price) : '')}</span>
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    const cardEls = this.dom.stage.querySelectorAll('.pack-sum-card');
    cardEls.forEach((el, i) => this.app.setupRobustImage(el.querySelector('img'), entries[i].card));

    this.renderSummaryActions();
  }

  renderSummaryActions() {
    const s = this.session;
    const pending = [...s.summary.keys()].filter(id => !s.added.has(id));
    const allSelected = pending.length > 0 && pending.every(id => s.selected.has(id));

    this.dom.actions.innerHTML = `
      <label class="pack-folder-label" for="pack-folder-select">📁 Guardar en:</label>
      <select id="pack-folder-select" class="st-dropdown"></select>
      <div class="pack-actions-row">
        <button type="button" class="btn-outline" data-action="select-all" ${pending.length ? '' : 'disabled'}>${allSelected ? 'Quitar selección' : 'Seleccionar todo'}</button>
        <button type="button" class="btn-primary" data-action="add-selected" ${s.selected.size ? '' : 'disabled'}>➕ Añadir seleccionadas (${s.selected.size})</button>
      </div>
      <div class="pack-actions-row">
        <button type="button" class="btn-primary" data-action="add-all" ${pending.length ? '' : 'disabled'}>➕ Añadir ${s.added.size ? 'el resto' : 'todo'}</button>
        <button type="button" class="btn-outline" data-action="close">${s.added.size ? '✔ Terminar' : '✕ Descartar'}</button>
      </div>
    `;

    const select = this.dom.actions.querySelector('#pack-folder-select');
    this.app.fillFolderSelect(select);
    select.value = s.folderId;
    if (!select.value) select.value = 'default';
    s.folderId = select.value;
  }

  toggleSelection(cardId) {
    const s = this.session;
    if (!cardId || s.added.has(cardId)) return;
    if (s.selected.has(cardId)) s.selected.delete(cardId);
    else s.selected.add(cardId);

    const el = this.dom.stage.querySelector(`.pack-sum-card[data-id="${CSS.escape(cardId)}"]`);
    if (el) {
      el.classList.toggle('is-selected', s.selected.has(cardId));
      el.querySelector('.pack-sum-check').textContent = s.selected.has(cardId) ? '✓' : '';
    }
    this.renderSummaryActions();
  }

  selectAll() {
    const s = this.session;
    const pending = [...s.summary.keys()].filter(id => !s.added.has(id));
    const allSelected = pending.every(id => s.selected.has(id));
    s.selected = allSelected ? new Set() : new Set(pending);
    this.renderSummary();
  }

  async addToCollection(cardIds) {
    const s = this.session;
    const ids = cardIds.filter(id => !s.added.has(id));
    if (!ids.length) return;

    const items = ids.map(id => ({ card: findOrGenerateCard(id), qty: s.summary.get(id).count }));
    ids.forEach(id => { s.added.add(id); s.selected.delete(id); });
    this.renderSummary();
    await this.app.addCardsToTargetFolder(items, s.folderId);
  }

  priceOf(card) {
    const price = this.app.getCardPrice(card.id);
    return price && typeof price.trend === 'number' ? price.trend : null;
  }

  formatEur(value) {
    return `${value.toFixed(2).replace('.', ',')} €`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.app) window.packOpener = new PackOpener(window.app);
});
