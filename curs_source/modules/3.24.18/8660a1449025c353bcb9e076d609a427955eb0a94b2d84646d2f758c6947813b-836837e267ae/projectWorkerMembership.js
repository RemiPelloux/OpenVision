import { Ec, Ei, Gt, Hc, Pn, Qe, Ya, da, st, tt } from "./Iwo.js";
import { Aet } from "./SZu.js";
import { Aas, Awk, Cwk, Dwk, Ewk, Iwk, Mul, Mwk, Pwk, Twk, Xvg, Yvg, xwk } from "./Ycg.js";
import { c_, cot, ype } from "./async.cursor.js";
import { qn } from "./async.js";
import { Po, pd } from "./background_composer_pb.js";
import { sQr } from "./cloudAgentRateLimitBackoff.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Ag } from "./connectErrors.js";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
import { ACt, Sqa, xCt } from "./yBp.js";
var Zvg, Nul, Lul, Qvg, Oul, Jvg, e_g, t_g, n_g, i_g, r_g, tEt, xIi, Ful, s_g, o_g;
export { Ful, Jvg, Lul, Nul, Oul, Qvg, Zvg, e_g, i_g, n_g, o_g, r_g, s_g, tEt, t_g, xIi };
var __wakaru_Bul_initialized = false;
export function Bul() {
if (__wakaru_Bul_initialized) return;
__wakaru_Bul_initialized = true;
"use strict";
E(), nl(), dp(), qn(), c_(), Ei(), Gt(), Qe(), Xo(), pd(), Ag(), sQr(), Zvg = 1e3, Nul = 20, Lul = 1e4, Qvg = 3e4, Oul = 5 * 6e4, Jvg = 2 * Lul, e_g = 1e3, t_g = 2 * Oul, n_g = 30 * 6e4, i_g = 10, r_g = Symbol("membership-only-hydration"), tEt = new Map, xIi = {
    resolution: "pending",
    workerIds: [],
    optimisticWorkerIds: [],
    placementByWorkerId: tEt
}, Ful = new WeakMap, s_g = class extends st {
    constructor(t){
        super(), this.managerBcId = t, this.flight = this._register(new ype), this.changeEmitter = this._register(new tt), this.onDidChange = this.changeEmitter.event, this.reconciler = Mul(), this.membershipSnapshot = xIi, this.hydrationFingerprintByWorkerId = new Map, this.subscriberCount = 0, this.refreshQueued = !1, this.failures = 0, this.nextRetryAtMs = 0, this.suspended = !1, this.lastAccessedAtMs = Date.now(), this.lastFetchCompletedAtMs = 0, this.subscribedAtMs = 0, this.stallReportedAtMs = 0;
    }
    fireDidChange() {
        this.changeEmitter.fire();
    }
    dispose() {
        this.abortController?.abort(), super.dispose();
    }
}, o_g = class extends st {
    constructor(t, e, n){
        super(), this.listScope = t, this.structuredLogService = e, this.options = n, this.entries = this._register(new da), this.dispatchRefreshes = this._register(new da), this.requestSemaphore = new cot(4), this.activeAttempts = new Set;
    }
    getSnapshot(t) {
        if (!this.options.isEnabled()) return xIi;
        const e = this.entries.get(t);
        return e ? (e.lastAccessedAtMs = Date.now(), e.membershipSnapshot) : xIi;
    }
    getManagerIds(t) {
        if (!this.options.isEnabled()) return [];
        const e = [];
        for (const [n, i] of this.entries)i.membershipSnapshot.workerIds.includes(t) && e.push(n);
        return e;
    }
    subscribe(t, e) {
        const n = this.getOrCreateEntry(t), i = n.subscriberCount++ === 0, r = n.onDidChange(e);
        return i && (n.subscribedAtMs = Date.now(), n.stallReportedAtMs = 0, this.refresh(t, "initial")), Pn(()=>{
            r.dispose(), n.subscriberCount = Math.max(0, n.subscriberCount - 1), n.lastAccessedAtMs = Date.now(), n.subscriberCount === 0 && (n.subscribedAtMs = 0, n.abortController?.abort(), n.abortController = void 0, n.flight.invalidate(), n.refreshQueued = !1, this.prune());
        });
    }
    refreshSubscribed(t) {
        t === "poll" && this.reportStalledSubscriptions();
        for (const [e, n] of this.entries)n.subscriberCount > 0 && this.refresh(e, t);
    }
    requestDispatchRefresh(t) {
        const e = this.entries.get(t);
        !this.options.isEnabled() || e === void 0 || e.subscriberCount === 0 || this.dispatchRefreshes.has(t) || this.dispatchRefreshes.set(t, Ec(()=>{
            this.dispatchRefreshes.deleteAndDispose(t), (this.entries.get(t)?.subscriberCount ?? 0) > 0 && this.refresh(t, "dispatch");
        }, e_g));
    }
    reconnect() {
        for (const t of this.entries.values())t.abortController?.abort(), t.flight.invalidate();
        this.refreshSubscribed("reconnect");
    }
    recordAdd(t, e) {
        if (!this.options.isEnabled()) return;
        const n = this.getOrCreateEntry(t);
        n.suspended = !1, n.nextRetryAtMs = 0, n.reconciler = Cwk(n.reconciler, e), this.publishSnapshot(n);
    }
    settleAdd(t, e, n, i) {
        const r = this.entries.get(t);
        r && (r.reconciler = Twk(r.reconciler, e, n), this.publishSnapshot(r), n === "succeeded" && r.subscriberCount > 0 && this.refresh(t, i));
    }
    recordRemove(t, e) {
        if (!this.options.isEnabled()) return;
        const n = this.entries.get(t);
        n && (n.reconciler = Ewk(n.reconciler, e), this.publishSnapshot(n));
    }
    settleRemove(t, e, n) {
        const i = this.entries.get(t);
        i && (i.reconciler = Iwk(i.reconciler, e, n), this.publishSnapshot(i), n === "succeeded" && i.subscriberCount > 0 && this.refresh(t, "unparent"));
    }
    reset(t) {
        const e = [
            ...this.entries.values()
        ].filter((i)=>i.subscriberCount > 0);
        e.length > 0 && (this.structuredLogService.warn("background_composer", "Project worker membership reset", {
            reason: t,
            subscribedCount: e.length,
            resolvedCount: e.filter((i)=>i.membershipSnapshot.resolution === "resolved").length
        }), this.options.incrementMetric?.({
            stat: "glass.project_worker_membership.reset",
            tags: {
                reason: t
            }
        })), this.options.clearWorkerStatusSeeds(), this.dispatchRefreshes.clearAndDisposeAll();
        const n = Date.now();
        for (const i of this.entries.values())i.abortController?.abort(), i.abortController = void 0, i.flight.invalidate(), i.refreshQueued = !1, i.failures = 0, i.nextRetryAtMs = 0, i.suspended = !1, i.lastFetchCompletedAtMs = 0, i.subscribedAtMs = i.subscriberCount > 0 ? n : 0, i.lastOutcome = void 0, i.lastErrorCode = void 0, i.stallReportedAtMs = 0, i.reconciler = Mul(), i.hydrationFingerprintByWorkerId.clear(), this.publishSnapshot(i);
    }
    isAuthoritativeMember(t, e) {
        const n = this.entries.get(t);
        if (!n || n.reconciler.latestSnapshotComplete === void 0) return;
        const i = Awk(n.reconciler).has(e);
        if (!(!n.reconciler.latestSnapshotComplete && !i)) return i;
    }
    async refresh(t, e) {
        if (!this.options.isEnabled()) return;
        const n = this.getOrCreateEntry(t);
        if (!(n.suspended || Date.now() < n.nextRetryAtMs) && !(e === "poll" && n.lastFetchCompletedAtMs !== 0 && Date.now() - n.lastFetchCompletedAtMs < this.options.getMinPollIntervalMs())) {
            if (n.flight.isInFlight) {
                e !== "poll" && (n.refreshQueued = !0);
                return;
            }
            try {
                await n.flight.run(async (i)=>{
                    const r = Ai(), s = this.listScope.captureScope(), o = n.reconciler.latestObservationSequence, a = new AbortController;
                    n.abortController?.abort(), n.abortController = a;
                    const l = {
                        queuedAtMs: Date.now(),
                        permitAcquiredAtMs: void 0
                    };
                    n.currentAttempt = l, this.activeAttempts.add(l);
                    try {
                        const c = await this.requestSemaphore.withSemaphore(()=>(l.permitAcquiredAtMs = Date.now(), this.options.fetchWorkers(t, AbortSignal.any([
                                a.signal,
                                AbortSignal.timeout(Jvg)
                            ]), r)));
                        if (i.throwIfStale(), !this.listScope.isCurrentScope(s)) throw new Hc;
                        const u = n.reconciler.latestSnapshotComplete;
                        n.reconciler = xwk(n.reconciler, o, c);
                        const d = new Map;
                        for (const h of c){
                            const p = h.workerBcId.trim();
                            p && (d.set(p, h.status), h.status !== Po.UNSPECIFIED && this.options.setWorkerStatusSeed(t, p, h.status));
                        }
                        n.failures = 0, n.nextRetryAtMs = 0, n.lastFetchCompletedAtMs = Date.now(), n.lastOutcome = "succeeded", n.lastErrorCode = void 0, n.stallReportedAtMs = 0, this.publishSnapshot(n, u !== n.reconciler.latestSnapshotComplete), this.reconcileWorkerHydrations(n, d), n.reconciler.latestSnapshotComplete === !1 && this.structuredLogService.warn("background_composer", "Project worker membership snapshot reached the server cap", {
                            requestId: r,
                            managerBcId: t
                        });
                    } catch (c) {
                        if (!i.isCurrent() || !this.listScope.isCurrentScope(s)) {
                            n.currentAttempt === l && (n.lastOutcome = "discarded");
                            return;
                        }
                        if (Ya(c) || c instanceof Us && c.code === pr.Canceled) {
                            n.lastOutcome = "canceled";
                            return;
                        }
                        n.failures++;
                        const u = xCt(c) && !(c instanceof Us && c.code === pr.NotFound), d = c instanceof Us ? pr[c.code] : c instanceof Error ? c.name : "unknown";
                        if (n.lastOutcome = u ? "suspended" : "failed", n.lastErrorCode = d, u) {
                            const p = n.membershipSnapshot.workerIds.length;
                            n.reconciler = Mul(), n.suspended = !0, this.publishSnapshot(n), this.structuredLogService.error("background_composer", "Project worker membership suspended after a permanent error", c instanceof Error ? c : void 0, {
                                requestId: r,
                                managerBcId: t,
                                reason: e,
                                code: d,
                                clearedWorkerCount: p
                            }), this.options.incrementMetric?.({
                                stat: "glass.project_worker_membership.suspended",
                                tags: {
                                    code: d
                                }
                            });
                        }
                        const h = ACt(c) ? Sqa({
                            error: c,
                            normalIntervalMs: Qvg
                        }) : Aet(n.failures - 1, Lul, Oul);
                        n.nextRetryAtMs = Date.now() + h, this.structuredLogService.warn("background_composer", "Failed to refresh Project worker membership", {
                            requestId: r,
                            managerBcId: t,
                            reason: e,
                            backoffMs: h,
                            error: c instanceof Error ? c : void 0
                        });
                    } finally{
                        this.activeAttempts.delete(l), n.currentAttempt === l && (n.currentAttempt = void 0), n.abortController === a && (n.abortController = void 0);
                    }
                });
            } catch (i) {
                if (!Ya(i) && !(i instanceof Us && i.code === pr.Canceled)) throw i;
            } finally{
                n.refreshQueued && n.subscriberCount > 0 && !n.flight.isInFlight && !n.suspended && (n.refreshQueued = !1, this.refresh(t, "manual"));
            }
        }
    }
    reportStalledSubscriptions() {
        if (!this.options.isEnabled()) return;
        const t = Date.now(), e = Math.max(t_g, 2 * this.options.getMinPollIntervalMs());
        let n = 0, i = !1;
        const r = [];
        for (const [c, u] of this.entries){
            if (u.subscriberCount === 0) continue;
            n++;
            const d = t - Math.max(u.lastFetchCompletedAtMs, u.subscribedAtMs);
            d < e || (r.push({
                managerBcId: c,
                entry: u,
                stalledForMs: d,
                reason: Mwk(u, t)
            }), (u.stallReportedAtMs === 0 || t - u.stallReportedAtMs >= n_g) && (i = !0));
        }
        if (!i) return;
        r.sort((c, u)=>u.stalledForMs - c.stalledForMs);
        const s = new Map;
        for (const { entry: c, reason: u } of r)c.stallReportedAtMs = t, s.set(u, (s.get(u) ?? 0) + 1);
        let o = 0, a = 0, l = 0;
        for (const c of this.activeAttempts)c.permitAcquiredAtMs === void 0 ? a++ : (o++, l = Math.max(l, t - c.permitAcquiredAtMs));
        this.structuredLogService.warn("background_composer", "Project worker membership stalled", {
            subscribedCount: n,
            stalledCount: r.length,
            oldestStalledForMs: r[0].stalledForMs,
            thresholdMs: e,
            suspendedCount: s.get("suspended") ?? 0,
            waitingForPermitCount: s.get("waiting-for-permit") ?? 0,
            inFlightCount: s.get("in-flight") ?? 0,
            backoffCount: s.get("backoff") ?? 0,
            notRefreshingCount: s.get("not-refreshing") ?? 0,
            permitsHeld: o,
            requestsWaitingForPermit: a,
            oldestPermitHeldMs: l,
            stalledProjects: JSON.stringify(r.slice(0, i_g).map(({ managerBcId: c, entry: u, stalledForMs: d, reason: h })=>({
                    managerBcId: c,
                    reason: h,
                    stalledForMs: d,
                    resolution: u.membershipSnapshot.resolution,
                    workerCount: u.membershipSnapshot.workerIds.length,
                    attemptAgeMs: u.currentAttempt === void 0 ? void 0 : t - u.currentAttempt.queuedAtMs,
                    failures: u.failures,
                    lastOutcome: u.lastOutcome,
                    lastErrorCode: u.lastErrorCode
                })))
        });
        for (const [c, u] of s)this.options.incrementMetric?.({
            stat: "glass.project_worker_membership.stalled",
            value: u,
            tags: {
                reason: c
            }
        });
    }
    reconcileWorkerHydrations(t, e) {
        for (const n of t.membershipSnapshot.workerIds){
            const i = t.hydrationFingerprintByWorkerId.get(n), r = e.get(n), s = this.options.isWorkerHydrated?.(n) ?? !0;
            if (r === void 0) {
                (i === void 0 || !s) && (t.hydrationFingerprintByWorkerId.set(n, r_g), this.options.hydrateWorker(n));
                continue;
            }
            (i === void 0 || i !== r || !s) && (t.hydrationFingerprintByWorkerId.set(n, r), this.options.hydrateWorker(n));
        }
    }
    publishSnapshot(t, e = !1) {
        const n = t.reconciler.latestSnapshotComplete === void 0 ? "pending" : "resolved", i = Yvg(t.reconciler), r = [
            ...t.reconciler.additionsByWorkerId.keys()
        ], s = t.reconciler.serverPlacementByWorkerId, o = t.membershipSnapshot;
        if (o.resolution === n && Aas(o.workerIds, i) && Aas(o.optimisticWorkerIds, r) && Xvg(o.placementByWorkerId ?? tEt, s)) {
            e && (t.fireDidChange(), this.options.onMembershipChanged({
                managerBcId: t.managerBcId,
                changedWorkerIds: []
            }));
            return;
        }
        const a = new Set(i);
        for (const c of t.hydrationFingerprintByWorkerId.keys())a.has(c) || t.hydrationFingerprintByWorkerId.delete(c);
        const l = {
            resolution: n,
            workerIds: i,
            optimisticWorkerIds: r,
            placementByWorkerId: s
        };
        t.membershipSnapshot = l, t.fireDidChange(), this.options.onMembershipChanged({
            managerBcId: t.managerBcId,
            changedWorkerIds: Pwk(o, l)
        });
    }
    getOrCreateEntry(t) {
        const e = this.entries.get(t);
        if (e) return e;
        const n = Nul - 1;
        this.prune(n);
        const i = new s_g(t);
        return this.entries.set(t, i), i;
    }
    prune(t = Nul) {
        const e = [
            ...this.entries
        ].filter(([, n])=>!Dwk(n)).sort(([, n], [, i])=>n.lastAccessedAtMs - i.lastAccessedAtMs);
        for(; this.entries.size > t && e.length > 0;){
            const n = e.shift();
            n && this.entries.deleteAndDispose(n[0]);
        }
    }
};

}
