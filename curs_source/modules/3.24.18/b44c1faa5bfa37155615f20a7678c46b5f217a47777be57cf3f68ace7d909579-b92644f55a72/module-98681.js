"use strict";
require.d(exports, {
    L: ()=>a,
    u: ()=>c
});
var n = require("./module-8207.js"), s = require("./module-92801.js"), o = require("./module-84672.js"), i = require("./module-6682.js");
function a(e) {
    const t = (0, n.$)(e.next, e.interceptors), [r, s, o] = l(e);
    return t(Object.assign(Object.assign({}, e.req), {
        message: (0, i.S)(e.req.method.I, e.req.message),
        signal: r
    })).then((e)=>(o(), e), s);
}
function c(e) {
    const t = (0, n.$)(e.next, e.interceptors), [r, s, o] = l(e), a = Object.assign(Object.assign({}, e.req), {
        message: (0, i.u)(e.req.method.I, e.req.message),
        signal: r
    });
    let c = !1;
    return r.addEventListener("abort", function() {
        var t, r;
        const n = e.req.message[Symbol.asyncIterator]();
        c || null === (t = n.throw) || void 0 === t || t.call(n, this.reason).catch(()=>{}), null === (r = n.return) || void 0 === r || r.call(n).catch(()=>{});
    }), t(a).then((e)=>Object.assign(Object.assign({}, e), {
            message: {
                [Symbol.asyncIterator] () {
                    const t = e.message[Symbol.asyncIterator]();
                    return {
                        next: ()=>t.next().then((e)=>(1 == e.done && (c = !0, o()), e), s)
                    };
                }
            }
        }), s);
}
function l(e) {
    const { signal: t, cleanup: r } = (0, o.p2)(e.timeoutMs), n = (0, o.Ch)(e.signal, t);
    return [
        n.signal,
        function(e) {
            const i = s.T.from(t.aborted ? (0, o.xz)(t) : e);
            return n.abort(i), r(), Promise.reject(i);
        },
        function() {
            r(), n.abort();
        }
    ];
}
