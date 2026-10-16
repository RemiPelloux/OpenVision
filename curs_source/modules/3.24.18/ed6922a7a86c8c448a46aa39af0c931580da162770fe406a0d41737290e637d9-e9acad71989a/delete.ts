import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var tMd;
export { tMd };
var __wakaru_nMd_initialized = false;
export function nMd() {
if (__wakaru_nMd_initialized) return;
__wakaru_nMd_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), tMd = Nw(mw.deleteExecutor, (e)=>new kC(e, wC("deleteArgs"), CC("deleteResult")), (e, t)=>{
    t.register(new SC(e, EC("deleteArgs"), TC("deleteResult")));
});

}
