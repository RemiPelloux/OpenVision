import { r0g, t0g } from "./qIc.js";
import { x } from "./tslib.es6.js";
var oos, Pmt, aos, cos, OKe, vki, Nqc, Oqc, Fqc, los, Bqc, Uqc, s0g, o0g, uos, dos, $qc, hos, Hqc, Wqc, a0g, Gqc, x5e, Vqc, jqc, _ki, qqc, bki, zqc, c0g, Kqc, Yqc, l0g, Xqc, u0g;
export { $qc, Bqc, Fqc, Gqc, Hqc, Kqc, Nqc, OKe, Oqc, Pmt, Uqc, Vqc, Wqc, Xqc, Yqc, _ki, a0g, aos, bki, c0g, cos, dos, hos, jqc, l0g, los, o0g, oos, qqc, s0g, u0g, uos, vki, x5e, zqc };
var __wakaru_d0g_initialized = false;
export function d0g() {
if (__wakaru_d0g_initialized) return;
__wakaru_d0g_initialized = true;
"use strict";
x(), oos = "cursor/requiresConfirmation", Pmt = {
    identifier: "cursor-origin",
    serverUrl: "https://api.origin.cursor.com/mcp"
}, aos = "https://grok.com/connectors-oauth-exchange-code/", cos = "https://x.com/i/connectors/oauth_callback", OKe = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: !0,
    rejectsCustomSchemeRedirects: !0,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
}, vki = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0,
    registeredAppRedirectUris: [
        aos,
        cos
    ]
}, Nqc = {
    provider: "hubspot",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0
}, Oqc = "cursor.hostedMcpRouting.reportState", Fqc = "api.cursor.com", los = "x-cursor-auth", Bqc = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
}, Uqc = {
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
}, s0g = new Set(Object.values(Bqc)), o0g = new Set(Object.values(Uqc)), uos = {
    provider: "grok-connectors",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    scopes: [
        "grok-plugins:access",
        "offline_access"
    ]
}, dos = new Map([
    [
        "gmailmcp.googleapis.com",
        {
            ...OKe,
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
            ...OKe,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...OKe,
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
            ...OKe,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...OKe,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...OKe,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...OKe,
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
        vki
    ],
    [
        "mcp.money-staging.x.com",
        vki
    ],
    [
        "mcp.money.x.com",
        vki
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        uos
    ],
    [
        "connectors-gateway.grok.com",
        uos
    ],
    [
        "mcp.hubspot.com",
        Nqc
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
]), $qc = new Set([
    ...dos
].filter(([, e])=>e.provider === "google-workspace").map(([e])=>e)), hos = "anysphere.cursor-mcp", Hqc = "/oauth/callback", Wqc = "/oauth/return", a0g = `cursor://${hos}${Wqc}`, Gqc = "grokbot://mcp/oauth/callback", x5e = "http://localhost:8787/callback", Vqc = "gb", jqc = "gw", _ki = "gd", qqc = "xa", bki = ".t", zqc = [
    18787,
    28787,
    31787
], c0g = `${bki}${_ki}`, Kqc = new Map([
    [
        Vqc,
        Gqc
    ],
    [
        jqc,
        aos
    ],
    [
        _ki,
        x5e
    ],
    [
        qqc,
        cos
    ],
    ...zqc.map((e)=>[
            `${_ki}${e}`,
            t0g(e)
        ])
]), Yqc = "127.0.0.1", l0g = r0g({
    loopbackIpv4: !0
}), Xqc = "/oauth/mcp-client.json", u0g = `https://cursor.com${Xqc}`;

}
