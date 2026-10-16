import { BWt, Odo, ket } from "./A3u.js";
import { Cl, Rl, Se, bt, ja, po, rn, si, ve, we } from "./HVr.js";
import { Z4e, ZMe, ub } from "./async.cursor.js";
import { bn } from "./async.js";
import { dPe, go, hm } from "./background_composer_pb.js";
import { bji } from "./cloudAgentRateLimitBackoff.js";
import { Rs } from "./code_3.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { TN } from "./connectErrors.js";
import { Ml } from "./index.ts";
import { Omt } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
function ei_(e) {
    switch(e){
        case dPe.CREATED:
        case dPe.ADOPTED:
            return "new_vm";
        case dPe.CREATED_SAME_VM:
            return "same_vm";
        default:
            return;
    }
}
function hEo() {
    return {
        latestObservationSequence: 0,
        serverWorkerIds: [],
        additionsByWorkerId: new Map,
        removalsByWorkerId: new Map,
        latestSnapshotComplete: void 0,
        serverPlacementByWorkerId: Fjt
    };
}
function ti_(e, t) {
    const n = t.trim();
    if (!n) return e;
    const i = e.latestObservationSequence + 1, r = new Map(e.additionsByWorkerId);
    return r.set(n, {
        sequence: i,
        status: "pending"
    }), {
        ...e,
        latestObservationSequence: i,
        additionsByWorkerId: r
    };
}
function ni_(e, t, n) {
    const i = e.additionsByWorkerId.get(t);
    if (!i) return e;
    const r = new Map(e.additionsByWorkerId);
    return n === "failed" ? r.delete(t) : r.set(t, {
        ...i,
        status: "settled"
    }), {
        ...e,
        additionsByWorkerId: r
    };
}
function ii_(e, t) {
    const n = t.trim();
    if (!n) return e;
    const i = e.latestObservationSequence + 1, r = new Map(e.additionsByWorkerId);
    r.delete(n);
    const s = new Map(e.removalsByWorkerId);
    return s.set(n, {
        sequence: i,
        status: "pending"
    }), {
        ...e,
        latestObservationSequence: i,
        additionsByWorkerId: r,
        removalsByWorkerId: s
    };
}
function ri_(e, t, n) {
    const i = e.removalsByWorkerId.get(t);
    if (!i) return e;
    const r = new Map(e.removalsByWorkerId);
    return n === "failed" ? r.delete(t) : r.set(t, {
        ...i,
        status: "settled"
    }), {
        ...e,
        removalsByWorkerId: r
    };
}
function si_(e, t, n) {
    const i = n.length < cRh, r = pEo(n.map((u)=>u.workerBcId)), s = i ? r : pEo([
        ...e.serverWorkerIds,
        ...r
    ]), o = new Set(s), a = new Map(i ? void 0 : e.serverPlacementByWorkerId);
    for (const u of n){
        const h = u.workerBcId.trim(), p = ei_(u.spawnKind);
        !h || p === void 0 || a.set(h, p);
    }
    for (const u of a.keys())o.has(u) || a.delete(u);
    const c = new Map(e.additionsByWorkerId);
    for (const [u, h] of c)!(h.sequence <= t) || h.status === "pending" || (i || o.has(u)) && c.delete(u);
    const l = new Map(e.removalsByWorkerId);
    for (const [u, h] of l)!(h.sequence <= t) || h.status === "pending" || o.has(u) || l.delete(u);
    return {
        ...e,
        serverWorkerIds: s,
        additionsByWorkerId: c,
        removalsByWorkerId: l,
        latestSnapshotComplete: i,
        serverPlacementByWorkerId: a
    };
}
function oRh(e) {
    return pEo([
        ...e.serverWorkerIds,
        ...e.additionsByWorkerId.keys()
    ]).filter((t)=>!e.removalsByWorkerId.has(t));
}
function oi_(e) {
    let t = vEo.get(e);
    return t || (t = new Set(oRh(e)), vEo.set(e, t)), t;
}
function aRh(e, t) {
    return e.length === t.length && e.every((n, i)=>n === t[i]);
}
function ai_(e, t) {
    const n = new Set(e.workerIds), i = new Set(t.workerIds), r = new Set(e.optimisticWorkerIds), s = new Set(t.optimisticWorkerIds), o = e.placementByWorkerId ?? Fjt, a = t.placementByWorkerId ?? Fjt;
    return [
        ...new Set([
            ...n,
            ...i,
            ...r,
            ...s,
            ...o.keys(),
            ...a.keys()
        ])
    ].filter((l)=>n.has(l) !== i.has(l) || r.has(l) !== s.has(l) || o.get(l) !== a.get(l));
}
function ci_(e, t) {
    if (e === t) return !0;
    if (e.size !== t.size) return !1;
    for (const [n, i] of e)if (t.get(n) !== i) return !1;
    return !0;
}
function pEo(e) {
    const t = [], n = new Set;
    for (const i of e){
        const r = i.trim();
        !r || n.has(r) || (n.add(r), t.push(r));
    }
    return t;
}
function li_(e, t) {
    return e.suspended ? "suspended" : e.currentAttempt !== void 0 ? e.currentAttempt.permitAcquiredAtMs === void 0 ? "waiting-for-permit" : "in-flight" : t < e.nextRetryAtMs ? "backoff" : "not-refreshing";
}
function ui_(e) {
    if (e.subscriberCount > 0) return !0;
    for (const t of [
        e.reconciler.additionsByWorkerId,
        e.reconciler.removalsByWorkerId
    ])for (const n of t.values())if (n.status === "pending") return !0;
    return !1;
}
var cRh, mEo, gEo, lRh, fEo, uRh, dRh, hRh, pRh, mRh, gRh, Fjt, J3n, vEo, fRh, vRh;
export { Fjt, J3n, aRh, ai_, cRh, ci_, dRh, ei_, fEo, fRh, gEo, gRh, hEo, hRh, ii_, lRh, li_, mEo, mRh, ni_, oRh, oi_, pEo, pRh, ri_, si_, ti_, uRh, ui_, vEo, vRh };
var __wakaru__Rh_initialized = false;
export function _Rh() {
if (__wakaru__Rh_initialized) return;
__wakaru__Rh_initialized = true;
"use strict";
x(), Ml(), hg(), bn(), ub(), si(), bt(), Se(), Js(), hm(), TN(), bji(), cRh = 1e3, mEo = 20, gEo = 1e4, lRh = 3e4, fEo = 5 * 6e4, uRh = 2 * gEo, dRh = 1e3, hRh = 2 * fEo, pRh = 30 * 6e4, mRh = 10, gRh = Symbol("membership-only-hydration"), Fjt = new Map, J3n = {
    resolution: "pending",
    workerIds: [],
    optimisticWorkerIds: [],
    placementByWorkerId: Fjt
}, vEo = new WeakMap, fRh = class extends we {
    constructor(e){
        super(), this.managerBcId = e, this.flight = this._register(new ZMe), this.changeEmitter = this._register(new ve), this.onDidChange = this.changeEmitter.event, this.reconciler = hEo(), this.membershipSnapshot = J3n, this.hydrationFingerprintByWorkerId = new Map, this.subscriberCount = 0, this.refreshQueued = !1, this.failures = 0, this.nextRetryAtMs = 0, this.suspended = !1, this.lastAccessedAtMs = Date.now(), this.lastFetchCompletedAtMs = 0, this.subscribedAtMs = 0, this.stallReportedAtMs = 0;
    }
    fireDidChange() {
        this.changeEmitter.fire();
    }
    dispose() {
        this.abortController?.abort(), super.dispose();
    }
}, vRh = class extends we {
    constructor(e, t, n){
        super(), this.listScope = e, this.structuredLogService = t, this.options = n, this.entries = this._register(new po), this.dispatchRefreshes = this._register(new po), this.requestSemaphore = new Z4e(4), this.activeAttempts = new Set;
    }
    getSnapshot(e) {
        if (!this.options.isEnabled()) return J3n;
        const t = this.entries.get(e);
        return t ? (t.lastAccessedAtMs = Date.now(), t.membershipSnapshot) : J3n;
    }
    getManagerIds(e) {
        if (!this.options.isEnabled()) return [];
        const t = [];
        for (const [n, i] of this.entries)i.membershipSnapshot.workerIds.includes(e) && t.push(n);
        return t;
    }
    subscribe(e, t) {
        const n = this.getOrCreateEntry(e), i = n.subscriberCount++ === 0, r = n.onDidChange(t);
        return i && (n.subscribedAtMs = Date.now(), n.stallReportedAtMs = 0, this.refresh(e, "initial")), rn(()=>{
            r.dispose(), n.subscriberCount = Math.max(0, n.subscriberCount - 1), n.lastAccessedAtMs = Date.now(), n.subscriberCount === 0 && (n.subscribedAtMs = 0, n.abortController?.abort(), n.abortController = void 0, n.flight.invalidate(), n.refreshQueued = !1, this.prune());
        });
    }
    refreshSubscribed(e) {
        e === "poll" && this.reportStalledSubscriptions();
        for (const [t, n] of this.entries)n.subscriberCount > 0 && this.refresh(t, e);
    }
    requestDispatchRefresh(e) {
        const t = this.entries.get(e);
        !this.options.isEnabled() || t === void 0 || t.subscriberCount === 0 || this.dispatchRefreshes.has(e) || this.dispatchRefreshes.set(e, Cl(()=>{
            this.dispatchRefreshes.deleteAndDispose(e), (this.entries.get(e)?.subscriberCount ?? 0) > 0 && this.refresh(e, "dispatch");
        }, dRh));
    }
    reconnect() {
        for (const e of this.entries.values())e.abortController?.abort(), e.flight.invalidate();
        this.refreshSubscribed("reconnect");
    }
    recordAdd(e, t) {
        if (!this.options.isEnabled()) return;
        const n = this.getOrCreateEntry(e);
        n.suspended = !1, n.nextRetryAtMs = 0, n.reconciler = ti_(n.reconciler, t), this.publishSnapshot(n);
    }
    settleAdd(e, t, n, i) {
        const r = this.entries.get(e);
        r && (r.reconciler = ni_(r.reconciler, t, n), this.publishSnapshot(r), n === "succeeded" && r.subscriberCount > 0 && this.refresh(e, i));
    }
    recordRemove(e, t) {
        if (!this.options.isEnabled()) return;
        const n = this.entries.get(e);
        n && (n.reconciler = ii_(n.reconciler, t), this.publishSnapshot(n));
    }
    settleRemove(e, t, n) {
        const i = this.entries.get(e);
        i && (i.reconciler = ri_(i.reconciler, t, n), this.publishSnapshot(i), n === "succeeded" && i.subscriberCount > 0 && this.refresh(e, "unparent"));
    }
    reset(e) {
        const t = [
            ...this.entries.values()
        ].filter((i)=>i.subscriberCount > 0);
        t.length > 0 && (this.structuredLogService.warn("background_composer", "Project worker membership reset", {
            reason: e,
            subscribedCount: t.length,
            resolvedCount: t.filter((i)=>i.membershipSnapshot.resolution === "resolved").length
        }), this.options.incrementMetric?.({
            stat: "glass.project_worker_membership.reset",
            tags: {
                reason: e
            }
        })), this.options.clearWorkerStatusSeeds(), this.dispatchRefreshes.clearAndDisposeAll();
        const n = Date.now();
        for (const i of this.entries.values())i.abortController?.abort(), i.abortController = void 0, i.flight.invalidate(), i.refreshQueued = !1, i.failures = 0, i.nextRetryAtMs = 0, i.suspended = !1, i.lastFetchCompletedAtMs = 0, i.subscribedAtMs = i.subscriberCount > 0 ? n : 0, i.lastOutcome = void 0, i.lastErrorCode = void 0, i.stallReportedAtMs = 0, i.reconciler = hEo(), i.hydrationFingerprintByWorkerId.clear(), this.publishSnapshot(i);
    }
    isAuthoritativeMember(e, t) {
        const n = this.entries.get(e);
        if (!n || n.reconciler.latestSnapshotComplete === void 0) return;
        const i = oi_(n.reconciler).has(t);
        if (!(!n.reconciler.latestSnapshotComplete && !i)) return i;
    }
    async refresh(e, t) {
        if (!this.options.isEnabled()) return;
        const n = this.getOrCreateEntry(e);
        if (!(n.suspended || Date.now() < n.nextRetryAtMs) && !(t === "poll" && n.lastFetchCompletedAtMs !== 0 && Date.now() - n.lastFetchCompletedAtMs < this.options.getMinPollIntervalMs())) {
            if (n.flight.isInFlight) {
                t !== "poll" && (n.refreshQueued = !0);
                return;
            }
            try {
                await n.flight.run(async (i)=>{
                    const r = zn(), s = this.listScope.captureScope(), o = n.reconciler.latestObservationSequence, a = new AbortController;
                    n.abortController?.abort(), n.abortController = a;
                    const c = {
                        queuedAtMs: Date.now(),
                        permitAcquiredAtMs: void 0
                    };
                    n.currentAttempt = c, this.activeAttempts.add(c);
                    try {
                        const l = await this.requestSemaphore.withSemaphore(()=>(c.permitAcquiredAtMs = Date.now(), this.options.fetchWorkers(e, AbortSignal.any([
                                a.signal,
                                AbortSignal.timeout(uRh)
                            ]), r)));
                        if (i.throwIfStale(), !this.listScope.isCurrentScope(s)) throw new Rl;
                        const u = n.reconciler.latestSnapshotComplete;
                        n.reconciler = si_(n.reconciler, o, l);
                        const h = new Map;
                        for (const p of l){
                            const g = p.workerBcId.trim();
                            g && (h.set(g, p.status), p.status !== go.UNSPECIFIED && this.options.setWorkerStatusSeed(e, g, p.status));
                        }
                        n.failures = 0, n.nextRetryAtMs = 0, n.lastFetchCompletedAtMs = Date.now(), n.lastOutcome = "succeeded", n.lastErrorCode = void 0, n.stallReportedAtMs = 0, this.publishSnapshot(n, u !== n.reconciler.latestSnapshotComplete), this.reconcileWorkerHydrations(n, h), n.reconciler.latestSnapshotComplete === !1 && this.structuredLogService.warn("background_composer", "Project worker membership snapshot reached the server cap", {
                            requestId: r,
                            managerBcId: e
                        });
                    } catch (l) {
                        if (!i.isCurrent() || !this.listScope.isCurrentScope(s)) {
                            n.currentAttempt === c && (n.lastOutcome = "discarded");
                            return;
                        }
                        if (ja(l) || l instanceof Qo && l.code === Rs.Canceled) {
                            n.lastOutcome = "canceled";
                            return;
                        }
                        n.failures++;
                        const u = BWt(l) && !(l instanceof Qo && l.code === Rs.NotFound), h = l instanceof Qo ? Rs[l.code] : l instanceof Error ? l.name : "unknown";
                        if (n.lastOutcome = u ? "suspended" : "failed", n.lastErrorCode = h, u) {
                            const g = n.membershipSnapshot.workerIds.length;
                            n.reconciler = hEo(), n.suspended = !0, this.publishSnapshot(n), this.structuredLogService.error("background_composer", "Project worker membership suspended after a permanent error", l instanceof Error ? l : void 0, {
                                requestId: r,
                                managerBcId: e,
                                reason: t,
                                code: h,
                                clearedWorkerCount: g
                            }), this.options.incrementMetric?.({
                                stat: "glass.project_worker_membership.suspended",
                                tags: {
                                    code: h
                                }
                            });
                        }
                        const p = ket(l) ? Odo({
                            error: l,
                            normalIntervalMs: lRh
                        }) : Omt(n.failures - 1, gEo, fEo);
                        n.nextRetryAtMs = Date.now() + p, this.structuredLogService.warn("background_composer", "Failed to refresh Project worker membership", {
                            requestId: r,
                            managerBcId: e,
                            reason: t,
                            backoffMs: p,
                            error: l instanceof Error ? l : void 0
                        });
                    } finally{
                        this.activeAttempts.delete(c), n.currentAttempt === c && (n.currentAttempt = void 0), n.abortController === a && (n.abortController = void 0);
                    }
                });
            } catch (i) {
                if (!ja(i) && !(i instanceof Qo && i.code === Rs.Canceled)) throw i;
            } finally{
                n.refreshQueued && n.subscriberCount > 0 && !n.flight.isInFlight && !n.suspended && (n.refreshQueued = !1, this.refresh(e, "manual"));
            }
        }
    }
    reportStalledSubscriptions() {
        if (!this.options.isEnabled()) return;
        const e = Date.now(), t = Math.max(hRh, 2 * this.options.getMinPollIntervalMs());
        let n = 0, i = !1;
        const r = [];
        for (const [l, u] of this.entries){
            if (u.subscriberCount === 0) continue;
            n++;
            const h = e - Math.max(u.lastFetchCompletedAtMs, u.subscribedAtMs);
            h < t || (r.push({
                managerBcId: l,
                entry: u,
                stalledForMs: h,
                reason: li_(u, e)
            }), (u.stallReportedAtMs === 0 || e - u.stallReportedAtMs >= pRh) && (i = !0));
        }
        if (!i) return;
        r.sort((l, u)=>u.stalledForMs - l.stalledForMs);
        const s = new Map;
        for (const { entry: l, reason: u } of r)l.stallReportedAtMs = e, s.set(u, (s.get(u) ?? 0) + 1);
        let o = 0, a = 0, c = 0;
        for (const l of this.activeAttempts)l.permitAcquiredAtMs === void 0 ? a++ : (o++, c = Math.max(c, e - l.permitAcquiredAtMs));
        this.structuredLogService.warn("background_composer", "Project worker membership stalled", {
            subscribedCount: n,
            stalledCount: r.length,
            oldestStalledForMs: r[0].stalledForMs,
            thresholdMs: t,
            suspendedCount: s.get("suspended") ?? 0,
            waitingForPermitCount: s.get("waiting-for-permit") ?? 0,
            inFlightCount: s.get("in-flight") ?? 0,
            backoffCount: s.get("backoff") ?? 0,
            notRefreshingCount: s.get("not-refreshing") ?? 0,
            permitsHeld: o,
            requestsWaitingForPermit: a,
            oldestPermitHeldMs: c,
            stalledProjects: JSON.stringify(r.slice(0, mRh).map(({ managerBcId: l, entry: u, stalledForMs: h, reason: p })=>({
                    managerBcId: l,
                    reason: p,
                    stalledForMs: h,
                    resolution: u.membershipSnapshot.resolution,
                    workerCount: u.membershipSnapshot.workerIds.length,
                    attemptAgeMs: u.currentAttempt === void 0 ? void 0 : e - u.currentAttempt.queuedAtMs,
                    failures: u.failures,
                    lastOutcome: u.lastOutcome,
                    lastErrorCode: u.lastErrorCode
                })))
        });
        for (const [l, u] of s)this.options.incrementMetric?.({
            stat: "glass.project_worker_membership.stalled",
            value: u,
            tags: {
                reason: l
            }
        });
    }
    reconcileWorkerHydrations(e, t) {
        for (const n of e.membershipSnapshot.workerIds){
            const i = e.hydrationFingerprintByWorkerId.get(n), r = t.get(n), s = this.options.isWorkerHydrated?.(n) ?? !0;
            if (r === void 0) {
                (i === void 0 || !s) && (e.hydrationFingerprintByWorkerId.set(n, gRh), this.options.hydrateWorker(n));
                continue;
            }
            (i === void 0 || i !== r || !s) && (e.hydrationFingerprintByWorkerId.set(n, r), this.options.hydrateWorker(n));
        }
    }
    publishSnapshot(e, t = !1) {
        const n = e.reconciler.latestSnapshotComplete === void 0 ? "pending" : "resolved", i = oRh(e.reconciler), r = [
            ...e.reconciler.additionsByWorkerId.keys()
        ], s = e.reconciler.serverPlacementByWorkerId, o = e.membershipSnapshot;
        if (o.resolution === n && aRh(o.workerIds, i) && aRh(o.optimisticWorkerIds, r) && ci_(o.placementByWorkerId ?? Fjt, s)) {
            t && (e.fireDidChange(), this.options.onMembershipChanged({
                managerBcId: e.managerBcId,
                changedWorkerIds: []
            }));
            return;
        }
        const a = new Set(i);
        for (const l of e.hydrationFingerprintByWorkerId.keys())a.has(l) || e.hydrationFingerprintByWorkerId.delete(l);
        const c = {
            resolution: n,
            workerIds: i,
            optimisticWorkerIds: r,
            placementByWorkerId: s
        };
        e.membershipSnapshot = c, e.fireDidChange(), this.options.onMembershipChanged({
            managerBcId: e.managerBcId,
            changedWorkerIds: ai_(o, c)
        });
    }
    getOrCreateEntry(e) {
        const t = this.entries.get(e);
        if (t) return t;
        const n = mEo - 1;
        this.prune(n);
        const i = new fRh(e);
        return this.entries.set(e, i), i;
    }
    prune(e = mEo) {
        const t = [
            ...this.entries
        ].filter(([, n])=>!ui_(n)).sort(([, n], [, i])=>n.lastAccessedAtMs - i.lastAccessedAtMs);
        for(; this.entries.size > e && t.length > 0;){
            const n = t.shift();
            n && this.entries.deleteAndDispose(n[0]);
        }
    }
};

}
