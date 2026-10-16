import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as kSl from "./react-runtime/react/esm-index-production.js";
var zbs;
export { zbs };
var __wakaru_YHg_initialized = false;
export function YHg() {
if (__wakaru_YHg_initialized) return;
__wakaru_YHg_initialized = true;
x(), Eb(), zbs = kSl.createContext(void 0), process.env.NODE_ENV !== "production" && (zbs.displayName = "ToggleGroupContext");

}
