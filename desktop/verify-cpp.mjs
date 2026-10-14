import assert from 'node:assert/strict';
import { mkdir, mkdtemp, writeFile, readFile, copyFile, cp } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { _electron } from '../tooling/browser.mjs';
import { loadRuntime } from './source-assembly.mjs';
import { fileHash } from './import-files.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { prepareCpp, cppArguments } from './setup-cpp.mjs';

const root = resolve(import.meta.dirname, '..'), tools = await prepareCpp(root);
const { layout } = await loadRuntime(root);
const directory = await mkdtemp(join(root, 'logs/cpp-verification-'));
const profile = join(directory, 'profile'), project = join(directory, 'project');
const extension = join(directory, 'driver'), extensions = join(directory, 'extensions');
await Promise.all([mkdir(join(profile, 'User'), { recursive: true }), mkdir(project), mkdir(extension), mkdir(extensions)]);
await cp(tools.extension, join(extensions, 'llvm-vs-code-extensions.vscode-clangd-0.6.0'), { recursive: true });
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'clangd.path': tools.executable, 'clangd.checkUpdates': false, 'clangd.arguments': [...cppArguments(), '--log=verbose'],
  'editor.formatOnSave': false, 'files.eol': '\n', 'files.autoSave': 'off',
  '[c]': { 'editor.defaultFormatter': 'llvm-vs-code-extensions.vscode-clangd' },
  '[cpp]': { 'editor.defaultFormatter': 'llvm-vs-code-extensions.vscode-clangd' } }));
const files = {
  'math.hpp': '#pragma once\nint sum(int a, int b);\n',
  'math.cpp': '#include "math.hpp"\nint sum(int a, int b) { return a + b; }\n',
  'main.cpp': '#include "math.hpp"\nint main() { return sum(2, 3) == 5 ? 0 : 1; }\n',
  'bad.cpp': 'int number = "invalid";\n', 'bad.c': 'int number = "invalid";\n',
  'format.cpp': 'int formatted(){return 7;}\n', 'format.c': 'int formatted(){return 7;}\n',
  'complete.cpp': 'int addNumbers(int a, int b);\nint completionProbe() { return add; }\n',
  'complete.c': 'int addNumbers(int a, int b);\nint completionProbe() { return add; }\n',
};
for (const [name, text] of Object.entries(files)) await writeFile(join(project, name), text);
const compiler = 'C:/Program Files (x86)/Microsoft Visual Studio/2022/BuildTools/VC/Tools/MSVC/14.44.35207/bin/Hostx64/x64/cl.exe';
const commands = Object.keys(files).filter(name => /\.(c|cpp)$/.test(name)).map(name => ({ directory: project,
  file: join(project, name), arguments: [compiler, '/nologo', '/c', ...(name.endsWith('.cpp') ? ['/std:c++17'] : []), join(project, name)] }));
await writeFile(join(project, 'compile_commands.json'), JSON.stringify(commands, null, 2));
await writeFile(join(extension, 'package.json'), JSON.stringify({ name: 'openvision-cpp-verifier',
  publisher: 'openvision-local-verification', version: '0.0.0', engines: { vscode: '^1.90.0' },
  main: './extension.cjs', activationEvents: ['onStartupFinished'] }));
await copyFile(join(root, 'desktop/verify-cpp-extension.cjs'), join(extension, 'extension.cjs'));
const workbench = join(root, 'source/app/out/vs/workbench/workbench.desktop.main.js');
const result = { directory, platform: process.platform, launcher_node: process.version,
  workbench: await fileHash(workbench), server: await fileHash(tools.executable),
  extension: await fileHash(join(tools.extension, 'out/bundle.js')), compiler: await fileHash(compiler),
  scope: 'Native Windows OpenVision with official clangd extension/server; public API driver; no AI inference or mock language provider.' };
const errors = [];
let app, page;
try {
  const env = { ...process.env }; delete env.ELECTRON_RUN_AS_NODE;
  app = await _electron.launch({ executablePath: layout.executable, env, timeout: 60000,
    args: ['--user-data-dir', profile, '--extensions-dir', extensions, '--extensionDevelopmentPath', extension,
      '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', project] });
  page = await app.firstWindow(); page.on('pageerror', error => errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ timeout: 60000 });
  const deadline = Date.now() + 240000;
  while (Date.now() < deadline) {
    try { result.native = JSON.parse(await readFile(join(directory, 'extension-result.json'), 'utf8')); break; }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    await page.waitForTimeout(500);
  }
  assert.ok(result.native, 'Native C/C++ driver must finish');
  assert.equal(result.native.success, true, result.native.failure);
  const buildScript = join(project, 'verify-build.cmd');
  await writeFile(buildScript, '@echo off\r\ncall "C:\\Program Files (x86)\\Microsoft Visual Studio\\2022\\BuildTools\\VC\\Auxiliary\\Build\\vcvars64.bat" >nul\r\nif errorlevel 1 exit /b 1\r\ncl /nologo /EHsc main.cpp math.cpp /Fe:verify-cpp.exe\r\nexit /b %errorlevel%\r\n');
  const build = spawnSync('cmd.exe', ['/d', '/c', 'verify-build.cmd'], { cwd: project, encoding: 'utf8', windowsHide: true });
  result.build = { status: build.status, stdout: build.stdout, stderr: build.stderr };
  assert.equal(build.status, 0);
  const run = spawnSync(join(project, 'verify-cpp.exe'), [], { cwd: project, timeout: 10000, windowsHide: true });
  assert.equal(run.status, 0); result.compiled_program_exit = run.status;
  assert.equal(await fileHash(workbench), result.workbench);
  assert.deepEqual(errors, []);
  result.success = true;
} catch (error) { result.success = false; result.failure = error.stack; process.exitCode = 1; }
finally {
  if (page) await page.screenshot({ path: join(directory, 'native-cpp.png') }).catch(() => {});
  if (app) await app.close();
  result.page_errors = errors;
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}
