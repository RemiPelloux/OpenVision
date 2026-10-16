import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var QF1;
export { QF1 };
var __wakaru_JF1_initialized = false;
export function JF1() {
if (__wakaru_JF1_initialized) return;
__wakaru_JF1_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), QF1 = BT(pT.agentStoreConflictExecutor, (t)=>new SE(t, kE("agentStoreConflictArgs"), wE("agentStoreConflictResult")), (t, e)=>{
    e.register(new yE(t, TE("agentStoreConflictArgs"), CE("agentStoreConflictResult")));
});

}
