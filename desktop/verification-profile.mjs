import { localSettings } from './import-json.mjs';

export const verificationSettings = Object.freeze({
  ...localSettings,
  'window.title': 'OpenVision TEST — disposable profile — ${rootName}${separator}${activeEditorShort}',
});
