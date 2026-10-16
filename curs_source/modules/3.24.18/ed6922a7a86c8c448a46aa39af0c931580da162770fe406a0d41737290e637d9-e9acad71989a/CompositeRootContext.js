import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as cYc from "./react-runtime/react/esm-index-production.js";
var Qki;
export { Qki };
var __wakaru_Jki_initialized = false;
export function Jki() {
if (__wakaru_Jki_initialized) return;
__wakaru_Jki_initialized = true;
x(), Eb(), Qki = cYc.createContext(void 0), process.env.NODE_ENV !== "production" && (Qki.displayName = "CompositeRootContext");

}
