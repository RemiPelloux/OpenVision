import { init_dist7 } from "../../../../../agent-core/dist/index.js";
import { createSpan } from "../../../../../agent-kv/dist/controlled.js";
import { init_common9, withSafeParsedArgs } from "../../common.js";
import { init_dist26 } from "../../../../../chat-inference/dist/index.js";
import { init_dist } from "../../../../../context/dist/index.js";
import { queryReplaceEnv } from "../../../../../dist_exports.js";
import { external_exports } from "../../../../../external_exports.js";
import { buildReplaceEnvArgsFromToolCallArgs, createReplaceEnvToolCall, createStringResult, createZodAgentTool, replaceEnvResultToString } from "../../../../../mcp_sandbox_policy_exports.js";
import { init_zod } from "../../../../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/index.js";
import { init_agent_pb } from "../../../../../proto/dist/generated/agent/v1/agent_pb.js";
import { ReplaceEnvResult, ReplaceEnvToolCall, init_replace_env_tool_pb } from "../../../../../proto/dist/generated/agent/v1/replace_env_tool_pb.js";
var __addDisposableResource75, __disposeResources75, replaceEnvToolModes, parametersSchema8, createReplaceEnvTool;
export { __addDisposableResource75, __disposeResources75, createReplaceEnvTool, parametersSchema8, replaceEnvToolModes };
var __wakaru_init_replace_env_initialized = false;
export function init_replace_env() {
if (__wakaru_init_replace_env_initialized) return;
__wakaru_init_replace_env_initialized = true;
"use strict";
init_dist7();
init_dist26();
init_dist();
init_agent_pb();
init_replace_env_tool_pb();
init_zod();
init_common9();
__addDisposableResource75 = function(env, value, async) {
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
__disposeResources75 = (function(SuppressedError2) {
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
replaceEnvToolModes = [
    "custom",
    "clean_slate",
    "default"
];
parametersSchema8 = external_exports.object({
    mode: external_exports.enum(replaceEnvToolModes).optional().describe("How to configure the replacement environment. Use `custom` (default) to provide a new install script and optional Dockerfile, `clean_slate` for the default base image with no install script or existing environment config, or `default` to re-read the repo/saved environment config without applying an override."),
    checkout_ref_overrides: external_exports.array(external_exports.object({
        repo_url: external_exports.string().describe("Repo to override. Any common form works (https/ssh/scp-style URL, `host/owner/repo`, or bare `owner/repo`); it is canonicalized before matching against the agent's repos."),
        ref: external_exports.string().describe("Branch, tag, or commit SHA to check out for this repo. A SHA results in a detached HEAD. It must already exist on the remote (commit and push first).")
    })).optional().describe("Optional, applies to all modes. Per-repo overrides for the git ref the replacement environment is rebuilt from, replacing whatever was pinned in the original start request. The ref determines where `.cursor/environment.json` is read from and the commit the new pod is built at. Only list the repos you want to override; unlisted repos keep their original ref. Commit and push your changes to the target ref first, since it is resolved from the remote. The tool call fails fast if a `repo_url` matches no known repo (or matches ambiguously) or if a `ref` is malformed; a ref that does not exist on the remote is not pre-checked and instead fails later while rebuilding the pod."),
    config: external_exports.object({
        install_script: external_exports.string().optional().describe("Required when mode is `custom`. Shell script to run while preparing the replacement environment. Use a single command for simple setups or a multiline script with one command per line for more complex installs. Leave unset for `clean_slate` and `default`."),
        dockerfile_contents: external_exports.string().optional().describe("Optional only when mode is `custom`. Inline Dockerfile contents used to build the replacement pod's base image before the install script runs. Leave unset to use the default base image. Ignored for `clean_slate` and `default`.")
    }).optional().describe("Environment configuration for `custom` mode: an install script and optional inline Dockerfile. Omit for `clean_slate` and `default`.")
}).superRefine((args, ctx)=>{
    const mode = args.mode ?? "custom";
    if (mode === "custom" && (args.config?.install_script === void 0 || args.config.install_script.trim().length === 0)) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            path: [
                "config",
                "install_script"
            ],
            message: "`install_script` must be a non-empty string in custom mode"
        });
    }
    if (mode === "custom" && args.config?.dockerfile_contents !== void 0 && args.config.dockerfile_contents.trim().length === 0) {
        ctx.addIssue({
            code: external_exports.ZodIssueCode.custom,
            path: [
                "config",
                "dockerfile_contents"
            ],
            message: "`dockerfile_contents` must be non-empty when provided in custom mode"
        });
    }
    args.checkout_ref_overrides?.forEach((override, index)=>{
        if (override.repo_url.trim().length === 0) {
            ctx.addIssue({
                code: external_exports.ZodIssueCode.custom,
                path: [
                    "checkout_ref_overrides",
                    index,
                    "repo_url"
                ],
                message: "`repo_url` must be a non-empty string"
            });
        }
        if (override.ref.trim().length === 0) {
            ctx.addIssue({
                code: external_exports.ZodIssueCode.custom,
                path: [
                    "checkout_ref_overrides",
                    index,
                    "ref"
                ],
                message: "`ref` must be a non-empty string"
            });
        }
    });
}).describe("Replace the cloud-agent environment using an explicit mode: `custom`, `clean_slate`, or `default`.");
createReplaceEnvTool = (_resourceAccessor, promptVersion)=>{
    promptVersion = promptVersion ?? "latest";
    const execute = async (parentCtx, interactionHandler, rawArgs, meta)=>{
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const spanCtxt = __addDisposableResource75(env_1, createSpan(parentCtx.withName("replaceEnvExecute")), false);
            const args = buildReplaceEnvArgsFromToolCallArgs(rawArgs);
            const baseToolCall = new ReplaceEnvToolCall({
                args,
                result: void 0
            });
            return await interactionHandler.executeToolCall(spanCtxt.ctx, createReplaceEnvToolCall(baseToolCall), meta.toolCallId, async (_ctx)=>{
                return await queryReplaceEnv(interactionHandler.listener, spanCtxt.ctx, args);
            }, (result)=>createReplaceEnvToolCall(new ReplaceEnvToolCall({
                    ...baseToolCall,
                    result
                })));
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources75(env_1);
        }
    };
    const render2 = async (_ctx, result, _props)=>{
        return createStringResult(replaceEnvResultToString(result));
    };
    const name17 = "ReplaceEnv";
    const description3 = "Replace the current cloud-agent environment with a new pod. Choose `custom` mode to override the environment with a provided install script and optional inline Dockerfile. Choose `clean_slate` mode for the default base image with no install script and no existing environment config. Choose `default` mode to re-read the repo/saved environment config without applying an override. Use this when the current pod environment is unhealthy or needs a clean re-provisioning. On success, the cloud agent moves to the replacement environment. On failure, the original environment is kept.";
    return createZodAgentTool("REPLACE_ENV", {
        name: name17,
        contextType: {
            type: "static"
        },
        descriptionGenerator: (_props)=>description3,
        parameters: parametersSchema8,
        execute: withSafeParsedArgs(parametersSchema8, execute, createReplaceEnvToolCall(new ReplaceEnvToolCall())),
        render: render2,
        serializeError: (error3)=>{
            const errorMessage4 = error3 instanceof Error ? error3.message : "Unknown replace env error";
            return createReplaceEnvToolCall(new ReplaceEnvToolCall({
                result: new ReplaceEnvResult({
                    result: {
                        case: "failure",
                        value: {
                            errorMessage: errorMessage4,
                            setupLogs: ""
                        }
                    }
                })
            }));
        }
    });
};

}
