import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var iPe;
export { iPe };
var __wakaru_e91_initialized = false;
export function e91() {
if (__wakaru_e91_initialized) return;
__wakaru_e91_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), iPe = BT(pT.requestContextExecutor, (t)=>new SE(t, kE("requestContextArgs"), wE("requestContextResult")), (t, e)=>{
    e.register(new yE(t, TE("requestContextArgs"), CE("requestContextResult")));
});

}
