export function repositoryLocation(value) {
  const location = value.trim();
  if (!location || /[\r\n\0]/.test(location) || location.startsWith('-'))
    throw Error('Enter a repository URL to continue.');
  if (!/^(?:https?|ssh|git|file):\/\//i.test(location) &&
      !/^[\w.-]+@[^\s:]+:.+/.test(location) && !/^(?:[a-z]:[\\/]|\/)/i.test(location))
    throw Error('Use an HTTPS or SSH repository URL, or an absolute local repository path.');
  return location;
}

function element(tag, text, attributes = {}) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
  return node;
}

export function showCloneDialog() {
  const dialog = document.createElement('dialog');
  dialog.className = 'ov-clone-dialog';
  dialog.setAttribute('aria-labelledby', 'ov-clone-title');
  const form = element('form', '', { novalidate: '' });
  const actions = element('div', '', { class: 'ov-clone-actions' });
  actions.append(element('button', 'Cancel', { type: 'button', class: 'ov-clone-cancel' }),
    element('button', 'Choose location & clone', { type: 'submit', class: 'ov-clone-submit' }));
  form.append(element('h2', 'Clone repository', { id: 'ov-clone-title' }),
    element('p', 'Enter a repository URL, then choose a destination folder.'),
    element('label', 'Repository URL', { for: 'ov-clone-url' }),
    element('input', '', { id: 'ov-clone-url', name: 'repository', type: 'text', spellcheck: 'false',
      autocomplete: 'off', placeholder: 'https://github.com/owner/project.git', 'aria-describedby': 'ov-clone-help ov-clone-error' }),
    element('div', 'HTTPS, SSH and local repositories. Git manages authentication.', { id: 'ov-clone-help' }),
    element('p', '', { id: 'ov-clone-error', role: 'alert' }), actions);
  dialog.append(form);
  const previous = document.activeElement, input = dialog.querySelector('input');
  return new Promise(resolve => {
    let selected;
    dialog.querySelector('form').onsubmit = event => {
      event.preventDefault();
      try { selected = repositoryLocation(input.value); dialog.close(); }
      catch (error) {
        dialog.querySelector('#ov-clone-error').textContent = error.message;
        input.setAttribute('aria-invalid', 'true'); input.focus();
      }
    };
    input.oninput = () => { input.removeAttribute('aria-invalid'); dialog.querySelector('#ov-clone-error').textContent = ''; };
    dialog.querySelector('.ov-clone-cancel').onclick = () => dialog.close();
    dialog.addEventListener('close', () => { dialog.remove(); previous?.focus?.(); resolve(selected); }, { once: true });
    document.body.append(dialog); dialog.showModal(); input.focus();
  });
}
