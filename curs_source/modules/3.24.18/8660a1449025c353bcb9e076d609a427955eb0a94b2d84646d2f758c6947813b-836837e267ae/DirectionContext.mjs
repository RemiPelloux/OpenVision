import { E } from "./tslib.es6.js";
import * as EPf from "./react-runtime/react/esm-index-production.js";
var ROl;
export { ROl };
var __wakaru_xPf_initialized = false;
export function xPf() {
if (__wakaru_xPf_initialized) return;
__wakaru_xPf_initialized = true;
"use client";
E(), ROl = EPf.createContext(void 0), process.env.NODE_ENV !== "production" && (ROl.displayName = "DirectionContext");

}
