import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { generateApprovalKey } from "../../coerce_exports.js";
import { init_dist } from "../../context/dist/index.js";
var import_node_crypto13, import_promises23, import_node_path45, __addDisposableResource21, __disposeResources21, McpServerDisabledError, McpServerNotApprovedError, ServerDisabledMiddleware, ServerApprovalMiddleware, FileBasedMcpApprovalStore;
export { FileBasedMcpApprovalStore, McpServerDisabledError, McpServerNotApprovedError, ServerApprovalMiddleware, ServerDisabledMiddleware, __addDisposableResource21, __disposeResources21, import_node_crypto13, import_node_path45, import_promises23 };
var __wakaru_init_approval_store_initialized = false;
export function init_approval_store() {
if (__wakaru_init_approval_store_initialized) return;
__wakaru_init_approval_store_initialized = true;
"use strict";
import_node_crypto13 = require("node:crypto");
import_promises23 = require("node:fs/promises");
import_node_path45 = __toESM(require("node:path"), 1);
init_dist();
__addDisposableResource21 = function(env, value, async) {
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
__disposeResources21 = (function(SuppressedError2) {
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
McpServerDisabledError = class extends Error {
    constructor(serverName){
        super(`MCP server "${serverName}" is disabled`);
        this.name = "McpServerDisabledError";
    }
};
McpServerNotApprovedError = class extends Error {
    constructor(serverName){
        super(`MCP server "${serverName}" has not been approved`);
        this.serverName = serverName;
        this.name = "McpServerNotApprovedError";
    }
};
ServerDisabledMiddleware = class {
    constructor(disabledService){
        this.disabledService = disabledService;
    }
    async load(ctx, serverName, server, _configPath, next) {
        const isDisabled = await this.disabledService.isServerDisabled(serverName);
        if (isDisabled) {
            throw new McpServerDisabledError(serverName);
        }
        return await next(ctx, server);
    }
};
ServerApprovalMiddleware = class {
    constructor(approvalService){
        this.approvalService = approvalService;
    }
    async load(ctx, serverName, server, configPath, next) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _span = __addDisposableResource21(env_1, createSpan(ctx.withName("ServerApprovalMiddleware.load")), false);
            const isApproved = await this.approvalService.isServerApproved(serverName, server, configPath);
            if (!isApproved) {
                throw new McpServerNotApprovedError(serverName);
            }
            return await next(ctx, server);
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources21(env_1);
        }
    }
};
FileBasedMcpApprovalStore = class {
    constructor(approvalsPath, cwd){
        this.approvalsPath = approvalsPath;
        this.cwd = cwd;
        this.approvalsPromise = this.loadApprovals();
    }
    async isServerApproved(serverName, server, _configPath) {
        const approvalKey = generateApprovalKey(serverName, server, this.cwd);
        const approvals = await this.getApprovals();
        return approvals.includes(approvalKey);
    }
    async loadApprovals() {
        try {
            const approvalsContent = await (0, import_promises23.readFile)(this.approvalsPath, "utf8");
            const parsed = JSON.parse(approvalsContent);
            if (!Array.isArray(parsed)) {
                await this.saveApprovalsToFile([]);
                return [];
            }
            return parsed;
        } catch (e) {
            if (e instanceof Error && e.message.includes("ENOENT")) {
                return [];
            }
            throw e;
        }
    }
    async getApprovals() {
        return this.approvalsPromise;
    }
    async addApproval(approvalKey) {
        const approvals = await this.approvalsPromise;
        if (!approvals.includes(approvalKey)) {
            approvals.push(approvalKey);
            await this.saveApprovals(approvals);
        }
    }
    async addApprovals(approvalKeys) {
        const approvals = await this.approvalsPromise;
        const newKeys = approvalKeys.filter((key)=>!approvals.includes(key));
        if (newKeys.length > 0) {
            approvals.push(...newKeys);
            await this.saveApprovals(approvals);
        }
    }
    async removeApproval(approvalKey) {
        const approvals = await this.approvalsPromise;
        const filtered = approvals.filter((key)=>key !== approvalKey);
        if (filtered.length !== approvals.length) {
            await this.saveApprovals(filtered);
        }
    }
    async clearApprovals(filter3) {
        const approvals = await this.approvalsPromise;
        const filtered = filter3 ? approvals.filter((key)=>!filter3(key)) : [];
        if (filtered.length !== approvals.length) {
            await this.saveApprovals(filtered);
        }
    }
    async saveApprovalsToFile(approvals) {
        await (0, import_promises23.mkdir)(import_node_path45.default.dirname(this.approvalsPath), {
            recursive: true
        });
        await (0, import_promises23.writeFile)(this.approvalsPath, JSON.stringify(approvals, null, 2));
    }
    async saveApprovals(approvals) {
        await this.saveApprovalsToFile(approvals);
        this.approvalsPromise = Promise.resolve(approvals);
    }
};

}
