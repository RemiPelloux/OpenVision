// Native upgrade, interruption, rollback and uninstall verification (OV-904,
// Linux x64, Xvfb, non-root). Builds signed releases N and N+1 from the same
// commit (N+1 is a version-bumped controlled fixture), installs N, seeds a
// profile through the product (settings, a fixture provider and key, a rule, a
// chat against a loopback model, a project memory and an extension), kills the
// installer with SIGKILL at every phase, upgrades, rolls back with the profile
// N+1 wrote, uninstalls (retention) and purges. Installer and N+1 launch run
// under process-family network capture: no update-endpoint request may occur.
import assert from 'node:assert/strict';
import { execFileSync, spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { chmod, copyFile, lstat, mkdir, mkdtemp, readdir, readFile, readlink, realpath, rm, writeFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace, openChat } from './verification-workspace.mjs';
import { portableArguments } from './portable-layout.mjs';
import { releaseFiles } from './linux-release.mjs';
import { markerName } from './profile-format.mjs';
import { createLoopbackProxy, parseSyscallTrace, trafficConnects } from './network-capture.mjs';

if (process.platform !== 'linux' || process.arch !== 'x64') throw Error('verify:upgrade:linux requires Linux x64.');
if (process.getuid() === 0) throw Error('Run verify:upgrade:linux as a non-root user (Chromium sandbox, realistic file ownership).');
if (!process.env.DISPLAY && !process.env.WAYLAND_DISPLAY) throw Error('A display is required (for example xvfb-run).');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const node = process.execPath;
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/upgrade-linux-'));
const runId = basename(directory);
const installRoot = join(directory, 'install'), xdg = join(directory, 'xdg'), project = join(directory, 'project');
const { version: base } = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
const N = base, N1 = `${base}.1`;
const previousIndex = process.argv.indexOf('--previous-runtime');
// Optional: a source checkout of an older release (for example v0.2.0-preview.7) built for Linux.
const previousRuntime = previousIndex < 0 ? undefined : resolve(process.argv[previousIndex + 1]);
const updatePattern = /update|todesktop|downloads\.cursor|cursor\.sh|cursor\.com|anysphere|appimage/i;
const marker = `UPGRADE-${runId.slice(-6)}`;
const providerName = 'Upgrade fixture', providerKey = `fixture-upgrade-key-${runId.slice(-6)}`;
const ruleText = `Upgrade rule ${marker}: prefer small functions.`, newerRuleText = `Rule written by ${N1} ${marker}.`;
const previousRuleText = `Rule written by the previous runtime ${marker}.`;
const chatPrompt = `Reply with Upgrade chat ${marker}. Do not use tools.`, chatReply = `Upgrade chat ${marker} verified.`;
const extensionId = 'openvision-test.upgrade-fixture', extensionCommand = 'OpenVision Upgrade Fixture: Hello';
const result = { runId, xdgRuntimeDir: process.env.XDG_RUNTIME_DIR ? 'session' : 'private temporary', checkedAt: new Date().toISOString(), N, N1, commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  steps: [], launches: [], interruptions: [], network: {}, errors: [], success: false };
const step = (name, detail = {}) => { result.steps.push({ name, at: new Date().toISOString(), ...detail }); console.log(`[step] ${name}${Object.keys(detail).length ? ' ' + JSON.stringify(detail) : ''}`); };
const exists = path => lstat(path).then(() => true, () => false);
const save = () => writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));

