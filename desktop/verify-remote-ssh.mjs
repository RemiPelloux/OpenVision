// OV-703 native Remote-SSH verifier (Linux x64 client, Linux x64 host).
// The "remote" is a disposable unprivileged sshd on 127.0.0.1 running as a
// separate unix account (desktop/remote-ssh-host.mjs, started by the operator).
// Workload: refused unknown host key; first connect uploads the pinned server
// (no download anywhere); open folder; edit/save/rename; remote terminal
// Unicode, resize and Ctrl+C; a fixture extension activating in the remote
// extension host; reconnect after the SSH connection is killed and after sshd
// restarts; window close leaves no remote server or SSH session (by uid and
// sshd journal). Both process families are traced: no connect or lookup may
// leave the machine. `-- --agent` adds a loopback provider with a canary key
// and checks that the remote window refuses Agent provider configurations and
// that the key reaches neither the remote home nor the server data.
import assert from 'node:assert/strict';
import { execFile, spawnSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { createServer } from 'node:http';
import { chmod, mkdir, mkdtemp, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { crc32 } from 'node:zlib';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { fileHash } from './import-files.mjs';
import { captureEnvironment, removedProxyVariables } from './capture-harness.mjs';
import { parseSyscallTrace, trafficConnects } from './network-capture.mjs';
import { hostRequest } from './remote-ssh-host.mjs';

if (process.platform !== 'linux' || process.arch !== 'x64') throw new Error('verify:remote-ssh requires a Linux x64 client');
if (process.getuid() === 0) throw new Error('Run verify:remote-ssh as an unprivileged user; the remote account must be a different user.');
const root = resolve(import.meta.dirname, '..');
const agentMode = process.argv.includes('--agent');
const control = resolve(root, process.env.OPENVISION_REMOTE_CONTROL ?? 'logs/remote-ssh-control');
const host = (command, body) => hostRequest(control, command, body);
const { layout, appRoot } = await verificationRuntime(root);
const product = JSON.parse(await readFile(join(appRoot, 'product.json'), 'utf8'));
if (!product.openvisionRemoteServer) throw new Error('This build has no prepared remote server; run npm run prepare:remote and npm run build:desktop.');
const commit = product.commit, serverName = product.serverApplicationName, dataFolder = product.serverDataFolderName;
const directory = await mkdtemp(join(root, `logs/remote-ssh-${agentMode ? 'agent-' : ''}`));
const profile = join(directory, 'profile'), sshDir = join(directory, 'ssh');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(sshDir, { mode: 0o700 });
const tag = randomBytes(5).toString('hex');
const result = { checkedAt: new Date().toISOString(), platform: `${process.platform}-${process.arch}`, mode: agentMode ? 'agent' : 'base',
  scope: 'Linux x64 source build; disposable unprivileged sshd on 127.0.0.1 as a separate unix account; controlled fixture files and extension; no live provider',
  run: directory.slice(root.length + 1), tag, success: false, checks: {}, observations: {}, errors: [], phases: [] };
let phase = 'setup';
const enter = name => { phase = name; result.phases.push({ phase: name, at: new Date().toISOString() }); console.log(`[remote-ssh] ${name}`); };
const sleep = ms => new Promise(done => setTimeout(done, ms));
async function until(label, probe, timeout = 60000, interval = 250) {
  const deadline = Date.now() + timeout;
  let last;
  while (Date.now() < deadline) {
    last = await probe().catch(error => ({ error: error.message }));
    if (last && !last.error) return last;
    await sleep(interval);
  }
  throw new Error(`Timed out: ${label} (${JSON.stringify(last)?.slice(0, 300)})`);
}

// --- Remote account, key, host key and SSH configuration ---------------------
const status = await host('status');
assert.notEqual(status.uid, process.getuid(), 'The remote account must differ from the verifier user');
const before = (await host('processes')).rows.filter(row => ['remote-server', 'ssh-session'].includes(row.kind));
assert.deepEqual(before, [], 'No remote server or SSH session may run before the verifier starts');
await host('reset-server'); await host('reset-trace');
const key = join(sshDir, 'id_ed25519');
assert.equal(spawnSync('ssh-keygen', ['-q', '-t', 'ed25519', '-N', '', '-C', 'openvision-verifier', '-f', key]).status, 0);
await host('authorize', { publicKey: (await readFile(`${key}.pub`, 'utf8')).trim().split(' ').slice(0, 2).join(' ') });
const sshd = await host('start', { trace: true });
const knownHosts = join(sshDir, 'known_hosts'), wrongHosts = join(sshDir, 'known_hosts.wrong'), config = join(sshDir, 'config');
const hostKey = sshd.hostKey.split(' ').slice(0, 2).join(' ');
await writeFile(knownHosts, `[127.0.0.1]:${sshd.port} ${hostKey}\n`);
const otherKey = join(sshDir, 'other_host_key');
spawnSync('ssh-keygen', ['-q', '-t', 'ed25519', '-N', '', '-f', otherKey]);
await writeFile(wrongHosts, `[127.0.0.1]:${sshd.port} ${(await readFile(`${otherKey}.pub`, 'utf8')).split(' ').slice(0, 2).join(' ')}\n`);
const sshConfig = hosts => `Host ovfixture\n  HostName 127.0.0.1\n  Port ${sshd.port}\n  User ${status.user}\n  IdentityFile ${key}\n` +
  `  IdentitiesOnly yes\n  UserKnownHostsFile ${hosts}\n  StrictHostKeyChecking yes\n`;
await writeFile(config, sshConfig(wrongHosts));
const remote = script => new Promise((done, fail) => {
  const child = execFile('ssh', ['-F', join(sshDir, 'config.cli'), '-o', 'BatchMode=yes', 'ovfixture', 'bash -s'],
    { maxBuffer: 1 << 24, encoding: 'utf8' }, (error, stdout, stderr) => error ? fail(new Error(`${error.message}: ${stderr}`)) : done(stdout));
  child.stdin.end(`${script}\n`);
});
const upload = (path, data) => new Promise((done, fail) => {
  const child = execFile('ssh', ['-F', join(sshDir, 'config.cli'), '-o', 'BatchMode=yes', 'ovfixture', `cat > ${path}`],
    (error, stdout, stderr) => error ? fail(new Error(`${error.message}: ${stderr}`)) : done());
  child.stdin.end(data);
});
await writeFile(join(sshDir, 'config.cli'), sshConfig(knownHosts));
const home = status.home, project = `${home}/project`, fixture = `${home}/.ov-fixture`;
await remote(`set -e; rm -rf ${project} ${fixture}; mkdir -p ${project} ${fixture}
printf 'Hello remote ${tag}\\n' > ${project}/hello.txt; printf 'console.log(1);\\n' > ${project}/main.js`);

await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'remote.SSH.configFile': config, 'remote.SSH.connectTimeout': 30, 'remote.autoForwardPorts': false,
  'security.workspace.trust.enabled': false, 'git.enabled': false, 'files.autoSave': 'off',
  'editor.quickSuggestions': false, 'editor.autoClosingBrackets': 'never', 'editor.formatOnSave': false,
  'terminal.integrated.gpuAcceleration': 'off', 'terminal.integrated.enablePersistentSessions': false,
  'terminal.integrated.confirmOnExit': 'never', 'terminal.integrated.confirmOnKill': 'never',
  'terminal.integrated.shellIntegration.enabled': false,
  'terminal.integrated.profiles.linux': { 'OpenVision test shell': { path: '/bin/bash', args: ['--noprofile', '--norc'] } },
  'terminal.integrated.defaultProfile.linux': 'OpenVision test shell' }));
