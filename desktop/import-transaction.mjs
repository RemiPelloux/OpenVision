import { mkdir, readFile, writeFile, copyFile, rename, rm } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { dirname, join, relative, resolve } from 'node:path';
import { safeDestination, fileHash, inside } from './import-files.mjs';
import { summarize } from './cursor-import.mjs';
import { importDestinations, safeImportDestination, destinationOwner, sameImportDestinations } from './import-destinations.mjs';
import { samePath } from './platform.mjs';

export async function replaceFile(temporary, path, { expectedHash, renameFile = rename } = {}) {
  const retries = 5;
  for (let attempt = 0; ; attempt++) {
    if (expectedHash !== undefined && await fileHash(path) !== expectedHash)
      throw new Error(`File changed during atomic replacement: ${path}`);
    try { await renameFile(temporary, path); return; }
    catch (error) {
      if (attempt === retries || !['EPERM', 'EACCES', 'EBUSY'].includes(error.code)) throw error;
      // Windows scanners briefly open the extension registry without delete sharing.
      await new Promise(resolve => setTimeout(resolve, 50 * (attempt + 1)));
    }
  }
}

async function atomicWrite(path, data, expectedHash) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.openvision-${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, data, { flag: 'wx' });
    await replaceFile(temporary, path, { expectedHash });
  } finally { await rm(temporary, { force: true }); }
}

async function checkFiles(destinations, changes, hashField) {
  for (const change of changes) {
    await safeImportDestination(destinations, change.path);
    if (await fileHash(change.path) !== change[hashField])
      throw new Error(`File changed since the preview or import: ${change.path}`);
  }
}

async function atomicCopy(path, source, expectedHash, beforeHash) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.openvision-${randomUUID()}.tmp`;
  try {
    await copyFile(source, temporary, 1);
    if (await fileHash(temporary) !== expectedHash) throw new Error(`Source changed since preview or backup: ${source}`);
    await replaceFile(temporary, path, { expectedHash: beforeHash });
  } finally { await rm(temporary, { force: true }); }
}

export async function applyImport(plan) {
  if (!plan.changes.length) return { ...summarize(plan), backup: null };
  const destinations = importDestinations(plan.root, plan.destinations);
  await checkFiles(destinations, plan.changes, 'before');
  const backup = join(destinations.backups, randomUUID());
  await safeDestination(destinations.backupsRoot, backup);
  await mkdir(backup, { recursive: true });
  const records = [];
  for (const [index, change] of plan.changes.entries()) {
    const original = change.before ? `${index}.bin` : null;
    if (original) await atomicCopy(join(backup, original), change.path, change.before);
    const owner = destinationOwner(destinations, change.path);
    records.push({ owner, path: relative(destinations[owner], change.path), before: change.before, after: change.after, original });
  }
  const manifest = { version: 2, root: plan.root, destinations, createdAt: new Date().toISOString(), status: 'prepared', records };
  const manifestPath = join(backup, 'manifest.json');
  await atomicWrite(manifestPath, JSON.stringify(manifest, null, 2));
  const written = [];
  try {
    for (const change of plan.changes) {
      await checkFiles(destinations, [change], 'before');
      if (change.data) await atomicWrite(change.path, change.data, change.before);
      else await atomicCopy(change.path, change.source, change.after, change.before);
      written.push(change.path);
    }
    manifest.status = 'complete';
    await atomicWrite(manifestPath, JSON.stringify(manifest, null, 2));
  } catch (error) {
    manifest.records = records.filter(record => written.includes(join(destinations[record.owner], record.path)));
    manifest.status = 'partial';
    await atomicWrite(manifestPath, JSON.stringify(manifest, null, 2));
    try { await restoreImport(plan.root, backup, destinations); }
    catch (rollback) { throw new Error(`${error.message}; restore failed: ${rollback.message}. Backup: ${backup}`); }
    throw new Error(`${error.message}. Import rolled back; backup: ${backup}`);
  }
  return { ...summarize(plan), backup };
}

export async function restoreImport(root, input, selected) {
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
  if (![1, 2].includes(manifest.version) || typeof manifest.root !== 'string' || !samePath(resolve(manifest.root), resolve(root)) || !Array.isArray(manifest.records) ||
      !['complete', 'partial', 'prepared', 'restored'].includes(manifest.status)) throw new Error('Invalid import backup.');
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
    if ((source ? await fileHash(source) : null) !== record.before) throw new Error('Import backup content does not match its digest.');
    changes.push({ ...record, path, source });
  }
  if (manifest.status === 'restored') return { restored: 0, backup };
  const pending = [];
  for (const change of changes) {
    await safeImportDestination(destinations, change.path);
    const hash = await fileHash(change.path);
    if (hash === change.before) continue;
    if (hash !== change.after) throw new Error(`Restore would overwrite a newer edit: ${change.path}`);
    pending.push(change);
  }
  for (const change of pending) {
    await checkFiles(destinations, [change], 'after');
    if (change.source) await atomicCopy(change.path, change.source, change.before, change.after);
    else await rm(change.path);
  }
  manifest.status = 'restored';
  await atomicWrite(join(backup, 'manifest.json'), JSON.stringify(manifest, null, 2));
  return { restored: pending.length, backup };
}
