"use strict";
require.d(exports, {
    BJ: ()=>h,
    DN: ()=>d,
    PS: ()=>y,
    ZU: ()=>p,
    fl: ()=>w,
    jl: ()=>c,
    kM: ()=>g,
    o1: ()=>u,
    oL: ()=>f,
    yn: ()=>l
});
var n = require("./module-51455.js"), s = require("./module-48161.js"), o = require("./module-76760.js"), i = require("./module-73136.js");
const a = "/";
function c(e) {
    return e.replace(/^~(?=$|\/|\\)/, (0, s.homedir)());
}
function l(e, t) {
    return void 0 !== e && ("win32" === process.platform ? (0, o.normalize)(e).toLowerCase() === (0, o.normalize)(t).toLowerCase() : e === t);
}
function u(e, t) {
    const r = c(function(e) {
        if (!e.startsWith("file://")) return e;
        try {
            return (0, i.fileURLToPath)(e);
        } catch  {
            return e;
        }
    }(e));
    return t && !(0, o.isAbsolute)(r) ? (0, o.resolve)(t, r) : (0, o.resolve)(r);
}
async function d(e, t) {
    const r = u(e, t);
    let s = r;
    for(;;)try {
        const e = await (0, n.realpath)(s);
        return (0, o.resolve)(e, (0, o.relative)(s, r));
    } catch (e) {
        if ("ENOENT" !== e.code) return null;
        const t = (0, o.dirname)(s);
        if (t === s) return r;
        s = t;
    }
}
function p({ basePath: e, targetPath: t }) {
    const r = (0, o.resolve)(e), n = (0, o.resolve)(e, t);
    return r === (0, o.parse)(r).root ? (0, o.parse)(n).root === r && (n === r || n.length > r.length) : n === r || n.startsWith(r + o.sep);
}
function m(e, t) {
    for (const r of t)if (p({
        basePath: r,
        targetPath: e
    })) return !0;
    return !1;
}
function h(e, t) {
    const r = "win32" === process.platform || "darwin" === process.platform, n = r ? e.toLowerCase() : e, s = r ? t.toLowerCase() : t;
    if (n === s) return !0;
    const i = s.endsWith(o.sep) ? s : s + o.sep;
    return n.startsWith(i);
}
function f(e) {
    return e.replace(/\\/g, a);
}
function g(e) {
    return f(e).includes(".cursor/worktrees");
}
const y = "You cannot search other worktrees for this repository, stay within your workspace paths.";
function w(e) {
    const { targetPath: t, workspacePaths: r, mainWorktreePath: n } = e;
    if (void 0 === t) return !1;
    if (0 === r.length) return !1;
    if (!r.every((e)=>g(e))) return !1;
    if (m(t, r)) return !1;
    const s = (0, o.isAbsolute)(t) ? [
        (0, o.resolve)(t)
    ] : r.map((e)=>(0, o.resolve)(e, t)), i = r.map((e)=>(function(e) {
            const t = f(e), r = "/.cursor/worktrees/", n = t.indexOf(r);
            if (-1 === n) return;
            const s = t.slice(n + 19).split("/");
            if (s.length < 2) return;
            const o = s[0] ?? "";
            return 0 !== o.length ? t.slice(0, n + 19 + o.length) : void 0;
        })(e)).filter((e)=>void 0 !== e);
    return !!(i.length > 0 && s.some((e)=>m(e, i))) || !(void 0 === n || !s.some((e)=>m(e, [
            n
        ])));
}
