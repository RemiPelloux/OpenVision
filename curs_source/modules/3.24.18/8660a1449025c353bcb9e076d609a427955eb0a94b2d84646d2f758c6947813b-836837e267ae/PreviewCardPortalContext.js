import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as phh from "./react-runtime/react/esm-index-production.js";
var TPr;
export { TPr };
var __wakaru_mhh_initialized = false;
export function mhh() {
if (__wakaru_mhh_initialized) return;
__wakaru_mhh_initialized = true;
E(), zS(), TPr = phh.createContext(void 0), process.env.NODE_ENV !== "production" && (TPr.displayName = "PreviewCardPortalContext");

}
