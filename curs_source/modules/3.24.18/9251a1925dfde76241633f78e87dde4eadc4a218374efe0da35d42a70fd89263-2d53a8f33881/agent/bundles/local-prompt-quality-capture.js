import { init_serde2 } from "./serde.js";
import { init_dist26 } from "../../chat-inference/dist/index.js";
import { finiteNumber, serializeCoreMessage, serializeTool, writeLocalPromptQualitySnapshot } from "../../tree_chunk_napi_exports.js";
var import_node_crypto45, import_node_fs37, import_node_os27, import_node_path91, LOCAL_PROMPT_QUALITY_SNAPSHOT_SCHEMA_VERSION, LOCAL_PROMPT_QUALITY_SNAPSHOT_DIRECTORY, UUID_PATTERN2, LocalPromptQualityRunCapture;
export { LOCAL_PROMPT_QUALITY_SNAPSHOT_DIRECTORY, LOCAL_PROMPT_QUALITY_SNAPSHOT_SCHEMA_VERSION, LocalPromptQualityRunCapture, UUID_PATTERN2, import_node_crypto45, import_node_fs37, import_node_os27, import_node_path91 };
var __wakaru_init_local_prompt_quality_capture_initialized = false;
export function init_local_prompt_quality_capture() {
if (__wakaru_init_local_prompt_quality_capture_initialized) return;
__wakaru_init_local_prompt_quality_capture_initialized = true;
"use strict";
import_node_crypto45 = require("node:crypto");
import_node_fs37 = require("node:fs");
import_node_os27 = require("node:os");
import_node_path91 = require("node:path");
init_dist26();
init_serde2();
LOCAL_PROMPT_QUALITY_SNAPSHOT_SCHEMA_VERSION = 1;
LOCAL_PROMPT_QUALITY_SNAPSHOT_DIRECTORY = "cursor-agent-prompt-quality";
UUID_PATTERN2 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;
LocalPromptQualityRunCapture = class {
    constructor(options2){
        this.options = options2;
        this.invocations = [];
        this.pending = new Set();
        this.finalized = false;
    }
    observeInvocation(input) {
        if (this.finalized) {
            return;
        }
        const observation = this.captureInvocation(input).finally(()=>{
            this.pending.delete(observation);
        });
        this.pending.add(observation);
    }
    async finalize(terminalStatus) {
        const snapshot = await this.collect(terminalStatus);
        if (snapshot === void 0) {
            return void 0;
        }
        const snapshotPath = writeLocalPromptQualitySnapshot(snapshot);
        const reference = {
            generationUUID: snapshot.generationUUID,
            conversationId: snapshot.conversationId,
            capabilityNonce: snapshot.capabilityNonce,
            payloadDigest: snapshot.payloadDigest,
            terminalStatus,
            invocationCount: snapshot.invocations.length,
            snapshotPath
        };
        this.options.onSnapshot?.(reference);
        return reference;
    }
    async collect(terminalStatus) {
        if (this.finalized) {
            return void 0;
        }
        this.finalized = true;
        await Promise.allSettled([
            ...this.pending
        ]);
        if (!this.options.uploadEligible || this.invocations.length === 0 || !UUID_PATTERN2.test(this.options.generationUUID)) {
            return void 0;
        }
        const content = {
            schemaVersion: LOCAL_PROMPT_QUALITY_SNAPSHOT_SCHEMA_VERSION,
            generationUUID: this.options.generationUUID,
            conversationId: this.options.conversationId,
            terminalStatus,
            createdAt: (new Date()).toISOString(),
            invocations: [
                ...this.invocations
            ].sort((a, b2)=>a.startedAt.localeCompare(b2.startedAt))
        };
        const canonicalPayload = JSON.stringify(content);
        const payloadDigest = (0, import_node_crypto45.createHash)("sha256").update(canonicalPayload).digest("hex");
        return {
            ...content,
            capabilityNonce: (0, import_node_crypto45.randomUUID)(),
            payloadDigest
        };
    }
    async captureInvocation(input) {
        let invocationId = "";
        let responseMessages = [];
        let promptTokens = 0;
        let completionTokens = 0;
        let totalTokens = 0;
        let status = "success";
        let errorMessage4;
        try {
            invocationId = await input.result.invocationId;
            const [response, usage] = await Promise.all([
                input.result.response,
                input.result.usage
            ]);
            responseMessages = response.messages;
            promptTokens = finiteNumber(usage.promptTokens);
            completionTokens = finiteNumber(usage.completionTokens);
            totalTokens = finiteNumber(usage.totalTokens) || promptTokens + completionTokens;
            if (response.error !== void 0) {
                throw response.error;
            }
        } catch (error3) {
            status = input.ctx.canceled ? "aborted" : "errored";
            errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            if (invocationId === "") {
                try {
                    invocationId = await input.result.invocationId;
                } catch  {
                    invocationId = `${input.requestLogMetadata.attemptRequestId}-${(0, import_node_crypto45.randomUUID)()}`;
                }
            }
        }
        this.invocations.push({
            invocationId,
            attemptRequestId: input.requestLogMetadata.attemptRequestId,
            attempt: input.requestLogMetadata.attempt,
            startedAt: input.startedAt,
            completedAt: (new Date()).toISOString(),
            modelId: input.modelId,
            providerName: input.providerName,
            status,
            messagesBase64: input.messages.map(serializeCoreMessage),
            responseMessagesBase64: responseMessages.map(serializeCoreMessage),
            tools: input.tools.map(serializeTool),
            promptTokens,
            completionTokens,
            totalTokens,
            tokenLimit: input.tokenLimit,
            errorMessage: errorMessage4
        });
    }
};

}
