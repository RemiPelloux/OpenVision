import { DJd, q5e } from "./LYd.js";
import { Uai } from "./stringifyNumber.js";
import { E } from "./tslib.es6.js";
var jai, Wxr, IYo, xYo, AYo;
export { AYo, IYo, Wxr, jai, xYo };
var __wakaru_NJd_initialized = false;
export function NJd() {
if (__wakaru_NJd_initialized) return;
__wakaru_NJd_initialized = true;
E(), Uai(), jai = (t)=>typeof t == "bigint" || Number.isInteger(t), Wxr = (t, e, n, { intAsBigInt: i })=>i ? BigInt(t) : parseInt(t.substring(e), n), IYo = {
    identify: (t)=>jai(t) && t >= 0,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^0o[0-7]+$/,
    resolve: (t, e, n)=>Wxr(t, 2, 8, n),
    stringify: (t)=>DJd(t, 8, "0o")
}, xYo = {
    identify: jai,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9]+$/,
    resolve: (t, e, n)=>Wxr(t, 0, 10, n),
    stringify: q5e
}, AYo = {
    identify: (t)=>jai(t) && t >= 0,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (t, e, n)=>Wxr(t, 2, 16, n),
    stringify: (t)=>DJd(t, 16, "0x")
};

}
