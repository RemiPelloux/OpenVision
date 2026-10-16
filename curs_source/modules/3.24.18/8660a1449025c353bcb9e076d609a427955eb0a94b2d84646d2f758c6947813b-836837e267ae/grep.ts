import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var Bym;
export { Bym };
var __wakaru_w61_initialized = false;
export function w61() {
if (__wakaru_w61_initialized) return;
__wakaru_w61_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), Bym = BT(pT.grepExecutor, (t)=>new SE(t, kE("grepArgs"), wE("grepResult")), (t, e)=>{
    e.register(new yE(t, TE("grepArgs"), CE("grepResult")));
});

}
