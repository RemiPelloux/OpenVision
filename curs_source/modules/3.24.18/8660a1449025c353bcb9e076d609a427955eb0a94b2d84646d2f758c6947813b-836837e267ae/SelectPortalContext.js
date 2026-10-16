import { E } from "./tslib.es6.js";
import * as Ajy from "./react-runtime/react/esm-index-production.js";
var FJo;
export { FJo };
var __wakaru_Rjy_initialized = false;
export function Rjy() {
if (__wakaru_Rjy_initialized) return;
__wakaru_Rjy_initialized = true;
E(), FJo = Ajy.createContext(void 0), process.env.NODE_ENV !== "production" && (FJo.displayName = "SelectPortalContext");

}
