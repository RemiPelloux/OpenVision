import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_common9 } from "../common.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { createStringResult, createZodAgentTool, parseJsonArgsWithZodSchema } from "../../../../mcp_sandbox_policy_exports.js";
import { JSONParser, init_jsonparser } from "../../../../node_modules/.pnpm/@streamparser+json@0.0.21/node_modules/@streamparser/json/dist/mjs/jsonparser.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { SendMessageError, SendMessageResult, SendMessageSuccess, SendMessageToolCall, init_send_message_tool_pb } from "../../../../proto/dist/generated/agent/v1/send_message_tool_pb.js";
import { buildSendMessageArgs, createSendMessageToolCall } from "../../../../tree_chunk_napi_exports.js";
import { init_dist3 } from "../../../../utils/dist/index.js";
import { classifyAgentLink, isCloudAgentLinkId } from "../../../../utils_pb_exports.js";
var __addDisposableResource106, __disposeResources106, MARKDOWN_CODE, MARKDOWN_LINK_TARGET, parametersSchema25, SEND_MESSAGE_TOOL_NAME, createSendMessageTool;
export { MARKDOWN_CODE, MARKDOWN_LINK_TARGET, SEND_MESSAGE_TOOL_NAME, __addDisposableResource106, __disposeResources106, createSendMessageTool, parametersSchema25 };
var __wakaru_init_send_message_initialized = false;
export function init_send_message() {
if (__wakaru_init_send_message_initialized) return;
__wakaru_init_send_message_initialized = true;
"use strict";
init_dist26();
init_dist();
init_agent_pb();
init_send_message_tool_pb();
init_dist3();
init_jsonparser();
init_zod();
init_common9();
__addDisposableResource106 = function(env, value, async) {
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
__disposeResources106 = (function(SuppressedError2) {
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
MARKDOWN_CODE = /(`{3,}|~{3,})[\s\S]*?\1|(`+)[^\n]*?\2/g;
MARKDOWN_LINK_TARGET = /\]\(\s*<?([^\s)>]+)/g;
parametersSchema25 = external_exports.object({
    message: external_exports.string().trim().min(1, "Message must be non-empty").max(1e5, "Message must be at most 100000 characters").superRefine((message, ctx)=>{
        const prose = message.replace(MARKDOWN_CODE, " ");
        for (const [, target = ""] of prose.matchAll(MARKDOWN_LINK_TARGET)){
            if (!target.startsWith("bc-") || classifyAgentLink(target) !== void 0) {
                continue;
            }
            const id = target.split(/[#/?]/, 1)[0] ?? target;
            ctx.addIssue({
                code: external_exports.ZodIssueCode.custom,
                message: isCloudAgentLinkId(id) ? `\`${target}\` is not an agent link. Use \`${id}\`, \`${id}#changes\`, or \`${id}#desktop\`.` : `\`${target}\` is not an agent ID. A new agent's ID exists only in its CreateAgent result: link it after that result arrives, or name it without a link.`
            });
            return;
        }
    }).describe("User-visible message to send.")
});
SEND_MESSAGE_TOOL_NAME = "SendMessage";
createSendMessageTool = ()=>{
    const previewStreamingArgs = (ctx, interactionHandler, toolCallId)=>{
        let streamedMessage = "";
        let lastEmittedMessage = "";
        const incrementalJsonParser = new JSONParser({
            emitPartialTokens: true,
            emitPartialValues: true
        });
        incrementalJsonParser.onValue = ({ value, key, stack })=>{
            if (stack.length === 1 && key === "message" && typeof value === "string") {
                streamedMessage = value;
            }
        };
        return (argsTextDelta)=>{
            try {
                incrementalJsonParser.write(argsTextDelta);
            } catch  {}
            if (streamedMessage === lastEmittedMessage) {
                return;
            }
            lastEmittedMessage = streamedMessage;
            void interactionHandler.emitPartialToolCall(ctx, toolCallId, createSendMessageToolCall(new SendMessageToolCall({
                args: buildSendMessageArgs(streamedMessage)
            })));
        };
    };
    const execute = async (parentCtx, interactionHandler, argsStream, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtx = __addDisposableResource106(env_1, createSpan(parentCtx.withName("sendMessageExecute")), false);
            const ctx = spanCtx.ctx;
            let args = "";
            for await (const chunk of argsStream){
                args += chunk;
            }
            const parsedArgs = parseJsonArgsWithZodSchema(args, parametersSchema25);
            const baseToolCall = new SendMessageToolCall({
                args: buildSendMessageArgs(parsedArgs.message)
            });
            return interactionHandler.executeToolCall(ctx, createSendMessageToolCall(baseToolCall), meta.toolCallId, async ()=>new SendMessageResult({
                    result: {
                        case: "success",
                        value: new SendMessageSuccess({
                            timestamp: BigInt(Date.now())
                        })
                    }
                }), (result)=>createSendMessageToolCall(new SendMessageToolCall({
                    ...baseToolCall,
                    result
                })));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources106(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        switch(result.result.case){
            case "error":
                return createStringResult(`Failed to send the message to the user: ${result.result.value.error}`, true);
            case "success":
            case void 0:
                return createStringResult("Message sent to user.");
            default:
                {
                    const exhaustiveCheck = result.result;
                    throw new Error(`Unhandled result case: ${String(exhaustiveCheck)}`);
                }
        }
    };
    return createZodAgentTool("SEND_MESSAGE", {
        name: SEND_MESSAGE_TOOL_NAME,
        descriptionGenerator: ()=>"Send a message to the user. This is the only channel the user sees; ordinary assistant text is hidden thinking. Send only when there is something the user needs \u2014 a result, a blocker, a question. Many turns (e.g. an irrelevant notification) end without any message. When you do send the turn's final message, make it the last thing you do.",
        parameters: parametersSchema25,
        execute,
        previewStreamingArgs,
        render: render2,
        serializeError: (error3)=>createSendMessageToolCall(new SendMessageToolCall({
                result: new SendMessageResult({
                    result: {
                        case: "error",
                        value: new SendMessageError({
                            error: error3 instanceof Error ? error3.message : "Unknown error"
                        })
                    }
                })
            }))
    });
};

}
