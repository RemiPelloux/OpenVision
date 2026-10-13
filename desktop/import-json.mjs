import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { parse, modify, applyEdits } = require('../tooling/node_modules/jsonc-parser');
export const telemetrySettings = Object.freeze({
  'telemetry.telemetryLevel': 'off', 'telemetry.enableTelemetry': false,
  'telemetry.enableCrashReporter': false, 'telemetry.feedback.enabled': false,
});
export const localSettings = {
  'window.title': 'OpenVision - ${rootName}${separator}${activeEditorShort}',
  'update.mode': 'none', 'extensions.autoUpdate': false,
  'workbench.startupEditor': 'none', 'cursor.general.disableHttp2': true,
  ...telemetrySettings,
};
export const protectedSettings = new Set(Object.keys(localSettings));

export function parseConfiguration(text, kind = 'object') {
  const errors = [];
  const value = parse(text.replace(/^\uFEFF/, ''), errors, { allowTrailingComma: true });
  const valid = kind === 'array' ? Array.isArray(value) : value && typeof value === 'object' && !Array.isArray(value);
  if (errors.length || !valid) throw new Error(`Expected a valid JSONC ${kind}.`);
  return value;
}

export function mergeSettings(source, destination = '{}\n', overwrite = true) {
  const incoming = parseConfiguration(source);
  const existing = parseConfiguration(destination);
  let result = destination;
  for (const [key, value] of Object.entries(localSettings))
    if (!Object.hasOwn(existing, key) || Object.hasOwn(telemetrySettings, key)) result = setSetting(result, key, value);
  for (const [key, value] of Object.entries(incoming)) {
    if (protectedSettings.has(key) || (!overwrite && Object.hasOwn(existing, key))) continue;
    if (JSON.stringify(existing[key]) === JSON.stringify(value)) continue;
    result = setSetting(result, key, value);
  }
  return result;
}

export function setSetting(text, key, value) {
  return applyEdits(text, modify(text, [key], value, {
    formattingOptions: { insertSpaces: true, tabSize: 2, eol: '\n' },
  }));
}

export function mergeKeybindings(source, destination = '[]\n', overwrite = true) {
  const incoming = parseConfiguration(source, 'array');
  const existing = parseConfiguration(destination, 'array');
  const identity = binding => JSON.stringify([binding.key, binding.when ?? '']);
  for (const binding of [...incoming, ...existing])
    if (!binding || typeof binding.key !== 'string' || typeof binding.command !== 'string')
      throw new Error('Invalid keybinding: key and command must be strings.');
  const preferred = overwrite ? incoming : existing;
  const secondary = overwrite ? existing : incoming;
  const keys = new Set(preferred.map(identity));
  const merged = [...preferred, ...secondary.filter(binding => !keys.has(identity(binding)))];
  return JSON.stringify(merged) === JSON.stringify(existing) ? destination : JSON.stringify(merged, null, 2) + '\n';
}
