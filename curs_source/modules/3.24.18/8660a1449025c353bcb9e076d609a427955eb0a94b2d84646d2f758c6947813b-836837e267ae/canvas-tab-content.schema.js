import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var scv;
export { scv };
var __wakaru_Qe0_initialized = false;
export function Qe0() {
if (__wakaru_Qe0_initialized) return;
__wakaru_Qe0_initialized = true;
"use strict";
E(), iv(), scv = {
    canvasPath: ze.string().optional(),
    sourceAgentId: ze.string().optional(),
    sourceResource: ze.string().optional(),
    ownerAgentId: ze.string().optional(),
    canvasShareUrl: ze.string().optional(),
    cloudCanvasAddress: ze.string().optional(),
    cloudCanvasTitle: ze.string().optional(),
    previewEpoch: ze.number().optional()
};

}
