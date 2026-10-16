import { getSpan2 } from "../../agent-client/dist/exec-controller.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { getIfReady } from "../../coerce_exports.js";
import { init_dist } from "../../context/dist/index.js";
var __addDisposableResource22, __disposeResources22, CachingMiddleware, CachedMcpClient;
export { CachedMcpClient, CachingMiddleware, __addDisposableResource22, __disposeResources22 };
var __wakaru_init_cache_initialized = false;
export function init_cache() {
if (__wakaru_init_cache_initialized) return;
__wakaru_init_cache_initialized = true;
"use strict";
init_dist();
__addDisposableResource22 = function(env, value, async) {
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
__disposeResources22 = (function(SuppressedError2) {
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
CachingMiddleware = class {
    async load(ctx, serverName, server, _configPath, next) {
        const clientPromise = next(ctx, server);
        return new CachedMcpClient(ctx, serverName, clientPromise, server);
    }
};
CachedMcpClient = class {
    constructor(ctx, serverName, clientPromise, config2){
        this.serverName = serverName;
        this.clientPromise = clientPromise;
        this.config = config2;
        this.clientPromiseTraceId = getSpan2(ctx)?.spanContext()?.traceId;
        this.toolsPromise = this.clientPromise.then(async (client)=>{
            if (client === null) {
                return [];
            }
            return await client.getTools(ctx);
        });
        this.resourcesPromise = this.clientPromise.then(async (client)=>{
            if (client === null) {
                return [];
            }
            return (await client.listResources(ctx)).resources;
        });
        this.promptsPromise = this.clientPromise.then(async (client)=>{
            if (client === null) {
                return [];
            }
            return await client.listPrompts(ctx);
        });
        void this.toolsPromise.catch(()=>{});
        void this.resourcesPromise.catch(()=>{});
        void this.promptsPromise.catch(()=>{});
    }
    async getTools(ctx) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_1, createSpan(ctx.withName("CachedMcpClient.getTools")), false);
            span.span.setAttribute("serverName", this.serverName);
            span.span.setAttribute("cacheTraceId", this.clientPromiseTraceId ?? "undefined");
            const currentValue = getIfReady(this.toolsPromise);
            if (currentValue !== void 0) {
                return currentValue;
            }
            return await this.toolsPromise;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources22(env_1);
        }
    }
    async callTool(ctx, name17, args, toolCallId, elicitationProvider) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_2, createSpan(ctx.withName("CachedMcpClient.callTool")), false);
            const inner = await this.getClient(span.ctx);
            if (inner === null) {
                throw new Error("Client is not ready");
            }
            return inner.callTool(span.ctx, name17, args, toolCallId, elicitationProvider);
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources22(env_2);
        }
    }
    async getInstructions(ctx) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_3, createSpan(ctx.withName("CachedMcpClient.getInstructions")), false);
            const inner = await this.getClient(span.ctx);
            if (inner === null) {
                return void 0;
            }
            return await inner.getInstructions(span.ctx);
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources22(env_3);
        }
    }
    async getClient(ctx) {
        const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_4, createSpan(ctx.withName("CachedMcpClient.getClient")), false);
            span.span.setAttribute("serverName", this.serverName);
            span.span.setAttribute("cacheTraceId", this.clientPromiseTraceId ?? "undefined");
            return await this.clientPromise;
        } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        } finally{
            __disposeResources22(env_4);
        }
    }
    async listResources(ctx) {
        const env_5 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_5, createSpan(ctx.withName("CachedMcpClient.listResources")), false);
            span.span.setAttribute("serverName", this.serverName);
            span.span.setAttribute("cacheTraceId", this.clientPromiseTraceId ?? "undefined");
            const currentValue = getIfReady(this.resourcesPromise);
            if (currentValue !== void 0) {
                return {
                    resources: currentValue
                };
            }
            return {
                resources: await this.resourcesPromise
            };
        } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        } finally{
            __disposeResources22(env_5);
        }
    }
    async readResource(ctx, args) {
        const env_6 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_6, createSpan(ctx.withName("CachedMcpClient.readResource")), false);
            const inner = await this.getClient(span.ctx);
            if (inner === null) {
                return {
                    contents: []
                };
            }
            return inner.readResource(span.ctx, args);
        } catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
        } finally{
            __disposeResources22(env_6);
        }
    }
    async listPrompts(ctx) {
        const env_7 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_7, createSpan(ctx.withName("CachedMcpClient.listPrompts")), false);
            span.span.setAttribute("serverName", this.serverName);
            span.span.setAttribute("cacheTraceId", this.clientPromiseTraceId ?? "undefined");
            const currentValue = getIfReady(this.promptsPromise);
            if (currentValue !== void 0) {
                return currentValue;
            }
            return await this.promptsPromise;
        } catch (e_7) {
            env_7.error = e_7;
            env_7.hasError = true;
        } finally{
            __disposeResources22(env_7);
        }
    }
    async getPrompt(ctx, name17, args) {
        const env_8 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_8, createSpan(ctx.withName("CachedMcpClient.getPrompt")), false);
            const inner = await this.getClient(span.ctx);
            if (inner === null) {
                return {
                    messages: []
                };
            }
            return inner.getPrompt(span.ctx, name17, args);
        } catch (e_8) {
            env_8.error = e_8;
            env_8.hasError = true;
        } finally{
            __disposeResources22(env_8);
        }
    }
    async getState(ctx) {
        const env_9 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource22(env_9, createSpan(ctx.withName("CachedMcpClient.getState")), false);
            span.span.setAttribute("serverName", this.serverName);
            const inner = await this.getClient(span.ctx);
            if (inner === null) {
                throw new Error("Client is not ready");
            }
            return await inner.getState(span.ctx);
        } catch (e_9) {
            env_9.error = e_9;
            env_9.hasError = true;
        } finally{
            __disposeResources22(env_9);
        }
    }
    async close() {
        try {
            const inner = await this.clientPromise;
            await inner?.close?.();
        } catch  {}
    }
};

}
