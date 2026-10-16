import { lf } from "./A3u.js";
import { Se, mge, we } from "./HVr.js";
import { Ar } from "./cancellation.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { HU, wde } from "./observableValue.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var cko, lko, LVt, NVt, HFn, avh;
export { HFn, LVt, NVt, avh, cko, lko };
var __wakaru_TXi_initialized = false;
export function TXi() {
if (__wakaru_TXi_initialized) return;
__wakaru_TXi_initialized = true;
"use strict";
x(), Se(), Ar(), wde(), Pn(), Ze(), cko = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), lko = (e)=>{
    throw TypeError(e);
}, LVt = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && lko("Object expected");
        var i, r;
        n && (i = t[cko("asyncDispose")]), i === void 0 && (i = t[cko("dispose")], n && (r = i)), typeof i != "function" && lko("Object not disposable"), r && (i = function() {
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
}, NVt = (e, t, n)=>{
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
}, HFn = vn("checkoutProviderService"), avh = class extends we {
    constructor(){
        super(...arguments), this.handler = new HU;
    }
    registerHandler(e) {
        return this.handler.set(e);
    }
    async warmCheckoutBranch(e, t) {
        var n = [];
        try {
            const s = await lf(this.handler, t), o = LVt(n, mge(t));
            await s.warmCheckoutBranch(e, o.token);
        } catch (s) {
            var i = s, r = !0;
        } finally{
            NVt(n, i, r);
        }
    }
    async checkout(e, t, n, i) {
        var r = [];
        try {
            const a = await lf(this.handler, i), c = LVt(r, mge(i));
            await a.checkoutBranch(e, t, n, c.token);
        } catch (a) {
            var s = a, o = !0;
        } finally{
            NVt(r, s, o);
        }
    }
    async ensureCurrentBranchPushed(e, t) {
        var n = [];
        try {
            const s = await lf(this.handler, t), o = LVt(n, mge(t));
            await s.ensureCurrentBranchPushed(e, o.token);
        } catch (s) {
            var i = s, r = !0;
        } finally{
            NVt(n, i, r);
        }
    }
    async snapshotAndPushCurrentBranch(e, t) {
        var n = [];
        try {
            const s = await lf(this.handler, t), o = LVt(n, mge(t));
            return await s.snapshotAndPushCurrentBranch(e, o.token);
        } catch (s) {
            var i = s, r = !0;
        } finally{
            NVt(n, i, r);
        }
    }
    async hasDirtyWorkingTree(e) {
        var t = [];
        try {
            const r = await lf(this.handler, e), s = LVt(t, mge(e));
            return await r.hasDirtyWorkingTree(s.token);
        } catch (r) {
            var n = r, i = !0;
        } finally{
            NVt(t, n, i);
        }
    }
}, mn(HFn, avh, 1, 0);

}
