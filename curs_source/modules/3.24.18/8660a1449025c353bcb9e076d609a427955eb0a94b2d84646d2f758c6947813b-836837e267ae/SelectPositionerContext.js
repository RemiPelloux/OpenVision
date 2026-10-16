import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Elh from "./react-runtime/react/esm-index-production.js";
var w2r;
export { w2r };
var __wakaru_jJo_initialized = false;
export function jJo() {
if (__wakaru_jJo_initialized) return;
__wakaru_jJo_initialized = true;
E(), zS(), w2r = Elh.createContext(void 0), process.env.NODE_ENV !== "production" && (w2r.displayName = "SelectPositionerContext");

}
