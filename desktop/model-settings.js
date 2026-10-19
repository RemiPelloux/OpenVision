import { ModelProviders, refreshAccountModels, normalizeBaseUrl, normalizeUserCapabilities, backupAndResetProviders } from './openvision-model-providers.js';
import { completionControl } from './openvision-completion-provider.js';
import { reasoningSource } from './model-reasoning.js';
import { planPiImport, describeCapabilities } from './pi-import.js';
import { createAccountSettings } from './model-accounts.js';

const icons = { plus: 'plus', refresh: 'refresh-cw', edit: 'pencil', remove: 'trash-2' };
const modelsPerPage = 40;
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function button(text, action, icon) {
  const node = element('button', icon ? '' : text);
  node.type = 'button';
  if (icon) {
    const image = element('img');
    image.src = new URL(`./openvision-${icons[icon]}.svg`, import.meta.url).href;
    image.alt = '';
    node.append(image);
    node.title = text;
    node.setAttribute('aria-label', text);
  }
  node.onclick = action;
  return node;
}
function field(form, title, value = '', type = 'text', placeholder = '') {
  const label = element('label', title);
  const input = element('input');
  Object.assign(input, { value, type, placeholder });
  input.setAttribute('aria-label', title);
  if (type === 'password') input.autocomplete = 'new-password';
  if (type === 'checkbox') label.className = 'openvision-checkbox-field';
  label.append(input);
  form.append(label);
  return input;
}
function choice(form, title, options, value = '') {
  const label = element('label', title);
  const select = element('select');
  select.setAttribute('aria-label', title);
  for (const [optionValue, text] of options) {
    const option = element('option', text); option.value = optionValue; select.append(option);
  }
  select.value = value;
  label.append(select);
  form.append(label);
  return select;
}
// Pi import requests go to the main process, which reads the pi files read-only.
function piRequest(bridge, request) {
  if (bridge.piImport) return bridge.piImport(request);
  return globalThis.vscode.ipcRenderer.invoke('vscode:openvision-pi-import', request);
}
const levelsText = values => values?.map(item => item.value && item.value !== item.id ? `${item.id}=${item.value}` : item.id).join(', ') ?? '';
function parseLevels(text) {
  return text.split(',').map(item => item.trim()).filter(Boolean).map(item => {
    const [id, value] = item.split('=').map(part => part.trim());
    return value ? { id, value } : { id, value: id };
  });
}

function dialog(title) {
  const node = element('dialog', '', 'openvision-model-dialog');
  node.setAttribute('aria-label', title);
  const form = element('form');
  const status = element('p', '', 'openvision-model-status');
  status.setAttribute('role', 'status');
  const actions = element('div', '', 'openvision-model-actions');
  node.append(element('h2', title), form, status, actions);
  actions.append(button('Cancel', () => node.close()));
  node.addEventListener('close', () => node.remove(), { once: true });
  document.body.append(node);
  node.showModal();
  return { node, form, status, actions };
}

function modelPage(models, options) {
  const { page, query, enabledOnly } = options;
  let count = 0, enabled = 0;
  const visible = [], offset = page * modelsPerPage;
  for (const model of models) {
    if (model.enabled) enabled++;
    if ((enabledOnly && !model.enabled) || (query && !`${model.name} ${model.id}`.toLowerCase().includes(query))) continue;
    if (count >= offset && visible.length < modelsPerPage) visible.push(model);
    count++;
  }
  const last = Math.max(0, Math.ceil(count / modelsPerPage) - 1);
  if (page > last) return modelPage(models, { ...options, page: last });
  return { visible, count, enabled, page, offset };
}

// The saved configuration is unreadable: explain, keep it unchanged, and offer
// a reset that first backs up the exact stored value.
function unreadableProviders(container, bridge, error) {
  const message = element('p', `Saved provider configuration could not be loaded (${error.message}). ` +
    'It was left unchanged. Custom providers are unavailable until it is restored or reset.');
  message.setAttribute('role', 'alert');
  const status = element('p', '', 'openvision-model-status');
  status.setAttribute('role', 'status');
  const reset = element('button', 'Back up and reset providers');
  reset.onclick = async () => {
    reset.disabled = true;
    try {
      const backup = await backupAndResetProviders(bridge.storage);
      status.textContent = `Backed up to ${backup}. You can add providers again; API keys must be re-entered.`;
      container.replaceChildren(); delete container.dataset.mounted; mountModels(container, bridge);
      container.prepend(status);
    } catch (resetError) { status.textContent = resetError.message; reset.disabled = false; }
  };
  container.append(message, reset, status);
}

