const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const assert = require('node:assert/strict');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
async function publish(file, value) {
  await fs.writeFile(`${file}.pending`, JSON.stringify(value, null, 2));
  await fs.rename(`${file}.pending`, file);
}

async function until(probe, label) {
  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) { const value = await probe(); if (value) return value; await pause(150); }
  throw new Error(`Timed out: ${label}`);
}
async function phase(directory, name) {
  await publish(path.join(directory, 'phase.json'), { phase: name });
  await until(() => fs.stat(path.join(directory, `${name}.continue`)).then(() => true, () => false), name);
}
async function record(directory, name) {
  return until(async () => {
    try { return JSON.parse(await fs.readFile(path.join(directory, `${name}.json`), 'utf8')); }
    catch (error) { if (error.code === 'ENOENT') return; throw error; }
  }, name);
}
async function absent(pid) {
  await until(() => { try { process.kill(pid, 0); return false; } catch (error) { if (error.code === 'ESRCH') return true; throw error; } }, `process ${pid} exits`);
}
function command(values, quoting) {
  if (quoting === 'powershell') return '& ' + values.map(value => `'${value.replaceAll("'", "''")}'`).join(' ');
  if (quoting === 'posix') return values.map(value => `'${value.replaceAll("'", "'\\''")}'`).join(' ');
  return values.map(value => `"${value}"`).join(' ');
}
function invocation(config, directory, name, quoting) {
  return command([config.node, path.join(directory, 'process.cjs'), 'terminal', directory, name], quoting);
}

async function terminalMatrix(config, directory, project, result) {
  for (const { name, path: shellPath, args: shellArgs, quoting, env = {} } of config.shells) {
    const terminal = vscode.window.createTerminal({ name: `OpenVision ${name} fixture`, shellPath, shellArgs,
      cwd: project, env: { OPENVISION_DEVELOPMENT_FIXTURE: 'terminal-only', ...env } });
    terminal.show(); terminal.sendText(invocation(config, directory, name, quoting));
    const first = await record(directory, name);
    assert.equal(first.fixtureEnv, 'terminal-only'); assert.equal(first.cwd.toLowerCase(), project.toLowerCase());
    assert.equal(first.tty, true); assert.ok(first.columns > 0 && first.rows > 0);
    await phase(directory, `${name}-resize`);
    const resized = await record(directory, name);
    assert.notDeepEqual([resized.columns, resized.rows], [first.columns, first.rows]);
    await phase(directory, `${name}-interrupt`);
    await absent(first.pid);
    terminal.sendText(invocation(config, directory, `${name}-restart`, quoting));
    const restarted = await record(directory, `${name}-restart`); assert.notEqual(restarted.pid, first.pid);
    terminal.dispose(); await absent(restarted.pid); await absent(first.parent);
    const reopened = vscode.window.createTerminal({ name: `OpenVision ${name} reopened shell`, shellPath, shellArgs,
      cwd: project, env });
    let closed = false;
    const closeListener = vscode.window.onDidCloseTerminal(item => { if (item === reopened) closed = true; });
    try {
      reopened.show();
      const shellPid = await reopened.processId;
      reopened.sendText('exit 0');
      await until(() => closed, 'normal shell exit');
      assert.equal(reopened.exitStatus.code, 0); await absent(shellPid);
    } finally { closeListener.dispose(); }
    result.checks[`${name}_native_terminal`] = { first, resized, restarted, cancelled: true, disposed: true, reopenedShellExit: 0 };
  }
}

function task(config, directory, project, name, mode, matchers = []) {
  return new vscode.Task({ type: 'openvision-fixture', task: name }, vscode.workspace.workspaceFolders[0], name,
    'OpenVision', new vscode.ProcessExecution(config.node, [path.join(directory, 'process.cjs'), mode, directory, name],
      { cwd: project, env: { OPENVISION_DEVELOPMENT_FIXTURE: 'task-only' } }), matchers);
}
async function executeTask(task) {
  let finish;
  const ended = new Promise(resolve => { finish = resolve; });
  const listener = vscode.tasks.onDidEndTaskProcess(event => { if (event.execution.task.name === task.name) finish(event.exitCode); });
  const execution = await vscode.tasks.executeTask(task);
  return { execution, ended, dispose: () => listener.dispose() };
}
async function taskMatrix(config, directory, project, result) {
  const problem = await executeTask(task(config, directory, project, 'problem', 'problem', ['$openvision-fixture']));
  try {
    assert.equal(await problem.ended, 2);
    const uri = vscode.Uri.file(path.join(project, 'problem.c'));
    const diagnostics = await until(() => {
      const items = vscode.languages.getDiagnostics(uri);
      return items.some(item => item.message === 'OpenVision fixture diagnostic') && items;
    }, 'task problem matcher');
    assert.ok(diagnostics.some(item => item.range.start.line === 2 && item.range.start.character === 4 && item.severity === 0));
    result.checks.task_problem_matcher = true;
  } finally { problem.dispose(); }
  for (const name of ['cancel-task', 'restart-task']) {
    const run = await executeTask(task(config, directory, project, name, 'tree'));
    try {
      const parent = await record(directory, name), child = await record(directory, `${name}-child`);
      assert.equal(parent.fixtureEnv, 'task-only'); assert.equal(child.parent, parent.pid);
      run.execution.terminate(); await run.ended;
      await absent(parent.pid); await absent(child.pid);
      result.checks[name] = { parent: parent.pid, child: child.pid, bothReleased: true };
    } finally { run.dispose(); }
  }
}

