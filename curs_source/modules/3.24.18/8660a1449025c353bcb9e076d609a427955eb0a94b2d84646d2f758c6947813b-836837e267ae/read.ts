import { wA, yE } from "./controlled_2.ts";
import { zni } from "./read_exec_pb.js";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var I41, nYr, x41;
export { I41, nYr, x41 };
var __wakaru_MSm_initialized = false;
export function MSm() {
if (__wakaru_MSm_initialized) return;
__wakaru_MSm_initialized = true;
"use strict";
E(), zni(), wA(), CA(), Bx(), zI(), TA(), I41 = new TextEncoder, nYr = BT(pT.readExecutor, (t)=>new SE(t, kE("readArgs"), wE("readResult")), (t, e)=>{
    e.register(new yE(t, TE("readArgs"), CE("readResult")));
}), x41 = BT(pT.redactedReadExecutor, (t)=>new SE(t, kE("redactedReadArgs"), wE("redactedReadResult")), (t, e)=>{
    e.register(new yE(t, TE("redactedReadArgs"), CE("redactedReadResult")));
});

}
