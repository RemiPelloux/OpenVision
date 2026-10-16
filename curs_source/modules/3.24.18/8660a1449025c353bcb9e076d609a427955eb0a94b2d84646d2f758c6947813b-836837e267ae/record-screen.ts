import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var Q41;
export { Q41 };
var __wakaru_J41_initialized = false;
export function J41() {
if (__wakaru_J41_initialized) return;
__wakaru_J41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), Q41 = BT(pT.recordScreenExecutor, (t)=>new SE(t, kE("recordScreenArgs"), wE("recordScreenResult")), (t, e)=>{
    e.register(new yE(t, TE("recordScreenArgs"), CE("recordScreenResult")));
});

}