await writeFile(join(profile, 'argv.json'), '{"enable-crash-reporter":false}');

// --- Client process family under strace --------------------------------------
const clientTrace = join(directory, 'client-trace.log');
const traced = join(directory, 'traced-host.sh');
await writeFile(traced, `#!/bin/sh\nexec strace -f -qq -ttt -yy -e trace=execve,connect,sendto,sendmsg,sendmmsg -e signal=none -s 200 -o '${clientTrace}' '${layout.executable}' "$@"\n`);
await chmod(traced, 0o755);
result.observations.removedProxyVariables = removedProxyVariables(process.env);
const env = captureEnvironment(process.env); delete env.SSH_AUTH_SOCK; delete env.SSH_AGENT_PID;
const folderUri = `vscode-remote://ssh-remote+ovfixture${project}`;
let app, page;
async function launch(name) {
  app = await _electron.launch({ executablePath: traced, env, timeout: 90000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter', '--log', 'trace',
      ...await linuxSandboxArguments(layout.host), '--folder-uri', folderUri] });
  page = await app.firstWindow(); page.setDefaultTimeout(30000);
  page.on('pageerror', error => result.errors.push(`${name}: ${error.message}`));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 90000 });
  await enterWorkspace(page);
}
async function close(name) {
  if (!app) return;
  const child = app.process();
  await app.close().catch(error => { result.errors.push(`${name} close: ${error.message}`); });
  result.observations[`${name}Exit`] = { code: child.exitCode, signal: child.signalCode };
  app = undefined; page = undefined;
}
const explorerRow = name => page.locator('.explorer-folders-view .monaco-list-row').filter({ hasText: new RegExp(`^${name.replace('.', '\\.')}$`) }).first();
const remoteFile = path => remote(`cat ${path} 2>/dev/null || true`);
async function remoteRows(kinds) { return (await host('processes')).rows.filter(row => kinds.includes(row.kind)); }
async function openFile(file) {
  await page.keyboard.press('ControlOrMeta+Shift+e');
  await explorerRow(file).click();
  // Enter opens the selected file and moves focus to its editor (Linux keymap).
  await page.keyboard.press('Enter');
  await page.locator('.tabs-container .tab').filter({ hasText: file }).first().waitFor();
  await page.locator('.editor-group-container.active .monaco-editor.focused').first().waitFor();
}
async function editAndSave(file, text) {
  await openFile(file);
  await page.keyboard.press('ControlOrMeta+End');
  await page.keyboard.insertText(text);
  await page.keyboard.press('ControlOrMeta+s');
  await until(`remote ${file} saved`, async () => (await remoteFile(`${project}/${file}`)).includes(text) ? true : { error: 'not saved' }, 30000);
}
// Remote file search answers once the server's search service is ready.
async function quickOpen(file) {
  const started = Date.now();
  await page.keyboard.press('ControlOrMeta+p');
  const input = page.locator('.quick-input-widget input[type="text"]');
  const row = page.locator('.quick-input-list .monaco-list-row').filter({ hasText: file }).filter({ hasNotText: 'Create File' }).first();
  await until(`quick open finds ${file}`, async () => {
    await input.fill(''); await input.fill(file);
    return await row.waitFor({ timeout: 2000 }).then(() => true, () => ({ error: 'no result' }));
  }, 60000, 500);
  await page.keyboard.press('Escape');
  return Date.now() - started;
}
const logText = async () => {
  const texts = [];
  async function walk(path) {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const child = join(path, entry.name);
      if (entry.isDirectory()) await walk(child); else if (entry.name.endsWith('.log')) texts.push(await readFile(child, 'utf8').catch(() => ''));
    }
  }
  await walk(join(profile, 'logs'));
  return texts.join('\n');
};

