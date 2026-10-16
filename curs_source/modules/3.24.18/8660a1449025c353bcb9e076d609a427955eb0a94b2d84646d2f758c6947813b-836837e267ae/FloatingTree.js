import { qQo } from "./FloatingTreeStore.js";
import { V8t } from "./LYd.js";
import { E } from "./tslib.es6.js";
import { jv } from "./useIsoLayoutEffect.js";
import { jQ } from "./useRefWithInit.js";
import * as Pli from "./react-runtime/react/esm-index-production.js";
var FRr, BRr, QHe, Knt;
export { BRr, FRr, Knt, QHe };
var __wakaru_vhe_initialized = false;
export function vhe() {
if (__wakaru_vhe_initialized) return;
__wakaru_vhe_initialized = true;
E(), V8t(), jv(), jQ(), qQo(), FRr = Pli.createContext(null), process.env.NODE_ENV !== "production" && (FRr.displayName = "FloatingNodeContext"), BRr = Pli.createContext(null), process.env.NODE_ENV !== "production" && (BRr.displayName = "FloatingTreeContext"), QHe = ()=>Pli.useContext(FRr)?.id || null, Knt = (t)=>{
    const e = Pli.useContext(BRr);
    return t ?? e;
};

}
