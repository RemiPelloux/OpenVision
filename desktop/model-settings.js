import { ModelProviders } from './openvision-model-providers.js';
import { completionControl } from './openvision-completion-provider.js';
import { reasoningSource } from './model-reasoning.js';
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

export function mountModels(container, bridge) {
  if (!container || container.dataset.mounted) return;
  container.dataset.mounted = 'true';
  let providers;
  const status = element('p', '', 'openvision-model-status');
  status.setAttribute('role', 'status');
  try { providers = new ModelProviders(bridge); }
  catch { container.append(element('p', 'Saved provider configuration could not be loaded.')); return; }
  let busy = false;
  const accounts = createAccountSettings();
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
    try { await action(); status.textContent = 'Saved'; }
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
    const discover = field(ui.form, 'Discover Models', '', 'checkbox');
    discover.checked = !provider;
    const save = button('Save', () => ui.form.requestSubmit());
    save.className = 'openvision-primary';
    ui.actions.append(save);
    ui.form.onsubmit = async event => {
      event.preventDefault();
      save.disabled = true;
      try {
        const saved = await providers.save({ id: savedProvider?.id, name: name.value, url: url.value,
          key: clearKey?.checked ? '' : savedProvider && !key.value ? undefined : key.value });
        savedProvider = saved;
        key.value = '';
        if (discover.checked) await providers.discover(saved.id);
        if (!providers.state.activeId) await providers.activate(saved.id);
        ui.node.close(); render();
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
    const save = button('Save', () => ui.form.requestSubmit());
    save.className = 'openvision-primary';
    ui.actions.append(save);
    ui.form.onsubmit = async event => {
      event.preventDefault();
      const next = { ...(model?.id === id.value.trim() ? model : {}),
        id: id.value.trim(), name: name.value.trim() || id.value.trim(), enabled: model?.enabled ?? true, manual: true };
      if (!next.id) return;
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
      button('Add OpenAI', () => providerDialog(undefined, { name: 'OpenAI', url: 'https://api.openai.com/v1' })), add);
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
