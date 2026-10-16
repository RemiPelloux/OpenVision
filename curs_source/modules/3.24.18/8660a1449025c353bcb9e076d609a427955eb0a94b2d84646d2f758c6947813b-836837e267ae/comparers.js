import { ES, hP } from "./lazy.js";
import { Ul } from "./path_2.js";
import { E } from "./tslib.es6.js";
var MGt, bU1, yU1, ZCm;
export { MGt, ZCm, bU1, yU1 };
var __wakaru_oEn_initialized = false;
export function oEn() {
if (__wakaru_oEn_initialized) return;
__wakaru_oEn_initialized = true;
"use strict";
E(), hP(), Ul(), MGt = new ES(()=>{
    const t = new Intl.Collator(void 0, {
        numeric: !0,
        sensitivity: "base"
    });
    return {
        collator: t,
        collatorIsNumeric: t.resolvedOptions().numeric
    };
}), bU1 = new ES(()=>({
        collator: new Intl.Collator(void 0, {
            numeric: !0
        })
    })), yU1 = new ES(()=>({
        collator: new Intl.Collator(void 0, {
            numeric: !0,
            sensitivity: "accent"
        })
    })), ZCm = /^(.*?)(\.([^.]*))?$/;

}