async function debuggerMatrix(config, directory, project, result) {
  const stops = [], events = [];
  const tracker = vscode.debug.registerDebugAdapterTrackerFactory('*', { createDebugAdapterTracker(session) {
    return { onDidSendMessage(message) { if (message.type === 'event') {
      if (message.event === 'stopped') stops.push({ session, body: message.body });
      if (['stopped', 'terminated', 'exited'].includes(message.event)) events.push({ session: session.id, event: message.event, body: message.body });
    } } };
  } });
  const source = vscode.Uri.file(path.join(project, 'debug.cjs'));
  const breakpoint = new vscode.SourceBreakpoint(new vscode.Location(source, new vscode.Position(4, 0)));
  vscode.debug.addBreakpoints([breakpoint]);
  try {
    assert.equal(await vscode.debug.startDebugging(vscode.workspace.workspaceFolders[0], {
      type: 'pwa-node', request: 'launch', name: 'OpenVision native debugger fixture',
      program: source.fsPath, runtimeExecutable: config.node, cwd: project, console: 'internalConsole',
      env: { OPENVISION_DEBUG_MARKER: path.join(directory, 'debug-process.json') }, skipFiles: ['<node_internals>/**'] }), true);
    const stopped = await until(() => stops[0], 'source breakpoint');
    assert.equal(stopped.body.reason, 'breakpoint');
    const session = stopped.session;
    let stack = await session.customRequest('stackTrace', { threadId: stopped.body.threadId });
    assert.equal(stack.stackFrames[0].line, 5);
    const before = await session.customRequest('evaluate', { expression: 'value', frameId: stack.stackFrames[0].id, context: 'watch' });
    assert.equal(before.result, '3');
    await session.customRequest('next', { threadId: stopped.body.threadId });
    const stepped = await until(() => stops[1], 'debug step');
    stack = await session.customRequest('stackTrace', { threadId: stepped.body.threadId });
    const after = await session.customRequest('evaluate', { expression: 'value', frameId: stack.stackFrames[0].id, context: 'watch' });
    assert.equal(after.result, '9');
    await session.customRequest('continue', { threadId: stepped.body.threadId });
    const running = await record(directory, 'debug-process'); assert.equal(running.value, 9);
    await vscode.debug.stopDebugging(session); await absent(running.pid); await absent(running.child);
    await until(() => events.some(event => event.session === session.id && event.event === 'terminated'), 'debug session termination');
    result.checks.debugger_break_step_continue_stop = { before: before.result, after: after.result,
      pid: running.pid, child: running.child, bothReleased: true, events };
  } finally { tracker.dispose(); vscode.debug.removeBreakpoints([breakpoint]); }
}

async function run() {
  const project = vscode.workspace.workspaceFolders[0].uri.fsPath, directory = path.dirname(project);
  const config = JSON.parse(await fs.readFile(path.join(directory, 'config.json'), 'utf8'));
  const result = { checks: {}, started: new Date().toISOString(), api: vscode.version };
  try {
    await terminalMatrix(config, directory, project, result);
    await taskMatrix(config, directory, project, result);
    await debuggerMatrix(config, directory, project, result);
    const [shell] = config.shells;
    const terminal = vscode.window.createTerminal({ name: 'OpenVision window-close fixture', shellPath: shell.path,
      shellArgs: shell.args, cwd: project, env: shell.env });
    terminal.show();
    terminal.sendText(command([config.node, path.join(directory, 'process.cjs'), 'tree', directory, 'window-close'], shell.quoting));
    result.closeParent = await record(directory, 'window-close');
    result.closeChild = await record(directory, 'window-close-child');
    result.success = true;
  } catch (error) { result.success = false; result.failure = error.stack; }
  result.finished = new Date().toISOString();
  await publish(path.join(directory, 'extension-result.json'), result);
}
exports.activate = () => { void run(); };
