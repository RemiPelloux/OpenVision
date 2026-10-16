import { x } from "./tslib.es6.js";
var Tsh, Esh, xsh, Ish, Ash;
export { Ash, Esh, Ish, Tsh, xsh };
var __wakaru_VBv_initialized = false;
export function VBv() {
if (__wakaru_VBv_initialized) return;
__wakaru_VBv_initialized = true;
"use strict";
x(), Tsh = ({ inParallel: e })=>e ? "Build Plan in Parallel" : "Build", Esh = ({ explicitTitle: e, resolvedTitle: t })=>e?.trim() || t?.trim() || "Plan", xsh = ({ explicitTitle: e })=>(e?.trim() ?? "") === "", Ish = (e)=>{
    switch(e){
        case "pending":
        case "in_progress":
        case "completed":
        case "cancelled":
            return e;
        default:
            return "pending";
    }
}, Ash = (e, t)=>({
        id: e.id !== void 0 && e.id.length > 0 ? e.id : `todo:${t}`,
        content: e.content ?? "",
        status: Ish(e.status ?? "")
    });

}
