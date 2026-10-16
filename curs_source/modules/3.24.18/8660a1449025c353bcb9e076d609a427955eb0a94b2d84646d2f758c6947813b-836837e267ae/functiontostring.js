import { JA } from "./currentScopes.js";
import { hQ } from "./integration.js";
import { Rte } from "./object.js";
import { ah } from "./spanUtils.js";
import { E } from "./tslib.es6.js";
function Sun(t) {
    return t.__sentry_original__;
}
var FGu, BGu, two, UGu, NFt;
export { BGu, FGu, NFt, Sun, UGu, two };
var __wakaru_Yhy_initialized = false;
export function Yhy() {
if (__wakaru_Yhy_initialized) return;
__wakaru_Yhy_initialized = true;
"use strict";
E(), JA(), hQ(), Rte(), BGu = "FunctionToString", two = new WeakMap, UGu = (()=>({
        name: BGu,
        setupOnce () {
            FGu = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...t) {
                    const e = Sun(this), n = two.has(ah()) && e !== void 0 ? e : this;
                    return FGu.apply(n, t);
                };
            } catch  {}
        },
        setup (t) {
            two.set(t, !0);
        }
    })), NFt = UGu;

}
