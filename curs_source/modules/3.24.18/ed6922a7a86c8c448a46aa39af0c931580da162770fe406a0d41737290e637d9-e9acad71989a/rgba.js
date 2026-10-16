import { x } from "./tslib.es6.js";
var b_i, Uze;
export { Uze, b_i };
var __wakaru_QBc_initialized = false;
export function QBc() {
if (__wakaru_QBc_initialized) return;
__wakaru_QBc_initialized = true;
"use strict";
x(), b_i = class WXn {
    constructor(t, n, i, r){
        this._rgba8Brand = void 0, this.r = WXn._clamp(t), this.g = WXn._clamp(n), this.b = WXn._clamp(i), this.a = WXn._clamp(r);
    }
    equals(t) {
        return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
    }
    static _clamp(t) {
        return t < 0 ? 0 : t > 255 ? 255 : t | 0;
    }
}, b_i.Empty = new b_i(0, 0, 0, 0), Uze = b_i;

}
