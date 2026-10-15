import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { installAccountWebviews } from './account-integration-webviews.mjs';
import { installAccountBrowser } from './account-browser-customization.mjs';

export const accountExtensionManifest = {
  name: 'accounts', publisher: 'openvision', displayName: 'OpenVision Accounts', version: '0.1.0',
  description: 'Use ChatGPT with Codex and Claude with Claude Code through their official IDE integrations.',
  engines: { vscode: '^1.96.2' }, main: './account-integration-extension.cjs',
  activationEvents: ['onStartupFinished', 'onCommand:openvision.accounts.catalog', 'onCommand:openvision.accounts.usage', 'onCommand:openvision.accounts.status', 'onCommand:openvision.accounts.connect',
    'onCommand:openvision.accounts.open', 'onCommand:openvision.accounts.docs', 'onCommand:openvision.accounts.runtime'],
  capabilities: { untrustedWorkspaces: { supported: 'limited', description: 'Account settings are available. Official agents manage their own workspace trust.' } },
  contributes: { configuration: { title: 'OpenVision', properties: {
    'openvision.onboarding.showOnStartup': { type: 'boolean', default: true, scope: 'application',
      description: 'Show setup on first launch. Run it again from OpenVision Settings → Models.' },
  } }, commands: [
    { command: 'openvision.accounts.codex', title: 'OpenVision: Connect ChatGPT with Codex' },
    { command: 'openvision.accounts.claude', title: 'OpenVision: Connect Claude with Claude Code' },
  ] },
};

export async function installAccountIntegrations(root) {
  await installAccountBrowser(root);
  await installAccountWebviews(root);
  const target = join(root, 'source/app/extensions/openvision-accounts');
  await mkdir(target, { recursive: true });
  for (const file of ['account-integration-extension.cjs', 'account-integration-catalog.cjs', 'account-integration-download.cjs',
    'account-integration-auth.cjs', 'account-auth.cjs', 'account-auth-process.cjs', 'account-login-url.cjs',
    'account-usage.cjs', 'account-usage-protocol.cjs', 'account-usage-statusbar.cjs', 'account-claude-client.cjs',
    'account-chat-bridge.cjs', 'account-chat-clients.cjs', 'account-chat-request.cjs', 'account-chat-session.cjs'])
    await copyFile(join(root, 'desktop', file), join(target, file));
  const path = join(target, 'package.json');
  const content = JSON.stringify(accountExtensionManifest, null, 2) + '\n';
  const before = await readFile(path, 'utf8').catch(error => { if (error.code !== 'ENOENT') throw error; return null; });
  if (before !== content) await writeFile(path, content);
}
