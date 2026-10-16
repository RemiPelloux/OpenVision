import { init_dist7 } from "../../../../../agent-core/dist/index.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../../common.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { querySetupVmEnvironment } from "../../../../../dist_exports.js";
import { createSetupVmEnvironmentToolCall, createStringResult, createZodAgentTool, getParametersSchema } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { SetupVmEnvironmentArgs, SetupVmEnvironmentResult, SetupVmEnvironmentSuccess, SetupVmEnvironmentToolCall, init_setup_vm_environment_tool_pb } from "../../../../../proto/dist/generated/agent/v1/setup_vm_environment_tool_pb.js";
var __addDisposableResource76, __disposeResources76, UPDATE_SCRIPT_DESCRIPTION, createSetupVmEnvironmentTool;
export { UPDATE_SCRIPT_DESCRIPTION, __addDisposableResource76, __disposeResources76, createSetupVmEnvironmentTool };
var __wakaru_init_setup_vm_environment_initialized = false;
export function init_setup_vm_environment() {
if (__wakaru_init_setup_vm_environment_initialized) return;
__wakaru_init_setup_vm_environment_initialized = true;
"use strict";
init_dist7();
init_dist26();
init_dist();
init_agent_pb();
init_setup_vm_environment_tool_pb();
init_zod();
init_common9();
__addDisposableResource76 = function(env, value, async) {
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
__disposeResources76 = (function(SuppressedError2) {
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
UPDATE_SCRIPT_DESCRIPTION = "The update script that will be run on VM startup (after pulling the latest changes from the repository) before every cloud agent session to keep the development environment up to date. This is a command string, NOT a bash script file. Treat this as reliability-critical infrastructure: if this script breaks, future cloud agent pods may fail to start. Keep it super minimal and low-risk. For many simple codebases, the update script will simply be something like `npm install`, `pip install -r requirements.txt`, `uv sync`, etc. For more complex cases requiring multiple steps, use a multiline script with each command on its own line (do NOT use && to chain commands - use newlines instead). This should not include system dependencies that aren't part of the codebase, and it should NOT include service startup logic, migrations, test commands, build commands, or other brittle steps. Examples that MUST NOT be in the update script include `docker compose up`, `docker-compose up`, `pnpm dev`, `npm run dev`, and `python manage.py runserver`. Avoid shell-profile edits and ad-hoc environment-variable setup in the update script (for example `echo ... >> ~/.bashrc`, `source ~/.bashrc`, or `export FOO=bar`). If persistent shell customization is truly required, do it once during setup outside the update script (for example in the agent's `~/.bashrc`) and document it in AGENTS.md. If unsure, prefer fewer commands. Treat this as the \"automatic startup layer\" only; AGENTS.md is the place for durable human/agent operating guidance. The update script MUST be idempotent. It MUST also be robust when users do not merge your previous code changes. Do not assume files introduced only in your unmerged PR will exist on future runs (for example a newly added `package.json`); choose commands that are valid for the repository's current state or guard file-dependent commands accordingly. It will be executed from the /workspace directory (the root of the repository), so you should not need to specify the full path to the commands. Example multiline format:\nnpm install\npnpm run build:deps\npip install -r requirements.txt";
createSetupVmEnvironmentTool = (_resourceAccessor, promptVersion, options2)=>{
    promptVersion = promptVersion ?? "latest";
    const enableDockerfileContents = options2?.enableDockerfileContents ?? false;
    const parametersSchema29 = getParametersSchema(enableDockerfileContents);
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource76(env_1, createSpan(parentCtx.withName("setupVmEnvironmentExecute")), false);
            const rawDockerfileContents = rawArgs.dockerfile_contents;
            const dockerfileContents = rawDockerfileContents !== void 0 && rawDockerfileContents.length > 0 ? rawDockerfileContents : void 0;
            const args = new SetupVmEnvironmentArgs({
                installCommand: rawArgs.update_script,
                ...dockerfileContents !== void 0 ? {
                    dockerfileContents
                } : {}
            });
            const baseToolCall = new SetupVmEnvironmentToolCall({
                args,
                result: void 0
            });
            const result = await interactionHandler.executeToolCall(spanCtxt.ctx, createSetupVmEnvironmentToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                await querySetupVmEnvironment(interactionHandler.listener, spanCtxt.ctx, args);
                return new SetupVmEnvironmentResult({
                    result: {
                        case: "success",
                        value: new SetupVmEnvironmentSuccess({})
                    }
                });
            }, (result2)=>createSetupVmEnvironmentToolCall(new SetupVmEnvironmentToolCall({
                    ...baseToolCall,
                    result: result2
                })));
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources76(env_1);
        }
    };
    const render2 = async (_ctx, _result, _props)=>{
        return createStringResult("Environment setup commands suggested successfully. The user will review them.");
    };
    const name17 = "SetupVmEnvironment";
    const baseDescription = "Suggest the update script to run on VM startup (after pulling the latest changes from the repository) before every cloud agent session to refresh dependencies for the user's project. Treat this as reliability-critical infrastructure: if this script breaks, future cloud agent pods may fail to start. Keep it super minimal and low-risk. For many simple codebases, the update script will simply be something like `npm install`, `pip install -r requirements.txt`, or `uv sync`. For more complex cases requiring multiple steps, provide a multiline script with each command on its own line (do NOT use && to chain commands - use newlines instead). The script should NOT include system dependencies that aren't part of the codebase, service startup logic, migrations, test commands, build commands, or other brittle steps (examples that MUST NOT be in the update script: `docker compose up`, `pnpm dev`, `npm run dev`, `python manage.py runserver`). Avoid shell-profile edits and ad-hoc environment-variable setup; put durable human/agent operating guidance in AGENTS.md instead. The update script MUST be idempotent and MUST be robust when users do not merge your previous code changes (do not assume files introduced only in an unmerged PR will exist on future runs). If unsure, prefer fewer commands. The user will be prompted to approve, edit, or reject this script before it is executed.";
    const description3 = enableDockerfileContents ? `${baseDescription} Optionally, supply inline Dockerfile contents to build the environment's base image from a custom Dockerfile before the update script runs.` : baseDescription;
    return createZodAgentTool("SETUP_VM_ENVIRONMENT", {
        name: name17,
        descriptionGenerator: (_props)=>description3,
        parameters: parametersSchema29,
        execute: withSafeParsedArgs(parametersSchema29, execute, createSetupVmEnvironmentToolCall(new SetupVmEnvironmentToolCall())),
        render: render2,
        serializeError: (_error)=>{
            return createSetupVmEnvironmentToolCall(new SetupVmEnvironmentToolCall({
                result: new SetupVmEnvironmentResult({
                    result: {
                        case: "success",
                        value: new SetupVmEnvironmentSuccess({})
                    }
                })
            }));
        }
    });
};

}
