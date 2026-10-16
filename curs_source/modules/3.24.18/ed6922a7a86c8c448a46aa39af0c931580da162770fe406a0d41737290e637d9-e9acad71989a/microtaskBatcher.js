import { Se, we } from "./HVr.js";
import { Am, bn } from "./async.js";
import { x } from "./tslib.es6.js";
var OCt;
export { OCt };
var __wakaru_K3n_initialized = false;
export function K3n() {
if (__wakaru_K3n_initialized) return;
__wakaru_K3n_initialized = true;
"use strict";
x(), bn(), Se(), OCt = class extends we {
    constructor(e, t){
        super(), this._keyOf = e, this._flush = t, this._pending = new Map, this._scheduled = !1;
    }
    schedule(e) {
        return this._store.isDisposed ? Promise.resolve() : (this._pending.set(this._keyOf(e), e), this._deferred === void 0 && (this._deferred = new Am), this._scheduled || (this._scheduled = !0, queueMicrotask(()=>void this._run())), this._deferred.p);
    }
    async _run() {
        this._scheduled = !1;
        const e = this._deferred;
        this._deferred = void 0;
        const t = [
            ...this._pending.values()
        ];
        this._pending.clear();
        try {
            !this._store.isDisposed && t.length > 0 && await this._flush(t);
        } finally{
            e?.complete();
        }
    }
};

}
