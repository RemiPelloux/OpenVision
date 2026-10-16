import { x } from "./tslib.es6.js";
import * as dol from "./react-runtime/react/esm-index-production.js";
var ips, pol;
export { ips, pol };
var __wakaru_mol_initialized = false;
export function mol() {
if (__wakaru_mol_initialized) return;
__wakaru_mol_initialized = true;
x(), ips = dol.createContext(void 0), process.env.NODE_ENV !== "production" && (ips.displayName = "CSPContext"), pol = {
    disableStyleElements: !1
};

}
