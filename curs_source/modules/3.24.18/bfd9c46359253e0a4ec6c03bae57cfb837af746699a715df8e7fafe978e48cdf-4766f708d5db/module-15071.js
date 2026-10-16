"use strict";
function n(e) {
    let t = e.length;
    for(; t > 0 && 47 === e.charCodeAt(t - 1);)t--;
    const r = e.slice(0, t).replace(/\.git$/i, "");
    return r && "/" !== r ? r.startsWith("/") ? r : `/${r}` : "";
}
require.d(exports, {
    a8: ()=>u,
    ve: ()=>s
});
new Map;
function s(e) {
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
function o(e) {
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
const i = new Map, a = 2048;
function c(e) {
    if (void 0 === e) return;
    if (i.has(e)) return i.get(e);
    const t = function(e) {
        const t = e ? o(e) : void 0;
        if (void 0 === t || !s(t.hostname)) return;
        const r = n(t.pathname).split("/").filter(Boolean), i = 3 === r.length && "git" === r[0]?.toLowerCase(), a = 2 === r.length && "git" !== r[0]?.toLowerCase();
        if (!i && !a) return;
        const c = i ? r[1] : r[0], l = i ? r[2] : r[1];
        if (!c || !l) return;
        return Object.freeze({
            hostname: t.hostname,
            owner: c,
            name: l
        });
    }(e);
    return i.size >= a && i.clear(), i.set(e, t), t;
}
function l(e) {
    const t = c(e);
    return void 0 === t ? void 0 : {
        owner: t.owner,
        name: t.name
    };
}
new Set([
    "github.com",
    "www.github.com"
]);
function u(e) {
    return void 0 !== l(e);
}
new RegExp("^tmp-[0-9a-f]{16}$");
