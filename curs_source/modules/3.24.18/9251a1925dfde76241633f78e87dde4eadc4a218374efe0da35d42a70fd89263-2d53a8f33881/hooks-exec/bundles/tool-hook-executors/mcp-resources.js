import { init_generic_hooks } from "../generic-hooks.js";
import { HooksToolName, init_tool_names } from "../tool-names.js";
import { createExecutorWithHooks } from "../../../mcp_sandbox_policy_exports.js";
import { ListMcpResourcesError, ListMcpResourcesExecResult, ReadMcpResourceError, ReadMcpResourceExecResult, init_mcp_exec_pb } from "../../../proto/dist/generated/agent/v1/mcp_exec_pb.js";
var listMcpResourcesHooksConfig, ListMcpResourcesExecutorWithHooks, readMcpResourceHooksConfig, ReadMcpResourceExecutorWithHooks;
export { ListMcpResourcesExecutorWithHooks, ReadMcpResourceExecutorWithHooks, listMcpResourcesHooksConfig, readMcpResourceHooksConfig };
var __wakaru_init_mcp_resources_initialized = false;
export function init_mcp_resources() {
if (__wakaru_init_mcp_resources_initialized) return;
__wakaru_init_mcp_resources_initialized = true;
"use strict";
init_mcp_exec_pb();
init_generic_hooks();
init_tool_names();
listMcpResourcesHooksConfig = {
    toolName: HooksToolName.ListMcpResources,
    createToolInput: (args)=>({
            server: args.server
        }),
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.server === "string") {
            args.server = updatedInput.server;
        }
    },
    createRejectedResult: (_args, reason)=>new ListMcpResourcesExecResult({
            result: {
                case: "error",
                value: new ListMcpResourcesError({
                    error: reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        switch(result.result.case){
            case "error":
                return result.result.value.error || "ListMcpResources error";
            case "rejected":
                return result.result.value.reason || "ListMcpResources rejected";
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (_args, result)=>{
        if (result.result.case === "success") {
            return {
                resources_count: result.result.value.resources.length
            };
        }
        return {
            success: true
        };
    }
};
ListMcpResourcesExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, listMcpResourcesHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};
readMcpResourceHooksConfig = {
    toolName: HooksToolName.FetchMcpResource,
    createToolInput: (args)=>({
            server: args.server,
            uri: args.uri,
            download_path: args.downloadPath
        }),
    applyUpdatedInput: (args, updatedInput)=>{
        if (typeof updatedInput.server === "string") {
            args.server = updatedInput.server;
        }
        if (typeof updatedInput.uri === "string") {
            args.uri = updatedInput.uri;
        }
        if (typeof updatedInput.download_path === "string") {
            args.downloadPath = updatedInput.download_path;
        }
    },
    createRejectedResult: (_args, reason)=>new ReadMcpResourceExecResult({
            result: {
                case: "error",
                value: new ReadMcpResourceError({
                    error: reason
                })
            }
        }),
    isSuccess: (result)=>result.result.case === "success",
    getErrorMessage: (result)=>{
        switch(result.result.case){
            case "error":
                return result.result.value.error || "ReadMcpResource error";
            case "rejected":
                return result.result.value.reason || "ReadMcpResource rejected";
            case "notFound":
                return "Resource not found";
            default:
                return "Unknown error";
        }
    },
    createSuccessOutput: (args, result)=>{
        if (result.result.case === "success") {
            const success = result.result.value;
            return {
                uri: args.uri,
                name: success.name,
                mime_type: success.mimeType,
                download_path: success.downloadPath,
                content_type: success.content.case,
                content_length: success.content.case === "text" ? success.content.value.length : success.content.case === "blob" ? success.content.value.length : void 0
            };
        }
        return {
            uri: args.uri,
            success: true
        };
    }
};
ReadMcpResourceExecutorWithHooks = class {
    constructor(innerExecutor, hookExecutor, baseHookRequestExtractor){
        this.wrappedExecutor = createExecutorWithHooks(innerExecutor, hookExecutor, baseHookRequestExtractor, readMcpResourceHooksConfig);
    }
    execute(ctx, args, options2) {
        return this.wrappedExecutor.execute(ctx, args, options2);
    }
};

}
