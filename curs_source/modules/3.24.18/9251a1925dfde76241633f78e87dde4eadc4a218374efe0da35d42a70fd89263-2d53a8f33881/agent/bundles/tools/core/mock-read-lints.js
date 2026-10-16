import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../common.js";
import { init_lenient_array } from "../lenient-array.js";
import { init_dist26 } from "../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../context/dist/index.js";
import { external_exports } from "../../../../external_exports.js";
import { createReadLintsToolCall, createStringResult, createSuccessResult2, createZodAgentTool, lenientArray } from "../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ReadLintsToolArgs, ReadLintsToolCall, ReadLintsToolError, ReadLintsToolResult, init_read_lints_tool_pb } from "../../../../proto/dist/generated/agent/v1/read_lints_tool_pb.js";
var __addDisposableResource92, __disposeResources92, parametersSchema21, createMockReadLintsTool;
export { __addDisposableResource92, __disposeResources92, createMockReadLintsTool, parametersSchema21 };
var __wakaru_init_mock_read_lints_initialized = false;
export function init_mock_read_lints() {
if (__wakaru_init_mock_read_lints_initialized) return;
__wakaru_init_mock_read_lints_initialized = true;
"use strict";
init_dist26();
init_dist();
init_agent_pb();
init_read_lints_tool_pb();
init_zod();
init_common9();
init_lenient_array();
__addDisposableResource92 = function(env, value, async) {
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
__disposeResources92 = (function(SuppressedError2) {
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
parametersSchema21 = external_exports.object({
    paths: lenientArray(external_exports.array(external_exports.string()), {
        field: "paths",
        primitiveItems: true
    }).optional().describe("Optional. An array of paths to files or directories to read linter errors for. You can use either relative paths in the workspace or absolute paths. If provided, returns diagnostics for the specified files/directories only. If not provided, returns diagnostics for all files in the workspace.")
});
createMockReadLintsTool = (_resourceAccessor, promptVersion)=>{
    promptVersion = promptVersion ?? "latest";
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource92(env_1, createSpan(parentCtx.withName("mockReadLintsExecute")), false);
            const toolArgs = new ReadLintsToolArgs({
                paths: rawArgs.paths
            });
            const baseToolCall = new ReadLintsToolCall({
                args: toolArgs,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createReadLintsToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                return createSuccessResult2();
            }, (result2)=>createReadLintsToolCall(new ReadLintsToolCall({
                    ...baseToolCall,
                    result: result2
                })));
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources92(env_1);
        }
    };
    const render2 = async (_ctx, { result }, _props)=>{
        switch(result.case){
            case "success":
                {
                    return createStringResult("No linter errors found.");
                }
            case "error":
                return createStringResult(`Error: ${result.value.errorMessage}`);
            case void 0:
                return createStringResult("Unknown error");
            default:
                {
                    const _exhaustiveCheck = result;
                    throw new Error(`Unhandled result case: ${_exhaustiveCheck}`);
                }
        }
    };
    const toolName = promptVersion === "dsv3-1018" ? "read_lints" : "ReadLints";
    return createZodAgentTool("MOCK_READ_LINTS", {
        name: toolName,
        descriptionGenerator: (_props)=>`Read and display linter errors from the current workspace. You can provide paths to specific files or directories, or omit the argument to get diagnostics for all files.

- If a file path is provided, returns diagnostics for that file only
- If a directory path is provided, returns diagnostics for all files within that directory
- If no path is provided, returns diagnostics for all files in the workspace
- This tool can return linter errors that were already present before your edits, so avoid calling it with a very wide scope of files
- NEVER call this tool on a file unless you've edited it or are about to edit it`,
        parameters: parametersSchema21,
        execute: withSafeParsedArgs(parametersSchema21, execute, createReadLintsToolCall(new ReadLintsToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createReadLintsToolCall(new ReadLintsToolCall({
                result: new ReadLintsToolResult({
                    result: {
                        case: "error",
                        value: new ReadLintsToolError({
                            errorMessage: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
