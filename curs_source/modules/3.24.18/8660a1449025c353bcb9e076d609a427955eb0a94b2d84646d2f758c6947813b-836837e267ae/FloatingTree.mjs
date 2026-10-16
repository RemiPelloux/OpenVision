import { g3i } from "./BA.js";
import { Whw } from "./FloatingTreeStore.mjs";
import { E } from "./tslib.es6.js";
import { DG } from "./useIsoLayoutEffect.mjs";
import { jxt } from "./useRefWithInit.mjs";
import * as v3i from "./react-runtime/react/esm-index-production.js";
var BSs, USs, $Xt, HXt;
export { $Xt, BSs, HXt, USs };
var __wakaru_Yxt_initialized = false;
export function Yxt() {
if (__wakaru_Yxt_initialized) return;
__wakaru_Yxt_initialized = true;
"use client";
E(), g3i(), DG(), jxt(), Whw(), BSs = v3i.createContext(null), process.env.NODE_ENV !== "production" && (BSs.displayName = "FloatingNodeContext"), USs = v3i.createContext(null), process.env.NODE_ENV !== "production" && (USs.displayName = "FloatingTreeContext"), $Xt = ()=>v3i.useContext(BSs)?.id || null, HXt = (t)=>{
    const e = v3i.useContext(USs);
    return t ?? e;
};

}
