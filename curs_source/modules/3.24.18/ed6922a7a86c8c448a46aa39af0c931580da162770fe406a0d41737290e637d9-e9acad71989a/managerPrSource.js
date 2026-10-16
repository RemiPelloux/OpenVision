import { Se, bt, cn, ja, po, rn, si, ve, we } from "./HVr.js";
import { ZMe, ub } from "./async.cursor.js";
import { qwt, zE } from "./cgh.js";
import { _To } from "./cloudAgentPrStatePoller.js";
import { Rs } from "./code_3.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { pF } from "./githubUtils.js";
import { K3n, OCt } from "./microtaskBatcher.js";
import { Tjt } from "./pullRequestStateConversion.js";
import { x } from "./tslib.es6.js";
function di_(e) {
    const t = [];
    for (const n of e){
        const i = n.prUrl?.trim();
        i && t.push({
            prUrl: i,
            branchName: n.branchName,
            workerBcId: n.workerBcId?.trim() || void 0,
            repoUrl: qwt(i),
            prStatus: n.prStatus
        });
    }
    return t;
}
function bRh(e, t, n) {
    return e !== void 0 && t - e < n;
}
function yRh(e, t) {
    return e.length === t.length && e.every((n, i)=>{
        const r = t[i];
        return r !== void 0 && n.prUrl === r.prUrl && n.branchName === r.branchName && n.workerBcId === r.workerBcId && n.repoUrl === r.repoUrl && n.prStatus === r.prStatus && _Eo(n.richStatus, r.richStatus);
    });
}
function _Eo(e, t) {
    return e === void 0 || t === void 0 ? e === t : e.title === t.title && e.reviewDecision === t.reviewDecision && e.ciStatus === t.ciStatus && e.mergeableState === t.mergeableState && e.recencyAtMs === t.recencyAtMs && e.createdAt === t.createdAt;
}
function hi_(e, t) {
    const n = new Set(e.map((i)=>i.prUrl));
    return [
        ...new Set(t.map((i)=>i.prUrl))
    ].filter((i)=>!n.has(i));
}
var SRh, kRh, wRh, CRh;
export { CRh, SRh, _Eo, bRh, di_, hi_, kRh, wRh, yRh };
var __wakaru_pi__initialized = false;
export function pi_() {
if (__wakaru_pi__initialized) return;
__wakaru_pi__initialized = true;
"use strict";
x(), hg(), ub(), si(), bt(), Se(), pF(), K3n(), Tjt(), SRh = 20, kRh = 2e4, wRh = class extends we {
    constructor(){
        super(...arguments), this.flight = this._register(new ZMe), this.changeEmitter = this._register(new ve), this.onDidChange = this.changeEmitter.event, this.membershipSubscription = this._register(new cn), this.snapshot = {
            kind: "failed"
        }, this.lastOkRows = [], this.subscriberCount = 0, this.refreshQueued = !1, this.queuedRichStatusPrKeys = new Set, this.lastAccessedAtMs = Date.now();
    }
    fireDidChange() {
        this.changeEmitter.fire();
    }
    dispose() {
        this.abortController?.abort(), super.dispose();
    }
}, CRh = class extends we {
    constructor(e, t){
        super(), this.structuredLogService = e, this.options = t, this.entries = this._register(new po), this.richStatusOverlayByPrKey = new Map, this.metadataNotificationBatcher = this._register(new OCt((n)=>n, (n)=>{
            for (const i of n){
                const r = this.entries.get(i);
                r && r.subscriberCount > 0 && this.applyRichStatusOverlay(r);
            }
        })), this.richStatusRefreshBatcher = this._register(new OCt((n)=>n, async (n)=>{
            for (const i of n)await this.runRefresh(i, !1);
        })), this._register(this.options.subscribeToMetadataApplications((n)=>this.onMetadataApplication(n))), this._register(this.options.onDidChangeFocus((n)=>this.onDidChangeFocus(n)));
    }
    get(e) {
        const t = this.entries.get(e);
        return t ? (t.lastAccessedAtMs = Date.now(), t.snapshot) : {
            kind: "failed"
        };
    }
    hasSubscribers(e) {
        return (this.entries.get(e)?.subscriberCount ?? 0) > 0;
    }
    subscribe(e, t) {
        const n = this.getOrCreateEntry(e), i = n.subscriberCount++ === 0, r = n.onDidChange(t);
        return i && (n.membershipSubscription.value = this.options.subscribeToMembership(e, ()=>void this.refresh(e)), this.refresh(e)), rn(()=>{
            r.dispose(), n.subscriberCount = Math.max(0, n.subscriberCount - 1), n.lastAccessedAtMs = Date.now(), n.subscriberCount === 0 && (n.membershipSubscription.clear(), n.abortController?.abort(), n.abortController = void 0, n.flight.invalidate(), n.refreshQueued = !1, n.queuedRichStatusPrKeys.clear(), this.prune());
        });
    }
    refresh(e) {
        return this.runRefresh(e, !0);
    }
    refreshSubscribedIfStale() {
        const e = Date.now(), t = this.options.getMinSafetyRefreshIntervalMs();
        for (const [n, i] of this.entries)i.subscriberCount === 0 || bRh(i.lastRowFetchStartedAtMs, e, t) || this.refresh(n);
    }
    refreshRichStatus(e, t) {
        const n = this.entries.get(e);
        if (!n || n.subscriberCount === 0) return Promise.resolve();
        let i = !1;
        for (const r of t){
            const s = zE(r);
            s && (n.queuedRichStatusPrKeys.add(s), i = !0);
        }
        return i ? this.richStatusRefreshBatcher.schedule(e) : Promise.resolve();
    }
    async runRefresh(e, t) {
        const n = this.entries.get(e);
        if (!(!n || n.subscriberCount === 0)) {
            if (n.flight.isInFlight) {
                t && (n.refreshQueued = !0);
                return;
            }
            try {
                await n.flight.run(async (i)=>{
                    const r = new AbortController;
                    n.abortController?.abort(), n.abortController = r;
                    try {
                        let s = [];
                        if (t) {
                            n.lastRowFetchStartedAtMs = Date.now();
                            const l = await this.options.fetchPrs(e, AbortSignal.any([
                                r.signal,
                                AbortSignal.timeout(kRh)
                            ]));
                            i.throwIfStale();
                            const u = this.mergeRichStatusOverlay(di_(l)), h = !yRh(n.lastOkRows, u);
                            s = h ? hi_(n.lastOkRows, u) : [];
                            const p = n.snapshot.kind === "failed";
                            n.lastOkRows = u, n.snapshot = {
                                kind: "ok",
                                rows: u
                            }, (h || p) && n.fireDidChange();
                        }
                        const o = new Set(n.queuedRichStatusPrKeys);
                        n.queuedRichStatusPrKeys.clear();
                        const a = n.lastOkRows.filter((l)=>o.has(zE(l.prUrl))).map((l)=>l.prUrl), c = [
                            ...new Set([
                                ...s,
                                ...a
                            ])
                        ];
                        if (c.length > 0) {
                            let l;
                            try {
                                l = await this.options.seedScmMetadata(c, a.length > 0 ? {
                                    skipCache: !0
                                } : void 0);
                            } catch (u) {
                                this.structuredLogService.warn("background_composer", "Failed to seed manager PR metadata", {
                                    managerBcId: e,
                                    error: u instanceof Error ? u : void 0
                                });
                            }
                            i.throwIfStale(), l !== void 0 && this.stampMetadataBatch(c, l) && this.applyRichStatusOverlay(n);
                        }
                    } catch (s) {
                        if (!i.isCurrent() || r.signal.aborted || ja(s) || s instanceof Qo && s.code === Rs.Canceled) return;
                        n.snapshot.kind !== "failed" && (n.snapshot = {
                            kind: "failed"
                        }, n.fireDidChange()), this.structuredLogService.warn("background_composer", "Failed to refresh manager PRs", {
                            managerBcId: e,
                            error: s instanceof Error ? s : void 0
                        });
                    } finally{
                        n.abortController === r && (n.abortController = void 0);
                    }
                });
            } catch (i) {
                if (!ja(i) && !(i instanceof Qo && i.code === Rs.Canceled)) throw i;
            } finally{
                if ((n.refreshQueued || n.queuedRichStatusPrKeys.size > 0) && n.subscriberCount > 0 && !n.flight.isInFlight) {
                    const i = n.refreshQueued;
                    n.refreshQueued = !1, this.runRefresh(e, i);
                }
            }
        }
    }
    onDidChangeFocus(e) {
        if (!e) return;
        const t = Date.now(), n = this.options.getMinSafetyRefreshIntervalMs();
        for (const [i, r] of this.entries)r.subscriberCount === 0 || bRh(r.lastFocusRichStatusRefreshAtMs, t, n) || (r.lastFocusRichStatusRefreshAtMs = t, this.refreshRichStatus(i, r.lastOkRows.map((s)=>s.prUrl)));
    }
    onMetadataApplication(e) {
        const t = zE(e.prUrl);
        if (!t) return;
        const n = [
            ...this.entries
        ].filter(([, i])=>i.subscriberCount > 0 && i.lastOkRows.some((r)=>zE(r.prUrl) === t)).map(([i])=>i);
        if (!(n.length === 0 || !this.stampMetadata(e.prUrl, e.metadata))) for (const i of n)this.metadataNotificationBatcher.schedule(i);
    }
    stampMetadataBatch(e, t) {
        let n = !1;
        for(let i = 0; i < e.length; i++){
            const r = t[i];
            r && (n = this.stampMetadata(e[i], r) || n);
        }
        return n;
    }
    stampMetadata(e, t) {
        const n = zE(e), i = _To(e, t, void 0);
        if (!n || !i) return !1;
        const r = Date.parse(t.updatedAt), s = Number.isFinite(r) ? r : void 0, o = this.richStatusOverlayByPrKey.get(n);
        if (o?.updatedAtMs !== void 0 && (s === void 0 || s < o.updatedAtMs)) return !1;
        const a = {
            title: i.title,
            reviewDecision: i.reviewDecision,
            ciStatus: i.ciStatus,
            mergeableState: i.mergeableState,
            recencyAtMs: i.recencyAtMs,
            createdAt: i.createdAt
        };
        return this.richStatusOverlayByPrKey.set(n, {
            richStatus: a,
            updatedAtMs: s
        }), o === void 0 || !_Eo(o.richStatus, a);
    }
    mergeRichStatusOverlay(e) {
        return e.map((t)=>{
            const n = this.richStatusOverlayByPrKey.get(zE(t.prUrl));
            return !n || _Eo(t.richStatus, n.richStatus) ? t : {
                ...t,
                richStatus: n.richStatus
            };
        });
    }
    applyRichStatusOverlay(e) {
        const t = this.mergeRichStatusOverlay(e.lastOkRows);
        yRh(e.lastOkRows, t) || (e.lastOkRows = t, e.snapshot.kind === "ok" && (e.snapshot = {
            kind: "ok",
            rows: t
        }, e.fireDidChange()));
    }
    getOrCreateEntry(e) {
        const t = this.entries.get(e);
        if (t) return t;
        const n = new wRh;
        return this.entries.set(e, n), this.prune(), n;
    }
    prune() {
        const e = [
            ...this.entries
        ].filter(([, n])=>n.subscriberCount === 0).sort(([, n], [, i])=>n.lastAccessedAtMs - i.lastAccessedAtMs);
        for(; this.entries.size > SRh && e.length > 0;){
            const n = e.shift();
            n && this.entries.deleteAndDispose(n[0]);
        }
        const t = new Set;
        for (const [, n] of this.entries)for (const i of n.lastOkRows)t.add(zE(i.prUrl));
        for (const n of this.richStatusOverlayByPrKey.keys())t.has(n) || this.richStatusOverlayByPrKey.delete(n);
    }
};

}
