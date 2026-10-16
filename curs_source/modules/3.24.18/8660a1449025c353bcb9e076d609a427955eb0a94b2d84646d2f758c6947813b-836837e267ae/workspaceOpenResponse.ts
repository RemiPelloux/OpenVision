import { Gae, dCe, k6 } from "./base.ts";
import { KW, Zz } from "./baseHookResponse.ts";
import { E } from "./tslib.es6.js";
var lSm;
export { lSm };
var __wakaru_e41_initialized = false;
export function e41() {
if (__wakaru_e41_initialized) return;
__wakaru_e41_initialized = true;
"use strict";
E(), Gae(), Zz(), lSm = (t)=>{
    const e = KW(t);
    if (!e.isValid) return e;
    const n = [];
    return t.pluginPaths !== void 0 && (Array.isArray(t.pluginPaths) ? t.pluginPaths.forEach((i, r)=>{
        if (!dCe(i)) {
            n.push(`pluginPaths[${r}] must be a string`);
            return;
        }
        i.trim().length === 0 && n.push(`pluginPaths[${r}] must be a non-empty string`);
    }) : n.push("pluginPaths must be an array of strings if provided")), k6(n.length === 0, n);
};

}
