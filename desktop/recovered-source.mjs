import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

// Readable recovered application files used by customization tests. Prefer an
// explicit recovery, then this checkout's prepared recovery, then the original
// sibling `../cursor` recovery used by the first Windows builds.
export function readableAppDirectory(root = new URL('..', import.meta.url), env = process.env) {
  const base = resolve(root instanceof URL ? fileURLToPath(root) : root);
  const candidates = [env.OPENVISION_RECOVERY_DIR && resolve(env.OPENVISION_RECOVERY_DIR, 'readable/app'),
    resolve(base, 'build/recovery/readable/app'), resolve(base, '../cursor/readable/app')].filter(Boolean);
  return candidates.find(directory => existsSync(directory)) ?? candidates.at(-1);
}

export const readableApp = pathToFileURL(readableAppDirectory() + '/');
