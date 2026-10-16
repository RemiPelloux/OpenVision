import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as p9h from "./react-runtime/react/esm-index-production.js";
var h5r;
export { h5r };
var __wakaru_m9h_initialized = false;
export function m9h() {
if (__wakaru_m9h_initialized) return;
__wakaru_m9h_initialized = true;
E(), zS(), h5r = p9h.createContext(void 0), process.env.NODE_ENV !== "production" && (h5r.displayName = "ProgressRootContext");

}
