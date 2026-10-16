import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as uJl from "./react-runtime/react/esm-index-production.js";
var $2i;
export { $2i };
var __wakaru_hJl_initialized = false;
export function hJl() {
if (__wakaru_hJl_initialized) return;
__wakaru_hJl_initialized = true;
x(), Eb(), $2i = uJl.createContext(void 0), process.env.NODE_ENV !== "production" && ($2i.displayName = "ComboboxItemContext");

}
