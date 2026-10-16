import { FTl, OTl } from "./end-the-call.ts";
import { Prf, Rrf } from "./recall-text-messages.ts";
import { efs, tfs } from "./send-task.ts";
import { BTl, nfs } from "./stay-silent.ts";
import { E } from "./tslib.es6.js";
var KBk;
export { KBk };
var __wakaru_Mrf_initialized = false;
export function Mrf() {
if (__wakaru_Mrf_initialized) return;
__wakaru_Mrf_initialized = true;
"use strict";
E(), FTl(), Prf(), tfs(), BTl(), KBk = [
    efs.definition,
    Rrf.definition,
    nfs.definition,
    OTl.definition
];

}
