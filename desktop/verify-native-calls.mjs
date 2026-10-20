import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { mkdir, mkdtemp, readFile, readdir, realpath, writeFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { _electron } from '../tooling/browser.mjs';
import { verificationRuntime } from './verification-runtime.mjs';
import { verificationSettings } from './verification-profile.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { fileHash } from './import-files.mjs';
import { enterWorkspace } from './verification-workspace.mjs';
import { createAgentSearchFixture } from './verify-agent-search.mjs';
import { createAgentCommandFixture } from './verify-agent-commands.mjs';
import { summarizeNativeCalls, parseExecTrace, rankHelpers, proprietaryHelpers } from './native-call-ranking.mjs';

// OV-803 measured dependency ranking (Linux x64). One fixed workload runs in the
// real OpenVision build with the env-gated native call log enabled and the whole
// process tree under execve tracing: startup, Explorer, integrated terminal,
// Agent loopback fixture (Glob/Grep tools, a denied and an approved command),
// workbench text search and an idle window (default 300 s). Addon calls come
// from desktop/native-call-log.cjs; helper processes from strace execve records.
// No AI provider is used: the model is a local HTTP fixture.
if (process.platform !== 'linux' || process.arch !== 'x64') throw Error('verify:native-calls measures the Linux x64 helper set.');
if (process.getuid?.() === 0) throw Error('Run verify:native-calls as an unprivileged user.');

const root = resolve(import.meta.dirname, '..'), { layout, appRoot } = await verificationRuntime(root);
const idleSeconds = Number(process.argv.find(value => value.startsWith('--idle-seconds='))?.split('=')[1] ?? 300);
assert.ok(Number.isFinite(idleSeconds) && idleSeconds >= 0, 'Invalid --idle-seconds');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await realpath(await mkdtemp(join(root, 'logs/native-calls-')));
const profile = join(directory, 'profile'), project = join(directory, 'project'), calls = join(directory, 'calls');
const trace = join(directory, 'execve.log');
await mkdir(join(profile, 'User'), { recursive: true }); await mkdir(project); await mkdir(calls);
await mkdir(join(project, 'src'));
for (let index = 0; index < 50; index++) await writeFile(join(project, 'src', `module-${index}.js`), `export const value${index} = ${index}; // OV_TEXT_SEARCH_${index % 5}\n`);
await writeFile(join(project, 'README.md'), '# Native call fixture\n');
await writeFile(join(profile, 'User/settings.json'), JSON.stringify({ ...verificationSettings,
  'git.openRepositoryInParentFolders': 'never', 'terminal.integrated.enablePersistentSessions': false,
  'terminal.integrated.confirmOnExit': 'never', 'terminal.integrated.confirmOnKill': 'never',
  'terminal.integrated.gpuAcceleration': 'off', 'terminal.integrated.defaultProfile.linux': 'bash' }));
const search = await createAgentSearchFixture({ directory, project });
const commands = await createAgentCommandFixture({ directory, project });

const identity = { platform: `${process.platform}-${process.arch}`, node: process.version,
  hashes: Object.fromEntries(await Promise.all([['host', layout.executable], ['workbench', join(appRoot, 'out/vs/workbench/workbench.desktop.main.js')],
    ['hook', join(appRoot, 'out/openvision-native-call-log.cjs')], ['verifier', join(root, 'desktop/verify-native-calls.mjs')],
    ...Object.entries(proprietaryHelpers).map(([name, relative]) => [name, join(appRoot, relative)])]
    .map(async ([name, path]) => [name, await fileHash(path).catch(error => (error.code === 'ENOENT' ? 'absent' : Promise.reject(error)))]))) };
const result = { checkedAt: new Date().toISOString(), directory, identity, idleSeconds, phases: [], checks: {}, errors: [], hostExits: [],
  scope: 'Linux x64 only. Real OpenVision source build; local HTTP model fixture (controlled responses, not live inference).',
  limitations: ['Single workload sample on one host; counts depend on feature gates served to a local-mode profile without an account.',
    'strace (seccomp-bpf execve filter) and the logging proxy add overhead; durations are indicative only.',
    'Argument sizes are recursive byte estimates; contents are never logged.'] };

// ---------- model fixture ----------
const requests = [];
let phase = 'agent-search';
const server = createServer(async (request, response) => {
  if (request.url === '/v1/models') { response.setHeader('content-type', 'application/json'); return response.end(JSON.stringify({ data: [{ id: 'fixture-agent' }] })); }
  if (request.url !== '/v1/chat/completions') { response.statusCode = 404; return response.end(); }
  const chunks = []; for await (const chunk of request) chunks.push(chunk);
  const payload = JSON.parse(Buffer.concat(chunks));
  requests.push({ phase, tools: payload.tools?.length ?? 0 });
  response.writeHead(200, { 'Content-Type': 'text/event-stream' });
  const event = (delta, finish_reason = null) => response.write(`data: ${JSON.stringify({ id: 'fixture', object: 'chat.completion.chunk',
    model: payload.model, choices: [{ index: 0, delta, finish_reason }] })}\n\n`);
  if (!payload.tools?.length) { event({ role: 'assistant', content: 'Title' }); event({}, 'stop'); }
  else if (phase === 'agent-search') search.respond(payload, event);
  else commands.respond(payload, event, phase.slice('command-'.length));
  response.end('data: [DONE]\n\n');
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));

// ---------- application ----------
let app, page;
const mark = name => { result.phases.push({ name, start: Date.now() / 1000 }); console.log(`phase ${name}`); };
async function launch() {
  const env = { ...process.env, OPENVISION_NATIVE_CALL_LOG: calls }; delete env.ELECTRON_RUN_AS_NODE;
  // The tracer is the launched program, so it is the ancestor of every traced process.
  const executablePath = join(directory, 'traced-openvision.sh');
  await writeFile(executablePath, `#!/bin/sh\nexec strace -f --seccomp-bpf -qq -ttt -s 1024 -o '${trace}' -e trace=execve,execveat -e signal=none '${layout.executable}' "$@"\n`, { mode: 0o755 });
  app = await _electron.launch({ executablePath, env, timeout: 120000,
    args: ['--user-data-dir', profile, '--extensions-dir', join(directory, 'extensions'), '--new-window',
      '--disable-updates', '--disable-telemetry', '--disable-crash-reporter', '--skip-welcome', '--skip-release-notes',
      ...await linuxSandboxArguments(layout.host), project] });
  page = await app.firstWindow(); page.setDefaultTimeout(20000);
  page.on('pageerror', error => result.errors.push(error.message));
  await page.locator('.part.titlebar .openvision-local-profile').waitFor({ state: 'attached', timeout: 120000 });
  await enterWorkspace(page);
}
async function command(name) {
  await page.keyboard.press('Escape'); await page.keyboard.press('Control+Shift+p');
  await page.locator('.quick-input-widget input[type="text"]').fill(`>${name}`);
  await page.locator('.quick-input-widget').getByText(name, { exact: true }).first().click();
}
async function until(description, condition, timeout = 30000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) { const value = await condition(); if (value) return value; await delay(200); }
  throw Error(`Timed out waiting for ${description}`);
}