// Loopback model fixture: records the Authorization header of every request.
const modelRequests = [];
const fixture = createServer(async (request, response) => {
  modelRequests.push({ url: request.url, authorized: request.headers.authorization === `Bearer ${providerKey}`, at: Date.now() });
  if (request.url === '/v1/models') { response.writeHead(200, { 'content-type': 'application/json' }); return response.end(JSON.stringify({ data: [{ id: 'upgrade-model' }] })); }
  if (request.url !== '/v1/chat/completions') { response.writeHead(404); return response.end(); }
  for await (const chunk of request); // drain
  response.writeHead(200, { 'content-type': 'text/event-stream' });
  for (const [delta, finish_reason] of [[{ role: 'assistant', content: chatReply }, null], [{}, 'stop']])
    response.write(`data: ${JSON.stringify({ id: 'upgrade', object: 'chat.completion.chunk', model: 'upgrade-model', choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  response.end('data: [DONE]\n\n');
});
await new Promise(done => fixture.listen(0, '127.0.0.1', done));

function run(command, args, options = {}) {
  const output = execFileSync(command, args, { encoding: 'utf8', maxBuffer: 64 << 20, ...options });
  return output;
}
function runStatus(command, args, options = {}) {
  return new Promise(resolve => {
    const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'], ...options });
    let stdout = '', stderr = '';
    child.stdout.on('data', chunk => { stdout += chunk; }); child.stderr.on('data', chunk => { stderr += chunk; });
    child.on('close', code => resolve({ code, stdout, stderr }));
  });
}
// Desktop sessions provide a private XDG_RUNTIME_DIR, where the editor puts its
// IPC sockets; the deep run directory would exceed the socket path limit otherwise.
const runtimeDir = process.env.XDG_RUNTIME_DIR ?? await mkdtemp('/tmp/ovrun-');
if (!process.env.XDG_RUNTIME_DIR) await chmod(runtimeDir, 0o700);
const installerEnv = { ...process.env, XDG_DATA_HOME: xdg, XDG_RUNTIME_DIR: runtimeDir };
const releases = join(directory, 'releases'), keys = join(directory, 'keys');
const files = version => { const names = releaseFiles(version); return { archive: join(releases, names.archive), manifest: join(releases, names.manifest) }; };

async function treeDigest(path) {
  const hash = createHash('sha256'); let count = 0;
  async function walk(relative) {
    for (const name of (await readdir(join(path, relative))).sort()) {
      const full = join(path, relative, name), info = await lstat(full);
      hash.update(`${relative}/${name}|${info.isSymbolicLink() ? 'L' + await readlink(full) : info.isDirectory() ? 'D' : 'F' + info.size}\n`);
      if (info.isDirectory()) await walk(join(relative, name));
      else if (info.isFile()) { hash.update(await readFile(full)); count++; }
    }
  }
  await walk('');
  return { sha256: hash.digest('hex'), files: count };
}

const dataOf = version => join(installRoot, 'versions', version, 'electron-host/data');
const database = data => join(data, 'local/User/globalStorage/state.vscdb');
function rows(data) {
  const db = new DatabaseSync(database(data), { readOnly: true });
  try {
    const item = key => db.prepare('SELECT value FROM ItemTable WHERE key = ?').get(key)?.value;
    const like = (table, pattern) => db.prepare(`SELECT key, value FROM ${table} WHERE key LIKE ?`).all(pattern).map(row => ({ key: row.key, value: String(row.value) }));
    const providers = JSON.parse(String(item('openvision.model-providers.v1') ?? '{"providers":[]}'));
    const provider = providers.providers.find(entry => entry.name === providerName);
    const secret = provider && item(`secret://openvision.provider.${provider.id}`);
    const rules = like('ItemTable', 'openvision.user-rule.v1.%').map(row => JSON.parse(row.value));
    const bubbles = like('cursorDiskKV', 'bubbleId:%').filter(row => row.value.includes(marker));
    const composers = like('cursorDiskKV', 'composerData:%').filter(row => bubbles.some(bubble => bubble.key.startsWith(`bubbleId:${row.key.slice('composerData:'.length)}:`)));
    return { provider, secret: secret && String(secret), rules: rules.map(rule => rule.knowledge ?? rule.title), chatBubbles: bubbles.length, chats: composers.length };
  } finally { db.close(); }
}

// Launch exactly as the installed launcher does: resolve current, use the
// in-package profile and the launcher's own arguments.
let app, page, launchRecord;
const currentData = async (from = installRoot) => join(await realpath(join(from, 'current')), 'electron-host/data');
// host/data select another runtime (the 0.2.0-preview.7 tag build) or install root.
async function launch(label, { capture = false, from = installRoot, host, data } = {}) {
  const versionDirectory = host ? dirname(host) : await realpath(join(from, 'current'));
  host ??= join(versionDirectory, 'electron-host');
  const executable = join(host, 'openvision');
  const record = { label, version: basename(versionDirectory), startedAt: new Date().toISOString(), errors: [], rendererRequests: [] };
  let executablePath = executable;
  if (capture) {
    record.trace = join(directory, `${label}-syscalls.trace`);
    executablePath = join(directory, `${label}-traced-host.sh`);
    await writeFile(executablePath, `#!/bin/sh\nexec strace -f --seccomp-bpf -qq -ttt -yy -s 512 -e trace=connect,sendto,sendmsg,sendmmsg -o '${record.trace}' -- '${executable}' "$@"\n`);
    await chmod(executablePath, 0o755);
    record.proxy = await createLoopbackProxy();
  }
  const env = { ...process.env, XDG_CACHE_HOME: join(directory, 'xdg-cache'), XDG_RUNTIME_DIR: runtimeDir }; delete env.ELECTRON_RUN_AS_NODE;
  const profileArguments = data ? ['--user-data-dir', join(data, 'local'), '--extensions-dir', join(data, 'local-extensions'),
    '--disable-updates', '--disable-telemetry', '--disable-crash-reporter'] : portableArguments(host);
  record.profile = (data ?? join(host, 'data')).slice(root.length + 1);
  app = await _electron.launch({ executablePath, env, timeout: 120000, args: [...profileArguments,
    // Xvfb has no Secret Service; the documented basic store keeps keys across launches.
    '--password-store=basic', '--new-window', '--skip-welcome', '--skip-release-notes',
    ...(record.proxy ? [`--proxy-server=http://127.0.0.1:${record.proxy.port}`] : []),
    ...await linuxSandboxArguments(host), project, join(project, 'hello.js')] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => record.errors.push(error.message));
  page.on('request', request => { const url = request.url(); if (/^https?:/.test(url)) record.rendererRequests.push(url); });
  await page.locator('.monaco-workbench').waitFor({ state: 'visible', timeout: 90000 });
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 60000 });
  await enterWorkspace(page);
  await page.waitForTimeout(8000);
  launchRecord = record;
  return record;
}
async function close() {
  if (!app) return;
  const child = app.process(); await app.close(); app = undefined;
  launchRecord.exit = { exitCode: child.exitCode, signalCode: child.signalCode };
  if (launchRecord.proxy) { launchRecord.proxyEvents = launchRecord.proxy.events; await launchRecord.proxy.close(); delete launchRecord.proxy; }
  result.launches.push(launchRecord);
  assert.equal(child.exitCode, 0, `${launchRecord.label} exited cleanly`);
  await save();
}

