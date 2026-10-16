import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Bwv;
export { Bwv };
var __wakaru_Uwv_initialized = false;
export function Uwv() {
if (__wakaru_Uwv_initialized) return;
__wakaru_Uwv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), Bwv = Nw(mw.piBashExecutor, (e)=>new kC(e, wC("piBashArgs"), CC("piBashResult")), (e, t)=>{
    t.register(new SC(e, EC("piBashArgs"), TC("piBashResult")));
});

}
