import { i } from "./plugin-brand-icon.js";
import { CS, FY } from "./safeReact.mjs";
import { C0, eg } from "./useRefWithInit.mjs";
function oi(r) {
    const e = eg(gQn).current;
    return e.next = r, yQn(e.effect), e.trampoline;
}
function gQn() {
    const r = {
        next: void 0,
        callback: bQn,
        trampoline: i((...e)=>r.callback?.(...e), "trampoline"),
        effect: i(()=>{
            r.callback = r.next;
        }, "effect")
    };
    return r;
}
function bQn() {
    throw new Error("Base UI: Cannot call an event handler while rendering.");
}
var eIe, yQn;
export { bQn, eIe, gQn, oi, yQn };
var __wakaru_oc_initialized = false;
export function oc() {
if (__wakaru_oc_initialized) return;
__wakaru_oc_initialized = true;
"use client";
FY(), C0(), eIe = CS.useInsertionEffect, yQn = eIe && eIe !== CS.useLayoutEffect ? eIe : (r)=>r(), i(oi, "useStableCallback"), i(gQn, "createStableCallback"), i(bQn, "assertNotCalled");

}
