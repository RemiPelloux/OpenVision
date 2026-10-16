import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as zcp from "./react-runtime/react/esm-index-production.js";
var r7r;
export { r7r };
var __wakaru_Kcp_initialized = false;
export function Kcp() {
if (__wakaru_Kcp_initialized) return;
__wakaru_Kcp_initialized = true;
E(), zS(), r7r = zcp.createContext(void 0), process.env.NODE_ENV !== "production" && (r7r.displayName = "ComboboxItemContext");

}
