import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as Wsl from "./react-runtime/react/esm-index-production.js";
var k1i;
export { k1i };
var __wakaru_Vhs_initialized = false;
export function Vhs() {
if (__wakaru_Vhs_initialized) return;
__wakaru_Vhs_initialized = true;
x(), Eb(), k1i = Wsl.createContext(void 0), process.env.NODE_ENV !== "production" && (k1i.displayName = "SelectPositionerContext");

}
