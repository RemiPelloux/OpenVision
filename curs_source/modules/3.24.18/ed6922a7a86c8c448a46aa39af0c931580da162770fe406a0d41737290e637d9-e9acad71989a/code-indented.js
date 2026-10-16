import { QT } from "./index_63.js";
import { m6 } from "./index_85.js";
import { iUg, rUg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var NEi, Sml;
export { NEi, Sml };
var __wakaru_sUg_initialized = false;
export function sUg() {
if (__wakaru_sUg_initialized) return;
__wakaru_sUg_initialized = true;
x(), m6(), QT(), NEi = {
    name: "codeIndented",
    tokenize: iUg
}, Sml = {
    partial: !0,
    tokenize: rUg
};

}
