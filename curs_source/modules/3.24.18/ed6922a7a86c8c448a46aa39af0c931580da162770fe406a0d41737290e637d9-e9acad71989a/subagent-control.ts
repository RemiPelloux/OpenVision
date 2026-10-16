import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var vso;
export { vso };
var __wakaru_YCv_initialized = false;
export function YCv() {
if (__wakaru_YCv_initialized) return;
__wakaru_YCv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), vso = Nw(mw.forceBackgroundSubagentExecutor, (e)=>new kC(e, wC("forceBackgroundSubagentArgs"), CC("forceBackgroundSubagentResult")), (e, t)=>{
    t.register(new SC(e, EC("forceBackgroundSubagentArgs"), TC("forceBackgroundSubagentResult")));
});

}
