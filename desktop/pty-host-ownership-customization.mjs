import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

// Terminal (pty host) ownership on Linux.
//
// 1. Inherited terminal masters. The recovered node-pty Linux fork path
//    (forkpty + execvp; the spawn helper is macOS-only) closes nothing before
//    exec, and the pty host's terminal masters are not close-on-exec. Every
//    shell, task process and their descendants inherited the masters of all
//    earlier terminals, so a process the user detached from one terminal kept
//    other terminals' shells from receiving their hangup: they outlived the app.
//    The pty host now starts each terminal through `openvision-pty-exec.cjs`
//    (the application's own runtime as Node), which closes inherited
//    non-close-on-exec descriptors above 2, restores default signals and the
//    shell environment, and execs the shell in place.
//
// 2. Pty host lifetime. The recovered main process never terminates the pty host
//    on quit: its quit listener only sets a flag and the utility process has no
//    parent watcher, so it could keep running (with persistent shells) until the
//    60 s reconnection grace time expired. On quit, after windows have saved
//    terminal state, the main process now joins a bounded stop of its own
//    pty-host handle: SIGTERM through the owned Electron handle, up to 3 s, then
//    SIGKILL only if the same process (PID, /proc start time, parent = this main
//    process) is still running.
export const ptyExecMarker = '/* OpenVision pty exec ownership v1 */';
export const ptyHostStopMarker = '/* OpenVision pty host quit ownership v1 */';
export const ptyExecFile = 'out/vs/platform/terminal/node/openvision-pty-exec.cjs';

export const ptyExecRuntime = `${ptyExecMarker}
const openvisionPtyExec = (spawn, file, args, options) => {
  const fs = process.getBuiltinModule("node:fs"), path = process.getBuiltinModule("node:path");
  const wrapper = path.join(import.meta.dirname, "openvision-pty-exec.cjs");
  if (process.platform !== "linux" || !Array.isArray(args) || !fs.existsSync(wrapper)) return spawn(file, args, options);
  const source = options?.env ?? process.env, env = { ...source, ELECTRON_RUN_AS_NODE: "1" };
  delete env.OPENVISION_PTY_EXEC_RUN_AS_NODE; delete env.OPENVISION_PTY_EXEC_NODE_OPTIONS;
  if (Object.hasOwn(source, "ELECTRON_RUN_AS_NODE")) env.OPENVISION_PTY_EXEC_RUN_AS_NODE = source.ELECTRON_RUN_AS_NODE;
  if (Object.hasOwn(source, "NODE_OPTIONS")) { env.OPENVISION_PTY_EXEC_NODE_OPTIONS = source.NODE_OPTIONS; delete env.NODE_OPTIONS; }
  return spawn(process.execPath, [wrapper, "--", file, ...args], { ...options, env });
};
`;

const ptySpawn = /(this\._logService\.trace\("node-pty\.IPty#spawn", e\.executable, s, t\)\);\n\s*)const r = ([\w$]+)\(e\.executable, s, t\);/g;
export function retainPtyExec(text) {
  if (text.includes(ptyExecMarker)) return text;
  const matches = [...text.matchAll(ptySpawn)];
  if (matches.length !== 1) throw new Error('Pty host spawn owner missing or ambiguous');
  const [match] = matches;
  const owner = text.lastIndexOf('async setupPtyProcess(e, t, i) {', match.index);
  if (owner < 0 || match.index - owner > 400 || !text.slice(match.index, match.index + 600).includes('(this._ptyProcess = r)'))
    throw new Error('Pty host spawn contract changed');
  return ptyExecRuntime + text.slice(0, match.index) +
    `${match[1]}const r = openvisionPtyExec(${match[2]}, e.executable, s, t);` + text.slice(match.index + match[0].length);
}

export const ptyHostStopRuntime = `${ptyHostStopMarker}
const openvisionStopPtyHost = async (owner, grace = 3000) => {
  if (!owner?.process || typeof owner.processPid !== "number") return;
  const fs = process.getBuiltinModule("node:fs"), pid = owner.processPid;
  const identity = () => {
    try {
      const stat = fs.readFileSync(\`/proc/\${pid}/stat\`, "utf8"), fields = stat.slice(stat.lastIndexOf(")") + 2).split(" ");
      return fields[0] === "Z" ? void 0 : { ppid: Number(fields[1]), start: fields[19] };
    } catch {}
  };
  const before = process.platform === "linux" ? identity() : void 0;
  let listener;
  const exited = new Promise(resolve => { listener = owner.onExit(() => resolve(true)); });
  const wait = ms => Promise.race([exited, new Promise(resolve => setTimeout(() => resolve(false), ms))]);
  try {
    owner.kill();
    if (await wait(grace)) return;
    const current = identity();
    if (before && current && current.start === before.start && current.ppid === process.pid) {
      try { process.kill(pid, "SIGKILL"); } catch {}
      await wait(1000);
    }
  } finally { listener?.dispose?.(); }
};
`;
const starterQuit = 'this._lifecycleMainService.onWillShutdown(() => this._onWillShutdown.fire()),';
export function retainPtyHostStop(text) {
  if (text.includes(ptyHostStopMarker)) return text;
  const at = text.indexOf(starterQuit);
  if (at < 0 || text.indexOf(starterQuit, at + 1) >= 0) throw new Error('Pty host starter quit owner missing or ambiguous');
  const starter = text.lastIndexOf('"electronPtyHostStarter.js"()', at);
  const body = text.slice(starter, at + 2500);
  if (starter < 0 || at - starter > 1500 || !body.includes('processTitle: "terminal pty-host"') ||
      !body.includes('this.utilityProcess = new ') || !text.includes('async waitForExit(e) {'))
    throw new Error('Pty host starter contract changed');
  const replacement = 'this._lifecycleMainService.onWillShutdown((openvisionShutdown) => { this._onWillShutdown.fire(); ' +
    'openvisionShutdown.join("openvisionPtyHost", openvisionStopPtyHost(this.utilityProcess)); }),';
  return ptyHostStopRuntime + text.slice(0, at) + replacement + text.slice(at + starterQuit.length);
}

export async function installPtyHostOwnership(root) {
  for (const [relative, transform] of [['out/vs/platform/terminal/node/ptyHostMain.js', retainPtyExec], ['out/main.js', retainPtyHostStop]]) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8'), after = transform(before);
    if (before === after) continue;
    const backup = join(root, 'backups/pty-host-ownership', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  await copyFile(join(root, 'desktop/pty-exec.cjs'), join(root, 'source/app', ptyExecFile));
}
