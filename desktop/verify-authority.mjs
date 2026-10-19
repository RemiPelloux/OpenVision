import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { execFileSync, spawn, spawnSync } from 'node:child_process';
import { chmod, mkdir, mkdtemp, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { verificationRuntime } from './verification-runtime.mjs';
import { fileHash } from './import-files.mjs';
import { linuxSandboxArguments } from './platform.mjs';
import { openChat } from './verification-workspace.mjs';
import { createMcpServerFixture } from './verify-mcp-server.mjs';
import { canaryKey } from './secret-scan.mjs';
import { addProvider, closeOwned, launchOwned, modelFixture, runIdentity, snapshot, survivors, waitFor,
  writeProfile } from './release-safety-harness.mjs';

// OV-1004 authority and denied-access matrix (Linux x64). For each Agent
// approval mode (the approval-first default, Allowlist with one entry, Run
// Everything) a controlled model
// fixture proposes: an unlisted shell command, an allowlisted shell command, an
// MCP tool call, a write inside the project, a write outside the project and a
// write to a read-only project file. Separately: a workspace task that asks to
// run on folder open (extension/task command authority) and a launch on a
// read-only profile. The invariants are about authority, not UI wording:
// nothing runs before the mode allows it, Skip never runs, every applied write
// is reviewable, a denied write explains itself and leaves the bytes alone, and
// no file changes that the cell did not ask for. `--observe` records only.
assert.equal(process.platform, 'linux', 'The authority matrix runs on Linux');
assert.notEqual(process.getuid(), 0, 'Read-only cells are meaningless as root; run as an unprivileged user');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const { layout, appRoot } = await verificationRuntime(root);
const observe = process.argv.includes('--observe');
const onlyModes = process.argv.find(argument => argument.startsWith('--modes='))?.slice(8).split(',');
await mkdir(join(root, 'logs'), { recursive: true });
const directory = await mkdtemp(join(root, 'logs/authority-'));
const runId = randomUUID(), key = canaryKey(), errors = [], exits = [];
const outside = join(directory, 'outside');
await mkdir(outside);

const markerScript = join(directory, 'authority-marker.cjs');
await writeFile(markerScript, "require('node:fs').appendFileSync(process.argv[2], 'ran\\n');\n");
const mcp = await createMcpServerFixture();
const mcpCalls = () => mcp.requests.filter(request => request.method === 'tools/call').length;

let project, cellSpecs = {};
const fixture = await modelFixture({ model: 'fixture-authority', key, respond: ({ prompt, toolResults, finish, tool }) => {
  const cell = /CELL-([\w-]+)/.exec(prompt)?.[1], spec = cellSpecs[cell];
  if (!spec) return finish('OpenVision authority fixture reply.');
  const id = `ov_authority_${cell.replaceAll('-', '_')}`;
  const result = toolResults.find(message => message.tool_call_id === id);
  if (result) { spec.toolResult = typeof result.content === 'string' ? result.content : JSON.stringify(result.content); return finish(`OpenVision ${cell} finished.`); }
  tool(id, spec.tool, spec.args);
} });

const identity = await runIdentity(root, { host: layout.executable, workbench: join(appRoot, 'out/vs/workbench/workbench.desktop.main.js'),
  approvalDefault: join(root, 'desktop/autorun-customization.mjs'), verifier: fileURLToPath(import.meta.url) });
const result = { checkedAt: new Date().toISOString(), runId, directory: relative(root, directory), identity, observe, modes: {}, extra: {},
  exits, errors, requests: fixture.requests, mcpRequests: mcp.requests, success: false,
  scope: 'Linux x64 native Agent with a controlled loopback model fixture (canary key) and an HTTP MCP fixture; approval modes set through the Agent settings UI in disposable profiles; POSIX permission bits for read-only cells (unprivileged user). Not Windows ACLs or job objects, not macOS, not live inference.' };

async function tree(base) {
  const out = {};
  const walk = async path => {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const full = join(path, entry.name);
      if (entry.isDirectory()) { if (entry.name !== '.git') await walk(full); }
      else if (entry.isFile()) out[relative(directory, full)] = await fileHash(full);
    }
  };
  await walk(base); return out;
}
const diff = (before, after) => [...new Set([...Object.keys(before), ...Object.keys(after)])].filter(name => before[name] !== after[name]).sort();

