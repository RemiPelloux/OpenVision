import { spawn, spawnSync } from 'node:child_process';
import { once } from 'node:events';
import { existsSync } from 'node:fs';
import { mkdir, readFile, readdir, symlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

// OV-803 Agent command sandbox contract, shared by the unit tests (Landlock
// replacement) and verify:helper-contracts (the shipped helper). Every case uses
// the recovered command line: --policy <file> [--preflight-only] -- <command>.
let sequence = 0;
export const run = (binary, args, options = {}) => spawnSync(binary, args, { encoding: 'utf8', timeout: 20000, ...options });

export async function sandboxFixture(work, name) {
  const base = join(work, name);
  await mkdir(join(base, 'ws'), { recursive: true }); await mkdir(join(base, 'outside'), { recursive: true });
  return base;
}

export async function policy(base, sandbox = {}, extra = {}) {
  const file = join(base, `policy-${process.pid}-${++sequence}.json`);
  await writeFile(file, JSON.stringify({ sandbox: { type: 'workspace_readwrite', cwd: join(base, 'ws'), readBoundary: 'system', hardcodedReadPaths: [],
    additionalReadonlyPaths: {}, networkAccess: false, additionalReadwritePaths: [], disableTmpWrite: false, ...sandbox }, ...extra }), { mode: 0o600 });
  return file;
}

export const expectedAuthority = Object.freeze({ preflight: 0, workspaceWrite: true, outsideWriteDenied: true, readonlyWorkspaceDenied: true,
  tcpDenied: true, udpDenied: true, networkAllowed: true, exitStatus: 7 });

// Authority: writes confined to the workspace, read-only workspaces, network off by default.
export async function authorityMatrix(binary, base) {
  const ws = join(base, 'ws'), outside = join(base, 'outside');
  const sh = async (script, sandbox) => run(binary, ['--policy', await policy(base, sandbox), '--', '/bin/sh', '-c', script], { cwd: ws });
  const python = async (code, sandbox) => run(binary, ['--policy', await policy(base, sandbox), '--', 'python3', '-c', code], { cwd: ws });
  return {
    preflight: run(binary, ['--policy', await policy(base), '--preflight-only', '--', '/bin/true']).status,
    workspaceWrite: (await sh(`echo inside > '${ws}/inside.txt'`)).status === 0 && existsSync(join(ws, 'inside.txt')),
    outsideWriteDenied: (await sh(`echo outside > '${outside}/escape.txt'`)).status !== 0 && !existsSync(join(outside, 'escape.txt')),
    readonlyWorkspaceDenied: (await sh(`echo ro > '${ws}/readonly.txt'`, { type: 'workspace_readonly' })).status !== 0 && !existsSync(join(ws, 'readonly.txt')),
    tcpDenied: (await python("import socket;s=socket.socket();s.settimeout(2);s.connect(('127.0.0.1',9))")).stderr.includes('PermissionError'),
    udpDenied: (await python('import socket;socket.socket(socket.AF_INET,socket.SOCK_DGRAM)')).stderr.includes('PermissionError'),
    networkAllowed: (await python('import socket;socket.socket(socket.AF_INET,socket.SOCK_DGRAM)', { networkAccess: true })).status === 0,
    exitStatus: (await sh('exit 7')).status,
  };
}

// Malformed input. "invalid" cases must fail closed (non-zero, command not run) for
// every implementation; "lenient" cases are recorded because implementations differ
// and callers never produce them (they write absolute paths into a 0700 directory).
export async function malformedCases(base) {
  const bad = async text => { const file = join(base, `bad-${process.pid}-${++sequence}.json`); await writeFile(file, text); return file; };
  const marker = name => join(base, 'ws', `ran-${name.replace(/\W+/g, '-')}.txt`);
  const command = name => ['--', '/bin/sh', '-c', `echo ran > '${marker(name)}'`];
  const invalid = {
    'no policy': [], 'policy without value': null, 'no command': 'no-command', 'empty command': 'empty-command',
    'unknown option before policy': ['--network', 'all'],
    'missing policy file': ['--policy', join(base, 'absent.json')], 'directory policy': ['--policy', base],
    'invalid JSON': ['--policy', await bad('{"sandbox":')],
    'trailing data': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"/"}} x')],
    'missing sandbox': ['--policy', await bad('{}')],
    'unknown type': ['--policy', await bad('{"sandbox":{"type":"workspace_admin","cwd":"/"}}')],
    'non-boolean network': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"/","networkAccess":"yes"}}')],
    'unknown read boundary': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"/","readBoundary":"home"}}')],
    'deep nesting': ['--policy', await bad(`{"sandbox":{"type":"workspace_readwrite","cwd":"/","x":${'['.repeat(200)}${']'.repeat(200)}}}`)],
  };
  const link = join(base, `link-${process.pid}-${++sequence}.json`); await symlink(await policy(base), link);
  const lenient = {
    'relative cwd': ['--policy', await bad('{"sandbox":{"type":"workspace_readwrite","cwd":"ws"}}')],
    'oversized policy (4 MiB)': ['--policy', await bad(`{"sandbox":{"type":"workspace_readwrite","cwd":"/","x":"${'a'.repeat(1 << 22)}"}}`)],
    'symlinked policy': ['--policy', link],
  };
  const expand = async (name, args) => args === null ? ['--policy']
    : args === 'no-command' ? ['--policy', await policy(base)] : args === 'empty-command' ? ['--policy', await policy(base), '--'] : [...args, ...command(name)];
  return {
    async evaluate(binary) {
      const outcome = {};
      for (const [group, cases] of Object.entries({ invalid, lenient })) for (const [name, args] of Object.entries(cases)) {
        const result = run(binary, await expand(name, args), { cwd: base });
        outcome[name] = { group, status: result.status, signal: result.signal, ran: existsSync(marker(name)),
          stderr: result.stderr.trim().split('\n').pop().replace(/\/[^\s"']+/g, '<path>').slice(0, 120) };
      }
      const missing = run(binary, ['--policy', await policy(base), '--', join(base, 'absent-binary')]);
      outcome['missing binary'] = { group: 'invalid', status: missing.status, signal: missing.signal, ran: false, stderr: missing.stderr.trim().slice(0, 120) };
      const failClosed = Object.entries(outcome).filter(([, value]) => value.group === 'invalid').every(([, value]) => value.status !== 0 && value.signal === null && !value.ran);
      return { failClosed, outcome };
    },
  };
}

async function groupMembers(group) {
  const found = [];
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry)) continue;
    const stat = await readFile(`/proc/${entry}/stat`, 'utf8').catch(() => '');
    const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
    if (Number(fields[2]) === group && fields[0] !== 'Z') found.push({ pid: Number(entry), ppid: Number(fields[1]), sid: Number(fields[3]) });
  }
  return found;
}

