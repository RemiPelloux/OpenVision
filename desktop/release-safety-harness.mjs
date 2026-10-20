import { createServer } from 'node:http';
import { execFileSync } from 'node:child_process';
import { once } from 'node:events';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { release } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';

// Shared harness for the OV-1004 release-safety verifiers (corrupt state, crash
// recovery, authority). Each run owns a disposable profile, a controlled
// loopback model fixture and a host that leads its own process group. Processes
// are found by the run nonce in their environment or by membership of the owned
// group, and only re-identified owned processes (pid + /proc start time + group)
// are ever signalled.

export const waitFor = async (check, message, timeout = 45000, interval = 100) => {
  const deadline = Date.now() + timeout;
  for (;;) {
    const value = await check(); if (value) return value;
    if (Date.now() > deadline) throw new Error(message);
    await new Promise(resolve => setTimeout(resolve, interval));
  }
};

export function procStat(pid) {
  try {
    const text = execFileSync('cat', [`/proc/${pid}/stat`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    const fields = text.slice(text.lastIndexOf(')') + 2).split(' ');
    return { pid, comm: text.slice(text.indexOf('(') + 1, text.lastIndexOf(')')), state: fields[0],
      ppid: Number(fields[1]), pgid: Number(fields[2]), sid: Number(fields[3]), start: fields[19] };
  } catch { return undefined; }
}

export async function runIdentity(root, files) {
  return { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
    dirty: execFileSync('git', ['status', '--porcelain'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean),
    platform: process.platform, arch: process.arch, osRelease: release(), node: process.version,
    display: process.env.WAYLAND_DISPLAY ? 'wayland' : process.env.DISPLAY ? 'x11' : 'none',
    hashes: Object.fromEntries(await Promise.all(Object.entries(files).map(async ([name, path]) =>
      [name, { path, sha256: await fileHash(path).catch(() => null) }]))) };
}

export async function writeProfile(profile, settings = {}) {
  await mkdir(join(profile, 'User'), { recursive: true });
  await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
    'git.openRepositoryInParentFolders': 'never', 'files.autoSave': 'off', ...settings }, null, 2));
}

// Controlled OpenAI-compatible loopback model. `respond(payload, helpers)` decides
// each completion; by default it streams a fixed reply.
export async function modelFixture({ model = 'fixture-release', key, respond } = {}) {
  const requests = [], held = new Set();
  const server = createServer(async (request, response) => {
    if (request.url === '/v1/models') {
      response.setHeader('content-type', 'application/json');
      return response.end(JSON.stringify({ data: [{ id: model }] }));
    }
    if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    const payload = JSON.parse(Buffer.concat(chunks));
    const record = { at: Date.now(), model: payload.model, authorized: request.headers.authorization === `Bearer ${key}`,
      messages: payload.messages?.length ?? 0, tools: payload.tools?.length ?? 0 };
    requests.push(record);
    response.writeHead(200, { 'Content-Type': 'text/event-stream' });
    const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
      id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
    const finish = text => { event({ role: 'assistant', content: text }); event({}, 'stop'); response.end('data: [DONE]\n\n'); };
    const tool = (id, name, args) => {
      event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function', function: { name, arguments: JSON.stringify(args) } }] });
      event({}, 'tool_calls'); response.end('data: [DONE]\n\n');
    };
    const hold = text => {
      event({ role: 'assistant', content: text });
      held.add(response); response.on('close', () => { held.delete(response); record.closed = Date.now(); });
    };
    const toolResults = payload.messages?.filter(message => message.role === 'tool') ?? [];
    record.toolResults = toolResults.map(message => message.tool_call_id);
    const last = [...(payload.messages ?? [])].reverse().find(message => message.role === 'user');
    const prompt = typeof last?.content === 'string' ? last.content : JSON.stringify(last?.content ?? '');
    if (respond) return respond({ payload, prompt, toolResults, record, event, finish, tool, hold });
    finish('OpenVision release fixture reply.');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { server, requests, held, model, key, url: `http://127.0.0.1:${server.address().port}/v1`,
    close: async () => { for (const response of held) response.destroy(); server.closeAllConnections();
      await new Promise(resolve => server.close(resolve)); } };
}

// Launches the owned host. The host is spawned detached by Playwright, so it
// leads its own process group; that is asserted before anything is returned.
export async function launchOwned({ layout, profile, extensions, args = [], env = {}, runId, errors = [], timeout = 60000, enter = true }) {
  const environment = { ...process.env, ...env, OPENVISION_RELEASE_SAFETY_RUN: runId };
  delete environment.ELECTRON_RUN_AS_NODE;
  const app = await _electron.launch({ executablePath: layout.executable, env: environment, timeout,
    args: ['--user-data-dir', profile, '--extensions-dir', extensions ?? join(profile, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry',
      '--disable-crash-reporter', ...await linuxSandboxArguments(layout.host), ...args] });
  const child = app.process(), stat = procStat(child.pid);
  if (stat?.pgid !== child.pid) { await app.close().catch(() => {}); throw new Error('The owned host must lead its own process group'); }
  const page = await app.firstWindow(); page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout });
  if (enter) await enterWorkspace(page);
  return { app, page, child };
}

export async function closeOwned(app, exits, stage) {
  if (!app) return;
  const child = app.process(), window = app.windows()[0];
  const exited = child.exitCode === null && child.signalCode === null ? once(child, 'exit') : undefined;
  const closing = app.close();
  await window?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closing; if (exited) await exited;
  exits.push({ stage, mode: 'graceful close', pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode });
}

// Read-only inventory of this run's processes.
export async function ownedProcesses(runId, groups = []) {
  const result = [];
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry) || Number(entry) === process.pid) continue;
    const stat = procStat(Number(entry)); if (!stat) continue;
    let environment = '', cmdline = '';
    try { environment = await readFile(`/proc/${entry}/environ`, 'latin1'); } catch {}
    try { cmdline = (await readFile(`/proc/${entry}/cmdline`, 'utf8')).replaceAll('\0', ' ').slice(0, 240); } catch {}
    const byNonce = environment.includes(`OPENVISION_RELEASE_SAFETY_RUN=${runId}`), byGroup = groups.includes(stat.pgid);
    if (byNonce || byGroup) result.push({ ...stat, byNonce, byGroup, cmdline });
  }
  return result;
}

