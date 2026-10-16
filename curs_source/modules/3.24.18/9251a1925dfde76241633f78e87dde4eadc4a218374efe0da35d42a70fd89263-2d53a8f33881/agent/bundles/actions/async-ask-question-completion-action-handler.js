import { init_dist7 } from "../../../agent-core/dist/index.js";
import { Updates } from "../../../agent-core/dist/interaction-updates.js";
import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_ask_question_completion } from "./ask-question-completion.js";
import { init_meta_agent_notes } from "./meta-agent-notes.js";
import { AbstractUserMessageActionHandler, init_abstract_user_message_action_handler } from "./user-message-action/abstract-user-message-action-handler.js";
import { AgentConversationTurnHandle, init_state } from "../state.js";
import { init_request_context4 } from "../utils/request-context.js";
import { init_dist } from "../../../context/dist/index.js";
import { applyAskQuestionCompletion, buildRequestContextOptions, ensureUserMessageTiming, fromRedactedRequestContext, fromRedactedSelectedContext, getRequestContext, hasAppliedAskQuestionCompletion, isValidAskQuestionCompletion, toRedactedInteractionUpdate } from "../../../mcp_sandbox_policy_exports.js";
import { UserMessage, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { init_agent_v1 } from "../../../redacted-protos/dist/agent-v1.js";
import { PrivacyCapability } from "../../../redaction/dist/classification.js";
import { init_dist27 } from "../../../redaction/dist/index.js";
var import_node_crypto34, __addDisposableResource65, __disposeResources65, logger77, AsyncAskQuestionCompletionActionHandler;
export { AsyncAskQuestionCompletionActionHandler, __addDisposableResource65, __disposeResources65, import_node_crypto34, logger77 };
var __wakaru_init_async_ask_question_completion_action_handler_initialized = false;
export function init_async_ask_question_completion_action_handler() {
if (__wakaru_init_async_ask_question_completion_action_handler_initialized) return;
__wakaru_init_async_ask_question_completion_action_handler_initialized = true;
"use strict";
import_node_crypto34 = require("node:crypto");
init_dist7();
init_dist();
init_agent_pb();
init_agent_v1();
init_dist27();
init_state();
init_request_context4();
init_ask_question_completion();
init_meta_agent_notes();
init_abstract_user_message_action_handler();
__addDisposableResource65 = function(env, value, async) {
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
__disposeResources65 = (function(SuppressedError2) {
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
logger77 = createLogger("@anysphere/agent");
AsyncAskQuestionCompletionActionHandler = class extends AbstractUserMessageActionHandler {
    constructor(){
        super(...arguments);
        this.actionClass = "AsyncAskQuestionCompletionActionHandler";
    }
    async handle(parentCtx, action, rootPromptExecutor, stateHandler, mcpTools, onStateUpdate) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource65(env_1, createSpan(parentCtx.withName("handleAsyncAskQuestionCompletionAction")), false);
            const ctx = span.ctx;
            logger77.info(ctx, "Handling async ask-question completion", {
                originalToolCallId: action.originalToolCallId,
                resultCase: action.result?.result.case,
                questionsCount: action.originalArgs?.questions.length ?? 0
            });
            if (!isValidAskQuestionCompletion(action)) {
                logger77.warn(ctx, "Skipping invalid async ask-question completion", {
                    originalToolCallId: action.originalToolCallId,
                    resultCase: action.result?.result.case
                });
                return await stateHandler.computeNewStructure(ctx);
            }
            if (hasAppliedAskQuestionCompletion(stateHandler, action.originalToolCallId)) {
                logger77.info(ctx, "Skipping duplicate async ask-question completion (already applied)", {
                    originalToolCallId: action.originalToolCallId
                });
                return await stateHandler.computeNewStructure(ctx);
            }
            const lastTurnRef = stateHandler.turns.at(-1);
            if (!lastTurnRef) {
                logger77.error(ctx, "No turns available");
                return await stateHandler.computeNewStructure(ctx);
            }
            const lastTurn = await lastTurnRef.get(ctx);
            if (!(lastTurn instanceof AgentConversationTurnHandle)) {
                logger77.error(ctx, "Last turn is not an agent turn");
                return await stateHandler.computeNewStructure(ctx);
            }
            const isTurnFinished = lastTurn.steps.length === 0 || await (async ()=>{
                const lastStepRef = lastTurn.steps.at(-1);
                if (!lastStepRef) return true;
                const lastStep = await lastStepRef.get(ctx);
                return lastStep.message.case !== "toolCall";
            })();
            const requestContext = await getRequestContext(ctx, action.requestContext ? fromRedactedRequestContext(action.requestContext, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED) : void 0, this.resourceAccessor, buildRequestContextOptions(this.config));
            const mergedMcpTools = this.mergeRequestContextTools(mcpTools, requestContext.tools);
            if (isTurnFinished) {
                logger77.info(ctx, "Current turn is finished, creating new turn", {
                    lastTurnSteps: lastTurn.steps.length
                });
                const lastUserMessage = await lastTurn.userMessage.get(ctx);
                const syntheticUserMessage = new UserMessage({
                    text: "Continue with the questionnaire results.",
                    messageId: (0, import_node_crypto34.randomUUID)(),
                    selectedContext: lastUserMessage.selectedContext ? fromRedactedSelectedContext(lastUserMessage.selectedContext, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED) : void 0,
                    mode: lastUserMessage.mode,
                    isSimulatedMsg: true,
                    bestOfNGroupId: lastUserMessage.bestOfNGroupId,
                    tryUseBestOfNPromotion: lastUserMessage.tryUseBestOfNPromotion
                });
                ensureUserMessageTiming(syntheticUserMessage);
                await this.interactionListener.sendUpdate(ctx, toRedactedInteractionUpdate(Updates.userMessageAppended(syntheticUserMessage), stateHandler.getPrivacyMode()));
                const newTurn = await stateHandler.createAgentTurn(ctx, syntheticUserMessage, requestContext, this.config, this.resourceAccessor);
                const application = await applyAskQuestionCompletion(ctx, {
                    action,
                    stateHandler,
                    turn: newTurn,
                    rootPromptExecutor,
                    resultFormat: "formatted-string"
                });
                if (application.outcome !== "applied") {
                    return await stateHandler.computeNewStructure(ctx);
                }
                logger77.info(ctx, "Created new turn with tool call and result", {
                    messageId: syntheticUserMessage.messageId,
                    toolCallId: application.recordedToolCallId
                });
                await this.runTurnLoop(ctx, rootPromptExecutor, stateHandler, newTurn, this.config.toolsGenerator, mergedMcpTools, requestContext.repositoryInfo, requestContext, onStateUpdate);
            } else {
                logger77.info(ctx, "Current turn is active, appending to existing turn");
                const application = await applyAskQuestionCompletion(ctx, {
                    action,
                    stateHandler,
                    turn: lastTurn,
                    rootPromptExecutor,
                    resultFormat: "formatted-string"
                });
                if (application.outcome !== "applied") {
                    return await stateHandler.computeNewStructure(ctx);
                }
                logger77.info(ctx, "Appended tool call and result to existing turn");
                await this.runTurnLoop(ctx, rootPromptExecutor, stateHandler, lastTurn, this.config.toolsGenerator, mergedMcpTools, requestContext.repositoryInfo, requestContext, onStateUpdate);
            }
            logger77.info(ctx, "Async ask-question completion action handled successfully");
            return await stateHandler.computeNewStructure(ctx);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources65(env_1);
        }
    }
};

}
