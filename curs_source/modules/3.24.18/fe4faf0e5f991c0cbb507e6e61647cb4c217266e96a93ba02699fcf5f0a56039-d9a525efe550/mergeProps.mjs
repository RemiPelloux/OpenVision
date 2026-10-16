import { IQn, oIe } from "./mergeObjects.mjs";
import { i } from "./plugin-brand-icon.js";
function If(r, e, a, s, l) {
    if (!a && !s && !l && !r) return Eme(e);
    let u = Eme(r);
    return e && (u = BY(u, e)), a && (u = BY(u, a)), s && (u = BY(u, s)), l && (u = BY(u, l)), u;
}
function jQn(r) {
    if (r.length === 0) return cIe;
    if (r.length === 1) return Eme(r[0]);
    let e = Eme(r[0]);
    for(let a = 1; a < r.length; a += 1)e = BY(e, r[a]);
    return e;
}
function Eme(r) {
    return sIe(r) ? {
        ...DTt(r, cIe)
    } : LQn(r);
}
function BY(r, e) {
    return sIe(e) ? DTt(e, r) : DQn(r, e);
}
function LQn(r) {
    const e = {
        ...r
    };
    for(const a in e){
        const s = e[a];
        LTt(a, s) && (e[a] = FTt(s));
    }
    return e;
}
function DQn(r, e) {
    if (!e) return r;
    for(const a in e){
        const s = e[a];
        switch(a){
            case "style":
                {
                    r[a] = oIe(r.style, s);
                    break;
                }
            case "className":
                {
                    r[a] = OTt(r.className, s);
                    break;
                }
            default:
                LTt(a, s) ? r[a] = FQn(r[a], s) : r[a] = s;
        }
    }
    return r;
}
function LTt(r, e) {
    const a = r.charCodeAt(0), s = r.charCodeAt(1), l = r.charCodeAt(2);
    return a === 111 && s === 110 && l >= 65 && l <= 90 && (typeof e == "function" || typeof e > "u");
}
function sIe(r) {
    return typeof r == "function";
}
function DTt(r, e) {
    return sIe(r) ? r(e) : r ?? cIe;
}
function FQn(r, e) {
    return e ? r ? (...a)=>{
        const s = a[0];
        if (zTt(s)) {
            const u = s;
            Ame(u);
            const p = e(...a);
            return u.baseUIHandlerPrevented || r?.(...a), p;
        }
        const l = e(...a);
        return r?.(...a), l;
    } : FTt(e) : r;
}
function FTt(r) {
    return r && ((...e)=>{
        const a = e[0];
        return zTt(a) && Ame(a), r(...e);
    });
}
function Ame(r) {
    return r.preventBaseUIHandler = ()=>{
        r.baseUIHandlerPrevented = !0;
    }, r;
}
function OTt(r, e) {
    return e ? r ? e + " " + r : e : r;
}
function zTt(r) {
    return r != null && typeof r == "object" && "nativeEvent" in r;
}
var cIe;
export { Ame, BY, DQn, DTt, Eme, FQn, FTt, If, LQn, LTt, OTt, cIe, jQn, sIe, zTt };
var __wakaru_pki_initialized = false;
export function pki() {
if (__wakaru_pki_initialized) return;
__wakaru_pki_initialized = true;
IQn(), cIe = {}, i(If, "mergeProps"), i(jQn, "mergePropsN"), i(Eme, "createInitialMergedProps"), i(BY, "mergeInto"), i(LQn, "copyInitialProps"), i(DQn, "mutablyMergeInto"), i(LTt, "isEventHandler"), i(sIe, "isPropsGetter"), i(DTt, "resolvePropsGetter"), i(FQn, "mergeEventHandlers"), i(FTt, "wrapEventHandler"), i(Ame, "makeEventPreventable"), i(OTt, "mergeClassNames"), i(zTt, "isSyntheticEvent");

}
