import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as wul from "./react-runtime/react/esm-index-production.js";
var LTi;
export { LTi };
var __wakaru_Lkn_initialized = false;
export function Lkn() {
if (__wakaru_Lkn_initialized) return;
__wakaru_Lkn_initialized = true;
x(), Eb(), LTi = wul.createContext(void 0), process.env.NODE_ENV !== "production" && (LTi.displayName = "TooltipRootContext");

}
