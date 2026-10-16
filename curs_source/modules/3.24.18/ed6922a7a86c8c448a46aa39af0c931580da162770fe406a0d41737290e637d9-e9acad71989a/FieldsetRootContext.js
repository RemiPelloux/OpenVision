import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as R3l from "./react-runtime/react/esm-index-production.js";
var kDi;
export { kDi };
var __wakaru_F1s_initialized = false;
export function F1s() {
if (__wakaru_F1s_initialized) return;
__wakaru_F1s_initialized = true;
x(), Eb(), kDi = R3l.createContext(void 0), process.env.NODE_ENV !== "production" && (kDi.displayName = "FieldsetRootContext");

}
