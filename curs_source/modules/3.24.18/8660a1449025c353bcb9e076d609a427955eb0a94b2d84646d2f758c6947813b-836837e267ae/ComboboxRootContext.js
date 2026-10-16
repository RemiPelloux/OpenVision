import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as _Ge from "./react-runtime/react/esm-index-production.js";
var j8r, $8r, H8r, W8r, G8r;
export { $8r, G8r, H8r, W8r, j8r };
var __wakaru_Y_e_initialized = false;
export function Y_e() {
if (__wakaru_Y_e_initialized) return;
__wakaru_Y_e_initialized = true;
E(), zS(), j8r = _Ge.createContext(void 0), process.env.NODE_ENV !== "production" && (j8r.displayName = "ComboboxRootContext"), $8r = _Ge.createContext(void 0), process.env.NODE_ENV !== "production" && ($8r.displayName = "ComboboxFloatingContext"), H8r = _Ge.createContext(void 0), process.env.NODE_ENV !== "production" && (H8r.displayName = "ComboboxDerivedItemsContext"), W8r = _Ge.createContext(!1), process.env.NODE_ENV !== "production" && (W8r.displayName = "ComboboxHasItemsContext"), G8r = _Ge.createContext(""), process.env.NODE_ENV !== "production" && (G8r.displayName = "ComboboxInputValueContext");

}
