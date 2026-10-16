import { Pro } from "./A3u.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { bn, p3 } from "./async.js";
import { $d } from "./lifecycle_2.js";
import { Qn, Wn } from "./log.js";
import { Ol, TZr, ZNc, wI } from "./qIc.js";
import { Vn, _J, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
function tg_(e) {
    return `code/LifecyclePhase/${Pro(e)}`;
}
function ng_(e, t) {
    return `perf: lifecycle ${Pro(e)} -> ${Pro(t)}`;
}
var m7e;
export { m7e, ng_, tg_ };
var __wakaru_P8h_initialized = false;
export function P8h() {
if (__wakaru_P8h_initialized) return;
__wakaru_P8h_initialized = true;
"use strict";
x(), bt(), bn(), Se(), $d(), Qn(), wI(), Vn(), m7e = class extends we {
    constructor(e, t){
        super(), this.logService = e, this.storageService = t, this._onBeforeShutdown = this._register(new ve), this.onBeforeShutdown = this._onBeforeShutdown.event, this._onWillShutdown = this._register(new ve), this.onWillShutdown = this._onWillShutdown.event, this._onDidShutdown = this._register(new ve), this.onDidShutdown = this._onDidShutdown.event, this._onBeforeShutdownError = this._register(new ve), this.onBeforeShutdownError = this._onBeforeShutdownError.event, this._onShutdownVeto = this._register(new ve), this.onShutdownVeto = this._onShutdownVeto.event, this._phase = 1, this._willShutdown = !1, this.phaseWhen = new Map, this._phaseStartMarks = new Map([
            [
                1,
                "code/willStartWorkbench"
            ]
        ]), this._startupKind = this.resolveStartupKind(), this._register(this.storageService.onWillSaveState((n)=>{
            n.reason === _J.SHUTDOWN && this.storageService.store(m7e.LAST_SHUTDOWN_REASON_KEY, this.shutdownReason, 1, 1);
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
        const e = this.doResolveStartupKind() ?? 1;
        return this.logService.trace(`[lifecycle] starting up (startup kind: ${e})`), e;
    }
    doResolveStartupKind() {
        const e = this.storageService.getNumber(m7e.LAST_SHUTDOWN_REASON_KEY, 1);
        this.storageService.remove(m7e.LAST_SHUTDOWN_REASON_KEY, 1);
        let t;
        switch(e){
            case 3:
                t = 3;
                break;
            case 4:
                t = 4;
                break;
        }
        return t;
    }
    set phase(e) {
        if (e < this.phase) throw new Error("Lifecycle cannot go backwards");
        if (this._phase === e) return;
        const t = this._phase;
        this.logService.trace(`lifecycle: phase changed (value: ${e})`), this._phase = e;
        const n = tg_(e);
        Ol(n);
        const i = this._phaseStartMarks.get(t);
        i !== void 0 && TZr(ng_(t, e), i, n, {
            track: "Lifecycle",
            trackGroup: ZNc,
            color: "secondary"
        }), this._phaseStartMarks.set(e, n);
        const r = this.phaseWhen.get(this._phase);
        r && (r.open(), this.phaseWhen.delete(this._phase));
    }
    async when(e) {
        if (e <= this._phase) return;
        let t = this.phaseWhen.get(e);
        t || (t = new p3, this.phaseWhen.set(e, t)), await t.wait();
    }
}, m7e.LAST_SHUTDOWN_REASON_KEY = "lifecyle.lastShutdownReason", m7e = ie([
    C(0, Wn),
    C(1, yn)
], m7e);

}
