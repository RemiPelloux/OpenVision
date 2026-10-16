import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var Nym;
export { Nym };
var __wakaru_Lym_initialized = false;
export function Lym() {
if (__wakaru_Lym_initialized) return;
__wakaru_Lym_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), Nym = BT(pT.deleteExecutor, (t)=>new SE(t, kE("deleteArgs"), wE("deleteResult")), (t, e)=>{
    e.register(new yE(t, TE("deleteArgs"), CE("deleteResult")));
});

}
