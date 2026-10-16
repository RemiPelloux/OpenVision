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
    D_: ()=>E,
    j2: ()=>O,
    eH: ()=>N
}), n = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? Promise.resolve().then(require.t.bind(require, 77598, 19)).then((e)=>e.webcrypto);
var a = require("./module-26306.js"), l = require("./module-61165.js");
const c = "custom";
var u = require("./module-47381.js"), d = require("./module-87888.js");
const p = l.OZ().superRefine((e, t)=>{
    if (!URL.canParse(e)) return t.addIssue({
        code: c,
        message: "URL must be parseable",
        fatal: !0
    }), u.tm;
}).refine((e)=>{
    const t = new URL(e);
    return "javascript:" !== t.protocol && "data:" !== t.protocol && "vbscript:" !== t.protocol;
}, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
}), h = l._H({
    resource: l.Yj().url(),
    authorization_servers: l.YO(p).optional(),
    jwks_uri: l.Yj().url().optional(),
    scopes_supported: l.YO(l.Yj()).optional(),
    bearer_methods_supported: l.YO(l.Yj()).optional(),
    resource_signing_alg_values_supported: l.YO(l.Yj()).optional(),
    resource_name: l.Yj().optional(),
    resource_documentation: l.Yj().optional(),
    resource_policy_uri: l.Yj().url().optional(),
    resource_tos_uri: l.Yj().url().optional(),
    tls_client_certificate_bound_access_tokens: l.zM().optional(),
    authorization_details_types_supported: l.YO(l.Yj()).optional(),
    dpop_signing_alg_values_supported: l.YO(l.Yj()).optional(),
    dpop_bound_access_tokens_required: l.zM().optional()
}), m = l._H({
    issuer: l.Yj(),
    authorization_endpoint: p,
    token_endpoint: p,
    registration_endpoint: p.optional(),
    scopes_supported: l.YO(l.Yj()).optional(),
    response_types_supported: l.YO(l.Yj()),
    response_modes_supported: l.YO(l.Yj()).optional(),
    grant_types_supported: l.YO(l.Yj()).optional(),
    token_endpoint_auth_methods_supported: l.YO(l.Yj()).optional(),
    token_endpoint_auth_signing_alg_values_supported: l.YO(l.Yj()).optional(),
    service_documentation: p.optional(),
    revocation_endpoint: p.optional(),
    revocation_endpoint_auth_methods_supported: l.YO(l.Yj()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: l.YO(l.Yj()).optional(),
    introspection_endpoint: l.Yj().optional(),
    introspection_endpoint_auth_methods_supported: l.YO(l.Yj()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: l.YO(l.Yj()).optional(),
    code_challenge_methods_supported: l.YO(l.Yj()).optional(),
    client_id_metadata_document_supported: l.zM().optional()
}), f = l._H({
    issuer: l.Yj(),
    authorization_endpoint: p,
    token_endpoint: p,
    userinfo_endpoint: p.optional(),
    jwks_uri: p,
    registration_endpoint: p.optional(),
    scopes_supported: l.YO(l.Yj()).optional(),
    response_types_supported: l.YO(l.Yj()),
    response_modes_supported: l.YO(l.Yj()).optional(),
    grant_types_supported: l.YO(l.Yj()).optional(),
    acr_values_supported: l.YO(l.Yj()).optional(),
    subject_types_supported: l.YO(l.Yj()),
    id_token_signing_alg_values_supported: l.YO(l.Yj()),
    id_token_encryption_alg_values_supported: l.YO(l.Yj()).optional(),
    id_token_encryption_enc_values_supported: l.YO(l.Yj()).optional(),
    userinfo_signing_alg_values_supported: l.YO(l.Yj()).optional(),
    userinfo_encryption_alg_values_supported: l.YO(l.Yj()).optional(),
    userinfo_encryption_enc_values_supported: l.YO(l.Yj()).optional(),
    request_object_signing_alg_values_supported: l.YO(l.Yj()).optional(),
    request_object_encryption_alg_values_supported: l.YO(l.Yj()).optional(),
    request_object_encryption_enc_values_supported: l.YO(l.Yj()).optional(),
    token_endpoint_auth_methods_supported: l.YO(l.Yj()).optional(),
    token_endpoint_auth_signing_alg_values_supported: l.YO(l.Yj()).optional(),
    display_values_supported: l.YO(l.Yj()).optional(),
    claim_types_supported: l.YO(l.Yj()).optional(),
    claims_supported: l.YO(l.Yj()).optional(),
    service_documentation: l.Yj().optional(),
    claims_locales_supported: l.YO(l.Yj()).optional(),
    ui_locales_supported: l.YO(l.Yj()).optional(),
    claims_parameter_supported: l.zM().optional(),
    request_parameter_supported: l.zM().optional(),
    request_uri_parameter_supported: l.zM().optional(),
    require_request_uri_registration: l.zM().optional(),
    op_policy_uri: p.optional(),
    op_tos_uri: p.optional(),
    client_id_metadata_document_supported: l.zM().optional()
}), g = l.Ik({
    ...f.shape,
    ...m.pick({
        code_challenge_methods_supported: !0
    }).shape
}), y = l.Ik({
    access_token: l.Yj(),
    id_token: l.Yj().optional(),
    token_type: l.Yj(),
    expires_in: d.qG(l.rS, v).optional(),
    scope: l.Yj().optional(),
    refresh_token: l.Yj().optional()
}).strip();
var v;
const w = l.Ik({
    error: l.Yj(),
    error_description: l.Yj().optional(),
    error_uri: l.Yj().optional()
}), b = p.optional().or(l.eu("").transform(()=>{})), _ = l.Ik({
    redirect_uris: l.YO(p),
    token_endpoint_auth_method: l.Yj().optional(),
    grant_types: l.YO(l.Yj()).optional(),
    response_types: l.YO(l.Yj()).optional(),
    client_name: l.Yj().optional(),
    client_uri: p.optional(),
    logo_uri: b,
    scope: l.Yj().optional(),
    contacts: l.YO(l.Yj()).optional(),
    tos_uri: b,
    policy_uri: l.Yj().optional(),
    jwks_uri: p.optional(),
    jwks: l.bz().optional(),
    software_id: l.Yj().optional(),
    software_version: l.Yj().optional(),
    software_statement: l.Yj().optional()
}).strip(), S = l.Ik({
    client_id: l.Yj(),
    client_secret: l.Yj().optional(),
    client_id_issued_at: l.ai().optional(),
    client_secret_expires_at: l.ai().optional()
}).strip(), x = _.merge(S);
l.Ik({
    error: l.Yj(),
    error_description: l.Yj().optional()
}).strip(), l.Ik({
    token: l.Yj(),
    token_type_hint: l.Yj().optional()
}).strip();
var k = require("./module-9939.js");
class E extends Error {
    constructor(e){
        super(e ?? "Unauthorized");
    }
}
function T(e, t) {
    return !0 === t?.isRetryableOAuthRefreshError?.(e);
}
const C = "offline_access";
function I(e) {
    return e instanceof k.W5 && !/^HTTP 5\d\d:/.test(e.message) && ("invalid_redirect_uri" === e.errorCode || /redirect/i.test(e.message));
}
const A = "code", P = "S256";
function M(e, t, r, n) {
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
async function R(e) {
    const t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
    try {
        const e = w.parse(JSON.parse(r)), { error: t, error_description: n, error_uri: o } = e;
        return new (k.WX[t] || k.gP)(n || "", o);
    } catch (e) {
        const n = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${e}. Raw body: ${r}`;
        return new k.gP(n);
    }
}
async function O(e, t) {
    try {
        return await D(e, t);
    } catch (r) {
        if (r instanceof Error && "OAuthRefreshTransientError" === r.name) throw r;
        if (r instanceof k.Pg || r instanceof k.g) return await e.invalidateCredentials?.("all"), await D(e, t);
        if (r instanceof k.Gy) return await e.invalidateCredentials?.("tokens"), await D(e, t);
        throw r;
    }
}
async function D(e, { serverUrl: t, authorizationCode: r, scope: n, resourceMetadataUrl: o, fetchFn: s }) {
    const l = e.getOAuthHttpFetch?.(), c = l ?? s;
    let u, d;
    try {
        u = await async function(e, t, r = fetch) {
            const n = await B(e, "oauth-protected-resource", r, {
                protocolVersion: t?.protocolVersion,
                metadataUrl: t?.resourceMetadataUrl
            });
            if (!n || 404 === n.status) throw await n?.body?.cancel(), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
            if (!n.ok) throw await n.body?.cancel(), new Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
            return h.parse(await n.json());
        }(t, {
            resourceMetadataUrl: o
        }, s), u.authorization_servers && u.authorization_servers.length > 0 && (d = u.authorization_servers[0]);
    } catch  {}
    d || (d = new URL("/", t));
    const p = await async function(e, t, r) {
        const n = function(e) {
            const t = "string" == typeof e ? new URL(e) : new URL(e.href);
            return t.hash = "", t;
        }(e);
        if (t.validateResourceURL) return await t.validateResourceURL(n, r?.resource);
        if (!r) return;
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
    }(t, e, u), f = await async function(e, { fetchFn: t = fetch, protocolVersion: r = a.aE } = {}) {
        const n = {
            "MCP-Protocol-Version": r,
            Accept: "application/json"
        }, o = function(e) {
            const t = "string" == typeof e ? new URL(e) : e, r = "/" !== t.pathname, n = [];
            if (!r) return n.push({
                url: new URL("/.well-known/oauth-authorization-server", t.origin),
                type: "oauth"
            }), n.push({
                url: new URL("/.well-known/openid-configuration", t.origin),
                type: "oidc"
            }), n;
            let o = t.pathname;
            o.endsWith("/") && (o = o.slice(0, -1));
            return n.push({
                url: new URL(`/.well-known/oauth-authorization-server${o}`, t.origin),
                type: "oauth"
            }), n.push({
                url: new URL(`/.well-known/openid-configuration${o}`, t.origin),
                type: "oidc"
            }), n.push({
                url: new URL(`${o}/.well-known/openid-configuration`, t.origin),
                type: "oidc"
            }), n;
        }(e);
        for (const { url: e, type: r } of o){
            const o = await L(e, n, t);
            if (o) {
                if (!o.ok) {
                    if (await o.body?.cancel(), o.status >= 400 && o.status < 500) continue;
                    throw new Error(`HTTP ${o.status} trying to load ${"oauth" === r ? "OAuth" : "OpenID provider"} metadata from ${e}`);
                }
                return "oauth" === r ? m.parse(await o.json()) : g.parse(await o.json());
            }
        }
        return;
    }(d, {
        fetchFn: s
    }), y = function(e, t, r, n) {
        const o = t?.scopes_supported, s = e || o?.join(" ") || r;
        if (!s || ![
            o,
            n?.scopes_supported
        ].some((e)=>Array.isArray(e) && e.includes(C))) return s;
        const i = s.split(/\s+/).filter((e)=>e.length > 0);
        return i.includes(C) ? s : [
            ...i,
            C
        ].join(" ");
    }(n, u, e.clientMetadata.scope, f);
    let v = await Promise.resolve(e.clientInformation());
    if (!v) {
        if (void 0 !== r) throw new Error("Existing OAuth client information is required when exchanging an authorization code");
        const t = !0 === f?.client_id_metadata_document_supported, n = e.clientMetadataUrl;
        if (n && !function(e) {
            if (!e) return !1;
            try {
                const t = new URL(e);
                return "https:" === t.protocol && "/" !== t.pathname;
            } catch  {
                return !1;
            }
        }(n)) throw new k.gr(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${n}`);
        if (t && n) v = {
            client_id: n
        }, await e.saveClientInformation?.(v);
        else {
            if (!e.saveClientInformation) throw new Error("OAuth client information must be saveable for dynamic registration");
            const t = await async function(e, t, { metadata: r, clientMetadata: n, fetchFn: o }) {
                await e.prepareForClientRegistration?.();
                const s = String(e.redirectUrl), i = n.redirect_uris ?? [], a = i.includes(s) ? [
                    ...i
                ] : [
                    ...i,
                    s
                ], l = a.length > 1 ? [
                    a,
                    [
                        s
                    ]
                ] : [
                    a
                ];
                let c;
                for (const e of l)try {
                    const s = await j(t, {
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
                    if (!I(e)) throw e;
                    c = e;
                }
                throw c;
            }(e, d, {
                metadata: f,
                clientMetadata: void 0 !== y ? {
                    ...e.clientMetadata,
                    scope: y
                } : e.clientMetadata,
                fetchFn: c
            });
            await e.saveClientInformation(t), v = t;
        }
    }
    const w = !e.redirectUrl;
    if (void 0 !== r || w) {
        const t = await async function(e, t, { metadata: r, resource: n, authorizationCode: o, fetchFn: s } = {}) {
            const i = e.clientMetadata.scope;
            let a;
            e.prepareTokenRequest && (a = await e.prepareTokenRequest(i));
            if (!a) {
                if (!o) throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
                if (!e.redirectUrl) throw new Error("redirectUrl is required for authorization_code flow");
                a = $(o, await e.codeVerifier(), e.redirectUrl);
            }
            const l = await e.clientInformation();
            return q(t, {
                metadata: r,
                tokenRequestParams: a,
                clientInformation: l ?? void 0,
                addClientAuthentication: e.addClientAuthentication,
                resource: n,
                fetchFn: s
            });
        }(e, d, {
            metadata: f,
            resource: p,
            authorizationCode: r,
            fetchFn: c
        });
        return await e.saveTokens(t), "AUTHORIZED";
    }
    const b = await e.tokens();
    if (b?.refresh_token) try {
        await e.prepareForRefresh?.();
        const t = await async function(e, { metadata: t, clientInformation: r, refreshToken: n, resource: o, addClientAuthentication: s, fetchFn: i }) {
            const a = new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: n
            }), l = await q(e, {
                metadata: t,
                tokenRequestParams: a,
                clientInformation: r,
                addClientAuthentication: s,
                resource: o,
                fetchFn: i
            });
            return {
                refresh_token: n,
                ...l
            };
        }(d, {
            metadata: f,
            clientInformation: v,
            refreshToken: b.refresh_token,
            resource: p,
            addClientAuthentication: e.addClientAuthentication,
            fetchFn: c
        });
        return await e.saveTokens(t), "AUTHORIZED";
    } catch (t) {
        if (t && "SiblingAlreadyRefreshedError" === t.name) throw t;
        const r = t instanceof k.W5, n = t instanceof k.gP, o = T(t, e), s = r && !n && !(t instanceof k.pv) || o;
        if (e.logRefreshCatchBranch?.({
            errorIsOAuthError: r,
            errorIsServerError: n,
            errorIsRetryable: o,
            willFallThrough: !s,
            willRethrow: s,
            errorName: t instanceof Error ? t.name : typeof t,
            errorMessage: t instanceof Error ? t.message : String(t),
            underlyingError: t
        }), await e.releaseRefreshLeaseOnError?.(t), t instanceof k.W5 && !(t instanceof k.gP) && !(t instanceof k.pv)) throw t;
        if (T(t, e)) {
            const e = new Error(t instanceof Error ? t.message : String(t));
            throw e.name = "OAuthRefreshTransientError", t instanceof Error && t.stack && (e.stack = t.stack), e;
        }
        if (t instanceof k.W5 && !(t instanceof k.gP)) throw t;
    }
    const _ = e.state ? await e.state() : void 0, { authorizationUrl: S, codeVerifier: x } = await async function(e, { metadata: t, clientInformation: r, redirectUrl: n, scope: o, state: s, resource: a }) {
        let l;
        if (t) {
            if (l = new URL(t.authorization_endpoint), !t.response_types_supported.includes(A)) throw new Error(`Incompatible auth server: does not support response type ${A}`);
            if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(P)) throw new Error(`Incompatible auth server: does not support code challenge method ${P}`);
        } else l = new URL("/authorize", e);
        const c = await i(), u = c.code_verifier, d = c.code_challenge;
        l.searchParams.set("response_type", A), l.searchParams.set("client_id", r.client_id), l.searchParams.set("code_challenge", d), l.searchParams.set("code_challenge_method", P), l.searchParams.set("redirect_uri", String(n)), s && l.searchParams.set("state", s);
        o && l.searchParams.set("scope", o);
        o?.includes("offline_access") && l.searchParams.append("prompt", "consent");
        a && l.searchParams.set("resource", a.href);
        return {
            authorizationUrl: l,
            codeVerifier: u
        };
    }(d, {
        metadata: f,
        clientInformation: v,
        state: _,
        redirectUrl: e.redirectUrl,
        scope: y,
        resource: p
    });
    return await e.saveCodeVerifier(x), await e.redirectToAuthorization(S), "REDIRECT";
}
function N(e) {
    const t = e.headers.get("WWW-Authenticate");
    if (!t) return {};
    const [r, n] = t.split(" ");
    if ("bearer" !== r.toLowerCase() || !n) return {};
    const o = F(e, "resource_metadata") || void 0;
    let s;
    if (o) try {
        s = new URL(o);
    } catch  {}
    return {
        resourceMetadataUrl: s,
        scope: F(e, "scope") || void 0,
        error: F(e, "error") || void 0
    };
}
function F(e, t) {
    const r = e.headers.get("WWW-Authenticate");
    if (!r) return null;
    const n = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`), o = r.match(n);
    return o ? o[1] || o[2] : null;
}
async function L(e, t, r = fetch) {
    try {
        return await r(e, {
            headers: t
        });
    } catch (n) {
        if (n instanceof TypeError) return t ? L(e, void 0, r) : void 0;
        throw n;
    }
}
async function U(e, t, r = fetch) {
    const n = {
        "MCP-Protocol-Version": t
    };
    return await L(e, n, r);
}
async function B(e, t, r, n) {
    const o = new URL(e), s = n?.protocolVersion ?? a.aE;
    let i;
    if (n?.metadataUrl) i = new URL(n.metadataUrl);
    else {
        const e = function(e, t = "", r = {}) {
            return t.endsWith("/") && (t = t.slice(0, -1)), r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
        }(t, o.pathname);
        i = new URL(e, n?.metadataServerUrl ?? o), i.search = o.search;
    }
    let l = await U(i, s, r);
    if (!n?.metadataUrl && function(e, t) {
        return !e || e.status >= 400 && e.status < 500 && "/" !== t;
    }(l, o.pathname)) {
        const e = new URL(`/.well-known/${t}`, o);
        l = await U(e, s, r);
    }
    return l;
}
function $(e, t, r) {
    return new URLSearchParams({
        grant_type: "authorization_code",
        code: e,
        code_verifier: t,
        redirect_uri: String(r)
    });
}
async function q(e, { metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: o, resource: s, fetchFn: i }) {
    const a = t?.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), l = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    });
    if (s && r.set("resource", s.href), o) await o(l, r, a, t);
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
        M(e, n, l, r);
    }
    const c = await (i ?? fetch)(a, {
        method: "POST",
        headers: l,
        body: r
    });
    if (!c.ok) throw await R(c);
    return y.parse(await c.json());
}
async function j(e, { metadata: t, clientMetadata: r, fetchFn: n }) {
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
    if (!s.ok) throw await R(s);
    return x.parse(await s.json());
}