async function command(name) {
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+Shift+p');
  const picker = page.locator('.quick-input-widget');
  await picker.locator('input[type="text"]').fill(`>${name}`);
  return picker;
}
async function settings() {
  const panel = page.locator('.openvision-model-settings');
  if (!await panel.isVisible()) {
    await page.keyboard.press('Escape');
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  }
  await panel.waitFor(); return panel;
}
async function openRules() {
  const rules = page.getByRole('button', { name: 'Rules', exact: true });
  const existing = page.locator('.tabs-container .tab').filter({ hasText: /^Customize$/ });
  if (await existing.count()) await existing.first().click();
  if (!await rules.isVisible()) {
    const picker = await command('Open Customize');
    await picker.getByText('Open Customize', { exact: true }).first().waitFor();
    await page.keyboard.press('Enter');
  }
  await rules.click();
}
async function addRule(text) {
  await openRules();
  const title = `Rule ${Date.now()}`;
  await page.getByRole('button', { name: 'New', exact: true }).click();
  await page.locator('.quick-input-widget input[type="text"]').fill(title);
  await page.keyboard.press('Enter');
  await page.getByText(title, { exact: true }).click();
  await page.locator('textarea').fill(text);
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByText(text, { exact: true }).waitFor();
}

// Everything the user owns, checked through the running product.
async function assertProfile(label, { expectNewerRule = false, expectRules = [], data } = {}) {
  const checks = {};
  assert.match(await page.title(), new RegExp(marker)); checks.settings = true;
  const picker = await command(extensionCommand);
  await picker.getByText(extensionCommand, { exact: true }).first().waitFor(); checks.extensionCommand = true;
  await page.keyboard.press('Escape');
  await openRules();
  await page.getByText(ruleText, { exact: true }).waitFor(); checks.rule = true;
  await page.getByText('memory-upgrade', { exact: false }).first().waitFor(); checks.projectMemory = true;
  if (expectNewerRule) { await page.getByText(newerRuleText, { exact: true }).waitFor(); checks.newerRule = true; }
  for (const text of expectRules) { await page.getByText(text, { exact: true }).waitFor(); checks[`rule:${text.slice(0, 24)}`] = true; }
  const panel = await settings();
  await panel.locator('.openvision-provider').filter({ hasText: providerName }).first().waitFor(); checks.provider = true;
  const saved = rows(data ?? await currentData());
  assert.ok(saved.secret, 'provider key row present');
  const key = await app.evaluate(({ safeStorage }, value) => safeStorage.decryptString(Buffer.from(JSON.parse(value).data)), saved.secret);
  assert.equal(key, providerKey); checks.providerKeyDecrypts = true;
  assert.ok(saved.chats >= 1 && saved.chatBubbles >= 1, 'chat history rows present'); checks.chatHistory = true;
  await page.keyboard.press('Escape');
  step(`profile verified in ${label}`, checks);
  return checks;
}

