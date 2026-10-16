import { CC, EC, Nw, TC, wC } from "./A3u.js";
import { I$ } from "./De_3.js";
import { SC, aT } from "./controlled_2.ts";
import { z3 } from "./index_10.ts";
import { Gp } from "./index_3.ts";
import { cT, kC } from "./remote.ts";
import { D1, mw } from "./resource-names.ts";
import { F0 } from "./resource-provider.ts";
import { lT } from "./serialization.ts";
import { $Me } from "./subagent_exec_pb.js";
import { Pj } from "./subagents_pb.js";
import { x } from "./tslib.es6.js";
var WLn, qCv, kPd, fso, wPd, CPd;
export { CPd, WLn, fso, kPd, qCv, wPd };
var __wakaru_zCv_initialized = false;
export function zCv() {
if (__wakaru_zCv_initialized) return;
__wakaru_zCv_initialized = true;
"use strict";
x(), z3(), Gp(), $Me(), aT(), cT(), D1(), F0(), lT(), $Me(), Pj(), WLn = "Sub-agent is currently running. You may send the follow-up message when it has completed.", qCv = I$(Symbol("pendingSubagentReplay"), void 0), kPd = "If you intended to interrupt this agent, you may retry with `interrupt` set to true", fso = class extends Error {
    constructor(e, t){
        super(e), this.name = "SubagentHostError", this.agentId = t?.agentId, this.cause = t?.cause;
    }
}, wPd = 1e3, CPd = Nw(mw.subagentExecutor, (e)=>new kC(e, wC("subagentArgs"), CC("subagentResult")), (e, t)=>{
    t.register(new SC(e, EC("subagentArgs"), TC("subagentResult")));
});

}
