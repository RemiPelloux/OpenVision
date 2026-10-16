import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { SYs } from "./mcp_allowlist_precheck_exec_pb.js";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var QMd;
export { QMd };
var __wakaru_Ewv_initialized = false;
export function Ewv() {
if (__wakaru_Ewv_initialized) return;
__wakaru_Ewv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), SYs(), QMd = Nw(mw.mcpAllowlistPrecheckExecutor, (e)=>new kC(e, wC("mcpAllowlistPrecheckArgs"), CC("mcpAllowlistPrecheckResult")), (e, t)=>{
    t.register(new SC(e, EC("mcpAllowlistPrecheckArgs"), TC("mcpAllowlistPrecheckResult")));
});

}
