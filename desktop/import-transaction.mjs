import { mkdir, writeFile, copyFile, rename, rm, readdir, rmdir, lstat, constants } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { basename, dirname, join, relative, resolve } from 'node:path';
import { safeDestination, fileHash } from './import-files.mjs';
import { summarize } from './cursor-import.mjs';
import { importDestinations, safeImportDestination, destinationOwner } from './import-destinations.mjs';
import { prepareImportRestore, listImportBackups, readImportBackup } from './import-backup.mjs';

// Import and restore are two-phase. Every new byte is first written to a sibling
// temporary, so a full or read-only volume fails before any destination changes.
// Only the commit renames change destinations; the backup manifest records the
// transaction first, so an interrupted commit is rolled back on the next start.
const temporarySuffix = /\.openvision-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.tmp$/;
const temporaryPath = path => `${path}.openvision-${randomUUID()}.tmp`;

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

async function atomicWrite(path, data) {
  const temporary = temporaryPath(path);
  try {
    await writeFile(temporary, data, { flag: 'wx', flush: true });
    await replaceFile(temporary, path);
  } finally { await rm(temporary, { force: true }).catch(() => {}); }
}
const writeManifest = (backup, manifest) => atomicWrite(join(backup, 'manifest.json'), JSON.stringify(manifest, null, 2));

async function checkFiles(destinations, changes, hashField) {
  for (const change of changes) {
    await safeImportDestination(destinations, change.path);
    if (await fileHash(change.path) !== change[hashField])
      throw new Error(`File changed since the preview or import: ${change.path}`);
  }
}

// Node's recursive mkdir reports a read-only (or otherwise unwritable) parent as ENOENT.
// Retry the first missing level without recursion so the error names the real cause.
async function makeDirectory(path) {
  try { return await mkdir(path, { recursive: true }); }
  catch (error) {
    if (error.code !== 'ENOENT') throw error;
    let missing = path;
    while (dirname(missing) !== missing && !await lstat(dirname(missing)).then(() => true, () => false)) missing = dirname(missing);
    if (dirname(missing) === missing) throw error;
    const created = await mkdir(missing).then(() => missing, cause => { if (cause.code !== 'EEXIST') throw cause; });
    const deeper = await mkdir(path, { recursive: true });
    return created ?? deeper;
  }
}

async function stage(path, write, expectedHash, created) {
  const made = await makeDirectory(dirname(path));
  if (made) created.push(made);
  const temporary = temporaryPath(path);
  try {
    await write(temporary);
    if (await fileHash(temporary) !== expectedHash) throw new Error(`Source changed since preview or backup: ${path}`);
    return temporary;
  } catch (error) { await rm(temporary, { force: true }).catch(() => {}); throw error; }
}
const writeData = data => temporary => writeFile(temporary, data, { flag: 'wx', flush: true });
const copySource = source => temporary => copyFile(source, temporary, constants.COPYFILE_EXCL);

async function pruneEmpty(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true }))
    if (entry.isDirectory() && !entry.isSymbolicLink()) await pruneEmpty(join(directory, entry.name));
  await rmdir(directory).catch(error => { if (!['ENOTEMPTY', 'EEXIST'].includes(error.code)) throw error; });
}
// Failure cleanup never masks the original error; a read-only volume has nothing to remove.
async function discard(temporaries, created) {
  for (const temporary of temporaries) if (temporary) await rm(temporary, { force: true }).catch(() => {});
  for (const directory of created.reverse()) await pruneEmpty(directory).catch(() => {});
}

// Directories an import creates, so restore can remove them again when empty.
async function missingDirectories(destinations, changes) {
  const missing = new Map();
  for (const change of changes) {
    const owner = destinationOwner(destinations, change.path);
    for (let directory = dirname(change.path); directory !== destinations[owner]; directory = dirname(directory)) {
      if (await lstat(directory).then(() => true, error => { if (error.code === 'ENOENT') return false; throw error; })) break;
      missing.set(directory, { owner, path: relative(destinations[owner], directory) });
    }
  }
  return [...missing.values()];
}
async function pruneDirectories(destinations, directories = []) {
  const paths = directories.map(entry => resolve(destinations[entry.owner], entry.path)).sort((left, right) => right.length - left.length);
  for (const path of paths) {
    await safeImportDestination(destinations, path);
    await rmdir(path).catch(error => { if (!['ENOENT', 'ENOTEMPTY', 'EEXIST'].includes(error.code)) throw error; });
  }
}

// Identifies the process committing a transaction, so recovery never rolls back
// an import that another live OpenVision process is still applying.
function startTime(pid) {
  if (process.platform !== 'linux') return undefined;
  try {
    const text = readFileSync(`/proc/${pid}/stat`, 'utf8');
    return text.slice(text.lastIndexOf(')') + 2).split(' ')[19];
  } catch { return undefined; }
}
const processIdentity = () => ({ pid: process.pid, started: startTime(process.pid) });
function processAlive(owner) {
  if (!Number.isInteger(owner?.pid) || owner.pid <= 0) return false;
  if (owner.pid === process.pid) return owner.started === startTime(process.pid);
  try { process.kill(owner.pid, 0); }
  catch (error) { if (error.code === 'ESRCH') return false; }
  return owner.started === undefined || startTime(owner.pid) === owner.started;
}

