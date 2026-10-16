import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var PHt;
export { PHt };
var __wakaru_ePd_initialized = false;
export function ePd() {
if (__wakaru_ePd_initialized) return;
__wakaru_ePd_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), PHt = Nw(mw.shellExecutor, (e)=>new kC(e, wC("shellArgs"), CC("shellResult")), (e, t)=>{
    t.register(new SC(e, EC("shellArgs"), TC("shellResult")));
});

}
