import { s5l } from "./BA.js";
import { o5l } from "./mentionMenuTelemetry.js";
import { YFi } from "./menu-access-context-service.js";
import { E } from "./tslib.es6.js";
var yEv, P2s, SEv, kEv;
export { P2s, SEv, kEv, yEv };
var __wakaru_YC0_initialized = false;
export function YC0() {
if (__wakaru_YC0_initialized) return;
__wakaru_YC0_initialized = true;
"use strict";
E(), o5l(), YFi(), yEv = new Set([
    "mode",
    "action"
]), P2s = (t)=>!yEv.has(t), SEv = {
    slash: P2s,
    mention: s5l
}, kEv = {
    slash: [
        "skill",
        "command",
        "subagent"
    ],
    mention: []
};

}
