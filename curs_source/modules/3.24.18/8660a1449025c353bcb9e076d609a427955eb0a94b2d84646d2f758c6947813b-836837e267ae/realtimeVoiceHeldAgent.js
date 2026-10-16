import { _$ } from "./Aeg.js";
import { B8k, G8k, H8k, W8k, dsf, gsf, psf, q8k, q9k, sBk, vsf } from "./Ycg.js";
import { F4e, gle } from "./agentWorkspaceResolutionConstants.js";
import { bs, sd } from "./chat_pb.js";
import { lfs } from "./client.ts";
import { jCe } from "./cloudAgentRepositoryModel.js";
import { _Q, pa } from "./constants_8.js";
import { ZTl } from "./firstSteerNotice.js";
import { eil, wTi } from "./gYa.js";
import { Ynf } from "./index_21.ts";
import { Uy } from "./ipa.js";
import { jB } from "./projectAgentHeader.js";
import { CTi } from "./queueMessageSubmitPolicy.js";
import { XTl, bPi } from "./realtimeVoiceAgents.js";
import { $8k } from "./realtimeVoiceListener.js";
import { oEl, sEl } from "./realtimeVoiceRecords.js";
import { YTl, _Pi } from "./realtimeVoiceSettings.js";
import { iEl } from "./realtimeVoiceUnheardMessages.js";
import { LM } from "./selectedContextData.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { znf } from "./turn-feed.ts";
import { rC } from "./utils_23.js";
import { Cu, Lc } from "./workspaceCollectionService.js";
import { OJ } from "./workspaceRefHelpers.js";
import { Izr, Zg } from "./yBp.js";
var _sf;
export { _sf };
var __wakaru_z8k_initialized = false;
export function z8k() {
if (__wakaru_z8k_initialized) return;
__wakaru_z8k_initialized = true;
"use strict";
E(), Ynf(), sd(), Pu(), pa(), rC(), ZTl(), jCe(), OJ(), F4e(), jB(), LM(), Cu(), CTi(), bPi(), lfs(), oEl(), $8k(), iEl(), YTl(), _sf = class {
    constructor(t, e){
        this.agentReference = t, this.services = e;
    }
    isGone() {
        return this.agentReference.isDisposed;
    }
    isParked() {
        const t = this.agentReference.header;
        return gsf(t) || t.status.value === "in_progress" && this.listener?.pauseIsOpen === !0;
    }
    sendWouldAbortAPark() {
        return G8k(this.agentReference, {
            blockedOnlyByAChild: this.blockedOnlyByAChild(),
            ownCloudApproval: this.ownCloudApprovalIsPending()
        });
    }
    whenSubmittable() {
        const t = this.agentReference.workspaceFactory;
        return this.agentReference.header?.source === "local" && t !== void 0 ? _$(t, Lc.Composer, gle) : void 0;
    }
    submitTakesTheQueueSetting() {
        return q8k(this.agentReference, this.forceSubmitTheWayTypingWould());
    }
    async relay(t, e) {
        if (this.isGone()) return {
            kind: "refused",
            refusal: "agent-unavailable"
        };
        const n = this.listener?.requestOf(t), i = this.forceSubmitTheWayTypingWould(), r = e ? new Set((this.agentReference.composerDataHandle.data.fullConversationHeadersOnly ?? []).map((u)=>u.bubbleId)) : void 0, s = ()=>{
            if (r === void 0) return {
                kind: "accepted"
            };
            let u = H8k(r, this.agentReference.composerDataHandle.data.fullConversationHeadersOnly ?? []);
            return u === "queued" && i && (u = "stopped"), u === "stopped" && !i && (u = void 0), u === void 0 ? {
                kind: "accepted"
            } : {
                kind: "accepted",
                handover: u
            };
        };
        let o;
        const a = new Promise((u)=>{
            o = u;
        }), l = this.agentReference.submitMessage(t.request, {
            ...n === void 0 ? {} : {
                forceBubbleId: n.lineId
            },
            ...XTl,
            context: Uy(),
            sentByVoiceCall: !0,
            forceSubmit: i,
            modifierKeyStatus: wTi(void 0),
            onDidSendRequest: ()=>{
                o?.();
            }
        }).then(()=>({
                settled: "ok"
            }), (u)=>({
                settled: "error",
                error: u
            }));
        if (e) {
            const u = await Promise.race([
                l.then((d)=>({
                        kind: "submit",
                        result: d
                    })),
                a.then(()=>({
                        kind: "started"
                    }))
            ]);
            if (u.kind === "started") {
                const d = s();
                return l.then((h)=>{
                    h.settled === "error" && this.services.logService.error(`${_Pi} composer submit failed after the receipt`, h.error);
                }), d;
            }
            if (u.result.settled === "error") throw u.result.error;
            return s();
        }
        const c = await l;
        if (c.settled === "error") throw c.error;
        return {
            kind: "accepted"
        };
    }
    async readWrittenLines(t) {
        const { composerDataService: e } = this.services, n = this.agentReference.composerDataHandle, i = e.getComposerData(n), r = (i?.fullConversationHeadersOnly ?? []).filter((c)=>c.type === bs.HUMAN || c.type === bs.AI), s = (c)=>e.getComposerBubble(n, c), o = psf(()=>dsf(i), s);
        let a = [], l = r.length;
        for(; l > 0 && a.length < t;){
            const c = Math.max(0, l - t);
            await this.agentReference.ensureConversationBodies(r.slice(c, l).map((u)=>u.bubbleId)), l = c, a = q9k(o, r.slice(l), t);
        }
        return a.map(({ row: c, id: u, writer: d, text: h })=>{
            const p = s(c.bubbleId);
            return {
                id: u,
                writer: d,
                text: h,
                atMs: p === void 0 ? void 0 : Izr(p),
                serverId: c.serverBubbleId
            };
        });
    }
    listen(t) {
        if (this.agentReference.header?.status !== void 0) return this.listener = new znf(B8k({
            agentReference: this.agentReference,
            composerDataService: this.services.composerDataService,
            logService: this.services.logService,
            turnIsInFlight: ()=>vsf(this.agentReference),
            submitFollowsTheQueueSetting: ()=>this.submitTakesTheQueueSetting()
        }), t), this.listener;
    }
    anchor(t) {
        return sBk(t, this.agentReference.composerDataHandle.data.fullConversationHeadersOnly, sEl);
    }
    forceSubmitTheWayTypingWould() {
        return eil({
            queueDefaultBehavior: this.services.configurationService.getValue(_Q),
            promptInputForceSubmit: void 0
        });
    }
    ownCloudApprovalIsPending() {
        const t = this.agentReference.header?.id;
        return t === void 0 || t.length === 0 ? !1 : this.services.agents.hasPendingCloudApproval(t);
    }
    blockedOnlyByAChild() {
        const t = this.agentReference.composerDataHandle.data.subagentComposerIds;
        return !Zg(this.agentReference.header) || t === void 0 || t.length === 0 || !W8k(this.services.composerDataService, t) || this.recentBubbleBodyIsMissing() || this.ownQuestionIsPending() ? !1 : !this.services.composerDataService.getIsBlockingUserDecision(this.agentReference.composerDataHandle);
    }
    ownQuestionIsPending() {
        return this.services.composerUtilsService.getHasPendingQuestionnaireAwaitingInput(this.agentReference.composerDataHandle);
    }
    recentBubbleBodyIsMissing() {
        const e = this.agentReference.composerDataHandle.data.fullConversationHeadersOnly;
        for(let n = e.length - 1; n >= 0; n--){
            const i = e[n];
            if (i === void 0) continue;
            if (i.type === bs.HUMAN) return !1;
            const r = i.grouping?.toolFormerTool;
            if (!(r !== void 0 && r !== Ct.ASK_QUESTION) && this.services.composerDataService.getComposerBubble(this.agentReference.composerDataHandle, i.bubbleId) === void 0) return !0;
        }
        return !1;
    }
};

}
