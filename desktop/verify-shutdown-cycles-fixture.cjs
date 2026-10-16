// Synthetic workload started inside real terminals, tasks and the Node debugger.
// It reports its Linux identity to the verifier's nonce-authenticated socket and
// exits only when that socket asks it to (or closes). The verifier never needs a
// PID to end a fixture process.
const fs = require('node:fs');
const path = require('node:path');
const net = require('node:net');
const { spawn } = require('node:child_process');

const [mode, base] = process.argv.slice(2);
const directory = __dirname;
const config = JSON.parse(fs.readFileSync(path.join(directory, 'fixture-config.json'), 'utf8'));
const cycle = fs.readFileSync(path.join(directory, 'cycle.txt'), 'utf8').trim();
const name = base.includes('-c') ? base : `${base}-c${cycle}`;
const stat = fs.readFileSync('/proc/self/stat', 'utf8');
const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
const identity = { token: config.token, name, mode, pid: process.pid, ppid: process.ppid,
  pgid: Number(fields[2]), sid: Number(fields[3]), start: fields[19] };

const socket = net.connect(config.port, '127.0.0.1');
socket.on('connect', () => socket.write(`${JSON.stringify(identity)}\n`));
socket.on('data', () => process.exit(0));
socket.on('close', () => process.exit(0));
socket.on('error', () => {});
// A forgotten fixture never outlives a verifier run by much.
setTimeout(() => process.exit(42), 30 * 60 * 1000);

const child = () => spawn(process.execPath, [__filename, 'child', `${name}-child`], { stdio: 'inherit' });
if (mode === 'tree' || mode === 'build') {
  console.log(`OpenVision ${mode} fixture ${name} running`);
  child();
} else if (mode === 'watch') {
  console.log('[watch] build started');
  console.log(`${path.join(config.project, 'watch.c')}:2:3: error: OpenVision watch diagnostic ${name}`);
  console.log('[watch] build finished');
  child();
} else if (mode !== 'child' && mode !== 'plain') throw new Error(`Unknown fixture mode ${mode}`);
