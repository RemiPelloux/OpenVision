import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../common.js";
import { getParentAgentToolCallId, init_request_id } from "../../utils/request-id.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { createCommunicateUpdateToolCall, createStringResult, createZodAgentTool, emptyStringToUndefined, requireAtLeastOneCommunicateUpdateField } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { CommunicateUpdateArgs, CommunicateUpdateError, CommunicateUpdateResult, CommunicateUpdateSuccess, CommunicateUpdateToolCall, init_communicate_update_tool_pb } from "../../../../proto/dist/generated/agent/v1/communicate_update_tool_pb.js";
var __addDisposableResource71, __disposeResources71, optionalNonEmptyTrimmedStringSchema, requiredNonEmptyTrimmedStringSchema, currentStepParameterSchema, communicateUpdateObjectSchema, requiredCommunicateUpdateObjectSchema, finalSummaryParameterSchema, completedSubtitleParameterSchema, createCommunicateUpdateTool;
export { __addDisposableResource71, __disposeResources71, communicateUpdateObjectSchema, completedSubtitleParameterSchema, createCommunicateUpdateTool, currentStepParameterSchema, finalSummaryParameterSchema, optionalNonEmptyTrimmedStringSchema, requiredCommunicateUpdateObjectSchema, requiredNonEmptyTrimmedStringSchema };
var __wakaru_init_update_current_step_initialized = false;
export function init_update_current_step() {
if (__wakaru_init_update_current_step_initialized) return;
__wakaru_init_update_current_step_initialized = true;
"use strict";
init_dist26();
init_dist();
init_agent_pb();
init_communicate_update_tool_pb();
init_zod();
init_request_id();
init_common9();
__addDisposableResource71 = function(env, value, async) {
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
__disposeResources71 = (function(SuppressedError2) {
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
optionalNonEmptyTrimmedStringSchema = external_exports.preprocess(emptyStringToUndefined, external_exports.string().trim().min(1).optional());
requiredNonEmptyTrimmedStringSchema = external_exports.preprocess(emptyStringToUndefined, external_exports.string().trim().min(1));
currentStepParameterSchema = optionalNonEmptyTrimmedStringSchema.describe("Major step or phase you are on. Update when the subtask changes. Keep the text concise, high-level, and user-friendly.");
communicateUpdateObjectSchema = external_exports.object({
    current_step: currentStepParameterSchema
});
requiredCommunicateUpdateObjectSchema = external_exports.object({
    current_step: requiredNonEmptyTrimmedStringSchema.describe("Major step or phase you are on. Update when the subtask changes. Keep the text concise, high-level, and user-friendly.")
});
finalSummaryParameterSchema = optionalNonEmptyTrimmedStringSchema.describe("User-facing executive summary succinctly reporting on your work / responding to the user's message; write this as a concise message speaking back to the user, not as a status tag. Typically 1-3 sentences, or a brief lead-in plus bullet points when there are multiple distinct takeaways, decisions, test results, etc. When using bullets, make them pleasant and easy to scan: 2-5 bullets when possible, one useful idea per bullet, ordered by importance to the user, concise but not cryptic, and no nested bullets unless the user requested detail. Use prose instead of bullets when there is only one main takeaway. Include the most relevant takeaways for the user, as implied by the user's original request. No unnecessary details. When answering questions by the user, include the full answer that the user is seeking. Examples of what to include: full answer(s) to user's question(s), high-level root cause while debugging, status update of completed (or in-progress) work, test results for specifically requested testing, blocking questions the user must answer before you can continue, links to newly created PRs, etc. Examples of what NOT to include (unless implicitly or explicitly requested by the user): tool calls / results, code / log / shell command excerpts, long file paths, line numbers, low-level implementation details, etc. Set this field just ONCE per turn, as the last thing you do before your final response, at the same time that you set the completed_subtitle field.");
completedSubtitleParameterSchema = optionalNonEmptyTrimmedStringSchema.describe("4-6 word, past-tense, final summary of the work you have completed. Will be used as your agent subtitle in the UI. Keep the text concise, high-level, and user-friendly. Set this field ONCE per turn, as the last thing you do before your final response, at the same time that you set the final_summary field.");
createCommunicateUpdateTool = (stateHandler, options2 = {})=>{
    const includeFinalSummary = options2.includeFinalSummary === true;
    const parametersSchema29 = includeFinalSummary ? communicateUpdateObjectSchema.extend({
        final_summary: finalSummaryParameterSchema,
        completed_subtitle: completedSubtitleParameterSchema
    }).superRefine((data, ctx)=>{
        requireAtLeastOneCommunicateUpdateField(data, ctx, [
            "current_step",
            "final_summary",
            "completed_subtitle"
        ]);
    }) : requiredCommunicateUpdateObjectSchema;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtx = __addDisposableResource71(env_1, createSpan(parentCtx.withName("UpdateCurrentStepExecute")), false);
            const step = rawArgs.current_step?.trim();
            const finalSummary = includeFinalSummary ? rawArgs.final_summary?.trim() : void 0;
            const completedSubtitle = includeFinalSummary ? rawArgs.completed_subtitle?.trim() : void 0;
            const args = new CommunicateUpdateArgs({
                currentStep: step !== void 0 && step.length > 0 ? step : void 0,
                finalSummary,
                completedSubtitle
            });
            const baseToolCall = new CommunicateUpdateToolCall({
                args,
                result: void 0
            });
            return interactionHandler.executeToolCall(spanCtx.ctx, createCommunicateUpdateToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                const messageIndex = stateHandler.getNextMessageIndex();
                const parentToolCallId = getParentAgentToolCallId(parentCtx);
                stateHandler.appendCommunicateUpdateHistoryEntry({
                    parentToolCallId,
                    step: step ?? "",
                    messageIndex,
                    finalSummary,
                    completedSubtitle
                });
                return new CommunicateUpdateResult({
                    result: {
                        case: "success",
                        value: new CommunicateUpdateSuccess({
                            currentStep: step ?? "",
                            messageIndex
                        })
                    }
                });
            }, (result)=>createCommunicateUpdateToolCall(new CommunicateUpdateToolCall({
                    ...baseToolCall,
                    result
                })));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources71(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        switch(result.result.case){
            case "success":
                return createStringResult("Progress update recorded.");
            case "error":
                return createStringResult(`Error: ${result.result.value.error}`);
            case void 0:
                return createStringResult("Unknown error");
            default:
                {
                    const exhaustiveCheck = result.result;
                    throw new Error(`Unhandled result case: ${String(exhaustiveCheck)}`);
                }
        }
    };
    return createZodAgentTool("COMMUNICATE_UPDATE", {
        name: "UpdateCurrentStep",
        descriptionGenerator: ()=>[
                "Record a concise (6 words or less), user-friendly update of the major step or phase you are working on for the parent timeline.",
                "Update when the subtask changes.",
                ...includeFinalSummary ? [
                    "Set `final_summary` and `completed_subtitle` ONCE per response as your last action before the final response."
                ] : [],
                "ALWAYS use in parallel with at least one other tool.",
                "ALWAYS start the update with a descriptive verb."
            ].join(" "),
        parameters: parametersSchema29,
        execute: withSafeParsedArgs(parametersSchema29, execute, createCommunicateUpdateToolCall(new CommunicateUpdateToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : "Unknown error";
            return createCommunicateUpdateToolCall(new CommunicateUpdateToolCall({
                result: new CommunicateUpdateResult({
                    result: {
                        case: "error",
                        value: new CommunicateUpdateError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