// Fixture extension, installed on the remote as a VSIX (stored zip).
function zip(entries) {
  const local = [], central = []; let offset = 0;
  for (const [name, text] of entries) {
    const data = Buffer.from(text), file = Buffer.from(name), crc = crc32(data);
    const header = Buffer.alloc(30); header.writeUInt32LE(0x04034b50, 0); header.writeUInt16LE(20, 4);
    header.writeUInt32LE(crc, 14); header.writeUInt32LE(data.length, 18); header.writeUInt32LE(data.length, 22); header.writeUInt16LE(file.length, 26);
    const entry = Buffer.alloc(46); entry.writeUInt32LE(0x02014b50, 0); entry.writeUInt16LE(20, 4); entry.writeUInt16LE(20, 6);
    entry.writeUInt32LE(crc, 16); entry.writeUInt32LE(data.length, 20); entry.writeUInt32LE(data.length, 24); entry.writeUInt16LE(file.length, 28);
    entry.writeUInt32LE(offset, 42);
    local.push(header, file, data); central.push(entry, file); offset += header.length + file.length + data.length;
  }
  const size = central.reduce((sum, item) => sum + item.length, 0), end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(size, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...local, ...central, end]);
}
const fixtureId = 'openvision-local-verification.remote-fixture';
const fixtureVsix = zip([
  ['extension.vsixmanifest', `<?xml version="1.0" encoding="utf-8"?><PackageManifest Version="2.0.0" xmlns="http://schemas.microsoft.com/developer/vsx-schema/2011"><Metadata><Identity Language="en-US" Id="remote-fixture" Version="0.0.1" Publisher="openvision-local-verification"/><DisplayName>OpenVision remote fixture</DisplayName><Description xml:space="preserve">Verification fixture</Description></Metadata><Installation><InstallationTarget Id="Microsoft.VisualStudio.Code"/></Installation><Dependencies/><Assets><Asset Type="Microsoft.VisualStudio.Code.Manifest" Path="extension/package.json" Addressable="true"/></Assets></PackageManifest>`],
  ['[Content_Types].xml', '<?xml version="1.0" encoding="utf-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension=".json" ContentType="application/json"/><Default Extension=".js" ContentType="application/javascript"/><Default Extension=".vsixmanifest" ContentType="text/xml"/></Types>'],
  ['extension/package.json', JSON.stringify({ name: 'remote-fixture', publisher: 'openvision-local-verification', version: '0.0.1',
    engines: { vscode: '^1.90.0' }, main: './extension.js', activationEvents: ['*'], extensionKind: ['workspace'] })],
  ['extension/extension.js', `const vscode = require('vscode'), fs = require('fs'), os = require('os'), path = require('path');
exports.activate = context => {
  const dir = path.join(os.homedir(), '.ov-fixture'); fs.mkdirSync(dir, { recursive: true });
  const record = { pid: process.pid, ppid: process.ppid, uid: process.getuid(), remoteName: vscode.env.remoteName,
    extensionKind: context.extension.extensionKind, execPath: process.execPath, at: Date.now() };
  fs.writeFileSync(path.join(dir, 'activation-' + process.pid + '.json'), JSON.stringify(record));
  const beat = () => fs.writeFileSync(path.join(dir, 'heartbeat.json'), JSON.stringify({ pid: process.pid, at: Date.now() }));
  beat(); const timer = setInterval(beat, 500); context.subscriptions.push({ dispose: () => clearInterval(timer) });
};
`],
]);

