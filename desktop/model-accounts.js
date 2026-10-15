import { createAccountPicker } from './account-picker.js';

const integrations = [
  { id: 'codex', name: 'ChatGPT', agent: 'Codex' },
  { id: 'claude', name: 'Claude', agent: 'Claude Code' },
];

function node(tag, text, className) {
  const value = document.createElement(tag);
  if (text) value.textContent = text;
  if (className) value.className = className;
  return value;
}

function action(text, handler) {
  const value = node('button', text);
  value.type = 'button'; value.onclick = handler;
  return value;
}

export function createAccountSettings(getService = () => window.openvisionProjectHome) {
  const root = node('section', '', 'openvision-account-settings');
  root.setAttribute('aria-label', 'Account integrations');
  const heading = node('div', '', 'openvision-settings-section-heading');
  const status = node('p', '', 'openvision-model-status openvision-account-status'); status.setAttribute('role', 'status');
  const cards = node('div', '', 'openvision-account-grid');
  let records = [], profiles = { accounts: [], active: {} }, busy = false, loaded = false;
  let pickers = [];
  const refresh = action('Refresh status', () => run(() => load(true)));
  heading.append(node('h3', 'Account integrations'), refresh);
  root.append(heading, node('p', 'Connect your account. Switch between personal and work profiles here.', 'openvision-settings-description'), status, cards);

  async function load(refresh = false) {
    const service = getService();
    if (!service?.accountStatus) throw Error('Account integrations are starting. Try Refresh status in a moment.');
    const result = await service.accountStatus({ refresh });
    if (!result?.supported || !Array.isArray(result.providers)) throw Error('Account integrations are unavailable in this window.');
    records = result.providers; loaded = true;
    if (service.accountProfiles) profiles = await service.accountProfiles();
  }

  async function run(operation, message = '', success = '') {
    if (busy) return;
    const focused = root.contains(document.activeElement) ? document.activeElement : null;
    const focusName = focused?.getAttribute('aria-label') || focused?.textContent;
    busy = true; status.dataset.state = 'busy'; status.textContent = message || 'Checking integrations…'; render();
    const slow = setTimeout(() => {
      status.textContent = `${message || 'Checking integrations…'} ${message.startsWith('Opening secure browser')
        ? 'Finish sign-in in your browser, or cancel from the progress notification.' : 'Still working. This operation will report an error if it cannot finish.'}`;
    }, 8000);
    try { await operation(); status.textContent = success; }
    catch (error) { status.dataset.state = 'error'; status.textContent = error?.message || 'The integration could not be opened. Try again.'; }
    finally {
      clearTimeout(slow); busy = false;
      if (status.dataset.state === 'busy') status.dataset.state = 'ready'; render();
      if (focusName && document.activeElement === document.body)
        [...root.querySelectorAll('button')].find(control => (control.getAttribute('aria-label') || control.textContent) === focusName)?.focus();
    }
  }

  function connect(id) {
    return run(async () => {
      const service = getService();
      if (!service?.connectAccount) throw Error('Account integrations are unavailable. Refresh status and try again.');
      await service.connectAccount(id); await load();
    }, 'Opening secure browser sign-in. First-time setup may download the official agent…', 'Sign-in completed. Open the agent to start working.');
  }

  function card(integration) {
    const record = records.find(item => item.id === integration.id);
    const installed = record?.installed === true;
    const card = node('article', '', 'openvision-account-card');
    card.setAttribute('aria-label', integration.agent);
    const header = node('div', '', 'openvision-account-header');
    const identity = node('div', '', 'openvision-account-identity');
    const title = node('div', '', 'openvision-account-title');
    title.append(node('strong', integration.name),
      node('span', record?.busy ? 'Connecting' : record?.signedIn === true ? 'Signed in' : installed ? 'Installed' : loaded ? 'Not installed' : 'Not checked', 'openvision-integration-badge'));
    if (record?.email) identity.append(title, node('span', record.email, 'openvision-account-email'));
    else identity.append(title);
    const detail = node('small', record?.signedIn === true
      ? `${record.plan || 'Connected account'} · ${integration.agent}`
      : record?.state === 'status-unavailable' ? record.detail
      : installed ? `Sign-in managed in ${integration.agent}` : `Sets up the official ${integration.agent} extension.`);
    identity.append(detail);
    const actions = node('div', '', 'openvision-account-actions');
    const accountPicker = node('div', '', 'openvision-account-picker');
    const saved = profiles.accounts.filter(item => item.provider === integration.id);
    if (saved.length) {
      const selectedId = record?.accountId ?? saved.find(item => item.removing)?.id ?? '';
      const picker = createAccountPicker({ name: `${integration.agent} account`, accounts: saved, selectedId,
        onSelect: id => run(async () => {
          if (saved.find(item => item.id === id)?.removing) throw Error('Cleanup is pending for this account. Choose Delete account to retry.');
          await getService().selectAccount(integration.id, id || null);
          await load();
          const current = records.find(item => item.id === integration.id);
          if ((current?.accountId ?? '') !== id) throw Error('The agent host has not switched yet. Finish any pending operation, then select the account again.');
        }, 'Switching the agent connection…', 'Account switched. Your project stays open.') });
      pickers.push(picker); accountPicker.append(picker.root);
      if (getService()?.removeAccount && selectedId) {
        const selected = saved.find(item => item.id === selectedId);
        if (selected) accountPicker.append(action('Delete account', () => removeAccount(integration, selected)));
      }
    }
    if (getService()?.createAccount) accountPicker.append(action('Add account', () => addAccount(integration)));
    const signInLabel = record?.signedIn === true ? 'Reconnect' : installed ? 'Sign in' : 'Set up & sign in';
    const signIn = action(signInLabel, () => connect(integration.id));
    signIn.setAttribute('aria-label', `${signInLabel} · ${integration.name}`);
    actions.append(signIn);
    if (installed) {
      const open = action(`Open ${integration.agent}`, () => run(async () => {
        const service = getService();
        if (!service?.openAccount) throw Error('Account integrations are unavailable. Refresh status and try again.');
        await service.openAccount(integration.id);
      }, `Opening ${integration.agent}…`, `${integration.agent} is open.`));
      actions.append(open);
    }
    header.append(identity, actions); card.append(header, accountPicker);
    const catalog = node('details', '', 'openvision-account-models');
    const models = record?.models ?? [];
    if (models.length) {
      catalog.append(node('summary', `Models · ${models.length}`));
      const list = node('ul');
      for (const model of models) list.append(node('li', model.name || model.id));
      catalog.append(list); card.append(catalog);
    } else if (record?.signedIn === true) card.append(node('small', `Choose models inside ${integration.agent}.`));
    if (record?.busy) for (const control of actions.querySelectorAll('button')) control.dataset.pending = 'true';
    return card;
  }

  function render() {
    for (const picker of pickers) picker.dispose();
    pickers = [];
    cards.replaceChildren(...integrations.map(card));
    for (const control of root.querySelectorAll('button,select')) control.disabled = busy || control.dataset.pending === 'true';
    root.setAttribute('aria-busy', String(busy));
  }
  function addAccount(integration) {
    const dialog = node('dialog', '', 'openvision-model-dialog'); dialog.setAttribute('aria-label', `Add ${integration.agent} account`);
    const label = node('label', 'Account name'), input = node('input'); input.maxLength = 120;
    input.placeholder = 'Personal or work email'; input.setAttribute('aria-label', 'Account name'); label.append(input);
    const error = node('p', '', 'openvision-model-status'); error.setAttribute('role', 'status');
    const create = action('Add account', async () => {
      if (!input.value.trim()) { error.textContent = 'Enter a name for this account.'; return; }
      create.disabled = true;
      try {
        const saved = await getService().createAccount(integration.id, input.value.trim()); dialog.close();
        await run(async () => { await getService().selectAccount(integration.id, saved.id); await load(); },
          'Preparing an isolated account…', 'Account ready. Choose Sign in to connect it.');
      } catch (problem) { error.textContent = problem.message; create.disabled = false; }
    });
    const form = node('form'), actions = node('div', '', 'openvision-model-actions');
    input.required = true; create.className = 'openvision-primary';
    form.append(label);
    form.onsubmit = event => { event.preventDefault(); create.click(); };
    actions.append(action('Cancel', () => dialog.close()), create);
    dialog.append(node('h2', `Add ${integration.agent} account`),
      node('p', 'Give this profile a name. Its sign-in stays separate from your other accounts.', 'openvision-settings-description'), form, error, actions);
    dialog.addEventListener('close', () => dialog.remove(), { once: true });
    document.body.append(dialog); dialog.showModal(); input.focus();
  }
  function removeAccount(integration, account) {
    const dialog = node('dialog', '', 'openvision-model-dialog');
    dialog.setAttribute('aria-label', `Delete ${integration.agent} account`);
    const actions = node('div', '', 'openvision-model-actions');
    const cancel = action('Cancel', () => dialog.close());
    const remove = action('Delete account', () => {
      dialog.close();
      return run(async () => {
        try { await getService().removeAccount(integration.id, account.id); }
        finally { await load().catch(() => {}); }
      },
        'Disconnecting account and cleaning its profile…', 'Account deleted. Credentials and cache removed; conversation files kept locally.');
    });
    remove.className = 'openvision-primary';
    actions.append(cancel, remove);
    dialog.append(node('h2', `Delete ${integration.agent} account?`),
      node('p', `Remove “${account.label}” from OpenVision and delete its credentials and cache. Its local conversation files will be kept in your account history folder.`, 'openvision-settings-description'), actions);
    dialog.addEventListener('close', () => dialog.remove(), { once: true });
    document.body.append(dialog); dialog.showModal(); cancel.focus();
  }
  render();
  return { root, refresh: () => run(() => load()), dispose: () => pickers.forEach(picker => picker.dispose()) };
}
