import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var wSm, CSm, TSm, ESm, ISm, xSm, ASm;
export { ASm, CSm, ESm, ISm, TSm, wSm, xSm };
var __wakaru_RSm_initialized = false;
export function RSm() {
if (__wakaru_RSm_initialized) return;
__wakaru_RSm_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), wSm = "cursor-ide-browser", CSm = "cursor-dev-control", TSm = new Set([
    CSm,
    wSm
]), ESm = BT(pT.mcpExecutor, (t)=>new SE(t, kE("mcpArgs"), wE("mcpResult")), (t, e)=>{
    e.register(new yE(t, TE("mcpArgs"), CE("mcpResult")));
}), ISm = BT(pT.listMcpResourcesExecutor, (t)=>new SE(t, kE("listMcpResourcesExecArgs"), wE("listMcpResourcesExecResult")), (t, e)=>{
    e.register(new yE(t, TE("listMcpResourcesExecArgs"), CE("listMcpResourcesExecResult")));
}), xSm = BT(pT.readMcpResourceExecutor, (t)=>new SE(t, kE("readMcpResourceExecArgs"), wE("readMcpResourceExecResult")), (t, e)=>{
    e.register(new yE(t, TE("readMcpResourceExecArgs"), CE("readMcpResourceExecResult")));
}), ASm = BT(pT.mcpStateExecutor, (t)=>new SE(t, kE("mcpStateExecArgs"), wE("mcpStateExecResult")), (t, e)=>{
    e.register(new yE(t, TE("mcpStateExecArgs"), CE("mcpStateExecResult")));
});

}
