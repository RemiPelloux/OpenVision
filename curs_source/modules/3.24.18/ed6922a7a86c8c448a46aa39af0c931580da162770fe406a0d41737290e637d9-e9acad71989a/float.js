import { bk, n$ } from "./Scalar_2.js";
import { tCe } from "./qIc.js";
import { wyn } from "./stringifyNumber.js";
import { x } from "./tslib.es6.js";
var wcs, Ccs, Tcs;
export { Ccs, Tcs, wcs };
var __wakaru_sZc_initialized = false;
export function sZc() {
if (__wakaru_sZc_initialized) return;
__wakaru_sZc_initialized = true;
x(), n$(), wyn(), wcs = {
    identify: (e)=>typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (e)=>e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: tCe
}, Ccs = {
    identify: (e)=>typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (e)=>parseFloat(e),
    stringify (e) {
        const t = Number(e.value);
        return isFinite(t) ? t.toExponential() : tCe(e);
    }
}, Tcs = {
    identify: (e)=>typeof e == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve (e) {
        const t = new bk(parseFloat(e)), n = e.indexOf(".");
        return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
    },
    stringify: tCe
};

}
