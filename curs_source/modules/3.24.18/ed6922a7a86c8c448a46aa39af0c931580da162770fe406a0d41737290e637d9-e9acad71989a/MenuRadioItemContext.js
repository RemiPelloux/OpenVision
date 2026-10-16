import { x } from "./tslib.es6.js";
import * as faf from "./react-runtime/react/esm-index-production.js";
var a1s;
export { a1s };
var __wakaru_vaf_initialized = false;
export function vaf() {
if (__wakaru_vaf_initialized) return;
__wakaru_vaf_initialized = true;
x(), a1s = faf.createContext(void 0), process.env.NODE_ENV !== "production" && (a1s.displayName = "MenuRadioItemContext");

}
