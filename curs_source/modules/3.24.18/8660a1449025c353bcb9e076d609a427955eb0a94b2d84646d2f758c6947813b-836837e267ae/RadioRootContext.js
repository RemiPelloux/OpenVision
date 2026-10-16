import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as X4h from "./react-runtime/react/esm-index-production.js";
var a5r;
export { a5r };
var __wakaru_Z4h_initialized = false;
export function Z4h() {
if (__wakaru_Z4h_initialized) return;
__wakaru_Z4h_initialized = true;
E(), zS(), a5r = X4h.createContext(void 0), process.env.NODE_ENV !== "production" && (a5r.displayName = "RadioRootContext");

}
