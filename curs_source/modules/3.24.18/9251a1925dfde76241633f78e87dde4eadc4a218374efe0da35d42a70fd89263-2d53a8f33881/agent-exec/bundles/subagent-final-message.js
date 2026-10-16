import { getFinalSummaryFromToolCall, renderPlanFromToolCall } from "../../dist_exports.js";
var EMPTY_SUBAGENT_FINAL_MESSAGE_SNAPSHOT, SubagentFinalMessageAccumulator;
export { EMPTY_SUBAGENT_FINAL_MESSAGE_SNAPSHOT, SubagentFinalMessageAccumulator };
var __wakaru_init_subagent_final_message_initialized = false;
export function init_subagent_final_message() {
if (__wakaru_init_subagent_final_message_initialized) return;
__wakaru_init_subagent_final_message_initialized = true;
"use strict";
EMPTY_SUBAGENT_FINAL_MESSAGE_SNAPSHOT = {
    segmentChunks: [],
    assistantCandidate: void 0,
    candidateDisplacedByPlan: void 0,
    finalSummary: void 0
};
SubagentFinalMessageAccumulator = class {
    constructor(){
        this.currentSegmentChunks = [];
    }
    onUpdate(update) {
        switch(update.message.case){
            case "textDelta":
                this.currentSegmentChunks.push(update.message.value.text);
                return;
            case "toolCallStarted":
            case "toolCallCompleted":
                {
                    this.closeSegment();
                    const { callId, toolCall } = update.message.value;
                    const summary = getFinalSummaryFromToolCall(toolCall);
                    if (summary !== void 0) {
                        this.finalSummary = summary;
                    }
                    const plan = renderPlanFromToolCall(toolCall);
                    if (plan !== void 0) {
                        if (this.assistantCandidate?.kind !== "plan" || this.assistantCandidate.callId !== callId) {
                            this.candidateDisplacedByPlan = this.assistantCandidate;
                        }
                        this.assistantCandidate = {
                            kind: "plan",
                            callId,
                            value: plan
                        };
                    } else if (this.assistantCandidate?.kind === "plan" && this.assistantCandidate.callId === callId) {
                        this.assistantCandidate = this.candidateDisplacedByPlan;
                        this.candidateDisplacedByPlan = void 0;
                    }
                    return;
                }
            case "stepCompleted":
            case "turnEnded":
                this.closeSegment();
                return;
            default:
                return;
        }
    }
    snapshot() {
        return {
            segmentChunks: [
                ...this.currentSegmentChunks
            ],
            assistantCandidate: this.assistantCandidate,
            candidateDisplacedByPlan: this.candidateDisplacedByPlan,
            finalSummary: this.finalSummary
        };
    }
    restore(snapshot) {
        this.currentSegmentChunks = [
            ...snapshot.segmentChunks
        ];
        this.assistantCandidate = snapshot.assistantCandidate;
        this.candidateDisplacedByPlan = snapshot.candidateDisplacedByPlan;
        this.finalSummary = snapshot.finalSummary;
    }
    finalize() {
        this.closeSegment();
        let assistantMessage = this.assistantCandidate?.value;
        if (assistantMessage === void 0) {
            if (this.finalSummary === void 0) {
                return void 0;
            }
            assistantMessage = "No output";
        }
        if (this.finalSummary === void 0) {
            return assistantMessage;
        }
        return [
            "<user_visible_high_level_summary>",
            this.finalSummary,
            "</user_visible_high_level_summary>",
            "<response>",
            assistantMessage,
            "</response>"
        ].join("\n");
    }
    closeSegment() {
        if (this.currentSegmentChunks.length === 0) {
            return;
        }
        const segment = this.currentSegmentChunks.join("");
        this.currentSegmentChunks = [];
        if (segment.trim() !== "") {
            this.assistantCandidate = {
                kind: "text",
                value: segment
            };
        }
    }
};

}
