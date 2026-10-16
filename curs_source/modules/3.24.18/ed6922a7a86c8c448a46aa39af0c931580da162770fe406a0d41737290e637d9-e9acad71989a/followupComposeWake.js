import { Alo, euo, hm, tuo } from "./background_composer_pb.js";
import { x } from "./tslib.es6.js";
var VAh, lEo;
export { VAh, lEo };
var __wakaru_jAh_initialized = false;
export function jAh() {
if (__wakaru_jAh_initialized) return;
__wakaru_jAh_initialized = true;
"use strict";
x(), hm(), VAh = 12e4, lEo = class {
    constructor(){
        this._sentAtMs = new Map;
    }
    forgetAll() {
        this._sentAtMs.clear();
    }
    send(e) {
        const t = e.bcId.trim();
        if (t.length === 0) return;
        const n = Date.now(), i = this._sentAtMs.get(t);
        i !== void 0 && n - i < VAh || (this._sentAtMs.set(t, n), e.wake(new euo({
            bcId: t,
            reason: Alo.FOLLOWUP_COMPOSE
        })).then((r)=>{
            (!(r instanceof tuo) || !r.signaled) && this._sentAtMs.get(t) === n && this._sentAtMs.delete(t);
        }, (r)=>{
            this._sentAtMs.get(t) === n && this._sentAtMs.delete(t), e.onError?.(r);
        }));
    }
};

}
