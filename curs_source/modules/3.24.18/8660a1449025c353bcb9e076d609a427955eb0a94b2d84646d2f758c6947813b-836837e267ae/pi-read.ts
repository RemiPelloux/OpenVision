import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var V41;
export { V41 };
var __wakaru_K41_initialized = false;
export function K41() {
if (__wakaru_K41_initialized) return;
__wakaru_K41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), V41 = BT(pT.piReadExecutor, (t)=>new SE(t, kE("piReadArgs"), wE("piReadResult")), (t, e)=>{
    e.register(new yE(t, TE("piReadArgs"), CE("piReadResult")));
});

}
