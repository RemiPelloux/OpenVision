import { Ei } from "./Iwo.js";
import { Uj } from "./bulkEditService.js";
import { yo } from "./cancellation.js";
import { vT } from "./glass-tab-persistence-service.contract.js";
import { ab } from "./progress.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { hyt, rB } from "./undoRedo.js";
import { l3 } from "./workspace-services_2.js";
import { Cu } from "./workspaceCollectionService.js";
var lnc, cnc, unc, dnc, $Pv;
export { $Pv, cnc, dnc, lnc, unc };
var __wakaru_ZRt_initialized = false;
export function ZRt() {
if (__wakaru_ZRt_initialized) return;
__wakaru_ZRt_initialized = true;
"use strict";
E(), yo(), Ei(), Lr(), Uj(), ab(), rB(), Cu(), l3(), vT(), lnc = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), cnc = (t)=>{
    throw TypeError(t);
}, unc = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && cnc("Object expected");
        var i, r;
        n && (i = e[lnc("asyncDispose")]), i === void 0 && (i = e[lnc("dispose")], n && (r = i)), typeof i != "function" && cnc("Object not disposable"), r && (i = function() {
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
}, dnc = (t, e, n)=>{
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
}, $Pv = new hyt;

}
