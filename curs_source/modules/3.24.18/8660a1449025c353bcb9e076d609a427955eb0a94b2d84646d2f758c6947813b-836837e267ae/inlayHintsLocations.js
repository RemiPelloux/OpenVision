import { vu } from "./actions.js";
import { es } from "./actions_2.js";
import { yo } from "./cancellation.js";
import { rs } from "./commands.js";
import { pf } from "./contextView.js";
import { Hi } from "./contextkey.js";
import { Hn } from "./dom_2.js";
import { JDa } from "./goToCommands.js";
import { It } from "./instantiation.js";
import { Ks } from "./notification.js";
import { c_e } from "./peekView.js";
import { Qs } from "./range.js";
import { Em } from "./resolverService.js";
import { E } from "./tslib.es6.js";
import { Xo } from "./uuid_2.js";
var e3a, t3a, EPp, IPp;
export { EPp, IPp, e3a, t3a };
var __wakaru_xPp_initialized = false;
export function xPp() {
if (__wakaru_xPp_initialized) return;
__wakaru_xPp_initialized = true;
"use strict";
E(), Hn(), vu(), yo(), Xo(), Qs(), Em(), JDa(), c_e(), es(), rs(), Hi(), pf(), It(), Ks(), e3a = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), t3a = (t)=>{
    throw TypeError(t);
}, EPp = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && t3a("Object expected");
        var i, r;
        n && (i = e[e3a("asyncDispose")]), i === void 0 && (i = e[e3a("dispose")], n && (r = i)), typeof i != "function" && t3a("Object not disposable"), r && (i = function() {
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
}, IPp = (t, e, n)=>{
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
