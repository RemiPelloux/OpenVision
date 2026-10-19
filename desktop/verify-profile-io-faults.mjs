import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { execFileSync, spawn, spawnSync } from 'node:child_process';
import { copyFile, mkdir, mkdtemp, open, readFile, readdir, stat, statfs, unlink, writeFile } from 'node:fs/promises';
import { release } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';

// Native profile storage under a genuinely full volume. The disposable profile
// and, separately, the project live on size-limited tmpfs mounts inside a
// disposable user+mount namespace; the verifier and Electron run as the invoking
// uid through a nested user namespace. The model is a controlled local HTTP
// fixture, not live inference. Linux x64 only.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const insideNamespace = process.env.OPENVISION_IO_FAULT_DIRECTORY;
const expectOriginal = process.argv.includes('--observe');
assert.equal(process.platform, 'linux', 'Full-volume verification uses Linux user and mount namespaces');

if (!insideNamespace) {
  await mkdir(join(root, 'logs'), { recursive: true });
  const directory = await mkdtemp(join(root, 'logs/profile-io-fault-verification-'));
  for (const name of ['profile-volume', 'project-volume', 'readonly-view']) await mkdir(join(directory, name));
  const script = join(directory, 'namespace.sh');
  await writeFile(script, ['set -e',
    `mount -t tmpfs -o size=384m openvision-profile-volume "${join(directory, 'profile-volume')}"`,
    `mount -t tmpfs -o size=1m openvision-project-volume "${join(directory, 'project-volume')}"`,
    // A read-only view of the same profile volume, for the EROFS launch stage.
    `mount --bind "${join(directory, 'profile-volume')}" "${join(directory, 'readonly-view')}"`,
    `mount -o remount,bind,ro "${join(directory, 'readonly-view')}"`,
    `OPENVISION_IO_FAULT_DIRECTORY="${directory}" exec unshare --map-user=${process.getuid()} --map-group=${process.getgid()} ` +
      `"${process.execPath}" "${fileURLToPath(import.meta.url)}" ${process.argv.slice(2).map(value => JSON.stringify(value)).join(' ')}`,
    ''].join('\n'));
  // Both tmpfs mounts disappear with the namespace; nothing outside `directory` is mounted.
  const child = spawnSync('unshare', ['-rm', 'sh', script], { stdio: 'inherit' });
  process.exit(child.status ?? 1);
}

const directory = insideNamespace;
const profileVolume = join(directory, 'profile-volume'), projectVolume = join(directory, 'project-volume');
const { layout, appRoot } = await verificationRuntime(root);
const profile = join(profileVolume, 'profile'), project = join(projectVolume, 'project');
const globalStorage = join(profile, 'User/globalStorage');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'files.hotExit': 'off' }));
const notes = join(project, 'notes.md'), readme = join(project, 'readme.txt');
const original = 'OpenVision profile fault notes.\nanswer = 41\n';
const changed = original.replace('answer = 41', 'answer = 42');
await writeFile(notes, original); await writeFile(readme, 'Preserve this unrelated file.\n');
const memoryDirectory = join(project, '.openvision/rules');
const proposal = { title: 'Profile fault memory', description: 'When asked about the profile fault memory',
  content: 'The profile fault memory is PROFILE_FAULT_MEMORY_BODY. 日本語' };
const fullProvider = 'Full-volume provider', fullRule = 'OpenVision full-volume rule.';
const fullReply = 'OpenVision full-volume chat reply.';

const fillers = { profile: join(profileVolume, 'filler.bin'), project: join(projectVolume, 'filler.bin') };
const volumes = { profile: profileVolume, project: projectVolume };
const freeBytes = async name => { const stats = await statfs(volumes[name]); return Number(stats.bavail) * Number(stats.bsize); };
async function fillVolume(name) {
  // Consume every free block with an owned filler; ENOSPC is the expected end.
  const handle = await open(fillers[name], 'a');
  try {
    for (const size of [1 << 22, 1 << 16, 1 << 12, 1 << 9, 1])
      for (;;) {
        const error = await handle.write(Buffer.alloc(size)).then(() => undefined, error => error);
        if (!error) continue;
        assert.equal(error.code, 'ENOSPC', 'The verifier filler must end at ENOSPC'); break;
      }
  } finally { await handle.close(); }
  return freeBytes(name);
}
const freeVolume = name => unlink(fillers[name]).catch(() => {});

