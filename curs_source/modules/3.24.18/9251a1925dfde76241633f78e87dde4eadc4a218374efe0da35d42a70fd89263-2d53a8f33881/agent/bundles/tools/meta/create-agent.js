import { init_common9, withSafeParsedArgs } from "../common.js";
import { init_meta_parent_task_common } from "./meta-parent-task-common.js";
import { META_PARENT_COMPLETION_OPEN_TAG, init_meta_parent_completion_protocol } from "../../utils/meta-parent-completion-protocol.js";
import { external_exports } from "../../../../external_exports.js";
import { createZodAgentTool } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { TaskError, TaskResult, TaskToolCall, init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { TaskMode, init_subagents_pb } from "../../../../proto/dist/generated/agent/v1/subagents_pb.js";
import { createAttachmentsField, createTaskToolCall2, executeMetaParentTaskTool, getTaskResultAgentId, renderMetaParentTaskToolResult, resolveMetaParentThreading } from "../../../../tree_chunk_napi_exports.js";
var createMetaCreateTaskTool;
export { createMetaCreateTaskTool };
var __wakaru_init_create_agent_initialized = false;
export function init_create_agent() {
if (__wakaru_init_create_agent_initialized) return;
__wakaru_init_create_agent_initialized = true;
"use strict";
init_agent_pb();
init_subagents_pb();
init_zod();
init_meta_parent_completion_protocol();
init_common9();
init_meta_parent_task_common();
createMetaCreateTaskTool = (resourceAccessor, parentModelInfo, options2)=>{
    const parameters2 = external_exports.object({
        title: external_exports.string().min(1, "title is required").describe("A short, user-friendly title for the agent to create. This appears in the UI as the agent's name. Make it concrete and distinct, consider recent titles to avoid reuse, and vary the first word across agent titles."),
        description: external_exports.string().min(1, "description is required").describe("A brief description of this agent's scope of work. 10 words or less."),
        prompt: external_exports.string().min(1, "prompt is required").describe("The prompt for the new asynchronous agent. DO NOT tell the agent that you are a meta-agent. Your prompt should be presented as just a normal user prompt."),
        responding_to_message_ids: external_exports.array(external_exports.string()).min(1, "responding_to_message_ids must contain at least one message id").describe("Array of user message IDs this tool call is responding to. Usually this is the latest user message ID, but include older IDs for delayed actions or when a later message clarifies an earlier one. List multiple IDs when replying to multiple user messages."),
        fork: external_exports.string().min(1, "fork must be a non-empty agent_id").optional().describe("Optional agent_id of a direct child agent to fork from. Use when you wish to start a new agent with the history of an existing agent. Common cases: parallel work that does not depend on the child's in-flight output, status check or question for a running child without interrupting its work, or multiple independent follow-ups from a completed child (e.g. splitting independent TODOs). Explicitly instruct new agent to fully shift its focus to the new task rather than continuing work on the prior task. Do not stop the work of the agent you are forking from (if you are doing this, resume that agent with `interrupt=true` instead). New agent must be given its own unique title."),
        attachments: createAttachmentsField("new agent")
    });
    return createZodAgentTool("CREATE_TASK", {
        name: "create-agent",
        descriptionGenerator: ()=>"Create an asynchronous agent with the provided prompt. Use `title` to provide a short user-facing name for the new agent. Returns agent_id of the created agent. Agent results will be reported asynchronously as user messages surrounded by " + META_PARENT_COMPLETION_OPEN_TAG + ". ",
        parameters: parameters2,
        execute: withSafeParsedArgs(parameters2, async (ctx, interactionHandler, rawArgs, meta)=>{
            const threadResolution = await resolveMetaParentThreading({
                parentCtx: ctx,
                stateHandler: options2.stateHandler,
                respondingToMessageIds: rawArgs.responding_to_message_ids
            });
            const taskResult = await executeMetaParentTaskTool({
                parentCtx: ctx,
                interactionHandler,
                meta,
                taskArgs: {
                    description: rawArgs.title,
                    prompt: rawArgs.prompt,
                    respondingToMessageIds: rawArgs.responding_to_message_ids,
                    mode: TaskMode.AGENT,
                    forkTaskId: rawArgs.fork,
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
                        canonicalThreadId: threadResolution.threadId
                    });
                }
                const createdAgentId = getTaskResultAgentId(taskResult);
                if (createdAgentId !== void 0 && createdAgentId.length > 0) {
                    options2.stateHandler.setSubagentThreadId(createdAgentId, threadResolution.threadId);
                }
            }
            return taskResult;
        }, createTaskToolCall2(new TaskToolCall())),
        render: async (_ctx, taskResult)=>renderMetaParentTaskToolResult({
                taskResult,
                action: "create"
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
