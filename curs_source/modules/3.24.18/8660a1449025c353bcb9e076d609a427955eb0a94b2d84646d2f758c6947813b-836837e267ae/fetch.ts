import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var y61;
export { y61 };
var __wakaru_S61_initialized = false;
export function S61() {
if (__wakaru_S61_initialized) return;
__wakaru_S61_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), y61 = BT(pT.fetchExecutor, (t)=>new SE(t, kE("fetchArgs"), wE("fetchResult")), (t, e)=>{
    e.register(new yE(t, TE("fetchArgs"), CE("fetchResult")));
});

}
