import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as Ucu from "./react-runtime/react/esm-index-production.js";
var kFi;
export { kFi };
var __wakaru_BOs_initialized = false;
export function BOs() {
if (__wakaru_BOs_initialized) return;
__wakaru_BOs_initialized = true;
x(), Eb(), kFi = Ucu.createContext(void 0), process.env.NODE_ENV !== "production" && (kFi.displayName = "DialogPortalContext");

}
