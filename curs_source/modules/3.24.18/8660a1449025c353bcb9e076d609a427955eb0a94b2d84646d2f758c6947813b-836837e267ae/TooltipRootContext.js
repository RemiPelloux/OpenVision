import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as Lhh from "./react-runtime/react/esm-index-production.js";
var UPr;
export { UPr };
var __wakaru_Kci_initialized = false;
export function Kci() {
if (__wakaru_Kci_initialized) return;
__wakaru_Kci_initialized = true;
E(), zS(), UPr = Lhh.createContext(void 0), process.env.NODE_ENV !== "production" && (UPr.displayName = "TooltipRootContext");

}
