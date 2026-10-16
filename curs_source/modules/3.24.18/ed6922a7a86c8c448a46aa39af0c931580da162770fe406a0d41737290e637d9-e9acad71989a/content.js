import { QT } from "./index_63.js";
import { m6 } from "./index_85.js";
import { Tml } from "./index_86.js";
import { hUg, mUg, pUg } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Eml, xml;
export { Eml, xml };
var __wakaru_gUg_initialized = false;
export function gUg() {
if (__wakaru_gUg_initialized) return;
__wakaru_gUg_initialized = true;
x(), m6(), QT(), Tml(), Eml = {
    resolve: hUg,
    tokenize: pUg
}, xml = {
    partial: !0,
    tokenize: mUg
};

}
