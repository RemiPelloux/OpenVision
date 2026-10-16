import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var Y41;
export { Y41 };
var __wakaru_X41_initialized = false;
export function X41() {
if (__wakaru_X41_initialized) return;
__wakaru_X41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), Y41 = BT(pT.piWriteExecutor, (t)=>new SE(t, kE("piWriteArgs"), wE("piWriteResult")), (t, e)=>{
    e.register(new yE(t, TE("piWriteArgs"), CE("piWriteResult")));
});

}
