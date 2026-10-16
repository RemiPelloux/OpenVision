import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as s4h from "./react-runtime/react/esm-index-production.js";
var qOr;
export { qOr };
var __wakaru_zOr_initialized = false;
export function zOr() {
if (__wakaru_zOr_initialized) return;
__wakaru_zOr_initialized = true;
E(), zS(), qOr = s4h.createContext(void 0), process.env.NODE_ENV !== "production" && (qOr.displayName = "FieldsetRootContext");

}
