import { Ne, vm } from "./nls.js";
import { h } from "./tslib.es6.js";
var qo, Cl, Il, Al, Bb, Gb, Mv, s4, Vb, $b, i4, Tm, km, jb, Hb, Si, yi, ur, qb, a4, Yr, Sm, ee, q, Fe, Kb, zb, Xs, o4, c4, l4, Ko, Qs, Rs, d4, Yb, u4, m4, Nr, os, Jb, p4, h4, g4, QLe, Pv, ym, f4;
export { $b, Al, Bb, Cl, Fe, Gb, Hb, Il, Jb, Kb, Ko, Mv, Nr, Pv, QLe, Qs, Rs, Si, Sm, Tm, Vb, Xs, Yb, Yr, a4, c4, d4, ee, f4, g4, h4, i4, jb, km, l4, m4, o4, os, p4, q, qb, qo, s4, u4, ur, yi, ym, zb };
var __wakaru_oe_initialized = false;
export function oe() {
if (__wakaru_oe_initialized) return;
__wakaru_oe_initialized = true;
"use strict";
if (h(), Ne(), qo = "en", Cl = !1, Il = !1, Al = !1, Bb = !1, Gb = !1, Mv = !1, s4 = !1, Vb = !1, $b = !1, i4 = !1, Tm = void 0, km = qo, jb = qo, Hb = void 0, Si = void 0, yi = globalThis, ur = void 0, typeof yi.vscode < "u" && typeof yi.vscode.process < "u" ? ur = yi.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (ur = process), qb = typeof ur?.versions?.electron == "string", a4 = qb && ur?.type === "renderer", typeof ur == "object") {
    Cl = ur.platform === "win32", Il = ur.platform === "darwin", Al = ur.platform === "linux", Bb = Al && !!ur.env.SNAP && !!ur.env.SNAP_REVISION, s4 = qb, $b = !!ur.env.CI || !!ur.env.BUILD_ARTIFACTSTAGINGDIRECTORY, Tm = qo, km = qo;
    const e = ur.env.VSCODE_NLS_CONFIG;
    if (e) try {
        const t = JSON.parse(e);
        Tm = t.userLocale, jb = t.osLocale, km = t.resolvedLanguage || qo, Hb = t.languagePack?.translationsConfigFile;
    } catch  {}
    Gb = !0;
} else typeof navigator == "object" && !a4 ? (Si = navigator.userAgent, Cl = Si.indexOf("Windows") >= 0, Il = Si.indexOf("Macintosh") >= 0, Vb = (Si.indexOf("Macintosh") >= 0 || Si.indexOf("iPad") >= 0 || Si.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Al = Si.indexOf("Linux") >= 0, i4 = Si?.indexOf("Mobi") >= 0, Mv = !0, km = vm() || qo, Tm = navigator.language.toLowerCase(), jb = Tm) : console.error("Unable to resolve platform.");
Yr = ((e)=>(e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows", e))(Yr || {}), Sm = 0, Il ? Sm = 1 : Cl ? Sm = 3 : Al && (Sm = 2), ee = Cl, q = Il, Fe = Al, Kb = Bb, zb = Gb, Xs = Mv, o4 = Mv && typeof yi.importScripts == "function", c4 = o4 ? yi.origin : void 0, l4 = $b, Ko = Sm, Qs = Si, Rs = km, ((e)=>{
    function t() {
        return Rs;
    }
    e.value = t;
    function n() {
        return Rs.length === 2 ? Rs === "en" : Rs.length >= 3 ? Rs[0] === "e" && Rs[1] === "n" && Rs[2] === "-" : !1;
    }
    e.isDefaultVariant = n;
    function r() {
        return Rs === "en";
    }
    e.isDefault = r;
})(d4 || (d4 = {})), Yb = Hb, u4 = typeof yi.postMessage == "function" && !yi.importScripts, m4 = (()=>{
    if (u4) {
        const e = [];
        yi.addEventListener("message", (n)=>{
            if (n.data && n.data.vscodeScheduleAsyncWork) for(let r = 0, s = e.length; r < s; r++){
                const i = e[r];
                if (i.id === n.data.vscodeScheduleAsyncWork) {
                    e.splice(r, 1), i.callback();
                    return;
                }
            }
        });
        let t = 0;
        return (n)=>{
            const r = ++t;
            e.push({
                id: r,
                callback: n
            }), yi.postMessage({
                vscodeScheduleAsyncWork: r
            }, "*");
        };
    }
    return (e)=>setTimeout(e);
})(), Nr = ((e)=>(e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux", e))(Nr || {}), os = Il || Vb ? 2 : Cl ? 1 : 3, Jb = !!(Qs && Qs.indexOf("Chrome") >= 0), p4 = !!(Qs && Qs.indexOf("Firefox") >= 0), h4 = !!(!Jb && Qs && Qs.indexOf("Safari") >= 0), g4 = !!(Qs && Qs.indexOf("Edg/") >= 0), QLe = !!(Qs && Qs.indexOf("Android") >= 0), Pv = ur?.arch, ym = ur?.platform, f4 = ur?.versions?.node;

}
