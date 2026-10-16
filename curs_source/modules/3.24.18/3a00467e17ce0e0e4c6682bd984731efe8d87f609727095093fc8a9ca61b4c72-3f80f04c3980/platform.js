import { Ns, Vt } from "./nls.js";
import { w } from "./tslib.es6.js";
var Be, _t, yt, tt, js, Vr, zt, Ws, Us, qs, Bs, vt, wt, zr, Vs, ye, ve, K, Gr, zs, Gt, V, xe, we, Gs, Hs, Ks, Js, de, Ae, Qs, Ys, Zs, Xs, ia, na, oa, aa, la, ca, ua;
export { Ae, Be, Bs, Gr, Gs, Gt, Hs, Js, K, Ks, Qs, Us, V, Vr, Vs, Ws, Xs, Ys, Zs, _t, aa, ca, de, ia, js, la, na, oa, qs, tt, ua, ve, vt, we, wt, xe, ye, yt, zr, zs, zt };
var __wakaru_X_initialized = false;
export function X() {
if (__wakaru_X_initialized) return;
__wakaru_X_initialized = true;
"use strict";
if (w(), Vt(), Be = "en", _t = !1, yt = !1, tt = !1, js = !1, Vr = !1, zt = !1, Ws = !1, Us = !1, qs = !1, Bs = !1, vt = void 0, wt = Be, zr = Be, Vs = void 0, ye = void 0, ve = globalThis, K = void 0, typeof ve.vscode < "u" && typeof ve.vscode.process < "u" ? K = ve.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (K = process), Gr = typeof K?.versions?.electron == "string", zs = Gr && K?.type === "renderer", typeof K == "object") {
    _t = K.platform === "win32", yt = K.platform === "darwin", tt = K.platform === "linux", js = tt && !!K.env.SNAP && !!K.env.SNAP_REVISION, Ws = Gr, qs = !!K.env.CI || !!K.env.BUILD_ARTIFACTSTAGINGDIRECTORY, vt = Be, wt = Be;
    const e = K.env.VSCODE_NLS_CONFIG;
    if (e) try {
        const t = JSON.parse(e);
        vt = t.userLocale, zr = t.osLocale, wt = t.resolvedLanguage || Be, Vs = t.languagePack?.translationsConfigFile;
    } catch  {}
    Vr = !0;
} else typeof navigator == "object" && !zs ? (ye = navigator.userAgent, _t = ye.indexOf("Windows") >= 0, yt = ye.indexOf("Macintosh") >= 0, Us = (ye.indexOf("Macintosh") >= 0 || ye.indexOf("iPad") >= 0 || ye.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, tt = ye.indexOf("Linux") >= 0, Bs = ye?.indexOf("Mobi") >= 0, zt = !0, wt = Ns() || Be, vt = navigator.language.toLowerCase(), zr = vt) : console.error("Unable to resolve platform.");
Gt = 0, yt ? Gt = 1 : _t ? Gt = 3 : tt && (Gt = 2), V = _t, xe = yt, we = tt, Gs = Vr, Hs = zt, Ks = zt && typeof ve.importScripts == "function", Js = Ks ? ve.origin : void 0, de = ye, Ae = wt, ((e)=>{
    function t() {
        return Ae;
    }
    e.value = t;
    function r() {
        return Ae.length === 2 ? Ae === "en" : Ae.length >= 3 ? Ae[0] === "e" && Ae[1] === "n" && Ae[2] === "-" : !1;
    }
    e.isDefaultVariant = r;
    function s() {
        return Ae === "en";
    }
    e.isDefault = s;
})(Qs || (Qs = {})), Ys = typeof ve.postMessage == "function" && !ve.importScripts, Zs = (()=>{
    if (Ys) {
        const e = [];
        ve.addEventListener("message", (r)=>{
            if (r.data && r.data.vscodeScheduleAsyncWork) for(let s = 0, i = e.length; s < i; s++){
                const n = e[s];
                if (n.id === r.data.vscodeScheduleAsyncWork) {
                    e.splice(s, 1), n.callback();
                    return;
                }
            }
        });
        let t = 0;
        return (r)=>{
            const s = ++t;
            e.push({
                id: s,
                callback: r
            }), ve.postMessage({
                vscodeScheduleAsyncWork: s
            }, "*");
        };
    }
    return (e)=>setTimeout(e);
})(), Xs = !!(de && de.indexOf("Chrome") >= 0), ia = !!(de && de.indexOf("Firefox") >= 0), na = !!(!Xs && de && de.indexOf("Safari") >= 0), oa = !!(de && de.indexOf("Edg/") >= 0), aa = !!(de && de.indexOf("Android") >= 0), la = K?.arch, ca = K?.platform, ua = K?.versions?.node;

}