// Process identity and cleanup: callers spawn the helper detached and stop a
// command by signalling its process group (SIGTERM, then SIGKILL).
export async function identityAndCleanup(binary, base) {
  const fd = run(binary, ['--policy', await policy(base), '--', '/bin/sh', '-c', 'echo through-fd3 >&3'], { stdio: ['ignore', 'pipe', 'pipe', 'pipe'] });
  const child = spawn(binary, ['--policy', await policy(base), '--', '/bin/sh', '-c', 'echo $$; sleep 60 & sleep 60 & wait'], { detached: true, stdio: ['ignore', 'pipe', 'ignore'] });
  const [line] = await once(child.stdout, 'data');
  let members = await groupMembers(child.pid);
  for (let attempt = 0; attempt < 50 && members.length < 3; attempt++) { await delay(100); members = await groupMembers(child.pid); }
  const command = members.find(member => member.pid === Number(String(line).trim()));
  const exited = once(child, 'exit');
  process.kill(-child.pid, 'SIGTERM'); // the group this function created
  const [, signal] = await exited;
  let survivors = await groupMembers(child.pid);
  for (let attempt = 0; attempt < 50 && survivors.length; attempt++) { await delay(100); survivors = await groupMembers(child.pid); }
  if (survivors.length) process.kill(-child.pid, 'SIGKILL');
  const policyFile = await policy(base);
  run(binary, ['--policy', policyFile, '--', '/bin/true']);
  return {
    fd3Inherited: fd.status === 0 && fd.output[3] === 'through-fd3\n',
    commandIsHelperProcess: command?.pid === child.pid,
    commandOwnsSessionAndGroup: command?.sid === child.pid,
    groupMembersBeforeStop: members.length,
    stopSignal: signal,
    survivorsAfterGroupStop: survivors.length,
    policyFileConsumed: !existsSync(policyFile),
  };
}
