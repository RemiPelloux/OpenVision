import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as N6h from "./react-runtime/react/esm-index-production.js";
var UOr;
export { UOr };
var __wakaru_L6h_initialized = false;
export function L6h() {
if (__wakaru_L6h_initialized) return;
__wakaru_L6h_initialized = true;
E(), zS(), UOr = N6h.createContext(void 0), process.env.NODE_ENV !== "production" && (UOr.displayName = "SwitchRootContext");

}
