import { Lsl } from "./CompositeListContext.js";
import { x } from "./tslib.es6.js";
import { af } from "./useIsoLayoutEffect.js";
import { xW } from "./useRefWithInit.js";
import { Cy } from "./useStableCallback.js";
var __wakaru_VSn_initialized = false;
export function VSn() {
if (__wakaru_VSn_initialized) return;
__wakaru_VSn_initialized = true;
x(), xW(), Cy(), af(), Lsl();

}
