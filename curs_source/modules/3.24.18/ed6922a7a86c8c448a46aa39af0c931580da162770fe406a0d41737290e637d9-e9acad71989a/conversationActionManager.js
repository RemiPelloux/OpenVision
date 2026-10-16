import { _q } from "./composerChatService.js";
import { OR } from "./composerChatServiceInterface.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { skt } from "./controlled_3.ts";
import { z3 } from "./index_10.ts";
import { x } from "./tslib.es6.js";
var QPe;
export { QPe };
var __wakaru_sko_initialized = false;
export function sko() {
if (__wakaru_sko_initialized) return;
__wakaru_sko_initialized = true;
"use strict";
x(), z3(), nl(), _q(), QPe = class extends skt {
    constructor(e, t, n, i){
        super(), this.composerId = e, this.composerAbortController = t, this.instantiationService = n, this.generationUUID = i, this.addAbortCallback(()=>{
            const r = this.instantiationService.invokeFunction((l)=>l.get(OR)), s = this.instantiationService.invokeFunction((l)=>l.get(Zs)), o = s.getHandleIfLoaded(this.composerId);
            if (!o) return;
            const a = s.getComposerData(o);
            if (a?.status !== "generating" || a?.chatGenerationUUID !== this.generationUUID) return;
            const c = this.signal.reason === "migration" ? "migration" : this.signal.reason === "remote_control_stopped" ? "remote_control" : this.signal.reason === "user_stopped_generation" ? "user" : "error";
            c !== "error" && r.handleAbortChat(o, {
                abortReason: c
            }), s.updateComposerDataSetStore(o, (l)=>l("conversationActionManager", void 0));
        }), this.composerAbortController.signal.aborted ? this.abort("composer_abort_controller_already_aborted") : (this.composerAbortControllerListener = ()=>this.abort("composer_abort_controller_aborted"), this.composerAbortController.signal.addEventListener("abort", this.composerAbortControllerListener, {
            once: !0
        })), this.armComposerAbortForwarding();
    }
    armComposerAbortForwarding() {
        if (this.signal.aborted) {
            const e = this.signal.reason ?? "linked_signal_already_aborted";
            this.composerAbortController.abort(e);
        } else {
            const e = this.signal;
            this.signalListener = ()=>{
                const t = e.reason ?? "linked_signal_aborted";
                this.composerAbortController.abort(t);
            }, e.addEventListener("abort", this.signalListener, {
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
