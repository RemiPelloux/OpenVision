import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareRecovery } from './recovery-snapshot.mjs';
import { detectInstallation } from './installation-location.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
try {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log('Usage: npm run prepare:desktop -- [--installation PATH]\nAutomatically detects native inputs, or uses the selected installation. See docs/native-runtime.md.');
    process.exit(0);
  }
  if (args.length && (args.length !== 2 || args[0] !== '--installation'))
    throw new Error('Usage: npm run prepare:desktop -- [--installation PATH]');
  const installation = args[1] ?? await detectInstallation();
  console.log(JSON.stringify(await prepareRecovery({ root, installation,
    recovery: process.env.OPENVISION_RECOVERY_DIR || resolve(root, 'build/recovery') }), null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
