import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var eMd;
export { eMd };
var __wakaru_mkv_initialized = false;
export function mkv() {
if (__wakaru_mkv_initialized) return;
__wakaru_mkv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), eMd = Nw(mw.conversationSearchExecutor, (e)=>new kC(e, wC("conversationSearchArgs"), CC("conversationSearchResult")), (e, t)=>{
    t.register(new SC(e, EC("conversationSearchArgs"), TC("conversationSearchResult")));
});

}
