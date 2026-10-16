import { Qe, st } from "./Iwo.js";
import { df, qn } from "./async.js";
import { E } from "./tslib.es6.js";
var dVt;
export { dVt };
var __wakaru_CIi_initialized = false;
export function CIi() {
if (__wakaru_CIi_initialized) return;
__wakaru_CIi_initialized = true;
"use strict";
E(), qn(), Qe(), dVt = class extends st {
    constructor(t, e){
        super(), this._keyOf = t, this._flush = e, this._pending = new Map, this._scheduled = !1;
    }
    schedule(t) {
        return this._store.isDisposed ? Promise.resolve() : (this._pending.set(this._keyOf(t), t), this._deferred === void 0 && (this._deferred = new df), this._scheduled || (this._scheduled = !0, queueMicrotask(()=>void this._run())), this._deferred.p);
    }
    async _run() {
        this._scheduled = !1;
        const t = this._deferred;
        this._deferred = void 0;
        const e = [
            ...this._pending.values()
        ];
        this._pending.clear();
        try {
            !this._store.isDisposed && e.length > 0 && await this._flush(e);
        } finally{
            t?.complete();
        }
    }
};

}
