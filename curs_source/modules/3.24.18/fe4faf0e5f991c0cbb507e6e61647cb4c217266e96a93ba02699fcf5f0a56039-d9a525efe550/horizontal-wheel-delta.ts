import { i } from "./plugin-brand-icon.js";
function EIe({ deltaX: r, deltaY: e, mapVerticalWheelToHorizontal: a, axisBehavior: s = "dominant", mappedBehavior: l = "dominant" }) {
    if (a) {
        let m;
        return l === "dominant" && Math.abs(e) > Math.abs(r) ? m = e : m = r || e, m === 0 ? null : m;
    }
    if (s === "raw") return r === 0 ? null : r;
    const u = Math.abs(r), p = Math.abs(e);
    return r === 0 || u <= p ? null : r;
}
export { EIe };
var __wakaru_itr_initialized = false;
export function itr() {
if (__wakaru_itr_initialized) return;
__wakaru_itr_initialized = true;
"use strict";
i(EIe, "getHorizontalWheelDelta");

}
