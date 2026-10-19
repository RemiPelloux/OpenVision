import { createHash, randomUUID } from 'node:crypto';
import { readdir, readFile, rename, stat, writeFile, rm } from 'node:fs/promises';
import { basename, join } from 'node:path';

// Startup recovery guidance (OV-1004). The runtime already survives these
// faults without destroying data: an unreadable state.vscdb is renamed to
// state.vscdb.corrupted.<time> and replaced; an invalid settings.json, argv.json
// or mcp.json is left untouched and ignored. Until now nothing told the user.
// This module only inspects: it never modifies, moves or deletes a profile
// file. Acknowledged findings are remembered in one owned file so a dismissed
// notice does not return until the evidence changes.

export const acknowledgementFile = 'openvision-recovery-acknowledged.json';
const quarantined = /^state\.vscdb\.corrupted\.\d+$/;

// Tolerant JSONC check matching the runtime's readers: comments and trailing
// commas are allowed. Returns undefined when valid, else { line, column, message }.
export function jsoncError(text, kind = 'object') {
  let output = '', index = 0;
  const source = text.replace(/^﻿/, '');
  while (index < source.length) {
    const char = source[index], next = source[index + 1];
    if (char === '"') {
      let end = index + 1;
      while (end < source.length && source[end] !== '"') end += source[end] === '\\' ? 2 : 1;
      output += source.slice(index, end + 1); index = end + 1;
    } else if (char === '/' && next === '/') {
      while (index < source.length && source[index] !== '\n') { output += ' '; index++; }
    } else if (char === '/' && next === '*') {
      const end = source.indexOf('*/', index + 2), stop = end < 0 ? source.length : end + 2;
      output += source.slice(index, stop).replace(/[^\n]/g, ' '); index = stop;
    } else { output += char; index++; }
  }
  const withoutTrailing = output.replace(/,(\s*[}\]])/g, ' $1');
  if (!withoutTrailing.trim()) return undefined; // An empty file is treated as {} by the runtime.
  try {
    const value = JSON.parse(withoutTrailing);
    if (!value || typeof value !== 'object' || Array.isArray(value) !== (kind === 'array')) return { line: 1, column: 1, message: `Expected a JSON ${kind}` };
  } catch (error) {
    const position = Number(/position (\d+)/.exec(error.message)?.[1] ?? withoutTrailing.length);
    const before = withoutTrailing.slice(0, position).split('\n');
    return { line: before.length, column: before.at(-1).length + 1, message: error.message.replace(/ in JSON at position \d+.*$/, '').slice(0, 120) };
  }
}

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');

async function jsonFinding(path, store, effect, fix, kind) {
  let bytes;
  try { bytes = await readFile(path); } catch { return; }
  const error = jsoncError(bytes.toString('utf8'), kind);
  if (!error) return;
  return { id: `invalid-json:${path}:${sha256(bytes)}`, kind: 'invalid-json', store, path,
    title: `${store} is not valid JSON (line ${error.line}, column ${error.column}).`,
    detail: `${effect} OpenVision did not change the file. ${fix}` };
}

async function quarantineFindings(directory, store) {
  const found = [];
  for (const name of await readdir(directory).catch(() => [])) {
    if (!quarantined.test(name)) continue;
    const path = join(directory, name), info = await stat(path).catch(() => undefined);
    if (!info?.isFile()) continue;
    found.push({ id: `quarantined-storage:${path}:${info.size}:${Math.trunc(info.mtimeMs)}`, kind: 'quarantined-storage', store, path,
      title: `${store} could not be opened and was moved aside.`,
      detail: `The unreadable file was kept unchanged as ${name}. OpenVision started with its backup copy if one existed, otherwise with empty storage, ` +
        'so providers, API keys, chats, rules and reviews saved in it may be missing. Quit OpenVision before restoring a copy; see the recovery guide (Corrupt profile).' });
  }
  return found;
}

// `userDataDir` is --user-data-dir; the profile home holds argv.json.
export async function inspectProfile({ userDataDir, profileHome = join(userDataDir, 'User'), dataFolderName = '.openvision-local' }) {
  const user = join(userDataDir, 'User');
  const findings = [...await quarantineFindings(join(user, 'globalStorage'), 'Profile storage (globalStorage/state.vscdb)')];
  for (const entry of await readdir(join(user, 'workspaceStorage')).catch(() => []))
    findings.push(...await quarantineFindings(join(user, 'workspaceStorage', entry), `Workspace storage (workspaceStorage/${entry}/state.vscdb)`));
  for (const finding of await Promise.all([
    jsonFinding(join(user, 'settings.json'), 'User settings.json', 'Settings in it are ignored until it is fixed.',
      'Fix it with "Preferences: Open User Settings (JSON)".'),
    jsonFinding(join(user, 'keybindings.json'), 'keybindings.json', 'Custom keybindings in it are ignored until it is fixed.',
      'Fix it with "Preferences: Open Keyboard Shortcuts (JSON)".', 'array'),
    jsonFinding(join(profileHome, dataFolderName, 'argv.json'), 'argv.json', 'Runtime arguments fall back to their defaults.',
      'Fix it with "Preferences: Configure Runtime Arguments".'),
    jsonFinding(join(user, 'mcp.json'), 'User mcp.json', 'MCP servers configured in it are not started.',
      'Fix it in Settings > Tools & MCP or edit the file.'),
  ])) if (finding) findings.push(finding);
  const acknowledged = await readAcknowledged(userDataDir);
  return findings.filter(finding => !acknowledged.has(finding.id));
}

export async function readAcknowledged(userDataDir) {
  try {
    const value = JSON.parse(await readFile(join(userDataDir, acknowledgementFile), 'utf8'));
    return new Set(Array.isArray(value?.acknowledged) ? value.acknowledged.filter(id => typeof id === 'string') : []);
  } catch { return new Set(); }
}

// Only ids that are current findings can be acknowledged. Written to a sibling
// temporary file and renamed, so a failed write never leaves a torn record.
export async function acknowledge({ userDataDir, ids, current }) {
  const valid = new Set(current.map(finding => finding.id));
  const next = [...new Set([...await readAcknowledged(userDataDir), ...ids.filter(id => valid.has(id))])].slice(-200);
  const path = join(userDataDir, acknowledgementFile), temporary = `${path}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporary, JSON.stringify({ version: 1, acknowledged: next }, null, 2) + '\n', { flag: 'wx' });
    await rename(temporary, path);
  } catch (error) { await rm(temporary, { force: true }); throw error; }
  return next.length;
}

export const describeFinding = finding => ({ ...finding, file: basename(finding.path) });
