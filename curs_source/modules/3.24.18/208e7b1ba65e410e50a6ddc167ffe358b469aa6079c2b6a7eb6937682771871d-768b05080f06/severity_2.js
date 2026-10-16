import { Ii } from "./resources.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
var $p, rt;
export { $p, rt };
var __wakaru_jk_initialized = false;
export function jk() {
if (__wakaru_jk_initialized) return;
__wakaru_jk_initialized = true;
"use strict";
h(), jn(), $p = ((e)=>(e[e.Ignore = 0] = "Ignore", e[e.Info = 1] = "Info", e[e.Warning = 2] = "Warning", e[e.Error = 3] = "Error", e[e.AI = 4] = "AI", e[e.Success = 5] = "Success", e))($p || {}), ((e)=>{
    const t = "error", n = "warning", r = "warn", s = "info", i = "ignore", a = "success";
    function o(d) {
        return d ? Ii(t, d) ? 3 : Ii(n, d) || Ii(r, d) ? 2 : Ii(s, d) ? 1 : Ii(a, d) ? 5 : 0 : 0;
    }
    e.fromValue = o;
    function l(d) {
        switch(d){
            case 3:
                return t;
            case 2:
                return n;
            case 1:
                return s;
            case 5:
                return a;
            default:
                return i;
        }
    }
    e.toString = l;
})($p || ($p = {})), rt = $p;

}
