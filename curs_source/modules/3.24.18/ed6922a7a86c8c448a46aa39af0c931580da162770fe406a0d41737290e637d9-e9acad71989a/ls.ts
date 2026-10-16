import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var IWi;
export { IWi };
var __wakaru_Twv_initialized = false;
export function Twv() {
if (__wakaru_Twv_initialized) return;
__wakaru_Twv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), IWi = Nw(mw.lsExecutor, (e)=>new kC(e, wC("lsArgs"), CC("lsResult")), (e, t)=>{
    t.register(new SC(e, EC("lsArgs"), TC("lsResult")));
});

}
