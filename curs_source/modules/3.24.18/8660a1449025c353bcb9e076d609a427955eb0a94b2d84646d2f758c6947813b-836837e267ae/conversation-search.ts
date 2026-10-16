import { wA, yE } from "./controlled_2.ts";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var Dym;
export { Dym };
var __wakaru_p61_initialized = false;
export function p61() {
if (__wakaru_p61_initialized) return;
__wakaru_p61_initialized = true;
"use strict";
E(), wA(), CA(), Bx(), zI(), TA(), Dym = BT(pT.conversationSearchExecutor, (t)=>new SE(t, kE("conversationSearchArgs"), wE("conversationSearchResult")), (t, e)=>{
    e.register(new yE(t, TE("conversationSearchArgs"), CE("conversationSearchResult")));
});

}
