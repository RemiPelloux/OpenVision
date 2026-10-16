import { Ifs } from "./default_2.js";
import { U5g } from "./escape.js";
import { fa, l9e } from "./html_2.js";
import { x } from "./tslib.es6.js";
var $5g;
export { $5g };
var __wakaru_H5g_initialized = false;
export function H5g() {
if (__wakaru_H5g_initialized) return;
__wakaru_H5g_initialized = true;
x(), l9e(), U5g(), Ifs(), $5g = new Set([
    fa.AREA,
    fa.BASE,
    fa.BASEFONT,
    fa.BGSOUND,
    fa.BR,
    fa.COL,
    fa.EMBED,
    fa.FRAME,
    fa.HR,
    fa.IMG,
    fa.INPUT,
    fa.KEYGEN,
    fa.LINK,
    fa.META,
    fa.PARAM,
    fa.SOURCE,
    fa.TRACK,
    fa.WBR
]);

}
