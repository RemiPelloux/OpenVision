import { init_private_inference_prompt_quality_report } from "./private-inference-prompt-quality-report.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist35 } from "../../../../agent/dist/index.js";
import { LocalPromptQualityRunCapture } from "../../../../agent/dist/local-prompt-quality-capture.js";
import { SimplePromptToolExecutor } from "../../../../agent/dist/tool-stream-executor.js";
import { init_dist } from "../../../../context/dist/index.js";
import { renderPrivateInferencePromptQualityReport, withLocalPromptQualityCapture } from "../../../../tree_chunk_napi_exports.js";
var logger136, PROVIDER_NAME, MAX_RETAINED_RUNS, PrivateInferencePromptQualityCaptures;
export { MAX_RETAINED_RUNS, PROVIDER_NAME, PrivateInferencePromptQualityCaptures, logger136 };
var __wakaru_init_private_inference_prompt_quality_initialized = false;
export function init_private_inference_prompt_quality() {
if (__wakaru_init_private_inference_prompt_quality_initialized) return;
__wakaru_init_private_inference_prompt_quality_initialized = true;
"use strict";
init_dist35();
init_dist();
init_private_inference_prompt_quality_report();
logger136 = createLogger("@anysphere/agent-host:private-inference-prompt-quality");
PROVIDER_NAME = "openai-responses";
MAX_RETAINED_RUNS = 200;
PrivateInferencePromptQualityCaptures = class {
    constructor(options2 = {}){
        this.options = options2;
        this.captures = new Map();
        this.runs = [];
    }
    wrapAttemptSession(input, session, modelId) {
        const requestLogMetadata = {
            generationUUID: input.originalRequestId,
            attemptRequestId: input.attemptRequestId,
            attempt: input.attempt,
            conversationId: input.runOptions.conversationId
        };
        const promptSession = withLocalPromptQualityCapture(session.promptSession, {
            capture: this.captureForRun({
                requestId: input.originalRequestId,
                conversationId: input.runOptions.conversationId,
                conversationGroupId: input.runOptions.conversationGroupId ?? input.runOptions.conversationId
            }),
            requestLogMetadata,
            modelId,
            providerName: PROVIDER_NAME
        });
        return {
            promptSession,
            promptToolSession: {
                getExecutor: (state)=>new SimplePromptToolExecutor(promptSession.getExecutor(state))
            }
        };
    }
    async finishRun(ctx, requestId, status) {
        const entry = this.captures.get(requestId);
        if (entry === void 0) {
            return;
        }
        this.captures.delete(requestId);
        try {
            const snapshot = await entry.capture.collect(status);
            if (snapshot === void 0) {
                return;
            }
            this.runs.push({
                conversationGroupId: entry.conversationGroupId,
                snapshot
            });
            if (this.runs.length > MAX_RETAINED_RUNS) {
                this.runs.splice(0, this.runs.length - MAX_RETAINED_RUNS);
            }
            logger136.debug(ctx, "Kept private-inference run for transcript export", {
                requestId,
                conversationId: snapshot.conversationId,
                conversationGroupId: entry.conversationGroupId,
                invocationCount: snapshot.invocations.length,
                terminalStatus: snapshot.terminalStatus
            });
            this.writeSnapshot(ctx, requestId, snapshot);
        } catch (error3) {
            logger136.error(ctx, "Failed to collect local Prompt Quality capture", {
                requestId,
                error: error3
            });
        }
    }
    writeSnapshot(ctx, requestId, snapshot) {
        if (this.options.writeSnapshot === void 0) {
            return;
        }
        try {
            const path64 = this.options.writeSnapshot(snapshot);
            logger136.info(ctx, "Wrote private-inference run snapshot (dev build)", {
                requestId,
                path: path64
            });
        } catch (error3) {
            logger136.error(ctx, "Failed to write private-inference run snapshot", {
                requestId,
                error: error3
            });
        }
    }
    runsForConversation(conversationId) {
        return this.runs.filter((run)=>run.conversationGroupId === conversationId || run.snapshot.conversationId === conversationId).map((run)=>run.snapshot);
    }
    report(conversationId) {
        const runs = this.runsForConversation(conversationId);
        return runs.length === 0 ? void 0 : renderPrivateInferencePromptQualityReport(runs);
    }
    captureForRun(run) {
        const existing = this.captures.get(run.requestId);
        if (existing !== void 0) {
            return existing.capture;
        }
        const capture = new LocalPromptQualityRunCapture({
            generationUUID: run.requestId,
            conversationId: run.conversationId,
            uploadEligible: true
        });
        this.captures.set(run.requestId, {
            capture,
            conversationGroupId: run.conversationGroupId
        });
        return capture;
    }
};

}
