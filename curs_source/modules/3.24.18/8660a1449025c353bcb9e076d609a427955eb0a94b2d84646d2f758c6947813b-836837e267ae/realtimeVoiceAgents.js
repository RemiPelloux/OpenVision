import { Il } from "./SZu.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var XTl, oMn, cfs;
export { XTl, cfs, oMn };
var __wakaru_bPi_initialized = false;
export function bPi() {
if (__wakaru_bPi_initialized) return;
__wakaru_bPi_initialized = true;
"use strict";
E(), It(), wl(), XTl = {
    skipClearInput: !0,
    skipFocusAfterSubmission: !0,
    _internalPreserveDraft: !0
}, oMn = Il("realtimeVoiceAgents"), cfs = class {
    constructor(t){
        this.agentRepository = t, this.surface = "glass";
    }
    acquire(t) {
        const e = this.peekAgent(t);
        return e !== void 0 ? Promise.resolve(e) : this.agentRepository.loadAgent(t);
    }
    hasPendingCloudApproval(t) {
        return this.agentRepository.getPendingCloudAgentApprovals(t).length > 0;
    }
    peekAgent(t) {
        return this.agentRepository.getAgent(t);
    }
}, cfs = Re([
    F(0, ma)
], cfs);

}
