import { q5e } from "./LYd.js";
import { DY, tC } from "./Scalar_2.js";
import { Uai } from "./stringifyNumber.js";
import { E } from "./tslib.es6.js";
var qJd, zJd, VJd;
export { VJd, qJd, zJd };
var __wakaru_d4y_initialized = false;
export function d4y() {
if (__wakaru_d4y_initialized) return;
__wakaru_d4y_initialized = true;
E(), DY(), Uai(), qJd = {
    identify: (t)=>typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (t)=>t.slice(-3).toLowerCase() === "nan" ? NaN : t[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: q5e
}, zJd = {
    identify: (t)=>typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (t)=>parseFloat(t.replace(/_/g, "")),
    stringify (t) {
        const e = Number(t.value);
        return isFinite(e) ? e.toExponential() : q5e(t);
    }
}, VJd = {
    identify: (t)=>typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve (t) {
        const e = new tC(parseFloat(t.replace(/_/g, ""))), n = t.indexOf(".");
        if (n !== -1) {
            const i = t.substring(n + 1).replace(/_/g, "");
            i[i.length - 1] === "0" && (e.minFractionDigits = i.length);
        }
        return e;
    },
    stringify: q5e
};

}
