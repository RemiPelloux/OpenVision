import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var q41;
export { q41 };
var __wakaru_z41_initialized = false;
export function z41() {
if (__wakaru_z41_initialized) return;
__wakaru_z41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), q41 = BT(pT.piLsExecutor, (t)=>new SE(t, kE("piLsArgs"), wE("piLsResult")), (t, e)=>{
    e.register(new yE(t, TE("piLsArgs"), CE("piLsResult")));
});

}
