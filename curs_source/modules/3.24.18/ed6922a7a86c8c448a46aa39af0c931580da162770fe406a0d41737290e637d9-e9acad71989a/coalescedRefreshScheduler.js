import { Hp } from "./HVr.js";
import { Imi, bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { x } from "./tslib.es6.js";
var Fhh, Bhh;
export { Bhh, Fhh };
var __wakaru_F7v_initialized = false;
export function F7v() {
if (__wakaru_F7v_initialized) return;
__wakaru_F7v_initialized = true;
"use strict";
x(), bn(), Ar(), Fhh = 6e4, Bhh = class {
    constructor(e, t){
        this._run = e, this._queue = new Imi, this._isDisposed = !1, this._giveUpAfterMs = t?.giveUpAfterMs ?? Fhh;
    }
    refresh() {
        return this._isDisposed ? Promise.resolve() : this._queue.queue(async ()=>{
            if (this._isDisposed) return;
            const e = new Eo;
            this._runCts = e;
            try {
                const t = this._run(e.token);
                t.catch(()=>{}), await Hp(t, this._giveUpAfterMs, ()=>e.cancel());
            } finally{
                this._runCts === e && (this._runCts = void 0), e.dispose();
            }
        }).catch(()=>{});
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, this._runCts?.cancel(), this._runCts?.dispose(), this._runCts = void 0);
    }
};

}
