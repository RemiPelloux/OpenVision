import { E } from "./tslib.es6.js";
import * as Hhh from "./react-runtime/react/esm-index-production.js";
var $Pr;
export { $Pr };
var __wakaru_Whh_initialized = false;
export function Whh() {
if (__wakaru_Whh_initialized) return;
__wakaru_Whh_initialized = true;
E(), $Pr = Hhh.createContext(void 0), process.env.NODE_ENV !== "production" && ($Pr.displayName = "TooltipProviderContext");

}
