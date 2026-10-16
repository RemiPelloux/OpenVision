import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var JSv;
export { JSv };
var __wakaru_ekv_initialized = false;
export function ekv() {
if (__wakaru_ekv_initialized) return;
__wakaru_ekv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), JSv = Nw(mw.agentStoreConflictExecutor, (e)=>new kC(e, wC("agentStoreConflictArgs"), CC("agentStoreConflictResult")), (e, t)=>{
    t.register(new SC(e, EC("agentStoreConflictArgs"), TC("agentStoreConflictResult")));
});

}