export function mountModels(container, bridge) {
  if (!container || container.dataset.mounted) return;
  container.dataset.mounted = 'true';
  let providers;
  const status = element('p', '', 'openvision-model-status');
  status.setAttribute('role', 'status');
  try { providers = new ModelProviders(bridge); }
  catch (error) { unreadableProviders(container, bridge, error); return; }
  let busy = false;
  const accounts = createAccountSettings(undefined, async () => {
    await refreshAccountModels(bridge.storage, true); providers.publishModels();
  });
  const search = element('input');
  search.type = 'search'; search.placeholder = 'Search models';
  search.setAttribute('aria-label', 'Search models');
  const filter = element('select');
  filter.setAttribute('aria-label', 'Show models');
  for (const [value, text] of [['all', 'All models'], ['enabled', 'Enabled models']]) {
    const option = element('option', text); option.value = value; filter.append(option);
  }
  const list = element('div', '', 'openvision-provider-list');
  const pages = new Map();
  let renderFrame;
  let filterQuery = '';
  function renderProviders() {
    filterQuery = search.value.trim().toLowerCase();
    list.replaceChildren(...providers.state.providers.map(providerRow));
    if (!providers.state.providers.length) {
      const empty = element('div', '', 'openvision-provider-empty');
      empty.append(element('strong', 'Connect your first API provider'),
        element('p', 'Add a server URL and API key to discover models for Agent, Edit and autocomplete.'));
      list.append(empty);
    }
    if (busy) for (const control of list.querySelectorAll('button,input')) control.disabled = true;
  }
  function scheduleFilter() {
    pages.clear();
    if (renderFrame !== undefined) return;
    renderFrame = requestAnimationFrame(() => {
      renderFrame = undefined;
      if (container.isConnected) renderProviders();
    });
  }
  search.oninput = scheduleFilter;
  filter.onchange = scheduleFilter;
  async function run(action) {
    if (busy) return;
    busy = true;
    status.textContent = 'Connecting...';
    render();
    try { await action(); status.textContent = providers.state.credentialCleanup?.length ? 'Retired credential cleanup is pending.' : 'Saved'; }
    catch (error) { status.textContent = error.message; }
    finally { busy = false; render(); }
  }
  function providerDialog(provider, preset) {
    const ui = dialog(provider ? 'Edit Provider' : 'Add Provider');
    let savedProvider = provider;
    const name = field(ui.form, 'Provider Name', provider?.name ?? preset?.name, 'text', 'Codex Easy');
    const url = field(ui.form, 'API Base URL', provider?.url ?? preset?.url, 'url', 'https://api.openai.com/v1');
    url.required = true;
    const key = field(ui.form, 'API Key', '', 'password', provider ? 'Keep existing key' : 'API key');
    const clearKey = provider ? field(ui.form, 'Clear Saved Key', '', 'checkbox') : null;
    const headers = field(ui.form, 'Additional Headers (JSON)', '', 'password',
      provider?.customHeaderNames?.length ? `Saved: ${provider.customHeaderNames.join(', ')}; enter JSON to replace` : '{"X-API-Key":"..."}');
    headers.spellcheck = false;
    const clearHeaders = provider ? field(ui.form, 'Clear Saved Headers', '', 'checkbox') : null;
    const discover = field(ui.form, 'Discover Models', '', 'checkbox');
    discover.checked = !provider;
    const save = button('Save', () => ui.form.requestSubmit());
    save.className = 'openvision-primary';
    ui.actions.append(save);
    ui.form.onsubmit = async event => {
      event.preventDefault();
      save.disabled = true;
      try {
        const headerText = headers.value.trim();
        const saved = await providers.save({ id: savedProvider?.id, name: name.value, url: url.value,
          key: clearKey?.checked ? '' : savedProvider && !key.value ? undefined : key.value,
          headers: headerText || undefined, clearHeaders: clearHeaders?.checked === true });
        savedProvider = saved;
        key.value = '';
        headers.value = '';
        if (clearHeaders) clearHeaders.checked = false;
        if (discover.checked) await providers.discover(saved.id);
        if (!providers.state.activeId) await providers.activate(saved.id);
        ui.node.close();
        status.textContent = providers.state.credentialCleanup?.length ? 'Saved. Retired credential cleanup is pending; save again to retry.' : 'Saved';
        render();
      } catch (error) { ui.status.textContent = error.message; render(); }
      finally { save.disabled = false; }
    };
    name.focus();
  }
  function modelDialog(provider, model) {
    const ui = dialog(model ? 'Edit Model' : 'Add Model');
    const id = field(ui.form, 'Model ID', model?.id, 'text', 'Exact model ID from your provider');
    id.required = true;
    const name = field(ui.form, 'Display Name', model?.name);
    // User-specified capabilities override discovery field by field; "Use discovered" clears an override.
    const discovered = model?.capabilities ?? {}, user = model?.userCapabilities ?? {};
    const capabilities = element('fieldset', '', 'openvision-capability-fields');
    capabilities.append(element('legend', 'Capabilities · User-specified'),
      element('small', 'Set these when discovery fails or reports them wrongly. Fields left on "Use discovered" keep the provider value.'));
    ui.form.append(capabilities);
    const discoveredLevels = discovered.reasoningEffortValues;
    const reasoning = choice(capabilities, 'Reasoning', [
      ['', `Use discovered (${discoveredLevels ? (discoveredLevels.length ? levelsText(discoveredLevels) : 'none') : 'not reported'})`],
      ['none', 'Not supported'], ['levels', 'Supported with these levels']],
    user.reasoningEffortValues ? (user.reasoningEffortValues.length ? 'levels' : 'none') : '');
    const levels = field(capabilities, 'Reasoning Levels', levelsText(user.reasoningEffortValues?.length ? user.reasoningEffortValues
      : discoveredLevels?.length ? discoveredLevels : undefined) || 'low, medium, high', 'text', 'low, medium, high');
    const syncLevels = () => { levels.disabled = reasoning.value !== 'levels'; };
    reasoning.onchange = syncLevels; syncLevels();
    const vision = choice(capabilities, 'Image Input', [
      ['', `Use discovered (${discovered.supportsVision === undefined ? 'not reported' : discovered.supportsVision ? 'text and images' : 'text only'})`],
      ['text', 'Text only'], ['image', 'Text and images']],
    user.supportsVision === undefined ? '' : user.supportsVision ? 'image' : 'text');
    const context = field(capabilities, 'Context Window (tokens)', user.contextLength ?? '', 'number',
      discovered.contextLength ? `Discovered: ${discovered.contextLength}` : 'Not reported');
    const output = field(capabilities, 'Max Output Tokens', user.maxOutputTokens ?? '', 'number',
      discovered.maxOutputTokens ? `Discovered: ${discovered.maxOutputTokens}` : 'Not reported');
    for (const input of [context, output]) { input.min = '1'; input.step = '1'; }
    const save = button('Save', () => ui.form.requestSubmit());
    save.className = 'openvision-primary';
    ui.actions.append(save);
    ui.form.onsubmit = async event => {
      event.preventDefault();
      const next = { ...(model?.id === id.value.trim() ? model : {}),
        id: id.value.trim(), name: name.value.trim() || id.value.trim(), enabled: model?.enabled ?? true, manual: true };
      if (!next.id) return;
      try {
        const count = input => input.value.trim() === '' ? undefined : Number(input.value);
        const userCapabilities = normalizeUserCapabilities({
          reasoningEffortValues: reasoning.value === 'none' ? [] : reasoning.value === 'levels' ? parseLevels(levels.value) : undefined,
          supportsVision: vision.value === '' ? undefined : vision.value === 'image',
          contextLength: count(context), maxOutputTokens: count(output) });
        if (reasoning.value === 'levels' && !userCapabilities?.reasoningEffortValues?.length) throw new Error('Enter at least one reasoning level.');
        if (userCapabilities) next.userCapabilities = userCapabilities; else delete next.userCapabilities;
      } catch (error) { ui.status.textContent = error.message; return; }
      if (provider.models.some(item => item !== model && item.id === next.id)) {
        ui.status.textContent = 'This model ID already exists.'; return;
      }
      try {
        const models = model ? provider.models.map(item => item === model ? next : item) : [...provider.models, next];
        await providers.updateModels(provider.id, models);
        ui.node.close(); render();
      } catch (error) { ui.status.textContent = error.message; }
    };
    id.focus();
  }
  async function piImportDialog(staged) {
    const ui = dialog('Import from pi');
    ui.node.classList.add('openvision-import-dialog');
    ui.status.textContent = 'Reading pi configuration…';
    let source;
    try {
      source = await piRequest(bridge, { action: 'read' });
      if (!source.ok) throw new Error(source.error);
    } catch (error) { ui.status.textContent = error.message; return; }
    let plan;
    try {
      plan = planPiImport({ models: source.models, auth: source.auth, existing: providers.state.providers },
        { normalizeUrl: normalizeBaseUrl, normalizeCapabilities: normalizeUserCapabilities });
    } catch (error) { ui.status.textContent = error.message; return; }
    const request = source.staged && !source.staged.invalid ? source.staged : undefined;
    ui.form.append(element('p', `Source: ${source.dir} (read only; pi files are never changed).`, 'openvision-model-status'));
    if (staged || request) ui.form.append(element('p', request?.current === false
      ? 'An import was queued from the command line, but the pi files changed since that preview. Review the current preview below.'
      : 'An import was queued from the command line. Review it and choose Import to store keys in encrypted storage.', 'openvision-model-status'));
    const choices = new Map();
    for (const entry of plan.providers) {
      const section = element('section', '', 'openvision-import-provider');
      section.setAttribute('aria-label', `pi provider ${entry.sourceId}`);
      const header = element('div', '', 'openvision-import-header');
      const selectable = ['new', 'imported', 'conflict'].includes(entry.status);
      if (selectable) {
        const box = element('input'); box.type = 'checkbox';
        box.checked = request ? request.providers.includes(entry.sourceId) && (entry.status === 'new' || request.replace.includes(entry.sourceId)) : entry.selected;
        box.setAttribute('aria-label', `${entry.status === 'new' ? 'Import' : 'Update'} ${entry.sourceId}`);
        choices.set(entry, box); header.append(box);
      }
      const label = { new: 'New', imported: 'Already imported', conflict: 'Name conflict', unsupported: 'Not supported', invalid: 'Invalid' }[entry.status];
      header.append(element('strong', entry.sourceId), element('span', label, 'openvision-import-status'));
      section.append(header);
      if (entry.url) section.append(element('small', `${entry.url} · ${entry.apiLabel}`));
      if (entry.reason) section.append(element('small', entry.reason));
      if (entry.key) section.append(element('small', entry.key === 'available' ? 'API key: found in auth.json; stored encrypted on import' : `API key: ${entry.key}`));
      if (selectable) {
        const list = element('ul');
        for (const model of entry.models) {
          const item = element('li', `${model.name} (${model.id}) · ${describeCapabilities(model.userCapabilities)}`);
          if (entry.newModelIds && !entry.newModelIds.includes(model.id)) item.append(element('small', ' · already saved'));
          list.append(item);
        }
        if (!entry.models.length) list.append(element('li', 'No models listed; use Discover Models after import.'));
        section.append(list);
      }
      for (const note of [...entry.notes, ...entry.models.flatMap(model => (model.notes ?? []).map(text => `${model.id}: ${text}`))])
        section.append(element('small', note, 'openvision-import-note'));
      ui.form.append(section);
    }
    const summary = plan.summary;
    ui.status.textContent = `${summary.new.length} new, ${summary.imported.length} already imported, ${summary.conflicts.length} conflicts, ${summary.unsupported.length + summary.invalid.length} not importable.`;
    const confirm = button('Import', () => ui.form.requestSubmit());
    confirm.className = 'openvision-primary';
    ui.actions.append(confirm);
    if (request) ui.actions.prepend(button('Discard queued import', async () => {
      await piRequest(bridge, { action: 'clear-staged' }); ui.node.close();
    }));
    ui.form.onsubmit = async event => {
      event.preventDefault();
      const selected = [...choices].filter(([, box]) => box.checked).map(([entry]) => ({ ...entry, replace: entry.status !== 'new' }));
      if (!selected.length) { ui.status.textContent = 'Select at least one provider to import.'; return; }
      confirm.disabled = true;
      try {
        const keys = await piRequest(bridge, { action: 'keys', digest: source.digest, providers: selected.map(entry => entry.sourceId) });
        if (!keys.ok) throw new Error(keys.error);
        const results = await providers.importProviders(selected, new Map(Object.entries(keys.keys)));
        if (request) await piRequest(bridge, { action: 'clear-staged' });
        ui.node.close();
        status.textContent = `Imported from pi: ${results.filter(result => !result.skipped).map(result =>
          `${result.name} (${result.models} models${result.keyStored ? ', key stored encrypted' : ', no key'})`).join('; ')}.`;
        render();
      } catch (error) { ui.status.textContent = error.message; render(); }
      finally { confirm.disabled = false; }
    };
  }
  function modelRow(provider, model) {
    const row = element('div', '', 'openvision-model-row');
    row.dataset.enabled = String(model.enabled);
    const toggle = element('input');
    toggle.type = 'checkbox'; toggle.checked = model.enabled;
    toggle.setAttribute('aria-label', `Enable ${model.name}`);
    toggle.onchange = () => run(() => providers.updateModels(provider.id,
      provider.models.map(item => item === model ? { ...item, enabled: toggle.checked } : item)));
    const title = element('div', '', 'openvision-model-title');
    title.append(element('span', model.name), element('small', model.id));
    title.append(element('small', reasoningSource(model, provider), 'openvision-reasoning-source'));
    if (model.userCapabilities)
      title.append(element('small', `User-specified · ${describeCapabilities(model.userCapabilities)}`, 'openvision-capability-source'));
    if (model.discoveryStatus === 'unlisted') {
      const availability = element('small', 'Not in latest catalog', 'openvision-model-availability');
      availability.title = 'This saved model is still selectable. The provider did not list it in its latest discovery response.';
      title.append(availability);
    }
    row.append(toggle, title, button(`Edit ${model.name}`, () => modelDialog(provider, model), 'edit'),
      button(`Remove ${model.name}`, () => run(() => providers.updateModels(provider.id,
        provider.models.filter(item => item !== model))), 'remove'));
    return row;
  }
  function providerRow(provider) {
    const { visible, count, enabled, page, offset } = modelPage(provider.models, {
      page: pages.get(provider.id) ?? 0, query: filterQuery, enabledOnly: filter.value === 'enabled',
    });
    const section = element('section', '', 'openvision-provider');
    section.setAttribute('aria-label', provider.name);
    const header = element('div', '', 'openvision-provider-header');
    const title = element('div', '', 'openvision-model-title');
    title.append(element('strong', provider.name), element('small', provider.url));
    const meta = element('div', '', 'openvision-provider-meta');
    if (providers.state.activeId === provider.id) meta.append(element('span', 'Active', 'openvision-active-badge'));
    meta.append(element('span', `${enabled} / ${provider.models.length} enabled`));
    if (provider.customHeaderNames?.length) meta.append(element('span', `${provider.customHeaderNames.length} custom header${provider.customHeaderNames.length === 1 ? '' : 's'}`));
    title.append(meta);
    header.append(title, button('Discover Models', () => run(() => providers.discover(provider.id)), 'refresh'),
      button('Add Model', () => modelDialog(provider), 'plus'),
      button('Edit Provider', () => providerDialog(provider), 'edit'),
      button('Remove Provider', () => run(() => providers.remove(provider.id)), 'remove'));
    section.append(header);
    if (!provider.models.length) section.append(element('p', 'No models configured.', 'openvision-model-status'));
    for (const model of visible) section.append(modelRow(provider, model));
    if (count > modelsPerPage) {
      const navigation = element('nav', '', 'openvision-model-actions');
      navigation.setAttribute('aria-label', `${provider.name} model pages`);
      const move = delta => {
        pages.set(provider.id, page + delta);
        renderProviders();
        const active = [...list.querySelectorAll('nav')].find(node => node.getAttribute('aria-label') === `${provider.name} model pages`);
        active?.querySelector('button:not(:disabled)')?.focus();
      };
      const previous = button('Previous', () => move(-1)); previous.disabled = page === 0;
      const next = button('Next', () => move(1)); next.disabled = offset + modelsPerPage >= count;
      navigation.append(previous, element('span', `${offset + 1}–${Math.min(offset + modelsPerPage, count)} of ${count}`), next);
      section.append(navigation);
    }
    if (provider.models.length && !visible.length) section.append(element('p', 'No matching models.', 'openvision-empty-models'));
    return section;
  }
  function render() {
    container.replaceChildren();
    search.disabled = busy;
    filter.disabled = busy;
    const intro = element('div', '', 'openvision-settings-intro');
    const introText = element('div');
    introText.append(element('h2', 'Models & integrations'),
      element('p', 'Choose how you connect to AI in OpenVision.', 'openvision-settings-description'));
    const onboarding = button('Run setup again', () => window.openvisionOnboarding?.show());
    onboarding.title = 'Open the OpenVision welcome and setup guide';
    intro.append(introText, onboarding);
    const heading = element('div', '', 'openvision-settings-section-heading');
    const add = button('Add Provider', () => providerDialog());
    add.className = 'openvision-primary';
    const actions = element('div', '', 'openvision-provider-actions');
    actions.append(button('Add Codex Easy', () => providerDialog(undefined, { name: 'Codex Easy', url: 'https://codex-easy.ai/v1' })),
      button('Add OpenAI', () => providerDialog(undefined, { name: 'OpenAI', url: 'https://api.openai.com/v1' })),
      button('Import from pi…', () => piImportDialog()), add);
    if (providers.state.credentialCleanup?.length)
      actions.append(button('Retry credential cleanup', () => run(() => providers.cleanupCredentials()), 'refresh'));
    heading.append(element('h3', 'API connections'));
    const label = element('label', 'Default connection · Agent uses each model’s provider', 'openvision-active-provider');
    const select = element('select');
    select.setAttribute('aria-label', 'Active Provider');
    const none = element('option', 'Select a provider'); none.value = ''; select.append(none);
    for (const provider of providers.state.providers) {
      const option = element('option', provider.name); option.value = provider.id; select.append(option);
    }
    select.value = providers.state.activeId ?? '';
    select.onchange = () => run(() => providers.activate(select.value || null));
    const toolbar = element('div', '', 'openvision-model-toolbar');
    toolbar.append(search, filter);
    label.append(select);
    const api = element('section', '', 'openvision-api-settings');
    api.setAttribute('aria-label', 'API connections');
    api.append(heading, element('p', 'Use a custom server and key. Models appear in the OpenVision selector after discovery.', 'openvision-settings-description'),
      actions, label, completionControl(document, bridge, providers), status, toolbar, list);
    container.append(intro, accounts.root, api);
    container.dataset.busy = String(busy);
    renderProviders();
    if (busy) for (const control of api.querySelectorAll('button,input,select')) control.disabled = true;
  }
  render();
  void accounts.refresh();
  void piRequest(bridge, { action: 'staged' }).then(result => {
    if (result?.ok && result.staged && container.isConnected) return piImportDialog(true);
  }).catch(() => {});
  void providers.ready.then(async () => {
    if (!container.isConnected) return;
    status.textContent = 'Refreshing model capabilities…';
    await providers.discoverMissingCapabilities();
    if (container.isConnected) {
      status.textContent = 'Model capabilities are up to date.';
      render();
    }
  }).catch(error => {
    if (container.isConnected) status.textContent = `Capability refresh skipped: ${error.message}`;
  });
}
