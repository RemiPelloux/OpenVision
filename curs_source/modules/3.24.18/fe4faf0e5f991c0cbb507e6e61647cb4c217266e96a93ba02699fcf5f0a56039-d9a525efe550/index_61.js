import { KNe, cRt } from "./index.dom.js";
import { Ilr, lRt } from "./index_60.js";
import { i } from "./plugin-brand-icon.js";
function Nlr(r) {
    return r.replace(Rlr, Mlr);
}
function Mlr(r, e, a) {
    if (e) return e;
    if (a.charCodeAt(0) === 35) {
        const l = a.charCodeAt(1), u = l === 120 || l === 88;
        return lRt(a.slice(u ? 2 : 1), u ? 16 : 10);
    }
    return KNe(a) || r;
}
var Rlr;
export { Mlr, Nlr, Rlr };
var __wakaru_S3i_initialized = false;
export function S3i() {
if (__wakaru_S3i_initialized) return;
__wakaru_S3i_initialized = true;
cRt(), Ilr(), Rlr = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi, i(Nlr, "decodeString"), i(Mlr, "decode");

}
