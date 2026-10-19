import assert from 'node:assert/strict';
import { execFileSync, spawn, spawnSync } from 'node:child_process';
import { access, mkdir, mkdtemp, readdir, readFile, readlink, realpath, rename, stat, writeFile, unlink } from 'node:fs/promises';
import { homedir } from 'node:os';
import { join, relative, resolve } from 'node:path';
import { ozoneArguments } from '../tooling/browser.mjs';
import { fileHash } from './import-files.mjs';

// Native Linux portable-package verification: package into a disposable folder,
// relocate it to a path with spaces and Unicode, start it through the shipped
// launcher, and check profile placement, persistence, window identity and the
// launcher entry scripts. No provider, account or AI inference is involved.
assert.equal(process.platform, 'linux', 'Linux package verification runs on Linux');
assert.notEqual(process.getuid(), 0, 'Run as a normal user: Chromium refuses to start as root without --no-sandbox');
const root = resolve(import.meta.dirname, '..');
const { version } = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/package-linux-verification-'));
const staged = join(directory, 'stage/OpenVision-linux-x64');
const portable = join(directory, 'Ünïcødé Ωrbit path', 'Open Vision 测试 package');
const host = join(portable, 'electron-host'), profile = join(host, 'data/local');
const project = join(directory, 'Projet été « spaces »');
const result = { success: false, checkedAt: new Date().toISOString(), directory, portable, checks: {}, launches: [],
  commit: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  host: { display: process.env.WAYLAND_DISPLAY ? `wayland:${process.env.WAYLAND_DISPLAY}` : process.env.DISPLAY ? `x11:${process.env.DISPLAY}` : null,
    ozonePlatform: process.env.OPENVISION_OZONE_PLATFORM ?? null, desktop: process.env.XDG_CURRENT_DESKTOP ?? null,
    locale: spawnSync('locale', ['charmap'], { encoding: 'utf8' }).stdout?.trim() ?? null,
    os: await readFile('/etc/os-release', 'utf8').then(text => text.match(/^PRETTY_NAME="?([^"\n]*)/m)?.[1]).catch(() => null) },
  scope: 'Linux x64 portable package built from this checkout; disposable package copy and XDG data folder; no provider, account or inference.' };

async function walk(folder, output = []) {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = join(folder, entry.name);
    output.push({ path, entry });
    if (entry.isDirectory()) await walk(path, output);
  }
  return output;
}
// The package's own processes, identified by their executable path inside this disposable package.
async function packageProcesses() {
  const executable = await realpath(join(host, 'openvision'));
  const found = [];
  for (const name of await readdir('/proc')) {
    if (!/^\d+$/.test(name)) continue;
    if (await readlink(`/proc/${name}/exe`).catch(() => null) === executable) found.push(Number(name));
  }
  return found;
}
async function until(check, timeout, message) {
  const deadline = Date.now() + timeout;
  for (;;) {
    const value = await check();
    if (value) return value;
    if (Date.now() > deadline) throw Error(message);
    await new Promise(next => setTimeout(next, 250));
  }
}
const homeConfig = ['.config/OpenVision', '.config/Cursor', '.cursor', '.openvision'].map(name => join(homedir(), name));
const exists = path => access(path).then(() => true, () => false);

