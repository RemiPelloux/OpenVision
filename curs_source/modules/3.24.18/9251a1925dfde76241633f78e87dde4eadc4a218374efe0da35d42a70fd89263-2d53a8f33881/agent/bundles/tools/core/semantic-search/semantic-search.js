import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { readExecutorResource, redactedReadExecutorResource } from "../../../../../agent-exec/dist/read.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { ToolCallUnexpectedEnvironmentError, init_common9, withSafeParsedArgs } from "../../common.js";
import { init_connect_error2 } from "../connect-error.js";
import { init_contextualize } from "./contextualize.js";
import { init_encryption } from "./encryption.js";
import { init_format2 } from "./format.js";
import { createParametersSchemaForModelDsv3, init_dsv3 } from "./prompts/dsv3.js";
import { init_latest } from "./prompts/latest.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { createStringResult, createZodAgentTool, generateSeededUuid } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_esm3 } from "../../../../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ReadArgs, init_read_exec_pb } from "../../../../../proto/dist/generated/agent/v1/read_exec_pb.js";
import { SemSearchToolArgs, SemSearchToolCall, SemSearchToolError, SemSearchToolResult, SemSearchToolSuccess, init_semsearch_tool_pb } from "../../../../../proto/dist/generated/agent/v1/semsearch_tool_pb.js";
import { CodeResult, init_repository_pb } from "../../../../../proto/dist/generated/aiserver/v1/repository_pb.js";
import { createCodebaseNotFoundError, createSemanticSearchToolCall, decryptPath, descriptionFor, encryptGlob, isCodebaseSearchUnavailableError, loadEncryptionScheme, normalizeTargetDirectory, recontextualizeSearchResults, resultToString7, toolCallArgsFor2 } from "../../../../../tree_chunk_napi_exports.js";
import { init_dist3 } from "../../../../../utils/dist/index.js";
var import_node_crypto40, __addDisposableResource97, __disposeResources97, createSemanticSearchTool;
export { __addDisposableResource97, __disposeResources97, createSemanticSearchTool, import_node_crypto40 };
var __wakaru_init_semantic_search_initialized = false;
export function init_semantic_search() {
if (__wakaru_init_semantic_search_initialized) return;
__wakaru_init_semantic_search_initialized = true;
"use strict";
import_node_crypto40 = require("node:crypto");
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_read_exec_pb();
init_semsearch_tool_pb();
init_repository_pb();
init_dist3();
init_esm3();
init_common9();
init_connect_error2();
init_contextualize();
init_encryption();
init_format2();
init_dsv3();
init_latest();
__addDisposableResource97 = function(env, value, async) {
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
__disposeResources97 = (function(SuppressedError2) {
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
createSemanticSearchTool = (resourceAccessor, searchImplementation, promptVersion, formattingOptions, numResultsConfig, options2)=>{
    const readExecutor = options2?.preferRedactedRead ? resourceAccessor.get(redactedReadExecutorResource) : resourceAccessor.get(readExecutorResource);
    formattingOptions = formattingOptions ?? {
        shouldUseFormatCodeblock: true,
        gpt5StyleLineNumbers: false,
        gpt5CodexCatN: false
    };
    promptVersion = promptVersion ?? "latest";
    let resolvedAllTools;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource97(env_1, createSpan(parentCtx.withName("semanticSearchExecute")), false);
            const _ctx = spanCtxt.ctx;
            if (!meta.repositoryInfos || meta.repositoryInfos.length === 0) {
                throw new ToolCallUnexpectedEnvironmentError("No codebase index found. Use other search tools.");
            }
            const repositoryInfo = meta.repositoryInfos[0];
            if (!repositoryInfo?.pathEncryptionKey) {
                throw new ToolCallUnexpectedEnvironmentError("Index invalid. Use other search tools.");
            }
            const encryptionScheme = loadEncryptionScheme("aes-256-ctr", repositoryInfo.pathEncryptionKey);
            const normalizedTargetDirectories = (rawArgs.target_directories ?? []).map((dir)=>normalizeTargetDirectory(dir, meta.workspacePaths));
            const encryptedTargetDirectories = normalizedTargetDirectories.map((dir)=>encryptGlob(dir, encryptionScheme));
            const toolArgs = new SemSearchToolArgs({
                query: rawArgs.query,
                targetDirectories: rawArgs.target_directories ?? []
            });
            const baseToolCall = new SemSearchToolCall({
                args: toolArgs,
                result: void 0
            });
            const { result } = await interactionHandler.executeToolCall(spanCtxt.ctx, createSemanticSearchToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                await interactionHandler.emitPartialToolCall(spanCtxt.ctx, meta.toolCallId, createSemanticSearchToolCall(new SemSearchToolCall({
                    args: new SemSearchToolArgs({
                        query: toolArgs.query,
                        targetDirectories: toolArgs.targetDirectories,
                        explanation: "Searching..."
                    }),
                    result: void 0
                })));
                let searchResults;
                try {
                    searchResults = await searchImplementation(ctx, rawArgs.query, meta.repositoryInfos, {
                        targetDirectories: encryptedTargetDirectories,
                        shouldQueryProd: meta.shouldQueryProd,
                        shouldQueryStaging: meta.shouldQueryStaging,
                        topK: "num_results" in rawArgs ? rawArgs.num_results : void 0
                    });
                } catch (error3) {
                    if (isCodebaseSearchUnavailableError(error3)) {
                        throw createCodebaseNotFoundError(name17, resolvedAllTools, error3);
                    }
                    throw error3;
                }
                await interactionHandler.emitPartialToolCall(spanCtxt.ctx, meta.toolCallId, createSemanticSearchToolCall(new SemSearchToolCall({
                    args: new SemSearchToolArgs({
                        query: toolArgs.query,
                        targetDirectories: toolArgs.targetDirectories,
                        explanation: `Reading...`
                    }),
                    result: void 0
                })));
                const uniquePaths = [
                    ...new Set(searchResults.codeResults.map((r)=>r.codeBlock?.relativeWorkspacePath ?? ""))
                ].filter((p2)=>p2.length > 0);
                const fileReadResults = await Promise.all(uniquePaths.map(async (encryptedPath, _index)=>{
                    const decryptedPath = decryptPath(encryptedPath, encryptionScheme);
                    const execId = generateSeededUuid(`${meta.toolCallId}-${decryptedPath}`);
                    const result2 = await readExecutor.execute(ctx, new ReadArgs({
                        path: decryptedPath,
                        toolCallId: `${meta.toolCallId}-${(0, import_node_crypto40.createHash)("sha256").update(decryptedPath).digest("hex").substring(0, 8)}`
                    }), {
                        execId
                    });
                    return {
                        encryptedPath,
                        decryptedPath,
                        result: result2
                    };
                }));
                const files = [];
                const encryptedToDecryptedPaths = new Map();
                for (const { encryptedPath, decryptedPath, result: result2 } of fileReadResults){
                    encryptedToDecryptedPaths.set(encryptedPath, decryptedPath);
                    if (result2.result.case === "success" && result2.result.value.output.case === "content") {
                        files.push({
                            relativeWorkspacePath: decryptedPath,
                            contents: result2.result.value.output.value
                        });
                    }
                }
                const successfulDecryptedPaths = new Set(files.map((f2)=>f2.relativeWorkspacePath));
                const updatedCodeResults = searchResults.codeResults.map((result2)=>{
                    const encryptedPath = result2.codeBlock?.relativeWorkspacePath;
                    if (!encryptedPath || !result2.codeBlock) {
                        return null;
                    }
                    const decryptedPath = encryptedToDecryptedPaths.get(encryptedPath);
                    if (!decryptedPath || !successfulDecryptedPaths.has(decryptedPath)) {
                        return null;
                    }
                    return new CodeResult({
                        score: result2.score,
                        codeBlock: {
                            ...result2.codeBlock,
                            relativeWorkspacePath: decryptedPath
                        }
                    });
                }).filter((result2)=>result2 !== null);
                const updated = await recontextualizeSearchResults(files, updatedCodeResults);
                searchResults = {
                    ...searchResults,
                    codeResults: updated
                };
                const output = resultToString7(searchResults.codeResults ?? [], promptVersion, formattingOptions);
                return new SemSearchToolResult({
                    result: {
                        case: "success",
                        value: new SemSearchToolSuccess({
                            results: output,
                            codeResults: searchResults.codeResults
                        })
                    }
                });
            }, (result2)=>createSemanticSearchToolCall(new SemSearchToolCall({
                    ...baseToolCall,
                    result: result2
                })));
            return new SemSearchToolResult({
                result
            });
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources97(env_1);
        }
    };
    const render2 = async (_ctx, { result }, _props)=>{
        switch(result.case){
            case "success":
                return createStringResult(result.value.results || "");
            case "error":
                return createStringResult(`Error: ${result.value.errorMessage}`);
            default:
                return createStringResult("Unknown error");
        }
    };
    const name17 = promptVersion === "dsv3-1018" ? "codebase_search" : "SemanticSearch";
    const parametersForParsing = toolCallArgsFor2(promptVersion, numResultsConfig);
    const parametersForModel = promptVersion === "dsv3-1018" ? createParametersSchemaForModelDsv3(numResultsConfig) : parametersForParsing;
    return createZodAgentTool("SEMANTIC_SEARCH", {
        name: name17,
        descriptionGenerator: (props)=>{
            resolvedAllTools = props.allTools;
            return descriptionFor(promptVersion, props.allTools);
        },
        parameters: parametersForModel,
        execute: withSafeParsedArgs(parametersForParsing, execute, createSemanticSearchToolCall(new SemSearchToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createSemanticSearchToolCall(new SemSearchToolCall({
                result: new SemSearchToolResult({
                    result: {
                        case: "error",
                        value: new SemSearchToolError({
                            errorMessage: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
