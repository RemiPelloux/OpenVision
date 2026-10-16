import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../common.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { createReflectGeneralParametersSchema, createReflectGeneralToolCall, createStringResult, createZodAgentTool, resultToString } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ReflectArgs, ReflectError, ReflectResult, ReflectSuccess, ReflectToolCall, init_reflect_tool_pb } from "../../../../proto/dist/generated/agent/v1/reflect_tool_pb.js";
var __addDisposableResource74, __disposeResources74, REFLECT_GENERAL_TOOL_IDENTIFIER, REFLECT_GENERAL_FIELD_DESCRIPTIONS, REFLECT_GENERAL_TOOL_DESCRIPTION, createReflectGeneralTool;
export { REFLECT_GENERAL_FIELD_DESCRIPTIONS, REFLECT_GENERAL_TOOL_DESCRIPTION, REFLECT_GENERAL_TOOL_IDENTIFIER, __addDisposableResource74, __disposeResources74, createReflectGeneralTool };
var __wakaru_init_reflect_general_initialized = false;
export function init_reflect_general() {
if (__wakaru_init_reflect_general_initialized) return;
__wakaru_init_reflect_general_initialized = true;
"use strict";
init_dist26();
init_dist();
init_agent_pb();
init_reflect_tool_pb();
init_zod();
init_common9();
__addDisposableResource74 = function(env, value, async) {
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
__disposeResources74 = (function(SuppressedError2) {
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
REFLECT_GENERAL_TOOL_IDENTIFIER = "REFLECT_GENERAL";
REFLECT_GENERAL_FIELD_DESCRIPTIONS = {
    unexpected_action_outcomes: "(1-2 sentences) Look through each tool you have tried so far and identify what changed in the command output, exit status, working directory state, filesystem state, or running processes, if anything. You must inspect the actual command results yourself to determine what happened. Then, in a few words, analyze each case where the command did *not* have the desired effect (e.g. it failed, produced no useful change, or changed the wrong thing). NEVER rely on past commentary alone; you MUST analyze the tool outputs yourself. Be precise about whether the observed results actually move you closer to satisfying the exact problem statement and submission criterion. For each surprising observation, analyze why it might have happened now that you are looking closely. Common cases: 1. Wrong tool/shell command inputs: you missed a flag, used the wrong flag, used the wrong command or tool, etc. 2. Wrong working directory or path: the tool/shell command ran but targeted the wrong repo, directory, or file. 3. Missing dependency, environment variable, or permission: the tool/shell command failed before doing the intended work. 4. State already set: the tool/shell command had no visible effect because the environment was already in the desired state. 5. Existing process or lock: a running server, watcher, pid, or lockfile prevented the tool/shell command from doing what you expected.",
    relevant_instructions: "(brief bullet points) Go through the instructions you've been given and highlight specific details that are relevant to the current environment state. Include the exact problem statement requirements and any explicit submission criterion.",
    scenario_analysis: "(1-2 sentences) Identify possible scenarios that you might be in. Start with scenarios explicitly referenced in the instructions, then go through any relevant general scenarios applicable to your current task (e.g. scenario where a dependency is missing, where the tool/shell command failed unexpectedly, where the tool/shell command already succeeded, where you are in the wrong directory, or where a background process is already running). For each scenario, briefly imagine the case where you are in that scenario, and the case where you are not.",
    critical_synthesis: "(1 sentence) Based on all of your analysis so far, reflect on whether you are on the right track to achieve your task, or have already completed it. If the task is not complete, how can you update your approach to be more effective and efficient?",
    next_steps: "Your decision for how to proceed based on your analysis. Do not claim completion unless the submission criterion is truly satisfied and you have tested the final code. Can be one of: 1. 'Continue with the current approach' 2. 'Try [new idea for what to do next]' 3. 'Move on to pre-submission testing of your changes' 4. 'Task is complete (<confidence_score>%)' [DO NOT SELECT WITHOUT FIRST VALIDATING SUBMISSION CRITERIA THROUGH TESTING]"
};
REFLECT_GENERAL_TOOL_DESCRIPTION = "Use the tool to troubleshoot when your tool usage or shell commands are not having the desired effect. Use it to check whether you are following the problem statement precisely, whether the submission criterion is truly met, whether you still need to test the code at the end, and whether you should explore an alternate approach if stuck. Be sure to make a decision about how to proceed using the `next_steps` field. The `Reflect` tool is expensive, so use it sparingly.\n(Critical Rules)\n* You must use the `next_steps` field to describe your decision for what to do next. \n* Before declaring completion, confirm pre-submission testing has been done and the submission criterion is actually satisfied. \n* Never use the `Reflect` tool if your previous message was a `Reflect` tool call.";
createReflectGeneralTool = (overrides)=>{
    const parametersSchema29 = createReflectGeneralParametersSchema(overrides);
    const toolDescription = overrides?.toolDescription ?? REFLECT_GENERAL_TOOL_DESCRIPTION;
    const toolResultSuffix = overrides?.toolResultSuffix;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource74(env_1, createSpan(parentCtx.withName("reflectGeneralExecute")), false);
            const args = new ReflectArgs({
                unexpectedActionOutcomes: rawArgs.unexpected_action_outcomes ?? "",
                relevantInstructions: rawArgs.relevant_instructions ?? "",
                scenarioAnalysis: rawArgs.scenario_analysis ?? "",
                criticalSynthesis: rawArgs.critical_synthesis ?? "",
                nextSteps: rawArgs.next_steps ?? "",
                toolCallId: meta.toolCallId
            });
            const baseToolCall = new ReflectToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createReflectGeneralToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                return new ReflectResult({
                    result: {
                        case: "success",
                        value: new ReflectSuccess({})
                    }
                });
            }, (result2)=>createReflectGeneralToolCall(new ReflectToolCall({
                    ...baseToolCall,
                    result: result2
                })));
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources74(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        return createStringResult(resultToString(result, toolResultSuffix));
    };
    return createZodAgentTool(REFLECT_GENERAL_TOOL_IDENTIFIER, {
        name: "Reflect",
        descriptionGenerator: (_props)=>toolDescription,
        parameters: parametersSchema29,
        execute: withSafeParsedArgs(parametersSchema29, execute, createReflectGeneralToolCall(new ReflectToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createReflectGeneralToolCall(new ReflectToolCall({
                result: new ReflectResult({
                    result: {
                        case: "error",
                        value: new ReflectError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
