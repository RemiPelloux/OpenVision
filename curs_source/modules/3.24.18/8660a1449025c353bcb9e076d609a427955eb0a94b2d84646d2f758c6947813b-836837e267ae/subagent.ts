import { wA, yE } from "./controlled_2.ts";
import { FO } from "./index_10.ts";
import { Ng } from "./index_3.ts";
import { cX } from "./ipa.js";
import { CA, SE } from "./remote.ts";
import { Bx, pT } from "./resource-names.ts";
import { zI } from "./resource-provider.ts";
import { TA } from "./serialization.ts";
import { q$e } from "./subagent_exec_pb.js";
import { bQ } from "./subagents_pb.js";
import { E } from "./tslib.es6.js";
import { BT, CE, TE, kE, wE } from "./yBp.js";
var bki, q91, ZSm, E7a, QSm, JSm;
export { E7a, JSm, QSm, ZSm, bki, q91 };
var __wakaru_z91_initialized = false;
export function z91() {
if (__wakaru_z91_initialized) return;
__wakaru_z91_initialized = true;
"use strict";
E(), FO(), Ng(), q$e(), wA(), CA(), Bx(), zI(), TA(), q$e(), bQ(), bki = "Sub-agent is currently running. You may send the follow-up message when it has completed.", q91 = cX(Symbol("pendingSubagentReplay"), void 0), ZSm = "If you intended to interrupt this agent, you may retry with `interrupt` set to true", E7a = class extends Error {
    constructor(t, e){
        super(t), this.name = "SubagentHostError", this.agentId = e?.agentId, this.cause = e?.cause;
    }
}, QSm = 1e3, JSm = BT(pT.subagentExecutor, (t)=>new SE(t, kE("subagentArgs"), wE("subagentResult")), (t, e)=>{
    e.register(new yE(t, TE("subagentArgs"), CE("subagentResult")));
});

}
