import { Qrs, lag, pgk } from "./Aeg.js";
import { ZVa } from "./agentTranslationUtils.js";
import { ju } from "./agent_pb.js";
import { bs, sd } from "./chat_pb.js";
import { J_, uv } from "./composerData.js";
import { mo, tf } from "./composer_pb.js";
import { Ng } from "./index_3.ts";
import { rG } from "./populateConversationFromState.js";
import { Jrs } from "./subagentFinalMessage.js";
import { E } from "./tslib.es6.js";
import { Npe, f0i } from "./yBp.js";
var cag;
export { cag };
var __wakaru_ggk_initialized = false;
export function ggk() {
if (__wakaru_ggk_initialized) return;
__wakaru_ggk_initialized = true;
"use strict";
E(), Ng(), ju(), sd(), tf(), uv(), ZVa(), rG(), Jrs(), cag = class {
    constructor(t){
        this.options = t, this.processedOffsets = new Set, this.toolCallIds = new Set, this.toolMessageIndexByCallId = new Map, this.messages = [], this.pendingWork = Promise.resolve(), this.isPlainAiGenerating = !1, this.hasLiveOverlay = !1, this.hasSeenTargetMessage = !1, this.lastInteractionCompletedPlainAi = !1, this.fallbackStartTurnIndex = t.fallbackStartTurnIndex;
    }
    setFallbackStartTurnIndex(t) {
        this.fallbackStartTurnIndex = t;
    }
    seedFromState(t, e) {
        return this.enqueue(async ()=>{
            await this.seedFromStateNow(t) && e !== void 0 && this.processedOffsets.add(e);
        });
    }
    applyInteractionUpdate(t, e) {
        return this.enqueue(async ()=>{
            if (e !== void 0) {
                if (this.processedOffsets.has(e)) return;
                this.processedOffsets.add(e);
            }
            await this.applyInteractionUpdateNow(t);
        });
    }
    whenIdle() {
        return this.pendingWork;
    }
    getFinalMessage() {
        return Qrs(this.messages);
    }
    getToolCallCount() {
        return this.toolCallIds.size;
    }
    enqueue(t) {
        return this.pendingWork = this.pendingWork.then(t).catch((e)=>{
            this.options.structuredLogService.warn("background_composer", "CloudSubagentTranscriptProjection: failed to project cloud subagent update", {
                error: e instanceof Error ? e.message : String(e),
                toolCallId: this.options.toolCallId
            });
        }), this.pendingWork;
    }
    async seedFromStateNow(t) {
        if (this.hasLiveOverlay) return !1;
        const e = await lag(this.options.blobStore, t, this.options.targetMessageId);
        e !== void 0 && (this.hasSeenTargetMessage = !0);
        const n = e ?? Math.max(0, Math.min(this.fallbackStartTurnIndex, t.turns.length));
        if (n >= t.turns.length) return this.hasSeenTargetMessage || this.clearCheckpointProjection(), !0;
        const i = await Npe({
            conversationState: t,
            blobStore: this.options.blobStore,
            instantiationService: this.options.instantiationService,
            selectedContextService: this.options.selectedContextService,
            structuredLogService: this.options.structuredLogService,
            turnIndices: Array.from({
                length: t.turns.length - n
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
        return this.isPlainAiGenerating = r?.type === bs.AI && r.capabilityType === void 0 && !this.lastInteractionCompletedPlainAi, !0;
    }
    async applyInteractionUpdateNow(t) {
        if (t.message.case === "userMessageAppended") {
            t.message.value.userMessage?.messageId === this.options.targetMessageId && (this.hasSeenTargetMessage = !0, this.isPlainAiGenerating = !1);
            return;
        }
        if (this.hasSeenTargetMessage) switch(t.message.case){
            case "textDelta":
                this.lastInteractionCompletedPlainAi = !1, this.appendTextDelta(t.message.value.text);
                return;
            case "toolCallStarted":
                this.lastInteractionCompletedPlainAi = !0, await this.upsertToolCall(t.message.value.callId, t.message.value.toolCall);
                return;
            case "toolCallCompleted":
                this.lastInteractionCompletedPlainAi = !0, await this.upsertToolCall(t.message.value.callId, t.message.value.toolCall);
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
    appendTextDelta(t) {
        if (t.length === 0) return;
        this.hasLiveOverlay = !0;
        const e = this.messages[this.messages.length - 1];
        (e?.type !== bs.AI || e.capabilityType !== void 0 || !this.isPlainAiGenerating) && this.messages.push({
            ...J_(),
            codeBlocks: [],
            type: bs.AI,
            text: ""
        });
        const n = this.messages[this.messages.length - 1];
        n?.type !== bs.AI || n.capabilityType !== void 0 || (n.text = `${n.text}${t}`, this.isPlainAiGenerating = !0);
    }
    async upsertToolCall(t, e) {
        if (!t || e === void 0) return;
        this.toolCallIds.add(t), this.isPlainAiGenerating = !1;
        let n;
        try {
            const r = await f0i(e, t, this.options.instantiationService, {
                conversationParentAgentId: this.options.parentConversationId
            });
            n = {
                ...J_(),
                codeBlocks: [],
                type: bs.AI,
                text: "",
                capabilityType: mo.TOOL_FORMER,
                toolFormerData: r
            };
        } catch (r) {
            if (!(r instanceof Error && r.message.includes("Unsupported tool type"))) throw r;
        }
        if (n === void 0) return;
        pgk(e) && (this.hasLiveOverlay = !0);
        const i = this.toolMessageIndexByCallId.get(t);
        if (i !== void 0) {
            const r = this.messages[i];
            this.messages[i] = {
                ...n,
                bubbleId: r?.bubbleId ?? n.bubbleId
            };
            return;
        }
        this.toolMessageIndexByCallId.set(t, this.messages.length), this.messages.push(n);
    }
    rebuildToolCallIndexes() {
        this.toolMessageIndexByCallId.clear(), this.toolCallIds.clear();
        for(let t = 0; t < this.messages.length; t++){
            const e = this.messages[t].toolFormerData?.toolCallId;
            e && (this.toolCallIds.add(e), this.toolMessageIndexByCallId.set(e, t));
        }
    }
    clearCheckpointProjection() {
        this.messages.length = 0, this.toolMessageIndexByCallId.clear(), this.toolCallIds.clear(), this.isPlainAiGenerating = !1;
    }
};

}
