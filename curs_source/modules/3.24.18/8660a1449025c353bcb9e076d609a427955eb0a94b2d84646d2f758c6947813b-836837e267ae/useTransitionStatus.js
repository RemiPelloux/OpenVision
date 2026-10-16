import { E } from "./tslib.es6.js";
import { Hnt } from "./useAnimationFrame.js";
import { jv } from "./useIsoLayoutEffect.js";
var __wakaru_LRe_initialized = false;
export function LRe() {
if (__wakaru_LRe_initialized) return;
__wakaru_LRe_initialized = true;
E(), jv(), Hnt();

}
