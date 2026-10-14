import { mkdir, writeFile, copyFile, rename, rm } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { dirname, join, relative } from 'node:path';
import { safeDestination, fileHash } from './import-files.mjs';
import { summarize } from './cursor-import.mjs';
import { importDestinations, safeImportDestination, destinationOwner } from './import-destinations.mjs';
import { prepareImportRestore } from './import-backup.mjs';

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
  const { destinations, backup, manifest, pending } = await prepareImportRestore(root, input, selected);
  if (manifest.status === 'restored') return { restored: 0, backup };
  for (const change of pending) {
    await checkFiles(destinations, [change], 'after');
    if (change.source) await atomicCopy(change.path, change.source, change.before, change.after);
    else await rm(change.path);
  }
  manifest.status = 'restored';
  await atomicWrite(join(backup, 'manifest.json'), JSON.stringify(manifest, null, 2));
  return { restored: pending.length, backup };
}
