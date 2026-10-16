import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var F41;
export { F41 };
var __wakaru_B41_initialized = false;
export function B41() {
if (__wakaru_B41_initialized) return;
__wakaru_B41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), F41 = BT(pT.piBashExecutor, (t)=>new SE(t, kE("piBashArgs"), wE("piBashResult")), (t, e)=>{
    e.register(new yE(t, TE("piBashArgs"), CE("piBashResult")));
});

}
