// OV-702 extension lifecycle verifier. Builds local fixture VSIX files (including
// locally compiled native addons), then runs five sequential launches of the
// assembled desktop against one disposable profile and extensions directory.
// No marketplace request is made: every package is installed from a local file.
import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile, readdir, copyFile, access } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { fileHash } from './import-files.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { buildAddons, elfMachine, fixtureCatalogue, phasePlans, translationKey, vsix, languagePack, publisher, keptSetting, protectedTarget } from './extension-lifecycle.mjs';
import { evaluateLifecycle } from './extension-lifecycle-cases.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/extension-lifecycle-'));
const profile = join(directory, 'profile'), project = join(directory, 'project'), driver = join(directory, 'driver');
const extensions = join(directory, 'extensions'), packages = join(directory, 'vsix');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(project), mkdir(driver), mkdir(packages)]);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings, 'git.enabled': false,
  'window.restoreWindows': 'none', 'extensions.autoCheckUpdates': false, 'extensions.ignoreRecommendations': true }, null, 2));
await writeFile(join(project, 'README.md'), '# OV-702 lifecycle fixture\n');
await writeFile(join(driver, 'package.json'), JSON.stringify({ name: 'openvision-extension-lifecycle-verifier',
  publisher: 'openvision-local-verification', version: '0.0.0', engines: { vscode: '^1.90.0' },
  main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/verify-extension-lifecycle-extension.cjs'), join(driver, 'extension.cjs'));

const app = appRoot;
const identityPaths = ['build/source-build.json', 'source/app/out/vs/workbench/workbench.desktop.main.js',
  'source/app/out/vs/workbench/api/node/extensionHostProcess.js', 'source/app/out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js',
  'source/app/out/main.js', 'desktop/extension-lifecycle.mjs', 'desktop/extension-lifecycle-cases.mjs', 'desktop/verify-extension-lifecycle-extension.cjs'];
const identities = Object.fromEntries(await Promise.all(identityPaths.map(async path => [path, await fileHash(join(root, path))])));

// Fixtures: compile addons with the launcher Node headers (a different module ABI than Electron).
const headers = [join(dirname(dirname(process.execPath)), 'include/node'), join(process.env.HOME ?? '', `.cache/node-gyp/${process.versions.node}/include/node`)];
let headerDir;
for (const candidate of headers) if (await access(join(candidate, 'node_api.h')).then(() => true, () => false)) { headerDir = candidate; break; }
if (!headerDir) throw new Error(`Node headers are required to compile the native-addon fixtures (looked in ${headers.join(', ')})`);
const addons = await buildAddons(join(directory, 'addons'), headerDir);
const keys = JSON.parse(await readFile(join(app, 'out/nls.keys.json'), 'utf8'));
const translation = translationKey(keys);
// The protected bundled extension, copied byte for byte (dependencies excluded).
const protectedDirectory = join(app, 'extensions', protectedTarget.split('.')[1]);
const protectedManifest = JSON.parse(await readFile(join(protectedDirectory, 'package.json'), 'utf8'));
assert.equal(`${protectedManifest.publisher}.${protectedManifest.name}`, protectedTarget);
const protectedFiles = {};
async function collect(folder, prefix = '') {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const relative = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory() && entry.name !== 'node_modules') await collect(join(folder, entry.name), relative);
    else if (entry.isFile() && relative !== 'package.json') protectedFiles[relative] = await readFile(join(folder, entry.name));
  }
}
await collect(protectedDirectory);
const catalogue = fixtureCatalogue({ ...addons, translation, protectedManifest, protectedFiles });
const packageHashes = {};
for (const [name, fixture] of Object.entries(catalogue)) {
  const bytes = vsix(fixture);
  await writeFile(join(packages, `${name}.vsix`), bytes);
  packageHashes[name] = await fileHash(join(packages, `${name}.vsix`));
}
const englishLabel = JSON.parse(await readFile(join(app, 'out/nls.messages.json'), 'utf8'))[translation.index];
const result = { checked_at: new Date().toISOString(), scope: 'Linux x64 only', directory, platform: process.platform, arch: process.arch,
  launcher_node: process.version, executable_sha256: await fileHash(layout.executable), identities, packages: packageHashes,
  addons: { header_dir: headerDir, header_module_version: addons.headerModuleVersion, napi_elf: elfMachine(addons.napi),
    wrong_arch_elf: elfMachine(addons.wrongArch) }, translation: { ...translation, english: englishLabel, translated: languagePack.label },
  limitations: ['Local VSIX fixtures only; marketplace install, gallery update checks and signature verification are not exercised.',
    'The wrong-architecture addon is a valid x64 shared object whose ELF machine field is set to AArch64.',
    'The display language is switched through the profile argv.json locale key, the file the Configure Display Language command writes.'],
  phases: [] };

const argvPath = join(profile, 'User/.openvision-local/argv.json');
async function setLocale(locale) {
  let text = await readFile(argvPath, 'utf8').catch(() => '{}');
  const value = JSON.parse(text.replace(/^\s*\/\/.*$/gm, '').replace(/,(\s*[}\]])/g, '$1') || '{}');
  if (locale) value.locale = locale; else delete value.locale;
  await mkdir(dirname(argvPath), { recursive: true });
  await writeFile(argvPath, JSON.stringify(value, null, 2));
}

