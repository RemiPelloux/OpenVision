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

export function createWelcomeScreen({ onContinue }) {
  const screen = element('section', 'ov-welcome');
  screen.setAttribute('aria-label', 'Welcome to OpenVision');
  const header = element('header', 'ov-welcome-top');
  header.append(element('span', 'ov-welcome-wordmark', 'OpenVision'), element('span', 'ov-local-badge', 'LOCAL WORKSPACE'));
  const main = element('div', 'ov-welcome-main');
  const visual = element('div', 'ov-welcome-visual');
  visual.append(element('div', 'ov-eye-orbit'), eye());
  const title = element('h1', 'ov-welcome-title', 'Open');
  title.append(element('span', '', 'Vision'));
  const eyebrow = element('p', 'ov-welcome-eyebrow', 'A NEW WAY TO SEE YOUR CODE');
  const description = element('p', 'ov-welcome-description', 'Your ideas. Your models. Your workspace.');
  const enter = element('button', 'ov-welcome-enter', 'Enter workspace');
  const arrow = svgElement('svg', { viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': 'true' });
  arrow.append(svgElement('path', { d: 'M5 12h14m-6-6 6 6-6 6', stroke: 'currentColor', 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }));
  enter.append(arrow);
  const status = element('p', 'ov-welcome-status'); status.setAttribute('role', 'status');
  enter.onclick = async () => {
    enter.disabled = true; status.textContent = '';
    try { await onContinue(); }
    catch { status.textContent = 'Could not open your workspace. Please try again.'; }
    finally { if (enter.isConnected) enter.disabled = false; }
  };
  main.append(visual, eyebrow, title, description, enter, element('p', 'ov-welcome-note', 'Start with your local profile.'), status);
  const footer = element('footer', 'ov-welcome-footer');
  footer.append(element('span', 'ov-welcome-ready', 'Ready when you are'), element('span', '', 'Built around you.'));
  screen.append(header, main, footer);
  return screen;
}

export function showWelcomeScreen() {
  const existing = document.querySelector('dialog.ov-welcome-dialog');
  if (existing) return existing;
  const previousFocus = document.activeElement;
  const dialog = element('dialog', 'ov-welcome-dialog');
  dialog.setAttribute('aria-label', 'Welcome to OpenVision');
  dialog.append(createWelcomeScreen({ onContinue: () => dialog.close() }));
  dialog.addEventListener('close', () => { dialog.remove(); previousFocus?.focus?.(); }, { once: true });
  document.body.append(dialog); dialog.showModal();
  return dialog;
}
