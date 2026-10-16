import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as PBl from "./react-runtime/react/esm-index-production.js";
var ODi;
export { ODi };
var __wakaru_LBl_initialized = false;
export function LBl() {
if (__wakaru_LBl_initialized) return;
__wakaru_LBl_initialized = true;
x(), Eb(), ODi = PBl.createContext(void 0), process.env.NODE_ENV !== "production" && (ODi.displayName = "ProgressRootContext");

}
