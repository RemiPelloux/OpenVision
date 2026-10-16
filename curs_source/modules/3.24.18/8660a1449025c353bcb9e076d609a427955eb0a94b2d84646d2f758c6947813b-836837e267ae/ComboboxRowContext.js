import { E } from "./tslib.es6.js";
import * as Ycp from "./react-runtime/react/esm-index-production.js";
var cTa;
export { cTa };
var __wakaru_BZS_initialized = false;
export function BZS() {
if (__wakaru_BZS_initialized) return;
__wakaru_BZS_initialized = true;
E(), cTa = Ycp.createContext(!1), process.env.NODE_ENV !== "production" && (cTa.displayName = "ComboboxRowContext");

}
