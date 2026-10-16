"use strict";
const { MockNotMatchedError: t } = require("./module-1862.js"), { kDispatches: s, kMockAgent: o, kOriginalDispatch: r, kOrigin: i, kGetNetConnect: A } = require("./module-3192.js"), { buildURL: l, nop: c } = require("./module-9361.js"), { STATUS_CODES: m } = require("./module-8611.js"), { types: { isPromise: d } } = require("./module-9023.js");
function g(e, n) {
    return "string" == typeof e ? e === n : e instanceof RegExp ? e.test(n) : "function" == typeof e && !0 === e(n);
}
function u(e) {
    return Object.fromEntries(Object.entries(e).map(([e, n])=>[
            e.toLocaleLowerCase(),
            n
        ]));
}
function E(e, n) {
    if (!Array.isArray(e)) return "function" == typeof e.get ? e.get(n) : u(e)[n.toLocaleLowerCase()];
    for(let a = 0; a < e.length; a += 2)if (e[a].toLocaleLowerCase() === n.toLocaleLowerCase()) return e[a + 1];
}
function p(e) {
    const n = e.slice(), a = [];
    for(let e = 0; e < n.length; e += 2)a.push([
        n[e],
        n[e + 1]
    ]);
    return Object.fromEntries(a);
}
function T(e, n) {
    if ("function" == typeof e.headers) return Array.isArray(n) && (n = p(n)), e.headers(n ? u(n) : {});
    if (void 0 === e.headers) return !0;
    if ("object" != typeof n || "object" != typeof e.headers) return !1;
    for (const [a, t] of Object.entries(e.headers)){
        if (!g(t, E(n, a))) return !1;
    }
    return !0;
}
function k(e) {
    if ("string" != typeof e) return e;
    const n = e.split("?");
    if (2 !== n.length) return e;
    const a = new URLSearchParams(n.pop());
    return a.sort(), [
        ...n,
        a.toString()
    ].join("?");
}
function I(e) {
    return Buffer.isBuffer(e) ? e : "object" == typeof e ? JSON.stringify(e) : e.toString();
}
function h(e, n) {
    const a = n.query ? l(n.path, n.query) : n.path, s = "string" == typeof a ? k(a) : a;
    let o = e.filter(({ consumed: e })=>!e).filter(({ path: e })=>g(k(e), s));
    if (0 === o.length) throw new t(`Mock dispatch not matched for path '${s}'`);
    if (o = o.filter(({ method: e })=>g(e, n.method)), 0 === o.length) throw new t(`Mock dispatch not matched for method '${n.method}'`);
    if (o = o.filter(({ body: e })=>void 0 === e || g(e, n.body)), 0 === o.length) throw new t(`Mock dispatch not matched for body '${n.body}'`);
    if (o = o.filter((e)=>T(e, n.headers)), 0 === o.length) throw new t(`Mock dispatch not matched for headers '${"object" == typeof n.headers ? JSON.stringify(n.headers) : n.headers}'`);
    return o[0];
}
function _(e, n) {
    const a = e.findIndex((e)=>!!e.consumed && function(e, { path: n, method: a, body: t, headers: s }) {
            const o = g(e.path, n), r = g(e.method, a), i = void 0 === e.body || g(e.body, t), A = T(e, s);
            return o && r && i && A;
        }(e, n));
    -1 !== a && e.splice(a, 1);
}
function C(e) {
    const { path: n, method: a, body: t, headers: s, query: o } = e;
    return {
        path: n,
        method: a,
        body: t,
        headers: s,
        query: o
    };
}
function f(e) {
    return Object.entries(e).reduce((e, [n, a])=>[
            ...e,
            Buffer.from(`${n}`),
            Array.isArray(a) ? a.map((e)=>Buffer.from(`${e}`)) : Buffer.from(`${a}`)
        ], []);
}
function B(e) {
    return m[e] || "unknown";
}
function Q(e, n) {
    const a = C(e), t = h(this[s], a);
    t.timesInvoked++, t.data.callback && (t.data = {
        ...t.data,
        ...t.data.callback(e)
    });
    const { data: { statusCode: o, data: r, headers: i, trailers: A, error: l }, delay: m, persist: g } = t, { timesInvoked: u, times: E } = t;
    if (t.consumed = !g && u >= E, t.pending = u < E, null !== l) return _(this[s], a), n.onError(l), !0;
    function T(t, s = r) {
        const l = Array.isArray(e.headers) ? p(e.headers) : e.headers, m = "function" == typeof s ? s({
            ...e,
            headers: l
        }) : s;
        if (d(m)) return void m.then((e)=>T(t, e));
        const g = I(m), u = f(i), E = f(A);
        n.abort = c, n.onHeaders(o, u, k, B(o)), n.onData(Buffer.from(g)), n.onComplete(E), _(t, a);
    }
    function k() {}
    return "number" == typeof m && m > 0 ? setTimeout(()=>{
        T(this[s]);
    }, m) : T(this[s]), !0;
}
function y(e, n) {
    const a = new URL(n);
    return !0 === e || !(!Array.isArray(e) || !e.some((e)=>g(e, a.host)));
}
module.exports = {
    getResponseData: I,
    getMockDispatch: h,
    addMockDispatch: function(e, n, a) {
        const t = {
            timesInvoked: 0,
            times: 1,
            persist: !1,
            consumed: !1,
            ...n,
            pending: !0,
            data: {
                error: null,
                ..."function" == typeof a ? {
                    callback: a
                } : {
                    ...a
                }
            }
        };
        return e.push(t), t;
    },
    deleteMockDispatch: _,
    buildKey: C,
    generateKeyValues: f,
    matchValue: g,
    getResponse: async function(e) {
        const n = [];
        for await (const a of e)n.push(a);
        return Buffer.concat(n).toString("utf8");
    },
    getStatusText: B,
    mockDispatch: Q,
    buildMockDispatch: function() {
        const e = this[o], n = this[i], a = this[r];
        return function(s, o) {
            if (e.isMockActive) try {
                Q.call(this, s, o);
            } catch (r) {
                if (!(r instanceof t)) throw r;
                {
                    const i = e[A]();
                    if (!1 === i) throw new t(`${r.message}: subsequent request to origin ${n} was not allowed (net.connect disabled)`);
                    if (!y(i, n)) throw new t(`${r.message}: subsequent request to origin ${n} was not allowed (net.connect is not enabled for this origin)`);
                    a.call(this, s, o);
                }
            }
            else a.call(this, s, o);
        };
    },
    checkNetConnect: y,
    buildMockOptions: function(e) {
        if (e) {
            const { agent: n, ...a } = e;
            return a;
        }
    },
    getHeaderByName: E
};
