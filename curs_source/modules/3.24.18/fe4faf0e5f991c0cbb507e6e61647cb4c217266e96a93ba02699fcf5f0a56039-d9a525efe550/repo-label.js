import { i } from "./plugin-brand-icon.js";
function M$e(r) {
    const e = r.toLowerCase();
    if (YAt.has(e)) return !0;
    for (const a of YAt)if (e.endsWith(`.${a}`)) return !0;
    return !1;
}
function xYn(r) {
    if (r.includes("://")) return r;
    const e = r.match(/^[^@/]+@([^:]+):(.+)$/);
    return e === null ? r : `https://${e[1]}/${e[2]}`;
}
function R$e(r) {
    return r.replace(/^\/+/, "").replace(/\/+$/, "").replace(/\.git$/, "");
}
function P$e(r) {
    const a = R$e(r).split("/").filter(Boolean);
    if (a.length < 2) return;
    const s = a[0], l = a.slice(1).join("/");
    return `${s}/${l}`;
}
function CYn(r) {
    if (r != null) try {
        const e = r.trim();
        if (e.length === 0) return;
        if (e.includes("://")) {
            const u = new URL(e);
            return j$e(u.hostname) ? KAt(u.pathname) : P$e(u.pathname);
        }
        const a = e.indexOf("/");
        if (a === -1) return;
        const s = e.slice(0, a), l = e.slice(a);
        return j$e(s.replace(/:\d+$/, "")) ? KAt(l) : M$e(s) ? P$e(l) : P$e(`/${e}`);
    } catch  {
        return;
    }
}
function j$e(r) {
    return EYn.test(r);
}
function KAt(r) {
    const e = R$e(r).split("/").filter(Boolean);
    if (e.length === 3 && e[0].toLowerCase() === "git") return `${e[1]}/${e[2]}`;
    if (e.length === 2 && e[0].toLowerCase() !== "git") return `${e[0]}/${e[1]}`;
}
function SYn(r) {
    let e = r;
    if (!e.includes("://")) {
        const a = e.indexOf("/");
        if (a === -1) return;
        const s = e.slice(0, a);
        if (!s.includes(".") || M$e(s)) return;
        e = `https://${e}`;
    }
    try {
        const a = new URL(e);
        if (M$e(a.hostname) || j$e(a.hostname)) return;
        const s = R$e(a.pathname).split("/").filter(Boolean);
        return s.length === 0 ? void 0 : `${a.host}/${s.join("/")}`;
    } catch  {
        return;
    }
}
function XAt(r) {
    if (r == null) return;
    const e = r.trim();
    if (e === "") return;
    const a = xYn(e);
    return SYn(a) ?? CYn(a);
}
function NY(r) {
    const e = r.poolName?.trim() ?? "";
    return e.length > 0 && e !== "default" && r.poolRepoLabel === "";
}
var YAt, EYn;
export { CYn, EYn, KAt, M$e, NY, P$e, R$e, SYn, XAt, YAt, j$e, xYn };
var __wakaru_W_i_initialized = false;
export function W_i() {
if (__wakaru_W_i_initialized) return;
__wakaru_W_i_initialized = true;
"use strict";
YAt = new Set([
    "github.com",
    "gitlab.com",
    "bitbucket.org",
    "bitbucket.com",
    "codeberg.org",
    "gitea.com",
    "sr.ht"
]), i(M$e, "isKnownGitHostingDomain"), i(xYn, "rewriteScpGitUrl"), i(R$e, "trimRepoPath"), i(P$e, "extractOwnerRepoFromPath"), i(CYn, "parseRepoNameFromUrl"), EYn = /^origin(?:-[a-z0-9]+)?\.cursor\.com$/i, i(j$e, "isOriginRepoHost"), i(KAt, "extractOwnerRepoFromOriginPath"), i(SYn, "parseSelfHostedRepoScope"), i(XAt, "deriveRepoLabelValueFromUrl"), i(NY, "isRepoLessPoolFormSelection");

}
