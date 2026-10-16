import { a } from "./business-error.js";
import { hi, ta } from "./i18nInstance.js";
import { S6 } from "./index_6.js";
import { f2 } from "./renderTranslation.js";
import { Dn, Ut, na, oa } from "./utils_2.js";
import Go from "./react-runtime/react/esm-index-production.js";
function ep({ i18nKey: e, defaultTranslation: t, content: r, ns: n, values: o = {}, i18n: i, t: s }) {
    const c = i || ta();
    if (!c) return Dn(c, "NO_I18NEXT_INSTANCE", "IcuTrans: You need to pass in an i18next instance using i18nextReactModule", {
        i18nKey: e
    }), Go.createElement(Go.Fragment, {}, t);
    const l = s || c.t?.bind(c) || ((p)=>p);
    let m = n || l.ns || c.options?.defaultNS;
    m = Ut(m) ? [
        m
    ] : m || [
        "translation"
    ];
    let u = o;
    c.options?.interpolation?.defaultVariables && (u = o && Object.keys(o).length > 0 ? {
        ...o,
        ...c.options.interpolation.defaultVariables
    } : {
        ...c.options.interpolation.defaultVariables
    });
    const d = l(e || t, {
        defaultValue: t,
        ...u,
        ns: m
    });
    try {
        const p = f2(d, r);
        return Go.createElement(Go.Fragment, {}, ...p);
    } catch (p) {
        return na(c, "ICU_TRANS_RENDER_ERROR", `IcuTrans component error for key "${e}": ${p.message}`, {
            i18nKey: e,
            error: p
        }), Go.createElement(Go.Fragment, {}, d);
    }
}
export { ep };
var __wakaru_h2_initialized = false;
export function h2() {
if (__wakaru_h2_initialized) return;
__wakaru_h2_initialized = true;
oa(), hi(), S6(), a(ep, "IcuTransWithoutContext"), ep.displayName = "IcuTransWithoutContext";

}
