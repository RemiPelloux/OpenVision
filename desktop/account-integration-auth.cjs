'use strict';

const { lstat, realpath } = require('node:fs/promises');
const { isAbsolute, join, relative, sep, basename } = require('node:path');
const { readAccount, loginAccount } = require('./account-auth.cjs');
const STATUS_TTL_MS = 10000;
const BROWSER_OPEN_TIMEOUT_MS = 15000;

async function openAccountBrowser(vscode, url, { signal, provider }) {
  signal.throwIfAborted();
  let timer, cancel;
  const unavailable = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error('The browser did not respond. Check your default browser and try again.')), BROWSER_OPEN_TIMEOUT_MS);
    cancel = () => reject(new Error('Account sign-in cancelled.'));
    signal.addEventListener('abort', cancel, { once: true });
  });
  try {
    const opened = await Promise.race([vscode.commands.executeCommand('openvision.accounts.openBrowser', provider, url), unavailable]);
    if (!opened) throw new Error('The browser could not be opened. Check your default browser and try again.');
  } finally { clearTimeout(timer); signal.removeEventListener('abort', cancel); }
}

function binaryRelative(provider, platform = process.platform, arch = process.arch) {
  if (!['win32', 'darwin', 'linux'].includes(platform) || !['x64', 'arm64'].includes(arch))
    throw new Error('This platform is not supported by the official account integration.');
  const executable = provider === 'codex' ? 'codex' : 'claude';
  if (provider === 'claude') return join('resources', 'native-binary', executable + (platform === 'win32' ? '.exe' : ''));
  const os = { win32: 'windows', darwin: 'macos', linux: 'linux' }[platform];
  return join('bin', `${os}-${arch === 'x64' ? 'x86_64' : 'aarch64'}`, executable + (platform === 'win32' ? '.exe' : ''));
}

async function resolveAccountRuntime(extension, provider) {
  if (`${extension.packageJSON?.publisher}.${extension.packageJSON?.name}`.toLowerCase() !== provider.extensionId.toLowerCase())
    throw new Error('The installed extension does not match the official provider identity.');
  const accountDirectory = process.env[provider.id === 'codex' ? 'CODEX_HOME' : 'CLAUDE_CONFIG_DIR'];
  const accountId = process.env[`OPENVISION_${provider.id.toUpperCase()}_ACCOUNT_ID`];
  if (!accountDirectory || !isAbsolute(accountDirectory) || !/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/.test(accountId ?? '') || basename(accountDirectory) !== accountId)
    throw new Error('Select an OpenVision account profile before connecting.');
  if (!(await lstat(accountDirectory)).isDirectory()) throw new Error('The selected account profile directory is unavailable.');
  const owner = await realpath(extension.extensionPath);
  const executable = await realpath(join(owner, binaryRelative(provider.id)));
  const within = relative(owner, executable);
  if (!within || within === '..' || within.startsWith(`..${sep}`) || isAbsolute(within) || !(await lstat(executable)).isFile())
    throw new Error('The official account executable is outside its installed extension.');
  return { provider: provider.id, executable, accountDirectory };
}

function createAccountAuth(vscode, dependencies = {}) {
  const resolve = dependencies.resolve ?? resolveAccountRuntime;
  const read = dependencies.read ?? readAccount, login = dependencies.login ?? loginAccount;
  const controllers = new Set(), cache = new Map(), inFlight = new Map();
  let disposed = false;

  async function owned(operation) {
    if (disposed) throw new Error('Account integrations are shutting down.');
    const controller = new AbortController(); controllers.add(controller);
    try { return await operation(controller); } finally { controllers.delete(controller); }
  }

  async function status(extension, provider, refresh = false) {
    const cached = cache.get(provider.id);
    if (!refresh && cached && Date.now() - cached.checkedAt < STATUS_TTL_MS) return cached;
    if (inFlight.has(provider.id)) return inFlight.get(provider.id);
    const task = owned(async controller => {
      const runtime = await resolve(extension, provider);
      const result = { ...await read({ ...runtime, signal: controller.signal }), checkedAt: Date.now() };
      cache.set(provider.id, result); return result;
    }).finally(() => inFlight.delete(provider.id));
    inFlight.set(provider.id, task); return task;
  }

  async function connect(extension, provider) {
    cache.delete(provider.id);
    return owned(async controller => {
      const runtime = await resolve(extension, provider);
      return vscode.window.withProgress({ location: vscode.ProgressLocation.Notification,
        title: `Sign in to ${provider.name}`, cancellable: true }, async (progress, token) => {
        const cancellation = token.onCancellationRequested(() => controller.abort());
        try {
          const result = await login({ ...runtime, signal: controller.signal,
            openExternal: url => openAccountBrowser(vscode, url, { signal: controller.signal, provider: provider.id }),
            onProgress: state => progress.report({ message: state.stage === 'waiting-for-code' ? 'Paste the one-time code from the sign-in page when prompted.' : 'Finish signing in in your browser…' }),
            requestCode: async () => {
              const code = await vscode.window.showInputBox({ title: 'Claude sign-in code', password: true,
                prompt: 'Paste the one-time code from the official Claude sign-in page. It will not be saved.', ignoreFocusOut: true }, token);
              if (code === undefined) { controller.abort(); throw new Error('Claude sign-in cancelled.'); }
              return code;
            } });
          const snapshot = { ...result, checkedAt: Date.now() }; cache.set(provider.id, snapshot); return snapshot;
        } finally { cancellation.dispose(); }
      });
    });
  }

  return { status, connect, invalidate: () => cache.clear(), dispose() {
    disposed = true; for (const controller of controllers) controller.abort(); cache.clear();
  } };
}

module.exports = { binaryRelative, resolveAccountRuntime, createAccountAuth };
