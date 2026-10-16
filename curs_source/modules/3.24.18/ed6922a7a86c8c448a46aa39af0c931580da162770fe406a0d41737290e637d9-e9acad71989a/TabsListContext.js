import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as WYl from "./react-runtime/react/esm-index-production.js";
var XNi;
export { XNi };
var __wakaru_pMs_initialized = false;
export function pMs() {
if (__wakaru_pMs_initialized) return;
__wakaru_pMs_initialized = true;
x(), Eb(), XNi = WYl.createContext(void 0), process.env.NODE_ENV !== "production" && (XNi.displayName = "TabsListContext");

}
