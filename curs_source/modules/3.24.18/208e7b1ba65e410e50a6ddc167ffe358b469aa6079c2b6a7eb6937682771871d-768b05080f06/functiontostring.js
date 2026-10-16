import { dt } from "./currentScopes.js";
import { ar } from "./integration.js";
import { _r } from "./object.js";
import { Kn } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
function g3e(e) {
    return e.__sentry_original__;
}
var CW, IW, mI, AW, e6e;
export { AW, CW, IW, e6e, g3e, mI };
var __wakaru_t6e_initialized = false;
export function t6e() {
if (__wakaru_t6e_initialized) return;
__wakaru_t6e_initialized = true;
"use strict";
h(), dt(), ar(), _r(), IW = "FunctionToString", mI = new WeakMap, AW = (()=>({
        name: IW,
        setupOnce () {
            CW = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    const t = g3e(this), n = mI.has(Kn()) && t !== void 0 ? t : this;
                    return CW.apply(n, e);
                };
            } catch  {}
        },
        setup (e) {
            mI.set(e, !0);
        }
    })), e6e = AW;

}
