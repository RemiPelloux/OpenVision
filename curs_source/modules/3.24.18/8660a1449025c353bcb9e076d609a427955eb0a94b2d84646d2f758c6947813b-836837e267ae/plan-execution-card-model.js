import { E } from "./tslib.es6.js";
var qGm, zGm, VGm, KGm, YGm;
export { KGm, VGm, YGm, qGm, zGm };
var __wakaru_atk_initialized = false;
export function atk() {
if (__wakaru_atk_initialized) return;
__wakaru_atk_initialized = true;
"use strict";
E(), qGm = ({ inParallel: t })=>t ? "Build Plan in Parallel" : "Build", zGm = ({ explicitTitle: t, resolvedTitle: e })=>t?.trim() || e?.trim() || "Plan", VGm = ({ explicitTitle: t })=>(t?.trim() ?? "") === "", KGm = (t)=>{
    switch(t){
        case "pending":
        case "in_progress":
        case "completed":
        case "cancelled":
            return t;
        default:
            return "pending";
    }
}, YGm = (t, e)=>({
        id: t.id !== void 0 && t.id.length > 0 ? t.id : `todo:${e}`,
        content: t.content ?? "",
        status: KGm(t.status ?? "")
    });

}
