import { TTi } from "./Aeg.js";
import { Pn, Qe, st } from "./Iwo.js";
import { bn } from "./SZu.js";
import { Osf, gIi, zos } from "./Ycg.js";
import { Vos } from "./agentStatusMapper.js";
import { ZD, jO } from "./backgroundWorkRegistry.js";
import { l0, mV } from "./composerChatServiceInterface.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { ub } from "./localAgentRepository.js";
import { Kf, ca } from "./reactive.js";
import { bPi, oMn } from "./realtimeVoiceAgents.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Cn, gA, pi } from "./ze.js";
var gfs, Fsf;
export { Fsf, gfs };
var __wakaru_Bsf_initialized = false;
export function Bsf() {
if (__wakaru_Bsf_initialized) return;
__wakaru_Bsf_initialized = true;
"use strict";
E(), pi(), Qe(), Rn(), ub(), jO(), Vos(), Kf(), _s(), mV(), Pl(), bPi(), gfs = class {
    constructor(t, e, n, i){
        this.composerDataService = t, this.surface = "ide", this.services = {
            composerDataService: t,
            composerChatService: e,
            backgroundWorkService: n,
            experimentService: i
        };
    }
    async acquire(t) {
        const e = await this.composerDataService.getComposerHandleById(t);
        if (!(e === void 0 || !Osf(e))) return new Fsf(e, this.services);
    }
    hasPendingCloudApproval() {
        return !1;
    }
}, gfs = Re([
    F(0, no),
    F(1, l0),
    F(2, ZD),
    F(3, Cr)
], gfs), Fsf = class extends st {
    constructor(t, e){
        super(), this.composerDataHandle = t, this.services = e;
        const n = t.composerId, i = {
            backgroundWorkService: e.backgroundWorkService,
            composerId: n,
            experimentService: e.experimentService
        }, r = new ca(gIi(t.data, i)), s = new ca(t.data.isArchived === !0);
        this.header = {
            id: n,
            source: "local",
            status: r,
            isArchived: s
        }, this._register(Pn(gA((o)=>{
            const a = zos(e.backgroundWorkService);
            return Cn(()=>{
                a();
                const l = e.composerDataService.getComposerDataIfLoadedReactive(n);
                l !== void 0 && (r.set(gIi(l, i)), s.set(l.isArchived === !0));
            }), o;
        })));
    }
    get isDisposed() {
        return this._store.isDisposed || this.services.composerDataService.getHandleIfLoaded(this.composerDataHandle.composerId) !== this.composerDataHandle;
    }
    ensureConversationBodies(t) {
        return this.services.composerDataService.ensureBubbleBodies(this.composerDataHandle, t);
    }
    submitMessage(t, e) {
        return this.services.composerChatService.submitChatMaybeAbortCurrent(this.composerDataHandle.composerId, t, {
            forceBubbleId: e.forceBubbleId,
            ignoreQueuing: e.forceSubmit,
            modifierKeyStatus: e.modifierKeyStatus,
            sentByVoiceCall: e.sentByVoiceCall,
            onDidSendRequest: e.onDidSendRequest,
            contextOverride: e.context,
            ...TTi(e)
        });
    }
}, bn(oMn, gfs, 1, 1);

}
