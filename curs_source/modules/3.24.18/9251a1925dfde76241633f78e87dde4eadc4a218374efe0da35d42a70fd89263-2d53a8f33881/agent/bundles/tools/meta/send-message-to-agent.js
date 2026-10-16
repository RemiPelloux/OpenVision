import { init_common9, withSafeParsedArgs } from "../common.js";
import { init_meta_parent_task_common } from "./meta-parent-task-common.js";
import { external_exports } from "../../../../external_exports.js";
import { createZodAgentTool } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { TaskError, TaskResult, TaskToolCall, init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { createAttachmentsField, createTaskToolCall2, executeMetaParentTaskTool, getTaskResultAgentId, renderMetaParentTaskToolResult, resolveMetaParentThreading } from "../../../../tree_chunk_napi_exports.js";
var createMetaSendToTaskTool;
export { createMetaSendToTaskTool };
var __wakaru_init_send_message_to_agent_initialized = false;
export function init_send_message_to_agent() {
if (__wakaru_init_send_message_to_agent_initialized) return;
__wakaru_init_send_message_to_agent_initialized = true;
"use strict";
init_agent_pb();
init_zod();
init_common9();
init_meta_parent_task_common();
createMetaSendToTaskTool = (resourceAccessor, parentModelInfo, options2)=>{
    const parameters2 = external_exports.object({
        agent_id: external_exports.string().min(1, "agent_id is required").describe("The agent_id returned by create-agent for the agent you want to message."),
        prompt: external_exports.string().min(1, "prompt is required").describe("The follow-up prompt to send to the agent"),
        responding_to_message_ids: external_exports.array(external_exports.string()).min(1, "responding_to_message_ids must contain at least one message id").describe("Array of user message IDs this tool call is responding to. Usually this is the latest user message ID, but include older IDs for delayed actions or when a later message clarifies an earlier one. List multiple IDs when replying to multiple user messages."),
        attachments: createAttachmentsField("agent")
    });
    return createZodAgentTool("SEND_TO_TASK", {
        name: "send-message-to-agent",
        descriptionGenerator: ()=>"Send a prompt to an existing asynchronous agent after it has completed. If the agent is still running, the request fails; wait for its completion before sending a follow-up.",
        parameters: parameters2,
        execute: withSafeParsedArgs(parameters2, async (ctx, interactionHandler, rawArgs, meta)=>{
            const preferredThreadId = options2.stateHandler?.getSubagentThreadId(rawArgs.agent_id);
            const threadResolution = await resolveMetaParentThreading({
                parentCtx: ctx,
                stateHandler: options2.stateHandler,
                respondingToMessageIds: rawArgs.responding_to_message_ids,
                preferredThreadId
            });
            const taskResult = await executeMetaParentTaskTool({
                parentCtx: ctx,
                interactionHandler,
                meta,
                taskArgs: {
                    description: `Follow up for agent ${rawArgs.agent_id}`,
                    prompt: rawArgs.prompt,
                    respondingToMessageIds: rawArgs.responding_to_message_ids,
                    resumeTaskId: rawArgs.agent_id,
                    attachments: rawArgs.attachments
                },
                parentModelInfo,
                resourceAccessor,
                options: options2
            });
            if (options2.stateHandler !== void 0 && taskResult.result.case === "success") {
                if (threadResolution.threadId !== void 0 && threadResolution.threadId.length > 0) {
                    await options2.stateHandler.canonicalizePromptReferenceMatchThreads({
                        ctx,
                        matches: threadResolution.matches,
                        canonicalThreadId: threadResolution.threadId,
                        additionalThreadIds: preferredThreadId !== void 0 ? [
                            preferredThreadId
                        ] : []
                    });
                }
                options2.stateHandler.setSubagentThreadId(rawArgs.agent_id, threadResolution.threadId);
                const resolvedAgentId = getTaskResultAgentId(taskResult);
                if (resolvedAgentId !== void 0 && resolvedAgentId.length > 0 && resolvedAgentId !== rawArgs.agent_id) {
                    options2.stateHandler.setSubagentThreadId(resolvedAgentId, threadResolution.threadId);
                }
            }
            return taskResult;
        }, createTaskToolCall2(new TaskToolCall())),
        render: async (_ctx, taskResult)=>renderMetaParentTaskToolResult({
                taskResult,
                action: "send"
            }),
        serializeError: (error3)=>createTaskToolCall2(new TaskToolCall({
                result: new TaskResult({
                    result: {
                        case: "error",
                        value: new TaskError({
                            error: error3 instanceof Error ? error3.message : String(error3)
                        })
                    }
                })
            }))
    });
};

}
