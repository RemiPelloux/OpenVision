import { h } from "./tslib.es6.js";
function fS(e) {
    const t = new URL(st);
    return t.port = String(e), t.toString();
}
function zh(e) {
    try {
        const t = new URL(e);
        if (t.protocol !== "http:") return !1;
        const r = t.hostname;
        return r === "localhost" || r === "127.0.0.1" || r === "[::1]";
    } catch  {
        return !1;
    }
}
function Wh(e) {
    const t = e.redirectUrl ?? st;
    if (e.loopbackIpv4 !== !0 || !zh(t)) return t;
    const r = new URL(t);
    return r.hostname = Qh, r.toString();
}
var Pa, Oa, Ca, La, zt, hi, Gh, fi, Kh, qh, yS, SS, xa, Ma, bS, jh, Da, Na, wS, pi, Vh, Ua, st, Yh, Xh, Wn, Jh, pr, Zh, ES, $a, Qh, AS, ef, RS;
export { $a, AS, Ca, Da, ES, Gh, Jh, Kh, La, Ma, Na, Oa, Pa, Qh, RS, SS, Ua, Vh, Wh, Wn, Xh, Yh, Zh, bS, ef, fS, fi, hi, jh, pi, pr, qh, st, wS, xa, yS, zh, zt };
var __wakaru_TS_initialized = false;
export function TS() {
if (__wakaru_TS_initialized) return;
__wakaru_TS_initialized = true;
"use strict";
h(), Pa = "cursor/requiresConfirmation", Oa = {
    identifier: "cursor-origin",
    serverUrl: "https://api.origin.cursor.com/mcp"
}, Ca = "https://grok.com/connectors-oauth-exchange-code/", La = "https://x.com/i/connectors/oauth_callback", zt = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: !0,
    rejectsCustomSchemeRedirects: !0,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
}, hi = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0,
    registeredAppRedirectUris: [
        Ca,
        La
    ]
}, Gh = {
    provider: "hubspot",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0
}, fi = "x-cursor-auth", Kh = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
}, qh = {
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
}, yS = new Set(Object.values(Kh)), SS = new Set(Object.values(qh)), xa = {
    provider: "grok-connectors",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    scopes: [
        "grok-plugins:access",
        "offline_access"
    ]
}, Ma = new Map([
    [
        "gmailmcp.googleapis.com",
        {
            ...zt,
            scopes: [
                "https://www.googleapis.com/auth/gmail.readonly",
                "https://www.googleapis.com/auth/gmail.compose",
                "https://www.googleapis.com/auth/gmail.modify"
            ]
        }
    ],
    [
        "drivemcp.googleapis.com",
        {
            ...zt,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...zt,
            scopes: [
                "https://www.googleapis.com/auth/calendar.events",
                "https://www.googleapis.com/auth/calendar.calendarlist.readonly",
                "https://www.googleapis.com/auth/calendar.events.readonly",
                "https://www.googleapis.com/auth/calendar.events.freebusy"
            ]
        }
    ],
    [
        "docsmcp.googleapis.com",
        {
            ...zt,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...zt,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...zt,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...zt,
            scopes: [
                "https://www.googleapis.com/auth/bigquery"
            ]
        }
    ],
    [
        "api.x.com",
        {
            provider: "x",
            clientRegistration: "static",
            unauthenticatedConnect: !1,
            rejectsCustomSchemeRedirects: !1,
            scopes: [
                "tweet.read",
                "users.read",
                "follows.read",
                "space.read",
                "mute.read",
                "like.read",
                "list.read",
                "list.write",
                "block.read",
                "block.write",
                "bookmark.read",
                "bookmark.write",
                "dm.read",
                "dm.write",
                "developer.billing.write",
                "developer.write",
                "offline.access"
            ],
            pinsScopesOverConfiguredScopes: !0
        }
    ],
    [
        "mcp.money-dev.x.com",
        hi
    ],
    [
        "mcp.money-staging.x.com",
        hi
    ],
    [
        "mcp.money.x.com",
        hi
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        xa
    ],
    [
        "connectors-gateway.grok.com",
        xa
    ],
    [
        "mcp.hubspot.com",
        Gh
    ],
    [
        "setup.shopify.com",
        {
            provider: "shopify",
            clientRegistration: "static",
            unauthenticatedConnect: !0,
            rejectsCustomSchemeRedirects: !1
        }
    ]
]), bS = new Set([
    ...Ma
].filter(([, e])=>e.provider === "google-workspace").map(([e])=>e)), jh = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg", Da = "anysphere.cursor-mcp", Na = "/oauth/return", wS = `cursor://${Da}${Na}`, pi = "https://www.cursor.com/agents/mcp/oauth/callback", Vh = "https://www.cursor.com/bot/mcp/oauth/callback", Ua = "grokbot://mcp/oauth/callback", st = "http://localhost:8787/callback", Yh = "gb", Xh = "gw", Wn = "gd", Jh = "xa", pr = ".t", Zh = [
    18787,
    28787,
    31787
], ES = `${pr}${Wn}`, $a = new Map([
    [
        Yh,
        Ua
    ],
    [
        Xh,
        Ca
    ],
    [
        Wn,
        st
    ],
    [
        Jh,
        La
    ],
    ...Zh.map((e)=>[
            `${Wn}${e}`,
            fS(e)
        ])
]), Qh = "127.0.0.1", AS = Wh({
    loopbackIpv4: !0
}), ef = "/oauth/mcp-client.json", RS = `https://cursor.com${ef}`;

}
