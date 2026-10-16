import { Fa, Zw } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var iri, Ua;
export { Ua, iri };
var __wakaru_ob_initialized = false;
export function ob() {
if (__wakaru_ob_initialized) return;
__wakaru_ob_initialized = true;
"use strict";
E(), Fa(), iri = ((t)=>(t[t.Ignore = 0] = "Ignore", t[t.Info = 1] = "Info", t[t.Warning = 2] = "Warning", t[t.Error = 3] = "Error", t[t.AI = 4] = "AI", t[t.Success = 5] = "Success", t))(iri || {}), ((t)=>{
    const e = "error", n = "warning", i = "warn", r = "info", s = "ignore", o = "success";
    function a(c) {
        return c ? Zw(e, c) ? 3 : Zw(n, c) || Zw(i, c) ? 2 : Zw(r, c) ? 1 : Zw(o, c) ? 5 : 0 : 0;
    }
    t.fromValue = a;
    function l(c) {
        switch(c){
            case 3:
                return e;
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
    t.toString = l;
})(iri || (iri = {})), Ua = iri;

}
