"use strict";
const { MockNotMatchedError: r } = require("./module-33078.js"), { kDispatches: s, kMockAgent: o, kOriginalDispatch: n, kOrigin: i, kGetNetConnect: a } = require("./module-53304.js"), { buildURL: Q } = require("./module-55201.js"), { STATUS_CODES: g } = require(37067), { types: { isPromise: E } } = require(57975);
function B(A, e) {
    return "string" == typeof A ? A === e : A instanceof RegExp ? A.test(e) : "function" == typeof A && !0 === A(e);
}
function c(A) {
    return Object.fromEntries(Object.entries(A).map(([A, e])=>[
            A.toLocaleLowerCase(),
            e
        ]));
}
function I(A, e) {
    if (!Array.isArray(A)) return "function" == typeof A.get ? A.get(e) : c(A)[e.toLocaleLowerCase()];
    for(let t = 0; t < A.length; t += 2)if (A[t].toLocaleLowerCase() === e.toLocaleLowerCase()) return A[t + 1];
}
function C(A) {
    const e = A.slice(), t = [];
    for(let A = 0; A < e.length; A += 2)t.push([
        e[A],
        e[A + 1]
    ]);
    return Object.fromEntries(t);
}
function h(A, e) {
    if ("function" == typeof A.headers) return Array.isArray(e) && (e = C(e)), A.headers(e ? c(e) : {});
    if (void 0 === A.headers) return !0;
    if ("object" != typeof e || "object" != typeof A.headers) return !1;
    for (const [t, r] of Object.entries(A.headers)){
        if (!B(r, I(e, t))) return !1;
    }
    return !0;
}
function l(A) {
    if ("string" != typeof A) return A;
    const e = A.split("?");
    if (2 !== e.length) return A;
    const t = new URLSearchParams(e.pop());
    return t.sort(), [
        ...e,
        t.toString()
    ].join("?");
}
function u(A) {
    return Buffer.isBuffer(A) || A instanceof Uint8Array || A instanceof ArrayBuffer ? A : "object" == typeof A ? JSON.stringify(A) : A.toString();
}
function d(A, e) {
    const t = e.query ? Q(e.path, e.query) : e.path, s = "string" == typeof t ? l(t) : t;
    let o = A.filter(({ consumed: A })=>!A).filter(({ path: A })=>B(l(A), s));
    if (0 === o.length) throw new r(`Mock dispatch not matched for path '${s}'`);
    if (o = o.filter(({ method: A })=>B(A, e.method)), 0 === o.length) throw new r(`Mock dispatch not matched for method '${e.method}' on path '${s}'`);
    if (o = o.filter(({ body: A })=>void 0 === A || B(A, e.body)), 0 === o.length) throw new r(`Mock dispatch not matched for body '${e.body}' on path '${s}'`);
    if (o = o.filter((A)=>h(A, e.headers)), 0 === o.length) {
        const A = "object" == typeof e.headers ? JSON.stringify(e.headers) : e.headers;
        throw new r(`Mock dispatch not matched for headers '${A}' on path '${s}'`);
    }
    return o[0];
}
function f(A, e) {
    const t = A.findIndex((A)=>!!A.consumed && function(A, { path: e, method: t, body: r, headers: s }) {
            const o = B(A.path, e), n = B(A.method, t), i = void 0 === A.body || B(A.body, r), a = h(A, s);
            return o && n && i && a;
        }(A, e));
    -1 !== t && A.splice(t, 1);
}
function w(A) {
    const { path: e, method: t, body: r, headers: s, query: o } = A;
    return {
        path: e,
        method: t,
        body: r,
        headers: s,
        query: o
    };
}
function y(A) {
    const e = Object.keys(A), t = [];
    for(let r = 0; r < e.length; ++r){
        const s = e[r], o = A[s], n = Buffer.from(`${s}`);
        if (Array.isArray(o)) for(let A = 0; A < o.length; ++A)t.push(n, Buffer.from(`${o[A]}`));
        else t.push(n, Buffer.from(`${o}`));
    }
    return t;
}
function D(A) {
    return g[A] || "unknown";
}
function p(A, e) {
    const t = w(A), r = d(this[s], t);
    r.timesInvoked++, r.data.callback && (r.data = {
        ...r.data,
        ...r.data.callback(A)
    });
    const { data: { statusCode: o, data: n, headers: i, trailers: a, error: Q }, delay: g, persist: B } = r, { timesInvoked: c, times: I } = r;
    if (r.consumed = !B && c >= I, r.pending = c < I, null !== Q) return f(this[s], t), e.onError(Q), !0;
    function h(r, s = n) {
        const Q = Array.isArray(A.headers) ? C(A.headers) : A.headers, g = "function" == typeof s ? s({
            ...A,
            headers: Q
        }) : s;
        if (E(g)) return void g.then((A)=>h(r, A));
        const B = u(g), c = y(i), I = y(a);
        e.onConnect?.((A)=>e.onError(A), null), e.onHeaders?.(o, c, l, D(o)), e.onData?.(Buffer.from(B)), e.onComplete?.(I), f(r, t);
    }
    function l() {}
    return "number" == typeof g && g > 0 ? setTimeout(()=>{
        h(this[s]);
    }, g) : h(this[s]), !0;
}
function k(A, e) {
    const t = new URL(e);
    return !0 === A || !(!Array.isArray(A) || !A.some((A)=>B(A, t.host)));
}
module.exports = {
    getResponseData: u,
    getMockDispatch: d,
    addMockDispatch: function(A, e, t) {
        const r = {
            timesInvoked: 0,
            times: 1,
            persist: !1,
            consumed: !1,
            ...e,
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
        return A.push(r), r;
    },
    deleteMockDispatch: f,
    buildKey: w,
    generateKeyValues: y,
    matchValue: B,
    getResponse: async function(A) {
        const e = [];
        for await (const t of A)e.push(t);
        return Buffer.concat(e).toString("utf8");
    },
    getStatusText: D,
    mockDispatch: p,
    buildMockDispatch: function() {
        const A = this[o], e = this[i], t = this[n];
        return function(s, o) {
            if (A.isMockActive) try {
                p.call(this, s, o);
            } catch (n) {
                if (!(n instanceof r)) throw n;
                {
                    const i = A[a]();
                    if (!1 === i) throw new r(`${n.message}: subsequent request to origin ${e} was not allowed (net.connect disabled)`);
                    if (!k(i, e)) throw new r(`${n.message}: subsequent request to origin ${e} was not allowed (net.connect is not enabled for this origin)`);
                    t.call(this, s, o);
                }
            }
            else t.call(this, s, o);
        };
    },
    checkNetConnect: k,
    buildMockOptions: function(A) {
        if (A) {
            const { agent: e, ...t } = A;
            return t;
        }
    },
    getHeaderByName: I,
    buildHeadersFromArray: C
};
