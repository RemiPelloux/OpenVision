import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as v1i from "./react-runtime/react/esm-index-production.js";
var _1i, b1i;
export { _1i, b1i };
var __wakaru_VRe_initialized = false;
export function VRe() {
if (__wakaru_VRe_initialized) return;
__wakaru_VRe_initialized = true;
x(), Eb(), _1i = v1i.createContext(null), process.env.NODE_ENV !== "production" && (_1i.displayName = "SelectRootContext"), b1i = v1i.createContext(null), process.env.NODE_ENV !== "production" && (b1i.displayName = "SelectFloatingContext");

}
