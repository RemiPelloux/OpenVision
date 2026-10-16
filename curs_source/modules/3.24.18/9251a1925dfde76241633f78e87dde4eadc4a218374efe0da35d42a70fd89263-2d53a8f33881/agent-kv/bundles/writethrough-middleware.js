import { createSpan } from "./controlled.js";
import { createLogger } from "./subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createHistogram } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var __addDisposableResource2, __disposeResources2, logger4, writethroughGetBlobLatency, writethroughSetBlobLatency, writethroughFlushLatency, WritethroughBlobStore;
export { WritethroughBlobStore, __addDisposableResource2, __disposeResources2, logger4, writethroughFlushLatency, writethroughGetBlobLatency, writethroughSetBlobLatency };
var __wakaru_init_writethrough_middleware_initialized = false;
export function init_writethrough_middleware() {
if (__wakaru_init_writethrough_middleware_initialized) return;
__wakaru_init_writethrough_middleware_initialized = true;
"use strict";
init_dist();
init_dist4();
__addDisposableResource2 = function(env, value, async) {
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
__disposeResources2 = (function(SuppressedError2) {
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
logger4 = createLogger("@anysphere/agent-kv");
writethroughGetBlobLatency = createHistogram("agent_kv.writethrough.get_blob.duration_ms", {
    description: "Duration of WritethroughBlobStore getBlob operations in milliseconds"
});
writethroughSetBlobLatency = createHistogram("agent_kv.writethrough.set_blob.duration_ms", {
    description: "Duration of WritethroughBlobStore setBlob operations in milliseconds"
});
writethroughFlushLatency = createHistogram("agent_kv.writethrough.flush.duration_ms", {
    description: "Duration of WritethroughBlobStore flush operations in milliseconds"
});
WritethroughBlobStore = class {
    constructor(primaryStore, secondaryStore){
        this.primaryStore = primaryStore;
        this.secondaryStore = secondaryStore;
    }
    async getBlob(ctx, blobId) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource2(env_1, createSpan(ctx.withName("WritethroughBlobStore.getBlob")), false);
            const startTime = performance.now();
            try {
                return await this.primaryStore.getBlob(span.ctx, blobId);
            } finally{
                const duration3 = performance.now() - startTime;
                writethroughGetBlobLatency.histogram(ctx, duration3);
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources2(env_1);
        }
    }
    async setBlob(ctx, blobId, blobData) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource2(env_2, createSpan(ctx.withName("WritethroughBlobStore.setBlob")), false);
            const startTime = performance.now();
            try {
                await this.writeBothStores(span.ctx, blobId, blobData, {
                    awaitSecondary: false
                });
            } finally{
                const duration3 = performance.now() - startTime;
                writethroughSetBlobLatency.histogram(ctx, duration3);
            }
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources2(env_2);
        }
    }
    async setBlobAwaitingSecondary(ctx, blobId, blobData) {
        const env_3 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource2(env_3, createSpan(ctx.withName("WritethroughBlobStore.setBlobAwaitingSecondary")), false);
            const startTime = performance.now();
            try {
                await this.writeBothStores(span.ctx, blobId, blobData, {
                    awaitSecondary: true
                });
            } finally{
                const duration3 = performance.now() - startTime;
                writethroughSetBlobLatency.histogram(ctx, duration3);
            }
        } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
        } finally{
            __disposeResources2(env_3);
        }
    }
    async writeBothStores(ctx, blobId, blobData, options2) {
        const primaryWritePromise = this.primaryStore.setBlob(ctx, blobId, blobData);
        const secondaryWritePromise = this.secondaryStore.setBlob(ctx, blobId, blobData).catch((error3)=>{
            logger4.error(ctx, "Secondary store write failed in WritethroughBlobStore", error3);
        });
        await primaryWritePromise;
        if (options2.awaitSecondary) {
            await secondaryWritePromise;
            await this.secondaryStore.flush(ctx).catch((error3)=>{
                logger4.error(ctx, "Secondary store flush failed in WritethroughBlobStore.setBlobAwaitingSecondary", error3);
            });
        } else {
            void secondaryWritePromise;
        }
    }
    async setBlobLocallyOnly(ctx, blobId, blobData) {
        const env_4 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource2(env_4, createSpan(ctx.withName("WritethroughBlobStore.setBlobLocallyOnly")), false);
            return this.setBlob(span.ctx, blobId, blobData);
        } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
        } finally{
            __disposeResources2(env_4);
        }
    }
    async flush(ctx) {
        const env_5 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource2(env_5, createSpan(ctx.withName("WritethroughBlobStore.flush")), false);
            const startTime = performance.now();
            try {
                const primaryFlushPromise = this.primaryStore.flush(span.ctx);
                const secondaryFlushPromise = this.secondaryStore.flush(span.ctx).catch((error3)=>{
                    logger4.error(span.ctx, "Secondary store flush failed in WritethroughBlobStore", error3);
                });
                await primaryFlushPromise;
                void secondaryFlushPromise;
            } finally{
                const duration3 = performance.now() - startTime;
                writethroughFlushLatency.histogram(ctx, duration3);
            }
        } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
        } finally{
            __disposeResources2(env_5);
        }
    }
    isBlobDurable(blobId) {
        return this.primaryStore.isBlobDurable?.(blobId) ?? true;
    }
};

}
