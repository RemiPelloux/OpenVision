import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

if (process.argv.includes('--help')) {
  console.log('Usage: npm start [-- <project-path> | --inspect-preview]\nBuild and open the OpenVision project home, or open the supplied project. See docs/guides/native-runtime.md.');
  process.exit(0);
}

async function run(name, args = []) {
  const path = fileURLToPath(new URL(name, import.meta.url));
  const child = spawn(process.execPath, [path, ...args], { stdio: 'inherit' });
  const code = await new Promise((resolve, reject) => { child.once('error', reject); child.once('exit', (code, signal) => resolve(signal ? 1 : code)); });
  if (code) process.exit(code);
}

await run('build-source.mjs');
await run('launch.mjs', process.argv.slice(2));
