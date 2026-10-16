import { Zp } from "./Aeg.js";
import { Ec, Gt, Nt, Qe, da, st, tt } from "./Iwo.js";
import { n9e, zze } from "./PullRequestRepositoryService.contract.js";
import { Il, bn } from "./SZu.js";
import { ASk, Scl, Tat, Ufg, akk, jfg, las, lkk, lul } from "./Ycg.js";
import { qn } from "./async.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { XS } from "./githubUtils.js";
import { uas } from "./glassPrOperationsPollingConfig.js";
import { Od, Tc } from "./host.js";
import { nl } from "./index.ts";
import { It } from "./instantiation.js";
import { CIi, dVt } from "./microtaskBatcher.js";
import { Qpg, sU } from "./prLifecycle.js";
import { Gfg, gkk } from "./prLifecycleIdbCache.js";
import { EE, mT } from "./privateInferenceEnablementService.js";
import { PB } from "./privateInferenceFeatures.js";
import { oQn } from "./scm-batch-limits.ts";
import { $fg } from "./scmRateLimit.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { aN } from "./yBp.js";
var ome, das;
export { das, ome };
var __wakaru_sMe_initialized = false;
export function sMe() {
if (__wakaru_sMe_initialized) return;
__wakaru_sMe_initialized = true;
"use strict";
E(), Gt(), qn(), Qe(), It(), Rn(), _s(), sU(), uas(), nl(), $fg(), Od(), EE(), PB(), XS(), CIi(), gkk(), zze(), ome = Il("prLifecycleStore"), das = class extends st {
    constructor(t, e, n, i){
        super(), this._pullRequestRepositoryService = t, this._experimentService = e, this._hostService = n, this._privateInferenceEnablementService = i, this._entries = new Map, this._pollUrlByKey = new Map, this._appliedUpdatedAtMsByKey = new Map, this._subscriberCounts = new Map, this._burstTimers = this._register(new da), this._firstFetchBatcher = this._register(new dVt((r)=>r, (r)=>{
            this._fetchBatch(r, {
                skipCache: !1
            });
        })), this._pollInFlight = !1, this._consecutivePollFailures = 0, this._onDidChangeLifecycle = this._register(new tt), this.onDidChangeLifecycle = this._onDidChangeLifecycle.event, this._idbCache = this._createIdbCache(), this._register(this._pullRequestRepositoryService.onDidApplyPullRequestMetadata(({ prUrl: r, metadata: s })=>this._ingestMetadata(r, s))), this._register(this._hostService.onDidChangeFocus((r)=>this._onDidChangeFocus(r))), this._hydrateFromCache();
    }
    _createIdbCache() {
        return new Gfg;
    }
    dispose() {
        this._pollTimer !== void 0 && (clearTimeout(this._pollTimer), this._pollTimer = void 0, this._pollTimerFireAtMs = void 0), super.dispose();
    }
    getLifecycle(t) {
        return this._entries.get(Zp(t)) ?? Qpg;
    }
    _keyFor(t) {
        const e = Zp(t);
        return e && !this._pollUrlByKey.has(e) && this._pollUrlByKey.set(e, t.trim()), e;
    }
    subscribe(t) {
        const e = this._keyFor(t);
        if (!e) return {
            dispose: ()=>{}
        };
        this._subscriberCounts.set(e, (this._subscriberCounts.get(e) ?? 0) + 1);
        const n = this._entries.get(e);
        (!n || n.kind !== "known") && this._firstFetchBatcher.schedule(e), this._ensurePollTimer();
        let i = !1;
        return {
            dispose: ()=>{
                if (i) return;
                i = !0;
                const r = this._subscriberCounts.get(e) ?? 0;
                r <= 1 ? this._subscriberCounts.delete(e) : this._subscriberCounts.set(e, r - 1);
            }
        };
    }
    refreshNow(t, e) {
        const n = this._keyFor(t);
        n && this._fetchBatch([
            n
        ], {
            skipCache: e?.skipCache === !0
        });
    }
    refreshUnmergedNow(t, e) {
        const n = new Set;
        for (const i of t){
            const r = this._keyFor(i);
            r && !Scl(this._entries.get(r)) && n.add(r);
        }
        this._fetchBatch([
            ...n
        ], {
            skipCache: e?.skipCache === !0
        });
    }
    startBurst(t, e) {
        const n = this._keyFor(t);
        if (!n || (this._cancelBurst(n), Scl(this._entries.get(n)))) return;
        const i = {
            skipCache: e?.skipCache === !0
        };
        this._fetchBatch([
            n
        ], i);
        const r = lul(this._config().localAgentPrBurstBumpOffsetsMs), s = new Nt;
        for (const o of r)Ec(()=>void this._fetchBatch([
                n
            ], i), o, s);
        Ec(()=>this._burstTimers.deleteAndDispose(n), (r[r.length - 1] ?? 0) + 1e3, s), this._burstTimers.set(n, s);
    }
    applyOptimistic(t, e) {
        const n = this._keyFor(t);
        if (!n) return;
        const i = this._entries.get(n), r = i?.kind === "known" || i?.kind === "stale" ? i.title : void 0;
        this._apply(n, {
            kind: "known",
            status: e,
            title: r,
            fetchedAt: Date.now(),
            source: "optimistic"
        });
    }
    async prunePersistedCache() {
        await this._idbCache.clearAll();
        const t = [
            ...this._entries.keys()
        ];
        this._entries.clear(), this._appliedUpdatedAtMsByKey.clear();
        for (const e of t)this._onDidChangeLifecycle.fire(e);
    }
    _ingestMetadata(t, e) {
        this._ingestStatusSource(t, e, e.mergeStatusDegradedByRateLimit === !0, e.updatedAt);
    }
    _ingestStatus(t, e) {
        this._ingestStatusSource(t, e, e.degradedByRateLimit === !0, e.updatedAt);
    }
    _ingestStatusSource(t, e, n, i) {
        const r = this._keyFor(t);
        if (!r) return;
        const s = Tat(e);
        if (s === void 0) return;
        const o = this._entries.get(r), a = e.title?.trim() || (o?.kind === "known" || o?.kind === "stale" ? o.title : void 0), l = i !== void 0 ? Date.parse(i) : NaN, c = this._appliedUpdatedAtMsByKey.get(r);
        if (Number.isFinite(l) && c !== void 0 && l < c) return;
        const u = n ? {
            kind: "stale",
            status: s,
            title: a,
            fetchedAt: Date.now(),
            reason: "rate_limited"
        } : {
            kind: "known",
            status: s,
            title: a,
            fetchedAt: Date.now(),
            source: "scm"
        };
        this._apply(r, u) && Number.isFinite(l) && this._appliedUpdatedAtMsByKey.set(r, Math.max(c ?? l, l));
    }
    _apply(t, e) {
        const n = ASk(this._entries.get(t), e, Date.now());
        return n === void 0 ? !1 : (this._entries.set(t, n), n.kind === "known" && n.source === "scm" && this._idbCache.save({
            prUrl: this._pollUrlByKey.get(t) ?? t,
            status: n.status,
            fetchedAt: n.fetchedAt
        }).catch(()=>{}), this._onDidChangeLifecycle.fire(t), !0);
    }
    async _hydrateFromCache() {
        try {
            const t = await this._idbCache.loadAll();
            for (const e of t)this._apply(this._keyFor(e.prUrl), {
                kind: "stale",
                status: e.status,
                fetchedAt: e.fetchedAt,
                reason: "cache"
            });
        } catch  {}
    }
    _config() {
        return las(this._experimentService);
    }
    _steadyPollIntervalMs() {
        return this._config().localAgentPrHeaderBatchPollIntervalMs;
    }
    _ensurePollTimer() {
        if (this._pollTimer !== void 0 || this._store.isDisposed) return;
        const t = this._currentPollDelayMs();
        this._pollTimerFireAtMs = Date.now() + t, this._pollTimer = setTimeout(()=>{
            this._pollTimer = void 0, this._pollTimerFireAtMs = void 0, this._pollTick();
        }, t);
    }
    _honorRateLimitFloorOnArmedTimer() {
        this._pollTimer === void 0 || this._pollTimerFireAtMs === void 0 || this._rateLimitFloorUntilMs === void 0 || this._rateLimitFloorUntilMs <= this._pollTimerFireAtMs || (clearTimeout(this._pollTimer), this._pollTimer = void 0, this._pollTimerFireAtMs = void 0, this._ensurePollTimer());
    }
    _currentPollDelayMs() {
        const t = this._config(), e = this._steadyPollIntervalMs(), n = lkk({
            baseIntervalMs: e,
            consecutiveFailures: this._consecutivePollFailures,
            multiplier: t.cloudAgentPrErrorBackoffMultiplier,
            maxBackoffMs: t.cloudAgentPrStatePollMaxBackoffMs,
            rateLimitFloorMs: this._rateLimitFloorRemainingMs()
        });
        return akk({
            backoffDelayMs: n,
            baseIntervalMs: e,
            focused: this._hostService.hasFocus
        });
    }
    _onDidChangeFocus(t) {
        t && this._subscriberCounts.size !== 0 && (this._pollTimer !== void 0 && (clearTimeout(this._pollTimer), this._pollTimer = void 0), this._pollTick());
    }
    _rateLimitFloorRemainingMs() {
        if (this._rateLimitFloorUntilMs === void 0) return;
        const t = this._rateLimitFloorUntilMs - Date.now();
        if (t > 0) return t;
        this._rateLimitFloorUntilMs = void 0;
    }
    async _pollTick() {
        if (this._pollInFlight) {
            this._ensurePollTimer();
            return;
        }
        const t = [
            ...this._subscriberCounts.keys()
        ].filter((n)=>!Scl(this._entries.get(n)));
        if (t.length === 0) {
            this._subscriberCounts.size > 0 && this._ensurePollTimer();
            return;
        }
        this._pollInFlight = !0;
        const e = this._rateLimitFloorUntilMs;
        try {
            await this._fetchBatch(t, {
                skipCache: !1
            }) ? (this._consecutivePollFailures = 0, this._rateLimitFloorUntilMs === e && (this._rateLimitFloorUntilMs = void 0)) : this._consecutivePollFailures += 1;
        } finally{
            this._pollInFlight = !1, this._subscriberCounts.size > 0 && this._ensurePollTimer();
        }
    }
    async _fetchBatch(t, e) {
        if (t.length === 0 || !aN(this._privateInferenceEnablementService, "scm-integration")) return !0;
        let n = !0;
        for(let i = 0; i < t.length; i += oQn){
            const r = t.slice(i, i + oQn), s = r.map((o)=>this._pollUrlByKey.get(o) ?? o);
            try {
                const o = await this._pullRequestRepositoryService.getPullRequestStatusBatch(s, {
                    skipCache: e.skipCache,
                    callsite: "pr_status_poll"
                });
                for (const a of s){
                    const l = o.get(a);
                    l !== void 0 && this._ingestStatus(a, l);
                }
            } catch (o) {
                n = !1;
                const a = this._noteRateLimitFloor(o);
                for (const l of r){
                    const c = this._entries.get(l);
                    c?.kind === "known" && c.source === "scm" && this._apply(l, {
                        kind: "stale",
                        status: c.status,
                        title: c.title,
                        fetchedAt: c.fetchedAt,
                        reason: "fetch_error"
                    });
                }
                if (a) break;
            }
        }
        return n;
    }
    _noteRateLimitFloor(t) {
        if (!Ufg(t)) return !1;
        const e = jfg(t, Date.now());
        return e === void 0 || (this._rateLimitFloorUntilMs = this._rateLimitFloorUntilMs === void 0 ? e : Math.max(this._rateLimitFloorUntilMs, e), this._honorRateLimitFloorOnArmedTimer()), !0;
    }
    _cancelBurst(t) {
        this._burstTimers.deleteAndDispose(t);
    }
}, das = Re([
    F(0, n9e),
    F(1, Cr),
    F(2, Tc),
    F(3, mT)
], das), bn(ome, das, 1, 1);

}
