import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var iMd;
export { iMd };
var __wakaru_gkv_initialized = false;
export function gkv() {
if (__wakaru_gkv_initialized) return;
__wakaru_gkv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), iMd = Nw(mw.diagnosticsExecutor, (e)=>new kC(e, wC("diagnosticsArgs"), CC("diagnosticsResult")), (e, t)=>{
    t.register(new SC(e, EC("diagnosticsArgs"), TC("diagnosticsResult")));
});

}
