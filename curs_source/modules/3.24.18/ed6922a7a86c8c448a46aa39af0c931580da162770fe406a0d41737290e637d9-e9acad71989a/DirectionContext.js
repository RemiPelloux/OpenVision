import { x } from "./tslib.es6.js";
import * as BKc from "./react-runtime/react/esm-index-production.js";
var ras;
export { ras };
var __wakaru_yU_initialized = false;
export function yU() {
if (__wakaru_yU_initialized) return;
__wakaru_yU_initialized = true;
x(), ras = BKc.createContext(void 0), process.env.NODE_ENV !== "production" && (ras.displayName = "DirectionContext");

}
