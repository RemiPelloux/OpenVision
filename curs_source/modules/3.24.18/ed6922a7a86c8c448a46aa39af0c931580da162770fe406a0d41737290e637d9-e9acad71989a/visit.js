import { NE } from "./identity.js";
import { ccs, iBt } from "./qIc.js";
import { x } from "./tslib.es6.js";
var NJ, lcs, eCe;
export { NJ, eCe, lcs };
var __wakaru_Iwi_initialized = false;
export function Iwi() {
if (__wakaru_Iwi_initialized) return;
__wakaru_Iwi_initialized = true;
x(), NE(), NJ = Symbol("break visit"), lcs = Symbol("skip children"), eCe = Symbol("remove node"), iBt.BREAK = NJ, iBt.SKIP = lcs, iBt.REMOVE = eCe, ccs.BREAK = NJ, ccs.SKIP = lcs, ccs.REMOVE = eCe;

}
