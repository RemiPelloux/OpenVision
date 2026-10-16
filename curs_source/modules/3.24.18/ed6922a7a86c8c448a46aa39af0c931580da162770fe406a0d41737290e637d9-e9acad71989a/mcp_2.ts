import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var VMd, jMd, qMd, zMd, KMd, YMd, XMd;
export { KMd, VMd, XMd, YMd, jMd, qMd, zMd };
var __wakaru_ZMd_initialized = false;
export function ZMd() {
if (__wakaru_ZMd_initialized) return;
__wakaru_ZMd_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), VMd = "cursor-ide-browser", jMd = "cursor-dev-control", qMd = new Set([
    jMd,
    VMd
]), zMd = Nw(mw.mcpExecutor, (e)=>new kC(e, wC("mcpArgs"), CC("mcpResult")), (e, t)=>{
    t.register(new SC(e, EC("mcpArgs"), TC("mcpResult")));
}), KMd = Nw(mw.listMcpResourcesExecutor, (e)=>new kC(e, wC("listMcpResourcesExecArgs"), CC("listMcpResourcesExecResult")), (e, t)=>{
    t.register(new SC(e, EC("listMcpResourcesExecArgs"), TC("listMcpResourcesExecResult")));
}), YMd = Nw(mw.readMcpResourceExecutor, (e)=>new kC(e, wC("readMcpResourceExecArgs"), CC("readMcpResourceExecResult")), (e, t)=>{
    t.register(new SC(e, EC("readMcpResourceExecArgs"), TC("readMcpResourceExecResult")));
}), XMd = Nw(mw.mcpStateExecutor, (e)=>new kC(e, wC("mcpStateExecArgs"), CC("mcpStateExecResult")), (e, t)=>{
    t.register(new SC(e, EC("mcpStateExecArgs"), TC("mcpStateExecResult")));
});

}
