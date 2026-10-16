import { init_dist7 } from "../../../agent-core/dist/index.js";
import { init_common9 } from "./common.js";
import { init_connect_error2 } from "./core/connect-error.js";
import { init_remote_hooks } from "./core/remote-hooks.js";
import { init_tool_execution_timeout } from "./tool-execution-timeout.js";
import { init_request_id } from "../utils/request-id.js";
import { init_dist } from "../../../context/dist/index.js";
import { init_dist31 } from "../../../hooks-exec/dist/index.js";
import { buildDescriptionGeneratorProps, resolveToolCallIdentity, stabilizeMcpToolOrder } from "../../../mcp_sandbox_policy_exports.js";
var __addDisposableResource48, __disposeResources48, HARNESS_TOOL_NAME_MCP, HARNESS_TOOL_NAME_UNKNOWN_TOOL, HARNESS_TOOL_NAME_UNKNOWN_DYNAMIC_TOOL, ToolSetHandle, ToolErrorClassification;
export { HARNESS_TOOL_NAME_MCP, HARNESS_TOOL_NAME_UNKNOWN_DYNAMIC_TOOL, HARNESS_TOOL_NAME_UNKNOWN_TOOL, ToolErrorClassification, ToolSetHandle, __addDisposableResource48, __disposeResources48 };
var __wakaru_init_core5_initialized = false;
export function init_core5() {
if (__wakaru_init_core5_initialized) return;
__wakaru_init_core5_initialized = true;
"use strict";
init_dist7();
init_dist();
init_dist31();
init_request_id();
init_common9();
init_connect_error2();
init_remote_hooks();
init_tool_execution_timeout();
__addDisposableResource48 = function(env, value, async) {
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
__disposeResources48 = (function(SuppressedError2) {
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
HARNESS_TOOL_NAME_MCP = "mcp";
HARNESS_TOOL_NAME_UNKNOWN_TOOL = "unknown_tool";
HARNESS_TOOL_NAME_UNKNOWN_DYNAMIC_TOOL = "unknown_dynamic_tool";
ToolSetHandle = class _ToolSetHandle {
    constructor(allToolsByIdentifier, staticTools, dynamicTools = [], dynamicToolRegistry, descriptionProps = {
        allTools: {}
    }){
        this.allToolsByIdentifier = allToolsByIdentifier;
        this.staticTools = staticTools;
        this.dynamicTools = dynamicTools;
        this.dynamicToolRegistry = dynamicToolRegistry;
        this.descriptionProps = descriptionProps;
    }
    hasTool(identifier2) {
        return this.getTool(identifier2) !== void 0;
    }
    getTool(identifier2) {
        return this.allToolsByIdentifier.get(identifier2)?.at(0);
    }
    resolveToolCallIdentity({ toolName, args }) {
        const staticTool = this.staticTools.find((tool)=>tool.name === toolName);
        if (staticTool !== void 0) {
            return resolveToolCallIdentity({
                tool: staticTool,
                args
            });
        }
        const dynamicTool = this.dynamicTools.find((tool)=>tool.name === toolName);
        if (dynamicTool !== void 0) {
            return resolveToolCallIdentity({
                tool: dynamicTool,
                args,
                isDirectDynamicTool: true
            });
        }
        return void 0;
    }
    getTools(identifier2) {
        return this.allToolsByIdentifier.get(identifier2);
    }
    hasStaticTool(identifier2) {
        return this.getStaticTool(identifier2) !== void 0;
    }
    getStaticTool(identifier2) {
        return this.staticTools.find((tool)=>tool.toolIdentifier === identifier2);
    }
    getStaticTools() {
        return this.staticTools;
    }
    getAllTools() {
        return [
            ...this.staticTools,
            ...this.dynamicTools
        ];
    }
    getDynamicTools() {
        return this.dynamicTools;
    }
    getToolExecutionSet(modelVisibleTools = this.staticTools) {
        if (this.dynamicTools.length === 0) {
            return {
                modelVisibleTools,
                additionalExecutableTools: []
            };
        }
        const canInvokeDynamicTools = modelVisibleTools.some((tool)=>tool.dynamicToolMetaRole === "invocation");
        if (!canInvokeDynamicTools) {
            return {
                modelVisibleTools,
                additionalExecutableTools: []
            };
        }
        const modelToolNames = new Set(modelVisibleTools.map((tool)=>tool.name));
        const directDynamicTools = this.dynamicTools.filter((tool)=>!modelToolNames.has(tool.name));
        return {
            modelVisibleTools,
            additionalExecutableTools: directDynamicTools
        };
    }
    getDynamicToolRegistry() {
        return this.dynamicToolRegistry;
    }
    getDescriptionProps() {
        return this.descriptionProps;
    }
    transformToolsInPlace(transform2) {
        const transformed = transform2(this.getAllTools());
        const dynamicToolSet = new Set(this.dynamicTools);
        const dynamicTools = transformed.filter((tool)=>dynamicToolSet.has(tool));
        const staticTools = transformed.filter((tool)=>!dynamicToolSet.has(tool));
        const transformedHandle = this.dynamicToolRegistry === void 0 ? _ToolSetHandle.fromTools(staticTools) : _ToolSetHandle.fromTools({
            staticTools,
            dynamicTools,
            dynamicToolRegistry: this.dynamicToolRegistry
        });
        this.allToolsByIdentifier = transformedHandle.allToolsByIdentifier;
        this.staticTools = transformedHandle.staticTools;
        this.dynamicTools = transformedHandle.dynamicTools;
        this.descriptionProps = transformedHandle.descriptionProps;
        return this;
    }
    static fromTools(input) {
        const { staticTools: tools, dynamicTools = [], dynamicToolRegistry } = Array.isArray(input) ? {
            staticTools: input
        } : input;
        const hasDynamicMetaTools = tools.some((tool)=>tool.dynamicToolMetaRole === "discovery") && tools.some((tool)=>tool.dynamicToolMetaRole === "invocation");
        const canExposeDynamicTools = dynamicToolRegistry !== void 0 && hasDynamicMetaTools;
        const effectiveDynamicTools = canExposeDynamicTools ? dynamicTools : [];
        const effectiveStaticTools = canExposeDynamicTools ? tools : [
            ...tools,
            ...dynamicTools
        ];
        const descriptionProps = buildDescriptionGeneratorProps([
            ...effectiveStaticTools,
            ...effectiveDynamicTools
        ]);
        dynamicToolRegistry?.replaceTools({
            dynamicTools: effectiveDynamicTools,
            allTools: [
                ...effectiveStaticTools,
                ...effectiveDynamicTools
            ]
        });
        const allToolsByIdentifier = new Map();
        const sortedStaticTools = stabilizeMcpToolOrder(effectiveStaticTools);
        for (const tool of [
            ...sortedStaticTools,
            ...effectiveDynamicTools
        ]){
            const existing = allToolsByIdentifier.get(tool.toolIdentifier);
            if (existing) {
                existing.push(tool);
            } else {
                allToolsByIdentifier.set(tool.toolIdentifier, [
                    tool
                ]);
            }
        }
        return new _ToolSetHandle(allToolsByIdentifier, sortedStaticTools, effectiveDynamicTools, dynamicToolRegistry, descriptionProps);
    }
    merge(other) {
        const otherRegistry = other.getDynamicToolRegistry();
        if (this.dynamicToolRegistry !== void 0 && otherRegistry !== void 0 && this.dynamicToolRegistry !== otherRegistry) {
            throw new Error("Cannot merge toolsets with distinct dynamic registries");
        }
        if (this.dynamicToolRegistry !== void 0 && this.dynamicToolRegistry === otherRegistry) {
            throw new Error("Cannot merge toolsets sharing a dynamic registry");
        }
        if (this.dynamicToolRegistry !== void 0) {
            return this.transformToolsInPlace((tools)=>[
                    ...tools,
                    ...other.getAllTools()
                ]);
        }
        if (otherRegistry !== void 0) {
            return other.transformToolsInPlace((tools)=>[
                    ...this.getAllTools(),
                    ...tools
                ]);
        }
        return _ToolSetHandle.fromTools([
            ...this.getAllTools(),
            ...other.getAllTools()
        ]);
    }
};
(function(ToolErrorClassification2) {
    ToolErrorClassification2["NOOP"] = "noop";
    ToolErrorClassification2["INVALID_ARGS"] = "invalid_args";
    ToolErrorClassification2["UNEXPECTED_ENVIRONMENT"] = "unexpected_environment";
    ToolErrorClassification2["USER_REJECTED"] = "user_rejected";
    ToolErrorClassification2["TIMEOUT"] = "timeout";
    ToolErrorClassification2["PROVIDER_ERROR"] = "provider_error";
    ToolErrorClassification2["BAD_USER_DEVICE_STATE"] = "bad_user_device_state";
    ToolErrorClassification2["ABORTED"] = "aborted";
    ToolErrorClassification2["EXEC_BACKEND_UNAVAILABLE"] = "exec_backend_unavailable";
    ToolErrorClassification2["HOOK_DENIED"] = "hook_denied";
    ToolErrorClassification2["MCP_AUTH_ERROR"] = "mcp_auth_error";
    ToolErrorClassification2["INVALID_OUTPUT_NOTIFICATION"] = "invalid_output_notification";
    ToolErrorClassification2["CONTENT_REFUSED"] = "content_refused";
    ToolErrorClassification2["OTHER_ERROR"] = "error";
})(ToolErrorClassification || (ToolErrorClassification = {}));

}
