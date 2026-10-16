import { E } from "./tslib.es6.js";
import * as JyS from "./react-runtime/react/esm-index-production.js";
var Jpa;
export { Jpa };
var __wakaru_eSS_initialized = false;
export function eSS() {
if (__wakaru_eSS_initialized) return;
__wakaru_eSS_initialized = true;
E(), Jpa = JyS.createContext(void 0), process.env.NODE_ENV !== "production" && (Jpa.displayName = "MenuRadioItemContext");

}
