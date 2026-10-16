import { getSpanContextData } from "../../agent-exec/dist/remote.js";
import { init_blob_store } from "./blob-store.js";
import { createSpan } from "./controlled.js";
import { NoDelayGetBlobShadowCoalescer, init_shadow_get_blob_coalescer } from "./shadow-get-blob-coalescer.js";
import { createLogger } from "./subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createHistogram, toUint8Array } from "../../dist_exports.js";
import { toRedactedKvServerMessage } from "../../mcp_sandbox_policy_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { SpanContext, init_exec_pb } from "../../proto/dist/generated/agent/v1/exec_pb.js";
import { KvServerMessage, init_kv_pb } from "../../proto/dist/generated/agent/v1/kv_pb.js";
import { PrivacyMode, init_privacy_mode_pb } from "../../proto/dist/generated/aiserver/v1/privacy_mode_pb.js";
import { init_agent_v1 } from "../../redacted-protos/dist/agent-v1.js";
import { PrivacyCapability } from "../../redaction/dist/classification.js";
import { init_dist27 } from "../../redaction/dist/index.js";
var __addDisposableResource112, __disposeResources112, logger145, getBlobLatency, setBlobLatency, RemoteKvManager;
export { RemoteKvManager, __addDisposableResource112, __disposeResources112, getBlobLatency, logger145, setBlobLatency };
var __wakaru_init_remote3_initialized = false;
export function init_remote3() {
if (__wakaru_init_remote3_initialized) return;
__wakaru_init_remote3_initialized = true;
"use strict";
init_dist();
init_dist4();
init_exec_pb();
init_kv_pb();
init_privacy_mode_pb();
init_agent_v1();
init_dist27();
init_blob_store();
init_shadow_get_blob_coalescer();
__addDisposableResource112 = function(env, value, async) {
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
__disposeResources112 = (function(SuppressedError2) {
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
logger145 = createLogger("RemoteKvManager");
getBlobLatency = createHistogram("agent_kv.remote.get_blob.duration_ms", {
    description: "Duration of getBlob operations in milliseconds"
});
setBlobLatency = createHistogram("agent_kv.remote.set_blob.duration_ms", {
    description: "Duration of setBlob operations in milliseconds"
});
RemoteKvManager = class {
    constructor(listeningCtx, serverStream, clientStream, options2 = {}){
        this.serverStream = serverStream;
        this.clientStream = clientStream;
        this.pendingRequests = new Map();
        this.nextId = 0;
        this.getBlobShadowCoalescer = options2.observeGetBlobShadowBatches === true ? new NoDelayGetBlobShadowCoalescer() : void 0;
        this.startListening(listeningCtx);
    }
    getBlobShadowSnapshot() {
        return this.getBlobShadowCoalescer?.getSnapshot();
    }
    rejectPendingRequests(error3) {
        for (const [_id, { reject: reject2 }] of this.pendingRequests){
            reject2(error3);
        }
        this.pendingRequests.clear();
    }
    async startListening(ctx) {
        try {
            for await (const message of this.clientStream){
                this.handleClientMessage(ctx, message);
            }
            this.rejectPendingRequests(new Error("KV stream closed"));
        } catch (error3) {
            logger145.error(ctx, "Error in KV manager listener:", error3);
            this.rejectPendingRequests(new Error("KV stream closed"));
        }
    }
    handleClientMessage(ctx, message) {
        const id = message.id;
        const pending = this.pendingRequests.get(id);
        if (!pending) {
            logger145.warn(ctx, "Received KV response for unknown request ID", {
                id
            });
            return;
        }
        this.pendingRequests.delete(id);
        pending.resolve(message);
    }
    async getBlob(ctx, blobId) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource112(env_1, createSpan(ctx.withName("RemoteKvManager.getBlob")), false);
            const startTime = performance.now();
            try {
                const id = this.nextId++;
                let resolve36;
                let reject2;
                const promise = new Promise((res, rej)=>{
                    resolve36 = res;
                    reject2 = rej;
                });
                this.pendingRequests.set(id, {
                    resolve: resolve36,
                    reject: reject2
                });
                this.getBlobShadowCoalescer?.observe();
                const spanContextData = getSpanContextData(span.ctx);
                await this.serverStream.write(toRedactedKvServerMessage(new KvServerMessage({
                    id,
                    message: {
                        case: "getBlobArgs",
                        value: {
                            blobId: toUint8Array(blobId)
                        }
                    },
                    spanContext: spanContextData ? new SpanContext(spanContextData) : void 0
                }), PrivacyMode.UNSPECIFIED));
                const response = await promise;
                if (response.message.case !== "getBlobResult") {
                    throw new Error(`Unexpected response type: ${response.message.case}`);
                }
                if (response.message.value.error) {
                    throw new Error(response.message.value.error.message.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED));
                }
                span.span.setAttribute("blobLength", response.message.value.blobData?.length ?? 0);
                return response.message.value.blobData?.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
            } finally{
                const duration3 = performance.now() - startTime;
                getBlobLatency.histogram(ctx, duration3);
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources112(env_1);
        }
    }
    async setBlob(ctx, blobId, blobData) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource112(env_2, createSpan(ctx.withName("RemoteKvManager.setBlob")), false);
            span.span.setAttribute("blobLength", blobData.length);
            const startTime = performance.now();
            try {
                const id = this.nextId++;
                let resolve36;
                let reject2;
                const promise = new Promise((res, rej)=>{
                    resolve36 = res;
                    reject2 = rej;
                });
                this.pendingRequests.set(id, {
                    resolve: resolve36,
                    reject: reject2
                });
                const spanContextData = getSpanContextData(span.ctx);
                await this.serverStream.write(toRedactedKvServerMessage(new KvServerMessage({
                    id,
                    message: {
                        case: "setBlobArgs",
                        value: {
                            blobId: toUint8Array(blobId),
                            blobData: toUint8Array(blobData)
                        }
                    },
                    spanContext: spanContextData ? new SpanContext(spanContextData) : void 0
                }), PrivacyMode.UNSPECIFIED));
                const response = await promise;
                if (response.message.case !== "setBlobResult") {
                    throw new Error(`Unexpected response type: ${response.message.case}`);
                }
                if (response.message.value.error) {
                    throw new Error(response.message.value.error.message.unwrap(PrivacyCapability.UNSAFE_ALWAYS_ALLOWED));
                }
            } finally{
                const duration3 = performance.now() - startTime;
                setBlobLatency.histogram(ctx, duration3);
            }
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources112(env_2);
        }
    }
    async setBlobLocallyOnly(_ctx, _blobId, _blobData) {
        return Promise.resolve();
    }
    flush(_ctx) {
        return Promise.resolve();
    }
};

}
