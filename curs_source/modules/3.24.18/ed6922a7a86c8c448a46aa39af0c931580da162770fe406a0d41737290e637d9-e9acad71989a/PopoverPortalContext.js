import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as gVl from "./react-runtime/react/esm-index-production.js";
var SLi;
export { SLi };
var __wakaru_fVl_initialized = false;
export function fVl() {
if (__wakaru_fVl_initialized) return;
__wakaru_fVl_initialized = true;
x(), Eb(), SLi = gVl.createContext(void 0), process.env.NODE_ENV !== "production" && (SLi.displayName = "PopoverPortalContext");

}
