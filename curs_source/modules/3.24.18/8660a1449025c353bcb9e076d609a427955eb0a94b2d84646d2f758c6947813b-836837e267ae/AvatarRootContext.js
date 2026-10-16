import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Swp from "./react-runtime/react/esm-index-production.js";
var Hjr;
export { Hjr };
var __wakaru_fRa_initialized = false;
export function fRa() {
if (__wakaru_fRa_initialized) return;
__wakaru_fRa_initialized = true;
E(), zS(), Hjr = Swp.createContext(void 0), process.env.NODE_ENV !== "production" && (Hjr.displayName = "AvatarRootContext");

}
