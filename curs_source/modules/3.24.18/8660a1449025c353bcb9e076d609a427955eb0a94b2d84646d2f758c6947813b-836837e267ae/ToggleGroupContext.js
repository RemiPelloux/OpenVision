import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as zkh from "./react-runtime/react/esm-index-production.js";
var aaa;
export { aaa };
var __wakaru_InS_initialized = false;
export function InS() {
if (__wakaru_InS_initialized) return;
__wakaru_InS_initialized = true;
E(), zS(), aaa = zkh.createContext(void 0), process.env.NODE_ENV !== "production" && (aaa.displayName = "ToggleGroupContext");

}
