import { q5e } from "./LYd.js";
import { DY, tC } from "./Scalar_2.js";
import { Uai } from "./stringifyNumber.js";
import { E } from "./tslib.es6.js";
var CYo, TYo, EYo;
export { CYo, EYo, TYo };
var __wakaru_MJd_initialized = false;
export function MJd() {
if (__wakaru_MJd_initialized) return;
__wakaru_MJd_initialized = true;
E(), DY(), Uai(), CYo = {
    identify: (t)=>typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (t)=>t.slice(-3).toLowerCase() === "nan" ? NaN : t[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: q5e
}, TYo = {
    identify: (t)=>typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (t)=>parseFloat(t),
    stringify (t) {
        const e = Number(t.value);
        return isFinite(e) ? e.toExponential() : q5e(t);
    }
}, EYo = {
    identify: (t)=>typeof t == "number",
    default: !0,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve (t) {
        const e = new tC(parseFloat(t)), n = t.indexOf(".");
        return n !== -1 && t[t.length - 1] === "0" && (e.minFractionDigits = t.length - n - 1), e;
    },
    stringify: q5e
};

}
