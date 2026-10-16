import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var $41;
export { $41 };
var __wakaru_H41_initialized = false;
export function H41() {
if (__wakaru_H41_initialized) return;
__wakaru_H41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), $41 = BT(pT.piFindExecutor, (t)=>new SE(t, kE("piFindArgs"), wE("piFindResult")), (t, e)=>{
    e.register(new yE(t, TE("piFindArgs"), CE("piFindResult")));
});

}
