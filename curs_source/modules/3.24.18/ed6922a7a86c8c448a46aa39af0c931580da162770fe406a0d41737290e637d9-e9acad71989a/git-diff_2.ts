import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var rMd;
export { rMd };
var __wakaru_wkv_initialized = false;
export function wkv() {
if (__wakaru_wkv_initialized) return;
__wakaru_wkv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), rMd = Nw(mw.gitDiffExecutor, (e)=>new kC(e, wC("gitDiffRequest"), CC("gitDiffResponse")), (e, t)=>{
    t.register(new SC(e, EC("gitDiffRequest"), TC("gitDiffResponse")));
});

}
