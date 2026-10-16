import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var W41;
export { W41 };
var __wakaru_G41_initialized = false;
export function G41() {
if (__wakaru_G41_initialized) return;
__wakaru_G41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), W41 = BT(pT.piGrepExecutor, (t)=>new SE(t, kE("piGrepArgs"), wE("piGrepResult")), (t, e)=>{
    e.register(new yE(t, TE("piGrepArgs"), CE("piGrepResult")));
});

}
