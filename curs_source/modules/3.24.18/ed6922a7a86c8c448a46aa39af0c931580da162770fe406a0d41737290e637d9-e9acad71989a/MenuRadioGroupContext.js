import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as AFl from "./react-runtime/react/esm-index-production.js";
var cDi;
export { cDi };
var __wakaru_RFl_initialized = false;
export function RFl() {
if (__wakaru_RFl_initialized) return;
__wakaru_RFl_initialized = true;
x(), Eb(), cDi = AFl.createContext(void 0), process.env.NODE_ENV !== "production" && (cDi.displayName = "MenuRadioGroupContext");

}
