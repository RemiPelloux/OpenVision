// OpenVision pty exec (Linux). The pty host starts this with the application's
// own runtime (ELECTRON_RUN_AS_NODE) as the terminal's child process. node-pty's
// Linux fork path (forkpty + execvp) does not close the host's other descriptors,
// and the host's terminal masters are not close-on-exec: every shell inherited
// the masters of all earlier terminals. This closes every inherited descriptor
// above 2 that is not close-on-exec, restores default signal dispositions and the
// shell's own environment, and replaces itself with the shell (same PID, session
// and controlling terminal).
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { constants } = require('node:os');

const separator = process.argv.indexOf('--');
const [file, ...args] = separator < 0 ? [] : process.argv.slice(separator + 1);
if (!file) { process.stderr.write('openvision-pty-exec: missing executable\n'); process.exit(1); }

const env = { ...process.env };
const restore = (name, saved) => {
  if (Object.hasOwn(env, saved)) { env[name] = env[saved]; delete env[saved]; }
  else delete env[name];
};
restore('ELECTRON_RUN_AS_NODE', 'OPENVISION_PTY_EXEC_RUN_AS_NODE');
restore('NODE_OPTIONS', 'OPENVISION_PTY_EXEC_NODE_OPTIONS');

// Descriptors inherited without close-on-exec (O_CLOEXEC is octal 02000000).
for (const name of fs.readdirSync('/proc/self/fd')) {
  const fd = Number(name);
  if (!Number.isInteger(fd) || fd <= 2) continue;
  let flags;
  try { flags = parseInt(/^flags:\s+([0-7]+)/m.exec(fs.readFileSync(`/proc/self/fdinfo/${fd}`, 'utf8'))[1], 8); }
  catch { continue; }
  if ((flags & 0o2000000) === 0) try { fs.closeSync(fd); } catch {}
}

// node-pty resets every signal to its default in the child. The runtime ignores
// some (SIGPIPE, SIGXFSZ); an ignored disposition would survive exec, so install
// handlers instead: exec resets handled signals to their defaults.
const ignored = BigInt(`0x${/^SigIgn:\s+([0-9a-f]+)/m.exec(fs.readFileSync('/proc/self/status', 'utf8'))?.[1] ?? '0'}`);
for (const [name, number] of Object.entries(constants.signals))
  if (ignored & (1n << BigInt(number - 1))) try { process.on(name, () => {}); } catch {}

function resolve(command) {
  if (command.includes('/')) return command;
  for (const directory of (env.PATH ?? '/usr/local/bin:/usr/bin:/bin').split(':')) {
    const candidate = path.join(directory || '.', command);
    try { fs.accessSync(candidate, fs.constants.X_OK); if (fs.statSync(candidate).isFile()) return candidate; } catch {}
  }
  return command;
}
try { process.execve(resolve(file), [file, ...args], env); }
catch (error) { process.stderr.write(`execvp(3) failed.: ${error.message}\n`); process.exit(1); }
