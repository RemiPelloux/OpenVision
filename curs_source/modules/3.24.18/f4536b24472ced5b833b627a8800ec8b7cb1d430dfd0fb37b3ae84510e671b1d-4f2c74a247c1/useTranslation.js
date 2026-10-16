import { a } from "./business-error.js";
import { a2, io, vi } from "./context.js";
import { vc } from "./defaults.js";
import { ta } from "./i18nInstance.js";
import { tp } from "./use-sync-external-store-shim.js";
import { Dn, Gr, Ut, Y1, Zd, oa, yc } from "./utils_2.js";
import { useCallback as Db } from "./react-runtime/react/esm-index-production.js";
import { useRef as Hs } from "./react-runtime/react/esm-index-production.js";
import { useMemo as Ru } from "./react-runtime/react/esm-index-production.js";
import { useEffect as fD } from "./react-runtime/react/esm-index-production.js";
import { useState as hD } from "./react-runtime/react/esm-index-production.js";
import { useContext as pD } from "./react-runtime/react/esm-index-production.js";
import { useSyncExternalStore as zs } from "./react-runtime/react/esm-index-production.js";
var g2, v2, b2, Be;
export { Be, b2, g2, v2 };
var __wakaru_rp_initialized = false;
export function rp() {
if (__wakaru_rp_initialized) return;
__wakaru_rp_initialized = true;
tp(), io(), oa(), g2 = a((e, t)=>{
    if (Ut(t)) return t;
    if (Gr(t) && Ut(t.defaultValue)) return t.defaultValue;
    if (typeof e == "function") return "";
    if (Array.isArray(e)) {
        const r = e[e.length - 1];
        return typeof r == "function" ? "" : r;
    }
    return e;
}, "notReadyT"), v2 = {
    t: g2,
    ready: !1
}, b2 = a(()=>()=>{}, "dummySubscribe"), Be = a((e, t = {})=>{
    const { i18n: r } = t, { i18n: n, defaultNS: o } = pD(vi) || {}, i = r || n || ta();
    i && !i.reportNamespaces && (i.reportNamespaces = new a2), i || Dn(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next or by passing it via props or context. In monorepo setups, make sure there is only one instance of react-i18next.");
    const s = Ru(()=>({
            ...vc(),
            ...i?.options?.react,
            ...t
        }), [
        i,
        t
    ]), { useSuspense: c, keyPrefix: l } = s, m = e || o || i?.options?.defaultNS, u = Ut(m) ? [
        m
    ] : m || [
        "translation"
    ], d = Ru(()=>u, u);
    i?.reportNamespaces?.addUsedNamespaces?.(d);
    const p = Hs(0), h = Db((C)=>{
        if (!i) return b2;
        const { bindI18n: P, bindI18nStore: O } = s, M = a(()=>{
            p.current += 1, C();
        }, "wrappedCallback");
        return P && i.on(P, M), O && i.store.on(O, M), ()=>{
            P && P.split(" ").forEach((F)=>i.off(F, M)), O && O.split(" ").forEach((F)=>i.store.off(F, M));
        };
    }, [
        i,
        s
    ]), f = Hs(), v = Db(()=>{
        if (!i) return v2;
        const C = !!(i.isInitialized || i.initializedStoreOnce) && d.every((re)=>Y1(re, i, s)), P = t.lng || i.language, O = p.current, M = f.current;
        if (M && M.ready === C && M.lng === P && M.keyPrefix === l && M.revision === O) return M;
        const K = {
            t: i.getFixedT(P, s.nsMode === "fallback" ? d : d[0], l, {
                scopeNs: d
            }),
            ready: C,
            lng: P,
            keyPrefix: l,
            revision: O
        };
        return f.current = K, K;
    }, [
        i,
        d,
        l,
        s,
        t.lng
    ]), [x, g] = hD(0), { t: y, ready: w } = zs(h, v, v);
    fD(()=>{
        if (i && !w && !c) {
            const C = a(()=>g((P)=>P + 1), "onLoaded");
            t.lng ? Zd(i, t.lng, d, C) : yc(i, d, C);
        }
    }, [
        i,
        t.lng,
        d,
        w,
        c,
        x
    ]);
    const b = i || {}, T = Hs(null), R = Hs(), E = a((C)=>`${C.language}|${C.resolvedLanguage}|${C.languages?.join(",")}`, "languageKey"), S = a((C)=>{
        const P = Object.getOwnPropertyDescriptors(C);
        P.__original && delete P.__original;
        const O = Object.create(Object.getPrototypeOf(C), P);
        if (!Object.prototype.hasOwnProperty.call(O, "__original")) try {
            Object.defineProperty(O, "__original", {
                value: C,
                writable: !1,
                enumerable: !1,
                configurable: !1
            });
        } catch  {}
        return O;
    }, "createI18nWrapper"), A = Ru(()=>{
        const C = b, P = C && E(C);
        let O = C;
        C && (T.current && T.current.__original === C ? R.current !== P ? (O = S(C), T.current = O, R.current = P) : O = T.current : (O = S(C), T.current = O, R.current = P));
        const M = !w && !c ? (...K)=>(Dn(i, "USE_T_BEFORE_READY", "useTranslation: t was called before ready. When using useSuspense: false, make sure to check the ready flag before using t."), y(...K)) : y, F = [
            M,
            O,
            w
        ];
        return F.t = M, F.i18n = O, F.ready = w, F;
    }, [
        y,
        b,
        w,
        b.resolvedLanguage,
        b.language,
        b.languages
    ]);
    if (i && c && !w) {
        let C = !1;
        try {
            C = !1;
        } catch  {}
        throw C && Dn(i, "SUSPENDED_WHILE_LOADING", "useTranslation: suspended while translations are loading (useSuspense is true by default). Add a <Suspense> boundary above this component, or set react.useSuspense: false in the i18next init options. https://react.i18next.com/latest/usetranslation-hook"), new Promise((P)=>{
            const O = a(()=>P(), "onLoaded");
            t.lng ? Zd(i, t.lng, d, O) : yc(i, d, O);
        });
    }
    return A;
}, "useTranslation");

}
