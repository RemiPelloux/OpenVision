import { x } from "./tslib.es6.js";
import { af } from "./useIsoLayoutEffect.js";
import { Cy } from "./useStableCallback.js";
import * as wLi from "./react-runtime/react/esm-index-production.js";
var CLi;
export { CLi };
var __wakaru_SVl_initialized = false;
export function SVl() {
if (__wakaru_SVl_initialized) return;
__wakaru_SVl_initialized = true;
x(), af(), Cy(), CLi = wLi.createContext(void 0), process.env.NODE_ENV !== "production" && (CLi.displayName = "ClosePartContext");

}
