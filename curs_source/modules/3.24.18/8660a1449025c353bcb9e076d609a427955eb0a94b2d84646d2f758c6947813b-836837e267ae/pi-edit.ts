import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var U41;
export { U41 };
var __wakaru_j41_initialized = false;
export function j41() {
if (__wakaru_j41_initialized) return;
__wakaru_j41_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), U41 = BT(pT.piEditExecutor, (t)=>new SE(t, kE("piEditArgs"), wE("piEditResult")), (t, e)=>{
    e.register(new yE(t, TE("piEditArgs"), CE("piEditResult")));
});

}
