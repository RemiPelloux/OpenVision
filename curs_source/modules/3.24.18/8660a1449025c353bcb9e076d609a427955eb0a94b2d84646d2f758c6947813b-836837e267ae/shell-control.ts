import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var f7a;
export { f7a };
var __wakaru_r91_initialized = false;
export function r91() {
if (__wakaru_r91_initialized) return;
__wakaru_r91_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), f7a = BT(pT.forceBackgroundShellExecutor, (t)=>new SE(t, kE("forceBackgroundShellArgs"), wE("forceBackgroundShellResult")), (t, e)=>{
    e.register(new yE(t, TE("forceBackgroundShellArgs"), CE("forceBackgroundShellResult")));
});

}
