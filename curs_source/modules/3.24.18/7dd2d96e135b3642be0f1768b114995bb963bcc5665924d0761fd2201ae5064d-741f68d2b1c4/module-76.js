"use strict";
const { MockNotMatchedError: a } = require("./module-1862.js"), { kDispatches: s, kMockAgent: o, kOriginalDispatch: r, kOrigin: i, kGetNetConnect: A } = require("./module-3192.js"), { buildURL: c, nop: l } = require("./module-9361.js"), { STATUS_CODES: d } = require("./module-8611.js"), { types: { isPromise: m } } = require("./module-9023.js");
function u(e, n) {
    return "string" == typeof e ? e === n : e instanceof RegExp ? e.test(n) : "function" == typeof e && !0 === e(n);
}
function g(e) {
    return Object.fromEntries(Object.entries(e).map(([e, n])=>[
            e.toLocaleLowerCase(),
            n
        ]));
}
function p(e, n) {
    if (!Array.isArray(e)) return "function" == typeof e.get ? e.get(n) : g(e)[n.toLocaleLowerCase()];
    for(let t = 0; t < e.length; t += 2)if (e[t].toLocaleLowerCase() === n.toLocaleLowerCase()) return e[t + 1];
}
function E(e) {
    const n = e.slice(), t = [];
    for(let e = 0; e < n.length; e += 2)t.push([
        n[e],
        n[e + 1]
    ]);
    return Object.fromEntries(t);
}
function h(e, n) {
    if ("function" == typeof e.headers) return Array.isArray(n) && (n = E(n)), e.headers(n ? g(n) : {});
    if (void 0 === e.headers) return !0;
    if ("object" != typeof n || "object" != typeof e.headers) return !1;
    for (const [t, a] of Object.entries(e.headers)){
        if (!u(a, p(n, t))) return !1;
    }
    return !0;
}
function T(e) {
    if ("string" != typeof e) return e;
    const n = e.split("?");
    if (2 !== n.length) return e;
    const t = new URLSearchParams(n.pop());
    return t.sort(), [
        ...n,
        t.toString()
    ].join("?");
}
function k(e) {
    return Buffer.isBuffer(e) ? e : "object" == typeof e ? JSON.stringify(e) : e.toString();
}
function f(e, n) {
    const t = n.query ? c(n.path, n.query) : n.path, s = "string" == typeof t ? T(t) : t;
    let o = e.filter(({ consumed: e })=>!e).filter(({ path: e })=>u(T(e), s));
    if (0 === o.length) throw new a(`Mock dispatch not matched for path '${s}'`);
    if (o = o.filter(({ method: e })=>u(e, n.method)), 0 === o.length) throw new a(`Mock dispatch not matched for method '${n.method}'`);
    if (o = o.filter(({ body: e })=>void 0 === e || u(e, n.body)), 0 === o.length) throw new a(`Mock dispatch not matched for body '${n.body}'`);
    if (o = o.filter((e)=>h(e, n.headers)), 0 === o.length) throw new a(`Mock dispatch not matched for headers '${"object" == typeof n.headers ? JSON.stringify(n.headers) : n.headers}'`);
    return o[0];
}
function _(e, n) {
    const t = e.findIndex((e)=>!!e.consumed && function(e, { path: n, method: t, body: a, headers: s }) {
            const o = u(e.path, n), r = u(e.method, t), i = void 0 === e.body || u(e.body, a), A = h(e, s);
            return o && r && i && A;
        }(e, n));
    -1 !== t && e.splice(t, 1);
}
function I(e) {
    const { path: n, method: t, body: a, headers: s, query: o } = e;
    return {
        path: n,
        method: t,
        body: a,
        headers: s,
        query: o
    };
}
function C(e) {
    return Object.entries(e).reduce((e, [n, t])=>[
            ...e,
            Buffer.from(`${n}`),
            Array.isArray(t) ? t.map((e)=>Buffer.from(`${e}`)) : Buffer.from(`${t}`)
        ], []);
}
function y(e) {
    return d[e] || "unknown";
}
function B(e, n) {
    const t = I(e), a = f(this[s], t);
    a.timesInvoked++, a.data.callback && (a.data = {
        ...a.data,
        ...a.data.callback(e)
    });
    const { data: { statusCode: o, data: r, headers: i, trailers: A, error: c }, delay: d, persist: u } = a, { timesInvoked: g, times: p } = a;
    if (a.consumed = !u && g >= p, a.pending = g < p, null !== c) return _(this[s], t), n.onError(c), !0;
    function h(a, s = r) {
        const c = Array.isArray(e.headers) ? E(e.headers) : e.headers, d = "function" == typeof s ? s({
            ...e,
            headers: c
        }) : s;
        if (m(d)) return void d.then((e)=>h(a, e));
        const u = k(d), g = C(i), p = C(A);
        n.abort = l, n.onHeaders(o, g, T, y(o)), n.onData(Buffer.from(u)), n.onComplete(p), _(a, t);
    }
    function T() {}
    return "number" == typeof d && d > 0 ? setTimeout(()=>{
        h(this[s]);
    }, d) : h(this[s]), !0;
}
function Q(e, n) {
    const t = new URL(n);
    return !0 === e || !(!Array.isArray(e) || !e.some((e)=>u(e, t.host)));
}
module.exports = {
    getResponseData: k,
    getMockDispatch: f,
    addMockDispatch: function(e, n, t) {
        const a = {
            timesInvoked: 0,
            times: 1,
            persist: !1,
            consumed: !1,
            ...n,
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
        return e.push(a), a;
    },
    deleteMockDispatch: _,
    buildKey: I,
    generateKeyValues: C,
    matchValue: u,
    getResponse: async function(e) {
        const n = [];
        for await (const t of e)n.push(t);
        return Buffer.concat(n).toString("utf8");
    },
    getStatusText: y,
    mockDispatch: B,
    buildMockDispatch: function() {
        const e = this[o], n = this[i], t = this[r];
        return function(s, o) {
            if (e.isMockActive) try {
                B.call(this, s, o);
            } catch (r) {
                if (!(r instanceof a)) throw r;
                {
                    const i = e[A]();
                    if (!1 === i) throw new a(`${r.message}: subsequent request to origin ${n} was not allowed (net.connect disabled)`);
                    if (!Q(i, n)) throw new a(`${r.message}: subsequent request to origin ${n} was not allowed (net.connect is not enabled for this origin)`);
                    t.call(this, s, o);
                }
            }
            else t.call(this, s, o);
        };
    },
    checkNetConnect: Q,
    buildMockOptions: function(e) {
        if (e) {
            const { agent: n, ...t } = e;
            return t;
        }
    },
    getHeaderByName: p
};
