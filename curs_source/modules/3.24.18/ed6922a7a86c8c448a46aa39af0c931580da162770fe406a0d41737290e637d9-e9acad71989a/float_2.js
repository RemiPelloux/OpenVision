import { bk, n$ } from "./Scalar_2.js";
import { tCe } from "./qIc.js";
import { wyn } from "./stringifyNumber.js";
import { x } from "./tslib.es6.js";
var _Zc, bZc, yZc;
export { _Zc, bZc, yZc };
var __wakaru_jEg_initialized = false;
export function jEg() {
if (__wakaru_jEg_initialized) return;
__wakaru_jEg_initialized = true;
x(), n$(), wyn(), _Zc = {
    identify: (e)=>typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (e)=>e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: tCe
}, bZc = {
    identify: (e)=>typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (e)=>parseFloat(e.replace(/_/g, "")),
    stringify (e) {
        const t = Number(e.value);
        return isFinite(t) ? t.toExponential() : tCe(e);
    }
}, yZc = {
    identify: (e)=>typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve (e) {
        const t = new bk(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
        if (n !== -1) {
            const i = e.substring(n + 1).replace(/_/g, "");
            i[i.length - 1] === "0" && (t.minFractionDigits = i.length);
        }
        return t;
    },
    stringify: tCe
};

}
