import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as xRa from "./react-runtime/react/esm-index-production.js";
var qjr, zjr;
export { qjr, zjr };
var __wakaru_FGe_initialized = false;
export function FGe() {
if (__wakaru_FGe_initialized) return;
__wakaru_FGe_initialized = true;
E(), zS(), qjr = xRa.createContext(!1), process.env.NODE_ENV !== "production" && (qjr.displayName = "IsDrawerContext"), zjr = xRa.createContext(void 0), process.env.NODE_ENV !== "production" && (zjr.displayName = "DialogRootContext");

}
