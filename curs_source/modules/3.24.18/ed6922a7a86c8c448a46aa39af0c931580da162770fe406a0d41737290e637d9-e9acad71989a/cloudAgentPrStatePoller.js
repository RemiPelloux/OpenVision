import { Odo, _ji, gji, ket, vji } from "./A3u.js";
import { XCs } from "./DSs.js";
import { Cl, He, Se, po } from "./HVr.js";
import { OEh, vTo } from "./agentEnvironmentTypes.js";
import { bn } from "./async.js";
import { YNn, hm, i2n, wUe } from "./background_composer_pb.js";
import { qwt } from "./cgh.js";
import { Mt_ } from "./cloudAgentDiffConversion.js";
import { bji } from "./cloudAgentRateLimitBackoff.js";
import { TN } from "./connectErrors.js";
import { qTo } from "./generatedFilesConstants.js";
import { pF } from "./githubUtils.js";
import { GIh, TJi, VIh, qIh, zIh } from "./glassPrOperationsPollingConfig.js";
import { OTo } from "./loadedCloudAgent.js";
import { $Eh, BEh, UEh } from "./pullRequestMergeability.js";
import { Tjt, bTo } from "./pullRequestStateConversion.js";
import { FTo } from "./pullRequestStateEquivalence.js";
import { a3i } from "./sparse-diff.js";
import { x } from "./tslib.es6.js";
function LEh(e) {
    const t = Math.min(e.length, OEh);
    for(let n = 0; n < t; n++)if (e.charCodeAt(n) === 0) return !0;
    return !1;
}
function NEh(e, t, n, i, r) {
    if (e) {
        let u = 0, h = 0;
        for (const p of e.lines)p.type === "added" ? u++ : p.type === "removed" && h++;
        return {
            additions: u,
            deletions: h
        };
    }
    if (t) return FJv(t);
    const s = LEh(n) || LEh(i), o = n.length > vTo || i.length > vTo;
    if (s || o) return r?.({
        reason: s ? "binary" : "too_large",
        originalLength: n.length,
        modifiedLength: i.length
    }), {
        additions: 0,
        deletions: 0
    };
    const a = XCs(n.replace(/\r\n?/g, `
`), i.replace(/\r\n?/g, `
`));
    let c = 0, l = 0;
    for (const u of a.lines)u.type === "added" ? c++ : u.type === "removed" && l++;
    return {
        additions: c,
        deletions: l
    };
}
function FJv(e) {
    let t = 0, n = 0;
    const i = e.split(`
`);
    for (const r of i)r.startsWith("+") && !r.startsWith("+++") ? t++ : r.startsWith("-") && !r.startsWith("---") && n++;
    return {
        additions: t,
        deletions: n
    };
}
function BJv(e) {
    if (!e) return;
    const t = e.trim().toLowerCase();
    if (t.length === 0) return;
    const n = BEh[t];
    return n || (UEh.has(t) ? t : "blocked");
}
function UJv(e) {
    const t = BJv(e);
    return t !== void 0 && $Eh.has(t);
}
function $Jv(e) {
    return !e || e.isMerged === void 0 && e.isClosed === void 0 && e.isDraft === void 0 && e.mergeableState === void 0 ? {
        canMerge: void 0,
        mergeError: void 0
    } : {
        canMerge: !e.isMerged && !e.isClosed && !e.isDraft && UJv(e.mergeableState),
        mergeError: void 0
    };
}
function HEh(e) {
    if (!e) return;
    const t = Date.parse(e);
    return Number.isFinite(t) ? t : void 0;
}
function WJv(e) {
    if (!e) return;
    const t = HEh(e.updatedAt);
    if (t !== void 0) return t;
    let n;
    for (const i of [
        e.mergedAt,
        e.closedAt,
        e.createdAt
    ]){
        const r = HEh(i);
        r !== void 0 && (n === void 0 || r > n) && (n = r);
    }
    return n;
}
function GJv(e) {
    if (!e) return [];
    const t = bTo.get(e);
    if (t) return t;
    const n = e.files.map((i)=>{
        const r = a3i.build({
            patch: i.patch
        }), s = i.patch !== void 0, a = !!(r && (i.originalContents !== void 0 && s && i.originalContents === i.patch || i.modifiedContents !== void 0 && s && i.modifiedContents === i.patch || i.originalContents === void 0 && i.modifiedContents === void 0)) ? r : void 0, c = a ? i.status === "added" ? "" : a.contents.original : i.originalContents ?? "", l = a ? i.status === "deleted" ? "" : a.contents.modified : i.modifiedContents ?? "", u = a?.diff, h = NEh(u, i.patch, c, l);
        return {
            path: i.filename,
            renamedFromPath: i.status === "renamed" ? i.previousFilename : void 0,
            originalContent: c,
            modifiedContent: l,
            precomputedDiff: u,
            additions: h.additions,
            deletions: h.deletions,
            fullPath: i.filename,
            baseRef: e?.baseSha ?? "",
            status: i.status,
            isGenerated: i.isGenerated ?? !1
        };
    });
    return bTo.set(e, n), n;
}
function _To(e, t, n) {
    if (!e) return;
    const i = GJv(n), r = t?.state === "closed" || t?.state === "merged" ? !0 : t?.state === "open" ? !1 : void 0, s = t ? $Jv({
        isMerged: t.isMerged,
        isClosed: r,
        isDraft: t.isDraft,
        mergeableState: t.mergeStateStatus
    }) : {
        canMerge: void 0,
        mergeError: void 0
    };
    return {
        prUrl: e,
        branchName: t?.headRefName ?? "",
        baseBranch: t?.baseRefName ?? "",
        baseSha: n?.baseSha?.trim() || void 0,
        headSha: n?.headSha?.trim() || void 0,
        diffs: i,
        isMerged: t?.isMerged,
        isClosed: r,
        prId: t?.id,
        stackParentId: t?.stackParentId,
        stackId: t?.stackId,
        stackPosition: t?.stackPosition,
        stackSource: t?.stackSource,
        mergeableState: t?.mergeStateStatus,
        state: t?.state === "unknown" ? void 0 : t?.state,
        isDraft: t?.isDraft,
        ciStatus: t?.ciStatus,
        title: t?.title,
        body: t?.body,
        reviewDecision: t?.reviewDecision,
        isAutoMergeEnabled: t?.isAutoMergeEnabled,
        viewerCanEnableAutoMerge: t?.isDraft ? void 0 : t?.viewerCanEnableAutoMerge,
        requiresMergeQueue: t?.requiresMergeQueue,
        isInMergeQueue: t?.isInMergeQueue,
        mergeStatusDegradedByRateLimit: t?.mergeStatusDegradedByRateLimit,
        commitCount: t?.commitCount,
        reviewCount: t?.reviewCount,
        reviewers: t?.reviewers,
        requestedReviewers: t?.requestedReviewers,
        authorLogin: t?.authorLogin,
        authorAvatarUrl: t?.authorAvatarUrl,
        createdAt: t?.createdAt,
        recencyAtMs: WJv(t),
        canMerge: s.canMerge,
        mergeError: s.mergeError
    };
}
function BIh(e) {
    if (!e) return !1;
    const t = e.split(/[/\\]/).pop() || e;
    if (qTo.includes(t)) return !0;
    for (const n of qTo)if (n.includes("*")) {
        const i = n.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
        if (new RegExp(`^${i}$`).test(t)) return !0;
    }
    return !1;
}
function Dt_(e, t) {
    return e.map((n)=>{
        const i = n.from === "/dev/null" || !n.from, r = n.to === "/dev/null" || !n.to, s = i ? "added" : r ? "deleted" : n.from !== n.to && n.from && n.to ? "renamed" : "modified", o = i ? n.to : n.from;
        let a = i ? "" : n.beforeFileContents ?? "", c = r ? "" : n.afterFileContents ?? "", l;
        if (!a && !c) {
            const h = a3i.buildFromChunks(n.chunks);
            h && (a = i ? "" : h.contents.original, c = r ? "" : h.contents.modified, l = h.diff);
        }
        const u = n.added != null && n.removed != null && (n.added > 0 || n.removed > 0 || i || r) ? {
            additions: n.added,
            deletions: n.removed
        } : n.chunks && n.chunks.length > 0 ? a3i.countStatsFromChunks(n.chunks) : NEh(l, void 0, a, c, (h)=>t?.onExpensiveDiffSkipped?.(h, {
                path: o
            }));
        return {
            path: o,
            renamedFromPath: s === "renamed" ? n.from : void 0,
            originalContent: a,
            modifiedContent: c,
            precomputedDiff: l,
            additions: u.additions,
            deletions: u.deletions,
            fullPath: r ? n.from : n.to || n.from,
            baseRef: "",
            status: s,
            isGenerated: n.isGenerated ?? BIh(o)
        };
    });
}
function $Ih(e) {
    return e === void 0 ? VIh : e.getDynamicConfig(GIh, {
        disableExposureLog: !0
    });
}
function HIh(e) {
    return e !== void 0 && e.length > 0 ? e : TJi;
}
function Pt_(e) {
    return (e[e.length - 1] ?? 0) + 1e3;
}
function WIh(e) {
    if (e.consecutiveFailures <= 0) return e.baseIntervalMs;
    const t = Math.min(e.consecutiveFailures, qIh), n = e.baseIntervalMs * Math.pow(e.multiplier, t);
    return Math.min(Math.floor(n), e.maxBackoffMs);
}
function Ot_(e) {
    return !!(e.isMerged || e.isClosed);
}
function Ft_(e) {
    return e.precomputedDiff !== void 0 ? !0 : e.originalContent.length > 0 || e.modifiedContent.length > 0;
}
function KIh(e) {
    return e.diffs.length === 0 || e.fileContentsOmitted === !0 ? !1 : e.diffs.every((t)=>!Ft_(t) && (t.additions > 0 || t.deletions > 0 || t.status === "added" || t.status === "deleted"));
}
var zTo, YIh, XIh;
export { $Ih, $Jv, BIh, BJv, Dt_, FJv, Ft_, GJv, HEh, HIh, KIh, LEh, NEh, Ot_, Pt_, UJv, WIh, WJv, XIh, YIh, _To, zTo };
var __wakaru_Bt__initialized = false;
export function Bt_() {
if (__wakaru_Bt__initialized) return;
__wakaru_Bt__initialized = true;
"use strict";
x(), bn(), Se(), hm(), Mt_(), Tjt(), FTo(), zIh(), pF(), bji(), TN(), zTo = 5, YIh = 5 * 6e4, XIh = class {
    constructor(e, t, n, i, r, s, o){
        this._aiService = e, this._structuredLogService = t, this._cacheService = n, this._getTarget = i, this._pullRequestRepositoryService = r, this._experimentService = s, this._onPullRequestStateResolved = o, this._timers = new po, this._burstExtraTimeouts = new po, this._burstCancel = new Map, this._inFlightFetches = new Map, this._cacheHydrated = new Set, this._consecutiveFailures = new Map, this._lastRichFetchAtMs = new Map, this._stopped = new Set, this._fetchGenerationByAgent = new Map;
    }
    _prPollingConfig() {
        return $Ih(this._experimentService);
    }
    _steadyPollIntervalMs() {
        return this._prPollingConfig().cloudAgentPrStatePollIntervalMs;
    }
    _nextFetchGeneration(e) {
        const t = (this._fetchGenerationByAgent.get(e) ?? 0) + 1;
        return this._fetchGenerationByAgent.set(e, t), t;
    }
    _isLatestFetchGeneration(e, t) {
        return this._fetchGenerationByAgent.get(e) === t;
    }
    _isRichRefreshDue(e) {
        const t = this._lastRichFetchAtMs.get(e);
        return t === void 0 || Date.now() - t >= YIh;
    }
    _burstBumpOffsetsMs() {
        return HIh(this._prPollingConfig().cloudAgentPrBurstBumpOffsetsMs);
    }
    start(e) {
        this._stopped.delete(e), !this._timers.has(e) && (this._cacheHydrated.has(e) || (this._cacheHydrated.add(e), this._hydrateFromCache(e)), this._fetch(e, {
            includeScmMetadata: !0
        }));
    }
    startBurst(e, t) {
        this._stopped.delete(e), this._cancelBurst(e);
        const n = new He;
        let i = !1;
        const r = ()=>{
            i || this._fetch(e, {
                suppressFollowingPoll: !0,
                skipDetailedStatusCache: t?.skipCache === !0,
                replaceInFlight: t?.skipCache === !0,
                includeScmMetadata: !0
            });
        };
        r();
        const s = this._burstBumpOffsetsMs();
        for (const a of s)n.add(Cl(r, a));
        n.add(Cl(()=>{
            this._cancelBurst(e);
        }, Pt_(s)));
        const o = ()=>{
            i = !0, this._burstExtraTimeouts.deleteAndDispose(e), this._burstCancel.delete(e), this._stopped.has(e) || this._schedule(e, this._steadyPollIntervalMs());
        };
        this._burstCancel.set(e, o), this._burstExtraTimeouts.set(e, n);
    }
    refreshNow(e, t) {
        this._stopped.delete(e), this._fetch(e, {
            suppressFollowingPoll: !0,
            skipDetailedStatusCache: t?.skipCache === !0,
            replaceInFlight: t?.skipCache === !0,
            includeScmMetadata: !0
        });
    }
    cancelBurst(e) {
        this._cancelBurst(e);
    }
    _cancelBurst(e) {
        this._burstCancel.get(e)?.();
    }
    _schedule(e, t) {
        this._stopped.has(e) || (this._timers.deleteAndDispose(e), this._timers.set(e, Cl(()=>{
            this._timers.deleteAndDispose(e), this._fetch(e);
        }, t)));
    }
    async _hydrateFromCache(e) {
        try {
            const t = await this._cacheService.loadPrState(e);
            if (t && !KIh(t)) {
                const n = this._getTarget(e);
                n && !n.isDisposed && n.pullRequestState.value === void 0 && n.pullRequestState.set({
                    type: "resolved",
                    value: t
                });
            }
        } catch  {
            console.warn(`[PrStatePoller] Cache load failed for agent ${e}`);
        }
    }
    stop(e) {
        this._stopped.add(e), this._clearAgentState(e);
    }
    pause(e) {
        this._stopped.delete(e), this._clearAgentState(e);
    }
    _clearAgentState(e) {
        this._timers.deleteAndDispose(e), this._consecutiveFailures.delete(e), this._lastRichFetchAtMs.delete(e), this._nextFetchGeneration(e);
        const t = this._inFlightFetches.get(e);
        t && (t.abortController.abort(), this._inFlightFetches.delete(e));
    }
    async prefetch(e, t, n, i) {
        try {
            const r = await this._cacheService.loadPrState(e);
            if (r && !KIh(r)) return;
            const s = await this._fetchState(e, t, n, i, {
                includeScmMetadata: !1
            });
            if (!s || i?.aborted || this._stopped.has(e) || this._timers.has(e) || this._inFlightFetches.has(e)) return;
            this._cacheService.savePrState(e, s);
        } catch (r) {
            if (i?.aborted) return;
            vji(r) || this._structuredLogService.warn("background_composer", "CloudAgentPrStatePoller: prefetch failed", {
                agentId: e,
                error: r instanceof Error ? r : void 0
            });
        }
    }
    dispose() {
        for (const e of [
            ...this._burstCancel.keys()
        ])this._stopped.add(e), this._cancelBurst(e);
        this._timers.dispose(), this._burstExtraTimeouts.dispose();
        for (const e of this._inFlightFetches.values())e.abortController.abort();
        this._inFlightFetches.clear(), this._fetchGenerationByAgent.clear(), this._consecutiveFailures.clear(), this._lastRichFetchAtMs.clear(), this._stopped.clear();
    }
    async _fetchScmMetadata(e, t) {
        const [n] = await this._pullRequestRepositoryService.getPullRequestMetadataBatch([
            e
        ], {
            skipCache: t?.skipCache === !0,
            callsite: "cloud_agent_pr_state"
        });
        return n;
    }
    async _fetch(e, t) {
        const n = this._inFlightFetches.get(e), i = !t?.suppressFollowingPoll, r = t?.skipDetailedStatusCache ?? !0, s = t?.includeScmMetadata === !0 || this._isRichRefreshDue(e);
        if (n !== void 0 && t?.replaceInFlight !== !0 && (!r || n.skipDetailedStatusCache) && (!s || n.includeScmMetadata) && n) return n.shouldScheduleFollowing ||= i, n.promise;
        n?.abortController.abort();
        const a = this._nextFetchGeneration(e), c = {
            shouldScheduleFollowing: i
        }, l = new AbortController, u = this._runFetch(e, c, {
            fetchGeneration: a,
            skipDetailedStatusCache: r,
            includeScmMetadata: s,
            signal: l.signal
        }).finally(()=>{
            this._inFlightFetches.get(e)?.promise === u && this._inFlightFetches.delete(e);
        });
        return this._inFlightFetches.set(e, {
            promise: u,
            abortController: l,
            skipDetailedStatusCache: r,
            includeScmMetadata: s,
            get shouldScheduleFollowing () {
                return c.shouldScheduleFollowing;
            },
            set shouldScheduleFollowing (h){
                c.shouldScheduleFollowing = h;
            }
        }), u;
    }
    async _runFetch(e, t, n) {
        if (this._stopped.has(e)) return;
        const i = this._getTarget(e);
        if (!i || i.isDisposed) {
            this.pause(e);
            return;
        }
        try {
            const r = this._getCurrentResolvedPrState(i), s = n?.includeScmMetadata === !0, o = await this._fetchStates(e, i.knownPrUrl, i.knownBranchName, n.signal, {
                skipDetailedStatusCache: n?.skipDetailedStatusCache === !0,
                includeScmMetadata: s,
                isProjectRoot: i.isProjectRoot === !0,
                preserveRichFieldsFrom: s ? void 0 : r
            });
            if (n.signal.aborted || i.isDisposed || this._stopped.has(e) || !this._isLatestFetchGeneration(e, n.fetchGeneration)) return;
            s && this._lastRichFetchAtMs.set(e, Date.now());
            const a = o[0];
            if (!a) {
                const c = i.pullRequestState.value;
                if (c?.type === "resolved" && c.value !== void 0) {
                    t.shouldScheduleFollowing && this._schedule(e, this._steadyPollIntervalMs());
                    return;
                }
                const l = i.applyResolvedPullRequestStates?.([]);
                (l === !0 || l === void 0 && c?.type !== "resolved") && (l === void 0 && i.pullRequestState.set({
                    type: "resolved",
                    value: void 0
                }), this._onPullRequestStateResolved?.(e, void 0, o)), t.shouldScheduleFollowing && this._schedule(e, this._steadyPollIntervalMs());
                return;
            }
            if (this._consecutiveFailures.set(e, 0), s) {
                const c = i.applyResolvedPullRequestStates?.(o);
                (c === !0 || c === void 0 && !OTo(r, a)) && (c === void 0 && i.pullRequestState.set({
                    type: "resolved",
                    value: a
                }), this._cacheService.savePrState(e, a), this._onPullRequestStateResolved?.(e, a, o));
            } else OTo(r, a) || (i.pullRequestState.set({
                type: "resolved",
                value: a
            }), this._cacheService.savePrState(e, a), this._onPullRequestStateResolved?.(e, a));
            if (s && o.every(Ot_)) {
                this.stop(e);
                return;
            }
            t.shouldScheduleFollowing && this._schedule(e, this._steadyPollIntervalMs());
        } catch (r) {
            if (n.signal.aborted || !this._isLatestFetchGeneration(e, n.fetchGeneration)) return;
            const s = _ji(r);
            if (s === "expected-transient-not-found" ? this._structuredLogService.debug("background_composer", "CloudAgentPrStatePoller: diff not available yet", {
                agentId: e
            }) : gji(r) ? this._structuredLogService.debug("background_composer", "CloudAgentPrStatePoller: Failed to fetch pull request state", {
                agentId: e,
                error: r
            }) : (console.error(`[PrStatePoller] Error fetching PR state for agent ${e}:`, r), this._structuredLogService.warn("background_composer", "CloudAgentPrStatePoller: Failed to fetch pull request state", {
                agentId: e,
                error: r instanceof Error ? r : void 0
            })), s === "terminal") {
                this.stop(e);
                return;
            }
            const o = (this._consecutiveFailures.get(e) ?? 0) + 1;
            if (this._consecutiveFailures.set(e, o), !t.shouldScheduleFollowing) return;
            this._scheduleAfterFetchFailure(e, r);
        }
    }
    _scheduleAfterFetchFailure(e, t) {
        const n = this._consecutiveFailures.get(e) ?? 1;
        n >= zTo && this._consecutiveFailures.set(e, 0), this._schedule(e, this._computeAfterFetchFailureDelayMs({
            error: t,
            consecutiveFailures: n
        }));
    }
    _computeAfterFetchFailureDelayMs(e) {
        const t = this._steadyPollIntervalMs(), n = e.randomFn ?? Math.random;
        let i;
        if (e.consecutiveFailures >= zTo) i = t;
        else {
            const r = this._prPollingConfig();
            i = WIh({
                baseIntervalMs: t,
                consecutiveFailures: e.consecutiveFailures,
                multiplier: r.cloudAgentPrErrorBackoffMultiplier,
                maxBackoffMs: r.cloudAgentPrStatePollMaxBackoffMs
            }) + n() * 1e4;
        }
        return ket(e.error) ? Math.max(i, Odo({
            error: e.error,
            normalIntervalMs: t,
            randomFn: n
        })) : i;
    }
    async _fetchStates(e, t, n, i, r) {
        const s = r?.includeScmMetadata === !0, o = await this._fetchState(e, t, n, i, {
            skipDetailedStatusCache: r?.skipDetailedStatusCache === !0,
            includeScmMetadata: s,
            preserveRichFieldsFrom: r?.preserveRichFieldsFrom
        });
        if (!o) return [];
        if (!s) return [
            o
        ];
        if (r?.isProjectRoot === !0) return [
            o
        ];
        const a = await this._fetchAdditionalPullRequestStates({
            agentId: e,
            primaryPrUrl: o.prUrl?.trim(),
            signal: i,
            skipDetailedStatusCache: r?.skipDetailedStatusCache === !0,
            includeScmMetadata: !0
        });
        return [
            o,
            ...a
        ];
    }
    _getCurrentResolvedPrState(e) {
        return e.pullRequestState.value?.type === "resolved" ? e.pullRequestState.value.value : void 0;
    }
    async _fetchState(e, t, n, i, r) {
        const s = await this._aiService.backgroundComposerClient(), o = r?.includeScmMetadata === !0, a = i ? {
            signal: i
        } : void 0, [c, l] = await Promise.all([
            s.getBackgroundComposerPullRequest(new i2n({
                bcId: e
            }), a),
            s.getOptimizedDiffDetails(new YNn({
                bcId: e,
                excludeBeforeAfterDiffs: !1
            }), a)
        ]);
        if (i?.aborted) return;
        const u = c.prUrl || t;
        let h;
        if (u && o && (h = await this._fetchScmMetadata(u, {
            skipCache: r?.skipDetailedStatusCache === !0
        })), i?.aborted) return;
        const p = this._buildState(u, n, l, h);
        if (!p) return;
        const g = r?.preserveRichFieldsFrom;
        return !o && !!g?.prUrl?.trim() && g.prUrl.trim() === p.prUrl?.trim() && g ? this._preserveRichFields(g, p) : p;
    }
    _preserveRichFields(e, t) {
        return {
            ...e,
            prUrl: t.prUrl ?? e.prUrl,
            repoUrl: t.repoUrl ?? e.repoUrl,
            branchName: t.branchName || e.branchName,
            baseBranch: t.baseBranch || e.baseBranch,
            diffs: t.diffs,
            fileContentsOmitted: t.fileContentsOmitted
        };
    }
    async _fetchAdditionalPullRequestStates(e) {
        const t = await this._aiService.backgroundComposerClient?.();
        if (!t?.getBackgroundComposerInfo) return [];
        let n;
        try {
            n = (await t.getBackgroundComposerInfo(new wUe({
                bcId: e.agentId
            }), e.signal ? {
                signal: e.signal
            } : void 0)).composer?.prs ?? [];
        } catch (s) {
            return e.signal?.aborted ? [] : (this._structuredLogService.warn("background_composer", "CloudAgentPrStatePoller: Failed to fetch additional pull requests", {
                agentId: e.agentId,
                error: s instanceof Error ? s : void 0
            }), []);
        }
        if (e.signal?.aborted) return [];
        const i = new Set;
        e.primaryPrUrl && i.add(e.primaryPrUrl);
        const r = [];
        for (const s of n){
            if (e.signal?.aborted) break;
            const o = s.prUrl?.trim();
            if (!(!o || i.has(o))) {
                i.add(o);
                try {
                    const a = await this._fetchStateForComposerPr({
                        agentId: e.agentId,
                        prUrl: o,
                        pr: s,
                        signal: e.signal,
                        skipDetailedStatusCache: e.skipDetailedStatusCache === !0,
                        includeScmMetadata: e.includeScmMetadata === !0
                    });
                    a && r.push(a);
                } catch (a) {
                    if (e.signal?.aborted) break;
                    this._structuredLogService.warn("background_composer", "CloudAgentPrStatePoller: Failed to fetch additional pull request state", {
                        agentId: e.agentId,
                        prUrl: o,
                        error: a instanceof Error ? a : void 0
                    });
                }
            }
        }
        return r;
    }
    async _fetchStateForComposerPr(e) {
        const { agentId: t, prUrl: n, pr: i, signal: r } = e, s = await this._aiService.backgroundComposerClient(), o = qwt(n), a = e.includeScmMetadata === !0, c = r ? {
            signal: r
        } : void 0, l = await s.getOptimizedDiffDetails(new YNn({
            bcId: t,
            excludeBeforeAfterDiffs: !1,
            branchName: i.branchName || void 0,
            repoUrl: o
        }), c);
        if (r?.aborted) return;
        const u = a ? await this._fetchScmMetadata(n, {
            skipCache: e.skipDetailedStatusCache === !0
        }) : void 0;
        if (!r?.aborted) return this._buildState(n, i.branchName || void 0, l, u);
    }
    _buildState(e, t, n, i) {
        const r = n.diff?.diffs ?? [], s = Dt_(r, {
            onExpensiveDiffSkipped: (a, c)=>this._structuredLogService.debug("background_composer", "CloudAgentPrStatePoller: skipped expensive PR diff to avoid blocking the UI thread", {
                    prUrl: e,
                    path: c.path,
                    reason: a.reason,
                    originalLength: a.originalLength,
                    modifiedLength: a.modifiedLength
                })
        });
        if (s.length === 0 && !e) return;
        const o = _To(e, i, void 0);
        return {
            ...o,
            prUrl: e,
            repoUrl: qwt(e),
            branchName: o?.branchName || t || "",
            baseBranch: o?.baseBranch ?? "",
            diffs: s,
            fileContentsOmitted: n.diff?.fileContentsOmitted
        };
    }
};

}
