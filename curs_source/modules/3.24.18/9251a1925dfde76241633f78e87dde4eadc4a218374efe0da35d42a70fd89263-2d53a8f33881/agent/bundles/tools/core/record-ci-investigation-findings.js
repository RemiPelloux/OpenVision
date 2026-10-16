import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../common.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { createStringResult, createZodAgentTool } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { createRecordCiInvestigationFindingsToolCall, resultToString6, toProtoFinding, toProtoOverall } from "../../../../pdf_worker_exports.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { RecordCiInvestigationFindingsArgs, RecordCiInvestigationFindingsError, RecordCiInvestigationFindingsResult, RecordCiInvestigationFindingsSuccess, RecordCiInvestigationFindingsToolCall, init_record_ci_investigation_findings_tool_pb } from "../../../../proto/dist/generated/agent/v1/record_ci_investigation_findings_tool_pb.js";
var __addDisposableResource95, __disposeResources95, findingSchema, overallSchema, parametersSchema22, createRecordCiInvestigationFindingsTool;
export { __addDisposableResource95, __disposeResources95, createRecordCiInvestigationFindingsTool, findingSchema, overallSchema, parametersSchema22 };
var __wakaru_init_record_ci_investigation_findings_initialized = false;
export function init_record_ci_investigation_findings() {
if (__wakaru_init_record_ci_investigation_findings_initialized) return;
__wakaru_init_record_ci_investigation_findings_initialized = true;
"use strict";
init_dist26();
init_dist();
init_agent_pb();
init_record_ci_investigation_findings_tool_pb();
init_zod();
init_common9();
__addDisposableResource95 = function(env, value, async) {
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
__disposeResources95 = (function(SuppressedError2) {
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
findingSchema = external_exports.object({
    checkName: external_exports.string().min(1),
    detailsUrl: external_exports.string().optional(),
    tldr: external_exports.string().min(1),
    rootCause: external_exports.string().optional(),
    failingSignal: external_exports.string().optional(),
    suggestedNextStep: external_exports.string().optional(),
    diffRelation: external_exports.enum([
        "related",
        "unrelated",
        "unknown"
    ]).optional(),
    diffRelationEvidence: external_exports.string().optional(),
    flakeAssessment: external_exports.enum([
        "likely",
        "unlikely",
        "unknown"
    ]).optional(),
    flakeEvidence: external_exports.string().optional(),
    rerunAvailable: external_exports.boolean().optional(),
    rerunEvidence: external_exports.string().optional(),
    recommendedAction: external_exports.enum([
        "fix",
        "rerun",
        "wait",
        "ignore",
        "ask",
        "investigate"
    ]).optional(),
    recommendedActionEvidence: external_exports.string().optional(),
    confidence: external_exports.enum([
        "high",
        "medium",
        "low"
    ]).optional()
});
overallSchema = external_exports.object({
    summary: external_exports.string().min(1),
    themes: external_exports.array(external_exports.string()).optional(),
    recommendedAction: external_exports.enum([
        "fix",
        "rerun",
        "wait",
        "ignore",
        "ask",
        "investigate"
    ]).optional(),
    recommendedActionEvidence: external_exports.string().optional(),
    checkKeys: external_exports.array(external_exports.string()).optional()
});
parametersSchema22 = external_exports.object({
    findings: external_exports.array(findingSchema).min(1).describe("One entry per failing CI check investigated. checkName and detailsUrl must match the check identity from the prompt verbatim."),
    overall: overallSchema.optional().describe("Optional cross-check summary when multiple checks were investigated in one turn.")
});
createRecordCiInvestigationFindingsTool = ()=>{
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource95(env_1, createSpan(parentCtx.withName("recordCiInvestigationFindingsExecute")), false);
            const args = new RecordCiInvestigationFindingsArgs({
                findings: rawArgs.findings.map(toProtoFinding),
                overall: rawArgs.overall ? toProtoOverall(rawArgs.overall) : void 0,
                toolCallId: meta.toolCallId
            });
            const baseToolCall = new RecordCiInvestigationFindingsToolCall({
                args,
                result: void 0
            });
            return interactionHandler.executeToolCall(spanCtxt.ctx, createRecordCiInvestigationFindingsToolCall(baseToolCall), meta.toolCallId, async ()=>new RecordCiInvestigationFindingsResult({
                    result: {
                        case: "success",
                        value: new RecordCiInvestigationFindingsSuccess({
                            message: "Recorded CI investigation findings for the Checks panel."
                        })
                    }
                }), (result)=>createRecordCiInvestigationFindingsToolCall(new RecordCiInvestigationFindingsToolCall({
                    ...baseToolCall,
                    result
                })));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources95(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        return createStringResult(resultToString6(result));
    };
    return createZodAgentTool("RECORD_CI_INVESTIGATION_FINDINGS", {
        name: "record_ci_investigation_findings",
        descriptionGenerator: ()=>"Record structured CI investigation results for the Checks panel after subagent investigation completes. Call once per investigation turn with one finding per failing check and an optional overall summary. Does not modify the repo or storage; findings are read from this tool call by the UI.",
        parameters: parametersSchema22,
        execute: withSafeParsedArgs(parametersSchema22, execute, createRecordCiInvestigationFindingsToolCall(new RecordCiInvestigationFindingsToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createRecordCiInvestigationFindingsToolCall(new RecordCiInvestigationFindingsToolCall({
                result: new RecordCiInvestigationFindingsResult({
                    result: {
                        case: "error",
                        value: new RecordCiInvestigationFindingsError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
