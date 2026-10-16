import { getSpan2 } from "../../agent-client/dist/exec-controller.js";
import { init_blob_store } from "./blob-store.js";
import { createLogger } from "./subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { DisposableSpan } from "../../context/dist/otel.js";
import { isChildSpanSuppressed, withSpan } from "../../dashboard_connect_exports.js";
import { createHistogram, createLinkedContext, recordSlowSpan, toUint8Array } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { KvClientMessage, init_kv_pb } from "../../proto/dist/generated/agent/v1/kv_pb.js";
function createSpan(ctx, options2) {
    const parentSpan = getSpan2(ctx);
    const isSuppressed = isChildSpanSuppressed(ctx, parentSpan);
    const ctxWithSpan = withSpan(ctx, options2);
    const span = getSpan2(ctxWithSpan);
    return new DisposableSpan(ctxWithSpan, span, !isSuppressed);
}
var __addDisposableResource, __disposeResources, logger3, SLOW_GET_BLOB_THRESHOLD_MS, SLOW_SET_BLOB_THRESHOLD_MS, controlledGetBlobLatency, controlledSetBlobLatency, ControlledKvManager;
export { ControlledKvManager, SLOW_GET_BLOB_THRESHOLD_MS, SLOW_SET_BLOB_THRESHOLD_MS, __addDisposableResource, __disposeResources, controlledGetBlobLatency, controlledSetBlobLatency, createSpan, logger3 };
var __wakaru_init_controlled_initialized = false;
export function init_controlled() {
if (__wakaru_init_controlled_initialized) return;
__wakaru_init_controlled_initialized = true;
"use strict";
init_dist();
init_dist4();
init_kv_pb();
init_blob_store();
__addDisposableResource = function(env, value, async) {
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
__disposeResources = (function(SuppressedError2) {
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
logger3 = createLogger("ControlledKvManager");
SLOW_GET_BLOB_THRESHOLD_MS = 50;
SLOW_SET_BLOB_THRESHOLD_MS = 100;
controlledGetBlobLatency = createHistogram("agent_kv.controlled.get_blob.duration_ms", {
    description: "Duration of ControlledKvManager getBlob operations in milliseconds"
});
controlledSetBlobLatency = createHistogram("agent_kv.controlled.set_blob.duration_ms", {
    description: "Duration of ControlledKvManager setBlob operations in milliseconds"
});
ControlledKvManager = class {
    constructor(serverStream, clientStream, blobStore, options2 = {}){
        this.serverStream = serverStream;
        this.clientStream = clientStream;
        this.blobStore = blobStore;
        this.options = options2;
    }
    async run(parentCtx) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const runSpan = __addDisposableResource(env_1, createSpan(parentCtx.withName("ControlledKvManager.run")), false);
            const baseCtx = runSpan.ctx;
            const inFlightHandlers = new Set();
            const trackHandler = (handler)=>{
                inFlightHandlers.add(handler);
                void handler.finally(()=>{
                    inFlightHandlers.delete(handler);
                });
            };
            try {
                for await (const message of this.serverStream){
                    const startTime = performance.now();
                    const startEpochMs = Date.now();
                    switch(message.message.case){
                        case "getBlobArgs":
                            {
                                const blobId = message.message.value.blobId;
                                trackHandler((async ()=>{
                                    const ctx = createLinkedContext(message.spanContext, "ControlledKvManager.getBlob", baseCtx);
                                    try {
                                        await this.options.beforeGetBlob?.(ctx, blobId);
                                        const response = await this.blobStore.getBlob(ctx, blobId);
                                        await this.clientStream.write(new KvClientMessage({
                                            id: message.id,
                                            message: {
                                                case: "getBlobResult",
                                                value: {
                                                    blobData: response ? toUint8Array(response) : void 0
                                                }
                                            }
                                        }));
                                    } catch (error3) {
                                        logger3.error(ctx, "Error handling getBlob", error3);
                                        const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
                                        try {
                                            await this.clientStream.write(new KvClientMessage({
                                                id: message.id,
                                                message: {
                                                    case: "getBlobResult",
                                                    value: {
                                                        blobData: void 0,
                                                        error: {
                                                            message: errorMessage4
                                                        }
                                                    }
                                                }
                                            }));
                                        } catch (writeError) {
                                            logger3.error(ctx, "Error writing failed getBlobResult", writeError);
                                        }
                                    } finally{
                                        const duration3 = performance.now() - startTime;
                                        controlledGetBlobLatency.histogram(ctx, duration3);
                                        recordSlowSpan(ctx, "ControlledKvManager.getBlob", SLOW_GET_BLOB_THRESHOLD_MS, startEpochMs, duration3);
                                    }
                                })());
                                break;
                            }
                        case "setBlobArgs":
                            {
                                const blobId = message.message.value.blobId;
                                const blobData = message.message.value.blobData;
                                trackHandler((async ()=>{
                                    const ctx = createLinkedContext(message.spanContext, "ControlledKvManager.setBlob", baseCtx);
                                    try {
                                        await this.blobStore.setBlob(ctx, blobId, blobData);
                                        await this.clientStream.write(new KvClientMessage({
                                            id: message.id,
                                            message: {
                                                case: "setBlobResult",
                                                value: {
                                                    error: void 0
                                                }
                                            }
                                        }));
                                    } catch (error3) {
                                        const errorMessage4 = error3 instanceof Error ? error3.message : String(error3);
                                        try {
                                            await this.clientStream.write(new KvClientMessage({
                                                id: message.id,
                                                message: {
                                                    case: "setBlobResult",
                                                    value: {
                                                        error: {
                                                            message: errorMessage4
                                                        }
                                                    }
                                                }
                                            }));
                                        } catch (writeError) {
                                            logger3.error(ctx, "Error writing setBlobResult", writeError);
                                        }
                                    } finally{
                                        const duration3 = performance.now() - startTime;
                                        controlledSetBlobLatency.histogram(ctx, duration3);
                                        recordSlowSpan(ctx, "ControlledKvManager.setBlob", SLOW_SET_BLOB_THRESHOLD_MS, startEpochMs, duration3);
                                    }
                                })());
                                break;
                            }
                    }
                }
            } finally{
                await Promise.allSettled(inFlightHandlers);
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources(env_1);
        }
    }
};

}
