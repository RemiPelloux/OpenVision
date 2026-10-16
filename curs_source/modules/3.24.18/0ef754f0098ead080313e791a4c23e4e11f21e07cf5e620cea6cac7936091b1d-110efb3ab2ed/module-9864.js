"use strict";
require.r(exports), require.d(exports, {
    isexe: ()=>g,
    posix: ()=>t,
    sync: ()=>T,
    win32: ()=>s
});
var t = {};
require.r(t), require.d(t, {
    isexe: ()=>i,
    sync: ()=>l
});
var s = {};
require.r(s), require.d(s, {
    isexe: ()=>c,
    sync: ()=>p
});
var o = require("./module-9896.js"), r = require("./module-1943.js");
const i = async (e, a = {})=>{
    const { ignoreErrors: n = !1 } = a;
    try {
        return d(await (0, r.stat)(e), a);
    } catch (e) {
        const a = e;
        if (n || "EACCES" === a.code) return !1;
        throw a;
    }
}, l = (e, a = {})=>{
    const { ignoreErrors: n = !1 } = a;
    try {
        return d((0, o.statSync)(e), a);
    } catch (e) {
        const a = e;
        if (n || "EACCES" === a.code) return !1;
        throw a;
    }
}, d = (e, a)=>e.isFile() && m(e, a), m = (e, a)=>{
    const n = a.uid ?? process.getuid?.(), t = a.groups ?? process.getgroups?.() ?? [], s = a.gid ?? process.getgid?.() ?? t[0];
    if (void 0 === n || void 0 === s) throw new Error("cannot get uid or gid");
    const o = new Set([
        s,
        ...t
    ]), r = e.mode, i = e.uid, l = e.gid, d = parseInt("100", 8), m = parseInt("010", 8), c = d | m;
    return !!(r & parseInt("001", 8) || r & m && o.has(l) || r & d && i === n || r & c && 0 === n);
}, c = async (e, a = {})=>{
    const { ignoreErrors: n = !1 } = a;
    try {
        return A(await (0, r.stat)(e), e, a);
    } catch (e) {
        const a = e;
        if (n || "EACCES" === a.code) return !1;
        throw a;
    }
}, p = (e, a = {})=>{
    const { ignoreErrors: n = !1 } = a;
    try {
        return A((0, o.statSync)(e), e, a);
    } catch (e) {
        const a = e;
        if (n || "EACCES" === a.code) return !1;
        throw a;
    }
}, A = (e, a, n)=>e.isFile() && ((e, a)=>{
        const { pathExt: n = process.env.PATHEXT || "" } = a, t = n.split(";");
        if (-1 !== t.indexOf("")) return !0;
        for(let a = 0; a < t.length; a++){
            const n = t[a].toLowerCase(), s = e.substring(e.length - n.length).toLowerCase();
            if (n && s === n) return !0;
        }
        return !1;
    })(a, n), u = "win32" === (process.env._ISEXE_TEST_PLATFORM_ || process.platform) ? s : t, g = u.isexe, T = u.sync;
