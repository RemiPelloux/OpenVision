"use strict";
let n;
async function s(e) {
    const t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
    let r = "";
    const s = await async function(e) {
        return (await n).getRandomValues(new Uint8Array(e));
    }(e);
    for(let n = 0; n < e; n++){
        r += t[s[n] % 66];
    }
    return r;
}
async function o(e) {
    const t = await (await n).subtle.digest("SHA-256", (new TextEncoder).encode(e));
    return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function i(e) {
    if (e || (e = 43), e < 43 || e > 128) throw `Expected a length between 43 and 128. Received ${e}.`;
    const t = await async function(e) {
        return await s(e);
    }(e);
    return {
        code_verifier: t,
        code_challenge: await o(t)
    };
}
require.d(exports, {
    D_: ()=>I,
    j2: ()=>J,
    eH: ()=>q
}), n = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? Promise.resolve().then(require.t.bind(require, 77598, 19)).then((e)=>e.webcrypto);
var a = require("./module-3925.js"), c = require("./module-61165.js");
const l = "custom";
var u = require("./module-47381.js"), d = require("./module-87888.js");
const p = c.OZ().superRefine((e, t)=>{
    if (!URL.canParse(e)) return t.addIssue({
        code: l,
        message: "URL must be parseable",
        fatal: !0
    }), u.tm;
}).refine((e)=>{
    const t = new URL(e);
    return "javascript:" !== t.protocol && "data:" !== t.protocol && "vbscript:" !== t.protocol;
}, {
    message: "URL cannot use javascript:, data:, or vbscript: scheme"
}), m = c._H({
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
}), f = c._H({
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
    ...f.shape,
    ...h.pick({
        code_challenge_methods_supported: !0
    }).shape
}), y = c.Ik({
    access_token: c.Yj(),
    id_token: c.Yj().optional(),
    token_type: c.Yj(),
    expires_in: d.qG(c.rS, w).optional(),
    scope: c.Yj().optional(),
    refresh_token: c.Yj().optional()
}).strip();
var w;
const v = c.Ik({
    error: c.Yj(),
    error_description: c.Yj().optional(),
    error_uri: c.Yj().optional()
}), _ = p.optional().or(c.eu("").transform(()=>{})), A = c.Ik({
    redirect_uris: c.YO(p),
    token_endpoint_auth_method: c.Yj().optional(),
    grant_types: c.YO(c.Yj()).optional(),
    response_types: c.YO(c.Yj()).optional(),
    client_name: c.Yj().optional(),
    client_uri: p.optional(),
    logo_uri: _,
    scope: c.Yj().optional(),
    contacts: c.YO(c.Yj()).optional(),
    tos_uri: _,
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
}).strip(), b = A.merge(S);
c.Ik({
    error: c.Yj(),
    error_description: c.Yj().optional()
}).strip(), c.Ik({
    token: c.Yj(),
    token_type_hint: c.Yj().optional()
}).strip();
var E = require("./module-9939.js");
class I extends Error {
    constructor(e){
        super(e ?? "Unauthorized");
    }
}
function C(e, t) {
    return !0 === t?.isRetryableOAuthRefreshError?.(e);
}
const k = "offline_access";
function x(e) {
    return e instanceof E.W5 && !/^HTTP 5\d\d:/.test(e.message) && ("invalid_redirect_uri" === e.errorCode || /redirect/i.test(e.message));
}
const T = "code", R = "S256";
function B(e, t, r, n) {
    const { client_id: s, client_secret: o } = t;
    switch(e){
        case "client_secret_basic":
            return void function(e, t, r) {
                if (!t) throw new Error("client_secret_basic authentication requires a client_secret");
                const n = btoa(`${e}:${t}`);
                r.set("Authorization", `Basic ${n}`);
            }(s, o, r);
        case "client_secret_post":
            return void function(e, t, r) {
                r.set("client_id", e), t && r.set("client_secret", t);
            }(s, o, n);
        case "none":
            return void function(e, t) {
                t.set("client_id", e);
            }(s, n);
        default:
            throw new Error(`Unsupported client authentication method: ${e}`);
    }
}
async function P(e) {
    const t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
    try {
        const e = v.parse(JSON.parse(r)), { error: t, error_description: n, error_uri: s } = e;
        return new (E.WX[t] || E.gP)(n || "", s);
    } catch (e) {
        const n = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${e}. Raw body: ${r}`;
        return new E.gP(n);
    }
}
async function J(e, t) {
    try {
        return await M(e, t);
    } catch (r) {
        if (r instanceof Error && "OAuthRefreshTransientError" === r.name) throw r;
        if (r instanceof E.Pg || r instanceof E.g) return await e.invalidateCredentials?.("all"), await M(e, t);
        if (r instanceof E.Gy) return await e.invalidateCredentials?.("tokens"), await M(e, t);
        throw r;
    }
}
async function M(e, { serverUrl: t, authorizationCode: r, scope: n, resourceMetadataUrl: s, fetchFn: o }) {
    const c = e.getOAuthHttpFetch?.(), l = c ?? o;
    let u, d;
    try {
        u = await async function(e, t, r = fetch) {
            const n = await F(e, "oauth-protected-resource", r, {
                protocolVersion: t?.protocolVersion,
                metadataUrl: t?.resourceMetadataUrl
            });
            if (!n || 404 === n.status) throw await n?.body?.cancel(), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
            if (!n.ok) throw await n.body?.cancel(), new Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
            return m.parse(await n.json());
        }(t, {
            resourceMetadataUrl: s
        }, o), u.authorization_servers && u.authorization_servers.length > 0 && (d = u.authorization_servers[0]);
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
            const s = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", o = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
            return s.startsWith(o);
        }({
            requestedResource: n,
            configuredResource: r.resource
        })) throw new Error(`Protected resource ${r.resource} does not match expected ${n} (or origin)`);
        return new URL(r.resource);
    }(t, e, u), f = await async function(e, { fetchFn: t = fetch, protocolVersion: r = a.aE } = {}) {
        const n = {
            "MCP-Protocol-Version": r,
            Accept: "application/json"
        }, s = function(e) {
            const t = "string" == typeof e ? new URL(e) : e, r = "/" !== t.pathname, n = [];
            if (!r) return n.push({
                url: new URL("/.well-known/oauth-authorization-server", t.origin),
                type: "oauth"
            }), n.push({
                url: new URL("/.well-known/openid-configuration", t.origin),
                type: "oidc"
            }), n;
            let s = t.pathname;
            s.endsWith("/") && (s = s.slice(0, -1));
            return n.push({
                url: new URL(`/.well-known/oauth-authorization-server${s}`, t.origin),
                type: "oauth"
            }), n.push({
                url: new URL(`/.well-known/openid-configuration${s}`, t.origin),
                type: "oidc"
            }), n.push({
                url: new URL(`${s}/.well-known/openid-configuration`, t.origin),
                type: "oidc"
            }), n;
        }(e);
        for (const { url: e, type: r } of s){
            const s = await O(e, n, t);
            if (s) {
                if (!s.ok) {
                    if (await s.body?.cancel(), s.status >= 400 && s.status < 500) continue;
                    throw new Error(`HTTP ${s.status} trying to load ${"oauth" === r ? "OAuth" : "OpenID provider"} metadata from ${e}`);
                }
                return "oauth" === r ? h.parse(await s.json()) : g.parse(await s.json());
            }
        }
        return;
    }(d, {
        fetchFn: o
    }), y = function(e, t, r, n) {
        const s = t?.scopes_supported, o = e || s?.join(" ") || r;
        if (!o || ![
            s,
            n?.scopes_supported
        ].some((e)=>Array.isArray(e) && e.includes(k))) return o;
        const i = o.split(/\s+/).filter((e)=>e.length > 0);
        return i.includes(k) ? o : [
            ...i,
            k
        ].join(" ");
    }(n, u, e.clientMetadata.scope, f);
    let w = await Promise.resolve(e.clientInformation());
    if (!w) {
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
        }(n)) throw new E.gr(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${n}`);
        if (t && n) w = {
            client_id: n
        }, await e.saveClientInformation?.(w);
        else {
            if (!e.saveClientInformation) throw new Error("OAuth client information must be saveable for dynamic registration");
            const t = await async function(e, t, { metadata: r, clientMetadata: n, fetchFn: s }) {
                await e.prepareForClientRegistration?.();
                const o = String(e.redirectUrl), i = n.redirect_uris ?? [], a = i.includes(o) ? [
                    ...i
                ] : [
                    ...i,
                    o
                ], c = a.length > 1 ? [
                    a,
                    [
                        o
                    ]
                ] : [
                    a
                ];
                let l;
                for (const e of c)try {
                    const o = await $(t, {
                        metadata: r,
                        clientMetadata: {
                            ...n,
                            redirect_uris: e
                        },
                        fetchFn: s
                    });
                    return o.redirect_uris?.length ? o : {
                        ...o,
                        redirect_uris: e
                    };
                } catch (e) {
                    if (!x(e)) throw e;
                    l = e;
                }
                throw l;
            }(e, d, {
                metadata: f,
                clientMetadata: void 0 !== y ? {
                    ...e.clientMetadata,
                    scope: y
                } : e.clientMetadata,
                fetchFn: l
            });
            await e.saveClientInformation(t), w = t;
        }
    }
    const v = !e.redirectUrl;
    if (void 0 !== r || v) {
        const t = await async function(e, t, { metadata: r, resource: n, authorizationCode: s, fetchFn: o } = {}) {
            const i = e.clientMetadata.scope;
            let a;
            e.prepareTokenRequest && (a = await e.prepareTokenRequest(i));
            if (!a) {
                if (!s) throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
                if (!e.redirectUrl) throw new Error("redirectUrl is required for authorization_code flow");
                a = U(s, await e.codeVerifier(), e.redirectUrl);
            }
            const c = await e.clientInformation();
            return L(t, {
                metadata: r,
                tokenRequestParams: a,
                clientInformation: c ?? void 0,
                addClientAuthentication: e.addClientAuthentication,
                resource: n,
                fetchFn: o
            });
        }(e, d, {
            metadata: f,
            resource: p,
            authorizationCode: r,
            fetchFn: l
        });
        return await e.saveTokens(t), "AUTHORIZED";
    }
    const _ = await e.tokens();
    if (_?.refresh_token) try {
        await e.prepareForRefresh?.();
        const t = await async function(e, { metadata: t, clientInformation: r, refreshToken: n, resource: s, addClientAuthentication: o, fetchFn: i }) {
            const a = new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: n
            }), c = await L(e, {
                metadata: t,
                tokenRequestParams: a,
                clientInformation: r,
                addClientAuthentication: o,
                resource: s,
                fetchFn: i
            });
            return {
                refresh_token: n,
                ...c
            };
        }(d, {
            metadata: f,
            clientInformation: w,
            refreshToken: _.refresh_token,
            resource: p,
            addClientAuthentication: e.addClientAuthentication,
            fetchFn: l
        });
        return await e.saveTokens(t), "AUTHORIZED";
    } catch (t) {
        if (t && "SiblingAlreadyRefreshedError" === t.name) throw t;
        const r = t instanceof E.W5, n = t instanceof E.gP, s = C(t, e), o = r && !n && !(t instanceof E.pv) || s;
        if (e.logRefreshCatchBranch?.({
            errorIsOAuthError: r,
            errorIsServerError: n,
            errorIsRetryable: s,
            willFallThrough: !o,
            willRethrow: o,
            errorName: t instanceof Error ? t.name : typeof t,
            errorMessage: t instanceof Error ? t.message : String(t),
            underlyingError: t
        }), await e.releaseRefreshLeaseOnError?.(t), t instanceof E.W5 && !(t instanceof E.gP) && !(t instanceof E.pv)) throw t;
        if (C(t, e)) {
            const e = new Error(t instanceof Error ? t.message : String(t));
            throw e.name = "OAuthRefreshTransientError", t instanceof Error && t.stack && (e.stack = t.stack), e;
        }
        if (t instanceof E.W5 && !(t instanceof E.gP)) throw t;
    }
    const A = e.state ? await e.state() : void 0, { authorizationUrl: S, codeVerifier: b } = await async function(e, { metadata: t, clientInformation: r, redirectUrl: n, scope: s, state: o, resource: a }) {
        let c;
        if (t) {
            if (c = new URL(t.authorization_endpoint), !t.response_types_supported.includes(T)) throw new Error(`Incompatible auth server: does not support response type ${T}`);
            if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(R)) throw new Error(`Incompatible auth server: does not support code challenge method ${R}`);
        } else c = new URL("/authorize", e);
        const l = await i(), u = l.code_verifier, d = l.code_challenge;
        c.searchParams.set("response_type", T), c.searchParams.set("client_id", r.client_id), c.searchParams.set("code_challenge", d), c.searchParams.set("code_challenge_method", R), c.searchParams.set("redirect_uri", String(n)), o && c.searchParams.set("state", o);
        s && c.searchParams.set("scope", s);
        s?.includes("offline_access") && c.searchParams.append("prompt", "consent");
        a && c.searchParams.set("resource", a.href);
        return {
            authorizationUrl: c,
            codeVerifier: u
        };
    }(d, {
        metadata: f,
        clientInformation: w,
        state: A,
        redirectUrl: e.redirectUrl,
        scope: y,
        resource: p
    });
    return await e.saveCodeVerifier(b), await e.redirectToAuthorization(S), "REDIRECT";
}
function q(e) {
    const t = e.headers.get("WWW-Authenticate");
    if (!t) return {};
    const [r, n] = t.split(" ");
    if ("bearer" !== r.toLowerCase() || !n) return {};
    const s = D(e, "resource_metadata") || void 0;
    let o;
    if (s) try {
        o = new URL(s);
    } catch  {}
    return {
        resourceMetadataUrl: o,
        scope: D(e, "scope") || void 0,
        error: D(e, "error") || void 0
    };
}
function D(e, t) {
    const r = e.headers.get("WWW-Authenticate");
    if (!r) return null;
    const n = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`), s = r.match(n);
    return s ? s[1] || s[2] : null;
}
async function O(e, t, r = fetch) {
    try {
        return await r(e, {
            headers: t
        });
    } catch (n) {
        if (n instanceof TypeError) return t ? O(e, void 0, r) : void 0;
        throw n;
    }
}
async function N(e, t, r = fetch) {
    const n = {
        "MCP-Protocol-Version": t
    };
    return await O(e, n, r);
}
async function F(e, t, r, n) {
    const s = new URL(e), o = n?.protocolVersion ?? a.aE;
    let i;
    if (n?.metadataUrl) i = new URL(n.metadataUrl);
    else {
        const e = function(e, t = "", r = {}) {
            return t.endsWith("/") && (t = t.slice(0, -1)), r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
        }(t, s.pathname);
        i = new URL(e, n?.metadataServerUrl ?? s), i.search = s.search;
    }
    let c = await N(i, o, r);
    if (!n?.metadataUrl && function(e, t) {
        return !e || e.status >= 400 && e.status < 500 && "/" !== t;
    }(c, s.pathname)) {
        const e = new URL(`/.well-known/${t}`, s);
        c = await N(e, o, r);
    }
    return c;
}
function U(e, t, r) {
    return new URLSearchParams({
        grant_type: "authorization_code",
        code: e,
        code_verifier: t,
        redirect_uri: String(r)
    });
}
async function L(e, { metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: s, resource: o, fetchFn: i }) {
    const a = t?.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), c = new Headers({
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
    });
    if (o && r.set("resource", o.href), s) await s(c, r, a, t);
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
        B(e, n, c, r);
    }
    const l = await (i ?? fetch)(a, {
        method: "POST",
        headers: c,
        body: r
    });
    if (!l.ok) throw await P(l);
    return y.parse(await l.json());
}
async function $(e, { metadata: t, clientMetadata: r, fetchFn: n }) {
    let s;
    if (t) {
        if (!t.registration_endpoint) throw new Error("Incompatible auth server: does not support dynamic client registration");
        s = new URL(t.registration_endpoint);
    } else s = new URL("/register", e);
    const o = await (n ?? fetch)(s, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(r)
    });
    if (!o.ok) throw await P(o);
    return b.parse(await o.json());
}
