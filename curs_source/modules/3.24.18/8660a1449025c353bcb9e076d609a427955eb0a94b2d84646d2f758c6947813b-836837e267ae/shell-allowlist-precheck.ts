import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { Zkd } from "./shell_allowlist_precheck_exec_pb.js";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var OSm;
export { OSm };
var __wakaru_i91_initialized = false;
export function i91() {
if (__wakaru_i91_initialized) return;
__wakaru_i91_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), Zkd(), OSm = BT(pT.shellAllowlistPrecheckExecutor, (t)=>new SE(t, kE("shellAllowlistPrecheckArgs"), wE("shellAllowlistPrecheckResult")), (t, e)=>{
    e.register(new yE(t, TE("shellAllowlistPrecheckArgs"), CE("shellAllowlistPrecheckResult")));
});

}
