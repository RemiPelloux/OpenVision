"use strict";
const { MockNotMatchedError: n } = require("./module-1862.js"), { kDispatches: r, kMockAgent: o, kOriginalDispatch: s, kOrigin: a, kGetNetConnect: i } = require("./module-3192.js"), { buildURL: c, nop: l } = require("./module-9361.js"), { STATUS_CODES: g } = require("./module-8611.js"), { types: { isPromise: E } } = require("./module-9023.js");
function u(e, A) {
    return "string" == typeof e ? e === A : e instanceof RegExp ? e.test(A) : "function" == typeof e && !0 === e(A);
}
function d(e) {
    return Object.fromEntries(Object.entries(e).map(([e, A])=>[
            e.toLocaleLowerCase(),
            A
        ]));
}
function I(e, A) {
    if (!Array.isArray(e)) return "function" == typeof e.get ? e.get(A) : d(e)[A.toLocaleLowerCase()];
    for(let t = 0; t < e.length; t += 2)if (e[t].toLocaleLowerCase() === A.toLocaleLowerCase()) return e[t + 1];
}
function h(e) {
    const A = e.slice(), t = [];
    for(let e = 0; e < A.length; e += 2)t.push([
        A[e],
        A[e + 1]
    ]);
    return Object.fromEntries(t);
}
function Q(e, A) {
    if ("function" == typeof e.headers) return Array.isArray(A) && (A = h(A)), e.headers(A ? d(A) : {});
    if (void 0 === e.headers) return !0;
    if ("object" != typeof A || "object" != typeof e.headers) return !1;
    for (const [t, n] of Object.entries(e.headers)){
        if (!u(n, I(A, t))) return !1;
    }
    return !0;
}
function m(e) {
    if ("string" != typeof e) return e;
    const A = e.split("?");
    if (2 !== A.length) return e;
    const t = new URLSearchParams(A.pop());
    return t.sort(), [
        ...A,
        t.toString()
    ].join("?");
}
function C(e) {
    return Buffer.isBuffer(e) ? e : "object" == typeof e ? JSON.stringify(e) : e.toString();
}
function B(e, A) {
    const t = A.query ? c(A.path, A.query) : A.path, r = "string" == typeof t ? m(t) : t;
    let o = e.filter(({ consumed: e })=>!e).filter(({ path: e })=>u(m(e), r));
    if (0 === o.length) throw new n(`Mock dispatch not matched for path '${r}'`);
    if (o = o.filter(({ method: e })=>u(e, A.method)), 0 === o.length) throw new n(`Mock dispatch not matched for method '${A.method}'`);
    if (o = o.filter(({ body: e })=>void 0 === e || u(e, A.body)), 0 === o.length) throw new n(`Mock dispatch not matched for body '${A.body}'`);
    if (o = o.filter((e)=>Q(e, A.headers)), 0 === o.length) throw new n(`Mock dispatch not matched for headers '${"object" == typeof A.headers ? JSON.stringify(A.headers) : A.headers}'`);
    return o[0];
}
function p(e, A) {
    const t = e.findIndex((e)=>!!e.consumed && function(e, { path: A, method: t, body: n, headers: r }) {
            const o = u(e.path, A), s = u(e.method, t), a = void 0 === e.body || u(e.body, n), i = Q(e, r);
            return o && s && a && i;
        }(e, A));
    -1 !== t && e.splice(t, 1);
}
function f(e) {
    const { path: A, method: t, body: n, headers: r, query: o } = e;
    return {
        path: A,
        method: t,
        body: n,
        headers: r,
        query: o
    };
}
function y(e) {
    return Object.entries(e).reduce((e, [A, t])=>[
            ...e,
            Buffer.from(`${A}`),
            Array.isArray(t) ? t.map((e)=>Buffer.from(`${e}`)) : Buffer.from(`${t}`)
        ], []);
}
function T(e) {
    return g[e] || "unknown";
}
function k(e, A) {
    const t = f(e), n = B(this[r], t);
    n.timesInvoked++, n.data.callback && (n.data = {
        ...n.data,
        ...n.data.callback(e)
    });
    const { data: { statusCode: o, data: s, headers: a, trailers: i, error: c }, delay: g, persist: u } = n, { timesInvoked: d, times: I } = n;
    if (n.consumed = !u && d >= I, n.pending = d < I, null !== c) return p(this[r], t), A.onError(c), !0;
    function Q(n, r = s) {
        const c = Array.isArray(e.headers) ? h(e.headers) : e.headers, g = "function" == typeof r ? r({
            ...e,
            headers: c
        }) : r;
        if (E(g)) return void g.then((e)=>Q(n, e));
        const u = C(g), d = y(a), I = y(i);
        A.abort = l, A.onHeaders(o, d, m, T(o)), A.onData(Buffer.from(u)), A.onComplete(I), p(n, t);
    }
    function m() {}
    return "number" == typeof g && g > 0 ? setTimeout(()=>{
        Q(this[r]);
    }, g) : Q(this[r]), !0;
}
function w(e, A) {
    const t = new URL(A);
    return !0 === e || !(!Array.isArray(e) || !e.some((e)=>u(e, t.host)));
}
module.exports = {
    getResponseData: C,
    getMockDispatch: B,
    addMockDispatch: function(e, A, t) {
        const n = {
            timesInvoked: 0,
            times: 1,
            persist: !1,
            consumed: !1,
            ...A,
            pending: !0,
            data: {
                error: null,
                ..."function" == typeof t ? {
                    callback: t
                } : {
                    ...t
                }
            }
        };
        return e.push(n), n;
    },
    deleteMockDispatch: p,
    buildKey: f,
    generateKeyValues: y,
    matchValue: u,
    getResponse: async function(e) {
        const A = [];
        for await (const t of e)A.push(t);
        return Buffer.concat(A).toString("utf8");
    },
    getStatusText: T,
    mockDispatch: k,
    buildMockDispatch: function() {
        const e = this[o], A = this[a], t = this[s];
        return function(r, o) {
            if (e.isMockActive) try {
                k.call(this, r, o);
            } catch (s) {
                if (!(s instanceof n)) throw s;
                {
                    const a = e[i]();
                    if (!1 === a) throw new n(`${s.message}: subsequent request to origin ${A} was not allowed (net.connect disabled)`);
                    if (!w(a, A)) throw new n(`${s.message}: subsequent request to origin ${A} was not allowed (net.connect is not enabled for this origin)`);
                    t.call(this, r, o);
                }
            }
            else t.call(this, r, o);
        };
    },
    checkNetConnect: w,
    buildMockOptions: function(e) {
        if (e) {
            const { agent: A, ...t } = e;
            return t;
        }
    },
    getHeaderByName: I
};
