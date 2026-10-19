// OV-703 disposable SSH host controller for `npm run verify:remote-ssh`.
// Runs as the separate remote account (not the verifier user) for one
// verification session and serves a fixed command set over a unix socket in a
// directory shared only with the verifier's group:
//   sudo useradd --create-home ovremote                     (once)
//   sudo install -d -o ovremote -g "$(id -gn)" -m 2770 logs/remote-ssh-control
//   sudo -u ovremote node desktop/remote-ssh-host.mjs logs/remote-ssh-control
// It starts an unprivileged sshd on 127.0.0.1 (public-key authentication only,
// host key and config under ~/.openvision-fixture), keeps the sshd log as the
// session journal, and stops remote processes only after matching their uid,
// command line and start time. Nothing is granted beyond this account.
import { spawn, spawnSync } from 'node:child_process';
import { once } from 'node:events';
import { chmod, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { connect, createServer } from 'node:net';
import { homedir, userInfo } from 'node:os';
import { join, resolve } from 'node:path';

export const commands = ['status', 'authorize', 'start', 'stop', 'kill-sessions', 'processes', 'scan', 'journal', 'reset-server', 'shutdown'];

// /proc rows for one uid: pid, start time (clock ticks since boot) and argv.
export async function processesOf(uid) {
  const rows = [];
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry)) continue;
    const status = await readFile(`/proc/${entry}/status`, 'utf8').catch(() => '');
    if (Number(status.match(/^Uid:\s+(\d+)/m)?.[1]) !== uid) continue;
    const stat = await readFile(`/proc/${entry}/stat`, 'utf8').catch(() => '');
    const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
    const argv = (await readFile(`/proc/${entry}/cmdline`, 'utf8').catch(() => '')).split('\0').filter(Boolean);
    if (!stat) continue;
    rows.push({ pid: Number(entry), ppid: Number(fields[1]), start: Number(fields[19]), argv });
  }
  return rows;
}

