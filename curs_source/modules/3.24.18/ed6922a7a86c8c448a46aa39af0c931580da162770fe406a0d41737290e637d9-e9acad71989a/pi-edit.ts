import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var $wv;
export { $wv };
var __wakaru_Hwv_initialized = false;
export function Hwv() {
if (__wakaru_Hwv_initialized) return;
__wakaru_Hwv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), $wv = Nw(mw.piEditExecutor, (e)=>new kC(e, wC("piEditArgs"), CC("piEditResult")), (e, t)=>{
    t.register(new SC(e, EC("piEditArgs"), TC("piEditResult")));
});

}
