import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Wwv;
export { Wwv };
var __wakaru_Gwv_initialized = false;
export function Gwv() {
if (__wakaru_Gwv_initialized) return;
__wakaru_Gwv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), Wwv = Nw(mw.piFindExecutor, (e)=>new kC(e, wC("piFindArgs"), CC("piFindResult")), (e, t)=>{
    t.register(new SC(e, EC("piFindArgs"), TC("piFindResult")));
});

}
