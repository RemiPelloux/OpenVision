import { mkdir, readFile, writeFile, copyFile, rename, rm } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { dirname, join, relative, resolve } from 'node:path';
import { safeDestination, fileHash, inside } from './import-files.mjs';
import { summarize } from './cursor-import.mjs';

async function atomicWrite(path, data) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.openvision-${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, data, { flag: 'wx' });
    await rename(temporary, path);
  } finally { await rm(temporary, { force: true }); }
}

async function checkFiles(root, changes, hashField) {
  for (const change of changes) {
    await safeDestination(root, change.path);
    if (await fileHash(change.path) !== change[hashField])
      throw new Error(`File changed since the preview or import: ${change.path}`);
  }
}

async function atomicCopy(path, source, expectedHash) {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.openvision-${randomUUID()}.tmp`;
  try {
    await copyFile(source, temporary, 1);
    if (await fileHash(temporary) !== expectedHash) throw new Error(`Source changed since preview or backup: ${source}`);
    await rename(temporary, path);
  } finally { await rm(temporary, { force: true }); }
}

export async function applyImport(plan) {
  if (!plan.changes.length) return { ...summarize(plan), backup: null };
  await checkFiles(plan.root, plan.changes, 'before');
  const backup = join(plan.root, 'backups/cursor-import', randomUUID());
  await safeDestination(plan.root, backup);
  await mkdir(backup, { recursive: true });
  const records = [];
  for (const [index, change] of plan.changes.entries()) {
    const original = change.before ? `${index}.bin` : null;
    if (original) await atomicCopy(join(backup, original), change.path, change.before);
    records.push({ path: relative(plan.root, change.path), before: change.before, after: change.after, original });
  }
  const manifest = { version: 1, root: plan.root, createdAt: new Date().toISOString(), status: 'prepared', records };
  const manifestPath = join(backup, 'manifest.json');
  await atomicWrite(manifestPath, JSON.stringify(manifest, null, 2));
  const written = [];
  try {
    for (const change of plan.changes) {
      await checkFiles(plan.root, [change], 'before');
      if (change.data) await atomicWrite(change.path, change.data);
      else await atomicCopy(change.path, change.source, change.after);
      written.push(change.path);
    }
    manifest.status = 'complete';
    await atomicWrite(manifestPath, JSON.stringify(manifest, null, 2));
  } catch (error) {
    manifest.records = records.filter(record => written.includes(join(plan.root, record.path)));
    manifest.status = 'partial';
    await atomicWrite(manifestPath, JSON.stringify(manifest, null, 2));
    try { await restoreImport(plan.root, backup); }
    catch (rollback) { throw new Error(`${error.message}; restore failed: ${rollback.message}. Backup: ${backup}`); }
    throw new Error(`${error.message}. Import rolled back; backup: ${backup}`);
  }
  return { ...summarize(plan), backup };
}

export async function restoreImport(root, input) {
  const backup = resolve(input);
  const owner = join(root, 'backups/cursor-import');
  if (!inside(owner, backup) || resolve(owner) === backup) throw new Error('Select an OpenVision Cursor import backup.');
  await safeDestination(root, backup);
  const manifest = JSON.parse(await readFile(join(backup, 'manifest.json'), 'utf8'));
  if (manifest.version !== 1 || resolve(manifest.root) !== resolve(root) || !Array.isArray(manifest.records) ||
      !['complete', 'partial', 'prepared', 'restored'].includes(manifest.status)) throw new Error('Invalid import backup.');
  if (manifest.status === 'restored') return { restored: 0, backup };
  const changes = [];
  for (const record of manifest.records) {
    if (typeof record.path !== 'string' || !/^data[\\/](local[\\/]User[\\/]|local-extensions[\\/])/.test(record.path) ||
        !/^[a-f0-9]{64}$/.test(record.after) || (record.before !== null && !/^[a-f0-9]{64}$/.test(record.before)) ||
        (record.original !== null && !/^\d+\.bin$/.test(record.original))) throw new Error('Invalid import backup record.');
    const path = resolve(root, record.path);
    if (![join(root, 'data/local/User'), join(root, 'data/local-extensions')].some(directory => inside(directory, path)))
      throw new Error('Import backup destination escapes the profile or extensions directory.');
    const source = record.original ? join(backup, record.original) : undefined;
    if ((source ? await fileHash(source) : null) !== record.before) throw new Error('Import backup content does not match its digest.');
    changes.push({ ...record, path, source });
  }
  const pending = [];
  for (const change of changes) {
    await safeDestination(root, change.path);
    const hash = await fileHash(change.path);
    if (hash === change.before) continue;
    if (hash !== change.after) throw new Error(`Restore would overwrite a newer edit: ${change.path}`);
    pending.push(change);
  }
  for (const change of pending) {
    await checkFiles(root, [change], 'after');
    if (change.source) await atomicCopy(change.path, change.source, change.before);
    else await rm(change.path);
  }
  manifest.status = 'restored';
  await atomicWrite(join(backup, 'manifest.json'), JSON.stringify(manifest, null, 2));
  return { restored: pending.length, backup };
}
