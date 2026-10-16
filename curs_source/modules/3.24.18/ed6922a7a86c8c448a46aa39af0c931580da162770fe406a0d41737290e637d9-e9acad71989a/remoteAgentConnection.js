import { TGi, Xj, aOd, cOd, eao, gTv, lTv, oOd, sNn, tWt, uOd, wGi, yTv, zJe } from "./A3u.js";
import { Cl, Fo, He, Se, Sge, bt, ja, rn, si, ve, we } from "./HVr.js";
import { bn } from "./async.js";
import { nb } from "./bcIdFromAuthority.js";
import { Ar, Eo } from "./cancellation.js";
import { Zoo, cTv } from "./cursorSocketCloseError.js";
import { li } from "./network.js";
import { _R, wI } from "./qIc.js";
import { DR, nF, xde } from "./remoteAuthorityResolver.js";
import { CGi, eWt } from "./remoteSocketFactoryService.js";
import { aA } from "./stopwatch.js";
import { x } from "./tslib.es6.js";
import { Js } from "./uuid.js";
var mOd, gOd, fOd, vOd, _Od, bOd, xGi, IGi, yOd, oNn, SOd, tao, nao, kOd, wOd, iao, COd, TOd, EOd, nWt, xOd, Ide, QW, IOd, AOd;
export { AOd, COd, EOd, IGi, IOd, Ide, QW, SOd, TOd, _Od, bOd, fOd, gOd, iao, kOd, mOd, nWt, nao, oNn, tao, vOd, wOd, xGi, xOd, yOd };
var __wakaru_ykt_initialized = false;
export function ykt() {
if (__wakaru_ykt_initialized) return;
__wakaru_ykt_initialized = true;
"use strict";
x(), bn(), Fo(), Ar(), si(), bt(), Se(), li(), wI(), aA(), Js(), wGi(), DR(), eWt(), nb(), cTv(), mOd = 30 * 1e3, gOd = 30 * 1e3, fOd = 5 * 1e3, vOd = 2, _Od = 45 * 1e3, bOd = 300 * 1e3, xGi = "Unknown reconnection token (never seen)", IGi = "Unknown reconnection token (seen before)", yOd = new Set([
    "ETIMEDOUT",
    "ENETUNREACH",
    "ENETDOWN",
    "EHOSTUNREACH",
    "ECONNREFUSED",
    "ECONNRESET",
    "ENOTFOUND",
    "EAI_AGAIN"
]), oNn = class {
    get didTimeout() {
        return this._state === "timedout";
    }
    constructor(e){
        this._state = "pending", this._disposables = new He, { promise: this.promise, resolve: this._resolvePromise, reject: this._rejectPromise } = Sge(), e.isCancellationRequested ? this._timeout() : this._disposables.add(e.onCancellationRequested(()=>this._timeout()));
    }
    registerDisposable(e) {
        this._state === "pending" ? this._disposables.add(e) : e.dispose();
    }
    _timeout() {
        this._state === "pending" && (this._disposables.dispose(), this._state = "timedout", this._rejectPromise(this._createTimeoutError()));
    }
    _createTimeoutError() {
        const e = new Error("Time limit reached");
        return e.code = "ETIMEDOUT", e.syscall = "connect", e;
    }
    resolve(e) {
        this._state === "pending" && (this._disposables.dispose(), this._state = "resolved", this._resolvePromise(e));
    }
    reject(e) {
        this._state === "pending" && (this._disposables.dispose(), this._state = "rejected", this._rejectPromise(e));
    }
}, SOd = 5, tao = 8, nao = [
    0,
    1,
    2,
    4,
    8
], kOd = tao, wOd = 180 * 1e3, iao = 3, COd = class {
    constructor(e, t){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.type = 0;
    }
}, TOd = class {
    constructor(e, t, n, i){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.durationSeconds = n, this.cancellableTimer = i, this.type = 1;
    }
    skipWait() {
        this.cancellableTimer.cancel();
    }
}, EOd = class {
    constructor(e, t, n){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.attempt = n, this.type = 2;
    }
}, nWt = class {
    constructor(e, t, n){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.attempt = n, this.type = 4;
    }
}, xOd = class {
    constructor(e, t, n, i, r){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.attempt = n, this.handled = i, this.reason = r, this.type = 3;
    }
}, Ide = class qA extends we {
    constructor(t, n, i, r, s, o){
        if (super(), this._remoteAuthority = t, this._connectionType = n, this._options = i, this.reconnectionToken = r, this.protocol = s, this._onDidStateChange = this._register(new ve), this.onDidStateChange = this._onDidStateChange.event, this._permanentFailure = !1, this._isReconnecting = !1, this._reconnectGainPublished = !1, this._reconnectAfterCurrent = !1, this._reconnectPaused = !1, this._isDormant = !1, this._dormancyResumeInFlight = !1, this._dormancyResumeSocketClosed = !1, this._isDisposed = !1, this._reconnectionFailureIsFatal = o.reconnectionFailureIsFatal, this._onDidStateChange.fire(new nWt(this.reconnectionToken, 0, 0)), this._register(s.onSocketClose((a)=>{
            if (this._isDormant) {
                this._dormancyResumeInFlight && (this._dormancyResumeSocketClosed = !0);
                return;
            }
            const c = tWt(this._connectionType, this.reconnectionToken, !0);
            a ? a.type === 0 ? (this._lastSocketCloseError = a.error, this._options.logService.info(`${c} received socket close event (hadError: ${a.hadError}).`), a.error && this._options.logService.error(a.error)) : (this._lastSocketCloseError = void 0, this._options.logService.info(`${c} received socket close event (wasClean: ${a.wasClean}, code: ${a.code}, reason: ${a.reason}).`), a.event && this._options.logService.error(a.event)) : (this._lastSocketCloseError = void 0, this._options.logService.info(`${c} received socket close event.`)), this._requestReconnect();
        })), this._register(s.onSocketTimeout((a)=>{
            if (this._isDormant) return;
            const c = tWt(this._connectionType, this.reconnectionToken, !0);
            this._options.logService.info(`${c} received socket timeout event (unacknowledgedMsgCount: ${a.unacknowledgedMsgCount}, timeSinceOldestUnacknowledgedMsg: ${a.timeSinceOldestUnacknowledgedMsg}, timeSinceLastReceivedSomeData: ${a.timeSinceLastReceivedSomeData}).`), this._requestReconnect();
        })), qA._instances.push(this), this._register(rn(()=>{
            const a = qA._instances.indexOf(this);
            a >= 0 && qA._instances.splice(a, 1), !qA._instances.some((c)=>c._remoteAuthority === this._remoteAuthority) && !qA._dormancyOperationByAuthority.has(this._remoteAuthority) && (qA._openDormancyAdmission(this._remoteAuthority), qA._authoritiesDesiredDormant.delete(this._remoteAuthority), qA._authorityDormancyGeneration.delete(this._remoteAuthority));
        })), qA._dormantAuthorities.has(this._remoteAuthority) && (this._isDormant = !0, this._reconnectPaused = !0, this.protocol.suspend()), o.inheritAuthorityPermanentFailure !== !1) {
            const a = qA._getPermanentFailureState(this._remoteAuthority);
            a && this._gotoPermanentFailure(a.millisSinceLastIncomingData, a.attempt, a.handled, a.reason);
        } else qA.clearPermanentFailure(this._remoteAuthority);
    }
    static triggerPermanentFailure(t, n, i, r, s) {
        const o = {
            millisSinceLastIncomingData: n,
            attempt: i,
            handled: r,
            reason: s
        };
        this._permanentFailureByKey.set(t, o), this._instances.forEach((a)=>{
            a.getRemoteAuthority() === t && a._gotoPermanentFailure(o.millisSinceLastIncomingData, o.attempt, o.handled, o.reason);
        });
    }
    static debugTriggerReconnection() {
        this._instances.forEach((t)=>t._beginReconnecting());
    }
    static clearPermanentFailure(t) {
        this._permanentFailureByKey.delete(t), this._debugReconnectPermanentFailureAuthorities.delete(t), this._instances.forEach((n)=>{
            n.getRemoteAuthority() === t && (n._permanentFailure = !1);
        });
    }
    static debugPauseSocketWriting() {
        this._instances.forEach((t)=>t._pauseSocketWriting());
    }
    static debugTriggerPermanentDisconnect(t) {
        this._debugReconnectPermanentFailureAuthorities.add(t), this._instances.forEach((n)=>{
            n.getRemoteAuthority() === t && n._disposeSocketForDebugDisconnect();
        });
    }
    static debugTriggerConnectionDrop(t) {
        this._instances.forEach((n)=>{
            n.getRemoteAuthority() === t && n._disposeSocketForDebugDisconnect();
        });
    }
    static _closeDormancyAdmission(t) {
        this._dormantAuthorities.has(t) || (this._dormantAuthorities.add(t), this._authorityWakeWaiters.set(t, Sge()));
    }
    static _openDormancyAdmission(t) {
        this._dormantAuthorities.delete(t), this._authorityWakeWaiters.get(t)?.resolve(), this._authorityWakeWaiters.delete(t);
    }
    static _recordDormancyIntent(t, n) {
        n ? this._authoritiesDesiredDormant.add(t) : this._authoritiesDesiredDormant.delete(t);
        const i = (this._authorityDormancyGeneration.get(t) ?? 0) + 1;
        return this._authorityDormancyGeneration.set(t, i), i;
    }
    static _queueDormancyOperation(t, n) {
        const r = (this._dormancyOperationByAuthority.get(t) ?? Promise.resolve()).catch(()=>{}).then(n), s = r.then(()=>{}, ()=>{});
        return this._dormancyOperationByAuthority.set(t, s), s.finally(()=>{
            this._dormancyOperationByAuthority.get(t) === s && (this._dormancyOperationByAuthority.delete(t), this._instances.some((o)=>o._remoteAuthority === t) || (this._openDormancyAdmission(t), this._authoritiesDesiredDormant.delete(t), this._authorityDormancyGeneration.delete(t)));
        }), r;
    }
    static whenAuthorityLeavesDormancy(t) {
        if (this._dormantAuthorities.has(t)) return (async ()=>{
            for(; this._dormantAuthorities.has(t);){
                const n = this._authorityWakeWaiters.get(t);
                if (!n) throw new Error(`Dormant authority ${t} has no wake waiter`);
                await n.promise;
            }
        })();
    }
    static async suspendAllForDormancy(t) {
        this._closeDormancyAdmission(t);
        const n = this._recordDormancyIntent(t, !0);
        return this._queueDormancyOperation(t, async ()=>{
            let i = 0;
            const r = new Set;
            for(;;){
                const s = this._instances.filter((a)=>a.getRemoteAuthority() === t && !a._isDisposed && !a._isDormant && !r.has(a));
                if (s.length === 0) return !this._instances.some((c)=>c.getRemoteAuthority() === t && !c._isDisposed) && this._authorityDormancyGeneration.get(t) === n && (this._openDormancyAdmission(t), this._authoritiesDesiredDormant.delete(t), this._authorityDormancyGeneration.delete(t)), i;
                s.forEach((a)=>r.add(a));
                const o = await Promise.all(s.map((a)=>a._suspendForDormancy()));
                if (i += o.filter(Boolean).length, o.some((a)=>!a)) {
                    const a = new Set;
                    let c = !0;
                    for(;;){
                        const l = this._instances.filter((h)=>h.getRemoteAuthority() === t && !h._isDisposed && h._isDormant && !a.has(h));
                        if (l.length === 0) break;
                        if (l.forEach((h)=>a.add(h)), (await Promise.all(l.map((h)=>h._resumeFromDormancy()))).some((h)=>!h)) {
                            c = !1;
                            break;
                        }
                    }
                    return c && this._authorityDormancyGeneration.get(t) === n ? (this._authoritiesDesiredDormant.delete(t), this._authorityDormancyGeneration.delete(t), this._openDormancyAdmission(t), 0) : this._authorityDormancyGeneration.get(t) === n ? -1 : 0;
                }
            }
        });
    }
    static async resumeAllFromDormancy(t) {
        const n = this._recordDormancyIntent(t, !1);
        return this._queueDormancyOperation(t, async ()=>{
            this.clearPermanentFailure(t);
            const i = new Set;
            let r = !1, s = !0;
            for(;;){
                const a = this._instances.filter((l)=>l.getRemoteAuthority() === t && !l._isDisposed && l._isDormant && !i.has(l));
                if (a.length === 0) break;
                if (r = !0, a.forEach((l)=>i.add(l)), (await Promise.all(a.map((l)=>l._resumeFromDormancy()))).some((l)=>!l)) {
                    s = !1;
                    break;
                }
            }
            if (!r) {
                const a = this._instances.some((c)=>c.getRemoteAuthority() === t && !c._isDisposed && !c._isPermanentFailure && !c.protocol.isSuspended);
                return this._authorityDormancyGeneration.get(t) === n && !this._authoritiesDesiredDormant.has(t) ? (this._openDormancyAdmission(t), this._authorityDormancyGeneration.delete(t), a) : !1;
            }
            if (s && this._authorityDormancyGeneration.get(t) === n && !this._authoritiesDesiredDormant.has(t)) return this._openDormancyAdmission(t), this._authorityDormancyGeneration.delete(t), !0;
            this._closeDormancyAdmission(t);
            const o = this._instances.filter((a)=>a.getRemoteAuthority() === t && !a._isDisposed);
            return await Promise.all(o.map((a)=>a._suspendForDormancy())), this._authorityDormancyGeneration.get(t) === n && this._authoritiesDesiredDormant.add(t), !1;
        });
    }
    static isDormant(t) {
        return this._instances.some((n)=>n.getRemoteAuthority() === t && n._isDormant);
    }
    static hasServerSideReconnectionStateLoss(t) {
        const n = this._getPermanentFailureState(t)?.reason;
        return n === xGi || n === IGi;
    }
    static _abandonDormancyAfterServerStateLoss(t) {
        const n = this._recordDormancyIntent(t, !1);
        return this._queueDormancyOperation(t, async ()=>{
            if (this._authorityDormancyGeneration.get(t) === n) {
                for (const i of this._instances)i.getRemoteAuthority() === t && !i._isDisposed && (i._isDormant = !1);
                this._openDormancyAdmission(t), this._authoritiesDesiredDormant.delete(t), this._authorityDormancyGeneration.delete(t);
            }
        });
    }
    static getDormantQueueStats(t) {
        let n = 0, i = 0, r = 0;
        for (const s of this._instances){
            if (s.getRemoteAuthority() !== t || s._isDisposed || !s._isDormant) continue;
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
        for (const t of this._instances)t._isBackgroundComposerConnection() && t._reconnectWait?.cancel();
        this._onDidChangeSystemPower.fire();
    }
    static notifySystemResumed() {
        this._systemSuspended = !1, this._systemPowerGeneration++, this._onDidChangeSystemPower.fire();
    }
    static isSystemSuspended() {
        return this._systemSuspended;
    }
    get _isPermanentFailure() {
        return this._permanentFailure || qA._getPermanentFailureState(this.getRemoteAuthority()) !== void 0;
    }
    dispose() {
        this._isDisposed = !0, this._cancelActiveReconnectWork(), super.dispose();
    }
    cancelReconnect() {
        return this._reconnectPaused = !0, this._cancelActiveReconnectWork(), this._reconnectingPromise ?? Promise.resolve();
    }
    async retryNow() {
        if (this._isDormant || qA._dormantAuthorities.has(this._remoteAuthority)) {
            if (this._permanentFailure = !1, qA.clearPermanentFailure(this._remoteAuthority), !await qA.resumeAllFromDormancy(this._remoteAuthority)) {
                if (qA.hasServerSideReconnectionStateLoss(this._remoteAuthority)) {
                    await qA._abandonDormancyAfterServerStateLoss(this._remoteAuthority);
                    return;
                }
                throw new Error(`Failed to resume all dormant connections for ${this._remoteAuthority}`);
            }
            return;
        }
        this._reconnectPaused && (await this._reconnectingPromise, this._reconnectPaused = !1), this._permanentFailure = !1, qA.clearPermanentFailure(this.getRemoteAuthority()), await this._beginReconnecting();
    }
    async _suspendForDormancy() {
        if (this._isDisposed || this._isDormant || (this._isDormant = !0, this._reconnectPaused = !0, this._cancelActiveReconnectWork(), await this._reconnectingPromise, this._isDisposed || !this._isDormant)) return !1;
        this._reconnectPaused = !0;
        try {
            this.protocol.suspend();
        } catch (t) {
            return this._options.logService.error(`${tWt(this._connectionType, this.reconnectionToken, !0)} failed to suspend for dormancy. Error: ${Xj(t)}`), !1;
        }
        return this._options.logService.info(`${tWt(this._connectionType, this.reconnectionToken, !0)} suspended for dormancy; the pod lease for this connection is released until it resumes.`), !0;
    }
    async _resumeFromDormancy() {
        if (!this._isDormant) return !0;
        if (this._isDisposed || (this._reconnectPaused = !1, await this._reconnectingPromise, this._isDisposed)) return !1;
        let t = !1;
        this._dormancyResumeInFlight = !0, this._dormancyResumeSocketClosed = !1;
        const n = this.onDidStateChange((s)=>{
            s.type === 4 && (t = !0, this._isDormant = !1);
        });
        let i = !1;
        const r = setTimeout(()=>{
            i = !0, this._reconnectPaused = !0, this._cancelActiveReconnectWork();
        }, gOd);
        try {
            await this._beginReconnecting();
        } finally{
            clearTimeout(r), this._dormancyResumeInFlight = !1, n.dispose();
        }
        return t && !i;
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
        const t = this._reconnectingPromise;
        if (t) return t;
        this._isReconnecting = !0, this._reconnectGainPublished = !1;
        const n = new Eo;
        this._reconnectCancellation = n;
        const i = this._runReconnectingLoop(n.token).finally(()=>{
            this._reconnectCancellation === n && (this._reconnectCancellation = void 0), n.dispose(), this._reconnectingPromise === i && (this._reconnectingPromise = void 0, this._isReconnecting = !1);
            const r = this._reconnectAfterCurrent;
            this._reconnectAfterCurrent = !1, this._reconnectGainPublished = !1, r && !this._isDisposed && !this._isDormant && !this._reconnectPaused && this._beginReconnecting();
        });
        return this._reconnectingPromise = i, i;
    }
    _isBackgroundComposerConnection() {
        const t = this.getRemoteAuthority();
        return !!(t && _R(t) !== void 0);
    }
    async _runReconnectingLoop(t) {
        if (this._isPermanentFailure || this._isDisposed || this._reconnectPaused) return;
        const n = tWt(this._connectionType, this.reconnectionToken, !0);
        this._options.logService.info(`${n} starting reconnecting loop. You can get more information with the trace log level.`), this._onDidStateChange.fire(new COd(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData()));
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
        const c = this._isBackgroundComposerConnection();
        let l, u = qA._systemPowerGeneration;
        const h = async (p)=>{
            if (!c || sNn(p)) return "giveUp";
            const g = this._options.systemResumeGraceMs ?? fOd;
            return await this._waitForSystemPowerChange(u, g, t) ? (this._options.logService.info(`${n} The system resumed as this reconnect was giving up; retrying instead.`), l = Date.now(), o = -1, "retry") : this._shouldStopReconnect(t) ? "stop" : "giveUp";
        };
        do {
            o++;
            const p = l !== void 0 ? o === 0 ? 0 : vOd : o < i.length ? i[o] : i[i.length - 1];
            try {
                if (p > 0) {
                    const b = uOd(p);
                    this._reconnectWait = b, this._onDidStateChange.fire(new TOd(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), p, b)), this._options.logService.info(`${n} waiting for ${p} seconds before reconnecting...`);
                    try {
                        await b;
                    } catch (y) {
                        if (!ja(y)) throw y;
                    } finally{
                        this._reconnectWait === b && (this._reconnectWait = void 0);
                    }
                }
                if (c && qA._systemSuspended && (this._options.logService.info(`${n} the system is suspended; reconnecting pauses until it resumes.`), await this._waitWhileSystemSuspended(n, t), this._options.logService.info(`${n} the system resumed; failures until the network answers do not count.`), l = Date.now(), o = 0), this._isDisposed || this._reconnectPaused) break;
                if (this._isPermanentFailure) {
                    this._options.logService.error(`${n} permanent failure occurred while running the reconnecting loop.`);
                    break;
                }
                u = qA._systemPowerGeneration, this._onDidStateChange.fire(new EOd(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), o + 1)), this._options.logService.info(`${n} resolving connection...`);
                const g = await aOd(this._options, this.reconnectionToken, this.protocol, t);
                if (this._shouldStopReconnect(t)) break;
                this._options.logService.info(`${n} connecting to ${g.connectTo}...`);
                const f = new Eo(t), v = setTimeout(()=>f.cancel(), this._options.reconnectTimeoutMs ?? mOd);
                try {
                    if (this._connectionType === 1 && qA._debugReconnectPermanentFailureAuthorities.delete(this.getRemoteAuthority())) throw new nF("Simulated permanent reconnect failure (developer)", xde.NotAvailable);
                    this._dormancyResumeInFlight && (this._dormancyResumeSocketClosed = !1), await this._reconnect(g, f.token);
                } finally{
                    clearTimeout(v), f.dispose();
                }
                if (this._shouldStopReconnect(t)) {
                    this._suspendProtocolAfterSupersededReconnect(n);
                    break;
                }
                if (this._isDormant && this._dormancyResumeSocketClosed) {
                    this._suspendProtocolAfterSupersededReconnect(n);
                    continue;
                }
                this._reconnectPaused = !1, this._options.logService.info(`${n} reconnected!`), this._reconnectGainPublished = !0, this._onDidStateChange.fire(new nWt(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), o + 1));
                break;
            } catch (g) {
                if (this._isDormant && this._suspendProtocolAfterSupersededReconnect(n), this._shouldStopReconnect(t)) {
                    this._options.logService.info(`${n} reconnecting was canceled.`);
                    break;
                }
                if (g.code === "VSCODE_CONNECTION_ERROR") {
                    if (c && a < iao && yTv(this._connectionType, g)) {
                        a++, this._options.logService.info(`${n} The server rejected the handshake auth (${a}/${iao}); the next attempt re-resolves the authority for a fresh connection token. Error: ${Xj(g)}`);
                        continue;
                    }
                    this._options.logService.error(`${n} A permanent error occurred in the reconnecting loop! Will give up now! Error: ${Xj(g)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, zJe(g));
                    break;
                }
                if (c && !sNn(g)) {
                    if (qA._systemSuspended || u !== qA._systemPowerGeneration) {
                        this._options.logService.info(`${n} This attempt spanned a system sleep, so it does not count; reconnecting resumes once the system is awake. Error: ${Xj(g)}`), l = Date.now(), o = -1;
                        continue;
                    }
                    if (l !== void 0) {
                        if (lTv(g) && Date.now() - l < _Od) {
                            this._options.logService.info(`${n} The network is not answering yet after a system sleep; retrying without counting it. Error: ${Xj(g)}`);
                            continue;
                        }
                        l = void 0, s = Date.now(), o = 0;
                    }
                }
                if (Date.now() - r > 108e5 && !c) {
                    this._options.logService.error(`${n} An error occurred while reconnecting, but it will be treated as a permanent error because the reconnection grace time has expired! Will give up now! Error: ${Xj(g)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, zJe(g));
                    break;
                }
                if (nF.isTemporarilyNotAvailable(g) || TGi(g)) {
                    if (c && cOd({
                        attempts: o + 1,
                        elapsedMs: Date.now() - s
                    })) {
                        const v = await h(g);
                        if (v === "retry") continue;
                        if (v === "stop") break;
                        this._options.logService.info(`${n} Cloud-agent transient reconnect budget exhausted; stopping automatic retries. Error: ${Xj(g)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, zJe(g));
                        break;
                    }
                    this._options.logService.info(`${n} A temporarily not available error occurred while trying to reconnect, will try again...`), this._options.logService.trace(g);
                    continue;
                }
                if (g.code === CGi) {
                    this._options.logService.info(`${n} No socket factory is registered right now, will try again...`), this._options.logService.trace(g);
                    continue;
                }
                if ((g.code === "ETIMEDOUT" || g.code === "ENETUNREACH" || g.code === "ECONNREFUSED" || g.code === "ECONNRESET") && g.syscall === "connect") {
                    this._options.logService.info(`${n} A network error occurred while trying to reconnect, will try again...`), this._options.logService.trace(g);
                    continue;
                }
                if (ja(g)) {
                    this._options.logService.info(`${n} A promise cancelation error occurred while trying to reconnect, will try again...`), this._options.logService.trace(g);
                    continue;
                }
                if (g instanceof nF) {
                    const v = await h(g);
                    if (v === "retry") continue;
                    if (v === "stop") break;
                    this._options.logService.error(`${n} A RemoteAuthorityResolverError occurred while trying to reconnect. Will give up now! Error: ${Xj(g)}`), c && this._options.logService.info(`${n} A RemoteAuthorityResolverError occurred while trying to reconnect. For background composer, we should ideally try to reconnect, but we're not doing that for now...`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, nF.isHandled(g), zJe(g));
                    break;
                }
                if (this._options.logService.error(`${n} An unknown error occurred while trying to reconnect, since this is an unknown case, it will be treated as a permanent error! Will give up now! Error: ${Xj(g)}`), c) {
                    if (this._lastSocketCloseError && this._lastSocketCloseError.code === Zoo) {
                        this._options.logService.info(`${n} A transient cursor-socket close error occurred before reconnect, will try again...`), this._options.logService.trace(Xj(this._lastSocketCloseError));
                        continue;
                    }
                    if ("_code" in g && g._code === "TemporarilyNotAvailable" || "code" in g && g.code === "TemporarilyNotAvailable") {
                        if (cOd({
                            attempts: o + 1,
                            elapsedMs: Date.now() - s
                        })) {
                            const b = await h(g);
                            if (b === "retry") continue;
                            if (b === "stop") break;
                            this._options.logService.info(`${n} Cloud-agent transient reconnect budget exhausted; stopping automatic retries. Error: ${Xj(g)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, zJe(g));
                            break;
                        }
                        this._options.logService.info(`${n} Temporarily not available error in background composer, will try again...`);
                        continue;
                    }
                    this._options.logService.info(`${n} An unknown error occurred while trying to reconnect. For background composer, we should ideally try to reconnect, but we're not doing that for now...`);
                    const v = await h(g);
                    if (v === "retry") continue;
                    if (v === "stop") break;
                }
                this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), o + 1, !1, zJe(g));
                break;
            }
        }while (!this._isPermanentFailure && !this._isDisposed && !this._reconnectPaused)
    }
    async _waitForSystemPowerChange(t, n, i) {
        if (qA._systemPowerGeneration !== t) return !0;
        const r = new He;
        try {
            const s = Sge();
            return r.add(qA._onDidChangeSystemPower.event(()=>s.resolve(!0))), r.add(i.onCancellationRequested(()=>s.resolve(!1))), r.add(Cl(()=>s.resolve(!1), n)), await s.promise;
        } finally{
            r.dispose();
        }
    }
    async _waitWhileSystemSuspended(t, n) {
        for(; qA._systemSuspended && !n.isCancellationRequested;)!await this._waitForSystemPowerChange(qA._systemPowerGeneration, bOd, n) && !n.isCancellationRequested && (this._options.logService.info(`${t} no system resume arrived; treating the system as awake.`), qA.notifySystemResumed());
    }
    _shouldStopReconnect(t) {
        return t.isCancellationRequested || this._isDisposed || this._reconnectPaused || this._isPermanentFailure;
    }
    _suspendProtocolAfterSupersededReconnect(t) {
        try {
            this.protocol.suspend();
        } catch (n) {
            this._options.logService.error(`${t} failed to detach a superseded reconnect socket. Error: ${Xj(n)}`);
        }
    }
    _onReconnectionPermanentFailure(t, n, i, r) {
        this._reconnectionFailureIsFatal ? qA.triggerPermanentFailure(this.getRemoteAuthority(), t, n, i, r) : this._gotoPermanentFailure(t, n, i, r);
    }
    _gotoPermanentFailure(t, n, i, r) {
        this._permanentFailure = !0, this._cancelActiveReconnectWork(), this._onDidStateChange.fire(new xOd(this.reconnectionToken, t, n, i, r)), this._options.keepSocketOnPermanentFailure !== !0 && eao(this.protocol);
    }
    static _getPermanentFailureState(t) {
        return this._permanentFailureByKey.get(t);
    }
    _pauseSocketWriting() {
        this.protocol.pauseSocketWriting();
    }
    _disposeSocketForDebugDisconnect() {
        this.protocol.getSocket().dispose();
    }
}, Ide._debugReconnectPermanentFailureAuthorities = new Set, Ide._dormancyOperationByAuthority = new Map, Ide._dormantAuthorities = new Set, Ide._authoritiesDesiredDormant = new Set, Ide._authorityDormancyGeneration = new Map, Ide._authorityWakeWaiters = new Map, Ide._systemSuspended = !1, Ide._systemPowerGeneration = 0, Ide._onDidChangeSystemPower = new ve, Ide._permanentFailureByKey = new Map, Ide._instances = [], QW = Ide, IOd = class extends QW {
    constructor(e, t, n, i, r){
        super(t, 1, e, n, i, {
            reconnectionFailureIsFatal: !0,
            inheritAuthorityPermanentFailure: !1
        }), this.client = this._register(r);
    }
    async _reconnect(e, t) {
        await gTv(e, t);
    }
}, AOd = class extends QW {
    constructor(e, t, n, i, r, s){
        super(t, 2, e, i, r, {
            reconnectionFailureIsFatal: !1,
            inheritAuthorityPermanentFailure: !0
        }), this._startArguments = n, this.debugPort = s;
    }
    async _reconnect(e, t) {
        await oOd(e, this._startArguments, t);
    }
};

}
