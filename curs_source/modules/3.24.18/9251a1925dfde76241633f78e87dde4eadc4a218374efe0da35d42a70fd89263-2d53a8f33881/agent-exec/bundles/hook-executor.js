import { SimpleControlledExecHandler, init_controlled2 } from "./controlled.js";
import { ExecutorResource, init_remote } from "./remote.js";
import { RESOURCE_NAMES, init_resource_names } from "./resource-names.js";
import { init_resource_provider } from "./resource-provider.js";
import { init_serialization } from "./serialization.js";
import { createClientDeserializer, createClientSerializer, createResource, createServerDeserializer, createServerSerializer, protoAttachmentsToPromptAttachments, toBaseHookModelFields } from "../../dist_exports.js";
import { HookStep } from "../../hooks/dist/hook-step.js";
import { init_dist6 } from "../../hooks/dist/index.js";
import { ExecuteHookResponse, ExecuteHookResult, init_exec_pb } from "../../proto/dist/generated/agent/v1/exec_pb.js";
import { AfterAgentResponseRequestResponse, AfterAgentThoughtRequestResponse, BeforeSubmitPromptRequestResponse, PostToolUseFailureRequestResponse, PostToolUseRequestResponse, PreCompactRequestResponse, PreToolUseRequestResponse, StopRequestResponse, SubagentStartRequestResponse, SubagentStopRequestResponse, init_hooks_pb } from "../../proto/dist/generated/agent/v1/hooks_pb.js";
var hookExecutorResource, LocalHookExecutorImpl;
export { LocalHookExecutorImpl, hookExecutorResource };
var __wakaru_init_hook_executor_initialized = false;
export function init_hook_executor() {
if (__wakaru_init_hook_executor_initialized) return;
__wakaru_init_hook_executor_initialized = true;
"use strict";
init_dist6();
init_exec_pb();
init_hooks_pb();
init_controlled2();
init_remote();
init_resource_names();
init_resource_provider();
init_serialization();
hookExecutorResource = createResource(RESOURCE_NAMES.hookExecutor, (execManager)=>new ExecutorResource(execManager, createServerSerializer("executeHookArgs"), createClientDeserializer("executeHookResult")), (implementation, controlledExecManager)=>{
    controlledExecManager.register(new SimpleControlledExecHandler(implementation, createServerDeserializer("executeHookArgs"), createClientSerializer("executeHookResult")));
});
LocalHookExecutorImpl = class {
    constructor(hookExecutor){
        this.hookExecutor = hookExecutor;
    }
    hasFailClosedHooksForStep(step, toolName) {
        return this.hookExecutor.hasFailClosedHooksForStep?.(step, toolName) ?? false;
    }
    async execute(_ctx, args) {
        const request3 = args.request;
        if (!request3) {
            return new ExecuteHookResult({
                response: void 0
            });
        }
        switch(request3.request.case){
            case "preCompact":
                {
                    const preCompactQuery = request3.request.value;
                    const hookRequest = {
                        conversation_id: preCompactQuery.conversationId ?? "",
                        generation_id: preCompactQuery.generationId ?? "",
                        model: preCompactQuery.model ?? "",
                        ...toBaseHookModelFields(preCompactQuery),
                        trigger: preCompactQuery.trigger === "manual" ? "manual" : "auto",
                        context_usage_percent: preCompactQuery.contextUsagePercent,
                        context_tokens: Number(preCompactQuery.contextTokens),
                        context_window_size: Number(preCompactQuery.contextWindowSize),
                        message_count: preCompactQuery.messageCount,
                        messages_to_compact: preCompactQuery.messagesToCompact,
                        is_first_compaction: preCompactQuery.isFirstCompaction
                    };
                    const response = await this.hookExecutor.executeHookForStep(HookStep.preCompact, hookRequest);
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "preCompact",
                                value: new PreCompactRequestResponse({
                                    userMessage: response?.user_message
                                })
                            }
                        })
                    });
                }
            case "subagentStart":
                {
                    const subagentStartQuery = request3.request.value;
                    const hookRequest = {
                        conversation_id: subagentStartQuery.conversationId ?? "",
                        generation_id: subagentStartQuery.generationId ?? "",
                        model: subagentStartQuery.model ?? "",
                        ...toBaseHookModelFields(subagentStartQuery),
                        subagent_id: subagentStartQuery.subagentId,
                        subagent_type: subagentStartQuery.subagentType,
                        task: subagentStartQuery.task,
                        parent_conversation_id: subagentStartQuery.parentConversationId,
                        tool_call_id: subagentStartQuery.toolCallId,
                        subagent_model: subagentStartQuery.subagentModel,
                        is_parallel_worker: subagentStartQuery.isParallelWorker,
                        git_branch: subagentStartQuery.gitBranch
                    };
                    const response = await this.hookExecutor.executeHookForStep(HookStep.subagentStart, hookRequest);
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "subagentStart",
                                value: new SubagentStartRequestResponse({
                                    permission: response?.permission,
                                    userMessage: response?.user_message,
                                    additionalContext: response?.additional_context
                                })
                            }
                        })
                    });
                }
            case "subagentStop":
                {
                    const subagentStopQuery = request3.request.value;
                    const hookRequest = {
                        conversation_id: subagentStopQuery.conversationId ?? "",
                        generation_id: subagentStopQuery.generationId ?? "",
                        model: subagentStopQuery.model ?? "",
                        ...toBaseHookModelFields(subagentStopQuery),
                        subagent_id: subagentStopQuery.subagentId,
                        subagent_type: subagentStopQuery.subagentType,
                        status: subagentStopQuery.status,
                        duration_ms: Number(subagentStopQuery.durationMs),
                        summary: subagentStopQuery.summary,
                        parent_conversation_id: subagentStopQuery.parentConversationId,
                        message_count: subagentStopQuery.messageCount,
                        tool_call_count: subagentStopQuery.toolCallCount,
                        error_message: subagentStopQuery.errorMessage,
                        modified_files: subagentStopQuery.modifiedFiles,
                        git_branch: subagentStopQuery.gitBranch,
                        loop_count: subagentStopQuery.loopCount ?? 0,
                        task: subagentStopQuery.task,
                        description: subagentStopQuery.description,
                        ...subagentStopQuery.childConversationId ? {
                            child_conversation_id: subagentStopQuery.childConversationId
                        } : {}
                    };
                    const response = await this.hookExecutor.executeHookForStep(HookStep.subagentStop, hookRequest);
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "subagentStop",
                                value: new SubagentStopRequestResponse({
                                    followupMessage: response?.followup_message,
                                    additionalContext: response?.additional_context
                                })
                            }
                        })
                    });
                }
            case "beforeSubmitPrompt":
                {
                    const beforeSubmitPromptQuery = request3.request.value;
                    const response = await this.hookExecutor.executeHookForStep(HookStep.beforeSubmitPrompt, {
                        conversation_id: beforeSubmitPromptQuery.conversationId ?? "",
                        generation_id: beforeSubmitPromptQuery.generationId ?? "",
                        model: beforeSubmitPromptQuery.model ?? "",
                        ...toBaseHookModelFields(beforeSubmitPromptQuery),
                        prompt: beforeSubmitPromptQuery.prompt,
                        attachments: protoAttachmentsToPromptAttachments(beforeSubmitPromptQuery.attachments),
                        composer_mode: beforeSubmitPromptQuery.composerMode
                    });
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "beforeSubmitPrompt",
                                value: new BeforeSubmitPromptRequestResponse({
                                    continue: response?.continue,
                                    userMessage: response?.user_message,
                                    additionalContext: response?.additional_context
                                })
                            }
                        })
                    });
                }
            case "afterAgentResponse":
                {
                    const afterAgentResponseQuery = request3.request.value;
                    await this.hookExecutor.executeHookForStep(HookStep.afterAgentResponse, {
                        conversation_id: afterAgentResponseQuery.conversationId ?? "",
                        generation_id: afterAgentResponseQuery.generationId ?? "",
                        model: afterAgentResponseQuery.model ?? "",
                        ...toBaseHookModelFields(afterAgentResponseQuery),
                        text: afterAgentResponseQuery.text,
                        input_tokens: afterAgentResponseQuery.inputTokens !== void 0 ? Number(afterAgentResponseQuery.inputTokens) : void 0,
                        output_tokens: afterAgentResponseQuery.outputTokens !== void 0 ? Number(afterAgentResponseQuery.outputTokens) : void 0,
                        cache_read_tokens: afterAgentResponseQuery.cacheReadTokens !== void 0 ? Number(afterAgentResponseQuery.cacheReadTokens) : void 0,
                        cache_write_tokens: afterAgentResponseQuery.cacheWriteTokens !== void 0 ? Number(afterAgentResponseQuery.cacheWriteTokens) : void 0
                    });
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "afterAgentResponse",
                                value: new AfterAgentResponseRequestResponse()
                            }
                        })
                    });
                }
            case "afterAgentThought":
                {
                    const afterAgentThoughtQuery = request3.request.value;
                    await this.hookExecutor.executeHookForStep(HookStep.afterAgentThought, {
                        conversation_id: afterAgentThoughtQuery.conversationId ?? "",
                        generation_id: afterAgentThoughtQuery.generationId ?? "",
                        model: afterAgentThoughtQuery.model ?? "",
                        ...toBaseHookModelFields(afterAgentThoughtQuery),
                        text: afterAgentThoughtQuery.text,
                        duration_ms: afterAgentThoughtQuery.durationMs !== void 0 ? Number(afterAgentThoughtQuery.durationMs) : void 0
                    });
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "afterAgentThought",
                                value: new AfterAgentThoughtRequestResponse()
                            }
                        })
                    });
                }
            case "stop":
                {
                    const stopQuery = request3.request.value;
                    const response = await this.hookExecutor.executeHookForStep(HookStep.stop, {
                        conversation_id: stopQuery.conversationId ?? "",
                        generation_id: stopQuery.generationId ?? "",
                        model: stopQuery.model ?? "",
                        ...toBaseHookModelFields(stopQuery),
                        status: stopQuery.status,
                        loop_count: stopQuery.loopCount,
                        input_tokens: stopQuery.inputTokens !== void 0 ? Number(stopQuery.inputTokens) : void 0,
                        output_tokens: stopQuery.outputTokens !== void 0 ? Number(stopQuery.outputTokens) : void 0,
                        cache_read_tokens: stopQuery.cacheReadTokens !== void 0 ? Number(stopQuery.cacheReadTokens) : void 0,
                        cache_write_tokens: stopQuery.cacheWriteTokens !== void 0 ? Number(stopQuery.cacheWriteTokens) : void 0
                    });
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "stop",
                                value: new StopRequestResponse({
                                    followupMessage: response?.followup_message
                                })
                            }
                        })
                    });
                }
            case "preToolUse":
                {
                    const preToolUseQuery = request3.request.value;
                    const toolInput = preToolUseQuery.toolInput ? preToolUseQuery.toolInput.toJson() : {};
                    const hookRequest = {
                        conversation_id: preToolUseQuery.conversationId ?? "",
                        generation_id: preToolUseQuery.generationId ?? "",
                        model: preToolUseQuery.model ?? "",
                        ...toBaseHookModelFields(preToolUseQuery),
                        ...preToolUseQuery.parentToolCallId ? {
                            parent_tool_call_id: preToolUseQuery.parentToolCallId
                        } : {},
                        tool_name: preToolUseQuery.toolName,
                        tool_input: toolInput,
                        tool_use_id: preToolUseQuery.toolUseId,
                        cwd: preToolUseQuery.cwd
                    };
                    const response = await this.hookExecutor.executeHookForStep(HookStep.preToolUse, hookRequest);
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "preToolUse",
                                value: new PreToolUseRequestResponse({
                                    permission: response?.permission,
                                    userMessage: response?.user_message,
                                    agentMessage: response?.agent_message,
                                    updatedInput: response?.updated_input ? JSON.stringify(response.updated_input) : void 0,
                                    additionalContext: response?.additional_context
                                })
                            }
                        })
                    });
                }
            case "postToolUse":
                {
                    const postToolUseQuery = request3.request.value;
                    const toolInput = postToolUseQuery.toolInput ? postToolUseQuery.toolInput.toJson() : {};
                    const hookRequest = {
                        conversation_id: postToolUseQuery.conversationId ?? "",
                        generation_id: postToolUseQuery.generationId ?? "",
                        model: postToolUseQuery.model ?? "",
                        ...toBaseHookModelFields(postToolUseQuery),
                        ...postToolUseQuery.parentToolCallId ? {
                            parent_tool_call_id: postToolUseQuery.parentToolCallId
                        } : {},
                        tool_name: postToolUseQuery.toolName,
                        tool_input: toolInput,
                        tool_output: postToolUseQuery.toolOutput,
                        duration: Number(postToolUseQuery.durationMs),
                        tool_use_id: postToolUseQuery.toolUseId,
                        cwd: postToolUseQuery.cwd
                    };
                    const response = await this.hookExecutor.executeHookForStep(HookStep.postToolUse, hookRequest);
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "postToolUse",
                                value: new PostToolUseRequestResponse({
                                    additionalContext: response?.additional_context
                                })
                            }
                        })
                    });
                }
            case "postToolUseFailure":
                {
                    const postToolUseFailureQuery = request3.request.value;
                    const toolInput = postToolUseFailureQuery.toolInput ? postToolUseFailureQuery.toolInput.toJson() : {};
                    const hookRequest = {
                        conversation_id: postToolUseFailureQuery.conversationId ?? "",
                        generation_id: postToolUseFailureQuery.generationId ?? "",
                        model: postToolUseFailureQuery.model ?? "",
                        ...toBaseHookModelFields(postToolUseFailureQuery),
                        ...postToolUseFailureQuery.parentToolCallId ? {
                            parent_tool_call_id: postToolUseFailureQuery.parentToolCallId
                        } : {},
                        tool_name: postToolUseFailureQuery.toolName,
                        tool_input: toolInput,
                        error_message: postToolUseFailureQuery.errorMessage,
                        failure_type: postToolUseFailureQuery.failureType,
                        duration: Number(postToolUseFailureQuery.durationMs),
                        tool_use_id: postToolUseFailureQuery.toolUseId,
                        is_interrupt: postToolUseFailureQuery.isInterrupt
                    };
                    const response = await this.hookExecutor.executeHookForStep(HookStep.postToolUseFailure, hookRequest);
                    return new ExecuteHookResult({
                        response: new ExecuteHookResponse({
                            response: {
                                case: "postToolUseFailure",
                                value: new PostToolUseFailureRequestResponse({
                                    additionalContext: response?.additional_context
                                })
                            }
                        })
                    });
                }
            default:
                return new ExecuteHookResult({
                    response: void 0
                });
        }
    }
};

}
