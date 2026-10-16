import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as t6h from "./react-runtime/react/esm-index-production.js";
var IOr;
export { IOr };
var __wakaru_n6h_initialized = false;
export function n6h() {
if (__wakaru_n6h_initialized) return;
__wakaru_n6h_initialized = true;
E(), zS(), IOr = t6h.createContext(void 0), process.env.NODE_ENV !== "production" && (IOr.displayName = "MenuPortalContext");

}