async function launch(name, args, act, match = 'true') {
  const record = { name, args };
  result.launches.push(record);
  await unlink(join(profile, 'DevToolsActivePort')).catch(error => { if (error.code !== 'ENOENT') throw error; });
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  const launcher = spawnSync(join(portable, 'OpenVision'), ['--remote-debugging-port=0', ...ozoneArguments(env), ...args],
    { cwd: directory, env, encoding: 'utf8', timeout: 30000 });
  record.launcherExit = launcher.status;
  assert.equal(launcher.status, 0, `Launcher failed: ${launcher.stderr}`);
  let page;
  try {
    const port = await until(async () => (await readFile(join(profile, 'DevToolsActivePort'), 'utf8').catch(() => ''))
      .split('\n')[0], 60000, 'The package did not create its profile in electron-host/data/local');
    record.profileDevToolsFile = true;
    // Raw CDP to the window target: Playwright's connectOverCDP attaches to an
    // internal error page instead of this vscode-file:// workbench.
    // Pick the window this launch is about: VS Code may also restore the previous window.
    page = await until(async () => {
      const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then(response => response.json(), () => []);
      record.windows = targets.filter(item => item.type === 'page' && item.url.includes('/workbench/')).length;
      for (const target of targets.filter(item => item.type === 'page' && item.url.includes('/workbench/'))) {
        assert.ok(decodeURIComponent(target.url).includes(`${host}/resources/app/`), `Window must load the relocated package: ${target.url}`);
        const candidate = await cdpPage(target.webSocketDebuggerUrl);
        if (await candidate.evaluate(match).catch(() => false)) return candidate;
        candidate.close();
      }
    }, 60000, 'No matching workbench window');
    record.workbenchUrlInsidePackage = true;
    record.pids = await packageProcesses();
    assert.ok(record.pids.length > 0, 'Package processes must run from the relocated executable');
    await act(page, record).catch(async error => {
      record.visibleText = await page.evaluate('document.body.innerText.slice(0, 2000)').catch(() => null);
      record.failureTitle = await page.evaluate('document.title').catch(() => null);
      record.failureDom = await page.evaluate(`({ dialogs: document.querySelectorAll('dialog').length,
        welcomeDialog: !!document.querySelector('dialog.ov-welcome-dialog'), sidebar: !!document.querySelector('.part.sidebar'),
        sidebarVisible: !!document.querySelector('.part.sidebar')?.getClientRects().length,
        treeItems: [...document.querySelectorAll('[role=treeitem]')].map(item => item.textContent).slice(0, 10),
        workbench: document.querySelector('.monaco-workbench')?.className })`).catch(error => error.message);
      record.failureTargets = await fetch(`http://127.0.0.1:${port}/json/list`).then(response => response.json())
        .then(items => items.map(({ type, title, url }) => ({ type, title, url: url.slice(-60) })), () => null);
      const shot = await page.send('Page.captureScreenshot').catch(() => null);
      if (shot) await writeFile(join(directory, `${name}-failure.png`), Buffer.from(shot.data, 'base64'));
      throw error;
    });
    // Browser.close closes every window; on Linux the editor quits with its last window.
    const { webSocketDebuggerUrl } = await fetch(`http://127.0.0.1:${port}/json/version`).then(response => response.json());
    const browser = await cdpPage(webSocketDebuggerUrl);
    await browser.send('Browser.close').catch(() => {});
    browser.close();
    await until(async () => !(await packageProcesses()).length, 60000, 'Package processes did not exit after Quit');
    record.quitCleanly = true;
  } finally {
    page?.close();
    const leftovers = await packageProcesses().catch(() => []);
    if (leftovers.length) {
      record.leftovers = leftovers;
      // Identity-checked cleanup: only processes whose executable is this disposable package copy.
      for (const pid of leftovers) try { process.kill(pid, 'SIGTERM'); } catch {}
    }
  }
}

async function cdpPage(url) {
  const socket = new WebSocket(url);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = () => reject(Error('CDP connection failed')); });
  let sequence = 0;
  const pending = new Map();
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    const waiter = pending.get(message.id);
    if (!waiter) return;
    pending.delete(message.id);
    if (message.error) waiter.reject(Error(message.error.message)); else waiter.resolve(message.result);
  };
  // A closing target answers nothing more; settle outstanding calls instead of hanging.
  socket.onclose = () => { for (const waiter of pending.values()) waiter.reject(Error('CDP connection closed')); pending.clear(); };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    if (socket.readyState !== WebSocket.OPEN) return reject(Error('CDP connection closed'));
    const id = ++sequence; pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async expression => {
    const { result: value, exceptionDetails } = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (exceptionDetails) throw Error(exceptionDetails.exception?.description ?? exceptionDetails.text);
    return value.value;
  };
  const waitFor = (expression, timeout, message) => until(() => evaluate(expression).catch(() => false), timeout, message);
  return { send, evaluate, waitFor, close: () => socket.close() };
}

async function windowClass(pids) {
  if (!process.env.DISPLAY || process.env.WAYLAND_DISPLAY || process.env.OPENVISION_OZONE_PLATFORM === 'wayland')
    return { skipped: 'WM_CLASS is an X11 property; this run used Wayland' };
  const tool = spawnSync('xdotool', ['version']);
  if (tool.error) return { skipped: 'xdotool is not installed' };
  for (const pid of pids) {
    const search = spawnSync('xdotool', ['search', '--onlyvisible', '--pid', String(pid)], { encoding: 'utf8' });
    for (const id of search.stdout.split('\n').filter(Boolean)) {
      const property = spawnSync('xprop', ['-id', id, 'WM_CLASS'], { encoding: 'utf8' }).stdout.trim();
      const classes = [...property.matchAll(/"([^"]*)"/g)].map(match => match[1]);
      if (classes.length) return { window: id, pid, classes };
    }
  }
  return { classes: [] };
}