// Agent settings > Execution and Approvals: the Run Mode selector (Allowlist,
// Auto-Review, Run Everything) and the Command Allowlist. A fresh profile shows
// "Allowlist" with an empty list (the "+ cd"-style chips are suggestions, not
// entries); OpenVision's approval-first default keeps every command waiting.
async function openAgentSettings(page) {
  await page.locator('.part.titlebar a[aria-label$=" Settings"]').click();
  await page.locator('.cursor-settings-sidebar-cell-label').filter({ hasText: /^Agents$/ }).locator('..').click();
  await page.waitForTimeout(1000);
}
async function setMode(page, mode) {
  await openAgentSettings(page);
  const label = page.getByText('Run Mode', { exact: true }).first();
  await label.scrollIntoViewIfNeeded();
  const observed = {};
  if (mode === 'allowlist') {
    const input = page.getByRole('textbox', { name: 'Add command', exact: true });
    await input.fill('touch'); await input.press('Enter');
    await page.waitForTimeout(800);
  }
  if (mode === 'run-everything') {
    await label.locator('xpath=ancestor::*[.//*[@role="combobox"]][1]').getByRole('combobox').click();
    await page.getByRole('option', { name: 'Run Everything', exact: true }).click();
    const confirm = page.getByRole('button', { name: /^Enable Run Everything/ });
    await confirm.waitFor({ timeout: 10000 });
    observed.confirmation = (await confirm.locator('xpath=ancestor::*[contains(., "Enable Run Everything?")][1]').innerText().catch(() => '')).slice(0, 400);
    await confirm.click();
    await page.waitForTimeout(800);
  }
  observed.runMode = await label.locator('xpath=ancestor::*[.//*[@role="combobox"]][1]').getByRole('combobox').innerText();
  observed.allowlist = await page.getByText('Command Allowlist', { exact: true }).first()
    .locator('xpath=ancestor::*[.//input][1]').innerText().then(text => text.slice(0, 300)).catch(() => undefined);
  await page.screenshot({ path: join(directory, `${mode}-settings.png`) });
  await page.keyboard.press('ControlOrMeta+w');
  return observed;
}

const usefulDenial = /EACCES|permission denied|read-?only|not permitted|EROFS|could not (write|save|edit)/i;
function specsFor(mode) {
  const marker = name => join(project, `marker-${mode}-${name}.txt`);
  return {
    [`${mode}-shell-unlisted`]: { kind: 'shell', tool: 'Shell', marker: marker('unlisted'),
      args: { command: `node "${markerScript}" "${marker('unlisted')}"`, working_directory: project, description: `Authority ${mode} unlisted`, block_until_ms: 20000 } },
    [`${mode}-shell-allowlisted`]: { kind: 'shell', tool: 'Shell', marker: marker('allowlisted'),
      args: { command: `touch "${marker('allowlisted')}"`, working_directory: project, description: `Authority ${mode} allowlisted`, block_until_ms: 20000 } },
    [`${mode}-shell-echo-redirect`]: { kind: 'shell', tool: 'Shell', marker: marker('echo'),
      args: { command: `echo ran > "${marker('echo')}"`, working_directory: project, description: `Authority ${mode} echo`, block_until_ms: 20000 } },
    [`${mode}-mcp`]: { kind: 'mcp', tool: 'CallMcpTool',
      args: { server: 'user-openvision-authority', toolName: 'memory_probe', description: `Authority ${mode} MCP`, arguments: {} } },
    [`${mode}-write-inside`]: { kind: 'write', tool: 'StrReplace', path: join(project, 'inside.txt'),
      args: { path: join(project, 'inside.txt'), old_string: 'inside = 1', new_string: 'inside = 2' } },
    [`${mode}-write-outside`]: { kind: 'write', tool: 'StrReplace', path: join(outside, `outside-${mode}.txt`),
      args: { path: join(outside, `outside-${mode}.txt`), old_string: 'outside = 1', new_string: 'outside = 2' } },
    [`${mode}-write-readonly`]: { kind: 'readonly', tool: 'StrReplace', path: join(project, 'locked/readonly.txt'),
      args: { path: join(project, 'locked/readonly.txt'), old_string: 'locked = 1', new_string: 'locked = 2' } },
  };
}
const ran = async path => (await readFile(path, 'utf8').catch(() => '')).length > 0;
const controls = async page => (await page.locator('button,[role=button],.anysphere-button,.anysphere-text-button').evaluateAll(elements =>
  elements.filter(element => element.offsetParent !== null).map(element => element.textContent.trim())
    .filter(text => /^(Keep( All| File)?|Undo( All| File)?|Reject( All)?|Review|Run|Skip|Allow|Accept)\b/.test(text)))).sort();

