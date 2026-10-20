import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareRemoteServer } from './remote-server.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
try {
  if (process.argv.includes('--help')) {
    console.log('Usage: npm run prepare:remote\nDownloads the pinned remote server and open-remote-ssh inputs, verifies them, and writes the customized OpenVision server to build/remote. Run npm run build:desktop afterwards. See docs/guides/remote-ssh.md.');
    process.exit(0);
  }
  if (process.argv.length > 2) throw new Error('Usage: npm run prepare:remote');
  const manifest = await prepareRemoteServer(root);
  console.log(JSON.stringify({ archive: manifest.archive, sha256: manifest.sha256, bytes: manifest.bytes,
    customized: manifest.customized.length, extension: `${manifest.extension.id}@${manifest.extension.version}` }, null, 2));
} catch (error) { console.error(error.message); process.exitCode = 1; }
