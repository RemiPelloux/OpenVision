import { Tde, wN, wX } from "./base.ts";
import { R6, VU } from "./baseHookResponse.ts";
import { x } from "./tslib.es6.js";
var AMd;
export { AMd };
var __wakaru_twv_initialized = false;
export function twv() {
if (__wakaru_twv_initialized) return;
__wakaru_twv_initialized = true;
"use strict";
x(), wX(), VU(), AMd = (e)=>{
    const t = R6(e);
    if (!t.isValid) return t;
    const n = [];
    return e.pluginPaths !== void 0 && (Array.isArray(e.pluginPaths) ? e.pluginPaths.forEach((i, r)=>{
        if (!Tde(i)) {
            n.push(`pluginPaths[${r}] must be a string`);
            return;
        }
        i.trim().length === 0 && n.push(`pluginPaths[${r}] must be a non-empty string`);
    }) : n.push("pluginPaths must be an array of strings if provided")), wN(n.length === 0, n);
};

}
