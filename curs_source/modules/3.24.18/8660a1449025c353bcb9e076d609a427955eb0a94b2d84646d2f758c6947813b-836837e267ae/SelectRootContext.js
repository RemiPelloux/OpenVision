import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as m2r from "./react-runtime/react/esm-index-production.js";
var g2r, f2r;
export { f2r, g2r };
var __wakaru_tWe_initialized = false;
export function tWe() {
if (__wakaru_tWe_initialized) return;
__wakaru_tWe_initialized = true;
E(), zS(), g2r = m2r.createContext(null), process.env.NODE_ENV !== "production" && (g2r.displayName = "SelectRootContext"), f2r = m2r.createContext(null), process.env.NODE_ENV !== "production" && (f2r.displayName = "SelectFloatingContext");

}
