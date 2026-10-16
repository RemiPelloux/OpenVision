import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as u6h from "./react-runtime/react/esm-index-production.js";
var tma;
export { tma };
var __wakaru_h6h_initialized = false;
export function h6h() {
if (__wakaru_h6h_initialized) return;
__wakaru_h6h_initialized = true;
E(), zS(), tma = u6h.createContext(null), process.env.NODE_ENV !== "production" && (tma.displayName = "MenubarContext");

}
