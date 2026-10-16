import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var LHt;
export { LHt };
var __wakaru_nPd_initialized = false;
export function nPd() {
if (__wakaru_nPd_initialized) return;
__wakaru_nPd_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), LHt = Nw(mw.writeExecutor, (e)=>new kC(e, wC("writeArgs"), CC("writeResult")), (e, t)=>{
    t.register(new SC(e, EC("writeArgs"), TC("writeResult")));
});

}
