'use strict';

const { providers, providerFor, extensionStatus } = require('./account-integration-catalog.cjs');
const { installOfficialExtension } = require('./account-integration-download.cjs');
const { createAccountAuth, resolveAccountRuntime } = require('./account-integration-auth.cjs');
const { createUsageReader } = require('./account-usage.cjs');
const { createUsageStatusBar } = require('./account-usage-statusbar.cjs');
const { createAccountBridge } = require('./account-chat-bridge.cjs');

function createIntegration(vscode, context, dependencies = {}) {
  const install = dependencies.install ?? installOfficialExtension;
  const auth = dependencies.auth ?? createAccountAuth(vscode);
  const usageReader = dependencies.usageReader ?? createUsageReader(resolveAccountRuntime);
  const pending = new Map();
  let bridge, disposed = false;
  async function providerStatus(provider, refresh) {
    const base = extensionStatus(vscode, provider), extension = vscode.extensions.getExtension(provider.extensionId);
    if (!extension) return base;
    if (!base.accountId) return { ...base, signedIn: false };
    try { return { ...base, ...await auth.status(extension, provider, refresh), authentication: 'official-account-client' }; }
    catch { return { ...base, state: 'status-unavailable', detail: 'Account status is unavailable. Check the selected profile and try Refresh.' }; }
  }
  const status = async (options = {}) => ({ supported: true,
    providers: await Promise.all(Object.values(providers).map(provider => providerStatus(provider, options.refresh === true))) });
  const usage = async (options = {}) => ({ supported: true,
    providers: await Promise.all(Object.values(providers).map(async provider => {
      const base = extensionStatus(vscode, provider);
      if (!base.installed || !base.accountId) return base;
      return { ...base, ...await usageReader.usage(vscode.extensions.getExtension(provider.extensionId), provider, options.refresh === true) };
    })) });

  async function catalog() {
    const result = await status();
    const connected = result.providers.filter(row => row.signedIn === true && row.accountId && row.models?.length);
    if (!connected.length) return { providers: [] };
    if (!bridge) bridge = createAccountBridge(async (id, accountId) => {
      const provider = providerFor(id), row = await providerStatus(provider);
      if (disposed || row.accountId !== accountId || row.signedIn !== true) throw new Error('This account connection is no longer active.');
      return { ...await resolveAccountRuntime(vscode.extensions.getExtension(provider.extensionId), provider), models: row.models };
    }).catch(error => { bridge = undefined; throw error; });
    const runtime = await bridge;
    if (disposed) { await runtime.close(); throw new Error('Account integrations are shutting down.'); }
    return { providers: connected.map(row => ({ id: `account-${row.provider}-${row.accountId}`,
      name: `${row.provider === 'codex' ? 'Codex' : 'Claude'} · ${row.email || 'Connected account'}`,
      url: `${runtime.url}/${row.provider}/${row.accountId}`, apiKey: runtime.token,
      models: row.models.map(model => ({ id: model.id, name: model.name || model.id, enabled: true,
        capabilities: { reasoningEffortValues: model.reasoningLevels.map(id => ({ id, value: id })), supportsVision: false } })) })) };
  }

  async function open(provider) {
    const extension = vscode.extensions.getExtension(provider.extensionId);
    if (!extension) throw new Error(`Install ${provider.name} first.`);
    await extension.activate();
    const commands = await vscode.commands.getCommands(true);
    if (!commands.includes(provider.command)) throw new Error(`${provider.name} did not register its panel. Check the extension logs or reload OpenVision.`);
    await vscode.commands.executeCommand(provider.command);
    return providerStatus(provider);
  }

  async function connect(provider) {
    if (!vscode.extensions.getExtension(provider.extensionId)) await install(vscode, context, provider);
    if (!vscode.extensions.getExtension(provider.extensionId))
      throw new Error('Reload OpenVision to finish enabling the official extension, then open it from Models & integrations.');
    const extension = vscode.extensions.getExtension(provider.extensionId);
    const current = await auth.status(extension, provider, true);
    if (!current.signedIn) await auth.connect(extension, provider);
    usageReader.invalidate();
    return open(provider);
  }

  function action(value, operation) {
    const provider = providerFor(value);
    const key = provider.id;
    if (pending.has(key)) return pending.get(key);
    const task = Promise.resolve().then(() => operation(provider)).finally(() => pending.delete(key));
    pending.set(key, task);
    return task;
  }

  return { status, usage, catalog, runtime: () => ({ supported: true, providers: Object.values(providers).map(provider => extensionStatus(vscode, provider)) }),
    connect: value => action(value, connect), open: value => action(value, open),
    invalidate() { auth.invalidate(); usageReader.invalidate(); },
    dispose() { disposed = true; auth.dispose(); usageReader.dispose(); return bridge?.then(value => value.close()); },
    docs: value => vscode.env.openExternal(vscode.Uri.parse(providerFor(value).docs)) };
}

function activate(context) {
  const vscode = require('vscode');
  const integration = createIntegration(vscode, context);
  const usageBar = createUsageStatusBar(vscode, integration);
  context.subscriptions.push(usageBar);
  context.subscriptions.push({ dispose: integration.dispose });
  if (vscode.extensions.onDidChange) context.subscriptions.push(vscode.extensions.onDidChange(() => { integration.invalidate(); void usageBar.refresh(); }));
  context.subscriptions.push(vscode.commands.registerCommand('openvision.accounts.showUsage', usageBar.show));
  for (const method of ['status', 'runtime', 'usage', 'catalog', 'connect', 'open', 'docs'])
    context.subscriptions.push(vscode.commands.registerCommand(`openvision.accounts.${method}`, async (...args) => {
      const result = await integration[method](...args);
      if (method === 'connect') void usageBar.refresh(true);
      return result;
    }));
  for (const provider of Object.keys(providers))
    context.subscriptions.push(vscode.commands.registerCommand(`openvision.accounts.${provider}`, async () => {
      const result = await integration.connect(provider); void usageBar.refresh(true); return result;
    }));
}

module.exports = { activate, createIntegration };
