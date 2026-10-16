import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as GFh from "./react-runtime/react/esm-index-production.js";
var wOr;
export { wOr };
var __wakaru_WUt_initialized = false;
export function WUt() {
if (__wakaru_WUt_initialized) return;
__wakaru_WUt_initialized = true;
E(), zS(), wOr = GFh.createContext(void 0), process.env.NODE_ENV !== "production" && (wOr.displayName = "MenuPositionerContext");

}
