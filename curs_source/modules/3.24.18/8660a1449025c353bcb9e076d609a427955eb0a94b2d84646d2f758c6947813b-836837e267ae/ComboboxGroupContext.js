import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Wcp from "./react-runtime/react/esm-index-production.js";
var i7r;
export { i7r };
var __wakaru_Gcp_initialized = false;
export function Gcp() {
if (__wakaru_Gcp_initialized) return;
__wakaru_Gcp_initialized = true;
E(), zS(), i7r = Wcp.createContext(void 0), process.env.NODE_ENV !== "production" && (i7r.displayName = "ComboboxGroupContext");

}