async function seedFiles(data) {
  const user = join(data, 'local/User'), extensions = join(data, 'local-extensions');
  await mkdir(join(user, 'globalStorage'), { recursive: true });
  await writeFile(join(user, 'settings.json'), JSON.stringify({ ...verificationSettings, 'git.openRepositoryInParentFolders': 'never',
    'window.title': `OpenVision TEST — disposable profile — ${marker} — \${rootName}` }, null, 2));
  const name = `${extensionId}-1.0.0`, target = join(extensions, name);
  await mkdir(target, { recursive: true });
  await writeFile(join(target, 'package.json'), JSON.stringify({ name: 'upgrade-fixture', publisher: 'openvision-test', version: '1.0.0',
    displayName: 'OpenVision upgrade fixture', engines: { vscode: '*' }, contributes: { commands: [{ command: 'openvisionUpgradeFixture.hello', title: extensionCommand }] } }));
  await writeFile(join(extensions, 'extensions.json'), JSON.stringify([{ identifier: { id: extensionId }, version: '1.0.0',
    location: { $mid: 1, path: target, scheme: 'file' }, relativeLocation: name, metadata: { installedTimestamp: Date.now(), source: 'vsix' } }]));
  await mkdir(join(project, '.openvision/rules'), { recursive: true });
  await writeFile(join(project, 'hello.js'), 'console.log("OpenVision upgrade verification");\n');
  await writeFile(join(project, '.openvision/rules/memory-upgrade.mdc'), `---\ndescription: Upgrade memory ${marker}\nalwaysApply: false\n---\nThe upgrade fixture remembers ${marker}.\n`);
}

