import { C, ie } from "./actions_2.js";
import { Kv, Rb } from "./agentRepositoryServiceTypes.js";
import { Ze } from "./instantiation.js";
import { pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var N8h, OPo, FPo;
export { FPo, N8h, OPo };
var __wakaru_BPo_initialized = false;
export function BPo() {
if (__wakaru_BPo_initialized) return;
__wakaru_BPo_initialized = true;
"use strict";
x(), Ze(), Rb(), N8h = {
    skipClearInput: !0,
    skipFocusAfterSubmission: !0,
    _internalPreserveDraft: !0
}, OPo = pd("realtimeVoiceAgents"), FPo = class {
    constructor(e){
        this.agentRepository = e, this.surface = "glass";
    }
    acquire(e) {
        const t = this.peekAgent(e);
        return t !== void 0 ? Promise.resolve(t) : this.agentRepository.loadAgent(e);
    }
    hasPendingCloudApproval(e) {
        return this.agentRepository.getPendingCloudAgentApprovals(e).length > 0;
    }
    peekAgent(e) {
        return this.agentRepository.getAgent(e);
    }
}, FPo = ie([
    C(0, Kv)
], FPo);

}
