(function () {
  var sites = window.HUB_SITES || [];
  var root = document.documentElement;
  var grid = document.getElementById('hub-grid');
  var empty = document.getElementById('hub-empty');
  var search = document.getElementById('hub-search');
  var tabsEl = document.getElementById('hub-tabs');
  var state = { q: '', cat: 'All' };

  // Theme: lynn (default) | light | dark. Lynn's tokens switch on [data-lynn-theme].
  function setTheme(t) {
    root.setAttribute('data-lynn-theme', t);
    try { localStorage.setItem('ux-hub-theme', t); } catch (e) {}
    document.querySelectorAll('#hub-theme [data-theme]').forEach(function (b) {
      var on = b.dataset.theme === t;
      b.setAttribute('aria-pressed', on);
      b.classList.toggle('lynn-tabs-segment-active', on);
    });
  }
  var saved = 'lynn';
  try { saved = localStorage.getItem('ux-hub-theme') || 'lynn'; } catch (e) {}
  document.querySelectorAll('#hub-theme [data-theme]').forEach(function (b) {
    b.addEventListener('click', function () { setTheme(b.dataset.theme); });
  });
  setTheme(saved);

  var ACCESS_TONE = { 'Public': 'emerald', 'SSO': 'blue', 'Access code': 'lynn' };

  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  function card(s) {
    var tone = s.tone || 'blue';
    var c = 'var(--lynn-color-' + tone + ')';
    var g = 'linear-gradient(135deg, ' + c + ', var(--lynn-color-lynn))';
    var tags = (s.tags || []).slice(0, 3).map(function (t) {
      return '<span class="lynn-badge lynn-badge-tone-' + tone + '">' + esc(t) + '</span>';
    }).join('');
    return '<a class="hub-card lynn-feature-card lynn-feature-card-full" style="--lynn-t-color:' + c + ';--lynn-t-gradient:' + g + '"' +
      ' href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer"' +
      ' aria-label="' + esc(s.title) + ' (opens in a new tab)">' +
      '<div class="lynn-feature-card-glow"></div>' +
      '<div class="lynn-feature-card-header"><div class="lynn-feature-card-icon" aria-hidden="true">' + esc(s.icon || '🔗') + '</div>' +
      '<div class="lynn-feature-card-name-wrap"><div class="lynn-feature-card-name">' + esc(s.title) + '</div>' +
      '<div class="lynn-feature-card-tagline">' + esc(s.tagline || '') + '</div></div>' +
      '<span class="lynn-badge lynn-badge-bordered lynn-badge-tone-' + (ACCESS_TONE[s.access] || 'blue') + '">' + esc(s.access || 'Public') + '</span></div>' +
      '<div class="lynn-feature-card-body">' + esc(s.desc || '') + '</div>' +
      '<div class="lynn-feature-card-footer"><div class="lynn-feature-card-tags">' + tags + '</div>' +
      '<span class="hub-open">Open ↗</span></div></a>';
  }

  function render() {
    var q = state.q.trim().toLowerCase();
    var list = sites.filter(function (s) {
      if (state.cat !== 'All' && s.category !== state.cat) return false;
      if (!q) return true;
      return [s.title, s.tagline, s.desc, s.category].concat(s.tags || []).join(' ').toLowerCase().indexOf(q) > -1;
    });
    list.sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
    grid.innerHTML = list.map(card).join('');
    empty.style.display = list.length ? 'none' : 'block';
    document.getElementById('hub-count').textContent = list.length + (list.length === 1 ? ' site' : ' sites');
  }

  var cats = ['All'];
  sites.forEach(function (s) { if (cats.indexOf(s.category) < 0) cats.push(s.category); });
  tabsEl.innerHTML = cats.map(function (c) {
    return '<button type="button" class="lynn-tabs-segment" data-cat="' + esc(c) + '" aria-pressed="' + (c === 'All') + '">' + esc(c) + '</button>';
  }).join('');
  tabsEl.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]'); if (!b) return;
    state.cat = b.dataset.cat;
    tabsEl.querySelectorAll('[data-cat]').forEach(function (x) {
      var on = x === b; x.setAttribute('aria-pressed', on); x.classList.toggle('lynn-tabs-segment-active', on);
    });
    render();
  });
  tabsEl.querySelector('[data-cat]').classList.add('lynn-tabs-segment-active');
  search.addEventListener('input', function () { state.q = search.value; render(); });
  render();
})();
