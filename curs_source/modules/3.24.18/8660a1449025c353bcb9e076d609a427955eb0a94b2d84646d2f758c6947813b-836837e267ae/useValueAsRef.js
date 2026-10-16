import { E } from "./tslib.es6.js";
import { jv } from "./useIsoLayoutEffect.js";
import { jQ } from "./useRefWithInit.js";
var __wakaru_Fwe_initialized = false;
export function Fwe() {
if (__wakaru_Fwe_initialized) return;
__wakaru_Fwe_initialized = true;
E(), jv(), jQ();

}
