import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

// OV-1003: release a killed terminal's pty master (Linux/macOS).
//
// Observed on Linux x64 (docs/performance/idle-memory-linux.md): the recovered
// pty host kills a terminal by sending one SIGHUP (node-pty `kill()`), reports
// the exit at once and disposes its TerminalProcess, but never closes the pty
// master. Interactive bash survived that single SIGHUP for every terminal after
// the first one in a session, so each "Kill Terminal" left a shell and one
// /dev/ptmx descriptor in the pty host until app exit. The same happened with
// the recovered pty host before the OV-403 exec wrapper.
//
// After the hangup, if node-pty has not reported the child's exit within a short
// grace, the pty host now closes its own master descriptor (node-pty's read
// stream). The kernel then hangs up the terminal's session; the shell reads EOF
// and exits. No PID is signalled here: only the owned descriptor is closed, and
// only when the process is still unreported. Windows (ConPTY) is unchanged.
export const ptyKillReleaseMarker = '/* OpenVision pty kill release v1 */';
export const ptyKillReleaseGraceMs = 1000;

export const ptyKillReleaseRuntime = `${ptyKillReleaseMarker}
const openvisionReleasePty = (pty, log, grace = ${ptyKillReleaseGraceMs}) => {
  if (process.platform === "win32" || !pty || typeof pty.onExit !== "function") return;
  let exited = false;
  const listener = pty.onExit(() => { exited = true; });
  const timer = setTimeout(() => {
    listener?.dispose?.();
    const master = pty._socket;
    if (exited || !master || typeof master.destroy !== "function" || master.destroyed) return;
    log?.info?.("OpenVision: terminal process kept running after hangup; closing its pty master");
    master.destroy();
  }, grace);
  timer.unref?.();
};
`;

const killSite = 'this._logService.trace("node-pty.IPty#kill"),\n            this._ptyProcess.kill());';
export function retainPtyKillRelease(text) {
  if (text.includes(ptyKillReleaseMarker)) return text;
  const at = text.indexOf(killSite);
  if (at < 0 || text.indexOf(killSite, at + 1) >= 0) throw new Error('Pty kill owner missing or ambiguous');
  const owner = text.lastIndexOf('async _kill() {', at);
  const body = text.slice(owner, at + killSite.length + 200);
  if (owner < 0 || at - owner > 400 || !body.includes('await this._processStartupComplete') ||
      !body.includes('this._onProcessExit.fire(this._exitCode || 0), this.dispose()'))
    throw new Error('Pty kill contract changed');
  return ptyKillReleaseRuntime + text.slice(0, at) +
    'this._logService.trace("node-pty.IPty#kill"),\n            openvisionReleasePty(this._ptyProcess, this._logService),\n            this._ptyProcess.kill());' +
    text.slice(at + killSite.length);
}

// The release relies on node-pty's Unix terminal keeping its master as `_socket`.
export function assertNodePtyMaster(text) {
  if (!text.includes('_this._socket = new tty.ReadStream(term.fd);') || !text.includes('UnixTerminal.prototype.kill = function (signal)'))
    throw new Error('node-pty Unix master contract changed');
}

export async function installPtyKillRelease(root) {
  const app = join(root, 'source/app');
  assertNodePtyMaster(await readFile(join(app, 'node_modules/node-pty/lib/unixTerminal.js'), 'utf8'));
  const relative = 'out/vs/platform/terminal/node/ptyHostMain.js', path = join(app, relative);
  const before = await readFile(path, 'utf8'), after = retainPtyKillRelease(before);
  if (before === after) return;
  const backup = join(root, 'backups/pty-kill-release', relative);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
