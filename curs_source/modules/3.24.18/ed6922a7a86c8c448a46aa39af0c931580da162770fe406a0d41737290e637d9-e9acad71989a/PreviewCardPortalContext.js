import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as Xll from "./react-runtime/react/esm-index-production.js";
var kTi;
export { kTi };
var __wakaru_Zll_initialized = false;
export function Zll() {
if (__wakaru_Zll_initialized) return;
__wakaru_Zll_initialized = true;
x(), Eb(), kTi = Xll.createContext(void 0), process.env.NODE_ENV !== "production" && (kTi.displayName = "PreviewCardPortalContext");

}
