import { x } from "./tslib.es6.js";
import { af } from "./useIsoLayoutEffect.js";
import { Cy } from "./useStableCallback.js";
var __wakaru_XBt_initialized = false;
export function XBt() {
if (__wakaru_XBt_initialized) return;
__wakaru_XBt_initialized = true;
x(), af(), Cy();

}
