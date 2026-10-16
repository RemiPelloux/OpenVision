import { Ec, Ei, Gt, Hc, Pn, Qe, Vn, Ya, da, st, tt, xr } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Dc, jl } from "./aiService.js";
import { c_, ype } from "./async.cursor.js";
import { df, qn } from "./async.js";
import { KGa, VGa, pd } from "./background_composer_pb.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Ag } from "./connectErrors.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Zu, eu } from "./glass-log-service.js";
import { It } from "./instantiation.js";
import { Uh, ip } from "./metricsService.js";
import { CrT, TrT, aC_, mC_, pC_, urT, wrT } from "./mm_.js";
import { U4s } from "./placement-grants-snapshot.js";
import { K_l, aps } from "./privateWorkerRestartService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { xCt } from "./yBp.js";
var gC_, fC_, vC_, _C_, bC_, yC_, SC_, kC_, _kc, H4s, wC_, bkc, CC_, TC_, EC_, W4s;
export { CC_, EC_, H4s, SC_, TC_, W4s, _C_, _kc, bC_, bkc, fC_, gC_, kC_, vC_, wC_, yC_ };
var __wakaru_IC__initialized = false;
export function IC_() {
if (__wakaru_IC__initialized) return;
__wakaru_IC__initialized = true;
"use strict";
E(), dp(), pd(), qn(), c_(), Ei(), Gt(), Qe(), Rn(), It(), K_l(), Dc(), ip(), Ag(), _s(), U4s(), Zu(), gC_ = 5e3, fC_ = 4, vC_ = 3e4, _C_ = 6e4, bC_ = 10 * 6e4, yC_ = 11e3, SC_ = "glass.projects.offline_worker_restart", kC_ = "glass.projects.offline_worker_restart.duration_ms", _kc = "worker:", H4s = {
    kind: "loading"
}, wC_ = {
    kind: "hidden"
}, bkc = Il("glassPlacementGrantsService"), CC_ = {
    kind: "inFlight"
}, TC_ = class extends st {
    constructor(t, e, n, i, r){
        super(), this.restartService = t, this.experimentService = e, this.logService = n, this.metricsService = i, this.acquiredProjects = r, this._asks = new Map, this._providerRegistrations = 0;
    }
    restartOfflineAllowedWorkers(t) {
        const e = Date.now(), n = mC_(t).filter((i)=>{
            const r = this._asks.get(i);
            return r === void 0 || r.kind !== "inFlight" && r.nextAttemptAt <= e;
        });
        if (!(n.length === 0 || !this.experimentService.checkFeatureGate("glass_projects_restart_offline_workers", {
            disableExposureLog: !1
        }))) {
            for (const i of n)this._asks.set(i, CC_);
            this._restart(n);
        }
    }
    onDidRegisterProvider() {
        this._providerRegistrations += 1;
        let t = !1;
        for (const [e, n] of this._asks)n.kind === "noOutcome" && (this._asks.delete(e), t = !0);
        t && this._refetchOpenProjectsWhileEnabled();
    }
    _isEnabled() {
        return this.experimentService.checkFeatureGate("glass_projects_restart_offline_workers", {
            disableExposureLog: !0
        });
    }
    _refetchOpenProjectsWhileEnabled() {
        if (this._isEnabled()) for (const t of this.acquiredProjects())t.refetch();
    }
    _refetchProjectsListingOffline(t) {
        Ec(()=>{
            if (this._isEnabled()) for (const e of this.acquiredProjects())mC_(e.snapshot).some((n)=>t.includes(n)) && e.refetch();
        }, yC_, this._store);
    }
    async _restart(t) {
        const e = this._providerRegistrations, n = Date.now(), i = await this.restartService.restartOfflineWorkers(t);
        if (this._store.isDisposed) return;
        const r = Date.now();
        this.logService.info(`[GlassPlacementGrantsService] restartOfflineWorkers took ${r - n} ms: ${i === void 0 ? "no outcome" : JSON.stringify(i)}`);
        for (const o of t)this.metricsService.increment({
            stat: SC_,
            tags: {
                outcome: TrT(i, o)
            }
        });
        if (this.metricsService.distribution({
            stat: kC_,
            value: r - n,
            tags: {
                result: i === void 0 ? "no_outcome" : "settled"
            }
        }), i === void 0 && this._providerRegistrations !== e) {
            for (const o of t)this._asks.delete(o);
            this._refetchOpenProjectsWhileEnabled();
            return;
        }
        for (const o of t){
            const a = i?.[o];
            this._asks.set(o, a === "started" || a === "already_running" ? {
                kind: "settled",
                nextAttemptAt: r + _C_
            } : {
                kind: i === void 0 ? "noOutcome" : "settled",
                nextAttemptAt: r + bC_
            });
        }
        const s = t.filter((o)=>i?.[o] === "started");
        s.length > 0 && this._refetchProjectsListingOffline(s);
    }
}, EC_ = class extends st {
    constructor(t, e, n, i, r){
        super(), this.projectRootId = t, this.aiService = e, this.logService = n, this.offlineWorkerRestarter = i, this.onDidPublish = r, this._server = H4s, this._published = H4s, this._fetch = this._register(new ype), this._refetchQueued = !1, this._appliedFetchCount = 0, this._writeAbortController = new AbortController, this._retryTimer = this._register(new Vn), this._retryAttempt = 0, this._consumers = 0;
    }
    get snapshot() {
        return this._published;
    }
    get acquired() {
        return this._consumers > 0;
    }
    dispose() {
        this._fetchAbortController?.abort(), this._writeAbortController.abort();
        const t = this._nextWrite;
        this._nextWrite = void 0, t?.result.error(new Hc), super.dispose();
    }
    acquire() {
        this._consumers += 1, this._consumers === 1 && (this._retryAttempt = 0, this._startFetch());
        let t = !1;
        return Pn(()=>{
            t || (t = !0, this._consumers -= 1, this._consumers === 0 && (this._cancelFetch(), this._retryTimer.clear(), this._retryAttempt = 0));
        });
    }
    refetch() {
        if (!(this._consumers === 0 || this._store.isDisposed || this._retryTimer.value !== void 0)) {
            if (this._fetch.isInFlight) {
                this._refetchQueued = !0;
                return;
            }
            this._startFetch();
        }
    }
    select(t) {
        const e = this._published;
        if (e.kind !== "ready" || this._store.isDisposed) return Promise.resolve();
        const n = new Set(t);
        let i;
        for (const r of e.rows){
            const s = n.has(r.id);
            s === r.allowed || s && !r.connected || (i === void 0 && (i = this._nextWrite ?? {
                targets: new Map,
                result: new df
            }, this._nextWrite = i), i.targets.set(r.id, s));
        }
        return i === void 0 ? Promise.resolve() : (this._publish(), this._flushWrite(), i.result.p);
    }
    _startFetch() {
        this._retryTimer.clear(), this._cancelFetch();
        const t = new AbortController;
        this._fetchAbortController = t, this._fetch.run(async (e)=>{
            try {
                const i = await (await this.aiService.backgroundComposerClient()).listPlacementGrants(new VGa({
                    bcId: this.projectRootId
                }), {
                    signal: t.signal
                });
                e.throwIfStale(), this._server = aC_(i.view), this._appliedFetchCount += 1, this._retryAttempt = 0, this._publish(), this.offlineWorkerRestarter.restartOfflineAllowedWorkers(this._published), this._refetchQueued && this._startFetch();
            } catch (n) {
                e.isCurrent() && this._handleFetchError(n);
            }
        }).catch((e)=>{
            Ya(e) || xr(e);
        });
    }
    _cancelFetch() {
        this._fetch.invalidate(), this._fetchAbortController?.abort(), this._fetchAbortController = void 0, this._refetchQueued = !1;
    }
    _handleFetchError(t) {
        if (this.logService.warn(`[GlassPlacementGrantsService] ListPlacementGrants failed: ${pC_(t)}`), Us.from(t).code === pr.Unimplemented) {
            this._server = wC_, this._publish();
            return;
        }
        if (this._consumers === 0) return;
        if (xCt(t) || this._retryAttempt >= fC_) {
            this._refetchQueued && this._startFetch();
            return;
        }
        const e = Math.round(Math.min(gC_ * 2 ** this._retryAttempt, vC_) * (.5 + Math.random()));
        this._retryAttempt += 1, this._retryTimer.value = Ec(()=>this._startFetch(), e);
    }
    _flushWrite() {
        const t = this._nextWrite;
        t === void 0 || this._inFlightWrite !== void 0 || (this._nextWrite = void 0, this._inFlightWrite = t, this._sendWrite(t));
    }
    async _sendWrite(t) {
        const e = [], n = [];
        for (const [r, s] of t.targets)(s ? e : n).push(urT(r));
        const i = this._appliedFetchCount;
        try {
            const s = await (await this.aiService.backgroundComposerClient()).updatePlacementGrants(new KGa({
                bcId: this.projectRootId,
                allow: e,
                revoke: n
            }), {
                signal: this._writeAbortController.signal
            });
            if (!this._store.isDisposed) {
                const o = this._fetch.isInFlight || this._appliedFetchCount !== i;
                this._cancelFetch(), this._server = aC_(s.view), o && this._consumers > 0 && this._startFetch();
            }
            t.result.complete();
        } catch (r) {
            this._store.isDisposed || (this.logService.warn(`[GlassPlacementGrantsService] UpdatePlacementGrants failed: ${pC_(r)}`), this._consumers > 0 && this._startFetch()), t.result.error(this._store.isDisposed ? new Hc : r);
        } finally{
            this._inFlightWrite = void 0, this._store.isDisposed || (this._publish(), this._flushWrite());
        }
    }
    _publish() {
        const t = new Map([
            ...this._inFlightWrite?.targets ?? [],
            ...this._nextWrite?.targets ?? []
        ]), e = CrT(this._server, t);
        wrT(this._published, e) || (this._published = e, this.onDidPublish());
    }
}, W4s = class extends st {
    constructor(t, e, n, i, r){
        super(), this.aiService = t, this.logService = e, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._projects = this._register(new da), this._offlineWorkerRestarter = this._register(new TC_(i, n, e, r, ()=>[
                ...this._projects.values()
            ].filter((s)=>s.acquired))), this._register(i.onDidRegisterProvider(()=>this._offlineWorkerRestarter.onDidRegisterProvider()));
    }
    getSnapshot(t) {
        return this._projects.get(t)?.snapshot ?? H4s;
    }
    acquire(t) {
        if (this._store.isDisposed) return st.None;
        let e = this._projects.get(t);
        return e === void 0 && (e = new EC_(t, this.aiService, this.logService, this._offlineWorkerRestarter, ()=>this._onDidChange.fire(t)), this._projects.set(t, e)), e.acquire();
    }
    refetch(t) {
        this._projects.get(t)?.refetch();
    }
    select(t, e) {
        return this._projects.get(t)?.select(e) ?? Promise.resolve();
    }
}, W4s = Re([
    F(0, jl),
    F(1, eu),
    F(2, Cr),
    F(3, aps),
    F(4, Uh)
], W4s), bn(bkc, W4s, 1, 1);

}
