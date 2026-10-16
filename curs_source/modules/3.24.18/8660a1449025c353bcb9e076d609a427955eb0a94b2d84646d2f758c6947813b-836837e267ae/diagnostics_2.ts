import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var Oym;
export { Oym };
var __wakaru_m61_initialized = false;
export function m61() {
if (__wakaru_m61_initialized) return;
__wakaru_m61_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), Oym = BT(pT.diagnosticsExecutor, (t)=>new SE(t, kE("diagnosticsArgs"), wE("diagnosticsResult")), (t, e)=>{
    e.register(new yE(t, TE("diagnosticsArgs"), CE("diagnosticsResult")));
});

}