const sha = value => (value === undefined ? undefined : execFileSync('sha256sum', { input: value }).toString().split(' ')[0]);
async function globalFiles() {
  const entries = await readdir(globalStorage).catch(() => []);
  return Object.fromEntries(await Promise.all(entries.filter(name => name.startsWith('state.vscdb'))
    .map(async name => [name, (await stat(join(globalStorage, name))).size])));
}
// Copy the closed database (and any WAL) and query the copy read-only.
async function database(label) {
  const copy = join(directory, `db-${label}`); await mkdir(copy, { recursive: true });
  for (const name of ['state.vscdb', 'state.vscdb-wal', 'state.vscdb.backup'])
    await copyFile(join(globalStorage, name), join(copy, name)).catch(() => {});
  const query = (file, sql) => {
    const run = spawnSync('sqlite3', ['-readonly', '-json', join(copy, file), sql], { encoding: 'utf8' });
    return run.status === 0 ? JSON.parse(run.stdout || '[]') : { error: run.stderr.trim() };
  };
  const summary = file => {
    const integrity = query(file, 'PRAGMA integrity_check');
    const providers = query(file, "SELECT value FROM ItemTable WHERE key = 'openvision.model-providers.v1'");
    const saved = Array.isArray(providers) && providers[0] ? JSON.parse(providers[0].value).providers : undefined;
    const names = saved ? saved.map(item => item.name) : providers;
    const secretKeys = query(file, "SELECT key FROM ItemTable WHERE key LIKE 'secret://%'");
    // Only key names are inspected; encrypted values are never read.
    const keyed = saved?.map(item => ({ name: item.name, keySaved: Array.isArray(secretKeys) &&
      secretKeys.some(row => row.key.includes(`openvision.provider.${item.id}"`) || row.key.endsWith(`openvision.provider.${item.id}`)) }));
    const rules = query(file, "SELECT value FROM ItemTable WHERE key LIKE 'openvision.user-rule.v1.%'");
    const secrets = query(file, "SELECT count(*) AS count FROM ItemTable WHERE key LIKE 'secret://%openvision.provider.%'");
    const chat = query(file, `SELECT count(*) AS count FROM cursorDiskKV WHERE CAST(value AS TEXT) LIKE '%${fullReply}%'`);
    return { integrity: Array.isArray(integrity) ? integrity.map(row => row.integrity_check).join(';') : integrity,
      providers: names, providerKeys: keyed, rules: Array.isArray(rules) ? rules.map(row => row.value) : rules,
      providerSecrets: Array.isArray(secrets) ? secrets[0]?.count : secrets,
      fullReplyRecords: Array.isArray(chat) ? chat[0]?.count : chat };
  };
  const files = await readdir(copy);
  return { files: await globalFiles(), state: files.includes('state.vscdb') ? summary('state.vscdb') : undefined,
    backup: files.includes('state.vscdb.backup') ? summary('state.vscdb.backup') : undefined };
}
async function memoryFiles() {
  const names = (await readdir(memoryDirectory).catch(() => [])).filter(name => name.includes('memory-'));
  return Promise.all(names.map(async name => {
    const text = await readFile(join(memoryDirectory, name), 'utf8');
    return { name, size: Buffer.byteLength(text), complete: text.includes(proposal.content) && text.includes('alwaysApply: false') };
  }));
}

