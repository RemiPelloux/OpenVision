import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareRecovery } from './recovery-snapshot.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
try {
  const args = process.argv.slice(2);
  if (args.length !== 2 || args[0] !== '--installation')
    throw new Error('Usage: node desktop/prepare-source.mjs --installation PATH\nSelect the Cursor installation directory (Cursor.app on macOS), not your User profile.');
  console.log(JSON.stringify(await prepareRecovery({ root, installation: args[1],
    recovery: process.env.OPENVISION_RECOVERY_DIR || resolve(root, 'build/recovery') }), null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
