export const projectPageSize = 18;

function node(tag, className, text) {
  const value = document.createElement(tag); value.className = className;
  if (text) value.textContent = text;
  return value;
}

export function createProjectList(service, report, onOpened) {
  const root = node('div', 'ov-project-browser');
  const toolbar = node('div', 'ov-project-toolbar'), search = node('input', 'ov-project-search');
  search.type = 'search'; search.placeholder = 'Find a project…'; search.setAttribute('aria-label', 'Find a project');
  const filters = node('div', 'ov-project-filters'); filters.setAttribute('aria-label', 'Project filters');
  const list = node('div', 'ov-project-list'); list.setAttribute('role', 'list'); list.setAttribute('aria-label', 'Projects');
  const summary = node('span', 'ov-project-count'); summary.setAttribute('role', 'status');
  const pager = node('div', 'ov-project-pager');
  const previous = node('button', '', 'Previous'), next = node('button', '', 'Next');
  const refresh = node('button', 'ov-project-refresh', 'Refresh');
  let rows = [], filter = 'Recent', page = 0, disposed = false, loading, dirty = false, subscription;
  const filterButtons = ['Recent', 'Pinned', 'Open now'].map(label => {
    const button = node('button', '', label);
    button.onclick = () => { filter = label; page = 0; render(); };
    filters.append(button); return button;
  });

  async function perform(button, action) {
    button.disabled = true; report('');
    try { await action(); } catch (error) { report(error.message || 'Project action failed. Please retry.'); }
    finally { if (!disposed && button.isConnected) button.disabled = false; }
  }

  function rowNode(row) {
    const item = node('div', 'ov-project-row'); item.setAttribute('role', 'listitem');
    const open = node('button', 'ov-project-open');
    open.title = row.path; open.setAttribute('aria-label', `${row.windowId !== undefined ? 'Focus' : 'Open'} ${row.name}`);
    const icon = node('span', 'ov-project-icon', row.kind === 'Workspace' ? '▦' : '▱'); icon.setAttribute('aria-hidden', 'true');
    const label = node('span', 'ov-project-label');
    label.append(node('strong', '', row.name), node('span', 'ov-project-path', row.path));
    open.append(icon, label);
    const type = node('span', 'ov-project-kind', row.windowId !== undefined ? 'Open now' : row.remote ? 'Remote' : row.kind);
    open.append(type); open.onclick = () => perform(open, async () => { await service.open(row); onOpened?.(); });
    const pin = node('button', 'ov-project-pin', row.pinned ? '★' : '☆');
    pin.setAttribute('aria-label', `${row.pinned ? 'Unpin' : 'Pin'} ${row.name}`); pin.setAttribute('aria-pressed', String(row.pinned));
    pin.onclick = () => perform(pin, async () => { await service.pin(row, !row.pinned); row.pinned = !row.pinned; render(row.id); });
    const remove = node('button', 'ov-project-remove', '×'); remove.setAttribute('aria-label', `Remove ${row.name} from history`);
    remove.title = 'Remove from history. Project files are kept.';
    remove.onclick = () => perform(remove, async () => { await service.remove(row); rows = rows.filter(item => item.id !== row.id); render(); search.focus(); });
    item.dataset.projectId = row.id; item.append(open, pin, remove); return item;
  }

  function render(focusId) {
    if (disposed) return;
    const query = search.value.trim().toLocaleLowerCase();
    const selected = rows.filter(row => (!query || row.search.includes(query)) &&
      (filter !== 'Pinned' || row.pinned) && (filter !== 'Open now' || row.windowId !== undefined));
    page = Math.min(page, Math.max(0, Math.ceil(selected.length / projectPageSize) - 1));
    const visible = selected.slice(page * projectPageSize, (page + 1) * projectPageSize);
    list.replaceChildren(...visible.map(rowNode));
    if (!visible.length) {
      const empty = node('div', 'ov-project-empty');
      empty.append(node('strong', '', query ? 'No matching projects' : filter === 'Pinned' ? 'Keep your favorites close' : filter === 'Open now' ? 'No projects open right now' : 'Your next idea starts here'),
        node('p', '', query ? 'Try a project name or part of its path.' : filter === 'Pinned' ? 'Use the star beside a project to pin it.' : 'Open a folder or a saved workspace to get started.'));
      list.append(empty);
    }
    summary.textContent = selected.length ? `${page * projectPageSize + 1}–${page * projectPageSize + visible.length} of ${selected.length} projects` : '0 projects';
    previous.disabled = page === 0; next.disabled = (page + 1) * projectPageSize >= selected.length;
    for (const button of filterButtons) button.setAttribute('aria-pressed', String(button.textContent === filter));
    if (focusId) ([...list.children].find(item => item.dataset.projectId === focusId)?.querySelector('.ov-project-pin') ??
      filterButtons.find(button => button.textContent === filter)).focus();
  }

  async function load() {
    if (disposed) return;
    if (loading) { dirty = true; return loading; }
    refresh.disabled = true; list.setAttribute('aria-busy', 'true');
    loading = (async () => {
      try { const result = await service.load(); if (!disposed) { rows = result; render(); report(''); } }
      catch { if (!disposed) report('Could not load project history. Your files are unchanged. Try Refresh.'); }
      finally { loading = undefined; if (!disposed) { refresh.disabled = false; list.removeAttribute('aria-busy'); } }
    })();
    await loading;
    if (dirty && !disposed) { dirty = false; return load(); }
  }
  search.oninput = () => { page = 0; render(); };
  search.onkeydown = event => { if (event.key === 'Enter') list.querySelector('.ov-project-open')?.click(); };
  previous.onclick = () => { page--; render(); }; next.onclick = () => { page++; render(); };
  refresh.onclick = load;
  toolbar.append(filters, refresh); pager.append(summary, previous, next);
  root.append(search, toolbar, list, pager);
  list.append(node('p', 'ov-project-empty', 'Loading your projects…'));
  const onFocus = () => void load();
  const ready = load();
  subscription = service.onChange?.(onFocus);
  window.addEventListener('focus', onFocus);
  return { root, ready, dispose() { disposed = true; subscription?.dispose(); window.removeEventListener('focus', onFocus); rows = []; root.replaceChildren(); } };
}
