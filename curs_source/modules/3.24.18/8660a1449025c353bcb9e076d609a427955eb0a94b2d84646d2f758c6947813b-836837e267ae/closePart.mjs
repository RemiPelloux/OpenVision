import { E } from "./tslib.es6.js";
import { DG } from "./useIsoLayoutEffect.mjs";
import { sce } from "./useStableCallback.mjs";
import * as u1s from "./react-runtime/react/esm-index-production.js";
var d1s;
export { d1s };
var __wakaru_tMf_initialized = false;
export function tMf() {
if (__wakaru_tMf_initialized) return;
__wakaru_tMf_initialized = true;
"use client";
E(), DG(), sce(), d1s = u1s.createContext(void 0), process.env.NODE_ENV !== "production" && (d1s.displayName = "ClosePartContext");

}
