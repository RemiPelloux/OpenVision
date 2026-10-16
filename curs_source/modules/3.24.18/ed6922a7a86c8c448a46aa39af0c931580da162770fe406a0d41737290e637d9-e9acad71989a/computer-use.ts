import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var hkv;
export { hkv };
var __wakaru_pkv_initialized = false;
export function pkv() {
if (__wakaru_pkv_initialized) return;
__wakaru_pkv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), hkv = Nw(mw.computerUseExecutor, (e)=>new kC(e, wC("computerUseArgs"), CC("computerUseResult")), (e, t)=>{
    t.register(new SC(e, EC("computerUseArgs"), TC("computerUseResult")));
});

}
