"use strict";
require.d(exports, {
    L: ()=>a,
    u: ()=>u
});
var n = require("./module-6962.js"), s = require("./module-328.js"), i = require("./module-9983.js"), o = require("./module-1097.js");
function a(t) {
    const e = (0, n.$)(t.next, t.interceptors), [r, s, i] = c(t);
    return e(Object.assign(Object.assign({}, t.req), {
        message: (0, o.S)(t.req.method.I, t.req.message),
        signal: r
    })).then((t)=>(i(), t), s);
}
function u(t) {
    const e = (0, n.$)(t.next, t.interceptors), [r, s, i] = c(t), a = Object.assign(Object.assign({}, t.req), {
        message: (0, o.u)(t.req.method.I, t.req.message),
        signal: r
    });
    let u = !1;
    return r.addEventListener("abort", function() {
        var e, r;
        const n = t.req.message[Symbol.asyncIterator]();
        u || null === (e = n.throw) || void 0 === e || e.call(n, this.reason).catch(()=>{}), null === (r = n.return) || void 0 === r || r.call(n).catch(()=>{});
    }), e(a).then((t)=>Object.assign(Object.assign({}, t), {
            message: {
                [Symbol.asyncIterator] () {
                    const e = t.message[Symbol.asyncIterator]();
                    return {
                        next: ()=>e.next().then((t)=>(1 == t.done && (u = !0, i()), t), s)
                    };
                }
            }
        }), s);
}
function c(t) {
    const { signal: e, cleanup: r } = (0, i.p2)(t.timeoutMs), n = (0, i.Ch)(t.signal, e);
    return [
        n.signal,
        function(t) {
            const o = s.T.from(e.aborted ? (0, i.xz)(e) : t);
            return n.abort(o), r(), Promise.reject(o);
        },
        function() {
            r(), n.abort();
        }
    ];
}
