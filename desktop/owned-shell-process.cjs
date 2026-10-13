// Keep failed native cleanup owned until the job closes or the host exits.
const activeJobs = new Set();

function spawnWindowsShell(command, args, options, signal) {
  signal?.throwIfAborted();
  const stdio = options.stdio;
  if (!Array.isArray(stdio) || stdio.length !== 3 || !['pipe', 'ignore'].includes(stdio[0]) ||
      stdio[1] !== 'pipe' || stdio[2] !== 'pipe' || options.shell)
    throw new Error('Unsupported Windows Agent shell pipe configuration.');
  const { WindowsOwnedProcess } = require('rea-agents/dist/windows/WindowsOwnedProcess.js');
  const child = new WindowsOwnedProcess(command, args, options.cwd, options.env, false,
    { protocolStdin: stdio[0] === 'pipe' });
  activeJobs.add(child);
  child.stdio = [child.stdin, child.stdout, child.stderr];
  const abort = () => {
    void child.cleanup().then(result => {
      if (!result.cleaned) child.emit('error', new Error(`OpenVision command cleanup failed: ${result.reason}`));
    });
  };
  child.once('close', () => { activeJobs.delete(child); signal?.removeEventListener('abort', abort); });
  signal?.addEventListener('abort', abort, { once: true });
  // Preserve ChildProcess event timing so the recovered executor attaches listeners first.
  queueMicrotask(() => child.emit('spawn'));
  if (signal?.aborted) abort();
  return child;
}

module.exports = { spawnWindowsShell };
