import { E } from "./tslib.es6.js";
import * as nTa from "./react-runtime/react/esm-index-production.js";
var Q8r;
export { Q8r };
var __wakaru_Ccp_initialized = false;
export function Ccp() {
if (__wakaru_Ccp_initialized) return;
__wakaru_Ccp_initialized = true;
E(), Q8r = nTa.createContext(null), process.env.NODE_ENV !== "production" && (Q8r.displayName = "GroupCollectionContext");

}
