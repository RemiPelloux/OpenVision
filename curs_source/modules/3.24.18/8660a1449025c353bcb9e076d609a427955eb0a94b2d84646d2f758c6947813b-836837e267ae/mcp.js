import { JV1, ZV1 } from "./gYa.js";
import { E } from "./tslib.es6.js";
var G0i, IXa, xXa, WCt, hes, Pjm, Mjm, Djm, AXa, Njm, Ljm, pes, Ojm, Fjm, RXa, Bjm, Ujm, jjm;
export { AXa, Bjm, Djm, Fjm, G0i, IXa, Ljm, Mjm, Njm, Ojm, Pjm, RXa, Ujm, WCt, hes, jjm, pes, xXa };
var __wakaru_eK1_initialized = false;
export function eK1() {
if (__wakaru_eK1_initialized) return;
__wakaru_eK1_initialized = true;
"use strict";
E(), G0i = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", IXa = "https://grok.com/connectors-oauth-exchange-code/", xXa = "https://x.com/i/connectors/oauth_callback", WCt = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: !0,
    rejectsCustomSchemeRedirects: !0,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
}, hes = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0,
    registeredAppRedirectUris: [
        IXa,
        xXa
    ]
}, Pjm = {
    provider: "hubspot",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0
}, Mjm = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
}, Djm = {
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
}, new Set(Object.values(Mjm)), new Set(Object.values(Djm)), AXa = {
    provider: "grok-connectors",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    scopes: [
        "grok-plugins:access",
        "offline_access"
    ]
}, Njm = new Map([
    [
        "gmailmcp.googleapis.com",
        {
            ...WCt,
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
            ...WCt,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...WCt,
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
            ...WCt,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...WCt,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...WCt,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...WCt,
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
        hes
    ],
    [
        "mcp.money-staging.x.com",
        hes
    ],
    [
        "mcp.money.x.com",
        hes
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        AXa
    ],
    [
        "connectors-gateway.grok.com",
        AXa
    ],
    [
        "mcp.hubspot.com",
        Pjm
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
]), new Set([
    ...Njm
].filter(([, t])=>t.provider === "google-workspace").map(([t])=>t)), Ljm = "grokbot://mcp/oauth/callback", pes = "http://localhost:8787/callback", Ojm = "gb", Fjm = "gw", RXa = "gd", Bjm = "xa", Ujm = [
    18787,
    28787,
    31787
], new Map([
    [
        Ojm,
        Ljm
    ],
    [
        Fjm,
        IXa
    ],
    [
        RXa,
        pes
    ],
    [
        Bjm,
        xXa
    ],
    ...Ujm.map((t)=>[
            `${RXa}${t}`,
            ZV1(t)
        ])
]), jjm = "127.0.0.1", JV1({});

}
