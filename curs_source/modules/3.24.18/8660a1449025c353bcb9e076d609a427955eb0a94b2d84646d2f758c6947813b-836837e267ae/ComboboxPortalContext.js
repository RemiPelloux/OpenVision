import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Dcp from "./react-runtime/react/esm-index-production.js";
var J8r;
export { J8r };
var __wakaru_Ncp_initialized = false;
export function Ncp() {
if (__wakaru_Ncp_initialized) return;
__wakaru_Ncp_initialized = true;
E(), zS(), J8r = Dcp.createContext(void 0), process.env.NODE_ENV !== "production" && (J8r.displayName = "ComboboxPortalContext");

}
