import { OXt } from "./index.mjs";
import { E } from "./tslib.es6.js";
import { ngw } from "./useEnhancedClickHandler.mjs";
import { sce } from "./useStableCallback.mjs";
var __wakaru_sgw_initialized = false;
export function sgw() {
if (__wakaru_sgw_initialized) return;
__wakaru_sgw_initialized = true;
"use client";
E(), sce(), ngw(), OXt();

}
