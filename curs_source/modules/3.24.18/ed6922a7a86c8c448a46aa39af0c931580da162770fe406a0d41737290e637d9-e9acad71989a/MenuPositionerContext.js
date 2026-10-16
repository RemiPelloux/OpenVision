import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as pFl from "./react-runtime/react/esm-index-production.js";
var tDi;
export { tDi };
var __wakaru_Svt_initialized = false;
export function Svt() {
if (__wakaru_Svt_initialized) return;
__wakaru_Svt_initialized = true;
x(), Eb(), tDi = pFl.createContext(void 0), process.env.NODE_ENV !== "production" && (tDi.displayName = "MenuPositionerContext");

}
