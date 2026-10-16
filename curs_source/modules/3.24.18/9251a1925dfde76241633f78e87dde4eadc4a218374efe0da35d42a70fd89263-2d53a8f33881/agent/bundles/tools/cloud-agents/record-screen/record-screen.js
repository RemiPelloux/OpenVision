import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { recordScreenExecutorResource } from "../../../../../agent-exec/dist/record-screen.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../../common.js";
import { init_event_tracking } from "../../../utils/event-tracking.js";
import { init_request_id } from "../../../utils/request-id.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { external_exports } from "../../../../../external_exports.js";
import { createRecordScreenToolCall, createStringResult, createZodAgentTool, generateSeededUuid, trackRecordScreenResult } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { RecordScreenArgs, RecordScreenResult, RecordingMode, RequestedFilePathRejectedReason, init_record_screen_exec_pb } from "../../../../../proto/dist/generated/agent/v1/record_screen_exec_pb.js";
import { RecordScreenToolCall, init_record_screen_tool_pb } from "../../../../../proto/dist/generated/agent/v1/record_screen_tool_pb.js";
var __addDisposableResource73, __disposeResources73, parametersSchema6, modeStringToEnum, modeStringToAnalytics, getFilePathRejectedReasonString, createRecordScreenTool;
export { __addDisposableResource73, __disposeResources73, createRecordScreenTool, getFilePathRejectedReasonString, modeStringToAnalytics, modeStringToEnum, parametersSchema6 };
var __wakaru_init_record_screen4_initialized = false;
export function init_record_screen4() {
if (__wakaru_init_record_screen4_initialized) return;
__wakaru_init_record_screen4_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_agent_pb();
init_record_screen_exec_pb();
init_record_screen_tool_pb();
init_zod();
init_event_tracking();
init_request_id();
init_common9();
__addDisposableResource73 = function(env, value, async) {
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
__disposeResources73 = (function(SuppressedError2) {
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
parametersSchema6 = external_exports.object({
    mode: external_exports.enum([
        "START_RECORDING",
        "SAVE_RECORDING",
        "DISCARD_RECORDING"
    ]).describe("Recording mode: START_RECORDING to begin, SAVE_RECORDING to stop and save, DISCARD_RECORDING to discard"),
    save_as_filename: external_exports.string().optional().describe("Custom filename for the saved recording. Only use when mode=SAVE_RECORDING (ignored for other modes). Use to specify a human readable name describing the contents of the screen recording. Do not include slashes or file extension (absolute path and correct extension are automatically added).")
});
modeStringToEnum = (mode)=>{
    switch(mode){
        case "START_RECORDING":
            return RecordingMode.START_RECORDING;
        case "SAVE_RECORDING":
            return RecordingMode.SAVE_RECORDING;
        case "DISCARD_RECORDING":
            return RecordingMode.DISCARD_RECORDING;
        default:
            return RecordingMode.UNSPECIFIED;
    }
};
modeStringToAnalytics = (mode)=>{
    switch(mode){
        case "START_RECORDING":
            return "start";
        case "SAVE_RECORDING":
            return "save";
        case "DISCARD_RECORDING":
            return "discard";
    }
};
getFilePathRejectedReasonString = (reason)=>{
    switch(reason){
        case RequestedFilePathRejectedReason.SLASHES_NOT_ALLOWED:
            return "slashes not allowed in filename";
        case RequestedFilePathRejectedReason.UNSPECIFIED:
            return "unspecified reason";
        default:
            {
                const _exhaustiveCheck = reason;
                return `unknown reason: ${_exhaustiveCheck}`;
            }
    }
};
createRecordScreenTool = (resourceAccessor, promptVersion)=>{
    const recordScreenExecutor = resourceAccessor.get(recordScreenExecutorResource);
    promptVersion = promptVersion ?? "latest";
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource73(env_1, createSpan(parentCtx.withName("recordScreenExecute")), false);
            const args = new RecordScreenArgs({
                mode: modeStringToEnum(rawArgs.mode),
                toolCallId: meta.toolCallId,
                saveAsFilename: rawArgs.save_as_filename
            });
            const recordScreenTool = new RecordScreenToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createRecordScreenToolCall(recordScreenTool), meta.toolCallId, async (ctx)=>{
                const execId = generateSeededUuid(meta.toolCallId);
                let execResult;
                try {
                    execResult = await recordScreenExecutor.execute(ctx, args, {
                        execId,
                        hookContextCollector: meta.hookContextCollector
                    });
                } catch (error3) {
                    trackRecordScreenResult(ctx, rawArgs.mode, meta.toolCallId, new RecordScreenResult({
                        result: {
                            case: "failure",
                            value: {
                                error: error3 instanceof Error ? error3.message : String(error3)
                            }
                        }
                    }));
                    throw error3;
                }
                trackRecordScreenResult(ctx, rawArgs.mode, meta.toolCallId, execResult);
                switch(execResult.result.case){
                    case "startSuccess":
                    case "saveSuccess":
                    case "discardSuccess":
                        return execResult;
                    case "failure":
                        throw new Error(execResult.result.value.error);
                    default:
                        throw new Error(`Unexpected result case: ${execResult.result.case}`);
                }
            }, (result2)=>createRecordScreenToolCall(new RecordScreenToolCall({
                    ...recordScreenTool,
                    result: result2
                })), meta.hookContextCollector);
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources73(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        if (!result.result.case) {
            return createStringResult("Unknown error", true);
        }
        switch(result.result.case){
            case "startSuccess":
                {
                    let message = "Screen recording started successfully";
                    if (result.result.value.wasPriorRecordingCancelled) {
                        message += " (prior ongoing recording was cancelled and discarded).";
                    } else {
                        message += ".";
                    }
                    if (result.result.value.wasSaveAsFilenameIgnored) {
                        message += "\nNote: save_as_filename argument was ignored. save_as_filename should be specified when recording is saved, not started.";
                    }
                    return createStringResult(message);
                }
            case "saveSuccess":
                {
                    const saveResult = result.result.value;
                    const demoPath = saveResult.path;
                    let message = `Screen recording saved successfully: ${demoPath}
`;
                    if (saveResult.requestedFilePathRejectedReason !== void 0) {
                        const reason = getFilePathRejectedReasonString(saveResult.requestedFilePathRejectedReason);
                        message = `Requested save_as_filename is invalid (${reason}).
${message}`;
                    }
                    return createStringResult(message);
                }
            case "discardSuccess":
                return createStringResult("Screen recording discarded successfully");
            case "failure":
                return createStringResult(`Error: ${result.result.value.error}`, true);
            default:
                {
                    const _exhaustiveCheck = result.result;
                    throw new Error(`Unhandled result case: ${_exhaustiveCheck}`);
                }
        }
    };
    const name17 = "RecordScreen";
    const description3 = "Control screen recording on the VM. This tool is useful for demonstrating GUI-based changes or working manual tests to the user. Do not use for non-GUI based testing (i.e. tests run through shell commands).";
    return createZodAgentTool("RECORD_SCREEN", {
        name: name17,
        descriptionGenerator: (_props)=>description3,
        parameters: parametersSchema6,
        execute: withSafeParsedArgs(parametersSchema6, execute, createRecordScreenToolCall(new RecordScreenToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createRecordScreenToolCall(new RecordScreenToolCall({
                result: new RecordScreenResult({
                    result: {
                        case: "failure",
                        value: {
                            error: errorMessage4
                        }
                    }
                })
            }));
        }
    });
};

}
