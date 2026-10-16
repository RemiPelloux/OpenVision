import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Blh from "./react-runtime/react/esm-index-production.js";
var KJo;
export { KJo };
var __wakaru_YJo_initialized = false;
export function YJo() {
if (__wakaru_YJo_initialized) return;
__wakaru_YJo_initialized = true;
E(), zS(), KJo = Blh.createContext(void 0), process.env.NODE_ENV !== "production" && (KJo.displayName = "ToolbarRootContext");

}
