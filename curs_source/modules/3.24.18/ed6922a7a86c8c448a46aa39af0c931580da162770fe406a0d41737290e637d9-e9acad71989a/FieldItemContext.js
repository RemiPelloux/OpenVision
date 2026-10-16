import { x } from "./tslib.es6.js";
import * as P3l from "./react-runtime/react/esm-index-production.js";
var TDi;
export { TDi };
var __wakaru_EDi_initialized = false;
export function EDi() {
if (__wakaru_EDi_initialized) return;
__wakaru_EDi_initialized = true;
x(), TDi = P3l.createContext({
    disabled: !1
}), process.env.NODE_ENV !== "production" && (TDi.displayName = "FieldItemContext");

}
