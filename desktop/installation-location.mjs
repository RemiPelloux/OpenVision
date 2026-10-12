import { access } from 'node:fs/promises';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { platformLayout } from './platform.mjs';

export function installationCandidates(context = process) {
  const home = context.home ?? homedir();
  if (context.platform === 'darwin') return ['/Applications/Cursor.app', join(home, 'Applications/Cursor.app')];
  if (context.platform === 'linux') return ['/usr/share/cursor', '/opt/cursor', '/opt/Cursor'];
  if (context.platform === 'win32') return [join(context.env.LOCALAPPDATA || join(home, 'AppData/Local'), 'Programs/cursor')];
  throw new Error(`Unsupported native platform: ${context.platform}`);
}

export async function detectInstallation(context = process, candidates = installationCandidates(context)) {
  const layout = platformLayout('.', context.platform);
  for (const candidate of candidates) {
    try {
      await access(join(candidate, layout.installationExecutable));
      await access(join(candidate, layout.appPrefix, 'package.json'));
      return candidate;
    } catch (error) { if (!['ENOENT', 'ENOTDIR'].includes(error.code)) throw error; }
  }
  throw new Error('Native input installation not found. Use --installation PATH; see docs/native-runtime.md for required inputs.');
}
