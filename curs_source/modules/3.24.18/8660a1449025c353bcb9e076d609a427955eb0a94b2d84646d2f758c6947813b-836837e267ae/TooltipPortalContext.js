import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Khh from "./react-runtime/react/esm-index-production.js";
var WPr;
export { WPr };
var __wakaru_Yhh_initialized = false;
export function Yhh() {
if (__wakaru_Yhh_initialized) return;
__wakaru_Yhh_initialized = true;
E(), zS(), WPr = Khh.createContext(void 0), process.env.NODE_ENV !== "production" && (WPr.displayName = "TooltipPortalContext");

}
