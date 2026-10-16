"use strict";
function n(e) {
    let t = e.length;
    for(; t > 0 && 47 === e.charCodeAt(t - 1);)t--;
    const r = e.slice(0, t).replace(/\.git$/i, "");
    return r && "/" !== r ? r.startsWith("/") ? r : `/${r}` : "";
}
function s(e) {
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(e)) return e;
    const t = `https://${e}`;
    try {
        return new URL(t), t;
    } catch  {
        const r = e.match(/^([^@/\s]+@)?([^:/\s]+):(.+)$/);
        if (r) {
            return `ssh://${r[1] ?? ""}${r[2]}/${r[3]}`;
        }
        return t;
    }
}
function o(e, t) {
    const r = n(t);
    return r ? `${e}${r}`.toLowerCase() : "";
}
require.d(exports, {
    CR: ()=>y,
    _f: ()=>_,
    a8: ()=>A,
    dA: ()=>l,
    ve: ()=>u,
    xY: ()=>w,
    zB: ()=>c
});
const i = new Map, a = 2048;
function c(e) {
    const t = i.get(e);
    if (void 0 !== t) return t;
    const r = function(e) {
        const t = e.trim();
        if (!t) return "";
        try {
            const e = s(t), r = new URL(e);
            return o(r.hostname, r.pathname);
        } catch  {
            const e = t.replace(/^(?:https?|ssh|git):\/\//i, ""), r = e.indexOf("/"), n = -1 === r ? e : e.slice(0, r), s = -1 === r ? "" : e.slice(r);
            return o(n.includes("@") ? n.slice(n.lastIndexOf("@") + 1) : n, s);
        }
    }(e);
    return i.size >= a && i.clear(), i.set(e, r), r;
}
function l(e) {
    const t = e.trim();
    if (!t) return "";
    try {
        const e = new URL(s(t)), r = "http:" === e.protocol || "https:" === e.protocol ? e.protocol : "https:", o = e.host.toLowerCase(), i = n(e.pathname);
        return i ? `${r}//${o}${i}` : "";
    } catch  {
        const e = c(t);
        return e ? `https://${e}` : "";
    }
}
function u(e) {
    return /^origin(-[a-z0-9]+)?\.cursor\.com$/i.test(e);
}
new Map([
    [
        "cursor.com",
        "origin.cursor.com"
    ],
    [
        "www.cursor.com",
        "origin.cursor.com"
    ],
    [
        "staging.cursor.com",
        "origin-staging.cursor.com"
    ]
]);
function d(e) {
    let t = e.trim();
    if ("" !== t) {
        t.startsWith("git@") ? t = `https://${t.slice(4).replace(":", "/")}` : /^[a-z][a-z0-9+.-]*:\/\//i.test(t) && !/^https?:\/\//i.test(t) ? t = t.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://") : /^https?:\/\//i.test(t) || (t = `https://${t}`);
        try {
            return new URL(t);
        } catch  {
            return;
        }
    }
}
const p = new Map, m = 2048;
function h(e) {
    if (void 0 === e) return;
    if (p.has(e)) return p.get(e);
    const t = function(e) {
        const t = e ? d(e) : void 0;
        if (void 0 === t || !u(t.hostname)) return;
        const r = n(t.pathname).split("/").filter(Boolean), s = 3 === r.length && "git" === r[0]?.toLowerCase(), o = 2 === r.length && "git" !== r[0]?.toLowerCase();
        if (!s && !o) return;
        const i = s ? r[1] : r[0], a = s ? r[2] : r[1];
        if (!i || !a) return;
        return Object.freeze({
            hostname: t.hostname,
            owner: i,
            name: a
        });
    }(e);
    return p.size >= m && p.clear(), p.set(e, t), t;
}
function f(e) {
    const t = h(e);
    return void 0 === t ? void 0 : {
        owner: t.owner,
        name: t.name
    };
}
function g(e) {
    return function(e) {
        const t = h(e);
        if (void 0 !== t) return `${t.hostname}/git/${t.owner}/${t.name}`.toLowerCase();
    }(e) ?? c(e);
}
function y(e) {
    return g(e);
}
function w(e, t) {
    return e.length > 0 && e === t;
}
function v(e) {
    const t = new Set;
    for (const r of e){
        const e = y(r);
        e.length > 0 && t.add(e);
    }
    return t;
}
function _(e) {
    const t = [];
    for (const r of e)for (const e of r.repoConfig?.repos ?? [])t.push(e.repoUrl);
    const r = new Set;
    for (const e of t){
        const t = l(e);
        t.length > 0 && r.add(t);
    }
    return {
        identityKeys: v(t),
        transportUrls: r
    };
}
new Set([
    "github.com",
    "www.github.com"
]);
function A(e) {
    return void 0 !== f(e);
}
new RegExp("^tmp-[0-9a-f]{16}$");
