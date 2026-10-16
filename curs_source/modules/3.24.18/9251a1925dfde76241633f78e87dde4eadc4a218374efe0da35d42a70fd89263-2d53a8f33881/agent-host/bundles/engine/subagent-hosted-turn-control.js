import { ControlledConversationActionManager } from "../../../agent-core/dist/conversation-actions/controlled.js";
import { init_dist7 } from "../../../agent-core/dist/index.js";
var SOFT_ABORT_HARD_CANCEL_GRACE_MS, HostedSubagentTurnControl;
export { HostedSubagentTurnControl, SOFT_ABORT_HARD_CANCEL_GRACE_MS };
var __wakaru_init_subagent_hosted_turn_control_initialized = false;
export function init_subagent_hosted_turn_control() {
if (__wakaru_init_subagent_hosted_turn_control_initialized) return;
__wakaru_init_subagent_hosted_turn_control_initialized = true;
"use strict";
init_dist7();
SOFT_ABORT_HARD_CANCEL_GRACE_MS = 8e3;
HostedSubagentTurnControl = class {
    constructor(options2){
        this.conversationActionManager = new ControlledConversationActionManager();
        this.abortRequested = false;
        this.settled = false;
        this.disposed = false;
        this.dispatchCtx = options2.ctx;
        const [turnCtx, cancelTurnCtx] = options2.ctx.withDetached().withCancel();
        this.turnCtx = turnCtx;
        this.cancelTurnCtx = cancelTurnCtx;
        this.forwardDispatchAbort = ()=>{
            cancelTurnCtx(options2.ctx.signal.reason);
        };
        options2.ctx.signal.addEventListener("abort", this.forwardDispatchAbort, {
            once: true
        });
        if (options2.ctx.signal.aborted) {
            this.forwardDispatchAbort();
        }
        this.abortTurn = (reason, abortOptions)=>{
            if (this.abortRequested || this.turnCtx.signal.aborted || this.disposed) {
                return;
            }
            this.abortRequested = true;
            this.abortReasonValue = reason?.trim() || "Subagent was aborted";
            this.abortInitiatedByValue = abortOptions?.initiatedBy;
            options2.onAbortRequested?.();
            if (abortOptions?.immediate === true) {
                this.cancelTurnCtx(this.abortReasonValue);
                return;
            }
            this.conversationActionManager.abort(this.abortReasonValue);
            this.armHardCancelBackstop();
        };
    }
    isAborted() {
        return this.abortRequested || this.turnCtx.signal.aborted;
    }
    get abortReason() {
        return this.abortReasonValue;
    }
    get abortInitiatedBy() {
        return this.abortInitiatedByValue;
    }
    claimSettle() {
        if (this.settled) {
            return false;
        }
        this.settled = true;
        return true;
    }
    dispose() {
        if (this.disposed) {
            return;
        }
        this.disposed = true;
        this.dispatchCtx.signal.removeEventListener("abort", this.forwardDispatchAbort);
        this.releaseHardCancelBackstop?.();
        this.releaseHardCancelBackstop = void 0;
        this.conversationActionManager.dispose();
    }
    armHardCancelBackstop() {
        const [graceCtx, cancelGrace] = this.dispatchCtx.withDetached().withTimeoutAndCancel(SOFT_ABORT_HARD_CANCEL_GRACE_MS);
        let released = false;
        this.releaseHardCancelBackstop = ()=>{
            released = true;
            cancelGrace();
        };
        graceCtx.signal.addEventListener("abort", ()=>{
            if (!released) {
                this.cancelTurnCtx(this.abortReasonValue);
            }
        }, {
            once: true
        });
    }
};

}