async function diskState() {
  const entries = (await readdir(extensions).catch(() => [])).sort();
  const registry = JSON.parse(await readFile(join(extensions, 'extensions.json'), 'utf8').catch(() => '[]'));
  const obsolete = JSON.parse(await readFile(join(extensions, '.obsolete'), 'utf8').catch(() => 'null'));
  const settings = JSON.parse(await readFile(join(profile, 'User/settings.json'), 'utf8').catch(() => 'null'));
  const languagePacks = JSON.parse(await readFile(join(profile, 'languagepacks.json'), 'utf8').catch(() => 'null'));
  return { entries, registry: registry.map(item => ({ id: item.identifier?.id, version: item.version, location: item.relativeLocation })),
    obsolete, setting: settings?.[keptSetting.key] ?? null, language_packs: languagePacks && Object.keys(languagePacks),
    argv_locale: JSON.parse((await readFile(argvPath, 'utf8').catch(() => '{}')).replace(/^\s*\/\/.*$/gm, '') || '{}').locale ?? null };
}

async function logLines() {
  const lines = [];
  const logs = join(profile, 'logs');
  for (const session of (await readdir(logs).catch(() => [])).sort()) {
    const walk = async (folder, relative) => {
      for (const entry of await readdir(folder, { withFileTypes: true }).catch(() => [])) {
        const path = join(folder, entry.name), name = `${relative}/${entry.name}`;
        if (entry.isDirectory()) await walk(path, name);
        else if (entry.name.endsWith('.log')) for (const line of (await readFile(path, 'utf8')).split('\n'))
          if (line.includes(publisher) || /anysphere\.cursor-mcp|verification failed|NODE_MODULE_VERSION|architecture/i.test(line)) lines.push(`${name}: ${line.slice(0, 600)}`);
      }
    };
    await walk(join(logs, session), session);
  }
  return lines;
}

// Register a protected copy without the installer (pre-existing profile state).
async function seedProtected(version) {
  const fixture = catalogue['protected-full'], name = `${protectedTarget}-${version}`, target = join(extensions, name);
  for (const [relative, data] of Object.entries({ ...fixture.files, 'package.json': JSON.stringify({ ...fixture.manifest, version }) })) {
    await mkdir(dirname(join(target, relative)), { recursive: true });
    await writeFile(join(target, relative), data);
  }
  const registry = JSON.parse(await readFile(join(extensions, 'extensions.json'), 'utf8'));
  registry.push({ identifier: { id: protectedTarget }, version, location: { $mid: 1, path: target, scheme: 'file' },
    relativeLocation: name, metadata: { installedTimestamp: Date.now(), pinned: true, source: 'vsix' } });
  await writeFile(join(extensions, 'extensions.json'), JSON.stringify(registry));
}

