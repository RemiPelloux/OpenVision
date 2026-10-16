import { Zof } from "./Ycg.js";
import { AA, qO } from "./editorInput.js";
import { Wo } from "./editorService.js";
import { Cr, _s } from "./experimentService.js";
import { It } from "./instantiation.js";
import { EG, TG, UMe } from "./realtimeVoiceService.js";
import { Lr, gu } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Jof } from "./voiceCallTranscriptLabel.js";
var DEl, $Me, eaf;
export { $Me, DEl, eaf };
var __wakaru_taf_initialized = false;
export function taf() {
if (__wakaru_taf_initialized) return;
__wakaru_taf_initialized = true;
"use strict";
E(), Lr(), fn(), It(), qO(), Wo(), _s(), EG(), Jof(), DEl = "workbench.editor.voiceCallTranscript", $Me = class extends AA {
    constructor(t, e){
        super(), this.call = t, this.voiceService = e, this._register(e.onDidChangeCalls((n)=>{
            n === t.agentId && this._onDidChangeLabel.fire();
        }));
    }
    get typeId() {
        return $Me.ID;
    }
    get resource() {
        return rt.from({
            scheme: "cursor-voice-call",
            path: `/${this.call.agentId}/${this.call.callId}`
        });
    }
    matches(t) {
        return t instanceof $Me && gu(t.resource, this.resource);
    }
    getName() {
        return Zof(this.voiceService.getCall(this.call)?.startedAtMs);
    }
}, $Me.ID = "workbench.editor.voiceCallTranscript.input", $Me = Re([
    F(1, TG)
], $Me), eaf = class {
    canSerialize(t) {
        return t instanceof $Me;
    }
    serialize(t) {
        return t instanceof $Me ? JSON.stringify(t.call) : void 0;
    }
    deserialize(t, e) {
        const n = t.invokeFunction((r)=>r.get(Cr).checkFeatureGate(UMe, {
                disableExposureLog: !0
            })), i = JSON.parse(e);
        if (!(!n || typeof i.agentId != "string" || typeof i.callId != "string")) return t.createInstance($Me, {
            agentId: i.agentId,
            callId: i.callId
        });
    }
};

}
