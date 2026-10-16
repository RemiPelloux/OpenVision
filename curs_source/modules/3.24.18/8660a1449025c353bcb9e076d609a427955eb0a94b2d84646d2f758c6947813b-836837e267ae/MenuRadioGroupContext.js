import { zS } from "./formatErrorMessage.js";
import { E } from "./tslib.es6.js";
import * as o6h from "./react-runtime/react/esm-index-production.js";
var ROr;
export { ROr };
var __wakaru_a6h_initialized = false;
export function a6h() {
if (__wakaru_a6h_initialized) return;
__wakaru_a6h_initialized = true;
E(), zS(), ROr = o6h.createContext(void 0), process.env.NODE_ENV !== "production" && (ROr.displayName = "MenuRadioGroupContext");

}
