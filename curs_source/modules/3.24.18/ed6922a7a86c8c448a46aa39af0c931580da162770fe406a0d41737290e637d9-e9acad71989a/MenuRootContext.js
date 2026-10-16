import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as mFl from "./react-runtime/react/esm-index-production.js";
var A0n;
export { A0n };
var __wakaru_Xre_initialized = false;
export function Xre() {
if (__wakaru_Xre_initialized) return;
__wakaru_Xre_initialized = true;
x(), Eb(), A0n = mFl.createContext(void 0), process.env.NODE_ENV !== "production" && (A0n.displayName = "MenuRootContext");

}
