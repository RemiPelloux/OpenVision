import { DYo, Vxr, q5e } from "./LYd.js";
import { Uai } from "./stringifyNumber.js";
import { E } from "./tslib.es6.js";
var y_n, KJd, YJd, XJd, ZJd;
export { KJd, XJd, YJd, ZJd, y_n };
var __wakaru_h4y_initialized = false;
export function h4y() {
if (__wakaru_h4y_initialized) return;
__wakaru_h4y_initialized = true;
E(), Uai(), y_n = (t)=>typeof t == "bigint" || Number.isInteger(t), KJd = {
    identify: y_n,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "BIN",
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (t, e, n)=>Vxr(t, 2, 2, n),
    stringify: (t)=>DYo(t, 2, "0b")
}, YJd = {
    identify: y_n,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^[-+]?0[0-7_]+$/,
    resolve: (t, e, n)=>Vxr(t, 1, 8, n),
    stringify: (t)=>DYo(t, 8, "0")
}, XJd = {
    identify: y_n,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (t, e, n)=>Vxr(t, 0, 10, n),
    stringify: q5e
}, ZJd = {
    identify: y_n,
    default: !0,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (t, e, n)=>Vxr(t, 2, 16, n),
    stringify: (t)=>DYo(t, 16, "0x")
};

}
