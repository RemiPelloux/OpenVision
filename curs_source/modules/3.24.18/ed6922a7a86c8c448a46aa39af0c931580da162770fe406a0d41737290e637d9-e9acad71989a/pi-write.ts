import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Xwv;
export { Xwv };
var __wakaru_Zwv_initialized = false;
export function Zwv() {
if (__wakaru_Zwv_initialized) return;
__wakaru_Zwv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), Xwv = Nw(mw.piWriteExecutor, (e)=>new kC(e, wC("piWriteArgs"), CC("piWriteResult")), (e, t)=>{
    t.register(new SC(e, EC("piWriteArgs"), TC("piWriteResult")));
});

}
