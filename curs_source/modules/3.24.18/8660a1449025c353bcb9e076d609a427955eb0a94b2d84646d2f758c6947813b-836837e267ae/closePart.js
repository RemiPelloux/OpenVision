import { E } from "./tslib.es6.js";
import { jv } from "./useIsoLayoutEffect.js";
import { Jy } from "./useStableCallback.js";
import * as M4r from "./react-runtime/react/esm-index-production.js";
var D4r;
export { D4r };
var __wakaru_HZh_initialized = false;
export function HZh() {
if (__wakaru_HZh_initialized) return;
__wakaru_HZh_initialized = true;
E(), jv(), Jy(), D4r = M4r.createContext(void 0), process.env.NODE_ENV !== "production" && (D4r.displayName = "ClosePartContext");

}
