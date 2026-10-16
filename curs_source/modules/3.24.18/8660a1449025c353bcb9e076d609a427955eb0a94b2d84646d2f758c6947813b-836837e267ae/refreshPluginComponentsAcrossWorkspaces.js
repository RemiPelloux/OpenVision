import { E } from "./tslib.es6.js";
import { hPn } from "./waitForPluginComponents.js";
import { Cu } from "./workspaceCollectionService.js";
var hwl, pwl, qYg, zYg;
export { hwl, pwl, qYg, zYg };
var __wakaru_mwl_initialized = false;
export function mwl() {
if (__wakaru_mwl_initialized) return;
__wakaru_mwl_initialized = true;
"use strict";
E(), hPn(), Cu(), hwl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), pwl = (t)=>{
    throw TypeError(t);
}, qYg = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && pwl("Object expected");
        var i, r;
        n && (i = e[hwl("asyncDispose")]), i === void 0 && (i = e[hwl("dispose")], n && (r = i)), typeof i != "function" && pwl("Object not disposable"), r && (i = function() {
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
}, zYg = (t, e, n)=>{
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
