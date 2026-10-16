import { Smr } from "./Iwo.js";
import { Il, jn } from "./SZu.js";
import { iv } from "./index_16.js";
import { It } from "./instantiation.js";
import { ub } from "./localAgentRepository.js";
import { Ki } from "./network.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { Sr } from "./workspace.js";
import { ze } from "./ze.js";
var Qg, qVm, zVm, qts;
export { Qg, qVm, qts, zVm };
var __wakaru_Lh_initialized = false;
export function Lh() {
if (__wakaru_Lh_initialized) return;
__wakaru_Lh_initialized = true;
"use strict";
E(), Ki(), Lr(), fn(), It(), ub(), Sr(), iv(), Qg = Il("workspaceMetadataService"), qVm = ze.custom((t)=>typeof t == "object" && t !== null && Smr(t), {
    message: "Invalid UriComponents"
}), zVm = ze.looseObject({
    displayPath: ze.string().optional(),
    path: ze.string().nullish(),
    uri: qVm.nullish()
}), qts = jn("workspaceMetadataProviderService");

}
