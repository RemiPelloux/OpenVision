import { createAccountSettings } from './model-accounts.js';

let active;
function node(tag, text, className) {
  const value = document.createElement(tag);
  if (text) value.textContent = text;
  if (className) value.className = className;
  return value;
}
function action(text, run, primary = false) {
  const button = node('button', text, primary ? 'ov-setup-primary' : '');
  button.type = 'button'; button.onclick = run;
  return button;
}

export function showOnboarding({ service = window.openvisionProjectHome, errorMessage = '' } = {}) {
  if (active?.isConnected) { active.focus(); return; }
  const dialog = node('dialog', '', 'ov-setup');
  dialog.setAttribute('aria-label', 'Set up OpenVision');
  const previousFocus = document.activeElement;
  const content = node('div', '', 'ov-setup-content');
  const progress = node('p', '', 'ov-setup-progress');
  const footer = node('footer', '', 'ov-setup-footer');
  const status = node('p', errorMessage, 'ov-setup-status'); status.setAttribute('role', 'status');
  let step = 0, disposed = false, accounts;
  function dispose() {
    if (disposed) return;
    disposed = true; accounts?.dispose(); dialog.remove();
    if (active === dialog) active = undefined;
    if (previousFocus?.isConnected) previousFocus.focus();
  }
  function finish() {
    try { service?.finishOnboarding(); dialog.close(); dispose(); }
    catch { status.textContent = 'Could not save setup progress. Please try again.'; }
  }
  async function openAfterSetup(operation) {
    finish();
    if (dialog.open) return;
    try { await operation(); }
    catch (error) { showOnboarding({ service, errorMessage: error.message || 'Could not open this tool. Please try again.' }); }
  }
  function render() {
    accounts?.dispose(); accounts = undefined;
    content.replaceChildren(); footer.replaceChildren();
    progress.textContent = `Step ${step + 1} of 3`;
    if (step === 0) {
      const logo = node('img'); logo.src = new URL('./openvision-logo.svg', import.meta.url).href; logo.alt = '';
      content.append(logo, node('h1', 'Welcome to OpenVision'),
        node('p', 'Your projects. Your tools. Your workspace.'),
        node('p', 'Start with a local profile, connect the AI tools you use, and make the editor feel like home.', 'ov-setup-muted'));
      const list = node('ul');
      for (const text of ['Open and resume projects in one place', 'Connect ChatGPT, Claude, or your own API', 'Keep your theme and settings under your control']) list.append(node('li', text));
      content.append(list);
    } else if (step === 1) {
      content.append(node('h1', 'Connect your AI'), node('p', 'Choose the tools you use. You can add or change connections later.'));
      accounts = createAccountSettings(() => ({ ...service,
        connectAccount: id => openAfterSetup(() => service.connectAccount(id)),
        openAccount: id => openAfterSetup(() => service.openAccount(id)),
      }));
      content.append(accounts.root); void accounts.refresh();
      content.append(action('Use a custom API provider', () => openAfterSetup(() => service.models())),
        node('p', 'A connection is optional. You can use the editor without signing in.', 'ov-setup-muted'));
    } else {
      content.append(node('h1', 'Make yourself at home'), node('p', 'Your workspace is ready. Finish setup or choose a starting point.'));
      const choices = node('div', '', 'ov-setup-choices');
      choices.append(action('Choose a color theme', () => openAfterSetup(() => service.theme())),
        action('Open AI settings', () => openAfterSetup(() => service.models())),
        action('Import editor settings', () => openAfterSetup(() => window.openvisionLocalProfile.importCursor())));
      content.append(choices, node('p', 'Run this setup again from Settings → Models or your local profile.', 'ov-setup-muted'));
    }
    footer.append(action('Skip setup', finish));
    const navigation = node('div');
    if (step > 0) navigation.append(action('Back', () => { step--; render(); }));
    navigation.append(action(step === 2 ? 'Finish setup' : 'Continue', () => {
      if (step === 2) finish(); else { step++; render(); }
    }, true));
    footer.append(navigation);
    content.querySelector('h1')?.setAttribute('tabindex', '-1');
    if (dialog.open) content.querySelector('h1')?.focus();
  }
  dialog.addEventListener('cancel', event => { event.preventDefault(); finish(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !dialog.querySelector(':popover-open')) { event.preventDefault(); event.stopPropagation(); finish(); }
  }, { capture: true });
  dialog.addEventListener('close', dispose, { once: true });
  dialog.append(progress, content, status, footer); render();
  document.body.append(dialog); active = dialog; dialog.showModal();
  content.querySelector('h1')?.focus();
}

export function maybeShowOnboarding(service = window.openvisionProjectHome) {
  if (!service) return;
  const state = service.onboardingState();
  if (state.enabled && !state.seen) showOnboarding({ service });
}
window.openvisionOnboarding = { show: showOnboarding };
