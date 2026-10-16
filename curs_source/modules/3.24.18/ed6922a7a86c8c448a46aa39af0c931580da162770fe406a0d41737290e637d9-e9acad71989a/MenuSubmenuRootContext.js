import { x } from "./tslib.es6.js";
import * as HFl from "./react-runtime/react/esm-index-production.js";
var dDi;
export { dDi };
var __wakaru_d1s_initialized = false;
export function d1s() {
if (__wakaru_d1s_initialized) return;
__wakaru_d1s_initialized = true;
x(), dDi = HFl.createContext(void 0), process.env.NODE_ENV !== "production" && (dDi.displayName = "MenuSubmenuRootContext");

}
