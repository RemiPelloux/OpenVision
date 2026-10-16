import { QRe } from "./default.js";
import { Kkn } from "./find.js";
import { D5t } from "./index_42.js";
import { cEi } from "./index_43.js";
import { lEi } from "./index_45.js";
import { uEi } from "./index_48.js";
import { gfs } from "./index_50.js";
import { A3g, D3g, M3g, R3g, pfs, x3g } from "./qIc.js";
import { x } from "./tslib.es6.js";
var rhl, shl, vfs;
export { rhl, shl, vfs };
var __wakaru_L3g_initialized = false;
export function L3g() {
if (__wakaru_L3g_initialized) return;
__wakaru_L3g_initialized = true;
x(), cEi(), QRe(), D5t(), lEi(), uEi(), gfs(), Kkn(), rhl = {}, shl = {}.hasOwnProperty, vfs = pfs("type", {
    handlers: {
        root: x3g,
        element: M3g,
        text: R3g,
        comment: D3g,
        doctype: A3g
    }
});

}
