import { init_dist8 } from "../../agent-exec/dist/index.js";
import { shellStreamExecutorResource } from "../../agent-exec/dist/shell-stream.js";
import { writeExecutorResource } from "../../agent-exec/dist/write.js";
import { awaitForceWrittenPathBeforeDrain, extractWritePath, isAsyncIterable2, isExecutorLike, isPromiseLike2, isShellBackgroundedStreamEvent, wakeBehaviorFor } from "../../mcp_sandbox_policy_exports.js";
import { ShellStream, ShellStreamHookContext, init_shell_exec_pb } from "../../proto/dist/generated/agent/v1/shell_exec_pb.js";
import { init_dist3 } from "../../utils/dist/index.js";
var DEFAULT_WRITE_BARRIER_TIMEOUT_MS, AgentStoreConflictDrainResourceAccessor;
export { AgentStoreConflictDrainResourceAccessor, DEFAULT_WRITE_BARRIER_TIMEOUT_MS };
var __wakaru_init_agent_store_conflict_accessor_initialized = false;
export function init_agent_store_conflict_accessor() {
if (__wakaru_init_agent_store_conflict_accessor_initialized) return;
__wakaru_init_agent_store_conflict_accessor_initialized = true;
"use strict";
init_dist8();
init_shell_exec_pb();
init_dist3();
DEFAULT_WRITE_BARRIER_TIMEOUT_MS = 2e3;
AgentStoreConflictDrainResourceAccessor = class _AgentStoreConflictDrainResourceAccessor {
    cacheCarriersForExecId(execId, carriers) {
        const existing = this.carriersByExecId.get(execId);
        if (existing !== void 0 && existing.length > 0 && carriers.length === 0) {
            return;
        }
        if (this.carriersByExecId.has(execId)) {
            this.carriersByExecId.delete(execId);
        }
        this.carriersByExecId.set(execId, carriers);
        while(this.carriersByExecId.size > _AgentStoreConflictDrainResourceAccessor.CARRIERS_BY_EXEC_ID_MAX){
            const oldest = this.carriersByExecId.keys().next().value;
            if (oldest === void 0) {
                break;
            }
            this.carriersByExecId.delete(oldest);
        }
    }
    constructor(inner, drain, wake, options2){
        this.inner = inner;
        this.wake = wake;
        this.carriersByExecId = new Map();
        this.inFlightByExecId = new Map();
        this.resolveDrain = typeof drain === "function" ? drain : (_ctx)=>drain;
        this.skipPathWriteDrain = options2?.skipPathWriteDrain;
        this.onWakeWrittenPath = options2?.onWakeWrittenPath;
        this.forceWrittenPathBeforeDrain = options2?.forceWrittenPathBeforeDrain;
        this.writeBarrierTimeoutMs = options2?.writeBarrierTimeoutMs ?? DEFAULT_WRITE_BARRIER_TIMEOUT_MS;
        this.resolveWriteBarrierTimeoutMs = options2?.resolveWriteBarrierTimeoutMs;
        this.onWriteBarrier = options2?.onWriteBarrier;
    }
    resolveTimeoutMs() {
        if (this.resolveWriteBarrierTimeoutMs !== void 0) {
            try {
                const resolved = this.resolveWriteBarrierTimeoutMs();
                if (typeof resolved === "number" && Number.isFinite(resolved)) {
                    return resolved;
                }
            } catch  {}
        }
        return this.writeBarrierTimeoutMs;
    }
    get(resource) {
        return this.wrapImpl(resource.symbol, this.inner.get(resource));
    }
    *entries() {
        for (const [resource, impl] of this.inner.entries()){
            yield [
                resource,
                this.wrapImpl(resource.symbol, impl)
            ];
        }
    }
    wrapImpl(resourceSymbol, impl) {
        if (!isExecutorLike(impl)) {
            return impl;
        }
        const wake = wakeBehaviorFor(resourceSymbol);
        const resolveDrain = this.resolveDrain;
        const wakeCoordinator = this.wake;
        const skipPathWriteDrain = this.skipPathWriteDrain;
        const forceWrittenPathBeforeDrain = this.forceWrittenPathBeforeDrain;
        const resolveTimeoutMs = ()=>this.resolveTimeoutMs();
        const onWriteBarrier = this.onWriteBarrier;
        const onWakeWrittenPath = this.onWakeWrittenPath;
        const fireWake = (args, ctx)=>{
            if (wake === void 0 || wakeCoordinator === void 0) {
                return;
            }
            try {
                if (wake.kind === "path") {
                    const writtenPath = extractWritePath(args);
                    if (writtenPath !== void 0) {
                        wakeCoordinator.wakeForWrittenPath(writtenPath);
                        onWakeWrittenPath?.(writtenPath, ctx);
                    }
                } else {
                    wakeCoordinator.wakeExposedMounts();
                }
            } catch  {}
        };
        const cacheCarriersForExecId = this.cacheCarriersForExecId.bind(this);
        const carriersByExecId = this.carriersByExecId;
        const inFlightByExecId = this.inFlightByExecId;
        const appendDrain = async (ctx, options2)=>{
            const collector = options2?.hookContextCollector;
            if (collector === void 0) {
                return [];
            }
            if (options2?.deliverAgentStoreConflictNotices === false) {
                return [];
            }
            const execId = options2?.execId !== void 0 && options2.execId.length > 0 ? options2.execId : void 0;
            if (execId !== void 0) {
                const cached2 = carriersByExecId.get(execId);
                if (cached2 !== void 0) {
                    if (cached2.length > 0) {
                        collector.push(...cached2);
                    }
                    return cached2;
                }
                const inFlight = inFlightByExecId.get(execId);
                if (inFlight !== void 0) {
                    const carriers = await inFlight;
                    if (carriers.length > 0) {
                        collector.push(...carriers);
                    }
                    return carriers;
                }
            }
            const runPeek = async (attachTo)=>{
                const drain = resolveDrain(ctx);
                let claimedIds = [];
                try {
                    const peeked = await drain.peek();
                    claimedIds = peeked.eventIds;
                    if (peeked.carriers.length > 0) {
                        attachTo.push(...peeked.carriers);
                        drain.ack(peeked.eventIds);
                        if (execId !== void 0) {
                            cacheCarriersForExecId(execId, peeked.carriers);
                        }
                        return peeked.carriers;
                    } else if (claimedIds.length > 0) {
                        drain.ack(claimedIds);
                    }
                    const empty = [];
                    if (execId !== void 0) {
                        cacheCarriersForExecId(execId, empty);
                    }
                    return empty;
                } catch  {
                    if (claimedIds.length > 0) {
                        drain.release(claimedIds);
                    }
                    return [];
                }
            };
            if (execId === void 0) {
                return await runPeek(collector);
            }
            const pending = runPeek(collector);
            inFlightByExecId.set(execId, pending);
            try {
                return await pending;
            } finally{
                if (inFlightByExecId.get(execId) === pending) {
                    inFlightByExecId.delete(execId);
                }
            }
        };
        return new Proxy(impl, {
            get: (target, prop, receiver)=>{
                if (prop !== "execute") {
                    return Reflect.get(target, prop, receiver);
                }
                return (ctx, args, options2)=>{
                    const result = target.execute.call(target, ctx, args, options2);
                    if (isAsyncIterable2(result)) {
                        return (async function* wrapped() {
                            let drained = false;
                            let failed = false;
                            let completedNormally = false;
                            try {
                                for await (const event of result){
                                    if (resourceSymbol === shellStreamExecutorResource.symbol && isShellBackgroundedStreamEvent(event)) {
                                        if (!drained) {
                                            fireWake(args, ctx);
                                            const carriers = await appendDrain(ctx, options2);
                                            drained = true;
                                            if (carriers.length > 0) {
                                                yield new ShellStream({
                                                    event: {
                                                        case: "hookContext",
                                                        value: new ShellStreamHookContext({
                                                            hookAdditionalContexts: [
                                                                ...carriers
                                                            ]
                                                        })
                                                    }
                                                });
                                            }
                                        }
                                        yield event;
                                        continue;
                                    }
                                    yield event;
                                }
                                completedNormally = true;
                            } catch (error3) {
                                failed = true;
                                throw error3;
                            } finally{
                                fireWake(args, ctx);
                                if (!drained && !failed && completedNormally) {
                                    await appendDrain(ctx, options2);
                                }
                            }
                        })();
                    }
                    if (isPromiseLike2(result)) {
                        return (async ()=>{
                            try {
                                const value = await result;
                                fireWake(args, ctx);
                                const skipDrain = resourceSymbol === writeExecutorResource.symbol && skipPathWriteDrain?.() === true && options2?.enableAgentStoreConflictNotices === true;
                                if (!skipDrain) {
                                    await awaitForceWrittenPathBeforeDrain(forceWrittenPathBeforeDrain, args, wake, {
                                        timeoutMs: resolveTimeoutMs(),
                                        onWriteBarrier
                                    });
                                    await appendDrain(ctx, options2);
                                }
                                return value;
                            } catch (error3) {
                                fireWake(args, ctx);
                                throw error3;
                            }
                        })();
                    }
                    fireWake(args, ctx);
                    return result;
                };
            }
        });
    }
};
AgentStoreConflictDrainResourceAccessor.CARRIERS_BY_EXEC_ID_MAX = 32;

}
