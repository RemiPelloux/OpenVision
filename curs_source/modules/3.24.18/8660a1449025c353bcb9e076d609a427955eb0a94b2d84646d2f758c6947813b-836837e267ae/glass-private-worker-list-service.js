import { Ec, Gt, Qe, Vn, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { wmf } from "./Ycg.js";
import { Dc, jl } from "./aiService.js";
import { qn } from "./async.js";
import { GGa, YGa, pd, rWa, vEn } from "./background_composer_pb.js";
import { Rn } from "./extensions.js";
import { Nu, xc } from "./glass-storage-service.js";
import { iv, zo } from "./index_16.js";
import { It } from "./instantiation.js";
import { K10, V10, Y10 } from "./ofv.js";
import { GX } from "./private-worker-utils.js";
import { dv } from "./storage-keys.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var hCv, pCv, mCv, gCv, UFi, fCv, vCv, jFi, u2s;
export { UFi, fCv, gCv, hCv, jFi, mCv, pCv, u2s, vCv };
var __wakaru_d2s_initialized = false;
export function d2s() {
if (__wakaru_d2s_initialized) return;
__wakaru_d2s_initialized = true;
"use strict";
E(), iv(), pd(), qn(), Gt(), Qe(), Rn(), It(), Dc(), GX(), dv(), xc(), hCv = 50, pCv = 5e3, mCv = 4, gCv = 3e4, UFi = [], fCv = zo.object({
    key: zo.string(),
    value: zo.string()
}), vCv = zo.object({
    workerId: zo.string(),
    repoOwner: zo.string(),
    repoName: zo.string(),
    repoUrl: zo.string().optional(),
    workspaceRootPath: zo.string(),
    connectedAtMs: zo.number().optional(),
    displayName: zo.string().optional(),
    labels: zo.array(fCv).optional()
}), jFi = Il("glassPrivateWorkerListService"), u2s = class extends st {
    constructor(t, e){
        super(), this.aiService = t, this.storageService = e, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._isDisposed = !1, this._consumerCount = 0, this._retryAttempt = 0, this._loadToken = 0, this._loadRequestedWhileIdle = !1, this._retryTimeout = this._register(new Vn), this._releaseAbortControllers = new Map;
        const n = V10(this.storageService);
        this._snapshot = {
            workers: n,
            isLoading: !1,
            hasLoaded: n.length > 0
        };
    }
    dispose() {
        this._isDisposed = !0, this._cancelPendingLoad();
        for (const t of this._releaseAbortControllers.values())t.abort();
        this._releaseAbortControllers.clear(), super.dispose();
    }
    getSnapshot() {
        return this._snapshot;
    }
    acquire() {
        this._consumerCount += 1, (this._consumerCount === 1 || this._loadRequestedWhileIdle) && (this._loadRequestedWhileIdle = !1, this._startLoad());
        let t = !1;
        return {
            dispose: ()=>{
                t || (t = !0, this._consumerCount = Math.max(0, this._consumerCount - 1), this._consumerCount === 0 && (this._cancelPendingLoad(), this._retryAttempt = 0, this._setSnapshot({
                    workers: this._snapshot.workers,
                    isLoading: !1,
                    hasLoaded: this._snapshot.hasLoaded
                })));
            }
        };
    }
    refetch() {
        if (!this._isDisposed) {
            if (this._consumerCount === 0) {
                this._loadRequestedWhileIdle = !0;
                return;
            }
            this._startLoad();
        }
    }
    async releaseWorker({ workerId: t }) {
        this._releaseAbortControllers.get(t)?.abort();
        const e = new AbortController;
        this._releaseAbortControllers.set(t, e);
        try {
            await (await this.aiService.backgroundComposerClient()).releasePrivateWorker(new YGa({
                workerId: t
            }), {
                signal: e.signal
            }), this.refetch();
        } catch (n) {
            if (e.signal.aborted) return;
            throw n;
        } finally{
            this._releaseAbortControllers.get(t) === e && this._releaseAbortControllers.delete(t);
        }
    }
    _startLoad() {
        if (this._isDisposed) return;
        this._cancelPendingLoad(), this._retryAttempt = 0;
        const t = ++this._loadToken, e = new AbortController;
        this._loadAbortController = e, this._setSnapshot({
            workers: this._snapshot.workers,
            isLoading: !0,
            hasLoaded: this._snapshot.hasLoaded
        }), this._fetchWorkers(t, e.signal);
    }
    async _fetchWorkers(t, e) {
        try {
            const n = await this._listWorkers(e);
            if (e.aborted || t !== this._loadToken || this._consumerCount === 0) return;
            this._retryAttempt = 0, this._setSnapshot({
                workers: n,
                isLoading: !1,
                hasLoaded: !0
            });
            try {
                K10(this.storageService, n);
            } catch  {}
        } catch  {
            if (e.aborted || t !== this._loadToken || this._consumerCount === 0) return;
            if (this._retryAttempt >= mCv) {
                this._setSnapshot({
                    workers: this._snapshot.workers,
                    isLoading: !1,
                    hasLoaded: !0
                });
                return;
            }
            const n = Math.min(pCv * 2 ** this._retryAttempt, gCv), i = Math.round(n * (.5 + Math.random()));
            this._retryAttempt += 1, this._retryTimeout.value = Ec(()=>{
                this._fetchWorkers(t, e);
            }, i);
        }
    }
    async _listWorkers(t) {
        const n = await (await this.aiService.backgroundComposerClient()).listPrivateWorkers(new GGa({
            statusFilter: rWa.ALL,
            pageSize: hCv,
            listScope: vEn.PERSONAL
        }), {
            signal: t
        });
        return wmf(n.workers);
    }
    _cancelPendingLoad() {
        this._loadToken += 1, this._loadAbortController?.abort(), this._loadAbortController = void 0, this._retryTimeout.clear();
    }
    _setSnapshot(t) {
        Y10(this._snapshot, t) || (this._snapshot = t, this._onDidChange.fire(t));
    }
}, u2s = Re([
    F(0, jl),
    F(1, Nu)
], u2s), bn(jFi, u2s, 1, 1);

}