export function classify(row) {
  const command = row.argv.join(' ');
  if (/^sshd: [\w-]+@/.test(command) || /^sshd: [\w-]+ \[/.test(command)) return 'ssh-session';
  if (/\/usr\/sbin\/sshd\b.*-D/.test(command)) return 'sshd-listener';
  if (/openvision-server|\.openvision-server\/|server-main\.js|bootstrap-fork|extensionHostProcess|ptyHost/.test(command)) return 'remote-server';
  if (/remote-ssh-host\.mjs/.test(command)) return 'fixture-controller';
  return 'other';
}

// Signal only rows whose identity is re-read and unchanged.
async function signalMatching(uid, kinds, signal, exclude) {
  const targets = (await processesOf(uid)).filter(row => kinds.includes(classify(row)) && !exclude.has(row.pid));
  const signalled = [];
  for (const row of targets) {
    const now = (await processesOf(uid)).find(item => item.pid === row.pid);
    if (!now || now.start !== row.start || now.argv.join('\0') !== row.argv.join('\0')) continue;
    try { process.kill(row.pid, signal); signalled.push({ pid: row.pid, start: row.start, kind: classify(row), command: row.argv.join(' ').slice(0, 160) }); }
    catch (error) { if (error.code !== 'ESRCH') throw error; }
  }
  return signalled;
}

async function scanTree(base, needles, skip) {
  const hits = [];
  let files = 0, bytes = 0;
  async function walk(path) {
    for (const entry of await readdir(path, { withFileTypes: true }).catch(() => [])) {
      const child = join(path, entry.name);
      if (skip.some(prefix => child.startsWith(prefix))) continue;
      if (entry.isDirectory()) await walk(child);
      else if (entry.isFile()) {
        const data = await readFile(child).catch(() => undefined);
        if (!data) continue;
        files += 1; bytes += data.length;
        for (const needle of needles) if (data.includes(needle)) hits.push({ file: child.slice(base.length + 1), needle: needle.slice(0, 6) + '…' });
      }
    }
  }
  await walk(base);
  return { files, bytes, hits };
}

async function main(control) {
  const home = homedir(), uid = userInfo().uid;
  const fixture = join(home, '.openvision-fixture');
  await mkdir(fixture, { recursive: true, mode: 0o700 });
  const hostKey = join(fixture, 'ssh_host_ed25519_key'), authorized = join(fixture, 'authorized_keys');
  const journal = join(fixture, 'sshd.log'), config = join(fixture, 'sshd_config');
  if (!await stat(hostKey).catch(() => undefined))
    spawnSync('ssh-keygen', ['-q', '-t', 'ed25519', '-N', '', '-f', hostKey], { stdio: 'ignore' });
  let sshd, port;
  const start = async () => {
    if (sshd) return { port, already: true };
    port = await new Promise(done => { const probe = createServer().listen(0, '127.0.0.1', () => { const value = probe.address().port; probe.close(() => done(value)); }); });
    await writeFile(config, [`Port ${port}`, 'ListenAddress 127.0.0.1', `HostKey ${hostKey}`, `PidFile ${join(fixture, 'sshd.pid')}`,
      `AuthorizedKeysFile ${authorized}`, 'PubkeyAuthentication yes', 'PasswordAuthentication no', 'KbdInteractiveAuthentication no',
      'UsePAM no', 'StrictModes yes', 'AllowTcpForwarding local', 'X11Forwarding no', 'PermitTTY yes', 'LogLevel VERBOSE',
      'ClientAliveInterval 5', 'ClientAliveCountMax 2', `AllowUsers ${userInfo().username}`, ''].join('\n'));
    sshd = spawn('/usr/sbin/sshd', ['-D', '-f', config, '-E', journal], { stdio: 'ignore' });
    sshd.once('exit', () => { sshd = undefined; });
    for (let i = 0; i < 100; i++) {
      const ready = await new Promise(done => { const probe = connect(port, '127.0.0.1');
        probe.once('connect', () => { probe.destroy(); done(true); }).once('error', () => done(false)); });
      if (ready) return { port, hostKey: (await readFile(`${hostKey}.pub`, 'utf8')).trim() };
      await new Promise(done => setTimeout(done, 50));
    }
    throw new Error('sshd did not start');
  };
  const stop = async () => {
    const listener = sshd;
    if (listener) { listener.kill('SIGTERM'); await once(listener, 'exit'); }
    const sessions = await signalMatching(uid, ['ssh-session'], 'SIGTERM', new Set([process.pid]));
    return { stopped: Boolean(listener), sessions };
  };
  const handlers = {
    status: async () => ({ uid, user: userInfo().username, home, port: sshd ? port : null }),
    authorize: async ({ publicKey }) => {
      if (!/^ssh-ed25519 [A-Za-z0-9+/=]+( [\w@.-]+)?$/.test(publicKey ?? '')) throw new Error('invalid public key');
      await writeFile(authorized, publicKey + '\n', { mode: 0o600 }); await chmod(authorized, 0o600); return { ok: true };
    },
    start, stop,
    'kill-sessions': async () => ({ sessions: await signalMatching(uid, ['ssh-session'], 'SIGKILL', new Set([process.pid])) }),
    processes: async () => ({ rows: (await processesOf(uid)).map(row => ({ ...row, kind: classify(row), argv: row.argv.join(' ').slice(0, 240) })) }),
    scan: async ({ needles }) => {
      if (!Array.isArray(needles) || !needles.every(item => typeof item === 'string' && item.length >= 12)) throw new Error('needles must be long strings');
      return scanTree(home, needles, [fixture]);
    },
    journal: async () => ({ text: await readFile(journal, 'utf8').catch(() => '') }),
    'reset-server': async () => {
      const running = (await processesOf(uid)).filter(row => classify(row) === 'remote-server');
      if (running.length) throw new Error('remote server processes are running');
      await rm(join(home, '.openvision-server'), { recursive: true, force: true }); return { ok: true };
    },
    shutdown: async () => { const result = await stop(); setImmediate(() => { server.close(); process.exit(0); }); return result; },
  };
  const socketPath = join(control, 'control.sock');
  await rm(socketPath, { force: true });
  const server = createServer(socket => {
    let buffer = '';
    socket.on('data', async chunk => {
      buffer += chunk;
      if (!buffer.includes('\n')) return;
      const line = buffer.slice(0, buffer.indexOf('\n'));
      let reply;
      try {
        const request = JSON.parse(line);
        if (!commands.includes(request.command)) throw new Error(`unknown command ${request.command}`);
        reply = { ok: true, result: await handlers[request.command](request) };
      } catch (error) { reply = { ok: false, error: error.message }; }
      socket.end(JSON.stringify(reply) + '\n');
    });
  });
  server.listen(socketPath, () => chmod(socketPath, 0o660).then(() => console.log(`remote-ssh host ready: ${socketPath} (uid ${uid})`)));
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => stop().finally(() => process.exit(0)));
}

// Verifier side: one JSON request per connection.
export async function hostRequest(control, command, body = {}) {
  return new Promise((done, fail) => {
    const socket = connect(join(control, 'control.sock'));
    let text = '';
    socket.on('data', chunk => { text += chunk; }).on('error', fail).on('end', () => {
      try { const reply = JSON.parse(text); reply.ok ? done(reply.result) : fail(new Error(`remote host ${command}: ${reply.error}`)); }
      catch (error) { fail(error); }
    });
    socket.write(JSON.stringify({ ...body, command }) + '\n');
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const control = process.argv[2];
  if (!control) { console.error('Usage: node desktop/remote-ssh-host.mjs <control-directory>'); process.exit(2); }
  if (userInfo().uid === 0) { console.error('Run the remote fixture host as the remote account, not root.'); process.exit(2); }
  await main(resolve(control));
}
