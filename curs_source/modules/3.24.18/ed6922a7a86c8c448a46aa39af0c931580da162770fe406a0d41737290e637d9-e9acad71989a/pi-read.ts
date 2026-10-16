import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Kwv;
export { Kwv };
var __wakaru_Ywv_initialized = false;
export function Ywv() {
if (__wakaru_Ywv_initialized) return;
__wakaru_Ywv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), Kwv = Nw(mw.piReadExecutor, (e)=>new kC(e, wC("piReadArgs"), CC("piReadResult")), (e, t)=>{
    t.register(new SC(e, EC("piReadArgs"), TC("piReadResult")));
});

}
