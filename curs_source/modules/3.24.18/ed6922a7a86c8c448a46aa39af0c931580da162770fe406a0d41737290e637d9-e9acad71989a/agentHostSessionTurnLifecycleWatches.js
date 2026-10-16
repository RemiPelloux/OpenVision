import { YLd, hNd } from "./A3u.js";
import { Tw } from "./HVr.js";
import { _Zi, bq, vZi } from "./agent_host_pb.js";
import { bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { hb } from "./errors.ts";
import { ZW } from "./index_12.ts";
import { x } from "./tslib.es6.js";
function hQv(e) {
    const t = new Headers;
    return e.serverRegion !== void 0 && t.set("x-cursor-server-region", e.serverRegion), e.transportMode !== void 0 && t.set("x-cursor-agent-transport-mode", e.transportMode), t;
}
function pQv(e) {
    if (e !== void 0) return {
        errorClass: e.errorClass,
        connectCode: e.connectCode,
        connectCodeName: e.connectCodeName,
        errorCode: e.errorCode,
        countAsServerError: e.countAsServerError,
        countAsTransportError: e.countAsTransportError,
        stallAborted: e.stallAborted,
        transportFailureKind: YLd(e.transportFailureKind) ? e.transportFailureKind : void 0,
        transportMode: e.transportMode,
        loop: hNd(e.loop) ? e.loop : void 0,
        originatingRequestId: e.originatingRequestId,
        attemptRequestId: e.attemptRequestId,
        endpointUrl: e.endpointUrl
    };
}
function mQv(e, t) {
    return e.catch(()=>{}), new Promise((n, i)=>{
        const r = ()=>i(new hb("Cancelled while waiting for the agent host lifecycle watch."));
        if (t.aborted) {
            r();
            return;
        }
        t.addEventListener("abort", r, {
            once: !0
        }), e.then((s)=>{
            t.removeEventListener("abort", r), n(s);
        }, (s)=>{
            t.removeEventListener("abort", r), i(s);
        });
    });
}
var vTh, _Th, bTh;
export { _Th, bTh, hQv, mQv, pQv, vTh };
var __wakaru_gQv_initialized = false;
export function gQv() {
if (__wakaru_gQv_initialized) return;
__wakaru_gQv_initialized = true;
"use strict";
x(), ZW(), bq(), bn(), Ar(), vTh = class {
    constructor(e){
        this._provider = e, this._watches = new Map;
    }
    forgetSession(e) {
        this._disposeSession(e);
    }
    disposeAll() {
        for (const e of [
            ...this._watches.keys()
        ])this._disposeSession(e);
    }
    beginReady(e, t) {
        return this.begin(e, t).lifecycleReadyPromise;
    }
    begin(e, t) {
        const n = this._watches.get(e);
        if (n?.isReusable === !0) return {
            lifecycleReadyPromise: Promise.resolve(0)
        };
        n !== void 0 && this._disposeSession(e);
        const i = this._provider.watchSessionTurnLifecycle(new vZi({
            sessionId: e
        }).toBinary())[Symbol.asyncIterator](), r = new bTh(i);
        this._watches.set(e, r);
        const s = performance.now();
        return {
            lifecycleReadyPromise: (async ()=>{
                let a;
                try {
                    const c = await mQv(r.next(), t);
                    if (c === void 0) throw new hb("Cancelled while waiting for the agent host lifecycle watch to become ready.");
                    a = c;
                } catch (c) {
                    throw this._disposeSession(e), c;
                }
                if (a.done || _Zi.fromBinary(a.value).event.case !== "ready") throw this._disposeSession(e), new Error("[AgentHostService] Agent host lifecycle watch ended before it became ready");
                return r.ready = !0, performance.now() - s;
            })()
        };
    }
    bindExecution(e) {
        return new _Th(()=>this._watches.get(e.sessionId), ()=>this._disposeSession(e.sessionId), e.runOptions, e.delivery, e.getPreSendTimings);
    }
    _disposeSession(e) {
        const t = this._watches.get(e);
        t !== void 0 && (this._watches.delete(e), t.dispose());
    }
}, _Th = class {
    constructor(e, t, n, i, r){
        this._getWatch = e, this._disposeWatch = t, this._originalRunOptions = n, this._delivery = i, this._getPreSendTimings = r, this._finishedTurnIds = new Set, this._finishedWaiters = new Map, this._pendingEventsByTurnId = new Map, this._cancellation = new Eo, this._networkPhaseStartDeferred = !1, this.runOptions = {
            ...n,
            onNetworkPhaseStart: ()=>this.deliverFirstNetworkPhase()
        };
    }
    deliverFirstNetworkPhase() {
        if (this._delivery.networkPhaseDelivered) return;
        const e = this._getPreSendTimings();
        if (e.sendActionResolvedAt === void 0) {
            this._networkPhaseStartDeferred = !0;
            return;
        }
        this._delivery.networkPhaseDelivered = !0, this._originalRunOptions.onPreSendTimings?.({
            bridgeWaitMs: e.bridgeWaitMs,
            ensureSessionMs: e.ensureSessionMs,
            lifecycleReadyMs: e.lifecycleReadyMs,
            sendActionMs: e.sendActionMs,
            acceptToNetworkMs: Math.max(0, performance.now() - e.sendActionResolvedAt),
            requestContextByteSnapshot: e.requestContextByteSnapshot
        }), this._originalRunOptions.onNetworkPhaseStart?.();
    }
    flushDeferredNetworkPhase() {
        this._networkPhaseStartDeferred && this.deliverFirstNetworkPhase();
    }
    startPump(e) {
        const t = this._getWatch();
        return t === void 0 ? Promise.resolve() : (this._pump = this._consume(t, e).finally(()=>{
            for (const n of this._finishedWaiters.values())n();
            this._finishedWaiters.clear();
        }), this._pump);
    }
    get pump() {
        return this._pump;
    }
    async waitForFinished(e) {
        this._pump !== void 0 && (this._finishedTurnIds.has(e) || this._getWatch()?.finishedTurnIds.has(e) || await Promise.race([
            new Promise((t)=>{
                this._finishedWaiters.set(e, t);
            }),
            this._pump.then(()=>{}, ()=>{})
        ]));
    }
    flushPending(e) {
        const t = this._pendingEventsByTurnId.get(e);
        this._pendingEventsByTurnId.delete(e);
        for (const n of t ?? [])this._dispatch(n);
    }
    cancel() {
        this._cancellation.cancel();
    }
    dispose() {
        this.cancel(), this._cancellation.dispose();
    }
    markFinished(e) {
        this._finishedTurnIds.add(e), this._getWatch()?.finishedTurnIds.add(e), this._finishedWaiters.get(e)?.(), this._finishedWaiters.delete(e);
    }
    async _consume(e, t) {
        try {
            for(;;){
                const n = await e.next(this._cancellation.token);
                if (n === void 0) return;
                if (n.done) {
                    e.streamEnded = !0;
                    return;
                }
                const i = _Zi.fromBinary(n.value);
                if (i.event.case !== "lifecycle") continue;
                const r = i.event.value;
                if (r.turnId !== t()) {
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
    _dispatch(e) {
        switch(e.event.case){
            case "networkPhaseStarted":
                this.runOptions.onNetworkPhaseStart?.();
                return;
            case "responseMetadata":
                this.runOptions.onHeader?.(hQv(e.event.value));
                return;
            case "connectionStateChanged":
                {
                    const t = e.event.value.state;
                    switch(t.case){
                        case "connected":
                            this.runOptions.onConnectionStateChange?.({
                                state: "connected"
                            });
                            break;
                        case "reconnecting":
                            this.runOptions.onConnectionStateChange?.({
                                state: "reconnecting",
                                attempt: t.value.attempt,
                                trigger: pQv(t.value.trigger)
                            });
                            break;
                        case void 0:
                            break;
                        default:
                            {
                                const n = t;
                                throw new Error(`Unhandled agent-host connection state: ${JSON.stringify(n)}`);
                            }
                    }
                    return;
                }
            case "firstMessage":
                this.runOptions.onFirstMessage?.(e.event.value.elapsedMs);
                return;
            case "firstMessageNetwork":
                this.runOptions.onFirstMessageNetwork?.(e.event.value.elapsedMs);
                return;
            case "firstNonHeartbeatResponse":
                this.runOptions.onFirstNonHeartbeatResponse?.(e.event.value.handshakeMs, e.event.value.attempt);
                return;
            case "ttftBreakdown":
                this.runOptions.onTtftBreakdown?.({
                    serverFirstTokenMs: e.event.value.serverFirstTokenMs,
                    preStreamSetupMs: e.event.value.preStreamSetupMs,
                    waitForFirstEventMs: e.event.value.waitForFirstEventMs,
                    providerTtftMs: e.event.value.providerTtftMs,
                    slowPoolWaitMs: e.event.value.slowPoolWaitMs,
                    clientPrepMs: e.event.value.clientPrepMs,
                    clock: e.event.value.clientClock ? "client" : "server"
                }, e.event.value.attempt);
                return;
            case "turnRuntimeSelected":
                this.runOptions.onTurnRuntimeSelected?.({
                    runtime: e.event.value.runtime,
                    reason: e.event.value.reason
                });
                return;
            case "finished":
                this.markFinished(e.turnId);
                return;
            case void 0:
                return;
            default:
                {
                    const t = e.event;
                    throw new Error(`Unhandled agent-host turn lifecycle event: ${JSON.stringify(t)}`);
                }
        }
    }
}, bTh = class {
    constructor(e){
        this._iterator = e, this.ready = !1, this.streamEnded = !1, this.failed = !1, this.finishedTurnIds = new Set;
    }
    get isReusable() {
        return this.ready && !this.streamEnded && !this.failed;
    }
    async next(e) {
        if (this.failed) return {
            done: !0,
            value: void 0
        };
        this._pendingNext === void 0 && (this._pendingNext = this._iterator.next());
        const t = this._pendingNext;
        try {
            const n = e === void 0 ? await t : await Tw(t, e);
            return n !== void 0 && this._pendingNext === t && (this._pendingNext = void 0), n;
        } catch (n) {
            throw this.failed = !0, this._pendingNext === t && (this._pendingNext = void 0), n;
        }
    }
    dispose() {
        this.failed = !0, this.streamEnded = !0, this._pendingNext?.catch(()=>{}), this._pendingNext = void 0, this._iterator.return?.();
    }
};

}
