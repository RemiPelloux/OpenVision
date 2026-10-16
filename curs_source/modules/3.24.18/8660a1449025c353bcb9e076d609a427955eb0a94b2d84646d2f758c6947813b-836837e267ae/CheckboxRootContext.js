import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as U4h from "./react-runtime/react/esm-index-production.js";
var i5r;
export { i5r };
var __wakaru_j4h_initialized = false;
export function j4h() {
if (__wakaru_j4h_initialized) return;
__wakaru_j4h_initialized = true;
E(), zS(), i5r = U4h.createContext(void 0), process.env.NODE_ENV !== "production" && (i5r.displayName = "CheckboxRootContext");

}
