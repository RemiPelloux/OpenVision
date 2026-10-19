// Declared verification driver for shutdown cycles. It uses public terminal,
// task and debug APIs only and answers numbered requests from the outer runner
// through files in the disposable run directory.
const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
async function publish(file, value) {
  await fs.writeFile(`${file}.pending`, JSON.stringify(value, null, 2));
  await fs.rename(`${file}.pending`, file);
}
async function until(probe, label, timeout = 60000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) { const value = await probe(); if (value) return value; await pause(150); }
  throw new Error(`Timed out: ${label}`);
}
const within = (promise, ms) => Promise.race([promise, pause(ms).then(() => undefined)]);
const quote = value => `'${String(value).replaceAll("'", "'\\''")}'`;

function folder() { return vscode.workspace.workspaceFolders[0]; }

const actions = {
  async inspect() {
    const terminals = await Promise.all(vscode.window.terminals.map(async terminal => ({
      name: terminal.name, pid: await within(terminal.processId, 5000) ?? null,
      exitStatus: terminal.exitStatus?.code ?? null })));
    const tasks = (await vscode.tasks.fetchTasks()).filter(task => task.source === 'Workspace').map(task => task.name).sort();
    const launch = vscode.workspace.getConfiguration('launch', folder().uri).get('configurations', []).map(item => item.name);
    return { terminals, tasks, launch, executions: vscode.tasks.taskExecutions.map(item => item.task.name),
      debugSessions: vscode.debug.activeDebugSession ? [vscode.debug.activeDebugSession.name] : [] };
  },
  // A user terminal from the default profile (persistent, revivable), with a
  // foreground workload, a shell job, and a deliberately detached process.
  async terminal({ cycle, fixture }) {
    const opened = new Promise(resolve => {
      const listener = vscode.window.onDidOpenTerminal(terminal => { listener.dispose(); resolve(terminal); });
    });
    await vscode.commands.executeCommand('workbench.action.terminal.new');
    const terminal = await within(opened, 15000);
    if (!terminal) throw new Error('Default-profile terminal did not open');
    await until(() => within(terminal.processId, 1000), 'terminal shell process');
    terminal.show();
    terminal.sendText(`echo OV-RESTORE-MARKER-c${cycle}`);
    terminal.sendText(`node ${quote(fixture)} plain bg &`);
    terminal.sendText(`setsid -f node ${quote(fixture)} plain detached`);
    terminal.sendText(`node ${quote(fixture)} tree term`);
    return { name: terminal.name, pid: await terminal.processId };
  },
  async show({ index }) {
    const terminal = vscode.window.terminals[index];
    if (!terminal) return false;
    terminal.show(false);
    return terminal.name;
  },
  // xterm renders only the viewport; the runner pages through the scrollback.
  async scroll({ to }) {
    const command = { top: 'scrollToTop', pageDown: 'scrollDownPage', bottom: 'scrollToBottom' }[to];
    if (!command) throw new Error(`Unknown scroll target ${to}`);
    await vscode.commands.executeCommand(`workbench.action.terminal.${command}`);
    return true;
  },
  async focus() {
    await vscode.commands.executeCommand('workbench.action.terminal.focus');
    return true;
  },
  async tasks() {
    const tasks = await vscode.tasks.fetchTasks();
    const started = [];
    for (const label of ['ov-build', 'ov-watch']) {
      const task = tasks.find(item => item.name === label && item.source === 'Workspace');
      if (!task) throw new Error(`Task definition missing: ${label}`);
      await vscode.tasks.executeTask(task); started.push(label);
    }
    const uri = vscode.Uri.file(path.join(folder().uri.fsPath, 'watch.c'));
    await until(() => vscode.languages.getDiagnostics(uri).some(item => item.message.startsWith('OpenVision watch diagnostic')),
      'background problem matcher diagnostic');
    return { started, diagnostic: true };
  },
  async debug() {
    const started = await vscode.debug.startDebugging(folder(), 'ov-debug');
    if (!started) throw new Error('Debugger did not start');
    return { started, session: vscode.debug.activeDebugSession?.name };
  },
};

async function serve(directory, session) {
  const rpc = path.join(directory, 'rpc', session);
  for (let index = 0; ; index++) {
    const request = await until(async () => {
      try { return JSON.parse(await fs.readFile(path.join(rpc, `request-${index}.json`), 'utf8')); }
      catch (error) { if (error.code !== 'ENOENT') throw error; }
    }, `request ${index}`, 30 * 60 * 1000);
    let reply;
    try { reply = { ok: true, value: await actions[request.action](request) }; }
    catch (error) { reply = { ok: false, error: error.stack }; }
    await publish(path.join(rpc, `reply-${index}.json`), reply);
  }
}

exports.activate = async () => {
  const project = folder().uri.fsPath, directory = path.dirname(project);
  const session = (await fs.readFile(path.join(directory, 'rpc', 'current.txt'), 'utf8')).trim();
  void serve(directory, session).catch(() => {});
};
