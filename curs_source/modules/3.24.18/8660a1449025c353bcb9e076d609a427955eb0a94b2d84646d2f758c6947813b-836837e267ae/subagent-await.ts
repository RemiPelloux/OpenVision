import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var e1m;
export { e1m };
var __wakaru_V91_initialized = false;
export function V91() {
if (__wakaru_V91_initialized) return;
__wakaru_V91_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), e1m = BT(pT.subagentAwaitExecutor, (t)=>new SE(t, kE("subagentAwaitArgs"), wE("subagentAwaitResult")), (t, e)=>{
    e.register(new yE(t, TE("subagentAwaitArgs"), CE("subagentAwaitResult")));
});

}
