import { Bl, Qn, le } from "./async.js";
import { Ye, qe } from "./environmentMainService.js";
import { bm, kt } from "./errors.js";
import { N, O, se } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { B, Wl } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { J, Ut, j, ve } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { ee, oe, q } from "./platform.js";
import { Ei, bi } from "./process.js";
import { br, fr } from "./state.js";
import { so, w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { pt } from "./windows.js";
import Os from "electron";
function gUe(e, t = "unexpected state") {
    if (!e) throw typeof t == "string" ? new bm(`Assertion Failed: ${t}`) : t;
}
function Nl(e) {
    return gUe(e != null, "Argument is `undefined` or `null`."), e;
}
function En(e, t) {
    return t ? new Promise((n, r)=>{
        const s = setTimeout(()=>{
            i.dispose(), n();
        }, e), i = t.onCancellationRequested(()=>{
            clearTimeout(s), i.dispose(), r(new kt);
        });
    }) : Wl((n)=>En(e, n));
}
var ht, ls;
export { En, Nl, gUe, ht, ls };
var __wakaru_Vt_initialized = false;
export function Vt() {
if (__wakaru_Vt_initialized) return;
__wakaru_Vt_initialized = true;
"use strict";
h(), hr(), le(), se(), j(), oe(), bi(), Ze(), ne(), te(), br(), Ye(), pt(), ht = Q("lifecycleMainService"), ls = class extends J {
    constructor(e, t, n){
        super(), this.logService = e, this.stateService = t, this.environmentMainService = n, this._onBeforeShutdown = this._register(new N), this.onBeforeShutdown = this._onBeforeShutdown.event, this._onWillShutdown = this._register(new N), this.onWillShutdown = this._onWillShutdown.event, this._onWillLoadWindow = this._register(new N), this.onWillLoadWindow = this._onWillLoadWindow.event, this._onBeforeCloseWindow = this._register(new N), this.onBeforeCloseWindow = this._onBeforeCloseWindow.event, this._quitRequested = !1, this._wasRestarted = !1, this._phase = 1, this.windowToCloseRequest = new Set, this.oneTimeListenerTokenGenerator = 0, this.windowCounter = 0, this.pendingQuitPromise = void 0, this.pendingQuitPromiseResolve = void 0, this.pendingWillShutdownPromise = void 0, this.mapWindowIdToPendingUnload = new Map, this.phaseWhen = new Map, this.relaunchHandler = void 0, this.shutdownHangWatchdogService = void 0, this._processExitWatchdog = this._register(new Ut), this.resolveRestarted(), this.when(2).then(()=>this.registerListeners());
    }
    get quitRequested() {
        return this._quitRequested;
    }
    get wasRestarted() {
        return this._wasRestarted;
    }
    get phase() {
        return this._phase;
    }
    resolveRestarted() {
        this._wasRestarted = !!this.stateService.getItem(ls.QUIT_AND_RESTART_KEY), this._wasRestarted && this.stateService.removeItem(ls.QUIT_AND_RESTART_KEY);
    }
    registerListeners() {
        const e = ()=>{
            this._quitRequested || (this.trace("Lifecycle#app.on(before-quit)"), this._quitRequested = !0, this.trace("Lifecycle#onBeforeShutdown.fire()"), this._onBeforeShutdown.fire(), q && this.windowCounter === 0 && this.fireOnWillShutdown(1));
        };
        Os.app.addListener("before-quit", e);
        const t = ()=>{
            this.trace("Lifecycle#app.on(window-all-closed)"), (this._quitRequested || !q) && Os.app.quit();
        };
        Os.app.addListener("window-all-closed", t), Os.app.once("will-quit", (n)=>{
            this.trace("Lifecycle#app.on(will-quit) - begin"), n.preventDefault(), this.fireOnWillShutdown(1).finally(()=>{
                this.trace("Lifecycle#app.on(will-quit) - after fireOnWillShutdown"), this.resolvePendingQuitPromise(!1), Os.app.removeListener("before-quit", e), Os.app.removeListener("window-all-closed", t), this.trace("Lifecycle#app.on(will-quit) - calling app.quit()"), Os.app.quit();
            });
        });
    }
    fireOnWillShutdown(e) {
        if (this.pendingWillShutdownPromise) return this.pendingWillShutdownPromise;
        const t = this.logService, n = e === 1 ? this.shutdownHangWatchdogService : void 0;
        this.trace("Lifecycle#onWillShutdown.fire()");
        const r = async ()=>{
            const s = [], i = {};
            this._onWillShutdown.fire({
                reason: e,
                join (a, o) {
                    t.trace(`Lifecycle#onWillShutdown - begin '${a}'`);
                    const l = Date.now(), d = n ? n.wrapJoiner(a, o) : o;
                    s.push(d.finally(()=>{
                        const u = Date.now() - l;
                        i[a] = Math.max(i[a] ?? 0, u), t.trace(`Lifecycle#onWillShutdown - end '${a}' (${u}ms)`);
                    }));
                }
            });
            try {
                await Qn.settled(s);
            } catch (a) {
                this.logService.error(a);
            }
            try {
                this.stateService.setItem(ls.LAST_SHUTDOWN_JOINER_TIMINGS_KEY, i);
            } catch (a) {
                this.logService.error("Lifecycle#onWillShutdown - failed to persist joiner timings", a);
            }
            try {
                await this.stateService.close();
            } catch (a) {
                this.logService.error(a);
            }
        };
        return this.pendingWillShutdownPromise = n ? n.wrapFireOnWillShutdown(r) : r(), this.pendingWillShutdownPromise;
    }
    consumeLastShutdownJoinerTimings() {
        try {
            const e = this.stateService.getItem(ls.LAST_SHUTDOWN_JOINER_TIMINGS_KEY);
            return e && this.stateService.removeItem(ls.LAST_SHUTDOWN_JOINER_TIMINGS_KEY), e;
        } catch (e) {
            this.logService.error("Lifecycle#consumeLastShutdownJoinerTimings - failed to read joiner timings", e);
            return;
        }
    }
    set phase(e) {
        if (e < this.phase) throw new Error("Lifecycle cannot go backwards");
        if (this._phase === e) return;
        this.trace(`lifecycle (main): phase changed (value: ${e})`), this._phase = e;
        const t = this.phaseWhen.get(this._phase);
        t && (t.open(), this.phaseWhen.delete(this._phase));
    }
    async when(e) {
        if (e <= this._phase) return;
        let t = this.phaseWhen.get(e);
        t || (t = new Bl, this.phaseWhen.set(e, t)), await t.wait();
    }
    registerWindow(e) {
        const t = new ve;
        this.windowCounter++, t.add(e.onWillLoad((r)=>this._onWillLoadWindow.fire({
                window: e,
                workspace: r.workspace,
                reason: r.reason
            })));
        let n = e.win && t.add(O.fromNodeEventEmitter(e.win, "close")((r)=>{
            const s = e.id;
            if (this.windowToCloseRequest.has(s)) {
                this.windowToCloseRequest.delete(s);
                return;
            }
            this.trace(`Lifecycle#window.on('close') - window ID ${e.id}`), r.preventDefault(), this.unload(e, 1).then((i)=>{
                if (i) {
                    this.windowToCloseRequest.delete(s);
                    return;
                }
                this.windowToCloseRequest.add(s), this.trace(`Lifecycle#onBeforeCloseWindow.fire() - window ID ${s}`), this._onBeforeCloseWindow.fire(e), e.close();
            });
        }));
        t.add(e.onDidClose(()=>{
            this.trace(`Lifecycle#window.on('closed') - window ID ${e.id}`), this.windowCounter--, t.dispose(), this.windowCounter === 0 && (!q || this._quitRequested) && this.fireOnWillShutdown(1);
        }));
    }
    registerAuxWindow(e) {
        const t = Nl(e.win), n = new ve;
        n.add(O.fromNodeEventEmitter(t, "close")((r)=>{
            this.trace(`Lifecycle#auxWindow.on('close') - window ID ${e.id}`), this._quitRequested && (this.trace("Lifecycle#auxWindow.on('close') - preventDefault() because quit requested"), r.preventDefault());
        })), n.add(O.fromNodeEventEmitter(t, "closed")(()=>{
            this.trace(`Lifecycle#auxWindow.on('closed') - window ID ${e.id}`), n.dispose();
        }));
    }
    async reload(e, t) {
        await this.unload(e, 3) || e.reload(t);
    }
    unload(e, t) {
        const n = this.mapWindowIdToPendingUnload.get(e.id);
        if (n) return n;
        const r = this.doUnload(e, t).finally(()=>{
            this.mapWindowIdToPendingUnload.delete(e.id);
        });
        return this.mapWindowIdToPendingUnload.set(e.id, r), r;
    }
    async doUnload(e, t) {
        if (!e.isReady) return !1;
        this.trace(`Lifecycle#unload() - window ID ${e.id}`);
        const n = this._quitRequested ? 2 : t, r = await this.onBeforeUnloadWindowInRenderer(e, n);
        return r ? (this.trace(`Lifecycle#unload() - veto in renderer (window ID ${e.id})`), this.handleWindowUnloadVeto(r)) : (await this.onWillUnloadWindowInRenderer(e, n), !1);
    }
    handleWindowUnloadVeto(e) {
        return e ? (this.resolvePendingQuitPromise(!0), this._quitRequested = !1, this.stateService.removeItem(ls.QUIT_AND_RESTART_KEY), !0) : !1;
    }
    resolvePendingQuitPromise(e) {
        this.pendingQuitPromiseResolve && (this.pendingQuitPromiseResolve(e), this.pendingQuitPromiseResolve = void 0, this.pendingQuitPromise = void 0), e && this._processExitWatchdog.clear();
    }
    onBeforeUnloadWindowInRenderer(e, t) {
        return new Promise((n)=>{
            const r = this.oneTimeListenerTokenGenerator++, s = `vscode:ok${r}`, i = `vscode:cancel${r}`, a = (d)=>{
                Te.removeListener(s, o), Te.removeListener(i, l), n(d);
            }, o = ()=>{
                a(!1);
            }, l = ()=>{
                a(!0);
            };
            Te.on(s, o), Te.on(i, l), e.send("vscode:onBeforeUnload", {
                okChannel: s,
                cancelChannel: i,
                reason: t
            });
        });
    }
    onWillUnloadWindowInRenderer(e, t) {
        return new Promise((n)=>{
            const s = `vscode:reply${this.oneTimeListenerTokenGenerator++}`;
            Te.once(s, ()=>n()), e.send("vscode:onWillUnload", {
                replyChannel: s,
                reason: t
            });
        });
    }
    quit(e) {
        return this.doQuit(e).then((t)=>{
            if (!t && e) try {
                if (ee) {
                    const n = Ei();
                    n !== process.cwd() && process.chdir(n);
                }
            } catch (n) {
                this.logService.error(n);
            }
            return t;
        });
    }
    doQuit(e) {
        return this.trace(`Lifecycle#quit() - begin (willRestart: ${e})`), this.pendingQuitPromise ? (this.trace("Lifecycle#quit() - returning pending quit promise"), this.pendingQuitPromise) : (e && this.stateService.setItem(ls.QUIT_AND_RESTART_KEY, !0), this._processExitWatchdog.value = this.shutdownHangWatchdogService?.armProcessExitWatchdog(), this.pendingQuitPromise = new Promise((t)=>{
            this.pendingQuitPromiseResolve = t, this.trace("Lifecycle#quit() - calling app.quit()"), Os.app.quit();
        }), this.pendingQuitPromise);
    }
    trace(e) {
        this.environmentMainService.args["enable-smoke-test-driver"] ? this.logService.info(e) : this.logService.trace(e);
    }
    setRelaunchHandler(e) {
        this.relaunchHandler = e;
    }
    setShutdownHangWatchdogService(e) {
        this.shutdownHangWatchdogService = e;
    }
    async relaunch(e) {
        this.trace("Lifecycle#relaunch()");
        const t = process.argv.slice(1);
        if (e?.addArgs && t.push(...e.addArgs), e?.removeArgs) for (const s of e.removeArgs){
            const i = t.indexOf(s);
            i >= 0 && t.splice(i, 1);
        }
        const n = ()=>{
            this.relaunchHandler?.handleRelaunch(e) || (this.trace("Lifecycle#relaunch() - calling app.relaunch()"), Os.app.relaunch({
                args: t
            }));
        };
        Os.app.once("quit", n), await this.quit(!0) && Os.app.removeListener("quit", n);
    }
    async kill(e) {
        this.trace("Lifecycle#kill()"), await this.fireOnWillShutdown(2), await Promise.race([
            En(1e3),
            (async ()=>{
                for (const t of so())if (t && !t.isDestroyed()) {
                    let n;
                    t.webContents && !t.webContents.isDestroyed() ? n = new Promise((r)=>t.once("closed", r)) : n = Promise.resolve(), t.destroy(), await n;
                }
            })()
        ]), Os.app.exit(e);
    }
}, ls.QUIT_AND_RESTART_KEY = "lifecycle.quitAndRestart", ls.LAST_SHUTDOWN_JOINER_TIMINGS_KEY = "lifecycle.lastShutdownJoinerTimings", ls = B([
    w(0, Z),
    w(1, fr),
    w(2, qe)
], ls);

}
