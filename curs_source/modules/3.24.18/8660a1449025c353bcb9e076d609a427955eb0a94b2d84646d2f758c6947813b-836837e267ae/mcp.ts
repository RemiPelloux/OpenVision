import { Tky, xky } from "./SZu.js";
import { E } from "./tslib.es6.js";
var DIo, U6t, NIo, LIo, g_t, efr, jnd, $nd, Hnd, OIo, Wnd, Gnd, Aky, Rky, FIo, BIo, qnd, UIo, znd, Vnd, Knd, tfr, Ynd, xet, Xnd, Znd, nfr, Qnd, ifr, Jnd, Pky, eid, tid, Mky, nid, Dky;
export { $nd, Aky, BIo, DIo, Dky, FIo, Gnd, Hnd, Jnd, Knd, LIo, Mky, NIo, OIo, Pky, Qnd, Rky, U6t, UIo, Vnd, Wnd, Xnd, Ynd, Znd, efr, eid, g_t, ifr, jnd, nfr, nid, qnd, tfr, tid, xet, znd };
var __wakaru_Nky_initialized = false;
export function Nky() {
if (__wakaru_Nky_initialized) return;
__wakaru_Nky_initialized = true;
"use strict";
E(), DIo = "cursor/requiresConfirmation", U6t = {
    identifier: "cursor-origin",
    serverUrl: "https://api.origin.cursor.com/mcp"
}, NIo = "https://grok.com/connectors-oauth-exchange-code/", LIo = "https://x.com/i/connectors/oauth_callback", g_t = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: !0,
    rejectsCustomSchemeRedirects: !0,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
}, efr = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0,
    registeredAppRedirectUris: [
        NIo,
        LIo
    ]
}, jnd = {
    provider: "hubspot",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0
}, $nd = "cursor.hostedMcpRouting.reportState", Hnd = "api.cursor.com", OIo = "x-cursor-auth", Wnd = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
}, Gnd = {
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
}, Aky = new Set(Object.values(Wnd)), Rky = new Set(Object.values(Gnd)), FIo = {
    provider: "grok-connectors",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    scopes: [
        "grok-plugins:access",
        "offline_access"
    ]
}, BIo = new Map([
    [
        "gmailmcp.googleapis.com",
        {
            ...g_t,
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
            ...g_t,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...g_t,
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
            ...g_t,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...g_t,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...g_t,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...g_t,
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
        efr
    ],
    [
        "mcp.money-staging.x.com",
        efr
    ],
    [
        "mcp.money.x.com",
        efr
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        FIo
    ],
    [
        "connectors-gateway.grok.com",
        FIo
    ],
    [
        "mcp.hubspot.com",
        jnd
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
]), qnd = new Set([
    ...BIo
].filter(([, t])=>t.provider === "google-workspace").map(([t])=>t)), UIo = "anysphere.cursor-mcp", znd = "/oauth/callback", Vnd = "/oauth/return", Knd = `cursor://${UIo}${Vnd}`, tfr = "https://www.cursor.com/agents/mcp/oauth/callback", Ynd = "grokbot://mcp/oauth/callback", xet = "http://localhost:8787/callback", Xnd = "gb", Znd = "gw", nfr = "gd", Qnd = "xa", ifr = ".t", Jnd = [
    18787,
    28787,
    31787
], Pky = `${ifr}${nfr}`, eid = new Map([
    [
        Xnd,
        Ynd
    ],
    [
        Znd,
        NIo
    ],
    [
        nfr,
        xet
    ],
    [
        Qnd,
        LIo
    ],
    ...Jnd.map((t)=>[
            `${nfr}${t}`,
            Tky(t)
        ])
]), tid = "127.0.0.1", Mky = xky({
    loopbackIpv4: !0
}), nid = "/oauth/mcp-client.json", Dky = `https://cursor.com${nid}`;

}
