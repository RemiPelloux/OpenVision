import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { SingleMessageLoopDetector, init_single_message_loop_detector } from "./single-message-loop-detector.js";
import { init_shim } from "../shims/shim.js";
import { init_event_tracking } from "../utils/event-tracking.js";
import { init_dist } from "../../../context/dist/index.js";
import { createCounter, createHistogram } from "../../../dist_exports.js";
import { createKey } from "../../../entry_exports.js";
import { defineShim, singleMessageLoopWireInfo } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { Code } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { init_esm3 } from "../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { CustomErrorDetails, ErrorDetails, ErrorDetails_Error, init_utils_pb2 } from "../../../proto/dist/generated/aiserver/v1/utils_pb.js";
var import_node_crypto22, logger46, multiMessageLoopNudge, loopDetectionCounter, loopDetectionLatency, singleMessageLoopCheckLatency, SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_REPETITIONS, SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_REPETITIONS_IN_CODE_FENCE, SINGLE_MESSAGE_LOOP_DETECTOR_MAX_LINE_LENGTH, SINGLE_LINE_LOOP_MIN_REPETITIONS, SINGLE_LINE_LOOP_MIN_REPETITIONS_IN_CODE_FENCE, SINGLE_LINE_LOOP_MIN_P_TIMES_K, SINGLE_LINE_LOOP_MIN_P_TIMES_K_IN_CODE_FENCE, SINGLE_LINE_LOOP_MAX_P, SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_P_TIMES_K, SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_P_TIMES_K_IN_CODE_FENCE, MULTI_LINE_LOOP_MIN_TOTAL_CHARS, MULTI_LINE_LOOP_MIN_TOTAL_CHARS_IN_CODE_FENCE, SINGLE_MESSAGE_LOOP_DETECTOR_MAX_CHECK_TIME_MS, SINGLE_MESSAGE_LOOP_KIND_BY_CHANNEL, suppressAgentLoopEvidencePreviewKey, LOOP_EVIDENCE_FINGERPRINT_DOMAIN, AgentLoopError, SINGLE_MESSAGE_LOOP_KINDS, WIRE_LOOP_KIND, WIRE_LOOP_REPETITIONS, WIRE_LOOP_PERIOD, LOOP_TOOL_RESULT_TEXT_MAX_CHARS, SingleMessageLoopDetector2;
export { AgentLoopError, LOOP_EVIDENCE_FINGERPRINT_DOMAIN, LOOP_TOOL_RESULT_TEXT_MAX_CHARS, MULTI_LINE_LOOP_MIN_TOTAL_CHARS, MULTI_LINE_LOOP_MIN_TOTAL_CHARS_IN_CODE_FENCE, SINGLE_LINE_LOOP_MAX_P, SINGLE_LINE_LOOP_MIN_P_TIMES_K, SINGLE_LINE_LOOP_MIN_P_TIMES_K_IN_CODE_FENCE, SINGLE_LINE_LOOP_MIN_REPETITIONS, SINGLE_LINE_LOOP_MIN_REPETITIONS_IN_CODE_FENCE, SINGLE_MESSAGE_LOOP_DETECTOR_MAX_CHECK_TIME_MS, SINGLE_MESSAGE_LOOP_DETECTOR_MAX_LINE_LENGTH, SINGLE_MESSAGE_LOOP_KINDS, SINGLE_MESSAGE_LOOP_KIND_BY_CHANNEL, SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_P_TIMES_K, SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_P_TIMES_K_IN_CODE_FENCE, SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_REPETITIONS, SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_REPETITIONS_IN_CODE_FENCE, SingleMessageLoopDetector2, WIRE_LOOP_KIND, WIRE_LOOP_PERIOD, WIRE_LOOP_REPETITIONS, import_node_crypto22, logger46, loopDetectionCounter, loopDetectionLatency, multiMessageLoopNudge, singleMessageLoopCheckLatency, suppressAgentLoopEvidencePreviewKey };
var __wakaru_init_agent_loop_detector_initialized = false;
export function init_agent_loop_detector() {
if (__wakaru_init_agent_loop_detector_initialized) return;
__wakaru_init_agent_loop_detector_initialized = true;
"use strict";
import_node_crypto22 = require("node:crypto");
init_dist();
init_dist4();
init_utils_pb2();
init_esm3();
init_shim();
init_event_tracking();
init_single_message_loop_detector();
logger46 = createLogger("@anysphere/agent:loop-detection");
multiMessageLoopNudge = defineShim({
    name: "multi_message_loop_nudge"
});
loopDetectionCounter = createCounter("agent.assistant_message_looping", {
    description: "Count of agent message loops detected",
    labelNames: [
        "loop_kind",
        "isLoopReoccurrence",
        "caller"
    ]
});
loopDetectionLatency = createHistogram("agent.assistant_message_looping.latency_ms", {
    description: "Latency of loop detection in milliseconds",
    labelNames: [
        "result",
        "caller"
    ]
});
singleMessageLoopCheckLatency = createHistogram("agent.single_message_looping.check_for_loop.latency_ms", {
    description: "Latency of single-message loop detector checks in milliseconds",
    labelNames: [
        "result",
        "caller",
        "channel"
    ]
});
SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_REPETITIONS = 2;
SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_REPETITIONS_IN_CODE_FENCE = 3;
SINGLE_MESSAGE_LOOP_DETECTOR_MAX_LINE_LENGTH = 1e4;
SINGLE_LINE_LOOP_MIN_REPETITIONS = 3;
SINGLE_LINE_LOOP_MIN_REPETITIONS_IN_CODE_FENCE = 4;
SINGLE_LINE_LOOP_MIN_P_TIMES_K = 100;
SINGLE_LINE_LOOP_MIN_P_TIMES_K_IN_CODE_FENCE = 200;
SINGLE_LINE_LOOP_MAX_P = 256;
SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_P_TIMES_K = 3;
SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_P_TIMES_K_IN_CODE_FENCE = 4;
MULTI_LINE_LOOP_MIN_TOTAL_CHARS = 50;
MULTI_LINE_LOOP_MIN_TOTAL_CHARS_IN_CODE_FENCE = 100;
SINGLE_MESSAGE_LOOP_DETECTOR_MAX_CHECK_TIME_MS = 500;
SINGLE_MESSAGE_LOOP_KIND_BY_CHANNEL = {
    response: {
        single_line: "single_message_single_line",
        multi_line: "single_message_multi_line"
    },
    reasoning: {
        single_line: "single_message_reasoning_single_line",
        multi_line: "single_message_reasoning_multi_line"
    }
};
suppressAgentLoopEvidencePreviewKey = createKey(Symbol.for("anysphere.agent.suppressLoopEvidencePreview"), false);
LOOP_EVIDENCE_FINGERPRINT_DOMAIN = "cursor-agent-loop-evidence-v1";
AgentLoopError = class extends ConnectError {
    constructor(options2){
        const message = options2.loopType === "assistantMessage" ? `Agent loop detected: pattern of ${options2.patternLength} messages repeating` : `Agent single-message loop detected: ${options2.loopKind}`;
        super(message, Code.FailedPrecondition, void 0, [
            new ErrorDetails({
                error: ErrorDetails_Error.INTERNAL,
                details: new CustomErrorDetails({
                    title: "Agent Looping Detected",
                    detail: "The model got stuck in a repeating response pattern, so this turn was stopped. Please try again with a different model or start a new conversation. If the problem persists, please contact support.",
                    isRetryable: false,
                    additionalInfo: options2.loopType === "singleMessage" ? singleMessageLoopWireInfo(options2) : {}
                })
            })
        ]);
        this.name = "AgentLoopError";
        this.loopType = options2.loopType;
        if (options2.loopType === "singleMessage") {
            this.singleMessageLoopKind = options2.loopKind;
            this.repetitions = options2.repetitions;
            this.period = options2.period;
            this.evidenceFingerprint = options2.evidenceFingerprint;
        }
    }
};
AgentLoopError.telemetryName = "AgentLoopError";
SINGLE_MESSAGE_LOOP_KINDS = new Set([
    "single_message_single_line",
    "single_message_multi_line",
    "single_message_reasoning_single_line",
    "single_message_reasoning_multi_line"
]);
WIRE_LOOP_KIND = "agentLoopKind";
WIRE_LOOP_REPETITIONS = "agentLoopRepetitions";
WIRE_LOOP_PERIOD = "agentLoopPeriod";
LOOP_TOOL_RESULT_TEXT_MAX_CHARS = 4096;
SingleMessageLoopDetector2 = class extends SingleMessageLoopDetector {
    constructor(){
        super({
            multiLineLoopMinRepetitions: ()=>SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_REPETITIONS,
            multiLineLoopMinRepetitionsInCodeFence: ()=>SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_REPETITIONS_IN_CODE_FENCE,
            maxLineLength: ()=>SINGLE_MESSAGE_LOOP_DETECTOR_MAX_LINE_LENGTH,
            maxCheckTimeMs: ()=>SINGLE_MESSAGE_LOOP_DETECTOR_MAX_CHECK_TIME_MS,
            singleLineLoopMinRepetitions: ()=>SINGLE_LINE_LOOP_MIN_REPETITIONS,
            singleLineLoopMinRepetitionsInCodeFence: ()=>SINGLE_LINE_LOOP_MIN_REPETITIONS_IN_CODE_FENCE,
            singleLineLoopMinPTimesK: ()=>SINGLE_LINE_LOOP_MIN_P_TIMES_K,
            singleLineLoopMinPTimesKInCodeFence: ()=>SINGLE_LINE_LOOP_MIN_P_TIMES_K_IN_CODE_FENCE,
            singleLineLoopMaxP: ()=>SINGLE_LINE_LOOP_MAX_P,
            multiLineLoopMinPTimesK: ()=>SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_P_TIMES_K,
            multiLineLoopMinPTimesKInCodeFence: ()=>SINGLE_MESSAGE_MULTI_LINE_LOOP_MIN_P_TIMES_K_IN_CODE_FENCE,
            multiLineLoopMinTotalChars: ()=>MULTI_LINE_LOOP_MIN_TOTAL_CHARS,
            multiLineLoopMinTotalCharsInCodeFence: ()=>MULTI_LINE_LOOP_MIN_TOTAL_CHARS_IN_CODE_FENCE
        });
    }
};

}