const identity = { commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  platform: process.platform, arch: process.arch, osRelease: release(), node: process.version,
  volumes: { profile: 'tmpfs 384 MiB', project: 'tmpfs 1 MiB', mount: 'unprivileged user+mount namespace', uid: process.getuid() },
  hashes: Object.fromEntries(await Promise.all([
    ['host', layout.executable], ['main', join(appRoot, 'out/main.js')],
    ['workbench', join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')],
    ['modelProviders', join(appRoot, 'out/vs/code/electron-sandbox/workbench/openvision-model-providers.js')],
    ['workspaceMemory', join(appRoot, 'out/vs/code/electron-sandbox/workbench/openvision-workspace-memory.js')],
    ['verifier', fileURLToPath(import.meta.url)],
  ].map(async ([name, path]) => [name, { path, sha256: await fileHash(path).catch(() => null) }]))) };
const mainText = await readFile(join(appRoot, 'out/main.js'), 'utf8');
identity.durableStorageOwner = mainText.includes('/* OpenVision durable storage acknowledgement v1 */');

const requests = [], errors = [], toolResults = [], faultPoints = {};
let phase = 'reply';
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') {
    response.setHeader('content-type', 'application/json');
    return response.end(JSON.stringify({ data: [{ id: 'fixture-profile' }] }));
  }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  requests.push({ phase, model: payload.model, authorized: request.headers.authorization === 'Bearer fixture-key' });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({
    id: 'fixture-response', object: 'chat.completion.chunk', model: payload.model,
    choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  const id = `call_openvision_profile_${phase}`;
  const result = payload.messages?.find(message => message.role === 'tool' && message.tool_call_id === id);
  if (phase === 'reply') { event({ role: 'assistant', content: 'OpenVision profile fixture ready.' }); event({}, 'stop'); }
  else if (phase === 'chat') { event({ role: 'assistant', content: fullReply }); event({}, 'stop'); }
  else if (phase === 'memory') {
    event({ role: 'assistant', content: 'A suggestion for your review:\n\n```openvision-memory\n' + JSON.stringify(proposal) + '\n```' });
    event({}, 'stop');
  } else if (!result) {
    // Fill the profile only now: the turn is already persisted and running, so
    // the Agent edit and its review snapshot meet the full volume.
    if (phase === 'edit' && faultPoints.editFree === undefined) faultPoints.editFree = await fillVolume('profile');
    event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function', function: { name: 'StrReplace',
      arguments: JSON.stringify({ path: notes, old_string: 'answer = 41', new_string: 'answer = 42' }) } }] });
    event({}, 'tool_calls');
  } else {
    toolResults.push({ phase, content: typeof result.content === 'string' ? result.content : JSON.stringify(result.content) });
    event({ role: 'assistant', content: `OpenVision ${phase} edit turn finished.` }); event({}, 'stop');
  }
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const baseUrl = () => `http://127.0.0.1:${server.address().port}/v1`;

let app, page;
const hostExits = [];
const result = { checkedAt: new Date().toISOString(), identity, requests, errors, toolResults, stages: [], success: false,
  scope: 'Linux x64 native provider configuration, profile user rule, chat storage and Agent review snapshot saves with the profile on a genuinely full tmpfs, then freeing space and restart; approved memory saves with the project on a full tmpfs. Controlled local model fixture. Does not cover EIO, power loss, other platforms or live providers.' };
