import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as yhh from "./react-runtime/react/esm-index-production.js";
var APr;
export { APr };
var __wakaru_Shh_initialized = false;
export function Shh() {
if (__wakaru_Shh_initialized) return;
__wakaru_Shh_initialized = true;
E(), zS(), APr = yhh.createContext(void 0), process.env.NODE_ENV !== "production" && (APr.displayName = "PreviewCardPositionerContext");

}