try {
  // 1. Package from this checkout into a fresh folder.
  const packaging = spawnSync(process.execPath, [join(root, 'desktop/package-portable.mjs'), staged], { cwd: root, encoding: 'utf8' });
  assert.equal(packaging.status, 0, packaging.stderr);
  result.checks.packaged = true;

  // 2. Static package contents.
  const files = await walk(staged);
  result.package = { entries: files.length, bytes: 0 };
  const links = [], setuid = [], privateNames = [];
  const privatePattern = /^(?:DevToolsActivePort|Cookies|Local State|Login Data|state\.vscdb(?:\.backup)?|storage\.json|auth\.json|\.npmrc|\.env|argv\.json|\.git)$|\.(?:vscdb|sqlite|pem|key)$/;
  for (const { path, entry } of files) {
    const name = relative(staged, path);
    if (entry.isSymbolicLink()) links.push(name);
    if (entry.isFile()) {
      const info = await stat(path);
      result.package.bytes += info.size;
      if (info.mode & 0o6000) setuid.push(name);
    }
    if (privatePattern.test(entry.name)) privateNames.push(name);
  }
  assert.deepEqual(links, [], 'The package must not contain links to the build machine');
  assert.deepEqual(setuid, [], 'A portable copy must not carry setuid/setgid bits');
  assert.deepEqual(privateNames, [], 'The package must not contain profile, credential or repository files');
  for (const folder of ['electron-host/data', 'electron-host/logs', 'electron-host/backups', 'electron-host/resources/app/.git'])
    assert.equal(await exists(join(staged, folder)), false, `${folder} must not be packaged`);
  result.checks.noExternalLinksProfileOrCredentials = true;
  const manifest = JSON.parse(await readFile(join(staged, 'openvision-package.json'), 'utf8'));
  assert.deepEqual(manifest, { name: 'OpenVision', version, platform: 'linux', arch: process.arch, profileIncluded: false, credentialsIncluded: false });
  result.manifest = manifest; result.checks.packageManifest = true;
  for (const script of ['OpenVision', 'install-desktop-entry.sh', 'uninstall-desktop-entry.sh'])
    assert.ok(((await stat(join(staged, script))).mode & 0o111) === 0o111, `${script} must be executable`);
  assert.ok(((await stat(join(staged, 'electron-host/openvision'))).mode & 0o111) === 0o111);
  result.checks.executables = true;
  result.packageHash = { launcher: await fileHash(join(staged, 'OpenVision')), executable: await fileHash(join(staged, 'electron-host/openvision')) };

  // 3. Relocate: the launcher must not depend on the folder it was built in.
  await mkdir(join(portable, '..'), { recursive: true });
  await rename(staged, portable);
  await mkdir(project); await writeFile(join(project, 'notes été.txt'), 'Relocated package probe\n');
  const before = new Set((await walk(portable)).map(({ path }) => relative(portable, path)));
  const homeBefore = Object.fromEntries(await Promise.all(homeConfig.map(async path => [path, await exists(path)])));

  // 4. First launch: welcome screen, profile inside the package, window identity, a persisted value.
  const probe = `package-${Date.now()}`;
  await launch('first', ['--glass'], async (page, record) => {
    await page.waitFor(`!!document.querySelector('[aria-label="Welcome to OpenVision"]')?.getClientRects().length`, 60000, 'Welcome screen missing');
    record.welcome = true;
    await page.evaluate(`localStorage.setItem('openvision.package.probe', ${JSON.stringify(probe)})`);
    record.windowClass = await windowClass(record.pids);
  });
  const identity = result.launches[0].windowClass;
  if (!identity.skipped) {
    assert.ok(identity.classes.length, 'The package window must expose WM_CLASS');
    assert.ok(identity.classes.every(value => value === 'openvision'), `WM_CLASS must be openvision: ${identity.classes}`);
    result.checks.windowClassOpenvision = true;
  } else result.checks.windowClassOpenvision = identity.skipped;
  assert.ok(await exists(join(profile, 'User')), 'User settings must live in electron-host/data/local');
  result.checks.profileInPackage = true;

  // 5. Restart through the launcher with a folder whose path has spaces and Unicode.
  await launch('restart', [project], async (page, record) => {
    await page.waitFor(`!!document.querySelector('.monaco-workbench')`, 60000, 'Workbench missing');
    record.persistedProbe = await page.waitFor(`localStorage.getItem('openvision.package.probe')`, 10000, 'Probe missing');
    assert.equal(record.persistedProbe, probe, 'The profile must persist across restart');
    // The window was selected by its workspace configuration (the Unicode folder). After the
    // default --glass start it opens in the Agent layout with Project Home, which lists the folder.
    record.workspace = await page.evaluate('JSON.stringify(vscode.context.configuration().workspace)');
    record.layout = await page.evaluate(`document.querySelector('.part.sidebar') ? 'editor' : 'agent'`);
    await page.waitFor(`document.body.innerText.includes(${JSON.stringify(project)})`, 30000, 'Project Home does not list the opened folder');
    record.title = await page.evaluate('document.title');
    record.projectOpened = true;
  }, `JSON.stringify(vscode.context.configuration()?.workspace ?? null).includes(${JSON.stringify(JSON.stringify(project).slice(1, -1).split('/').pop())})`);
  result.checks.profilePersistsAcrossRestart = true;
  result.checks.unicodeFolderArgumentOpened = true;

  const created = (await walk(portable)).map(({ path }) => relative(portable, path)).filter(name => !before.has(name));
  const outside = created.filter(name => name !== 'electron-host/data' && !name.startsWith('electron-host/data/'));
  result.createdOutsideProfile = outside;
  assert.deepEqual(outside, [], 'Runtime writes inside the package must stay under electron-host/data');
  const homeAfter = Object.fromEntries(await Promise.all(homeConfig.map(async path => [path, await exists(path)])));
  result.homeConfig = { before: homeBefore, after: homeAfter };
  for (const path of homeConfig) if (!homeBefore[path]) assert.equal(homeAfter[path], false, `${path} must not be created`);
  result.checks.noHomeProfile = true;

  // 6. Launcher entry: install into a disposable XDG data folder, validate, remove only what was added.
  const data = join(directory, 'xdg data home');
  await mkdir(join(data, 'applications'), { recursive: true });
  await writeFile(join(data, 'applications/unrelated.desktop'), '[Desktop Entry]\nType=Application\nName=Unrelated\nExec=true\n');
  const xdg = { ...process.env, XDG_DATA_HOME: data };
  const install = spawnSync(join(portable, 'install-desktop-entry.sh'), [], { env: xdg, encoding: 'utf8' });
  assert.equal(install.status, 0, install.stderr);
  const entryFile = join(data, 'applications/openvision.desktop');
  const entry = await readFile(entryFile, 'utf8');
  result.desktopEntry = entry;
  const exec = entry.match(/^Exec="(.*)" %F$/m)?.[1];
  assert.equal(exec?.replace(/\\\\/g, '\\').replace(/\\([\\"`$])/g, '$1').replaceAll('%%', '%'), join(portable, 'OpenVision'));
  assert.match(entry, /^StartupWMClass=openvision$/m); assert.match(entry, /^Icon=openvision$/m);
  const validator = spawnSync('desktop-file-validate', [entryFile], { encoding: 'utf8' });
  if (validator.error) result.checks.desktopFileValidate = 'desktop-file-validate is not installed';
  else {
    result.desktopFileValidate = { status: validator.status, output: (validator.stdout + validator.stderr).trim() };
    assert.equal(validator.status, 0, result.desktopFileValidate.output);
    assert.doesNotMatch(result.desktopFileValidate.output, /: error:/);
    result.checks.desktopFileValidate = true;
  }
  const remove = spawnSync(join(portable, 'uninstall-desktop-entry.sh'), [], { env: xdg, encoding: 'utf8' });
  assert.equal(remove.status, 0, remove.stderr);
  assert.equal(await exists(entryFile), false);
  assert.equal(await exists(join(data, 'icons/hicolor/256x256/apps/openvision.png')), false);
  assert.equal(await exists(join(data, 'applications/unrelated.desktop')), true, 'Unrelated entries must remain');
  result.checks.desktopEntryInstallAndRemove = true;
  assert.ok(result.launches.every(launch => launch.quitCleanly && !launch.leftovers));
  result.success = true;
} catch (error) { result.failure = error.stack; }
finally {
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (!result.success) process.exitCode = 1;
}
