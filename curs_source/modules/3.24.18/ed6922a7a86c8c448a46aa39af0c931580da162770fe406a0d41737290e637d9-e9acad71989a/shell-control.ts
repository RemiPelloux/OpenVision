import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var aso;
export { aso };
var __wakaru_sCv_initialized = false;
export function sCv() {
if (__wakaru_sCv_initialized) return;
__wakaru_sCv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), aso = Nw(mw.forceBackgroundShellExecutor, (e)=>new kC(e, wC("forceBackgroundShellArgs"), CC("forceBackgroundShellResult")), (e, t)=>{
    t.register(new SC(e, EC("forceBackgroundShellArgs"), TC("forceBackgroundShellResult")));
});

}
