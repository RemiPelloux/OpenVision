import { init_dist7 } from "../../../../../agent-core/dist/index.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../../agent-kv/dist/subagent-states.js";
import { init_anti_ask_question_copy } from "../../../prompts/anti-ask-question-copy.js";
import { init_state } from "../../../state.js";
import { CustomToolCallError, ToolCallArgParseError, init_common9 } from "../../common.js";
import { ToolErrorClassification, init_core5 } from "../../core.js";
import { init_degenerate } from "./degenerate.js";
import { init_lenient_array } from "../../lenient-array.js";
import { getConversationId, getRequestId, init_request_id } from "../../../utils/request-id.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_ask_question } from "../../../../../constants/dist/ask-question.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { createCounter, queryAskQuestion } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { alreadyDeliveredAskQuestionResult, buildAntiAskQuestionToolDescription, buildPlaceholderAskQuestionModelMessage, classifyDegenerateAskQuestion, createAskQuestionToolCall, createParametersSchema, createStringResult, createZodAgentTool, formatAskQuestionResultAsString, getIsDevFromContext, hasCompletedAskQuestionInCurrentTurn, hasRejectedPlaceholderAskQuestionInCurrentTurn, movedUsageTools, shouldReceiptAskQuestionResult, withPreservedRejectReason } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../../../metrics/dist/index.js";
import { JSONParser, init_jsonparser } from "../../../../../node_modules/.pnpm/@streamparser+json@0.0.21/node_modules/@streamparser/json/dist/mjs/jsonparser.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { AskQuestionArgs, AskQuestionArgs_Option, AskQuestionArgs_Question, AskQuestionAsync, AskQuestionError, AskQuestionRejected, AskQuestionResult, AskQuestionSuccess, AskQuestionSuccess_Answer, AskQuestionToolCall, init_ask_question_tool_pb } from "../../../../../proto/dist/generated/agent/v1/ask_question_tool_pb.js";
import { AskQuestionResult2, AskQuestionResult_Answer, init_tools_pb } from "../../../../../proto/dist/generated/aiserver/v1/tools_pb.js";
import { init_dist27 } from "../../../../../redaction/dist/index.js";
var __addDisposableResource61, __disposeResources61, logger70, askQuestionDegenerate, PLACEHOLDER_ASK_QUESTION_CLIENT_ERROR_MESSAGE, FIRST_ASK_QUESTION_CLIENT_ERROR_MESSAGE, FIRST_ASK_QUESTION_MODEL_ERROR_MESSAGE, ALREADY_DELIVERED_ASK_QUESTION_REASON, questionSchema, aiserverToProtoResult, ASK_QUESTION_ASYNC_RESULT_TEXT, agentToAiserverResult, MOVED_TOOL_IDENTIFIERS, DEFAULT_ASK_QUESTION_TOOL_DESCRIPTION, createAskQuestionTool;
export { ALREADY_DELIVERED_ASK_QUESTION_REASON, ASK_QUESTION_ASYNC_RESULT_TEXT, DEFAULT_ASK_QUESTION_TOOL_DESCRIPTION, FIRST_ASK_QUESTION_CLIENT_ERROR_MESSAGE, FIRST_ASK_QUESTION_MODEL_ERROR_MESSAGE, MOVED_TOOL_IDENTIFIERS, PLACEHOLDER_ASK_QUESTION_CLIENT_ERROR_MESSAGE, __addDisposableResource61, __disposeResources61, agentToAiserverResult, aiserverToProtoResult, askQuestionDegenerate, createAskQuestionTool, logger70, questionSchema };
var __wakaru_init_ask_question2_initialized = false;
export function init_ask_question2() {
if (__wakaru_init_ask_question2_initialized) return;
__wakaru_init_ask_question2_initialized = true;
"use strict";
init_dist7();
init_dist26();
init_ask_question();
init_dist();
init_dist4();
init_agent_pb();
init_ask_question_tool_pb();
init_tools_pb();
init_dist27();
init_jsonparser();
init_zod();
init_anti_ask_question_copy();
init_state();
init_request_id();
init_common9();
init_core5();
init_lenient_array();
init_degenerate();
__addDisposableResource61 = function(env, value, async) {
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
__disposeResources61 = (function(SuppressedError2) {
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
logger70 = createLogger("tools/ask-question");
askQuestionDegenerate = createCounter("ask_question.degenerate", {
    description: "AskQuestion calls whose title, prompt, or options are placeholder-shaped",
    labelNames: [
        "reason",
        "vendor",
        "model",
        "user.is_dev",
        "outcome"
    ]
});
PLACEHOLDER_ASK_QUESTION_CLIENT_ERROR_MESSAGE = "Placeholder question not shown";
FIRST_ASK_QUESTION_CLIENT_ERROR_MESSAGE = "Tool call failed";
FIRST_ASK_QUESTION_MODEL_ERROR_MESSAGE = "Rejected: you must research first (codebase, filesystem, and other tools) before asking the user. Do not use this tool to inquire into details, solicit feedback on suggestions, or ask for confirmations. Only call this again if you absolutely need user input (i.e. you are doing some destructive action, making a major architectural decision, or the user requested it in their workflow). Don't mention this to the user.";
ALREADY_DELIVERED_ASK_QUESTION_REASON = "The user's answer was already delivered separately; continue with the answers you already have.";
questionSchema = external_exports.object({
    id: external_exports.string().describe("Unique identifier for this question"),
    prompt: external_exports.string().describe("The question text to display to the user, without the options."),
    options: external_exports.array(external_exports.object({
        id: external_exports.string().describe("Unique identifier for this option"),
        label: external_exports.string().describe("Display text for this option")
    })).min(2).describe("Array of answer options (minimum 2 required)"),
    allow_multiple: external_exports.boolean().optional().describe("If true, user can select multiple options. Defaults to false.")
});
aiserverToProtoResult = (result, toolCallId)=>{
    const agentResult = new AskQuestionResult();
    if (result?.isAsync) {
        agentResult.result = {
            case: "async",
            value: new AskQuestionAsync({
                interactionId: toolCallId
            })
        };
        return agentResult;
    }
    if (result?.answers && result.answers.length > 0) {
        const success = new AskQuestionSuccess({
            answers: result.answers.map((answer)=>new AskQuestionSuccess_Answer({
                    questionId: answer.questionId,
                    selectedOptionIds: answer.selectedOptionIds,
                    freeformText: answer.freeformText
                }))
        });
        agentResult.result = {
            case: "success",
            value: success
        };
    } else {
        const rejected = new AskQuestionRejected({
            reason: "Questions skipped by user"
        });
        agentResult.result = {
            case: "rejected",
            value: rejected
        };
    }
    return agentResult;
};
ASK_QUESTION_ASYNC_RESULT_TEXT = "Questions have been sent to the user. Their answers will arrive as a later user message.";
agentToAiserverResult = async (result)=>{
    if (result.result.case === "async") {
        return new AskQuestionResult2({
            isAsync: true
        });
    }
    if (result.result.case === "success") {
        return new AskQuestionResult2({
            answers: result.result.value.answers.map((answer)=>new AskQuestionResult_Answer({
                    questionId: answer.questionId,
                    selectedOptionIds: answer.selectedOptionIds,
                    freeformText: answer.freeformText
                }))
        });
    }
    return new AskQuestionResult2({});
};
MOVED_TOOL_IDENTIFIERS = new Set([
    "AWAIT",
    "TODO_WRITE"
]);
DEFAULT_ASK_QUESTION_TOOL_DESCRIPTION = `Collect structured multiple-choice answers from the user. Use this tool only when you are blocked on a decision that is genuinely the user's to make: one you cannot resolve from the request, the code, or sensible defaults.

Usage notes:
- Each question should have at least 2 options for the user to choose from
- Users will always be able to select "Other" to provide custom text input
- Use allow_multiple: true to allow multiple answers to be selected for a question
- If you recommend a specific option, make that the first option in the list and add "(Recommended)" at the end of the label

Prefer this tool over listing options in your final response text (as letters, numbers, bullet points, etc).`;
createAskQuestionTool = (_resourceAccessor, options2)=>{
    const { name: name17 = "AskQuestion" } = options2;
    const schema2 = createParametersSchema();
    const execute = async (parentCtx, interactionHandler, argsStream, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            let buildQuestion2 = function(q2) {
                if (q2 === null || q2 === void 0 || typeof q2 !== "object") {
                    return null;
                }
                const obj = q2;
                if (typeof obj.id !== "string" || typeof obj.prompt !== "string" || !Array.isArray(obj.options)) {
                    return null;
                }
                const options3 = [];
                for (const opt of obj.options){
                    if (opt !== null && typeof opt === "object") {
                        const optObj = opt;
                        if (typeof optObj.id === "string" && typeof optObj.label === "string") {
                            options3.push({
                                id: optObj.id,
                                label: optObj.label
                            });
                        }
                    }
                }
                if (options3.length < 2) {
                    return null;
                }
                return {
                    id: obj.id,
                    prompt: obj.prompt,
                    options: options3,
                    allow_multiple: typeof obj.allow_multiple === "boolean" ? obj.allow_multiple : void 0
                };
            }, emitIncrementalFromSlots2 = function() {
                const ordered = [
                    ...questionSlots.entries()
                ].sort((a, b2)=>a[0] - b2[0]).map(([, q2])=>q2);
                if (ordered.length <= emittedCount) {
                    return;
                }
                const toEmit = ordered.slice(0, emittedCount + 1);
                parsedQuestions.length = 0;
                parsedQuestions.push(...toEmit);
                const incrementalArgs = new AskQuestionArgs({
                    title: title ?? "",
                    questions: toEmit.map((pq)=>new AskQuestionArgs_Question({
                            id: pq.id,
                            prompt: pq.prompt,
                            allowMultiple: pq.allow_multiple ?? false,
                            options: pq.options.map((opt)=>new AskQuestionArgs_Option({
                                    id: opt.id,
                                    label: opt.label
                                }))
                        }))
                });
                if (!bufferPartialToolCalls) {
                    interactionHandler.emitPartialToolCall(spanCtxt.ctx, meta.toolCallId, createAskQuestionToolCall(new AskQuestionToolCall({
                        args: incrementalArgs
                    })));
                }
                emittedCount = toEmit.length;
            };
            var buildQuestion = buildQuestion2, emitIncrementalFromSlots = emitIncrementalFromSlots2;
            const spanCtxt = __addDisposableResource61(env_1, createSpan(parentCtx.withName("askQuestionExecute")), false);
            if (meta.stateHandler.hasCompletedAskQuestion(meta.toolCallId)) {
                return alreadyDeliveredAskQuestionResult();
            }
            const shouldAutoRejectCurrentCall = options2.autoRejectFirstAskQuestion === true && !await hasCompletedAskQuestionInCurrentTurn(spanCtxt.ctx, meta.stateHandler);
            const mayRejectPlaceholder = movedUsageTools(options2.getDynamicTools?.() ?? []);
            const bufferPartialToolCalls = shouldAutoRejectCurrentCall || mayRejectPlaceholder;
            if (!bufferPartialToolCalls) {
                interactionHandler.emitPartialToolCall(spanCtxt.ctx, meta.toolCallId, createAskQuestionToolCall(new AskQuestionToolCall()));
            }
            let args = "";
            const parsedQuestions = [];
            let title;
            let emittedCount = 0;
            const incrementalJsonParser = new JSONParser({
                emitPartialTokens: true,
                emitPartialValues: true
            });
            const questionSlots = new Map();
            incrementalJsonParser.onValue = ({ value, key, stack, partial: partial2, parent })=>{
                if (partial2 === true) return;
                if (stack.length === 1 && key === "title" && typeof value === "string") {
                    title = value;
                    return;
                }
                const parentKey = stack[stack.length - 1]?.key;
                if (parentKey === "questions" && Array.isArray(parent) && typeof key === "number" && value !== null && typeof value === "object") {
                    const built = buildQuestion2(value);
                    if (built !== null) {
                        questionSlots.set(key, built);
                        emitIncrementalFromSlots2();
                    }
                    return;
                }
                if (stack.length === 1 && key === "questions" && Array.isArray(value)) {
                    questionSlots.clear();
                    value.forEach((q2, idx)=>{
                        const built = buildQuestion2(q2);
                        if (built !== null) questionSlots.set(idx, built);
                    });
                    emitIncrementalFromSlots2();
                }
            };
            for await (const chunk of argsStream){
                args += chunk;
                try {
                    incrementalJsonParser.write(chunk);
                } catch  {}
            }
            emitIncrementalFromSlots2();
            let parsedArgs;
            try {
                parsedArgs = schema2.safeParse(JSON.parse(args));
            } catch (error3) {
                const errorMessage4 = error3 instanceof Error ? error3.message : "Invalid arguments";
                throw new ToolCallArgParseError(errorMessage4);
            }
            if (!parsedArgs.success) {
                const errorMessages = parsedArgs.error.errors.map((err)=>{
                    const path64 = err.path.length > 0 ? err.path.join(".") : "argument";
                    return `${path64}: ${err.message}`;
                });
                const formattedError = `Invalid arguments:
${errorMessages.join("\n")}`;
                throw new ToolCallArgParseError(formattedError);
            }
            const rawArgs = parsedArgs.data;
            const degenerateReason = classifyDegenerateAskQuestion(rawArgs);
            const rejectPlaceholder = degenerateReason !== void 0 && mayRejectPlaceholder && !await hasRejectedPlaceholderAskQuestionInCurrentTurn(spanCtxt.ctx, meta.stateHandler);
            if (degenerateReason !== void 0) {
                const degenerateTags = {
                    reason: degenerateReason,
                    vendor: options2.modelInfo?.vendor ?? "unknown",
                    model: options2.modelInfo?.modelName ?? "unknown",
                    "user.is_dev": getIsDevFromContext(spanCtxt.ctx) ? "true" : "false",
                    outcome: rejectPlaceholder ? "rejected_moved_tools" : "shown"
                };
                askQuestionDegenerate.increment(spanCtxt.ctx, 1, degenerateTags);
                logger70.warn(spanCtxt.ctx, "agent.ask_question.degenerate", {
                    ...degenerateTags,
                    toolCallId: meta.toolCallId,
                    reqId: getRequestId(spanCtxt.ctx),
                    conversationId: getConversationId(spanCtxt.ctx),
                    questionCount: rawArgs.questions.length
                });
            }
            const askQuestionArgs = new AskQuestionArgs({
                title: rawArgs.title ?? "",
                questions: rawArgs.questions.map((q2)=>{
                    const question = new AskQuestionArgs_Question({
                        id: q2.id,
                        prompt: q2.prompt,
                        allowMultiple: q2.allow_multiple ?? false,
                        options: q2.options.map((opt)=>new AskQuestionArgs_Option({
                                id: opt.id,
                                label: opt.label
                            }))
                    });
                    return question;
                })
            });
            const baseToolCall = new AskQuestionToolCall({
                args: askQuestionArgs,
                result: void 0
            });
            if (rejectPlaceholder) {
                throw new CustomToolCallError(ToolErrorClassification.USER_REJECTED, {
                    clientVisibleErrorMessage: PLACEHOLDER_ASK_QUESTION_CLIENT_ERROR_MESSAGE,
                    modelVisibleErrorMessage: buildPlaceholderAskQuestionModelMessage(name17),
                    error: PLACEHOLDER_ASK_QUESTION_CLIENT_ERROR_MESSAGE
                });
            }
            if (!shouldAutoRejectCurrentCall && (bufferPartialToolCalls || emittedCount < askQuestionArgs.questions.length)) {
                await interactionHandler.emitPartialToolCall(spanCtxt.ctx, meta.toolCallId, createAskQuestionToolCall(baseToolCall));
            }
            if (shouldAutoRejectCurrentCall) {
                throw new CustomToolCallError(ToolErrorClassification.USER_REJECTED, {
                    clientVisibleErrorMessage: FIRST_ASK_QUESTION_CLIENT_ERROR_MESSAGE,
                    modelVisibleErrorMessage: FIRST_ASK_QUESTION_MODEL_ERROR_MESSAGE,
                    error: FIRST_ASK_QUESTION_CLIENT_ERROR_MESSAGE
                });
            }
            await interactionHandler.recordPendingToolCall(spanCtxt.ctx, meta.toolCallId, createAskQuestionToolCall(baseToolCall));
            const askQuestionResponse = await queryAskQuestion(interactionHandler.listener, spanCtxt.ctx, askQuestionArgs, meta.toolCallId);
            if (!askQuestionResponse.result) {
                throw new Error("Missing result in ask question response");
            }
            if (meta.stateHandler.hasCompletedAskQuestion(meta.toolCallId)) {
                return alreadyDeliveredAskQuestionResult();
            }
            const injectedRejectReason = askQuestionResponse.result.result.case === "rejected" ? askQuestionResponse.result.result.value.reason : void 0;
            const aiserverResult = await agentToAiserverResult(askQuestionResponse.result);
            const execResult = await interactionHandler.executeToolCall(spanCtxt.ctx, createAskQuestionToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                return aiserverResult;
            }, (result)=>{
                return createAskQuestionToolCall(new AskQuestionToolCall({
                    ...baseToolCall,
                    result: withPreservedRejectReason(aiserverToProtoResult(result, meta.toolCallId), injectedRejectReason)
                }));
            });
            const recordedResult = withPreservedRejectReason(aiserverToProtoResult(execResult, meta.toolCallId), injectedRejectReason);
            if (shouldReceiptAskQuestionResult(recordedResult)) {
                meta.stateHandler.markAskQuestionCompleted(meta.toolCallId);
            }
            return recordedResult;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources61(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        return createStringResult(formatAskQuestionResultAsString(result, name17));
    };
    const description3 = options2.useAntiAskQuestionDescription ? buildAntiAskQuestionToolDescription(name17) : DEFAULT_ASK_QUESTION_TOOL_DESCRIPTION;
    return createZodAgentTool("ASK_QUESTION", {
        name: name17,
        contextType: {
            type: "dynamic",
            conciseStaticContext: "Ask the user questions when you need to present options or you are blocked on their decision."
        },
        descriptionGenerator: (_props)=>description3,
        parameters: schema2,
        execute,
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createAskQuestionToolCall(new AskQuestionToolCall({
                result: new AskQuestionResult({
                    result: {
                        case: "error",
                        value: new AskQuestionError({
                            errorMessage: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
