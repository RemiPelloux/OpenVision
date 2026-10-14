import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile, copyFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { fileHash } from './import-files.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout } = await loadRuntime(root);
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/language-verification-'));
const profile = join(directory, 'profile');
const project = join(directory, 'project');
const extension = join(directory, 'driver');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(project), mkdir(extension)]);
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'editor.quickSuggestions': false, 'git.openRepositoryInParentFolders': 'never',
  'typescript.disableAutomaticTypeAcquisition': true, 'typescript.tsserver.experimental.enableProjectDiagnostics': true,
  'typescript.tsserver.log': 'verbose',
  'typescript.format.enable': true, 'javascript.format.enable': true,
  'editor.formatOnSave': false, 'editor.detectIndentation': false, 'editor.tabSize': 2,
  'files.autoSave': 'off', 'files.eol': '\n', 'window.restoreWindows': 'none' }));
const fixtures = {
  'tsconfig.json': JSON.stringify({ compilerOptions: { strict: true, allowJs: true, checkJs: true,
    noEmit: true, target: 'ES2022', module: 'CommonJS' }, include: ['*.ts', '*.js'], exclude: ['large.ts'] }),
  'library.ts': 'export function greet(name: string): string { return `Hello ${name}`; }\n',
  'consumer.ts': 'import { greet } from "./library";\nconst wrong: number = "diagnostic fixture";\nconsole.log(greet("OpenVision"));\n',
  'other.ts': 'import { greet } from "./library";\nexport const other = greet("second file");\n',
  'checked.js': '// @ts-check\n/** @type {number} */\nconst wrong = "JavaScript diagnostic";\nexport {};\n',
  'format.ts': 'export const formatValue={alpha:1,beta:2};\n',
  'format.js': 'export const formatValue={alpha:1,beta:2};\n',
  'js-library.js': '/** @param {string} name */\nexport function jsGreet(name) { return `Hello ${name}`; }\n',
  'js-other.js': 'import { jsGreet } from "./js-library";\nexport const jsOther = jsGreet("second file");\n',
  'js-consumer.js': 'import { jsGreet } from "./js-library";\nconsole.log(jsGreet("OpenVision"));\n',
  'conflict.ts': 'export const conflictValue = 1;\n',
  'large.ts': 'import { welcome } from "./library";\n' + Array.from({ length: 25000 }, (_, index) =>
    `const fixtureValue${index} = ${index};\n`).join('') + 'console.log(welcome("large file"));\n',
};
for (const [name, content] of Object.entries(fixtures)) await writeFile(join(project, name), content);
await writeFile(join(extension, 'package.json'), JSON.stringify({ name: 'openvision-language-verifier',
  publisher: 'openvision-local-verification', version: '0.0.0', engines: { vscode: '^1.90.0' },
  main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/verify-language-extension.cjs'), join(extension, 'extension.cjs'));
await copyFile(join(root, 'desktop/verify-language-cross-file.cjs'), join(extension, 'cross-file.cjs'));
const identityPaths = ['build/source-build.json', 'source/app/out/vs/workbench/workbench.desktop.main.js',
  'source/app/extensions/typescript-language-features/package.json',
  'source/app/extensions/typescript-language-features/dist/extension.js',
  'source/app/extensions/node_modules/typescript/package.json',
  'source/app/extensions/node_modules/typescript/lib/typescript.js', 'desktop/verify-language-extension.cjs',
  'desktop/verify-language-cross-file.cjs'];
const identities = Object.fromEntries(await Promise.all(identityPaths.map(async path => [path, await fileHash(join(root, path))])));
const result = { checked_at: new Date().toISOString(), directory, platform: process.platform,
  arch: process.arch, node: process.version, identities, executable_sha256: await fileHash(layout.executable),
  compiler: JSON.parse(await readFile(join(root, 'source/app/extensions/node_modules/typescript/package.json'), 'utf8')).version,
  inputs: Object.fromEntries(await Promise.all(Object.keys(fixtures).map(async name => [name, await fileHash(join(project, name))]))),
  limitations: ['Uses an explicitly declared extension fixture to drive native public VS Code APIs, plus native definition/format/undo/redo commands.',
    'Does not establish keyboard/menu accessibility for every action, other language extensions, macOS/Linux, merge resolution, or third-party compatibility.',
    'Large-file navigation timing is one observation; CPU, process-family peak memory and token costs are not measured.'] };
let app, page;
const errors = [];

async function languageProtocolEvidence() {
  const base = join(profile, 'logs');
  const logs = (await readdir(base, { recursive: true })).filter(path => path.endsWith('tsserver.log'));
  const evidence = [];
  for (const name of logs) {
    const path = join(base, name);
    const content = await readFile(path, 'utf8');
    const changes = [];
    for (const line of content.split('\n')) {
      if (!line.trimStart().startsWith('{"seq"') || !line.includes('"command":"updateOpen"')) continue;
      const request = JSON.parse(line.trim());
      for (const changed of request.arguments.changedFiles ?? []) {
        if (!changed.textChanges.some(change => change.newText === '42')) continue;
        changes.push({ file: changed.fileName, changes: changed.textChanges,
          reopened_files: request.arguments.openFiles?.length ?? 0 });
      }
    }
    evidence.push({ path, sha256: await fileHash(path), version: content.match(/Version: ([^\r\n]+)/)?.[1], changes });
  }
  assert.ok(evidence.length > 0, 'Native tsserver logs must exist');
  assert.ok(evidence.every(item => item.version === result.compiler), 'Running compiler must match the pinned package');
  for (const name of ['consumer.ts', 'checked.js']) assert.ok(evidence.some(item => item.changes.some(
    change => change.file.endsWith(name) && change.reopened_files === 0)), `${name} must use a ranged update`);
  return evidence;
}

try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'),
      '--extensionDevelopmentPath', extension, '--new-window', '--disable-updates', '--skip-welcome',
      '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...(process.platform === 'linux' ? await linuxSandboxArguments(layout.host) : []), project] });
  page = await app.firstWindow();
  page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  const deadline = Date.now() + 240000;
  while (Date.now() < deadline) {
    try { result.native = JSON.parse(await readFile(join(directory, 'extension-result.json'), 'utf8')); break; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await page.waitForTimeout(500);
  }
  assert.ok(result.native, 'Native extension must finish');
  assert.equal(result.native.success, true, result.native.failure);
  for (const path of identityPaths) assert.equal(await fileHash(join(root, path)), identities[path],
    `Selected build or driver changed during verification: ${path}`);
  result.input_build_unchanged = true;
  assert.deepEqual(errors, []);
  await page.screenshot({ path: join(directory, 'native-language.png') });
  result.success = true;
} catch (error) {
  result.success = false; result.failure = error.stack;
  if (page) {
    await page.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
    await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText()).catch(() => {});
  }
  process.exitCode = 1;
} finally {
  if (app) {
    const child = app.process();
    await app.close();
    result.host_exit = { pid: child.pid, code: child.exitCode, signal: child.signalCode };
    if (child.exitCode !== 0) { result.success = false; result.cleanup_failure = 'Native host did not exit 0'; process.exitCode = 1; }
  }
  if (result.success) {
    try { result.language_protocol = await languageProtocolEvidence(); }
    catch (error) { result.success = false; result.failure = error.stack; process.exitCode = 1; }
  }
  result.page_errors = errors;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