// Provider, key, a chat against the loopback model and a rule, through the UI.
async function seedThroughProduct(rule = ruleText) {
  const panel = await settings();
  await panel.getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill(providerName);
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${fixture.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill(providerKey);
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await panel.locator('.openvision-provider').filter({ hasText: providerName }).getByRole('checkbox', { name: 'Enable upgrade-model', exact: true }).waitFor();
  await page.keyboard.press('Escape');
  await page.locator('.tabs-container .tab').filter({ hasText: 'hello.js' }).first().click();
  const input = await openChat(page);
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByTestId('model-picker-menu').filter({ visible: true }).locator('[data-model-picker-item-name$=":upgrade-model"]').click();
  await input.fill(chatPrompt); await input.press('Enter');
  await page.getByText(chatReply, { exact: true }).first().waitFor({ timeout: 60000 });
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
  assert.ok(modelRequests.some(request => request.url === '/v1/chat/completions' && request.authorized), 'chat used the saved key');
  await addRule(rule);
  await page.waitForTimeout(3000);
}

function networkFindings(label, trace, extra = {}) {
  const parsed = trace ? parseSyscallTrace(trace) : { connects: [], lookups: [], datagrams: [] };
  const traffic = trafficConnects(parsed);
  const updateLookups = parsed.lookups.filter(entry => updatePattern.test(entry.name));
  const findings = { label, inetConnects: parsed.connects.filter(entry => entry.family !== 'unix').length, trafficConnects: traffic,
    lookups: parsed.lookups.map(entry => entry.name), updateLookups, ...extra };
  result.network[label] = findings;
  return findings;
}

// Hold the installer at a phase, kill its whole process group, and require the
// installed version and its profile to be exactly as before.
async function interrupt(phase) {
  const before = await treeDigest(dataOf(N));
  const wrapper = join(installRoot, 'current/openvision-install');
  const child = spawn(wrapper, ['upgrade', '--archive', files(N1).archive, '--allowed-signers', join(keys, 'allowed_signers')],
    { env: { ...installerEnv, OPENVISION_INSTALL_TEST_HOLD: phase }, stdio: ['ignore', 'pipe', 'pipe'], detached: true });
  let output = '';
  child.stderr.on('data', chunk => { output += chunk; });
  await new Promise((resolve, reject) => {
    child.stdout.on('data', chunk => { output += chunk; if (output.includes(`[hold] ${phase}`)) resolve(); });
    child.on('close', code => reject(Error(`installer exited (${code}) before ${phase}: ${output}`)));
  });
  const stat = await readFile(`/proc/${child.pid}/stat`, 'utf8');
  assert.equal(Number(stat.slice(stat.lastIndexOf(')') + 2).split(' ')[2]), child.pid, 'installer leads its own process group');
  process.kill(-child.pid, 'SIGKILL');
  await new Promise(resolve => child.once('close', resolve));
  const record = { phase, signal: child.signalCode, current: await readlink(join(installRoot, 'current')),
    profileUnchanged: (await treeDigest(dataOf(N))).sha256 === before.sha256, leftovers: await readdir(installRoot) };
  result.interruptions.push(record);
  assert.equal(record.signal, 'SIGKILL');
  assert.equal(record.current, `versions/${N}`);
  assert.ok(record.profileUnchanged, `profile of ${N} unchanged after SIGKILL at ${phase}`);
  step(`SIGKILL at ${phase}`, { current: record.current, profileUnchanged: true });
  await launch(`after-kill-${phase}`);
  record.checks = await assertProfile(`${N} after SIGKILL at ${phase}`);
  await close();
}

try {
  // 1. Signed releases N and N+1 from this commit with a throwaway key.
  await mkdir(keys, { recursive: true });
  run('ssh-keygen', ['-q', '-t', 'ed25519', '-N', '', '-C', 'openvision-upgrade-verification-throwaway', '-f', join(keys, 'release-key')]);
  await writeFile(join(keys, 'allowed_signers'), `openvision-release namespaces="openvision-release" ${(await readFile(join(keys, 'release-key.pub'), 'utf8')).trim()}\n`);
  for (const version of [N, N1]) {
    const started = Date.now();
    const output = run(node, [join(root, 'desktop/release-linux.mjs'), '--version', version, '--out', releases,
      '--key', join(keys, 'release-key'), '--allowed-signers', join(keys, 'allowed_signers')], { stdio: ['ignore', 'pipe', 'inherit'] });
    const summary = JSON.parse(output.slice(output.indexOf('{\n')));
    const manifest = JSON.parse(await readFile(summary.manifest, 'utf8'));
    assert.ok(!manifest.files.some(entry => /appimageupdatetool/i.test(entry.path)), 'updater is not packaged');
    step(`release ${version}`, { seconds: Math.round((Date.now() - started) / 1000), files: summary.files, bytes: summary.bytes, sha256: summary.sha256, sourceClean: summary.sourceClean });
  }

  // 2. Tampered N+1 is rejected by release-verify and never reaches an install.
  const tamper = join(directory, 'tamper'); await mkdir(tamper);
  const names = releaseFiles(N1);
  for (const name of [names.archive, names.manifest, names.signature]) await copyFile(join(releases, name), join(tamper, name));
  const bytes = await readFile(join(tamper, names.archive)); bytes[bytes.length >> 1] ^= 0xff; await writeFile(join(tamper, names.archive), bytes);
  const rejected = await runStatus(node, [join(root, 'desktop/release-verify.mjs'), '--archive', join(tamper, names.archive), '--allowed-signers', join(keys, 'allowed_signers')]);
  assert.equal(rejected.code, 1); assert.match(rejected.stderr, /SHA-256 does not match/);
  step('tampered release rejected by release-verify', { stderr: rejected.stderr.trim() });

  // 3. Fresh install of N with the source checkout's Node, under syscall trace.
  const installTrace = join(directory, 'install-N-syscalls.trace');
  run('strace', ['-f', '-qq', '-yy', '-e', 'trace=connect,sendto,sendmsg,sendmmsg', '-o', installTrace, '--', node, join(root, 'desktop/linux-install.mjs'),
    'install', '--root', installRoot, '--archive', files(N).archive, '--allowed-signers', join(keys, 'allowed_signers')], { env: installerEnv, stdio: ['ignore', 'pipe', 'pipe'] });
  const installNetwork = networkFindings('install-N', await readFile(installTrace, 'utf8'));
  assert.equal(installNetwork.trafficConnects.length, 0); assert.equal(installNetwork.lookups.length, 0);
  assert.equal(await readlink(join(installRoot, 'current')), `versions/${N}`);
  assert.match(await readFile(join(xdg, 'applications/openvision.desktop'), 'utf8'), new RegExp(`Exec="${installRoot}/current/OpenVision"`));
  const product = JSON.parse(await readFile(join(installRoot, 'current/electron-host/resources/app/product.json'), 'utf8'));
  assert.equal('updateUrl' in product || 'backupUpdateUrl' in product, false, 'installed product has no update endpoints');
  step(`installed ${N}`, { desktopEntry: true, updateEndpoints: false });

  // A tampered release is refused by the installer without changing the install.
  const rootBefore = await treeDigest(installRoot);
  const refused = await runStatus(node, [join(root, 'desktop/linux-install.mjs'), 'upgrade', '--root', installRoot, '--archive', join(tamper, names.archive),
    '--allowed-signers', join(keys, 'allowed_signers')], { env: installerEnv });
  assert.equal(refused.code, 1);
  assert.equal((await treeDigest(installRoot)).sha256, rootBefore.sha256, 'install root unchanged by a tampered release');
  step('tampered release refused by the installer', { stderr: refused.stderr.trim().split('\n').at(-1) });

  // 4. Seed N's profile through files and the running product.
  await seedFiles(dataOf(N));
  await launch(`seed-${N}`);
  await seedThroughProduct();
  await close();
  const seeded = rows(dataOf(N));
  assert.ok(seeded.provider && seeded.secret && seeded.chats >= 1 && seeded.rules.includes(ruleText), 'seeded rows written');
  result.seeded = { providerId: seeded.provider.id, secretPrefix: Buffer.from(JSON.parse(seeded.secret).data).subarray(0, 3).toString(), chats: seeded.chats, rules: seeded.rules.length };
  step(`seeded ${N}`, result.seeded);
  await launch(`baseline-${N}`);
  await assertProfile(`${N} baseline`);
  await close();

  // 5. Credential-free profile fixture produced by this build (OV-904 task 4).
  const fixtureProfile = join(directory, 'profile-fixture');
  run('cp', ['-a', dataOf(N), fixtureProfile]);
  for (const name of await readdir(join(fixtureProfile, 'local')))
    if (name.startsWith('Singleton')) await rm(join(fixtureProfile, 'local', name), { force: true });
  {
    const db = new DatabaseSync(database(fixtureProfile));
    try { db.exec("DELETE FROM ItemTable WHERE key LIKE 'secret://%'"); db.exec('VACUUM'); } finally { db.close(); }
  }
  const leaks = [];
  for (const file of run('find', [fixtureProfile, '-type', 'f']).trim().split('\n'))
    if ((await readFile(file)).includes(providerKey)) leaks.push(file);
  assert.deepEqual(leaks, [], 'fixture contains no provider key bytes');
  await rm(join(fixtureProfile, markerName), { force: true }); // as written by builds before format markers (format 0)
  step('credential-free profile fixture exported', { path: fixtureProfile.slice(root.length + 1), ...(await treeDigest(fixtureProfile)) });

  // 6. SIGKILL the installer at every phase; N must stay intact and launch.
  for (const phase of ['verify', 'extract', 'backup', 'data-copy', 'migrate', 'switch']) await interrupt(phase);

  // 7. Real upgrade with N's bundled installer (no system Node), traced.
  const nBefore = await treeDigest(dataOf(N));
  const upgradeTrace = join(directory, 'upgrade-syscalls.trace');
  const upgrade = await runStatus('strace', ['-f', '-qq', '-yy', '-e', 'trace=connect,sendto,sendmsg,sendmmsg', '-o', upgradeTrace, '--',
    join(installRoot, 'current/openvision-install'), 'upgrade', '--archive', files(N1).archive, '--allowed-signers', join(keys, 'allowed_signers')], { env: installerEnv });
  assert.equal(upgrade.code, 0, upgrade.stderr);
  const upgradeSummary = JSON.parse(upgrade.stdout);
  const upgradeNetwork = networkFindings('upgrade', await readFile(upgradeTrace, 'utf8'));
  assert.equal(upgradeNetwork.trafficConnects.length, 0); assert.equal(upgradeNetwork.lookups.length, 0);
  assert.equal(await readlink(join(installRoot, 'current')), `versions/${N1}`);
  assert.equal((await treeDigest(dataOf(N))).sha256, nBefore.sha256, `${N} profile untouched by the upgrade`);
  assert.ok(upgradeSummary.backup && await exists(join(upgradeSummary.backup, 'data/local/User/settings.json')), 'pre-upgrade backup');
  const upgraded = rows(dataOf(N1));
  assert.deepEqual({ ...upgraded, secret: upgraded.secret === seeded.secret }, { ...seeded, secret: true });
  assert.equal(JSON.parse(await readFile(join(dataOf(N1), markerName), 'utf8')).format, 1);
  step(`upgraded to ${N1}`, { backup: basename(upgradeSummary.backup), migration: upgradeSummary.migration, recoveredLeftovers: result.interruptions.length });

  // 8. Launch N+1 under capture; verify everything, then write newer work.
  const record = await launch(`upgraded-${N1}`, { capture: true });
  await assertProfile(N1);
  await addRule(newerRuleText);
  await page.waitForTimeout(3000);
  await close();
  const launchNetwork = networkFindings(`launch-${N1}`, await readFile(record.trace, 'utf8'), {
    proxyEvents: record.proxyEvents.map(({ method, host, port, url, allowed }) => ({ method, host, port, url, allowed })),
    updateRendererRequests: record.rendererRequests.filter(url => updatePattern.test(url)) });
  assert.deepEqual(launchNetwork.updateLookups, []);
  assert.deepEqual(record.proxyEvents.filter(event => updatePattern.test(`${event.host} ${event.url ?? ''}`)), []);
  assert.deepEqual(launchNetwork.updateRendererRequests, []);
  step(`no update-endpoint requests during ${N1} launch`, { inetConnects: launchNetwork.inetConnects, trafficConnects: launchNetwork.trafficConnects.length,
    proxyEvents: record.proxyEvents.length, lookups: launchNetwork.lookups.length });

  // 9. Roll back to N carrying the profile N+1 wrote.
  const rolled = await runStatus(join(installRoot, 'current/openvision-install'), ['rollback'], { env: installerEnv });
  assert.equal(rolled.code, 0, rolled.stderr);
  assert.equal(await readlink(join(installRoot, 'current')), `versions/${N}`);
  assert.ok(rows(dataOf(N)).rules.includes(newerRuleText), `${N} received the ${N1}-written profile`);
  step(`rolled back to ${N}`, { backup: basename(JSON.parse(rolled.stdout).backup) });
  await launch(`rolled-back-${N}`);
  await assertProfile(`${N} after rollback`, { expectNewerRule: true });
  await close();

  // 9b. Cross-version with an older release's own build (optional --previous-runtime).
  if (previousRuntime) {
    const host = join(previousRuntime, 'electron-host');
    const label = `previous runtime ${execFileSync('git', ['describe', '--tags', '--always'], { cwd: previousRuntime, encoding: 'utf8' }).trim()}`;
    result.crossVersion = { runtime: previousRuntime.slice(dirname(root).length), label,
      commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: previousRuntime, encoding: 'utf8' }).trim() };
    // Downgrade tolerance: the older build opens the format-1 profile N and N+1 wrote.
    const downgrade = join(directory, 'previous-runtime-downgrade');
    run('cp', ['-a', dataOf(N), downgrade]);
    await launch('previous-runtime-downgrade', { host, data: downgrade });
    result.crossVersion.downgrade = await assertProfile(`${label} opening the ${N1}-written profile`, { expectNewerRule: true, data: downgrade });
    await close();
    // Forward migration: a fresh profile written by the older build, adopted and
    // migrated by an N+1 install, then opened by N+1.
    const older = join(directory, 'previous-runtime-profile');
    await seedFiles(older);
    await launch('previous-runtime-seed', { host, data: older });
    await seedThroughProduct();
    await addRule(previousRuleText);
    await page.waitForTimeout(3000);
    await close();
    assert.equal(await exists(join(older, markerName)), false, 'the older build writes no format marker');
    const forwardRoot = join(directory, 'forward-install');
    await mkdir(join(forwardRoot, 'retained-data'), { recursive: true });
    run('cp', ['-a', older, join(forwardRoot, 'retained-data/previous-runtime')]);
    await writeFile(join(forwardRoot, 'retained.json'), JSON.stringify({ items: [{ version: 'previous-runtime', path: 'retained-data/previous-runtime', current: true }] }));
    const forward = await runStatus(node, [join(root, 'desktop/linux-install.mjs'), 'install', '--root', forwardRoot, '--no-desktop-entry',
      '--archive', files(N1).archive, '--allowed-signers', join(keys, 'allowed_signers')], { env: installerEnv });
    assert.equal(forward.code, 0, forward.stderr);
    assert.deepEqual(JSON.parse(forward.stdout).migration.applied, [1]);
    await launch(`forward-${N1}`, { from: forwardRoot });
    result.crossVersion.forward = await assertProfile(`${N1} opening the profile written by ${label}`, { expectRules: [previousRuleText], data: await currentData(forwardRoot) });
    await close();
    for (const path of [forwardRoot, older, downgrade]) await rm(path, { recursive: true, force: true });
    step('cross-version profile checks passed', { label });
  }

  // 10. Cross-version fixture: the format-0 fixture adopted by a fresh install root
  //     and migrated forward by N+1; N then opens the migrated (format-1) copy.
  {
    const fixtureRoot = join(directory, 'fixture-install');
    await mkdir(join(fixtureRoot, 'retained-data'), { recursive: true });
    run('cp', ['-a', fixtureProfile, join(fixtureRoot, 'retained-data/fixture')]);
    await writeFile(join(fixtureRoot, 'retained.json'), JSON.stringify({ items: [{ version: 'fixture', path: 'retained-data/fixture', current: true }] }));
    const adopt = await runStatus(node, [join(root, 'desktop/linux-install.mjs'), 'install', '--root', fixtureRoot, '--no-desktop-entry',
      '--archive', files(N1).archive, '--allowed-signers', join(keys, 'allowed_signers')], { env: installerEnv });
    assert.equal(adopt.code, 0, adopt.stderr);
    const adopted = JSON.parse(adopt.stdout);
    assert.deepEqual(adopted.migration.applied, [1]);
    const migrated = rows(join(fixtureRoot, 'versions', N1, 'electron-host/data'));
    assert.ok(migrated.provider && !migrated.secret && migrated.rules.includes(ruleText) && migrated.chats >= 1);
    step('format-0 fixture migrated forward by the installer', { applied: adopted.migration.applied, secretRows: 0 });
    await rm(fixtureRoot, { recursive: true, force: true });
  }

  // 11. Uninstall keeps profiles and backups and removes the launcher entry; purge removes all.
  const uninstalled = await runStatus(join(installRoot, 'current/openvision-install'), ['uninstall'], { env: installerEnv });
  assert.equal(uninstalled.code, 0, uninstalled.stderr);
  const kept = JSON.parse(uninstalled.stdout);
  assert.equal(await exists(join(xdg, 'applications/openvision.desktop')), false);
  assert.equal(await exists(join(xdg, 'icons/hicolor/256x256/apps/openvision.png')), false);
  assert.equal(await exists(join(installRoot, 'versions')), false);
  const current = kept.retained.find(item => item.current);
  assert.equal(current.version, N);
  assert.ok(rows(join(installRoot, current.path)).rules.includes(newerRuleText), 'retained profile holds the latest work');
  const backups = await readdir(join(installRoot, 'backups'));
  step('uninstalled with retention', { retained: kept.retained.map(item => item.path), backups: backups.length });
  const purged = await runStatus(node, [join(root, 'desktop/linux-install.mjs'), 'uninstall', '--purge', '--root', installRoot], { env: installerEnv });
  assert.equal(purged.code, 0, purged.stderr);
  assert.equal(await exists(installRoot), false);
  step('purged');
  result.success = true;
} catch (error) {
  result.errors.push(error.stack ?? String(error));
  console.error(error);
  if (page) await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  process.exitCode = 1;
} finally {
  if (app) await app.close().catch(() => {});
  fixture.close();
  // Archives are large and reproducible from the commit; keep manifests and signatures.
  for (const version of [N, N1]) await rm(files(version).archive, { force: true });
  await rm(join(directory, 'tamper'), { recursive: true, force: true });
  await rm(join(directory, 'xdg-cache'), { recursive: true, force: true });
  if (!process.env.XDG_RUNTIME_DIR) await rm(runtimeDir, { recursive: true, force: true });
  await save();
  console.log(JSON.stringify({ runId, directory: directory.slice(root.length + 1), success: result.success, steps: result.steps.length,
    interruptions: result.interruptions.map(entry => entry.phase), errors: result.errors.length }, null, 2));
}