// --- Optional loopback provider with canary credentials ----------------------
const canaryKey = `ovk-remote-${randomBytes(12).toString('hex')}`, canaryHeader = `ovh-remote-${randomBytes(12).toString('hex')}`;
const providerLog = [];
const provider = createServer(async (request, response) => {
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  providerLog.push({ phase, method: request.method, path: request.url, remotePort: request.socket.remotePort,
    authorized: request.headers.authorization === `Bearer ${canaryKey}`, tools: Boolean(/"tools"/.test(Buffer.concat(chunks))) });
  response.setHeader('content-type', 'application/json');
  if (request.url === '/v1/models') return response.end(JSON.stringify({ data: [{ id: 'fixture-model' }] }));
  response.statusCode = 404; response.end('{}');
});
if (agentMode) await new Promise(done => provider.listen(0, '127.0.0.1', done));

try {
  enter('refuse-unknown-host-key');
  await launch('wrong-key');
  await until('host key refusal logged', async () => /Host key changed for \[127\.0\.0\.1\]:\d+/.test(await logText()) ? true : { error: 'no refusal yet' }, 90000, 1000);
  const installed = await remote(`test -e ${home}/${dataFolder}/bin/${commit} && echo installed || echo absent`);
  assert.equal(installed.trim(), 'absent', 'A refused host key must not install a server');
  result.checks.changedHostKeyRefused = true;
  await close('wrong-key');
  await until('no session after refusal', async () => (await remoteRows(['ssh-session', 'remote-server'])).length ? { error: 'sessions remain' } : true, 20000);

  enter('connect');
  await writeFile(config, sshConfig(knownHosts));
  const started = Date.now();
  await launch('main');
  await explorerRow('hello.txt').waitFor({ timeout: 180000 });
  result.observations.connectMs = Date.now() - started;
  const statusbar = await page.locator('.part.statusbar').innerText();
  assert.match(statusbar, /SSH: ovfixture/, 'The status bar names the SSH remote');
  result.checks.openRemoteFolder = true;
  const remoteServer = await remote(`set -e; S=${home}/${dataFolder}/bin/${commit}; test -x $S/bin/${serverName}; ls -A ${home}/${dataFolder}/upload; ` +
    `node=$S/node; $node -e 'const p=require(process.argv[1]);console.log(JSON.stringify({a:p.serverApplicationName,d:p.serverDataFolderName,t:p.serverDownloadUrlTemplate,n:p.nameShort,u:p.updateUrl}))' $S/product.json; ` +
    `test ! -e ${home}/.cursor-server && echo no-vendor-folder`);
  const lines = remoteServer.trim().split('\n');
  const remoteProduct = JSON.parse(lines.find(line => line.startsWith('{')));
  assert.deepEqual(remoteProduct, { a: 'openvision-server', d: '.openvision-server', t: 'openvision-local:${commit}/${os}-${arch}', n: 'OpenVision Server' });
  assert.ok(lines.includes('no-vendor-folder'));
  assert.equal(lines.filter(line => line.includes('.tar.gz')).length, 0, 'The uploaded archive is consumed');
  result.checks.serverInstalledFromUpload = /Uploading the OpenVision server \(\d+ bytes\) over the SSH connection/.test(await logText());
  assert.ok(result.checks.serverInstalledFromUpload, 'The resolver uploads the local archive');
  result.observations.remoteServerProcesses = (await remoteRows(['remote-server'])).length;
  result.checks.noDynamicForwarding = !/\(socks\)/.test(await logText());

  enter('edit-save-rename');
  result.observations.quickOpenReadyMs = await quickOpen('main.js');
  result.checks.remoteQuickOpen = true;
  await editAndSave('hello.txt', ` edited-${tag}`);
  result.checks.editSave = true;
  await page.keyboard.press('ControlOrMeta+Shift+e');
  await explorerRow('hello.txt').click();
  await page.keyboard.press('F2');
  const rename = page.locator('.explorer-folders-view .monaco-inputbox input').first();
  await rename.waitFor(); await rename.fill('renamed.txt'); await rename.press('Enter');
  await until('remote rename', async () => (await remote(`ls ${project}`)).split('\n').includes('renamed.txt') ? true : { error: 'not renamed' }, 30000);
  assert.ok(!(await remote(`ls ${project}`)).split('\n').includes('hello.txt'));
  await page.keyboard.press('Escape');
  result.checks.rename = true;

  enter('terminal');
  await page.keyboard.press('Control+Backquote');
  const terminal = page.locator('.terminal-wrapper .xterm-helper-textarea').filter({ visible: true }).first();
  await terminal.waitFor({ state: 'attached', timeout: 60000 });
  await terminal.focus();
  await page.keyboard.insertText('cd ~/project && echo "OV-$((6*7)) OpenVision café 日本語 $(id -un)"');
  await page.keyboard.press('Enter');
  const unicode = `OV-42 OpenVision café 日本語 ${status.user}`;
  await until('remote terminal Unicode output', async () => (await page.locator('.terminal-wrapper').filter({ visible: true }).innerText()).includes(unicode) ? true : { error: 'no output' }, 30000);
  result.checks.terminalUnicodeAsRemoteUser = true;
  // Resize while `read` holds the foreground; the PTY size is read before and after.
  await page.keyboard.insertText(`stty size > ${fixture}/size-before.txt; read -r _; stty size > ${fixture}/size-after.txt`);
  await page.keyboard.press('Enter');
  await until('terminal size recorded', async () => (await remoteFile(`${fixture}/size-before.txt`)).trim() ? true : { error: 'empty' }, 15000);
  await app.evaluate(({ BrowserWindow }) => { const window = BrowserWindow.getAllWindows()[0]; window.unmaximize(); window.setSize(1100, 800); });
  await sleep(1500);
  await terminal.focus();
  await page.keyboard.press('Enter');
  const sizes = await until('remote PTY resized', async () => {
    const [before, after] = [(await remoteFile(`${fixture}/size-before.txt`)).trim(), (await remoteFile(`${fixture}/size-after.txt`)).trim()];
    return after && after !== before ? { before, after } : { error: `${before} -> ${after}` };
  }, 20000);
  result.observations.terminalSizes = sizes;
  result.checks.terminalResize = true;
  // Ctrl+C reaches the foreground job: `sleep 300` dies, the rest of the list is skipped.
  await page.keyboard.insertText(`sleep 300; echo not-interrupted > ${fixture}/after.txt`);
  await page.keyboard.press('Enter');
  const sleeper = await until('foreground sleep running', async () =>
    (await host('processes')).rows.find(row => row.argv === 'sleep 300') ?? { error: 'not running' }, 15000);
  await terminal.focus();
  await page.keyboard.press('Control+c');
  await until('interrupted sleep gone', async () => (await host('processes')).rows.some(row => row.pid === sleeper.pid && row.start === sleeper.start) ? { error: 'still running' } : true, 10000);
  await page.keyboard.insertText(`echo "after-interrupt $?" >> ${fixture}/after.txt`);
  await page.keyboard.press('Enter');
  const after = await until('shell after Ctrl+C', async () => (await remoteFile(`${fixture}/after.txt`)).trim() || { error: 'missing' }, 15000);
  assert.equal(after, 'after-interrupt 130', 'Ctrl+C ends the foreground job and skips the rest of the list');
  result.observations.interrupted = { pid: sleeper.pid, uid: status.uid };
  result.checks.terminalCtrlC = true;

  enter('remote-extension');
  await upload(`${fixture}/fixture.vsix`, fixtureVsix);
  const install = await remote(`${home}/${dataFolder}/bin/${commit}/bin/${serverName} --install-extension ${fixture}/fixture.vsix 2>&1`);
  result.observations.fixtureInstall = install.trim().split('\n').slice(-2);
  // A newly installed remote extension starts in the running extension host.
  const activations = async () => (await remote(`for f in ${fixture}/activation-*.json; do [ -f "$f" ] && cat "$f" && echo; done; true`))
    .trim().split('\n').filter(Boolean).map(line => JSON.parse(line));
  const activation = await until('fixture activated remotely', async () => (await activations())[0] ?? { error: 'not activated' }, 60000, 500);
  assert.equal(activation.uid, status.uid, 'The fixture runs as the remote account');
  assert.equal(activation.remoteName, 'ssh-remote');
  assert.equal(activation.extensionKind, 2, 'ExtensionKind.Workspace');
  assert.match(activation.execPath, new RegExp(`/${dataFolder.replace('.', '\\.')}/bin/${commit}/node$`));
  result.observations.fixtureActivation = activation;
  result.checks.remoteExtensionHostActivation = true;

  enter('reload-window');
  const loaded = page.waitForEvent('load', { timeout: 180000 });
  await page.keyboard.press('F1');
  await page.locator('.quick-input-widget input[type="text"]').fill('>Developer: Reload Window');
  await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'Developer: Reload Window' }).first().click();
  await loaded;
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 120000 });
  await explorerRow('renamed.txt').waitFor({ timeout: 120000 });
  const reloaded = await until('fixture active in a new extension host', async () =>
    (await activations()).find(item => item.pid !== activation.pid) ?? { error: 'no new activation' }, 120000, 500);
  result.observations.reloadActivation = reloaded;
  result.checks.reloadReconnects = true;

  enter('reconnect-killed-connection');
  const heartbeat = async () => JSON.parse((await remoteFile(`${fixture}/heartbeat.json`)) || '{}');
  result.observations.beforeKill = (await host('processes')).rows.filter(row => row.kind !== 'other').map(row => `${row.kind}:${row.argv.slice(0, 80)}`);
  const killed = await host('kill-sessions');
  assert.ok(killed.sessions.length >= 1, 'At least one SSH session was killed');
  result.observations.killedSessions = killed.sessions.length;
  await until('session re-established', async () => (await remoteRows(['ssh-session'])).length ? true : { error: 'no session' }, 120000, 500);
  await editAndSave('renamed.txt', ` reconnected-${tag}`);
  const beat = await heartbeat();
  assert.equal(beat.pid, reloaded.pid, 'The remote extension host survives the dropped connection');
  assert.ok(Date.now() - beat.at < 5000);
  result.checks.reconnectAfterKilledConnection = true;

  enter('reconnect-sshd-restart');
  const stopped = await host('stop');
  result.observations.sshdStop = { stopped: stopped.stopped, sessions: stopped.sessions.length };
  await sleep(3000);
  await host('start', { port: sshd.port, trace: true, append: true });
  await until('session after sshd restart', async () => (await remoteRows(['ssh-session'])).length ? true : { error: 'no session' }, 180000, 500);
  await editAndSave('renamed.txt', ` restarted-${tag}`);
  assert.equal((await heartbeat()).pid, reloaded.pid);
  result.checks.reconnectAfterSshdRestart = true;

  if (agentMode) {
    enter('agent-provider');
    await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
    await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
    const settings = page.locator('.openvision-model-settings');
    await settings.getByRole('button', { name: 'Add Provider', exact: true }).click();
    await page.getByLabel('Provider Name', { exact: true }).fill('Remote fixture');
    await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${provider.address().port}/v1`);
    await page.getByLabel('API Key', { exact: true }).fill(canaryKey);
    await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
    await page.locator('dialog').waitFor({ state: 'detached' });
    await until('local model discovery', async () => providerLog.some(item => item.path === '/v1/models' && item.authorized) ? true : { error: 'none' }, 30000);
    enter('agent-turn');
    await page.keyboard.press('ControlOrMeta+Shift+l');
    await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
    await page.getByText('fixture-model', { exact: true }).last().click();
    await page.keyboard.press('Escape');
    const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
    await input.fill(`Read renamed.txt and append a line ${canaryHeader}.`);
    await input.press('Enter');
    await page.getByText('OpenVision does not send provider keys or Agent model requests to remote hosts', { exact: false }).first().waitFor({ timeout: 60000 });
    await page.screenshot({ path: join(directory, 'agent-refused.png') });
    result.checks.remoteAgentRefusedLocally = true;
    result.checks.noAgentRequestReachedProvider = !providerLog.some(item => item.path !== '/v1/models');
    result.observations.provider = providerLog;
    const scan = await host('scan', { needles: [canaryKey] });
    result.observations.remoteSecretScan = { files: scan.files, bytes: scan.bytes, hits: scan.hits };
    result.checks.providerKeyNotOnRemote = scan.hits.length === 0;
    assert.ok(result.checks.providerKeyNotOnRemote, `Provider key found on the remote: ${JSON.stringify(scan.hits)}`);
  }

  enter('close');
  result.observations.beforeClose = (await remoteRows(['remote-server', 'ssh-session'])).map(row => ({ kind: row.kind, argv: row.argv.slice(0, 120) }));
  await page.screenshot({ path: join(directory, 'final.png') });
  await close('main');
  const leftovers = await until('remote processes released', async () => {
    const rows = await remoteRows(['remote-server', 'ssh-session']);
    return rows.length ? { error: rows.map(row => `${row.kind}:${row.argv.slice(0, 80)}`).join(' | ') } : [];
  }, 60000, 500);
  result.checks.windowCloseReleasesRemote = leftovers.length === 0;
  // Every session accepted by the final sshd instance (after the restart) must
  // be logged as ended; sessions killed earlier on purpose end without a line.
  const journal = (await host('journal')).text;
  const lifetime = journal.slice(journal.lastIndexOf('Server listening on'));
  const accepted = [...lifetime.matchAll(/Accepted publickey for \S+ from 127\.0\.0\.1 port (\d+)/g)].map(match => match[1]);
  const ended = new Set([...lifetime.matchAll(/(?:Disconnected from user \S+|Received disconnect from|Connection closed by(?: user \S+)?|Connection reset by(?: user \S+)?|Timeout, client not responding from user \S+) 127\.0\.0\.1 port (\d+)/g)].map(match => match[1]));
  result.observations.journal = { accepted: accepted.length, ended: accepted.filter(port => ended.has(port)).length,
    open: accepted.filter(port => !ended.has(port)) };
  result.checks.journalSessionsClosed = accepted.length > 0 && result.observations.journal.open.length === 0;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText().catch(() => 'closed'));
} finally {
  enter('analysis');
  await close('final');
  const providerPort = provider.address()?.port;
  provider.close();
  const remoteTrace = (await host('trace').catch(() => ({ text: '' }))).text;
  await writeFile(join(directory, 'remote-trace.log'), remoteTrace);
  await host('stop').catch(error => result.errors.push(`stop: ${error.message}`));
  // Every connect and lookup is attributed to the verifier phase it fell in.
  const phaseAt = ms => result.phases.reduce((current, item) => Date.parse(item.at) <= ms ? item.phase : current, 'setup');
  const gallery = new URL(product.extensionsGallery?.serviceUrl ?? 'http://none.invalid').hostname;
  for (const [name, text] of [['client', await readFile(clientTrace, 'utf8').catch(() => '')], ['remote', remoteTrace]]) {
    const parsed = parseSyscallTrace(text);
    const external = trafficConnects(parsed).filter(item => item.port !== 53)
      .map(({ pid, at, ip, port, transport }) => ({ pid, ip, port, transport, phase: phaseAt(at) }));
    // DNS goes over connected UDP sockets: track sockets connected to port 53.
    const lookups = [], dnsSockets = new Set();
    for (const line of text.split('\n')) {
      const call = /^(\d+) ([\d.]+) (connect|sendto|sendmsg|sendmmsg)\((\d+)<UDP:/.exec(line);
      if (!call) continue;
      const socket = `${call[1]}:${call[4]}`;
      if (call[3] === 'connect') { if (/htons\(53\)/.test(line)) dnsSockets.add(socket); else dnsSockets.delete(socket); continue; }
      if (!dnsSockets.has(socket) && !/htons\(53\)/.test(line)) continue;
      const payload = line.slice(line.indexOf('"') + 1, line.lastIndexOf('"')).replace(/\\(?:[0-7]{1,3}|[a-z])/g, '.');
      lookups.push({ pid: Number(call[1]), phase: phaseAt(Number(call[2]) * 1000),
        names: [...new Set(payload.match(/[a-z0-9-]+(?:\.[a-z0-9-]+)+/gi) ?? [])].map(host => host.replace(/^\.+/, '')) });
    }
    const downloaders = [...text.matchAll(/execve\("([^"]*\/(?:wget|curl|fetch))"/g)].map(match => match[1]);
    // A remote extension that is not built in makes the client look it up in
    // the configured gallery (on install and at each workbench start). Those
    // lookups are reported; nothing else may leave either machine.
    const afterInstall = item => result.phases.findIndex(entry => entry.phase === item.phase) >=
      result.phases.findIndex(entry => entry.phase === 'remote-extension') && result.phases.some(entry => entry.phase === 'remote-extension');
    const galleryLookups = name === 'client' ? lookups.filter(item => afterInstall(item) && item.names.length &&
      item.names.every(host => host.toLowerCase() === gallery)) : [];
    const galleryProcesses = new Set(galleryLookups.map(item => item.pid));
    const tolerated = item => afterInstall(item) && galleryProcesses.has(item.pid);
    const unexpected = [...external.filter(item => !tolerated(item)), ...lookups.filter(item => !galleryLookups.includes(item))];
    result.observations[`${name}Network`] = { traced: text.length > 0, connects: parsed.connects.length, external, lookups, downloaders,
      galleryLookups: galleryLookups.length, unexpected };
    result.checks[`${name}NoServerFetchOrExternalTraffic`] = text.length > 0 && unexpected.length === 0 && downloaders.length === 0;
    if (agentMode) result.observations[`${name}ProviderConnects`] = parsed.connects.filter(item => item.port === providerPort && /^127\./.test(item.ip ?? '')).length;
  }
  if (agentMode) result.checks.providerRequestsOriginateLocally = result.observations.clientProviderConnects > 0 && result.observations.remoteProviderConnects === 0;
  result.hashes = { workbench: await fileHash(join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')),
    resolver: await fileHash(join(appRoot, 'extensions/open-remote-ssh/lib/extension.js')),
    installer: await fileHash(join(appRoot, 'extensions/open-remote-ssh/src/scripts/server-setup.sh')),
    serverArchive: product.openvisionRemoteServer.sha256 };
  result.success = !result.failure && Object.values(result.checks).every(Boolean);
  if (!result.success) process.exitCode = 1;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify({ run: result.run, success: result.success, checks: result.checks, failure: result.failure?.split('\n')[0],
    errors: result.errors.slice(0, 5) }, null, 2));
}
