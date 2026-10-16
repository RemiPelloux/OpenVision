import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as BYl from "./react-runtime/react/esm-index-production.js";
var zNi;
export { zNi };
var __wakaru_KNi_initialized = false;
export function KNi() {
if (__wakaru_KNi_initialized) return;
__wakaru_KNi_initialized = true;
x(), Eb(), zNi = BYl.createContext(void 0), process.env.NODE_ENV !== "production" && (zNi.displayName = "TabsRootContext");

}
