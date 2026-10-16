import { iv, zo } from "./index_16.js";
import { E } from "./tslib.es6.js";
var Xmv;
export { Xmv };
var __wakaru_Hl0_initialized = false;
export function Hl0() {
if (__wakaru_Hl0_initialized) return;
__wakaru_Hl0_initialized = true;
"use strict";
E(), iv(), Xmv = {
    customLabel: zo.string().optional(),
    ownerAgentId: zo.string().optional(),
    terminalPersistenceId: zo.string().optional(),
    terminalId: zo.number().optional(),
    preview: zo.boolean().optional(),
    workspaceGroupKey: zo.string().optional(),
    agentControlled: zo.boolean().optional()
};

}
