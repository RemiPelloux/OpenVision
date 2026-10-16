import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as OZh from "./react-runtime/react/esm-index-production.js";
var R4r;
export { R4r };
var __wakaru_FZh_initialized = false;
export function FZh() {
if (__wakaru_FZh_initialized) return;
__wakaru_FZh_initialized = true;
E(), zS(), R4r = OZh.createContext(void 0), process.env.NODE_ENV !== "production" && (R4r.displayName = "PopoverPortalContext");

}