export async function survivors(runId, groups, timeout = 10000) {
  let remaining = [];
  const deadline = Date.now() + timeout;
  do {
    remaining = (await ownedProcesses(runId, groups)).filter(process => process.state !== 'Z');
    if (!remaining.length) break;
    await new Promise(resolve => setTimeout(resolve, 250));
  } while (Date.now() < deadline);
  return remaining;
}

export async function addProvider(page, { name, url, key, model }) {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  // Let the Models page finish mounting (account rows, model list) before opening
  // its dialog; a dialog opened during the first render can be replaced by it.
  const settings = page.locator('.openvision-model-settings');
  await settings.getByRole('searchbox', { name: 'Search models' }).waitFor({ timeout: 30000 });
  await page.waitForTimeout(1000);
  await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.locator('dialog').getByLabel('Provider Name', { exact: true }).waitFor({ timeout: 15000 });
  await page.getByLabel('Provider Name', { exact: true }).fill(name);
  await page.getByLabel('API Base URL', { exact: true }).fill(url);
  await page.getByLabel('API Key', { exact: true }).fill(key);
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.keyboard.press('ControlOrMeta+w');
  if (model) {
    await page.keyboard.press('ControlOrMeta+Shift+l');
    await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
    await page.getByText(model, { exact: true }).last().click(); await page.keyboard.press('Escape');
  }
}

// Reads a closed SQLite database read-only. Values are returned only for the
// requested non-secret keys; secret rows are reported by key name only.
export function readDatabase(path, { keys = [], likes = [] } = {}) {
  let database;
  try {
    database = new DatabaseSync(path, { readOnly: true });
    const integrity = database.prepare('PRAGMA integrity_check').all().map(row => row.integrity_check).join(';');
    const tables = database.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all().map(row => row.name);
    const rows = {};
    if (tables.includes('ItemTable')) {
      for (const key of keys) rows[key] = database.prepare('SELECT value FROM ItemTable WHERE key = ?').get(key)?.value;
      for (const like of likes) for (const row of database.prepare('SELECT key, value FROM ItemTable WHERE key LIKE ?').all(like))
        rows[row.key] = row.key.startsWith('secret://') ? '[secret row present]' : row.value;
    }
    const diskKeys = tables.includes('cursorDiskKV') ? database.prepare('SELECT key FROM cursorDiskKV').all().map(row => row.key) : [];
    return { integrity, tables, rows, diskKeys };
  } catch (error) { return { error: error.message }; }
  finally { database?.close(); }
}

export function updateDatabase(path, statements) {
  const database = new DatabaseSync(path);
  try { for (const [sql, ...values] of statements) database.prepare(sql).run(...values); }
  finally { database.close(); }
}

// Visible notifications (toasts and the notification centre list).
export async function notifications(page) {
  return page.locator('.notifications-toasts .notification-list-item-message, .notifications-center .notification-list-item-message')
    .evaluateAll(elements => elements.map(element => element.textContent.trim())).catch(() => []);
}

export async function snapshot(page, directory, label) {
  await page.screenshot({ path: join(directory, `${label}.png`) }).catch(() => {});
  const text = await page.locator('body').innerText().catch(() => '');
  await writeFile(join(directory, `${label}.txt`), text);
  return text;
}
