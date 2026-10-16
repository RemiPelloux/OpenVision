import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var d61;
export { d61 };
var __wakaru_h61_initialized = false;
export function h61() {
if (__wakaru_h61_initialized) return;
__wakaru_h61_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), d61 = BT(pT.computerUseExecutor, (t)=>new SE(t, kE("computerUseArgs"), wE("computerUseResult")), (t, e)=>{
    e.register(new yE(t, TE("computerUseArgs"), CE("computerUseResult")));
});

}
