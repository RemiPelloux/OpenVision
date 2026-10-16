"use strict";
require.d(exports, {
    $H: ()=>X,
    ME: ()=>z,
    _N: ()=>Q,
    b6: ()=>G,
    bi: ()=>A,
    mD: ()=>O,
    vc: ()=>F
});
const n = BigInt(0), s = BigInt(8), o = BigInt(16), i = BigInt(65535);
function a(e) {
    const t = e.split(".");
    if (4 !== t.length) return;
    let r = n;
    for (const e of t){
        if (!/^\d{1,3}$/.test(e)) return;
        const t = Number(e);
        if (!Number.isInteger(t) || t < 0 || t > 255) return;
        r = r << s | BigInt(t);
    }
    return {
        version: 4,
        value: r
    };
}
function c(e) {
    if (0 === e.length) return [];
    const t = [], r = e.split(":");
    for(let e = 0; e < r.length; e++){
        const n = r[e];
        if (0 === n.length) return;
        if (n.includes(".")) {
            if (e !== r.length - 1) return;
            const s = a(n);
            if (!s) return;
            t.push(Number(s.value >> o & i)), t.push(Number(s.value & i));
            continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n)) return;
        t.push(Number.parseInt(n, 16));
    }
    return t;
}
function l(e) {
    return a(e) ?? function(e) {
        const t = $(e);
        if (0 === t.length || t.includes(":::")) return;
        const r = t.indexOf("::");
        if (-1 === r) {
            const e = c(t);
            if (!e || 8 !== e.length) return;
            return {
                version: 6,
                value: e.reduce((e, t)=>e << o | BigInt(t), n)
            };
        }
        if (-1 !== t.indexOf("::", r + 1)) return;
        const s = t.slice(0, r), i = t.slice(r + 2), a = c(s), l = c(i);
        if (!a || !l) return;
        const u = a.length + l.length;
        if (u > 7) return;
        return {
            version: 6,
            value: [
                ...a,
                ...new Array(8 - u).fill(0),
                ...l
            ].reduce((e, t)=>e << o | BigInt(t), n)
        };
    }(e);
}
const u = new Map, d = new Map;
function p(e) {
    const t = u.get(e);
    if (t) return t;
    u.size >= R && u.clear();
    const r = function(e) {
        const t = $(e);
        if ("*" === t) return {
            kind: "matchAll"
        };
        if (t.includes("/")) {
            const e = t.lastIndexOf("/");
            if (e <= 0 || e === t.length - 1) return {
                kind: "invalidCidr"
            };
            const r = l(t.slice(0, e));
            if (!r) return {
                kind: "invalidCidr"
            };
            const n = Number(t.slice(e + 1)), s = 4 === r.version ? 32 : 128;
            if (!Number.isInteger(n) || n < 0 || n > s) return {
                kind: "invalidCidr"
            };
            const o = BigInt(s - n);
            return {
                kind: "cidr",
                version: r.version,
                shift: o,
                shiftedNetwork: r.value >> o
            };
        }
        return t.startsWith("*.") ? {
            kind: "subdomainOrBase",
            suffix: t.slice(2)
        } : {
            kind: "exact",
            value: t
        };
    }(e);
    return u.set(e, r), r;
}
function m(e, t) {
    switch(t.kind){
        case "matchAll":
            return !0;
        case "invalidCidr":
            return !1;
        case "cidr":
            {
                const r = function(e) {
                    if (d.has(e)) return d.get(e);
                    d.size >= R && d.clear();
                    const t = l(e);
                    return d.set(e, t), t;
                }(e);
                return void 0 !== r && r.version === t.version && r.value >> t.shift === t.shiftedNetwork;
            }
        case "subdomainOrBase":
            return e === t.suffix || e.endsWith(`.${t.suffix}`);
        case "exact":
            return e === t.value;
    }
}
function h(e, t) {
    return m($(e), p(t));
}
new Set([
    "airtable.com",
    "anysphere.co",
    "api.aws",
    "apify.com",
    "asana.com",
    "ashbyhq.com",
    "atlassian.com",
    "atlassian.net",
    "azuredatabricks.net",
    "box.com",
    "buildkite.com",
    "calendly.com",
    "canva.com",
    "clickhouse.cloud",
    "clickup.com",
    "cloudflare.com",
    "composio.dev",
    "context7.com",
    "cursor.com",
    "cursor.sh",
    "cursorapi.com",
    "databricks.com",
    "datadoghq.com",
    "datadoghq.eu",
    "ddog-gov.com",
    "dropbox.com",
    "elevenlabs.io",
    "exa.ai",
    "figma.com",
    "firecrawl.dev",
    "github.com",
    "githubcopilot.com",
    "gitlab.com",
    "google.com",
    "googleapis.com",
    "granola.ai",
    "hex.tech",
    "hubspot.com",
    "huggingface.co",
    "intercom.com",
    "linear.app",
    "monday.com",
    "neon.tech",
    "notion.com",
    "plain.com",
    "posthog.com",
    "prisma.io",
    "railway.com",
    "ramp.com",
    "render.com",
    "salesforce.com",
    "sentry.dev",
    "sentry.io",
    "slack.com",
    "snowflakecomputing.com",
    "spacelift.io",
    "statsig.com",
    "stripe.com",
    "supabase.com",
    "todoist.net",
    "vercel.com",
    "workos.com",
    "x.ai",
    "x.com",
    "zapier.com"
]);
const f = "Blocked by MCP Network Admin Server Controls";
function g(e) {
    return /\s/.test(e);
}
const y = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", w = new RegExp(`^(?:${y}\\.)*${y}$`), v = new RegExp(`^\\*\\.(?:${y}\\.)*${y}$`), _ = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", b = new RegExp(`^${_}(?:\\.${_}){3}$`), S = /^[0-9a-f:]+$/, k = new RegExp(`^(?:${_}(?:\\.${_}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
function x(e) {
    const t = $(e);
    return t.length > 0 && t.length <= 253 && w.test(t);
}
function E(e) {
    const t = $(e);
    return b.test(t) || function(e) {
        const t = $(e);
        if (!S.test(t)) return !1;
        try {
            return new URL(`https://[${t}]`), !0;
        } catch  {
            return !1;
        }
    }(t);
}
function I(e, t) {
    return "" === t || "http:" === e && "80" === t || "https:" === e && "443" === t;
}
function T(e) {
    try {
        const t = new URL(e);
        return ("http:" === t.protocol || "https:" === t.protocol) && !(0 === t.hostname.length || t.username.length > 0 || t.password.length > 0) && "" === t.hash && function(e) {
            const t = e.toLowerCase();
            return !t.includes("*") && (x(t) || E(t));
        }(t.hostname);
    } catch  {
        return !1;
    }
}
function C(e) {
    const t = new URL(e.pathname || "/", e.origin);
    if (t.search = e.search, t.pathname.endsWith("/") && t.pathname.length > 1 && (t.pathname = t.pathname.slice(0, -1)), "/" === t.pathname && "" === t.search) {
        const t = e.protocol.toLowerCase();
        let r = `${t}//${e.hostname.toLowerCase()}`;
        return I(t, e.port) || (r += `:${e.port}`), r;
    }
    const r = e.protocol.toLowerCase();
    let n = `${r}//${e.hostname.toLowerCase()}`;
    return I(r, e.port) || (n += `:${e.port}`), `${n}${t.pathname}${t.search}`;
}
function P(e) {
    if (e.includes("://")) return T(e);
    const t = $(e);
    return "*" === t || !!v.test(t) || (t.includes("/") ? function(e) {
        const t = $(e);
        if (!k.test(t)) return !1;
        const [r] = t.split("/");
        return void 0 !== r && h(r, t);
    }(t) : x(t) || E(t));
}
function A(e) {
    if (M.has(e)) return M.get(e);
    M.size >= R && M.clear();
    const t = function(e) {
        const t = e.trim();
        if (0 === t.length) return;
        const r = t.lastIndexOf("/");
        if (!t.includes("://") && r > 0 && /^\d+$/.test(t.slice(r + 1).trim())) {
            const e = `${$(t.slice(0, r))}/${t.slice(r + 1).trim()}`;
            return P(e) ? e : void 0;
        }
        if (g(t) || t.includes("#") || t.includes("@")) return;
        const n = t.indexOf("://");
        if (-1 !== n) {
            const e = t.slice(0, n).toLowerCase();
            if ("http" !== e && "https" !== e) return;
            try {
                const e = new URL(t);
                if (0 === e.hostname.length || e.username.length > 0 || e.password.length > 0) return;
                const r = "/" !== e.pathname && "" !== e.pathname, n = "" !== e.search;
                if (e.hostname.includes("*")) return;
                if (r || n) {
                    const t = C(e);
                    if (!P(t)) return;
                    return t;
                }
                {
                    const t = C(e);
                    if (!P(t)) return;
                    return t;
                }
            } catch  {
                return;
            }
        } else if (t.includes("/")) return;
        const s = t.trim().toLowerCase(), o = function(e) {
            const t = e.indexOf(":");
            if (-1 === t) return e;
            const r = e.slice(t + 1);
            return /^\d+$/.test(r) ? e.slice(0, t) : e;
        }(s);
        if (0 === o.length || !P(o)) return;
        if (o !== s && "*" === o) return;
        return o;
    }(e);
    return M.set(e, t), t;
}
const R = 2048, M = new Map, J = new Map;
function O(e, t) {
    if (!e.includes("*")) return e === t;
    const r = e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    return new RegExp(`^${r}$`).test(t);
}
function B(e) {
    return e.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e;
}
function D(e, t, r) {
    const n = N(t);
    if (!n) return !1;
    let s;
    try {
        s = new URL(e);
    } catch  {
        return !1;
    }
    return "" === s.username && "" === s.password && "" === n.username && "" === n.password && s.protocol === n.protocol && s.port === n.port && (o = s.hostname, i = n.hostname, !o.includes("*") && $(o) === $(i) && (a = s.pathname, c = n.pathname, (O(a, c) || O(B(a), B(c))) && function(e, t, r) {
        return "" === e ? r.allowRequestQueryWhenPatternOmitsQuery || "" === t : O(e, t);
    }(s.search, n.search, r)));
    var o, i, a, c;
}
function q(e, t) {
    return D(e, t, {
        allowRequestQueryWhenPatternOmitsQuery: !0
    });
}
function N(e) {
    const t = e.trim();
    if (0 === t.length || g(t)) return;
    if (function(e) {
        const t = e.indexOf("[");
        return -1 !== t && -1 === e.indexOf("]", t);
    }(t)) return;
    const r = j(t);
    if (r && ("http:" === r.protocol || "https:" === r.protocol) && "" === r.username && "" === r.password && 0 !== r.hostname.length && (!$(r.hostname).includes(":") || t.includes("["))) {
        if (t.includes("[")) {
            const e = t.indexOf("["), n = t.indexOf("]", e);
            if (-1 === n) return;
            const s = t.slice(e + 1, n);
            if ($(r.hostname) !== $(s)) return;
        }
        return r;
    }
}
function F(e, t) {
    if (O(e, t)) return !0;
    let r;
    return J.has(t) ? r = J.get(t) : (J.size >= R && J.clear(), r = j(t), J.set(t, r)), !!r && h(r.hostname, e);
}
function U(e, t) {
    const r = N(t);
    if (!r) return !1;
    if (!e.includes("://")) return h($(r.hostname), e);
    if (q(e, t)) return !0;
    const n = function(e) {
        try {
            const t = new URL(e);
            if ("" !== t.username || "" !== t.password || "/" !== t.pathname || "" !== t.search || "" !== t.hash) return;
            return `${t.protocol}//${t.host}/*`;
        } catch  {
            return;
        }
    }(e);
    return void 0 !== n && q(n, t);
}
function L(e) {
    return (e ?? []).flatMap((e)=>{
        const t = A(e);
        return void 0 === t ? [] : [
            t
        ];
    });
}
function $(e) {
    const t = e.trim().toLowerCase();
    return t.startsWith("[") && t.endsWith("]") ? t.slice(1, -1) : t;
}
function j(e) {
    const t = e.trim();
    if (0 === t.length) return;
    const r = t.includes("://") ? t : `https://${t}`;
    try {
        return new URL(r);
    } catch  {
        return;
    }
}
function G(e) {
    return L(e.mcpNetworkAllowlist);
}
function z(e, t) {
    if (!0 !== t.enabled) return {
        allowed: !0
    };
    if ("no_sandbox" === t.mcpNetworkMode) return {
        allowed: !0
    };
    if (!N(e)) return {
        allowed: !1,
        message: t.blockMessage ?? f
    };
    const r = G(t);
    return r.length > 0 && r.some((t)=>U(t, e)) ? {
        allowed: !0
    } : {
        allowed: !1,
        message: t.blockMessage ?? f
    };
}
function W(e) {
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
function H(e) {
    if (!0 !== e?.allowUserOverrideMcpServers) return;
    const t = (e.deniedMcpServers ?? []).flatMap((e)=>{
        const t = W(e.serverUrl), r = void 0 === t ? void 0 : function(e) {
            const t = e.trim();
            if (0 === t.length) return;
            if (function(e) {
                const t = e.indexOf("://");
                if (-1 === t) return !1;
                const r = e.slice(t + 3), n = r.indexOf("/");
                return -1 === n ? r.includes("?") : r.slice(n).includes("*");
            }(t)) {
                const e = t.indexOf("://");
                if (-1 !== e) {
                    const r = t.slice(e + 3).split(/[/?#]/, 1)[0];
                    if (r?.includes("*")) {
                        const e = A(r.replace(/:\d+$/, ""));
                        if (void 0 !== e) return e;
                    }
                }
                return;
            }
            if (!t.includes("://") && t.includes("*") && "*" !== t && !t.startsWith("*.")) return;
            const r = A(e);
            if (void 0 !== r) return r;
            const n = e.indexOf("://");
            if (-1 === n) return;
            const s = e.slice(0, n).toLowerCase();
            if ("http" !== s && "https" !== s) return;
            const o = e.slice(n + 3).split(/[/?#]/, 1)[0];
            if (void 0 === o || o.includes("@")) return;
            const i = A(o.replace(/:\d+$/, ""));
            if (void 0 !== i) return i;
            try {
                return A(new URL(e).hostname);
            } catch  {
                return;
            }
        }(t);
        return void 0 === r ? [] : [
            r
        ];
    });
    return t.length > 0 ? t : void 0;
}
function K(e) {
    return W(e)?.toLowerCase();
}
function V(e, t) {
    return e?.find((e)=>(function(e, t) {
            const r = K(e.builtinServer), n = K(t.builtinServer);
            if (void 0 !== r || void 0 !== n) return void 0 !== r && r === n;
            const s = W(e.command), o = W(e.serverUrl);
            if (void 0 === s && void 0 === o) return !1;
            const i = void 0 === s || void 0 !== t.command && O(s, t.command), a = void 0 === o || void 0 !== t.url && F(o, t.url);
            return i && a;
        })(e, t));
}
function Y(e, t, r) {
    return void 0 !== r?.command && void 0 === r.url && void 0 === t && !0 === e?.allowUserOverrideMcpServers;
}
function Q({ allowedMcpConfiguration: e, server: t, localAgentNetworkAllowlist: r, blockMessage: n, unmatchedServerAllowlist: s, aggregateManagedServerNetworkAllowlists: o = !0, stdioPlatform: i, unsandboxUserExtensionStdio: a }) {
    const c = e?.allowedMcpServers, l = H(e), u = void 0 === t ? void 0 : V(c, t), d = Y(e, u, t), p = function({ allowedMcpConfiguration: e, matchedServer: t, server: r }) {
        return void 0 === r ? (e?.allowedMcpServers?.length ?? 0) > 0 : void 0 !== t || Y(e, t, r);
    }({
        allowedMcpConfiguration: e,
        matchedServer: u,
        server: t
    }) || void 0 === t && void 0 !== l, m = void 0 === t ? o ? c?.flatMap((e)=>e.networkAllowlist ?? []) : void 0 : d ? [] : function(e, t, r) {
        return void 0 === e ? r : [
            ...e.networkAllowlist ?? [],
            ...void 0 !== W(e.serverUrl) && void 0 !== t.url ? [
                t.url
            ] : []
        ];
    }(u, t, s), h = d && "win32" === i && !0 === a;
    let f;
    f = void 0 === t ? void 0 : h ? "no_sandbox" : d ? "allow_all" : function(e, t) {
        var r;
        if (void 0 !== W(e?.command) && void 0 !== t.command && void 0 === t.url) return r = e?.networkMode, ("allow_all" === r || "allowlist" === r || "deny_all" === r || "no_sandbox" === r ? r : void 0) ?? "no_sandbox";
    }(u, t);
    const g = void 0 === t || d ? l : void 0;
    return {
        enabled: p,
        mcpNetworkAllowlist: m,
        ...void 0 !== f ? {
            mcpNetworkMode: f
        } : {},
        ...void 0 !== g ? {
            mcpNetworkDenylist: g
        } : {},
        ...void 0 !== r ? {
            localAgentNetworkAllowlist: r
        } : {},
        ...void 0 !== n ? {
            blockMessage: n
        } : {},
        ...h ? {
            win32UserExtensionUnsandbox: !0
        } : {}
    };
}
function X(e) {
    if (!0 === e?.enabled && "no_sandbox" !== e.mcpNetworkMode) return e;
}
