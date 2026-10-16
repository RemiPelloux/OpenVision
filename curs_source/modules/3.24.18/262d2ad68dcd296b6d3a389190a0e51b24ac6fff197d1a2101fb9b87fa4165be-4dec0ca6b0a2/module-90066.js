"use strict";
function n(e) {
    return !!e.startsWith("/") || !!/^[a-zA-Z]:[\\/]/.test(e) || !!e.startsWith("\\\\");
}
function o(e) {
    return e.split(/[/\\]/).filter((e)=>e);
}
function s(e, t) {
    const r = o(e);
    for(let e = 0; e < r.length - 2; e++)if (".cursor" === r[e] && "projects" === r[e + 1] && r[e + 3] === t) return {
        workspaceId: r[e + 2],
        remainingPath: r.slice(e + 4)
    };
    return null;
}
function i(e) {
    const t = s(e, "terminals");
    return null !== t && 0 === t.remainingPath.length;
}
function a(e) {
    return null !== s(e, "agent-transcripts");
}
function l(e) {
    const t = s(e, "agent-tools");
    return null !== t && 1 === t.remainingPath.length && t.remainingPath[0].endsWith(".txt");
}
function c(e) {
    return null !== u(e);
}
function u(e) {
    const t = s(e, "terminals");
    if (!t || 1 !== t.remainingPath.length) return null;
    const r = t.remainingPath[0], n = /^(\d+)\.txt$/.exec(r);
    if (!n) return null;
    const o = Number.parseInt(n[1], 10);
    return Number.isNaN(o) ? null : {
        id: o
    };
}
function d(e) {
    return e.replace(/[^a-zA-Z0-9._-]/g, "_");
}
require.d(exports, {
    CM: ()=>c,
    JD: ()=>l,
    Nz: ()=>d,
    XG: ()=>a,
    Z1: ()=>n,
    fg: ()=>u,
    jq: ()=>i
});
