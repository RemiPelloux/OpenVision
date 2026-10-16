import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as Lul from "./react-runtime/react/esm-index-production.js";
var OTi;
export { OTi };
var __wakaru_Nul_initialized = false;
export function Nul() {
if (__wakaru_Nul_initialized) return;
__wakaru_Nul_initialized = true;
x(), Eb(), OTi = Lul.createContext(void 0), process.env.NODE_ENV !== "production" && (OTi.displayName = "TooltipPortalContext");

}
