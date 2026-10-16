import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as bcp from "./react-runtime/react/esm-index-production.js";
var V8r;
export { V8r };
var __wakaru_K8r_initialized = false;
export function K8r() {
if (__wakaru_K8r_initialized) return;
__wakaru_K8r_initialized = true;
E(), zS(), V8r = bcp.createContext(void 0), process.env.NODE_ENV !== "production" && (V8r.displayName = "ComboboxPositionerContext");

}
