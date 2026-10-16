"use strict";
const { MockNotMatchedError: n } = require("./module-1862.js"), { kDispatches: r, kMockAgent: o, kOriginalDispatch: s, kOrigin: i, kGetNetConnect: a } = require("./module-3192.js"), { buildURL: c, nop: l } = require("./module-9361.js"), { STATUS_CODES: u } = require("./module-8611.js"), { types: { isPromise: g } } = require("./module-9023.js");
function E(e, t) {
    return "string" == typeof e ? e === t : e instanceof RegExp ? e.test(t) : "function" == typeof e && !0 === e(t);
}
function h(e) {
    return Object.fromEntries(Object.entries(e).map(([e, t])=>[
            e.toLocaleLowerCase(),
            t
        ]));
}
function d(e, t) {
    if (!Array.isArray(e)) return "function" == typeof e.get ? e.get(t) : h(e)[t.toLocaleLowerCase()];
    for(let A = 0; A < e.length; A += 2)if (e[A].toLocaleLowerCase() === t.toLocaleLowerCase()) return e[A + 1];
}
function I(e) {
    const t = e.slice(), A = [];
    for(let e = 0; e < t.length; e += 2)A.push([
        t[e],
        t[e + 1]
    ]);
    return Object.fromEntries(A);
}
function B(e, t) {
    if ("function" == typeof e.headers) return Array.isArray(t) && (t = I(t)), e.headers(t ? h(t) : {});
    if (void 0 === e.headers) return !0;
    if ("object" != typeof t || "object" != typeof e.headers) return !1;
    for (const [A, n] of Object.entries(e.headers)){
        if (!E(n, d(t, A))) return !1;
    }
    return !0;
}
function Q(e) {
    if ("string" != typeof e) return e;
    const t = e.split("?");
    if (2 !== t.length) return e;
    const A = new URLSearchParams(t.pop());
    return A.sort(), [
        ...t,
        A.toString()
    ].join("?");
}
function f(e) {
    return Buffer.isBuffer(e) ? e : "object" == typeof e ? JSON.stringify(e) : e.toString();
}
function C(e, t) {
    const A = t.query ? c(t.path, t.query) : t.path, r = "string" == typeof A ? Q(A) : A;
    let o = e.filter(({ consumed: e })=>!e).filter(({ path: e })=>E(Q(e), r));
    if (0 === o.length) throw new n(`Mock dispatch not matched for path '${r}'`);
    if (o = o.filter(({ method: e })=>E(e, t.method)), 0 === o.length) throw new n(`Mock dispatch not matched for method '${t.method}'`);
    if (o = o.filter(({ body: e })=>void 0 === e || E(e, t.body)), 0 === o.length) throw new n(`Mock dispatch not matched for body '${t.body}'`);
    if (o = o.filter((e)=>B(e, t.headers)), 0 === o.length) throw new n(`Mock dispatch not matched for headers '${"object" == typeof t.headers ? JSON.stringify(t.headers) : t.headers}'`);
    return o[0];
}
function p(e, t) {
    const A = e.findIndex((e)=>!!e.consumed && function(e, { path: t, method: A, body: n, headers: r }) {
            const o = E(e.path, t), s = E(e.method, A), i = void 0 === e.body || E(e.body, n), a = B(e, r);
            return o && s && i && a;
        }(e, t));
    -1 !== A && e.splice(A, 1);
}
function m(e) {
    const { path: t, method: A, body: n, headers: r, query: o } = e;
    return {
        path: t,
        method: A,
        body: n,
        headers: r,
        query: o
    };
}
function y(e) {
    return Object.entries(e).reduce((e, [t, A])=>[
            ...e,
            Buffer.from(`${t}`),
            Array.isArray(A) ? A.map((e)=>Buffer.from(`${e}`)) : Buffer.from(`${A}`)
        ], []);
}
function w(e) {
    return u[e] || "unknown";
}
function k(e, t) {
    const A = m(e), n = C(this[r], A);
    n.timesInvoked++, n.data.callback && (n.data = {
        ...n.data,
        ...n.data.callback(e)
    });
    const { data: { statusCode: o, data: s, headers: i, trailers: a, error: c }, delay: u, persist: E } = n, { timesInvoked: h, times: d } = n;
    if (n.consumed = !E && h >= d, n.pending = h < d, null !== c) return p(this[r], A), t.onError(c), !0;
    function B(n, r = s) {
        const c = Array.isArray(e.headers) ? I(e.headers) : e.headers, u = "function" == typeof r ? r({
            ...e,
            headers: c
        }) : r;
        if (g(u)) return void u.then((e)=>B(n, e));
        const E = f(u), h = y(i), d = y(a);
        t.abort = l, t.onHeaders(o, h, Q, w(o)), t.onData(Buffer.from(E)), t.onComplete(d), p(n, A);
    }
    function Q() {}
    return "number" == typeof u && u > 0 ? setTimeout(()=>{
        B(this[r]);
    }, u) : B(this[r]), !0;
}
function b(e, t) {
    const A = new URL(t);
    return !0 === e || !(!Array.isArray(e) || !e.some((e)=>E(e, A.host)));
}
module.exports = {
    getResponseData: f,
    getMockDispatch: C,
    addMockDispatch: function(e, t, A) {
        const n = {
            timesInvoked: 0,
            times: 1,
            persist: !1,
            consumed: !1,
            ...t,
            pending: !0,
            data: {
                error: null,
                ..."function" == typeof A ? {
                    callback: A
                } : {
                    ...A
                }
            }
        };
        return e.push(n), n;
    },
    deleteMockDispatch: p,
    buildKey: m,
    generateKeyValues: y,
    matchValue: E,
    getResponse: async function(e) {
        const t = [];
        for await (const A of e)t.push(A);
        return Buffer.concat(t).toString("utf8");
    },
    getStatusText: w,
    mockDispatch: k,
    buildMockDispatch: function() {
        const e = this[o], t = this[i], A = this[s];
        return function(r, o) {
            if (e.isMockActive) try {
                k.call(this, r, o);
            } catch (s) {
                if (!(s instanceof n)) throw s;
                {
                    const i = e[a]();
                    if (!1 === i) throw new n(`${s.message}: subsequent request to origin ${t} was not allowed (net.connect disabled)`);
                    if (!b(i, t)) throw new n(`${s.message}: subsequent request to origin ${t} was not allowed (net.connect is not enabled for this origin)`);
                    A.call(this, r, o);
                }
            }
            else A.call(this, r, o);
        };
    },
    checkNetConnect: b,
    buildMockOptions: function(e) {
        if (e) {
            const { agent: t, ...A } = e;
            return A;
        }
    },
    getHeaderByName: d
};
