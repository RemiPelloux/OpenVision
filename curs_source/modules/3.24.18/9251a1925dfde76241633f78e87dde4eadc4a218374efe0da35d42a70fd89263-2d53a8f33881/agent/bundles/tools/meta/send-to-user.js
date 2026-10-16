import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../common.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { createStringResult, createZodAgentTool } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { SendToUserArgs, SendToUserError, SendToUserResult, SendToUserSuccess, SendToUserToolCall, init_send_to_user_tool_pb } from "../../../../proto/dist/generated/agent/v1/send_to_user_tool_pb.js";
import { createSendToUserToolCall } from "../../../../tree_chunk_napi_exports.js";
var __addDisposableResource107, __disposeResources107, parametersSchema26, createSendToUserTool;
export { __addDisposableResource107, __disposeResources107, createSendToUserTool, parametersSchema26 };
var __wakaru_init_send_to_user_initialized = false;
export function init_send_to_user() {
if (__wakaru_init_send_to_user_initialized) return;
__wakaru_init_send_to_user_initialized = true;
"use strict";
init_dist26();
init_dist();
init_agent_pb();
init_send_to_user_tool_pb();
init_zod();
init_common9();
__addDisposableResource107 = function(env, value, async) {
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
__disposeResources107 = (function(SuppressedError2) {
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
parametersSchema26 = external_exports.object({
    message: external_exports.string().describe("The content to display to the user, exactly as written.")
});
createSendToUserTool = ()=>{
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtx = __addDisposableResource107(env_1, createSpan(parentCtx.withName("SendToUserExecute")), false);
            const args = new SendToUserArgs({
                message: rawArgs.message
            });
            const baseToolCall = new SendToUserToolCall({
                args,
                result: void 0
            });
            return interactionHandler.executeToolCall(spanCtx.ctx, createSendToUserToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>new SendToUserResult({
                    result: {
                        case: "success",
                        value: new SendToUserSuccess()
                    }
                }), (result)=>createSendToUserToolCall(new SendToUserToolCall({
                    ...baseToolCall,
                    result
                })));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources107(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        switch(result.result.case){
            case "error":
                return createStringResult(`Error: ${result.result.value.error}`);
            case "success":
            case void 0:
                return createStringResult("ok");
            default:
                {
                    const exhaustiveCheck = result.result;
                    throw new Error(`Unhandled result case: ${String(exhaustiveCheck)}`);
                }
        }
    };
    return createZodAgentTool("SEND_TO_USER", {
        name: "SendToUser",
        descriptionGenerator: ()=>"Display a message directly to the user. Use this for progress updates, partial results, or content the user must see exactly as written before the task finishes.",
        parameters: parametersSchema26,
        execute: withSafeParsedArgs(parametersSchema26, execute, createSendToUserToolCall(new SendToUserToolCall())),
        render: render2,
        serializeError: (error3)=>createSendToUserToolCall(new SendToUserToolCall({
                result: new SendToUserResult({
                    result: {
                        case: "error",
                        value: new SendToUserError({
                            error: error3 instanceof Error ? error3.message : "Unknown error"
                        })
                    }
                })
            }))
    });
};

}
