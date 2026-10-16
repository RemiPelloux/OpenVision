import { Cke, Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { yo } from "./cancellation.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Yz, cCe } from "./observableValue.js";
import { E } from "./tslib.es6.js";
import { D_ } from "./yBp.js";
var irl, rrl, Pxn, Mxn, Rze, Nng;
export { Mxn, Nng, Pxn, Rze, irl, rrl };
var __wakaru_Dxn_initialized = false;
export function Dxn() {
if (__wakaru_Dxn_initialized) return;
__wakaru_Dxn_initialized = true;
"use strict";
E(), Qe(), yo(), cCe(), Rn(), It(), irl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), rrl = (t)=>{
    throw TypeError(t);
}, Pxn = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && rrl("Object expected");
        var i, r;
        n && (i = e[irl("asyncDispose")]), i === void 0 && (i = e[irl("dispose")], n && (r = i)), typeof i != "function" && rrl("Object not disposable"), r && (i = function() {
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
}, Mxn = (t, e, n)=>{
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
}, Rze = jn("checkoutProviderService"), Nng = class extends st {
    constructor(){
        super(...arguments), this.handler = new Yz;
    }
    registerHandler(t) {
        return this.handler.set(t);
    }
    async warmCheckoutBranch(t, e) {
        var n = [];
        try {
            const s = await D_(this.handler, e), o = Pxn(n, Cke(e));
            await s.warmCheckoutBranch(t, o.token);
        } catch (s) {
            var i = s, r = !0;
        } finally{
            Mxn(n, i, r);
        }
    }
    async checkout(t, e, n, i) {
        var r = [];
        try {
            const a = await D_(this.handler, i), l = Pxn(r, Cke(i));
            await a.checkoutBranch(t, e, n, l.token);
        } catch (a) {
            var s = a, o = !0;
        } finally{
            Mxn(r, s, o);
        }
    }
    async ensureCurrentBranchPushed(t, e) {
        var n = [];
        try {
            const s = await D_(this.handler, e), o = Pxn(n, Cke(e));
            await s.ensureCurrentBranchPushed(t, o.token);
        } catch (s) {
            var i = s, r = !0;
        } finally{
            Mxn(n, i, r);
        }
    }
    async snapshotAndPushCurrentBranch(t, e) {
        var n = [];
        try {
            const s = await D_(this.handler, e), o = Pxn(n, Cke(e));
            return await s.snapshotAndPushCurrentBranch(t, o.token);
        } catch (s) {
            var i = s, r = !0;
        } finally{
            Mxn(n, i, r);
        }
    }
    async hasDirtyWorkingTree(t) {
        var e = [];
        try {
            const r = await D_(this.handler, t), s = Pxn(e, Cke(t));
            return await r.hasDirtyWorkingTree(s.token);
        } catch (r) {
            var n = r, i = !0;
        } finally{
            Mxn(e, n, i);
        }
    }
}, bn(Rze, Nng, 1, 0);

}
