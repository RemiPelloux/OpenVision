import { De } from "./De_3.js";
import { kmi } from "./HVr.js";
import { HM } from "./index_191.js";
import { Ze } from "./instantiation.js";
import { B0 } from "./localAgentRepository.js";
import { li } from "./network.js";
import { pd, vn } from "./qIc.js";
import { Li } from "./resources.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { ci } from "./workspace.js";
var D2, ych, Sch, D_o;
export { D2, D_o, Sch, ych };
var __wakaru_a0_initialized = false;
export function a0() {
if (__wakaru_a0_initialized) return;
__wakaru_a0_initialized = true;
"use strict";
x(), li(), Li(), Qt(), Ze(), B0(), ci(), HM(), D2 = pd("workspaceMetadataService"), ych = De.custom((e)=>typeof e == "object" && e !== null && kmi(e), {
    message: "Invalid UriComponents"
}), Sch = De.looseObject({
    displayPath: De.string().optional(),
    path: De.string().nullish(),
    uri: ych.nullish()
}), D_o = vn("workspaceMetadataProviderService");

}
