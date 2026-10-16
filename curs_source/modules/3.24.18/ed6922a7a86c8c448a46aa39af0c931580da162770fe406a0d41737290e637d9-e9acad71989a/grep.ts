import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var sMd;
export { sMd };
var __wakaru_Ckv_initialized = false;
export function Ckv() {
if (__wakaru_Ckv_initialized) return;
__wakaru_Ckv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), sMd = Nw(mw.grepExecutor, (e)=>new kC(e, wC("grepArgs"), CC("grepResult")), (e, t)=>{
    t.register(new SC(e, EC("grepArgs"), TC("grepResult")));
});

}
