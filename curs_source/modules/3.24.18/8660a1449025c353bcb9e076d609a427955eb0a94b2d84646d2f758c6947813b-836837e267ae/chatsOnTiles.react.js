import { Pn, Qe } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { createContext as _Zk } from "./react-runtime/react/esm-index-production.js";
var Kvf, J_s, Yvf;
export { J_s, Kvf, Yvf };
var __wakaru_DMi_initialized = false;
export function DMi() {
if (__wakaru_DMi_initialized) return;
__wakaru_DMi_initialized = true;
"use strict";
E(), Qe(), Kvf = class {
    constructor(){
        this._surfaceCounts = new Map, this._listeners = new Map;
    }
    has(t) {
        return this._surfaceCounts.has(t);
    }
    add(t) {
        const e = this._surfaceCounts.get(t) ?? 0;
        return this._surfaceCounts.set(t, e + 1), e === 0 && this._fire(t), Pn(()=>{
            const n = (this._surfaceCounts.get(t) ?? 1) - 1;
            if (n > 0) {
                this._surfaceCounts.set(t, n);
                return;
            }
            this._surfaceCounts.delete(t), this._fire(t);
        });
    }
    subscribe(t, e) {
        const n = this._listeners.get(t) ?? new Set;
        return this._listeners.set(t, n), n.add(e), ()=>{
            n.delete(e), n.size === 0 && this._listeners.get(t) === n && this._listeners.delete(t);
        };
    }
    _fire(t) {
        for (const e of [
            ...this._listeners.get(t) ?? []
        ])e();
    }
}, J_s = _Zk(void 0), Yvf = ()=>{};

}
