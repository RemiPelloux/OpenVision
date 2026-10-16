import { createSpan } from "../../agent-kv/dist/controlled.js";
import { init_context_stripping } from "./context-stripping.js";
import { init_paths2 } from "./paths.js";
import { init_previous_request_id } from "./previous-request-id.js";
import { init_trace_format } from "./trace-format.js";
import { init_transcript_loader } from "./transcript-loader.js";
import { init_dist } from "../../context/dist/index.js";
import { getSafeConversationId } from "../../dist_exports.js";
import { agentModeToString, ensureTrailingNewline, formatSingleMessageJsonl, formatTranscript, formatTranscriptJson, formatTranscriptJsonl, getTranscriptRelativePath, getTranscriptTerminalMarkers, hydrateBlobIds, hydrateMessages, jsonReplacer, jsonReviver, prependOverviewMetadataLine } from "../../mcp_sandbox_policy_exports.js";
import { init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { TRANSCRIPTS_SUBDIR } from "../../utils/dist/workspace-paths.js";
var __addDisposableResource47, __disposeResources47, TRANSCRIPTS_SUBDIR2, getSafeConversationId2, textEncoder, textDecoder, SERIALIZED_UINT8_ARRAY_MARKER, OVERSIZE_TRANSCRIPT_BLOB_THRESHOLD_BYTES, CoreMessageSerde, coreMessageSerde, TranscriptStore;
export { CoreMessageSerde, OVERSIZE_TRANSCRIPT_BLOB_THRESHOLD_BYTES, SERIALIZED_UINT8_ARRAY_MARKER, TRANSCRIPTS_SUBDIR2, TranscriptStore, __addDisposableResource47, __disposeResources47, coreMessageSerde, getSafeConversationId2, textDecoder, textEncoder };
var __wakaru_init_dist28_initialized = false;
export function init_dist28() {
if (__wakaru_init_dist28_initialized) return;
__wakaru_init_dist28_initialized = true;
"use strict";
init_dist();
init_agent_pb();
init_dist3();
init_context_stripping();
init_paths2();
init_paths2();
init_previous_request_id();
init_trace_format();
init_transcript_loader();
__addDisposableResource47 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources47 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
TRANSCRIPTS_SUBDIR2 = TRANSCRIPTS_SUBDIR;
getSafeConversationId2 = getSafeConversationId;
textEncoder = new TextEncoder();
textDecoder = new TextDecoder();
SERIALIZED_UINT8_ARRAY_MARKER = '"__type":"Uint8Array"';
OVERSIZE_TRANSCRIPT_BLOB_THRESHOLD_BYTES = 5e6;
CoreMessageSerde = class {
    serialize(value) {
        const json2 = JSON.stringify(value, jsonReplacer);
        return textEncoder.encode(json2);
    }
    deserialize(blob) {
        const json2 = textDecoder.decode(blob);
        if (json2.includes(SERIALIZED_UINT8_ARRAY_MARKER)) {
            return JSON.parse(json2, jsonReviver);
        }
        return JSON.parse(json2);
    }
};
coreMessageSerde = new CoreMessageSerde();
TranscriptStore = class {
    constructor(projectDir, blobStore, writeFile15, options2 = {}){
        this.projectDir = projectDir;
        this.blobStore = blobStore;
        this.writeFile = writeFile15;
        this.options = {
            writeText: options2.writeText ?? true,
            writeJson: options2.writeJson ?? false,
            writeJsonl: options2.writeJsonl ?? false,
            pathResolver: options2.pathResolver,
            appendFile: options2.appendFile,
            fallbackToFullWriteOnIncrementalFailure: options2.fallbackToFullWriteOnIncrementalFailure ?? true
        };
    }
    resolveFilePath(conversationId, ext2) {
        if (this.options.pathResolver) {
            return this.options.pathResolver(conversationId, ext2);
        }
        const relPath = getTranscriptRelativePath({
            conversationId,
            ext: ext2,
            kind: "primary"
        });
        return `${this.projectDir}/${relPath}`;
    }
    async writeFromStateFull(ctx, state, conversationId, options2 = {}) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource47(env_2, createSpan(ctx.withName("writeFromState")), false);
            try {
                const messages = await hydrateMessages(span.ctx, this.blobStore, state);
                const { overviewFactory } = options2;
                const terminalMarkers = getTranscriptTerminalMarkers(options2);
                if (messages.length === 0 && terminalMarkers.jsonlLines.length === 0) {
                    return true;
                }
                let formattedConversation;
                if (this.options.writeText || overviewFactory) {
                    formattedConversation = formatTranscript(messages);
                }
                if (this.options.writeText) {
                    const base = formattedConversation ?? "";
                    const textContent = terminalMarkers.textSuffixes.length > 0 ? base.trim().length > 0 ? `${base}

${terminalMarkers.textSuffixes.join("\n")}` : terminalMarkers.textSuffixes.join("\n") : base;
                    if (textContent.trim()) {
                        await this.writeFile(this.resolveFilePath(conversationId, "txt"), textContent);
                    }
                }
                if (this.options.writeJson) {
                    const jsonContent = formatTranscriptJson(messages);
                    if (jsonContent || terminalMarkers.jsonlLines.length > 0) {
                        const wrapper = {
                            mode: agentModeToString(state.mode),
                            messages: jsonContent ? JSON.parse(jsonContent) : [],
                            ...terminalMarkers.jsonFields
                        };
                        await this.writeFile(this.resolveFilePath(conversationId, "json"), JSON.stringify(wrapper, null, 2));
                    }
                }
                if (this.options.writeJsonl) {
                    const body = formatTranscriptJsonl(messages);
                    let finalJsonl = [
                        body,
                        ...terminalMarkers.jsonlLines
                    ].filter((line)=>line.length > 0).join("\n");
                    if (finalJsonl && overviewFactory && formattedConversation?.trim()) {
                        try {
                            const overview = await overviewFactory(formattedConversation);
                            const trimmed = overview.trim();
                            if (trimmed) {
                                finalJsonl = prependOverviewMetadataLine(finalJsonl, trimmed);
                            }
                        } catch (overviewError) {
                            console.error("[TranscriptStore] Failed to generate transcript overview:", overviewError);
                        }
                    }
                    if (finalJsonl) {
                        await this.writeFile(this.resolveFilePath(conversationId, "jsonl"), ensureTrailingNewline(finalJsonl));
                    }
                }
                return true;
            } catch (error3) {
                console.error("[TranscriptStore] Failed to write transcript:", error3);
                return false;
            }
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources47(env_2);
        }
    }
    async writeFromStateIncremental(ctx, state, conversationId, previousRootPromptCount, options2 = {}) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const currentCount = state.rootPromptMessagesJson.length;
            const terminalMarkers = getTranscriptTerminalMarkers(options2);
            const hasTerminalMarker = terminalMarkers.jsonlLines.length > 0;
            if (currentCount === previousRootPromptCount && !hasTerminalMarker && !options2.overviewFactory) {
                return currentCount;
            }
            const appendFile = this.options.appendFile;
            const canAppend = appendFile && this.options.writeJsonl && !this.options.writeText && !this.options.writeJson && previousRootPromptCount > 0 && currentCount >= previousRootPromptCount && (currentCount > previousRootPromptCount || hasTerminalMarker) && !options2.overviewFactory;
            if (!canAppend) {
                const ok = await this.writeFromStateFull(ctx, state, conversationId, options2);
                return ok ? currentCount : 0;
            }
            const span = __addDisposableResource47(env_3, createSpan(ctx.withName("writeFromStateIncremental")), false);
            if (currentCount === previousRootPromptCount && hasTerminalMarker) {
                try {
                    await appendFile(this.resolveFilePath(conversationId, "jsonl"), ensureTrailingNewline(terminalMarkers.jsonlLines.join("\n")));
                    return currentCount;
                } catch (error3) {
                    console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", error3);
                    if (!this.options.fallbackToFullWriteOnIncrementalFailure) {
                        return 0;
                    }
                    const ok = await this.writeFromStateFull(ctx, state, conversationId, options2);
                    return ok ? currentCount : 0;
                }
            }
            try {
                const newBlobIds = state.rootPromptMessagesJson.slice(previousRootPromptCount);
                const newMessages = await hydrateBlobIds(span.ctx, this.blobStore, newBlobIds);
                span.span.setAttribute("hydratedBlobCount", newMessages.hydratedBlobCount);
                span.span.setAttribute("hydratedBlobBytes", newMessages.hydratedBlobBytes);
                span.span.setAttribute("largestHydratedBlobBytes", newMessages.largestHydratedBlobBytes);
                span.span.setAttribute("totalDeserializeDurationMs", newMessages.totalDeserializeDurationMs);
                span.span.setAttribute("omittedOversizeBlobCount", newMessages.omittedOversizeBlobCount);
                span.span.setAttribute("omittedOversizeBlobBytes", newMessages.omittedOversizeBlobBytes);
                span.span.setAttribute("largestOmittedOversizeBlobBytes", newMessages.largestOmittedOversizeBlobBytes);
                const lines2 = [];
                for (const message of newMessages.messages){
                    const line = formatSingleMessageJsonl(message);
                    if (line) {
                        lines2.push(line);
                    }
                }
                lines2.push(...terminalMarkers.jsonlLines);
                if (lines2.length > 0) {
                    const content = ensureTrailingNewline(lines2.join("\n"));
                    await appendFile(this.resolveFilePath(conversationId, "jsonl"), content);
                }
                return currentCount;
            } catch (error3) {
                console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", error3);
                if (!this.options.fallbackToFullWriteOnIncrementalFailure) {
                    return 0;
                }
                const ok = await this.writeFromStateFull(ctx, state, conversationId, options2);
                return ok ? currentCount : 0;
            }
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources47(env_3);
        }
    }
};

}
