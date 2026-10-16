import { Zp } from "./Aeg.js";
import { Ei, Gt, Pn, Qe, Vn, Ya, da, st, tt } from "./Iwo.js";
import { Lwk, Nwk, Uul, a_g, hIi, l_g } from "./Ycg.js";
import { c_, ype } from "./async.cursor.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { XS } from "./githubUtils.js";
import { CIi, dVt } from "./microtaskBatcher.js";
import { e9e } from "./pullRequestStateConversion.js";
import { E } from "./tslib.es6.js";
var c_g, u_g, d_g, h_g;
export { c_g, d_g, h_g, u_g };
var __wakaru_Owk_initialized = false;
export function Owk() {
if (__wakaru_Owk_initialized) return;
__wakaru_Owk_initialized = true;
"use strict";
E(), dp(), c_(), Ei(), Gt(), Qe(), XS(), CIi(), e9e(), c_g = 20, u_g = 2e4, d_g = class extends st {
    constructor(){
        super(...arguments), this.flight = this._register(new ype), this.changeEmitter = this._register(new tt), this.onDidChange = this.changeEmitter.event, this.membershipSubscription = this._register(new Vn), this.snapshot = {
            kind: "failed"
        }, this.lastOkRows = [], this.subscriberCount = 0, this.refreshQueued = !1, this.queuedRichStatusPrKeys = new Set, this.lastAccessedAtMs = Date.now();
    }
    fireDidChange() {
        this.changeEmitter.fire();
    }
    dispose() {
        this.abortController?.abort(), super.dispose();
    }
}, h_g = class extends st {
    constructor(t, e){
        super(), this.structuredLogService = t, this.options = e, this.entries = this._register(new da), this.richStatusOverlayByPrKey = new Map, this.metadataNotificationBatcher = this._register(new dVt((n)=>n, (n)=>{
            for (const i of n){
                const r = this.entries.get(i);
                r && r.subscriberCount > 0 && this.applyRichStatusOverlay(r);
            }
        })), this.richStatusRefreshBatcher = this._register(new dVt((n)=>n, async (n)=>{
            for (const i of n)await this.runRefresh(i, !1);
        })), this._register(this.options.subscribeToMetadataApplications((n)=>this.onMetadataApplication(n))), this._register(this.options.onDidChangeFocus((n)=>this.onDidChangeFocus(n)));
    }
    get(t) {
        const e = this.entries.get(t);
        return e ? (e.lastAccessedAtMs = Date.now(), e.snapshot) : {
            kind: "failed"
        };
    }
    hasSubscribers(t) {
        return (this.entries.get(t)?.subscriberCount ?? 0) > 0;
    }
    subscribe(t, e) {
        const n = this.getOrCreateEntry(t), i = n.subscriberCount++ === 0, r = n.onDidChange(e);
        return i && (n.membershipSubscription.value = this.options.subscribeToMembership(t, ()=>void this.refresh(t)), this.refresh(t)), Pn(()=>{
            r.dispose(), n.subscriberCount = Math.max(0, n.subscriberCount - 1), n.lastAccessedAtMs = Date.now(), n.subscriberCount === 0 && (n.membershipSubscription.clear(), n.abortController?.abort(), n.abortController = void 0, n.flight.invalidate(), n.refreshQueued = !1, n.queuedRichStatusPrKeys.clear(), this.prune());
        });
    }
    refresh(t) {
        return this.runRefresh(t, !0);
    }
    refreshSubscribedIfStale() {
        const t = Date.now(), e = this.options.getMinSafetyRefreshIntervalMs();
        for (const [n, i] of this.entries)i.subscriberCount === 0 || a_g(i.lastRowFetchStartedAtMs, t, e) || this.refresh(n);
    }
    refreshRichStatus(t, e) {
        const n = this.entries.get(t);
        if (!n || n.subscriberCount === 0) return Promise.resolve();
        let i = !1;
        for (const r of e){
            const s = Zp(r);
            s && (n.queuedRichStatusPrKeys.add(s), i = !0);
        }
        return i ? this.richStatusRefreshBatcher.schedule(t) : Promise.resolve();
    }
    async runRefresh(t, e) {
        const n = this.entries.get(t);
        if (!(!n || n.subscriberCount === 0)) {
            if (n.flight.isInFlight) {
                e && (n.refreshQueued = !0);
                return;
            }
            try {
                await n.flight.run(async (i)=>{
                    const r = new AbortController;
                    n.abortController?.abort(), n.abortController = r;
                    try {
                        let s = [];
                        if (e) {
                            n.lastRowFetchStartedAtMs = Date.now();
                            const c = await this.options.fetchPrs(t, AbortSignal.any([
                                r.signal,
                                AbortSignal.timeout(u_g)
                            ]));
                            i.throwIfStale();
                            const u = this.mergeRichStatusOverlay(Nwk(c)), d = !l_g(n.lastOkRows, u);
                            s = d ? Lwk(n.lastOkRows, u) : [];
                            const h = n.snapshot.kind === "failed";
                            n.lastOkRows = u, n.snapshot = {
                                kind: "ok",
                                rows: u
                            }, (d || h) && n.fireDidChange();
                        }
                        const o = new Set(n.queuedRichStatusPrKeys);
                        n.queuedRichStatusPrKeys.clear();
                        const a = n.lastOkRows.filter((c)=>o.has(Zp(c.prUrl))).map((c)=>c.prUrl), l = [
                            ...new Set([
                                ...s,
                                ...a
                            ])
                        ];
                        if (l.length > 0) {
                            let c;
                            try {
                                c = await this.options.seedScmMetadata(l, a.length > 0 ? {
                                    skipCache: !0
                                } : void 0);
                            } catch (u) {
                                this.structuredLogService.warn("background_composer", "Failed to seed manager PR metadata", {
                                    managerBcId: t,
                                    error: u instanceof Error ? u : void 0
                                });
                            }
                            i.throwIfStale(), c !== void 0 && this.stampMetadataBatch(l, c) && this.applyRichStatusOverlay(n);
                        }
                    } catch (s) {
                        if (!i.isCurrent() || r.signal.aborted || Ya(s) || s instanceof Us && s.code === pr.Canceled) return;
                        n.snapshot.kind !== "failed" && (n.snapshot = {
                            kind: "failed"
                        }, n.fireDidChange()), this.structuredLogService.warn("background_composer", "Failed to refresh manager PRs", {
                            managerBcId: t,
                            error: s instanceof Error ? s : void 0
                        });
                    } finally{
                        n.abortController === r && (n.abortController = void 0);
                    }
                });
            } catch (i) {
                if (!Ya(i) && !(i instanceof Us && i.code === pr.Canceled)) throw i;
            } finally{
                if ((n.refreshQueued || n.queuedRichStatusPrKeys.size > 0) && n.subscriberCount > 0 && !n.flight.isInFlight) {
                    const i = n.refreshQueued;
                    n.refreshQueued = !1, this.runRefresh(t, i);
                }
            }
        }
    }
    onDidChangeFocus(t) {
        if (!t) return;
        const e = Date.now(), n = this.options.getMinSafetyRefreshIntervalMs();
        for (const [i, r] of this.entries)r.subscriberCount === 0 || a_g(r.lastFocusRichStatusRefreshAtMs, e, n) || (r.lastFocusRichStatusRefreshAtMs = e, this.refreshRichStatus(i, r.lastOkRows.map((s)=>s.prUrl)));
    }
    onMetadataApplication(t) {
        const e = Zp(t.prUrl);
        if (!e) return;
        const n = [
            ...this.entries
        ].filter(([, i])=>i.subscriberCount > 0 && i.lastOkRows.some((r)=>Zp(r.prUrl) === e)).map(([i])=>i);
        if (!(n.length === 0 || !this.stampMetadata(t.prUrl, t.metadata))) for (const i of n)this.metadataNotificationBatcher.schedule(i);
    }
    stampMetadataBatch(t, e) {
        let n = !1;
        for(let i = 0; i < t.length; i++){
            const r = e[i];
            r && (n = this.stampMetadata(t[i], r) || n);
        }
        return n;
    }
    stampMetadata(t, e) {
        const n = Zp(t), i = hIi(t, e, void 0);
        if (!n || !i) return !1;
        const r = Date.parse(e.updatedAt), s = Number.isFinite(r) ? r : void 0, o = this.richStatusOverlayByPrKey.get(n);
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
        }), o === void 0 || !Uul(o.richStatus, a);
    }
    mergeRichStatusOverlay(t) {
        return t.map((e)=>{
            const n = this.richStatusOverlayByPrKey.get(Zp(e.prUrl));
            return !n || Uul(e.richStatus, n.richStatus) ? e : {
                ...e,
                richStatus: n.richStatus
            };
        });
    }
    applyRichStatusOverlay(t) {
        const e = this.mergeRichStatusOverlay(t.lastOkRows);
        l_g(t.lastOkRows, e) || (t.lastOkRows = e, t.snapshot.kind === "ok" && (t.snapshot = {
            kind: "ok",
            rows: e
        }, t.fireDidChange()));
    }
    getOrCreateEntry(t) {
        const e = this.entries.get(t);
        if (e) return e;
        const n = new d_g;
        return this.entries.set(t, n), this.prune(), n;
    }
    prune() {
        const t = [
            ...this.entries
        ].filter(([, n])=>n.subscriberCount === 0).sort(([, n], [, i])=>n.lastAccessedAtMs - i.lastAccessedAtMs);
        for(; this.entries.size > c_g && t.length > 0;){
            const n = t.shift();
            n && this.entries.deleteAndDispose(n[0]);
        }
        const e = new Set;
        for (const [, n] of this.entries)for (const i of n.lastOkRows)e.add(Zp(i.prUrl));
        for (const n of this.richStatusOverlayByPrKey.keys())e.has(n) || this.richStatusOverlayByPrKey.delete(n);
    }
};

}
