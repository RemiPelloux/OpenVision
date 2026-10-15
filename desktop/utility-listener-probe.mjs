// Serialized into an owned Electron main process by the native verifier.
// Every process/window below is created by this probe, never selected by PID.
export async function probeUtilityListeners({ app, BrowserWindow }, options) {
  const { Base, Window } = globalThis.__openvisionUtilityOwners;
  const nativeWindow = options.windowBound ? new BrowserWindow({ show: false }) : undefined;
  if (nativeWindow) await nativeWindow.loadURL('about:blank');
  const reloadListeners = new Set(), ownedListeners = [], ownedWindowListeners = [], samples = [];
  const lifecycle = { onWillLoadWindow: listener => {
    reloadListeners.add(listener); return { dispose: () => reloadListeners.delete(listener) };
  } };
  const logger = { trace() {}, info() {}, warn() {}, error() {} };
  const owner = nativeWindow ? new Window(logger, { getWindowById: () =>
    ({ win: nativeWindow, webContents: nativeWindow.webContents }) }, lifecycle) : new Base(logger, lifecycle);
  const config = { type: 'openvision-listener-probe', processTitle: 'OpenVision listener probe',
    entryPoint: 'openvision-utility-probe', ...(nativeWindow ? { responseWindowId: nativeWindow.id,
      responseChannel: 'openvision:utility-probe', responseNonce: 'probe', windowLifecycleBound: true } : {}) };
  const countOwned = () => ownedListeners.filter(listener => app.listeners('child-process-gone').includes(listener)).length;
  const once = event => new Promise((resolve, reject) => {
    const timer = setTimeout(() => { listener.dispose(); reject(Error('Utility event timeout')); }, 10000);
    const listener = event(value => { clearTimeout(timer); listener.dispose(); resolve(value); });
  });
  async function start() {
    const ready = once(owner.onMessage), before = new Set(app.listeners('child-process-gone'));
    const windowBefore = new Set(nativeWindow?.listeners('closed') ?? []);
    if (!owner.start(config)) throw Error('Utility refused start');
    ownedListeners.push(...app.listeners('child-process-gone').filter(listener => !before.has(listener)));
    ownedWindowListeners.push(...(nativeWindow?.listeners('closed') ?? []).filter(listener => !windowBefore.has(listener)));
    await ready;
    return owner.process;
  }
  const started = performance.now(), cpu = process.cpuUsage();
  let kill, naturalCycles;
  try {
    for (let index = 0; index < 16; index++) {
      const child = await start(), stdout = child.stdout, stderr = child.stderr;
      const active = countOwned(), exit = once(owner.onExit);
      owner.postMessage('exit'); const ended = await exit;
      samples.push({ index, active, afterExit: countOwned(),
        childListeners: child.eventNames().map(name => [name, child.listenerCount(name)]),
        stdoutListeners: stdout.listenerCount('data'), stderrListeners: stderr.listenerCount('data'),
        reloadListeners: reloadListeners.size, windowClosedListeners: ownedWindowListeners.filter(listener =>
          nativeWindow?.listeners('closed').includes(listener)).length,
        code: ended.code, pid: ended.pid, ownerCleared: !owner.process,
        mainMemory: process.memoryUsage() });
    }
    naturalCycles = { elapsedMs: performance.now() - started, mainCpu: process.cpuUsage(cpu) };
    if (!options.control) {
      const child = await start(), nativeKill = child.kill;
      child.kill = () => false; owner.kill();
      kill = { failedKillRetainsOwner: owner.process === child, failedKillRetainsListeners: countOwned() === 1 };
      child.kill = nativeKill;
      const exit = once(owner.onExit); owner.kill();
      kill.requestRetainsOwner = owner.process === child;
      kill.restartRefusedBeforeExit = !owner.validateCanStart();
      kill.exit = await exit;
      kill.ownerClearedAfterExit = !owner.process;
      kill.listenersAfterExit = countOwned();
      if (nativeWindow) {
        await start(); const exit = once(owner.onExit); nativeWindow.destroy();
        kill.windowCloseExit = await exit;
        kill.windowCloseReleasesOwner = !owner.process && countOwned() === 0 && reloadListeners.size === 0;
      }
    }
  } finally { owner.kill(); owner.dispose(); if (nativeWindow && !nativeWindow.isDestroyed()) nativeWindow.destroy(); }
  return { windowBound: options.windowBound, cycles: samples, naturalCycles, kill, afterDispose: countOwned(),
    elapsedMs: performance.now() - started, mainCpu: process.cpuUsage(cpu) };
}
