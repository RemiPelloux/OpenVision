import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Csp from "./react-runtime/react/esm-index-production.js";
var KBr;
export { KBr };
var __wakaru_n0a_initialized = false;
export function n0a() {
if (__wakaru_n0a_initialized) return;
__wakaru_n0a_initialized = true;
E(), zS(), KBr = Csp.createContext(void 0), process.env.NODE_ENV !== "production" && (KBr.displayName = "TabsListContext");

}
