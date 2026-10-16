"use strict";
require.d(exports, {
    G$: ()=>T,
    HY: ()=>H,
    HZ: ()=>s,
    Hj: ()=>Y,
    NC: ()=>E,
    OY: ()=>W,
    Qy: ()=>l,
    RJ: ()=>G,
    TG: ()=>g,
    TI: ()=>n,
    TS: ()=>x,
    U4: ()=>_,
    U_: ()=>S,
    Yv: ()=>J,
    aG: ()=>I,
    b0: ()=>U,
    ix: ()=>B,
    jQ: ()=>O,
    kG: ()=>z,
    nG: ()=>P,
    ny: ()=>V,
    qN: ()=>A,
    sr: ()=>p,
    tl: ()=>N,
    uS: ()=>k,
    vI: ()=>f
});
const n = "cursor/requiresConfirmation", o = {
    identifier: "cursor-origin",
    serverUrl: "https://api.origin.cursor.com/mcp"
};
function s(e) {
    return e.identifier === o.identifier && e.serverUrl === o.serverUrl;
}
const i = "https://grok.com/connectors-oauth-exchange-code/", a = "https://x.com/i/connectors/oauth_callback", c = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: !0,
    rejectsCustomSchemeRedirects: !0,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
}, u = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0,
    registeredAppRedirectUris: [
        i,
        a
    ]
}, l = "x-cursor-auth", d = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
};
new Set(Object.values(d)), new Set(Object.values({
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
}));
function p(e) {
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
function f(e) {
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
const h = {
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
            ...c,
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
            ...c,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...c,
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
            ...c,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...c,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...c,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...c,
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
        u
    ],
    [
        "mcp.money-staging.x.com",
        u
    ],
    [
        "mcp.money.x.com",
        u
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        h
    ],
    [
        "connectors-gateway.grok.com",
        h
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
function g(e) {
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
function y(e) {
    return e.endsWith("/") ? e : `${e}/`;
}
async function _(e, t) {
    if (void 0 === t) return;
    const r = new URL(e), n = new URL(t);
    if (r.origin !== n.origin || !y(r.pathname).startsWith(y(n.pathname))) throw new Error(`Protected resource ${t} does not match expected ${r.href} (or origin)`);
    return n;
}
const v = /^\/shops\/[A-Za-z0-9-]+\/mcp$/;
function w(e) {
    if (void 0 !== e) try {
        return new URL(e);
    } catch  {
        return;
    }
}
async function b(e, t) {
    if (void 0 === t) return;
    const r = new URL(e), n = w(t);
    if (!(void 0 !== n && n.origin === r.origin && (n.pathname === r.pathname || v.test(n.pathname)))) throw new Error(`Protected resource ${t} does not match expected ${r.href} (or origin)`);
    return n;
}
function S(e) {
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
    }(t) ? b : _;
}
function k(e, t) {
    const r = g(t)?.authorizationParams;
    if (void 0 !== r) for (const [t, n] of Object.entries(r))e.searchParams.set(t, n);
}
function E(e) {
    return "login.microsoftonline.com" === e.hostname;
}
function x(e) {
    const t = new Set(e.searchParams.getAll("prompt").flatMap((e)=>e.split(" ")).filter((e)=>"" !== e && "consent" !== e));
    e.searchParams.delete("prompt"), t.size > 0 && e.searchParams.set("prompt", [
        ...t
    ].join(" "));
}
new Set([
    ...m
].filter(([, e])=>"google-workspace" === e.provider).map(([e])=>e));
const T = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg", O = "anysphere.cursor-mcp", P = "/oauth/callback", I = "/oauth/return", C = [
    "cursor"
], A = "https://www.cursor.com/agents/mcp/oauth/callback", $ = "https://www.cursor.com/bot/mcp/oauth/callback";
const R = "grokbot://mcp/oauth/callback", N = "http://localhost:8787/callback", M = "gb", J = "gd", j = ".t", D = [
    18787,
    28787,
    31787
];
function F(e) {
    const t = new URL(N);
    return t.port = String(e), t.toString();
}
const q = new Map([
    [
        M,
        R
    ],
    [
        "gw",
        i
    ],
    [
        J,
        N
    ],
    [
        "xa",
        a
    ],
    ...D.map((e)=>[
            `${J}${e}`,
            F(e)
        ])
]);
new Map([
    [
        R,
        M
    ],
    [
        $,
        M
    ],
    [
        i,
        "gw"
    ],
    [
        a,
        "xa"
    ]
]);
function z(e, t) {
    return `${e}${j}${t}`;
}
function U(e) {
    if (null == e) return;
    const t = e.lastIndexOf(j);
    return -1 !== t ? q.get(e.slice(t + j.length)) : void 0;
}
function B(e) {
    const t = e.lastIndexOf(j);
    return -1 !== t && q.has(e.slice(t + j.length)) ? e.slice(0, t) : e;
}
function L(e) {
    return `${e}://${O}${P}`;
}
function V(e) {
    return Array.from(new Set([
        ...e ? [
            e
        ] : [],
        ...C
    ])).map(L);
}
function K(e) {
    try {
        const t = new URL(e);
        if ("http:" !== t.protocol) return !1;
        const r = t.hostname;
        return "localhost" === r || "127.0.0.1" === r || "[::1]" === r;
    } catch  {
        return !1;
    }
}
const Z = "127.0.0.1";
function W(e) {
    const t = e.redirectUrl ?? N;
    if (!0 !== e.loopbackIpv4 || !K(t)) return t;
    const r = new URL(t);
    return r.hostname = Z, r.toString();
}
W({
    loopbackIpv4: !0
});
function H(e, t) {
    if (void 0 === e || void 0 === t || 0 === t.length) return !1;
    try {
        const r = new URL(e).hostname.toLowerCase();
        return t.some((e)=>e.toLowerCase() === r);
    } catch  {
        return !1;
    }
}
function Y(e) {
    const { echoed: t, requested: r } = e;
    return void 0 !== t && t.length > 0 && t.every((e)=>r.includes(e)) ? [
        ...t
    ] : [
        ...r
    ];
}
function G(e) {
    const t = new Set, r = void 0 !== e && K(e);
    return e && !r && t.add(e), t.add(A), e === R && t.add($), t.add(N), e && r && t.add(e), Array.from(t);
}
