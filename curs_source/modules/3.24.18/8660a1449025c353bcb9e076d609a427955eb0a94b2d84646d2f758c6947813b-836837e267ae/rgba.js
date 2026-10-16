import { E } from "./tslib.es6.js";
var W0r, myt;
export { W0r, myt };
var __wakaru_pUd_initialized = false;
export function pUd() {
if (__wakaru_pUd_initialized) return;
__wakaru_pUd_initialized = true;
"use strict";
E(), W0r = class TZi {
    constructor(e, n, i, r){
        this._rgba8Brand = void 0, this.r = TZi._clamp(e), this.g = TZi._clamp(n), this.b = TZi._clamp(i), this.a = TZi._clamp(r);
    }
    equals(e) {
        return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a;
    }
    static _clamp(e) {
        return e < 0 ? 0 : e > 255 ? 255 : e | 0;
    }
}, W0r.Empty = new W0r(0, 0, 0, 0), myt = W0r;

}
