const path = require('node:path');
const { pathToFileURL } = require('node:url');
const vscode = require('vscode');

const sessions = new Map();
let kernelApi;

async function api(context) {
  if (!kernelApi) kernelApi = import(pathToFileURL(path.resolve(context.extensionPath, '../../../../desktop/jupyter-kernel.mjs')).href);
  return kernelApi;
}

function notebookKey(notebook) { return notebook.uri.toString(); }

async function sessionFor(context, notebook) {
  const key = notebookKey(notebook), existing = sessions.get(key);
  if (existing) return existing;
  const module = await api(context), config = vscode.workspace.getConfiguration('openvision.jupyter', notebook.uri);
  const session = new module.JupyterKernelSession({
    cwd: path.dirname(notebook.uri.fsPath),
    pythonPath: config.get('pythonPath') || undefined,
    kernelName: config.get('kernelName', 'python3'),
    bridgePath: path.join(context.extensionPath, 'kernel_bridge.py'),
  });
  sessions.set(key, session);
  try { await session.start(); return session; } catch (error) { sessions.delete(key); await session.dispose(); throw error; }
}

function outputItems(events, maxBytes) {
  const items = [], enc = new TextEncoder(); let used = 0;
  const add = (item, bytes) => { if (used + bytes > maxBytes) return false; used += bytes; items.push(item); return true; };
  for (const event of events) {
    if (event.type === 'stream') {
      const mime = event.name === 'stderr' ? 'application/vnd.code.notebook.stderr' : 'application/vnd.code.notebook.stdout';
      if (!add(vscode.NotebookCellOutputItem.text(event.text, mime), enc.encode(event.text).byteLength)) break;
    } else if (event.type === 'data' || event.type === 'result') {
      for (const [mime, value] of Object.entries(event.data || {})) {
        const text = typeof value === 'string' ? value : JSON.stringify(value);
        if (!add(vscode.NotebookCellOutputItem.text(text, mime), enc.encode(text).byteLength)) break;
      }
    } else if (event.type === 'error') {
      const text = `${event.ename || 'Error'}: ${event.evalue || ''}\n${(event.traceback || []).join('\n')}`;
      if (!add(vscode.NotebookCellOutputItem.text(text, 'application/vnd.code.notebook.error'), enc.encode(text).byteLength)) break;
    }
  }
  if (used >= maxBytes) items.push(vscode.NotebookCellOutputItem.text('[OpenVision truncated notebook output]', 'text/plain'));
  return items;
}

function activate(context) {
  const controller = vscode.notebooks.createNotebookController('openvision-jupyter-python', 'jupyter-notebook', 'OpenVision Jupyter (local Python)');
  controller.supportedLanguages = ['python'];
  controller.description = 'Runs cells in a local Jupyter kernel. No hosted execution or telemetry.';
  controller.executeHandler = async (cells, notebook, executionController) => {
    if (!vscode.workspace.isTrusted) throw Error('Trust this workspace before running a local Jupyter kernel.');
    const session = await sessionFor(context, notebook);
    const config = vscode.workspace.getConfiguration('openvision.jupyter', notebook.uri);
    const maxBytes = Math.max(1024, Math.min(10_000_000, config.get('maxOutputBytes', 2_000_000)));
    for (const cell of cells) {
      const execution = executionController.createNotebookCellExecution(cell), abort = new AbortController();
      const cancellation = execution.token.onCancellationRequested(() => { abort.abort(); session.interrupt(); });
      execution.start(Date.now());
      try {
        const result = await session.execute(cell.document.getText(), { signal: abort.signal });
        execution.replaceOutput([new vscode.NotebookCellOutput(outputItems(result.events, maxBytes))]);
        execution.end(result.success, Date.now());
      } catch (error) {
        execution.replaceOutput([new vscode.NotebookCellOutput([vscode.NotebookCellOutputItem.error(error)])]);
        execution.end(false, Date.now());
      } finally { cancellation.dispose(); }
    }
  };
  controller.interruptHandler = async notebook => sessions.get(notebookKey(notebook))?.interrupt();
  context.subscriptions.push(controller);
  context.subscriptions.push(vscode.workspace.onDidCloseNotebookDocument(notebook => {
    const session = sessions.get(notebookKey(notebook)); sessions.delete(notebookKey(notebook)); session?.dispose();
  }));
  context.subscriptions.push(vscode.commands.registerCommand('openvision.jupyter.selectKernel', async () => {
    const notebook = vscode.window.activeNotebookEditor?.notebook;
    if (!notebook) return vscode.window.showInformationMessage('Open a Jupyter notebook first.');
    const config = vscode.workspace.getConfiguration('openvision.jupyter', notebook.uri), module = await api(context);
    try {
      const kernels = await module.discoverKernelSpecs(config.get('pythonPath') || undefined);
      const choice = await vscode.window.showQuickPick(kernels.map(item => ({ label: item.displayName, description: item.id, id: item.id })), { placeHolder: 'Select a local Jupyter kernel' });
      if (choice) { await config.update('kernelName', choice.id, vscode.ConfigurationTarget.Workspace); await sessions.get(notebookKey(notebook))?.dispose(); sessions.delete(notebookKey(notebook)); }
    } catch (error) { vscode.window.showErrorMessage(`OpenVision could not discover Jupyter kernels: ${error.message}`); }
  }));
  for (const command of ['restartKernel', 'shutdownKernel']) context.subscriptions.push(vscode.commands.registerCommand(`openvision.jupyter.${command}`, async () => {
    const notebook = vscode.window.activeNotebookEditor?.notebook, key = notebook && notebookKey(notebook), session = key && sessions.get(key);
    if (session) { await session.dispose(); sessions.delete(key); }
  }));
}

function deactivate() { return Promise.all([...sessions.values()].map(session => session.dispose())); }

module.exports = { activate, deactivate };
