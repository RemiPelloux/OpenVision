import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as qFh from "./react-runtime/react/esm-index-production.js";
var Xhi;
export { Xhi };
var __wakaru_F_e_initialized = false;
export function F_e() {
if (__wakaru_F_e_initialized) return;
__wakaru_F_e_initialized = true;
E(), zS(), Xhi = qFh.createContext(void 0), process.env.NODE_ENV !== "production" && (Xhi.displayName = "MenuRootContext");

}
