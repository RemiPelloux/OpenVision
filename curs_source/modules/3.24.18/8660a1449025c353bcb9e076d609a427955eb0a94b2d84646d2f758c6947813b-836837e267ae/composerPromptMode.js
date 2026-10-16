import { E } from "./tslib.es6.js";
var HTe;
export { HTe };
var __wakaru_aFl_initialized = false;
export function aFl() {
if (__wakaru_aFl_initialized) return;
__wakaru_aFl_initialized = true;
"use strict";
E(), HTe = (t, e)=>{
    if (t === "plan" || t === "debug" || t === "chat") return t;
    if (t === "multitask" && e?.multitaskEnabled !== !1) return "multitask";
};

}
