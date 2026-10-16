import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { _X } from "./exec_pb.js";
import { WOu } from "./hooks_pb.js";
import { $Je } from "./index_9.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var GMd;
export { GMd };
var __wakaru_bwv_initialized = false;
export function bwv() {
if (__wakaru_bwv_initialized) return;
__wakaru_bwv_initialized = true;
"use strict";
x(), $Je(), _X(), WOu(), aT(), cT(), D1(), F0(), lT(), GMd = Nw(mw.hookExecutor, (e)=>new kC(e, wC("executeHookArgs"), CC("executeHookResult")), (e, t)=>{
    t.register(new SC(e, EC("executeHookArgs"), TC("executeHookResult")));
});

}
