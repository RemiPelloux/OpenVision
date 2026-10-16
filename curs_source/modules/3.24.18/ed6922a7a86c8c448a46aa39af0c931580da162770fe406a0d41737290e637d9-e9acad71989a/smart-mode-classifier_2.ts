import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { U8i } from "./smart_mode_classifier_exec_pb.js";
import { x } from "./tslib.es6.js";
var aCv;
export { aCv };
var __wakaru_cCv_initialized = false;
export function cCv() {
if (__wakaru_cCv_initialized) return;
__wakaru_cCv_initialized = true;
"use strict";
x(), aT(), cT(), D1(), F0(), lT(), U8i(), aCv = Nw(mw.smartModeClassifierExecutor, (e)=>new kC(e, wC("smartModeClassifierArgs"), CC("smartModeClassifierResult")), (e, t)=>{
    t.register(new SC(e, EC("smartModeClassifierArgs"), TC("smartModeClassifierResult")));
});

}
