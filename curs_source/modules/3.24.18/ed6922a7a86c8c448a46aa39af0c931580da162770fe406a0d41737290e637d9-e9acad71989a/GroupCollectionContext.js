import { x } from "./tslib.es6.js";
import * as zPs from "./react-runtime/react/esm-index-production.js";
var N2i;
export { N2i };
var __wakaru_WQl_initialized = false;
export function WQl() {
if (__wakaru_WQl_initialized) return;
__wakaru_WQl_initialized = true;
x(), N2i = zPs.createContext(null), process.env.NODE_ENV !== "production" && (N2i.displayName = "GroupCollectionContext");

}
