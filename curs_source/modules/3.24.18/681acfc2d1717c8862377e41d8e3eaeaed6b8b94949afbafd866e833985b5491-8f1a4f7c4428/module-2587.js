"use strict";
const { base64UrlMatcher: n, base64UrlReplacer: r, hsAlgorithms: o, esAlgorithms: s, rsaAlgorithms: i, edAlgorithms: a, detectPrivateKeyAlgorithm: c, createSignature: l } = require("./module-7636.js"), { TokenError: u } = require("./module-6011.js"), { getAsyncKey: g, ensurePromiseCallback: E } = require("./module-708.js"), { createPrivateKey: h, createSecretKey: d } = require("./module-7598.js"), { parse: I } = require("./module-1088.js"), B = new Set([
    ...o,
    ...s,
    ...i,
    ...a,
    "none"
]), Q = Array.from(B).join(", ");
function f(e, t) {
    const A = e.slice(0, 2), n = t.slice(0, 2);
    let r = !0;
    if ("RS" === A || "PS" === A ? r = "RS" === n || "RS" === A && "ENCRYPTED" === t : "ES" !== A && "Ed" !== A || (r = A === n || "ES" === A && "ENCRYPTED" === t), !r) throw new u(u.codes.invalidKey, `Invalid private key provided for algorithm ${e}.`);
}
function C(e, t) {
    return "string" == typeof e && (e = Buffer.from(e, "utf-8")), "H" === t[0] ? d(e) : h(e);
}
function p({ key: e, algorithm: t, noTimestamp: A, mutatePayload: o, clockTimestamp: s, expiresIn: i, notBefore: a, kid: h, typ: d, isAsync: I, additionalHeader: B, fixedPayload: Q }, p, m) {
    const [y, w] = I ? E(m) : [];
    if ("object" != typeof p) throw new u(u.codes.invalidType, "The payload must be an object.");
    if (p.exp && (!Number.isInteger(p.exp) || p.exp < 0)) throw new u(u.codes.invalidClaimValue, "The exp claim must be a positive integer.");
    const k = {
        alg: t,
        typ: d || "JWT",
        kid: h,
        ...B
    };
    let b = "";
    const N = 1e3 * p.iat || s || Date.now(), T = {
        ...p,
        ...Q,
        iat: A ? void 0 : Math.floor(N / 1e3),
        exp: p.exp ? p.exp : i ? Math.floor((N + i) / 1e3) : void 0,
        nbf: p.nbf ? p.nbf : a ? Math.floor((N + a) / 1e3) : void 0
    };
    if (o && Object.assign(p, T), b = Buffer.from(JSON.stringify(T), "utf-8").toString("base64").replace(n, r), !y) {
        const A = Buffer.from(JSON.stringify(k), "utf-8").toString("base64").replace(n, r) + "." + b;
        return A + "." + ("none" === t ? "" : l(t, e, A));
    }
    return g(e, {
        header: k,
        payload: p
    }, (e, A)=>{
        if (e) {
            const t = u.wrap(e, u.codes.keyFetchingError, "Cannot fetch key.");
            return y(t);
        }
        if ("string" == typeof A) A = Buffer.from(A, "utf-8");
        else if (!(A instanceof Buffer)) return y(new u(u.codes.keyFetchingError, "The key returned from the callback must be a string or a buffer containing a secret or a private key."));
        let o;
        try {
            const e = c(A, t);
            t ? f(t, e) : k.alg = t = e, A = C(A, t);
            const s = Buffer.from(JSON.stringify(k), "utf-8").toString("base64").replace(n, r) + "." + b;
            o = s + "." + l(t, A, s);
        } catch (e) {
            return y(e);
        }
        y(null, o);
    }), w;
}
module.exports = function(e) {
    let { key: t, algorithm: A, noTimestamp: n, mutatePayload: r, clockTimestamp: o, expiresIn: s, notBefore: i, jti: a, aud: l, iss: g, sub: E, nonce: h, kid: d, typ: m, header: y } = {
        clockTimestamp: 0,
        ...e
    };
    if (A && !B.has(A)) throw new u(u.codes.invalidOption, `The algorithm option must be one of the following values: ${Q}.`);
    const w = typeof t, k = "object" === w && t && t.key && t.passphrase;
    if ("none" === A) {
        if (t) throw new u(u.codes.invalidOption, 'The key option must not be provided when the algorithm option is "none".');
    } else {
        if (!t || !("string" === w || t instanceof Buffer || "function" === w || k)) throw new u(u.codes.invalidOption, "The key option must be a string, a buffer, an object containing key/passphrase properties or a function returning the algorithm secret or private key.");
        if (k && !A) throw new u(u.codes.invalidAlgorithm, "When using password protected key you must provide the algorithm option.");
    }
    if (t && "function" !== w) {
        const e = c(k ? t.key : t, A);
        A ? f(A, e) : A = e, t = C(t, A);
    }
    if (s && ("string" == typeof s && (s = I(s)), "number" != typeof s)) throw new u(u.codes.invalidOption, "The expiresIn option must be a positive number or a valid string.");
    if (i && ("string" == typeof i && (i = I(i)), "number" != typeof i || i < 0)) throw new u(u.codes.invalidOption, "The notBefore option must be a positive number or a valid string.");
    if (o && ("number" != typeof o || o < 0)) throw new u(u.codes.invalidOption, "The clockTimestamp option must be a positive number.");
    if (a && "string" != typeof a) throw new u(u.codes.invalidOption, "The jti option must be a string.");
    if (l && "string" != typeof l && !Array.isArray(l)) throw new u(u.codes.invalidOption, "The aud option must be a string or an array of strings.");
    if (g && "string" != typeof g) throw new u(u.codes.invalidOption, "The iss option must be a string.");
    if (E && "string" != typeof E) throw new u(u.codes.invalidOption, "The sub option must be a string.");
    if (h && "string" != typeof h) throw new u(u.codes.invalidOption, "The nonce option must be a string.");
    if (d && "string" != typeof d) throw new u(u.codes.invalidOption, "The kid option must be a string.");
    if (y && "object" != typeof y) throw new u(u.codes.invalidOption, "The header option must be a object.");
    const b = {
        jti: a,
        aud: l,
        iss: g,
        sub: E,
        nonce: h
    }, N = Object.entries(b).reduce((e, [t, A])=>(void 0 !== A && (e[t] = A), e), {});
    return p.bind(null, {
        key: t,
        algorithm: A,
        noTimestamp: n,
        mutatePayload: r,
        clockTimestamp: o,
        expiresIn: s,
        notBefore: i,
        kid: d,
        typ: m,
        isAsync: "function" === w,
        additionalHeader: y,
        fixedPayload: N
    });
};
