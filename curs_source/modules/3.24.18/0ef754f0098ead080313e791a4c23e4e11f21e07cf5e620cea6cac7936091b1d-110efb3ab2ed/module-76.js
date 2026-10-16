"use strict";
const { MockNotMatchedError: t } = require("./module-1862.js"), { kDispatches: s, kMockAgent: o, kOriginalDispatch: r, kOrigin: i, kGetNetConnect: l } = require("./module-3192.js"), { buildURL: d, nop: m } = require("./module-9361.js"), { STATUS_CODES: c } = require("./module-8611.js"), { types: { isPromise: p } } = require("./module-9023.js");
function A(e, a) {
    return "string" == typeof e ? e === a : e instanceof RegExp ? e.test(a) : "function" == typeof e && !0 === e(a);
}
function u(e) {
    return Object.fromEntries(Object.entries(e).map(([e, a])=>[
            e.toLocaleLowerCase(),
            a
        ]));
}
function g(e, a) {
    if (!Array.isArray(e)) return "function" == typeof e.get ? e.get(a) : u(e)[a.toLocaleLowerCase()];
    for(let n = 0; n < e.length; n += 2)if (e[n].toLocaleLowerCase() === a.toLocaleLowerCase()) return e[n + 1];
}
function T(e) {
    const a = e.slice(), n = [];
    for(let e = 0; e < a.length; e += 2)n.push([
        a[e],
        a[e + 1]
    ]);
    return Object.fromEntries(n);
}
function h(e, a) {
    if ("function" == typeof e.headers) return Array.isArray(a) && (a = T(a)), e.headers(a ? u(a) : {});
    if (void 0 === e.headers) return !0;
    if ("object" != typeof a || "object" != typeof e.headers) return !1;
    for (const [n, t] of Object.entries(e.headers)){
        if (!A(t, g(a, n))) return !1;
    }
    return !0;
}
function k(e) {
    if ("string" != typeof e) return e;
    const a = e.split("?");
    if (2 !== a.length) return e;
    const n = new URLSearchParams(a.pop());
    return n.sort(), [
        ...a,
        n.toString()
    ].join("?");
}
function _(e) {
    return Buffer.isBuffer(e) ? e : "object" == typeof e ? JSON.stringify(e) : e.toString();
}
function E(e, a) {
    const n = a.query ? d(a.path, a.query) : a.path, s = "string" == typeof n ? k(n) : n;
    let o = e.filter(({ consumed: e })=>!e).filter(({ path: e })=>A(k(e), s));
    if (0 === o.length) throw new t(`Mock dispatch not matched for path '${s}'`);
    if (o = o.filter(({ method: e })=>A(e, a.method)), 0 === o.length) throw new t(`Mock dispatch not matched for method '${a.method}'`);
    if (o = o.filter(({ body: e })=>void 0 === e || A(e, a.body)), 0 === o.length) throw new t(`Mock dispatch not matched for body '${a.body}'`);
    if (o = o.filter((e)=>h(e, a.headers)), 0 === o.length) throw new t(`Mock dispatch not matched for headers '${"object" == typeof a.headers ? JSON.stringify(a.headers) : a.headers}'`);
    return o[0];
}
function f(e, a) {
    const n = e.findIndex((e)=>!!e.consumed && function(e, { path: a, method: n, body: t, headers: s }) {
            const o = A(e.path, a), r = A(e.method, n), i = void 0 === e.body || A(e.body, t), l = h(e, s);
            return o && r && i && l;
        }(e, a));
    -1 !== n && e.splice(n, 1);
}
function C(e) {
    const { path: a, method: n, body: t, headers: s, query: o } = e;
    return {
        path: a,
        method: n,
        body: t,
        headers: s,
        query: o
    };
}
function I(e) {
    return Object.entries(e).reduce((e, [a, n])=>[
            ...e,
            Buffer.from(`${a}`),
            Array.isArray(n) ? n.map((e)=>Buffer.from(`${e}`)) : Buffer.from(`${n}`)
        ], []);
}
function v(e) {
    return c[e] || "unknown";
}
function y(e, a) {
    const n = C(e), t = E(this[s], n);
    t.timesInvoked++, t.data.callback && (t.data = {
        ...t.data,
        ...t.data.callback(e)
    });
    const { data: { statusCode: o, data: r, headers: i, trailers: l, error: d }, delay: c, persist: A } = t, { timesInvoked: u, times: g } = t;
    if (t.consumed = !A && u >= g, t.pending = u < g, null !== d) return f(this[s], n), a.onError(d), !0;
    function h(t, s = r) {
        const d = Array.isArray(e.headers) ? T(e.headers) : e.headers, c = "function" == typeof s ? s({
            ...e,
            headers: d
        }) : s;
        if (p(c)) return void c.then((e)=>h(t, e));
        const A = _(c), u = I(i), g = I(l);
        a.abort = m, a.onHeaders(o, u, k, v(o)), a.onData(Buffer.from(A)), a.onComplete(g), f(t, n);
    }
    function k() {}
    return "number" == typeof c && c > 0 ? setTimeout(()=>{
        h(this[s]);
    }, c) : h(this[s]), !0;
}
function S(e, a) {
    const n = new URL(a);
    return !0 === e || !(!Array.isArray(e) || !e.some((e)=>A(e, n.host)));
}
module.exports = {
    getResponseData: _,
    getMockDispatch: E,
    addMockDispatch: function(e, a, n) {
        const t = {
            timesInvoked: 0,
            times: 1,
            persist: !1,
            consumed: !1,
            ...a,
            pending: !0,
            data: {
                error: null,
                ..."function" == typeof n ? {
                    callback: n
                } : {
                    ...n
                }
            }
        };
        return e.push(t), t;
    },
    deleteMockDispatch: f,
    buildKey: C,
    generateKeyValues: I,
    matchValue: A,
    getResponse: async function(e) {
        const a = [];
        for await (const n of e)a.push(n);
        return Buffer.concat(a).toString("utf8");
    },
    getStatusText: v,
    mockDispatch: y,
    buildMockDispatch: function() {
        const e = this[o], a = this[i], n = this[r];
        return function(s, o) {
            if (e.isMockActive) try {
                y.call(this, s, o);
            } catch (r) {
                if (!(r instanceof t)) throw r;
                {
                    const i = e[l]();
                    if (!1 === i) throw new t(`${r.message}: subsequent request to origin ${a} was not allowed (net.connect disabled)`);
                    if (!S(i, a)) throw new t(`${r.message}: subsequent request to origin ${a} was not allowed (net.connect is not enabled for this origin)`);
                    n.call(this, s, o);
                }
            }
            else n.call(this, s, o);
        };
    },
    checkNetConnect: S,
    buildMockOptions: function(e) {
        if (e) {
            const { agent: a, ...n } = e;
            return n;
        }
    },
    getHeaderByName: g
};
