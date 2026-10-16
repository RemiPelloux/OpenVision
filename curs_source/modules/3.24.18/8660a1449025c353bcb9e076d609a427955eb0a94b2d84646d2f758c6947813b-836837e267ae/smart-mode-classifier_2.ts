import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { C1r } from "./smart_mode_classifier_exec_pb.js";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var o91;
export { o91 };
var __wakaru_a91_initialized = false;
export function a91() {
if (__wakaru_a91_initialized) return;
__wakaru_a91_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), C1r(), o91 = BT(pT.smartModeClassifierExecutor, (t)=>new SE(t, kE("smartModeClassifierArgs"), wE("smartModeClassifierResult")), (t, e)=>{
    e.register(new yE(t, TE("smartModeClassifierArgs"), CE("smartModeClassifierResult")));
});

}