async function runCell(page, mode, name, spec) {
  const record = { cell: name, kind: spec.kind, violations: [] };
  const before = await tree(project), outsideBefore = await tree(outside), mcpBefore = mcpCalls(), requestsBefore = fixture.requests.length;
  const input = await openChat(page);
  const fresh = page.getByRole('button', { name: 'New Agent', exact: true }).filter({ visible: true });
  if (await fresh.count()) await fresh.first().click();
  await (await openChat(page)).fill(`CELL-${name} Do exactly the proposed tool call.`); await page.keyboard.press('Enter');
  const finished = page.getByText(`OpenVision ${name} finished.`, { exact: true }).first();
  const pending = page.getByText('Pending approval', { exact: true }).filter({ visible: true });
  const state = await waitFor(async () => (await finished.count()) ? 'finished' : (await pending.count()) ? 'pending' : undefined,
    `${name}: neither finished nor pending`, 45000, 250).catch(() => 'timeout');
  record.firstState = state;
  record.executedBeforeDecision = spec.kind === 'shell' ? await ran(spec.marker) : spec.kind === 'mcp' ? mcpCalls() > mcpBefore : undefined;
  record.controlsAtDecision = await controls(page);
  await snapshot(page, directory, `${name}-decision`);
  if (state === 'pending') {
    // Deny: Skip must never execute.
    const skip = page.getByRole('button', { name: 'Skip', exact: true }).filter({ visible: true });
    record.skipAvailable = await skip.count() > 0;
    if (record.skipAvailable) await skip.first().click();
    await finished.waitFor({ timeout: 30000 }).catch(() => {});
    record.executedAfterSkip = spec.kind === 'shell' ? await ran(spec.marker) : spec.kind === 'mcp' ? mcpCalls() > mcpBefore : undefined;
  }
  await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden', timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1500);
  record.controlsAfter = await controls(page);
  record.text = (await snapshot(page, directory, `${name}-after`)).slice(-1500);
  record.toolResult = spec.toolResult?.slice(0, 600);
  record.requests = fixture.requests.length - requestsBefore;
  const after = await tree(project), outsideAfter = await tree(outside);
  record.changed = [...diff(before, after), ...diff(outsideBefore, outsideAfter)];
  if (spec.kind === 'write' || spec.kind === 'readonly') {
    const text = await readFile(spec.path, 'utf8').catch(error => error.code);
    record.fileState = /= 2/.test(text) ? 'changed' : /= 1/.test(text) ? 'original' : text;
    record.reviewShown = record.controlsAfter.some(control => /^(Keep|Undo|Review)/.test(control));
  }
  if (spec.kind === 'shell') record.executions = (await readFile(spec.marker, 'utf8').catch(() => '')).split('\n').filter(Boolean).length;
  if (spec.kind === 'mcp') record.executions = mcpCalls() - mcpBefore;
  judge(mode, record, spec);
  // Undo an applied in-project edit so later cells start from known bytes.
  if (record.fileState === 'changed') {
    const undo = page.getByText(/^Undo( All)?$/).filter({ visible: true });
    if (await undo.count()) { await undo.first().click(); await page.waitForTimeout(800); }
  }
  return record;
}

// Expected authority per mode. `null` = recorded, not asserted (upstream policy
// with no OpenVision claim yet).
const expectations = {
  default: { 'shell-unlisted': 'pending', 'shell-allowlisted': 'pending', 'shell-echo-redirect': 'pending', mcp: 'pending' },
  allowlist: { 'shell-unlisted': 'pending', 'shell-allowlisted': 'auto', 'shell-echo-redirect': 'pending', mcp: 'pending' },
  'run-everything': { 'shell-unlisted': 'auto', 'shell-allowlisted': 'auto', 'shell-echo-redirect': 'auto', mcp: null },
};
function judge(mode, record, spec) {
  const fail = message => record.violations.push(message);
  const kind = record.cell.slice(mode.length + 1), expected = expectations[mode][kind];
  if (record.firstState === 'timeout') fail('the turn neither finished nor asked for approval');
  if (spec.kind === 'shell' || spec.kind === 'mcp') {
    if (record.firstState === 'pending' && record.executedBeforeDecision) fail('executed before approval');
    if (record.firstState === 'pending' && record.executedAfterSkip) fail('Skip executed the call');
    if (expected === 'pending' && record.firstState !== 'pending') fail(`expected approval, observed ${record.firstState} (${record.executions} executions)`);
    if (expected === 'auto' && (record.firstState !== 'finished' || record.executions !== 1)) fail(`expected one automatic execution, observed ${record.firstState}/${record.executions}`);
  }
  const allowed = new Set(spec.kind === 'shell' ? [relative(directory, spec.marker)] : spec.path ? [relative(directory, spec.path)] : []);
  const unexpected = record.changed.filter(name => !allowed.has(name));
  if (unexpected.length) fail(`unexpected file changes: ${unexpected.join(', ')}`);
  if (spec.kind === 'write') {
    if (record.fileState === 'changed' && !record.reviewShown && record.firstState !== 'pending') fail('silent write: applied without review or approval');
    if (record.cell.endsWith('write-inside') && record.fileState !== 'changed') fail(`in-project write not applied (${record.fileState})`);
    if (record.fileState !== 'changed' && record.firstState !== 'pending' && !usefulDenial.test(`${record.toolResult} ${record.text}`))
      fail('write was refused without a useful explanation');
  }
  if (spec.kind === 'readonly') {
    if (record.fileState !== 'original') fail(`read-only file changed (${record.fileState})`);
    if (!usefulDenial.test(`${record.toolResult ?? ''} ${record.text}`)) fail('no useful read-only error');
  }
}

