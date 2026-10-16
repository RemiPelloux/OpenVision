import { csa, mJy } from "./index6.js";
import { E } from "./tslib.es6.js";
var Abh;
export { Abh };
var __wakaru_gJy_initialized = false;
export function gJy() {
if (__wakaru_gJy_initialized) return;
__wakaru_gJy_initialized = true;
E(), mJy(), Abh = csa.default || csa;

}
