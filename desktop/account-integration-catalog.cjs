'use strict';

const providers = Object.freeze({
  codex: Object.freeze({ id: 'codex', name: 'ChatGPT via Codex', extensionId: 'openai.chatgpt',
    namespace: 'openai', extensionName: 'chatgpt', command: 'chatgpt.newCodexPanel',
    docs: 'https://developers.openai.com/codex/ide' }),
  claude: Object.freeze({ id: 'claude', name: 'Claude via Claude Code', extensionId: 'Anthropic.claude-code',
    namespace: 'Anthropic', extensionName: 'claude-code', command: 'claude-vscode.editor.open',
    docs: 'https://code.claude.com/docs/en/vs-code' }),
});

function providerFor(value) {
  if (typeof value !== 'string' || !Object.hasOwn(providers, value)) throw new Error('Choose Codex or Claude Code.');
  return providers[value];
}

function platformTarget(platform = process.platform, arch = process.arch) {
  if (!['win32', 'darwin', 'linux'].includes(platform) || !['x64', 'arm64'].includes(arch))
    throw new Error('This operating system or architecture is not supported by the account integration installer.');
  return `${platform}-${arch}`;
}

function extensionStatus(vscode, provider) {
  const extension = vscode.extensions.getExtension(provider.extensionId);
  return { id: provider.id, provider: provider.id, name: provider.name, extensionId: provider.extensionId,
    installed: !!extension, active: extension?.isActive === true,
    version: extension?.packageJSON?.version ?? null,
    authentication: 'managed-by-extension', signedIn: null,
    accountId: process.env[`OPENVISION_${provider.id.toUpperCase()}_ACCOUNT_ID`] ?? null,
    state: extension ? 'installed' : 'not-installed',
    detail: extension ? 'Open the integration to sign in or check your account.' : 'Install the official extension to sign in with your account.' };
}

function registryFile(value, suffix) {
  let url;
  try { url = new URL(value); } catch { throw new Error('The extension registry returned an invalid download URL.'); }
  if (url.origin !== 'https://open-vsx.org' || url.username || url.password || !url.pathname.endsWith(suffix))
    throw new Error('The extension registry returned an unexpected download source.');
  return url.href;
}

module.exports = { providers, providerFor, platformTarget, extensionStatus, registryFile };
