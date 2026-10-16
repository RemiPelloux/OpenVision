import { E } from "./tslib.es6.js";
import * as MyS from "./react-runtime/react/esm-index-production.js";
var Upa;
export { Upa };
var __wakaru_DyS_initialized = false;
export function DyS() {
if (__wakaru_DyS_initialized) return;
__wakaru_DyS_initialized = true;
E(), Upa = MyS.createContext(void 0), process.env.NODE_ENV !== "production" && (Upa.displayName = "MenuCheckboxItemContext");

}
