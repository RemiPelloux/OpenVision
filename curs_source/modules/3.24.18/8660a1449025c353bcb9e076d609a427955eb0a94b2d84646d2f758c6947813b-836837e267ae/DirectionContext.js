import { E } from "./tslib.es6.js";
import * as KXd from "./react-runtime/react/esm-index-production.js";
var JVo;
export { JVo };
var __wakaru_Wj_initialized = false;
export function Wj() {
if (__wakaru_Wj_initialized) return;
__wakaru_Wj_initialized = true;
E(), JVo = KXd.createContext(void 0), process.env.NODE_ENV !== "production" && (JVo.displayName = "DirectionContext");

}
