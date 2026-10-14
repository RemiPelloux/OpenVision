import { createProjectList } from './project-home-list.js';
import { showCloneDialog } from './project-clone-dialog.js';
const svgNamespace = 'http://www.w3.org/2000/svg';

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function svgElement(tag, attributes) {
  const node = document.createElementNS(svgNamespace, tag);
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
  return node;
}

function eye() {
  const svg = svgElement('svg', { viewBox: '0 0 320 200', fill: 'none', 'aria-hidden': 'true', class: 'ov-welcome-eye' });
  const frame = svgElement('g', { class: 'ov-eye-lids' });
  frame.append(svgElement('path', { d: 'M28 100C64 44 106 24 160 24s96 20 132 76c-36 56-78 76-132 76S64 156 28 100Z',
    stroke: 'currentColor', 'stroke-width': '3', 'stroke-linejoin': 'round' }));
  const iris = svgElement('g', { class: 'ov-eye-iris' });
  iris.append(svgElement('circle', { cx: '160', cy: '100', r: '47', stroke: 'currentColor', 'stroke-width': '1', opacity: '.35' }),
    svgElement('path', { d: 'm160 66 30 17v34l-30 17-30-17V83Z', fill: 'currentColor' }),
    svgElement('path', { d: 'm160 86 12 7v14l-12 7-12-7V93Z', fill: '#101717' }),
    svgElement('circle', { cx: '177', cy: '79', r: '4', fill: '#f4fffc' }));
  frame.append(iris); svg.append(frame);
  svg.append(svgElement('path', { d: 'M160 5v7m0 176v7M6 100h7m294 0h7', stroke: 'currentColor', opacity: '.5', 'stroke-width': '2', 'stroke-linecap': 'round' }));
  return svg;
}

export function createWelcomeScreen({ onContinue, onProjectOpen, service = window.openvisionProjectHome }) {
  const screen = element('section', 'ov-welcome');
  screen.setAttribute('aria-label', 'Welcome to OpenVision');
  const header = element('header', 'ov-welcome-top');
  header.append(element('span', 'ov-welcome-wordmark', 'OpenVision'), element('span', 'ov-local-badge', 'YOUR LOCAL WORKSPACE'));
  const main = element('div', 'ov-welcome-main');
  const visual = element('div', 'ov-welcome-visual');
  visual.append(element('div', 'ov-eye-orbit'), eye());
  const title = element('h1', 'ov-welcome-title', 'Make room');
  title.append(element('br'), element('span', '', 'for your next idea.'));
  const eyebrow = element('p', 'ov-welcome-eyebrow', 'A CLEAR START');
  const description = element('p', 'ov-welcome-description', 'Pick up where you left off. Everything you’re building, one place to begin.');
  const status = element('p', 'ov-welcome-status'); status.setAttribute('role', 'status');
  const action = (label, className, callback) => {
    const button = element('button', className, label);
    button.setAttribute('aria-label', label);
    button.onclick = async () => {
      button.disabled = true; status.textContent = '';
      try { await callback(); }
      catch { status.textContent = 'Could not complete this action. Please try again.'; }
      finally {
        if (button.isConnected) {
          button.disabled = false;
          if (document.activeElement === document.body) button.focus();
        }
      }
    };
    return button;
  };
  const intro = element('div', 'ov-welcome-intro'), actions = element('div', 'ov-welcome-actions');
  const projects = element('div', 'ov-welcome-projects');
  projects.append(element('h2', '', 'Your projects'), element('p', 'ov-project-subtitle', 'Less finding. More creating.'));
  let browser, disposed = false;
  const connect = () => {
    if (disposed || browser) return;
    service ??= window.openvisionProjectHome;
    if (!service) return;
    actions.prepend(action('Open folder', 'ov-welcome-enter', () => service.folder()),
      action('Open workspace', 'ov-welcome-secondary', () => service.workspace()),
      action('Clone repository', 'ov-welcome-secondary', async () => {
        const repository = await showCloneDialog();
        if (!repository) return;
        onProjectOpen?.();
        status.textContent = 'Choose a destination folder. Git will show cloning progress.';
        const opened = await service.clone(repository);
        status.textContent = opened ? '' : 'No project was opened. Check the Git notification or try again.';
      }));
    browser = createProjectList(service, message => { status.textContent = message; }, onProjectOpen);
    projects.append(browser.root);
  };
  actions.append(action('Enter workspace', 'ov-welcome-tertiary', onContinue));
  intro.append(visual, eyebrow, title, description, actions);
  main.append(intro, projects);
  const footer = element('footer', 'ov-welcome-footer');
  footer.append(element('span', 'ov-welcome-ready', 'Your projects stay yours'), element('span', '', 'Your models. Your workflow.'));
  screen.append(header, main, status, footer);
  window.addEventListener('openvision-project-home-ready', connect); connect();
  screen.dispose = () => { disposed = true; browser?.dispose(); window.removeEventListener('openvision-project-home-ready', connect); screen.remove(); };
  return screen;
}

export function showWelcomeScreen() {
  const existing = document.querySelector('dialog.ov-welcome-dialog');
  if (existing) return existing;
  const previousFocus = document.activeElement;
  const dialog = element('dialog', 'ov-welcome-dialog');
  dialog.setAttribute('aria-label', 'Welcome to OpenVision');
  const screen = createWelcomeScreen({ onContinue: () => dialog.close(), onProjectOpen: () => dialog.close() });
  dialog.append(screen);
  dialog.addEventListener('close', () => { screen.dispose(); dialog.remove(); previousFocus?.focus?.(); }, { once: true });
  document.body.append(dialog); dialog.showModal();
  return dialog;
}
