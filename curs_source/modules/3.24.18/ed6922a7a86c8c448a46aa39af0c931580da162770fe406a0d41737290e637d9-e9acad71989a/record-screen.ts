import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Jwv;
export { Jwv };
var __wakaru_eCv_initialized = false;
export function eCv() {
if (__wakaru_eCv_initialized) return;
__wakaru_eCv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), Jwv = Nw(mw.recordScreenExecutor, (e)=>new kC(e, wC("recordScreenArgs"), CC("recordScreenResult")), (e, t)=>{
    t.register(new SC(e, EC("recordScreenArgs"), TC("recordScreenResult")));
});

}
