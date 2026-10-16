import { wA, yE } from "./controlled_2.ts";
import { c9o } from "./mcp_allowlist_precheck_exec_pb.js";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var PSm;
export { PSm };
var __wakaru_T41_initialized = false;
export function T41() {
if (__wakaru_T41_initialized) return;
__wakaru_T41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), c9o(), PSm = BT(pT.mcpAllowlistPrecheckExecutor, (t)=>new SE(t, kE("mcpAllowlistPrecheckArgs"), wE("mcpAllowlistPrecheckResult")), (t, e)=>{
    e.register(new yE(t, TE("mcpAllowlistPrecheckArgs"), CE("mcpAllowlistPrecheckResult")));
});

}
