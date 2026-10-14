import { dirname, isAbsolute, join, resolve } from 'node:path';
import { inside, safeDestination } from './import-files.mjs';
import { samePath } from './platform.mjs';

export function importDestinations(root, selected) {
  const value = selected ?? { user: join(root, 'data/local/User'), extensions: join(root, 'data/local-extensions'),
    backups: join(root, 'backups/cursor-import') };
  if (!value || !['user', 'extensions', 'backups'].every(key => typeof value[key] === 'string' && isAbsolute(value[key])))
    throw Error('Import destination ownership is unavailable.');
  const result = Object.fromEntries(['user', 'extensions', 'backups'].map(key => [key, resolve(value[key])]));
  const paths = Object.values(result);
  if (paths.some((path, index) => paths.some((other, next) => next !== index && inside(path, other))))
    throw Error('Import destination directories must not overlap.');
  result.userRoot = resolve(value.userRoot ?? (selected ? dirname(result.user) : root));
  result.extensionsRoot = resolve(value.extensionsRoot ?? (selected ? result.extensions : root));
  result.backupsRoot = resolve(value.backupsRoot ?? (selected ? dirname(result.backups) : root));
  if (!inside(result.userRoot, result.user) || !inside(result.extensionsRoot, result.extensions) || !inside(result.backupsRoot, result.backups))
    throw Error('Import destinations escape their owning directory.');
  return result;
}

export function selectedImportDestinations(userData, extensions) {
  if (typeof userData !== 'string' || !isAbsolute(userData) || typeof extensions !== 'string' || !isAbsolute(extensions))
    throw Error('Select both absolute user-data and extension directories.');
  return importDestinations('', { user: join(userData, 'User'), extensions, userRoot: userData, backupsRoot: userData,
    backups: join(userData, 'Backups/openvision-import') });
}

export function nativeImportDestinations(owner, sender) {
  const window = owner?.windowsMainService?.getWindows().find(window => window.win?.webContents === sender);
  const profile = window?.profile;
  if (!profile || profile.isDefault !== true) throw Error('Import requires an owned default profile; named profile destinations are not available.');
  const local = value => {
    // The native profile service owns vscode-userdata URIs backed by its local file provider.
    // Use that URI's own format-aware conversion, never a renderer-supplied path.
    if (value?.scheme === 'vscode-userdata' && typeof value.with === 'function') value = value.with({ scheme: 'file' });
    if (value?.scheme !== 'file' || typeof value.fsPath !== 'string' || !isAbsolute(value.fsPath))
      throw Error('Import profile resource ownership is unavailable.');
    return resolve(value.fsPath);
  };
  const user = dirname(local(profile.settingsResource));
  for (const [key, name] of [['settingsResource', 'settings.json'], ['keybindingsResource', 'keybindings.json'],
    ['tasksResource', 'tasks.json'], ['snippetsHome', 'snippets']])
    if (!samePath(local(profile[key]), join(user, name))) throw Error('Import profile resources have unsupported ownership.');
  const environment = owner.environmentMainService;
  const destinations = selectedImportDestinations(environment?.userDataPath, environment?.extensionsPath);
  if (!samePath(user, destinations.user)) throw Error('Import profile settings have unsupported ownership.');
  if (!samePath(local(profile.extensionsResource), join(destinations.extensions, 'extensions.json')))
    throw Error('Import extension registry ownership is unavailable.');
  return destinations;
}

export function destinationOwner(destinations, path) {
  const entry = ['user', 'extensions'].find(key => inside(destinations[key], path) && resolve(path) !== destinations[key]);
  if (!entry) throw Error('Import backup destination escapes the profile or extensions directory.');
  return entry;
}

export async function safeImportDestination(destinations, path) {
  const owner = destinationOwner(destinations, path);
  await safeDestination(destinations[`${owner}Root`], path);
}

export function sameImportDestinations(left, right) {
  return ['user', 'extensions', 'backups', 'userRoot', 'extensionsRoot', 'backupsRoot'].every(key => samePath(left[key], right[key]));
}
