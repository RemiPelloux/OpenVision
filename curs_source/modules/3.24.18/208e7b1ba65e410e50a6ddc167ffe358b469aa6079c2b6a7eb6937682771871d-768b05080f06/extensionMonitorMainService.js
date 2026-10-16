import { le } from "./async.js";
import { E } from "./configurationRegistry.js";
import { Ad, Oc } from "./cssDevService.js";
import { Ye, qe } from "./environmentMainService.js";
import { ge } from "./event.js";
import { Cm, Fme, wo } from "./extHostContinuousProfilingService.js";
import { B, Hn } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { J, ei, j, ve } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { $e, Jt } from "./network.js";
import { Ne, vm } from "./nls.js";
import { oe, q } from "./platform.js";
import { Iv, sC } from "./processMainService.js";
import { Ha, Xn } from "./product.js";
import { Hg, Su } from "./protocol.js";
import { fs, li } from "./request_2.js";
import { br, fr } from "./state.js";
import { fa, lc } from "./ternarySearchTree.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { x, ye } from "./uri.js";
import { Di } from "./window.js";
import { BrowserWindow as VD } from "electron";
import { exec as Wme } from "child_process";
import { screen as Yg } from "electron";
function mze(e) {
    return typeof e != "object" || e === null ? !1 : "x" in e && "y" in e && "width" in e && "height" in e;
}
var $D, Xi;
export { $D, Xi, mze };
var __wakaru_pze_initialized = false;
export function pze() {
if (__wakaru_pze_initialized) return;
__wakaru_pze_initialized = true;
"use strict";
h(), le(), j(), $e(), oe(), hr(), Ne(), Ye(), Ad(), te(), Ha(), Hg(), br(), Di(), Fme(), ye(), Ze(), lc(), fs(), $D = "issue.extensionMonitorWindowState", Xi = class extends J {
    constructor(e, t, n, r, s, i, a){
        super(), this.userEnv = e, this._environmentMainService = t, this._logService = n, this.protocolMainService = r, this._stateService = s, this._cssDevelopmentService = i, this._requestService = a, this._monitorWindowByWorkbenchId = new Map, this._workbenchIdByMonitorWindowId = new Map, this._monitorWindowDisposables = new Map, this._workbenchReadyPromises = new Map, this._workbenchReadyResolvers = new Map, this._openExtensionMonitorLocks = new Map, this._pathTreeByExtHost = new Map, this._profilersByWorkbench = new Map, this._extensionDataByWorkbench = new Map, this._extensionProcessesByWorkbench = new Map, this._refreshIntervalByWorkbench = this._register(new ei), this._activeRefreshPromiseByWorkbench = new Map, this._pendingProcessSpawnTimeouts = this._register(new ei), this._registerWorkbenchHandler = (o, l)=>{
            const d = o.sender.id;
            this._registerWorkbench(d, l);
        }, this._unregisterWorkbenchHandler = (o)=>{
            const l = o.sender.id;
            this._unregisterWorkbench(l);
        }, this._closeExtensionMonitorHandler = (o)=>{
            const l = o.sender.id, d = this._workbenchIdByMonitorWindowId.get(l);
            if (d) try {
                this._closeExtensionMonitorWindow(d);
            } catch (u) {
                this._logService.error("[ExtensionMonitor] Error closing specific explorer:", u);
            }
            else this._logService.warn(`[ExtensionMonitor] Could not find parent for monitor window ${l}`);
        }, this._extensionProcessSpawnedHandler = (o, l)=>{
            const d = o.sender.id;
            this._handleProcessSpawned(l, d);
        }, this._registerListeners();
    }
    dispose() {
        super.dispose();
        const e = Array.from(this._extensionDataByWorkbench.keys());
        for (const t of e)this._unregisterWorkbenchSync(t);
        this._monitorWindowDisposables.forEach((t)=>t.dispose()), this._monitorWindowDisposables.clear();
    }
    async openExtensionMonitor(e) {
        const t = VD.getFocusedWindow();
        if (!t) {
            this._logService.warn("[ExtensionMonitor] No focused window found to use as parent");
            return;
        }
        const n = t.id, r = this._openExtensionMonitorLocks.get(n);
        if (r) {
            this._logService.info(`[ExtensionMonitor] Another openExtensionMonitor call is already in progress for workbench ${n}`), await r;
            const a = this._monitorWindowByWorkbenchId.get(n);
            if (a && !a.isDestroyed()) {
                this._logService.info(`[ExtensionMonitor] Extension monitor already exists for parent window ${n}, focusing it`), this._focusWindow(a);
                return;
            }
        }
        let s;
        const i = new Promise((a)=>{
            s = a;
        });
        this._openExtensionMonitorLocks.set(n, i);
        try {
            await this._doOpenExtensionMonitor(t, e);
        } finally{
            this._openExtensionMonitorLocks.delete(n), s();
        }
    }
    async _doOpenExtensionMonitor(e, t) {
        const n = e.id;
        await this._ensureWorkbenchReady(n);
        const r = this._monitorWindowByWorkbenchId.get(n);
        if (r && !r.isDestroyed()) {
            this._logService.info(`[ExtensionMonitor] Extension monitor already exists for parent window ${n}, focusing it`), this._focusWindow(r);
            return;
        }
        const s = this._profilersByWorkbench.get(n);
        await s?.localProfiler?.start(), await s?.remoteProfiler?.start(), await this._startRefreshIntervals(n);
        const i = new ve, a = i.add(this.protocolMainService.createIPCObjectUrl()), o = this._stateService.getItem(`${$D}.${n}`, void 0), l = mze(o) ? o : this._getWindowPosition(e, 800, 500);
        let d;
        try {
            d = this._createBrowserWindow(l, a, {
                backgroundColor: t.styles.backgroundColor,
                title: E(2016, null),
                zoomLevel: t.zoomLevel,
                alwaysOnTop: !0
            }, "extension-monitor"), this._monitorWindowDisposables.set(d.id, i), d.on("close", ()=>{
                this._cleanUpExtensionMonitor(n).catch((m)=>{
                    this._logService.error("[ExtensionMonitor] Error during monitor window cleanup:", m);
                });
            });
            const u = ()=>{
                if (d.isDestroyed()) return;
                const m = d.getSize(), f = d.getPosition();
                if (!m || !f) return;
                const v = {
                    width: m[0],
                    height: m[1],
                    x: f[0],
                    y: f[1]
                };
                this._stateService.setItem(`${$D}.${n}`, v);
            };
            i.add(ge(()=>{
                d.isDestroyed() || (d.off("moved", u), d.off("resized", u));
            })), d.on("moved", u), d.on("resized", u), a.update({
                appRoot: this._environmentMainService.appRoot,
                windowId: d.id,
                userEnv: this.userEnv,
                data: t,
                product: Xn,
                nls: {
                    messages: Iv(),
                    language: vm()
                },
                cssModules: this._cssDevelopmentService.isEnabled ? await this._cssDevelopmentService.getCssModules() : void 0
            }), d.loadURL(Jt.asBrowserUri(`vs/code/electron-sandbox/extensionMonitor/extensionMonitor${this._environmentMainService.isBuilt ? "" : "-dev"}.html`).toString(!0)), this._monitorWindowByWorkbenchId.set(n, d), this._workbenchIdByMonitorWindowId.set(d.webContents.id, n), this._focusWindow(d);
        } catch (u) {
            throw i.dispose(), u;
        }
    }
    _registerListeners() {
        const e = async (t)=>{
            const n = t.sender.id, r = this._workbenchIdByMonitorWindowId.get(n);
            if (!r) {
                this._logService.warn(`[ExtensionMonitor] No parent window ID found for monitor window ${n}`), this._safeSend(t, "vscode:listAllExtensionsResponse", {
                    hosts: []
                });
                return;
            }
            const s = this._getParentWindow(r);
            if (s && !s.isDestroyed()) if (this._extensionDataByWorkbench.get(r)) {
                const a = await this._getPreparedExtensionMonitorData(r);
                this._safeSend(t, "vscode:listAllExtensionsResponse", a);
            } else this._safeSend(t, "vscode:listAllExtensionsResponse", {
                hosts: []
            });
            else this._logService.warn("[ExtensionMonitor] No parent window available to request extension data from"), this._safeSend(t, "vscode:listAllExtensionsResponse", {
                hosts: []
            });
        };
        this._register(ge(()=>{
            Te.removeListener("vscode:registerWorkbenchExtensionHosts", this._registerWorkbenchHandler), Te.removeListener("vscode:unregisterWorkbenchExtensionHosts", this._unregisterWorkbenchHandler), Te.removeListener("vscode:listAllExtensions", e), Te.removeListener("vscode:closeExtensionMonitor", this._closeExtensionMonitorHandler), Te.removeListener("vscode:extensionProcessSpawned", this._extensionProcessSpawnedHandler);
        })), Te.on("vscode:registerWorkbenchExtensionHosts", this._registerWorkbenchHandler), Te.on("vscode:unregisterWorkbenchExtensionHosts", this._unregisterWorkbenchHandler), Te.on("vscode:listAllExtensions", e), Te.on("vscode:closeExtensionMonitor", this._closeExtensionMonitorHandler), Te.on("vscode:extensionProcessSpawned", this._extensionProcessSpawnedHandler);
    }
    _getWindowPosition(e, t, n) {
        let r;
        const s = Yg.getAllDisplays();
        if (s.length === 1) r = s[0];
        else {
            if (q) {
                const o = Yg.getCursorScreenPoint();
                r = Yg.getDisplayNearestPoint(o);
            }
            !r && e && (r = Yg.getDisplayMatching(e.getBounds())), r || (r = Yg.getPrimaryDisplay() || s[0]);
        }
        const i = r.bounds, a = {
            width: t,
            height: n,
            x: i.x + i.width / 2 - t / 2,
            y: i.y + i.height / 2 - n / 2
        };
        return i.width > 0 && i.height > 0 && (a.x < i.x && (a.x = i.x), a.y < i.y && (a.y = i.y), a.x > i.x + i.width && (a.x = i.x), a.y > i.y + i.height && (a.y = i.y), a.width > i.width && (a.width = i.width), a.height > i.height && (a.height = i.height)), a;
    }
    _focusWindow(e) {
        e.isMinimized() && e.restore(), e.focus();
    }
    _createBrowserWindow(e, t, n, r) {
        const s = {
            fullscreen: !1,
            skipTaskbar: !1,
            resizable: !0,
            width: e.width,
            height: e.height,
            minWidth: 300,
            minHeight: 200,
            x: e.x,
            y: e.y,
            title: n.title,
            backgroundColor: n.backgroundColor || Xi.DEFAULT_BACKGROUND_COLOR,
            webPreferences: {
                preload: Jt.asFileUri("vs/base/parts/sandbox/electron-sandbox/preload.js").fsPath,
                additionalArguments: [
                    `--vscode-window-config=${t.resource.toString()}`
                ],
                v8CacheOptions: this._environmentMainService.useCodeCache ? "bypassHeatCheck" : "none",
                enableWebSQL: !1,
                spellcheck: !1,
                zoomFactor: sC(n.zoomLevel),
                sandbox: !0
            },
            alwaysOnTop: n.alwaysOnTop,
            experimentalDarkMode: !0
        }, i = new VD(s);
        return i.setMenuBarVisibility(!1), i;
    }
    _safeSend(e, t, ...n) {
        e.sender.isDestroyed() || e.sender.send(t, ...n);
    }
    _getParentWindow(e) {
        return VD.getAllWindows().find((n)=>n.id === e) || null;
    }
    async _ensureWorkbenchReady(e) {
        let t = this._workbenchReadyPromises.get(e);
        if (t) {
            await t;
            return;
        }
        t = new Promise((n)=>{
            this._workbenchReadyResolvers.set(e, n);
        }), this._workbenchReadyPromises.set(e, t), await t;
    }
    async _cleanUpExtensionMonitor(e) {
        const t = this._monitorWindowByWorkbenchId.get(e);
        if (!t) return;
        const n = t.webContents.id, r = t.id;
        this._monitorWindowByWorkbenchId.delete(e), this._workbenchIdByMonitorWindowId.delete(n), await this._stopRefreshIntervals(e);
        const s = this._profilersByWorkbench.get(e);
        s?.localProfiler?.stop(), s?.remoteProfiler?.stop();
        const i = this._monitorWindowDisposables.get(r);
        i && (i.dispose(), this._monitorWindowDisposables.delete(r));
    }
    _cleanUpExtensionMonitorSync(e) {
        const t = this._monitorWindowByWorkbenchId.get(e);
        if (!t) return;
        const n = t.webContents.id, r = t.id;
        this._monitorWindowByWorkbenchId.delete(e), this._workbenchIdByMonitorWindowId.delete(n), this._stopRefreshIntervalsSync(e);
        const s = this._profilersByWorkbench.get(e);
        s && (s.localProfiler?.stop().catch((a)=>{
            this._logService.error("[ExtensionMonitor] Error stopping local profiler during sync disposal:", a);
        }), s.remoteProfiler?.stop().catch((a)=>{
            this._logService.error("[ExtensionMonitor] Error stopping remote profiler during sync disposal:", a);
        }));
        const i = this._monitorWindowDisposables.get(r);
        i && (i.dispose(), this._monitorWindowDisposables.delete(r));
    }
    async _registerWorkbench(e, t) {
        if (!this._workbenchReadyPromises.has(e)) {
            const r = new Promise((s)=>{
                this._workbenchReadyResolvers.set(e, s);
            });
            this._workbenchReadyPromises.set(e, r);
        }
        await this._doRegisterWorkbench(e, t);
        const n = this._workbenchReadyResolvers.get(e);
        n && (n(), this._workbenchReadyResolvers.delete(e));
    }
    async _doRegisterWorkbench(e, t) {
        this._resetWindowData(e, t.localHosts, t.remoteHosts), this._logService.info(`[ExtensionMonitor] Workbench ${e} reset window data: ${t.localHosts.length} local hosts and ${t.remoteHosts.length} remote hosts`);
        const n = t.localHosts.map((i)=>{
            if (i.extHostPid) return {
                extensionHostId: i.extHostPid.toString(),
                webSocketPort: i.inspectInfo.port
            };
        }).filter(Cm), r = t.remoteHosts.map((i)=>{
            if (i.inspectInfo) return {
                extensionHostId: `remote:${i.inspectInfo.port}`,
                webSocketPort: i.inspectInfo.port
            };
        }).filter(Cm);
        this._logService.info(`[ExtensionMonitor] Workbench ${e} found ${n.length} local targets and ${r.length} remote targets`);
        const s = {};
        n.length > 0 && (s.localProfiler = new wo(this._logService, this._requestService, n, (i, a)=>this._getExtensionIdFromPath(i, a))), r.length > 0 && (s.remoteProfiler = new wo(this._logService, this._requestService, r, (i, a)=>this._getExtensionIdFromPath(i, a))), this._profilersByWorkbench.set(e, s);
    }
    async _unregisterWorkbench(e) {
        this._closeExtensionMonitorWindow(e), await this._cleanUpExtensionMonitor(e), this._unregisterWorkbenchCommon(e);
    }
    _unregisterWorkbenchSync(e) {
        this._closeExtensionMonitorWindow(e), this._cleanUpExtensionMonitorSync(e), this._unregisterWorkbenchCommon(e);
    }
    _unregisterWorkbenchCommon(e) {
        this._profilersByWorkbench.delete(e);
        const t = this._extensionDataByWorkbench.get(e);
        t && (t.localHosts.forEach((n, r)=>{
            this._pathTreeByExtHost.delete(r);
        }), t.remoteHosts.forEach((n, r)=>{
            this._pathTreeByExtHost.delete(r);
        })), this._extensionDataByWorkbench.delete(e), this._extensionProcessesByWorkbench.delete(e), this._activeRefreshPromiseByWorkbench.delete(e), this._pendingProcessSpawnTimeouts.deleteAndDispose(e);
    }
    async _startRefreshIntervals(e) {
        await this._stopRefreshIntervals(e);
        const t = ()=>{
            if (!this._extensionDataByWorkbench.has(e)) return;
            const n = Hn(async ()=>{
                if (!this._refreshIntervalByWorkbench.has(e)) return;
                const r = (async ()=>{
                    try {
                        await Promise.all([
                            this._refreshAllExtensionMetrics(e),
                            this._refreshProcessData(e)
                        ]);
                    } catch (s) {
                        this._logService.error(`[ExtensionMonitor] Error during refresh for workbench ${e}:`, s);
                    }
                })();
                this._activeRefreshPromiseByWorkbench.set(e, r);
                try {
                    await r;
                } finally{
                    this._activeRefreshPromiseByWorkbench.delete(e), this._refreshIntervalByWorkbench.has(e) && t();
                }
            }, Xi.REFRESH_INTERVAL_MS);
            this._refreshIntervalByWorkbench.set(e, n);
        };
        t();
    }
    async _stopRefreshIntervals(e) {
        this._refreshIntervalByWorkbench.deleteAndDispose(e);
        const t = this._activeRefreshPromiseByWorkbench.get(e);
        if (t) try {
            await t;
        } catch (n) {
            this._logService.error(`[ExtensionMonitor] Active refresh completed with error during cleanup: ${n}`);
        }
    }
    _stopRefreshIntervalsSync(e) {
        this._refreshIntervalByWorkbench.deleteAndDispose(e);
    }
    _closeExtensionMonitorWindow(e) {
        const t = this._monitorWindowByWorkbenchId.get(e);
        t && !t.isDestroyed() && t.close();
    }
    async _getPreparedExtensionMonitorData(e) {
        const t = this._extensionDataByWorkbench.get(e);
        if (!t) return {
            hosts: []
        };
        const n = this._getCleanExtensionData(e, t.localHosts), r = this._getCleanExtensionData(e, t.remoteHosts);
        return {
            hosts: [
                ...n,
                ...r
            ]
        };
    }
    _getCleanExtensionData(e, t) {
        const n = (r)=>!!(r.metrics?.pctCPU && r.metrics.pctCPU > 0 || r.metrics?.pctExtHost && r.metrics.pctExtHost > 0 || r.metrics?.memKB && r.metrics.memKB > 0 || r.processes && r.processes.length > 0);
        return Array.from(t.entries()).map(([r, { extensions: s, hostSysMem: i, isRemote: a }])=>{
            const o = Array.from(s.entries()).map(([l, d])=>{
                const u = this._extensionProcessesByWorkbench.get(e)?.get(l);
                return {
                    ...d,
                    processes: u
                };
            });
            return {
                id: r,
                extensions: Array.from(o).filter(n),
                hostSysMem: i,
                isRemote: a
            };
        });
    }
    _resetWindowData(e, t, n) {
        const r = this._getMapFromHosts(t), s = this._getMapFromHosts(n);
        this._extensionDataByWorkbench.set(e, {
            localHosts: r,
            remoteHosts: s
        });
    }
    _getMapFromHosts(e) {
        const t = new Map;
        for (const { extHostPid: n, extensions: r, inspectInfo: s, isRemote: i } of e){
            let a;
            if (i ? a = s ? `remote:${s.port}` : void 0 : a = n?.toString(), !a) continue;
            const o = fa.forPaths(!1), l = new Map;
            for (const d of r){
                const u = x.from(d.extensionLocation);
                o.set(u.fsPath, d.id), l.set(d.id, {
                    staticInfo: d
                });
            }
            l.set("<ext-host-runtime>", {
                staticInfo: {
                    id: "<ext-host-runtime>",
                    name: "<ext-host-runtime>",
                    extensionLocation: x.parse(""),
                    isBuiltin: !0
                }
            }), t.set(a, {
                isRemote: i,
                inspectUrl: `http://localhost:${s.port}`,
                extensions: l
            }), this._pathTreeByExtHost.set(a, o);
        }
        return t;
    }
    async _refreshAllExtensionMetrics(e) {
        const t = this._extensionDataByWorkbench.get(e);
        if (!t) {
            this._logService.error(`[ExtensionMonitor] No extension data found for workbench ${e}`);
            return;
        }
        const n = this._profilersByWorkbench.get(e);
        if (!n) return;
        const r = [];
        n.localProfiler && r.push(this._refreshExtensionMetrics(n.localProfiler, t.localHosts)), n.remoteProfiler && r.push(this._refreshExtensionMetrics(n.remoteProfiler, t.remoteHosts)), await Promise.all(r);
    }
    async _refreshExtensionMetrics(e, t) {
        const n = await e.captureMetricsForAllHosts();
        for (const [r, s] of t.entries()){
            const { extensions: i, inspectUrl: a } = s, o = n[r];
            if (Cm(o)) for (const [l, d] of i.entries())if (o && o[l]) {
                const u = o[l];
                i.set(l, {
                    staticInfo: d.staticInfo,
                    metrics: u
                });
            } else i.set(l, {
                staticInfo: d.staticInfo
            });
        }
    }
    async _refreshProcessData(e) {
        const t = this._extensionProcessesByWorkbench.get(e), n = this._extensionDataByWorkbench.get(e);
        if (!t || !n || process.platform !== "darwin" && process.platform !== "linux") return;
        const r = Array.from(n.localHosts.keys()).map((a)=>Number(a)).filter((a)=>!isNaN(a));
        r.length !== n.localHosts.size && this._logService.error("[ExtensionMonitor] Some local extension host IDs are not numbers and could not be used as PIDs");
        const s = this._getUnixProcessesInfo(r).then((a)=>{
            a.forEach(({ pid: o, memRssKB: l })=>{
                const d = o.toString(), u = n.localHosts.get(d);
                u ? n.localHosts.set(d, {
                    ...u,
                    hostSysMem: l
                }) : this._logService.error(`[ExtensionMonitor] No extension host found for PID ${d} retrieved from 'ps'`);
            });
        }), i = Array.from(t.entries()).map(async ([a, o])=>{
            const l = await this._getUnixProcessesInfo(o.map((d)=>d.pid));
            t.set(a, l);
        });
        await Promise.all([
            ...i,
            s
        ]);
    }
    async _handleProcessSpawned(e, t) {
        if (process.platform !== "darwin" && process.platform !== "linux") return;
        let n = this._pendingProcessSpawnTimeouts.get(t);
        n || (n = new ve, this._pendingProcessSpawnTimeouts.set(t, n)), Hn(()=>{
            this._extensionDataByWorkbench.has(t) && this._getUnixProcessesInfo([
                e.spawnedPid
            ]).then((r)=>{
                if (this._extensionDataByWorkbench.has(t) && r.length === 1) {
                    const s = this._findExtensionIdFromStackTrace(e.stackTrace, e.extHostPid.toString());
                    if (!s) {
                        this._logService.warn(`[ExtensionMonitor] No extension ID found for process ${e.spawnedPid} in stack trace: ${e.stackTrace}`);
                        return;
                    }
                    let i = this._extensionProcessesByWorkbench.get(t);
                    if (i || (i = new Map, this._extensionProcessesByWorkbench.set(t, i)), !i.has(s)) {
                        i.set(s, r);
                        return;
                    }
                    i.get(s).push(...r);
                }
            }).catch((r)=>{
                this._logService.error(`[ExtensionMonitor] Error getting processes info for PID ${e.spawnedPid}: ${r}`);
            });
        }, Xi.PROCESS_SPAWN_SETTLING_TIME_MS, n);
    }
    async _getUnixProcessesInfo(e) {
        return new Promise((t, n)=>{
            Wme("which ps", (r, s, i)=>{
                if (r || i) return n(r || new Error(i.toString()));
                const a = s.trim();
                Wme(`${a} -p ${e.join(",")} -o pid,%cpu,rss,command`, (o, l, d)=>{
                    if (o) return t([]);
                    const u = l.split(`
`).map((m)=>m.trim()).filter((m)=>m.length > 0);
                    if (u.length > 1) {
                        const m = u[0].split(/\s+/), f = [];
                        for (const v of u.slice(1)){
                            const T = v.split(/\s+/), S = T.slice(0, m.length - 1);
                            if (S.length !== m.length - 1) return n(new Error(`Invalid ps output line: "${v}"`));
                            const k = T.slice(m.length - 1).join(" "), y = Number(S[1]), b = Number(S[2]), I = Number(T[0]);
                            isNaN(y) || isNaN(b) || isNaN(I) || f.push({
                                pid: I,
                                command: k,
                                pctCPU: y,
                                memRssKB: b
                            });
                        }
                        t(f);
                    } else t([]);
                });
            });
        });
    }
    _getExtensionIdFromPath(e, t) {
        const n = e.startsWith("file://") ? x.parse(e).fsPath : x.file(e).fsPath, r = this._pathTreeByExtHost.get(t);
        if (r) return r.findSubstr(n);
    }
    _findExtensionIdFromStackTrace(e, t) {
        const n = e.split(`
`);
        for (const r of n){
            let s = r.trim();
            if (s.startsWith("at")) {
                s = s.slice(s.indexOf("(") + 1, s.lastIndexOf(":"));
                const i = s.slice(0, s.lastIndexOf(":")), a = this._getExtensionIdFromPath(i, t);
                if (a) return a;
            }
        }
    }
}, Xi.DEFAULT_BACKGROUND_COLOR = "#1E1E1E", Xi.REFRESH_INTERVAL_MS = 1e3, Xi.PROCESS_SPAWN_SETTLING_TIME_MS = 3e3, Xi = B([
    w(1, qe),
    w(2, Z),
    w(3, Su),
    w(4, fr),
    w(5, Oc),
    w(6, li)
], Xi);

}
