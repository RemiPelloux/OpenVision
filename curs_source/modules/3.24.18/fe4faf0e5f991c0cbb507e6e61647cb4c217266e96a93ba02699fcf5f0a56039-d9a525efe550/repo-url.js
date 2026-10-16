import { i } from "./plugin-brand-icon.js";
function Knr(r) {
    let e = r.length;
    for(; e > 0 && r.charCodeAt(e - 1) === 47;)e--;
    const a = r.slice(0, e).replace(/\.git$/i, "");
    return !a || a === "/" ? "" : a.startsWith("/") ? a : `/${a}`;
}
function Xnr(r) {
    return /^origin(-[a-z0-9]+)?\.cursor\.com$/i.test(r);
}
function Ynr(r) {
    let e = r.trim();
    if (e !== "") {
        e.startsWith("git@") ? e = `https://${e.slice(4).replace(":", "/")}` : /^[a-z][a-z0-9+.-]*:\/\//i.test(e) && !/^https?:\/\//i.test(e) ? e = e.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://") : /^https?:\/\//i.test(e) || (e = `https://${e}`);
        try {
            return new URL(e);
        } catch  {
            return;
        }
    }
}
function _B(r) {
    if (r === void 0) return;
    if (XY.has(r)) return XY.get(r);
    const e = Jnr(r);
    return XY.size >= err && XY.clear(), XY.set(r, e), e;
}
function Jnr(r) {
    const e = r ? Ynr(r) : void 0;
    if (e === void 0 || !Xnr(e.hostname)) return;
    const a = Knr(e.pathname).split("/").filter(Boolean), s = a.length === 3 && a[0]?.toLowerCase() === "git", l = a.length === 2 && a[0]?.toLowerCase() !== "git";
    if (!s && !l) return;
    const u = s ? a[1] : a[0], p = s ? a[2] : a[1];
    if (!(!u || !p)) return Object.freeze({
        hostname: e.hostname,
        owner: u,
        name: p
    });
}
function tNe(r) {
    const e = _B(r);
    return e === void 0 ? void 0 : {
        owner: e.owner,
        name: e.name
    };
}
function TIt({ owner: r, name: e }) {
    return `/git/${r}/${e}`;
}
function lfe(r) {
    const e = _B(r);
    if (e !== void 0) return `${e.hostname}/git/${e.owner}/${e.name}`.toLowerCase();
}
function Qnr(r) {
    return tNe(r) !== void 0;
}
var ufe, XY, err, trr, nrr, Iki;
export { Iki, Jnr, Knr, Qnr, TIt, XY, Xnr, Ynr, _B, err, lfe, nrr, tNe, trr, ufe };
var __wakaru_Nki_initialized = false;
export function Nki() {
if (__wakaru_Nki_initialized) return;
__wakaru_Nki_initialized = true;
"use strict";
i(Knr, "trimRemotePath"), ufe = "origin.cursor.com", i(Xnr, "isOriginGitHost"), i(Ynr, "parseRemoteUrlForOriginCheck"), XY = new Map, err = 2048, i(_B, "parseOriginRepoCloneUrlParts"), i(Jnr, "computeOriginRepoCloneUrlParts"), i(tNe, "parseOriginRepoCloneUrl"), i(TIt, "originRepoClonePath"), i(lfe, "originRepoCloneIdentity"), i(Qnr, "isOriginBackedRemoteUrl"), trr = "tmp-", nrr = 16, Iki = new RegExp(`^${trr}[0-9a-f]{${nrr}}$`);

}
