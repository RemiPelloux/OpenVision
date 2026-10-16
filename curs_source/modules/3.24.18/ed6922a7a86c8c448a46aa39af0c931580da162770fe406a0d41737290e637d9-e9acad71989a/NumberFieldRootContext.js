import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as glu from "./react-runtime/react/esm-index-production.js";
var EFi;
export { EFi };
var __wakaru_xFi_initialized = false;
export function xFi() {
if (__wakaru_xFi_initialized) return;
__wakaru_xFi_initialized = true;
x(), Eb(), EFi = glu.createContext(void 0), process.env.NODE_ENV !== "production" && (EFi.displayName = "NumberFieldRootContext");

}
