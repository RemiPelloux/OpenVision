import { getSpan2 } from "../../agent-client/dist/exec-controller.js";
import { createSpan } from "../../agent-kv/dist/controlled.js";
import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { SUPPRESS_CHILD_SPANS_KEY } from "../../context/dist/otel.js";
import { createCounter } from "../../dist_exports.js";
import { init_dist4 } from "../../metrics/dist/index.js";
import { ExecServerMessage, SpanContext, init_exec_pb } from "../../proto/dist/generated/agent/v1/exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
import { getFirstItem } from "../../utils_pb_exports.js";
function getSpanContextData(ctx) {
    try {
        const span = getSpan2(ctx);
        if (!span) {
            return void 0;
        }
        const sc = span.spanContext();
        const isSuppressed = ctx.get(SUPPRESS_CHILD_SPANS_KEY);
        return {
            traceId: sc.traceId,
            spanId: sc.spanId,
            traceFlags: isSuppressed ? 0 : sc.traceFlags,
            traceState: sc.traceState?.toString()
        };
    } catch  {
        return void 0;
    }
}
var __addDisposableResource4, __disposeResources4, logger8, hookAdditionalContextDelivered, ExecutorResource, StreamExecutorResource;
export { ExecutorResource, StreamExecutorResource, __addDisposableResource4, __disposeResources4, getSpanContextData, hookAdditionalContextDelivered, logger8 };
var __wakaru_init_remote_initialized = false;
export function init_remote() {
if (__wakaru_init_remote_initialized) return;
__wakaru_init_remote_initialized = true;
"use strict";
init_dist();
init_dist4();
init_exec_pb();
init_dist3();
__addDisposableResource4 = function(env, value, async) {
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
__disposeResources4 = (function(SuppressedError2) {
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
logger8 = createLogger("ExecutorResource");
hookAdditionalContextDelivered = createCounter("agent_exec.hook_additional_context.delivered", {
    description: "Hook additional_context carriers drained into the caller collector",
    labelNames: [
        "hook_event_name"
    ]
});
ExecutorResource = class {
    constructor(execManager, serializeArgs, deserializeResult){
        this.execManager = execManager;
        this.serializeArgs = serializeArgs;
        this.deserializeResult = deserializeResult;
    }
    async execute(parentCtx, args, options2) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource4(env_1, createSpan(parentCtx.withName("ExecutorResource.execute")), false);
            const ctx = span.ctx;
            if (options2?.execId !== void 0) {
                span.span.setAttribute("exec.id", options2.execId);
            }
            const spanContextData = getSpanContextData(ctx);
            const spanContext = spanContextData ? new SpanContext(spanContextData) : void 0;
            const messageStream = this.execManager.createExecInstance(ctx, (id)=>{
                const serialized = this.serializeArgs(id, args);
                return new ExecServerMessage({
                    id: serialized.id,
                    message: serialized.message,
                    execId: options2?.execId,
                    machineId: options2?.machineId,
                    spanContext,
                    acceptHookAdditionalContexts: options2?.hookContextCollector !== void 0
                });
            });
            const withFirstItem = await getFirstItem(messageStream);
            if (withFirstItem === void 0) {
                throw new Error("No exec result");
            }
            let { firstItem: result, rest } = withFirstItem;
            const pushHookContexts = (message)=>{
                if (options2?.hookContextCollector !== void 0 && message.hookAdditionalContexts.length > 0) {
                    options2.hookContextCollector.push(...message.hookAdditionalContexts);
                    for (const carrier of message.hookAdditionalContexts){
                        hookAdditionalContextDelivered.increment(ctx, 1, {
                            hook_event_name: carrier.hookEventName
                        });
                    }
                }
            };
            pushHookContexts(result);
            let resultValue = this.deserializeResult(result);
            while(resultValue === void 0){
                const next = await getFirstItem(rest);
                if (next === void 0) {
                    throw new Error("No result value");
                }
                result = next.firstItem;
                rest = next.rest;
                pushHookContexts(result);
                resultValue = this.deserializeResult(result);
            }
            void (async ()=>{
                try {
                    for await (const message of rest){
                        pushHookContexts(message);
                    }
                } catch (error3) {
                    logger8.info(ctx, "Ignoring exec stream shutdown during detached drain", {
                        error: error3
                    });
                }
            })().catch(()=>{});
            return resultValue;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources4(env_1);
        }
    }
};
StreamExecutorResource = class {
    constructor(execManager, serializeArgs, deserializeStream){
        this.execManager = execManager;
        this.serializeArgs = serializeArgs;
        this.deserializeStream = deserializeStream;
    }
    async *execute(parentCtx, args, options2) {
        const env_2 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource4(env_2, createSpan(parentCtx.withName("StreamExecutorResource.execute")), false);
            const ctx = span.ctx;
            const spanContextData = getSpanContextData(ctx);
            const spanContext = spanContextData ? new SpanContext(spanContextData) : void 0;
            const messageStream = this.execManager.createExecInstance(ctx, (id)=>{
                const serialized = this.serializeArgs(id, args);
                return new ExecServerMessage({
                    id: serialized.id,
                    message: serialized.message,
                    execId: options2?.execId,
                    machineId: options2?.machineId,
                    spanContext,
                    acceptHookAdditionalContexts: options2?.hookContextCollector !== void 0 || options2?.deliverAgentStoreConflictNotices === true
                });
            });
            for await (const message of messageStream){
                if (options2?.hookContextCollector !== void 0 && message.hookAdditionalContexts.length > 0) {
                    options2.hookContextCollector.push(...message.hookAdditionalContexts);
                }
                const streamValue = this.deserializeStream(message);
                if (streamValue !== void 0) {
                    yield streamValue;
                }
            }
        } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
        } finally{
            __disposeResources4(env_2);
        }
    }
};

}
