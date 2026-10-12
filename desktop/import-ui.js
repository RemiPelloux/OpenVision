function element(tag, text) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  return node;
}

function field(container, text, value) {
  const label = element('label', text);
  const input = element('input');
  input.value = value;
  input.setAttribute('aria-label', text);
  label.append(input);
  container.append(label);
  return input;
}

async function invoke(request) {
  const result = await globalThis.vscode.ipcRenderer.invoke('vscode:openvision-cursor-import', request);
  if (!result.ok) throw new Error(result.error);
  return result;
}

export async function importCursor() {
  if (document.querySelector('.openvision-import-dialog')) return;
  const dialog = element('dialog');
  dialog.className = 'openvision-profile-dialog openvision-import-dialog';
  const heading = element('h2', 'Import from Cursor');
  const form = element('div');
  const status = element('p', 'Reading Cursor configuration...');
  status.setAttribute('role', 'status');
  const details = element('pre');
  const controls = element('div');
  const close = element('button', 'Close');
  close.onclick = () => dialog.close();
  controls.append(close);
  dialog.append(heading, form, status, details, controls);
  document.body.append(dialog);
  dialog.addEventListener('close', () => dialog.remove(), { once: true });
  dialog.showModal();
  try { await populate({ dialog, form, status, details, controls }); }
  catch (error) { status.textContent = error.message; }
}

async function populate(view) {
  const { options, profiles } = await invoke({ action: 'defaults' });
  if (!view.dialog.open) return;
  const user = field(view.form, 'Cursor User directory', options.user);
  if (profiles.length > 1) {
    const label = element('label', 'Cursor profile');
    const select = element('select');
    select.setAttribute('aria-label', 'Cursor profile');
    for (const profile of profiles) {
      const option = element('option', profile.name);
      option.value = profile.path;
      select.append(option);
    }
    select.onchange = () => { user.value = select.value; user.dispatchEvent(new Event('input', { bubbles: true })); };
    label.append(select);
    view.form.append(label);
  }
  const extensions = field(view.form, 'Cursor extensions directory', options.extensions);
  const choices = new Map();
  const categoryLabels = { settings: 'Editor settings', keybindings: 'Keyboard shortcuts', snippets: 'Snippets', tasks: 'User tasks', extensions: 'Installed extensions' };
  const group = element('div');
  group.className = 'openvision-import-categories';
  for (const name of options.categories) choices.set(name, checkbox(group, categoryLabels[name]));
  view.form.append(group);
  const overwrite = checkbox(view.form, 'Use Cursor values for conflicts');
  const preview = element('button', 'Preview Import');
  const apply = element('button', 'Import');
  const restore = element('button', 'Restore Last Import');
  apply.disabled = true;
  restore.hidden = true;
  view.controls.prepend(preview, apply, restore);
  let token;
  let backup;
  function release() {
    if (token) void invoke({ action: 'release', token }).catch(console.error);
    token = undefined;
    apply.disabled = true;
  }
  view.dialog.addEventListener('close', release, { once: true });
  view.form.oninput = () => { release(); view.details.textContent = ''; };
  view.status.textContent = 'Ready';
  async function run(action) {
    for (const button of view.controls.querySelectorAll('button')) button.disabled = true;
    view.form.inert = true;
    view.status.textContent = 'Working...';
    try { await action(); }
    catch (error) { view.status.textContent = error.message; release(); }
    finally {
      view.form.inert = false;
      for (const button of view.controls.querySelectorAll('button')) button.disabled = false;
      apply.disabled = !token;
    }
  }
  preview.onclick = () => run(async () => {
    release();
    const result = await invoke({ action: 'preview', options: { ...options, user: user.value, extensions: extensions.value,
      categories: [...choices].filter(([, input]) => input.checked).map(([name]) => name), overwrite: overwrite.checked } });
    token = result.token;
    if (!view.dialog.open || !result.files) release();
    if (!view.dialog.open) return;
    view.status.textContent = `${result.files} files to import (${(result.bytes / 1024 / 1024).toFixed(1)} MiB)`;
    view.details.textContent = Object.entries(result.counts).map(([key, count]) => `${categoryLabels[key]}: ${count} files`).join('\n') +
      `\n\nFrom: ${result.source}\nTo: ${result.destination}` + (result.missing.length ? `\n\nNot found:\n${result.missing.join('\n')}` : '') +
      `\n\n${result.paths.slice(0, 100).join('\n')}` + (result.paths.length > 100 ? '\n...' : '');
  });
  apply.onclick = () => run(async () => {
    const result = await invoke({ action: 'apply', token });
    token = undefined;
    backup = result.backup;
    restore.hidden = !backup;
    view.status.textContent = `Imported ${result.files} files. Restart OpenVision to load extensions.`;
    view.details.textContent = backup ? `Backup: ${backup}` : 'Everything is already imported.';
  });
  restore.onclick = () => run(async () => {
    release();
    const result = await invoke({ action: 'restore', backup });
    restore.hidden = true;
    token = undefined;
    view.status.textContent = `Restored ${result.restored} files. Restart OpenVision.`;
  });
}

function checkbox(container, text) {
  const label = element('label');
  label.className = 'openvision-import-checkbox';
  const input = element('input');
  input.type = 'checkbox';
  input.checked = true;
  label.append(input, document.createTextNode(text));
  container.append(label);
  return input;
}
