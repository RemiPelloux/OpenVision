import { a } from "./business-error.js";
var na, Yd, Dn, Xd, yc, Zd, Y1, Ut, Gr;
export { Dn, Gr, Ut, Xd, Y1, Yd, Zd, na, yc };
var __wakaru_oa_initialized = false;
export function oa() {
if (__wakaru_oa_initialized) return;
__wakaru_oa_initialized = true;
na = a((e, t, r, n)=>{
    const o = [
        r,
        {
            code: t,
            ...n || {}
        }
    ];
    if (e?.services?.logger?.forward) return e.services.logger.forward(o, "warn", "react-i18next::", !0);
    Ut(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...o) : console?.warn && console.warn(...o);
}, "warn"), Yd = {}, Dn = a((e, t, r, n)=>{
    Ut(r) && Yd[r] || (Ut(r) && (Yd[r] = new Date), na(e, t, r, n));
}, "warnOnce"), Xd = a((e, t)=>()=>{
        if (e.isInitialized) t();
        else {
            const r = a(()=>{
                setTimeout(()=>{
                    e.off("initialized", r);
                }, 0), t();
            }, "initialized");
            e.on("initialized", r);
        }
    }, "loadedClb"), yc = a((e, t, r)=>{
    e.loadNamespaces(t, Xd(e, r));
}, "loadNamespaces"), Zd = a((e, t, r, n)=>{
    if (Ut(r) && (r = [
        r
    ]), e.options.preload && e.options.preload.indexOf(t) > -1) return yc(e, r, n);
    r.forEach((o)=>{
        e.options.ns.indexOf(o) < 0 && e.options.ns.push(o);
    }), e.loadLanguages(t, Xd(e, n));
}, "loadLanguages"), Y1 = a((e, t, r = {})=>!t.languages || !t.languages.length ? (Dn(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
        languages: t.languages
    }), !0) : t.hasLoadedNamespace(e, {
        lng: r.lng,
        precheck: a((n, o)=>{
            if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !o(n.isLanguageChangingTo, e)) return !1;
        }, "precheck")
    }), "hasLoadedNamespace"), Ut = a((e)=>typeof e == "string", "isString"), Gr = a((e)=>typeof e == "object" && e !== null, "isObject");

}
