import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as hFl from "./react-runtime/react/esm-index-production.js";
var eDi;
export { eDi };
var __wakaru_yvt_initialized = false;
export function yvt() {
if (__wakaru_yvt_initialized) return;
__wakaru_yvt_initialized = true;
x(), Eb(), eDi = hFl.createContext(void 0), process.env.NODE_ENV !== "production" && (eDi.displayName = "ContextMenuRootContext");

}
