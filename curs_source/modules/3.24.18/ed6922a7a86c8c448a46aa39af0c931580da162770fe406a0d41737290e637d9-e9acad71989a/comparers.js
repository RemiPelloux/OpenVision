import { Yf, qC } from "./lazy.js";
import { ba } from "./path_2.js";
import { x } from "./tslib.es6.js";
var xkt, Ikt, iVi, Gao;
export { Gao, Ikt, iVi, xkt };
var __wakaru_set_initialized = false;
export function set() {
if (__wakaru_set_initialized) return;
__wakaru_set_initialized = true;
"use strict";
x(), qC(), ba(), xkt = new Yf(()=>{
    const e = new Intl.Collator(void 0, {
        numeric: !0,
        sensitivity: "base"
    });
    return {
        collator: e,
        collatorIsNumeric: e.resolvedOptions().numeric
    };
}), Ikt = new Yf(()=>({
        collator: new Intl.Collator(void 0, {
            numeric: !0
        })
    })), iVi = new Yf(()=>({
        collator: new Intl.Collator(void 0, {
            numeric: !0,
            sensitivity: "accent"
        })
    })), Gao = /^(.*?)(\.([^.]*))?$/;

}
