import { aQy, lQy, oQy, sQy } from "./LYd.js";
import { VMr } from "./blank-line.js";
import { cR } from "./index_68.js";
import { avh } from "./index_96.js";
import { E } from "./tslib.es6.js";
var lvh, cvh, uvh;
export { cvh, lvh, uvh };
var __wakaru_cQy_initialized = false;
export function cQy() {
if (__wakaru_cQy_initialized) return;
__wakaru_cQy_initialized = true;
E(), cR(), avh(), VMr(), lvh = {
    concrete: !0,
    name: "htmlFlow",
    resolveTo: sQy,
    tokenize: oQy
}, cvh = {
    partial: !0,
    tokenize: lQy
}, uvh = {
    partial: !0,
    tokenize: aQy
};

}
