const { getSmithyContext: n, hasOwn: s } = require("./module-11255.js");
exports.getSmithyContext = n;
const { HttpRequest: o } = require("./module-73931.js"), { requestBuilder: i } = require("./module-73931.js");
exports.requestBuilder = i;
const { HttpApiKeyAuthLocation: a } = require("./module-52391.js");
const c = (e, t)=>(r, s)=>async (o)=>{
            const i = ((e, t)=>{
                if (!t || 0 === t.length) return e;
                const r = [];
                for (const n of t)for (const t of e)t.schemeId.split("#")[1] === n && r.push(t);
                for (const t of e)r.find(({ schemeId: e })=>e === t.schemeId) || r.push(t);
                return r;
            })(e.httpAuthSchemeProvider(await t.httpAuthSchemeParametersProvider(e, s, o.input)), e.authSchemePreference ? await e.authSchemePreference() : []), a = function(e) {
                const t = new Map;
                for (const r of e)t.set(r.schemeId, r);
                return t;
            }(e.httpAuthSchemes), c = n(s), l = [];
            for (const r of i){
                const n = a.get(r.schemeId);
                if (!n) {
                    l.push(`HttpAuthScheme \`${r.schemeId}\` was not enabled for this service.`);
                    continue;
                }
                const o = n.identityProvider(await t.identityProviderConfigProvider(e));
                if (!o) {
                    l.push(`HttpAuthScheme \`${r.schemeId}\` did not have an IdentityProvider configured.`);
                    continue;
                }
                const { identityProperties: i = {}, signingProperties: u = {} } = r.propertiesExtractor?.(e, s) || {};
                r.identityProperties = Object.assign(r.identityProperties || {}, i), r.signingProperties = Object.assign(r.signingProperties || {}, u), c.selectedHttpAuthScheme = {
                    httpAuthOption: r,
                    identity: await o(r.identityProperties),
                    signer: n.signer
                };
                break;
            }
            if (!c.selectedHttpAuthScheme) throw new Error(l.join("\n"));
            return r(o);
        }, l = {
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
    }, p = (e, t)=>{}, m = (e)=>(e, t)=>async (r)=>{
            if (!o.isInstance(r.request)) return e(r);
            const s = n(t).selectedHttpAuthScheme;
            if (!s) throw new Error("No HttpAuthScheme was selected: unable to sign request");
            const { httpAuthOption: { signingProperties: i = {} }, identity: a, signer: c } = s, l = await e({
                ...r,
                request: await c.sign(r.request, a, i)
            }).catch((c.errorHandler || d)(i));
            return (c.successHandler || p)(l.response, i), l;
        }, h = {
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
}, f = async (e, t, r, n = (e)=>e, ...s)=>{
    let o = new e(r);
    return o = n(o) ?? o, await t.send(o, ...s);
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
        return _(t) && t.expiration.getTime() - Date.now() < e;
    }, w = 3e5, v = y(w), _ = (e)=>void 0 !== e.expiration;
exports.DefaultIdentityProviderConfig = class {
    authSchemes = new Map;
    constructor(e){
        for(const t in e){
            if (!s(e, t)) continue;
            const r = e[t];
            void 0 !== r && this.authSchemes.set(t, r);
        }
    }
    getIdentityProvider(e) {
        return this.authSchemes.get(e);
    }
}, exports.EXPIRATION_MS = w, exports.HttpApiKeyAuthSigner = class {
    async sign(e, t, r) {
        if (!r) throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        if (!r.name) throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        if (!r.in) throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        if (!t.apiKey) throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        const n = o.clone(e);
        if (r.in === a.QUERY) n.query[r.name] = t.apiKey;
        else {
            if (r.in !== a.HEADER) throw new Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + r.in + "`");
            n.headers[r.name] = r.scheme ? `${r.scheme} ${t.apiKey}` : t.apiKey;
        }
        return n;
    }
}, exports.HttpBearerAuthSigner = class {
    async sign(e, t, r) {
        const n = o.clone(e);
        if (!t.token) throw new Error("request could not be signed with `token` since the `token` is not defined");
        return n.headers.Authorization = `Bearer ${t.token}`, n;
    }
}, exports.NoAuthSigner = class {
    async sign(e, t, r) {
        return e;
    }
}, exports.createIsIdentityExpiredFunction = y, exports.createPaginator = function(e, t, r, n, s) {
    return async function*(o, i, ...a) {
        const c = i;
        let l, u = o.startingToken ?? c[r], d = !0;
        for(; d;){
            if (c[r] = u, s && (c[s] = c[s] ?? o.pageSize), !(o.client instanceof e)) throw new Error(`Invalid client, expected instance of ${e.name}`);
            l = await f(t, o.client, i, o.withCommand, ...a), yield l;
            const p = u;
            u = g(l, n), d = !(!u || o.stopOnSameToken && u === p);
        }
    };
}, exports.doesIdentityRequireRefresh = _, exports.getHttpAuthSchemeEndpointRuleSetPlugin = (e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: r })=>({
        applyToStack: (n)=>{
            n.addRelativeTo(c(e, {
                httpAuthSchemeParametersProvider: t,
                identityProviderConfigProvider: r
            }), l);
        }
    }), exports.getHttpAuthSchemePlugin = (e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: r })=>({
        applyToStack: (n)=>{
            n.addRelativeTo(c(e, {
                httpAuthSchemeParametersProvider: t,
                identityProviderConfigProvider: r
            }), u);
        }
    }), exports.getHttpSigningPlugin = (e)=>({
        applyToStack: (e)=>{
            e.addRelativeTo(m(), h);
        }
    }), exports.httpAuthSchemeEndpointRuleSetMiddlewareOptions = l, exports.httpAuthSchemeMiddleware = c, exports.httpAuthSchemeMiddlewareOptions = u, exports.httpSigningMiddleware = m, exports.httpSigningMiddlewareOptions = h, exports.isIdentityExpired = v, exports.memoizeIdentityProvider = (e, t, r)=>{
    if (void 0 === e) return;
    const n = "function" != typeof e ? async ()=>Promise.resolve(e) : e;
    let s, o, i, a = !1;
    const c = async (e)=>{
        o || (o = n(e));
        try {
            s = await o, i = !0, a = !1;
        } finally{
            o = void 0;
        }
        return s;
    };
    return void 0 === t ? async (e)=>(i && !e?.forceRefresh || (s = await c(e)), s) : async (e)=>(i && !e?.forceRefresh || (s = await c(e)), a ? s : r(s) ? t(s) ? (await c(e), s) : s : (a = !0, s));
}, exports.normalizeProvider = (e)=>{
    if ("function" == typeof e) return e;
    const t = Promise.resolve(e);
    return ()=>t;
}, exports.setFeature = function(e, t, r) {
    e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = {
        features: {}
    }, e.__smithy_context.features[t] = r;
};
