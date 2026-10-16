import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as SBl from "./react-runtime/react/esm-index-production.js";
var mTs;
export { mTs };
var __wakaru_Plf_initialized = false;
export function Plf() {
if (__wakaru_Plf_initialized) return;
__wakaru_Plf_initialized = true;
x(), Eb(), mTs = SBl.createContext(void 0), process.env.NODE_ENV !== "production" && (mTs.displayName = "RadioRootContext");

}
