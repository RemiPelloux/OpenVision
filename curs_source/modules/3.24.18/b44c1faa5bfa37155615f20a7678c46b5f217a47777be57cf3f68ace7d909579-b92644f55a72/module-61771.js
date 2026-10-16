"use strict";
require.d(exports, {
    A1: ()=>ae,
    AB: ()=>q,
    Au: ()=>Te,
    B0: ()=>je,
    BI: ()=>Y,
    Cg: ()=>ve,
    Di: ()=>x,
    Dr: ()=>C,
    Ds: ()=>c,
    EJ: ()=>ke,
    G$: ()=>z,
    Gr: ()=>w,
    HA: ()=>be,
    HK: ()=>ge,
    HY: ()=>Ue,
    HZ: ()=>l,
    Hg: ()=>H,
    Hj: ()=>Le,
    IQ: ()=>n,
    JY: ()=>Se,
    KM: ()=>me,
    MY: ()=>Re,
    Me: ()=>Pe,
    NC: ()=>Q,
    Ns: ()=>re,
    O6: ()=>b,
    OJ: ()=>De,
    OM: ()=>i,
    OY: ()=>Ne,
    Pe: ()=>ee,
    Pr: ()=>Je,
    QU: ()=>ue,
    Qy: ()=>g,
    RJ: ()=>$e,
    SN: ()=>Z,
    T8: ()=>h,
    TG: ()=>M,
    TI: ()=>s,
    TS: ()=>j,
    U4: ()=>O,
    U_: ()=>L,
    VX: ()=>te,
    XJ: ()=>a,
    Y3: ()=>S,
    Yv: ()=>de,
    ZD: ()=>J,
    _1: ()=>He,
    _S: ()=>Me,
    _X: ()=>se,
    aG: ()=>K,
    b0: ()=>Ie,
    cK: ()=>y,
    ex: ()=>Ge,
    fE: ()=>_e,
    fK: ()=>fe,
    fU: ()=>X,
    fj: ()=>ze,
    g$: ()=>pe,
    hH: ()=>Fe,
    it: ()=>u,
    ix: ()=>Ce,
    jO: ()=>f,
    jQ: ()=>W,
    k$: ()=>d,
    kG: ()=>Ee,
    kV: ()=>G,
    lV: ()=>Qe,
    n: ()=>Ve,
    nG: ()=>V,
    ns: ()=>_,
    ny: ()=>qe,
    o7: ()=>A,
    qN: ()=>ne,
    qZ: ()=>oe,
    sJ: ()=>le,
    sf: ()=>P,
    sr: ()=>T,
    tl: ()=>ce,
    u4: ()=>o,
    uS: ()=>$,
    ug: ()=>ie,
    vI: ()=>R,
    vp: ()=>Be,
    wU: ()=>xe,
    zl: ()=>We
});
const n = "••••••••", s = "cursor/requiresConfirmation", o = "https://api.origin.cursor.com/mcp", i = {
    identifier: "cursor-origin",
    serverUrl: "https://api.origin.cursor.com/mcp"
}, a = "https://api.origin.cursor.com/mcp/readonly";
function c(e) {
    return e === o || e === a;
}
function l(e) {
    return e.identifier === i.identifier && e.serverUrl === i.serverUrl;
}
const u = "https://grok.com/connectors-oauth-exchange-code/", d = "https://x.com/i/connectors/oauth_callback", p = {
    provider: "google-workspace",
    clientRegistration: "static",
    unauthenticatedConnect: !0,
    rejectsCustomSchemeRedirects: !0,
    authorizationParams: {
        access_type: "offline",
        prompt: "select_account consent"
    }
}, m = {
    provider: "x-money",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    backendOnlyTokenExchange: !0,
    registeredAppRedirectUris: [
        u,
        d
    ]
}, h = "cursor.hostedMcpRouting.reportState", f = "api.cursor.com", g = "x-cursor-auth", y = {
    notConnected: "scm_not_connected",
    tokenUnavailable: "scm_token_unavailable",
    tokenRejected: "scm_token_rejected",
    repoNotAccessible: "scm_repo_not_accessible",
    orgBlocked: "scm_org_blocked"
}, w = {
    originNotEnabled: "origin_not_enabled",
    teamDisabled: "team_disabled",
    admissionRejected: "admission_rejected"
}, v = "cursor-", _ = [
    "github",
    "origin"
], A = [
    "github"
];
function S(e) {
    return `${v}${e}`;
}
function b(e) {
    return _.find((t)=>S(t) === e);
}
const E = new Set(Object.values(y)), I = new Set(Object.values(w));
function C(e) {
    const t = b(e.emittingServerIdentifier);
    if (void 0 === t) return;
    let r;
    try {
        r = JSON.parse(e.text);
    } catch  {
        return;
    }
    if ("object" != typeof r || null === r) return;
    const n = r;
    if ("string" != typeof n.error || !E.has(n.error) || n.provider !== t) return;
    const s = n.error, o = t, i = "string" == typeof n.repo ? {
        repo: n.repo
    } : {};
    if (s !== y.orgBlocked) {
        const e = s === y.notConnected && "string" == typeof n.reason && I.has(n.reason) ? n.reason : void 0;
        return {
            code: s,
            provider: o,
            ...i,
            ...void 0 === e ? {} : {
                reason: e
            }
        };
    }
    const a = "string" == typeof n.org && n.org.length > 0 ? {
        org: n.org
    } : {};
    switch(n.reason){
        case "sso_required":
            {
                const e = function(e, t) {
                    if ("string" != typeof t) return;
                    let r;
                    try {
                        r = new URL(t);
                    } catch  {
                        return;
                    }
                    const n = k[e];
                    if (void 0 === n || "https:" !== r.protocol || r.hostname.toLowerCase() !== n.hostname || !n.pathname.test(r.pathname) || r.username.length > 0 || r.password.length > 0) return;
                    return r.toString();
                }(t, n.authorizationUrl);
                return {
                    code: s,
                    provider: o,
                    ...i,
                    ...a,
                    reason: "sso_required",
                    ...void 0 === e ? {} : {
                        authorizationUrl: e
                    }
                };
            }
        case "ip_allowlist":
            return {
                code: s,
                provider: o,
                ...i,
                ...a,
                reason: "ip_allowlist"
            };
        default:
            return {
                code: s,
                provider: o,
                ...i,
                ...a
            };
    }
}
const k = {
    github: {
        hostname: "github.com",
        pathname: /^\/orgs\/[^/]+\/sso$/
    }
};
function x(e) {
    if (void 0 === e) return;
    let t;
    try {
        t = new URL(e);
    } catch  {
        return;
    }
    return "https:" === t.protocol && t.hostname.toLowerCase() === f && "" === t.port ? T(e) : void 0;
}
function T(e) {
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
function R(e) {
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
const B = {
    provider: "grok-connectors",
    clientRegistration: "static",
    rejectsCustomSchemeRedirects: !0,
    unauthenticatedConnect: !1,
    scopes: [
        "grok-plugins:access",
        "offline_access"
    ]
}, P = new Map([
    [
        "gmailmcp.googleapis.com",
        {
            ...p,
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
            ...p,
            scopes: [
                "https://www.googleapis.com/auth/drive.readonly",
                "https://www.googleapis.com/auth/drive.file"
            ]
        }
    ],
    [
        "calendarmcp.googleapis.com",
        {
            ...p,
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
            ...p,
            scopes: [
                "https://www.googleapis.com/auth/documents"
            ]
        }
    ],
    [
        "sheetsmcp.googleapis.com",
        {
            ...p,
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets"
            ]
        }
    ],
    [
        "slidesmcp.googleapis.com",
        {
            ...p,
            scopes: [
                "https://www.googleapis.com/auth/presentations"
            ]
        }
    ],
    [
        "bigquery.googleapis.com",
        {
            ...p,
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
        m
    ],
    [
        "mcp.money-staging.x.com",
        m
    ],
    [
        "mcp.money.x.com",
        m
    ],
    [
        "connectors-gateway.grok.gcp.mouseion.dev",
        B
    ],
    [
        "connectors-gateway.grok.com",
        B
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
function J(e) {
    return P.get(e.toLowerCase());
}
function M(e) {
    if (void 0 === e) return;
    let t;
    try {
        t = new URL(e).hostname;
    } catch  {
        return;
    }
    return J(t);
}
function q(e) {
    if (void 0 === e) return !1;
    let t;
    try {
        t = new URL(e);
    } catch  {
        return !1;
    }
    return "https:" === t.protocol && "gtm-api.corp.anysphere.co" === t.hostname && "" === t.port && "/mcp" === t.pathname;
}
function D(e) {
    return e.endsWith("/") ? e : `${e}/`;
}
async function O(e, t) {
    if (void 0 === t) return;
    const r = new URL(e), n = new URL(t);
    if (r.origin !== n.origin || !D(r.pathname).startsWith(D(n.pathname))) throw new Error(`Protected resource ${t} does not match expected ${r.href} (or origin)`);
    return n;
}
const N = /^\/shops\/[A-Za-z0-9-]+\/mcp$/;
function F(e) {
    if (void 0 !== e) try {
        return new URL(e);
    } catch  {
        return;
    }
}
async function U(e, t) {
    if (void 0 === t) return;
    const r = new URL(e), n = F(t);
    if (!(void 0 !== n && n.origin === r.origin && (n.pathname === r.pathname || N.test(n.pathname)))) throw new Error(`Protected resource ${t} does not match expected ${r.href} (or origin)`);
    return n;
}
function L(e) {
    if (q(e)) return async ()=>{};
    const t = F(e);
    return void 0 !== t && function(e) {
        return "https:" === e.protocol && "setup.shopify.com" === e.hostname && "" === e.port && "/mcp" === e.pathname;
    }(t) ? U : O;
}
function $(e, t) {
    const r = M(t)?.authorizationParams;
    if (void 0 !== r) for (const [t, n] of Object.entries(r))e.searchParams.set(t, n);
}
function Q(e) {
    return "login.microsoftonline.com" === e.hostname;
}
function j(e) {
    const t = new Set(e.searchParams.getAll("prompt").flatMap((e)=>e.split(" ")).filter((e)=>"" !== e && "consent" !== e));
    e.searchParams.delete("prompt"), t.size > 0 && e.searchParams.set("prompt", [
        ...t
    ].join(" "));
}
function G(e, t) {
    const r = M(e);
    return !0 === r?.pinsScopesOverConfiguredScopes ? r.scopes ?? t : t;
}
const H = new Set([
    ...P
].filter(([, e])=>"google-workspace" === e.provider).map(([e])=>e)), z = "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/uploads/cursorlogomcpv3.svg", W = "anysphere.cursor-mcp", V = "/oauth/callback", K = "/oauth/return", Y = `cursor://${W}${K}`, Z = "grokbot://app/v1/mcp/oauth/return", X = Z, ee = "sand://app/v1/mcp/oauth/return", te = [
    Y,
    Z,
    ee
], re = [
    "cursor"
], ne = "https://www.cursor.com/agents/mcp/oauth/callback", se = "https://www.cursor.com/bot/mcp/oauth/callback", oe = "OAuth state was created by a different Cursor account";
function ie(e) {
    try {
        const t = new URL(e);
        if ("localhost" === t.hostname || "127.0.0.1" === t.hostname) return `${t.origin}/agents/mcp/oauth/callback`;
    } catch  {}
    return ne;
}
const ae = "grokbot://mcp/oauth/callback", ce = "http://localhost:8787/callback", le = "gb", ue = "gw", de = "gd", pe = "x-cursor-mcp-oauth-relayed-loopback", me = "xa", he = ".t", fe = [
    18787,
    28787,
    31787
];
function ge(e) {
    const t = new URL(ce);
    return t.port = String(e), t.toString();
}
const ye = `${he}${de}`, we = new Map([
    [
        le,
        ae
    ],
    [
        ue,
        u
    ],
    [
        de,
        ce
    ],
    [
        me,
        d
    ],
    ...fe.map((e)=>[
            `${de}${e}`,
            ge(e)
        ])
]);
function ve(e, t) {
    if (e.endsWith(ye) && fe.includes(t)) return `${e}${t}`;
}
function _e(e) {
    for (const t of fe){
        const r = `${ye}${t}`;
        if (e.endsWith(r)) return e.slice(0, e.length - String(t).length);
    }
    return e;
}
const Ae = new Map([
    [
        ae,
        le
    ],
    [
        se,
        le
    ],
    [
        u,
        ue
    ],
    [
        d,
        me
    ]
]);
function Se(e, t) {
    return void 0 === t ? e : ne;
}
function be(e) {
    if (null != e) return Ae.get(e);
}
function Ee(e, t) {
    return `${e}${he}${t}`;
}
function Ie(e) {
    if (null == e) return;
    const t = e.lastIndexOf(he);
    return -1 !== t ? we.get(e.slice(t + he.length)) : void 0;
}
function Ce(e) {
    const t = e.lastIndexOf(he);
    return -1 !== t && we.has(e.slice(t + he.length)) ? e.slice(0, t) : e;
}
const ke = "313336824172-o9ui5flcldhm6d0gp487a9vnnpo8unap.apps.googleusercontent.com", xe = "com.googleusercontent.apps.313336824172-o9ui5flcldhm6d0gp487a9vnnpo8unap:/oauth2redirect", Te = "253367402103-5sehq8pc5rha37tkd0om6tj1l1576slb.apps.googleusercontent.com", Re = "com.googleusercontent.apps.253367402103-5sehq8pc5rha37tkd0om6tj1l1576slb:/oauth2redirect";
function Be(e) {
    return te.some((t)=>t === e);
}
const Pe = [
    "/codebase/apps/install"
];
function Je(e) {
    if (!e.startsWith("/") || e.startsWith("//")) return !1;
    if (e.includes("://") || e.includes("\\") || e.includes("#")) return !1;
    const t = e.indexOf("?");
    return !(-1 === t ? e : e.slice(0, t)).includes("..") && Pe.some((t)=>e === t || e.startsWith(`${t}?`));
}
function Me(e) {
    return `${e}://${W}${V}`;
}
function qe(e) {
    return Array.from(new Set([
        ...e ? [
            e
        ] : [],
        ...re
    ])).map(Me);
}
function De(e) {
    try {
        const t = new URL(e);
        if ("http:" !== t.protocol) return !1;
        const r = t.hostname;
        return "localhost" === r || "127.0.0.1" === r || "[::1]" === r;
    } catch  {
        return !1;
    }
}
const Oe = "127.0.0.1";
function Ne(e) {
    const t = e.redirectUrl ?? ce;
    if (!0 !== e.loopbackIpv4 || !De(t)) return t;
    const r = new URL(t);
    return r.hostname = Oe, r.toString();
}
const Fe = Ne({
    loopbackIpv4: !0
});
function Ue(e, t) {
    if (void 0 === e || void 0 === t || 0 === t.length) return !1;
    try {
        const r = new URL(e).hostname.toLowerCase();
        return t.some((e)=>e.toLowerCase() === r);
    } catch  {
        return !1;
    }
}
function Le(e) {
    const { echoed: t, requested: r } = e;
    return void 0 !== t && t.length > 0 && t.every((e)=>r.includes(e)) ? [
        ...t
    ] : [
        ...r
    ];
}
function $e(e) {
    const t = new Set, r = void 0 !== e && De(e);
    return e && !r && t.add(e), t.add(ne), e === ae && t.add(se), t.add(ce), e && r && t.add(e), Array.from(t);
}
const Qe = "/oauth/mcp-client.json", je = `https://cursor.com${Qe}`, Ge = [
    ne,
    se,
    u,
    ce,
    Fe
], He = {
    clientName: "Cursor",
    logoUri: z,
    metadataDocumentPath: Qe
}, ze = "/oauth/grok-bot-mcp-client.json", We = {
    clientName: "Grok Bot",
    logoUri: "https://cursor.com/assets/sand-onboarding/grok-bot-icon.png",
    metadataDocumentPath: ze
};
function Ve(e = je, t = He) {
    return {
        client_id: e,
        client_name: t.clientName,
        client_uri: new URL(e).origin,
        logo_uri: t.logoUri,
        redirect_uris: Ge,
        grant_types: [
            "authorization_code",
            "refresh_token"
        ],
        response_types: [
            "code"
        ],
        token_endpoint_auth_method: "none"
    };
}
