import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import net from 'node:net';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const executable = join(root, 'electron-host/OpenVision.exe');
const manifest = JSON.parse(await readFile(join(root, 'build/source-build.json'), 'utf8'));
if (manifest.name !== 'OpenVision') throw new Error('Unrecognized desktop runtime');
const argumentsList = [
  '--user-data-dir', join(root, 'data/local'), '--extensions-dir', join(root, 'data/local-extensions'),
  '--new-window', '--disable-updates', '--skip-welcome', '--skip-release-notes',
  join(root, 'OpenVision.code-workspace'), resolve(root, '../../OpenVision Projects/Playground/src/main.js')
];
let debugPort;
if (process.argv.includes('--inspect-preview')) {
  const probe = net.createServer();
  await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve));
  debugPort = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  argumentsList.unshift(`--remote-debugging-port=${debugPort}`, '--remote-debugging-address=127.0.0.1');
}
const environment = { ...process.env };
delete environment.ELECTRON_RUN_AS_NODE;
const child = spawn(executable, argumentsList, { detached: true, stdio: 'ignore', windowsHide: false, env: environment });
await new Promise((resolve, reject) => { child.once('spawn', resolve); child.once('error', reject); });
child.unref();
await mkdir(join(root, 'logs'), { recursive: true });
const record = { name: 'OpenVision', pid: child.pid, executable, arguments: argumentsList,
  started_at: new Date().toISOString(), debug_port: debugPort,
  profile_directory: join(root, 'data/local'), kind: 'Recovered editable JavaScript source; compiled native Electron host' };
await writeFile(join(root, 'logs/desktop-launch.json'), JSON.stringify(record, null, 2) + '\n');
console.log(JSON.stringify(record, null, 2));
