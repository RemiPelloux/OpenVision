"use strict";
require.d(exports, {
    BJ: ()=>h,
    DN: ()=>u,
    PS: ()=>g,
    ZU: ()=>d,
    fl: ()=>y,
    kM: ()=>f,
    o1: ()=>c,
    oL: ()=>m,
    yn: ()=>l
});
var n = require("./module-51455.js"), o = require("./module-48161.js"), s = require("./module-76760.js"), i = require("./module-73136.js");
const a = "/";
function l(e, t) {
    return void 0 !== e && ("win32" === process.platform ? (0, s.normalize)(e).toLowerCase() === (0, s.normalize)(t).toLowerCase() : e === t);
}
function c(e, t) {
    const r = function(e) {
        return e.replace(/^~(?=$|\/|\\)/, (0, o.homedir)());
    }(function(e) {
        if (!e.startsWith("file://")) return e;
        try {
            return (0, i.fileURLToPath)(e);
        } catch  {
            return e;
        }
    }(e));
    return t && !(0, s.isAbsolute)(r) ? (0, s.resolve)(t, r) : (0, s.resolve)(r);
}
async function u(e, t) {
    const r = c(e, t);
    let o = r;
    for(;;)try {
        const e = await (0, n.realpath)(o);
        return (0, s.resolve)(e, (0, s.relative)(o, r));
    } catch (e) {
        if ("ENOENT" !== e.code) return null;
        const t = (0, s.dirname)(o);
        if (t === o) return r;
        o = t;
    }
}
function d({ basePath: e, targetPath: t }) {
    const r = (0, s.resolve)(e), n = (0, s.resolve)(e, t);
    return r === (0, s.parse)(r).root ? (0, s.parse)(n).root === r && (n === r || n.length > r.length) : n === r || n.startsWith(r + s.sep);
}
function p(e, t) {
    for (const r of t)if (d({
        basePath: r,
        targetPath: e
    })) return !0;
    return !1;
}
function h(e, t) {
    const r = "win32" === process.platform || "darwin" === process.platform, n = r ? e.toLowerCase() : e, o = r ? t.toLowerCase() : t;
    if (n === o) return !0;
    const i = o.endsWith(s.sep) ? o : o + s.sep;
    return n.startsWith(i);
}
function m(e) {
    return e.replace(/\\/g, a);
}
function f(e) {
    return m(e).includes(".cursor/worktrees");
}
const g = "You cannot search other worktrees for this repository, stay within your workspace paths.";
function y(e) {
    const { targetPath: t, workspacePaths: r, mainWorktreePath: n } = e;
    if (void 0 === t) return !1;
    if (0 === r.length) return !1;
    if (!r.every((e)=>f(e))) return !1;
    if (p(t, r)) return !1;
    const o = (0, s.isAbsolute)(t) ? [
        (0, s.resolve)(t)
    ] : r.map((e)=>(0, s.resolve)(e, t)), i = r.map((e)=>(function(e) {
            const t = m(e), r = "/.cursor/worktrees/", n = t.indexOf(r);
            if (-1 === n) return;
            const o = t.slice(n + 19).split("/");
            if (o.length < 2) return;
            const s = o[0] ?? "";
            return 0 !== s.length ? t.slice(0, n + 19 + s.length) : void 0;
        })(e)).filter((e)=>void 0 !== e);
    return !!(i.length > 0 && o.some((e)=>p(e, i))) || !(void 0 === n || !o.some((e)=>p(e, [
            n
        ])));
}
