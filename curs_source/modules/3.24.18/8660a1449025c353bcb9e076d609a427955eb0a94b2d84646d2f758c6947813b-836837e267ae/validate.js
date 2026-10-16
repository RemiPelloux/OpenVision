import { sit } from "./clamp.js";
import { ySn } from "./formatNumber.js";
import { f$r } from "./parse_10.js";
import { E } from "./tslib.es6.js";
var PCp, MCp;
export { MCp, PCp };
var __wakaru_DCp_initialized = false;
export function DCp() {
if (__wakaru_DCp_initialized) return;
__wakaru_DCp_initialized = true;
E(), sit(), ySn(), f$r(), PCp = 1e-10, MCp = 1e-10;

}
