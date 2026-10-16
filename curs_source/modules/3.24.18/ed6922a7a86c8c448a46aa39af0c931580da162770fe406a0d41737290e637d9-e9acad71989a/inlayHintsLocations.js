import { Vo } from "./actions.js";
import { ei } from "./actions_2.js";
import { Ar } from "./cancellation.js";
import { vi } from "./commands.js";
import { ka } from "./contextView.js";
import { dn } from "./contextkey.js";
import { en } from "./dom_2.js";
import { W9i } from "./goToCommands.js";
import { Ze } from "./instantiation.js";
import { ji } from "./notification.js";
import { lU } from "./peekView.js";
import { qi } from "./range.js";
import { Nl } from "./resolverService.js";
import { x } from "./tslib.es6.js";
import { Js } from "./uuid.js";
var W$s, G$s, Lku, Nku;
export { G$s, Lku, Nku, W$s };
var __wakaru_Oku_initialized = false;
export function Oku() {
if (__wakaru_Oku_initialized) return;
__wakaru_Oku_initialized = true;
"use strict";
x(), en(), Vo(), Ar(), Js(), qi(), Nl(), W9i(), lU(), ei(), vi(), dn(), ka(), Ze(), ji(), W$s = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), G$s = (e)=>{
    throw TypeError(e);
}, Lku = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && G$s("Object expected");
        var i, r;
        n && (i = t[W$s("asyncDispose")]), i === void 0 && (i = t[W$s("dispose")], n && (r = i)), typeof i != "function" && G$s("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, Nku = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
};

}
