import { wPe, x2n } from "./A3u.js";
import { hpo } from "./agentTranslationUtils.js";
import { zd } from "./agent_pb.js";
import { KSh, Qqv, fCo } from "./cgh.js";
import { Hu, Tr } from "./chat_pb.js";
import { Af, Wf } from "./composerData.js";
import { Jm, ps } from "./composer_pb.js";
import { Gp } from "./index_3.ts";
import { nG } from "./populateConversationFromState.js";
import { vCo } from "./subagentFinalMessage.js";
import { x } from "./tslib.es6.js";
var YSh;
export { YSh };
var __wakaru_ezv_initialized = false;
export function ezv() {
if (__wakaru_ezv_initialized) return;
__wakaru_ezv_initialized = true;
"use strict";
x(), Gp(), zd(), Hu(), Jm(), Wf(), hpo(), nG(), vCo(), YSh = class {
    constructor(e){
        this.options = e, this.processedOffsets = new Set, this.toolCallIds = new Set, this.toolMessageIndexByCallId = new Map, this.messages = [], this.pendingWork = Promise.resolve(), this.isPlainAiGenerating = !1, this.hasLiveOverlay = !1, this.hasSeenTargetMessage = !1, this.lastInteractionCompletedPlainAi = !1, this.fallbackStartTurnIndex = e.fallbackStartTurnIndex;
    }
    setFallbackStartTurnIndex(e) {
        this.fallbackStartTurnIndex = e;
    }
    seedFromState(e, t) {
        return this.enqueue(async ()=>{
            await this.seedFromStateNow(e) && t !== void 0 && this.processedOffsets.add(t);
        });
    }
    applyInteractionUpdate(e, t) {
        return this.enqueue(async ()=>{
            if (t !== void 0) {
                if (this.processedOffsets.has(t)) return;
                this.processedOffsets.add(t);
            }
            await this.applyInteractionUpdateNow(e);
        });
    }
    whenIdle() {
        return this.pendingWork;
    }
    getFinalMessage() {
        return fCo(this.messages);
    }
    getToolCallCount() {
        return this.toolCallIds.size;
    }
    enqueue(e) {
        return this.pendingWork = this.pendingWork.then(e).catch((t)=>{
            this.options.structuredLogService.warn("background_composer", "CloudSubagentTranscriptProjection: failed to project cloud subagent update", {
                error: t instanceof Error ? t.message : String(t),
                toolCallId: this.options.toolCallId
            });
        }), this.pendingWork;
    }
    async seedFromStateNow(e) {
        if (this.hasLiveOverlay) return !1;
        const t = await KSh(this.options.blobStore, e, this.options.targetMessageId);
        t !== void 0 && (this.hasSeenTargetMessage = !0);
        const n = t ?? Math.max(0, Math.min(this.fallbackStartTurnIndex, e.turns.length));
        if (n >= e.turns.length) return this.hasSeenTargetMessage || this.clearCheckpointProjection(), !0;
        const i = await wPe({
            conversationState: e,
            blobStore: this.options.blobStore,
            instantiationService: this.options.instantiationService,
            selectedContextService: this.options.selectedContextService,
            structuredLogService: this.options.structuredLogService,
            turnIndices: Array.from({
                length: e.turns.length - n
            }, (s, o)=>n + o),
            shouldSetServerBubbleId: !1,
            enableLazyStepLoading: !1,
            onlyLastStepForCompletedTurns: !1,
            conversationParentAgentId: this.options.parentConversationId
        });
        this.messages.length = 0;
        for (const s of i.conversationHeaders){
            const o = i.conversationMap[s.bubbleId];
            o !== void 0 && this.messages.push(o);
        }
        this.rebuildToolCallIndexes();
        const r = this.messages[this.messages.length - 1];
        return this.isPlainAiGenerating = r?.type === Tr.AI && r.capabilityType === void 0 && !this.lastInteractionCompletedPlainAi, !0;
    }
    async applyInteractionUpdateNow(e) {
        if (e.message.case === "userMessageAppended") {
            e.message.value.userMessage?.messageId === this.options.targetMessageId && (this.hasSeenTargetMessage = !0, this.isPlainAiGenerating = !1);
            return;
        }
        if (this.hasSeenTargetMessage) switch(e.message.case){
            case "textDelta":
                this.lastInteractionCompletedPlainAi = !1, this.appendTextDelta(e.message.value.text);
                return;
            case "toolCallStarted":
                this.lastInteractionCompletedPlainAi = !0, await this.upsertToolCall(e.message.value.callId, e.message.value.toolCall);
                return;
            case "toolCallCompleted":
                this.lastInteractionCompletedPlainAi = !0, await this.upsertToolCall(e.message.value.callId, e.message.value.toolCall);
                return;
            case "stepCompleted":
                this.lastInteractionCompletedPlainAi = !0, this.isPlainAiGenerating = !1;
                return;
            case "turnEnded":
                this.lastInteractionCompletedPlainAi = !0, this.isPlainAiGenerating = !1;
                return;
            default:
                return;
        }
    }
    appendTextDelta(e) {
        if (e.length === 0) return;
        this.hasLiveOverlay = !0;
        const t = this.messages[this.messages.length - 1];
        (t?.type !== Tr.AI || t.capabilityType !== void 0 || !this.isPlainAiGenerating) && this.messages.push({
            ...Af(),
            codeBlocks: [],
            type: Tr.AI,
            text: ""
        });
        const n = this.messages[this.messages.length - 1];
        n?.type !== Tr.AI || n.capabilityType !== void 0 || (n.text = `${n.text}${e}`, this.isPlainAiGenerating = !0);
    }
    async upsertToolCall(e, t) {
        if (!e || t === void 0) return;
        this.toolCallIds.add(e), this.isPlainAiGenerating = !1;
        let n;
        try {
            const r = await x2n(t, e, this.options.instantiationService, {
                conversationParentAgentId: this.options.parentConversationId
            });
            n = {
                ...Af(),
                codeBlocks: [],
                type: Tr.AI,
                text: "",
                capabilityType: ps.TOOL_FORMER,
                toolFormerData: r
            };
        } catch (r) {
            if (!(r instanceof Error && r.message.includes("Unsupported tool type"))) throw r;
        }
        if (n === void 0) return;
        Qqv(t) && (this.hasLiveOverlay = !0);
        const i = this.toolMessageIndexByCallId.get(e);
        if (i !== void 0) {
            const r = this.messages[i];
            this.messages[i] = {
                ...n,
                bubbleId: r?.bubbleId ?? n.bubbleId
            };
            return;
        }
        this.toolMessageIndexByCallId.set(e, this.messages.length), this.messages.push(n);
    }
    rebuildToolCallIndexes() {
        this.toolMessageIndexByCallId.clear(), this.toolCallIds.clear();
        for(let e = 0; e < this.messages.length; e++){
            const t = this.messages[e].toolFormerData?.toolCallId;
            t && (this.toolCallIds.add(t), this.toolMessageIndexByCallId.set(t, e));
        }
    }
    clearCheckpointProjection() {
        this.messages.length = 0, this.toolMessageIndexByCallId.clear(), this.toolCallIds.clear(), this.isPlainAiGenerating = !1;
    }
};

}
