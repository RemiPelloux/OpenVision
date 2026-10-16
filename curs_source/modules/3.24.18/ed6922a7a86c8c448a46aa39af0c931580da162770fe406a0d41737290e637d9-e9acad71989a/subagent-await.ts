import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var TPd;
export { TPd };
var __wakaru_KCv_initialized = false;
export function KCv() {
if (__wakaru_KCv_initialized) return;
__wakaru_KCv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), TPd = Nw(mw.subagentAwaitExecutor, (e)=>new kC(e, wC("subagentAwaitArgs"), CC("subagentAwaitResult")), (e, t)=>{
    t.register(new SC(e, EC("subagentAwaitArgs"), TC("subagentAwaitResult")));
});

}
