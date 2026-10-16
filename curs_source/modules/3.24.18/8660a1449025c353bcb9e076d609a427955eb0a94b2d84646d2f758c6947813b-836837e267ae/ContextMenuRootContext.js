import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as WFh from "./react-runtime/react/esm-index-production.js";
var kOr;
export { kOr };
var __wakaru_HUt_initialized = false;
export function HUt() {
if (__wakaru_HUt_initialized) return;
__wakaru_HUt_initialized = true;
E(), zS(), kOr = WFh.createContext(void 0), process.env.NODE_ENV !== "production" && (kOr.displayName = "ContextMenuRootContext");

}
