import { E } from "./tslib.es6.js";
import * as _cp from "./react-runtime/react/esm-index-production.js";
var QCa;
export { QCa };
var __wakaru_hZS_initialized = false;
export function hZS() {
if (__wakaru_hZS_initialized) return;
__wakaru_hZS_initialized = true;
E(), QCa = _cp.createContext(void 0), process.env.NODE_ENV !== "production" && (QCa.displayName = "ComboboxChipsContext");

}
