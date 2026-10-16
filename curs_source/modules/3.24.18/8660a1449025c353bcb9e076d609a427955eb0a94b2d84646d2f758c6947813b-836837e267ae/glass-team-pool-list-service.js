import { flv, glv } from "./Asv.js";
import { Gt, Qe, Vh, Zm, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Dc, jl } from "./aiService.js";
import { bo } from "./arrays.js";
import { qn } from "./async.js";
import { Rn } from "./extensions.js";
import { Zu, eu } from "./glass-log-service.js";
import { hIs, i5i } from "./glass-private-worker-gating-service.js";
import { It } from "./instantiation.js";
import { fIs, mIs } from "./private-worker-pool-grouping.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var blv, ylv, vql, vIs;
export { blv, vIs, vql, ylv };
var __wakaru_ge0_initialized = false;
export function ge0() {
if (__wakaru_ge0_initialized) return;
__wakaru_ge0_initialized = true;
"use strict";
E(), bo(), qn(), Gt(), Qe(), Rn(), It(), Dc(), fIs(), hIs(), Zu(), blv = mIs, ylv = 5e3, vql = Il("glassTeamPoolListService"), vIs = class extends st {
    constructor(t, e, n){
        super(), this._aiService = t, this._privateWorkerGatingService = e, this._logService = n, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._snapshot = {
            destinations: [],
            hasLoaded: !1
        }, this._isFetching = !1, this._refreshRequestedWhileFetching = !1, this._register(this._privateWorkerGatingService.onDidChange((i)=>{
            if (i.selfHostedAvailable !== !0) {
                this._fetchAbortController?.abort(), this._fetchAbortController = void 0, this._lastSuccessMs = void 0, this._lastFailureMs = void 0, this._setSnapshot({
                    destinations: [],
                    hasLoaded: !1
                });
                return;
            }
            this.refreshIfStale();
        }));
    }
    dispose() {
        this._fetchAbortController?.abort(), this._fetchAbortController = void 0, super.dispose();
    }
    getSnapshot() {
        return this._snapshot;
    }
    async waitForInitialLoad() {
        if (this._store.isDisposed || this._snapshot.hasLoaded || this._privateWorkerGatingService.getSnapshot().selfHostedAvailable !== !0) return;
        this.refreshIfStale();
        const t = Date.now() + ylv;
        for(; !this._store.isDisposed && !this._snapshot.hasLoaded;){
            const e = this._pendingFetch;
            if (e === void 0) return;
            const n = t - Date.now();
            if (n <= 0) return;
            await Vh(e, n);
        }
    }
    refreshIfStale() {
        if (this._store.isDisposed) return;
        if (this._isFetching) {
            this._refreshRequestedWhileFetching = !0;
            return;
        }
        if (this._privateWorkerGatingService.getSnapshot().selfHostedAvailable !== !0 || this._lastSuccessMs !== void 0 && Date.now() - this._lastSuccessMs < mIs || this._lastFailureMs !== void 0 && Date.now() - this._lastFailureMs < blv) return;
        const t = new AbortController;
        this._fetchAbortController = t, this._isFetching = !0, this._pendingFetch = this._fetchDestinations(t.signal).then((e)=>{
            t.signal.aborted || this._store.isDisposed || (this._lastSuccessMs = Date.now(), this._lastFailureMs = void 0, this._setSnapshot({
                destinations: e,
                hasLoaded: !0
            }));
        }).catch((e)=>{
            !t.signal.aborted && !this._store.isDisposed && (this._lastFailureMs = Date.now(), this._logService.warn("[GlassTeamPoolListService] Team-pool discovery failed; retrying after cooldown.", e));
        }).finally(()=>{
            this._fetchAbortController === t && (this._fetchAbortController = void 0), this._isFetching = !1, this._pendingFetch = void 0, this._refreshRequestedWhileFetching && !this._store.isDisposed && (this._refreshRequestedWhileFetching = !1, this.refreshIfStale());
        });
    }
    async _fetchDestinations(t) {
        const e = await this._aiService.backgroundComposerClient(), n = await flv(e, {
            signal: t
        }), i = [];
        for (const r of glv(n))for (const s of r.pools)i.push({
            repoUrl: r.repoUrl,
            poolName: s.name
        });
        return i;
    }
    _setSnapshot(t) {
        this._snapshot.hasLoaded === t.hasLoaded && Zm(this._snapshot.destinations, t.destinations, (e, n)=>e.repoUrl === n.repoUrl && e.poolName === n.poolName) || (this._snapshot = t, this._onDidChange.fire(t));
    }
}, vIs = Re([
    F(0, jl),
    F(1, i5i),
    F(2, eu)
], vIs), bn(vql, vIs, 1, 1);

}
