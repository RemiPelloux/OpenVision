import { importCursor } from './openvision-import-ui.js';
import { showWelcomeScreen } from './openvision-welcome-screen.js';
import { showOnboarding, maybeShowOnboarding } from './openvision-onboarding.js';

const storageKey = 'openvision.local-profile.v1';
let profile;
try { profile = JSON.parse(localStorage.getItem(storageKey)); } catch {}
if (!profile?.id || typeof profile.name !== 'string') profile = { id: crypto.randomUUID(), name: 'Local Profile' };
localStorage.setItem(storageKey, JSON.stringify(profile));

function editProfile() {
  const dialog = document.createElement('dialog');
  dialog.className = 'openvision-profile-dialog';
  const heading = document.createElement('h2');
  heading.textContent = 'OpenVision Profile';
  const label = document.createElement('label');
  label.textContent = 'Display Name';
  const input = document.createElement('input');
  input.setAttribute('aria-label', 'Display Name');
  input.value = profile.name;
  input.maxLength = 40;
  label.append(input);
  const save = document.createElement('button');
  save.textContent = 'Save';
  save.onclick = () => {
    profile.name = input.value.trim() || 'Local Profile';
    localStorage.setItem(storageKey, JSON.stringify(profile));
    for (const name of document.querySelectorAll('.openvision-local-profile span')) name.textContent = profile.name;
    dialog.close();
  };
  const cancel = document.createElement('button');
  cancel.textContent = 'Cancel';
  cancel.onclick = () => dialog.close();
  const welcome = document.createElement('button');
  welcome.textContent = 'Welcome screen';
  welcome.onclick = () => { dialog.close(); showWelcomeScreen(); };
  const appearance = document.createElement('button');
  appearance.textContent = 'Appearance settings';
  appearance.onclick = () => { dialog.close(); void window.openvisionProjectHome?.appearance().catch(console.error); };
  const setup = document.createElement('button');
  setup.textContent = 'Run setup again';
  setup.onclick = () => { dialog.close(); showOnboarding(); };
  dialog.append(heading, label, welcome, appearance, setup, cancel, save);
  dialog.addEventListener('close', () => dialog.remove(), { once: true });
  document.body.append(dialog);
  dialog.showModal();
  input.focus();
}

function createButton() {
  const button = document.createElement('button');
  button.className = 'openvision-local-profile';
  button.title = 'Local Profile';
  const image = document.createElement('img');
  image.src = new URL('./openvision-logo.svg', import.meta.url).href;
  image.alt = '';
  const name = document.createElement('span');
  name.textContent = profile.name;
  button.append(image, name);
  button.onclick = editProfile;
  return button;
}

window.openvisionLocalProfile = { open: editProfile, createButton, importCursor, welcome: showWelcomeScreen,
  logo: new URL('./openvision-logo.svg', import.meta.url).href,
  get name() { return profile.name; } };

async function mount() {
  for (let attempt = 0; attempt < 60; attempt++) {
    const titlebar = document.querySelector('.part.titlebar .titlebar-right') ?? document.querySelector('.part.titlebar');
    if (titlebar) {
      titlebar.prepend(createButton());
      const projects = document.createElement('button');
      projects.className = 'openvision-project-home-button';
      projects.textContent = 'Projects'; projects.title = 'Project home'; projects.onclick = showWelcomeScreen;
      titlebar.prepend(projects);
      const openEmptyHome = () => {
        void window.openvisionProjectHome?.showOnStartup().then(show => {
          if (show) showWelcomeScreen();
          maybeShowOnboarding();
        }).catch(console.error);
      };
      if (window.openvisionProjectHome) openEmptyHome();
      else window.addEventListener('openvision-project-home-ready', openEmptyHome, { once: true });
      return;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}
void mount();
