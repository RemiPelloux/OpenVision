import { init_dist7 } from "../../../../agent-core/dist/index.js";
import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { ToolCallError, ToolCallRejectedError, init_common9, withSafeParsedArgs } from "../common.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { queryConnectScm } from "../../../../dist_exports.js";
import { external_exports } from "../../../../external_exports.js";
import { createStringResult, createZodAgentTool } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ConnectScmArgs, ConnectScmError, ConnectScmRejected, ConnectScmResult, ConnectScmSuccess, ConnectScmToolCall, init_connect_scm_tool_pb } from "../../../../proto/dist/generated/agent/v1/connect_scm_tool_pb.js";
import { createConnectScmToolCall, createGithubTarget, getConnectScmToolName, resultToString11 } from "../../../../tree_chunk_napi_exports.js";
var __addDisposableResource109, __disposeResources109, parametersSchema27, createConnectScmTool;
export { __addDisposableResource109, __disposeResources109, createConnectScmTool, parametersSchema27 };
var __wakaru_init_connect_scm_initialized = false;
export function init_connect_scm() {
if (__wakaru_init_connect_scm_initialized) return;
__wakaru_init_connect_scm_initialized = true;
"use strict";
init_dist7();
init_dist26();
init_dist();
init_agent_pb();
init_connect_scm_tool_pb();
init_zod();
init_common9();
__addDisposableResource109 = function(env, value, async) {
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
__disposeResources109 = (function(SuppressedError2) {
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
parametersSchema27 = external_exports.object({
    github_repo: external_exports.string().regex(/^[^\s/]+\/[^\s/]+$/, "Expected repository in 'owner/name' form").optional().describe("Optional repository in 'owner/name' form that the user wants connected. Provide it when the user named a specific repo so the connect flow can also prompt to install the app there.")
});
createConnectScmTool = (options2 = {})=>{
    const { gheApplication } = options2;
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource109(env_1, createSpan(parentCtx.withName("connectScmExecute")), false);
            const args = new ConnectScmArgs({
                toolCallId: meta.toolCallId,
                target: {
                    case: "github",
                    value: createGithubTarget({
                        githubRepo: rawArgs.github_repo,
                        gheApplication
                    })
                }
            });
            const response = await queryConnectScm(interactionHandler.listener, spanCtxt.ctx, args);
            if (response.result.case === "rejected") {
                throw new ToolCallRejectedError(response.result.value.reason || "User skipped connecting GitHub");
            }
            if (response.result.case === "failed") {
                const error3 = response.result.value.error || "Failed to connect GitHub";
                throw new ToolCallError({
                    clientVisibleErrorMessage: error3,
                    modelVisibleErrorMessage: error3,
                    error: error3
                });
            }
            const baseToolCall = new ConnectScmToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createConnectScmToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                return new ConnectScmResult({
                    result: {
                        case: "success",
                        value: new ConnectScmSuccess()
                    }
                });
            }, (result2)=>createConnectScmToolCall(new ConnectScmToolCall({
                    ...baseToolCall,
                    result: result2
                })));
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources109(env_1);
        }
    };
    const render2 = async (_ctx, result, props)=>{
        return createStringResult(resultToString11(result, getConnectScmToolName(props.allTools)));
    };
    const description3 = (allTools)=>{
        const toolName = getConnectScmToolName(allTools);
        return `Offer the user a Connect GitHub prompt when source-control access would unblock the task, such as reviewing pull requests, opening pull requests, or acting on a repository. The user may connect, skip, or the attempt may fail. Offer this on your own initiative at most once per conversation; after a skip or failure, don't re-offer it unless the user explicitly asks to use ${toolName}. Otherwise report what happened and continue without GitHub.`;
    };
    return createZodAgentTool("CONNECT_SCM", {
        name: "ConnectScm",
        contextType: {
            type: "dynamic",
            conciseStaticContext: "When user is blocked on connecting to GitHub."
        },
        descriptionGenerator: (props)=>description3(props.allTools),
        parameters: parametersSchema27,
        execute: withSafeParsedArgs(parametersSchema27, execute, createConnectScmToolCall(new ConnectScmToolCall())),
        render: render2,
        serializeError: (error3)=>{
            if (error3 instanceof ToolCallRejectedError) {
                return createConnectScmToolCall(new ConnectScmToolCall({
                    result: new ConnectScmResult({
                        result: {
                            case: "rejected",
                            value: new ConnectScmRejected({
                                reason: error3.message
                            })
                        }
                    })
                }));
            }
            const errorMessage4 = error3 instanceof ToolCallError ? error3.clientVisibleErrorMessage : error3 instanceof Error ? error3.message : String(error3);
            return createConnectScmToolCall(new ConnectScmToolCall({
                result: new ConnectScmResult({
                    result: {
                        case: "error",
                        value: new ConnectScmError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
