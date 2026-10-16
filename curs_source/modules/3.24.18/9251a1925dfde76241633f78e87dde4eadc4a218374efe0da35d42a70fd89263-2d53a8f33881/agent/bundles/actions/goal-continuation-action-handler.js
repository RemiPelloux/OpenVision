import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_goal_metrics } from "../goal-metrics.js";
import { init_state } from "../state.js";
import { ToolCountingStateTracker, init_tool_counting_middleware } from "../tool-counting-middleware.js";
import { FileOperationLockManager, init_file_operation_lock_manager } from "../tools/core/file-operation-lock-manager.js";
import { init_prompt_xml_escape } from "../utils/prompt-xml-escape.js";
import { getConversationId, init_request_id } from "../utils/request-id.js";
import { init_dist2 } from "../../../constants/dist/index.js";
import { goalClockOnDeactivation, isGoalStateShapeValid } from "../../../dist_exports.js";
import { buildGoalContinuationPrompt, createRedactedUserMessageAction, createToolCountingMiddleware, ensureUserMessageTiming, recordGoalContinuationStarted, recordGoalTerminalTransition, toRedactedUserMessage2 } from "../../../mcp_sandbox_policy_exports.js";
import { AgentMode, SimulatedMsgReason, UserMessage, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { GoalStatus, init_goal_tool_pb } from "../../../proto/dist/generated/agent/v1/goal_tool_pb.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
var import_node_crypto35, MAX_IDLE_CONTINUATIONS_WITHOUT_TOOL_CALLS, GOAL_NOTIFICATION_SOURCE_ATTRIBUTE, GOAL_CONTINUATION_USER_MESSAGE_OPTIONS, GoalContinuationActionHandler;
export { GOAL_CONTINUATION_USER_MESSAGE_OPTIONS, GOAL_NOTIFICATION_SOURCE_ATTRIBUTE, GoalContinuationActionHandler, MAX_IDLE_CONTINUATIONS_WITHOUT_TOOL_CALLS, import_node_crypto35 };
var __wakaru_init_goal_continuation_action_handler_initialized = false;
export function init_goal_continuation_action_handler() {
if (__wakaru_init_goal_continuation_action_handler_initialized) return;
__wakaru_init_goal_continuation_action_handler_initialized = true;
"use strict";
import_node_crypto35 = require("node:crypto");
init_dist7();
init_dist2();
init_agent_pb();
init_goal_tool_pb();
init_agent_v1();
init_goal_metrics();
init_state();
init_tool_counting_middleware();
init_file_operation_lock_manager();
init_prompt_xml_escape();
init_request_id();
MAX_IDLE_CONTINUATIONS_WITHOUT_TOOL_CALLS = 3;
GOAL_NOTIFICATION_SOURCE_ATTRIBUTE = 'source="goal"';
GOAL_CONTINUATION_USER_MESSAGE_OPTIONS = {
    pausedGoalReactivation: "suppress"
};
GoalContinuationActionHandler = class {
    constructor(userMessageActionHandler, toolsGenerator, resourceAccessor, agentSessionId){
        this.userMessageActionHandler = userMessageActionHandler;
        this.toolsGenerator = toolsGenerator;
        this.resourceAccessor = resourceAccessor;
        this.agentSessionId = agentSessionId;
    }
    getUserMessageActionHandler() {
        return this.userMessageActionHandler;
    }
    liveToolNames(ctx, stateHandler, mcpTools) {
        const tools = this.toolsGenerator({
            resourceAccessor: this.resourceAccessor,
            stateHandler,
            agentSessionId: this.agentSessionId,
            mcpTools,
            repositoryInfos: [],
            blobStore: stateHandler.getBlobStore(),
            mode: stateHandler.mode ?? AgentMode.AGENT,
            loggingContext: ctx,
            fileOperationLockManager: new FileOperationLockManager()
        });
        return {
            todoWriteToolName: tools.getTool("TODO_WRITE")?.name,
            updateGoalToolName: tools.getTool("UPDATE_GOAL")?.name
        };
    }
    async adaptAction(ctx, stateHandler, mcpTools, onStateUpdate) {
        const conversationId = getConversationId(ctx);
        const goalState = stateHandler.goalState;
        if (conversationId === void 0 || !isGoalStateShapeValid(goalState, {
            conversationId,
            agentSessionId: this.agentSessionId
        })) {
            return void 0;
        }
        if (goalState.idleContinuationsWithoutToolCalls >= MAX_IDLE_CONTINUATIONS_WITHOUT_TOOL_CALLS) {
            const stalled = goalState.clone();
            stalled.status = GoalStatus.PAUSED;
            Object.assign(stalled, goalClockOnDeactivation(stalled, Date.now()));
            stateHandler.setGoalState(stalled);
            recordGoalTerminalTransition(ctx, {
                status: "paused",
                reason: "anti_spin",
                continuationCount: goalState.continuationCount
            });
            await onStateUpdate(ctx, await stateHandler.computeNewStructure(ctx));
            return void 0;
        }
        const liveToolNames = this.liveToolNames(ctx, stateHandler, mcpTools);
        const started = goalState.clone();
        started.idleContinuationsWithoutToolCalls += 1;
        started.continuationCount += 1;
        const nowMs2 = Date.now();
        if (started.lastAccruedAtMs !== void 0) {
            const spanMs = Math.max(0, nowMs2 - Number(started.lastAccruedAtMs));
            started.activeDurationMs = (started.activeDurationMs ?? BigInt(0)) + BigInt(spanMs);
        }
        started.lastAccruedAtMs = BigInt(nowMs2);
        stateHandler.setGoalState(started);
        recordGoalContinuationStarted(ctx);
        await onStateUpdate(ctx, await stateHandler.computeNewStructure(ctx));
        const userMessage = new UserMessage({
            text: buildGoalContinuationPrompt({
                goalState,
                ...liveToolNames
            }),
            messageId: (0, import_node_crypto35.randomUUID)(),
            mode: stateHandler.mode,
            isSimulatedMsg: true,
            simulatedMsgReason: SimulatedMsgReason.GOAL_CONTINUATION
        });
        ensureUserMessageTiming(userMessage);
        return createRedactedUserMessageAction(stateHandler.getPrivacyMode(), {
            userMessage: toRedactedUserMessage2(userMessage, stateHandler.getPrivacyMode()),
            sendToInteractionListener: true
        });
    }
    async handle(ctx, _action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        const adapted = await this.adaptAction(ctx, stateHandler, mcpTools, onStateUpdate);
        if (adapted === void 0) {
            return stateHandler.computeNewStructure(ctx);
        }
        const toolCalls = new ToolCountingStateTracker();
        const state = await this.userMessageActionHandler.handle(ctx, adapted, createToolCountingMiddleware(toolCalls)(rootPromptExecutor), stateHandler, mcpTools, onStateUpdate, GOAL_CONTINUATION_USER_MESSAGE_OPTIONS);
        if (toolCalls.toolCallCount === 0) {
            return state;
        }
        const cleared = await this.clearIdleContinuationStreak(ctx, stateHandler, onStateUpdate);
        return cleared ?? state;
    }
    async clearIdleContinuationStreak(ctx, stateHandler, onStateUpdate) {
        const current = stateHandler.goalState;
        if (current === void 0 || current.idleContinuationsWithoutToolCalls === 0) {
            return void 0;
        }
        const worked = current.clone();
        worked.idleContinuationsWithoutToolCalls = 0;
        stateHandler.setGoalState(worked);
        const structure = await stateHandler.computeNewStructure(ctx);
        await onStateUpdate(ctx, structure);
        return structure;
    }
    async handleSingleStep(ctx, _action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        const adapted = await this.adaptAction(ctx, stateHandler, mcpTools, onStateUpdate);
        if (adapted === void 0) {
            return {
                state: await stateHandler.computeNewStructure(ctx),
                hasToolCall: false
            };
        }
        const result = await this.userMessageActionHandler.handleSingleStep(ctx, adapted, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate, GOAL_CONTINUATION_USER_MESSAGE_OPTIONS);
        if (!result.hasToolCall) {
            return result;
        }
        const cleared = await this.clearIdleContinuationStreak(ctx, stateHandler, onStateUpdate);
        return {
            ...result,
            state: cleared ?? result.state
        };
    }
    async handleModelStep(ctx, _action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        const adapted = await this.adaptAction(ctx, stateHandler, mcpTools, onStateUpdate);
        if (adapted === void 0) {
            return {
                state: await stateHandler.computeNewStructure(ctx),
                toolCallDescriptors: [],
                splitStepData: {
                    modelResponseMessages: [],
                    stateOnlyStep: true
                }
            };
        }
        const result = await this.userMessageActionHandler.handleModelStep(ctx, adapted, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate, GOAL_CONTINUATION_USER_MESSAGE_OPTIONS);
        if (result.toolCallDescriptors.length === 0) {
            return result;
        }
        const cleared = await this.clearIdleContinuationStreak(ctx, stateHandler, onStateUpdate);
        return {
            ...result,
            state: cleared ?? result.state
        };
    }
};

}
