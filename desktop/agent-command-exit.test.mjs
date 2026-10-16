import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { createServer } from 'node:net';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createHash, randomUUID } from 'node:crypto';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeShellProcess } from './agent-process-customization.mjs';
import { agentCommandExitMarker, agentCommandExitRuntime, retainAgentCommandExit } from './agent-command-exit-customization.mjs';

const owner = 'function ot(e, t = [], r = {}, n, s) {';
const recovered = kind => readFile(new URL(`../backups/agent-process/extensions/cursor-agent-${kind}/dist/main.js`, import.meta.url), 'utf8');
const ownerText = text => {
  const start = text.indexOf(owner), node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  return text.slice(node.start, node.end);
};

for (const kind of ['exec', 'host']) {
  test(`${kind} command spawner retains running commands for extension-host exit`, async () => {
    const shell = customizeShellProcess(await recovered(kind));
    const patched = retainAgentCommandExit(shell);
    assert.equal(retainAgentCommandExit(patched), patched, 'Reapplication is a no-op');
    assert.equal(patched.split(agentCommandExitMarker).length, 2);
    const before = ownerText(shell), after = ownerText(patched);
    assert.ok(before.endsWith('return o;\n        }'));
    assert.equal(after, before.replace(/return o;\n        \}$/, 'return openvisionAgentCommands.track(o, r.detached);\n        }'));
    // Either build order: the Windows owned-shell transform composes with this one.
    assert.equal(customizeShellProcess(retainAgentCommandExit(await recovered(kind))).includes('openvisionAgentCommands.track(o, r.detached)'), true);
    assert.throws(() => retainAgentCommandExit(shell.replace('return o;\n        }\n        function it', 'return o || 1;\n        }\n        function it')),
      /contract/);
    assert.throws(() => retainAgentCommandExit(shell.replace('process.kill(-o.pid, "SIGTERM")', 'o.kill("SIGTERM")')), /contract/);
    assert.throws(() => retainAgentCommandExit('function unrelated() {}'), /missing or ambiguous/);
  });
}

// Executes the recovered spawner (with its abort path) in a real extension-host
// stand-in process. Commands report to a nonce-authenticated socket; cleanup
// instructions go only through that socket, never to a PID.
async function harness({ patched, ignoreTerm = false, abort = false, kill = false }) {
  const directory = await mkdtemp(join(tmpdir(), 'openvision-command-exit-'));
  const token = randomUUID(), connections = [];
  const server = createServer(socket => {
    socket.setEncoding('utf8');
    const closed = once(socket, 'close');
    socket.once('data', data => { if (JSON.parse(data).token === token) connections.push({ socket, closed, ...JSON.parse(data) }); });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const command = `const s=require('net').connect(${server.address().port},'127.0.0.1',()=>s.write(JSON.stringify({token:${JSON.stringify(token)},pid:process.pid})));` +
    `s.on('data',()=>process.exit(0));${ignoreTerm ? "process.on('SIGTERM',()=>{});" : ''}setInterval(()=>{},1000);setTimeout(()=>process.exit(9),60000);`;
  const source = await customizeShellProcess(await recovered('exec'));
  const text = patched ? retainAgentCommandExit(source) : source;
  const script = join(directory, 'host.cjs');
  await writeFile(script, `${patched ? agentCommandExitRuntime : ''}
const Xe = (e, t, r) => require('node:child_process').spawn(e, t, r), b = env => env, openvisionOwnedShell = undefined;
const ot = (${ownerText(text)});
const controller = new AbortController();
if (process.argv[2] === 'restart') { setTimeout(() => process.exit(0), 2500); return; }
// The recovered POSIX spawner: detached shell with its own process group.
ot('/bin/sh', ['-c', ${JSON.stringify(`exec ${process.execPath} -e "$OV_COMMAND"`)}], { detached: true, stdio: ['ignore', 'ignore', 'ignore'],
  env: { ...process.env, OV_COMMAND: ${JSON.stringify(command)} } }, { type: 'insecure_none' }, controller.signal);
process.stdin.on('data', data => {
  if (String(data).startsWith('abort')) controller.abort();
  else process.exit(0); // graceful extension-host exit: no abort reaches the call
});
`);
  const host = spawn(process.execPath, [script], { stdio: ['pipe', 'inherit', 'inherit'] });
  let restarted;
  try {
    for (let attempt = 0; !connections.length && attempt < 100; attempt++) await new Promise(resolve => setTimeout(resolve, 50));
    assert.equal(connections.length, 1, 'Command connected');
    const [command] = connections;
    const exited = once(host, 'exit');
    // Abrupt exit: SIGKILL through this test's own child handle; no handler runs.
    if (kill) host.kill('SIGKILL'); else host.stdin.write(abort ? 'abort\n' : 'exit\n');
    if (abort) await new Promise(resolve => setTimeout(resolve, 1500)); else await exited;
    const wait = milliseconds => Promise.race([command.closed.then(() => false), new Promise(resolve => setTimeout(() => resolve(true), milliseconds))]);
    const result = { survived: await wait(3000) };
    if (kill && result.survived) {
      // The next extension host from the same installation ends the orphan.
      restarted = spawn(process.execPath, [script, 'restart'], { stdio: 'inherit' });
      const restartedExit = once(restarted, 'exit');
      result.survivedRestart = await wait(5000);
      await restartedExit;
    }
    if (await wait(0)) { command.socket.write('exit'); await command.closed; }
    return result;
  } finally {
    if (host.exitCode === null && host.signalCode === null) { host.stdin.end('exit\n'); await once(host, 'exit'); }
    server.close(); await rm(directory, { recursive: true, force: true });
    if (typeof process.getuid === 'function') await rm(join(tmpdir(), `openvision-agent-commands-${process.getuid()}-${
      createHash('sha256').update(directory).digest('hex').slice(0, 16)}`), { recursive: true, force: true });
  }
}

const posix = { skip: process.platform === 'win32' ? 'POSIX process groups; Windows uses the job-object owner' : false, timeout: 30000 };

test('recovered spawner leaves a running command alive after graceful host exit (control)', posix, async () => {
  assert.deepEqual(await harness({ patched: false }), { survived: true });
});

test('graceful host exit terminates the owned running command group', posix, async () => {
  assert.deepEqual(await harness({ patched: true }), { survived: false });
});

test('graceful host exit also ends a command that ignores SIGTERM', posix, async () => {
  assert.deepEqual(await harness({ patched: true, ignoreTerm: true }), { survived: false });
});

test('abrupt host exit leaves the command until the next host ends it (journal)', { ...posix,
  skip: process.platform !== 'linux' ? 'Linux /proc identity journal' : false }, async () => {
  assert.deepEqual(await harness({ patched: true, kill: true }), { survived: true, survivedRestart: false });
});

test('the recovered spawner never ends an orphan after abrupt exit (control)', { ...posix,
  skip: process.platform !== 'linux' ? 'Linux /proc identity journal' : false }, async () => {
  assert.deepEqual(await harness({ patched: false, kill: true }), { survived: true, survivedRestart: true });
});

test('Stop still terminates the command through the recovered abort path', posix, async () => {
  assert.deepEqual(await harness({ patched: true, abort: true }), { survived: false });
});
