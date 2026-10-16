import { x } from "./tslib.es6.js";
import * as Aul from "./react-runtime/react/esm-index-production.js";
var NTi;
export { NTi };
var __wakaru_Rul_initialized = false;
export function Rul() {
if (__wakaru_Rul_initialized) return;
__wakaru_Rul_initialized = true;
x(), NTi = Aul.createContext(void 0), process.env.NODE_ENV !== "production" && (NTi.displayName = "TooltipProviderContext");

}
