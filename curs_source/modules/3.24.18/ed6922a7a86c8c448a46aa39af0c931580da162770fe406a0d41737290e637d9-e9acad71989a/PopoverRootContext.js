import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as cVl from "./react-runtime/react/esm-index-production.js";
var _Li;
export { _Li };
var __wakaru_ZXe_initialized = false;
export function ZXe() {
if (__wakaru_ZXe_initialized) return;
__wakaru_ZXe_initialized = true;
x(), Eb(), _Li = cVl.createContext(void 0), process.env.NODE_ENV !== "production" && (_Li.displayName = "PopoverRootContext");

}
