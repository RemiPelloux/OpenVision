import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var tYr;
export { tYr };
var __wakaru_C41_initialized = false;
export function C41() {
if (__wakaru_C41_initialized) return;
__wakaru_C41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), tYr = BT(pT.lsExecutor, (t)=>new SE(t, kE("lsArgs"), wE("lsResult")), (t, e)=>{
    e.register(new yE(t, TE("lsArgs"), CE("lsResult")));
});

}
