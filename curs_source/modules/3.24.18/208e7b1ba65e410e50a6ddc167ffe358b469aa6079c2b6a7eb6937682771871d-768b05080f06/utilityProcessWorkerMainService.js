import { le, wr } from "./async.js";
import { N, O, se } from "./event.js";
import { Qa } from "./hash.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, ei, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Xa, Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Bi, Yp } from "./utilityProcess.js";
import { ct, pt } from "./windows.js";
var M2, L1, U1;
export { L1, M2, U1 };
var __wakaru_iet_initialized = false;
export function iet() {
if (__wakaru_iet_initialized) return;
__wakaru_iet_initialized = true;
"use strict";
h(), j(), ne(), te(), pt(), Bi(), Qa(), se(), le(), Vt(), M2 = Q("utilityProcessWorker"), L1 = class extends J {
    constructor(e, t, n){
        super(), this.logService = e, this.windowsMainService = t, this.lifecycleMainService = n, this.workers = this._register(new ei);
    }
    async createWorker(e) {
        const t = `window: ${e.reply.windowId}, workspace: ${e.workspaceIdentifier}, moduleId: ${e.process.moduleId}`;
        this.logService.trace(`[UtilityProcessWorker]: createWorker(${t})`);
        const n = this.hash(e);
        this.workers.has(n) && (this.logService.warn(`[UtilityProcessWorker]: createWorker() found an existing worker that will be terminated (${t})`), this.disposeWorker(e));
        const r = new U1(this.logService, this.windowsMainService, this.lifecycleMainService, e);
        if (!r.spawn()) return {
            reason: {
                code: 1,
                signal: "EINVALID"
            }
        };
        this.workers.set(n, r);
        const s = new wr;
        return O.once(r.onDidTerminate)((i)=>{
            i.code === 0 ? this.logService.trace(`[UtilityProcessWorker]: terminated normally with code ${i.code}, signal: ${i.signal}`) : this.logService.error(`[UtilityProcessWorker]: terminated unexpectedly with code ${i.code}, signal: ${i.signal}`), s.complete({
                reason: i
            }), this.workers.get(n) === r && this.workers.deleteAndLeak(n), r.dispose();
        }), s.p;
    }
    hash(e) {
        return Xa({
            moduleId: e.process.moduleId,
            windowId: e.reply.windowId,
            workspaceIdentifier: e.workspaceIdentifier
        });
    }
    async disposeWorker(e) {
        const t = this.hash(e), n = this.workers.get(t);
        n && (this.logService.trace(`[UtilityProcessWorker]: disposeWorker(window: ${e.reply.windowId}, workspace: ${e.workspaceIdentifier}, moduleId: ${e.process.moduleId})`), n.kill());
    }
}, L1 = B([
    w(0, Z),
    w(1, ct),
    w(2, ht)
], L1), U1 = class extends J {
    constructor(e, t, n, r){
        super(), this.windowsMainService = t, this.configuration = r, this._onDidTerminate = this._register(new N), this.onDidTerminate = this._onDidTerminate.event, this.utilityProcess = this._register(new Yp(e, t, n)), this.registerListeners();
    }
    registerListeners() {
        this._register(this.utilityProcess.onExit((e)=>this._onDidTerminate.fire({
                code: e.code,
                signal: e.signal
            }))), this._register(this.utilityProcess.onCrash((e)=>this._onDidTerminate.fire({
                code: e.code,
                signal: "ECRASH"
            })));
    }
    spawn() {
        const t = this.windowsMainService.getWindowById(this.configuration.reply.windowId)?.win?.webContents.getOSProcessId(), n = `${this.configuration.reply.windowId}:${this.configuration.workspaceIdentifier}`;
        return this.utilityProcess.start({
            processTitle: `${this.configuration.process.type} [${n}]`,
            type: this.configuration.process.type,
            entryPoint: this.configuration.process.moduleId,
            parentLifecycleBound: t,
            windowLifecycleBound: !0,
            correlationId: n,
            responseWindowId: this.configuration.reply.windowId,
            responseChannel: this.configuration.reply.channel,
            responseNonce: this.configuration.reply.nonce
        });
    }
    kill() {
        this.utilityProcess.kill();
    }
}, U1 = B([
    w(0, Z),
    w(1, ct),
    w(2, ht)
], U1);

}
