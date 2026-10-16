import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as pCp from "./react-runtime/react/esm-index-production.js";
var c$r;
export { c$r };
var __wakaru_u$r_initialized = false;
export function u$r() {
if (__wakaru_u$r_initialized) return;
__wakaru_u$r_initialized = true;
E(), zS(), c$r = pCp.createContext(void 0), process.env.NODE_ENV !== "production" && (c$r.displayName = "NumberFieldRootContext");

}
