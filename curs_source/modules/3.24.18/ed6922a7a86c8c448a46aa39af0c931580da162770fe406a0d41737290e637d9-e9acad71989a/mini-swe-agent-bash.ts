import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Owv;
export { Owv };
var __wakaru_Fwv_initialized = false;
export function Fwv() {
if (__wakaru_Fwv_initialized) return;
__wakaru_Fwv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), Owv = Nw(mw.miniSweAgentBashExecutor, (e)=>new kC(e, wC("miniSweAgentBashArgs"), CC("miniSweAgentBashResult")), (e, t)=>{
    t.register(new SC(e, EC("miniSweAgentBashArgs"), TC("miniSweAgentBashResult")));
});

}
