import { ep, h2 } from "./IcuTransWithoutContext.js";
import { a } from "./business-error.js";
import { io, vi } from "./context.js";
import { ta } from "./i18nInstance.js";
import { useContext as dD } from "./react-runtime/react/esm-index-production.js";
function x2({ i18nKey: e, defaultTranslation: t, content: r, ns: n, values: o = {}, i18n: i, t: s }) {
    const { i18n: c, defaultNS: l } = dD(vi) || {}, m = i || c || ta(), u = s || m?.t.bind(m);
    return ep({
        i18nKey: e,
        defaultTranslation: t,
        content: r,
        ns: n || u?.ns || l || m?.options?.defaultNS,
        values: o,
        i18n: m,
        t: s
    });
}
export { x2 };
var __wakaru_E6_initialized = false;
export function E6() {
if (__wakaru_E6_initialized) return;
__wakaru_E6_initialized = true;
h2(), io(), a(x2, "IcuTrans"), x2.displayName = "IcuTrans";

}
