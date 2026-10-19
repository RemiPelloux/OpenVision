// Driver for verify:native-loaded. Runs one workload action per request file and
// publishes its outcome; the verifier owns ordering and timing. Uses public APIs
// only: tasks, debug sessions, file search and the extension install command.
const vscode = require('vscode');
const fs = require('node:fs/promises');
const path = require('node:path');
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const directory = process.env.OPENVISION_NATIVE_LOADED_DIR;

async function publish(file, value) {
  await fs.writeFile(`${file}.pending`, JSON.stringify(value, null, 2));
  await fs.rename(`${file}.pending`, file);
}
function within(promise, ms, label) {
  return Promise.race([promise, pause(ms).then(() => { throw new Error(`Timed out: ${label}`); })]);
}

async function task(config) {
  const execution = new vscode.ShellExecution('echo OV_NATIVE_TASK_$((40+2))', { executable: '/bin/bash', shellArgs: ['--noprofile', '--norc', '-c'] });
  const item = new vscode.Task({ type: 'shell', task: 'ov-native' }, vscode.TaskScope.Workspace, 'ov-native-task', 'openvision', execution, []);
  item.presentationOptions = { reveal: vscode.TaskRevealKind.Silent, close: true };
  let listener;
  const ended = new Promise(resolve => { listener = vscode.tasks.onDidEndTaskProcess(event => { if (event.execution.task.name === item.name) resolve(event.exitCode); }); });
  await vscode.tasks.executeTask(item);
  try { return { exitCode: await within(ended, 60000, 'task exit') }; } finally { listener.dispose(); }
}

async function debug(config) {
  const folder = vscode.workspace.workspaceFolders[0];
  let listener;
  const ended = new Promise(resolve => { listener = vscode.debug.onDidTerminateDebugSession(session => resolve(session.name)); });
  const started = await vscode.debug.startDebugging(folder, { type: 'pwa-node', request: 'launch', name: 'ov-native-debug',
    program: path.join(folder.uri.fsPath, 'debug.cjs'), runtimeExecutable: config.node, cwd: folder.uri.fsPath,
    console: 'internalConsole', env: { OPENVISION_DEBUG_MARKER: path.join(directory, 'debug-marker.json') } });
  try {
    const name = await within(ended, 90000, 'debug session end');
    const marker = JSON.parse(await fs.readFile(path.join(directory, 'debug-marker.json'), 'utf8'));
    return { started, ended: name, marker };
  } finally { listener.dispose(); }
}

async function findFiles() {
  const files = await vscode.workspace.findFiles('src/**/*.js');
  return { files: files.length };
}

async function install(config) {
  await vscode.commands.executeCommand('workbench.extensions.installExtension', vscode.Uri.file(config.vsix));
  const deadline = Date.now() + 60000;
  for (;;) {
    const entries = await fs.readdir(config.extensions).catch(() => []);
    const found = entries.find(entry => entry.startsWith(`${config.vsixId}-`));
    if (found) return { installed: found };
    if (Date.now() > deadline) throw new Error('Installed extension directory did not appear');
    await pause(250);
  }
}

exports.activate = () => {
  if (!directory) return;
  const actions = { task, debug, findFiles, install };
  (async () => {
    const config = JSON.parse(await fs.readFile(path.join(directory, 'driver-config.json'), 'utf8'));
    await publish(path.join(directory, 'driver-ready.json'), { pid: process.pid });
    for (let handled = 0; ;) {
      const text = await fs.readFile(path.join(directory, 'request.json'), 'utf8').catch(() => null);
      const request = text && JSON.parse(text);
      if (!request || request.id <= handled) { await pause(150); continue; }
      handled = request.id;
      const started = Date.now();
      try { await publish(path.join(directory, `response-${request.id}.json`), { ok: true, action: request.action, ms: Date.now() - started, ...await actions[request.action](config) }); }
      catch (error) { await publish(path.join(directory, `response-${request.id}.json`), { ok: false, action: request.action, error: error.stack }); }
    }
  })();
};
