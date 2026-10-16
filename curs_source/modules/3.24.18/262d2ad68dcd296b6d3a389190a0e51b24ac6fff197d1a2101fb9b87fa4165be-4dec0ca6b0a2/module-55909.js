const { getSmithyContext: n, hasOwn: o } = require("./module-11255.js");
exports.getSmithyContext = n;
const { HttpRequest: s } = require("./module-73931.js"), { requestBuilder: i } = require("./module-73931.js");
exports.requestBuilder = i;
const { HttpApiKeyAuthLocation: a } = require("./module-52391.js");
const l = (e, t)=>(r, o)=>async (s)=>{
            const i = ((e, t)=>{
                if (!t || 0 === t.length) return e;
                const r = [];
                for (const n of t)for (const t of e)t.schemeId.split("#")[1] === n && r.push(t);
                for (const t of e)r.find(({ schemeId: e })=>e === t.schemeId) || r.push(t);
                return r;
            })(e.httpAuthSchemeProvider(await t.httpAuthSchemeParametersProvider(e, o, s.input)), e.authSchemePreference ? await e.authSchemePreference() : []), a = function(e) {
                const t = new Map;
                for (const r of e)t.set(r.schemeId, r);
                return t;
            }(e.httpAuthSchemes), l = n(o), c = [];
            for (const r of i){
                const n = a.get(r.schemeId);
                if (!n) {
                    c.push(`HttpAuthScheme \`${r.schemeId}\` was not enabled for this service.`);
                    continue;
                }
                const s = n.identityProvider(await t.identityProviderConfigProvider(e));
                if (!s) {
                    c.push(`HttpAuthScheme \`${r.schemeId}\` did not have an IdentityProvider configured.`);
                    continue;
                }
                const { identityProperties: i = {}, signingProperties: u = {} } = r.propertiesExtractor?.(e, o) || {};
                r.identityProperties = Object.assign(r.identityProperties || {}, i), r.signingProperties = Object.assign(r.signingProperties || {}, u), l.selectedHttpAuthScheme = {
                    httpAuthOption: r,
                    identity: await s(r.identityProperties),
                    signer: n.signer
                };
                break;
            }
            if (!l.selectedHttpAuthScheme) throw new Error(c.join("\n"));
            return r(s);
        }, c = {
    step: "serialize",
    tags: [
        "HTTP_AUTH_SCHEME"
    ],
    name: "httpAuthSchemeMiddleware",
    override: !0,
    relation: "before",
    toMiddleware: "endpointV2Middleware"
}, u = {
    step: "serialize",
    tags: [
        "HTTP_AUTH_SCHEME"
    ],
    name: "httpAuthSchemeMiddleware",
    override: !0,
    relation: "before",
    toMiddleware: "serializerMiddleware"
}, d = (e)=>(e)=>{
        throw e;
    }, p = (e, t)=>{}, h = (e)=>(e, t)=>async (r)=>{
            if (!s.isInstance(r.request)) return e(r);
            const o = n(t).selectedHttpAuthScheme;
            if (!o) throw new Error("No HttpAuthScheme was selected: unable to sign request");
            const { httpAuthOption: { signingProperties: i = {} }, identity: a, signer: l } = o, c = await e({
                ...r,
                request: await l.sign(r.request, a, i)
            }).catch((l.errorHandler || d)(i));
            return (l.successHandler || p)(c.response, i), c;
        }, m = {
    step: "finalizeRequest",
    tags: [
        "HTTP_SIGNING"
    ],
    name: "httpSigningMiddleware",
    aliases: [
        "apiKeyMiddleware",
        "tokenMiddleware",
        "awsAuthMiddleware"
    ],
    override: !0,
    relation: "after",
    toMiddleware: "retryMiddleware"
}, f = async (e, t, r, n = (e)=>e, ...o)=>{
    let s = new e(r);
    return s = n(s) ?? s, await t.send(s, ...o);
};
const g = (e, t)=>{
    let r = e;
    const n = t.split(".");
    for (const e of n){
        if (!r || "object" != typeof r) return;
        r = r[e];
    }
    return r;
};
const y = (e)=>function(t) {
        return b(t) && t.expiration.getTime() - Date.now() < e;
    }, v = 3e5, w = y(v), b = (e)=>void 0 !== e.expiration;
