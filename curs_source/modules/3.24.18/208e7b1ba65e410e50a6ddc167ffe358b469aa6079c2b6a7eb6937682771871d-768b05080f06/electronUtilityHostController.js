import { le } from "./async.js";
import { N, ge, se } from "./event.js";
import { Hn } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { J, j, ve } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
import { jet } from "./utilityHostIpc.js";
import { Bi, cr } from "./utilityProcess.js";
function $et(e) {
    return {
        request: `vscode:createUtilityHostMessageChannel-${e}`,
        response: `vscode:createUtilityHostMessageChannelResult-${e}`
    };
}
var M_e;
export { $et, M_e };
var __wakaru_Het_initialized = false;
export function Het() {
if (__wakaru_Het_initialized) return;
__wakaru_Het_initialized = true;
"use strict";
h(), le(), se(), j(), hr(), Bi(), jet(), M_e = class extends J {
    constructor(e, t, n){
        super(), this._descriptor = e, this._logService = t, this._lifecycleMainService = n, this._restartCount = 0, this._cooldownUntil = 0, this._intentionalShutdown = !1, this._processStore = this._register(new ve), this._connections = new Set, this._onDidWindowConnect = this._register(new N), this.onDidWindowConnect = this._onDidWindowConnect.event, this._onDidWindowDisconnect = this._register(new N), this.onDidWindowDisconnect = this._onDidWindowDisconnect.event;
        const r = $et(e.hostId);
        this._requestChannel = r.request, this._responseChannel = r.response;
        const s = (i, a)=>this._onWindowConnection(i, a);
        Te.on(this._requestChannel, s), this._register(ge(()=>Te.removeListener(this._requestChannel, s))), this._register(this._lifecycleMainService.onWillShutdown(()=>this.shutdown()));
    }
    get isRunning() {
        return this._utilityProcess !== void 0;
    }
    ensureStarted() {
        return this._ensureProcess(), this._openControlConnection();
    }
    shutdown() {
        this._intentionalShutdown = !0, this._restartCount = 0, this._cooldownUntil = 0, this._teardownConnections({
            code: 0,
            signal: "killed"
        }), this._utilityProcess?.kill(), this._utilityProcess = void 0, this._processStore.clear();
    }
    dispose() {
        this.shutdown(), super.dispose();
    }
    _ensureProcess(e = !1) {
        if (this._utilityProcess) return;
        if (Date.now() < this._cooldownUntil) throw new Error(`[UtilityHost:${this._descriptor.hostId}] restart budget exhausted; cooling down until ${new Date(this._cooldownUntil).toISOString()}`);
        this._processStore.clear(), this._intentionalShutdown = !1, e || (this._restartCount = 0);
        const t = this._utilityProcess = this._processStore.add(new cr(this._logService, this._lifecycleMainService));
        t.start({
            type: this._descriptor.hostId,
            processTitle: this._descriptor.processTitle,
            entryPoint: this._descriptor.entryPoint,
            env: this._descriptor.env
        });
        const n = (r)=>{
            this._utilityProcess === t && this._onUnexpectedOrCleanExit(r);
        };
        this._processStore.add(t.onExit((r)=>n({
                code: r.code,
                signal: r.signal
            }))), this._processStore.add(t.onCrash((r)=>n({
                code: r.code,
                signal: "unknown"
            }))), Hn(()=>{
            this._restartCount > 0 && (this._logService.info(`[UtilityHost:${this._descriptor.hostId}] healthy for 60000ms, resetting restart budget`), this._restartCount = 0);
        }, 6e4, this._processStore), this._logService.info(`[UtilityHost:${this._descriptor.hostId}] started`);
    }
    _onUnexpectedOrCleanExit(e) {
        if (this._logService.info(`[UtilityHost:${this._descriptor.hostId}] process exited with code ${e.code}`), this._utilityProcess = void 0, this._teardownConnections(e), this._intentionalShutdown) {
            this._processStore.clear();
            return;
        }
        if (this._restartCount >= this._descriptor.maxRestarts) {
            this._cooldownUntil = Date.now() + 6e4, this._logService.info(`[UtilityHost:${this._descriptor.hostId}] restart budget exhausted; cooling down for 60000ms`), this._processStore.clear();
            return;
        }
        this._restartCount++, this._logService.info(`[UtilityHost:${this._descriptor.hostId}] restarting (attempt ${this._restartCount}/${this._descriptor.maxRestarts})`), this._ensureProcess(!0);
    }
    _onWindowConnection(e, t) {
        try {
            this._ensureProcess();
        } catch (r) {
            this._logService.error(`[UtilityHost:${this._descriptor.hostId}] failed to start for window port request`, r), e.sender.isDestroyed() || e.sender.postMessage(this._responseChannel, t);
            return;
        }
        const n = this._utilityProcess.connect();
        if (e.sender.isDestroyed()) {
            n.close();
            return;
        }
        e.sender.postMessage(this._responseChannel, t, [
            n
        ]), this._onDidWindowConnect.fire(), e.sender.once("destroyed", ()=>this._onDidWindowDisconnect.fire());
    }
    _openControlConnection() {
        const e = new ve, t = e.add(new N), n = e.add(new N), r = this._utilityProcess.connect();
        r.on("message", (i)=>t.fire(i.data)), r.start(), e.add(ge(()=>r.close()));
        const s = {
            onDidProcessExit: n,
            store: e
        };
        return this._connections.add(s), e.add(ge(()=>this._connections.delete(s))), {
            send: (i)=>r.postMessage(i),
            onMessage: t.event,
            onDidProcessExit: n.event,
            store: e
        };
    }
    _teardownConnections(e) {
        const t = [
            ...this._connections
        ];
        this._connections.clear();
        for (const n of t)n.onDidProcessExit.fire(e), n.store.dispose();
    }
};

}
