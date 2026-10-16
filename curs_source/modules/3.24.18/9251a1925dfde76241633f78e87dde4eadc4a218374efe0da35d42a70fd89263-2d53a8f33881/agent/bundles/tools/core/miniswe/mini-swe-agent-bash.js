import { init_dist8 } from "../../../../../agent-exec/dist/index.js";
import { miniSweAgentBashExecutorResource } from "../../../../../agent-exec/dist/mini-swe-agent-bash.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../../common.js";
import { init_shell_parser2 } from "../shell/shell-parser.js";
import { init_streaming } from "../shell/streaming.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { analyzeShellCommand } from "../../../../../dist_exports2.js";
import { external_exports } from "../../../../../external_exports.js";
import { createShellToolCall, createStringResult, createZodAgentTool, generateSeededUuid, renderMiniSweAgentBashObservation } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { ShellArgs, ShellResult, ShellSpawnError, init_shell_exec_pb } from "../../../../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { ShellToolCall, init_shell_tool_pb } from "../../../../../proto/dist/generated/agent/v1/shell_tool_pb.js";
var __addDisposableResource91, __disposeResources91, MINI_SWE_AGENT_BASH_TOOL_NAME, MINI_SWE_AGENT_BASH_DESCRIPTION, MINI_SWE_AGENT_OUTPUT_LIMIT2, MINI_SWE_AGENT_OUTPUT_EDGE_CHARS2, MINI_SWE_AGENT_DEFAULT_TIMEOUT_MS2, parametersSchema20, createMiniSweAgentBashTool;
export { MINI_SWE_AGENT_BASH_DESCRIPTION, MINI_SWE_AGENT_BASH_TOOL_NAME, MINI_SWE_AGENT_DEFAULT_TIMEOUT_MS2, MINI_SWE_AGENT_OUTPUT_EDGE_CHARS2, MINI_SWE_AGENT_OUTPUT_LIMIT2, __addDisposableResource91, __disposeResources91, createMiniSweAgentBashTool, parametersSchema20 };
var __wakaru_init_mini_swe_agent_bash3_initialized = false;
export function init_mini_swe_agent_bash3() {
if (__wakaru_init_mini_swe_agent_bash3_initialized) return;
__wakaru_init_mini_swe_agent_bash3_initialized = true;
"use strict";
init_dist8();
init_dist26();
init_dist();
init_shell_exec_pb();
init_shell_tool_pb();
init_zod();
init_common9();
init_shell_parser2();
init_streaming();
__addDisposableResource91 = function(env, value, async) {
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
__disposeResources91 = (function(SuppressedError2) {
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
MINI_SWE_AGENT_BASH_TOOL_NAME = "bash";
MINI_SWE_AGENT_BASH_DESCRIPTION = "Execute a bash command";
MINI_SWE_AGENT_OUTPUT_LIMIT2 = 1e4;
MINI_SWE_AGENT_OUTPUT_EDGE_CHARS2 = 5e3;
MINI_SWE_AGENT_DEFAULT_TIMEOUT_MS2 = 3e4;
parametersSchema20 = external_exports.object({
    command: external_exports.string().describe("The bash command to execute")
});
createMiniSweAgentBashTool = (resourceAccessor)=>{
    const miniSweAgentBashExecutor = resourceAccessor.get(miniSweAgentBashExecutorResource);
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource91(env_1, createSpan(parentCtx.withName("miniSweAgentBashExecute")), false);
            const analysis = analyzeShellCommand(rawArgs.command);
            const args = new ShellArgs({
                command: rawArgs.command,
                timeout: MINI_SWE_AGENT_DEFAULT_TIMEOUT_MS2,
                toolCallId: meta.toolCallId,
                simpleCommands: analysis.legacy.simpleCommands,
                hasInputRedirect: analysis.legacy.hasInputRedirect,
                hasOutputRedirect: analysis.legacy.hasOutputRedirect,
                parsingResult: analysis.structured
            });
            const baseToolCall = new ShellToolCall({
                args,
                result: void 0
            });
            return await interactionHandler.executeToolCall(spanCtxt.ctx, createShellToolCall(baseToolCall), meta.toolCallId, async (ctx)=>{
                const execId = generateSeededUuid(meta.toolCallId);
                return await miniSweAgentBashExecutor.execute(ctx, args, {
                    execId,
                    hookContextCollector: meta.hookContextCollector
                });
            }, (result)=>createShellToolCall(new ShellToolCall({
                    ...baseToolCall,
                    result
                })), meta.hookContextCollector);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources91(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        return createStringResult(renderMiniSweAgentBashObservation(result));
    };
    return createZodAgentTool("MINI_SWE_AGENT_BASH", {
        name: MINI_SWE_AGENT_BASH_TOOL_NAME,
        descriptionGenerator: ()=>MINI_SWE_AGENT_BASH_DESCRIPTION,
        parameters: parametersSchema20,
        execute: withSafeParsedArgs(parametersSchema20, execute, createShellToolCall(new ShellToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
            return createShellToolCall(new ShellToolCall({
                result: new ShellResult({
                    result: {
                        case: "spawnError",
                        value: new ShellSpawnError({
                            error: errorMessage4
                        })
                    }
                })
            }));
        }
    });
};

}
