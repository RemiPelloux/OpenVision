import { E } from "./tslib.es6.js";
import * as Klh from "./react-runtime/react/esm-index-production.js";
var iea, Ylh;
export { Ylh, iea };
var __wakaru_rea_initialized = false;
export function rea() {
if (__wakaru_rea_initialized) return;
__wakaru_rea_initialized = true;
E(), iea = Klh.createContext(void 0), process.env.NODE_ENV !== "production" && (iea.displayName = "CSPContext"), Ylh = {
    disableStyleElements: !1
};

}
