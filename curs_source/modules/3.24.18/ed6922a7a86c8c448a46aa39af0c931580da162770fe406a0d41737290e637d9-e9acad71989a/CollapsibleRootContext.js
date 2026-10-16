import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as k6l from "./react-runtime/react/esm-index-production.js";
var CMi;
export { CMi };
var __wakaru_PEs_initialized = false;
export function PEs() {
if (__wakaru_PEs_initialized) return;
__wakaru_PEs_initialized = true;
x(), Eb(), CMi = k6l.createContext(void 0), process.env.NODE_ENV !== "production" && (CMi.displayName = "CollapsibleRootContext");

}
