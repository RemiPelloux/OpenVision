import { Gt, Qe, st, tt } from "./Iwo.js";
import { _To, eQu, mP, ud } from "./SZu.js";
import { f8k, v8k } from "./Ycg.js";
import { c7, qn } from "./async.js";
import { zp } from "./lifecycle_2.js";
import { Ji, Li } from "./log.js";
import { Lke, Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Ylt;
export { Ylt };
var __wakaru_Yrf_initialized = false;
export function Yrf() {
if (__wakaru_Yrf_initialized) return;
__wakaru_Yrf_initialized = true;
"use strict";
E(), Gt(), qn(), Qe(), zp(), Ji(), mP(), Zi(), Ylt = class extends st {
    constructor(t, e){
        super(), this.logService = t, this.storageService = e, this._onBeforeShutdown = this._register(new tt), this.onBeforeShutdown = this._onBeforeShutdown.event, this._onWillShutdown = this._register(new tt), this.onWillShutdown = this._onWillShutdown.event, this._onDidShutdown = this._register(new tt), this.onDidShutdown = this._onDidShutdown.event, this._onBeforeShutdownError = this._register(new tt), this.onBeforeShutdownError = this._onBeforeShutdownError.event, this._onShutdownVeto = this._register(new tt), this.onShutdownVeto = this._onShutdownVeto.event, this._phase = 1, this._willShutdown = !1, this.phaseWhen = new Map, this._phaseStartMarks = new Map([
            [
                1,
                "code/willStartWorkbench"
            ]
        ]), this._startupKind = this.resolveStartupKind(), this._register(this.storageService.onWillSaveState((n)=>{
            n.reason === Lke.SHUTDOWN && this.storageService.store(Ylt.LAST_SHUTDOWN_REASON_KEY, this.shutdownReason, 1, 1);
        }));
    }
    get startupKind() {
        return this._startupKind;
    }
    get phase() {
        return this._phase;
    }
    get willShutdown() {
        return this._willShutdown;
    }
    resolveStartupKind() {
        const t = this.doResolveStartupKind() ?? 1;
        return this.logService.trace(`[lifecycle] starting up (startup kind: ${t})`), t;
    }
    doResolveStartupKind() {
        const t = this.storageService.getNumber(Ylt.LAST_SHUTDOWN_REASON_KEY, 1);
        this.storageService.remove(Ylt.LAST_SHUTDOWN_REASON_KEY, 1);
        let e;
        switch(t){
            case 3:
                e = 3;
                break;
            case 4:
                e = 4;
                break;
        }
        return e;
    }
    set phase(t) {
        if (t < this.phase) throw new Error("Lifecycle cannot go backwards");
        if (this._phase === t) return;
        const e = this._phase;
        this.logService.trace(`lifecycle: phase changed (value: ${t})`), this._phase = t;
        const n = f8k(t);
        ud(n);
        const i = this._phaseStartMarks.get(e);
        i !== void 0 && _To(v8k(e, t), i, n, {
            track: "Lifecycle",
            trackGroup: eQu,
            color: "secondary"
        }), this._phaseStartMarks.set(t, n);
        const r = this.phaseWhen.get(this._phase);
        r && (r.open(), this.phaseWhen.delete(this._phase));
    }
    async when(t) {
        if (t <= this._phase) return;
        let e = this.phaseWhen.get(t);
        e || (e = new c7, this.phaseWhen.set(t, e)), await e.wait();
    }
}, Ylt.LAST_SHUTDOWN_REASON_KEY = "lifecyle.lastShutdownReason", Ylt = Re([
    F(0, Li),
    F(1, ki)
], Ylt);

}
