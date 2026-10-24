// OpenVision documentation: theme, navigation, search, table of contents and motion.
// No dependencies; everything degrades to plain links when scripts are off.
(() => {
  const script = document.currentScript || document.querySelector('script[data-base]');
  const base = (script?.dataset.base || '').replace(/\/$/, '');
  const repo = script?.dataset.repo || 'https://github.com/RemiPelloux/OpenVision';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Theme
  $('.theme-toggle')?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('ov-theme', next); } catch {}
  });

  // Mobile navigation
  const menu = $('.menu-toggle');
  menu?.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    menu.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open'); menu?.setAttribute('aria-expanded', 'false');
    }
  });
  $('[aria-current="page"]', $('#sidebar') || document.createElement('div'))?.scrollIntoView({ block: 'center' });

  const article = $('.markdown-body');
  if (article) {
    // Links that leave the documentation folder (README, source files, curs_source …) open on GitHub.
    for (const link of $$('a[href]', article)) {
      const href = link.getAttribute('href');
      if (!href || /^(https?:|mailto:|#)/.test(href)) continue;
      const target = new URL(href, location.href);
      if (target.origin !== location.origin) continue;
      const inside = target.pathname === base || target.pathname.startsWith(base + '/');
      let path = inside ? target.pathname.slice(base.length) : target.pathname;
      if (inside && !/\.(mjs|cjs|js|ts|json|ps1|cmd|sh|py|toml|yml|yaml|txt)$/.test(path)) continue;
      path = path.replace(/^\/+/, '');
      const repoPath = inside ? 'docs/' + path : path;
      link.href = `${repo}/blob/main/${repoPath.replace(/\.html$/, '.md')}${target.hash}`;
    }
    // Images stored outside the documentation folder load from the repository.
    for (const image of $$('img[src]', article)) {
      const src = image.getAttribute('src');
      if (/^(https?:|data:)/.test(src)) continue;
      const target = new URL(src, location.href);
      if (target.origin !== location.origin || target.pathname === base || target.pathname.startsWith(base + '/')) continue;
      // The repository's assets/ artwork is mirrored in the site's assets/img/.
      const name = target.pathname.match(/^\/assets\/([^/]+\.svg)$/)?.[1];
      image.src = name ? `${base}/assets/img/${name}`
        : `${repo.replace('https://github.com/', 'https://raw.githubusercontent.com/')}/main/${target.pathname.replace(/^\/+/, '')}`;
    }
    // Wide tables scroll inside their own frame.
    for (const table of $$('table', article)) {
      const wrap = document.createElement('div'); wrap.className = 'table-wrap';
      table.replaceWith(wrap); wrap.append(table);
    }
    // Heading anchors and the "On this page" list.
    const toc = $('#toc-list');
    const headings = $$('h2[id], h3[id]', article);
    for (const heading of headings) {
      const anchor = document.createElement('a');
      anchor.className = 'anchor'; anchor.href = '#' + heading.id; anchor.setAttribute('aria-label', 'Link to this section'); anchor.textContent = '#';
      heading.prepend(anchor);
      if (toc) {
        const item = document.createElement('li'); item.className = heading.tagName.toLowerCase();
        const link = document.createElement('a'); link.href = '#' + heading.id;
        link.textContent = heading.textContent.replace(/^#/, '').trim();
        item.append(link); toc.append(item);
      }
    }
    if (toc && headings.length && 'IntersectionObserver' in window) {
      const links = new Map($$('a', toc).map(link => [link.hash.slice(1), link]));
      const spy = new IntersectionObserver(entries => {
        for (const entry of entries) if (entry.isIntersecting) {
          for (const link of links.values()) link.classList.remove('active');
          links.get(entry.target.id)?.classList.add('active');
        }
      }, { rootMargin: '-15% 0px -75% 0px' });
      headings.forEach(heading => spy.observe(heading));
    }
  }

  // Search
  const input = $('#search-input'), results = $('#search-results');
  let index, active = -1;
  const decoder = document.createElement('textarea');
  const decode = text => { decoder.innerHTML = text; return decoder.value; };
  const load = async () => index ??= fetch(base + '/search.json').then(response => response.json())
    .then(docs => docs.map(doc => ({ ...doc, t: decode(doc.t), c: decode(doc.c) }))).catch(() => []);
  const escape = text => text.replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);
  const highlight = (text, terms) => terms.reduce((html, term) =>
    html.replace(new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'), '<mark>$1</mark>'), escape(text));
  const section = dir => (dir || '/').split('/').filter(Boolean).join(' · ') || 'docs';
  async function search(query) {
    const terms = query.toLowerCase().split(/\s+/).filter(term => term.length > 1);
    if (!terms.length) { results.hidden = true; return; }
    const docs = await load();
    const scored = docs.map(doc => {
      const title = doc.t.toLowerCase(), body = doc.c.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (title.includes(term)) score += title.startsWith(term) ? 12 : 8;
        const hits = body.split(term).length - 1; if (hits) score += Math.min(hits, 5);
        else if (!title.includes(term)) return null;
      }
      return { doc, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 12);
    active = -1;
    if (!scored.length) { results.innerHTML = '<div class="empty">No pages match.</div>'; results.hidden = false; return; }
    results.innerHTML = scored.map(({ doc }) => {
      const at = doc.c.toLowerCase().indexOf(terms[0]);
      const snippet = doc.c.slice(Math.max(0, at - 50), at + 110);
      return `<a href="${doc.u}" role="option"><span class="r-title">${highlight(doc.t, terms)}</span><span class="r-section">${escape(section(doc.s))}</span><span class="r-snippet">${highlight(snippet, terms)}…</span></a>`;
    }).join('');
    results.hidden = false;
  }
  if (input && results) {
    let timer;
    input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => search(input.value), 90); });
    input.addEventListener('focus', () => { load(); if (input.value) search(input.value); });
    input.addEventListener('keydown', event => {
      const items = $$('a', results);
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        active = (active + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        items.forEach((item, i) => item.classList.toggle('active', i === active));
        items[active]?.scrollIntoView({ block: 'nearest' });
      } else if (event.key === 'Enter' && items.length) { (items[active] || items[0]).click(); }
      else if (event.key === 'Escape') { results.hidden = true; input.blur(); }
    });
    document.addEventListener('click', event => { if (!event.target.closest('.search')) results.hidden = true; });
    document.addEventListener('keydown', event => {
      if (event.key === '/' && !/input|textarea/i.test(document.activeElement.tagName)) { event.preventDefault(); input.focus(); }
    });
  }

  // Home: tabs, reveal on scroll, progress ring
  for (const tab of $$('.tabs [role="tab"]')) {
    tab.addEventListener('click', () => {
      for (const other of $$('.tabs [role="tab"]')) other.setAttribute('aria-selected', String(other === tab));
      for (const panel of $$('.tab-panel')) panel.hidden = panel.dataset.panel !== tab.dataset.tab;
    });
  }
  const reveal = $$('.reveal, .ring');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.classList.contains('ring') ? 'on' : 'visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: .12 });
    reveal.forEach(element => observer.observe(element));
  } else reveal.forEach(element => element.classList.add('visible', 'on'));
})();
