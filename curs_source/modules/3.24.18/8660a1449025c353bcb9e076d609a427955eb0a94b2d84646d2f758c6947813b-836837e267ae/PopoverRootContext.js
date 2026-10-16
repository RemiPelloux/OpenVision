import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as AZh from "./react-runtime/react/esm-index-production.js";
var I4r;
export { I4r };
var __wakaru_Okt_initialized = false;
export function Okt() {
if (__wakaru_Okt_initialized) return;
__wakaru_Okt_initialized = true;
E(), zS(), I4r = AZh.createContext(void 0), process.env.NODE_ENV !== "production" && (I4r.displayName = "PopoverRootContext");

}
