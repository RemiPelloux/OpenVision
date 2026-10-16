import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { O2u } from "./shell_allowlist_precheck_exec_pb.js";
import { x } from "./tslib.es6.js";
var iPd;
export { iPd };
var __wakaru_rCv_initialized = false;
export function rCv() {
if (__wakaru_rCv_initialized) return;
__wakaru_rCv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), O2u(), iPd = Nw(mw.shellAllowlistPrecheckExecutor, (e)=>new kC(e, wC("shellAllowlistPrecheckArgs"), CC("shellAllowlistPrecheckResult")), (e, t)=>{
    t.register(new SC(e, EC("shellAllowlistPrecheckArgs"), TC("shellAllowlistPrecheckResult")));
});

}
