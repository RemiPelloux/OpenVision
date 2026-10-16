import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { init_node2 } from "../../../../agent-exec/dist/node.js";
import { writeExecutorResource } from "../../../../agent-exec/dist/write.js";
import { __toESM } from "../../../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_common9, withSafeParsedArgs } from "../common.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { describeOutputLocation, writeToAgentToolsFile } from "../../../../esm_exports8.js";
import { external_exports } from "../../../../external_exports.js";
import { createAiAttributionToolCall, createStringResult, createZodAgentTool, getDescription, getToolName2, normalizeFilePathForCodeLineage, resultToString2 } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { AiAttributionArgs, AiAttributionError, AiAttributionResult, AiAttributionSuccess, AiAttributionToolCall, init_ai_attribution_tool_pb } from "../../../../proto/dist/generated/agent/v1/ai_attribution_tool_pb.js";
var import_node_path83, __addDisposableResource78, __disposeResources78, logger90, CODE_LINEAGE_TOOL_IDENTIFIER2, CODE_LINEAGE_SNAKE_CASE, CODE_LINEAGE_PASCAL_CASE, DEFAULT_CODE_LINEAGE_OUTPUT_MODE, DEFAULT_CODE_LINEAGE_MAX_COMMITS, parametersSchema9, AI_ATTRIBUTION_FILE_THRESHOLD_BYTES, createCodeLineageToolInternal, createCodeLineageTool;
export { AI_ATTRIBUTION_FILE_THRESHOLD_BYTES, CODE_LINEAGE_PASCAL_CASE, CODE_LINEAGE_SNAKE_CASE, CODE_LINEAGE_TOOL_IDENTIFIER2, DEFAULT_CODE_LINEAGE_MAX_COMMITS, DEFAULT_CODE_LINEAGE_OUTPUT_MODE, __addDisposableResource78, __disposeResources78, createCodeLineageTool, createCodeLineageToolInternal, import_node_path83, logger90, parametersSchema9 };
var __wakaru_init_code_lineage_initialized = false;
export function init_code_lineage() {
if (__wakaru_init_code_lineage_initialized) return;
__wakaru_init_code_lineage_initialized = true;
"use strict";
import_node_path83 = __toESM(require("node:path"), 1);
init_dist8();
init_node2();
init_dist26();
init_dist();
init_agent_pb();
init_ai_attribution_tool_pb();
init_zod();
init_common9();
__addDisposableResource78 = function(env, value, async) {
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
__disposeResources78 = (function(SuppressedError2) {
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
logger90 = createLogger("agent/tools/ai-attribution");
CODE_LINEAGE_TOOL_IDENTIFIER2 = "CODE_LINEAGE";
CODE_LINEAGE_SNAKE_CASE = "code_lineage";
CODE_LINEAGE_PASCAL_CASE = "CodeLineage";
DEFAULT_CODE_LINEAGE_OUTPUT_MODE = "summary";
DEFAULT_CODE_LINEAGE_MAX_COMMITS = 15;
parametersSchema9 = external_exports.object({
    file_paths: external_exports.array(external_exports.string()).min(1).optional().describe("File paths to get AI attribution for. Use repository-relative git paths (for example: backend/server/src/app.ts), not absolute workspace paths."),
    start_line: external_exports.number().int().positive().optional().describe("Optional start line (1-indexed). If not provided, gets AI attribution for entire file. Applies to all files."),
    end_line: external_exports.number().int().positive().optional().describe("Optional end line (1-indexed). If not provided, gets AI attribution to end of file. Applies to all files."),
    commit_hashes: external_exports.array(external_exports.string()).min(1).optional().describe("Commit hashes to get AI attribution for. Returns AI conversation summaries for each commit."),
    output_mode: external_exports.enum([
        "summary",
        "detailed"
    ]).optional().describe('Controls output shape and verbosity. Use "summary" for conversation-level rollups and "detailed" for per-commit/per-range output.'),
    max_commits: external_exports.number().int().positive().max(200).optional().describe("Optional cap on commits returned after filtering/de-duplication. Must be between 1 and 200."),
    include_line_ranges: external_exports.boolean().optional().describe("When false, omit detailed line ranges from attribution output.")
}).refine((data)=>{
    const hasFile = (data.file_paths?.length ?? 0) > 0;
    const hasCommit = (data.commit_hashes?.length ?? 0) > 0;
    return hasFile || hasCommit;
}, {
    message: "Either file_paths or commit_hashes must be provided"
});
AI_ATTRIBUTION_FILE_THRESHOLD_BYTES = 2e4;
createCodeLineageToolInternal = (aiAttributionService, promptVersion, options2)=>{
    const projectFolder = options2?.projectFolder;
    const osPlatform = options2?.osPlatform;
    const resourceAccessor = options2?.resourceAccessor;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource78(env_1, createSpan(parentCtx.withName("aiAttributionExecute")), false);
            const filePaths = rawArgs.file_paths;
            const normalizedFilePaths = filePaths?.map((filePath)=>normalizeFilePathForCodeLineage(filePath, projectFolder, osPlatform)) ?? [];
            const commitHashes = rawArgs.commit_hashes;
            const outputMode = rawArgs.output_mode ?? DEFAULT_CODE_LINEAGE_OUTPUT_MODE;
            const maxCommits = rawArgs.max_commits ?? DEFAULT_CODE_LINEAGE_MAX_COMMITS;
            const includeLineRanges = rawArgs.include_line_ranges ?? outputMode === "detailed";
            const args = new AiAttributionArgs({
                filePaths: normalizedFilePaths,
                startLine: rawArgs.start_line,
                endLine: rawArgs.end_line,
                commitHashes: commitHashes ?? [],
                outputMode,
                maxCommits,
                includeLineRanges
            });
            const baseToolCall = new AiAttributionToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createAiAttributionToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                try {
                    logger90.info(ctx, "[ai-attribution] fetching attribution", {
                        filePaths,
                        normalizedFilePaths,
                        startLine: rawArgs.start_line,
                        endLine: rawArgs.end_line,
                        commitHashes,
                        outputMode,
                        maxCommits,
                        includeLineRanges
                    });
                    const attributionText = await aiAttributionService(ctx, {
                        filePaths: normalizedFilePaths,
                        startLine: rawArgs.start_line,
                        endLine: rawArgs.end_line,
                        commitHashes,
                        outputMode,
                        maxCommits,
                        includeLineRanges
                    });
                    const contentBytes = Buffer.byteLength(attributionText, "utf8");
                    logger90.info(ctx, "[ai-attribution] attribution fetched successfully", {
                        filePathsCount: filePaths?.length,
                        commitHashesCount: commitHashes?.length,
                        attributionLength: attributionText.length,
                        contentBytes
                    });
                    let outputLocation;
                    if (projectFolder && resourceAccessor && contentBytes > AI_ATTRIBUTION_FILE_THRESHOLD_BYTES) {
                        outputLocation = await writeToAgentToolsFile(ctx, resourceAccessor.get(writeExecutorResource), {
                            content: attributionText,
                            projectDir: projectFolder,
                            osPlatform,
                            toolCallId: meta.toolCallId
                        });
                    }
                    return new AiAttributionResult({
                        result: {
                            case: "success",
                            value: new AiAttributionSuccess({
                                attributionText,
                                outputLocation
                            })
                        }
                    });
                } catch (error3) {
                    const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
                    logger90.error(ctx, "[ai-attribution] failed to fetch attribution", {
                        filePathsCount: filePaths?.length,
                        commitHashesCount: commitHashes?.length,
                        error: errorMessage4
                    });
                    return new AiAttributionResult({
                        result: {
                            case: "error",
                            value: new AiAttributionError({
                                error: "Failed to fetch AI attribution data. This may be a temporary issue - please try again later."
                            })
                        }
                    });
                }
            }, (result2)=>createAiAttributionToolCall(new AiAttributionToolCall({
                    ...baseToolCall,
                    result: result2
                })));
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources78(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        if (result.result.case === "success") {
            const successValue = result.result.value;
            if (successValue.outputLocation) {
                return createStringResult(describeOutputLocation(successValue.outputLocation, {
                    leadText: "AI attribution output"
                }));
            }
        }
        return createStringResult(resultToString2(result));
    };
    const name17 = getToolName2(promptVersion);
    const description3 = getDescription();
    return createZodAgentTool(CODE_LINEAGE_TOOL_IDENTIFIER2, {
        name: name17,
        descriptionGenerator: (_props)=>description3,
        parameters: parametersSchema9,
        execute: withSafeParsedArgs(parametersSchema9, execute, createAiAttributionToolCall(new AiAttributionToolCall())),
        render: render2,
        serializeError: (_error)=>{
            return createAiAttributionToolCall(new AiAttributionToolCall({
                result: new AiAttributionResult({
                    result: {
                        case: "error",
                        value: new AiAttributionError({
                            error: "Failed to fetch AI attribution data. This may be a temporary issue - please try again later."
                        })
                    }
                })
            }));
        }
    });
};
createCodeLineageTool = (aiAttributionService, promptVersion, options2)=>createCodeLineageToolInternal(aiAttributionService, promptVersion ?? "latest", options2);

}