async function launch(plan) {
  if (plan.locale !== undefined) await setLocale(plan.locale === 'en' ? null : plan.locale);
  if (plan.seedProtected) await seedProtected(plan.seedProtected);
  await writeFile(join(directory, 'plan.json'), JSON.stringify(plan, null, 2));
  const phase = { phase: plan.phase, locale_requested: plan.locale ?? null, dialogs: [], page_errors: [], before: await diskState() };
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  let application, page;
  try {
    application = await _electron.launch({ executablePath: layout.executable, env, timeout: 90000,
      args: ['--user-data-dir', profile, '--extensions-dir', extensions, '--extensionDevelopmentPath', driver, '--new-window',
        '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
        ...await linuxSandboxArguments(layout.host), project] });
    page = await application.firstWindow();
    page.on('pageerror', error => phase.page_errors.push(error.message));
    await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 90000 });
    await enterWorkspace(page);
    const output = join(directory, `phase-${plan.phase}.json`);
    const deadline = Date.now() + 300000;
    while (Date.now() < deadline) {
      if (await access(output).then(() => true, () => false)) break;
      const dialog = page.locator('.monaco-dialog-box').filter({ visible: true });
      if (await dialog.count()) {
        const text = (await dialog.first().innerText()).slice(0, 1000);
        const button = dialog.first().getByRole('button', { name: /trust|install/i }).first();
        phase.dialogs.push({ text, clicked: await button.count() ? await button.innerText() : null });
        if (await button.count()) await button.click(); else await page.keyboard.press('Escape');
      }
      await page.waitForTimeout(250);
    }
    phase.driver = JSON.parse(await readFile(output, 'utf8'));
    const html = await page.evaluate(() => document.body.innerHTML);
    phase.ui = { translated_label_present: html.includes(languagePack.label), english_label_present: html.includes(`>${englishLabel}<`) };
    const notifications = page.locator('.notifications-toasts .notification-toast, .notification-list-item-message').filter({ visible: true });
    phase.notifications = (await notifications.allInnerTexts().catch(() => [])).map(text => text.slice(0, 500));
    await page.screenshot({ path: join(directory, `phase-${plan.phase}.png`) }).catch(() => {});
  } catch (error) {
    phase.failure = error.stack;
    if (page) await page.screenshot({ path: join(directory, `phase-${plan.phase}-failure.png`) }).catch(() => {});
  } finally {
    if (application) {
      const child = application.process();
      await application.close().catch(() => {});
      phase.host_exit = { code: child.exitCode, signal: child.signalCode };
    }
  }
  phase.after = await diskState();
  return phase;
}

try {
  for (const plan of phasePlans(packages, extensions)) {
    const phase = await launch(plan);
    result.phases.push(phase);
    if (phase.failure) break;
  }
  result.log_lines = await logLines();
  for (const path of Object.keys(identities)) assert.equal(await fileHash(join(root, path)), identities[path], `Input changed: ${path}`);
  result.input_build_unchanged = true;
  result.cases = evaluateLifecycle(result);
  result.success = result.phases.length === 5 && Object.values(result.cases).every(item => item.status === 'pass') &&
    result.phases.every(phase => !phase.failure && phase.host_exit?.code === 0 && !phase.page_errors.length);
} catch (error) {
  result.success = false; result.failure = error.stack;
} finally {
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ success: result.success, directory, failure: result.failure ?? result.phases.find(phase => phase.failure)?.failure,
    cases: Object.fromEntries(Object.entries(result.cases ?? {}).map(([key, value]) => [key, value.status === 'pass' ? 'pass' : `${value.status}: ${value.detail}`])),
    host_exits: result.phases.map(phase => phase.host_exit), page_errors: result.phases.flatMap(phase => phase.page_errors) }, null, 2));
  process.exitCode = result.success ? 0 : 1;
}
