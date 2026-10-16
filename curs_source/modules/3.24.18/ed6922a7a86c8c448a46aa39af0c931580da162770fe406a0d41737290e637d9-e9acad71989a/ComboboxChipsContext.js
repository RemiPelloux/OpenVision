import { x } from "./tslib.es6.js";
import * as BQl from "./react-runtime/react/esm-index-production.js";
var WPs;
export { WPs };
var __wakaru_z4f_initialized = false;
export function z4f() {
if (__wakaru_z4f_initialized) return;
__wakaru_z4f_initialized = true;
x(), WPs = BQl.createContext(void 0), process.env.NODE_ENV !== "production" && (WPs.displayName = "ComboboxChipsContext");

}
