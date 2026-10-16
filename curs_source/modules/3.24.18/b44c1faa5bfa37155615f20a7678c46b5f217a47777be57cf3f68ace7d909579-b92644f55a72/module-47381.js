"use strict";
require.d(exports, {
    $W: ()=>a,
    GT: ()=>o,
    cr: ()=>i,
    tm: ()=>n,
    xI: ()=>s
});
const n = Object.freeze({
    status: "aborted"
});
function s(e, t, r) {
    function n(r, n) {
        var s;
        Object.defineProperty(r, "_zod", {
            value: r._zod ?? {},
            enumerable: !1
        }), (s = r._zod).traits ?? (s.traits = new Set), r._zod.traits.add(e), t(r, n);
        for(const e in i.prototype)e in r || Object.defineProperty(r, e, {
            value: i.prototype[e].bind(r)
        });
        r._zod.constr = i, r._zod.def = n;
    }
    const s = r?.Parent ?? Object;
    class o extends s {
    }
    function i(e) {
        var t;
        const s = r?.Parent ? new o : this;
        n(s, e), (t = s._zod).deferred ?? (t.deferred = []);
        for (const e of s._zod.deferred)e();
        return s;
    }
    return Object.defineProperty(o, "name", {
        value: e
    }), Object.defineProperty(i, "init", {
        value: n
    }), Object.defineProperty(i, Symbol.hasInstance, {
        value: (t)=>!!(r?.Parent && t instanceof r.Parent) || t?._zod?.traits?.has(e)
    }), Object.defineProperty(i, "name", {
        value: e
    }), i;
}
Symbol("zod_brand");
class o extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
const i = {};
function a(e) {
    return e && Object.assign(i, e), i;
}
