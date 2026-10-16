import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as Ful from "./react-runtime/react/esm-index-production.js";
var FTi;
export { FTi };
var __wakaru_Bul_initialized = false;
export function Bul() {
if (__wakaru_Bul_initialized) return;
__wakaru_Bul_initialized = true;
x(), Eb(), FTi = Ful.createContext(void 0), process.env.NODE_ENV !== "production" && (FTi.displayName = "TooltipPositionerContext");

}
