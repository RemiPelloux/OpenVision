import { Eb } from "./formatErrorMessage.js";
import { x } from "./tslib.es6.js";
import * as iul from "./react-runtime/react/esm-index-production.js";
var ETi;
export { ETi };
var __wakaru_rul_initialized = false;
export function rul() {
if (__wakaru_rul_initialized) return;
__wakaru_rul_initialized = true;
x(), Eb(), ETi = iul.createContext(void 0), process.env.NODE_ENV !== "production" && (ETi.displayName = "PreviewCardPositionerContext");

}
