import { x } from "./tslib.es6.js";
import { YLv, zLv } from "./xmo.js";
var J2n, Ngo, Ogo, Bet, lzi, Uth, $th, Hth, Fgo, Wth, Gth, uzi, Vth, jth, Bgo, qth, zth, Kth;
export { $th, Bet, Bgo, Fgo, Gth, Hth, J2n, Kth, Ngo, Ogo, Uth, Vth, Wth, jth, lzi, qth, uzi, zth };
var __wakaru_XLv_initialized = false;
export function XLv() {
if (__wakaru_XLv_initialized) return;
__wakaru_XLv_initialized = true;
"use strict";
x(), J2n = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", Ngo = "https://grok.com/connectors-oauth-exchange-code/", Ogo = "https://x.com/i/connectors/oauth_callback", Bet = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: !0,
    rejectsCustomSchemeRedirects: !0,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
}, lzi = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0,
    registeredAppRedirectUris: [
        Ngo,
        Ogo
    ]
}, Uth = {
    provider: "hubspot",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0
}, $th = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
}, Hth = {
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
}, new Set(Object.values($th)), new Set(Object.values(Hth)), Fgo = {
    provider: "grok-connectors",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    scopes: [
        "grok-plugins:access",
        "offline_access"
    ]
}, Wth = new Map([
    [
        "gmailmcp.googleapis.com",
        {
            ...Bet,
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
            ...Bet,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...Bet,
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
            ...Bet,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...Bet,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...Bet,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...Bet,
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
        lzi
    ],
    [
        "mcp.money-staging.x.com",
        lzi
    ],
    [
        "mcp.money.x.com",
        lzi
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        Fgo
    ],
    [
        "connectors-gateway.grok.com",
        Fgo
    ],
    [
        "mcp.hubspot.com",
        Uth
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
    ...Wth
].filter(([, e])=>e.provider === "google-workspace").map(([e])=>e)), Gth = "grokbot://mcp/oauth/callback", uzi = "http://localhost:8787/callback", Vth = "gb", jth = "gw", Bgo = "gd", qth = "xa", zth = [
    18787,
    28787,
    31787
], new Map([
    [
        Vth,
        Gth
    ],
    [
        jth,
        Ngo
    ],
    [
        Bgo,
        uzi
    ],
    [
        qth,
        Ogo
    ],
    ...zth.map((e)=>[
            `${Bgo}${e}`,
            zLv(e)
        ])
]), Kth = "127.0.0.1", YLv({});

}
