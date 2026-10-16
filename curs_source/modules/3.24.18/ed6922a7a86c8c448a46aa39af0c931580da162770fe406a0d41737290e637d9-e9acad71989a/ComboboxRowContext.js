import { x } from "./tslib.es6.js";
import * as pJl from "./react-runtime/react/esm-index-production.js";
var eLs;
export { eLs };
var __wakaru_SUf_initialized = false;
export function SUf() {
if (__wakaru_SUf_initialized) return;
__wakaru_SUf_initialized = true;
x(), eLs = pJl.createContext(!1), process.env.NODE_ENV !== "production" && (eLs.displayName = "ComboboxRowContext");

}
