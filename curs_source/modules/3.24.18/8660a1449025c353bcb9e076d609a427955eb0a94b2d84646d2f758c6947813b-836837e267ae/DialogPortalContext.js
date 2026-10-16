import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Dwp from "./react-runtime/react/esm-index-production.js";
var Vjr;
export { Vjr };
var __wakaru_MRa_initialized = false;
export function MRa() {
if (__wakaru_MRa_initialized) return;
__wakaru_MRa_initialized = true;
E(), zS(), Vjr = Dwp.createContext(void 0), process.env.NODE_ENV !== "production" && (Vjr.displayName = "DialogPortalContext");

}
