let nextPicker = 0;

// One owner for the account menu, its keyboard state and temporary listeners.
export function createAccountPicker({ name, accounts, selectedId, onSelect }) {
  const root = document.createElement('div'); root.className = 'openvision-account-select';
  const caption = document.createElement('span'); caption.textContent = 'Account profile';
  const trigger = document.createElement('button'); trigger.type = 'button';
  trigger.className = 'openvision-account-trigger'; trigger.setAttribute('role', 'combobox');
  trigger.setAttribute('aria-label', name); trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false'); trigger.dataset.value = selectedId;
  const value = document.createElement('span'); value.className = 'openvision-account-value';
  value.textContent = accounts.find(account => account.id === selectedId)?.label ?? 'Disconnected';
  value.title = value.textContent;
  const chevron = document.createElement('span'); chevron.className = 'openvision-account-chevron'; chevron.setAttribute('aria-hidden', 'true');
  trigger.append(value, chevron);
  const menu = document.createElement('div'); menu.className = 'openvision-account-menu';
  menu.id = `openvision-account-menu-${++nextPicker}`; menu.popover = 'auto';
  menu.setAttribute('role', 'listbox'); menu.setAttribute('aria-label', name);
  trigger.setAttribute('aria-controls', menu.id);
  const choices = [...accounts, { id: '', label: 'Disconnected' }];
  let active = Math.max(0, choices.findIndex(account => account.id === selectedId));
  let listeners, search = '', lastKey = 0;
  const rows = choices.map((account, index) => {
    const row = document.createElement('div'); row.id = `${menu.id}-${index}`;
    row.setAttribute('role', 'option'); row.setAttribute('aria-selected', String(account.id === selectedId));
    row.title = account.label; row.dataset.disconnected = String(!account.id);
    const label = document.createElement('span'); label.textContent = account.label;
    const check = document.createElement('span'); check.textContent = account.id === selectedId ? '✓' : '';
    check.setAttribute('aria-hidden', 'true'); row.append(label, check);
    row.onpointermove = () => highlight(index);
    row.onmousedown = event => event.preventDefault();
    row.onclick = () => choose(index);
    menu.append(row); return row;
  });
  function highlight(index) {
    active = index;
    rows.forEach((row, item) => { row.dataset.active = String(item === active); });
    trigger.setAttribute('aria-activedescendant', rows[active].id);
    rows[active].scrollIntoView({ block: 'nearest' });
  }
  function close() {
    listeners?.abort();
    if (menu.matches(':popover-open')) menu.hidePopover();
    trigger.setAttribute('aria-expanded', 'false'); trigger.removeAttribute('aria-activedescendant');
  }
  function open() {
    if (trigger.disabled || menu.matches(':popover-open')) return;
    const rect = trigger.getBoundingClientRect(), gutter = 8;
    const width = Math.min(rect.width, window.innerWidth - gutter * 2);
    const below = window.innerHeight - rect.bottom - gutter;
    const above = rect.top - gutter;
    const down = below >= Math.min(menu.scrollHeight || 240, 240) || below >= above;
    Object.assign(menu.style, { width: `${width}px`, left: `${Math.max(gutter, Math.min(rect.left, window.innerWidth - width - gutter))}px`,
      maxHeight: `${Math.max(0, Math.min(280, down ? below : above) - 4)}px`,
      top: down ? `${rect.bottom + 4}px` : 'auto', bottom: down ? 'auto' : `${window.innerHeight - rect.top + 4}px` });
    menu.showPopover(); trigger.setAttribute('aria-expanded', 'true');
    highlight(Math.max(0, choices.findIndex(account => account.id === selectedId)));
    listeners = new AbortController();
    window.addEventListener('resize', close, { signal: listeners.signal });
    document.addEventListener('scroll', event => { if (!menu.contains(event.target)) close(); }, { capture: true, signal: listeners.signal });
  }
  function choose(index) {
    const id = choices[index].id; close(); trigger.focus();
    if (id !== selectedId) onSelect(id);
  }
  trigger.onclick = () => menu.matches(':popover-open') ? close() : open();
  trigger.onkeydown = event => {
    if (event.key === 'Tab') { close(); return; }
    if (event.key === 'Escape') {
      if (menu.matches(':popover-open')) { event.preventDefault(); event.stopPropagation(); close(); }
      return;
    }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault(); const wasOpen = menu.matches(':popover-open'); open();
      if (event.key === 'Home') highlight(0);
      else if (event.key === 'End') highlight(rows.length - 1);
      else if (wasOpen) highlight((active + (event.key === 'ArrowDown' ? 1 : -1) + rows.length) % rows.length);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); if (menu.matches(':popover-open')) choose(active); else open();
    } else if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault(); open();
      search = (Date.now() - lastKey < 700 ? search : '') + event.key.toLocaleLowerCase(); lastKey = Date.now();
      const index = choices.findIndex(account => account.label.toLocaleLowerCase().startsWith(search));
      if (index >= 0) highlight(index);
    }
  };
  trigger.onblur = close;
  menu.addEventListener('toggle', () => {
    if (!menu.matches(':popover-open')) close();
  });
  root.append(caption, trigger, menu);
  return { root, dispose: close };
}
