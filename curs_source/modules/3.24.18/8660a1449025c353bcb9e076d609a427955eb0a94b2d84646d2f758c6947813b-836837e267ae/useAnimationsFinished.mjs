import { xRf } from "./resolveRef.mjs";
import { GSs } from "./stateAttributesMapping.mjs";
import { E } from "./tslib.es6.js";
import { Gxt } from "./useAnimationFrame.mjs";
import { sce } from "./useStableCallback.mjs";
var __wakaru_zSs_initialized = false;
export function zSs() {
if (__wakaru_zSs_initialized) return;
__wakaru_zSs_initialized = true;
"use client";
E(), Gxt(), sce(), xRf(), GSs();

}
