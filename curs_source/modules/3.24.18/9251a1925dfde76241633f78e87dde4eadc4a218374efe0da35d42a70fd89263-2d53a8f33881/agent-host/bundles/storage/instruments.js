import { runWithActiveOtelSpan } from "../../../agent-client/dist/connect.js";
import { getSpan2 } from "../../../agent-client/dist/exec-controller.js";
import { init_blob_read_summary, summaryKey } from "./blob-read-summary.js";
import { AgentHostStoreEmptyError, init_sqlite_store } from "./sqlite-store.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { ContextImpl } from "../../../context/dist/core.js";
import { init_dist } from "../../../context/dist/index.js";
import { SUPPRESS_CHILD_SPANS_KEY } from "../../../context/dist/otel.js";
import { isChildSpanSuppressed, withSpan } from "../../../dashboard_connect_exports.js";
import { errorAttributes, isContention, setAttributes } from "../../../dist_exports.js";
function createContext() {
    return new ContextImpl();
}
async function runWithSpan(ctx, fn, options2) {
    const parentSpan = getSpan2(ctx);
    if (parentSpan && isChildSpanSuppressed(ctx, parentSpan)) {
        return runWithActiveOtelSpan(parentSpan, ()=>fn(ctx, parentSpan));
    }
    const ctxWithSpan = withSpan(ctx, options2);
    const span = getSpan2(ctxWithSpan);
    try {
        const result = await runWithActiveOtelSpan(span, ()=>fn(ctxWithSpan, span));
        span.setStatus({
            code: 1
        });
        return result;
    } catch (error3) {
        const message = describeThrownValue(error3);
        span.recordException(error3 instanceof Error ? error3 : new Error(message));
        span.setStatus({
            code: 2,
            message
        });
        throw error3;
    } finally{
        span.end();
    }
}
function describeThrownValue(error3) {
    if (error3 instanceof Error) {
        return error3.message;
    }
    if (typeof error3 === "string") {
        return error3;
    }
    if (error3 === null || error3 === void 0) {
        return String(error3);
    }
    if (typeof error3 === "object") {
        const maybeMessage = error3.message;
        if (typeof maybeMessage === "string" && maybeMessage.length > 0) {
            return maybeMessage;
        }
        try {
            const json2 = JSON.stringify(error3);
            if (json2 !== void 0 && json2 !== "{}") {
                return json2;
            }
        } catch  {}
    }
    return String(error3);
}
function recordCompletedSpanIfParented(ctx, options2, endTime) {
    const parentSpan = getSpan2(ctx);
    if (!parentSpan || isChildSpanSuppressed(ctx, parentSpan)) {
        return void 0;
    }
    const ctxWithSpan = withSpan(ctx, options2);
    const span = getSpan2(ctxWithSpan);
    span.end(endTime);
    return span;
}
function beginAgentHostBlobReadSummary(ctx, source) {
    const summary = {
        source,
        counts: {
            hits: 0,
            misses: 0,
            errors: 0
        }
    };
    return {
        ctx: ctx.with(summaryKey, summary),
        ...summary
    };
}
var SQLITE_BUSY, SQLITE_LOCKED, SLOW_PEER_WAIT_MS, WARN_INTERVAL_MS, METRIC_PREFIX, COMPONENT, logger14, SPAN_NAME, HOST_OWNED_LEGACY_BLOB_READ_MESSAGE, AgentHostStorageInstruments;
export { AgentHostStorageInstruments, COMPONENT, HOST_OWNED_LEGACY_BLOB_READ_MESSAGE, METRIC_PREFIX, SLOW_PEER_WAIT_MS, SPAN_NAME, SQLITE_BUSY, SQLITE_LOCKED, WARN_INTERVAL_MS, beginAgentHostBlobReadSummary, createContext, describeThrownValue, logger14, recordCompletedSpanIfParented, runWithSpan };
var __wakaru_init_instruments_initialized = false;
export function init_instruments() {
if (__wakaru_init_instruments_initialized) return;
__wakaru_init_instruments_initialized = true;
"use strict";
init_dist();
init_blob_read_summary();
init_sqlite_store();
SQLITE_BUSY = 5;
SQLITE_LOCKED = 6;
SLOW_PEER_WAIT_MS = 1e3;
WARN_INTERVAL_MS = 6e4;
METRIC_PREFIX = "agent_host.storage.";
COMPONENT = {
    component: "storage"
};
logger14 = createLogger("agent-host:storage");
SPAN_NAME = {
    hydrate: "agentHostStorage.hydrateSession",
    checkpoint: "agentHostStorage.writeCheckpoint",
    list: "agentHostStorage.listSessions"
};
HOST_OWNED_LEGACY_BLOB_READ_MESSAGE = "Host-owned session attempted a legacy blob read";
AgentHostStorageInstruments = class {
    constructor(args){
        this.args = args;
        this.lastWarnAtMs = new Map();
        this.storageObserver = (event)=>{
            try {
                this.observe(event);
            } catch (error3) {
                this.reportSinkFailure(error3);
            }
        };
        this.sessionEnabled = args.ctx !== void 0 || args.metrics !== void 0 || args.onStorageFault !== void 0;
    }
    reportBlobReads(ctx, sessionId, source, counts) {
        const count2 = counts.hits + counts.misses + counts.errors;
        this.distribution("blob_read_count", counts.hits, {
            source,
            result: "hit"
        });
        this.distribution("blob_read_count", counts.misses, {
            source,
            result: "miss"
        });
        this.distribution("blob_read_count", counts.errors, {
            source,
            result: "error"
        });
        this.observeSink(()=>{
            const span = getSpan2(ctx);
            if (span !== void 0) {
                setAttributes(span, {
                    "agent_host.storage.blob_read.source": source,
                    "agent_host.storage.blob_read.count": count2,
                    "agent_host.storage.blob_read.hit_count": counts.hits,
                    "agent_host.storage.blob_read.miss_count": counts.misses,
                    "agent_host.storage.blob_read.error_count": counts.errors
                });
            }
        });
        this.observeSink(()=>{
            logger14.info(ctx, "Turn terminal blob reads", {
                ...COMPONENT,
                sessionId,
                source,
                count: count2,
                hits: counts.hits,
                misses: counts.misses,
                errors: counts.errors
            });
        });
        if (source === "host_sqlite" && counts.misses > 0) {
            this.runtimeFault("host_blob_missing");
        }
    }
    beginBlobReadSummary(ctx, sessionId, source) {
        if (source === void 0) {
            return {
                ctx,
                finish: ()=>{}
            };
        }
        const summary = beginAgentHostBlobReadSummary(ctx, source);
        return {
            ctx: summary.ctx,
            finish: ()=>this.reportBlobReads(summary.ctx, sessionId, summary.source, summary.counts)
        };
    }
    runtimeFault(kind) {
        this.distribution(kind, 1, {
            store: "session"
        });
        this.fault({
            kind,
            store: "session"
        });
    }
    rejectHostOwnedLegacyBlobRead() {
        this.runtimeFault("host_owned_legacy_blob_read");
        throw new Error(HOST_OWNED_LEGACY_BLOB_READ_MESSAGE);
    }
    async timeAsync(phase, ctx, fn, attributes) {
        if (!this.sessionEnabled) {
            return fn(ctx);
        }
        const started = performance.now();
        try {
            const result = await this.runWithParentedSpan(phase, ctx, fn, attributes);
            this.distribution(`${phase}_ms`, performance.now() - started, {
                outcome: "ok"
            });
            return result;
        } catch (error3) {
            this.distribution(`${phase}_ms`, performance.now() - started, {
                outcome: "error"
            });
            throw error3;
        }
    }
    time(phase, ctx, fn, attributes) {
        if (!this.sessionEnabled) {
            return fn();
        }
        const startedAtMs = Date.now();
        const started = performance.now();
        try {
            const result = fn();
            const durationMs2 = performance.now() - started;
            this.distribution(`${phase}_ms`, durationMs2, {
                outcome: "ok"
            });
            this.recordCompletedSpan(phase, ctx, startedAtMs, durationMs2, ()=>({
                    outcome: "ok",
                    ...attributes?.(result)
                }));
            return result;
        } catch (error3) {
            const durationMs2 = performance.now() - started;
            this.distribution(`${phase}_ms`, durationMs2, {
                outcome: "error"
            });
            this.recordCompletedSpan(phase, ctx, startedAtMs, durationMs2, ()=>errorAttributes(error3));
            throw error3;
        }
    }
    async runWithParentedSpan(phase, ctx, fn, attributes) {
        if (getSpan2(ctx) === void 0 || ctx.get(SUPPRESS_CHILD_SPANS_KEY) === true) {
            return fn(ctx);
        }
        let operation;
        try {
            return await runWithSpan(ctx.withName(SPAN_NAME[phase]), async (spanCtx, span)=>{
                operation = (async ()=>{
                    try {
                        return {
                            kind: "ok",
                            value: await fn(spanCtx)
                        };
                    } catch (error3) {
                        return {
                            kind: "error",
                            error: error3
                        };
                    }
                })();
                const outcome = await operation;
                if (outcome.kind === "ok") {
                    this.observeSink(()=>{
                        setAttributes(span, {
                            outcome: "ok",
                            ...attributes?.(outcome.value)
                        });
                    });
                    return outcome.value;
                }
                this.observeSink(()=>{
                    setAttributes(span, errorAttributes(outcome.error));
                });
                throw outcome.error;
            });
        } catch (error3) {
            if (operation !== void 0) {
                const outcome = await operation;
                if (outcome.kind === "error") {
                    if (error3 !== outcome.error) {
                        this.reportSinkFailure(error3);
                    }
                    throw outcome.error;
                }
                this.reportSinkFailure(error3);
                return outcome.value;
            }
            this.reportSinkFailure(error3);
            return fn(ctx);
        }
    }
    recordCompletedSpan(phase, ctx, startedAtMs, durationMs2, attributes) {
        if (getSpan2(ctx) === void 0 || ctx.get(SUPPRESS_CHILD_SPANS_KEY) === true) {
            return;
        }
        this.observeSink(()=>{
            recordCompletedSpanIfParented(ctx.withName(SPAN_NAME[phase]), {
                startTime: startedAtMs,
                attributes: attributes()
            }, startedAtMs + durationMs2);
        });
    }
    observeSink(observe) {
        try {
            observe();
        } catch (error3) {
            this.reportSinkFailure(error3);
        }
    }
    observe(event) {
        const where = {
            ...COMPONENT,
            store: event.store,
            relPath: event.relPath
        };
        switch(event.kind){
            case "opened":
                this.distribution("open_ms", event.durationMs, {
                    store: event.store,
                    outcome: "ok",
                    created: String(event.created)
                });
                this.debug("Agent host store opened", {
                    ...where,
                    created: event.created,
                    durationMs: event.durationMs
                });
                this.warnIfSlow(event);
                return;
            case "open_failed":
                this.distribution("open_ms", event.durationMs, {
                    store: event.store,
                    outcome: "error"
                });
                if (event.error instanceof AgentHostStoreEmptyError) {
                    this.debug("Agent host store is not committed yet", {
                        ...where,
                        durationMs: event.durationMs
                    });
                    return;
                }
                if (!this.warnIfContention(event)) {
                    this.fault({
                        ...event,
                        kind: "open_failed"
                    });
                    this.debug("Agent host store open failed", {
                        ...where,
                        code: event.code,
                        sqliteErrcode: event.sqliteErrcode,
                        durationMs: event.durationMs
                    });
                }
                return;
            case "transaction":
                this.distribution("transaction_ms", event.durationMs, {
                    store: event.store,
                    outcome: event.outcome
                });
                if (event.outcome === "committed") {
                    this.debug("Agent host store transaction committed", {
                        ...where,
                        durationMs: event.durationMs
                    });
                    this.warnIfSlow(event);
                } else if (event.outcome === "rollback_failed") {
                    this.fault({
                        kind: "rollback_failed",
                        store: event.store,
                        relPath: event.relPath,
                        durationMs: event.durationMs,
                        code: event.code,
                        sqliteErrcode: event.sqliteErrcode
                    });
                    this.error("Agent host store transaction failed and could not roll back; the file may be inconsistent", {
                        ...where,
                        code: event.code,
                        sqliteErrcode: event.sqliteErrcode,
                        durationMs: event.durationMs
                    });
                } else if (!this.warnIfContention(event)) {
                    this.debug("Agent host store transaction rolled back", {
                        ...where,
                        code: event.code,
                        sqliteErrcode: event.sqliteErrcode,
                        durationMs: event.durationMs
                    });
                }
                return;
            case "closed_store_use":
                this.warnRateLimited("closed", event.relPath, "Agent host store used after close", where);
                return;
        }
    }
    fault(fault) {
        try {
            this.args.onStorageFault?.(fault);
        } catch (error3) {
            this.reportSinkFailure(error3);
        }
    }
    distribution(stat24, value, tags) {
        try {
            this.args.metrics?.distribution({
                stat: `${METRIC_PREFIX}${stat24}`,
                value,
                ...tags === void 0 ? {} : {
                    tags
                }
            });
        } catch (error3) {
            this.reportSinkFailure(error3);
        }
    }
    reportSinkFailure(error3) {
        const now2 = Date.now();
        const last = this.lastWarnAtMs.get("sink:");
        if (last !== void 0 && now2 - last < WARN_INTERVAL_MS) {
            return;
        }
        this.lastWarnAtMs.set("sink:", now2);
        try {
            console.warn("Agent host storage sink failed", error3 instanceof Error ? error3.name : typeof error3);
        } catch (consoleError) {
            void (consoleError instanceof Error ? consoleError.name : typeof consoleError);
        }
    }
    ctx() {
        return this.args.ctx?.() ?? createContext();
    }
    debug(message, metadata) {
        if (this.args.ctx !== void 0) {
            logger14.debug(this.args.ctx(), message, metadata);
        }
    }
    error(message, metadata) {
        logger14.error(this.ctx(), message, void 0, metadata);
    }
    warnIfSlow(event) {
        if (event.durationMs > SLOW_PEER_WAIT_MS) {
            this.warnRateLimited("slow", event.relPath, `Agent host store ${event.kind === "opened" ? "open" : "transaction"} waited on a peer`, {
                ...COMPONENT,
                store: event.store,
                relPath: event.relPath,
                durationMs: event.durationMs
            });
        }
    }
    warnIfContention(event) {
        if (!isContention(event.sqliteErrcode)) {
            return false;
        }
        this.fault({
            kind: "busy_exhausted",
            store: event.store,
            relPath: event.relPath,
            durationMs: event.durationMs,
            code: event.code,
            sqliteErrcode: event.sqliteErrcode
        });
        this.warnRateLimited("busy", event.relPath, `Agent host store ${event.kind === "open_failed" ? "open" : "transaction"} gave up waiting for a peer`, {
            ...COMPONENT,
            store: event.store,
            relPath: event.relPath,
            sqliteErrcode: event.sqliteErrcode,
            durationMs: event.durationMs
        });
        return true;
    }
    warnRateLimited(reason, relPath, message, metadata) {
        const key = `${reason}:${relPath}`;
        const now2 = Date.now();
        const last = this.lastWarnAtMs.get(key);
        if (last !== void 0 && now2 - last < WARN_INTERVAL_MS) {
            return;
        }
        this.lastWarnAtMs.set(key, now2);
        logger14.warn(this.ctx(), message, metadata);
    }
};
AgentHostStorageInstruments.none = new AgentHostStorageInstruments({});

}
