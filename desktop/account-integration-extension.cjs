'use strict';

const { providers, providerFor, extensionStatus } = require('./account-integration-catalog.cjs');
const { installOfficialExtension } = require('./account-integration-download.cjs');
const { createAccountAuth } = require('./account-integration-auth.cjs');

function createIntegration(vscode, context, dependencies = {}) {
  const install = dependencies.install ?? installOfficialExtension;
  const auth = dependencies.auth ?? createAccountAuth(vscode);
  const pending = new Map();
  async function providerStatus(provider, refresh) {
    const base = extensionStatus(vscode, provider), extension = vscode.extensions.getExtension(provider.extensionId);
    if (!extension) return base;
    if (!base.accountId) return { ...base, signedIn: false };
    try { return { ...base, ...await auth.status(extension, provider, refresh), authentication: 'official-account-client' }; }
    catch { return { ...base, state: 'status-unavailable', detail: 'Account status is unavailable. Check the selected profile and try Refresh.' }; }
  }
  const status = async (options = {}) => ({ supported: true,
    providers: await Promise.all(Object.values(providers).map(provider => providerStatus(provider, options.refresh === true))) });

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

  return { status, runtime: () => ({ supported: true, providers: Object.values(providers).map(provider => extensionStatus(vscode, provider)) }),
    connect: value => action(value, connect), open: value => action(value, open),
    invalidate: auth.invalidate, dispose: auth.dispose,
    docs: value => vscode.env.openExternal(vscode.Uri.parse(providerFor(value).docs)) };
}

function activate(context) {
  const vscode = require('vscode');
  const integration = createIntegration(vscode, context);
  context.subscriptions.push({ dispose: integration.dispose });
  if (vscode.extensions.onDidChange) context.subscriptions.push(vscode.extensions.onDidChange(integration.invalidate));
  for (const method of ['status', 'runtime', 'connect', 'open', 'docs'])
    context.subscriptions.push(vscode.commands.registerCommand(`openvision.accounts.${method}`, integration[method]));
  for (const provider of Object.keys(providers))
    context.subscriptions.push(vscode.commands.registerCommand(`openvision.accounts.${provider}`, () => integration.connect(provider)));
}

module.exports = { activate, createIntegration };
