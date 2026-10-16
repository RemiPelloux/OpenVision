"use strict";
require.d(exports, {
    Ch: ()=>oe,
    Di: ()=>b,
    Kq: ()=>Q,
    M3: ()=>x,
    Tt: ()=>y,
    b8: ()=>fe,
    bD: ()=>c,
    eM: ()=>ee,
    hL: ()=>p,
    iM: ()=>de,
    u1: ()=>w,
    u6: ()=>N,
    xn: ()=>J
});
var n, s = "vercel.ai.error", o = Symbol.for(s), i = class e extends Error {
    constructor({ name: e, message: t, cause: r }){
        super(t), this[n] = !0, this.name = e, this.cause = r;
    }
    static isInstance(t) {
        return e.hasMarker(t, s);
    }
    static hasMarker(e, t) {
        const r = Symbol.for(t);
        return null != e && "object" == typeof e && r in e && "boolean" == typeof e[r] && !0 === e[r];
    }
};
n = o;
var a, c = i, l = "AI_APICallError", u = `vercel.ai.error.${l}`, d = Symbol.for(u), p = class extends c {
    constructor({ message: e, url: t, requestBodyValues: r, statusCode: n, responseHeaders: s, responseBody: o, cause: i, isRetryable: c = null != n && (408 === n || 409 === n || 429 === n || n >= 500), data: u }){
        super({
            name: l,
            message: e,
            cause: i
        }), this[a] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = s, this.responseBody = o, this.isRetryable = c, this.data = u;
    }
    static isInstance(e) {
        return c.hasMarker(e, u);
    }
};
a = d;
var m, h = "AI_EmptyResponseBodyError", f = `vercel.ai.error.${h}`, g = Symbol.for(f), y = class extends c {
    constructor({ message: e = "Empty response body" } = {}){
        super({
            name: h,
            message: e
        }), this[m] = !0;
    }
    static isInstance(e) {
        return c.hasMarker(e, f);
    }
};
function w(e) {
    return null == e ? "unknown error" : "string" == typeof e ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
m = g;
var v, _ = "AI_InvalidArgumentError", A = `vercel.ai.error.${_}`, S = Symbol.for(A), b = class extends c {
    constructor({ message: e, cause: t, argument: r }){
        super({
            name: _,
            message: e,
            cause: t
        }), this[v] = !0, this.argument = r;
    }
    static isInstance(e) {
        return c.hasMarker(e, A);
    }
};
v = S;
var E, I = "AI_InvalidPromptError", C = `vercel.ai.error.${I}`, k = Symbol.for(C), x = class extends c {
    constructor({ prompt: e, message: t, cause: r }){
        super({
            name: I,
            message: `Invalid prompt: ${t}`,
            cause: r
        }), this[E] = !0, this.prompt = e;
    }
    static isInstance(e) {
        return c.hasMarker(e, C);
    }
};
E = k;
var T, R = "AI_InvalidResponseDataError", B = `vercel.ai.error.${R}`, P = Symbol.for(B), J = class extends c {
    constructor({ data: e, message: t = `Invalid response data: ${JSON.stringify(e)}.` }){
        super({
            name: R,
            message: t
        }), this[T] = !0, this.data = e;
    }
    static isInstance(e) {
        return c.hasMarker(e, B);
    }
};
T = P;
var M, q = "AI_JSONParseError", D = `vercel.ai.error.${q}`, O = Symbol.for(D), N = class extends c {
    constructor({ text: e, cause: t }){
        super({
            name: q,
            message: `JSON parsing failed: Text: ${e}.\nError message: ${w(t)}`,
            cause: t
        }), this[M] = !0, this.text = e;
    }
    static isInstance(e) {
        return c.hasMarker(e, D);
    }
};
M = O;
var F, U = "AI_LoadAPIKeyError", L = `vercel.ai.error.${U}`, $ = Symbol.for(L), Q = class extends c {
    constructor({ message: e }){
        super({
            name: U,
            message: e
        }), this[F] = !0;
    }
    static isInstance(e) {
        return c.hasMarker(e, L);
    }
};
F = $;
var j = "AI_LoadSettingError", G = `vercel.ai.error.${j}`, H = Symbol.for(G);
var z = "AI_NoContentGeneratedError", W = `vercel.ai.error.${z}`, V = Symbol.for(W);
var K, Y = "AI_NoSuchModelError", Z = `vercel.ai.error.${Y}`, X = Symbol.for(Z), ee = class extends c {
    constructor({ errorName: e = Y, modelId: t, modelType: r, message: n = `No such ${r}: ${t}` }){
        super({
            name: e,
            message: n
        }), this[K] = !0, this.modelId = t, this.modelType = r;
    }
    static isInstance(e) {
        return c.hasMarker(e, Z);
    }
};
K = X;
var te, re = "AI_TooManyEmbeddingValuesForCallError", ne = `vercel.ai.error.${re}`, se = Symbol.for(ne), oe = class extends c {
    constructor(e){
        super({
            name: re,
            message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`
        }), this[te] = !0, this.provider = e.provider, this.modelId = e.modelId, this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall, this.values = e.values;
    }
    static isInstance(e) {
        return c.hasMarker(e, ne);
    }
};
te = se;
var ie, ae = "AI_TypeValidationError", ce = `vercel.ai.error.${ae}`, le = Symbol.for(ce);
ie = le;
var ue, de = class e extends c {
    constructor({ value: e, cause: t }){
        super({
            name: ae,
            message: `Type validation failed: Value: ${JSON.stringify(e)}.\nError message: ${w(t)}`,
            cause: t
        }), this[ie] = !0, this.value = e;
    }
    static isInstance(e) {
        return c.hasMarker(e, ce);
    }
    static wrap({ value: t, cause: r }) {
        return e.isInstance(r) && r.value === t ? r : new e({
            value: t,
            cause: r
        });
    }
}, pe = "AI_UnsupportedFunctionalityError", me = `vercel.ai.error.${pe}`, he = Symbol.for(me), fe = class extends c {
    constructor({ functionality: e, message: t = `'${e}' functionality not supported.` }){
        super({
            name: pe,
            message: t
        }), this[ue] = !0, this.functionality = e;
    }
    static isInstance(e) {
        return c.hasMarker(e, me);
    }
};
ue = he;
