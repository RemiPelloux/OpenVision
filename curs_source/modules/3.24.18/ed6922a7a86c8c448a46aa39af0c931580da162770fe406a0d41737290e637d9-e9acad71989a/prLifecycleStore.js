import { Hkt, mji, oL } from "./A3u.js";
import { Cl, He, Se, bt, po, ve, we } from "./HVr.js";
import { EJi, Y3n } from "./PullRequestRepositoryService.contract.js";
import { C, ie } from "./actions_2.js";
import { bn } from "./async.js";
import { zE } from "./cgh.js";
import { $Ih, HIh, WIh } from "./cloudAgentPrStatePoller.js";
import { Rs } from "./code_3.js";
import { Qo } from "./connect-error.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { pF } from "./githubUtils.js";
import { jIh, zIh } from "./glassPrOperationsPollingConfig.js";
import { Fl, rc } from "./host.js";
import { Ml } from "./index.ts";
import { Ze } from "./instantiation.js";
import { K3n, OCt } from "./microtaskBatcher.js";
import { MEh, PEh, Y1e, nJi } from "./prLifecycle.js";
import { Wt_, rAh } from "./prLifecycleIdbCache.js";
import { Hx, uT } from "./privateInferenceEnablementService.js";
import { D6 } from "./privateInferenceFeatures.js";
import { mn, pd, yh } from "./qIc.js";
import { Nbn } from "./scm-batch-limits.ts";
import { tAh } from "./scmRateLimit.js";
import { x } from "./tslib.es6.js";
function MCt(e) {
    if (e) switch(e.kind){
        case "none":
        case "loading":
            return;
        case "known":
        case "stale":
            return e.status;
        default:
            {
                const t = e;
                return;
            }
    }
}
function PJv(e, t) {
    return nJi[e] >= nJi[t];
}
function LJv(e) {
    return e === "merged";
}
function gTo(e) {
    return e?.kind === "known" && e.source === "scm" && LJv(e.status);
}
function tJi(e) {
    if (e.isMerged || e.state === "merged") return "merged";
    if (e.isClosed || e.state === "closed") return "closed";
    if (e.isDraft) return "draft";
    if (e.state === "open") return "open";
}
function OJv(e, t, n) {
    if (!((e?.kind === "known" && e.source === "scm" && e.status === "merged" || e?.kind === "stale" && e.status === "merged") && MCt(t) !== "merged")) {
        if (t.kind === "stale" && t.reason === "cache") {
            if (e !== void 0) return;
        } else if (e?.kind === "known" && e.source === "optimistic" && !(t.kind === "known" && t.source === "optimistic")) {
            const r = n - e.fetchedAt < PEh, s = t.kind === "known" || t.kind === "stale" ? t.status : void 0, o = s !== void 0 && PJv(s, e.status);
            if (r && !o) return;
        }
        if (!(e !== void 0 && yh(e, t))) return t;
    }
}
function Lt_(e) {
    if (e.focused) return e.backoffDelayMs;
    const t = e.baseIntervalMs * jIh;
    return Math.max(e.backoffDelayMs, t);
}
function Nt_(e) {
    const t = WIh(e);
    return e.rateLimitFloorMs === void 0 ? t : Math.max(t, e.rateLimitFloorMs);
}
function JIh(e) {
    return mji(e) || e instanceof Qo && e.code === Rs.Unavailable;
}
function eAh(e, t, n) {
    const i = Hkt(e, t) ?? n;
    return i === void 0 ? void 0 : t + i;
}
var Ftt, xJi;
export { Ftt, JIh, LJv, Lt_, MCt, Nt_, OJv, PJv, eAh, gTo, tJi, xJi };
var __wakaru_Pjt_initialized = false;
export function Pjt() {
if (__wakaru_Pjt_initialized) return;
__wakaru_Pjt_initialized = true;
"use strict";
x(), bt(), bn(), Se(), Ze(), Pn(), qs(), Y1e(), zIh(), Ml(), tAh(), Fl(), Hx(), D6(), pF(), K3n(), Wt_(), EJi(), Ftt = pd("prLifecycleStore"), xJi = class extends we {
    constructor(e, t, n, i){
        super(), this._pullRequestRepositoryService = e, this._experimentService = t, this._hostService = n, this._privateInferenceEnablementService = i, this._entries = new Map, this._pollUrlByKey = new Map, this._appliedUpdatedAtMsByKey = new Map, this._subscriberCounts = new Map, this._burstTimers = this._register(new po), this._firstFetchBatcher = this._register(new OCt((r)=>r, (r)=>{
            this._fetchBatch(r, {
                skipCache: !1
            });
        })), this._pollInFlight = !1, this._consecutivePollFailures = 0, this._onDidChangeLifecycle = this._register(new ve), this.onDidChangeLifecycle = this._onDidChangeLifecycle.event, this._idbCache = this._createIdbCache(), this._register(this._pullRequestRepositoryService.onDidApplyPullRequestMetadata(({ prUrl: r, metadata: s })=>this._ingestMetadata(r, s))), this._register(this._hostService.onDidChangeFocus((r)=>this._onDidChangeFocus(r))), this._hydrateFromCache();
    }
    _createIdbCache() {
        return new rAh;
    }
    dispose() {
        this._pollTimer !== void 0 && (clearTimeout(this._pollTimer), this._pollTimer = void 0, this._pollTimerFireAtMs = void 0), super.dispose();
    }
    getLifecycle(e) {
        return this._entries.get(zE(e)) ?? MEh;
    }
    _keyFor(e) {
        const t = zE(e);
        return t && !this._pollUrlByKey.has(t) && this._pollUrlByKey.set(t, e.trim()), t;
    }
    subscribe(e) {
        const t = this._keyFor(e);
        if (!t) return {
            dispose: ()=>{}
        };
        this._subscriberCounts.set(t, (this._subscriberCounts.get(t) ?? 0) + 1);
        const n = this._entries.get(t);
        (!n || n.kind !== "known") && this._firstFetchBatcher.schedule(t), this._ensurePollTimer();
        let i = !1;
        return {
            dispose: ()=>{
                if (i) return;
                i = !0;
                const r = this._subscriberCounts.get(t) ?? 0;
                r <= 1 ? this._subscriberCounts.delete(t) : this._subscriberCounts.set(t, r - 1);
            }
        };
    }
    refreshNow(e, t) {
        const n = this._keyFor(e);
        n && this._fetchBatch([
            n
        ], {
            skipCache: t?.skipCache === !0
        });
    }
    refreshUnmergedNow(e, t) {
        const n = new Set;
        for (const i of e){
            const r = this._keyFor(i);
            r && !gTo(this._entries.get(r)) && n.add(r);
        }
        this._fetchBatch([
            ...n
        ], {
            skipCache: t?.skipCache === !0
        });
    }
    startBurst(e, t) {
        const n = this._keyFor(e);
        if (!n || (this._cancelBurst(n), gTo(this._entries.get(n)))) return;
        const i = {
            skipCache: t?.skipCache === !0
        };
        this._fetchBatch([
            n
        ], i);
        const r = HIh(this._config().localAgentPrBurstBumpOffsetsMs), s = new He;
        for (const o of r)Cl(()=>void this._fetchBatch([
                n
            ], i), o, s);
        Cl(()=>this._burstTimers.deleteAndDispose(n), (r[r.length - 1] ?? 0) + 1e3, s), this._burstTimers.set(n, s);
    }
    applyOptimistic(e, t) {
        const n = this._keyFor(e);
        if (!n) return;
        const i = this._entries.get(n), r = i?.kind === "known" || i?.kind === "stale" ? i.title : void 0;
        this._apply(n, {
            kind: "known",
            status: t,
            title: r,
            fetchedAt: Date.now(),
            source: "optimistic"
        });
    }
    async prunePersistedCache() {
        await this._idbCache.clearAll();
        const e = [
            ...this._entries.keys()
        ];
        this._entries.clear(), this._appliedUpdatedAtMsByKey.clear();
        for (const t of e)this._onDidChangeLifecycle.fire(t);
    }
    _ingestMetadata(e, t) {
        this._ingestStatusSource(e, t, t.mergeStatusDegradedByRateLimit === !0, t.updatedAt);
    }
    _ingestStatus(e, t) {
        this._ingestStatusSource(e, t, t.degradedByRateLimit === !0, t.updatedAt);
    }
    _ingestStatusSource(e, t, n, i) {
        const r = this._keyFor(e);
        if (!r) return;
        const s = tJi(t);
        if (s === void 0) return;
        const o = this._entries.get(r), a = t.title?.trim() || (o?.kind === "known" || o?.kind === "stale" ? o.title : void 0), c = i !== void 0 ? Date.parse(i) : NaN, l = this._appliedUpdatedAtMsByKey.get(r);
        if (Number.isFinite(c) && l !== void 0 && c < l) return;
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
        this._apply(r, u) && Number.isFinite(c) && this._appliedUpdatedAtMsByKey.set(r, Math.max(l ?? c, c));
    }
    _apply(e, t) {
        const n = OJv(this._entries.get(e), t, Date.now());
        return n === void 0 ? !1 : (this._entries.set(e, n), n.kind === "known" && n.source === "scm" && this._idbCache.save({
            prUrl: this._pollUrlByKey.get(e) ?? e,
            status: n.status,
            fetchedAt: n.fetchedAt
        }).catch(()=>{}), this._onDidChangeLifecycle.fire(e), !0);
    }
    async _hydrateFromCache() {
        try {
            const e = await this._idbCache.loadAll();
            for (const t of e)this._apply(this._keyFor(t.prUrl), {
                kind: "stale",
                status: t.status,
                fetchedAt: t.fetchedAt,
                reason: "cache"
            });
        } catch  {}
    }
    _config() {
        return $Ih(this._experimentService);
    }
    _steadyPollIntervalMs() {
        return this._config().localAgentPrHeaderBatchPollIntervalMs;
    }
    _ensurePollTimer() {
        if (this._pollTimer !== void 0 || this._store.isDisposed) return;
        const e = this._currentPollDelayMs();
        this._pollTimerFireAtMs = Date.now() + e, this._pollTimer = setTimeout(()=>{
            this._pollTimer = void 0, this._pollTimerFireAtMs = void 0, this._pollTick();
        }, e);
    }
    _honorRateLimitFloorOnArmedTimer() {
        this._pollTimer === void 0 || this._pollTimerFireAtMs === void 0 || this._rateLimitFloorUntilMs === void 0 || this._rateLimitFloorUntilMs <= this._pollTimerFireAtMs || (clearTimeout(this._pollTimer), this._pollTimer = void 0, this._pollTimerFireAtMs = void 0, this._ensurePollTimer());
    }
    _currentPollDelayMs() {
        const e = this._config(), t = this._steadyPollIntervalMs(), n = Nt_({
            baseIntervalMs: t,
            consecutiveFailures: this._consecutivePollFailures,
            multiplier: e.cloudAgentPrErrorBackoffMultiplier,
            maxBackoffMs: e.cloudAgentPrStatePollMaxBackoffMs,
            rateLimitFloorMs: this._rateLimitFloorRemainingMs()
        });
        return Lt_({
            backoffDelayMs: n,
            baseIntervalMs: t,
            focused: this._hostService.hasFocus
        });
    }
    _onDidChangeFocus(e) {
        e && this._subscriberCounts.size !== 0 && (this._pollTimer !== void 0 && (clearTimeout(this._pollTimer), this._pollTimer = void 0), this._pollTick());
    }
    _rateLimitFloorRemainingMs() {
        if (this._rateLimitFloorUntilMs === void 0) return;
        const e = this._rateLimitFloorUntilMs - Date.now();
        if (e > 0) return e;
        this._rateLimitFloorUntilMs = void 0;
    }
    async _pollTick() {
        if (this._pollInFlight) {
            this._ensurePollTimer();
            return;
        }
        const e = [
            ...this._subscriberCounts.keys()
        ].filter((n)=>!gTo(this._entries.get(n)));
        if (e.length === 0) {
            this._subscriberCounts.size > 0 && this._ensurePollTimer();
            return;
        }
        this._pollInFlight = !0;
        const t = this._rateLimitFloorUntilMs;
        try {
            await this._fetchBatch(e, {
                skipCache: !1
            }) ? (this._consecutivePollFailures = 0, this._rateLimitFloorUntilMs === t && (this._rateLimitFloorUntilMs = void 0)) : this._consecutivePollFailures += 1;
        } finally{
            this._pollInFlight = !1, this._subscriberCounts.size > 0 && this._ensurePollTimer();
        }
    }
    async _fetchBatch(e, t) {
        if (e.length === 0 || !oL(this._privateInferenceEnablementService, "scm-integration")) return !0;
        let n = !0;
        for(let i = 0; i < e.length; i += Nbn){
            const r = e.slice(i, i + Nbn), s = r.map((o)=>this._pollUrlByKey.get(o) ?? o);
            try {
                const o = await this._pullRequestRepositoryService.getPullRequestStatusBatch(s, {
                    skipCache: t.skipCache,
                    callsite: "pr_status_poll"
                });
                for (const a of s){
                    const c = o.get(a);
                    c !== void 0 && this._ingestStatus(a, c);
                }
            } catch (o) {
                n = !1;
                const a = this._noteRateLimitFloor(o);
                for (const c of r){
                    const l = this._entries.get(c);
                    l?.kind === "known" && l.source === "scm" && this._apply(c, {
                        kind: "stale",
                        status: l.status,
                        title: l.title,
                        fetchedAt: l.fetchedAt,
                        reason: "fetch_error"
                    });
                }
                if (a) break;
            }
        }
        return n;
    }
    _noteRateLimitFloor(e) {
        if (!JIh(e)) return !1;
        const t = eAh(e, Date.now());
        return t === void 0 || (this._rateLimitFloorUntilMs = this._rateLimitFloorUntilMs === void 0 ? t : Math.max(this._rateLimitFloorUntilMs, t), this._honorRateLimitFloorOnArmedTimer()), !0;
    }
    _cancelBurst(e) {
        this._burstTimers.deleteAndDispose(e);
    }
}, xJi = ie([
    C(0, Y3n),
    C(1, Kr),
    C(2, rc),
    C(3, uT)
], xJi), mn(Ftt, xJi, 1, 1);

}
