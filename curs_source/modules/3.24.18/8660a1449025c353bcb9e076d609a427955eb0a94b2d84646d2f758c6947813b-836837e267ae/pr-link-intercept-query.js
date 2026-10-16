import { wl } from "./agentRepositoryServiceTypes.js";
import { Nw } from "./cloudEnvironmentTemplateService.js";
import { dCs } from "./draftAgentConstants.js";
import { WX } from "./glass-tab-scope.js";
import { Hv } from "./glassActiveAgentService.js";
import { g4w } from "./pr-link-routing-policy.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
var tjl, njl, AVf, RVf;
export { AVf, RVf, njl, tjl };
var __wakaru_ijl_initialized = false;
export function ijl() {
if (__wakaru_ijl_initialized) return;
__wakaru_ijl_initialized = true;
"use strict";
E(), Nw(), wl(), dCs(), Hv(), Mk(), WX(), g4w(), tjl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), njl = (t)=>{
    throw TypeError(t);
}, AVf = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && njl("Object expected");
        var i, r;
        n && (i = e[tjl("asyncDispose")]), i === void 0 && (i = e[tjl("dispose")], n && (r = i)), typeof i != "function" && njl("Object not disposable"), r && (i = function() {
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
}, RVf = (t, e, n)=>{
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
