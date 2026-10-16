import { yx } from "./Iwo.js";
import { dyk, hyk, pyk } from "./Ycg.js";
import { Krs, Yrs, hG } from "./agent_host_pb.js";
import { qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { T1 } from "./errors.ts";
import { hX } from "./index_12.ts";
import { E } from "./tslib.es6.js";
var $hg, Hhg, Whg;
export { $hg, Hhg, Whg };
var __wakaru_myk_initialized = false;
export function myk() {
if (__wakaru_myk_initialized) return;
__wakaru_myk_initialized = true;
"use strict";
E(), hX(), hG(), qn(), yo(), $hg = class {
    constructor(t){
        this._provider = t, this._watches = new Map;
    }
    forgetSession(t) {
        this._disposeSession(t);
    }
    disposeAll() {
        for (const t of [
            ...this._watches.keys()
        ])this._disposeSession(t);
    }
    beginReady(t, e) {
        return this.begin(t, e).lifecycleReadyPromise;
    }
    begin(t, e) {
        const n = this._watches.get(t);
        if (n?.isReusable === !0) return {
            lifecycleReadyPromise: Promise.resolve(0)
        };
        n !== void 0 && this._disposeSession(t);
        const i = this._provider.watchSessionTurnLifecycle(new Krs({
            sessionId: t
        }).toBinary())[Symbol.asyncIterator](), r = new Whg(i);
        this._watches.set(t, r);
        const s = performance.now();
        return {
            lifecycleReadyPromise: (async ()=>{
                let a;
                try {
                    const l = await pyk(r.next(), e);
                    if (l === void 0) throw new T1("Cancelled while waiting for the agent host lifecycle watch to become ready.");
                    a = l;
                } catch (l) {
                    throw this._disposeSession(t), l;
                }
                if (a.done || Yrs.fromBinary(a.value).event.case !== "ready") throw this._disposeSession(t), new Error("[AgentHostService] Agent host lifecycle watch ended before it became ready");
                return r.ready = !0, performance.now() - s;
            })()
        };
    }
    bindExecution(t) {
        return new Hhg(()=>this._watches.get(t.sessionId), ()=>this._disposeSession(t.sessionId), t.runOptions, t.delivery, t.getPreSendTimings);
    }
    _disposeSession(t) {
        const e = this._watches.get(t);
        e !== void 0 && (this._watches.delete(t), e.dispose());
    }
}, Hhg = class {
    constructor(t, e, n, i, r){
        this._getWatch = t, this._disposeWatch = e, this._originalRunOptions = n, this._delivery = i, this._getPreSendTimings = r, this._finishedTurnIds = new Set, this._finishedWaiters = new Map, this._pendingEventsByTurnId = new Map, this._cancellation = new El, this._networkPhaseStartDeferred = !1, this.runOptions = {
            ...n,
            onNetworkPhaseStart: ()=>this.deliverFirstNetworkPhase()
        };
    }
    deliverFirstNetworkPhase() {
        if (this._delivery.networkPhaseDelivered) return;
        const t = this._getPreSendTimings();
        if (t.sendActionResolvedAt === void 0) {
            this._networkPhaseStartDeferred = !0;
            return;
        }
        this._delivery.networkPhaseDelivered = !0, this._originalRunOptions.onPreSendTimings?.({
            bridgeWaitMs: t.bridgeWaitMs,
            ensureSessionMs: t.ensureSessionMs,
            lifecycleReadyMs: t.lifecycleReadyMs,
            sendActionMs: t.sendActionMs,
            acceptToNetworkMs: Math.max(0, performance.now() - t.sendActionResolvedAt),
            requestContextByteSnapshot: t.requestContextByteSnapshot
        }), this._originalRunOptions.onNetworkPhaseStart?.();
    }
    flushDeferredNetworkPhase() {
        this._networkPhaseStartDeferred && this.deliverFirstNetworkPhase();
    }
    startPump(t) {
        const e = this._getWatch();
        return e === void 0 ? Promise.resolve() : (this._pump = this._consume(e, t).finally(()=>{
            for (const n of this._finishedWaiters.values())n();
            this._finishedWaiters.clear();
        }), this._pump);
    }
    get pump() {
        return this._pump;
    }
    async waitForFinished(t) {
        this._pump !== void 0 && (this._finishedTurnIds.has(t) || this._getWatch()?.finishedTurnIds.has(t) || await Promise.race([
            new Promise((e)=>{
                this._finishedWaiters.set(t, e);
            }),
            this._pump.then(()=>{}, ()=>{})
        ]));
    }
    flushPending(t) {
        const e = this._pendingEventsByTurnId.get(t);
        this._pendingEventsByTurnId.delete(t);
        for (const n of e ?? [])this._dispatch(n);
    }
    cancel() {
        this._cancellation.cancel();
    }
    dispose() {
        this.cancel(), this._cancellation.dispose();
    }
    markFinished(t) {
        this._finishedTurnIds.add(t), this._getWatch()?.finishedTurnIds.add(t), this._finishedWaiters.get(t)?.(), this._finishedWaiters.delete(t);
    }
    async _consume(t, e) {
        try {
            for(;;){
                const n = await t.next(this._cancellation.token);
                if (n === void 0) return;
                if (n.done) {
                    t.streamEnded = !0;
                    return;
                }
                const i = Yrs.fromBinary(n.value);
                if (i.event.case !== "lifecycle") continue;
                const r = i.event.value;
                if (r.turnId !== e()) {
                    const s = this._pendingEventsByTurnId.get(r.turnId) ?? [];
                    s.push(r), this._pendingEventsByTurnId.set(r.turnId, s);
                    continue;
                }
                this._dispatch(r);
            }
        } catch (n) {
            throw this._disposeWatch(), n;
        }
    }
    _dispatch(t) {
        switch(t.event.case){
            case "networkPhaseStarted":
                this.runOptions.onNetworkPhaseStart?.();
                return;
            case "responseMetadata":
                this.runOptions.onHeader?.(dyk(t.event.value));
                return;
            case "connectionStateChanged":
                {
                    const e = t.event.value.state;
                    switch(e.case){
                        case "connected":
                            this.runOptions.onConnectionStateChange?.({
                                state: "connected"
                            });
                            break;
                        case "reconnecting":
                            this.runOptions.onConnectionStateChange?.({
                                state: "reconnecting",
                                attempt: e.value.attempt,
                                trigger: hyk(e.value.trigger)
                            });
                            break;
                        case void 0:
                            break;
                        default:
                            {
                                const n = e;
                                throw new Error(`Unhandled agent-host connection state: ${JSON.stringify(n)}`);
                            }
                    }
                    return;
                }
            case "firstMessage":
                this.runOptions.onFirstMessage?.(t.event.value.elapsedMs);
                return;
            case "firstMessageNetwork":
                this.runOptions.onFirstMessageNetwork?.(t.event.value.elapsedMs);
                return;
            case "firstNonHeartbeatResponse":
                this.runOptions.onFirstNonHeartbeatResponse?.(t.event.value.handshakeMs, t.event.value.attempt);
                return;
            case "ttftBreakdown":
                this.runOptions.onTtftBreakdown?.({
                    serverFirstTokenMs: t.event.value.serverFirstTokenMs,
                    preStreamSetupMs: t.event.value.preStreamSetupMs,
                    waitForFirstEventMs: t.event.value.waitForFirstEventMs,
                    providerTtftMs: t.event.value.providerTtftMs,
                    slowPoolWaitMs: t.event.value.slowPoolWaitMs,
                    clientPrepMs: t.event.value.clientPrepMs,
                    clock: t.event.value.clientClock ? "client" : "server"
                }, t.event.value.attempt);
                return;
            case "turnRuntimeSelected":
                this.runOptions.onTurnRuntimeSelected?.({
                    runtime: t.event.value.runtime,
                    reason: t.event.value.reason
                });
                return;
            case "finished":
                this.markFinished(t.turnId);
                return;
            case void 0:
                return;
            default:
                {
                    const e = t.event;
                    throw new Error(`Unhandled agent-host turn lifecycle event: ${JSON.stringify(e)}`);
                }
        }
    }
}, Whg = class {
    constructor(t){
        this._iterator = t, this.ready = !1, this.streamEnded = !1, this.failed = !1, this.finishedTurnIds = new Set;
    }
    get isReusable() {
        return this.ready && !this.streamEnded && !this.failed;
    }
    async next(t) {
        if (this.failed) return {
            done: !0,
            value: void 0
        };
        this._pendingNext === void 0 && (this._pendingNext = this._iterator.next());
        const e = this._pendingNext;
        try {
            const n = t === void 0 ? await e : await yx(e, t);
            return n !== void 0 && this._pendingNext === e && (this._pendingNext = void 0), n;
        } catch (n) {
            throw this.failed = !0, this._pendingNext === e && (this._pendingNext = void 0), n;
        }
    }
    dispose() {
        this.failed = !0, this.streamEnded = !0, this._pendingNext?.catch(()=>{}), this._pendingNext = void 0, this._iterator.return?.();
    }
};

}
