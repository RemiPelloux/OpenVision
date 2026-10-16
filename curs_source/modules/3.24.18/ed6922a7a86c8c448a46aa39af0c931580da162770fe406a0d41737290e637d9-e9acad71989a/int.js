import { oZc, tCe } from "./qIc.js";
import { wyn } from "./stringifyNumber.js";
import { x } from "./tslib.es6.js";
var Cyn, jwi, Ecs, xcs, Ics;
export { Cyn, Ecs, Ics, jwi, xcs };
var __wakaru_aZc_initialized = false;
export function aZc() {
if (__wakaru_aZc_initialized) return;
__wakaru_aZc_initialized = true;
x(), wyn(), Cyn = (e)=>typeof e == "bigint" || Number.isInteger(e), jwi = (e, t, n, { intAsBigInt: i })=>i ? BigInt(e) : parseInt(e.substring(t), n), Ecs = {
    identify: (e)=>Cyn(e) && e >= 0,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^0o[0-7]+$/,
    resolve: (e, t, n)=>jwi(e, 2, 8, n),
    stringify: (e)=>oZc(e, 8, "0o")
}, xcs = {
    identify: Cyn,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9]+$/,
    resolve: (e, t, n)=>jwi(e, 0, 10, n),
    stringify: tCe
}, Ics = {
    identify: (e)=>Cyn(e) && e >= 0,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (e, t, n)=>jwi(e, 2, 16, n),
    stringify: (e)=>oZc(e, 16, "0x")
};

}
