import { le } from "./async.js";
import { ge } from "./event.js";
import { Hn } from "./ipc.js";
import { J, j, ve } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
import { C_e } from "./utilityHost.js";
function Get(e) {
    return {
        hostId: e.hostId,
        processTitle: e.processTitle,
        entryPoint: e.entryPoint,
        env: e.env,
        idleTimeoutMs: e.idleTimeoutMs ?? 3e4,
        maxRestarts: e.maxRestarts ?? 5,
        placement: e.placement
    };
}
var I_e, A_e;
export { A_e, Get, I_e };
var __wakaru_Vet_initialized = false;
export function Vet() {
if (__wakaru_Vet_initialized) return;
__wakaru_Vet_initialized = true;
"use strict";
h(), le(), j(), C_e(), I_e = class extends J {
    constructor(e, t){
        super(), this._logService = e, this._createController = t, this._hosts = new Map;
    }
    register(e) {
        if (this._hosts.has(e.hostId)) return;
        const t = Get(e), n = this._register(new A_e(t, this._logService, this._createController));
        this._hosts.set(t.hostId, n);
    }
    getConnection(e) {
        return this._require(e).getConnection();
    }
    isRunning(e) {
        return this._hosts.get(e)?.isRunning ?? !1;
    }
    shutdown(e) {
        this._hosts.get(e)?.shutdown();
    }
    getController(e) {
        return this._require(e).controller;
    }
    _require(e) {
        const t = this._hosts.get(e);
        if (!t) throw new Error(`No utility host registered with id '${e}'`);
        return t;
    }
}, A_e = class extends J {
    constructor(e, t, n){
        super(), this._descriptor = e, this._logService = t, this._idleStore = this._register(new ve), this._clientCount = 0, this._leaseCount = 0, this._controller = this._register(n(e, t)), this._register(this._controller.onDidWindowConnect(()=>this._onClientConnected())), this._register(this._controller.onDidWindowDisconnect(()=>this._onClientDisconnected()));
    }
    get controller() {
        return this._controller;
    }
    get isRunning() {
        return this._controller.isRunning;
    }
    getConnection() {
        const e = this._controller.ensureStarted();
        return this._leaseCount++, this._cancelIdleShutdown(), Object.assign(ge(()=>{
            e.store.dispose(), this._leaseCount = Math.max(0, this._leaseCount - 1), this._store.isDisposed || this._scheduleIdleShutdown();
        }), {
            connection: e
        });
    }
    shutdown() {
        this._cancelIdleShutdown(), this._controller.shutdown();
    }
    _onClientConnected() {
        this._clientCount++, this._cancelIdleShutdown();
    }
    _onClientDisconnected() {
        this._clientCount = Math.max(0, this._clientCount - 1), this._scheduleIdleShutdown();
    }
    _scheduleIdleShutdown() {
        this._clientCount > 0 || this._leaseCount > 0 || this._descriptor.idleTimeoutMs <= 0 || (this._cancelIdleShutdown(), this._idleStore.add(Hn(()=>{
            this._clientCount === 0 && this._leaseCount === 0 && this._controller.isRunning && (this._logService.info(`[UtilityHost:${this._descriptor.hostId}] idle for ${this._descriptor.idleTimeoutMs}ms with no clients, shutting down`), this._controller.shutdown());
        }, this._descriptor.idleTimeoutMs)));
    }
    _cancelIdleShutdown() {
        this._idleStore.clear();
    }
};

}
