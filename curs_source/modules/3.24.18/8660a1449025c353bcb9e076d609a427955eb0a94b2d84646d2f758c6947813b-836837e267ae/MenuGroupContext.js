import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as ZFh from "./react-runtime/react/esm-index-production.js";
var Zhi;
export { Zhi };
var __wakaru_Gpa_initialized = false;
export function Gpa() {
if (__wakaru_Gpa_initialized) return;
__wakaru_Gpa_initialized = true;
E(), zS(), Zhi = ZFh.createContext(void 0), process.env.NODE_ENV !== "production" && (Zhi.displayName = "MenuGroupContext");

}
