import { E } from "./tslib.es6.js";
import { Cu } from "./workspaceCollectionService.js";
var UGl, jGl, Yov, Xov;
export { UGl, Xov, Yov, jGl };
var __wakaru_ZEs_initialized = false;
export function ZEs() {
if (__wakaru_ZEs_initialized) return;
__wakaru_ZEs_initialized = true;
"use strict";
E(), Cu(), UGl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), jGl = (t)=>{
    throw TypeError(t);
}, Yov = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && jGl("Object expected");
        var i, r;
        n && (i = e[UGl("asyncDispose")]), i === void 0 && (i = e[UGl("dispose")], n && (r = i)), typeof i != "function" && jGl("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, Xov = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
};

}
