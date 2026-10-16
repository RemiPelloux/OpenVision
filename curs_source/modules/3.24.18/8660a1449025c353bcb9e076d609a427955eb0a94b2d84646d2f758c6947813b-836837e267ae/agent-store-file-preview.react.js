import { Ga } from "./Iwo.js";
import { qn, xI } from "./async.js";
import { yo } from "./cancellation.js";
import { Sx } from "./files.js";
import { hv } from "./glass-file-service.js";
import { sRt } from "./glass-viewable-media.js";
import { Mt } from "./index_197.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
var Puv, Muv, zql, WIs, Duv, Vql, Nuv, Luv;
export { Duv, Luv, Muv, Nuv, Puv, Vql, WIs, zql };
var __wakaru_Fn0_initialized = false;
export function Fn0() {
if (__wakaru_Fn0_initialized) return;
__wakaru_Fn0_initialized = true;
"use strict";
E(), Mt(), qn(), Ga(), yo(), Lr(), hv(), sRt(), Puv = new Set([
    "markdown",
    "md",
    "mdx"
]), Muv = new Set([
    "cfg",
    "css",
    "csv",
    "ini",
    "js",
    "json",
    "jsonl",
    "log",
    "mjs",
    "py",
    "rs",
    "sh",
    "sql",
    "toml",
    "ts",
    "tsx",
    "tsv",
    "txt",
    "xml",
    "yaml",
    "yml"
]), zql = 4096, WIs = Sx.MB, Duv = 36, Vql = 8, Nuv = new xI(6), Luv = {
    img: ()=>null
};

}
