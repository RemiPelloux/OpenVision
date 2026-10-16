import { x } from "./tslib.es6.js";
import * as Yof from "./react-runtime/react/esm-index-production.js";
var z0s;
export { z0s };
var __wakaru_Xof_initialized = false;
export function Xof() {
if (__wakaru_Xof_initialized) return;
__wakaru_Xof_initialized = true;
x(), z0s = Yof.createContext(void 0), process.env.NODE_ENV !== "production" && (z0s.displayName = "MenuCheckboxItemContext");

}
