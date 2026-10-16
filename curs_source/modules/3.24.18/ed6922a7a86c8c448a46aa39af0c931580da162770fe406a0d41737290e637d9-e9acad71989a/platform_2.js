import { Xr, dp, oNt, wqe } from "./HVr.js";
import { C0 } from "./assert.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var _Mc, kn;
export { _Mc, kn };
var __wakaru_rr_initialized = false;
export function rr() {
if (__wakaru_rr_initialized) return;
__wakaru_rr_initialized = true;
"use strict";
x(), C0(), gr(), _Mc = class {
    constructor(){
        this.data = new Map;
    }
    add(e, t) {
        oNt(Xr(e)), oNt(dp(t)), oNt(!this.data.has(e), "There is already an extension with this id"), this.data.set(e, t);
    }
    knows(e) {
        return this.data.has(e);
    }
    as(e) {
        return this.data.get(e) || null;
    }
    dispose() {
        this.data.forEach((e)=>{
            wqe(e.dispose) && e.dispose();
        }), this.data.clear();
    }
}, kn = new _Mc;

}
