import { NT } from "./currentScopes.js";
import { YH } from "./integration.js";
import { wV } from "./object.js";
import { Pu } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
function fLt(e) {
    return e.__sentry_original__;
}
var fCc, vCc, gVr, _Cc, Bdt;
export { Bdt, _Cc, fCc, fLt, gVr, vCc };
var __wakaru_lrg_initialized = false;
export function lrg() {
if (__wakaru_lrg_initialized) return;
__wakaru_lrg_initialized = true;
"use strict";
x(), NT(), YH(), wV(), vCc = "FunctionToString", gVr = new WeakMap, _Cc = (()=>({
        name: vCc,
        setupOnce () {
            fCc = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    const t = fLt(this), n = gVr.has(Pu()) && t !== void 0 ? t : this;
                    return fCc.apply(n, e);
                };
            } catch  {}
        },
        setup (e) {
            gVr.set(e, !0);
        }
    })), Bdt = _Cc;

}