async function launch() {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE; delete env.OPENVISION_IO_FAULT_DIRECTORY;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
      '--disable-telemetry', '--disable-crash-reporter', ...await linuxSandboxArguments(layout.host), project, readme] });
  page = await app.firstWindow();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await page.waitForTimeout(8000);
}
// The read-only launch is spawned directly: the expected outcome is a native
// error dialog that blocks the main process before any window, which a
// debugger-attached launch cannot observe. The dialog is found through X11 by
// the owned child's _NET_WM_PID, captured, and dismissed with Return.
const x11 = (...args) => spawnSync('xdotool', args, { encoding: 'utf8' });
async function readOnlyLaunch(readOnlyProfile) {
  const probe = await writeFile(join(readOnlyProfile, 'probe'), '').then(() => 'writable', error => error.code);
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE; delete env.OPENVISION_IO_FAULT_DIRECTORY;
  const outcome = { probe, dialog: undefined, stderr: '' };
  const child = spawn(layout.executable, ['--user-data-dir', readOnlyProfile, '--extensions-dir', join(directory, 'extensions'),
    '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
    '--disable-telemetry', '--disable-crash-reporter', ...await linuxSandboxArguments(layout.host), project],
  { env, stdio: ['ignore', 'ignore', 'pipe'] });
  child.stderr.setEncoding('utf8').on('data', chunk => { outcome.stderr += chunk; });
  const exited = new Promise(done => child.once('exit', (exitCode, signalCode) => done({ exitCode, signalCode })));
  let exit;
  exited.then(value => { exit = value; });
  const deadline = Date.now() + 60000;
  while (!exit && !outcome.dialog && Date.now() < deadline) {
    const found = x11('search', '--onlyvisible', '--pid', String(child.pid)).stdout.trim().split('\n').filter(Boolean);
    if (found.length) {
      await new Promise(done => setTimeout(done, 1500)); // let GTK paint before capture
      outcome.dialog = { windows: found.length, title: x11('getwindowname', found[0]).stdout.trim() };
      spawnSync('import', ['-window', 'root', join(directory, 'read-only-dialog.png')]);
      outcome.dialog.mainBlockedWhileShown = exit === undefined;
      x11('windowfocus', '--sync', found[0]); x11('key', '--clearmodifiers', 'Return');
      outcome.dialog.dismissedWith = 'Return';
    } else await new Promise(done => setTimeout(done, 250));
  }
  const settled = await Promise.race([exited, new Promise(done => setTimeout(done, 30000))]);
  if (!settled) {
    // Only this verifier's own spawned child is stopped, through its handle.
    outcome.forcedStop = true; child.kill('SIGTERM'); await exited;
  }
  outcome.exit = exit ?? await exited;
  outcome.explanation = outcome.stderr.split('\n').filter(line => /\[openvision\]|profile folder|read-only|--user-data-dir|Nothing in the profile/.test(line)).slice(0, 12);
  return outcome;
}
async function closeOwnedApp() {
  if (!app) return;
  const child = app.process(), window = app.windows()[0];
  const exited = new Promise(resolve => child.once('exit', resolve));
  const closing = app.close();
  // Only this verifier's disposable app can be closed here.
  await window?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
  await closing;
  if (child.exitCode === null && child.signalCode === null) await exited;
  hostExits.push({ pid: child.pid, exitCode: child.exitCode, signalCode: child.signalCode });
  app = undefined; page = undefined;
}
async function submit(text, expected) {
  const input = await openChat(page);
  await input.fill(text); await input.press('Enter');
  if (expected) await page.getByText(expected, { exact: true }).first().waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
}
async function stage(name, extra = {}) {
  const record = { name, free: { profile: await freeBytes('profile'), project: await freeBytes('project') },
    files: await globalFiles(), notes: await readFile(notes, 'utf8').then(text => text === original ? 'original' : text === changed ? 'changed' : 'other'),
    memories: await memoryFiles(), ...extra };
  result.stages.push(record);
  await writeFile(join(directory, 'stages.json'), JSON.stringify(result.stages, null, 2));
  await page?.screenshot({ path: join(directory, `${name}.png`) }).catch(() => {});
  return record;
}
async function openModels() {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').waitFor();
}
// Returns the visible dialog status after Save; an empty string means the dialog closed as saved.
async function addProvider(name) {
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill(name);
  await page.getByLabel('API Base URL', { exact: true }).fill(baseUrl());
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  const closed = await page.locator('dialog').waitFor({ state: 'detached', timeout: 10000 }).then(() => true, () => false);
  const status = closed ? '' : await page.locator('dialog .openvision-model-status').innerText().catch(() => '');
  return { closed, status, settingsStatus: await page.locator('.openvision-model-settings > .openvision-model-status').first().innerText().catch(() => '') };
}
const providerVisible = name => page.locator('.openvision-model-settings').getByText(name, { exact: true }).count().then(count => count > 0);
async function openRules() {
  const rules = page.getByRole('button', { name: 'Rules', exact: true });
  const existing = page.locator('.tabs-container .tab').filter({ hasText: /^Customize$/ });
  if (await existing.count()) await existing.first().click();
  if (!await rules.isVisible()) {
    await page.keyboard.press('ControlOrMeta+Shift+P');
    await page.locator('.quick-input-widget input[type="text"]').fill('>Open Customize');
    await page.locator('.quick-input-widget').getByText('Open Customize', { exact: true }).first().waitFor();
    await page.keyboard.press('Enter');
  }
  await rules.click();
}
async function addRule(text) {
  await openRules();
  await page.getByRole('button', { name: 'New', exact: true }).click();
  await page.locator('.quick-input-widget input[type="text"]').fill(text);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);
  return page.locator('body').innerText();
}
const ruleVisible = async text => { await openRules(); return page.getByText(text, { exact: true }).count().then(count => count > 0); };
const keepLabel = /^Keep( All)?$/;
const reviewVisible = () => page.getByText(keepLabel).filter({ visible: true }).count().then(count => count > 0).catch(() => false);
async function chooseModel() {
  await page.keyboard.press('Escape');
  await page.locator('.tabs-container .tab').filter({ hasText: 'readme.txt' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-profile', { exact: true }).last().click();
  await page.keyboard.press('Escape');
}

try {
  // Baseline: provider, rule and chat saved on a healthy volume; restart makes a first backup.
  await launch();
  await openModels();
  result.baselineProvider = await addProvider('Base fixture');
  await chooseModel();
  await submit('Reply with OpenVision profile fixture ready. Do not use tools.', 'OpenVision profile fixture ready.');
  await closeOwnedApp();
  result.databases = { baseline: await database('baseline') };
  await launch();
  await stage('baseline-restarted');

  // Profile volume full.
  const filled = await fillVolume('profile');
  await stage('profile-full', { filledFree: filled });
  await openModels();
  // Other profile writers can release blocks at any time, so every fault step refills first.
  const providerFree = await fillVolume('profile');
  const save = await addProvider(fullProvider);
  await stage('provider-save-while-full', { freeBeforeSave: providerFree, save, providerListed: await providerVisible(fullProvider) });
  // A rejected save leaves its dialog open with the error; dismiss it and retry later from a new dialog.
  if (!save.closed) { await page.keyboard.press('Escape'); await page.locator('dialog').waitFor({ state: 'detached', timeout: 5000 }).catch(() => {}); }
  await openRules();
  const ruleFree = await fillVolume('profile');
  const ruleText = await addRule(fullRule);
  await writeFile(join(directory, 'rule-save-while-full.txt'), ruleText);
  await stage('rule-save-while-full', { freeBeforeSave: ruleFree, ruleVisible: await ruleVisible(fullRule),
    ruleError: /no space|disk is full|SQLITE_FULL|could not|failed/i.test(ruleText) });
  // Chat and Agent turns start with the profile full and finish only if they recover after space is freed.
  const visibleLines = async () => (await page.locator('body').innerText()).split('\n')
    .filter(line => /storage|could not|failed|retry|no space|disk|longer than expected/i.test(line)).slice(0, 20);
  const waitText = text => page.getByText(text, { exact: true }).first().waitFor({ timeout: 60000 }).then(() => true, () => false);
  await chooseModel();
  phase = 'chat';
  const chatFree = await fillVolume('profile');
  await submit('Reply with the full-volume chat reply.');
  await page.waitForTimeout(20000);
  await stage('chat-while-full', { freeBeforeSave: chatFree, chatRequests: requests.filter(item => item.phase === 'chat').length,
    replied: await page.getByText(fullReply, { exact: true }).count() > 0, lines: await visibleLines() });
  await freeVolume('profile');
  const chatRecovered = await waitText(fullReply);
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 }).catch(() => {});
  await stage('chat-after-freeing', { chatRecovered, chatRequests: requests.filter(item => item.phase === 'chat').length, lines: await visibleLines() });
  phase = 'edit';
  await submit('Change answer to 42 in notes.md.');
  await page.waitForTimeout(20000);
  await stage('agent-edit-while-full', { freeBeforeSave: faultPoints.editFree, editRequests: requests.filter(item => item.phase === 'edit').length,
    reviewVisible: await reviewVisible(), lines: await visibleLines() });

  // Free space; the session keeps running so retries can happen before close.
  await freeVolume('profile');
  const editRecovered = await waitText('OpenVision edit edit turn finished.');
  await page.waitForTimeout(5000);
  await stage('profile-freed', { editRecovered, reviewVisible: await reviewVisible(), lines: await visibleLines() });
  if (!expectOriginal) {
    // A failed provider save must be retryable from the same UI once space is free.
    await openModels();
    if (!await providerVisible(fullProvider)) result.providerRetry = await addProvider(fullProvider);
    await openRules();
    if (!await ruleVisible(fullRule)) result.ruleRetryText = await addRule(fullRule);
  }
  const keepBeforeClose = await reviewVisible();
  if (keepBeforeClose) { await page.getByText(keepLabel).filter({ visible: true }).first().click(); await page.waitForTimeout(2000); }
  await stage('before-close', { keepBeforeClose });
  await closeOwnedApp();
  result.databases.afterFaultSession = await database('after-fault-session');

  await launch();
  await openModels();
  const providerAfterRestart = await providerVisible(fullProvider);
  const ruleAfterRestart = await ruleVisible(fullRule);
  await openChat(page);
  const chatAfterRestart = await page.getByText(fullReply, { exact: true }).count() > 0;
  await stage('after-restart', { providerAfterRestart, ruleAfterRestart, chatAfterRestart, reviewVisible: await reviewVisible() });

  // Approved memory with the project volume full.
  await chooseModel();
  phase = 'memory';
  await submit('Suggest a project memory for review. Do not save anything.');
  const card = page.locator('.openvision-memory-card').filter({ visible: true }).last();
  const saveMemory = card.getByRole('button', { name: 'Save project memory', exact: true });
  await saveMemory.waitFor({ timeout: 45000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 30000 });
  // The rules folder exists before the volume fills, so only the memory file write faults.
  await mkdir(memoryDirectory, { recursive: true });
  await fillVolume('project');
  await saveMemory.click();
  await page.waitForTimeout(3000);
  const memoryFault = await stage('memory-save-while-project-full', { cardText: await card.innerText() });
  await freeVolume('project');
  await saveMemory.click().catch(() => {});
  await page.waitForTimeout(3000);
  const memoryRetry = await stage('memory-retry-after-freeing', { cardText: await card.innerText() });
  await closeOwnedApp();
  result.databases.final = await database('final');

  // EROFS: launch on a read-only view of the same profile. Nothing may change the
  // saved database, and the outcome the user sees is recorded.
  const before = await fileHash(join(globalStorage, 'state.vscdb'));
  result.readOnlyLaunch = await readOnlyLaunch(join(directory, 'readonly-view/profile'));
  result.readOnlyLaunch.databaseUnchanged = await fileHash(join(globalStorage, 'state.vscdb')) === before;
  await writeFile(join(directory, 'stages.json'), JSON.stringify(result.stages, null, 2));

  const faultSession = result.databases.afterFaultSession.state;
  result.observations = {
    providerSaveWhileFull: save, providerListedWhileFull: result.stages.find(item => item.name === 'provider-save-while-full').providerListed,
    providerRetry: result.providerRetry, providerInDatabaseAfterSession: faultSession?.providers, providerAfterRestart,
    ruleVisibleWhileFull: result.stages.find(item => item.name === 'rule-save-while-full').ruleVisible,
    ruleErrorWhileFull: result.stages.find(item => item.name === 'rule-save-while-full').ruleError,
    rulesInDatabaseAfterSession: faultSession?.rules, ruleAfterRestart,
    chatRecordsAfterSession: faultSession?.fullReplyRecords, chatAfterRestart,
    reviewWhileFull: result.stages.find(item => item.name === 'agent-edit-while-full').reviewVisible,
    notesAfterRestart: result.stages.find(item => item.name === 'after-restart').notes,
    integrity: { baseline: result.databases.baseline.state?.integrity, afterFaultSession: faultSession?.integrity,
      final: result.databases.final.state?.integrity, backupPresent: !!result.databases.final.backup },
    memoryAfterFault: memoryFault.memories, memoryCardAfterFault: memoryFault.cardText,
    memoryAfterRetry: memoryRetry.memories, memoryCardAfterRetry: memoryRetry.cardText,
  };
  if (!expectOriginal) {
    const observed = result.observations;
    // Acknowledgement means durability: either the save is refused visibly, or it reached SQLite.
    assert.ok(!save.closed && /could not save|SQLITE_FULL|disk is full/i.test(save.status),
      'A provider save on a full profile volume must report the failure in its dialog');
    assert.equal(observed.providerListedWhileFull, false, 'A refused provider save must not appear saved');
    assert.equal(result.providerRetry?.closed, true, 'The provider save must succeed when retried after freeing space');
    assert.ok(observed.providerInDatabaseAfterSession?.includes(fullProvider), 'The retried provider save must persist');
    assert.ok(faultSession.providerKeys.every(item => item.keySaved), 'Every saved provider keeps its API key');
    assert.equal(providerAfterRestart, true);
    // SQLite can commit into WAL space it already owns, so a rule save while the
    // volume is full either fails visibly or is genuinely durable.
    assert.ok(observed.ruleErrorWhileFull || observed.ruleVisibleWhileFull, 'A rule save while full is reported or saved');
    assert.ok(observed.rulesInDatabaseAfterSession?.some(value => value.includes(fullRule)));
    assert.equal(ruleAfterRestart, true);
    assert.equal(chatAfterRestart, true, 'A chat reply finished after freeing space survives restart');
    assert.equal(observed.notesAfterRestart, 'changed', 'The kept Agent edit survives restart');
    for (const value of Object.values(observed.integrity).filter(value => typeof value === 'string')) assert.equal(value, 'ok');
    assert.ok(memoryFault.memories.length === 0, 'A failed memory save must not leave a torn memory file');
    assert.match(memoryFault.cardText, /Could not save memory: .*(ENOSPC|no space)/i);
    assert.equal(memoryRetry.memories.length, 1); assert.equal(memoryRetry.memories[0].complete, true);
    assert.match(memoryRetry.cardText, /Saved to this project/);
    assert.deepEqual(await readdir(memoryDirectory).then(names => names.filter(name => name.endsWith('.tmp'))), []);
    assert.equal(result.readOnlyLaunch.probe, 'EROFS', 'The read-only view must produce EROFS');
    assert.equal(result.readOnlyLaunch.databaseUnchanged, true, 'A read-only profile launch must not change saved storage');
    const readOnly = result.readOnlyLaunch;
    assert.ok(readOnly.dialog?.windows >= 1, 'A read-only profile shows a native dialog before any window');
    assert.equal(readOnly.dialog.mainBlockedWhileShown, true, 'The host waits for the dialog');
    assert.match(readOnly.stderr, /OpenVision cannot start because its profile folder cannot be written\./);
    assert.ok(readOnly.stderr.includes(join(directory, 'readonly-view/profile')), 'The dialog names the profile path');
    assert.match(readOnly.stderr, /read-only file system\. \(EROFS\)/);
    assert.match(readOnly.stderr, /--user-data-dir set to a writable folder/);
    assert.equal(readOnly.forcedStop, undefined, 'Dismissing the dialog ends startup without being stopped');
    assert.deepEqual(readOnly.exit, { exitCode: 1, signalCode: null }, 'The host exits with code 1 after the dialog');
    assert.deepEqual(errors, []);
  }
  result.success = true;
} catch (error) {
  result.failure = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  await writeFile(join(directory, 'failure.txt'), await page?.locator('body').innerText().catch(() => '') ?? '').catch(() => {});
  process.exitCode = 1;
} finally {
  try { await closeOwnedApp(); } catch (error) { result.cleanupFailure = error.stack; process.exitCode = 1; }
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await freeVolume('profile'); await freeVolume('project');
  // The profile volume disappears with the namespace; keep the native logs.
  spawnSync('cp', ['-r', join(profile, 'logs'), join(directory, 'profile-logs')]);
  result.hostExits = hostExits;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, success: result.success, observations: result.observations,
    failure: result.failure?.split('\n')[0], hostExits }, null, 2));
}
