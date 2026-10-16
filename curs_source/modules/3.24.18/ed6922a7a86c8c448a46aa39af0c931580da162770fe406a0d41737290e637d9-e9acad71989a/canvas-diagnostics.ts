import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var JDd;
export { JDd };
var __wakaru_ukv_initialized = false;
export function ukv() {
if (__wakaru_ukv_initialized) return;
__wakaru_ukv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), JDd = Nw(mw.canvasDiagnosticsExecutor, (e)=>new kC(e, wC("canvasDiagnosticsArgs"), CC("canvasDiagnosticsResult")), (e, t)=>{
    t.register(new SC(e, EC("canvasDiagnosticsArgs"), TC("canvasDiagnosticsResult")));
});

}
