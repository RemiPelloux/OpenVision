import { vKe } from "./formatErrorMessage.mjs";
import { E } from "./tslib.es6.js";
import * as iPf from "./react-runtime/react/esm-index-production.js";
var e1s;
export { e1s };
var __wakaru_PBe_initialized = false;
export function PBe() {
if (__wakaru_PBe_initialized) return;
__wakaru_PBe_initialized = true;
"use client";
E(), vKe(), e1s = iPf.createContext(void 0), process.env.NODE_ENV !== "production" && (e1s.displayName = "PopoverRootContext");

}
