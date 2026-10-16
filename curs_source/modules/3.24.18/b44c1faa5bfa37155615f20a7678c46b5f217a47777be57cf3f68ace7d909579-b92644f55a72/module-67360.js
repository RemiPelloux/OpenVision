"use strict";
require.d(exports, {
    W: ()=>z
});
var n = require("./module-77598.js");
const s = "local-cli-mode";
function o() {
    return "undefined" != typeof process && "true" === process.env?.CURSOR_AGENT_CLI_LOCAL_MODE;
}
function i(e) {
    return o() ? {
        ...e,
        [s]: "true"
    } : e;
}
var a = require("./module-31421.js"), c = require("./module-73024.js"), l = require("./module-48161.js"), u = require("./module-76760.js");
const d = (0, require("./module-57975.js").promisify)(a.execFile), p = "x-cursor-mdm-signin-policy", m = "sign_in_policy_violation";
class h extends Error {
    constructor(){
        super("Sign-in on this device is restricted by your organization's device policy. Sign in with an allowed account to continue."), this.name = "SignInPolicyViolationError";
    }
}
const f = [
    "com.todesktop.230313mzl4w4u92",
    "co.anysphere.cursor.dev"
], g = [
    "HKLM\\SOFTWARE\\Policies\\Cursor\\Cursor",
    "HKLM\\SOFTWARE\\Policies\\Microsoft\\Cursor",
    "HKLM\\SOFTWARE\\Policies\\Cursor\\Cursor Dev"
];
function y(e) {
    return (e ?? "").split(",").map((e)=>e.trim()).filter((e)=>e.length > 0);
}
function w(e) {
    return [
        ...new Set(y(e).map(Number).filter((e)=>Number.isSafeInteger(e) && e > 0))
    ];
}
function v(e) {
    let t = e.trim().toLowerCase();
    if (t.startsWith("@") && (t = t.slice(1)), 0 !== t.length && !t.includes("@") && !/\s/.test(t)) return t;
}
function _(e) {
    return void 0 !== A(e);
}
function A(e) {
    const t = function(e) {
        return "boolean" == typeof e ? e : "number" == typeof e ? 1 === e : "string" == typeof e && [
            "1",
            "true",
            "yes",
            "on"
        ].includes(e.trim().toLowerCase());
    }(e.SignInEnforcement), r = function(e) {
        return [
            ...new Set(y(e).filter((e)=>/^\d+$/.test(e)).map((e)=>BigInt(e).toString()).filter((e)=>"0" !== e))
        ];
    }(e.AllowedOrganizationIds), n = [
        ...new Set([
            ...w(e.AllowedTeamIds),
            ...w(e.AllowedTeamId)
        ])
    ], s = [
        ...new Set(y(e.AllowedLoginEmails).map((e)=>e.toLowerCase()).filter((e)=>e.includes("@")))
    ], o = [
        ...new Set(y(e.AllowedLoginDomains).map(v).filter((e)=>void 0 !== e))
    ];
    if (!t && 0 === r.length && 0 === n.length && 0 === s.length && 0 === o.length) return;
    const i = JSON.stringify({
        enforced: t,
        allowedOrganizationIds: r,
        allowedTeamIds: n.map(String),
        allowedLoginEmails: s,
        allowedLoginDomains: o
    });
    return `v1.${Buffer.from(i, "utf-8").toString("base64url")}`;
}
function S(e) {
    const t = [
        "SignInEnforcement",
        "AllowedOrganizationIds",
        "AllowedTeamIds",
        "AllowedTeamId",
        "AllowedLoginEmails",
        "AllowedLoginDomains"
    ], r = {};
    let n = !1;
    for (const s of t)void 0 !== e[s] && (r[s] = e[s], n = !0);
    return n ? r : void 0;
}
async function b() {
    const e = process.env.CURSOR_MDM_SIGN_IN_POLICY_JSON;
    if (void 0 !== e && e.length > 0) try {
        return S(JSON.parse(e));
    } catch  {
        return;
    }
    switch(process.platform){
        case "darwin":
            return await async function() {
                const e = [];
                for (const t of f)e.push(u.join("/Library/Managed Preferences", l.userInfo().username, `${t}.plist`), u.join("/Library/Managed Preferences", `${t}.plist`));
                let t;
                for (const r of e){
                    try {
                        await c.promises.access(r);
                    } catch  {
                        continue;
                    }
                    try {
                        const { stdout: e } = await d("plutil", [
                            "-convert",
                            "json",
                            "-o",
                            "-",
                            r
                        ]), n = S(JSON.parse(e));
                        if (void 0 !== n) {
                            if (_(n)) return n;
                            t ??= n;
                        }
                    } catch  {}
                }
                return t;
            }();
        case "win32":
            return await async function() {
                let e;
                for (const t of g){
                    let r;
                    try {
                        ({ stdout: r } = await d("reg.exe", [
                            "query",
                            t
                        ]));
                    } catch  {
                        continue;
                    }
                    const n = {};
                    for (const e of r.split(/\r?\n/)){
                        const t = /^\s{4}(\S+)\s+(REG_\w+)\s+(.*)$/.exec(e);
                        if (null === t) continue;
                        const [, r, s, o] = t;
                        n[r] = "REG_DWORD" === s ? Number.parseInt(o.trim(), 16) : o.trim();
                    }
                    const s = S(n);
                    if (void 0 !== s) {
                        if (_(s)) return s;
                        e ??= s;
                    }
                }
                return e;
            }();
        case "linux":
            return await async function() {
                const e = u.join(l.homedir(), ".cursor", "policy.json");
                try {
                    const t = await c.promises.readFile(e, "utf-8");
                    return S(JSON.parse(t));
                } catch  {
                    return;
                }
            }();
        default:
            return;
    }
}
let E, I = 0;
async function C() {
    const e = await async function() {
        const e = Date.now();
        if (e - I < 3e4) return E;
        try {
            const e = await b();
            E = void 0 === e ? void 0 : A(e);
        } catch  {
            E = void 0;
        }
        return I = e, E;
    }();
    return void 0 === e ? {} : {
        [p]: e
    };
}
var k = require("./module-41692.js");
const x = process.env.HTTPS_PROXY || process.env.https_proxy || void 0;
let T;
function R(e) {
    try {
        return function(e, t, r) {
            if (void 0 !== t && t.length > 0) return void 0 === r ? new e.ProxyAgent(t) : new e.ProxyAgent({
                uri: t,
                proxyTls: r,
                requestTls: r
            });
            return void 0 === r ? void 0 : new e.Agent({
                connect: r
            });
        }(e, x, function() {
            try {
                return function() {
                    const e = k.getCACertificates;
                    if (void 0 === e) return;
                    const t = e("default"), r = e("system");
                    return 0 === r.length ? void 0 : {
                        ca: [
                            ...new Set([
                                ...t,
                                ...r
                            ])
                        ]
                    };
                }();
            } catch  {
                return;
            }
        }());
    } catch  {
        return;
    }
}
async function B(e, t) {
    T ??= require.e(613).then(require.t.bind(require, 77613, 19)).then((e)=>({
            fetch: e.fetch,
            dispatcher: R(e)
        }));
    const { fetch: n, dispatcher: s } = await T;
    return n(e, void 0 !== s ? {
        ...t,
        dispatcher: s
    } : t);
}
function P(e) {
    return e.replace(/\/+$/, "");
}
function J(e) {
    return P(e ?? process.env.CURSOR_WEBSITE_URL ?? "https://cursor.com");
}
function M(e) {
    return P(e ?? process.env.CURSOR_API_BASE_URL ?? "https://api2.cursor.sh");
}
function q(e) {
    return e.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function D(e = "cli", t = J(), r = !1) {
    const s = q(n.randomBytes(32));
    var o;
    const i = q((o = s, n.createHash("sha256").update(o).digest())), a = n.randomUUID(), c = new URL("/loginDeepControl", t);
    return c.searchParams.set("challenge", i), c.searchParams.set("uuid", a), c.searchParams.set("mode", "login"), c.searchParams.set("redirectTarget", e), r && c.searchParams.set("supportsSelectedTeamLogin", "true"), {
        uuid: a,
        challenge: i,
        verifier: s,
        loginUrl: c.toString()
    };
}
class O extends Error {
    constructor(e){
        const t = process.env.HTTPS_PROXY || process.env.https_proxy, r = "Failed to reach the Cursor API. " + (t ? `Check that your proxy (${function(e) {
            try {
                const t = new URL(e);
                return t.username = "", t.password = "", t.toString();
            } catch  {
                return "[proxy URL redacted]";
            }
        }(t)}) is reachable.` : "If you are behind a corporate proxy, set the HTTPS_PROXY environment variable.");
        super(r), this.name = "AuthNetworkError", this.cause = e;
    }
}
function N(e) {
    return !0 === e?.aborted;
}
function F(e, t) {
    return new Promise((r)=>{
        if (!0 === t?.aborted) return void r();
        const n = ()=>{
            clearTimeout(s), r();
        }, s = setTimeout(()=>{
            t?.removeEventListener("abort", n), r();
        }, e);
        t?.addEventListener("abort", n, {
            once: !0
        });
    });
}
function U(e) {
    if ("object" != typeof e || null === e) return "unknown";
    const t = e;
    return "string" == typeof t.code && /^[A-Z][A-Z0-9_]{0,63}$/.test(t.code) ? t.code.includes("TIMEOUT") || "ETIMEDOUT" === t.code ? "timeout" : t.code : void 0 !== t.cause ? U(t.cause) : "other";
}
class L {
    constructor(e){
        this.redirectTarget = e?.redirectTarget ?? "cli", this.supportsSelectedTeamLogin = e?.supportsSelectedTeamLogin ?? !1, this.apiUrl = M(e?.apiUrl), this.websiteUrl = J(e?.websiteUrl), this.onPollGiveUp = e?.onPollGiveUp;
    }
    startLogin() {
        const e = D(this.redirectTarget, this.websiteUrl, this.supportsSelectedTeamLogin);
        return {
            metadata: {
                uuid: e.uuid,
                verifier: e.verifier
            },
            loginUrl: e.loginUrl
        };
    }
    async waitForResult(e, t) {
        return async function({ uuid: e, verifier: t, apiBaseUrl: r = M(), signal: n, onGiveUp: s }) {
            const o = `${r}/auth/poll`, a = 1e3, c = 1e4, l = await C();
            let u, d, p = 0, f = 0;
            const g = Date.now(), y = (t)=>{
                try {
                    s?.({
                        uuid: e,
                        elapsedMs: Math.max(0, Date.now() - g),
                        reason: t,
                        lastHttpStatus: u,
                        clientErrorClass: d,
                        consecutiveErrorCount: p,
                        pollAttemptCount: f
                    });
                } catch  {}
                return null;
            };
            for(let r = 0; r < 150; r++){
                if (N(n)) return y("other");
                f++;
                try {
                    const s = i({
                        "Content-Type": "application/json",
                        ...l
                    }), f = await B(`${o}?uuid=${e}&verifier=${t}`, {
                        headers: s,
                        signal: n
                    });
                    if (u = f.status, d = void 0, 403 === f.status) {
                        const e = await f.json().catch(()=>{});
                        if (e?.error === m) throw new h;
                    }
                    if (404 === f.status) {
                        p = 0;
                        const e = Math.min(a * 1.2 ** r, c);
                        await F(e, n);
                        continue;
                    }
                    if (!f.ok) {
                        if (p++, p >= 3) return y("three_non_404");
                        const e = Math.min(a * 1.2 ** r, c);
                        await F(e, n);
                        continue;
                    }
                    p = 0;
                    const g = await f.json();
                    return "object" == typeof g && null !== g && "accessToken" in g && "refreshToken" in g ? g : y("bad_200");
                } catch (e) {
                    if (e instanceof h) throw e;
                    if (N(n)) return y("other");
                    if (u = void 0, d = U(e), p++, p >= 3) return y("three_non_404");
                    const t = Math.min(a * 1.2 ** r, c);
                    await F(t, n);
                }
            }
            return y("other");
        }({
            uuid: e.uuid,
            verifier: e.verifier,
            apiBaseUrl: this.apiUrl,
            signal: t,
            onGiveUp: this.onPollGiveUp
        });
    }
    async loginWithApiKey(e, t) {
        return async function(e, t) {
            const r = M(t?.endpoint), n = await C();
            try {
                const t = i({
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${e}`,
                    ...n
                }), s = await B(`${r}/auth/exchange_user_api_key`, {
                    method: "POST",
                    headers: t,
                    body: JSON.stringify({})
                });
                if (403 === s.status) {
                    const e = await s.json().catch(()=>{});
                    if (e?.error === m) throw new h;
                    return null;
                }
                if (s.status >= 500) throw new O(new Error(`exchange_user_api_key returned HTTP ${s.status}`));
                if (!s.ok) return null;
                const o = await s.json();
                return "object" == typeof o && null !== o && "accessToken" in o && "refreshToken" in o ? o : null;
            } catch (e) {
                if (e instanceof h || e instanceof O) throw e;
                throw new O(e);
            }
        }(e, {
            endpoint: t?.endpoint ?? this.apiUrl
        });
    }
    async login(e, t) {
        const { metadata: r, loginUrl: n } = this.startLogin();
        return await e.openUrl(n), this.waitForResult(r, t);
    }
}
var $ = require("./module-5289.js");
class Q {
    constructor(e){
        this.disposeFn = e;
    }
    dispose() {
        this.disposeFn();
    }
}
const j = {
    debug: ()=>{},
    info: ()=>{},
    warn: ()=>{},
    error: ()=>{},
    trace: ()=>{}
};
function G(e) {
    try {
        const t = e.split(".")[1], r = Buffer.from(t, "base64"), n = JSON.parse(r.toString());
        if ("number" != typeof n.exp) return !0;
        const s = Math.floor(Date.now() / 1e3);
        return n.exp - s < 300;
    } catch  {
        return !0;
    }
}
class H {
    constructor(e){
        this.options = e, this.authReadyWarned = !1, this.refreshEpoch = 0, this.applyingCredentialRefresh = !1, this.tokenListeners = new Set, this.log = e.log ?? j, this.debugLog = e.log ?? j;
        const t = function(e) {
            if (e) return e;
            return process.env.CURSOR_API_ENDPOINT || "https://api2.cursor.sh";
        }(e.backendUrl), r = e.agentBackendUrl ?? t;
        this.creds = function(e, t) {
            return {
                backendUrl: e,
                repoBackendUrl: e,
                geoCppBackendUrl: e,
                cppConfigBackendUrl: e,
                cmdkBackendUrl: e,
                telemBackendUrl: e,
                originBackendUrl: e,
                bcProxyUrl: e,
                agentBackendUrlNonPrivacy: {
                    default: t
                }
            };
        }(t, r);
        const n = this;
        this.options.credentialManager.onDidChangeAccessToken?.(function(e) {
            n.handleCredentialAccessTokenChanged(0 === arguments.length ? [] : [
                e
            ]);
        });
    }
    handleCredentialAccessTokenChanged(e) {
        this.applyingCredentialRefresh || (this.refreshEpoch += 1, 0 !== e.length ? (void 0 === e[0] && this.clearTransportAuthToken(), this.refreshToken()) : this.refreshAfterUnspecifiedCredentialChange(this.refreshEpoch));
    }
    async refreshAfterUnspecifiedCredentialChange(e) {
        let t;
        try {
            t = await this.options.credentialManager.getAccessToken() ?? void 0;
        } catch (t) {
            if (e !== this.refreshEpoch) return;
            return this.log.warn(`[agent-host] Unspecified credential peek failed; refreshing without clearing: ${t instanceof Error ? t.message : String(t)}`), void this.refreshToken();
        }
        e === this.refreshEpoch && (void 0 === t && this.clearTransportAuthToken(), this.refreshToken());
    }
    async initialize() {
        const e = this.refreshEpoch, t = await this.resolveAccessToken(e);
        e === this.refreshEpoch && (this.cachedToken = t), void 0 !== this.cachedToken || this.authReadyWarned || (this.authReadyWarned = !0, this.log.warn("[agent-host] Starting without an access token; requests may fail until auth is configured."));
    }
    getCreds() {
        return this.creds;
    }
    getAuthToken() {
        return this.cachedToken;
    }
    getPrivacyModeEnum() {
        return this.options.credentialManager.privacyMode ?? $.PrivacyMode.UNSPECIFIED;
    }
    onDidChangeAuthToken(e) {
        return this.tokenListeners.add(e), new Q(()=>{
            this.tokenListeners.delete(e);
        });
    }
    triggerTokenRefresh() {
        this.refreshToken();
    }
    checkFeatureGate(e) {
        return this.options.enabledFeatureGates?.has(e) ?? !1;
    }
    getDebugTimeoutPreventionMode() {
        return "never";
    }
    isDevelopment() {
        return !1;
    }
    metricsIncrement(e) {
        this.options.metricsIncrement?.(e);
    }
    async resolveAccessToken(e) {
        const t = this.creds.backendUrl, r = await this.options.credentialManager.getAccessToken() ?? null;
        return await async function(e) {
            const { currentToken: t, ephemeralToken: r, isTokenExpiringSoon: n, refreshToken: s } = e, o = r ?? t;
            return o ? n(o) ? await s() ?? o : o : await s();
        }({
            currentToken: r,
            ephemeralToken: null,
            isTokenExpiringSoon: G,
            refreshToken: async ()=>{
                const r = await this.options.credentialManager.getApiKey();
                if (!r) return null;
                const n = new L;
                let s;
                try {
                    s = await n.loginWithApiKey(r, {
                        endpoint: t
                    });
                } catch (e) {
                    if (e instanceof O) return this.log.warn(`[agent-host] Token refresh failed transiently; keeping current token: ${e.message}`), null;
                    throw e;
                }
                if (!s?.accessToken || !s.refreshToken) return null;
                if (e !== this.refreshEpoch) return null;
                this.applyingCredentialRefresh = !0;
                try {
                    await this.options.credentialManager.setAuthentication(s.accessToken, s.refreshToken, r);
                } finally{
                    this.applyingCredentialRefresh = !1;
                }
                return s.accessToken;
            }
        }) ?? void 0;
    }
    clearTransportAuthToken() {
        if (void 0 !== this.cachedToken) {
            this.cachedToken = void 0;
            for (const e of this.tokenListeners)e(void 0);
        }
    }
    async refreshToken() {
        const e = this.refreshEpoch, t = this.cachedToken;
        let r;
        try {
            r = await this.resolveAccessToken(e);
        } catch (t) {
            if (e !== this.refreshEpoch) return;
            if (void 0 === this.cachedToken) try {
                const t = await this.options.credentialManager.getAccessToken() ?? void 0;
                if (e === this.refreshEpoch && void 0 !== t) {
                    this.cachedToken = t;
                    for (const e of this.tokenListeners)e(t);
                }
            } catch (e) {
                this.log.warn(`[agent-host] Token refresh recovery failed: ${e instanceof Error ? e.message : String(e)}`);
            }
            return void this.log.warn(`[agent-host] Token refresh failed; keeping ${void 0 === this.cachedToken ? "empty" : "current"} transport token: ${t instanceof Error ? t.message : String(t)}`);
        }
        if (e === this.refreshEpoch && r !== t) {
            this.cachedToken = r;
            for (const e of this.tokenListeners)e(r);
        }
    }
}
function z(e) {
    return new H(e);
}
