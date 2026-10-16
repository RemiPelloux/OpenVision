import { init_dist7 } from "../../../../../agent-core/dist/index.js";
import { AGENT_TOOLS_FILE_WRITE_THRESHOLD_BYTES } from "../../../../../agent-exec/dist/agent-tools-file.js";
import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { init_node2 } from "../../../../../agent-exec/dist/node.js";
import { webFetchAllowlistPrecheckExecutorResource } from "../../../../../agent-exec/dist/web-fetch-allowlist-precheck.js";
import { writeExecutorResource } from "../../../../../agent-exec/dist/write.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { init_smart_mode_classifier_context } from "../../../smart-mode-classifier-context.js";
import { init_smart_mode_project_permissions } from "../../../smart-mode-project-permissions.js";
import { ToolCallArgParseError, ToolCallError, ToolCallRejectedError, ToolTimeoutError, init_common9, withSafeParsedArgs } from "../../common.js";
import { init_connect_error2 } from "../connect-error.js";
import { init_remote_hooks } from "../remote-hooks.js";
import { init_dev_smart_mode_classifier_block } from "../../dev-smart-mode-classifier-block.js";
import { init_smart_mode_classifier_runtime_state } from "../../smart-mode-classifier-runtime-state.js";
import { AgentType, init_agent_config } from "../../../utils/agent-config.js";
import { init_ip } from "../../../utils/ip.js";
import { init_request_id } from "../../../utils/request-id.js";
import { SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON, init_smart_mode_classifier_error_metadata } from "../../../utils/smart-mode-classifier-error-metadata.js";
import { init_smart_mode_classifier_measurement } from "../../../utils/smart-mode-classifier-measurement.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { queryWebFetch } from "../../../../../dist_exports.js";
import { describeOutputLocation, writeToAgentToolsFile } from "../../../../../esm_exports8.js";
import { external_exports } from "../../../../../external_exports.js";
import { createStringResult, createZodAgentTool, getSmartModeClassifierRuntimeState, isAgentStreamStartTimeoutError, withRemoteHooks } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { SmartModeApproval, init_utils_pb } from "../../../../../proto/dist/generated/agent/v1/utils_pb.js";
import { WebFetchAllowlistPrecheckArgs } from "../../../../../proto/dist/generated/agent/v1/web_fetch_allowlist_precheck_exec_pb.js";
import { WebFetchArgs, WebFetchError, WebFetchRejected, WebFetchResult, WebFetchSuccess, WebFetchToolCall, init_web_fetch_tool_pb } from "../../../../../proto/dist/generated/agent/v1/web_fetch_tool_pb.js";
import { createSmartModeWebFetchBlockedAutonomousReason, createWebFetchToolCall, getDescription5, getLocalNetworkRejectionMessage, getSmartModeBlockReasonFromArgs2, getSmartModeWebFetchPreflightDecision, getToolName7, isWebFetchError, shouldSkipApproval, stripCredentialsFromArgs, truncateContent } from "../../../../../tree_chunk_napi_exports.js";
var import_node_crypto42, __addDisposableResource101, __disposeResources101, MAX_CONTENT_SIZE, baseParametersSchema, smartModeApprovalParametersSchema, SMART_MODE_WEB_FETCH_BLOCK_REASON, SMART_MODE_WEB_FETCH_CLASSIFIER_ERROR_REASON, SMART_MODE_WEB_FETCH_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON, SMART_MODE_WEB_FETCH_BLOCKED_AUTONOMOUS_REASON_SUFFIX, createWebFetchTool;
export { MAX_CONTENT_SIZE, SMART_MODE_WEB_FETCH_BLOCKED_AUTONOMOUS_REASON_SUFFIX, SMART_MODE_WEB_FETCH_BLOCK_REASON, SMART_MODE_WEB_FETCH_CLASSIFIER_ERROR_REASON, SMART_MODE_WEB_FETCH_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON, __addDisposableResource101, __disposeResources101, baseParametersSchema, createWebFetchTool, import_node_crypto42, smartModeApprovalParametersSchema };
var __wakaru_init_web_fetch_initialized = false;
export function init_web_fetch() {
if (__wakaru_init_web_fetch_initialized) return;
__wakaru_init_web_fetch_initialized = true;
"use strict";
import_node_crypto42 = require("node:crypto");
init_dist7();
init_dist8();
init_node2();
init_dist26();
init_dist();
init_agent_pb();
init_utils_pb();
init_web_fetch_tool_pb();
init_esm2();
init_zod();
init_smart_mode_classifier_context();
init_smart_mode_project_permissions();
init_agent_config();
init_ip();
init_request_id();
init_smart_mode_classifier_error_metadata();
init_smart_mode_classifier_measurement();
init_common9();
init_dev_smart_mode_classifier_block();
init_smart_mode_classifier_runtime_state();
init_connect_error2();
init_remote_hooks();
__addDisposableResource101 = function(env, value, async) {
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
__disposeResources101 = (function(SuppressedError2) {
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
MAX_CONTENT_SIZE = 1e5;
baseParametersSchema = external_exports.object({
    url: external_exports.string().describe("The URL to fetch. The content will be converted to a readable markdown format.")
});
smartModeApprovalParametersSchema = external_exports.object({
    requestSmartModeApproval: external_exports.boolean().optional().describe("Set to true when immediately retrying the exact same fetch after Auto-review blocks it and you decide the user should approve it through the native approval card."),
    smartModeBlockReason: external_exports.string().optional().describe("Provide the exact block reason returned by Auto-review in the prior rejection. Required when requestSmartModeApproval is true so the approval card shows the original classifier reason without re-running the classifier.")
});
SMART_MODE_WEB_FETCH_BLOCK_REASON = "Blocked by Auto-review";
SMART_MODE_WEB_FETCH_CLASSIFIER_ERROR_REASON = SMART_MODE_CLASSIFIER_MANUAL_REVIEW_ERROR_REASON;
SMART_MODE_WEB_FETCH_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON = SMART_MODE_WEB_FETCH_CLASSIFIER_ERROR_REASON;
SMART_MODE_WEB_FETCH_BLOCKED_AUTONOMOUS_REASON_SUFFIX = "\n\n<system_reminder>\nAuto-review blocked this autonomous tool call. Decide now between two paths: if a safer non-autonomous path satisfies the request, use it; otherwise, if this blocked fetch is still necessary and the user should approve it, immediately retry the exact same WebFetch call with requestSmartModeApproval set to true AND smartModeBlockReason set to the exact block reason text above. That retry is what shows the native approval card; stopping here leaves the user with no approval UI. Do not change the URL or use an escalated variant when retrying for approval.\n</system_reminder>";
createWebFetchTool = (webFetchService, promptVersion, options2)=>{
    promptVersion = promptVersion ?? "latest";
    const projectFolder = options2?.projectFolder;
    const osPlatform = options2?.osPlatform;
    const resourceAccessor = options2?.resourceAccessor;
    const smartModeApprovalRequestParametersEnabled = options2?.agentType !== AgentType.BACKGROUND && options2?.smartModeClassifierMode === true;
    const parametersSchema29 = smartModeApprovalRequestParametersEnabled ? baseParametersSchema.extend(smartModeApprovalParametersSchema.shape) : baseParametersSchema;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource101(env_1, createSpan(parentCtx.withName("webFetchExecute")), false);
            const executeCore = async (ctx, args)=>{
                let parsed;
                try {
                    parsed = new URL(args.url);
                } catch  {
                    throw new ToolCallArgParseError("Invalid URL: must include http:// or https://");
                }
                if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
                    throw new ToolCallArgParseError(`Invalid URL protocol: ${parsed.protocol} (must be http or https)`);
                }
                if (options2?.stripCredentialedUrls === true && (parsed.username !== "" || parsed.password !== "")) {
                    parsed.username = "";
                    parsed.password = "";
                    args.url = parsed.toString();
                }
                const localRejection = getLocalNetworkRejectionMessage(parsed);
                if (localRejection) {
                    throw new ToolCallArgParseError(localRejection);
                }
                const fetchArgs = new WebFetchArgs({
                    url: args.url,
                    toolCallId: meta.toolCallId
                });
                let smartModeClassifierAllowed = false;
                const enforceSmartModePreflight = async (preflightCtx)=>{
                    if (resourceAccessor === void 0) {
                        return void 0;
                    }
                    const smartModeClassifierState = getSmartModeClassifierRuntimeState({
                        agentType: options2?.agentType,
                        requestContext: options2?.requestContext,
                        smartModeClassifierMode: options2?.smartModeClassifierMode,
                        smartModeClassifierShadowMode: options2?.smartModeClassifierShadowMode,
                        devBlockState: options2?.devSmartModeClassifierBlockState,
                        devDelayState: options2?.devSmartModeClassifierDelayState
                    });
                    const smartModeClassifierEnabled = smartModeClassifierState.enabled;
                    const smartModeClassifierShadowEnabled = smartModeClassifierState.shadowEnabled;
                    const devSmartModeClassifierBlockState = smartModeClassifierState.devBlockState;
                    const devSmartModeClassifierDelayState = smartModeClassifierState.devDelayState;
                    if (args.requestSmartModeApproval === true && smartModeClassifierEnabled) {
                        const parentBlockReason = getSmartModeBlockReasonFromArgs2(args) ?? SMART_MODE_WEB_FETCH_PARENT_REQUESTED_APPROVAL_FALLBACK_REASON;
                        return new SmartModeApproval({
                            requestId: (0, import_node_crypto42.randomUUID)(),
                            reason: parentBlockReason
                        });
                    }
                    if (args.requestSmartModeApproval !== true && (smartModeClassifierEnabled || smartModeClassifierShadowEnabled)) {
                        const precheckExecutor = resourceAccessor.get(webFetchAllowlistPrecheckExecutorResource);
                        if (precheckExecutor !== void 0) {
                            try {
                                const precheck = await precheckExecutor.execute(preflightCtx, new WebFetchAllowlistPrecheckArgs({
                                    url: args.url,
                                    toolCallId: meta.toolCallId
                                }));
                                if (precheck.allowlisted) {
                                    return void 0;
                                }
                            } catch (error3) {
                                if (error3 instanceof Error && error3.name === "AbortError") {
                                    throw error3;
                                }
                                if (isAgentStreamStartTimeoutError(error3)) {
                                    throw error3;
                                }
                            }
                        }
                    }
                    const decision = await getSmartModeWebFetchPreflightDecision(preflightCtx, {
                        resourceAccessor,
                        enabled: smartModeClassifierEnabled,
                        shadowEnabled: smartModeClassifierShadowEnabled,
                        url: args.url,
                        parsedUrl: parsed,
                        toolCallId: meta.toolCallId,
                        stateHandler: meta.stateHandler,
                        devSmartModeClassifierBlockState,
                        devSmartModeClassifierDelayState,
                        classifierMaxAttempts: options2?.smartModeClassifierMaxAttempts,
                        workspacePaths: meta.workspacePaths,
                        userAutoRunInstructions: meta.userAutoRunInstructions,
                        projectAutoRunInstructions: meta.projectAutoRunInstructions
                    });
                    if (decision.kind === "allow") {
                        smartModeClassifierAllowed = smartModeClassifierEnabled;
                        return void 0;
                    }
                    if (decision.kind === "reject") {
                        throw new ToolCallRejectedError(decision.reason);
                    }
                    throw new ToolCallRejectedError(createSmartModeWebFetchBlockedAutonomousReason(decision.reason));
                };
                const runPreflightAndQuery = async (preflightCtx)=>{
                    const smartModeApproval = await enforceSmartModePreflight(preflightCtx);
                    const skipApproval = smartModeApproval === void 0 && (smartModeClassifierAllowed || shouldSkipApproval(parsed));
                    const response = await queryWebFetch(interactionHandler.listener, preflightCtx, fetchArgs, {
                        skipApproval,
                        smartModeApproval
                    });
                    if (response.result.case === "rejected") {
                        throw new ToolCallRejectedError(response.result.value.reason || "User rejected the web fetch");
                    }
                };
                const baseToolCall = new WebFetchToolCall({
                    args: fetchArgs,
                    result: void 0
                });
                return await interactionHandler.executeToolCall(ctx, createWebFetchToolCall(baseToolCall), meta.toolCallId, async (innerCtx)=>{
                    await runPreflightAndQuery(innerCtx);
                    const fetchResult = await webFetchService(innerCtx, args.url);
                    if (isWebFetchError(fetchResult)) {
                        if (fetchResult.isTimeout) {
                            throw new ToolTimeoutError({
                                clientVisibleErrorMessage: fetchResult.error,
                                modelVisibleErrorMessage: fetchResult.error,
                                error: fetchResult.error
                            });
                        }
                        return new WebFetchResult({
                            result: {
                                case: "error",
                                value: new WebFetchError({
                                    url: args.url,
                                    error: fetchResult.error
                                })
                            }
                        });
                    }
                    const contentBytes = Buffer.byteLength(fetchResult.content, "utf8");
                    if (projectFolder && resourceAccessor && contentBytes > AGENT_TOOLS_FILE_WRITE_THRESHOLD_BYTES) {
                        const outputLocation = await writeToAgentToolsFile(ctx, resourceAccessor.get(writeExecutorResource), {
                            content: fetchResult.content,
                            projectDir: projectFolder,
                            osPlatform,
                            toolCallId: meta.toolCallId
                        });
                        if (outputLocation) {
                            return new WebFetchResult({
                                result: {
                                    case: "success",
                                    value: new WebFetchSuccess({
                                        url: args.url,
                                        markdown: fetchResult.content,
                                        outputLocation
                                    })
                                }
                            });
                        }
                    }
                    const markdown = truncateContent(fetchResult.content, MAX_CONTENT_SIZE);
                    return new WebFetchResult({
                        result: {
                            case: "success",
                            value: new WebFetchSuccess({
                                url: args.url,
                                markdown
                            })
                        }
                    });
                }, (result)=>createWebFetchToolCall(new WebFetchToolCall({
                        ...baseToolCall,
                        result
                    })), meta.hookContextCollector);
            };
            const enableHookExec = Boolean(options2?.enableExecuteHookExec);
            if (options2?.resourceAccessor && enableHookExec) {
                const hookOptions = {
                    resourceAccessor: options2.resourceAccessor,
                    enableExecuteHookExec: options2.enableExecuteHookExec,
                    configuredSteps: options2.configuredSteps,
                    model: options2.model,
                    hookContextCollector: meta.hookContextCollector
                };
                const wrappedExecute = withRemoteHooks({
                    executeFn: executeCore,
                    config: {
                        toolName: "WebFetch",
                        createToolInput: (args)=>({
                                url: args.url
                            }),
                        applyUpdatedInput: (args, input)=>{
                            if (typeof input.url === "string") {
                                args.url = input.url;
                            }
                        },
                        createRejectedResult: (_args, reason)=>new WebFetchResult({
                                result: {
                                    case: "rejected",
                                    value: new WebFetchRejected({
                                        reason
                                    })
                                }
                            }),
                        createSuccessOutput: (args, result)=>{
                            const markdown = result.result.case === "success" ? result.result.value.markdown : "";
                            const truncatedContent = truncateContent(markdown, MAX_CONTENT_SIZE);
                            return {
                                status: "success",
                                url: args.url,
                                content_length: markdown.length,
                                content: truncatedContent
                            };
                        },
                        getFailureInfo: (result)=>{
                            switch(result.result.case){
                                case "error":
                                    return {
                                        errorMessage: result.result.value.error,
                                        failureType: "error"
                                    };
                                case "rejected":
                                    return {
                                        errorMessage: result.result.value.reason ?? "Web fetch rejected",
                                        failureType: "permission_denied"
                                    };
                                case "success":
                                case void 0:
                                    return void 0;
                                default:
                                    {
                                        const _exhaustive = result.result;
                                        throw new Error(`Unhandled result case: ${_exhaustive}`);
                                    }
                            }
                        }
                    },
                    requestContext: {
                        toolCallId: meta.toolCallId
                    },
                    options: hookOptions
                });
                return wrappedExecute(spanCtxt.ctx, stripCredentialsFromArgs(rawArgs, options2?.stripCredentialedUrls));
            }
            return executeCore(spanCtxt.ctx, stripCredentialsFromArgs(rawArgs, options2?.stripCredentialedUrls));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources101(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        switch(result.result.case){
            case "success":
                {
                    const successValue = result.result.value;
                    if (successValue.outputLocation) {
                        return createStringResult(`# Content from ${successValue.url}

` + describeOutputLocation(successValue.outputLocation));
                    }
                    const truncatedMarkdown = truncateContent(successValue.markdown, MAX_CONTENT_SIZE);
                    return createStringResult(`# Content from ${successValue.url}

${truncatedMarkdown}`);
                }
            case "error":
                {
                    const errorUrl = result.result.value.url;
                    const errorMsg = result.result.value.error;
                    if (errorUrl) {
                        return createStringResult(`Error fetching URL ${errorUrl}: ${errorMsg}`);
                    }
                    return createStringResult(`Error: ${errorMsg}`);
                }
            case "rejected":
                return createStringResult(result.result.value.reason ? `Web fetch rejected: ${result.result.value.reason}` : "The web fetch was rejected by the user.");
            case void 0:
                return createStringResult("Unknown error");
            default:
                {
                    const _exhaustive = result.result;
                    throw new Error(`Unhandled result case: ${_exhaustive}`);
                }
        }
    };
    const name17 = getToolName7(promptVersion);
    return createZodAgentTool("WEB_FETCH", {
        name: name17,
        descriptionGenerator: (props)=>{
            const base = getDescription5(promptVersion, props.allTools, options2?.useMinimalHarness ?? false);
            return options2?.descriptionSuffix !== void 0 ? `${base}

${options2.descriptionSuffix}` : base;
        },
        parameters: parametersSchema29,
        execute: withSafeParsedArgs(parametersSchema29, execute, createWebFetchToolCall(new WebFetchToolCall())),
        render: render2,
        serializeError: (error3)=>{
            if (error3 instanceof ToolCallRejectedError) {
                return createWebFetchToolCall(new WebFetchToolCall({
                    result: new WebFetchResult({
                        result: {
                            case: "rejected",
                            value: new WebFetchRejected({
                                reason: error3.message
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = (()=>{
                if (error3 instanceof ToolCallError) {
                    return error3.clientVisibleErrorMessage;
                }
                if (error3 instanceof Error) {
                    const msg = error3.message ?? "";
                    const m2 = /http_(\d{3})/i.exec(msg) ?? /\bstatus(?:\s*code)?\s*[:=]?\s*(\d{3})\b/i.exec(msg) ?? /\bHTTP\/\d(?:\.\d)?\s+(\d{3})\b/i.exec(msg);
                    if (m2?.[1]) {
                        return `Error fetching URL, status code: ${Number(m2[1])}`;
                    }
                }
                return "An error occurred while fetching the URL";
            })();
            return createWebFetchToolCall(new WebFetchToolCall({
                result: new WebFetchResult({
                    result: {
                        case: "error",
                        value: new WebFetchError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
