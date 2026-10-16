import { Gt, Nt, Qe, Vn, st, tt } from "./Iwo.js";
import { KSg, khl, tTk } from "./Ycg.js";
import { c_, lie } from "./async.cursor.js";
import { e_t, qn } from "./async.js";
import { kl } from "./browser.ts";
import { jD, vRe } from "./canvas.js";
import { dMe } from "./cloudCanvas.js";
import { ms } from "./files.js";
import { Lr, Mc } from "./resources.js";
import { E } from "./tslib.es6.js";
var h9e, YSg, whl, Chl, XSg;
export { Chl, XSg, YSg, h9e, whl };
var __wakaru_IVt_initialized = false;
export function IVt() {
if (__wakaru_IVt_initialized) return;
__wakaru_IVt_initialized = true;
"use strict";
E(), kl(), qn(), c_(), Gt(), Qe(), Lr(), ms(), jD(), dMe(), h9e = {
    status: "loading"
}, YSg = 64 * 1024, whl = class extends Error {
}, Chl = class extends st {
    constructor({ focus: t, query: e, uriIdentityService: n, focusedIntervalMs: i = 2e3, unfocusedIntervalMs: r = 3e4, maxIntervalMs: s = 3e4, isCancellation: o, onStart: a, onStop: l, _testing: c }){
        super(), this._poller = this._register(new Vn), this._refreshThrottler = this._register(new e_t), this._refreshGeneration = 0, this._manualRefreshFailureCount = 0, this._manualRefreshBlockedUntil = 0, this._snapshot = h9e, this._started = !1, this._focusedIntervalMs = i, this._unfocusedIntervalMs = r, this._maxIntervalMs = s, this._isCancellation = o, this._onStart = a, this._onStop = l, this._now = c?.now ?? Date.now, this._onDidChange = this._register(new tt({
            onWillAddFirstListener: ()=>this.start(t, e),
            onDidRemoveLastListener: ()=>this.stop()
        })), this.onDidChange = this._onDidChange.event, this.uriIdentityService = n;
    }
    getSnapshot() {
        return this._snapshot;
    }
    requestRefresh() {
        if (!this._started || this._query === void 0 || this._now() < this._manualRefreshBlockedUntil) return;
        const t = this._refreshGeneration, e = this._query;
        this._refreshThrottler.queue(async ()=>{
            if (!(!this._started || t !== this._refreshGeneration || this._now() < this._manualRefreshBlockedUntil)) try {
                const n = KSg(await e(new AbortController().signal));
                if (!this._started || t !== this._refreshGeneration) return;
                n.shouldBackoff || n.snapshot.status === "unavailable" ? this.recordManualRefreshFailure() : this.resetManualRefreshBackoff(), this.publish(n.snapshot);
            } catch  {
                this._started && t === this._refreshGeneration && this.recordManualRefreshFailure();
            }
        }).catch(()=>{});
    }
    recordManualRefreshFailure() {
        this._manualRefreshFailureCount++;
        const t = Math.min(this._focusedIntervalMs * Math.pow(2, this._manualRefreshFailureCount - 1), this._maxIntervalMs);
        this._manualRefreshBlockedUntil = this._now() + t;
    }
    resetManualRefreshBackoff() {
        this._manualRefreshFailureCount = 0, this._manualRefreshBlockedUntil = 0;
    }
    start(t, e) {
        if (this._started) return;
        this._query = e, this._started = !0, this._snapshot.status !== "ready" && this.publish(h9e);
        const n = new lie(async (i)=>{
            const r = KSg(await e(i));
            if (i.throwIfAborted(), r.shouldBackoff) throw this._started && this.publish(r.snapshot), new whl;
            if (r.snapshot.status === "unavailable") throw new Error("Cloud Canvas index is unavailable.");
            this.resetManualRefreshBackoff(), this._started && !i.aborted && this.publish(r.snapshot);
        }, {
            focusedIntervalMs: this._focusedIntervalMs,
            unfocusedIntervalMs: this._unfocusedIntervalMs,
            maxIntervalMs: this._maxIntervalMs,
            focus: t,
            isCancellation: this._isCancellation,
            onTickError: (i)=>{
                this._started && !(i instanceof whl) && this.publish({
                    status: "unavailable"
                });
            }
        });
        this._poller.value = n, n.start(), this._onStart?.();
    }
    stop() {
        this._started = !1, this._refreshGeneration++, this.resetManualRefreshBackoff(), this._query = void 0, this._poller.clear(), this._onStop?.();
    }
    publish(t) {
        khl(this._snapshot, t, this.uriIdentityService) || (this._snapshot = t, this._onDidChange.fire(t));
    }
}, XSg = class extends st {
    constructor(t, e, n, i){
        super(), this.fileService = t, this.uriIdentityService = e, this.resolveDirectory = n, this.onDidInvalidateDirectory = i, this._activeResources = this._register(new Vn), this._directoryResources = this._register(new Vn), this._refreshThrottler = this._register(new e_t), this._snapshot = h9e, this._directoryInvalidationVersion = 0, this._directoryInvalidated = !0, this._started = !1, this._onDidChange = this._register(new tt({
            onWillAddFirstListener: ()=>this.start(),
            onDidRemoveLastListener: ()=>this.stop()
        })), this.onDidChange = this._onDidChange.event;
    }
    getSnapshot() {
        return this._snapshot;
    }
    start() {
        if (this._started) return;
        this._started = !0, this._snapshot.status !== "ready" && this.publish(h9e);
        const t = new Nt;
        t.add(this.onDidInvalidateDirectory(()=>{
            this._directoryInvalidated = !0, this._directoryInvalidationVersion++, this.publish(h9e), this.queueRefresh();
        })), this._activeResources.value = t, this.queueRefresh();
    }
    stop() {
        this._started = !1, this._directoryInvalidated = !0, this._directoryInvalidationVersion++, this._directory = void 0, this._directoryResources.clear(), this._activeResources.clear();
    }
    queueRefresh() {
        this._started && this._refreshThrottler.queue(()=>this.refresh()).catch(()=>{});
    }
    async refresh() {
        if (!this._started) return;
        const t = this._directoryInvalidationVersion;
        try {
            if (this._directoryInvalidated || this._directory === void 0) {
                const i = await this.resolveDirectory();
                if (!this._started || t !== this._directoryInvalidationVersion) return;
                this.bindDirectory(i), this._directoryInvalidated = !1;
            }
            const e = this._directory;
            if (e === void 0) return;
            const n = await tTk(this.fileService, e);
            this._started && t === this._directoryInvalidationVersion && this.publish(n);
        } catch  {
            this._started && t === this._directoryInvalidationVersion && this.publish({
                status: "unavailable"
            });
        }
    }
    bindDirectory(t) {
        if (this._directory !== void 0 && this.uriIdentityService.extUri.isEqual(this._directory, t)) return;
        const e = new Nt;
        try {
            const n = e.add(this.fileService.createWatcher(t, {
                recursive: !1,
                excludes: []
            }));
            e.add(n.onDidChange((i)=>{
                this.affectsIndex(i, t) && this.queueRefresh();
            }));
        } catch (n) {
            throw e.dispose(), n;
        }
        this._directory = t, this._directoryResources.value = e;
    }
    affectsIndex(t, e) {
        return t.contains(e, 1, 2) ? !0 : [
            ...t.rawAdded,
            ...t.rawUpdated,
            ...t.rawDeleted
        ].some((n)=>n.path.endsWith(vRe) && this.uriIdentityService.extUri.isEqual(Mc(n), e));
    }
    publish(t) {
        khl(this._snapshot, t, this.uriIdentityService) || (this._snapshot = t, this._onDidChange.fire(t));
    }
};

}
