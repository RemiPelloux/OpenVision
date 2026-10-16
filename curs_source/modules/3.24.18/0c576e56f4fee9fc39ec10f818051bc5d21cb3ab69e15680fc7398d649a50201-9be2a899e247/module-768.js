"use strict";
require.d(exports, {
    $H: ()=>Z,
    WV: ()=>g,
    Yl: ()=>m,
    _N: ()=>K,
    b6: ()=>q,
    bi: ()=>$,
    si: ()=>y
});
const n = BigInt(0), o = BigInt(8), s = BigInt(16), i = BigInt(65535);
function a(e) {
    const t = e.split(".");
    if (4 !== t.length) return;
    let r = n;
    for (const e of t){
        if (!/^\d{1,3}$/.test(e)) return;
        const t = Number(e);
        if (!Number.isInteger(t) || t < 0 || t > 255) return;
        r = r << o | BigInt(t);
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
            const o = a(n);
            if (!o) return;
            t.push(Number(o.value >> s & i)), t.push(Number(o.value & i));
            continue;
        }
        if (!/^[0-9a-f]{1,4}$/i.test(n)) return;
        t.push(Number.parseInt(n, 16));
    }
    return t;
}
function u(e) {
    return a(e) ?? function(e) {
        const t = D(e);
        if (0 === t.length || t.includes(":::")) return;
        const r = t.indexOf("::");
        if (-1 === r) {
            const e = c(t);
            if (!e || 8 !== e.length) return;
            return {
                version: 6,
                value: e.reduce((e, t)=>e << s | BigInt(t), n)
            };
        }
        if (-1 !== t.indexOf("::", r + 1)) return;
        const o = t.slice(0, r), i = t.slice(r + 2), a = c(o), u = c(i);
        if (!a || !u) return;
        const l = a.length + u.length;
        if (l > 7) return;
        return {
            version: 6,
            value: [
                ...a,
                ...new Array(8 - l).fill(0),
                ...u
            ].reduce((e, t)=>e << s | BigInt(t), n)
        };
    }(e);
}
const l = new Map, d = new Map;
function p(e) {
    const t = l.get(e);
    if (t) return t;
    l.size >= R && l.clear();
    const r = function(e) {
        const t = D(e);
        if ("*" === t) return {
            kind: "matchAll"
        };
        if (t.includes("/")) {
            const e = t.lastIndexOf("/");
            if (e <= 0 || e === t.length - 1) return {
                kind: "invalidCidr"
            };
            const r = u(t.slice(0, e));
            if (!r) return {
                kind: "invalidCidr"
            };
            const n = Number(t.slice(e + 1)), o = 4 === r.version ? 32 : 128;
            if (!Number.isInteger(n) || n < 0 || n > o) return {
                kind: "invalidCidr"
            };
            const s = BigInt(o - n);
            return {
                kind: "cidr",
                version: r.version,
                shift: s,
                shiftedNetwork: r.value >> s
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
    return l.set(e, r), r;
}
function f(e, t) {
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
                    const t = u(e);
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
    return f(D(e), p(t));
}
function m(e) {
    try {
        const t = new URL(e), r = new URL(t.pathname, t.origin);
        return r.search = t.search, r.pathname.endsWith("/") && r.pathname.length > 1 && (r.pathname = r.pathname.slice(0, -1)), "/" === r.pathname ? r.origin + r.search : r.toString();
    } catch  {
        return e.toLowerCase().trim();
    }
}
function g(e) {
    return {
        transportServerUrl: e,
        canonicalServerUrl: m(e)
    };
}
function y(e) {
    try {
        return new URL(m(e)).hostname.toLowerCase();
    } catch  {
        return;
    }
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
function _(e) {
    return /\s/.test(e);
}
const v = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", w = new RegExp(`^(?:${v}\\.)*${v}$`), b = new RegExp(`^\\*\\.(?:${v}\\.)*${v}$`), S = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", k = new RegExp(`^${S}(?:\\.${S}){3}$`), E = /^[0-9a-f:]+$/, x = new RegExp(`^(?:${S}(?:\\.${S}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
function T(e) {
    const t = D(e);
    return t.length > 0 && t.length <= 253 && w.test(t);
}
function O(e) {
    const t = D(e);
    return k.test(t) || function(e) {
        const t = D(e);
        if (!E.test(t)) return !1;
        try {
            return new URL(`https://[${t}]`), !0;
        } catch  {
            return !1;
        }
    }(t);
}
function P(e, t) {
    return "" === t || "http:" === e && "80" === t || "https:" === e && "443" === t;
}
function I(e) {
    try {
        const t = new URL(e);
        return ("http:" === t.protocol || "https:" === t.protocol) && !(0 === t.hostname.length || t.username.length > 0 || t.password.length > 0) && "" === t.hash && function(e) {
            const t = e.toLowerCase();
            return !t.includes("*") && (T(t) || O(t));
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
        return P(t, e.port) || (r += `:${e.port}`), r;
    }
    const r = e.protocol.toLowerCase();
    let n = `${r}//${e.hostname.toLowerCase()}`;
    return P(r, e.port) || (n += `:${e.port}`), `${n}${t.pathname}${t.search}`;
}
function A(e) {
    if (e.includes("://")) return I(e);
    const t = D(e);
    return "*" === t || !!b.test(t) || (t.includes("/") ? function(e) {
        const t = D(e);
        if (!x.test(t)) return !1;
        const [r] = t.split("/");
        return void 0 !== r && h(r, t);
    }(t) : T(t) || O(t));
}
function $(e) {
    if (N.has(e)) return N.get(e);
    N.size >= R && N.clear();
    const t = function(e) {
        const t = e.trim();
        if (0 === t.length) return;
        const r = t.lastIndexOf("/");
        if (!t.includes("://") && r > 0 && /^\d+$/.test(t.slice(r + 1).trim())) {
            const e = `${D(t.slice(0, r))}/${t.slice(r + 1).trim()}`;
            return A(e) ? e : void 0;
        }
        if (_(t) || t.includes("#") || t.includes("@")) return;
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
                    if (!A(t)) return;
                    return t;
                }
                {
                    const t = C(e);
                    if (!A(t)) return;
                    return t;
                }
            } catch  {
                return;
            }
        } else if (t.includes("/")) return;
        const o = t.trim().toLowerCase(), s = function(e) {
            const t = e.indexOf(":");
            if (-1 === t) return e;
            const r = e.slice(t + 1);
            return /^\d+$/.test(r) ? e.slice(0, t) : e;
        }(o);
        if (0 === s.length || !A(s)) return;
        if (s !== o && "*" === s) return;
        return s;
    }(e);
    return N.set(e, t), t;
}
const R = 2048, N = new Map, M = new Map;
function J(e, t) {
    if (!e.includes("*")) return e === t;
    const r = e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    return new RegExp(`^${r}$`).test(t);
}
function j(e) {
    return (e ?? []).flatMap((e)=>{
        const t = $(e);
        return void 0 === t ? [] : [
            t
        ];
    });
}
function D(e) {
    const t = e.trim().toLowerCase();
    return t.startsWith("[") && t.endsWith("]") ? t.slice(1, -1) : t;
}
function F(e) {
    const t = e.trim();
    if (0 === t.length) return;
    const r = t.includes("://") ? t : `https://${t}`;
    try {
        return new URL(r);
    } catch  {
        return;
    }
}
function q(e) {
    return j(e.mcpNetworkAllowlist);
}
function z(e) {
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
function U(e) {
    if (!0 !== e?.allowUserOverrideMcpServers) return;
    const t = (e.deniedMcpServers ?? []).flatMap((e)=>{
        const t = z(e.serverUrl), r = void 0 === t ? void 0 : function(e) {
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
                        const e = $(r.replace(/:\d+$/, ""));
                        if (void 0 !== e) return e;
                    }
                }
                return;
            }
            if (!t.includes("://") && t.includes("*") && "*" !== t && !t.startsWith("*.")) return;
            const r = $(e);
            if (void 0 !== r) return r;
            const n = e.indexOf("://");
            if (-1 === n) return;
            const o = e.slice(0, n).toLowerCase();
            if ("http" !== o && "https" !== o) return;
            const s = e.slice(n + 3).split(/[/?#]/, 1)[0];
            if (void 0 === s || s.includes("@")) return;
            const i = $(s.replace(/:\d+$/, ""));
            if (void 0 !== i) return i;
            try {
                return $(new URL(e).hostname);
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
function B(e) {
    return z(e)?.toLowerCase();
}
function L(e, t) {
    const r = B(e.builtinServer), n = B(t.builtinServer);
    if (void 0 !== r || void 0 !== n) return void 0 !== r && r === n;
    const o = z(e.command), s = z(e.serverUrl);
    if (void 0 === o && void 0 === s) return !1;
    const i = void 0 === o || void 0 !== t.command && J(o, t.command), a = void 0 === s || void 0 !== t.url && function(e, t) {
        if (J(e, t)) return !0;
        let r;
        return M.has(t) ? r = M.get(t) : (M.size >= R && M.clear(), r = F(t), M.set(t, r)), !!r && h(r.hostname, e);
    }(s, t.url);
    return i && a;
}
function V(e, t, r) {
    return void 0 !== r?.command && void 0 === r.url && void 0 === t && !0 === e?.allowUserOverrideMcpServers;
}
function K({ allowedMcpConfiguration: e, server: t, localAgentNetworkAllowlist: r, blockMessage: n, unmatchedServerAllowlist: o, aggregateManagedServerNetworkAllowlists: s = !0, stdioPlatform: i, unsandboxUserExtensionStdio: a }) {
    const c = e?.allowedMcpServers, u = U(e), l = void 0 === t ? void 0 : function(e, t) {
        return e?.find((e)=>L(e, t));
    }(c, t), d = V(e, l, t), p = function({ allowedMcpConfiguration: e, matchedServer: t, server: r }) {
        return void 0 === r ? (e?.allowedMcpServers?.length ?? 0) > 0 : void 0 !== t || V(e, t, r);
    }({
        allowedMcpConfiguration: e,
        matchedServer: l,
        server: t
    }) || void 0 === t && void 0 !== u, f = void 0 === t ? s ? c?.flatMap((e)=>e.networkAllowlist ?? []) : void 0 : d ? [] : function(e, t, r) {
        return void 0 === e ? r : [
            ...e.networkAllowlist ?? [],
            ...void 0 !== z(e.serverUrl) && void 0 !== t.url ? [
                t.url
            ] : []
        ];
    }(l, t, o), h = d && "win32" === i && !0 === a;
    let m;
    m = void 0 === t ? void 0 : h ? "no_sandbox" : d ? "allow_all" : function(e, t) {
        var r;
        if (void 0 !== z(e?.command) && void 0 !== t.command && void 0 === t.url) return r = e?.networkMode, ("allow_all" === r || "allowlist" === r || "deny_all" === r || "no_sandbox" === r ? r : void 0) ?? "no_sandbox";
    }(l, t);
    const g = void 0 === t || d ? u : void 0;
    return {
        enabled: p,
        mcpNetworkAllowlist: f,
        ...void 0 !== m ? {
            mcpNetworkMode: m
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
function Z(e) {
    if (!0 === e?.enabled && "no_sandbox" !== e.mcpNetworkMode) return e;
}
