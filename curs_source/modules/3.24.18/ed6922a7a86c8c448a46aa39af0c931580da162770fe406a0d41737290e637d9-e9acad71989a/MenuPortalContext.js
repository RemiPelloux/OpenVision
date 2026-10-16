import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as CFl from "./react-runtime/react/esm-index-production.js";
var sDi;
export { sDi };
var __wakaru_TFl_initialized = false;
export function TFl() {
if (__wakaru_TFl_initialized) return;
__wakaru_TFl_initialized = true;
x(), Eb(), sDi = CFl.createContext(void 0), process.env.NODE_ENV !== "production" && (sDi.displayName = "MenuPortalContext");

}
