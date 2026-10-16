import { Mcs, Ywi, tCe } from "./qIc.js";
import { wyn } from "./stringifyNumber.js";
import { x } from "./tslib.es6.js";
var uBt, SZc, kZc, wZc, CZc;
export { CZc, SZc, kZc, uBt, wZc };
var __wakaru_qEg_initialized = false;
export function qEg() {
if (__wakaru_qEg_initialized) return;
__wakaru_qEg_initialized = true;
x(), wyn(), uBt = (e)=>typeof e == "bigint" || Number.isInteger(e), SZc = {
    identify: uBt,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "BIN",
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (e, t, n)=>Ywi(e, 2, 2, n),
    stringify: (e)=>Mcs(e, 2, "0b")
}, kZc = {
    identify: uBt,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^[-+]?0[0-7_]+$/,
    resolve: (e, t, n)=>Ywi(e, 1, 8, n),
    stringify: (e)=>Mcs(e, 8, "0")
}, wZc = {
    identify: uBt,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (e, t, n)=>Ywi(e, 0, 10, n),
    stringify: tCe
}, CZc = {
    identify: uBt,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (e, t, n)=>Ywi(e, 2, 16, n),
    stringify: (e)=>Mcs(e, 16, "0x")
};

}
