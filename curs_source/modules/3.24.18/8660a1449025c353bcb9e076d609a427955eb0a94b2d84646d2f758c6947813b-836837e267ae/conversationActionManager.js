import { UJ } from "./composerChatService.js";
import { l0 } from "./composerChatServiceInterface.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { cGt } from "./controlled_3.ts";
import { FO } from "./index_10.ts";
import { E } from "./tslib.es6.js";
var Aze;
export { Aze };
var __wakaru_erl_initialized = false;
export function erl() {
if (__wakaru_erl_initialized) return;
__wakaru_erl_initialized = true;
"use strict";
E(), FO(), Pl(), UJ(), Aze = class extends cGt {
    constructor(t, e, n, i){
        super(), this.composerId = t, this.composerAbortController = e, this.instantiationService = n, this.generationUUID = i, this.addAbortCallback(()=>{
            const r = this.instantiationService.invokeFunction((c)=>c.get(l0)), s = this.instantiationService.invokeFunction((c)=>c.get(no)), o = s.getHandleIfLoaded(this.composerId);
            if (!o) return;
            const a = s.getComposerData(o);
            if (a?.status !== "generating" || a?.chatGenerationUUID !== this.generationUUID) return;
            const l = this.signal.reason === "migration" ? "migration" : this.signal.reason === "remote_control_stopped" ? "remote_control" : this.signal.reason === "user_stopped_generation" ? "user" : "error";
            l !== "error" && r.handleAbortChat(o, {
                abortReason: l
            }), s.updateComposerDataSetStore(o, (c)=>c("conversationActionManager", void 0));
        }), this.composerAbortController.signal.aborted ? this.abort("composer_abort_controller_already_aborted") : (this.composerAbortControllerListener = ()=>this.abort("composer_abort_controller_aborted"), this.composerAbortController.signal.addEventListener("abort", this.composerAbortControllerListener, {
            once: !0
        })), this.armComposerAbortForwarding();
    }
    armComposerAbortForwarding() {
        if (this.signal.aborted) {
            const t = this.signal.reason ?? "linked_signal_already_aborted";
            this.composerAbortController.abort(t);
        } else {
            const t = this.signal;
            this.signalListener = ()=>{
                const e = t.reason ?? "linked_signal_aborted";
                this.composerAbortController.abort(e);
            }, t.addEventListener("abort", this.signalListener, {
                once: !0
            });
        }
    }
    resetStream() {
        this.signalListener && !this.signal.aborted && (this.signal.removeEventListener("abort", this.signalListener), this.signalListener = void 0), super.resetStream(), this.armComposerAbortForwarding();
    }
    getGenerationUUID() {
        return this.generationUUID;
    }
    dispose() {
        super.dispose(), this.composerAbortControllerListener && !this.composerAbortController.signal.aborted && (this.composerAbortController.signal.removeEventListener("abort", this.composerAbortControllerListener), this.composerAbortControllerListener = void 0), this.signalListener && !this.signal.aborted && (this.signal.removeEventListener("abort", this.signalListener), this.signalListener = void 0);
    }
};

}
