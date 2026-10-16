import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { SC, aT } from "./controlled_2.ts";
import { LMn } from "./read_exec_pb.js";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { x } from "./tslib.es6.js";
var Iwv, AWi, Awv;
export { AWi, Awv, Iwv };
var __wakaru_JMd_initialized = false;
export function JMd() {
if (__wakaru_JMd_initialized) return;
__wakaru_JMd_initialized = true;
"use strict";
x(), LMn(), aT(), cT(), D1(), F0(), lT(), Iwv = new TextEncoder, AWi = Nw(mw.readExecutor, (e)=>new kC(e, wC("readArgs"), CC("readResult")), (e, t)=>{
    t.register(new SC(e, EC("readArgs"), TC("readResult")));
}), Awv = Nw(mw.redactedReadExecutor, (e)=>new kC(e, wC("redactedReadArgs"), CC("redactedReadResult")), (e, t)=>{
    t.register(new SC(e, EC("redactedReadArgs"), TC("redactedReadResult")));
});

}
