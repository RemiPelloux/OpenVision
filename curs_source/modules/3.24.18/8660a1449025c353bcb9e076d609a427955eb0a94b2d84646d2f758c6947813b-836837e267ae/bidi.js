import { wPS } from "./bidi-data.js";
import { E } from "./tslib.es6.js";
var __wakaru_IPS_initialized = false;
export function IPS() {
if (__wakaru_IPS_initialized) return;
__wakaru_IPS_initialized = true;
E(), wPS();

}
