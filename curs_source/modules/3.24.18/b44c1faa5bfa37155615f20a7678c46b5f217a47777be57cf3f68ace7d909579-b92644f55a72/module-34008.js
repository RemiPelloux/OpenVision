"use strict";
const { MockNotMatchedError: n } = require("./module-24546.js"), { kDispatches: s, kMockAgent: o, kOriginalDispatch: i, kOrigin: a, kGetNetConnect: c } = require("./module-51476.js"), { buildURL: l, nop: u } = require("./module-83589.js"), { STATUS_CODES: d } = require("./module-58611.js"), { types: { isPromise: p } } = require("./module-39023.js");
function m(e, t) {
    return "string" == typeof e ? e === t : e instanceof RegExp ? e.test(t) : "function" == typeof e && !0 === e(t);
}
function h(e) {
    return Object.fromEntries(Object.entries(e).map(([e, t])=>[
            e.toLocaleLowerCase(),
            t
        ]));
}
function f(e, t) {
    if (!Array.isArray(e)) return "function" == typeof e.get ? e.get(t) : h(e)[t.toLocaleLowerCase()];
    for(let r = 0; r < e.length; r += 2)if (e[r].toLocaleLowerCase() === t.toLocaleLowerCase()) return e[r + 1];
}
function g(e) {
    const t = e.slice(), r = [];
    for(let e = 0; e < t.length; e += 2)r.push([
        t[e],
        t[e + 1]
    ]);
    return Object.fromEntries(r);
}
function y(e, t) {
    if ("function" == typeof e.headers) return Array.isArray(t) && (t = g(t)), e.headers(t ? h(t) : {});
    if (void 0 === e.headers) return !0;
    if ("object" != typeof t || "object" != typeof e.headers) return !1;
    for (const [r, n] of Object.entries(e.headers)){
        if (!m(n, f(t, r))) return !1;
    }
    return !0;
}
function w(e) {
    if ("string" != typeof e) return e;
    const t = e.split("?");
    if (2 !== t.length) return e;
    const r = new URLSearchParams(t.pop());
    return r.sort(), [
        ...t,
        r.toString()
    ].join("?");
}
function v(e) {
    return Buffer.isBuffer(e) ? e : "object" == typeof e ? JSON.stringify(e) : e.toString();
}
function _(e, t) {
    const r = t.query ? l(t.path, t.query) : t.path, s = "string" == typeof r ? w(r) : r;
    let o = e.filter(({ consumed: e })=>!e).filter(({ path: e })=>m(w(e), s));
    if (0 === o.length) throw new n(`Mock dispatch not matched for path '${s}'`);
    if (o = o.filter(({ method: e })=>m(e, t.method)), 0 === o.length) throw new n(`Mock dispatch not matched for method '${t.method}'`);
    if (o = o.filter(({ body: e })=>void 0 === e || m(e, t.body)), 0 === o.length) throw new n(`Mock dispatch not matched for body '${t.body}'`);
    if (o = o.filter((e)=>y(e, t.headers)), 0 === o.length) throw new n(`Mock dispatch not matched for headers '${"object" == typeof t.headers ? JSON.stringify(t.headers) : t.headers}'`);
    return o[0];
}
function A(e, t) {
    const r = e.findIndex((e)=>!!e.consumed && function(e, { path: t, method: r, body: n, headers: s }) {
            const o = m(e.path, t), i = m(e.method, r), a = void 0 === e.body || m(e.body, n), c = y(e, s);
            return o && i && a && c;
        }(e, t));
    -1 !== r && e.splice(r, 1);
}
function S(e) {
    const { path: t, method: r, body: n, headers: s, query: o } = e;
    return {
        path: t,
        method: r,
        body: n,
        headers: s,
        query: o
    };
}
function b(e) {
    return Object.entries(e).reduce((e, [t, r])=>[
            ...e,
            Buffer.from(`${t}`),
            Array.isArray(r) ? r.map((e)=>Buffer.from(`${e}`)) : Buffer.from(`${r}`)
        ], []);
}
function E(e) {
    return d[e] || "unknown";
}
function I(e, t) {
    const r = S(e), n = _(this[s], r);
    n.timesInvoked++, n.data.callback && (n.data = {
        ...n.data,
        ...n.data.callback(e)
    });
    const { data: { statusCode: o, data: i, headers: a, trailers: c, error: l }, delay: d, persist: m } = n, { timesInvoked: h, times: f } = n;
    if (n.consumed = !m && h >= f, n.pending = h < f, null !== l) return A(this[s], r), t.onError(l), !0;
    function y(n, s = i) {
        const l = Array.isArray(e.headers) ? g(e.headers) : e.headers, d = "function" == typeof s ? s({
            ...e,
            headers: l
        }) : s;
        if (p(d)) return void d.then((e)=>y(n, e));
        const m = v(d), h = b(a), f = b(c);
        t.abort = u, t.onHeaders(o, h, w, E(o)), t.onData(Buffer.from(m)), t.onComplete(f), A(n, r);
    }
    function w() {}
    return "number" == typeof d && d > 0 ? setTimeout(()=>{
        y(this[s]);
    }, d) : y(this[s]), !0;
}
function C(e, t) {
    const r = new URL(t);
    return !0 === e || !(!Array.isArray(e) || !e.some((e)=>m(e, r.host)));
}
module.exports = {
    getResponseData: v,
    getMockDispatch: _,
    addMockDispatch: function(e, t, r) {
        const n = {
            timesInvoked: 0,
            times: 1,
            persist: !1,
            consumed: !1,
            ...t,
            pending: !0,
            data: {
                error: null,
                ..."function" == typeof r ? {
                    callback: r
                } : {
                    ...r
                }
            }
        };
        return e.push(n), n;
    },
    deleteMockDispatch: A,
    buildKey: S,
    generateKeyValues: b,
    matchValue: m,
    getResponse: async function(e) {
        const t = [];
        for await (const r of e)t.push(r);
        return Buffer.concat(t).toString("utf8");
    },
    getStatusText: E,
    mockDispatch: I,
    buildMockDispatch: function() {
        const e = this[o], t = this[a], r = this[i];
        return function(s, o) {
            if (e.isMockActive) try {
                I.call(this, s, o);
            } catch (i) {
                if (!(i instanceof n)) throw i;
                {
                    const a = e[c]();
                    if (!1 === a) throw new n(`${i.message}: subsequent request to origin ${t} was not allowed (net.connect disabled)`);
                    if (!C(a, t)) throw new n(`${i.message}: subsequent request to origin ${t} was not allowed (net.connect is not enabled for this origin)`);
                    r.call(this, s, o);
                }
            }
            else r.call(this, s, o);
        };
    },
    checkNetConnect: C,
    buildMockOptions: function(e) {
        if (e) {
            const { agent: t, ...r } = e;
            return r;
        }
    },
    getHeaderByName: f
};
