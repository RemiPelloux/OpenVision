import { jds } from "./FloatingTreeStore.js";
import { Ngt } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { af } from "./useIsoLayoutEffect.js";
import { xW } from "./useRefWithInit.js";
import * as vSn from "./react-runtime/react/esm-index-production.js";
var O0i, F0i, WRe, K5e;
export { F0i, K5e, O0i, WRe };
var __wakaru_BJ_initialized = false;
export function BJ() {
if (__wakaru_BJ_initialized) return;
__wakaru_BJ_initialized = true;
x(), Ngt(), af(), xW(), jds(), O0i = vSn.createContext(null), process.env.NODE_ENV !== "production" && (O0i.displayName = "FloatingNodeContext"), F0i = vSn.createContext(null), process.env.NODE_ENV !== "production" && (F0i.displayName = "FloatingTreeContext"), WRe = ()=>vSn.useContext(O0i)?.id || null, K5e = (e)=>{
    const t = vSn.useContext(F0i);
    return e ?? t;
};

}
