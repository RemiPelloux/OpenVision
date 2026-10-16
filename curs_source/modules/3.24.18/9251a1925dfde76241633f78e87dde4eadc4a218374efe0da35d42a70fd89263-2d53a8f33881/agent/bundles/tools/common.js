import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { ShimCall, init_shim } from "../shims/shim.js";
import { ToolErrorClassification, init_core5 } from "./core.js";
import { init_tool_call_name, toolCallNameKey } from "./tool-call-name.js";
import { init_tool_execution_timeout } from "./tool-execution-timeout.js";
import { init_tool_timeout_suspension } from "./tool-timeout-suspension.js";
import { init_dist } from "../../../context/dist/index.js";
import { createHistogram } from "../../../dist_exports.js";
import { createKey } from "../../../entry_exports.js";
import { isDsv3FromMeta, parseJsonArgsWithZodSchema, stripDsv3TokensFromArgs } from "../../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../../metrics/dist/index.js";
import { init_dist25 } from "../../../node_modules/.pnpm/_077e680643459f7d1d564b303258f2e9/node_modules/ai/dist/index.mjs";
import { init_esm20 } from "../../../node_modules/.pnpm/_a0bfa0c1d160da5255f5725e22e2e76b/node_modules/zod-to-json-schema/dist/esm/index.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_dist3 } from "../../../utils/dist/index.js";
var import_node_crypto26, __addDisposableResource49, __disposeResources49, logger51, SUBAGENT_REQUEST_ID_SEED_PREFIX, CHAR_HARD_LIMIT, ASK_MODE_MODEL_ERROR, toolArgsParseSuccessRate, GLM_TOOL_CALL_TEMPLATE_VENDOR, GLM_TOOL_CALL_MARKUP_HINT, agentToolExecutionMetaKey, ToolCallError, ToolTimeoutError, CustomToolCallError, ToolCallArgParseError, ToolCallRejectedError, ToolCallUnexpectedEnvironmentError, ToolCallAbortedError, RetryableToolOrchestrationError, RetryableToolEnvironmentOrchestrationError, withSafeParsedArgs, withSafeRawArgs, MACHINE_ID_DESCRIPTION, CODEX_PROMPT_VERSIONS;
export { ASK_MODE_MODEL_ERROR, CHAR_HARD_LIMIT, CODEX_PROMPT_VERSIONS, CustomToolCallError, GLM_TOOL_CALL_MARKUP_HINT, GLM_TOOL_CALL_TEMPLATE_VENDOR, MACHINE_ID_DESCRIPTION, RetryableToolEnvironmentOrchestrationError, RetryableToolOrchestrationError, SUBAGENT_REQUEST_ID_SEED_PREFIX, ToolCallAbortedError, ToolCallArgParseError, ToolCallError, ToolCallRejectedError, ToolCallUnexpectedEnvironmentError, ToolTimeoutError, __addDisposableResource49, __disposeResources49, agentToolExecutionMetaKey, import_node_crypto26, logger51, toolArgsParseSuccessRate, withSafeParsedArgs, withSafeRawArgs };
var __wakaru_init_common9_initialized = false;
export function init_common9() {
if (__wakaru_init_common9_initialized) return;
__wakaru_init_common9_initialized = true;
"use strict";
import_node_crypto26 = require("node:crypto");
init_dist();
init_dist4();
init_dist3();
init_dist25();
init_zod();
init_esm20();
init_shim();
init_tool_call_name();
init_core5();
init_tool_execution_timeout();
init_tool_timeout_suspension();
__addDisposableResource49 = function(env, value, async) {
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
__disposeResources49 = (function(SuppressedError2) {
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
logger51 = createLogger("tools/common");
SUBAGENT_REQUEST_ID_SEED_PREFIX = "subagent-request-";
CHAR_HARD_LIMIT = 1e5;
ASK_MODE_MODEL_ERROR = "You are in ask mode and cannot run non read-only tools. Ask the user to switch to agent mode if edits are required.";
toolArgsParseSuccessRate = createHistogram("agent.tools.args_parse_success", {
    description: "Tool argument parsing success rate (1 for success, 0 for failure)",
    labelNames: [
        "tool_name",
        "harness_tool_name"
    ]
});
GLM_TOOL_CALL_TEMPLATE_VENDOR = "zai";
GLM_TOOL_CALL_MARKUP_HINT = ' Your arguments contain literal <arg_key>/<arg_value> tags; write nested objects as plain JSON, e.g. {"query": "x"}.';
agentToolExecutionMetaKey = createKey(Symbol("agentToolExecutionMeta"), void 0);
ToolCallError = class extends Error {
    constructor({ clientVisibleErrorMessage, modelVisibleErrorMessage, error: error3, systemReminders }){
        super(error3);
        this.clientVisibleErrorMessage = clientVisibleErrorMessage;
        this.modelVisibleErrorMessage = modelVisibleErrorMessage;
        this.systemReminders = systemReminders ?? [];
    }
};
ToolCallError.telemetryName = "ToolCallError";
ToolTimeoutError = class extends ToolCallError {
};
ToolTimeoutError.telemetryName = "ToolTimeoutError";
CustomToolCallError = class extends ToolCallError {
    constructor(classification, options2){
        super(options2);
        this.classification = classification;
    }
};
CustomToolCallError.telemetryName = "CustomToolCallError";
ToolCallArgParseError = class extends ToolCallError {
    constructor(formattedError, classification, issues){
        super({
            clientVisibleErrorMessage: formattedError,
            modelVisibleErrorMessage: formattedError,
            error: formattedError
        });
        this.classification = classification;
        this.issues = issues;
    }
};
ToolCallArgParseError.telemetryName = "ToolCallArgParseError";
ToolCallRejectedError = class extends ToolCallError {
    constructor(reason, classification){
        super({
            clientVisibleErrorMessage: reason,
            modelVisibleErrorMessage: reason,
            error: reason
        });
        this.classification = classification;
    }
};
ToolCallRejectedError.telemetryName = "ToolCallRejectedError";
ToolCallUnexpectedEnvironmentError = class extends ToolCallError {
    constructor(reason){
        super({
            clientVisibleErrorMessage: reason,
            modelVisibleErrorMessage: reason,
            error: reason
        });
    }
};
ToolCallUnexpectedEnvironmentError.telemetryName = "ToolCallUnexpectedEnvironmentError";
ToolCallAbortedError = class extends ToolCallError {
    constructor(abortReason){
        super({
            clientVisibleErrorMessage: "Aborted",
            modelVisibleErrorMessage: "Aborted",
            error: "Aborted"
        });
        this.abortReason = abortReason;
    }
};
ToolCallAbortedError.telemetryName = "ToolCallAbortedError";
RetryableToolOrchestrationError = class extends Error {
    constructor(message, options2){
        super(message);
        this.isRetryable = true;
        this.name = "RetryableToolOrchestrationError";
        this.classification = options2?.classification;
        if (options2?.cause) {
            this.cause = options2.cause;
        }
    }
};
RetryableToolEnvironmentOrchestrationError = class extends RetryableToolOrchestrationError {
    constructor(reason, options2){
        super(reason, {
            ...options2,
            classification: ToolErrorClassification.UNEXPECTED_ENVIRONMENT
        });
        this.name = "RetryableToolEnvironmentOrchestrationError";
        this.code = options2?.code ?? "ENVIRONMENT_UNREACHABLE";
    }
};
withSafeParsedArgs = (parametersSchema29, execute, initialToolCall, options2)=>{
    return async (ctx, interactionHandler, argsStream, meta)=>{
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const initialPartialEmit = options2?.emitInitialPartialToolCall === false ? void 0 : interactionHandler.emitPartialToolCall(ctx, meta.toolCallId, initialToolCall);
            let args = "";
            let parsedArgs;
            const toolName = initialToolCall.tool?.case ?? "unknown";
            const parseLabels = {
                tool_name: toolName,
                harness_tool_name: ctx.get(toolCallNameKey) ?? "unknown"
            };
            const shims = new ShimCall();
            try {
                for await (const chunk of argsStream){
                    args += chunk;
                }
                args = stripDsv3TokensFromArgs({
                    ctx,
                    args,
                    toolName,
                    isDsv3Model: isDsv3FromMeta(meta)
                });
                const resolvedSchema = typeof parametersSchema29 === "function" ? parametersSchema29(meta) : parametersSchema29;
                parsedArgs = shims.run(()=>parseJsonArgsWithZodSchema(args, resolvedSchema, {
                        classifyParseFailure: options2?.classifyParseFailure,
                        modelVendor: meta.modelVendor
                    }));
            } catch (error3) {
                toolArgsParseSuccessRate.histogram(ctx, 0, parseLabels);
                if (error3 instanceof ToolCallArgParseError) {
                    throw error3;
                }
                const errorMessage4 = error3 instanceof Error ? error3.message : "Invalid arguments";
                throw new ToolCallArgParseError(errorMessage4);
            } finally{
                shims.flush(ctx);
            }
            const rawArgs = parsedArgs;
            toolArgsParseSuccessRate.histogram(ctx, 1, parseLabels);
            const coreExecuteSpan = __addDisposableResource49(env_2, createSpan(ctx.withName("coreExecute")), false);
            const coreExecuteCtx = coreExecuteSpan.ctx;
            if (initialPartialEmit !== void 0) {
                await initialPartialEmit;
            }
            const result = await execute(coreExecuteCtx, interactionHandler, rawArgs, meta);
            return result;
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources49(env_2);
        }
    };
};
withSafeRawArgs = (execute, initialToolCall, options2)=>{
    return async (ctx, interactionHandler, argsStream, meta)=>{
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const onStreamingChunk = options2?.onStreamingChunk();
            const onStreamingDelta = options2?.onStreamingDelta?.();
            const onArgPreservationChunk = options2?.onArgPreservationChunk?.();
            interactionHandler.emitPartialToolCall(ctx, meta.toolCallId, initialToolCall);
            let rawText = "";
            for await (const chunk of argsStream){
                rawText += chunk;
                if (onStreamingChunk) {
                    const streamingToolCall = onStreamingChunk(rawText);
                    if (streamingToolCall) {
                        logger51.info(ctx, "sending partial tool call for raw arg", {
                            streamingToolCall
                        });
                        interactionHandler.emitPartialToolCall(ctx, meta.toolCallId, streamingToolCall);
                    }
                }
                if (onArgPreservationChunk) {
                    const preservedToolCall = onArgPreservationChunk(rawText);
                    if (preservedToolCall) {
                        interactionHandler.rememberToolCallForArgPreservation(meta.toolCallId, preservedToolCall);
                    }
                }
                if (onStreamingDelta) {
                    const delta = onStreamingDelta(chunk);
                    if (delta) {
                        void interactionHandler.emitToolCallDelta(ctx, meta.toolCallId, delta);
                    }
                }
            }
            const toolName = initialToolCall.tool?.case ?? "unknown";
            rawText = stripDsv3TokensFromArgs({
                ctx,
                args: rawText,
                toolName,
                isDsv3Model: isDsv3FromMeta(meta)
            });
            const coreExecuteSpan = __addDisposableResource49(env_3, createSpan(ctx.withName("coreExecute")), false);
            const coreExecuteCtx = coreExecuteSpan.ctx;
            return await execute(coreExecuteCtx, interactionHandler, rawText, meta);
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources49(env_3);
        }
    };
};
MACHINE_ID_DESCRIPTION = "Registered machine identifier.";
CODEX_PROMPT_VERSIONS = [
    "gpt5-codex",
    "codex-cloud"
];

}
