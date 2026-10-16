"use strict";
const { MockNotMatchedError: n } = require("./module-4546.js"), { kDispatches: s, kMockAgent: i, kOriginalDispatch: o, kOrigin: a, kGetNetConnect: u } = require("./module-1476.js"), { buildURL: c, nop: l } = require("./module-3589.js"), { STATUS_CODES: m } = require("./module-8611.js"), { types: { isPromise: d } } = require("./module-9023.js");
function f(t, e) {
    return "string" == typeof t ? t === e : t instanceof RegExp ? t.test(e) : "function" == typeof t && !0 === t(e);
}
function p(t) {
    return Object.fromEntries(Object.entries(t).map(([t, e])=>[
            t.toLocaleLowerCase(),
            e
        ]));
}
function h(t, e) {
    if (!Array.isArray(t)) return "function" == typeof t.get ? t.get(e) : p(t)[e.toLocaleLowerCase()];
    for(let r = 0; r < t.length; r += 2)if (t[r].toLocaleLowerCase() === e.toLocaleLowerCase()) return t[r + 1];
}
function g(t) {
    const e = t.slice(), r = [];
    for(let t = 0; t < e.length; t += 2)r.push([
        e[t],
        e[t + 1]
    ]);
    return Object.fromEntries(r);
}
function A(t, e) {
    if ("function" == typeof t.headers) return Array.isArray(e) && (e = g(e)), t.headers(e ? p(e) : {});
    if (void 0 === t.headers) return !0;
    if ("object" != typeof e || "object" != typeof t.headers) return !1;
    for (const [r, n] of Object.entries(t.headers)){
        if (!f(n, h(e, r))) return !1;
    }
    return !0;
}
function _(t) {
    if ("string" != typeof t) return t;
    const e = t.split("?");
    if (2 !== e.length) return t;
    const r = new URLSearchParams(e.pop());
    return r.sort(), [
        ...e,
        r.toString()
    ].join("?");
}
function y(t) {
    return Buffer.isBuffer(t) ? t : "object" == typeof t ? JSON.stringify(t) : t.toString();
}
function w(t, e) {
    const r = e.query ? c(e.path, e.query) : e.path, s = "string" == typeof r ? _(r) : r;
    let i = t.filter(({ consumed: t })=>!t).filter(({ path: t })=>f(_(t), s));
    if (0 === i.length) throw new n(`Mock dispatch not matched for path '${s}'`);
    if (i = i.filter(({ method: t })=>f(t, e.method)), 0 === i.length) throw new n(`Mock dispatch not matched for method '${e.method}'`);
    if (i = i.filter(({ body: t })=>void 0 === t || f(t, e.body)), 0 === i.length) throw new n(`Mock dispatch not matched for body '${e.body}'`);
    if (i = i.filter((t)=>A(t, e.headers)), 0 === i.length) throw new n(`Mock dispatch not matched for headers '${"object" == typeof e.headers ? JSON.stringify(e.headers) : e.headers}'`);
    return i[0];
}
function S(t, e) {
    const r = t.findIndex((t)=>!!t.consumed && function(t, { path: e, method: r, body: n, headers: s }) {
            const i = f(t.path, e), o = f(t.method, r), a = void 0 === t.body || f(t.body, n), u = A(t, s);
            return i && o && a && u;
        }(t, e));
    -1 !== r && t.splice(r, 1);
}
function J(t) {
    const { path: e, method: r, body: n, headers: s, query: i } = t;
    return {
        path: e,
        method: r,
        body: n,
        headers: s,
        query: i
    };
}
function B(t) {
    return Object.entries(t).reduce((t, [e, r])=>[
            ...t,
            Buffer.from(`${e}`),
            Array.isArray(r) ? r.map((t)=>Buffer.from(`${t}`)) : Buffer.from(`${r}`)
        ], []);
}
function E(t) {
    return m[t] || "unknown";
}
function I(t, e) {
    const r = J(t), n = w(this[s], r);
    n.timesInvoked++, n.data.callback && (n.data = {
        ...n.data,
        ...n.data.callback(t)
    });
    const { data: { statusCode: i, data: o, headers: a, trailers: u, error: c }, delay: m, persist: f } = n, { timesInvoked: p, times: h } = n;
    if (n.consumed = !f && p >= h, n.pending = p < h, null !== c) return S(this[s], r), e.onError(c), !0;
    function A(n, s = o) {
        const c = Array.isArray(t.headers) ? g(t.headers) : t.headers, m = "function" == typeof s ? s({
            ...t,
            headers: c
        }) : s;
        if (d(m)) return void m.then((t)=>A(n, t));
        const f = y(m), p = B(a), h = B(u);
        e.abort = l, e.onHeaders(i, p, _, E(i)), e.onData(Buffer.from(f)), e.onComplete(h), S(n, r);
    }
    function _() {}
    return "number" == typeof m && m > 0 ? setTimeout(()=>{
        A(this[s]);
    }, m) : A(this[s]), !0;
}
function C(t, e) {
    const r = new URL(e);
    return !0 === t || !(!Array.isArray(t) || !t.some((t)=>f(t, r.host)));
}
module.exports = {
    getResponseData: y,
    getMockDispatch: w,
    addMockDispatch: function(t, e, r) {
        const n = {
            timesInvoked: 0,
            times: 1,
            persist: !1,
            consumed: !1,
            ...e,
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
        return t.push(n), n;
    },
    deleteMockDispatch: S,
    buildKey: J,
    generateKeyValues: B,
    matchValue: f,
    getResponse: async function(t) {
        const e = [];
        for await (const r of t)e.push(r);
        return Buffer.concat(e).toString("utf8");
    },
    getStatusText: E,
    mockDispatch: I,
    buildMockDispatch: function() {
        const t = this[i], e = this[a], r = this[o];
        return function(s, i) {
            if (t.isMockActive) try {
                I.call(this, s, i);
            } catch (o) {
                if (!(o instanceof n)) throw o;
                {
                    const a = t[u]();
                    if (!1 === a) throw new n(`${o.message}: subsequent request to origin ${e} was not allowed (net.connect disabled)`);
                    if (!C(a, e)) throw new n(`${o.message}: subsequent request to origin ${e} was not allowed (net.connect is not enabled for this origin)`);
                    r.call(this, s, i);
                }
            }
            else r.call(this, s, i);
        };
    },
    checkNetConnect: C,
    buildMockOptions: function(t) {
        if (t) {
            const { agent: e, ...r } = t;
            return r;
        }
    },
    getHeaderByName: h
};
