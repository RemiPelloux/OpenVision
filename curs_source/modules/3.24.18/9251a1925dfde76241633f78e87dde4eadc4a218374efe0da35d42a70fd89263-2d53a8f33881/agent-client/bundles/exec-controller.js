import { createContext } from "../../agent-host/dist/storage/instruments.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { init_dist } from "../../context/dist/index.js";
import { DisposableSpan, SPAN_KEY2 } from "../../context/dist/otel.js";
import { getTracer } from "../../dashboard_connect_exports.js";
import { isMessage } from "../../external_exports.js";
import { context } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/context-api.js";
import { trace } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace-api.js";
import { SpanKind } from "../../node_modules/.pnpm/@opentelemetry+api@1.9.0/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js";
import { init_esm2 } from "../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { Code } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/code.js";
import { ConnectError } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/connect-error.js";
import { init_esm3 } from "../../node_modules/.pnpm/_c9bdc997d82622067cc922804d7b4f50/node_modules/@connectrpc/connect/dist/esm/index.js";
import { ExecServerControlMessage, init_exec_pb } from "../../proto/dist/generated/agent/v1/exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { WriteIterableClosedError } from "../../utils/dist/writable-iterable.js";
function getSpan2(ctx) {
    return ctx.get(SPAN_KEY2);
}
function createContextFromSpanContext(spanContext, name17, existingContext) {
    const tracer = getTracer();
    const remoteSpanContext = {
        traceId: spanContext.traceId,
        spanId: spanContext.spanId,
        traceFlags: spanContext.traceFlags,
        isRemote: true
    };
    const otelCtx = trace.setSpanContext(context.active(), remoteSpanContext);
    const spanName = name17 || "child.span";
    const span = tracer.startSpan(spanName, {
        kind: SpanKind.INTERNAL
    }, otelCtx);
    const parentCtx = existingContext ?? createContext();
    const ctx = name17 ? parentCtx.withName(name17) : parentCtx;
    return ctx.with(SPAN_KEY2, span);
}
var __addDisposableResource5, __disposeResources5, LostConnection, ClientExecController;
export { ClientExecController, LostConnection, __addDisposableResource5, __disposeResources5, createContextFromSpanContext, getSpan2 };
var __wakaru_init_exec_controller_initialized = false;
export function init_exec_controller() {
if (__wakaru_init_exec_controller_initialized) return;
__wakaru_init_exec_controller_initialized = true;
"use strict";
init_dist();
init_exec_pb();
init_dist3();
init_esm2();
init_esm3();
__addDisposableResource5 = function(env, value, async) {
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
__disposeResources5 = (function(SuppressedError2) {
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
LostConnection = class extends Error {
    constructor(message){
        super(message);
        this.name = "LostConnection";
    }
};
ClientExecController = class {
    constructor(serverStream, clientStream, controlledExecManager){
        this.serverStream = serverStream;
        this.clientStream = clientStream;
        this.controlledExecManager = controlledExecManager;
    }
    async run(ctx) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const _runSpan = __addDisposableResource5(env_1, createSpan(ctx.withName("ClientExecController.run")), false);
            const pendingPromises = [];
            try {
                for await (const message of this.serverStream){
                    if (isMessage(message, ExecServerControlMessage)) {
                        this.controlledExecManager.handleControlMessage(message);
                        continue;
                    }
                    const promise = (async ()=>{
                        const env_2 = {
                            stack: [],
                            error: void 0,
                            hasError: false
                        };
                        try {
                            let execCtx;
                            let span;
                            if (message.spanContext) {
                                const spanCtx = message.spanContext;
                                execCtx = createContextFromSpanContext({
                                    traceId: spanCtx.traceId,
                                    spanId: spanCtx.spanId,
                                    traceFlags: spanCtx.traceFlags ?? 1
                                }, "exec.handle", ctx);
                                span = getSpan2(execCtx);
                            } else {
                                execCtx = ctx;
                            }
                            const _disposableSpan = __addDisposableResource5(env_2, span ? new DisposableSpan(execCtx, span) : void 0, false);
                            const stream3 = this.controlledExecManager.handle(execCtx, message);
                            for await (const result of stream3){
                                await this.clientStream.write(result);
                            }
                        } catch (e_2) {
                            env_2.error = e_2;
                            env_2.hasError = true;
                        } finally{
                            __disposeResources5(env_2);
                        }
                    })();
                    pendingPromises.push(promise);
                }
                await Promise.all(pendingPromises);
            } catch (error3) {
                if (error3 instanceof ConnectError && error3.rawMessage === "protocol error: missing EndStreamResponse") {
                    throw new LostConnection(error3.message);
                } else if (error3 instanceof ConnectError && error3.code === Code.Aborted) {
                    const cause = error3.cause;
                    if (cause instanceof Error && "code" in cause && typeof cause.code === "string" && cause.code.includes("ERR_STREAM_WRITE_AFTER_END")) {
                        throw new LostConnection(error3.message);
                    }
                } else if (error3 instanceof WriteIterableClosedError) {
                    throw new LostConnection(error3.message);
                } else if (error3 instanceof ConnectError && error3.code === Code.Internal) {
                    const cause = error3.cause;
                    if (cause instanceof Error && cause.message.includes("NGHTTP2_PROTOCOL_ERROR")) {
                        throw new LostConnection(error3.message);
                    }
                }
                throw error3;
            }
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources5(env_1);
        }
    }
};

}
