import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as KDe from "./react-runtime/react/esm-index-production.js";
var x2i, I2i, A2i, R2i, D2i;
export { A2i, D2i, I2i, R2i, x2i };
var __wakaru_Nue_initialized = false;
export function Nue() {
if (__wakaru_Nue_initialized) return;
__wakaru_Nue_initialized = true;
x(), Eb(), x2i = KDe.createContext(void 0), process.env.NODE_ENV !== "production" && (x2i.displayName = "ComboboxRootContext"), I2i = KDe.createContext(void 0), process.env.NODE_ENV !== "production" && (I2i.displayName = "ComboboxFloatingContext"), A2i = KDe.createContext(void 0), process.env.NODE_ENV !== "production" && (A2i.displayName = "ComboboxDerivedItemsContext"), R2i = KDe.createContext(!1), process.env.NODE_ENV !== "production" && (R2i.displayName = "ComboboxHasItemsContext"), D2i = KDe.createContext(""), process.env.NODE_ENV !== "production" && (D2i.displayName = "ComboboxInputValueContext");

}
