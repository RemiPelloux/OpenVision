"use strict";
const { MockNotMatchedError: r } = require("./module-61862.js"), { kDispatches: s, kMockAgent: o, kOriginalDispatch: n, kOrigin: i, kGetNetConnect: E } = require("./module-73192.js"), { buildURL: Q, nop: g } = require("./module-9361.js"), { STATUS_CODES: C } = require(58611), { types: { isPromise: B } } = require(39023);
function a(A, e) {
    return "string" == typeof A ? A === e : A instanceof RegExp ? A.test(e) : "function" == typeof A && !0 === A(e);
}
function I(A) {
    return Object.fromEntries(Object.entries(A).map(([A, e])=>[
            A.toLocaleLowerCase(),
            e
        ]));
}
function c(A, e) {
    if (!Array.isArray(A)) return "function" == typeof A.get ? A.get(e) : I(A)[e.toLocaleLowerCase()];
    for(let t = 0; t < A.length; t += 2)if (A[t].toLocaleLowerCase() === e.toLocaleLowerCase()) return A[t + 1];
}
function h(A) {
    const e = A.slice(), t = [];
    for(let A = 0; A < e.length; A += 2)t.push([
        e[A],
        e[A + 1]
    ]);
    return Object.fromEntries(t);
}
function l(A, e) {
    if ("function" == typeof A.headers) return Array.isArray(e) && (e = h(e)), A.headers(e ? I(e) : {});
    if (void 0 === A.headers) return !0;
    if ("object" != typeof e || "object" != typeof A.headers) return !1;
    for (const [t, r] of Object.entries(A.headers)){
        if (!a(r, c(e, t))) return !1;
    }
    return !0;
}
function u(A) {
    if ("string" != typeof A) return A;
    const e = A.split("?");
    if (2 !== e.length) return A;
    const t = new URLSearchParams(e.pop());
    return t.sort(), [
        ...e,
        t.toString()
    ].join("?");
}
function d(A) {
    return Buffer.isBuffer(A) ? A : "object" == typeof A ? JSON.stringify(A) : A.toString();
}
function f(A, e) {
    const t = e.query ? Q(e.path, e.query) : e.path, s = "string" == typeof t ? u(t) : t;
    let o = A.filter(({ consumed: A })=>!A).filter(({ path: A })=>a(u(A), s));
    if (0 === o.length) throw new r(`Mock dispatch not matched for path '${s}'`);
    if (o = o.filter(({ method: A })=>a(A, e.method)), 0 === o.length) throw new r(`Mock dispatch not matched for method '${e.method}'`);
    if (o = o.filter(({ body: A })=>void 0 === A || a(A, e.body)), 0 === o.length) throw new r(`Mock dispatch not matched for body '${e.body}'`);
    if (o = o.filter((A)=>l(A, e.headers)), 0 === o.length) throw new r(`Mock dispatch not matched for headers '${"object" == typeof e.headers ? JSON.stringify(e.headers) : e.headers}'`);
    return o[0];
}
function y(A, e) {
    const t = A.findIndex((A)=>!!A.consumed && function(A, { path: e, method: t, body: r, headers: s }) {
            const o = a(A.path, e), n = a(A.method, t), i = void 0 === A.body || a(A.body, r), E = l(A, s);
            return o && n && i && E;
        }(A, e));
    -1 !== t && A.splice(t, 1);
}
function D(A) {
    const { path: e, method: t, body: r, headers: s, query: o } = A;
    return {
        path: e,
        method: t,
        body: r,
        headers: s,
        query: o
    };
}
function R(A) {
    return Object.entries(A).reduce((A, [e, t])=>[
            ...A,
            Buffer.from(`${e}`),
            Array.isArray(t) ? t.map((A)=>Buffer.from(`${A}`)) : Buffer.from(`${t}`)
        ], []);
}
function w(A) {
    return C[A] || "unknown";
}
function p(A, e) {
    const t = D(A), r = f(this[s], t);
    r.timesInvoked++, r.data.callback && (r.data = {
        ...r.data,
        ...r.data.callback(A)
    });
    const { data: { statusCode: o, data: n, headers: i, trailers: E, error: Q }, delay: C, persist: a } = r, { timesInvoked: I, times: c } = r;
    if (r.consumed = !a && I >= c, r.pending = I < c, null !== Q) return y(this[s], t), e.onError(Q), !0;
    function l(r, s = n) {
        const Q = Array.isArray(A.headers) ? h(A.headers) : A.headers, C = "function" == typeof s ? s({
            ...A,
            headers: Q
        }) : s;
        if (B(C)) return void C.then((A)=>l(r, A));
        const a = d(C), I = R(i), c = R(E);
        e.abort = g, e.onHeaders(o, I, u, w(o)), e.onData(Buffer.from(a)), e.onComplete(c), y(r, t);
    }
    function u() {}
    return "number" == typeof C && C > 0 ? setTimeout(()=>{
        l(this[s]);
    }, C) : l(this[s]), !0;
}
function k(A, e) {
    const t = new URL(e);
    return !0 === A || !(!Array.isArray(A) || !A.some((A)=>a(A, t.host)));
}
module.exports = {
    getResponseData: d,
    getMockDispatch: f,
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
    deleteMockDispatch: y,
    buildKey: D,
    generateKeyValues: R,
    matchValue: a,
    getResponse: async function(A) {
        const e = [];
        for await (const t of A)e.push(t);
        return Buffer.concat(e).toString("utf8");
    },
    getStatusText: w,
    mockDispatch: p,
    buildMockDispatch: function() {
        const A = this[o], e = this[i], t = this[n];
        return function(s, o) {
            if (A.isMockActive) try {
                p.call(this, s, o);
            } catch (n) {
                if (!(n instanceof r)) throw n;
                {
                    const i = A[E]();
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
    getHeaderByName: c
};
