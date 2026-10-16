import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { bugfixResultItemSchema, init_common14 } from "./common.js";
import { init_common9, withSafeParsedArgs } from "../../common.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { bugfixVerdictToEmoji, bugfixVerdictToLabel, createBugfixResultItem, createReportBugfixResultsToolCall, createStringResult, createZodAgentTool, formatSeverityTag, getToolName } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { ReportBugfixResultsArgs, ReportBugfixResultsError, ReportBugfixResultsResult, ReportBugfixResultsSuccess, ReportBugfixResultsToolCall, init_report_bugfix_results_tool_pb } from "../../../../../proto/dist/generated/agent/v1/report_bugfix_results_tool_pb.js";
var __addDisposableResource72, __disposeResources72, reportBugfixResultsSchemaTowardsModel, reportBugfixResultsSchemaForParsing, createReportBugfixResultsTool;
export { __addDisposableResource72, __disposeResources72, createReportBugfixResultsTool, reportBugfixResultsSchemaForParsing, reportBugfixResultsSchemaTowardsModel };
var __wakaru_init_report_bugfix_results_initialized = false;
export function init_report_bugfix_results() {
if (__wakaru_init_report_bugfix_results_initialized) return;
__wakaru_init_report_bugfix_results_initialized = true;
"use strict";
init_dist26();
init_dist();
init_report_bugfix_results_tool_pb();
init_zod();
init_common9();
init_common14();
__addDisposableResource72 = function(env, value, async) {
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
__disposeResources72 = (function(SuppressedError2) {
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
reportBugfixResultsSchemaTowardsModel = external_exports.object({
    results: external_exports.array(external_exports.object({
        bug_id: external_exports.string().describe("The bug ID as provided in the bug list"),
        bug_title: external_exports.string().describe("The exact bug title as provided in the bug list"),
        verdict: external_exports.enum([
            "fixed",
            "false_positive",
            "could_not_fix",
            "resolved_by_other_fix"
        ]).describe("The verdict for this bug"),
        explanation: external_exports.string().describe("A single concise sentence explaining the resolution or why it wasn't resolved"),
        severity: external_exports.enum([
            "high",
            "medium",
            "low"
        ]).optional().describe("The severity of the bug as provided in the bug list (high, medium, or low)")
    })).describe("Results for each bug, in the same order as in the bug list")
});
reportBugfixResultsSchemaForParsing = external_exports.object({
    results: external_exports.array(bugfixResultItemSchema)
});
createReportBugfixResultsTool = (_resourceAccessor, promptVersion = "latest")=>{
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource72(env_1, createSpan(parentCtx.withName("reportBugfixResultsExecute")), false);
            const results = rawArgs.results.map(createBugfixResultItem);
            const baseToolCall = new ReportBugfixResultsToolCall({
                args: new ReportBugfixResultsArgs(),
                result: void 0
            });
            const execResult = await interactionHandler.executeToolCall(spanCtxt.ctx, createReportBugfixResultsToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                return new ReportBugfixResultsResult({
                    result: {
                        case: "success",
                        value: new ReportBugfixResultsSuccess({
                            results
                        })
                    }
                });
            }, (result)=>createReportBugfixResultsToolCall(new ReportBugfixResultsToolCall({
                    ...baseToolCall,
                    result
                })));
            return execResult;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources72(env_1);
        }
    };
    const render2 = async (_ctx, execResult, _props)=>{
        const result = execResult.result;
        switch(result?.case){
            case "success":
                {
                    const resultItems = result.value.results;
                    let message = "Bugfix results recorded successfully.\n\n";
                    for (const item of resultItems){
                        const emoji2 = bugfixVerdictToEmoji(item.verdict);
                        const label = bugfixVerdictToLabel(item.verdict);
                        const severityTag = formatSeverityTag(item.severity);
                        message += `- ${emoji2} ${label}: **${severityTag}${item.bugTitle}**
`;
                    }
                    return createStringResult(message.trim());
                }
            case "error":
                return createStringResult(result.value.error);
            case void 0:
                return createStringResult("Unknown error");
            default:
                {
                    const _exhaustiveCheck = result;
                    throw new Error(`Unhandled result case: ${String(_exhaustiveCheck)}`);
                }
        }
    };
    const name17 = getToolName(promptVersion);
    return createZodAgentTool("REPORT_BUGFIX_RESULTS", {
        name: name17,
        contextType: {
            type: "static"
        },
        descriptionGenerator: (_props)=>`Report the results of the bugfix analysis. Call this tool ONCE when you have finished analyzing and fixing all bugs.

You MUST call this tool to report your findings. After calling this tool, output the string "Done" exactly and nothing else.

For each bug in the list, provide:
- bug_id: The exact bug ID from the bug list
- bug_title: The exact bug title from the bug list
- verdict: One of "fixed", "false_positive", "could_not_fix", or "resolved_by_other_fix"
- explanation: A single concise sentence explaining the resolution
- severity: The severity of the bug as provided in the bug list (if provided)`,
        parameters: reportBugfixResultsSchemaTowardsModel,
        execute: withSafeParsedArgs(reportBugfixResultsSchemaForParsing, execute, createReportBugfixResultsToolCall(new ReportBugfixResultsToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createReportBugfixResultsToolCall(new ReportBugfixResultsToolCall({
                result: new ReportBugfixResultsResult({
                    result: {
                        case: "error",
                        value: new ReportBugfixResultsError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
