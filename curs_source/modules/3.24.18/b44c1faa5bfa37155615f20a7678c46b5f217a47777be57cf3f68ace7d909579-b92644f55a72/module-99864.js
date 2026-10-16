"use strict";
require.r(exports), require.d(exports, {
    isexe: ()=>f,
    posix: ()=>n,
    sync: ()=>g,
    win32: ()=>s
});
var n = {};
require.r(n), require.d(n, {
    isexe: ()=>a,
    sync: ()=>c
});
var s = {};
require.r(s), require.d(s, {
    isexe: ()=>d,
    sync: ()=>p
});
var o = require("./module-79896.js"), i = require("./module-91943.js");
const a = async (e, t = {})=>{
    const { ignoreErrors: r = !1 } = t;
    try {
        return l(await (0, i.stat)(e), t);
    } catch (e) {
        const t = e;
        if (r || "EACCES" === t.code) return !1;
        throw t;
    }
}, c = (e, t = {})=>{
    const { ignoreErrors: r = !1 } = t;
    try {
        return l((0, o.statSync)(e), t);
    } catch (e) {
        const t = e;
        if (r || "EACCES" === t.code) return !1;
        throw t;
    }
}, l = (e, t)=>e.isFile() && u(e, t), u = (e, t)=>{
    const r = t.uid ?? process.getuid?.(), n = t.groups ?? process.getgroups?.() ?? [], s = t.gid ?? process.getgid?.() ?? n[0];
    if (void 0 === r || void 0 === s) throw new Error("cannot get uid or gid");
    const o = new Set([
        s,
        ...n
    ]), i = e.mode, a = e.uid, c = e.gid, l = parseInt("100", 8), u = parseInt("010", 8), d = l | u;
    return !!(i & parseInt("001", 8) || i & u && o.has(c) || i & l && a === r || i & d && 0 === r);
}, d = async (e, t = {})=>{
    const { ignoreErrors: r = !1 } = t;
    try {
        return m(await (0, i.stat)(e), e, t);
    } catch (e) {
        const t = e;
        if (r || "EACCES" === t.code) return !1;
        throw t;
    }
}, p = (e, t = {})=>{
    const { ignoreErrors: r = !1 } = t;
    try {
        return m((0, o.statSync)(e), e, t);
    } catch (e) {
        const t = e;
        if (r || "EACCES" === t.code) return !1;
        throw t;
    }
}, m = (e, t, r)=>e.isFile() && ((e, t)=>{
        const { pathExt: r = process.env.PATHEXT || "" } = t, n = r.split(";");
        if (-1 !== n.indexOf("")) return !0;
        for(let t = 0; t < n.length; t++){
            const r = n[t].toLowerCase(), s = e.substring(e.length - r.length).toLowerCase();
            if (r && s === r) return !0;
        }
        return !1;
    })(t, r), h = "win32" === (process.env._ISEXE_TEST_PLATFORM_ || process.platform) ? s : n, f = h.isexe, g = h.sync;
