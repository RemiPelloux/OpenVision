import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { ewd } from "./web_fetch_allowlist_precheck_exec_pb.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var s1m;
export { s1m };
var __wakaru_sB1_initialized = false;
export function sB1() {
if (__wakaru_sB1_initialized) return;
__wakaru_sB1_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), ewd(), s1m = BT(pT.webFetchAllowlistPrecheckExecutor, (t)=>new SE(t, kE("webFetchAllowlistPrecheckArgs"), wE("webFetchAllowlistPrecheckResult")), (t, e)=>{
    e.register(new yE(t, TE("webFetchAllowlistPrecheckArgs"), CE("webFetchAllowlistPrecheckResult")));
});

}
