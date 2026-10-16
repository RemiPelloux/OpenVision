import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as eol from "./react-runtime/react/esm-index-production.js";
var Qhs;
export { Qhs };
var __wakaru_Jhs_initialized = false;
export function Jhs() {
if (__wakaru_Jhs_initialized) return;
__wakaru_Jhs_initialized = true;
x(), Eb(), Qhs = eol.createContext(void 0), process.env.NODE_ENV !== "production" && (Qhs.displayName = "ToolbarRootContext");

}
