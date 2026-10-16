import { Hb, Ps } from "./HVr.js";
import { x } from "./tslib.es6.js";
var ggn, Us;
export { Us, ggn };
var __wakaru_Kp_initialized = false;
export function Kp() {
if (__wakaru_Kp_initialized) return;
__wakaru_Kp_initialized = true;
"use strict";
x(), Ps(), ggn = ((e)=>(e[e.Ignore = 0] = "Ignore", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error", e[e.AI = 4] = "AI", e[e.Success = 5] = "Success", e))(ggn || {}), ((e)=>{
    const t = "error", n = "warning", i = "warn", r = "info", s = "ignore", o = "success";
    function a(l) {
        return l ? Hb(t, l) ? 3 : Hb(n, l) || Hb(i, l) ? 2 : Hb(r, l) ? 1 : Hb(o, l) ? 5 : 0 : 0;
    }
    e.fromValue = a;
    function c(l) {
        switch(l){
            case 3:
                return t;
            case 2:
                return n;
            case 1:
                return r;
            case 5:
                return o;
            default:
                return s;
        }
    }
    e.toString = c;
})(ggn || (ggn = {})), Us = ggn;

}
