"use strict";
const { createPublicKey: n, createSecretKey: r } = require("./module-7598.js"), o = require("./module-2240.js"), { hsAlgorithms: s, verifySignature: i, detectPublicKeyAlgorithms: a } = require("./module-7636.js"), c = require("./module-8829.js"), { TokenError: l } = require("./module-6011.js"), { getAsyncKey: u, ensurePromiseCallback: g, hashToken: E } = require("./module-708.js");
function h(e, t) {
    return e === t;
}
function d(e, t) {
    for (const A of e)if (t.includes(A)) return;
    throw new l(l.codes.invalidKey, `Invalid public key provided for algorithms ${e.join(", ")}.`);
}
function I(e, t) {
    return "string" == typeof e && (e = Buffer.from(e, "utf-8")), t ? r(e) : n(e);
}
function B(e) {
    return Array.isArray(e) || (e = [
        e
    ]), e.filter((e)=>e).map((e)=>e && "function" == typeof e.test ? e : {
            test: h.bind(null, e)
        });
}
function Q(e) {
    const t = parseInt(!0 === e ? 1e3 : e, 10);
    return t > 0 ? new o(t) : null;
}
function f({ cache: e, token: t, cacheTTL: A, payload: n, ignoreExpiration: r, ignoreNotBefore: o, maxAge: s, clockTimestamp: i = Date.now(), clockTolerance: a, errorCacheTTL: c, cacheKeyBuilder: u }, g) {
    if (!e) return g;
    const E = [
        g,
        0,
        0
    ];
    if (g instanceof l) {
        const A = "function" == typeof c ? c(g) : c;
        return E[2] = i + a + A, e.set(u(t), E), g;
    }
    n && "number" == typeof n.iat && (E[1] = o || "number" != typeof n.nbf ? 0 : 1e3 * n.nbf - a, r || ("number" == typeof n.exp ? E[2] = 1e3 * n.exp + a : s && (E[2] = 1e3 * n.iat + s + a)));
    const h = i + a + A;
    return E[2] = 0 === E[2] ? h : Math.min(E[2], h), e.set(u(t), E), g;
}
function C(e, t, A, n, r) {
    const o = A ? `The ${t} claim must be a ${r} or an array of ${r}s.` : `The ${t} claim must be a ${r}.`;
    if (n && !A) throw new l(l.codes.invalidClaimValue, o);
    if (e.map((e)=>typeof e).some((e)=>e !== r)) throw new l(l.codes.invalidClaimType, o);
}
function p(e, t, A, n) {
    const r = n ? `None of ${t} claim values are allowed.` : `The ${t} claim value is not allowed.`;
    if (!e.some((e)=>A.some((t)=>t.test(e)))) throw new l(l.codes.invalidClaimValue, r);
}
function m(e, t, A, n, r, o) {
    const s = 1e3 * e + (t || 0);
    if (!(n ? A >= s : A <= s)) throw new l(l.codes[r], `The token ${o} at ${new Date(s).toISOString()}.`);
}
function y(e, { input: t, header: A, payload: n, signature: r }, { validators: o, allowedAlgorithms: s, checkTyp: a, clockTimestamp: c, requiredClaims: u }) {
    const g = e instanceof Buffer ? e.length : !!e;
    if (g && !r) throw new l(l.codes.missingSignature, "The token signature is missing.");
    if (!g && r) throw new l(l.codes.missingKey, "The key option is missing.");
    if (function(e, t, A, n, r) {
        if (!r.includes(t.alg)) throw new l(l.codes.invalidAlgorithm, "The token algorithm is invalid.");
        if (A && !i(t.alg, n, e, A)) throw new l(l.codes.invalidSignature, "The token signature is invalid.");
    }(t, A, r, e, s), a && ("string" != typeof A.typ || a !== A.typ.toLowerCase().replace(/^application\//, ""))) throw new l(l.codes.invalidType, "Invalid typ.");
    if (u) {
        for (const e of u)if (!(e in n)) throw new l(l.codes.missingRequiredClaim, `The ${e} claim is required.`);
    }
    const E = c || Date.now();
    for (const { type: e, claim: t, allowed: A, array: r, modifier: s, greater: i, errorCode: a, errorVerb: c } of o){
        const o = n[t], l = Array.isArray(o), u = l ? o : [
            o
        ];
        t in n && (C(u, t, r, l, "date" === e ? "number" : "string"), "date" === e ? m(o, s, E, i, a, c) : p(u, t, A, l));
    }
}
function w({ key: e, allowedAlgorithms: t, complete: A, cacheTTL: n, checkTyp: r, clockTimestamp: o, clockTolerance: i, ignoreExpiration: c, ignoreNotBefore: E, maxAge: h, isAsync: B, validators: Q, decode: C, cache: p, requiredClaims: m, errorCacheTTL: w, cacheKeyBuilder: k }, b, N) {
    const [T, D] = B ? g(N) : [];
    if (p) {
        const [e, t, A] = p.get(k(b)) || [
            void 0,
            0,
            0
        ], n = o || Date.now();
        if (void 0 !== e && (0 === t || n < t && "FAST_JWT_INACTIVE" === e.code || n >= t && "FAST_JWT_INACTIVE" !== e.code) && (0 === A || n <= A)) return function(e, t, A) {
            if (e instanceof l) {
                if (!t) throw e;
                t(e);
            } else {
                if (!t) return e;
                t(null, e);
            }
            return A;
        }(e, T, D);
    }
    let S;
    try {
        S = C(b);
    } catch (e) {
        if (T) return T(e), D;
        throw e;
    }
    const { header: R, payload: F, signature: v, input: M } = S, U = {
        cache: p,
        token: b,
        cacheTTL: n,
        errorCacheTTL: w,
        ignoreExpiration: c,
        ignoreNotBefore: E,
        maxAge: h,
        clockTimestamp: o,
        clockTolerance: i,
        payload: F,
        cacheKeyBuilder: k
    }, L = {
        validators: Q,
        allowedAlgorithms: t,
        checkTyp: r,
        clockTimestamp: o,
        clockTolerance: i,
        requiredClaims: m
    };
    if (!T) try {
        return y(e, S, L), f(U, A ? {
            header: R,
            payload: F,
            signature: v,
            input: M
        } : F);
    } catch (e) {
        throw f(U, e);
    }
    return u(e, {
        header: R,
        payload: F,
        signature: v
    }, (e, n)=>{
        if (e) return T(f(U, l.wrap(e, l.codes.keyFetchingError, "Cannot fetch key.")));
        if ("string" == typeof n) n = Buffer.from(n, "utf-8");
        else if (!(n instanceof Buffer)) return T(f(U, new l(l.codes.keyFetchingError, "The key returned from the callback must be a string or a buffer containing a secret or a public key.")));
        try {
            const e = a(n);
            L.allowedAlgorithms.length ? d(t, e) : L.allowedAlgorithms = e, y(n = I(n, e[0] === s[0]), S, L);
        } catch (e) {
            return T(f(U, e));
        }
        T(null, f(U, A ? {
            header: R,
            payload: F,
            signature: v,
            input: b
        } : F));
    }), D;
}
module.exports = function(e) {
    let { key: t, algorithms: A, complete: n, cache: r, cacheTTL: o, errorCacheTTL: i, checkTyp: u, clockTimestamp: g, clockTolerance: h, ignoreExpiration: f, ignoreNotBefore: C, maxAge: p, allowedJti: m, allowedAud: y, allowedIss: k, allowedSub: b, allowedNonce: N, requiredClaims: T, cacheKeyBuilder: D } = {
        cacheTTL: 6e5,
        clockTolerance: 0,
        errorCacheTTL: -1,
        cacheKeyBuilder: E,
        ...e
    };
    Array.isArray(A) || (A = []);
    const S = typeof t;
    if ("string" !== S && "object" !== S && "function" !== S) throw new l(l.codes.INVALID_OPTION, "The key option must be a string, a buffer or a function returning the algorithm secret or public key.");
    if (t && "function" !== S) {
        const e = a(t);
        A.length ? d(A, e) : A = e, t = I(t, e[0] === s[0]);
    }
    if (g && ("number" != typeof g || g < 0)) throw new l(l.codes.invalidOption, "The clockTimestamp option must be a positive number.");
    if (h && ("number" != typeof h || h < 0)) throw new l(l.codes.invalidOption, "The clockTolerance option must be a positive number.");
    if (o && ("number" != typeof o || o < 0)) throw new l(l.codes.invalidOption, "The cacheTTL option must be a positive number.");
    if (i && "function" != typeof i && "number" != typeof i || i < -1) throw new l(l.codes.invalidOption, "The errorCacheTTL option must be a number greater than -1 or a function.");
    if (T && !Array.isArray(T)) throw new l(l.codes.invalidOption, "The requiredClaims option must be an array.");
    const R = [];
    C || R.push({
        type: "date",
        claim: "nbf",
        errorCode: "inactive",
        errorVerb: "will be active",
        greater: !0,
        modifier: -h
    }), f || R.push({
        type: "date",
        claim: "exp",
        errorCode: "expired",
        errorVerb: "has expired",
        modifier: +h
    }), "number" == typeof p && R.push({
        type: "date",
        claim: "iat",
        errorCode: "expired",
        errorVerb: "has expired",
        modifier: p
    }), m && R.push({
        type: "string",
        claim: "jti",
        allowed: B(m)
    }), y && R.push({
        type: "string",
        claim: "aud",
        allowed: B(y),
        array: !0
    }), k && R.push({
        type: "string",
        claim: "iss",
        allowed: B(k)
    }), b && R.push({
        type: "string",
        claim: "sub",
        allowed: B(b)
    }), N && R.push({
        type: "string",
        claim: "nonce",
        allowed: B(N)
    });
    const F = {
        key: t,
        allowedAlgorithms: A,
        complete: n,
        cacheTTL: o,
        errorCacheTTL: i,
        checkTyp: u ? u.toLowerCase().replace(/^application\//, "") : null,
        clockTimestamp: g,
        clockTolerance: h,
        ignoreExpiration: f,
        ignoreNotBefore: C,
        maxAge: p,
        isAsync: "function" === S,
        validators: R,
        decode: c({
            complete: !0
        }),
        cache: Q(r),
        requiredClaims: T,
        cacheKeyBuilder: D
    }, v = w.bind(null, F);
    return v.cache = F.cache, v;
};
