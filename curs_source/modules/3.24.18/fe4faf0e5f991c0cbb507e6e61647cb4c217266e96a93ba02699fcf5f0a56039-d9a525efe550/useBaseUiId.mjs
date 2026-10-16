import { i } from "./plugin-brand-icon.js";
import { uP, zY } from "./useId.mjs";
function Vp(r) {
    return uP(r, "base-ui");
}
export { Vp };
var __wakaru_ef_initialized = false;
export function ef() {
if (__wakaru_ef_initialized) return;
__wakaru_ef_initialized = true;
"use client";
zY(), i(Vp, "useBaseUiId");

}
