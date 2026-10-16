import { E } from "./tslib.es6.js";
import { jv } from "./useIsoLayoutEffect.js";
import { Jy } from "./useStableCallback.js";
var __wakaru_rit_initialized = false;
export function rit() {
if (__wakaru_rit_initialized) return;
__wakaru_rit_initialized = true;
E(), jv(), Jy();

}
