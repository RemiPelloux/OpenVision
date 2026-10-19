import { readFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { safeDestination, inside, fileHash } from './import-files.mjs';
import { importDestinations, destinationOwner, sameImportDestinations, safeImportDestination } from './import-destinations.mjs';
import { samePath } from './platform.mjs';

export async function readImportBackup(root, input, selected) {
  let destinations = importDestinations(root, selected);
  const backup = resolve(input);
  const legacy = importDestinations(root);
  if (samePath(destinations.user, legacy.user) && samePath(destinations.extensions, legacy.extensions) && inside(legacy.backups, backup))
    destinations = legacy;
  const owner = destinations.backups;
  if (!inside(owner, backup) || resolve(owner) === backup) throw new Error('Select an OpenVision Cursor import backup.');
  await safeDestination(destinations.backupsRoot, backup);
  await safeDestination(destinations.backupsRoot, join(backup, 'manifest.json'));
  const manifest = JSON.parse(await readFile(join(backup, 'manifest.json'), 'utf8'));
  // Version 2 ownership is its recorded destinations (compared below), so another copy
  // of OpenVision, or the verifier's overlay, can recover the same selected profile.
  if (![1, 2].includes(manifest.version) || typeof manifest.root !== 'string' ||
      (manifest.version === 1 && !samePath(resolve(manifest.root), resolve(root))) || !Array.isArray(manifest.records) ||
      !['complete', 'partial', 'prepared', 'restoring', 'restored'].includes(manifest.status) ||
      (manifest.directories !== undefined && !Array.isArray(manifest.directories))) throw new Error('Invalid import backup.');
  const expected = manifest.version === 1 ? legacy : importDestinations(root, manifest.destinations);
  if (!sameImportDestinations(expected, destinations)) throw Error('Import backup belongs to a different profile or extensions directory.');
  const changes = [];
  const seen = new Set();
  for (const record of manifest.records) {
    if (typeof record.path !== 'string' || (manifest.version === 1 && !/^data[\\/](local[\\/]User[\\/]|local-extensions[\\/])/.test(record.path)) ||
        (manifest.version === 2 && !['user', 'extensions'].includes(record.owner)) ||
        !/^[a-f0-9]{64}$/.test(record.after) || (record.before !== null && !/^[a-f0-9]{64}$/.test(record.before)) ||
        (record.original !== null && !/^\d+\.bin$/.test(record.original))) throw new Error('Invalid import backup record.');
    const base = manifest.version === 1 ? root : destinations[record.owner];
    const path = resolve(base, record.path);
    if (manifest.version === 2 && (!inside(base, path) || path === base))
      throw new Error('Import backup destination escapes the profile or extensions directory.');
    destinationOwner(destinations, path);
    if (seen.has(process.platform === 'win32' ? path.toLowerCase() : path)) throw Error('Duplicate import backup destination.');
    seen.add(process.platform === 'win32' ? path.toLowerCase() : path);
    const source = record.original ? join(backup, record.original) : undefined;
    if (source) await safeDestination(backup, source);
    if ((record.before === null) !== (record.original === null)) throw Error('Invalid import backup original.');
    changes.push({ ...record, path, source });
  }
  for (const entry of manifest.directories ?? []) {
    const base = destinations[entry?.owner];
    if (!['user', 'extensions'].includes(entry?.owner) || typeof entry.path !== 'string' || !inside(base, resolve(base, entry.path)) ||
        resolve(base, entry.path) === base) throw new Error('Invalid import backup directory record.');
  }
  return { destinations, backup, manifest, changes };
}

export async function prepareImportRestore(root, input, selected) {
  const loaded = await readImportBackup(root, input, selected), pending = [];
  for (const change of loaded.changes) {
    if ((change.source ? await fileHash(change.source) : null) !== change.before)
      throw Error('Import backup content does not match its digest.');
    await safeImportDestination(loaded.destinations, change.path);
    if (loaded.manifest.status === 'restored') continue;
    const hash = await fileHash(change.path);
    if (hash === change.before) continue;
    if (hash !== change.after) throw Error(`Restore would overwrite a newer edit: ${change.path}`);
    pending.push(change);
  }
  return { ...loaded, pending };
}

export async function previewImportRestore(root, input, selected) {
  const { backup, manifest, changes, pending, destinations } = await prepareImportRestore(root, input, selected);
  return { backup, status: manifest.status, destination: destinations.user, extensionsDestination: destinations.extensions,
    files: changes.length, pending: pending.length, paths: pending.map(change => change.path) };
}

export async function listImportBackups(root, selected) {
  const destinations = importDestinations(root, selected);
  await safeDestination(destinations.backupsRoot, destinations.backups);
  const entries = await readdir(destinations.backups, { withFileTypes: true }).catch(error => {
    if (error.code === 'ENOENT') return []; throw error;
  });
  const backups = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.isSymbolicLink()) continue;
    const backup = join(destinations.backups, entry.name);
    try {
      const { manifest, changes } = await readImportBackup(root, backup, destinations);
      // prepared/restoring: stopped while committing, or still running in another process.
      backups.push({ backup, status: manifest.status, files: changes.length, verifiedContents: false,
        interrupted: ['prepared', 'restoring'].includes(manifest.status) });
    } catch (error) { backups.push({ backup, status: 'invalid', error: error.message }); }
  }
  return { directory: destinations.backups, destination: destinations.user, extensionsDestination: destinations.extensions,
    backups: backups.sort((left, right) => left.backup.localeCompare(right.backup)) };
}
