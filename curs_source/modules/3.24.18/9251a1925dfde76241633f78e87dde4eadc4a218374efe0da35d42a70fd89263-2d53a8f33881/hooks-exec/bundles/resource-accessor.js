import { backgroundShellExecutorResource, writeBackgroundShellInputExecutorResource } from "../../agent-exec/dist/background-shell.js";
import { computerUseExecutorResource } from "../../agent-exec/dist/computer-use.js";
import { deleteExecutorResource } from "../../agent-exec/dist/delete.js";
import { diagnosticsExecutorResource } from "../../agent-exec/dist/diagnostics.js";
import { fetchExecutorResource } from "../../agent-exec/dist/fetch.js";
import { grepExecutorResource } from "../../agent-exec/dist/grep.js";
import { LocalHookExecutorImpl, hookExecutorResource } from "../../agent-exec/dist/hook-executor.js";
import { init_dist8 } from "../../agent-exec/dist/index.js";
import { lsExecutorResource } from "../../agent-exec/dist/ls.js";
import { listMcpResourcesExecutorResource, mcpExecutorResource, readMcpResourceExecutorResource } from "../../agent-exec/dist/mcp.js";
import { readExecutorResource, redactedReadExecutorResource } from "../../agent-exec/dist/read.js";
import { recordScreenExecutorResource } from "../../agent-exec/dist/record-screen.js";
import { requestContextExecutorResource } from "../../agent-exec/dist/request-context.js";
import { shellStreamExecutorResource } from "../../agent-exec/dist/shell-stream.js";
import { shellExecutorResource } from "../../agent-exec/dist/shell.js";
import { writeExecutorResource } from "../../agent-exec/dist/write.js";
import { RequestContextExecutorWithHooksContext, init_request_context3 } from "./request-context.js";
import { BackgroundShellExecutorWithHooks, WriteBackgroundShellStdinExecutorWithHooks } from "./tool-hook-executors/background-shell.js";
import { ComputerUseExecutorWithHooks } from "./tool-hook-executors/computer-use.js";
import { DeleteExecutorWithHooks } from "./tool-hook-executors/delete.js";
import { DiagnosticsExecutorWithHooks } from "./tool-hook-executors/diagnostics.js";
import { FetchExecutorWithHooks } from "./tool-hook-executors/fetch.js";
import { GrepExecutorWithHooks } from "./tool-hook-executors/grep.js";
import { init_tool_hook_executors } from "./tool-hook-executors/index.js";
import { LsExecutorWithHooks } from "./tool-hook-executors/ls.js";
import { ListMcpResourcesExecutorWithHooks, ReadMcpResourceExecutorWithHooks } from "./tool-hook-executors/mcp-resources.js";
import { McpToolExecutorWithHooks } from "./tool-hook-executors/mcp.js";
import { ReadExecutorWithHooks } from "./tool-hook-executors/read.js";
import { RecordScreenExecutorWithHooks } from "./tool-hook-executors/record-screen.js";
import { ShellStreamExecutorWithHooks } from "./tool-hook-executors/shell-stream.js";
import { ShellExecutorWithHooks } from "./tool-hook-executors/shell.js";
import { WriteExecutorWithHooks } from "./tool-hook-executors/write.js";
var ListableHooksResourceAccessor;
export { ListableHooksResourceAccessor };
var __wakaru_init_resource_accessor_initialized = false;
export function init_resource_accessor() {
if (__wakaru_init_resource_accessor_initialized) return;
__wakaru_init_resource_accessor_initialized = true;
"use strict";
init_dist8();
init_request_context3();
init_tool_hook_executors();
ListableHooksResourceAccessor = class {
    constructor(innerAccessor, hookExecutor, baseHookRequestExtractor, mcpLease, hooksAdditionalContextPromise, teamHooksReadyPromise, hooksConfigLease){
        this.innerAccessor = innerAccessor;
        this.hookExecutor = hookExecutor;
        this.baseHookRequestExtractor = baseHookRequestExtractor;
        this.mcpLease = mcpLease;
        this.hooksAdditionalContextPromise = hooksAdditionalContextPromise;
        this.teamHooksReadyPromise = teamHooksReadyPromise;
        this.hooksConfigLease = hooksConfigLease;
    }
    get(resource) {
        if (resource.symbol === hookExecutorResource.symbol) {
            return new LocalHookExecutorImpl(this.hookExecutor);
        }
        const innerImpl = this.innerAccessor.get(resource);
        if (resource.symbol === shellExecutorResource.symbol) {
            return new ShellExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === shellStreamExecutorResource.symbol) {
            return new ShellStreamExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === writeExecutorResource.symbol) {
            return new WriteExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === mcpExecutorResource.symbol) {
            return new McpToolExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor, this.mcpLease, this.hooksConfigLease);
        }
        if (resource.symbol === readExecutorResource.symbol || resource.symbol === redactedReadExecutorResource.symbol) {
            return new ReadExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === lsExecutorResource.symbol) {
            return new LsExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === grepExecutorResource.symbol) {
            return new GrepExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === fetchExecutorResource.symbol) {
            return new FetchExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === deleteExecutorResource.symbol) {
            return new DeleteExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === diagnosticsExecutorResource.symbol) {
            return new DiagnosticsExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === listMcpResourcesExecutorResource.symbol) {
            return new ListMcpResourcesExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === readMcpResourceExecutorResource.symbol) {
            return new ReadMcpResourceExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === backgroundShellExecutorResource.symbol) {
            return new BackgroundShellExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === writeBackgroundShellInputExecutorResource.symbol) {
            return new WriteBackgroundShellStdinExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === computerUseExecutorResource.symbol) {
            return new ComputerUseExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === recordScreenExecutorResource.symbol) {
            return new RecordScreenExecutorWithHooks(innerImpl, this.hookExecutor, this.baseHookRequestExtractor);
        }
        if (resource.symbol === requestContextExecutorResource.symbol && (this.hooksAdditionalContextPromise || this.hooksConfigLease)) {
            return new RequestContextExecutorWithHooksContext(innerImpl, this.hooksAdditionalContextPromise ?? Promise.resolve(void 0), this.teamHooksReadyPromise, this.hooksConfigLease);
        }
        return innerImpl;
    }
    *entries() {
        for (const [resource, implementation] of this.innerAccessor.entries()){
            if (resource.symbol === shellExecutorResource.symbol) {
                yield [
                    resource,
                    new ShellExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === shellStreamExecutorResource.symbol) {
                yield [
                    resource,
                    new ShellStreamExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === writeExecutorResource.symbol) {
                yield [
                    resource,
                    new WriteExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === mcpExecutorResource.symbol) {
                yield [
                    resource,
                    new McpToolExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor, this.mcpLease, this.hooksConfigLease)
                ];
            } else if (resource.symbol === readExecutorResource.symbol || resource.symbol === redactedReadExecutorResource.symbol) {
                yield [
                    resource,
                    new ReadExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === lsExecutorResource.symbol) {
                yield [
                    resource,
                    new LsExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === grepExecutorResource.symbol) {
                yield [
                    resource,
                    new GrepExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === fetchExecutorResource.symbol) {
                yield [
                    resource,
                    new FetchExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === deleteExecutorResource.symbol) {
                yield [
                    resource,
                    new DeleteExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === diagnosticsExecutorResource.symbol) {
                yield [
                    resource,
                    new DiagnosticsExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === listMcpResourcesExecutorResource.symbol) {
                yield [
                    resource,
                    new ListMcpResourcesExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === readMcpResourceExecutorResource.symbol) {
                yield [
                    resource,
                    new ReadMcpResourceExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === backgroundShellExecutorResource.symbol) {
                yield [
                    resource,
                    new BackgroundShellExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === writeBackgroundShellInputExecutorResource.symbol) {
                yield [
                    resource,
                    new WriteBackgroundShellStdinExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === computerUseExecutorResource.symbol) {
                yield [
                    resource,
                    new ComputerUseExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === recordScreenExecutorResource.symbol) {
                yield [
                    resource,
                    new RecordScreenExecutorWithHooks(implementation, this.hookExecutor, this.baseHookRequestExtractor)
                ];
            } else if (resource.symbol === requestContextExecutorResource.symbol && (this.hooksAdditionalContextPromise || this.hooksConfigLease)) {
                yield [
                    resource,
                    new RequestContextExecutorWithHooksContext(implementation, this.hooksAdditionalContextPromise ?? Promise.resolve(void 0), this.teamHooksReadyPromise, this.hooksConfigLease)
                ];
            } else {
                yield [
                    resource,
                    implementation
                ];
            }
        }
        yield [
            hookExecutorResource,
            new LocalHookExecutorImpl(this.hookExecutor)
        ];
    }
};

}
