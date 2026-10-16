import { HBt } from "./composite.js";
import { LE } from "./empty.js";
import { lj } from "./event_3.js";
import { cN } from "./shadowDom.js";
import { x } from "./tslib.es6.js";
import { af } from "./useIsoLayoutEffect.js";
import { Cy } from "./useStableCallback.js";
import { A3 } from "./useTimeout.js";
var __wakaru_bhs_initialized = false;
export function bhs() {
if (__wakaru_bhs_initialized) return;
__wakaru_bhs_initialized = true;
x(), af(), Cy(), A3(), LE(), HBt(), lj(), cN();

}
