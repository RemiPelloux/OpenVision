import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var L41;
export { L41 };
var __wakaru_O41_initialized = false;
export function O41() {
if (__wakaru_O41_initialized) return;
__wakaru_O41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), L41 = BT(pT.miniSweAgentBashExecutor, (t)=>new SE(t, kE("miniSweAgentBashArgs"), wE("miniSweAgentBashResult")), (t, e)=>{
    e.register(new yE(t, TE("miniSweAgentBashArgs"), CE("miniSweAgentBashResult")));
});

}
