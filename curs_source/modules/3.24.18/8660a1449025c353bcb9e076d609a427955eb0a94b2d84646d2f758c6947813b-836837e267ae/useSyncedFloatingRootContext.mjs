import { WSs } from "./FloatingRootStore.mjs";
import { t8 } from "./floating-ui.utils.dom.mjs";
import { E } from "./tslib.es6.js";
import { DG } from "./useIsoLayoutEffect.mjs";
var __wakaru_nmw_initialized = false;
export function nmw() {
if (__wakaru_nmw_initialized) return;
__wakaru_nmw_initialized = true;
"use client";
E(), DG(), t8(), WSs();

}
