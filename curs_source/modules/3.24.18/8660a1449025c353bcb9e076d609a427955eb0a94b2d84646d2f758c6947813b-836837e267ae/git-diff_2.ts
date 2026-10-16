import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var Fym;
export { Fym };
var __wakaru_k61_initialized = false;
export function k61() {
if (__wakaru_k61_initialized) return;
__wakaru_k61_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), Fym = BT(pT.gitDiffExecutor, (t)=>new SE(t, kE("gitDiffRequest"), wE("gitDiffResponse")), (t, e)=>{
    e.register(new yE(t, TE("gitDiffRequest"), CE("gitDiffResponse")));
});

}
