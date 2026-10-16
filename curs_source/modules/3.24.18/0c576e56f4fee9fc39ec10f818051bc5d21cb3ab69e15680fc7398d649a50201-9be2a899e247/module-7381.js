"use strict";
require.d(exports, {
    $W: ()=>a,
    GT: ()=>s,
    cr: ()=>i,
    tm: ()=>n,
    xI: ()=>o
});
const n = Object.freeze({
    status: "aborted"
});
function o(e, t, r) {
    function n(r, n) {
        var o;
        Object.defineProperty(r, "_zod", {
            value: r._zod ?? {},
            enumerable: !1
        }), (o = r._zod).traits ?? (o.traits = new Set), r._zod.traits.add(e), t(r, n);
        for(const e in i.prototype)e in r || Object.defineProperty(r, e, {
            value: i.prototype[e].bind(r)
        });
        r._zod.constr = i, r._zod.def = n;
    }
    const o = r?.Parent ?? Object;
    class s extends o {
    }
    function i(e) {
        var t;
        const o = r?.Parent ? new s : this;
        n(o, e), (t = o._zod).deferred ?? (t.deferred = []);
        for (const e of o._zod.deferred)e();
        return o;
    }
    return Object.defineProperty(s, "name", {
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
class s extends Error {
    constructor(){
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
}
const i = {};
function a(e) {
    return e && Object.assign(i, e), i;
}
