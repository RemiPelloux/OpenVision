import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Vwv;
export { Vwv };
var __wakaru_jwv_initialized = false;
export function jwv() {
if (__wakaru_jwv_initialized) return;
__wakaru_jwv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), Vwv = Nw(mw.piGrepExecutor, (e)=>new kC(e, wC("piGrepArgs"), CC("piGrepResult")), (e, t)=>{
    t.register(new SC(e, EC("piGrepArgs"), TC("piGrepResult")));
});

}
