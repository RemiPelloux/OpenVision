import { Yu } from "./browser.ts";
import { C_e } from "./cloudTargetIdentity.js";
import { Q3 } from "./displayHelpers.js";
import { Yf, qC } from "./lazy.js";
import { B0 } from "./localAgentRepository.js";
import { x } from "./tslib.es6.js";
var vCh, nQi, iQi, _Ch, djt;
export { _Ch, djt, iQi, nQi, vCh };
var __wakaru_TCt_initialized = false;
export function TCt() {
if (__wakaru_TCt_initialized) return;
__wakaru_TCt_initialized = true;
"use strict";
x(), Yu(), qC(), B0(), C_e(), Q3(), vCh = new Yf(()=>new Intl.Collator(void 0, {
        numeric: !0,
        sensitivity: "base"
    })), nQi = new WeakMap, iQi = [], _Ch = 4, djt = [];

}
