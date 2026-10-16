import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var a_e;
export { a_e };
var __wakaru_tCv_initialized = false;
export function tCv() {
if (__wakaru_tCv_initialized) return;
__wakaru_tCv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), a_e = Nw(mw.requestContextExecutor, (e)=>new kC(e, wC("requestContextArgs"), CC("requestContextResult")), (e, t)=>{
    t.register(new SC(e, EC("requestContextArgs"), TC("requestContextResult")));
});

}
