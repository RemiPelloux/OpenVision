import { readdir, readFile, lstat } from 'node:fs/promises';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { processFamily } from './process-family-linux.mjs';

// Secret-placement checks for OV-304. Read-only: files are read, /proc is read,
// and state.vscdb is opened read-only. Findings carry paths and secret kinds,
// never the secret values.

// mcpOAuth.secret.<base64url(logical key)> rows hold encryptionMainService
// output (a JSON-serialized Buffer from safeStorage); mcpOAuth.global.* rows
// hold plain JSON values.
export function decodeOAuthRow(key, value) {
  const match = /^mcpOAuth\.(secret|global)\.(.+)$/.exec(key);
  if (!match) return undefined;
  let logical;
  try { logical = Buffer.from(match[2], 'base64url').toString('utf8'); } catch { logical = match[2]; }
  const text = Buffer.isBuffer(value) || value instanceof Uint8Array ? Buffer.from(value).toString('utf8') : String(value ?? '');
  const row = { key, kind: match[1], logical, bytes: Buffer.byteLength(text) };
  if (row.kind === 'secret') {
    try {
      const parsed = JSON.parse(text);
      if (parsed?.type === 'Buffer' && Array.isArray(parsed.data)) {
        row.data = parsed.data; row.encryptedPrefix = Buffer.from(parsed.data.slice(0, 3)).toString('latin1');
      } else row.encryptedPrefix = null;
    } catch { row.encryptedPrefix = null; }
  }
  return row;
}

export async function readOAuthRows(database) {
  try { await lstat(database); } catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  const db = new DatabaseSync(database, { readOnly: true });
  try {
    return db.prepare("SELECT key, value FROM ItemTable WHERE key LIKE 'mcpOAuth.%'").all()
      .map(({ key, value }) => decodeOAuthRow(key, value)).filter(Boolean);
  } finally { db.close(); }
}

export function encodings(value) {
  const unique = new Map();
  for (const [name, bytes] of [['utf8', Buffer.from(value, 'utf8')], ['utf16le', Buffer.from(value, 'utf16le')],
    ['base64', Buffer.from(Buffer.from(value, 'utf8').toString('base64').replace(/=+$/, ''), 'utf8')],
    ['base64url', Buffer.from(Buffer.from(value, 'utf8').toString('base64url'), 'utf8')]])
    if (![...unique.values()].some(existing => existing.equals(bytes))) unique.set(name, bytes);
  return [...unique];
}

async function* walk(directory) {
  let entries;
  try { entries = await readdir(directory, { withFileTypes: true }); } catch (error) { if (error.code === 'ENOENT') return; throw error; }
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (entry.isFile()) yield path;
  }
}

// Whether every UTF-8 occurrence of `value` in `buffer` is the value of the JSON
// environment entry `"<name>":"<value>"` (a persisted copy of the variable itself).
export function onlyEnvironmentEntries(buffer, name, value) {
  const needle = Buffer.from(value, 'utf8'), prefix = Buffer.from(`"${name}":"`, 'utf8');
  let found = false;
  for (let index = buffer.indexOf(needle); index >= 0; index = buffer.indexOf(needle, index + 1)) {
    found = true;
    if (index < prefix.length || !buffer.subarray(index - prefix.length, index).equals(prefix)) return false;
  }
  return found;
}

// Scan every regular file under `roots`, the extra `files`, and the argv of
// `pids` for each [kind, value, options] secret in several encodings.
// `options.environmentName` marks hits that are only that variable's JSON
// environment entry, so callers can separate them from other copies.
export async function scanForSecrets({ roots = [], files = [], secrets, pids = [] }) {
  const needles = secrets.flatMap(([kind, value, options = {}]) => encodings(value).map(([encoding, bytes]) =>
    ({ kind, encoding, bytes, value, environmentName: options.environmentName })));
  const hits = [], summary = { files: 0, bytes: 0, processes: 0, secrets: {} };
  for (const [kind] of secrets) summary.secrets[kind] = (summary.secrets[kind] ?? 0) + 1;
  const check = (label, buffer) => {
    for (const needle of needles) if (buffer.includes(needle.bytes)) {
      const hit = { where: label, kind: needle.kind, encoding: needle.encoding };
      if (needle.environmentName && needle.encoding === 'utf8')
        hit.environmentEntryOnly = onlyEnvironmentEntries(buffer, needle.environmentName, needle.value);
      hits.push(hit);
    }
  };
  const seen = new Set();
  const visit = async path => {
    if (seen.has(path)) return; seen.add(path);
    const buffer = await readFile(path).catch(error => { if (error.code === 'ENOENT') return undefined; throw error; });
    if (!buffer) return;
    summary.files++; summary.bytes += buffer.length; check(path, buffer);
  };
  for (const root of roots) for await (const path of walk(root)) await visit(path);
  for (const path of files) await visit(path);
  for (const pid of pids) {
    const cmdline = await readFile(`/proc/${pid}/cmdline`).catch(() => undefined);
    if (!cmdline) continue;
    summary.processes++; check(`/proc/${pid}/cmdline`, cmdline);
  }
  return { hits, summary };
}

export async function familyPids(rootPid) {
  return (await processFamily({ rootPid })).map(item => item.pid);
}
