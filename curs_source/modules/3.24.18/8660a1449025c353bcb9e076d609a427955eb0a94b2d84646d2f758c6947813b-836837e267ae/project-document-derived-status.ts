import { B5p } from "./ipa.js";
import { E } from "./tslib.es6.js";
var U5p, j5p, vOa;
export { U5p, j5p, vOa };
var __wakaru_iM1_initialized = false;
export function iM1() {
if (__wakaru_iM1_initialized) return;
__wakaru_iM1_initialized = true;
"use strict";
E(), U5p = new Map, j5p = [
    {
        id: "merged-prs-done",
        propose: (t, { pullRequests: e }, n)=>{
            const i = e.includes("merged"), r = e.every((s)=>s === "merged" || s === "closed");
            return i && r ? n.statuses.find((s)=>s.complete) : void 0;
        }
    },
    {
        id: "agent-running-in-progress",
        propose: (t, { agents: e }, n)=>{
            const i = t.status.id === "queued" || t.status.id === "for-review", r = e.includes("running");
            return i && r ? B5p(n, "in-progress") : void 0;
        }
    },
    {
        id: "agent-idle-open-pr-for-review",
        propose: (t, { agents: e, pullRequests: n }, i)=>{
            const r = t.status.id === "in-progress", s = n.includes("open"), o = e.length > 0 && e.every((a)=>a === "idle");
            return r && s && o ? B5p(i, "for-review") : void 0;
        }
    }
], vOa = new WeakMap;

}
