import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as i3l from "./react-runtime/react/esm-index-production.js";
var vDi;
export { vDi };
var __wakaru_r3l_initialized = false;
export function r3l() {
if (__wakaru_r3l_initialized) return;
__wakaru_r3l_initialized = true;
x(), Eb(), vDi = i3l.createContext(void 0), process.env.NODE_ENV !== "production" && (vDi.displayName = "SwitchRootContext");

}
