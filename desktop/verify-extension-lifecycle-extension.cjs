// Disposable OV-702 lifecycle driver. It runs one phase per launch, using only
// the workbench's own install/uninstall commands and the public extension API.
const vscode = require('vscode');
const fsp = require('node:fs/promises');
const path = require('node:path');

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
let directory;

async function publish(name, value) {
  const destination = path.join(directory, `${name}.json`);
  await fsp.writeFile(`${destination}.tmp`, JSON.stringify(value, null, 2));
  await fsp.rename(`${destination}.tmp`, destination);
}

async function until(probe, timeout) {
  const deadline = Date.now() + timeout;
  for (;;) {
    const value = await probe();
    if (value || Date.now() > deadline) return value;
    await pause(100);
  }
}

const describe = error => ({ message: String(error?.message ?? error).slice(0, 2000), name: error?.name, code: error?.code });
function present(id) {
  const extension = vscode.extensions.getExtension(id);
  return extension ? { version: extension.packageJSON.version, path: extension.extensionPath, active: extension.isActive,
    kind: extension.extensionKind } : null;
}

const operations = {
  async present({ id }) { return present(id); },
  async install({ vsix, id, version, wait = true }) {
    const started = Date.now();
    try { await vscode.commands.executeCommand('workbench.extensions.installExtension', vscode.Uri.file(vsix)); }
    catch (error) { return { ok: false, error: describe(error), ms: Date.now() - started, after: id ? present(id) : null }; }
    const registered = wait && id ? await until(() => present(id)?.version === version && present(id), 20000) : null;
    return { ok: true, ms: Date.now() - started, registered: registered || (id ? present(id) : null) };
  },
  async uninstall({ id }) {
    const started = Date.now();
    try { await vscode.commands.executeCommand('workbench.extensions.uninstallExtension', id); }
    catch (error) { return { ok: false, error: describe(error) }; }
    const gone = await until(() => !present(id), 20000);
    return { ok: true, ms: Date.now() - started, unregistered: gone, after: present(id) };
  },
  async activate({ id, timeout = 20000 }) {
    const extension = await until(() => vscode.extensions.getExtension(id), timeout);
    if (!extension) return { present: false };
    const started = Date.now();
    try {
      const exports = await Promise.race([extension.activate(), pause(timeout).then(() => { throw new Error('activation timed out'); })]);
      return { present: true, activated: true, exports, ms: Date.now() - started, version: extension.packageJSON.version };
    } catch (error) {
      return { present: true, activated: false, error: describe(error), isActive: extension.isActive, ms: Date.now() - started };
    }
  },
  // Uninstalled files are removed by the shared process during the next startup.
  async pathGone({ path: target, timeout = 30000 }) {
    const started = Date.now();
    const gone = await until(() => fsp.access(target).then(() => false, () => true), timeout);
    return { gone, ms: Date.now() - started };
  },
  async setSetting({ key, value }) {
    await vscode.workspace.getConfiguration().update(key, value, vscode.ConfigurationTarget.Global);
    return { value: vscode.workspace.getConfiguration().inspect(key)?.globalValue };
  },
  async readSetting({ key }) { return { globalValue: vscode.workspace.getConfiguration().inspect(key)?.globalValue ?? null }; },
  async environment() { return { language: vscode.env.language, appName: vscode.env.appName, version: vscode.version, pid: process.pid,
    arch: process.arch, modules: process.versions.modules, node: process.versions.node, electron: process.versions.electron }; },
  async command({ command }) {
    try { await vscode.commands.executeCommand(command); return { ok: true }; }
    catch (error) { return { ok: false, error: describe(error) }; }
  },
};

exports.activate = async () => {
  const project = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  if (!project) return;
  directory = path.dirname(project);
  let plan;
  try { plan = JSON.parse(await fsp.readFile(path.join(directory, 'plan.json'), 'utf8')); }
  catch { return; }
  const result = { phase: plan.phase, pid: process.pid, steps: [] };
  await publish(`driver-ready-${plan.phase}`, { pid: process.pid, at: Date.now() });
  try {
    for (const step of plan.steps) {
      const started = Date.now();
      const value = await operations[step.op](step);
      result.steps.push({ ...step, result: value, ms: Date.now() - started });
      await publish(`progress-${plan.phase}`, { done: result.steps.length, of: plan.steps.length, last: step.label ?? step.op });
    }
    result.pid_after = process.pid;
    result.success = true;
  } catch (error) {
    result.success = false; result.failure = describe(error);
  }
  await publish(`phase-${plan.phase}`, result);
};
