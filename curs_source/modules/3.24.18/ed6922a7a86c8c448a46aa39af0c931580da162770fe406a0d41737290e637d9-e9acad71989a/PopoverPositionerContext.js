import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as _Vl from "./react-runtime/react/esm-index-production.js";
var kLi;
export { kLi };
var __wakaru_bVl_initialized = false;
export function bVl() {
if (__wakaru_bVl_initialized) return;
__wakaru_bVl_initialized = true;
x(), Eb(), kLi = _Vl.createContext(void 0), process.env.NODE_ENV !== "production" && (kLi.displayName = "PopoverPositionerContext");

}
