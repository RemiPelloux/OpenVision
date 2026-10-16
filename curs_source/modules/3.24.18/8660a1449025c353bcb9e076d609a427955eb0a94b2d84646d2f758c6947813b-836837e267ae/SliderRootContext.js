import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as r0p from "./react-runtime/react/esm-index-production.js";
var Yjr;
export { Yjr };
var __wakaru_Xjr_initialized = false;
export function Xjr() {
if (__wakaru_Xjr_initialized) return;
__wakaru_Xjr_initialized = true;
E(), zS(), Yjr = r0p.createContext(void 0), process.env.NODE_ENV !== "production" && (Yjr.displayName = "SliderRootContext");

}
