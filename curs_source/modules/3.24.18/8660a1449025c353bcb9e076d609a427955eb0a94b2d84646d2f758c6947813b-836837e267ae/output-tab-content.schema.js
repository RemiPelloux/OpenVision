import { iv, zo } from "./index_16.js";
import { E } from "./tslib.es6.js";
var gcv;
export { gcv };
var __wakaru_ct0_initialized = false;
export function ct0() {
if (__wakaru_ct0_initialized) return;
__wakaru_ct0_initialized = true;
"use strict";
E(), iv(), gcv = {
    outputChannelId: zo.string().optional(),
    outputOpenRequestId: zo.number().optional()
};

}
