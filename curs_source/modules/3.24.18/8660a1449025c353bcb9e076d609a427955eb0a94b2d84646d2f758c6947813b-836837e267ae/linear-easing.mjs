import { byv } from "./memo_2.mjs";
import { _yv } from "./ofv.js";
import { E } from "./tslib.es6.js";
var rXl;
export { rXl };
var __wakaru_Syv_initialized = false;
export function Syv() {
if (__wakaru_Syv_initialized) return;
__wakaru_Syv_initialized = true;
E(), byv(), rXl = _yv(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch  {
        return !1;
    }
    return !0;
}, "linearEasing");

}
