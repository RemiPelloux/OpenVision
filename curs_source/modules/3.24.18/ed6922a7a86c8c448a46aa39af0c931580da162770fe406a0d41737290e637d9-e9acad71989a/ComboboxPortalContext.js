import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as ZQl from "./react-runtime/react/esm-index-production.js";
var O2i;
export { O2i };
var __wakaru_QQl_initialized = false;
export function QQl() {
if (__wakaru_QQl_initialized) return;
__wakaru_QQl_initialized = true;
x(), Eb(), O2i = ZQl.createContext(void 0), process.env.NODE_ENV !== "production" && (O2i.displayName = "ComboboxPortalContext");

}
