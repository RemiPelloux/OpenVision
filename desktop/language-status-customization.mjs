import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

export const languageStatusManifest = {
  name: 'language-status', publisher: 'openvision', displayName: 'OpenVision Language Status', version: '0.1.0',
  description: 'Says when a language has syntax highlighting only and how to add a language server.',
  engines: { vscode: '^1.96.2' }, main: './language-status-extension.cjs',
  activationEvents: ['onLanguage:python', 'onLanguage:go', 'onLanguage:rust'],
  capabilities: { untrustedWorkspaces: { supported: true }, virtualWorkspaces: true },
};

// Generated built-in extension; rewritten only when its content changes.
export async function installLanguageStatus(root) {
  const target = join(root, 'source/app/extensions/openvision-language-status');
  await mkdir(target, { recursive: true });
  await copyFile(join(root, 'desktop/language-status-extension.cjs'), join(target, 'language-status-extension.cjs'));
  const path = join(target, 'package.json'), content = JSON.stringify(languageStatusManifest, null, 2) + '\n';
  const before = await readFile(path, 'utf8').catch(error => { if (error.code !== 'ENOENT') throw error; return null; });
  if (before !== content) await writeFile(path, content);
  console.log('Python, Go and Rust show a syntax-only language status');
}
