"use strict";
require.d(exports, {
    $H: ()=>N,
    b6: ()=>D,
    bi: ()=>A
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
function l(e) {
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
function c(e) {
    return a(e) ?? function(e) {
        const t = O(e);
        if (0 === t.length || t.includes(":::")) return;
        const r = t.indexOf("::");
        if (-1 === r) {
            const e = l(t);
            if (!e || 8 !== e.length) return;
            return {
                version: 6,
                value: e.reduce((e, t)=>e << s | BigInt(t), n)
            };
        }
        if (-1 !== t.indexOf("::", r + 1)) return;
        const o = t.slice(0, r), i = t.slice(r + 2), a = l(o), c = l(i);
        if (!a || !c) return;
        const u = a.length + c.length;
        if (u > 7) return;
        return {
            version: 6,
            value: [
                ...a,
                ...new Array(8 - u).fill(0),
                ...c
            ].reduce((e, t)=>e << s | BigInt(t), n)
        };
    }(e);
}
const u = new Map, d = new Map;
function p(e) {
    const t = u.get(e);
    if (t) return t;
    u.size >= P && u.clear();
    const r = function(e) {
        const t = O(e);
        if ("*" === t) return {
            kind: "matchAll"
        };
        if (t.includes("/")) {
            const e = t.lastIndexOf("/");
            if (e <= 0 || e === t.length - 1) return {
                kind: "invalidCidr"
            };
            const r = c(t.slice(0, e));
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
    return u.set(e, r), r;
}
function h(e, t) {
    switch(t.kind){
        case "matchAll":
            return !0;
        case "invalidCidr":
            return !1;
        case "cidr":
            {
                const r = function(e) {
                    if (d.has(e)) return d.get(e);
                    d.size >= P && d.clear();
                    const t = c(e);
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
function m(e, t) {
    return h(O(e), p(t));
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
function f(e) {
    return /\s/.test(e);
}
const g = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", y = new RegExp(`^(?:${g}\\.)*${g}$`), v = new RegExp(`^\\*\\.(?:${g}\\.)*${g}$`), w = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", b = new RegExp(`^${w}(?:\\.${w}){3}$`), _ = /^[0-9a-f:]+$/, S = new RegExp(`^(?:${w}(?:\\.${w}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
function x(e) {
    const t = O(e);
    return t.length > 0 && t.length <= 253 && y.test(t);
}
function k(e) {
    const t = O(e);
    return b.test(t) || function(e) {
        const t = O(e);
        if (!_.test(t)) return !1;
        try {
            return new URL(`https://[${t}]`), !0;
        } catch  {
            return !1;
        }
    }(t);
}
function E(e, t) {
    return "" === t || "http:" === e && "80" === t || "https:" === e && "443" === t;
}
function T(e) {
    try {
        const t = new URL(e);
        return ("http:" === t.protocol || "https:" === t.protocol) && !(0 === t.hostname.length || t.username.length > 0 || t.password.length > 0) && "" === t.hash && function(e) {
            const t = e.toLowerCase();
            return !t.includes("*") && (x(t) || k(t));
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
        return E(t, e.port) || (r += `:${e.port}`), r;
    }
    const r = e.protocol.toLowerCase();
    let n = `${r}//${e.hostname.toLowerCase()}`;
    return E(r, e.port) || (n += `:${e.port}`), `${n}${t.pathname}${t.search}`;
}
function I(e) {
    if (e.includes("://")) return T(e);
    const t = O(e);
    return "*" === t || !!v.test(t) || (t.includes("/") ? function(e) {
        const t = O(e);
        if (!S.test(t)) return !1;
        const [r] = t.split("/");
        return void 0 !== r && m(r, t);
    }(t) : x(t) || k(t));
}
function A(e) {
    if (M.has(e)) return M.get(e);
    M.size >= P && M.clear();
    const t = function(e) {
        const t = e.trim();
        if (0 === t.length) return;
        const r = t.lastIndexOf("/");
        if (!t.includes("://") && r > 0 && /^\d+$/.test(t.slice(r + 1).trim())) {
            const e = `${O(t.slice(0, r))}/${t.slice(r + 1).trim()}`;
            return I(e) ? e : void 0;
        }
        if (f(t) || t.includes("#") || t.includes("@")) return;
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
                    if (!I(t)) return;
                    return t;
                }
                {
                    const t = C(e);
                    if (!I(t)) return;
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
        if (0 === s.length || !I(s)) return;
        if (s !== o && "*" === s) return;
        return s;
    }(e);
    return M.set(e, t), t;
}
const P = 2048, M = new Map;
new Map;
function R(e) {
    return (e ?? []).flatMap((e)=>{
        const t = A(e);
        return void 0 === t ? [] : [
            t
        ];
    });
}
function O(e) {
    const t = e.trim().toLowerCase();
    return t.startsWith("[") && t.endsWith("]") ? t.slice(1, -1) : t;
}
function D(e) {
    return R(e.mcpNetworkAllowlist);
}
function N(e) {
    if (!0 === e?.enabled && "no_sandbox" !== e.mcpNetworkMode) return e;
}
