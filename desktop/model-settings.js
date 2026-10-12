import { ModelProviders } from './openvision-model-providers.js';

const icons = { plus: 'plus', refresh: 'refresh-cw', edit: 'pencil', remove: 'trash-2' };
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
  label.append(input);
  form.append(label);
  return input;
}
function dialog(title) {
  const node = element('dialog', '', 'openvision-model-dialog');
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

export function mountModels(container, bridge) {
  if (!container || container.dataset.mounted) return;
  container.dataset.mounted = 'true';
  let providers;
  const status = element('p', '', 'openvision-model-status');
  status.setAttribute('role', 'status');
  try { providers = new ModelProviders(bridge); }
  catch { container.append(element('p', 'Saved provider configuration could not be loaded.')); return; }
  let busy = false;
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
    ui.actions.append(button('Save', () => ui.form.requestSubmit()));
    ui.form.onsubmit = async event => {
      event.preventDefault();
      const next = { id: id.value.trim(), name: name.value.trim() || id.value.trim(), enabled: model?.enabled ?? true, manual: true };
      if (!next.id) return;
      if (provider.models.some(item => item !== model && item.id === next.id)) {
        ui.status.textContent = 'This model ID already exists.'; return;
      }
      try {
        await providers.updateModels(provider.id, [...provider.models.filter(item => item !== model), next]);
        ui.node.close(); render();
      } catch (error) { ui.status.textContent = error.message; }
    };
    id.focus();
  }
  function modelRow(provider, model) {
    const row = element('div', '', 'openvision-model-row');
    const toggle = element('input');
    toggle.type = 'checkbox'; toggle.checked = model.enabled;
    toggle.setAttribute('aria-label', `Enable ${model.name}`);
    toggle.onchange = () => run(() => providers.updateModels(provider.id,
      provider.models.map(item => item === model ? { ...item, enabled: toggle.checked } : item)));
    const title = element('div', '', 'openvision-model-title');
    title.append(element('span', model.name), element('small', model.id));
    row.append(toggle, title, button(`Edit ${model.name}`, () => modelDialog(provider, model), 'edit'),
      button(`Remove ${model.name}`, () => run(() => providers.updateModels(provider.id,
        provider.models.filter(item => item !== model))), 'remove'));
    return row;
  }
  function providerRow(provider) {
    const section = element('section', '', 'openvision-provider');
    const header = element('div', '', 'openvision-provider-header');
    const title = element('div', '', 'openvision-model-title');
    title.append(element('strong', provider.name), element('small', provider.url));
    header.append(title, button('Discover Models', () => run(() => providers.discover(provider.id)), 'refresh'),
      button('Add Model', () => modelDialog(provider), 'plus'),
      button('Edit Provider', () => providerDialog(provider), 'edit'),
      button('Remove Provider', () => run(() => providers.remove(provider.id)), 'remove'));
    section.append(header);
    if (!provider.models.length) section.append(element('p', 'No models configured.', 'openvision-model-status'));
    for (const model of provider.models) section.append(modelRow(provider, model));
    return section;
  }
  function render() {
    container.replaceChildren();
    const heading = element('div', '', 'openvision-provider-header');
    heading.append(element('h3', 'Custom Providers'),
      button('Add OpenAI', () => providerDialog(undefined, { name: 'OpenAI', url: 'https://api.openai.com/v1' })),
      button('Add Provider', () => providerDialog()));
    const label = element('label', 'Active Provider', 'openvision-active-provider');
    const select = element('select');
    select.setAttribute('aria-label', 'Active Provider');
    const none = element('option', 'Select a provider'); none.value = ''; select.append(none);
    for (const provider of providers.state.providers) {
      const option = element('option', provider.name); option.value = provider.id; select.append(option);
    }
    select.value = providers.state.activeId ?? '';
    select.onchange = () => run(() => providers.activate(select.value || null));
    label.append(select); container.append(heading, label, status);
    for (const provider of providers.state.providers) container.append(providerRow(provider));
    if (busy) for (const control of container.querySelectorAll('button,input,select')) control.disabled = true;
  }
  render();
}
