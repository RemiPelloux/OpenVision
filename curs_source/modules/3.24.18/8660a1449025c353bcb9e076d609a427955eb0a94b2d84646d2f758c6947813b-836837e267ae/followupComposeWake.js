import { EWa, TWa, YHa, pd } from "./background_composer_pb.js";
import { E } from "./tslib.es6.js";
var Rvg, Eul;
export { Eul, Rvg };
var __wakaru_Pvg_initialized = false;
export function Pvg() {
if (__wakaru_Pvg_initialized) return;
__wakaru_Pvg_initialized = true;
"use strict";
E(), pd(), Rvg = 12e4, Eul = class {
    constructor(){
        this._sentAtMs = new Map;
    }
    forgetAll() {
        this._sentAtMs.clear();
    }
    send(t) {
        const e = t.bcId.trim();
        if (e.length === 0) return;
        const n = Date.now(), i = this._sentAtMs.get(e);
        i !== void 0 && n - i < Rvg || (this._sentAtMs.set(e, n), t.wake(new TWa({
            bcId: e,
            reason: YHa.FOLLOWUP_COMPOSE
        })).then((r)=>{
            (!(r instanceof EWa) || !r.signaled) && this._sentAtMs.get(e) === n && this._sentAtMs.delete(e);
        }, (r)=>{
            this._sentAtMs.get(e) === n && this._sentAtMs.delete(e), t.onError?.(r);
        }));
    }
};

}
