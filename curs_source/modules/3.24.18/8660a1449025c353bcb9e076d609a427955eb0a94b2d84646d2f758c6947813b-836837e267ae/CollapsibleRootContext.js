import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as A$h from "./react-runtime/react/esm-index-production.js";
var uFr;
export { uFr };
var __wakaru_fva_initialized = false;
export function fva() {
if (__wakaru_fva_initialized) return;
__wakaru_fva_initialized = true;
E(), zS(), uFr = A$h.createContext(void 0), process.env.NODE_ENV !== "production" && (uFr.displayName = "CollapsibleRootContext");

}
