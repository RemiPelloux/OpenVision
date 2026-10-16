import { le, rT } from "./async.js";
import { bw } from "./bcIdFromAuthority.js";
import { it } from "./buffer.js";
import { Ie, Jn, Mt } from "./cancellation.js";
import { JU, elt } from "./cursorSocketCloseError.js";
import { Ve } from "./errors.js";
import { N, ge, se, yn } from "./event.js";
import { Hn, Wl } from "./ipc.js";
import { tF } from "./ipc.net.js";
import { J, j, ve } from "./lifecycle.js";
import { $e } from "./network.js";
import { sa } from "./performance.js";
import { Ia } from "./processMainService.js";
import { Xf, Zct, ki } from "./remoteAuthorityResolver.js";
import { X2e, YU } from "./remoteSocketFactoryService.js";
import { Yo } from "./stopwatch.js";
import { Cs } from "./storage_3.js";
import { h } from "./tslib.es6.js";
import { Wn } from "./uuid.js";
function as(e) {
    if (e instanceof Error) return e.stack || e.message;
    if (typeof e == "string") return e;
    try {
        return JSON.stringify(e);
    } catch  {
        return String(e);
    }
}
function XU(e) {
    switch(e){
        case 1:
            return "Management";
        case 2:
            return "ExtensionHost";
        case 3:
            return "Tunnel";
    }
}
function QU(e) {
    return e instanceof Error && /^\[(internal|unknown)\](?:\s|$)/i.test(e.message);
}
function tlt(e) {
    if (ki.isTemporarilyNotAvailable(e) || QU(e) || Cs(e)) return !0;
    const { code: t, _code: n } = e ?? {};
    return n === Xf.TemporarilyNotAvailable || t === Xf.TemporarilyNotAvailable || t === YU || t === JU || typeof t == "string" && m9e.has(t);
}
function sm(e) {
    const t = n9e(e);
    if (t?.startsWith("Unknown reconnection token (")) return t;
    const n = e?.message;
    if (typeof n == "string" && n.startsWith("No socket factory found for ")) return "Cursor could not initialize the connection to this workspace";
    if (ki.isNotAvailable(e)) return "The workspace is unavailable";
    if (ki.isTemporarilyNotAvailable(e) || QU(e)) return "The workspace is temporarily unavailable";
    if (ki.isNoResolverFound(e)) return "Cursor could not find a connection provider for this workspace";
    if (ki.isInvalidAuthority(e)) return "The workspace address is invalid";
    const r = e?.code;
    return r === "ETIMEDOUT" ? "The workspace did not respond in time" : r === "ENETUNREACH" ? "Cursor could not reach the workspace" : r === "ECONNREFUSED" ? "The workspace refused the connection" : r === "ECONNRESET" ? "The workspace connection was interrupted" : "Cursor could not connect to this workspace";
}
function gb(e, t) {
    const n = new fb(t);
    return e.then((r)=>{
        n.didTimeout || n.resolve(r);
    }, (r)=>{
        n.didTimeout || n.reject(r);
    }), n.promise;
}
async function Q2e(e, t, n, r = Ie.None) {
    const s = e.addressProvider.getAddress(), { connectTo: i, connectionToken: a } = r === Ie.None ? await s : await gb(s, r);
    return {
        commit: e.commit,
        quality: e.quality,
        connectTo: i,
        connectionToken: a,
        reconnectionToken: t,
        reconnectionProtocol: n,
        remoteSocketFactoryService: e.remoteSocketFactoryService,
        signService: e.signService,
        logService: e.logService
    };
}
function Z2e(e) {
    return ki.isNotAvailable(e);
}
function e9e(e) {
    return e.attempts >= h9e || e.elapsedMs >= g9e;
}
function llt(e, t) {
    if (e !== 1) return !1;
    const n = n9e(t);
    return n !== void 0 && n.startsWith("Unauthorized client refused");
}
function ult(e) {
    return Wl((t)=>new Promise((n)=>{
            const r = setTimeout(()=>{
                s?.dispose(), n();
            }, e * 1e3);
            let s;
            s = t.onCancellationRequested(()=>{
                clearTimeout(r), s?.dispose(), n();
            });
        }));
}
function t9e(e) {
    try {
        e.acceptDisconnect();
        const t = e.getSocket();
        e.dispose(), t.dispose();
    } catch (t) {
        yn(t);
    }
}
function n9e(e) {
    const t = e?.remoteConnectionErrorReason;
    return typeof t == "string" ? t : void 0;
}
function plt(e, t) {
    for(; e.length < t;)e += " ";
    return e;
}
function hlt(e, t) {
    return `[remote-connection][${plt(XU(e), 13)}][${t.substr(0, 5)}\u2026]`;
}
function im(e, t, n) {
    return `${hlt(e, t)}[${n ? "reconnect" : "initial"}]`;
}
var s9e, i9e, a9e, o9e, c9e, l9e, d9e, u9e, m9e, fb, p9e, h9e, g9e, ZU, f9e, _9e, v9e, ex, T9e, qs;
export { Q2e, QU, T9e, XU, Z2e, ZU, _9e, a9e, as, c9e, d9e, e9e, ex, f9e, fb, g9e, gb, h9e, hlt, i9e, im, l9e, llt, m9e, n9e, o9e, p9e, plt, qs, s9e, sm, t9e, tlt, u9e, ult, v9e };
var __wakaru_flt_initialized = false;
export function flt() {
if (__wakaru_flt_initialized) return;
__wakaru_flt_initialized = true;
"use strict";
h(), le(), it(), Mt(), Ve(), se(), j(), $e(), sa(), Yo(), Wn(), tF(), Zct(), X2e(), bw(), elt(), s9e = 30 * 1e3, i9e = 30 * 1e3, a9e = 5 * 1e3, o9e = 2, c9e = 45 * 1e3, l9e = 300 * 1e3, d9e = "Unknown reconnection token (never seen)", u9e = "Unknown reconnection token (seen before)", m9e = new Set([
    "ETIMEDOUT",
    "ENETUNREACH",
    "ENETDOWN",
    "EHOSTUNREACH",
    "ECONNREFUSED",
    "ECONNRESET",
    "ENOTFOUND",
    "EAI_AGAIN"
]), fb = class {
    get didTimeout() {
        return this._state === "timedout";
    }
    constructor(e){
        this._state = "pending", this._disposables = new ve, { promise: this.promise, resolve: this._resolvePromise, reject: this._rejectPromise } = rT(), e.isCancellationRequested ? this._timeout() : this._disposables.add(e.onCancellationRequested(()=>this._timeout()));
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
}, p9e = 8, h9e = p9e, g9e = 180 * 1e3, ZU = 3, f9e = class {
    constructor(e, t){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.type = 0;
    }
}, _9e = class {
    constructor(e, t, n, r){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.durationSeconds = n, this.cancellableTimer = r, this.type = 1;
    }
    skipWait() {
        this.cancellableTimer.cancel();
    }
}, v9e = class {
    constructor(e, t, n){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.attempt = n, this.type = 2;
    }
}, ex = class {
    constructor(e, t, n){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.attempt = n, this.type = 4;
    }
}, T9e = class {
    constructor(e, t, n, r, s){
        this.reconnectionToken = e, this.millisSinceLastIncomingData = t, this.attempt = n, this.handled = r, this.reason = s, this.type = 3;
    }
}, qs = class It extends J {
    constructor(t, n, r, s, i, a){
        if (super(), this._remoteAuthority = t, this._connectionType = n, this._options = r, this.reconnectionToken = s, this.protocol = i, this._onDidStateChange = this._register(new N), this.onDidStateChange = this._onDidStateChange.event, this._permanentFailure = !1, this._isReconnecting = !1, this._reconnectGainPublished = !1, this._reconnectAfterCurrent = !1, this._reconnectPaused = !1, this._isDormant = !1, this._dormancyResumeInFlight = !1, this._dormancyResumeSocketClosed = !1, this._isDisposed = !1, this._reconnectionFailureIsFatal = a.reconnectionFailureIsFatal, this._onDidStateChange.fire(new ex(this.reconnectionToken, 0, 0)), this._register(i.onSocketClose((o)=>{
            if (this._isDormant) {
                this._dormancyResumeInFlight && (this._dormancyResumeSocketClosed = !0);
                return;
            }
            const l = im(this._connectionType, this.reconnectionToken, !0);
            o ? o.type === 0 ? (this._lastSocketCloseError = o.error, this._options.logService.info(`${l} received socket close event (hadError: ${o.hadError}).`), o.error && this._options.logService.error(o.error)) : (this._lastSocketCloseError = void 0, this._options.logService.info(`${l} received socket close event (wasClean: ${o.wasClean}, code: ${o.code}, reason: ${o.reason}).`), o.event && this._options.logService.error(o.event)) : (this._lastSocketCloseError = void 0, this._options.logService.info(`${l} received socket close event.`)), this._requestReconnect();
        })), this._register(i.onSocketTimeout((o)=>{
            if (this._isDormant) return;
            const l = im(this._connectionType, this.reconnectionToken, !0);
            this._options.logService.info(`${l} received socket timeout event (unacknowledgedMsgCount: ${o.unacknowledgedMsgCount}, timeSinceOldestUnacknowledgedMsg: ${o.timeSinceOldestUnacknowledgedMsg}, timeSinceLastReceivedSomeData: ${o.timeSinceLastReceivedSomeData}).`), this._requestReconnect();
        })), It._instances.push(this), this._register(ge(()=>{
            const o = It._instances.indexOf(this);
            o >= 0 && It._instances.splice(o, 1), !It._instances.some((l)=>l._remoteAuthority === this._remoteAuthority) && !It._dormancyOperationByAuthority.has(this._remoteAuthority) && (It._openDormancyAdmission(this._remoteAuthority), It._authoritiesDesiredDormant.delete(this._remoteAuthority), It._authorityDormancyGeneration.delete(this._remoteAuthority));
        })), It._dormantAuthorities.has(this._remoteAuthority) && (this._isDormant = !0, this._reconnectPaused = !0, this.protocol.suspend()), a.inheritAuthorityPermanentFailure !== !1) {
            const o = It._getPermanentFailureState(this._remoteAuthority);
            o && this._gotoPermanentFailure(o.millisSinceLastIncomingData, o.attempt, o.handled, o.reason);
        } else It.clearPermanentFailure(this._remoteAuthority);
    }
    static triggerPermanentFailure(t, n, r, s, i) {
        const a = {
            millisSinceLastIncomingData: n,
            attempt: r,
            handled: s,
            reason: i
        };
        this._permanentFailureByKey.set(t, a), this._instances.forEach((o)=>{
            o.getRemoteAuthority() === t && o._gotoPermanentFailure(a.millisSinceLastIncomingData, a.attempt, a.handled, a.reason);
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
        this._dormantAuthorities.has(t) || (this._dormantAuthorities.add(t), this._authorityWakeWaiters.set(t, rT()));
    }
    static _openDormancyAdmission(t) {
        this._dormantAuthorities.delete(t), this._authorityWakeWaiters.get(t)?.resolve(), this._authorityWakeWaiters.delete(t);
    }
    static _recordDormancyIntent(t, n) {
        n ? this._authoritiesDesiredDormant.add(t) : this._authoritiesDesiredDormant.delete(t);
        const r = (this._authorityDormancyGeneration.get(t) ?? 0) + 1;
        return this._authorityDormancyGeneration.set(t, r), r;
    }
    static _queueDormancyOperation(t, n) {
        const s = (this._dormancyOperationByAuthority.get(t) ?? Promise.resolve()).catch(()=>{}).then(n), i = s.then(()=>{}, ()=>{});
        return this._dormancyOperationByAuthority.set(t, i), i.finally(()=>{
            this._dormancyOperationByAuthority.get(t) === i && (this._dormancyOperationByAuthority.delete(t), this._instances.some((a)=>a._remoteAuthority === t) || (this._openDormancyAdmission(t), this._authoritiesDesiredDormant.delete(t), this._authorityDormancyGeneration.delete(t)));
        }), s;
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
            let r = 0;
            const s = new Set;
            for(;;){
                const i = this._instances.filter((o)=>o.getRemoteAuthority() === t && !o._isDisposed && !o._isDormant && !s.has(o));
                if (i.length === 0) return !this._instances.some((l)=>l.getRemoteAuthority() === t && !l._isDisposed) && this._authorityDormancyGeneration.get(t) === n && (this._openDormancyAdmission(t), this._authoritiesDesiredDormant.delete(t), this._authorityDormancyGeneration.delete(t)), r;
                i.forEach((o)=>s.add(o));
                const a = await Promise.all(i.map((o)=>o._suspendForDormancy()));
                if (r += a.filter(Boolean).length, a.some((o)=>!o)) {
                    const o = new Set;
                    let l = !0;
                    for(;;){
                        const d = this._instances.filter((m)=>m.getRemoteAuthority() === t && !m._isDisposed && m._isDormant && !o.has(m));
                        if (d.length === 0) break;
                        if (d.forEach((m)=>o.add(m)), (await Promise.all(d.map((m)=>m._resumeFromDormancy()))).some((m)=>!m)) {
                            l = !1;
                            break;
                        }
                    }
                    return l && this._authorityDormancyGeneration.get(t) === n ? (this._authoritiesDesiredDormant.delete(t), this._authorityDormancyGeneration.delete(t), this._openDormancyAdmission(t), 0) : this._authorityDormancyGeneration.get(t) === n ? -1 : 0;
                }
            }
        });
    }
    static async resumeAllFromDormancy(t) {
        const n = this._recordDormancyIntent(t, !1);
        return this._queueDormancyOperation(t, async ()=>{
            this.clearPermanentFailure(t);
            const r = new Set;
            let s = !1, i = !0;
            for(;;){
                const o = this._instances.filter((d)=>d.getRemoteAuthority() === t && !d._isDisposed && d._isDormant && !r.has(d));
                if (o.length === 0) break;
                if (s = !0, o.forEach((d)=>r.add(d)), (await Promise.all(o.map((d)=>d._resumeFromDormancy()))).some((d)=>!d)) {
                    i = !1;
                    break;
                }
            }
            if (!s) {
                const o = this._instances.some((l)=>l.getRemoteAuthority() === t && !l._isDisposed && !l._isPermanentFailure && !l.protocol.isSuspended);
                return this._authorityDormancyGeneration.get(t) === n && !this._authoritiesDesiredDormant.has(t) ? (this._openDormancyAdmission(t), this._authorityDormancyGeneration.delete(t), o) : !1;
            }
            if (i && this._authorityDormancyGeneration.get(t) === n && !this._authoritiesDesiredDormant.has(t)) return this._openDormancyAdmission(t), this._authorityDormancyGeneration.delete(t), !0;
            this._closeDormancyAdmission(t);
            const a = this._instances.filter((o)=>o.getRemoteAuthority() === t && !o._isDisposed);
            return await Promise.all(a.map((o)=>o._suspendForDormancy())), this._authorityDormancyGeneration.get(t) === n && this._authoritiesDesiredDormant.add(t), !1;
        });
    }
    static isDormant(t) {
        return this._instances.some((n)=>n.getRemoteAuthority() === t && n._isDormant);
    }
    static hasServerSideReconnectionStateLoss(t) {
        const n = this._getPermanentFailureState(t)?.reason;
        return n === d9e || n === u9e;
    }
    static _abandonDormancyAfterServerStateLoss(t) {
        const n = this._recordDormancyIntent(t, !1);
        return this._queueDormancyOperation(t, async ()=>{
            if (this._authorityDormancyGeneration.get(t) === n) {
                for (const r of this._instances)r.getRemoteAuthority() === t && !r._isDisposed && (r._isDormant = !1);
                this._openDormancyAdmission(t), this._authoritiesDesiredDormant.delete(t), this._authorityDormancyGeneration.delete(t);
            }
        });
    }
    static getDormantQueueStats(t) {
        let n = 0, r = 0, s = 0;
        for (const i of this._instances){
            if (i.getRemoteAuthority() !== t || i._isDisposed || !i._isDormant) continue;
            n++;
            const a = i.protocol.getOutgoingQueueStats();
            r += a.messageCount, s += a.byteSize;
        }
        return {
            connections: n,
            queuedMessages: r,
            queuedBytes: s
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
        return this._permanentFailure || It._getPermanentFailureState(this.getRemoteAuthority()) !== void 0;
    }
    dispose() {
        this._isDisposed = !0, this._cancelActiveReconnectWork(), super.dispose();
    }
    cancelReconnect() {
        return this._reconnectPaused = !0, this._cancelActiveReconnectWork(), this._reconnectingPromise ?? Promise.resolve();
    }
    async retryNow() {
        if (this._isDormant || It._dormantAuthorities.has(this._remoteAuthority)) {
            if (this._permanentFailure = !1, It.clearPermanentFailure(this._remoteAuthority), !await It.resumeAllFromDormancy(this._remoteAuthority)) {
                if (It.hasServerSideReconnectionStateLoss(this._remoteAuthority)) {
                    await It._abandonDormancyAfterServerStateLoss(this._remoteAuthority);
                    return;
                }
                throw new Error(`Failed to resume all dormant connections for ${this._remoteAuthority}`);
            }
            return;
        }
        this._reconnectPaused && (await this._reconnectingPromise, this._reconnectPaused = !1), this._permanentFailure = !1, It.clearPermanentFailure(this.getRemoteAuthority()), await this._beginReconnecting();
    }
    async _suspendForDormancy() {
        if (this._isDisposed || this._isDormant || (this._isDormant = !0, this._reconnectPaused = !0, this._cancelActiveReconnectWork(), await this._reconnectingPromise, this._isDisposed || !this._isDormant)) return !1;
        this._reconnectPaused = !0;
        try {
            this.protocol.suspend();
        } catch (t) {
            return this._options.logService.error(`${im(this._connectionType, this.reconnectionToken, !0)} failed to suspend for dormancy. Error: ${as(t)}`), !1;
        }
        return this._options.logService.info(`${im(this._connectionType, this.reconnectionToken, !0)} suspended for dormancy; the pod lease for this connection is released until it resumes.`), !0;
    }
    async _resumeFromDormancy() {
        if (!this._isDormant) return !0;
        if (this._isDisposed || (this._reconnectPaused = !1, await this._reconnectingPromise, this._isDisposed)) return !1;
        let t = !1;
        this._dormancyResumeInFlight = !0, this._dormancyResumeSocketClosed = !1;
        const n = this.onDidStateChange((i)=>{
            i.type === 4 && (t = !0, this._isDormant = !1);
        });
        let r = !1;
        const s = setTimeout(()=>{
            r = !0, this._reconnectPaused = !0, this._cancelActiveReconnectWork();
        }, i9e);
        try {
            await this._beginReconnecting();
        } finally{
            clearTimeout(s), this._dormancyResumeInFlight = !1, n.dispose();
        }
        return t && !r;
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
        const n = new Jn;
        this._reconnectCancellation = n;
        const r = this._runReconnectingLoop(n.token).finally(()=>{
            this._reconnectCancellation === n && (this._reconnectCancellation = void 0), n.dispose(), this._reconnectingPromise === r && (this._reconnectingPromise = void 0, this._isReconnecting = !1);
            const s = this._reconnectAfterCurrent;
            this._reconnectAfterCurrent = !1, this._reconnectGainPublished = !1, s && !this._isDisposed && !this._isDormant && !this._reconnectPaused && this._beginReconnecting();
        });
        return this._reconnectingPromise = r, r;
    }
    _isBackgroundComposerConnection() {
        const t = this.getRemoteAuthority();
        return !!(t && Ia(t) !== void 0);
    }
    async _runReconnectingLoop(t) {
        if (this._isPermanentFailure || this._isDisposed || this._reconnectPaused) return;
        const n = im(this._connectionType, this.reconnectionToken, !0);
        this._options.logService.info(`${n} starting reconnecting loop. You can get more information with the trace log level.`), this._onDidStateChange.fire(new f9e(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData()));
        const r = [
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
        ], s = Date.now();
        let i = s, a = -1, o = 0;
        const l = this._isBackgroundComposerConnection();
        let d, u = It._systemPowerGeneration;
        const m = async (f)=>{
            if (!l || Z2e(f)) return "giveUp";
            const v = this._options.systemResumeGraceMs ?? a9e;
            return await this._waitForSystemPowerChange(u, v, t) ? (this._options.logService.info(`${n} The system resumed as this reconnect was giving up; retrying instead.`), d = Date.now(), a = -1, "retry") : this._shouldStopReconnect(t) ? "stop" : "giveUp";
        };
        do {
            a++;
            const f = d !== void 0 ? a === 0 ? 0 : o9e : a < r.length ? r[a] : r[r.length - 1];
            try {
                if (f > 0) {
                    const k = ult(f);
                    this._reconnectWait = k, this._onDidStateChange.fire(new _9e(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), f, k)), this._options.logService.info(`${n} waiting for ${f} seconds before reconnecting...`);
                    try {
                        await k;
                    } catch (y) {
                        if (!Cs(y)) throw y;
                    } finally{
                        this._reconnectWait === k && (this._reconnectWait = void 0);
                    }
                }
                if (l && It._systemSuspended && (this._options.logService.info(`${n} the system is suspended; reconnecting pauses until it resumes.`), await this._waitWhileSystemSuspended(n, t), this._options.logService.info(`${n} the system resumed; failures until the network answers do not count.`), d = Date.now(), a = 0), this._isDisposed || this._reconnectPaused) break;
                if (this._isPermanentFailure) {
                    this._options.logService.error(`${n} permanent failure occurred while running the reconnecting loop.`);
                    break;
                }
                u = It._systemPowerGeneration, this._onDidStateChange.fire(new v9e(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), a + 1)), this._options.logService.info(`${n} resolving connection...`);
                const v = await Q2e(this._options, this.reconnectionToken, this.protocol, t);
                if (this._shouldStopReconnect(t)) break;
                this._options.logService.info(`${n} connecting to ${v.connectTo}...`);
                const T = new Jn(t), S = setTimeout(()=>T.cancel(), this._options.reconnectTimeoutMs ?? s9e);
                try {
                    if (this._connectionType === 1 && It._debugReconnectPermanentFailureAuthorities.delete(this.getRemoteAuthority())) throw new ki("Simulated permanent reconnect failure (developer)", Xf.NotAvailable);
                    this._dormancyResumeInFlight && (this._dormancyResumeSocketClosed = !1), await this._reconnect(v, T.token);
                } finally{
                    clearTimeout(S), T.dispose();
                }
                if (this._shouldStopReconnect(t)) {
                    this._suspendProtocolAfterSupersededReconnect(n);
                    break;
                }
                if (this._isDormant && this._dormancyResumeSocketClosed) {
                    this._suspendProtocolAfterSupersededReconnect(n);
                    continue;
                }
                this._reconnectPaused = !1, this._options.logService.info(`${n} reconnected!`), this._reconnectGainPublished = !0, this._onDidStateChange.fire(new ex(this.reconnectionToken, this.protocol.getMillisSinceLastIncomingData(), a + 1));
                break;
            } catch (v) {
                if (this._isDormant && this._suspendProtocolAfterSupersededReconnect(n), this._shouldStopReconnect(t)) {
                    this._options.logService.info(`${n} reconnecting was canceled.`);
                    break;
                }
                if (v.code === "VSCODE_CONNECTION_ERROR") {
                    if (l && o < ZU && llt(this._connectionType, v)) {
                        o++, this._options.logService.info(`${n} The server rejected the handshake auth (${o}/${ZU}); the next attempt re-resolves the authority for a fresh connection token. Error: ${as(v)}`);
                        continue;
                    }
                    this._options.logService.error(`${n} A permanent error occurred in the reconnecting loop! Will give up now! Error: ${as(v)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), a + 1, !1, sm(v));
                    break;
                }
                if (l && !Z2e(v)) {
                    if (It._systemSuspended || u !== It._systemPowerGeneration) {
                        this._options.logService.info(`${n} This attempt spanned a system sleep, so it does not count; reconnecting resumes once the system is awake. Error: ${as(v)}`), d = Date.now(), a = -1;
                        continue;
                    }
                    if (d !== void 0) {
                        if (tlt(v) && Date.now() - d < c9e) {
                            this._options.logService.info(`${n} The network is not answering yet after a system sleep; retrying without counting it. Error: ${as(v)}`);
                            continue;
                        }
                        d = void 0, i = Date.now(), a = 0;
                    }
                }
                if (Date.now() - s > 108e5 && !l) {
                    this._options.logService.error(`${n} An error occurred while reconnecting, but it will be treated as a permanent error because the reconnection grace time has expired! Will give up now! Error: ${as(v)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), a + 1, !1, sm(v));
                    break;
                }
                if (ki.isTemporarilyNotAvailable(v) || QU(v)) {
                    if (l && e9e({
                        attempts: a + 1,
                        elapsedMs: Date.now() - i
                    })) {
                        const S = await m(v);
                        if (S === "retry") continue;
                        if (S === "stop") break;
                        this._options.logService.info(`${n} Cloud-agent transient reconnect budget exhausted; stopping automatic retries. Error: ${as(v)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), a + 1, !1, sm(v));
                        break;
                    }
                    this._options.logService.info(`${n} A temporarily not available error occurred while trying to reconnect, will try again...`), this._options.logService.trace(v);
                    continue;
                }
                if (v.code === YU) {
                    this._options.logService.info(`${n} No socket factory is registered right now, will try again...`), this._options.logService.trace(v);
                    continue;
                }
                if ((v.code === "ETIMEDOUT" || v.code === "ENETUNREACH" || v.code === "ECONNREFUSED" || v.code === "ECONNRESET") && v.syscall === "connect") {
                    this._options.logService.info(`${n} A network error occurred while trying to reconnect, will try again...`), this._options.logService.trace(v);
                    continue;
                }
                if (Cs(v)) {
                    this._options.logService.info(`${n} A promise cancelation error occurred while trying to reconnect, will try again...`), this._options.logService.trace(v);
                    continue;
                }
                if (v instanceof ki) {
                    const S = await m(v);
                    if (S === "retry") continue;
                    if (S === "stop") break;
                    this._options.logService.error(`${n} A RemoteAuthorityResolverError occurred while trying to reconnect. Will give up now! Error: ${as(v)}`), l && this._options.logService.info(`${n} A RemoteAuthorityResolverError occurred while trying to reconnect. For background composer, we should ideally try to reconnect, but we're not doing that for now...`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), a + 1, ki.isHandled(v), sm(v));
                    break;
                }
                if (this._options.logService.error(`${n} An unknown error occurred while trying to reconnect, since this is an unknown case, it will be treated as a permanent error! Will give up now! Error: ${as(v)}`), l) {
                    if (this._lastSocketCloseError && this._lastSocketCloseError.code === JU) {
                        this._options.logService.info(`${n} A transient cursor-socket close error occurred before reconnect, will try again...`), this._options.logService.trace(as(this._lastSocketCloseError));
                        continue;
                    }
                    if ("_code" in v && v._code === "TemporarilyNotAvailable" || "code" in v && v.code === "TemporarilyNotAvailable") {
                        if (e9e({
                            attempts: a + 1,
                            elapsedMs: Date.now() - i
                        })) {
                            const k = await m(v);
                            if (k === "retry") continue;
                            if (k === "stop") break;
                            this._options.logService.info(`${n} Cloud-agent transient reconnect budget exhausted; stopping automatic retries. Error: ${as(v)}`), this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), a + 1, !1, sm(v));
                            break;
                        }
                        this._options.logService.info(`${n} Temporarily not available error in background composer, will try again...`);
                        continue;
                    }
                    this._options.logService.info(`${n} An unknown error occurred while trying to reconnect. For background composer, we should ideally try to reconnect, but we're not doing that for now...`);
                    const S = await m(v);
                    if (S === "retry") continue;
                    if (S === "stop") break;
                }
                this._onReconnectionPermanentFailure(this.protocol.getMillisSinceLastIncomingData(), a + 1, !1, sm(v));
                break;
            }
        }while (!this._isPermanentFailure && !this._isDisposed && !this._reconnectPaused)
    }
    async _waitForSystemPowerChange(t, n, r) {
        if (It._systemPowerGeneration !== t) return !0;
        const s = new ve;
        try {
            const i = rT();
            return s.add(It._onDidChangeSystemPower.event(()=>i.resolve(!0))), s.add(r.onCancellationRequested(()=>i.resolve(!1))), s.add(Hn(()=>i.resolve(!1), n)), await i.promise;
        } finally{
            s.dispose();
        }
    }
    async _waitWhileSystemSuspended(t, n) {
        for(; It._systemSuspended && !n.isCancellationRequested;)!await this._waitForSystemPowerChange(It._systemPowerGeneration, l9e, n) && !n.isCancellationRequested && (this._options.logService.info(`${t} no system resume arrived; treating the system as awake.`), It.notifySystemResumed());
    }
    _shouldStopReconnect(t) {
        return t.isCancellationRequested || this._isDisposed || this._reconnectPaused || this._isPermanentFailure;
    }
    _suspendProtocolAfterSupersededReconnect(t) {
        try {
            this.protocol.suspend();
        } catch (n) {
            this._options.logService.error(`${t} failed to detach a superseded reconnect socket. Error: ${as(n)}`);
        }
    }
    _onReconnectionPermanentFailure(t, n, r, s) {
        this._reconnectionFailureIsFatal ? It.triggerPermanentFailure(this.getRemoteAuthority(), t, n, r, s) : this._gotoPermanentFailure(t, n, r, s);
    }
    _gotoPermanentFailure(t, n, r, s) {
        this._permanentFailure = !0, this._cancelActiveReconnectWork(), this._onDidStateChange.fire(new T9e(this.reconnectionToken, t, n, r, s)), this._options.keepSocketOnPermanentFailure !== !0 && t9e(this.protocol);
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
}, qs._debugReconnectPermanentFailureAuthorities = new Set, qs._dormancyOperationByAuthority = new Map, qs._dormantAuthorities = new Set, qs._authoritiesDesiredDormant = new Set, qs._authorityDormancyGeneration = new Map, qs._authorityWakeWaiters = new Map, qs._systemSuspended = !1, qs._systemPowerGeneration = 0, qs._onDidChangeSystemPower = new N, qs._permanentFailureByKey = new Map, qs._instances = [];

}