async function prepareProject(mode) {
  project = join(directory, `project-${mode}`);
  await mkdir(join(project, 'locked'), { recursive: true });
  await mkdir(join(project, '.vscode'), { recursive: true });
  await writeFile(join(project, 'inside.txt'), 'inside = 1\n');
  await writeFile(join(project, 'locked/readonly.txt'), 'locked = 1\n');
  await writeFile(join(outside, `outside-${mode}.txt`), 'outside = 1\n');
  // A workspace task that asks to run when the folder opens.
  await writeFile(join(project, '.vscode/tasks.json'), JSON.stringify({ version: '2.0.0', tasks: [{ label: 'authority folder-open task',
    type: 'process', command: process.execPath, args: [markerScript, join(project, `marker-${mode}-folder-open.txt`)],
    runOptions: { runOn: 'folderOpen' } }] }, null, 2));
  await chmod(join(project, 'locked/readonly.txt'), 0o444);
  await chmod(join(project, 'locked'), 0o555);
}

async function runMode(mode) {
  const record = result.modes[mode] = { cells: [], violations: [] };
  await prepareProject(mode);
  const profile = join(directory, `profile-${mode}`);
  await writeProfile(profile);
  await writeFile(join(profile, 'User/mcp.json'), JSON.stringify({ mcpServers: { 'openvision-authority': mcp.configuration } }, null, 2));
  cellSpecs = specsFor(mode);
  let session;
  try {
    session = await launchOwned({ layout, profile, args: [project], runId, errors });
    const { page } = session;
    await page.waitForTimeout(6000);
    record.folderOpenTaskRan = await ran(join(project, `marker-${mode}-folder-open.txt`));
    record.folderOpenPrompt = (await page.locator('body').innerText()).match(/.{0,80}automatic tasks.{0,80}/i)?.[0];
    await addProvider(page, { name: 'Authority fixture', url: fixture.url, key, model: 'fixture-authority' });
    await waitFor(() => mcp.requests.some(request => request.method === 'tools/list'), 'MCP fixture was not discovered', 45000, 250).catch(() => {});
    record.modeSetting = await setMode(page, mode);
    for (const [name, spec] of Object.entries(cellSpecs)) record.cells.push(await runCell(page, mode, name, spec));
    record.folderOpenTaskRanAtEnd = await ran(join(project, `marker-${mode}-folder-open.txt`));
    if (record.folderOpenTaskRan || record.folderOpenTaskRanAtEnd) record.violations.push('workspace folder-open task ran without permission');
  } catch (error) {
    record.failure = error.stack;
    if (session?.page) await snapshot(session.page, directory, `${mode}-failure`);
    record.violations.push(`failure: ${error.message}`);
  } finally {
    if (session?.app) await closeOwned(session.app, exits, mode).catch(error => { record.cleanupFailure = error.message; });
    record.survivors = (await survivors(runId, [])).map(entry => entry.cmdline);
    if (record.survivors.length) record.violations.push('owned processes survived');
    await chmod(join(project, 'locked'), 0o755).catch(() => {});
  }
  record.violations.push(...record.cells.flatMap(cell => cell.violations.map(message => `${cell.cell}: ${message}`)));
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
}

