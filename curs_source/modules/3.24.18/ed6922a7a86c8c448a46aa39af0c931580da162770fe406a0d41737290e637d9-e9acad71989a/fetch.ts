import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Skv;
export { Skv };
var __wakaru_kkv_initialized = false;
export function kkv() {
if (__wakaru_kkv_initialized) return;
__wakaru_kkv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), Skv = Nw(mw.fetchExecutor, (e)=>new kC(e, wC("fetchArgs"), CC("fetchResult")), (e, t)=>{
    t.register(new SC(e, EC("fetchArgs"), TC("fetchResult")));
});

}
