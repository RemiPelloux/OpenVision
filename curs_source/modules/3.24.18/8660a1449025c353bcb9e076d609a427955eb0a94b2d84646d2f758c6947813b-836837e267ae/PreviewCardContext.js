import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as ihh from "./react-runtime/react/esm-index-production.js";
var kPr;
export { kPr };
var __wakaru_qci_initialized = false;
export function qci() {
if (__wakaru_qci_initialized) return;
__wakaru_qci_initialized = true;
E(), zS(), kPr = ihh.createContext(void 0), process.env.NODE_ENV !== "production" && (kPr.displayName = "PreviewCardRootContext");

}
