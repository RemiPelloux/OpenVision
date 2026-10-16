import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as UZh from "./react-runtime/react/esm-index-production.js";
var P4r;
export { P4r };
var __wakaru_jZh_initialized = false;
export function jZh() {
if (__wakaru_jZh_initialized) return;
__wakaru_jZh_initialized = true;
E(), zS(), P4r = UZh.createContext(void 0), process.env.NODE_ENV !== "production" && (P4r.displayName = "PopoverPositionerContext");

}
