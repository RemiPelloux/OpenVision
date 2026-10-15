import { localSettings } from './import-json.mjs';

export const verificationSettings = Object.freeze({
  ...localSettings,
  'openvision.onboarding.showOnStartup': false,
  // Playwright synthesizes US-layout key codes. Linux/macOS otherwise resolve
  // shortcuts from the machine's physical layout (for example AZERTY Ctrl+A).
  'keyboard.dispatch': 'keyCode',
  'window.title': 'OpenVision TEST — disposable profile — ${rootName}${separator}${activeEditorShort}',
});
