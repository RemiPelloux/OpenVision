import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

// The recovered Agent command spawner starts POSIX commands detached (their own
// session and process group) and terminates that group only when the tool call's
// abort signal fires (Stop). When the extension host exits during a graceful
// window close, nothing aborts the call, so a running command and its children
// survive the application. This owner records each live spawned command and, on
// extension-host exit, signals exactly those owned child handles. An abrupt exit
// runs no handler; on Linux a small per-installation journal lets the next
// extension host end commands whose owner is gone, after matching PID, start
// time and process group. Windows x64 commands already use the job-object owner
// and return before this point.
export const agentCommandExitMarker = '/* OpenVision Agent command exit ownership v1 */';
export const agentCommandExitTargets = ['extensions/cursor-agent-exec/dist/main.js', 'extensions/cursor-agent-host/dist/main.js'];
const owner = 'function ot(e, t = [], r = {}, n, s) {';
const spawn = /^const o = Xe\(e, t, \{ \.\.\.r, env: ([\w$]+)\(r\.env \?\? process\.env\) \}, n\);$/;

export const agentCommandExitRuntime = `${agentCommandExitMarker}
const openvisionAgentCommands = (() => {
  const fs = require("node:fs"), path = require("node:path");
  const live = new Map();
  // Linux /proc identity: a PID is only trusted together with its start time and
  // process group, so a reused PID is never signalled.
  const identity = pid => {
    try {
      const stat = fs.readFileSync(\`/proc/\${pid}/stat\`, "utf8");
      const fields = stat.slice(stat.lastIndexOf(")") + 2).split(" ");
      return { pid, pgid: Number(fields[2]), start: fields[19] };
    } catch {}
  };
  const self = process.platform === "linux" ? identity(process.pid) : void 0;
  // Journal of running detached commands, keyed by this installation, so a later
  // extension host can end commands orphaned when this one was killed abruptly.
  const journal = (() => {
    if (!self || "function" != typeof process.getuid) return;
    try {
      const key = require("node:crypto").createHash("sha256").update(__dirname).digest("hex").slice(0, 16);
      const directory = path.join(require("node:os").tmpdir(), \`openvision-agent-commands-\${process.getuid()}-\${key}\`);
      try { fs.mkdirSync(directory, { mode: 0o700 }); } catch (error) { if (error?.code !== "EEXIST") throw error; }
      const stat = fs.lstatSync(directory);
      if (!stat.isDirectory() || stat.uid !== process.getuid() || (stat.mode & 0o077) !== 0) return;
      return directory;
    } catch {}
  })();
  const signal = (child, detached, name) => {
    try {
      if (detached) process.kill(-child.pid, name);
      else child.kill(name);
    } catch {}
  };
  const forget = record => { try { fs.unlinkSync(record); } catch {} };
  const release = () => {
    // Synchronous exit: no grace period is possible. TERM first so a command
    // that exits on TERM does so; KILL covers any that ignore it.
    for (const [child, entry] of live) signal(child, entry.detached, "SIGTERM");
    for (const [child, entry] of live) { signal(child, entry.detached, "SIGKILL"); entry.record && forget(entry.record); }
    live.clear();
  };
  const sameProcess = (expected, current) => current && current.start === expected.start && current.pgid === expected.pgid;
  const reap = () => {
    if (!journal) return;
    let names = [];
    try { names = fs.readdirSync(journal).filter(name => name.endsWith(".json")); } catch { return; }
    for (const name of names) {
      const record = path.join(journal, name);
      let entry;
      try { entry = JSON.parse(fs.readFileSync(record, "utf8")); } catch { forget(record); continue; }
      if (sameProcess(entry.owner, identity(entry.owner?.pid))) continue; // owner still running
      const child = identity(entry.child?.pid);
      if (sameProcess(entry.child, child) && child.pgid === entry.child.pid) {
        try { process.kill(-entry.child.pid, "SIGTERM"); } catch {}
        setTimeout(() => {
          if (sameProcess(entry.child, identity(entry.child.pid))) try { process.kill(-entry.child.pid, "SIGKILL"); } catch {}
          forget(record);
        }, 1000).unref?.();
      } else forget(record);
    }
  };
  let installed = false;
  return {
    track(child, detached) {
      if (!child || !Number.isInteger(child.pid) || null !== child.exitCode || null !== child.signalCode) return child;
      const entry = { detached: detached === true };
      const own = journal && entry.detached ? identity(child.pid) : void 0;
      if (own && own.pgid === child.pid) {
        entry.record = path.join(journal, \`\${self.pid}-\${self.start}-\${child.pid}.json\`);
        try { fs.writeFileSync(entry.record, JSON.stringify({ owner: self, child: own }), { flag: "wx", mode: 0o600 }); }
        catch { entry.record = void 0; }
      }
      live.set(child, entry);
      child.once("exit", () => { live.delete(child); entry.record && forget(entry.record); });
      if (!installed) {
        installed = true;
        process.once("exit", release);
      }
      return child;
    },
    get size() { return live.size; },
    release,
    reap,
  };
})();
setImmediate(() => openvisionAgentCommands.reap());
`;

function ownerFunction(text) {
  const start = text.indexOf(owner);
  if (start < 0 || text.indexOf(owner, start + owner.length) >= 0)
    throw new Error('Agent command spawn owner missing or ambiguous');
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'FunctionExpression' || node.params.length !== 5) throw new Error('Unexpected Agent command spawn contract');
  const statements = node.body.body;
  const index = statements.findIndex(statement => spawn.test(text.slice(statement.start, statement.end)));
  const returned = statements.at(-1);
  if (index < 0 || returned?.type !== 'ReturnStatement' || text.slice(returned.start, returned.end) !== 'return o;' ||
      !text.slice(statements[index + 1]?.start, statements[index + 1]?.end).includes('process.kill(-o.pid, "SIGTERM")'))
    throw new Error('Unexpected Agent command spawn contract');
  return { returned };
}

export function retainAgentCommandExit(text) {
  if (text.includes(agentCommandExitMarker)) return text;
  const { returned } = ownerFunction(text);
  return `${agentCommandExitRuntime}${text.slice(0, returned.start)}return openvisionAgentCommands.track(o, r.detached);${text.slice(returned.end)}`;
}

export async function installAgentCommandExit(root) {
  for (const relative of agentCommandExitTargets) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8'), after = retainAgentCommandExit(before);
    if (before === after) continue;
    const backup = join(root, 'backups/agent-command-exit', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