try {
  mark('startup');
  await launch();
  await delay(15000);

  mark('explorer');
  await page.keyboard.press('Control+Shift+e');
  const tree = page.locator('.explorer-folders-view');
  await tree.getByText('src', { exact: true }).first().click();
  await tree.getByText('module-7.js', { exact: true }).first().click();
  await page.locator('.tabs-container .tab').filter({ hasText: 'module-7.js' }).first().waitFor();
  await delay(3000);
  result.checks.explorer_opened_file = true;

  mark('terminal');
  await command('Terminal: Create New Terminal');
  const terminal = page.locator('.terminal-wrapper .xterm-helper-textarea').filter({ visible: true }).first();
  await terminal.waitFor({ timeout: 30000 }); await delay(1500); await terminal.focus();
  await page.keyboard.type('echo ov-terminal-$((40+2)) > terminal-marker.txt'); await page.keyboard.press('Enter');
  await until('terminal marker', () => readFile(join(project, 'terminal-marker.txt'), 'utf8').then(text => text.trim() === 'ov-terminal-42', () => false));
  result.checks.terminal_command_ran = true;
  await delay(3000);

  mark('agent');
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Models$/ }).locator('..').click();
  await page.locator('.openvision-model-settings').getByRole('button', { name: 'Add Provider', exact: true }).click();
  await page.getByLabel('Provider Name', { exact: true }).fill('Native call fixture');
  await page.getByLabel('API Base URL', { exact: true }).fill(`http://127.0.0.1:${server.address().port}/v1`);
  await page.getByLabel('API Key', { exact: true }).fill('fixture-key');
  await page.locator('dialog').getByRole('button', { name: 'Save', exact: true }).click();
  await page.locator('dialog').waitFor({ state: 'detached' });
  await page.locator('.tabs-container .tab').filter({ hasText: 'module-7.js' }).first().click();
  await page.keyboard.press('ControlOrMeta+Shift+l');
  await page.locator('.vscode-model-picker__trigger-markdown').filter({ visible: true }).first().click();
  await page.getByText('fixture-agent', { exact: true }).last().click();
  await page.keyboard.press('Escape');
  phase = 'agent-search'; await search.verify(page);
  result.checks.agent_search_tools = search.results.checks;
  for (const mode of ['deny', 'allow']) { phase = `command-${mode}`; await commands.verify(page, mode); }
  result.checks.agent_commands_wait_for_approval = commands.results.map(item => item.mode);
  await delay(3000);

  mark('search');
  await page.keyboard.press('Control+Shift+f');
  const query = page.locator('.search-view .monaco-inputbox textarea, .search-view input.input').filter({ visible: true }).first();
  await query.waitFor(); await query.fill('OV_TEXT_SEARCH_3'); await page.keyboard.press('Enter');
  await until('text search results', async () => /10 results in 10 files/.test(await page.locator('.search-view').innerText().catch(() => '')), 30000);
  result.checks.text_search_results = '10 results in 10 files';
  await delay(3000);

  mark('idle');
  await delay(idleSeconds * 1000);
  // Positive control, outside the ranked workload: one call through the already
  // loaded proclist binding in the main process must reach the call log, proving
  // that zero counts above mean "not called" rather than "not observed".
  mark('control');
  result.checks.control_call_result = await app.evaluate(({ app: electron }) => {
    const require = process.getBuiltinModule('node:module').createRequire(`${electron.getAppPath()}/package.json`);
    return JSON.stringify(require('cursor-proclist').cursor_proclist_system_memory());
  });
  await delay(1000);
  mark('shutdown');
  assert.deepEqual(result.errors, []);
} catch (error) {
  result.failure = error.stack;
  await page?.screenshot({ path: join(directory, 'failure.png') }).catch(() => {});
  if (page) await writeFile(join(directory, 'failure.txt'), await page.locator('body').innerText().catch(() => 'closed'));
} finally {
  try {
    if (app) {
      const child = app.process(), exited = child.exitCode === null && child.signalCode === null ? once(child, 'exit') : undefined;
      const closing = app.close();
      await page?.getByText('Quit Anyway', { exact: true }).click({ timeout: 5000 }).catch(() => {});
      await closing; if (exited) await exited;
      result.hostExits.push({ exitCode: child.exitCode, signalCode: child.signalCode });
    }
  } catch (error) { result.cleanupFailure = error.stack; }
  server.closeAllConnections(); server.close();
  await commands.dispose().catch(error => { result.cleanupFailure ??= error.stack; });
  mark('closed');
  const records = [];
  for (const name of await readdir(calls)) {
    for (const line of (await readFile(join(calls, name), 'utf8')).split('\n')) if (line) records.push(JSON.parse(line));
  }
  const execs = parseExecTrace(await readFile(trace, 'utf8').catch(() => ''));
  result.nativeCalls = summarizeNativeCalls(records, result.phases);
  result.helpers = execs.summary(result.phases);
  result.ranking = rankHelpers(result.nativeCalls, result.helpers);
  result.requests = requests;
  await writeFile(join(directory, 'helper-execs.json'), JSON.stringify(execs.helpers, null, 2));
  result.checks.hook_active_in_extension_hosts = result.nativeCalls.hookProcesses.filter(item => item.processType === 'extensionHost').length;
  result.checks.no_wrap_failures = !records.some(record => record.event === 'wrap-failed');
  result.checks.positive_control_logged = result.nativeCalls.addons['cursor-proclist'].controlCalls === 1;
  result.success = !result.failure && !result.cleanupFailure && result.checks.no_wrap_failures && result.checks.positive_control_logged &&
    result.checks.hook_active_in_extension_hosts > 0 && result.hostExits.every(exit => exit.exitCode === 0);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory, success: result.success, checks: result.checks, ranking: result.ranking, failure: result.failure }, null, 2));
  if (!result.success) process.exitCode = 1;
}
