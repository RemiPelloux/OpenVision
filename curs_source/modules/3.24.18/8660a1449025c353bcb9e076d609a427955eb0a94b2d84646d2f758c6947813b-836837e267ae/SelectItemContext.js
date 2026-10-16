import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Jlh from "./react-runtime/react/esm-index-production.js";
var M2r;
export { M2r };
var __wakaru_cea_initialized = false;
export function cea() {
if (__wakaru_cea_initialized) return;
__wakaru_cea_initialized = true;
E(), zS(), M2r = Jlh.createContext(void 0), process.env.NODE_ENV !== "production" && (M2r.displayName = "SelectItemContext");

}
