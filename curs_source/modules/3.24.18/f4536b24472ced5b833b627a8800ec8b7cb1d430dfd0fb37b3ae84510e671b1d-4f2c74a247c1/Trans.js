import { X1, o2 } from "./TransWithoutContext.js";
import { a } from "./business-error.js";
import { io, vi } from "./context.js";
import { ta } from "./i18nInstance.js";
import { useContext as uD } from "./react-runtime/react/esm-index-production.js";
function Qd({ children: e, count: t, parent: r, i18nKey: n, context: o, tOptions: i = {}, values: s, defaults: c, components: l, ns: m, i18n: u, t: d, shouldUnescape: p, ...h }) {
    const { i18n: f, defaultNS: v } = uD(vi) || {}, x = u || f || ta(), g = d || x?.t.bind(x);
    return X1({
        children: e,
        count: t,
        parent: r,
        i18nKey: n,
        context: o,
        tOptions: i,
        values: s,
        defaults: c,
        components: l,
        ns: m || g?.ns || v || x?.options?.defaultNS,
        i18n: x,
        t: d,
        shouldUnescape: p,
        ...h
    });
}
export { Qd };
var __wakaru_i2_initialized = false;
export function i2() {
if (__wakaru_i2_initialized) return;
__wakaru_i2_initialized = true;
o2(), io(), a(Qd, "Trans");

}
