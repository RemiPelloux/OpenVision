import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as sJl from "./react-runtime/react/esm-index-production.js";
var B2i;
export { B2i };
var __wakaru_oJl_initialized = false;
export function oJl() {
if (__wakaru_oJl_initialized) return;
__wakaru_oJl_initialized = true;
x(), Eb(), B2i = sJl.createContext(void 0), process.env.NODE_ENV !== "production" && (B2i.displayName = "ComboboxGroupContext");

}
