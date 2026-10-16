import { k_ } from "./active-activities.ts";
import { h } from "./tslib.es6.js";
import { A_, Bw, I_, R_ } from "./us.js";
var P_;
export { P_ };
var __wakaru_zw_initialized = false;
export function zw() {
if (__wakaru_zw_initialized) return;
__wakaru_zw_initialized = true;
"use strict";
h(), k_(), P_ = class {
    constructor(e = A_){
        this.resolveActivities = e, this.activeTimers = new Map, this.activeServiceHandles = new Map, this.activeServicePromises = new Map;
    }
    reconcile(e, t, r) {
        const n = this.resolveActivities(e), s = this.resolveActivities(t);
        for (const [i, o] of this.activeTimers){
            const a = s.get(i), c = n.get(i), l = i === "health_probe_timer" && I_(e) !== I_(t), u = i !== "health_probe_timer" && a?.delayMs !== c?.delayMs;
            (!a || l || u) && (o.cancel(), this.activeTimers.delete(i));
        }
        for (const [i, o] of s)if (!this.activeTimers.has(i)) {
            const a = this.startTimer(i, o, r);
            this.activeTimers.set(i, a);
        }
    }
    reconcileServices(e, t, r, n) {
        const s = R_(e), i = R_(t), o = e.type === "connecting" ? e.generation : -1, a = t.type === "connecting" ? t.generation : -1, c = e.type === t.type && o !== a && a >= 0;
        for (const [l, u] of this.activeServiceHandles)(!i.has(l) || c) && (u.cancel(), this.activeServiceHandles.delete(l), this.activeServicePromises.delete(l));
        for (const l of i)if (!this.activeServiceHandles.has(l)) {
            const { handle: u, promise: d } = n(l, r);
            this.activeServiceHandles.set(l, u), this.activeServicePromises.set(l, d.catch(()=>{}));
        }
    }
    getServicePromise(e) {
        return this.activeServicePromises.get(e);
    }
    dispose() {
        for (const [, e] of this.activeTimers)e.cancel();
        this.activeTimers.clear();
        for (const [, e] of this.activeServiceHandles)e.cancel();
        this.activeServiceHandles.clear(), this.activeServicePromises.clear();
    }
    get activeCount() {
        return this.activeTimers.size;
    }
    get activeServiceCount() {
        return this.activeServiceHandles.size;
    }
    has(e) {
        return this.activeTimers.has(e);
    }
    hasService(e) {
        return this.activeServiceHandles.has(e);
    }
    startTimer(e, t, r) {
        const n = Bw(e);
        let s = !1;
        const i = setTimeout(()=>{
            s || (this.activeTimers.delete(e), r([
                n
            ]));
        }, t.delayMs);
        return {
            cancel: ()=>{
                s = !0, clearTimeout(i);
            }
        };
    }
};

}
