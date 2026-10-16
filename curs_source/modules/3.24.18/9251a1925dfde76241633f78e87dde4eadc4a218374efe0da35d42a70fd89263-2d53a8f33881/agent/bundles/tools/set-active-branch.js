import { init_dist7 } from "../../../agent-core/dist/index.js";
import { Updates } from "../../../agent-core/dist/interaction-updates.js";
import { createSpan } from "../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "./common.js";
import { init_dist26 } from "../../../chat-inference/dist/index.js";
import { init_dist } from "../../../context/dist/index.js";
import { external_exports } from "../../../external_exports.js";
import { createStringResult, createZodAgentTool } from "../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { SetActiveBranchArgs, SetActiveBranchError, SetActiveBranchResult, SetActiveBranchSuccess, SetActiveBranchToolCall, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
import { createSetActiveBranchToolCall } from "../../../tree_chunk_napi_exports.js";
var __addDisposableResource110, __disposeResources110, parametersSchema28, createSetActiveBranchTool;
export { __addDisposableResource110, __disposeResources110, createSetActiveBranchTool, parametersSchema28 };
var __wakaru_init_set_active_branch_initialized = false;
export function init_set_active_branch() {
if (__wakaru_init_set_active_branch_initialized) return;
__wakaru_init_set_active_branch_initialized = true;
"use strict";
init_dist7();
init_dist26();
init_dist();
init_agent_pb();
init_zod();
init_common9();
__addDisposableResource110 = function(env, value, async) {
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
__disposeResources110 = (function(SuppressedError2) {
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
parametersSchema28 = external_exports.object({
    path: external_exports.string().describe("Absolute repository path for this branch update."),
    branchName: external_exports.string().describe("New active branch name.")
});
createSetActiveBranchTool = (_resourceAccessor, stateHandler)=>{
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource110(env_1, createSpan(parentCtx.withName("setActiveBranchExecute")), false);
            const args = new SetActiveBranchArgs({
                path: rawArgs.path,
                branchName: rawArgs.branchName
            });
            const baseToolCall = new SetActiveBranchToolCall({
                args,
                result: void 0
            });
            return interactionHandler.executeToolCall(spanCtxt.ctx, createSetActiveBranchToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                stateHandler.setActiveBranchName(rawArgs.branchName);
                await interactionHandler.listener.sendUpdate(ctx, Updates.activeBranchChange(rawArgs.path, rawArgs.branchName));
                return new SetActiveBranchResult({
                    result: {
                        case: "success",
                        value: new SetActiveBranchSuccess()
                    }
                });
            }, (result)=>createSetActiveBranchToolCall(new SetActiveBranchToolCall({
                    ...baseToolCall,
                    result
                })));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources110(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        switch(result.result.case){
            case "success":
                return createStringResult("Active branch updated.");
            case "error":
                return createStringResult(`Error: ${result.result.value.error}`);
            case void 0:
                return createStringResult("Unknown error");
            default:
                {
                    const _exhaustiveCheck = result.result;
                    throw new Error(`Unhandled result case: ${String(_exhaustiveCheck)}`);
                }
        }
    };
    return createZodAgentTool("SET_ACTIVE_BRANCH", {
        name: "SetActiveBranch",
        descriptionGenerator: (_props)=>"Set active git branch metadata for the current conversation and client UI. This directly controls which merge-base diff and related pull requests are shown to the user. Call this tool immediately when you are making changes on an existing feature branch, and call it immediately after committing changes to a new branch.",
        parameters: parametersSchema28,
        execute: withSafeParsedArgs(parametersSchema28, execute, createSetActiveBranchToolCall(new SetActiveBranchToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createSetActiveBranchToolCall(new SetActiveBranchToolCall({
                result: new SetActiveBranchResult({
                    result: {
                        case: "error",
                        value: new SetActiveBranchError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
