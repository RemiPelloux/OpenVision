import { init_dist8 } from "../../../../agent-exec/dist/index.js";
import { readMcpResourceExecutorResource } from "../../../../agent-exec/dist/mcp.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_smart_mode_classifier_context } from "../../smart-mode-classifier-context.js";
import { init_smart_mode_project_permissions } from "../../smart-mode-project-permissions.js";
import { CustomToolCallError, ToolCallRejectedError, ToolCallUnexpectedEnvironmentError, init_common9, withSafeParsedArgs } from "../common.js";
import { ToolErrorClassification, init_core5 } from "../core.js";
import { init_dev_smart_mode_classifier_block } from "../dev-smart-mode-classifier-block.js";
import { init_mcp_error_classification } from "./mcp-error-classification.js";
import { init_mcp_output_spill } from "./mcp-output-spill.js";
import { init_smart_mode_classifier_runtime_state } from "../smart-mode-classifier-runtime-state.js";
import { AgentType, init_agent_config } from "../../utils/agent-config.js";
import { FETCH_MCP_RESOURCE_FAILURE_REASONS, init_mcp_metrics } from "../../utils/mcp-metrics.js";
import { init_request_id } from "../../utils/request-id.js";
import { SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON, init_smart_mode_classifier_error_metadata } from "../../utils/smart-mode-classifier-error-metadata.js";
import { init_smart_mode_classifier_measurement } from "../../utils/smart-mode-classifier-measurement.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { classifyMcpErrorMessage, createStringResult, emitFetchMcpResourceMetrics, generateSeededUuid, getSmartModeClassifierRuntimeState, isMcpServerNotFoundError, jsonSchema, reportMcpMetaToolFailure, spillLargeMcpResourceText } from "../../../../mcp_sandbox_policy_exports.js";
import { init_dist25 } from "../../../../node_modules/.pnpm/_077e680643459f7d1d564b303258f2e9/node_modules/ai/dist/index.mjs";
import { init_esm2 } from "../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ReadMcpResourceError, ReadMcpResourceExecArgs, ReadMcpResourceExecResult, ReadMcpResourceRejected, init_mcp_exec_pb } from "../../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
import { init_mcp_resource_tool_pb } from "../../../../proto/dist/generated/agent/v1/mcp_resource_tool_pb.js";
import { SmartModeApproval, init_utils_pb } from "../../../../proto/dist/generated/agent/v1/utils_pb.js";
import { createReadMcpResourceToolCall, getFailureReasonForClassification, getSmartModeBlockReasonFromArgs3, getSmartModeFetchMcpResourcePreflightDecision } from "../../../../tree_chunk_napi_exports.js";
var import_node_crypto43, __addDisposableResource104, __disposeResources104, baseParametersSchema2, smartModeApprovalParametersSchema2, SMART_MODE_FETCH_MCP_RESOURCE_BLOCK_REASON, SMART_MODE_FETCH_MCP_RESOURCE_CLASSIFIER_ERROR_REASON, SMART_MODE_FETCH_MCP_RESOURCE_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON, createFetchMcpResourceTool;
export { SMART_MODE_FETCH_MCP_RESOURCE_BLOCK_REASON, SMART_MODE_FETCH_MCP_RESOURCE_CLASSIFIER_ERROR_REASON, SMART_MODE_FETCH_MCP_RESOURCE_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON, __addDisposableResource104, __disposeResources104, baseParametersSchema2, createFetchMcpResourceTool, import_node_crypto43, smartModeApprovalParametersSchema2 };
var __wakaru_init_fetch_mcp_resource_initialized = false;
export function init_fetch_mcp_resource() {
if (__wakaru_init_fetch_mcp_resource_initialized) return;
__wakaru_init_fetch_mcp_resource_initialized = true;
"use strict";
import_node_crypto43 = require("node:crypto");
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_mcp_exec_pb();
init_mcp_resource_tool_pb();
init_utils_pb();
init_esm2();
init_dist25();
init_zod();
init_smart_mode_classifier_context();
init_smart_mode_project_permissions();
init_agent_config();
init_mcp_metrics();
init_request_id();
init_smart_mode_classifier_error_metadata();
init_smart_mode_classifier_measurement();
init_common9();
init_core5();
init_dev_smart_mode_classifier_block();
init_smart_mode_classifier_runtime_state();
init_mcp_error_classification();
init_mcp_output_spill();
__addDisposableResource104 = function(env, value, async) {
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
__disposeResources104 = (function(SuppressedError2) {
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
baseParametersSchema2 = external_exports.object({
    server: external_exports.string(),
    uri: external_exports.string(),
    downloadPath: external_exports.string().optional()
});
smartModeApprovalParametersSchema2 = external_exports.object({
    requestSmartModeApproval: external_exports.boolean().optional().describe("Set to true when immediately retrying the exact same resource fetch after Auto-review blocks it and you decide the user should approve it through the native approval card."),
    smartModeBlockReason: external_exports.string().optional().describe("Provide the exact block reason returned by Auto-review in the prior rejection. Required when requestSmartModeApproval is true so the approval card shows the original classifier reason without re-running the classifier.")
});
SMART_MODE_FETCH_MCP_RESOURCE_BLOCK_REASON = "Blocked by Auto-review";
SMART_MODE_FETCH_MCP_RESOURCE_CLASSIFIER_ERROR_REASON = SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON;
SMART_MODE_FETCH_MCP_RESOURCE_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON = SMART_MODE_FETCH_MCP_RESOURCE_CLASSIFIER_ERROR_REASON;
createFetchMcpResourceTool = (resourceAccessor, options2 = {})=>{
    const name17 = options2.name ?? "FetchMcpResource";
    const mcpMode = options2.mcpMode ?? "legacy";
    const executor = resourceAccessor.get(readMcpResourceExecutorResource);
    const smartModeApprovalRequestParametersEnabled = options2.agentType !== AgentType.BACKGROUND && options2.smartModeClassifierMode === true;
    const parametersSchema29 = smartModeApprovalRequestParametersEnabled ? baseParametersSchema2.extend(smartModeApprovalParametersSchema2.shape) : baseParametersSchema2;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource104(env_1, createSpan(parentCtx.withName("fetchMcpResourceExecute")), false);
            const startTime = Date.now();
            const args = rawArgs;
            const emitSuccessMetrics = (ctx, result)=>{
                const durationMs2 = Date.now() - startTime;
                let responseBytes = 0;
                if (result.result.case === "success") {
                    const successValue = result.result.value;
                    const content = successValue.content;
                    if (successValue.outputLocation !== void 0) {
                        responseBytes = Number(successValue.outputLocation.sizeBytes);
                    } else if (content?.case === "text") {
                        responseBytes = Buffer.byteLength(content.value, "utf8");
                    } else if (content?.case === "blob") {
                        responseBytes = content.value.length;
                    }
                }
                emitFetchMcpResourceMetrics(ctx, {
                    mcpMode,
                    durationMs: durationMs2,
                    success: true,
                    responseBytes
                });
            };
            const emitErrorMetrics = (ctx, failureReason, error3)=>{
                const durationMs2 = Date.now() - startTime;
                emitFetchMcpResourceMetrics(ctx, {
                    mcpMode,
                    durationMs: durationMs2,
                    success: false,
                    failureReason
                });
                if (error3 !== void 0) {
                    reportMcpMetaToolFailure(ctx, error3, {
                        tool: "FetchMcpResource",
                        failureReason,
                        retryable: false,
                        server: args.server,
                        durationMs: durationMs2
                    });
                }
            };
            const enforceSmartModePreflight = async (preflightCtx)=>{
                const smartModeClassifierState = getSmartModeClassifierRuntimeState({
                    agentType: options2.agentType,
                    requestContext: options2.requestContext,
                    smartModeClassifierMode: options2.smartModeClassifierMode,
                    smartModeClassifierShadowMode: options2.smartModeClassifierShadowMode,
                    devBlockState: options2.devSmartModeClassifierBlockState,
                    devDelayState: options2.devSmartModeClassifierDelayState
                });
                const smartModeClassifierEnabled = smartModeClassifierState.enabled;
                const smartModeClassifierShadowEnabled = smartModeClassifierState.shadowEnabled;
                const devSmartModeClassifierBlockState = smartModeClassifierState.devBlockState;
                const devSmartModeClassifierDelayState = smartModeClassifierState.devDelayState;
                if (args.requestSmartModeApproval === true && smartModeClassifierEnabled) {
                    const parentBlockReason = getSmartModeBlockReasonFromArgs3(args) ?? SMART_MODE_FETCH_MCP_RESOURCE_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON;
                    return new SmartModeApproval({
                        requestId: (0, import_node_crypto43.randomUUID)(),
                        reason: parentBlockReason
                    });
                }
                const decision = await getSmartModeFetchMcpResourcePreflightDecision(preflightCtx, {
                    resourceAccessor,
                    enabled: smartModeClassifierEnabled,
                    shadowEnabled: smartModeClassifierShadowEnabled,
                    server: args.server,
                    uri: args.uri,
                    downloadPath: args.downloadPath,
                    mcpMode,
                    toolCallId: meta.toolCallId,
                    stateHandler: meta.stateHandler,
                    devSmartModeClassifierBlockState,
                    devSmartModeClassifierDelayState,
                    workspacePaths: meta.workspacePaths,
                    userAutoRunInstructions: meta.userAutoRunInstructions,
                    projectAutoRunInstructions: meta.projectAutoRunInstructions
                });
                if (decision.kind === "allow") {
                    return void 0;
                }
                if (decision.kind === "reject") {
                    throw new ToolCallRejectedError(decision.reason);
                }
                return new SmartModeApproval({
                    requestId: (0, import_node_crypto43.randomUUID)(),
                    reason: decision.reason
                });
            };
            const smartModeApproval = await enforceSmartModePreflight(spanCtxt.ctx);
            const baseToolCallArgs = new ReadMcpResourceExecArgs({
                server: args.server,
                uri: args.uri,
                downloadPath: args.downloadPath,
                toolCallId: meta.toolCallId,
                smartModeApproval
            });
            const toolCall = createReadMcpResourceToolCall(baseToolCallArgs);
            const execResult = await interactionHandler.executeToolCall(spanCtxt.ctx, toolCall, meta.toolCallId, async (ctx)=>{
                const execId = generateSeededUuid(meta.toolCallId);
                const result = await executor.execute(ctx, baseToolCallArgs, {
                    execId,
                    hookContextCollector: meta.hookContextCollector
                });
                const resultCase = result.result.case;
                switch(resultCase){
                    case "success":
                        {
                            const spilledResult = await spillLargeMcpResourceText({
                                ctx,
                                result,
                                resourceAccessor,
                                projectDir: options2.requestContext?.mcpFileSystemOptions?.workspaceProjectDir ?? options2.requestContext?.env?.projectFolder,
                                osPlatform: options2.requestContext?.env?.osVersion?.split(" ")[0],
                                toolCallId: meta.toolCallId
                            });
                            if (spilledResult.result.case === "error") {
                                const err = new Error(spilledResult.result.value.error);
                                emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.OTHER, err);
                                throw err;
                            }
                            emitSuccessMetrics(ctx, spilledResult);
                            return spilledResult;
                        }
                    case "error":
                        {
                            const errorMsg = result.result.value.error;
                            const classification = classifyMcpErrorMessage(errorMsg);
                            if (classification !== void 0 && classification !== ToolErrorClassification.OTHER_ERROR) {
                                const err2 = new CustomToolCallError(classification, {
                                    error: errorMsg,
                                    clientVisibleErrorMessage: errorMsg,
                                    modelVisibleErrorMessage: errorMsg
                                });
                                emitErrorMetrics(ctx, getFailureReasonForClassification(classification), err2);
                                throw err2;
                            }
                            if (isMcpServerNotFoundError(errorMsg)) {
                                const err2 = new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                    error: errorMsg,
                                    clientVisibleErrorMessage: errorMsg,
                                    modelVisibleErrorMessage: errorMsg
                                });
                                emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.SERVER_NOT_FOUND, err2);
                                throw err2;
                            }
                            if (/Server ".*" is not ready/i.test(errorMsg) || /Unknown resource/i.test(errorMsg) || /Resource not found/i.test(errorMsg)) {
                                const err2 = new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                    error: errorMsg,
                                    clientVisibleErrorMessage: errorMsg,
                                    modelVisibleErrorMessage: errorMsg
                                });
                                emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.RESOURCE_NOT_FOUND, err2);
                                throw err2;
                            }
                            if (/Invalid URL/i.test(errorMsg)) {
                                const err2 = new CustomToolCallError(ToolErrorClassification.INVALID_ARGS, {
                                    error: errorMsg,
                                    clientVisibleErrorMessage: errorMsg,
                                    modelVisibleErrorMessage: errorMsg
                                });
                                emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.INVALID_URL, err2);
                                throw err2;
                            }
                            const err = new Error(errorMsg);
                            emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.OTHER, err);
                            throw err;
                        }
                    case "rejected":
                        {
                            const err = new ToolCallRejectedError(result.result.value.reason || "Read MCP resource rejected");
                            emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.REJECTED, err);
                            throw err;
                        }
                    case "notFound":
                        {
                            const err = new ToolCallUnexpectedEnvironmentError(`MCP resource not found: ${result.result.value.uri}`);
                            emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.RESOURCE_NOT_FOUND, err);
                            throw err;
                        }
                    case void 0:
                        {
                            const errorMsg = "Read MCP resource executor returned result without case";
                            const err = new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                error: errorMsg,
                                clientVisibleErrorMessage: errorMsg,
                                modelVisibleErrorMessage: "The MCP resource executor returned an empty result. This usually means the client is outdated or incompatible; update the client and retry."
                            });
                            emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.UNEXPECTED_RESULT_CASE, err);
                            throw err;
                        }
                    default:
                        {
                            const _exhaustive = resultCase;
                            const errorMsg = `Unexpected result case: ${_exhaustive}`;
                            const err = new CustomToolCallError(ToolErrorClassification.UNEXPECTED_ENVIRONMENT, {
                                error: errorMsg,
                                clientVisibleErrorMessage: errorMsg,
                                modelVisibleErrorMessage: errorMsg
                            });
                            emitErrorMetrics(ctx, FETCH_MCP_RESOURCE_FAILURE_REASONS.UNEXPECTED_RESULT_CASE, err);
                            throw err;
                        }
                }
            }, (result)=>createReadMcpResourceToolCall(baseToolCallArgs, result), meta.hookContextCollector);
            return execResult;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources104(env_1);
        }
    };
    const render2 = async (_ctx, execResult, _props)=>{
        if (!execResult) {
            return createStringResult("Unknown error");
        }
        if (execResult.result.case === "error") {
            return createStringResult(`Error reading MCP resource: ${execResult.result.value.error}`);
        }
        if (execResult.result.case === "rejected") {
            return createStringResult(`Read MCP resource rejected: ${execResult.result.value.reason}`);
        }
        if (execResult.result.case === "notFound") {
            return createStringResult(`MCP resource not found: ${execResult.result.value.uri}`);
        }
        if (execResult.result.case !== "success") {
            return createStringResult("Unknown error");
        }
        const successResult3 = execResult.result.value;
        if (successResult3.downloadPath) {
            return createStringResult(`Resource downloaded to ${successResult3.downloadPath}`);
        }
        const name18 = successResult3.name || successResult3.uri;
        const description3 = successResult3.description ? ` - ${successResult3.description}` : "";
        const mimeType = successResult3.mimeType ? ` (${successResult3.mimeType})` : "";
        if (successResult3.outputLocation !== void 0) {
            const totalSize = Number(successResult3.outputLocation.sizeBytes);
            const lineCount = Number(successResult3.outputLocation.lineCount);
            const sizeStr = totalSize >= 1024 ? `${(totalSize / 1024).toFixed(1)} KB` : `${totalSize} bytes`;
            return createStringResult(`Resource: ${name18}${description3}${mimeType}

Large output has been written to: ${successResult3.outputLocation.filePath} (${sizeStr}, ${lineCount} lines)`);
        }
        let content = "";
        if (successResult3.content?.case === "text") {
            content = successResult3.content.value;
        } else if (successResult3.content?.case === "blob") {
            content = `[Binary content: ${successResult3.content.value.length} bytes]`;
        } else {
            content = "[No content available]";
        }
        return createStringResult(`Resource: ${name18}${description3}${mimeType}

${content}`);
    };
    return {
        toolIdentifier: "FETCH_MCP_RESOURCE",
        name: name17,
        descriptionGenerator: (_props)=>"Reads a specific resource from an MCP server, identified by server name and resource URI. Optionally, set downloadPath (relative to the workspace) to save the resource to disk; when set, the resource will be downloaded and not returned to the model.",
        parameters: jsonSchema({
            type: "object",
            properties: {
                server: {
                    type: "string",
                    description: "The MCP server identifier"
                },
                uri: {
                    type: "string",
                    description: "The resource URI to read"
                },
                downloadPath: {
                    type: "string",
                    description: "Optional relative path in the workspace to save the resource to. When set, the resource is written to disk and is not returned to the model."
                },
                ...smartModeApprovalRequestParametersEnabled ? {
                    requestSmartModeApproval: {
                        type: "boolean",
                        description: "Set to true when immediately retrying the exact same resource fetch after Auto-review blocks it and you decide the user should approve it through the native approval card."
                    },
                    smartModeBlockReason: {
                        type: "string",
                        description: "Provide the exact block reason returned by Auto-review in the prior rejection. Required when requestSmartModeApproval is true so the approval card shows the original classifier reason without re-running the classifier."
                    }
                } : {}
            },
            required: [
                "server",
                "uri"
            ]
        }),
        render: render2,
        execute: withSafeParsedArgs(parametersSchema29, execute, createReadMcpResourceToolCall(new ReadMcpResourceExecArgs())),
        serializeError: (error3)=>{
            if (error3 instanceof ToolCallRejectedError) {
                return createReadMcpResourceToolCall(new ReadMcpResourceExecArgs(), new ReadMcpResourceExecResult({
                    result: {
                        case: "rejected",
                        value: new ReadMcpResourceRejected({
                            reason: error3.message
                        })
                    }
                }));
            }
            const errorMessage4 = error3 instanceof CustomToolCallError ? error3.modelVisibleErrorMessage : error3 instanceof Error ? error3.message : String(error3);
            return createReadMcpResourceToolCall(new ReadMcpResourceExecArgs(), new ReadMcpResourceExecResult({
                result: {
                    case: "error",
                    value: new ReadMcpResourceError({
                        error: errorMessage4
                    })
                }
            }));
        }
    };
};

}
