import { E } from "./tslib.es6.js";
import * as K4h from "./react-runtime/react/esm-index-production.js";
var o5r;
export { o5r };
var __wakaru_Y4h_initialized = false;
export function Y4h() {
if (__wakaru_Y4h_initialized) return;
__wakaru_Y4h_initialized = true;
E(), o5r = K4h.createContext(void 0), process.env.NODE_ENV !== "production" && (o5r.displayName = "RadioGroupContext");

}
