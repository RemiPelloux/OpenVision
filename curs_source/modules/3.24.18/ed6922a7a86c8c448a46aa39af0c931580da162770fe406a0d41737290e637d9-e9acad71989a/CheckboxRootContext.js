import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as dBl from "./react-runtime/react/esm-index-production.js";
var MDi;
export { MDi };
var __wakaru_hBl_initialized = false;
export function hBl() {
if (__wakaru_hBl_initialized) return;
__wakaru_hBl_initialized = true;
x(), Eb(), MDi = dBl.createContext(void 0), process.env.NODE_ENV !== "production" && (MDi.displayName = "CheckboxRootContext");

}
