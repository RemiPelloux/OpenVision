import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as bsp from "./react-runtime/react/esm-index-production.js";
var zBr;
export { zBr };
var __wakaru_Cfi_initialized = false;
export function Cfi() {
if (__wakaru_Cfi_initialized) return;
__wakaru_Cfi_initialized = true;
E(), zS(), zBr = bsp.createContext(void 0), process.env.NODE_ENV !== "production" && (zBr.displayName = "TabsRootContext");

}
