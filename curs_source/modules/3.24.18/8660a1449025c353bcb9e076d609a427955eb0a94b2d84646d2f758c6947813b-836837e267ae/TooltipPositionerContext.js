import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Qhh from "./react-runtime/react/esm-index-production.js";
var qPr;
export { qPr };
var __wakaru_Jhh_initialized = false;
export function Jhh() {
if (__wakaru_Jhh_initialized) return;
__wakaru_Jhh_initialized = true;
E(), zS(), qPr = Qhh.createContext(void 0), process.env.NODE_ENV !== "production" && (qPr.displayName = "TooltipPositionerContext");

}
