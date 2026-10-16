import { Ec, Ei, Ga, Gt, LOe, Nt, Pn, Qe, Ya, st, tt } from "./Iwo.js";
import { h2 } from "./LYd.js";
import { mP } from "./SZu.js";
import { qn } from "./async.js";
import { rp } from "./bcIdFromAuthority.js";
import { El, yo } from "./cancellation.js";
import { r71, vja } from "./cursorSocketCloseError.js";
import { Ki } from "./network.js";
import { UM, W4, pCe } from "./remoteAuthorityResolver.js";
import { GTn, eXr } from "./remoteSocketFactoryService.js";
import { D3 } from "./stopwatch.js";
import { E } from "./tslib.es6.js";
import { Xo } from "./uuid_2.js";
import { A0m, D0m, Fki, JYr, P0m, R0m, d71, die, f71, qTn, s71, tXr, uCt, yja } from "./yBp.js";
var F0m, B0m, U0m, j0m, $0m, H0m, iXr, rXr, W0m, Bki, G0m, Sja, kja, q0m, z0m, wja, V0m, K0m, Y0m, zTn, X0m, mCe, Qz, Z0m, Q0m;
export { $0m, B0m, Bki, F0m, G0m, H0m, K0m, Q0m, Qz, Sja, U0m, V0m, W0m, X0m, Y0m, Z0m, iXr, j0m, kja, mCe, q0m, rXr, wja, z0m, zTn };
var __wakaru_dCt_initialized = false;
export function dCt() {
if (__wakaru_dCt_initialized) return;
__wakaru_dCt_initialized = true;
"use strict";
E(), qn(), Ga(), yo(), Ei(), Gt(), Qe(), Ki(), mP(), D3(), Xo(), JYr(), UM(), GTn(), rp(), r71(), F0m = 30 * 1e3, B0m = 30 * 1e3, U0m = 5 * 1e3, j0m = 2, $0m = 45 * 1e3, H0m = 300 * 1e3, iXr = "Unknown reconnection token (never seen)", rXr = "Unknown reconnection token (seen before)", W0m = new Set([
    "ETIMEDOUT",
    "ENETUNREACH",
    "ENETDOWN",
    "EHOSTUNREACH",
    "ECONNREFUSED",
    "ECONNRESET",
    "ENOTFOUND",
    "EAI_AGAIN"
]), Bki = class {
    get didTimeout() {
        return this._state === "timedout";
    }
    constructor(t){
        this._state = "pending", this._disposables = new Nt, { promise: this.promise, resolve: this._resolvePromise, reject: this._rejectPromise } = LOe(), t.isCancellationRequested ? this._timeout() : this._disposables.add(t.onCancellationRequested(()=>this._timeout()));
    }
    registerDisposable(t) {
        this._state === "pending" ? this._disposables.add(t) : t.dispose();
    }
    _timeout() {
        this._state === "pending" && (this._disposables.dispose(), this._state = "timedout", this._rejectPromise(this._createTimeoutError()));
    }
    _createTimeoutError() {
        const t = new Error("Time limit reached");
        return t.code = "ETIMEDOUT", t.syscall = "connect", t;
    }
    resolve(t) {
        this._state === "pending" && (this._disposables.dispose(), this._state = "resolved", this._resolvePromise(t));
    }
    reject(t) {
        this._state === "pending" && (this._disposables.dispose(), this._state = "rejected", this._rejectPromise(t));
    }
}, G0m = 5, Sja = 8, kja = [
    0,
    1,
    2,
    4,
    8
], q0m = Sja, z0m = 180 * 1e3, wja = 3, V0m = class {
    constructor(t, e){
        this.reconnectionToken = t, this.millisSinceLastIncomingData = e, this.type = 0;
    }
}, K0m = class {
    constructor(t, e, n, i){
        this.reconnectionToken = t, this.millisSinceLastIncomingData = e, this.durationSeconds = n, this.cancellableTimer = i, this.type = 1;
    }
    skipWait() {
        this.cancellableTimer.cancel();
    }
}, Y0m = class {
    constructor(t, e, n){
        this.reconnectionToken = t, this.millisSinceLastIncomingData = e, this.attempt = n, this.type = 2;
    }
}, zTn = class {
    constructor(t, e, n){
        this.reconnectionToken = t, this.millisSinceLastIncomingData = e, this.attempt = n, this.type = 4;
    }
}, X0m = class {
    constructor(t, e, n, i, r){
        this.reconnectionToken = t, this.millisSinceLastIncomingData = e, this.attempt = n, this.handled = i, this.reason = r, this.type = 3;
    }
}, mCe = class y3 extends st {
    constructor(e, n, i, r, s, o){
        if (super(), this._remoteAuthority = e, this._connectionType = n, this._options = i, this.reconnectionToken = r, this.protocol = s, this._onDidStateChange = this._register(new tt), this.onDidStateChange = this._onDidStateChange.event, this._permanentFailure = !1, this._isReconnecting = !1, this._reconnectGainPublished = !1, this._reconnectAfterCurrent = !1, this._reconnectPaused = !1, this._isDormant = !1, this._dormancyResumeInFlight = !1, this._dormancyResumeSocketClosed = !1, this._isDisposed = !1, this._reconnectionFailureIsFatal = o.reconnectionFailureIsFatal, this._onDidStateChange.fire(new zTn(this.reconnectionToken, 0, 0)), this._register(s.onSocketClose((a)=>{
            if (this._isDormant) {
                this._dormancyResumeInFlight && (this._dormancyResumeSocketClosed = !0);
                return;
            }
            const l = qTn(this._connectionType, this.reconnectionToken, !0);
            a ? a.type === 0 ? (this._lastSocketCloseError = a.error, this._options.logService.info(`${l} received socket close event (hadError: ${a.hadError}).`), a.error && this._options.logService.error(a.error)) : (this._lastSocketCloseError = void 0, this._options.logService.info(`${l} received socket close event (wasClean: ${a.wasClean}, code: ${a.code}, reason: ${a.reason}).`), a.event && this._options.logService.error(a.event)) : (this._lastSocketCloseError = void 0, this._options.logService.info(`${l} received socket close event.`)), this._requestReconnect();
        })), this._register(s.onSocketTimeout((a)=>{
            if (this._isDormant) return;
            const l = qTn(this._connectionType, this.reconnectionToken, !0);
            this._options.logService.info(`${l} received socket timeout event (unacknowledgedMsgCount: ${a.unacknowledgedMsgCount}, timeSinceOldestUnacknowledgedMsg: ${a.timeSinceOldestUnacknowledgedMsg}, timeSinceLastReceivedSomeData: ${a.timeSinceLastReceivedSomeData}).`), this._requestReconnect();
        })), y3._instances.push(this), this._register(Pn(()=>{
            const a = y3._instances.indexOf(this);
            a >= 0 && y3._instances.splice(a, 1), !y3._instances.some((l)=>l._remoteAuthority === this._remoteAuthority) && !y3._dormancyOperationByAuthority.has(this._remoteAuthority) && (y3._openDormancyAdmission(this._remoteAuthority), y3._authoritiesDesiredDormant.delete(this._remoteAuthority), y3._authorityDormancyGeneration.delete(this._remoteAuthority));
        })), y3._dormantAuthorities.has(this._remoteAuthority) && (this._isDormant = !0, this._reconnectPaused = !0, this.protocol.suspend()), o.inheritAuthorityPermanentFailure !== !1) {
            const a = y3._getPermanentFailureState(this._remoteAuthority);
            a && this._gotoPermanentFailure(a.millisSinceLastIncomingData, a.attempt, a.handled, a.reason);
        } else y3.clearPermanentFailure(this._remoteAuthority);
    }
    static triggerPermanentFailure(e, n, i, r, s) {
        const o = {
            millisSinceLastIncomingData: n,
            attempt: i,
            handled: r,
            reason: s
        };
        this._permanentFailureByKey.set(e, o), this._instances.forEach((a)=>{
            a.getRemoteAuthority() === e && a._gotoPermanentFailure(o.millisSinceLastIncomingData, o.attempt, o.handled, o.reason);
        });
    }
    static debugTriggerReconnection() {
        this._instances.forEach((e)=>e._beginReconnecting());
    }
    static clearPermanentFailure(e) {
        this._permanentFailureByKey.delete(e), this._debugReconnectPermanentFailureAuthorities.delete(e), this._instances.forEach((n)=>{
            n.getRemoteAuthority() === e && (n._permanentFailure = !1);
        });
    }
    static debugPauseSocketWriting() {
        this._instances.forEach((e)=>e._pauseSocketWriting());
    }
    static debugTriggerPermanentDisconnect(e) {
        this._debugReconnectPermanentFailureAuthorities.add(e), this._instances.forEach((n)=>{
            n.getRemoteAuthority() === e && n._disposeSocketForDebugDisconnect();
        });
    }
    static debugTriggerConnectionDrop(e) {
        this._instances.forEach((n)=>{
            n.getRemoteAuthority() === e && n._disposeSocketForDebugDisconnect();
        });
    }
    static _closeDormancyAdmission(e) {
        this._dormantAuthorities.has(e) || (this._dormantAuthorities.add(e), this._authorityWakeWaiters.set(e, LOe()));
    }
    static _openDormancyAdmission(e) {
        this._dormantAuthorities.delete(e), this._authorityWakeWaiters.get(e)?.resolve(), this._authorityWakeWaiters.delete(e);
    }
    static _recordDormancyIntent(e, n) {
        n ? this._authoritiesDesiredDormant.add(e) : this._authoritiesDesiredDormant.delete(e);
        const i = (this._authorityDormancyGeneration.get(e) ?? 0) + 1;
        return this._authorityDormancyGeneration.set(e, i), i;
    }
    static _queueDormancyOperation(e, n) {
        const r = (this._dormancyOperationByAuthority.get(e) ?? Promise.resolve()).catch(()=>{}).then(n), s = r.then(()=>{}, ()=>{});
        return this._dormancyOperationByAuthority.set(e, s), s.finally(()=>{
            this._dormancyOperationByAuthority.get(e) === s && (this._dormancyOperationByAuthority.delete(e), this._instances.some((o)=>o._remoteAuthority === e) || (this._openDormancyAdmission(e), this._authoritiesDesiredDormant.delete(e), this._authorityDormancyGeneration.delete(e)));
        }), r;
    }
    static whenAuthorityLeavesDormancy(e) {
        if (this._dormantAuthorities.has(e)) return (async ()=>{
            for(; this._dormantAuthorities.has(e);){
                const n = this._authorityWakeWaiters.get(e);
                if (!n) throw new Error(`Dormant authority ${e} has no wake waiter`);
                await n.promise;
            }
        })();
    }
    static async suspendAllForDormancy(e) {
        this._closeDormancyAdmission(e);
        const n = this._recordDormancyIntent(e, !0);
        return this._queueDormancyOperation(e, async ()=>{
            let i = 0;
            const r = new Set;
            for(;;){
                const s = this._instances.filter((a)=>a.getRemoteAuthority() === e && !a._isDisposed && !a._isDormant && !r.has(a));
                if (s.length === 0) return !this._instances.some((l)=>l.getRemoteAuthority() === e && !l._isDisposed) && this._authorityDormancyGeneration.get(e) === n && (this._openDormancyAdmission(e), this._authoritiesDesiredDormant.delete(e), this._authorityDormancyGeneration.delete(e)), i;
                s.forEach((a)=>r.add(a));
                const o = await Promise.all(s.map((a)=>a._suspendForDormancy()));
                if (i += o.filter(Boolean).length, o.some((a)=>!a)) {
                    const a = new Set;
                    let l = !0;
                    for(;;){
                        const c = this._instances.filter((d)=>d.getRemoteAuthority() === e && !d._isDisposed && d._isDormant && !a.has(d));
                        if (c.length === 0) break;
                        if (c.forEach((d)=>a.add(d)), (await Promise.all(c.map((d)=>d._resumeFromDormancy()))).some((d)=>!d)) {
                            l = !1;
                            break;
                        }
                    }
                    return l && this._authorityDormancyGeneration.get(e) === n ? (this._authoritiesDesiredDormant.delete(e), this._authorityDormancyGeneration.delete(e), this._openDormancyAdmission(e), 0) : this._authorityDormancyGeneration.get(e) === n ? -1 : 0;
                }
            }
        });
    }
    static async resumeAllFromDormancy(e) {
        const n = this._recordDormancyIntent(e, !1);
        return this._queueDormancyOperation(e, async ()=>{
            this.clearPermanentFailure(e);
            const i = new Set;
            let r = !1, s = !0;
            for(;;){
                const a = this._instances.filter((c)=>c.getRemoteAuthority() === e && !c._isDisposed && c._isDormant && !i.has(c));
                if (a.length === 0) break;
                if (r = !0, a.forEach((c)=>i.add(c)), (await Promise.all(a.map((c)=>c._resumeFromDormancy()))).some((c)=>!c)) {
                    s = !1;
                    break;
                }
            }
            if (!r) {
                const a = this._instances.some((l)=>l.getRemoteAuthority() === e && !l._isDisposed && !l._isPermanentFailure && !l.protocol.isSuspended);
                return this._authorityDormancyGeneration.get(e) === n && !this._authoritiesDesiredDormant.has(e) ? (this._openDormancyAdmission(e), this._authorityDormancyGeneration.delete(e), a) : !1;
            }
            if (s && this._authorityDormancyGeneration.get(e) === n && !this._authoritiesDesiredDormant.has(e)) return this._openDormancyAdmission(e), this._authorityDormancyGeneration.delete(e), !0;
            this._closeDormancyAdmission(e);
            const o = this._instances.filter((a)=>a.getRemoteAuthority() === e && !a._isDisposed);
            return await Promise.all(o.map((a)=>a._suspendForDormancy())), this._authorityDormancyGeneration.get(e) === n && this._authoritiesDesiredDormant.add(e), !1;
        });
    }
    static isDormant(e) {
        return this._instances.some((n)=>n.getRemoteAuthority() === e && n._isDormant);
    }
    static hasServerSideReconnectionStateLoss(e) {
        const n = this._getPermanentFailureState(e)?.reason;
        return n === iXr || n === rXr;
    }
    static _abandonDormancyAfterServerStateLoss(e) {
        const n = this._recordDormancyIntent(e, !1);
        return this._queueDormancyOperation(e, async ()=>{
            if (this._authorityDormancyGeneration.get(e) === n) {
                for (const i of this._instances)i.getRemoteAuthority() === e && !i._isDisposed && (i._isDormant = !1);
                this._openDormancyAdmission(e), this._authoritiesDesiredDormant.delete(e), this._authorityDormancyGeneration.delete(e);
            }
        });
    }
    static getDormantQueueStats(e) {
        let n = 0, i = 0, r = 0;
        for (const s of this._instances){
            if (s.getRemoteAuthority() !== e || s._isDisposed || !s._isDormant) continue;
            n++;
            const o = s.protocol.getOutgoingQueueStats();
            i += o.messageCount, r += o.byteSize;
        }
        return {
            connections: n,
            queuedMessages: i,
            queuedBytes: r
        };
    }
    getRemoteAuthority() {
        return this._remoteAuthority;
    }
    static notifySystemSuspended() {
        this._systemSuspended = !0, this._systemPowerGeneration++;
        for (const e of this._instances)e._isBackgroundComposerConnection() && e._reconnectWait?.cancel();
        this._onDidChangeSystemPower.fire();
    }
    static notifySystemResumed() {
        this._systemSuspended = !1, this._systemPowerGeneration++, this._onDidChangeSystemPower.fire();
    }
    static isSystemSuspended() {
        return this._systemSuspended;
    }
    get _isPermanentFailure() {
        return this._permanentFailure || y3._getPermanentFailureState(this.getRemoteAuthority()) !== void 0;
    }
    dispose() {
        this._isDisposed = !0, this._cancelActiveReconnectWork(), super.dispose();
    }
    cancelReconnect() {
        return this._reconnectPaused = !0, this._cancelActiveReconnectWork(), this._reconnectingPromise ?? Promise.resolve();
    }
    async retryNow() {
        if (this._isDormant || y3._dormantAuthorities.has(this._remoteAuthority)) {
            if (this._permanentFailure = !1, y3.clearPermanentFailure(this._remoteAuthority), !await y3.resumeAllFromDormancy(this._remoteAuthority)) {
                if (y3.hasServerSideReconnectionStateLoss(this._remoteAuthority)) {
                    await y3._abandonDormancyAfterServerStateLoss(this._remoteAuthority);
                    return;
                }
                throw new Error(`Failed to resume all dormant connections for ${this._remoteAuthority}`);
            }
            return;
        }
        this._reconnectPaused && (await this._reconnectingPromise, this._reconnectPaused = !1), this._permanentFailure = !1, y3.clearPermanentFailure(this.getRemoteAuthority()), await this._beginReconnecting();
    }
    async _suspendForDormancy() {
        if (this._isDisposed || this._isDormant || (this._isDormant = !0, this._reconnectPaused = !0, this._cancelActiveReconnectWork(), await this._reconnectingPromise, this._isDisposed || !this._isDormant)) return !1;
        this._reconnectPaused = !0;
        try {
            this.protocol.suspend();
        } catch (e) {
            return this._options.logService.error(`${qTn(this._connectionType, this.reconnectionToken, !0)} failed to suspend for dormancy. Error: ${die(e)}`), !1;
        }
        return this._options.logService.info(`${qTn(this._connectionType, this.reconnectionToken, !0)} suspended for dormancy; the pod lease for this connection is released until it resumes.`), !0;
    }
    async _resumeFromDormancy() {
        if (!this._isDormant) return !0;
        if (this._isDisposed || (this._reconnectPaused = !1, await this._reconnectingPromise, this._isDisposed)) return !1;
        let e = !1;
        this._dormancyResumeInFlight = !0, this._dormancyResumeSocketClosed = !1;
        const n = this.onDidStateChange((s)=>{
            s.type === 4 && (e = !0, this._isDormant = !1);
        });
        let i = !1;
        const r = setTimeout(()=>{
            i = !0, this._reconnectPaused = !0, this._cancelActiveReconnectWork();
        }, B0m);
        try {
            await this._beginReconnecting();
        } finally{
            clearTimeout(r), this._dormancyResumeInFlight = !1, n.dispose();
        }
        return e && !i;
    }
    _cancelActiveReconnectWork() {
        this._reconnectWait?.cancel(), this._reconnectCancellation?.cancel();
    }
    _requestReconnect() {
        if (this._isReconnecting && this._reconnectGainPublished) {
            this._reconnectAfterCurrent = !0;
            return;
        }
        this._beginReconnecting();
    }
    _beginReconnecting() {
        const e = this._reconnectingPromise;
        if (e) return e;
        this._isReconnecting = !0, this._reconnectGainPublished = !1;
        const n = new El;
        this._reconnectCancellation = n;
        const i = this._runReconnectingLoop(n.token).finally(()=>{
            this._reconnectCancellation === n && (this._reconnectCancellation = void 0), n.dispose(), this._reconnectingPromise === i && (this._reconnectingPromise = void 0, this._isReconnecting = !1);
            const r = this._reconnectAfterCurrent;
            this._reconnectAfterCurrent = !1, this._reconnectGainPublished = !1, r && !this._isDisposed && !this._isDormant && !this._reconnectPaused && this._beginReconnecting();
        });
        return this._reconnectingPromise = i, i;
    }
    _isBackgroundComposerConnection() {
        const e = this.getRemoteAuthority();
        return !!(e && h2(e) !== void 0);
    }
    async _runReconnectingLoop(e) {
        if (this._isPermanentFailure || this._isDisposed || this._reconnectPaused) return;
        const n = qTn(this._connectionType, this.reconnectionToken, !0);
        this._options.logService.info(`${n} starting reconnecting loop. You can get more information with the trace log level.`), this._onDidStateChange.fire(new V0m(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData()));
        const i = [
            0,
            5,
            5,
            10,
            10,
            10,
            10,
            10,
            30,
            30,
            30,
            30,
            60,
            60,
            60,
            60,
            120
        ], r = Date.now();
        let s = r, o = -1, a = 0;
        const l = this._isBackgroundComposerConnection();
        let c, u = y3._systemPowerGeneration;
        const d = async (h)=>{
            if (!l || Fki(h)) return "giveUp";
            const p = this._options.systemResumeGraceMs ?? U0m;
            return await this._waitForSystemPowerChange(u, p, e) ? (this._options.logService.info(`${n} The system resumed as this reconnect was giving up; retrying instead.`), c = Date.now(), o = -1, "retry") : this._shouldStopReconnect(e) ? "stop" : "giveUp";
        };
        do {
            o++;
            const h = c !== void 0 ? o === 0 ? 0 : j0m : o < i.length ? i[o] : i[i.length - 1];
            try {
                if (h > 0) {
                    const _ = D0m(h);
                    this._reconnectWait = _, this._onDidStateChange.fire(new K0m(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), h, _)), this._options.logService.info(`${n} waiting for ${h} seconds before reconnecting...`);
                    try {
                        await _;
                    } catch (b) {
                        if (!Ya(b)) throw b;
                    } finally{
                        this._reconnectWait === _ && (this._reconnectWait = void 0);
                    }
                }
                if (l && y3._systemSuspended && (this._options.logService.info(`${n} the system is suspended; reconnecting pauses until it resumes.`), await this._waitWhileSystemSuspended(n, e), this._options.logService.info(`${n} the system resumed; failures until the network answers do not count.`), c = Date.now(), o = 0), this._isDisposed || this._reconnectPaused) break;
                if (this._isPermanentFailure) {
                    this._options.logService.error(`${n} permanent failure occurred while running the reconnecting loop.`);
                    break;
                }
                u = y3._systemPowerGeneration, this._onDidStateChange.fire(new Y0m(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), o + 1)), this._options.logService.info(`${n} resolving connection...`);
                const p = await R0m(this._options, this.reconnectionToken, this.protocol, e);
                if (this._shouldStopReconnect(e)) break;
                this._options.logService.info(`${n} connecting to ${p.connectTo}...`);
                const g = new El(e), f = setTimeout(()=>g.cancel(), this._options.reconnectTimeoutMs ?? F0m);
                try {
                    if (this._connectionType === 1 && y3._debugReconnectPermanentFailureAuthorities.delete(this.getRemoteAuthority())) throw new W4("Simulated permanent reconnect failure (developer)", pCe.NotAvailable);
                    this._dormancyResumeInFlight && (this._dormancyResumeSocketClosed = !1), await this._reconnect(p, g.token);
                } finally{
                    clearTimeout(f), g.dispose();
                }
                if (this._shouldStopReconnect(e)) {
                    this._suspendProtocolAfterSupersededReconnect(n);
                    break;
                }
                if (this._isDormant && this._dormancyResumeSocketClosed) {
                    this._suspendProtocolAfterSupersededReconnect(n);
                    continue;
                }
                this._reconnectPaused = !1, this._options.logService.info(`${n} reconnected!`), this._reconnectGainPublished = !0, this._onDidStateChange.fire(new zTn(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), o + 1));
                break;
            } catch (p) {
                if (this._isDormant && this._suspendProtocolAfterSupersededReconnect(n), this._shouldStopReconnect(e)) {
                    this._options.logService.info(`${n} reconnecting was canceled.`);
                    break;
                }
                if (p.code === "VSCODE_CONNECTION_ERROR") {
                    if (l && a < wja && f71(this._connectionType, p)) {
                        a++, this._options.logService.info(`${n} The server rejected the handshake auth (${a}/${wja}); the next attempt re-resolves the authority for a fresh connection token. Error: ${die(p)}`);
                        continue;
                    }
                    this._options.logService.error(`${n} A permanent error occurred in the reconnecting loop! Will give up now! Error: ${die(p)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, uCt(p));
                    break;
                }
                if (l && !Fki(p)) {
                    if (y3._systemSuspended || u !== y3._systemPowerGeneration) {
                        this._options.logService.info(`${n} This attempt spanned a system sleep, so it does not count; reconnecting resumes once the system is awake. Error: ${die(p)}`), c = Date.now(), o = -1;
                        continue;
                    }
                    if (c !== void 0) {
                        if (s71(p) && Date.now() - c < $0m) {
                            this._options.logService.info(`${n} The network is not answering yet after a system sleep; retrying without counting it. Error: ${die(p)}`);
                            continue;
                        }
                        c = void 0, s = Date.now(), o = 0;
                    }
                }
                if (Date.now() - r > 108e5 && !l) {
                    this._options.logService.error(`${n} An error occurred while reconnecting, but it will be treated as a permanent error because the reconnection grace time has expired! Will give up now! Error: ${die(p)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, uCt(p));
                    break;
                }
                if (W4.isTemporarilyNotAvailable(p) || tXr(p)) {
                    if (l && P0m({
                        attempts: o + 1,
                        elapsedMs: Date.now() - s
                    })) {
                        const f = await d(p);
                        if (f === "retry") continue;
                        if (f === "stop") break;
                        this._options.logService.info(`${n} Cloud-agent transient reconnect budget exhausted; stopping automatic retries. Error: ${die(p)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, uCt(p));
                        break;
                    }
                    this._options.logService.info(`${n} A temporarily not available error occurred while trying to reconnect, will try again...`), this._options.logService.trace(p);
                    continue;
                }
                if (p.code === eXr) {
                    this._options.logService.info(`${n} No socket factory is registered right now, will try again...`), this._options.logService.trace(p);
                    continue;
                }
                if ((p.code === "ETIMEDOUT" || p.code === "ENETUNREACH" || p.code === "ECONNREFUSED" || p.code === "ECONNRESET") && p.syscall === "connect") {
                    this._options.logService.info(`${n} A network error occurred while trying to reconnect, will try again...`), this._options.logService.trace(p);
                    continue;
                }
                if (Ya(p)) {
                    this._options.logService.info(`${n} A promise cancelation error occurred while trying to reconnect, will try again...`), this._options.logService.trace(p);
                    continue;
                }
                if (p instanceof W4) {
                    const f = await d(p);
                    if (f === "retry") continue;
                    if (f === "stop") break;
                    this._options.logService.error(`${n} A RemoteAuthorityResolverError occurred while trying to reconnect. Will give up now! Error: ${die(p)}`), l && this._options.logService.info(`${n} A RemoteAuthorityResolverError occurred while trying to reconnect. For background composer, we should ideally try to reconnect, but we're not doing that for now...`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, W4.isHandled(p), uCt(p));
                    break;
                }
                if (this._options.logService.error(`${n} An unknown error occurred while trying to reconnect, since this is an unknown case, it will be treated as a permanent error! Will give up now! Error: ${die(p)}`), l) {
                    if (this._lastSocketCloseError && this._lastSocketCloseError.code === vja) {
                        this._options.logService.info(`${n} A transient cursor-socket close error occurred before reconnect, will try again...`), this._options.logService.trace(die(this._lastSocketCloseError));
                        continue;
                    }
                    if ("_code" in p && p._code === "TemporarilyNotAvailable" || "code" in p && p.code === "TemporarilyNotAvailable") {
                        if (P0m({
                            attempts: o + 1,
                            elapsedMs: Date.now() - s
                        })) {
                            const _ = await d(p);
                            if (_ === "retry") continue;
                            if (_ === "stop") break;
                            this._options.logService.info(`${n} Cloud-agent transient reconnect budget exhausted; stopping automatic retries. Error: ${die(p)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, uCt(p));
                            break;
                        }
                        this._options.logService.info(`${n} Temporarily not available error in background composer, will try again...`);
                        continue;
                    }
                    this._options.logService.info(`${n} An unknown error occurred while trying to reconnect. For background composer, we should ideally try to reconnect, but we're not doing that for now...`);
                    const f = await d(p);
                    if (f === "retry") continue;
                    if (f === "stop") break;
                }
                this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, uCt(p));
                break;
            }
        }while (!this._isPermanentFailure && !this._isDisposed && !this._reconnectPaused)
    }
    async _waitForSystemPowerChange(e, n, i) {
        if (y3._systemPowerGeneration !== e) return !0;
        const r = new Nt;
        try {
            const s = LOe();
            return r.add(y3._onDidChangeSystemPower.event(()=>s.resolve(!0))), r.add(i.onCancellationRequested(()=>s.resolve(!1))), r.add(Ec(()=>s.resolve(!1), n)), await s.promise;
        } finally{
            r.dispose();
        }
    }
    async _waitWhileSystemSuspended(e, n) {
        for(; y3._systemSuspended && !n.isCancellationRequested;)!await this._waitForSystemPowerChange(y3._systemPowerGeneration, H0m, n) && !n.isCancellationRequested && (this._options.logService.info(`${e} no system resume arrived; treating the system as awake.`), y3.notifySystemResumed());
    }
    _shouldStopReconnect(e) {
        return e.isCancellationRequested || this._isDisposed || this._reconnectPaused || this._isPermanentFailure;
    }
    _suspendProtocolAfterSupersededReconnect(e) {
        try {
            this.protocol.suspend();
        } catch (n) {
            this._options.logService.error(`${e} failed to detach a superseded reconnect socket. Error: ${die(n)}`);
        }
    }
    _onReconnectionPermanentFailure(e, n, i, r) {
        this._reconnectionFailureIsFatal ? y3.triggerPermanentFailure(this.getRemoteAuthority(), e, n, i, r) : this._gotoPermanentFailure(e, n, i, r);
    }
    _gotoPermanentFailure(e, n, i, r) {
        this._permanentFailure = !0, this._cancelActiveReconnectWork(), this._onDidStateChange.fire(new X0m(this.reconnectionToken, e, n, i, r)), this._options.keepSocketOnPermanentFailure !== !0 && yja(this.protocol);
    }
    static _getPermanentFailureState(e) {
        return this._permanentFailureByKey.get(e);
    }
    _pauseSocketWriting() {
        this.protocol.pauseSocketWriting();
    }
    _disposeSocketForDebugDisconnect() {
        this.protocol.getSocket().dispose();
    }
}, mCe._debugReconnectPermanentFailureAuthorities = new Set, mCe._dormancyOperationByAuthority = new Map, mCe._dormantAuthorities = new Set, mCe._authoritiesDesiredDormant = new Set, mCe._authorityDormancyGeneration = new Map, mCe._authorityWakeWaiters = new Map, mCe._systemSuspended = !1, mCe._systemPowerGeneration = 0, mCe._onDidChangeSystemPower = new tt, mCe._permanentFailureByKey = new Map, mCe._instances = [], Qz = mCe, Z0m = class extends Qz {
    constructor(t, e, n, i, r){
        super(e, 1, t, n, i, {
            reconnectionFailureIsFatal: !0,
            inheritAuthorityPermanentFailure: !1
        }), this.client = this._register(r);
    }
    async _reconnect(t, e) {
        await d71(t, e);
    }
}, Q0m = class extends Qz {
    constructor(t, e, n, i, r, s){
        super(e, 2, t, i, r, {
            reconnectionFailureIsFatal: !1,
            inheritAuthorityPermanentFailure: !0
        }), this._startArguments = n, this.debugPort = s;
    }
    async _reconnect(t, e) {
        await A0m(t, this._startArguments, e);
    }
};

}
