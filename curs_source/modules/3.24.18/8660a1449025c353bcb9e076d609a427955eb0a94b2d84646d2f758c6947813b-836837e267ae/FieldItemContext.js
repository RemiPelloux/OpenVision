import { E } from "./tslib.es6.js";
import * as l4h from "./react-runtime/react/esm-index-production.js";
var XOr;
export { XOr };
var __wakaru_ppi_initialized = false;
export function ppi() {
if (__wakaru_ppi_initialized) return;
__wakaru_ppi_initialized = true;
E(), XOr = l4h.createContext({
    disabled: !1
}), process.env.NODE_ENV !== "production" && (XOr.displayName = "FieldItemContext");

}
