import { le, wr } from "./async.js";
import { E } from "./configurationRegistry.js";
import { Mpe, Npe, Ppe, Xg, _Ye, jw, uO } from "./conversationSearchProcess.js";
import { Ye, qe } from "./environmentMainService.js";
import { ge } from "./event.js";
import { B } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { J, Ut, j, ve } from "./lifecycle.js";
import { Nl, Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Aa, Ro } from "./loggerService_2.js";
import { Ne } from "./nls.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { Bi, cr } from "./utilityProcess.js";
function mYe(e) {
    if (e === Xg.ipcReady) return "ipcReady";
    if (e === Xg.initDone) return "initDone";
}
function pYe(e) {
    return typeof e == "object" && e !== null && "type" in e && e.type === Xg.initFailed && "error" in e && typeof e.error == "string";
}
function hYe(e, t) {
    const n = [
        ...e.filter((r)=>t - r <= uO),
        t
    ];
    return n.length > Mpe ? {
        restartAfterMs: null,
        recentTimestampsMs: n
    } : {
        restartAfterMs: Math.min(1e3 * 2 ** (n.length - 1), Ppe),
        recentTimestampsMs: n
    };
}
var Dpe, Hw;
export { Dpe, Hw, hYe, mYe, pYe };
var __wakaru_vYe_initialized = false;
export function vYe() {
if (__wakaru_vYe_initialized) return;
__wakaru_vYe_initialized = true;
"use strict";
h(), le(), j(), Ze(), hr(), Ne(), Ye(), Vt(), te(), Ro(), Bi(), _Ye(), Dpe = "vs/code/electron-utility/conversationSearch/conversationSearchMain", Hw = class extends J {
    constructor(e, t, n, r){
        super(), this.environmentMainService = e, this.lifecycleMainService = t, this.logService = n, this.utilityProcessRef = this._register(new Ut), this.processListeners = this._register(new Ut), this.readySignals = new Map, this.recentRestartTimestampsMs = [], this.restartCount = 0, this.crashHandled = !1, this.gaveUp = !1, this.shuttingDown = !1, this.processLogger = this._register(r.createLogger("conversationSearch", {
            name: E(1844, null)
        })), this._register(ge(()=>this.clearRestartTimer())), Te.on(jw.request, (s, i)=>void this.onWindowConnection(s, i)), this._register(this.lifecycleMainService.onWillShutdown(()=>this.onWillShutdown()));
    }
    async onWindowConnection(e, t) {
        if (this.gaveUp) {
            this.rejectConnection(e, t);
            return;
        }
        try {
            const n = await this.connect();
            if (e.sender.isDestroyed()) {
                n.close();
                return;
            }
            e.sender.postMessage(jw.response, t, [
                n
            ]);
        } catch (n) {
            this.logService.error("[ConversationSearchProcess] renderer connection failed", n), this.rejectConnection(e, t);
        }
    }
    rejectConnection(e, t) {
        e.sender.isDestroyed() || e.sender.postMessage(jw.response, t);
    }
    whenReady() {
        return this.shuttingDown ? Promise.reject(new Error("[ConversationSearchProcess] application is shutting down")) : this.gaveUp ? Promise.reject(new Error("[ConversationSearchProcess] restart budget exhausted")) : (this.readyPromise === void 0 && (this.readyPromise = (async ()=>{
            this.restartBackoff !== void 0 && await this.restartBackoff.p, this.prepareStartup();
            const e = this.waitForSignal("ipcReady"), t = this.waitForSignal("initDone");
            this.startUtilityProcess(), await this.waitForColdStartSignal(e, "ipcReady"), await this.waitForColdStartSignal(t, "initDone");
        })()), this.readyPromise);
    }
    prepareStartup() {
        this.readySignals = new Map, this.crashHandled = !1;
    }
    waitForSignal(e) {
        let t = this.readySignals.get(e);
        return t === void 0 && (t = new wr, this.readySignals.set(e, t)), t;
    }
    async waitForColdStartSignal(e, t) {
        let n;
        const r = new Promise((s, i)=>{
            n = setTimeout(()=>i(new Error(`[ConversationSearchProcess] timed out waiting for ${t}`)), Npe);
        });
        try {
            await Promise.race([
                e.p,
                r
            ]);
        } catch (s) {
            throw this.processLogger.error(`[ConversationSearchProcess] ${t} wait failed`, s), this.handleCrash(!0), s;
        } finally{
            n !== void 0 && clearTimeout(n);
        }
    }
    startUtilityProcess() {
        const e = new cr(this.logService, this.lifecycleMainService);
        this.utilityProcessRef.value = e;
        const t = new ve;
        this.processListeners.value = t, t.add(e.onMessage((s)=>{
            const i = mYe(s);
            if (i !== void 0) {
                this.waitForSignal(i).complete();
                return;
            }
            if (pYe(s)) {
                for (const a of this.readySignals.values())a.error(new Error(s.error));
                return;
            }
            typeof s == "object" && s !== null && "warning" in s && typeof s.warning == "string" && this.processLogger.warn(s.warning);
        })), t.add(e.onSpawn((s)=>this.processLogger.info(`[ConversationSearchProcess] spawned pid=${s ?? "<unknown>"}`))), t.add(e.onStdout((s)=>this.logOutput("stdout", s))), t.add(e.onStderr((s)=>this.logOutput("stderr", s))), t.add(e.onExit((s)=>{
            this.processLogger.info(`[ConversationSearchProcess] exited pid=${s.pid} code=${s.code} signal=${s.signal}`), this.shuttingDown || this.handleCrash(!1);
        })), t.add(e.onCrash((s)=>{
            this.processLogger.error(`[ConversationSearchProcess] crashed pid=${s.pid} code=${s.code} reason=${s.reason}`), this.handleCrash(!1);
        }));
        const n = {
            userDataPath: this.environmentMainService.userDataPath,
            restartCount: this.restartCount
        };
        e.start({
            processTitle: "conversation-search",
            type: "conversation-search",
            entryPoint: Dpe,
            payload: n,
            respondToAuthRequestsFromMainProcess: !0
        }) || (this.logService.error("[ConversationSearchProcess] failed to start utility process"), this.handleCrash(!0));
    }
    logOutput(e, t) {
        const n = t.trimEnd();
        n.length !== 0 && (e === "stderr" ? this.processLogger.warn(n) : this.processLogger.info(n));
    }
    handleCrash(e) {
        if (this.crashHandled || this.shuttingDown) return;
        this.crashHandled = !0, this.restartCount++;
        for (const s of this.readySignals.values())s.cancel();
        this.processListeners.clear(), this.readyPromise = void 0;
        const t = this.utilityProcessRef.value;
        e && t?.kill(), this.utilityProcessRef.clear();
        const n = hYe(this.recentRestartTimestampsMs, Date.now());
        if (this.recentRestartTimestampsMs = n.recentTimestampsMs, n.restartAfterMs === null) {
            this.gaveUp = !0, this.processLogger.error(`[ConversationSearchProcess] gave up after ${n.recentTimestampsMs.length} failures within ${uO}ms`);
            return;
        }
        this.clearRestartTimer();
        const r = new wr;
        this.restartBackoff = r, this.restartTimer = setTimeout(()=>{
            this.restartTimer = void 0, this.restartBackoff === r && (this.restartBackoff = void 0), r.complete(), !this._store.isDisposed && !this.gaveUp && this.whenReady().catch((s)=>this.logService.error("[ConversationSearchProcess] restart failed", s));
        }, n.restartAfterMs);
    }
    clearRestartTimer() {
        this.restartTimer !== void 0 && (clearTimeout(this.restartTimer), this.restartTimer = void 0), this.restartBackoff?.cancel(), this.restartBackoff = void 0;
    }
    async connect() {
        return await this.whenReady(), Nl(this.utilityProcessRef.value).connect();
    }
    onWillShutdown() {
        this.shuttingDown = !0, this.clearRestartTimer();
        for (const e of this.readySignals.values())e.cancel();
        this.readyPromise = void 0, this.utilityProcessRef.value?.postMessage(Xg.exit), this.processListeners.clear(), this.utilityProcessRef.clear();
    }
}, Hw = B([
    w(0, qe),
    w(1, ht),
    w(2, Z),
    w(3, Aa)
], Hw);

}
