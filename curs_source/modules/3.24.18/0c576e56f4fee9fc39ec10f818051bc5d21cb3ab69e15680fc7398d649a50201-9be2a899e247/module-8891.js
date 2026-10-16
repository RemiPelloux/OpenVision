"use strict";
let n;
async function o(e) {
    const t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
    let r = "";
    const o = await async function(e) {
        return (await n).getRandomValues(new Uint8Array(e));
    }(e);
    for(let n = 0; n < e; n++){
        r += t[o[n] % 66];
    }
    return r;
}
async function s(e) {
    const t = await (await n).subtle.digest("SHA-256", (new TextEncoder).encode(e));
    return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function i(e) {
    if (e || (e = 43), e < 43 || e > 128) throw `Expected a length between 43 and 128. Received ${e}.`;
    const t = await async function(e) {
        return await o(e);
    }(e);
    return {
        code_verifier: t,
        code_challenge: await s(t)
    };
}
require.d(exports, {
    D_: ()=>x,
    j2: ()=>R,
    discoverAuthorizationServerMetadata: ()=>U,
    discoverOAuthProtectedResourceMetadata: ()=>D,
    exchangeAuthorization: ()=>V,
    extractWWWAuthenticateParams: ()=>J,
    selectResourceURL: ()=>M
}), n = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? Promise.resolve().then(require.t.bind(require, 7598, 19)).then((e)=>e.webcrypto);
var a = require("./module-9116.js"), c = require("./module-1165.js");
const u = "custom";
var l = require("./module-7381.js"), d = require("./module-7888.js");
const p = c.OZ().superRefine((e, t)=>{
    if (!URL.canParse(e)) return t.addIssue({
        code: u,
        message: "URL must be parseable",
        fatal: !0
    }), l.tm;
}).refine((e)=>{
    const t = new URL(e);
    return "javascript:" !== t.protocol && "data:" !== t.protocol && "vbscript:" !== t.protocol;
}, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
}), f = c._H({
    resource: c.Yj().url(),
    authorization_servers: c.YO(p).optional(),
    jwks_uri: c.Yj().url().optional(),
    scopes_supported: c.YO(c.Yj()).optional(),
    bearer_methods_supported: c.YO(c.Yj()).optional(),
    resource_signing_alg_values_supported: c.YO(c.Yj()).optional(),
    resource_name: c.Yj().optional(),
    resource_documentation: c.Yj().optional(),
    resource_policy_uri: c.Yj().url().optional(),
    resource_tos_uri: c.Yj().url().optional(),
    tls_client_certificate_bound_access_tokens: c.zM().optional(),
    authorization_details_types_supported: c.YO(c.Yj()).optional(),
    dpop_signing_alg_values_supported: c.YO(c.Yj()).optional(),
    dpop_bound_access_tokens_required: c.zM().optional()
}), h = c._H({
    issuer: c.Yj(),
    authorization_endpoint: p,
    token_endpoint: p,
    registration_endpoint: p.optional(),
    scopes_supported: c.YO(c.Yj()).optional(),
    response_types_supported: c.YO(c.Yj()),
    response_modes_supported: c.YO(c.Yj()).optional(),
    grant_types_supported: c.YO(c.Yj()).optional(),
    token_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(),
    token_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(),
    service_documentation: p.optional(),
    revocation_endpoint: p.optional(),
    revocation_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(),
    introspection_endpoint: c.Yj().optional(),
    introspection_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(),
    code_challenge_methods_supported: c.YO(c.Yj()).optional(),
    client_id_metadata_document_supported: c.zM().optional()
}), m = c._H({
    issuer: c.Yj(),
    authorization_endpoint: p,
    token_endpoint: p,
    userinfo_endpoint: p.optional(),
    jwks_uri: p,
    registration_endpoint: p.optional(),
    scopes_supported: c.YO(c.Yj()).optional(),
    response_types_supported: c.YO(c.Yj()),
    response_modes_supported: c.YO(c.Yj()).optional(),
    grant_types_supported: c.YO(c.Yj()).optional(),
    acr_values_supported: c.YO(c.Yj()).optional(),
    subject_types_supported: c.YO(c.Yj()),
    id_token_signing_alg_values_supported: c.YO(c.Yj()),
    id_token_encryption_alg_values_supported: c.YO(c.Yj()).optional(),
    id_token_encryption_enc_values_supported: c.YO(c.Yj()).optional(),
    userinfo_signing_alg_values_supported: c.YO(c.Yj()).optional(),
    userinfo_encryption_alg_values_supported: c.YO(c.Yj()).optional(),
    userinfo_encryption_enc_values_supported: c.YO(c.Yj()).optional(),
    request_object_signing_alg_values_supported: c.YO(c.Yj()).optional(),
    request_object_encryption_alg_values_supported: c.YO(c.Yj()).optional(),
    request_object_encryption_enc_values_supported: c.YO(c.Yj()).optional(),
    token_endpoint_auth_methods_supported: c.YO(c.Yj()).optional(),
    token_endpoint_auth_signing_alg_values_supported: c.YO(c.Yj()).optional(),
    display_values_supported: c.YO(c.Yj()).optional(),
    claim_types_supported: c.YO(c.Yj()).optional(),
    claims_supported: c.YO(c.Yj()).optional(),
    service_documentation: c.Yj().optional(),
    claims_locales_supported: c.YO(c.Yj()).optional(),
    ui_locales_supported: c.YO(c.Yj()).optional(),
    claims_parameter_supported: c.zM().optional(),
    request_parameter_supported: c.zM().optional(),
    request_uri_parameter_supported: c.zM().optional(),
    require_request_uri_registration: c.zM().optional(),
    op_policy_uri: p.optional(),
    op_tos_uri: p.optional(),
    client_id_metadata_document_supported: c.zM().optional()
}), g = c.Ik({
    ...m.shape,
    ...h.pick({
        code_challenge_methods_supported: !0
    }).shape
}), y = c.Ik({
    access_token: c.Yj(),
    id_token: c.Yj().optional(),
    token_type: c.Yj(),
    expires_in: d.qG(c.rS, _).optional(),
    scope: c.Yj().optional(),
    refresh_token: c.Yj().optional()
}).strip();
var _;
const v = c.Ik({
    error: c.Yj(),
    error_description: c.Yj().optional(),
    error_uri: c.Yj().optional()
}), w = p.optional().or(c.eu("").transform(()=>{})), b = c.Ik({
    redirect_uris: c.YO(p),
    token_endpoint_auth_method: c.Yj().optional(),
    grant_types: c.YO(c.Yj()).optional(),
    response_types: c.YO(c.Yj()).optional(),
    client_name: c.Yj().optional(),
    client_uri: p.optional(),
    logo_uri: w,
    scope: c.Yj().optional(),
    contacts: c.YO(c.Yj()).optional(),
    tos_uri: w,
    policy_uri: c.Yj().optional(),
    jwks_uri: p.optional(),
    jwks: c.bz().optional(),
    software_id: c.Yj().optional(),
    software_version: c.Yj().optional(),
    software_statement: c.Yj().optional()
}).strip(), S = c.Ik({
    client_id: c.Yj(),
    client_secret: c.Yj().optional(),
    client_id_issued_at: c.ai().optional(),
    client_secret_expires_at: c.ai().optional()
}).strip(), k = b.merge(S);
c.Ik({
    error: c.Yj(),
    error_description: c.Yj().optional()
}).strip(), c.Ik({
    token: c.Yj(),
    token_type_hint: c.Yj().optional()
}).strip();
var E = require("./module-5977.js");
class x extends Error {
    constructor(e){
        super(e ?? "Unauthorized");
    }
}
function T(e, t) {
    return !0 === t?.isRetryableOAuthRefreshError?.(e);
}
const O = "offline_access";
function P(e) {
    return e instanceof E.W5 && !/^HTTP 5\d\d:/.test(e.message) && ("invalid_redirect_uri" === e.errorCode || /redirect/i.test(e.message));
}
const I = "code", C = "S256";
function A(e, t, r, n) {
    const { client_id: o, client_secret: s } = t;
    switch(e){
        case "client_secret_basic":
            return void function(e, t, r) {
                if (!t) throw new Error("client_secret_basic authentication requires a client_secret");
                const n = btoa(`${e}:${t}`);
                r.set("Authorization", `Basic ${n}`);
            }(o, s, r);
        case "client_secret_post":
            return void function(e, t, r) {
                r.set("client_id", e), t && r.set("client_secret", t);
            }(o, s, n);
        case "none":
            return void function(e, t) {
                t.set("client_id", e);
            }(o, n);
        default:
            throw new Error(`Unsupported client authentication method: ${e}`);
    }
}
async function $(e) {
    const t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
    try {
        const e = v.parse(JSON.parse(r)), { error: t, error_description: n, error_uri: o } = e;
        return new (E.WX[t] || E.gP)(n || "", o);
    } catch (e) {
        const n = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${e}. Raw body: ${r}`;
        return new E.gP(n);
    }
}
async function R(e, t) {
    try {
        return await N(e, t);
    } catch (r) {
        if (r instanceof Error && "OAuthRefreshTransientError" === r.name) throw r;
        if (r instanceof E.Pg || r instanceof E.g) return await e.invalidateCredentials?.("all"), await N(e, t);
        if (r instanceof E.Gy) return await e.invalidateCredentials?.("tokens"), await N(e, t);
        throw r;
    }
}
async function N(e, { serverUrl: t, authorizationCode: r, scope: n, resourceMetadataUrl: o, fetchFn: s }) {
    const a = e.getOAuthHttpFetch?.(), c = a ?? s;
    let u, l;
    try {
        u = await D(t, {
            resourceMetadataUrl: o
        }, s), u.authorization_servers && u.authorization_servers.length > 0 && (l = u.authorization_servers[0]);
    } catch  {}
    l || (l = new URL("/", t));
    const d = await M(t, e, u), p = await U(l, {
        fetchFn: s
    }), f = function(e, t, r, n) {
        const o = t?.scopes_supported, s = e || o?.join(" ") || r;
        if (!s || ![
            o,
            n?.scopes_supported
        ].some((e)=>Array.isArray(e) && e.includes(O))) return s;
        const i = s.split(/\s+/).filter((e)=>e.length > 0);
        return i.includes(O) ? s : [
            ...i,
            O
        ].join(" ");
    }(n, u, e.clientMetadata.scope, p);
    let h = await Promise.resolve(e.clientInformation());
    if (!h) {
        if (void 0 !== r) throw new Error("Existing OAuth client information is required when exchanging an authorization code");
        const t = !0 === p?.client_id_metadata_document_supported, n = e.clientMetadataUrl;
        if (n && !function(e) {
            if (!e) return !1;
            try {
                const t = new URL(e);
                return "https:" === t.protocol && "/" !== t.pathname;
            } catch  {
                return !1;
            }
        }(n)) throw new E.gr(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${n}`);
        if (t && n) h = {
            client_id: n
        }, await e.saveClientInformation?.(h);
        else {
            if (!e.saveClientInformation) throw new Error("OAuth client information must be saveable for dynamic registration");
            const t = await async function(e, t, { metadata: r, clientMetadata: n, fetchFn: o }) {
                await e.prepareForClientRegistration?.();
                const s = String(e.redirectUrl), i = n.redirect_uris ?? [], a = i.includes(s) ? [
                    ...i
                ] : [
                    ...i,
                    s
                ], c = a.length > 1 ? [
                    a,
                    [
                        s
                    ]
                ] : [
                    a
                ];
                let u;
                for (const e of c)try {
                    const s = await K(t, {
                        metadata: r,
                        clientMetadata: {
                            ...n,
                            redirect_uris: e
                        },
                        fetchFn: o
                    });
                    return s.redirect_uris?.length ? s : {
                        ...s,
                        redirect_uris: e
                    };
                } catch (e) {
                    if (!P(e)) throw e;
                    u = e;
                }
                throw u;
            }(e, l, {
                metadata: p,
                clientMetadata: void 0 !== f ? {
                    ...e.clientMetadata,
                    scope: f
                } : e.clientMetadata,
                fetchFn: c
            });
            await e.saveClientInformation(t), h = t;
        }
    }
    const m = !e.redirectUrl;
    if (void 0 !== r || m) {
        const t = await async function(e, t, { metadata: r, resource: n, authorizationCode: o, fetchFn: s } = {}) {
            const i = e.clientMetadata.scope;
            let a;
            e.prepareTokenRequest && (a = await e.prepareTokenRequest(i));
            if (!a) {
                if (!o) throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
                if (!e.redirectUrl) throw new Error("redirectUrl is required for authorization_code flow");
                a = B(o, await e.codeVerifier(), e.redirectUrl);
            }
            const c = await e.clientInformation();
            return L(t, {
                metadata: r,
                tokenRequestParams: a,
                clientInformation: c ?? void 0,
                addClientAuthentication: e.addClientAuthentication,
                resource: n,
                fetchFn: s
            });
        }(e, l, {
            metadata: p,
            resource: d,
            authorizationCode: r,
            fetchFn: c
        });
        return await e.saveTokens(t), "AUTHORIZED";
    }
    const g = await e.tokens();
    if (g?.refresh_token) try {
        await e.prepareForRefresh?.();
        const t = await async function(e, { metadata: t, clientInformation: r, refreshToken: n, resource: o, addClientAuthentication: s, fetchFn: i }) {
            const a = new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: n
            }), c = await L(e, {
                metadata: t,
                tokenRequestParams: a,
                clientInformation: r,
                addClientAuthentication: s,
                resource: o,
                fetchFn: i
            });
            return {
                refresh_token: n,
                ...c
            };
        }(l, {
            metadata: p,
            clientInformation: h,
            refreshToken: g.refresh_token,
            resource: d,
            addClientAuthentication: e.addClientAuthentication,
            fetchFn: c
        });
        return await e.saveTokens(t), "AUTHORIZED";
    } catch (t) {
        if (t && "SiblingAlreadyRefreshedError" === t.name) throw t;
        const r = t instanceof E.W5, n = t instanceof E.gP, o = T(t, e), s = r && !n && !(t instanceof E.pv) || o;
        if (e.logRefreshCatchBranch?.({
            errorIsOAuthError: r,
            errorIsServerError: n,
            errorIsRetryable: o,
            willFallThrough: !s,
            willRethrow: s,
            errorName: t instanceof Error ? t.name : typeof t,
            errorMessage: t instanceof Error ? t.message : String(t),
            underlyingError: t
        }), await e.releaseRefreshLeaseOnError?.(t), t instanceof E.W5 && !(t instanceof E.gP) && !(t instanceof E.pv)) throw t;
        if (T(t, e)) {
            const e = new Error(t instanceof Error ? t.message : String(t));
            throw e.name = "OAuthRefreshTransientError", t instanceof Error && t.stack && (e.stack = t.stack), e;
        }
        if (t instanceof E.W5 && !(t instanceof E.gP)) throw t;
    }
    const y = e.state ? await e.state() : void 0, { authorizationUrl: _, codeVerifier: v } = await async function(e, { metadata: t, clientInformation: r, redirectUrl: n, scope: o, state: s, resource: a }) {
        let c;
        if (t) {
            if (c = new URL(t.authorization_endpoint), !t.response_types_supported.includes(I)) throw new Error(`Incompatible auth server: does not support response type ${I}`);
            if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(C)) throw new Error(`Incompatible auth server: does not support code challenge method ${C}`);
        } else c = new URL("/authorize", e);
        const u = await i(), l = u.code_verifier, d = u.code_challenge;
        c.searchParams.set("response_type", I), c.searchParams.set("client_id", r.client_id), c.searchParams.set("code_challenge", d), c.searchParams.set("code_challenge_method", C), c.searchParams.set("redirect_uri", String(n)), s && c.searchParams.set("state", s);
        o && c.searchParams.set("scope", o);
        o?.includes("offline_access") && c.searchParams.append("prompt", "consent");
        a && c.searchParams.set("resource", a.href);
        return {
            authorizationUrl: c,
            codeVerifier: l
        };
    }(l, {
        metadata: p,
        clientInformation: h,
        state: y,
        redirectUrl: e.redirectUrl,
        scope: f,
        resource: d
    });
    return await e.saveCodeVerifier(v), await e.redirectToAuthorization(_), "REDIRECT";
}
async function M(e, t, r) {
    const n = function(e) {
        const t = "string" == typeof e ? new URL(e) : new URL(e.href);
        return t.hash = "", t;
    }(e);
    if (t.validateResourceURL) return await t.validateResourceURL(n, r?.resource);
    if (r) {
        if (!function({ requestedResource: e, configuredResource: t }) {
            const r = "string" == typeof e ? new URL(e) : new URL(e.href), n = "string" == typeof t ? new URL(t) : new URL(t.href);
            if (r.origin !== n.origin) return !1;
            if (r.pathname.length < n.pathname.length) return !1;
            const o = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", s = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
            return o.startsWith(s);
        }({
            requestedResource: n,
            configuredResource: r.resource
        })) throw new Error(`Protected resource ${r.resource} does not match expected ${n} (or origin)`);
        return new URL(r.resource);
    }
}
function J(e) {
    const t = e.headers.get("WWW-Authenticate");
    if (!t) return {};
    const [r, n] = t.split(" ");
    if ("bearer" !== r.toLowerCase() || !n) return {};
    const o = j(e, "resource_metadata") || void 0;
    let s;
    if (o) try {
        s = new URL(o);
    } catch  {}
    return {
        resourceMetadataUrl: s,
        scope: j(e, "scope") || void 0,
        error: j(e, "error") || void 0
    };
}
function j(e, t) {
    const r = e.headers.get("WWW-Authenticate");
    if (!r) return null;
    const n = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`), o = r.match(n);
    return o ? o[1] || o[2] : null;
}
async function D(e, t, r = fetch) {
    const n = await z(e, "oauth-protected-resource", r, {
        protocolVersion: t?.protocolVersion,
        metadataUrl: t?.resourceMetadataUrl
    });
    if (!n || 404 === n.status) throw await n?.body?.cancel(), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
    if (!n.ok) throw await n.body?.cancel(), new Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
    return f.parse(await n.json());
}
async function F(e, t, r = fetch) {
    try {
        return await r(e, {
            headers: t
        });
    } catch (n) {
        if (n instanceof TypeError) return t ? F(e, void 0, r) : void 0;
        throw n;
    }
}
async function q(e, t, r = fetch) {
    const n = {
        "MCP-Protocol-Version": t
    };
    return await F(e, n, r);
}
async function z(e, t, r, n) {
    const o = new URL(e), s = n?.protocolVersion ?? a.aE;
    let i;
    if (n?.metadataUrl) i = new URL(n.metadataUrl);
    else {
        const e = function(e, t = "", r = {}) {
            return t.endsWith("/") && (t = t.slice(0, -1)), r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
        }(t, o.pathname);
        i = new URL(e, n?.metadataServerUrl ?? o), i.search = o.search;
    }
    let c = await q(i, s, r);
    if (!n?.metadataUrl && function(e, t) {
        return !e || e.status >= 400 && e.status < 500 && "/" !== t;
    }(c, o.pathname)) {
        const e = new URL(`/.well-known/${t}`, o);
        c = await q(e, s, r);
    }
    return c;
}
async function U(e, { fetchFn: t = fetch, protocolVersion: r = a.aE } = {}) {
    const n = {
        "MCP-Protocol-Version": r,
        Accept: "application/json"
    }, o = function(e) {
        const t = "string" == typeof e ? new URL(e) : e, r = [];
        if ("/" === t.pathname) return r.push({
            url: new URL("/.well-known/oauth-authorization-server", t.origin),
            type: "oauth"
        }), r.push({
            url: new URL("/.well-known/openid-configuration", t.origin),
            type: "oidc"
        }), r;
        let n = t.pathname;
        return n.endsWith("/") && (n = n.slice(0, -1)), r.push({
            url: new URL(`/.well-known/oauth-authorization-server${n}`, t.origin),
            type: "oauth"
        }), r.push({
            url: new URL(`/.well-known/openid-configuration${n}`, t.origin),
            type: "oidc"
        }), r.push({
            url: new URL(`${n}/.well-known/openid-configuration`, t.origin),
            type: "oidc"
        }), r;
    }(e);
    for (const { url: e, type: r } of o){
        const o = await F(e, n, t);
        if (o) {
            if (!o.ok) {
                if (await o.body?.cancel(), o.status >= 400 && o.status < 500) continue;
                throw new Error(`HTTP ${o.status} trying to load ${"oauth" === r ? "OAuth" : "OpenID provider"} metadata from ${e}`);
            }
            return "oauth" === r ? h.parse(await o.json()) : g.parse(await o.json());
        }
    }
}
function B(e, t, r) {
    return new URLSearchParams({
        grant_type: "authorization_code",
        code: e,
        code_verifier: t,
        redirect_uri: String(r)
    });
}
async function L(e, { metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: o, resource: s, fetchFn: i }) {
    const a = t?.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), c = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    });
    if (s && r.set("resource", s.href), o) await o(c, r, a, t);
    else if (n) {
        const e = function(e, t) {
            const r = void 0 !== e.client_secret;
            return 0 === t.length ? r ? "client_secret_post" : "none" : "token_endpoint_auth_method" in e && e.token_endpoint_auth_method && (n = e.token_endpoint_auth_method, [
                "client_secret_basic",
                "client_secret_post",
                "none"
            ].includes(n)) && t.includes(e.token_endpoint_auth_method) ? e.token_endpoint_auth_method : r && t.includes("client_secret_basic") ? "client_secret_basic" : r && t.includes("client_secret_post") ? "client_secret_post" : t.includes("none") ? "none" : r ? "client_secret_post" : "none";
            var n;
        }(n, t?.token_endpoint_auth_methods_supported ?? []);
        A(e, n, c, r);
    }
    const u = await (i ?? fetch)(a, {
        method: "POST",
        headers: c,
        body: r
    });
    if (!u.ok) throw await $(u);
    return y.parse(await u.json());
}
async function V(e, { metadata: t, clientInformation: r, authorizationCode: n, codeVerifier: o, redirectUri: s, resource: i, addClientAuthentication: a, fetchFn: c }) {
    return L(e, {
        metadata: t,
        tokenRequestParams: B(n, o, s),
        clientInformation: r,
        addClientAuthentication: a,
        resource: i,
        fetchFn: c
    });
}
async function K(e, { metadata: t, clientMetadata: r, fetchFn: n }) {
    let o;
    if (t) {
        if (!t.registration_endpoint) throw new Error("Incompatible auth server: does not support dynamic client registration");
        o = new URL(t.registration_endpoint);
    } else o = new URL("/register", e);
    const s = await (n ?? fetch)(o, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(r)
    });
    if (!s.ok) throw await $(s);
    return k.parse(await s.json());
}
