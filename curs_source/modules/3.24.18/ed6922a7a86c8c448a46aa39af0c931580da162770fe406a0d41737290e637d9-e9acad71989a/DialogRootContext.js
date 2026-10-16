import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as LOs from "./react-runtime/react/esm-index-production.js";
var yFi, SFi;
export { SFi, yFi };
var __wakaru_iMe_initialized = false;
export function iMe() {
if (__wakaru_iMe_initialized) return;
__wakaru_iMe_initialized = true;
x(), Eb(), yFi = LOs.createContext(!1), process.env.NODE_ENV !== "production" && (yFi.displayName = "IsDrawerContext"), SFi = LOs.createContext(void 0), process.env.NODE_ENV !== "production" && (SFi.displayName = "DialogRootContext");

}