// A read-only profile (POSIX mode bits, unprivileged user): the launch must not
// write into it. The explanation dialog is OV-301's; it is answered here with
// real X input and its title recorded, and the exit code is recorded.
async function readOnlyProfile() {
  const profile = join(directory, 'profile-readonly');
  await writeProfile(profile);
  const project = join(directory, 'project-readonly'); await mkdir(project);
  const session = await launchOwned({ layout, profile, args: [project], runId, errors });
  await session.page.waitForTimeout(4000);
  await closeOwned(session.app, exits, 'read-only profile seed');
  execFileSync('chmod', ['-R', 'a-w', profile]);
  const before = await tree(profile), record = result.extra.readOnlyProfile = {};
  try {
    const env = { ...process.env, OPENVISION_RELEASE_SAFETY_RUN: runId }; delete env.ELECTRON_RUN_AS_NODE;
    const child = spawn(layout.executable, ['--user-data-dir', profile, '--extensions-dir', join(profile, 'extensions'), '--new-window',
      '--disable-updates', '--skip-welcome', '--skip-release-notes', '--disable-telemetry', '--disable-crash-reporter',
      ...await linuxSandboxArguments(layout.host), project], { env, stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = ''; child.stderr.setEncoding('utf8').on('data', chunk => { stderr += chunk; });
    const exited = new Promise(done => child.once('exit', (exitCode, signalCode) => done({ exitCode, signalCode })));
    let exit; exited.then(value => { exit = value; });
    const deadline = Date.now() + 60000;
    while (!exit && !record.dialog && Date.now() < deadline) {
      const found = (spawnSync('xdotool', ['search', '--onlyvisible', '--pid', String(child.pid)], { encoding: 'utf8' }).stdout ?? '').split('\n').filter(Boolean);
      if (found.length) {
        await new Promise(done => setTimeout(done, 1500));
        record.dialog = { title: spawnSync('xdotool', ['getwindowname', found[0]], { encoding: 'utf8' }).stdout.trim(), shownBeforeExit: exit === undefined };
        spawnSync('xdotool', ['windowfocus', '--sync', found[0]]); spawnSync('xdotool', ['key', '--clearmodifiers', 'Return']);
      } else await new Promise(done => setTimeout(done, 250));
    }
    const settled = await Promise.race([exited, new Promise(done => setTimeout(() => done(undefined), 30000))]);
    // Only this verifier's own spawned child, through its handle.
    if (!settled) { record.forcedStop = true; child.kill('SIGTERM'); }
    record.exit = await exited;
    record.explanation = stderr.split('\n').filter(line => /openvision|read-only|profile/i.test(line)).slice(0, 6);
  } finally { execFileSync('chmod', ['-R', 'u+w', profile]); }
  record.changed = diff(before, await tree(profile));
  record.survivors = (await survivors(runId, [])).map(entry => entry.cmdline);
  record.violations = [...record.changed.length ? [`read-only profile changed: ${record.changed.join(', ')}`] : [],
    ...record.survivors.length ? ['owned processes survived'] : [], ...record.forcedStop ? ['host had to be stopped'] : []];
  record.ownedElsewhere = 'The read-only profile explanation dialog is owned by OV-301; recorded here, not asserted.';
}

try {
  for (const mode of ['default', 'allowlist', 'run-everything']) if (!onlyModes || onlyModes.includes(mode)) await runMode(mode);
  if (!onlyModes || onlyModes.includes('readonly-profile')) await readOnlyProfile();
  assert.ok(fixture.requests.every(request => request.authorized && request.model === 'fixture-authority'), 'Every inference used the canary-key fixture');
  assert.ok(mcp.requests.every(request => request.authorized), 'Every MCP request carried the fixture credential');
  result.violations = [...Object.entries(result.modes).flatMap(([mode, record]) => record.violations.map(message => `${mode}: ${message}`)),
    ...(result.extra.readOnlyProfile?.violations ?? []).map(message => `readonly-profile: ${message}`)];
  if (!observe) assert.deepEqual(result.violations, [], 'Authority acceptance');
  result.success = !observe;
} catch (error) {
  result.failure = error.stack; process.exitCode = 1;
} finally {
  await fixture.close(); await mcp.dispose();
  result.finalSurvivors = await survivors(runId, [], 3000);
  await writeFile(join(directory, 'result.json'), JSON.stringify(result, null, 2));
  console.log(JSON.stringify({ directory: result.directory, success: result.success, failure: result.failure?.split('\n')[0],
    modes: Object.fromEntries(Object.entries(result.modes).map(([mode, record]) => [mode, { setting: record.modeSetting?.runMode,
      folderOpenTaskRan: record.folderOpenTaskRan, cells: record.cells.map(cell => ({ cell: cell.cell, first: cell.firstState,
        executions: cell.executions, file: cell.fileState, review: cell.reviewShown, violations: cell.violations })), violations: record.violations }])),
    readOnlyProfile: result.extra.readOnlyProfile }, null, 2));
}
