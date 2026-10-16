import { PUf, UMw, jMw } from "./BA.js";
import { Gt, tt } from "./Iwo.js";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
var MUf, DUf, LBl, NUf, LUf, OUf, cAt, OBl;
export { DUf, LBl, LUf, MUf, NUf, OBl, OUf, cAt };
var __wakaru_Kws_initialized = false;
export function Kws() {
if (__wakaru_Kws_initialized) return;
__wakaru_Kws_initialized = true;
"use strict";
E(), nl(), Bs(), Gt(), MUf = 2e3, DUf = 200, LBl = 2e4, NUf = {
    settle: ()=>{}
}, LUf = {
    enabled: !1,
    recentRequests: [],
    totalRequests: 0,
    inFlightCount: 0,
    errorCount: 0,
    startedAt: Date.now(),
    builtAt: Date.now(),
    revision: 0
}, OUf = class {
    constructor(){
        this.listeners = new Set, this._onDidSettleRequest = new tt, this.onDidSettleRequest = this._onDidSettleRequest.event, this.enabled = !1, this.nextId = 1, this.startedAt = Date.now(), this.recent = [], this.totalRequests = 0, this.inFlightCount = 0, this.errorCount = 0, this.revision = 0, this.snapshot = LUf, this.subscribe = (t)=>(this.listeners.add(t), ()=>{
                this.listeners.delete(t);
            }), this.getSnapshot = ()=>this.snapshot;
    }
    isEnabled() {
        return this.enabled;
    }
    setEnabled(t) {
        this.enabled !== t && (this.enabled = t, this.flushNow());
    }
    begin(t) {
        if (!this.enabled) return NUf;
        const e = {
            id: this.nextId++,
            op: t.op,
            service: t.service,
            callsite: t.callsite,
            request: PUf(t.request),
            startedAt: Date.now(),
            startPerf: performance.now(),
            durationMs: void 0,
            status: "ongoing",
            settled: !1
        };
        return this.recent.push(e), this.recent.length > MUf && this.recent.shift(), this.totalRequests++, this.inFlightCount++, this.scheduleFlush(), {
            settle: (n, i, r)=>this.settle(e, n, i, r)
        };
    }
    settle(t, e, n, i) {
        t.settled || (t.settled = !0, t.durationMs = Math.max(0, Math.round(performance.now() - t.startPerf)), t.status = e ? "success" : "error", t.response = e ? PUf(n) : void 0, t.errorName = e ? void 0 : UMw(i), t.errorMessage = e ? void 0 : jMw(i), this.inFlightCount = Math.max(0, this.inFlightCount - 1), e || this.errorCount++, this._onDidSettleRequest.fire({
            op: t.op,
            service: t.service,
            callsite: t.callsite,
            durationMs: t.durationMs,
            success: e,
            errorName: t.errorName,
            totalRequests: this.totalRequests,
            inFlightCount: this.inFlightCount,
            errorCount: this.errorCount
        }), this.scheduleFlush());
    }
    scheduleFlush() {
        this.flushHandle === void 0 && (this.flushHandle = setTimeout(()=>{
            this.flushHandle = void 0, this.flushNow();
        }, DUf));
    }
    flushNow() {
        this.flushHandle !== void 0 && (clearTimeout(this.flushHandle), this.flushHandle = void 0), this.revision++;
        const t = [];
        for(let e = this.recent.length - 1; e >= 0; e--){
            const n = this.recent[e];
            t.push({
                id: n.id,
                op: n.op,
                service: n.service,
                callsite: n.callsite,
                startedAt: n.startedAt,
                durationMs: n.durationMs,
                status: n.status,
                request: n.request,
                response: n.response,
                errorName: n.errorName,
                errorMessage: n.errorMessage
            });
        }
        this.snapshot = {
            enabled: this.enabled,
            recentRequests: t,
            totalRequests: this.totalRequests,
            inFlightCount: this.inFlightCount,
            errorCount: this.errorCount,
            startedAt: this.startedAt,
            builtAt: Date.now(),
            revision: this.revision
        };
        for (const e of this.listeners)e();
        this.updateTick();
    }
    updateTick() {
        const t = this.enabled && this.inFlightCount > 0;
        t && this.tickHandle === void 0 ? this.tickHandle = $t.setInterval(()=>this.flushNow(), 500) : !t && this.tickHandle !== void 0 && ($t.clearInterval(this.tickHandle), this.tickHandle = void 0);
    }
}, cAt = new OUf, OBl = new WeakMap;

}
