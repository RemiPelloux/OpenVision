import { wA, yE } from "./controlled_2.ts";
import { Xse } from "./exec_pb.js";
import { i0d } from "./hooks_pb.js";
import { tCt } from "./index_9.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var kSm;
export { kSm };
var __wakaru__41_initialized = false;
export function _41() {
if (__wakaru__41_initialized) return;
__wakaru__41_initialized = true;
"use strict";
E(), tCt(), Xse(), i0d(), wA(), CA(), Bx(), zI(), TA(), kSm = BT(pT.hookExecutor, (t)=>new SE(t, kE("executeHookArgs"), wE("executeHookResult")), (t, e)=>{
    e.register(new yE(t, TE("executeHookArgs"), CE("executeHookResult")));
});

}
