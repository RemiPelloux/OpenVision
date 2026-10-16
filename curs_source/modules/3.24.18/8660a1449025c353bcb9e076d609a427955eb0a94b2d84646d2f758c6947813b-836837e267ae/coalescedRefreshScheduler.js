import { Vh } from "./Iwo.js";
import { Emr, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { E } from "./tslib.es6.js";
var dQm, hQm;
export { dQm, hQm };
var __wakaru_tlk_initialized = false;
export function tlk() {
if (__wakaru_tlk_initialized) return;
__wakaru_tlk_initialized = true;
"use strict";
E(), qn(), yo(), dQm = 6e4, hQm = class {
    constructor(t, e){
        this._run = t, this._queue = new Emr, this._isDisposed = !1, this._giveUpAfterMs = e?.giveUpAfterMs ?? dQm;
    }
    refresh() {
        return this._isDisposed ? Promise.resolve() : this._queue.queue(async ()=>{
            if (this._isDisposed) return;
            const t = new El;
            this._runCts = t;
            try {
                const e = this._run(t.token);
                e.catch(()=>{}), await Vh(e, this._giveUpAfterMs, ()=>t.cancel());
            } finally{
                this._runCts === t && (this._runCts = void 0), t.dispose();
            }
        }).catch(()=>{});
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, this._runCts?.cancel(), this._runCts?.dispose(), this._runCts = void 0);
    }
};

}
