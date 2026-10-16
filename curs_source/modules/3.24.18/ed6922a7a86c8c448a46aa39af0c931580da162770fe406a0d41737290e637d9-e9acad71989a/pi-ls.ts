import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var qwv;
export { qwv };
var __wakaru_zwv_initialized = false;
export function zwv() {
if (__wakaru_zwv_initialized) return;
__wakaru_zwv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), qwv = Nw(mw.piLsExecutor, (e)=>new kC(e, wC("piLsArgs"), CC("piLsResult")), (e, t)=>{
    t.register(new SC(e, EC("piLsArgs"), TC("piLsResult")));
});

}