exports.DefaultIdentityProviderConfig = class {
    authSchemes = new Map;
    constructor(e){
        for(const t in e){
            if (!o(e, t)) continue;
            const r = e[t];
            void 0 !== r && this.authSchemes.set(t, r);
        }
    }
    getIdentityProvider(e) {
        return this.authSchemes.get(e);
    }
}, exports.EXPIRATION_MS = v, exports.HttpApiKeyAuthSigner = class {
    async sign(e, t, r) {
        if (!r) throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        if (!r.name) throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        if (!r.in) throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        if (!t.apiKey) throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        const n = s.clone(e);
        if (r.in === a.QUERY) n.query[r.name] = t.apiKey;
        else {
            if (r.in !== a.HEADER) throw new Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + r.in + "`");
            n.headers[r.name] = r.scheme ? `${r.scheme} ${t.apiKey}` : t.apiKey;
        }
        return n;
    }
}, exports.HttpBearerAuthSigner = class {
    async sign(e, t, r) {
        const n = s.clone(e);
        if (!t.token) throw new Error("request could not be signed with `token` since the `token` is not defined");
        return n.headers.Authorization = `Bearer ${t.token}`, n;
    }
}, exports.NoAuthSigner = class {
    async sign(e, t, r) {
        return e;
    }
}, exports.createIsIdentityExpiredFunction = y, exports.createPaginator = function(e, t, r, n, o) {
    return async function*(s, i, ...a) {
        const l = i;
        let c, u = s.startingToken ?? l[r], d = !0;
        for(; d;){
            if (l[r] = u, o && (l[o] = l[o] ?? s.pageSize), !(s.client instanceof e)) throw new Error(`Invalid client, expected instance of ${e.name}`);
            c = await f(t, s.client, i, s.withCommand, ...a), yield c;
            const p = u;
            u = g(c, n), d = !(!u || s.stopOnSameToken && u === p);
        }
    };
}, exports.doesIdentityRequireRefresh = b, exports.getHttpAuthSchemeEndpointRuleSetPlugin = (e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: r })=>({
        applyToStack: (n)=>{
            n.addRelativeTo(l(e, {
                httpAuthSchemeParametersProvider: t,
                identityProviderConfigProvider: r
            }), c);
        }
    }), exports.getHttpAuthSchemePlugin = (e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: r })=>({
        applyToStack: (n)=>{
            n.addRelativeTo(l(e, {
                httpAuthSchemeParametersProvider: t,
                identityProviderConfigProvider: r
            }), u);
        }
    }), exports.getHttpSigningPlugin = (e)=>({
        applyToStack: (e)=>{
            e.addRelativeTo(h(), m);
        }
    }), exports.httpAuthSchemeEndpointRuleSetMiddlewareOptions = c, exports.httpAuthSchemeMiddleware = l, exports.httpAuthSchemeMiddlewareOptions = u, exports.httpSigningMiddleware = h, exports.httpSigningMiddlewareOptions = m, exports.isIdentityExpired = w, exports.memoizeIdentityProvider = (e, t, r)=>{
    if (void 0 === e) return;
    const n = "function" != typeof e ? async ()=>Promise.resolve(e) : e;
    let o, s, i, a = !1;
    const l = async (e)=>{
        s || (s = n(e));
        try {
            o = await s, i = !0, a = !1;
        } finally{
            s = void 0;
        }
        return o;
    };
    return void 0 === t ? async (e)=>(i && !e?.forceRefresh || (o = await l(e)), o) : async (e)=>(i && !e?.forceRefresh || (o = await l(e)), a ? o : r(o) ? t(o) ? (await l(e), o) : o : (a = !0, o));
}, exports.normalizeProvider = (e)=>{
    if ("function" == typeof e) return e;
    const t = Promise.resolve(e);
    return ()=>t;
}, exports.setFeature = function(e, t, r) {
    e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = {
        features: {}
    }, e.__smithy_context.features[t] = r;
};
