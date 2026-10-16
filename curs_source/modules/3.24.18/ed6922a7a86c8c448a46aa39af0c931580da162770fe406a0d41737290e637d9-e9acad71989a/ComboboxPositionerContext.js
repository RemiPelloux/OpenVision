import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as UQl from "./react-runtime/react/esm-index-production.js";
var M2i;
export { M2i };
var __wakaru_P2i_initialized = false;
export function P2i() {
if (__wakaru_P2i_initialized) return;
__wakaru_P2i_initialized = true;
x(), Eb(), M2i = UQl.createContext(void 0), process.env.NODE_ENV !== "production" && (M2i.displayName = "ComboboxPositionerContext");

}
