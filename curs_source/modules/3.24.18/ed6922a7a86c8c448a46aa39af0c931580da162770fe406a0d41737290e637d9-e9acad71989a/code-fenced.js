import { QT } from "./index_63.js";
import { m6 } from "./index_85.js";
import { eUg, tUg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _vs, bvs;
export { _vs, bvs };
var __wakaru_nUg_initialized = false;
export function nUg() {
if (__wakaru_nUg_initialized) return;
__wakaru_nUg_initialized = true;
x(), m6(), QT(), _vs = {
    partial: !0,
    tokenize: tUg
}, bvs = {
    concrete: !0,
    name: "codeFenced",
    tokenize: eUg
};

}
