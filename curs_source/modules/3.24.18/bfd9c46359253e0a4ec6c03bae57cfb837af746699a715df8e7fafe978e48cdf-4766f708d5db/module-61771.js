"use strict";
require.d(exports, {
    G$: ()=>x,
    NC: ()=>S,
    OY: ()=>B,
    Qy: ()=>c,
    RJ: ()=>D,
    TI: ()=>n,
    TS: ()=>k,
    U_: ()=>_,
    sr: ()=>u,
    tl: ()=>C,
    uS: ()=>b,
    vI: ()=>d
});
const n = "cursor/requiresConfirmation";
const s = "https://grok.com/connectors-oauth-exchange-code/", o = "https://x.com/i/connectors/oauth_callback", i = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: !0,
    rejectsCustomSchemeRedirects: !0,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
}, a = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0,
    registeredAppRedirectUris: [
        s,
        o
    ]
}, c = "x-cursor-auth", l = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
};
new Set(Object.values(l)), new Set(Object.values({
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
}));
function u(e) {
    if (void 0 === e) return;
    let t;
    try {
        t = new URL(e);
    } catch  {
        return;
    }
    const r = /^\/rest-mcp\/([^/]+)\/mcp\/?$/.exec(t.pathname);
    return r?.[1];
}
function d(e) {
    if ("object" != typeof e || null === e) return {};
    const t = e, r = "string" == typeof t.cursor_client_id && t.cursor_client_id.length > 0 ? t.cursor_client_id : void 0;
    let n;
    if ("object" == typeof t.cursor_authorization_params && null !== t.cursor_authorization_params) {
        const e = Object.entries(t.cursor_authorization_params).filter((e)=>"string" == typeof e[1]);
        e.length > 0 && (n = Object.fromEntries(e));
    }
    return {
        ...void 0 !== r ? {
            clientId: r
        } : {},
        ...!0 === t.cursor_omit_resource_indicator ? {
            omitResourceIndicator: !0
        } : {},
        ...!0 === t.cursor_omit_consent_prompt ? {
            omitConsentPrompt: !0
        } : {},
        ...void 0 !== n ? {
            authorizationParams: n
        } : {},
        ...!0 === t.cursor_rejects_custom_scheme_redirects ? {
            rejectsCustomSchemeRedirects: !0
        } : {},
        ...!0 === t.cursor_unauthenticated_connect ? {
            unauthenticatedConnect: !0
        } : {},
        ...!0 === t.cursor_loopback_ipv4 ? {
            loopbackIpv4: !0
        } : {},
        ...!0 === t.cursor_backend_only_token_exchange ? {
            backendOnlyTokenExchange: !0
        } : {}
    };
}
const p = {
    provider: "grok-connectors",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    scopes: [
        "grok-plugins:access",
        "offline_access"
    ]
}, m = new Map([
    [
        "gmailmcp.googleapis.com",
        {
            ...i,
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
            ...i,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...i,
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
            ...i,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...i,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...i,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...i,
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
        a
    ],
    [
        "mcp.money-staging.x.com",
        a
    ],
    [
        "mcp.money.x.com",
        a
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        p
    ],
    [
        "connectors-gateway.grok.com",
        p
    ],
    [
        "mcp.hubspot.com",
        {
            provider: "hubspot",
            clientRegistration: "static",
            rejectsCustomSchemeRedirects: !0,
            unauthenticatedConnect: !1,
            backendOnlyTokenExchange: !0
        }
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
]);
function h(e) {
    if (void 0 === e) return;
    let t;
    try {
        t = new URL(e).hostname;
    } catch  {
        return;
    }
    return function(e) {
        return m.get(e.toLowerCase());
    }(t);
}
function f(e) {
    return e.endsWith("/") ? e : `${e}/`;
}
async function g(e, t) {
    if (void 0 === t) return;
    const r = new URL(e), n = new URL(t);
    if (r.origin !== n.origin || !f(r.pathname).startsWith(f(n.pathname))) throw new Error(`Protected resource ${t} does not match expected ${r.href} (or origin)`);
    return n;
}
const y = /^\/shops\/[A-Za-z0-9-]+\/mcp$/;
function w(e) {
    if (void 0 !== e) try {
        return new URL(e);
    } catch  {
        return;
    }
}
async function v(e, t) {
    if (void 0 === t) return;
    const r = new URL(e), n = w(t);
    if (!(void 0 !== n && n.origin === r.origin && (n.pathname === r.pathname || y.test(n.pathname)))) throw new Error(`Protected resource ${t} does not match expected ${r.href} (or origin)`);
    return n;
}
function _(e) {
    if (function(e) {
        if (void 0 === e) return !1;
        let t;
        try {
            t = new URL(e);
        } catch  {
            return !1;
        }
        return "https:" === t.protocol && "gtm-api.corp.anysphere.co" === t.hostname && "" === t.port && "/mcp" === t.pathname;
    }(e)) return async ()=>{};
    const t = w(e);
    return void 0 !== t && function(e) {
        return "https:" === e.protocol && "setup.shopify.com" === e.hostname && "" === e.port && "/mcp" === e.pathname;
    }(t) ? v : g;
}
function b(e, t) {
    const r = h(t)?.authorizationParams;
    if (void 0 !== r) for (const [t, n] of Object.entries(r))e.searchParams.set(t, n);
}
function S(e) {
    return "login.microsoftonline.com" === e.hostname;
}
function k(e) {
    const t = new Set(e.searchParams.getAll("prompt").flatMap((e)=>e.split(" ")).filter((e)=>"" !== e && "consent" !== e));
    e.searchParams.delete("prompt"), t.size > 0 && e.searchParams.set("prompt", [
        ...t
    ].join(" "));
}
new Set([
    ...m
].filter(([, e])=>"google-workspace" === e.provider).map(([e])=>e));
const x = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg", E = "https://www.cursor.com/agents/mcp/oauth/callback", I = "https://www.cursor.com/bot/mcp/oauth/callback";
const T = "grokbot://mcp/oauth/callback", C = "http://localhost:8787/callback", P = "gb", A = "gd", R = [
    18787,
    28787,
    31787
];
function M(e) {
    const t = new URL(C);
    return t.port = String(e), t.toString();
}
new Map([
    [
        P,
        T
    ],
    [
        "gw",
        s
    ],
    [
        A,
        C
    ],
    [
        "xa",
        o
    ],
    ...R.map((e)=>[
            `${A}${e}`,
            M(e)
        ])
]);
new Map([
    [
        T,
        P
    ],
    [
        I,
        P
    ],
    [
        s,
        "gw"
    ],
    [
        o,
        "xa"
    ]
]);
function J(e) {
    try {
        const t = new URL(e);
        if ("http:" !== t.protocol) return !1;
        const r = t.hostname;
        return "localhost" === r || "127.0.0.1" === r || "[::1]" === r;
    } catch  {
        return !1;
    }
}
const O = "127.0.0.1";
function B(e) {
    const t = e.redirectUrl ?? C;
    if (!0 !== e.loopbackIpv4 || !J(t)) return t;
    const r = new URL(t);
    return r.hostname = O, r.toString();
}
B({
    loopbackIpv4: !0
});
function D(e) {
    const t = new Set, r = void 0 !== e && J(e);
    return e && !r && t.add(e), t.add(E), e === T && t.add(I), t.add(C), e && r && t.add(e), Array.from(t);
}