export async function applyImport(plan) {
  if (!plan.changes.length) return { ...summarize(plan), backup: null };
  const destinations = importDestinations(plan.root, plan.destinations);
  await checkFiles(destinations, plan.changes, 'before');
  const backup = join(destinations.backups, randomUUID());
  await safeDestination(destinations.backupsRoot, backup);
  const temporaries = [], created = [];
  let manifest;
  try {
    const backupParent = await makeDirectory(backup);
    if (backupParent && backupParent !== backup) created.push(backupParent);
    const records = [];
    for (const [index, change] of plan.changes.entries()) {
      const original = change.before ? `${index}.bin` : null;
      if (original) {
        await copyFile(change.path, join(backup, original), constants.COPYFILE_EXCL);
        if (await fileHash(join(backup, original)) !== change.before) throw new Error(`File changed since the preview or import: ${change.path}`);
      }
      const owner = destinationOwner(destinations, change.path);
      records.push({ owner, path: relative(destinations[owner], change.path), before: change.before, after: change.after, original });
    }
    manifest = { version: 2, root: plan.root, destinations, createdAt: new Date().toISOString(), status: 'prepared',
      process: processIdentity(), directories: await missingDirectories(destinations, plan.changes), records };
    await writeManifest(backup, manifest);
    for (const change of plan.changes)
      temporaries.push(await stage(change.path, change.data ? writeData(change.data) : copySource(change.source), change.after, created));
  } catch (error) {
    await rm(backup, { recursive: true, force: true }).catch(() => {});
    await discard(temporaries, created);
    throw new Error(`Import failed before changing any file: ${error.message}`, { cause: error });
  }
  try {
    for (const [index, change] of plan.changes.entries()) {
      await safeImportDestination(destinations, change.path);
      await replaceFile(temporaries[index], change.path, { expectedHash: change.before });
      temporaries[index] = undefined;
    }
    manifest.status = 'complete'; delete manifest.process;
    await writeManifest(backup, manifest);
  } catch (error) {
    await discard(temporaries, []);
    try { await restoreImport(plan.root, backup, destinations); }
    catch (rollback) { throw new Error(`${error.message}; rollback failed: ${rollback.message}. The backup is retained for recovery: ${backup}`, { cause: error }); }
    throw new Error(`${error.message}. Import rolled back; backup: ${backup}`, { cause: error });
  }
  return { ...summarize(plan), backup };
}

export async function restoreImport(root, input, selected) {
  const prepared = await prepareImportRestore(root, input, selected), { destinations, backup, manifest } = prepared;
  // Undo newest first: imported extension directories go while the registry still
  // names them, and the registry is reverted last, so a running app never sees an
  // unregistered imported directory to adopt.
  const pending = [...prepared.pending].reverse();
  if (manifest.status === 'restored') return { restored: 0, backup };
  const temporaries = [], created = [];
  try {
    for (const change of pending)
      temporaries.push(change.source ? await stage(change.path, copySource(change.source), change.before, created) : undefined);
    manifest.status = 'restoring'; manifest.process = processIdentity();
    await writeManifest(backup, manifest);
  } catch (error) {
    await discard(temporaries, created);
    throw new Error(`Restore failed before changing any file: ${error.message}. The backup is retained: ${backup}`, { cause: error });
  }
  try {
    for (const [index, change] of pending.entries()) {
      await checkFiles(destinations, [change], 'after');
      if (temporaries[index]) await replaceFile(temporaries[index], change.path, { expectedHash: change.after });
      else await rm(change.path);
      temporaries[index] = undefined;
    }
    await pruneDirectories(destinations, manifest.directories);
    manifest.status = 'restored'; delete manifest.process;
    await writeManifest(backup, manifest);
  } catch (error) {
    await discard(temporaries, []);
    throw new Error(`Restore stopped: ${error.message}. Restore again to finish; the backup is retained: ${backup}`, { cause: error });
  }
  return { restored: pending.length, backup };
}

async function removeTemporaries(destinations, path) {
  await safeImportDestination(destinations, path);
  const name = basename(path);
  const entries = await readdir(dirname(path)).catch(error => { if (error.code === 'ENOENT') return []; throw error; });
  for (const entry of entries)
    if (entry.startsWith(`${name}.openvision-`) && temporarySuffix.test(entry)) await rm(join(dirname(path), entry), { force: true });
}

// Returns interrupted transactions of the selected destinations to their original
// state: an import stopped while committing is rolled back and a restore stopped
// while committing is finished. Transactions of a live process are left alone.
export async function recoverInterruptedImports(root, selected) {
  const destinations = importDestinations(root, selected), recovered = [];
  for (const entry of (await listImportBackups(root, destinations)).backups) {
    if (!['prepared', 'restoring'].includes(entry.status)) continue;
    try {
      const { manifest, changes } = await readImportBackup(root, entry.backup, destinations);
      if (processAlive(manifest.process)) { recovered.push({ backup: entry.backup, status: entry.status, skipped: 'owned by a running process' }); continue; }
      for (const change of changes) await removeTemporaries(destinations, change.path);
      for (const name of await readdir(entry.backup))
        if (name.startsWith('manifest.json.openvision-') && temporarySuffix.test(name)) await rm(join(entry.backup, name), { force: true });
      const { restored } = await restoreImport(root, entry.backup, destinations);
      recovered.push({ backup: entry.backup, status: entry.status, recovered: 'restored', restored });
    } catch (error) { recovered.push({ backup: entry.backup, status: entry.status, error: error.message }); }
  }
  return recovered;
}
