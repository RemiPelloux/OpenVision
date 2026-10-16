import { x } from "./tslib.es6.js";
import * as TPg from "./react-runtime/react/esm-index-production.js";
var Hhs;
export { Hhs };
var __wakaru_EPg_initialized = false;
export function EPg() {
if (__wakaru_EPg_initialized) return;
__wakaru_EPg_initialized = true;
x(), Hhs = TPg.createContext(void 0), process.env.NODE_ENV !== "production" && (Hhs.displayName = "SelectPortalContext");

}
