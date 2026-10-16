import { init_dist8 } from "../../../agent-exec/dist/index.js";
import { SYMBOLIC_PATH_ARGUMENT_PREFIX } from "../../../agent-exec/dist/symbolic-path-args.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { HookAdditionalContextTooLargeError } from "../../../hooks-carriers/dist/errors.js";
import { init_dist30 } from "../../../hooks-carriers/dist/index.js";
import { init_generic_hooks, roundDurationMs } from "../generic-hooks.js";
import { init_hook_error_handling } from "../hook-error-handling.js";
import { HookStep } from "../../../hooks/dist/hook-step.js";
import { init_dist6 } from "../../../hooks/dist/index.js";
import { appendHookAdditionalContexts, createHookAdditionalContexts, createHookDenialMessage, formatFailClosedBlockReason, safeBuildPostHookCarrier } from "../../../mcp_sandbox_policy_exports.js";
import { Value } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/struct_pb.js";
import { init_esm2 } from "../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { McpError, McpPermissionDenied, McpResult, McpSuccess, McpTextContent, McpToolResultContentItem, init_mcp_exec_pb } from "../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
var import_node_crypto25, import_node_perf_hooks3, logger49, McpToolExecutorWithHooks;
export { McpToolExecutorWithHooks, import_node_crypto25, import_node_perf_hooks3, logger49 };
var __wakaru_init_mcp7_initialized = false;
export function init_mcp7() {
if (__wakaru_init_mcp7_initialized) return;
__wakaru_init_mcp7_initialized = true;
"use strict";
import_node_crypto25 = require("node:crypto");
import_node_perf_hooks3 = require("node:perf_hooks");
init_dist8();
init_dist();
init_dist6();
init_dist30();
init_hook_error_handling();
init_mcp_exec_pb();
init_esm2();
init_generic_hooks();
logger49 = createLogger("hooks-exec:mcp");
McpToolExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor, mcpLease, hooksConfigLease){
        this.innerExecutor = innerExecutor;
        this.hookExecutor = hookExecutor;
        this.baseHookRequestExtractor = baseHookRequestExtractor;
        this.mcpLease = mcpLease;
        this.hooksConfigLease = hooksConfigLease;
    }
    async execute(ctx, args, options2) {
        if (args.smartModeApprovalOnly) {
            return this.innerExecutor.execute(ctx, args, options2);
        }
        if (args.symbolicPathArguments.length > 0 && (this.hooksConfigLease?.hasHookForStep(HookStep.preToolUse) === true || this.hooksConfigLease?.hasHookForStep(HookStep.beforeMCPExecution) === true)) {
            return new McpResult({
                result: {
                    case: "error",
                    value: new McpError({
                        error: `"${SYMBOLIC_PATH_ARGUMENT_PREFIX}" arguments can't be used on this computer: hooks that inspect MCP calls are configured here, and they would not see the file's contents. Read the file and pass its contents instead.`
                    })
                }
            });
        }
        const baseHookRequest = this.baseHookRequestExtractor(ctx);
        const toolUseId = (0, import_node_crypto25.randomUUID)();
        const hookContextCollector = options2?.hookContextCollector ?? [];
        let toolInput = Object.fromEntries(Object.entries(args.args).map(([key, value])=>[
                key,
                value?.toJson()
            ]));
        const genericToolName = `MCP:${args.toolName}`;
        try {
            const preToolUseResponse = await this.hookExecutor.executeHookForStep(HookStep.preToolUse, {
                ...baseHookRequest,
                tool_name: genericToolName,
                tool_input: toolInput,
                tool_use_id: toolUseId
            });
            if (preToolUseResponse?.permission === "deny") {
                const reason = preToolUseResponse.user_message || "MCP tool blocked by preToolUse hook";
                try {
                    appendHookAdditionalContexts(hookContextCollector, createHookAdditionalContexts({
                        hookEventName: HookStep.preToolUse,
                        additionalContext: preToolUseResponse.additional_context
                    }));
                } catch (carrierError) {
                    if (carrierError instanceof HookAdditionalContextTooLargeError) {
                        logger49.warn(ctx, "preToolUse deny additional_context exceeded max size; dropping carrier", {
                            toolName: genericToolName,
                            actualLength: carrierError.actualLength,
                            maxLength: carrierError.maxLength
                        });
                    } else {
                        throw carrierError;
                    }
                }
                await this.firePostToolUseFailureAsync(ctx, baseHookRequest, genericToolName, toolInput, reason, "permission_denied", 0, toolUseId, false, hookContextCollector);
                return new McpResult({
                    result: {
                        case: "permissionDenied",
                        value: new McpPermissionDenied({
                            error: createHookDenialMessage("MCP tool execution", reason),
                            isReadonly: false
                        })
                    }
                });
            }
            if (preToolUseResponse?.updated_input) {
                try {
                    for (const [key, val] of Object.entries(preToolUseResponse.updated_input)){
                        if (val === void 0) continue;
                        args.args[key] = Value.fromJson(val);
                    }
                    toolInput = Object.fromEntries(Object.entries(args.args).map(([key, value])=>[
                            key,
                            value?.toJson()
                        ]));
                } catch (e) {
                    logger49.warn(ctx, "Failed to merge updated_input for MCP", {
                        error: e instanceof Error ? e.message : String(e)
                    });
                }
            }
            appendHookAdditionalContexts(hookContextCollector, createHookAdditionalContexts({
                hookEventName: HookStep.preToolUse,
                additionalContext: preToolUseResponse?.additional_context
            }));
        } catch (e) {
            const hasFailClosed = this.hookExecutor.hasFailClosedHooksForStep?.(HookStep.preToolUse, genericToolName) ?? false;
            const isOversize = e instanceof HookAdditionalContextTooLargeError;
            const detailPrefix = isOversize ? "preToolUse additional_context exceeded max size" : "preToolUse hook failed";
            if (hasFailClosed) {
                const detail = e instanceof Error ? e.message : "preToolUse hook error";
                const reason = formatFailClosedBlockReason(`${detailPrefix}: ${detail}`);
                await this.firePostToolUseFailureAsync(ctx, baseHookRequest, genericToolName, toolInput, reason, "error", 0, toolUseId, false, hookContextCollector);
                return new McpResult({
                    result: {
                        case: "permissionDenied",
                        value: new McpPermissionDenied({
                            error: createHookDenialMessage("MCP tool execution", reason),
                            isReadonly: false
                        })
                    }
                });
            }
            logger49.warn(ctx, isOversize ? "preToolUse additional_context exceeded max size; dropping carrier" : "preToolUse hook error in MCP executor", {
                toolName: genericToolName,
                error: e instanceof Error ? e.message : String(e),
                ...isOversize ? {
                    actualLength: e.actualLength,
                    maxLength: e.maxLength
                } : {}
            });
        }
        const mcpClient = await this.mcpLease?.getClient(ctx, args.providerIdentifier);
        const mcpConfig = mcpClient?.config;
        let serverConnectionField;
        const mcpServerUrl = mcpConfig && "url" in mcpConfig && mcpConfig.url ? mcpConfig.url : void 0;
        if (mcpServerUrl !== void 0) {
            serverConnectionField = {
                url: mcpServerUrl
            };
        } else if (mcpConfig && "command" in mcpConfig) {
            const commandParts = [
                mcpConfig.command,
                ...mcpConfig.args ?? []
            ].filter(Boolean);
            serverConnectionField = {
                command: commandParts.join(" ")
            };
        } else {
            serverConnectionField = {
                command: args.providerIdentifier
            };
        }
        const mcpHookIdentityFields = {
            mcp_server_name: args.providerIdentifier,
            ...mcpServerUrl !== void 0 ? {
                mcp_server_url: mcpServerUrl
            } : {}
        };
        const beforeHookRequest = {
            ...baseHookRequest,
            tool_name: args.toolName,
            tool_input: JSON.stringify(toolInput),
            tool_use_id: toolUseId,
            ...mcpHookIdentityFields,
            ...serverConnectionField
        };
        const beforeHookResponse = await this.hookExecutor.executeHookForStep(HookStep.beforeMCPExecution, beforeHookRequest);
        if (beforeHookResponse?.permission === "deny") {
            const errorMessage4 = createHookDenialMessage("MCP tool execution", beforeHookResponse.user_message);
            await this.firePostToolUseFailureAsync(ctx, baseHookRequest, genericToolName, toolInput, errorMessage4, "permission_denied", 0, toolUseId, false, hookContextCollector);
            return new McpResult({
                result: {
                    case: "permissionDenied",
                    value: new McpPermissionDenied({
                        error: errorMessage4,
                        isReadonly: false
                    })
                }
            });
        }
        const executionStartTimeMs = import_node_perf_hooks3.performance.now();
        try {
            const result = await this.innerExecutor.execute(ctx, args, options2);
            const executionDurationMs = roundDurationMs(import_node_perf_hooks3.performance.now() - executionStartTimeMs);
            let resultJson = "{}";
            if (result.result.case === "success") {
                try {
                    const content = result.result.value.content.map((item)=>{
                        if (item.content.case === "text") {
                            return {
                                type: "text",
                                text: item.content.value.text
                            };
                        } else if (item.content.case === "image") {
                            return {
                                type: "image",
                                data: Buffer.from(item.content.value.data).toString("base64"),
                                mimeType: item.content.value.mimeType
                            };
                        }
                        return {
                            type: "unknown"
                        };
                    });
                    resultJson = JSON.stringify({
                        content,
                        isError: result.result.value.isError
                    });
                } catch (e) {
                    logger49.warn(ctx, "Failed to serialize MCP result", {
                        error: e instanceof Error ? e.message : String(e)
                    });
                    resultJson = JSON.stringify({
                        error: "Failed to serialize result"
                    });
                }
            } else if (result.result.case === "error") {
                resultJson = JSON.stringify({
                    error: result.result.value.error
                });
            } else if (result.result.case === "rejected") {
                resultJson = JSON.stringify({
                    rejected: true,
                    reason: result.result.value.reason
                });
            } else if (result.result.case === "permissionDenied") {
                resultJson = JSON.stringify({
                    permissionDenied: true,
                    error: result.result.value.error
                });
            }
            const afterHookRequest = {
                ...baseHookRequest,
                tool_name: args.toolName,
                tool_input: JSON.stringify(toolInput),
                result_json: resultJson,
                duration: executionDurationMs,
                tool_use_id: toolUseId,
                ...mcpHookIdentityFields
            };
            await this.hookExecutor.executeHookForStep(HookStep.afterMCPExecution, afterHookRequest);
            const postToolUseResponse = await this.firePostToolUse(ctx, baseHookRequest, genericToolName, toolInput, resultJson, executionDurationMs, toolUseId, hookContextCollector);
            if (postToolUseResponse?.updated_mcp_tool_output !== void 0) {
                try {
                    const updatedOutput = postToolUseResponse.updated_mcp_tool_output;
                    const contentItems = [];
                    if (typeof updatedOutput === "string") {
                        contentItems.push(new McpToolResultContentItem({
                            content: {
                                case: "text",
                                value: new McpTextContent({
                                    text: updatedOutput
                                })
                            }
                        }));
                    } else if (typeof updatedOutput === "object" && updatedOutput !== null && "content" in updatedOutput && Array.isArray(updatedOutput.content)) {
                        const contentArray = updatedOutput.content;
                        for (const item of contentArray){
                            if (typeof item === "object" && item !== null && "type" in item && item.type === "text" && "text" in item) {
                                contentItems.push(new McpToolResultContentItem({
                                    content: {
                                        case: "text",
                                        value: new McpTextContent({
                                            text: String(item.text)
                                        })
                                    }
                                }));
                            } else {
                                contentItems.push(new McpToolResultContentItem({
                                    content: {
                                        case: "text",
                                        value: new McpTextContent({
                                            text: JSON.stringify(item)
                                        })
                                    }
                                }));
                            }
                        }
                    } else {
                        contentItems.push(new McpToolResultContentItem({
                            content: {
                                case: "text",
                                value: new McpTextContent({
                                    text: JSON.stringify(updatedOutput)
                                })
                            }
                        }));
                    }
                    const isError = typeof updatedOutput === "object" && updatedOutput !== null && "isError" in updatedOutput ? Boolean(updatedOutput.isError) : false;
                    return new McpResult({
                        result: {
                            case: "success",
                            value: new McpSuccess({
                                content: contentItems,
                                isError
                            })
                        }
                    });
                } catch (e) {
                    logger49.warn(ctx, "Failed to process updated_mcp_tool_output", {
                        error: e instanceof Error ? e.message : String(e)
                    });
                    return result;
                }
            }
            return result;
        } catch (error3) {
            const executionDurationMs = roundDurationMs(import_node_perf_hooks3.performance.now() - executionStartTimeMs);
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            await this.firePostToolUseFailureAsync(ctx, baseHookRequest, genericToolName, toolInput, errorMessage4, "error", executionDurationMs, toolUseId, false, hookContextCollector);
            throw error3;
        }
    }
    async firePostToolUse(ctx, baseHookRequest, toolName, toolInput, toolOutput, duration3, toolUseId, hookContextCollector) {
        try {
            const response = await this.hookExecutor.executeHookForStep(HookStep.postToolUse, {
                ...baseHookRequest,
                tool_name: toolName,
                tool_input: toolInput,
                tool_output: toolOutput,
                duration: duration3,
                tool_use_id: toolUseId
            });
            appendHookAdditionalContexts(hookContextCollector, safeBuildPostHookCarrier(ctx, toolName, HookStep.postToolUse, response?.additional_context));
            return response;
        } catch (e) {
            logger49.warn(ctx, "postToolUse hook error in MCP executor", {
                error: e instanceof Error ? e.message : String(e)
            });
            return void 0;
        }
    }
    async firePostToolUseFailureAsync(ctx, baseHookRequest, toolName, toolInput, errorMessage4, failureType, duration3, toolUseId, isInterrupt, hookContextCollector) {
        try {
            const response = await this.hookExecutor.executeHookForStep(HookStep.postToolUseFailure, {
                ...baseHookRequest,
                tool_name: toolName,
                tool_input: toolInput,
                error_message: errorMessage4,
                failure_type: failureType,
                duration: duration3,
                tool_use_id: toolUseId,
                is_interrupt: isInterrupt
            });
            appendHookAdditionalContexts(hookContextCollector, safeBuildPostHookCarrier(ctx, toolName, HookStep.postToolUseFailure, response?.additional_context));
        } catch (e) {
            logger49.warn(ctx, "postToolUseFailure hook error in MCP executor", {
                error: e instanceof Error ? e.message : String(e)
            });
        }
    }
};

}
