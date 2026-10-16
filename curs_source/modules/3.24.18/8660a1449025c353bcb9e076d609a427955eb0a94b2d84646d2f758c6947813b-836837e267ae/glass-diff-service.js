import { Di, Ec, Ei, Gt, Nt, Pn, Qe, Vn, Ya, Zm, da, en, st, tt, xa } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { HEg } from "./Ycg.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { bo } from "./arrays.js";
import { Ebe, c_ } from "./async.cursor.js";
import { qn, xI } from "./async.js";
import { kl } from "./browser.ts";
import { ARt } from "./diff-render-limits.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Zq } from "./files.js";
import { Jv, hy } from "./gitContextService.js";
import { qKr } from "./gitExtensionRequestRecorder.js";
import { AL, _N } from "./glass-configuration-service.js";
import { aw, vN } from "./glass-context-key-service.js";
import { MFi, n0v } from "./glass-diff-batched-patch.js";
import { XS0 } from "./glass-diff-committed-branch-model.js";
import { e10 } from "./glass-diff-committed-branch-parsing.js";
import { VZl } from "./glass-diff-committed-selection.js";
import { Vwv } from "./glass-diff-git-root.js";
import { ZRs, t10 } from "./glass-diff-material-store.js";
import { S0v, n10 } from "./glass-diff-material-tokenizer.js";
import { MRt, rYe } from "./glass-diff-types.js";
import { EOn, KRs, LFi, NFi, PRt, QZl, XQt, XRs, ZZl, g0v, h0v, m0v, p0v } from "./glass-diff-utils.js";
import { BS0 } from "./glass-diff-windows-path.js";
import { qRs, xRt } from "./glass-editor-constants.js";
import { hv, t_ } from "./glass-file-service.js";
import { N2, pI } from "./glass-host-service.js";
import { Jye, ege } from "./glass-language-service.js";
import { Zu, eu } from "./glass-log-service.js";
import { F$, s9 } from "./glass-path-service.js";
import { BZl, IRt, VQt } from "./glass-scm-service.js";
import { Hut, ZBe } from "./glass-uri-identity-service.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { qMa } from "./hunk-backed-diff.js";
import { Mt } from "./index_197.js";
import { It } from "./instantiation.js";
import { BLa } from "./ipa.js";
import { tB } from "./mime.js";
import { Ki, Ot } from "./network.js";
import { Jc } from "./observable.js";
import { DFi, HS0, HZl, JBe, JS0, KQt, KS0, KZl, QBe, QRs, QS0, Qwv, VS0, XZl, YS0, YZl, Ywv, e0v, i0v, l0v, r0v, r10, s10, tge, y0v, zRs, zS0, zwv } from "./ofv.js";
import { MB } from "./pathUtils.js";
import { EC, Ul, lh } from "./path_2.js";
import { I0n } from "./sparse-diff.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Lpe, fie } from "./workspaceConnectionService.js";
import { Zbm, j81 } from "./yBp.js";
import { Hve, v5e } from "./ze.js";
var bU, tQl, w0v, nQl, C0v, T0v, E0v, ZQt, JRs, I0v, x0v, iQl, A0v, rQl, e2s;
export { A0v, C0v, E0v, I0v, JRs, T0v, ZQt, bU, e2s, iQl, nQl, rQl, tQl, w0v, x0v };
var __wakaru_$G_initialized = false;
export function $G() {
if (__wakaru_$G_initialized) return;
__wakaru_$G_initialized = true;
"use strict";
E(), VQt(), Jye(), F$(), N2(), Mt(), kl(), bo(), c_(), qn(), Ei(), Gt(), Qe(), tB(), Ki(), Jc(), Ul(), Di(), fn(), aw(), hv(), Rn(), It(), Hut(), xd(), Ss(), hy(), qKr(), _s(), MB(), Lpe(), Vwv(), BS0(), AL(), qRs(), Zu(), ARt(), n0v(), XS0(), e10(), VZl(), t10(), n10(), MRt(), PRt(), bU = jn("glassDiffService"), tQl = "glass_scm_dynamic_base_branch", w0v = "glass_precompute_diff_tokenization", nQl = {
    kind: "renderable"
}, C0v = {
    kind: "unavailable",
    reason: "unavailableByteSize"
}, T0v = {
    kind: "deferred",
    reason: "largeDiffStatsBudget"
}, E0v = 10, ZQt = "4b825dc642cb6eb9a060e54bf8d69288fbee4904", JRs = Object.freeze([]), I0v = 100, x0v = "Git provider is not available", iQl = 5, A0v = new Ebe(g0v), rQl = class extends Error {
    constructor(t, e){
        super(`Media file too large to preview (${e} bytes): ${t}`);
    }
}, e2s = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g){
        super(), this._workspaceConnectionService = d, this._contextKeyService = h, this._uriIdentityService = p, this._configurationService = g, this._onDidChangeLoadingState = this._register(new tt), this.onDidChangeLoadingState = this._onDidChangeLoadingState.event, this._onDidInvalidateSubmodule = this._register(new tt), this.onDidInvalidateSubmodule = this._onDidInvalidateSubmodule.event, this._onDidChangeBranchContext = this._register(new tt), this.onDidChangeBranchContext = this._onDidChangeBranchContext.event, this._onDidRefreshScopeEntries = this._register(new tt), this.onDidRefreshScopeEntries = this._onDidRefreshScopeEntries.event, this._onDidChangeHasUnpushedCommits = this._register(new tt), this.onDidChangeHasUnpushedCommits = this._onDidChangeHasUnpushedCommits.event, this._onDidChangeWorkspaceRootRepositories = this._register(new tt), this.onDidChangeWorkspaceRootRepositories = this._onDidChangeWorkspaceRootRepositories.event, this._onDidChangeCommittedBranchModel = this._register(new tt), this.onDidChangeCommittedBranchModel = this._onDidChangeCommittedBranchModel.event, this._onDidChangeLargeDiffLoadOptIns = this._register(new tt), this.onDidChangeLargeDiffLoadOptIns = this._onDidChangeLargeDiffLoadOptIns.event, this._statsBudgetLoadOptIns = new Set, this._workspacePathLib = xa ? EC : lh, this._workspaceRootRepositories = [], this._cwd = "", this._gitRepoRootFsPath = "", this._cache = YZl(), this._committedBranchModelState = JBe(), this._committedBaseRefPending = !1, this._manualCommittedBaseByRepo = new Map, this._knownRemoteNamesByCwd = new Map, this._repositoryRuntimeContexts = new Map, this._hasUnpushedCommits = !1, this._hasUnpushedCommitsRefreshInFlight = !1, this._forceFreshStatusScopeReads = !1, this._hasUnpushedCommitsRefreshQueuedAfterInFlight = !1, this._lastHasUnpushedCommitsRefreshTime = 0, this._listeners = new Map, this._refreshRunning = !1, this._lastRefreshCompletedTime = 0, this._consecutiveGitUnavailableRefreshes = 0, this._committedBranchAutoRefreshEnabled = !1, this._committedBranchAutoRefreshInFlight = !1, this._committedBranchAutoRefreshEpoch = 0, this._committedBranchAutoRefreshSkippedWhileUnfocused = !1, this._committedScopeRefreshEpoch = 0, this._refreshAfterRefocusPending = !1, this._hostHasFocus = !0, this._pendingScopeRefreshTimers = this._register(new da), this._scopeRefreshCoalesceStartedAt = new Map, this._trackedScopesRefreshScheduled = !1, this._trackedScopesRefreshEpoch = 0, this._pendingTrackedScopesRefreshTimer = this._register(new Vn), this._lastTrackedScopesRefreshCompletedTime = 0, this._ownWritesInFlight = 0, this._trackedScopeRefreshesInFlight = 0, this._recentGitStatusEventTimestampsMs = [], this._gitOperationWasInProgress = !1, this._scmRepositoryDisposables = this._register(new Nt), this._workspaceFileWatcherDisposables = this._register(new Nt), this._mediaBlobUrls = new Map, this._diffMaterialStore = new ZRs, this._submodulePaths = new Set, this._submoduleDiffCache = new Map, this._allChangesStatsInFlight = new Map, this._unifiedBaseRefInFlight = new Map, this.subscribe = (f, _)=>{
            let b = this._listeners.get(f);
            return b || (b = new Set, this._listeners.set(f, b)), b.add(_), Pn(()=>{
                b.delete(_), b.size === 0 && this._listeners.delete(f);
            });
        }, this._gitContextService = t, this._patchFetcher = this._register(new MFi({
            fetchCombined: (f, _, b)=>this._gitContextService.getDiffFilesPatch({
                    cwd: f,
                    ..._,
                    filePaths: b
                })
        })), this._contentFetchLimiter = this._register(new xI(E0v)), this._scmService = n, this._scmViewService = i, this._workspaceContextService = e, this._experimentService = r, this._fileService = s, this._logService = c, this._analyticsService = u, this._pathService = a, this._materialTokenizer = this._register(new S0v(l, c)), this._workspacePathLibPromise = this._pathService.path.then((f)=>{
            const _ = this._workspacePathLib.sep;
            return this._workspacePathLib = f, f.sep !== _ && !this._isDisposed && this._refreshWorkspaceRootRepositoriesAndSelection({
                shouldRefreshDiff: !0
            }), f;
        }), this._refreshAfterRefocusPending = !o.hasFocus, this._hostHasFocus = o.hasFocus, this._refreshWorkspaceRootRepositoriesAndSelection({
            shouldRefreshDiff: !1
        }), this._register(t.onDidRunGitStatus(()=>{
            this._onGitStatusWasRun({
                source: "status"
            });
        })), this._register(t.onDidGitPush(()=>{
            this._consumeAutomaticRefreshDuringGitOperation() || this._scheduleHasUnpushedCommitsRefresh();
        })), this._register(t.onDidGitHeadChange(()=>{
            this._consumeAutomaticRefreshDuringGitOperation() || (this._scheduleRefresh(), this._scheduleHasUnpushedCommitsRefresh());
        })), this._register(t.onDidChangeCachedBranch(({ cwd: f })=>{
            f === this._gitCwd && (this._consumeAutomaticRefreshDuringGitOperation() || (this._scheduleRefresh(), this._scheduleHasUnpushedCommitsRefresh()));
        })), this._register(t.onDidChangeGitContextProvider((f)=>{
            if (!f) {
                this._logService.warn(`[GlassDiffService] IGitContextService provider unregistered (cwd=${this._cwd || "<empty>"}, lastKnownGitRepoRoot=${this._gitRepoRootFsPath || "<unknown>"})`);
                return;
            }
            this._refreshWorkspaceRootRepositoriesAndSelection({
                shouldRefreshDiff: !0
            }), this._scheduleRefresh(), this._scheduleHasUnpushedCommitsRefresh();
        })), this._register(o.onDidChangeFocus((f)=>{
            this._onHostFocusChanged(f);
        })), this._register(this._workspaceConnectionService.connectionState.onChange((f)=>{
            f === "connected" && (this._consumeAutomaticRefreshDuringGitOperation() || (this._scheduleRefresh(), this._scheduleHasUnpushedCommitsRefresh()));
        })), this._register(n.onDidAddRepository(()=>{
            this._refreshWorkspaceRootRepositoriesAndSelection({
                shouldRefreshDiff: !0
            }), this._wireScmRepositoryListeners(), this._scheduleTrackedScopesRefresh();
        })), this._register(n.onDidRemoveRepository(()=>{
            this._refreshWorkspaceRootRepositoriesAndSelection({
                shouldRefreshDiff: !0
            }), this._wireScmRepositoryListeners(), this._scheduleTrackedScopesRefresh();
        })), this._register(e.onDidChangeWorkspaceFolders(()=>{
            this._refreshWorkspaceRootRepositoriesAndSelection({
                shouldRefreshDiff: !0
            });
        })), this._register(Hve(this._scmViewService.activeRepository, ()=>{
            this._refreshWorkspaceRootRepositoriesAndSelection({
                shouldRefreshDiff: !0
            });
        })), this._wireScmRepositoryListeners(), this._wireWorkspaceFileWatcher(), this._initialize();
    }
    dispose() {
        this._clearPendingRefreshScheduling(), this._stopCommittedBranchAutoRefreshTimer();
        const t = new Set;
        for (const e of this._mediaBlobUrls.values())t.add(e.value);
        for (const e of this._repositoryRuntimeContexts.values())for (const n of e.mediaBlobUrls.values())t.add(n.value);
        for (const e of t.values())URL.revokeObjectURL(e);
        this._mediaBlobUrls.clear(), this._diffMaterialStore.clear(), this._allChangesStatsInFlight.clear(), this._repositoryRuntimeContexts.clear(), this._advancedCommittedMergeBaseMemo = void 0, super.dispose();
    }
    get _isDisposed() {
        return this._store.isDisposed;
    }
    _uriToWorkspacePath(t) {
        return this._workspacePathLib.sep === "/" ? t.path : t.fsPath;
    }
    _syncCwdWithRootUri() {
        if (!this._rootUri) return;
        const t = this._uriToWorkspacePath(this._rootUri);
        this._cwd = t;
        const e = this._activeRepositoryRuntimeContextId;
        if (!e) return;
        const n = this._repositoryRuntimeContexts.get(e);
        n && (n.cwd = t);
    }
    get _gitCwd() {
        return this._cwd || this._gitRepoRootFsPath;
    }
    async _ensureWorkspacePathLib() {
        try {
            await this._workspacePathLibPromise;
        } catch  {}
        this._syncCwdWithRootUri();
    }
    _onGitStatusWasRun({ source: t }) {
        this._consumeAutomaticRefreshDuringGitOperation() || (t === "status" && this._recordGitStatusEvent(), this._scheduleTrackedScopesRefreshForSignal(), this._scheduleHasUnpushedCommitsRefresh());
    }
    _recordGitStatusEvent(t = Date.now()) {
        this._recentGitStatusEventTimestampsMs.push(t);
        const e = t - ZZl;
        for(; this._recentGitStatusEventTimestampsMs.length > 0 && (this._recentGitStatusEventTimestampsMs[0] ?? 0) < e;)this._recentGitStatusEventTimestampsMs.shift();
    }
    _isGitOperationInProgress() {
        for (const t of h0v)if (this._contextKeyService.getContextKeyValue(t) === !0) return !0;
        return !1;
    }
    _consumeAutomaticRefreshDuringGitOperation() {
        return this._isGitOperationInProgress() ? (this._beginOrContinueGitOperationDeferral(), !0) : this._gitOperationWasInProgress ? (this._finishGitOperationDeferral(), !0) : !1;
    }
    _beginOrContinueGitOperationDeferral() {
        this._gitOperationWasInProgress || (this._clearPendingRefreshScheduling(), this._invalidateInFlightTrackedScopeRefreshes(), this._logService.trace(`[GlassDiffService] Deferring automatic refresh during in-progress git operation (cwd=${this._cwd || "<empty>"})`)), this._gitOperationWasInProgress = !0;
    }
    _finishGitOperationDeferral() {
        this._gitOperationWasInProgress = !1, this._recentGitStatusEventTimestampsMs = [], this._invalidateInFlightTrackedScopeRefreshes(), this._pendingRefreshTimer !== void 0 && (clearTimeout(this._pendingRefreshTimer), this._pendingRefreshTimer = void 0), this._fullRefreshCoalesceStartedAt = void 0, this._runCommittedBranchAutoRefreshCatchUpIfSkipped(), this._refreshRunning ? this._scheduleRefresh() : this._refresh(rYe.immediate), this._requestHasUnpushedCommitsRefresh();
    }
    _invalidateInFlightTrackedScopeRefreshes() {
        this._trackedScopesRefreshEpoch += 1, this._trackedScopesRefreshScheduled = !1, this._pendingTrackedScopesRefreshTimer.clear(), this._trackedScopesRefreshCoalesceStartedAt = void 0;
    }
    _resetGitOperationRefreshState() {
        this._recentGitStatusEventTimestampsMs = [], this._gitOperationWasInProgress = this._isGitOperationInProgress(), this._invalidateInFlightTrackedScopeRefreshes();
    }
    _getStatusDrivenCooldownMs(t = Date.now()) {
        return zS0({
            recentEventTimestampsMs: this._recentGitStatusEventTimestampsMs,
            nowMs: t
        });
    }
    async _runOwnWrite(t) {
        this._ownWritesInFlight += 1;
        const e = this._trackedScopeRefreshesInFlight > 0 || this._pendingTrackedScopesRefreshTimer.value !== void 0;
        e && this._invalidateInFlightTrackedScopeRefreshes();
        try {
            return await t();
        } finally{
            this._ownWritesInFlight -= 1, e && this._scheduleTrackedScopesRefresh();
        }
    }
    _getSignalRefreshDelayMs() {
        const t = Date.now(), e = this._getStatusDrivenCooldownMs(t), n = Math.max(this._lastRefreshCompletedTime, this._lastTrackedScopesRefreshCompletedTime);
        return !this._refreshRunning && this._ownWritesInFlight === 0 && this._trackedScopeRefreshesInFlight === 0 && this._pendingTrackedScopesRefreshTimer.value === void 0 && t - n >= e ? 0 : e;
    }
    _onHostFocusChanged(t) {
        if (this._hostHasFocus = t, !t) {
            this._refreshAfterRefocusPending = !0;
            return;
        }
        if (this._refreshAfterRefocusPending) {
            if (this._refreshAfterRefocusPending = !1, this._consumeAutomaticRefreshDuringGitOperation()) return;
            this._runCommittedBranchAutoRefreshCatchUpIfSkipped(), this._scheduleRefresh(), this._scheduleHasUnpushedCommitsRefresh();
        }
    }
    _createRepositoryRuntimeContext(t) {
        return {
            cwd: t ? this._uriToWorkspacePath(t) : "",
            rootUri: t,
            gitRepoRootFsPath: "",
            cache: YZl(),
            committedBranchModelState: JBe(),
            hasUnpushedCommits: !1,
            mediaBlobUrls: new Map,
            diffMaterialStore: new ZRs,
            submodulePaths: new Set,
            submoduleDiffCache: new Map,
            allChangesStatsInFlight: new Map
        };
    }
    _persistActiveRepositoryRuntimeContext() {
        const t = this._activeRepositoryRuntimeContextId;
        if (!t) return;
        const e = this._repositoryRuntimeContexts.get(t);
        e && (e.cwd = this._cwd, e.rootUri = this._rootUri, e.gitRepoRootFsPath = this._gitRepoRootFsPath, e.cache = this._cache, e.committedBranchModelState = this._committedBranchModelState, e.hasUnpushedCommits = this._hasUnpushedCommits, e.mediaBlobUrls = this._mediaBlobUrls, e.diffMaterialStore = this._diffMaterialStore, e.submodulePaths = this._submodulePaths, e.submoduleDiffCache = this._submoduleDiffCache, e.allChangesStatsInFlight = this._allChangesStatsInFlight);
    }
    _setActiveRepositoryRuntimeContext(t) {
        this._persistActiveRepositoryRuntimeContext();
        const e = this._activeRepositoryRuntimeContextId;
        let n;
        t.repositoryId ? (n = this._repositoryRuntimeContexts.get(t.repositoryId) ?? this._createRepositoryRuntimeContext(t.rootUri), n.rootUri = t.rootUri, n.cwd = t.rootUri ? this._uriToWorkspacePath(t.rootUri) : "", this._repositoryRuntimeContexts.set(t.repositoryId, n), this._activeRepositoryRuntimeContextId = t.repositoryId) : (n = this._createRepositoryRuntimeContext(t.rootUri), this._activeRepositoryRuntimeContextId = void 0);
        const i = this._hasUnpushedCommits;
        this._cwd = n.cwd, this._rootUri = n.rootUri, this._gitRepoRootFsPath = n.gitRepoRootFsPath, this._cache = n.cache, this._committedRangeAnchorSha = void 0, this._setCommittedBranchModelState(n.committedBranchModelState), this._activeRepositoryRuntimeContextId !== e && (this._committedBaseRefOverride = void 0, this._committedBaseRefPending = !1), this._hasUnpushedCommits = n.hasUnpushedCommits, this._mediaBlobUrls = n.mediaBlobUrls, this._diffMaterialStore = n.diffMaterialStore, this._submodulePaths = n.submodulePaths, this._submoduleDiffCache = n.submoduleDiffCache, this._allChangesStatsInFlight = n.allChangesStatsInFlight, this._emitCommittedBranchModelIfChanged(), this._hasUnpushedCommits !== i && this._onDidChangeHasUnpushedCommits.fire(this._hasUnpushedCommits);
    }
    _pruneRepositoryRuntimeContexts() {
        const t = new Set(this._workspaceRootRepositories.map(({ repository: e })=>e.id));
        for (const [e, n] of this._repositoryRuntimeContexts)if (!t.has(e)) {
            for (const i of n.mediaBlobUrls.values())URL.revokeObjectURL(i.value);
            this._repositoryRuntimeContexts.delete(e);
        }
    }
    _clearPendingRefreshScheduling() {
        this._pendingRefreshTimer !== void 0 && (clearTimeout(this._pendingRefreshTimer), this._pendingRefreshTimer = void 0), this._pendingHasUnpushedCommitsRefreshTimer !== void 0 && (clearTimeout(this._pendingHasUnpushedCommitsRefreshTimer), this._pendingHasUnpushedCommitsRefreshTimer = void 0), this._pendingScopeRefreshTimers.clearAndDisposeAll(), this._fullRefreshCoalesceStartedAt = void 0, this._scopeRefreshCoalesceStartedAt.clear(), this._pendingTrackedScopesRefreshTimer.clear(), this._trackedScopesRefreshCoalesceStartedAt = void 0, this._trackedScopesRefreshScheduled = !1;
    }
    _resetWorkspaceRootCaches() {
        for (const l of this._mediaBlobUrls.values())URL.revokeObjectURL(l.value);
        const t = YZl(), e = new Map, n = new ZRs, i = new Set, r = new Map, s = new Map;
        this._cache = t, this._committedRangeAnchorSha = void 0, this._setCommittedBranchModelState(JBe()), this._mediaBlobUrls = e, this._diffMaterialStore = n, this._submodulePaths = i, this._submoduleDiffCache = r, this._allChangesStatsInFlight = s, this._emitCommittedBranchModelIfChanged();
        const o = this._activeRepositoryRuntimeContextId;
        if (!o) return;
        const a = this._repositoryRuntimeContexts.get(o);
        a && (a.cache = t, a.mediaBlobUrls = e, a.diffMaterialStore = n, a.submodulePaths = i, a.submoduleDiffCache = r, a.allChangesStatsInFlight = s);
    }
    _refreshWorkspaceRootRepositoriesAndSelection(t) {
        const e = this._workspaceRootRepositories.map(({ repository: f })=>f.id).join(","), n = this._selectedWorkspaceRootRepositoryId, i = this._activeWorkspaceRootRepositoryId, r = this._rootUri?.toString(), s = this._resolveWorkspaceRootRepositories();
        this._workspaceRootRepositories = s;
        const o = this._selectedWorkspaceRootRepositoryId !== void 0 ? s.find(({ repository: f })=>f.id === this._selectedWorkspaceRootRepositoryId) : void 0;
        this._selectedWorkspaceRootRepositoryId !== void 0 && o === void 0 && (this._selectedWorkspaceRootRepositoryId = void 0);
        const a = this._scmViewService.activeRepository.get(), l = o ?? (a && s.find(({ repository: f })=>f.id === a.id)) ?? s[0];
        this._activeWorkspaceRootRepositoryId = l?.repository.id, this._setActiveRepositoryRuntimeContext({
            repositoryId: this._activeWorkspaceRootRepositoryId,
            rootUri: l?.rootUri
        }), this._pruneRepositoryRuntimeContexts();
        const c = this._workspaceRootRepositories.map(({ repository: f })=>f.id).join(","), u = this._rootUri?.toString(), d = c !== e, h = this._selectedWorkspaceRootRepositoryId !== n, p = this._activeWorkspaceRootRepositoryId !== i, g = u !== r;
        (d || h || p) && this._onDidChangeWorkspaceRootRepositories.fire(), p && (this._clearPendingRefreshScheduling(), this._resetGitOperationRefreshState()), (p || g) && (this._consecutiveGitUnavailableRefreshes = 0), g && (this._resetWorkspaceRootCaches(), this._gitRepoRootFsPath = "", this._wireWorkspaceFileWatcher(), this._wireScmRepositoryListeners(), t.shouldRefreshDiff && (this._scheduleRefresh(), this._scheduleHasUnpushedCommitsRefresh()));
    }
    _isUriAtOrInside(t, e) {
        return this._uriIdentityService.extUri.isEqualOrParent(e, t);
    }
    _isUriAtOrInsideForRepoMatching(t, e) {
        return this._isUriAtOrInside(t, e) || this._isWindowsHost && t.scheme === Ot.vscodeRemote && e.scheme === t.scheme && e.authority === t.authority && Ywv(t.path, e.path);
    }
    get _isWindowsHost() {
        return this._workspacePathLib.sep === EC.sep;
    }
    _isUriStrictlyInside(t, e) {
        return this._uriIdentityService.extUri.isEqualOrParent(e, t) && !this._uriIdentityService.extUri.isEqual(e, t);
    }
    _resolveWorkspaceRootRepositories() {
        const t = this._workspaceContextService.getWorkspace().folders, e = [], n = new Set;
        for (const r of this._scmService.repositories){
            if (!this._isGitScmRepository(r)) continue;
            const s = r.provider.rootUri;
            if (!s || n.has(r.id)) continue;
            const o = t.find((l)=>this._isUriAtOrInsideForRepoMatching(s, l.uri)), a = o ?? t.find((l)=>this._isUriAtOrInsideForRepoMatching(l.uri, s));
            a && (n.add(r.id), e.push({
                repository: r,
                folder: a,
                rootUri: s,
                ownsFolder: o !== void 0,
                worktree: j81(s)
            }));
        }
        const i = (r)=>r.ownsFolder || r.worktree !== void 0 ? !0 : !e.some((o)=>o !== r && o.ownsFolder && this._isUriStrictlyInside(o.rootUri, r.rootUri));
        return e.filter(i).map((r)=>({
                repository: r.repository,
                label: r.folder.name,
                rootUri: r.rootUri,
                worktree: r.worktree
            }));
    }
    _wireWorkspaceFileWatcher() {
        if (this._workspaceFileWatcherDisposables.clear(), !this._rootUri) return;
        const t = this._rootUri;
        this._workspaceFileWatcherDisposables.add(this._fileService.onDidFilesChange((e)=>{
            this._onWorkspaceFilesChanged(e, t);
        }));
    }
    _onWorkspaceFilesChanged(t, e) {
        t.affects(e, Zq.ADDED, Zq.UPDATED, Zq.DELETED) && (this._staleMaterialsForChangedWorktreeFiles(t, e), this._scheduleRefreshForChangedFiles(t, e));
    }
    _scheduleRefreshForChangedFiles(t, e) {
        if (t.affects(rt.joinPath(e, ".git"), Zq.ADDED, Zq.UPDATED) || this._hasDeletedGitMetadata(t, e)) {
            this._onGitStatusWasRun({
                source: "watcher"
            });
            return;
        }
        this._consumeAutomaticRefreshDuringGitOperation() || this._scheduleTrackedScopesRefreshForSignal();
    }
    _staleMaterialsForChangedWorktreeFiles(t, e) {
        for (const n of [
            ...t.rawAdded,
            ...t.rawUpdated
        ]){
            const i = this._toWorktreeFilePath(n, e);
            i !== void 0 && this._markFileContentStale(i) && this._emit({
                scope: "unstaged",
                event: {
                    type: "fileContentUpdated",
                    payload: {
                        path: i
                    }
                }
            });
        }
    }
    _markFileContentStale(t) {
        const e = this._diffMaterialStore.hasMaterial(t);
        e && this._diffMaterialStore.markStale(t);
        let n = !1;
        for (const i of [
            "unstaged",
            "staged",
            "committed"
        ]){
            const r = QBe({
                scope: i,
                filePath: t
            });
            this._mediaBlobUrls.has(r) && (n = !0, this._markImageBlobUrlStale(r));
        }
        return e || n;
    }
    _toWorktreeFilePath(t, e) {
        if (!this._isUriAtOrInside(e, t)) return;
        const n = e.path.replace(/\/+$/, "") || "/", i = t.path.slice(n === "/" ? 1 : n.length + 1);
        if (!(!i || i === ".git" || i.startsWith(".git/"))) return i;
    }
    _hasDeletedGitMetadata(t, e) {
        const n = rt.joinPath(e, ".git");
        return t.rawDeleted.some((i)=>this._uriIdentityService.extUri.isEqualOrParent(i, n));
    }
    _scheduleTrackedScopesRefreshForSignal() {
        this._scheduleTrackedScopesRefresh(void 0, !0);
    }
    _scheduleTrackedScopesRefresh(t, e = !1) {
        if (this._isDisposed) return;
        this._trackedScopesRefreshScheduled = !0;
        const n = e && this._ownWritesInFlight === 0 && this._leadingRefreshEpoch === this._trackedScopesRefreshEpoch, i = n ? this._trackedScopesRefreshEpoch : ++this._trackedScopesRefreshEpoch, r = t ?? (e ? this._getSignalRefreshDelayMs() : this._getStatusDrivenCooldownMs()), s = e && r === 0, { delayMs: o, coalesceStartedAtMs: a } = KZl({
            cooldownRemainingMs: r,
            coalesceStartedAtMs: this._trackedScopesRefreshCoalesceStartedAt,
            nowMs: Date.now()
        });
        this._trackedScopesRefreshCoalesceStartedAt = a, this._pendingScopeRefreshTimers.deleteAndDispose("unstaged"), this._pendingScopeRefreshTimers.deleteAndDispose("staged"), this._scopeRefreshCoalesceStartedAt.delete("unstaged"), this._scopeRefreshCoalesceStartedAt.delete("staged"), this._pendingTrackedScopesRefreshTimer.value = Ec(()=>{
            this._pendingTrackedScopesRefreshTimer.clear(), this._trackedScopesRefreshCoalesceStartedAt = void 0, this._runTrackedScopesRefresh(n ? ++this._trackedScopesRefreshEpoch : i, s);
        }, o);
    }
    async _runTrackedScopesRefresh(t, e = !1) {
        if (!(this._isDisposed || t !== this._trackedScopesRefreshEpoch)) {
            if (this._refreshRunning) {
                this._scheduleTrackedScopesRefresh(this._getStatusDrivenCooldownMs());
                return;
            }
            this._trackedScopeRefreshesInFlight += 1, e && (this._leadingRefreshEpoch = t);
            try {
                await Promise.all([
                    this._refreshScope("unstaged", !1, t),
                    this._refreshScope("staged", !1, t)
                ]);
            } catch (n) {
                this._logService.warn(`[GlassDiffService] Failed to refresh tracked scopes (cwd=${this._gitCwd || "<empty>"}):`, n);
            } finally{
                this._trackedScopeRefreshesInFlight = Math.max(0, this._trackedScopeRefreshesInFlight - 1), this._leadingRefreshEpoch === t && (this._leadingRefreshEpoch = void 0), this._lastTrackedScopesRefreshCompletedTime = Date.now();
                const n = this._pendingTrackedScopesRefreshTimer.value !== void 0 || this._pendingScopeRefreshTimers.has("unstaged") || this._pendingScopeRefreshTimers.has("staged");
                t === this._trackedScopesRefreshEpoch && !n && this._trackedScopeRefreshesInFlight === 0 && (this._trackedScopesRefreshScheduled = !1);
            }
        }
    }
    _applyOptimisticScopeTransfer(t) {
        const e = this._cache.snapshots[t.fromScope], n = this._cache.snapshots[t.toScope], i = new Set;
        for (const u of t.pathQueries){
            const d = XZl({
                pathQuery: u,
                existingFilePaths: e.filePaths
            });
            for (const h of d)i.add(h);
        }
        if (i.size === 0) return;
        const r = e.filePaths.filter((u)=>i.has(u)), s = Object.freeze(e.filePaths.filter((u)=>!i.has(u))), o = new Set(n.filePaths), a = Object.freeze([
            ...n.filePaths,
            ...r.filter((u)=>o.has(u) ? !1 : (o.add(u), !0))
        ]), l = !Zm(s, e.filePaths), c = !Zm(a, n.filePaths);
        l && (this._cache.snapshots[t.fromScope] = Object.freeze({
            filePaths: s,
            isLoading: e.isLoading,
            error: e.error
        })), c && (this._cache.snapshots[t.toScope] = Object.freeze({
            filePaths: a,
            isLoading: n.isLoading,
            error: n.error
        }));
        for (const u of r){
            const d = QBe({
                scope: t.fromScope,
                filePath: u
            }), h = QBe({
                scope: t.toScope,
                filePath: u
            }), p = this._cache.fileEntries.get(d);
            p && this._cache.fileEntries.set(h, p), this._cache.fileEntries.delete(d), this._markImageBlobUrlStale(d), this._markImageBlobUrlStale(h), this._diffMaterialStore.evictPath(u);
        }
        c && this._emit({
            scope: t.toScope,
            event: {
                type: "scopeSnapshotUpdated",
                payload: this._cache.snapshots[t.toScope]
            }
        }), l && this._emit({
            scope: t.fromScope,
            event: {
                type: "scopeSnapshotUpdated",
                payload: this._cache.snapshots[t.fromScope]
            }
        });
    }
    _resolveActiveWorkspaceRootRepository() {
        const t = this._activeWorkspaceRootRepositoryId;
        if (t) return this._workspaceRootRepositories.find(({ repository: e })=>e.id === t);
    }
    _getScmRepositoryForRoot() {
        return this._resolveActiveWorkspaceRootRepository()?.repository;
    }
    _firstWorkspaceFolderCwd() {
        const t = this._workspaceContextService.getWorkspace().folders[0];
        return t ? this._uriToWorkspacePath(t.uri) : "";
    }
    _isGitScmRepository(t) {
        return t.provider.contextValue === "git";
    }
    _wireScmRepositoryListeners() {
        const t = this._getScmRepositoryForRoot(), e = t?.id;
        e !== this._scmRepositoryId && (this._scmRepositoryId = e, this._scmRepositoryDisposables.clear(), t && (this._scmRepositoryDisposables.add(t.provider.onDidChangeResources(()=>{
            this._consumeAutomaticRefreshDuringGitOperation() || this._scheduleTrackedScopesRefreshForSignal();
        })), this._scmRepositoryDisposables.add(t.provider.onDidChangeResourceGroups(()=>{
            this._consumeAutomaticRefreshDuringGitOperation() || this._scheduleTrackedScopesRefreshForSignal();
        }))));
    }
    isRefreshing() {
        return this._refreshRunning;
    }
    getHasUnpushedCommits() {
        return this._hasUnpushedCommits;
    }
    getWorkspaceRootRepositories() {
        return this._workspaceRootRepositories.map(({ repository: t, label: e, rootUri: n, worktree: i })=>({
                id: t.id,
                label: e,
                rootUri: n,
                worktree: i
            }));
    }
    getActiveWorkspaceRootRepositoryId() {
        return this._activeWorkspaceRootRepositoryId;
    }
    getSelectedWorkspaceRootRepositoryId() {
        return this._selectedWorkspaceRootRepositoryId;
    }
    setSelectedWorkspaceRootRepositoryId(t) {
        const e = this._selectedWorkspaceRootRepositoryId;
        if (!t) {
            this._selectedWorkspaceRootRepositoryId = void 0, this._scmViewService.pinActiveRepository(void 0), this._refreshWorkspaceRootRepositoriesAndSelection({
                shouldRefreshDiff: e !== void 0
            });
            return;
        }
        const n = this._workspaceRootRepositories.find(({ repository: i })=>i.id === t)?.repository;
        n && (this._selectedWorkspaceRootRepositoryId = t, this._scmViewService.pinActiveRepository(n), this._refreshWorkspaceRootRepositoriesAndSelection({
            shouldRefreshDiff: e !== t
        }));
    }
    _setHasUnpushedCommits(t) {
        if (this._hasUnpushedCommits === t) return;
        this._hasUnpushedCommits = t;
        const e = this._activeRepositoryRuntimeContextId;
        if (e) {
            const n = this._repositoryRuntimeContexts.get(e);
            n && (n.hasUnpushedCommits = t);
        }
        this._onDidChangeHasUnpushedCommits.fire(t);
    }
    async _computeHasUnpushedCommitsInWorkspace() {
        const e = (await this._gitContextService.getOrFetchCurrentBranch({
            cwd: this._gitCwd
        }))?.trim() ?? "";
        return !e || e === "HEAD" ? !1 : await this._gitContextService.hasUnpushedCommits({
            cwd: this._gitCwd,
            ref: e,
            remoteName: "origin"
        });
    }
    _requestHasUnpushedCommitsRefresh() {
        this._ensureWorkspacePathLib().then(()=>{
            if (this._isDisposed || !this._gitCwd) {
                this._setHasUnpushedCommits(!1);
                return;
            }
            if (this._hasUnpushedCommitsRefreshInFlight) {
                this._hasUnpushedCommitsRefreshQueuedAfterInFlight = !0;
                return;
            }
            this._runHasUnpushedCommitsCompute();
        });
    }
    _runHasUnpushedCommitsCompute() {
        this._hasUnpushedCommitsRefreshInFlight = !0, this._lastHasUnpushedCommitsRefreshTime = Date.now();
        const t = this._computeHasUnpushedCommitsInWorkspace().then((e)=>{
            this._isDisposed || this._setHasUnpushedCommits(e);
        }).catch(()=>{
            this._isDisposed || this._setHasUnpushedCommits(!1);
        }).finally(()=>{
            this._hasUnpushedCommitsRefreshInFlight = !1, this._hasUnpushedCommitsComputePromise = void 0, !(this._isDisposed || !this._hasUnpushedCommitsRefreshQueuedAfterInFlight) && (this._hasUnpushedCommitsRefreshQueuedAfterInFlight = !1, this._scheduleHasUnpushedCommitsRefresh());
        });
        return this._hasUnpushedCommitsComputePromise = t, t;
    }
    async refreshHasUnpushedCommits() {
        if (await this._ensureWorkspacePathLib(), this._isDisposed || !this._gitCwd) {
            this._setHasUnpushedCommits(!1);
            return;
        }
        for(; this._hasUnpushedCommitsComputePromise !== void 0;)await this._hasUnpushedCommitsComputePromise;
        this._isDisposed || await this._runHasUnpushedCommitsCompute();
    }
    _scheduleHasUnpushedCommitsRefresh() {
        if (this._isDisposed) return;
        if (!this._gitCwd) {
            this._setHasUnpushedCommits(!1);
            return;
        }
        if (this._pendingHasUnpushedCommitsRefreshTimer !== void 0) return;
        const t = this._getStatusDrivenCooldownMs(), e = (i)=>{
            this._pendingHasUnpushedCommitsRefreshTimer = setTimeout(()=>{
                if (this._pendingHasUnpushedCommitsRefreshTimer = void 0, this._hasUnpushedCommitsRefreshInFlight) {
                    this._hasUnpushedCommitsRefreshQueuedAfterInFlight = !0;
                    return;
                }
                this._requestHasUnpushedCommitsRefresh();
            }, i);
        }, n = Date.now() - this._lastHasUnpushedCommitsRefreshTime;
        if (n >= t) {
            this._requestHasUnpushedCommitsRefresh();
            return;
        }
        e(t - n);
    }
    _setRefreshRunning(t, e) {
        this._refreshRunning !== t && (this._refreshRunning = t, this._onDidChangeLoadingState.fire({
            isLoading: t,
            reason: e
        }));
    }
    getSnapshot(t) {
        return this._cache.snapshots[t] ?? NFi;
    }
    getFileEntry({ scope: t, filePath: e, subPath: n }) {
        return n ? this._submoduleDiffCache.get(`${t}:${n}`)?.entries.get(e) : this._cache.fileEntries.get(QBe({
            scope: t,
            filePath: e
        }));
    }
    getBaseBranch() {
        return this._cache.baseBranch;
    }
    getCurrentBranch() {
        return this._cache.currentBranch;
    }
    getMergeBaseRefName() {
        return this._committedBranchModelState.model.mergeBaseRefName;
    }
    getCommittedTargetRefName() {
        return this._committedBranchModelState.model.configuredTargetRefName;
    }
    getCommittedDiffSelection() {
        return this._committedBranchModelState.model.selection;
    }
    getCommittedBranchModel() {
        return this._committedBranchModelState.model;
    }
    _getEffectiveCommittedTargetRefName() {
        return this._committedBranchModelState.model.effectiveTargetRefName;
    }
    async _getKnownRemoteNames() {
        const t = this._cwd, e = this._knownRemoteNamesByCwd.get(t);
        if (e) return e;
        let n;
        try {
            n = await this._gitContextService.getRemoteNames({
                cwd: t
            });
        } catch  {
            n = void 0;
        }
        const i = new Set(n ?? []);
        return n !== void 0 && !this._isDisposed && this._knownRemoteNamesByCwd.set(t, i), i;
    }
    async _resolveCommittedTargetRefName(t) {
        const e = y0v({
            targetRefName: t,
            remoteBaseBranch: this._cache.remoteBaseBranch,
            knownRemoteNames: await this._getKnownRemoteNames()
        });
        for (const n of e)if ((await this._gitContextService.resolveGitRevision({
            cwd: this._gitCwd,
            revision: n,
            verify: !0
        }).catch(()=>"")).trim()) return n;
        return t.trim() || "HEAD";
    }
    _getDefaultCommittedBaseRefName() {
        return this._cache.remoteBaseBranch || this._cache.baseBranch || void 0;
    }
    async _resolveCommittedBaseRefName() {
        const t = this._appliedCommittedBaseRefOverride();
        if (!t) return this._getDefaultCommittedBaseRefName();
        const e = y0v({
            targetRefName: t,
            remoteBaseBranch: this._cache.remoteBaseBranch,
            knownRemoteNames: await this._getKnownRemoteNames()
        });
        for (const n of e)if ((await this._gitContextService.resolveGitRevision({
            cwd: this._cwd,
            revision: n,
            verify: !0
        }).catch(()=>"")).trim()) return n;
        return this._getDefaultCommittedBaseRefName();
    }
    _emitCommittedBranchModelIfChanged() {
        const t = this._committedBranchModelState.model;
        t !== this._lastCommittedBranchModel && (this._lastCommittedBranchModel = t, this._onDidChangeCommittedBranchModel.fire(t));
    }
    _setCommittedBranchModelState(t) {
        this._committedBranchModelState = t, this._reconcileCommittedRangeAnchor();
    }
    _reconcileCommittedRangeAnchor() {
        const { commits: t, selection: e } = this._committedBranchModelState.model;
        if (this._committedRangeAnchorSha !== void 0 && r0v({
            commits: t,
            selection: e,
            commitSha: this._committedRangeAnchorSha
        })) return;
        const n = KQt({
            commits: t,
            selection: e
        });
        this._committedRangeAnchorSha = n === void 0 ? void 0 : t[n.startIndex]?.sha;
    }
    _refreshCommittedScopeIfDrifted() {
        if (this._isDisposed) return;
        const t = this._committedBranchModelState.effectiveDiffRefs;
        if (!(!t || `${t.mergeBaseRefName}\0${t.targetRefName}` === this._committedScopeRefsKey)) {
            if (this._refreshRunning) {
                this._scheduleScopeRefresh("committed");
                return;
            }
            this._refreshScope("committed").catch((n)=>{
                this._logService.warn("[GlassDiffService] Failed to refresh committed scope after merge-base drift:", n);
            });
        }
    }
    async _committedMergeBaseSha(t, e) {
        return (await this._gitContextService.getMergeBase({
            cwd: this._gitCwd,
            refA: t,
            refB: e
        }).catch(()=>"")).trim();
    }
    async _preferNewerMergeBaseSha(t, e) {
        const n = t.trim(), i = e.trim();
        return n ? !i || n === i ? n : await this._committedMergeBaseSha(n, i) === n ? i : n : i;
    }
    async _collectMergedInTips(t, e) {
        const n = this._gitCwd;
        if (!n || !t) return [];
        const i = await this._gitContextService.getMergedInTips({
            cwd: n,
            ref: e,
            sinceRef: t
        }).catch((r)=>(this._logService.warn("[GlassDiffService] getMergedInTips failed; committed merge base falls back to the default-branch ref:", r), []));
        return [
            ...new Set(i.filter(Boolean))
        ];
    }
    async _resolveRefSha(t) {
        const e = this._gitCwd;
        return !e || !t ? "" : (await this._gitContextService.resolveGitRevision({
            cwd: e,
            revision: t,
            verify: !0
        }).catch(()=>"")).trim();
    }
    async _resolveCommittedBranchMergeBase(t) {
        if (BLa(t.preferredBaseRefName)) return this._committedMergeBaseSha(t.preferredBaseRefName, t.targetRefName);
        const e = this._gitCwd, [n, i] = await Promise.all([
            this._resolveRefSha(t.preferredBaseRefName),
            this._resolveRefSha(t.targetRefName)
        ]), r = !!(e && n && i), s = this._advancedCommittedMergeBaseMemo;
        if (r && s !== void 0 && s.cwd === e && s.baseRefName === t.preferredBaseRefName && s.targetRefName === t.targetRefName && s.baseTipSha === n && s.targetTipSha === i) return s.advancedBase;
        const o = await this._committedMergeBaseSha(t.preferredBaseRefName, t.targetRefName);
        if (!o) return o;
        const a = await this._advanceMergeBasePastMergedInBaseTips({
            forkPointSha: o,
            baseBranchName: t.preferredBaseRefName,
            targetRefName: t.targetRefName
        });
        return r && !this._isDisposed && this._gitCwd === e && (this._advancedCommittedMergeBaseMemo = {
            cwd: e,
            baseRefName: t.preferredBaseRefName,
            targetRefName: t.targetRefName,
            baseTipSha: n,
            targetTipSha: i,
            advancedBase: a
        }), a;
    }
    async _advanceMergeBasePastMergedInBaseTips(t) {
        const e = t.forkPointSha, n = await this._collectMergedInTips(e, t.targetRefName);
        if (n.length === 0) return e;
        const i = await this._committedMergeBaseSha(t.baseBranchName, t.baseBranchName);
        if (!i) return e;
        for (const r of n){
            if (!(await this._committedMergeBaseSha(t.baseBranchName, r) === i)) continue;
            const o = await this._preferNewerMergeBaseSha(e, r);
            if (o !== e) return o;
        }
        return e;
    }
    async _refreshCommittedBranchModel(t) {
        const e = this._committedBranchModelState, n = this._committedBaseRefOverride, i = this._committedBaseRefPending;
        if (this._isCommittedBaseRefPending()) return e;
        const r = this._appliedCommittedBaseRefOverride(), s = this._getDefaultCommittedBaseRefName(), o = r === void 0 ? s : await this._resolveCommittedBaseRefName(), a = await YS0({
            previousState: e,
            baseRefName: o,
            skipCommitRefreshWhenAllCommits: t?.skipCommitRefreshWhenAllCommits,
            resolveTargetRefName: (c)=>this._resolveCommittedTargetRefName(c),
            getBranchMergeBase: async ({ baseRefName: c, targetRefName: u })=>this._resolveCommittedBranchMergeBase({
                    preferredBaseRefName: c,
                    targetRefName: u
                }),
            getBranchCommits: async ({ branchMergeBaseRefName: c, targetRefName: u })=>this._fetchCommittedBranchCommits({
                    cwd: this._gitCwd,
                    fromExclusiveRefName: c,
                    toInclusiveRefName: u
                }),
            getCommitParentRefOrEmptyTree: async ({ commitSha: c, knownParentSha: u })=>this._resolveCommitParentRefOrEmptyTree({
                    cwd: this._gitCwd,
                    commitSha: c,
                    knownParentSha: u
                })
        });
        if (this._isDisposed || this._committedBaseRefOverride !== n || this._committedBaseRefPending !== i || this._getDefaultCommittedBaseRefName() !== s) return this._committedBranchModelState;
        const l = t?.skipCommitRefreshWhenAllCommits === !0;
        if (l && this._committedBranchAutoRefreshInFlight) return a;
        if (this._committedBranchModelState !== e) {
            const c = this._committedBranchModelState;
            if (!(!l && c.model.configuredTargetRefName === e.model.configuredTargetRefName && c.model.commits === e.model.commits && i0v(c.model.selection, e.model.selection))) return c;
        }
        return this._setCommittedBranchModelState(a), l || (this._committedBranchAutoRefreshSkippedWhileUnfocused = !1), this._committedBranchModelState;
    }
    setCommittedTargetRefName(t) {
        const e = VS0({
            previousState: this._committedBranchModelState,
            targetRefName: t
        });
        if (e !== this._committedBranchModelState && (this._setCommittedBranchModelState(e), this._clearCommittedScopeCaches(), this._emitCommittedBranchModelIfChanged(), !this._isDisposed)) {
            if (this._refreshRunning) {
                this._scheduleScopeRefresh("committed");
                return;
            }
            this._refreshScope("committed").catch((n)=>{
                this._logService.warn("[GlassDiffService] Failed to refresh committed scope after target ref update:", n);
            });
        }
    }
    getCommittedBaseRefName() {
        return QRs(this._committedBaseRefOverride);
    }
    getManualCommittedBaseSelections() {
        return new Map(this._manualCommittedBaseByRepo);
    }
    setManualCommittedBaseBranch(t, e) {
        const n = e?.trim() || void 0;
        n ? this._manualCommittedBaseByRepo.set(t, n) : this._manualCommittedBaseByRepo.delete(t);
    }
    setCommittedBaseRefName(t, e) {
        const n = s10(t), i = !!e?.pending && n === void 0;
        if (!(n?.kind === this._committedBaseRefOverride?.kind && QRs(n) === QRs(this._committedBaseRefOverride) && i === this._committedBaseRefPending) && (this._committedBaseRefOverride = n, this._committedBaseRefPending = i, this._clearCommittedScopeCaches(), !this._isDisposed)) {
            if (i) {
                this._setCommittedBranchModelState(JBe({
                    previousState: this._committedBranchModelState,
                    configuredTargetRefName: this._committedBranchModelState.model.configuredTargetRefName,
                    commits: EOn,
                    selection: {
                        kind: "allCommits"
                    },
                    hasEnumeratedCommits: !1
                })), this._emitCommittedBranchModelIfChanged();
                return;
            }
            if (this._refreshRunning) {
                this._scheduleScopeRefresh("committed");
                return;
            }
            this._refreshScope("committed").catch((r)=>{
                this._logService.warn("[GlassDiffService] Failed to refresh committed scope after base ref update:", r);
            });
        }
    }
    async getCommittedBaseBranchOptions() {
        if (this._isDisposed) return JRs;
        const t = this._cwd, e = this._cache.remoteBaseBranch, n = await this._gitContextService.getAllBranchNames({
            cwd: t,
            sortBy: "committerdate",
            count: I0v,
            includeRemotes: !0
        }).catch(()=>{});
        if (this._isDisposed || this._cwd !== t || !n || n.length === 0) return JRs;
        const i = await this._getKnownRemoteNames();
        return this._isDisposed || this._cwd !== t ? JRs : QS0(n, e, i);
    }
    async getCommittedBranchCommits(t) {
        return this._isDisposed ? EOn : !t?.forceRefresh && this._committedBranchModelState.model.commits.length > 0 ? this._committedBranchModelState.model.commits : (await this._refreshCommittedBranchModel(), this._emitCommittedBranchModelIfChanged(), this._refreshCommittedScopeIfDrifted(), this._committedBranchModelState.model.commits);
    }
    setCommittedDiffSelection(t) {
        this._applyCommittedDiffSelection(t), this._committedBranchModelState.model.selection.kind === "allCommits" && (this._committedRangeAnchorSha = void 0);
    }
    toggleCommittedCommitChecked(t) {
        const e = HS0({
            commits: this._committedBranchModelState.model.commits,
            selection: this._committedBranchModelState.model.selection,
            lastSelectedCommitSha: this._committedRangeAnchorSha,
            commitSha: t.commitSha,
            checked: t.checked
        });
        this._committedRangeAnchorSha = e.lastSelectedCommitSha, this._applyCommittedDiffSelection(e.selection);
    }
    _applyCommittedDiffSelection(t) {
        const e = KS0({
            previousState: this._committedBranchModelState,
            selection: t
        });
        if (e !== this._committedBranchModelState && (this._setCommittedBranchModelState(e), this._clearCommittedScopeCaches(), this._emitCommittedBranchModelIfChanged(), !this._isDisposed)) {
            if (this._refreshRunning) {
                this._scheduleScopeRefresh("committed");
                return;
            }
            this._refreshScope("committed").catch((n)=>{
                this._logService.warn("[GlassDiffService] Failed to refresh committed scope after selection update:", n);
            });
        }
    }
    setCommittedBranchAutoRefreshEnabled(t) {
        if (!(this._isDisposed || this._committedBranchAutoRefreshEnabled === t)) {
            if (this._committedBranchAutoRefreshEnabled = t, t) {
                this._ensureCommittedBranchAutoRefreshTimer();
                return;
            }
            this._stopCommittedBranchAutoRefreshTimer();
        }
    }
    async refreshAll() {
        this._isDisposed || this._refreshRunning || (this._pendingRefreshTimer !== void 0 && (clearTimeout(this._pendingRefreshTimer), this._pendingRefreshTimer = void 0), await this._refresh(rYe.manual));
    }
    async refreshAllQuiet() {
        this._isDisposed || this._refreshRunning || (this._pendingRefreshTimer !== void 0 && (clearTimeout(this._pendingRefreshTimer), this._pendingRefreshTimer = void 0), await this._refresh(rYe.immediate));
    }
    async settleExternalGitState() {
        this._forceFreshStatusScopeReads = !0;
        try {
            for(let t = 0; t < 5 && !this._isDisposed; t++){
                if (this._refreshRunning) {
                    await en.toPromise(en.filter(this.onDidChangeLoadingState, (e)=>!e.isLoading));
                    continue;
                }
                await this.refreshAllQuiet();
                break;
            }
        } finally{
            this._forceFreshStatusScopeReads = !1;
        }
        this._isDisposed || await this.refreshHasUnpushedCommits();
    }
    async getFilePatch({ scope: t, filePath: e, subPath: n, comparisonMode: i = "scoped" }) {
        if (this._isDisposed) return "";
        const r = this._resolveCwd(n);
        switch(i){
            case "allChangesAgainstHead":
            case "allChangesAgainstMergeBase":
                return this._getAllChangesPatch({
                    scope: t,
                    cwd: r,
                    filePath: e,
                    subPath: n,
                    comparisonMode: i,
                    baseRefName: await this._resolveUnifiedComparisonBaseRef({
                        comparisonMode: i,
                        cwd: r
                    })
                });
            case "scoped":
                break;
            default:
                {
                    const o = i;
                    throw new Error(`Unknown diff comparison mode: ${o}`);
                }
        }
        const s = this.getFileEntry({
            scope: t,
            filePath: e,
            subPath: n
        });
        if (t === "unstaged" && s?.status === "untracked") return this._gitContextService.getUntrackedFilePatch({
            cwd: r,
            filePath: e
        });
        switch(t){
            case "unstaged":
                return this._fetchScopedPatch(r, {
                    scope: "unstaged"
                }, e, s);
            case "staged":
                return this._fetchScopedPatch(r, {
                    scope: "staged"
                }, e, s);
            case "committed":
                {
                    if (n) {
                        const a = await this._resolveSubmoduleCommittedRefs(n);
                        if (!a) return "";
                        const { mergeBaseRefName: l, targetRefName: c } = this._toCommittedDiffRange(a);
                        return this._fetchScopedPatch(r, {
                            scope: "committed",
                            mergeBaseRef: l,
                            targetRef: c
                        }, e, s);
                    }
                    const o = this.getMergeBaseRefName();
                    return o ? this._fetchScopedPatch(r, {
                        scope: "committed",
                        mergeBaseRef: o,
                        targetRef: this._getEffectiveCommittedTargetRefName()
                    }, e, s) : "";
                }
            default:
                {
                    const o = t;
                    throw new Error(`Unknown diff scope: ${o}`);
                }
        }
    }
    async _fetchScopedPatch(t, e, n, i) {
        return this._isBatchableEntry(i) ? this._patchFetcher.fetch(t, e, n) : this._gitContextService.getDiffFilesPatch({
            cwd: t,
            ...e,
            filePaths: [
                n
            ]
        });
    }
    _isBatchableEntry(t) {
        return e0v({
            additions: t?.additions ?? 0,
            deletions: t?.deletions ?? 0,
            byteSize: t?.byteSize,
            isBinary: t?.isBinary ?? !1
        });
    }
    _resolveAllChangesEntry(t) {
        const e = this.getFileEntry({
            scope: "unstaged",
            filePath: t.filePath,
            subPath: t.subPath
        }), n = this.getFileEntry({
            scope: "staged",
            filePath: t.filePath,
            subPath: t.subPath
        });
        return e?.status === "untracked" && n?.status === "deleted" ? {
            ...e,
            status: "modified"
        } : e && n?.status === "renamed" && n.renamedFromPath ? {
            ...e,
            status: "renamed",
            renamedFromPath: n.renamedFromPath
        } : e ?? n ?? (t.comparisonMode === "allChangesAgainstMergeBase" ? this.getFileEntry({
            scope: "committed",
            filePath: t.filePath,
            subPath: t.subPath
        }) : void 0) ?? this.getFileEntry({
            scope: t.scope,
            filePath: t.filePath,
            subPath: t.subPath
        });
    }
    _resolveUnifiedPatchBaseRef(t) {
        const e = this._unifiedBaseRefInFlight.get(t);
        if (e) return e;
        const n = (async ()=>{
            try {
                return await this._gitContextService.resolveGitRevision({
                    cwd: t,
                    revision: "HEAD",
                    verify: !0
                }), "HEAD";
            } catch (i) {
                if (this._isHeadUnresolvableError(i)) return ZQt;
                throw i;
            }
        })().finally(()=>{
            this._unifiedBaseRefInFlight.delete(t);
        });
        return this._unifiedBaseRefInFlight.set(t, n), n;
    }
    async _resolveUnifiedComparisonBaseRef(t) {
        if (t.comparisonMode === "allChangesAgainstMergeBase") {
            const e = this._committedBranchModelState.branchMergeBaseRefName;
            if (e) return e;
        }
        return this._resolveUnifiedPatchBaseRef(t.cwd);
    }
    async _getAllChangesPatch(t) {
        const e = this._resolveAllChangesEntry(t);
        if (e?.status === "untracked") return this._gitContextService.getUntrackedFilePatch({
            cwd: t.cwd,
            filePath: t.filePath
        });
        const n = await this._fetchScopedPatch(t.cwd, {
            scope: "ref",
            ref: t.baseRefName
        }, t.filePath, e);
        return n.trim().length > 0 ? n : e === void 0 || e.status === "added" ? this._gitContextService.getUntrackedFilePatch({
            cwd: t.cwd,
            filePath: t.filePath
        }) : n;
    }
    async getAllChangesAgainstHeadFilePaths(t) {
        if (this._isDisposed) return XQt;
        const e = this._resolveCwd(t?.subPath);
        try {
            const n = await this._resolveUnifiedPatchBaseRef(e);
            return this._getAllChangesFilePathsAgainstBase({
                cwd: e,
                baseRefName: n,
                includeCommittedFallback: !1,
                subPath: t?.subPath
            });
        } catch  {
            return this._getAllChangesFallbackFilePaths(!1);
        }
    }
    async getAllChangesAgainstMergeBaseFilePaths(t) {
        if (this._isDisposed) return XQt;
        const e = this._resolveCwd(t?.subPath);
        try {
            const n = await this._resolveUnifiedComparisonBaseRef({
                comparisonMode: "allChangesAgainstMergeBase",
                cwd: e
            });
            return this._getAllChangesFilePathsAgainstBase({
                cwd: e,
                baseRefName: n,
                includeCommittedFallback: !0,
                subPath: t?.subPath
            });
        } catch  {
            return this._getAllChangesFallbackFilePaths(!0);
        }
    }
    async _getAllChangesFilePathsAgainstBase(t) {
        try {
            const e = this._configurationService.getValue("git.untrackedChanges", this._untrackedChangesConfigOverrides(t.subPath)) === "hidden", [n, i] = await Promise.all([
                this._fetchScopeFiles({
                    cwd: t.cwd,
                    scope: "ref",
                    ref: t.baseRefName
                }),
                e ? Promise.resolve(void 0) : this._gitContextService.getUntrackedFiles(t.cwd).catch(()=>{})
            ]), r = new Set(n.map((s)=>s.path));
            for (const s of i ?? [])r.add(s);
            return Object.freeze([
                ...r
            ]);
        } catch  {
            return this._getAllChangesFallbackFilePaths(t.includeCommittedFallback);
        }
    }
    _getAllChangesFallbackFilePaths(t) {
        const e = new Set;
        for (const n of this._cache.snapshots.unstaged.filePaths)e.add(n);
        for (const n of this._cache.snapshots.staged.filePaths)e.add(n);
        if (t) for (const n of this._cache.snapshots.committed.filePaths)e.add(n);
        return Object.freeze([
            ...e
        ]);
    }
    async getAllChangesAgainstHeadStats(t) {
        if (this._isDisposed || t.filePaths.length === 0) return new Map;
        const e = this._resolveCwd(t.subPath);
        try {
            const n = await this._resolveUnifiedPatchBaseRef(e);
            return this._getAllChangesStatsAgainstBase({
                ...t,
                cwd: e,
                baseRefName: n,
                comparisonMode: "allChangesAgainstHead"
            });
        } catch  {
            return this._getAllChangesStatsFromCachedEntries({
                ...t,
                comparisonMode: "allChangesAgainstHead"
            });
        }
    }
    async getAllChangesAgainstMergeBaseStats(t) {
        if (this._isDisposed || t.filePaths.length === 0) return new Map;
        const e = this._resolveCwd(t.subPath);
        try {
            const n = await this._resolveUnifiedComparisonBaseRef({
                comparisonMode: "allChangesAgainstMergeBase",
                cwd: e
            });
            return this._getAllChangesStatsAgainstBase({
                ...t,
                cwd: e,
                baseRefName: n,
                comparisonMode: "allChangesAgainstMergeBase"
            });
        } catch  {
            return this._getAllChangesStatsFromCachedEntries({
                ...t,
                comparisonMode: "allChangesAgainstMergeBase"
            });
        }
    }
    async _getAllChangesStatsAgainstBase(t) {
        const e = [
            ...new Set(t.filePaths)
        ], n = new Map;
        if (this._isDisposed || e.length === 0) return n;
        if (!(e.length > m0v)) try {
            const r = this._getAllChangesStatsCacheKey({
                cwd: t.cwd,
                baseRefName: t.baseRefName,
                filePaths: e
            }), s = (await this._getAllChangesStatsMemoized({
                cacheKey: r,
                cwd: t.cwd,
                baseRefName: t.baseRefName,
                filePaths: e
            })).values();
            for (const o of s)n.set(o.path, {
                additions: o.additions,
                deletions: o.deletions
            });
        } catch  {}
        return this._getAllChangesStatsFromCachedEntries({
            filePaths: e,
            subPath: t.subPath,
            comparisonMode: t.comparisonMode,
            result: n
        });
    }
    async _getAllChangesStatsFromCachedEntries(t) {
        const e = t.result ?? new Map;
        for (const n of new Set(t.filePaths)){
            if (await A0v.yieldIfExhausted(), e.has(n)) continue;
            const i = this.getFileEntry({
                scope: "unstaged",
                filePath: n,
                subPath: t.subPath
            }), r = this.getFileEntry({
                scope: "staged",
                filePath: n,
                subPath: t.subPath
            });
            if (i?.status === "untracked" && r?.status === "deleted") {
                e.set(n, {
                    additions: (i?.additions ?? 0) + (r?.additions ?? 0),
                    deletions: (i?.deletions ?? 0) + (r?.deletions ?? 0)
                });
                continue;
            }
            if (t.comparisonMode === "allChangesAgainstMergeBase") {
                const a = this.getFileEntry({
                    scope: "committed",
                    filePath: n,
                    subPath: t.subPath
                });
                e.set(n, {
                    additions: (a?.additions ?? 0) + (r?.additions ?? 0) + (i?.additions ?? 0),
                    deletions: (a?.deletions ?? 0) + (r?.deletions ?? 0) + (i?.deletions ?? 0)
                });
                continue;
            }
            const o = this._resolveAllChangesEntry({
                scope: "unstaged",
                filePath: n,
                subPath: t.subPath,
                comparisonMode: t.comparisonMode
            });
            e.set(n, {
                additions: o?.additions ?? 0,
                deletions: o?.deletions ?? 0
            });
        }
        return e;
    }
    _getAllChangesStatsCacheKey(t) {
        const e = [
            ...t.filePaths
        ].sort((n, i)=>n.localeCompare(i));
        return `${t.cwd}
${t.baseRefName}
${e.join(`
`)}`;
    }
    async _getAllChangesStatsMemoized(t) {
        const e = this._allChangesStatsInFlight.get(t.cacheKey);
        if (e) return e;
        const n = (async ()=>{
            const i = await Zbm("GlassDiffService.allChangesStats", ()=>this._gitContextService.getDiffFileEntries({
                    cwd: t.cwd,
                    scope: "ref",
                    ref: t.baseRefName,
                    targets: t.filePaths
                })), r = this._normalizeDiffEntriesFromGit(t.cwd, i), s = new Map;
            for (const o of r)s.set(o.path, o);
            return s;
        })().finally(()=>{
            this._allChangesStatsInFlight.delete(t.cacheKey);
        });
        return this._allChangesStatsInFlight.set(t.cacheKey, n), n;
    }
    _fetchScopedFileContent({ cwd: t, subPath: e, contentScope: n, ref: i, readFilePath: r }) {
        if (n === void 0) return Promise.resolve("");
        const s = e === void 0 && n !== "working" ? this._repoRelativePathForGitObjectRead(r) : r;
        return this._contentFetchLimiter.queue(()=>this._gitContextService.getFileContentForDiffScope({
                cwd: t,
                filePath: s,
                scope: n,
                ref: i
            }));
    }
    async getModifiedFileContents({ scope: t, filePath: e, subPath: n, comparisonMode: i = "scoped" }) {
        if (this._isDisposed) return "";
        const r = this._resolveCwd(n);
        let s;
        if (n && t === "committed" && !tge(i) && (s = await this._resolveSubmoduleCommittedRefs(n), !s)) return "";
        const { modifiedScope: o, modifiedRefName: a } = this._resolveContentScopes({
            scope: t,
            filePath: e,
            subPath: n,
            committedRefs: s,
            comparisonMode: i
        });
        return this._fetchScopedFileContent({
            cwd: r,
            subPath: n,
            contentScope: o,
            ref: a,
            readFilePath: e
        });
    }
    async getMediaDataUrl({ scope: t, filePath: e, subPath: n }) {
        if (this._isDisposed || !this._rootUri) throw new Error("Cannot read media: service disposed or no workspace root");
        const i = QBe({
            scope: t,
            filePath: e,
            subPath: n
        }), r = this._mediaBlobUrls.get(i);
        if (r !== void 0 && !r.stale) return r.value;
        const s = await this._resolveMediaFileUri({
            scope: t,
            filePath: e,
            subPath: n
        });
        if (!s) throw new Error("Cannot read media: scoped URI unavailable");
        try {
            const p = await this._fileService.stat(s);
            if (p.size !== void 0 && p.size > xRt) throw new rQl(e, p.size);
        } catch (p) {
            if (p instanceof rQl) throw p;
        }
        const a = (await this._fileService.readFile(s)).value, l = a.buffer.buffer.slice(a.buffer.byteOffset, a.buffer.byteOffset + a.buffer.byteLength), c = v5e(e) ?? "application/octet-stream", u = new Blob([
            l
        ], {
            type: c
        }), d = URL.createObjectURL(u), h = this._mediaBlobUrls.get(i);
        return h && URL.revokeObjectURL(h.value), this._mediaBlobUrls.set(i, {
            value: d,
            stale: !1
        }), d;
    }
    getScopedFileUri({ scope: t, filePath: e, subPath: n }) {
        const i = this._resolveWorkspaceFileUri({
            filePath: e,
            subPath: n
        });
        if (!i) return;
        if (t === "unstaged") return i;
        if (t === "committed" && n) return;
        const r = t === "staged" ? "" : this._getEffectiveCommittedTargetRefName();
        return this._toGitFileUri(i, r);
    }
    _resolveWorkspaceFileUri({ filePath: t, subPath: e }) {
        if (this._rootUri) return rt.joinPath(this._rootUri, l0v({
            filePath: t,
            subPath: e
        }));
    }
    _toGitFileUri(t, e) {
        return t.with({
            scheme: "git",
            query: JSON.stringify({
                path: this._uriToWorkspacePath(t),
                ref: e
            })
        });
    }
    async _resolveMediaFileUri(t) {
        const e = this._resolveWorkspaceFileUri(t);
        if (!e) return;
        if (t.scope === "unstaged") return e;
        if (t.scope === "staged") return this._toGitFileUri(e, "");
        if (!t.subPath) return this._toGitFileUri(e, this._getEffectiveCommittedTargetRefName());
        const n = await this._resolveSubmoduleCommittedRefs(t.subPath);
        if (n?.modifiedRefName) return this._toGitFileUri(e, n.modifiedRefName);
    }
    _resolveContentScopes({ scope: t, filePath: e, subPath: n, committedRefs: i, comparisonMode: r = "scoped" }) {
        const s = tge(r) ? this._resolveAllChangesEntry({
            scope: t,
            filePath: e,
            subPath: n,
            comparisonMode: r
        }) : this.getFileEntry({
            scope: t,
            filePath: e,
            subPath: n
        });
        let o, a;
        switch(r){
            case "allChangesAgainstHead":
            case "allChangesAgainstMergeBase":
                o = "working";
                break;
            case "scoped":
                switch(t){
                    case "unstaged":
                        o = "working";
                        break;
                    case "staged":
                        o = "staged";
                        break;
                    case "committed":
                        if (i) {
                            o = i.modifiedRefName ? "head" : void 0, a = i.modifiedRefName;
                            break;
                        }
                        this.getMergeBaseRefName() && (o = "head", a = this._getEffectiveCommittedTargetRefName());
                        break;
                    default:
                        {
                            const l = t;
                            throw new Error(`Unknown diff scope: ${l}`);
                        }
                }
                break;
            default:
                {
                    const l = r;
                    throw new Error(`Unknown diff comparison mode: ${l}`);
                }
        }
        return s?.status === "deleted" && (o = void 0, a = void 0), {
            modifiedScope: o,
            modifiedRefName: a
        };
    }
    async getDiffMaterial(t) {
        if (!this._isDisposed) return this._diffMaterialStore.getOrCompute(t, ()=>this._computeDiffMaterial(t));
    }
    async _computeDiffMaterial(t) {
        const [e, n] = await Promise.all([
            this.getModifiedFileContents(t),
            this.getFilePatch(t)
        ]), i = qMa.build({
            patch: n,
            modified: e
        }) ?? I0n.build({
            patch: n
        });
        if (this._reportStatRenderMismatchIfNeeded({
            args: t,
            material: i,
            patch: n,
            modified: e
        }), i !== void 0) return this._isPrecomputeDiffTokenizationEnabled() ? this._materialTokenizer.tokenize(i, t.filePath) : i;
    }
    _reportStatRenderMismatchIfNeeded(t) {
        const { args: e, material: n, patch: i, modified: r } = t;
        if (n === void 0 || n.diff.hasChanges || r === "") return;
        const s = e.comparisonMode ?? "scoped", o = tge(s) ? this._resolveAllChangesEntry({
            scope: e.scope,
            filePath: e.filePath,
            subPath: e.subPath,
            comparisonMode: s
        }) : this.getFileEntry({
            scope: e.scope,
            filePath: e.filePath,
            subPath: e.subPath
        });
        if (o?.isBinary || o?.isSubmodule) return;
        const a = o?.additions ?? 0, l = o?.deletions ?? 0, c = o?.status === "added" || o?.status === "untracked";
        (i.trim().length > 0 || a + l > 0 || c) && this._analyticsService.trackEvent("glass.diff.stat_render_mismatch", {
            scope: e.scope,
            comparisonMode: s,
            status: o?.status ?? "unknown",
            statAdditions: a,
            statDeletions: l,
            patchEmpty: i.trim().length === 0
        });
    }
    getCachedDiffMaterial(t) {
        return this._diffMaterialStore.getCached(t);
    }
    warmDiffMaterials(t) {
        if (!this._isDisposed) for (const e of t)this.classifyDiffRenderability(e).kind === "renderable" && this.getDiffMaterial(e).catch(()=>{});
    }
    getStaleMediaDataUrl({ scope: t, filePath: e, subPath: n }) {
        return this._mediaBlobUrls.get(QBe({
            scope: t,
            filePath: e,
            subPath: n
        }))?.value;
    }
    classifyDiffRenderability(t) {
        const e = t.comparisonMode ?? "scoped", n = tge(e) ? this._resolveAllChangesEntry({
            ...t,
            comparisonMode: e
        }) : this.getFileEntry(t), i = t.allChangesStats ?? n;
        if (!n && !i) return nQl;
        const r = n?.byteSize;
        if (Qwv(r)) return C0v;
        const s = HZl(r) || zRs(i?.additions ?? 0, i?.deletions ?? 0), o = this._statsBudgetLoadOptIns.has(this._statsBudgetLoadOptInKey(t));
        return s && !o ? T0v : nQl;
    }
    reportLargeDiffLoaded(t) {
        this.classifyDiffRenderability(t).kind === "deferred" && (this._statsBudgetLoadOptIns.add(this._statsBudgetLoadOptInKey(t)), this._onDidChangeLargeDiffLoadOptIns.fire());
    }
    _statsBudgetLoadOptInKey(t) {
        return `${t.scope}|${t.comparisonMode ?? ""}|${t.subPath ?? ""}|${t.filePath}`;
    }
    _resolveCwd(t) {
        return t && this._rootUri ? this._uriToWorkspacePath(rt.joinPath(this._rootUri, t)) : this._gitCwd;
    }
    _resolveCwdUri(t) {
        if (this._rootUri) return t ? rt.joinPath(this._rootUri, t) : this._rootUri;
        const e = this._matchLiveUriForGitCwd(this._gitCwd);
        if (e) return t ? rt.joinPath(e, t) : e;
    }
    _matchLiveUriForGitCwd(t) {
        if (!t) return;
        let e, n = -1;
        const i = (r)=>{
            if (!r) return;
            const s = this._uriToWorkspacePath(r);
            let o = !1;
            if (this._isWindowsHost) o = Ywv(s, t);
            else {
                const a = this._workspacePathLib.normalize(s), l = this._workspacePathLib.normalize(t);
                o = l === a || l.startsWith(a.endsWith(this._workspacePathLib.sep) ? a : a + this._workspacePathLib.sep);
            }
            o && s.length > n && (e = r, n = s.length);
        };
        for (const r of this._workspaceContextService.getWorkspace().folders)i(r.uri);
        for (const r of this._scmService.repositories)i(r.provider.rootUri);
        return e;
    }
    _untrackedChangesConfigOverrides(t) {
        const e = this._resolveCwdUri(t);
        return e ? {
            resource: e
        } : {};
    }
    _normalizeDiffEntriesFromGit(t, e) {
        const n = this._workspacePathLib;
        return !this._gitRepoRootFsPath || !this._cwd || n.normalize(this._gitRepoRootFsPath) === n.normalize(this._cwd) || n.normalize(t) !== n.normalize(this._cwd) ? e : e.map((i)=>({
                ...i,
                path: this._gitRepoPathToWorkspacePath(i.path),
                renamedFromPath: i.renamedFromPath ? this._gitRepoPathToWorkspacePath(i.renamedFromPath) : void 0
            }));
    }
    _gitRepoPathToWorkspacePath(t) {
        const e = this._workspacePathLib;
        return e.relative(this._cwd, e.join(this._gitRepoRootFsPath, t)).replace(/\\/g, "/");
    }
    _repoRelativePathForGitObjectRead(t) {
        const e = this._workspacePathLib;
        return !this._gitRepoRootFsPath || !this._cwd || e.normalize(this._gitRepoRootFsPath) === e.normalize(this._cwd) ? t.replace(/\\/g, "/") : e.relative(this._gitRepoRootFsPath, e.join(this._cwd, t)).replace(/\\/g, "/");
    }
    _afterWrite(t, e = !0) {
        t && (this._invalidateSubmoduleCacheForPath(t), this._onDidInvalidateSubmodule.fire(t)), this._scheduleTrackedScopesRefresh(e ? 0 : void 0);
    }
    async stagePath({ filePath: t, subPath: e }) {
        await this.stagePaths({
            filePaths: [
                t
            ],
            subPath: e
        });
    }
    async stagePaths({ filePaths: t, subPath: e }) {
        if (this._isDisposed || t.length === 0) return;
        const n = this._resolveCwd(e);
        e || this._applyOptimisticScopeTransfer({
            fromScope: "unstaged",
            toScope: "staged",
            pathQueries: t
        });
        try {
            await this._runOwnWrite(()=>this._gitContextService.stageFiles({
                    cwd: n,
                    filePaths: t
                }));
        } catch (i) {
            throw e || this._scheduleTrackedScopesRefresh(0), i;
        }
        this._afterWrite(e, e !== void 0);
    }
    async unstagePath({ filePath: t, subPath: e }) {
        await this.unstagePaths({
            filePaths: [
                t
            ],
            subPath: e
        });
    }
    async unstagePaths({ filePaths: t, subPath: e }) {
        if (this._isDisposed || t.length === 0) return;
        const n = this._resolveCwd(e);
        e || this._applyOptimisticScopeTransfer({
            fromScope: "staged",
            toScope: "unstaged",
            pathQueries: t
        });
        try {
            await this._runOwnWrite(()=>this._gitContextService.unstageFiles({
                    cwd: n,
                    filePaths: t
                }));
        } catch (i) {
            throw e || this._scheduleTrackedScopesRefresh(0), i;
        }
        this._afterWrite(e, e !== void 0);
    }
    async stageAll(t) {
        if (this._isDisposed) return;
        const e = this._resolveCwd(t);
        let i = (await this._fetchScopeFiles({
            cwd: e,
            scope: "unstaged"
        })).map((r)=>r.path);
        if (t && i.length === 0 && (i = this._submoduleDiffCache.get(`unstaged:${t}`)?.snapshot.filePaths ?? []), !t) {
            const r = new Set(this._cache.snapshots.unstaged.filePaths), s = i.filter((o)=>r.has(o));
            s.length > 0 && this._applyOptimisticScopeTransfer({
                fromScope: "unstaged",
                toScope: "staged",
                pathQueries: s
            });
        }
        try {
            i.length > 0 ? await this._runOwnWrite(()=>this._gitContextService.stageFiles({
                    cwd: e,
                    filePaths: i
                })) : await this._runOwnWrite(()=>this._gitContextService.stageAllChanges(e));
        } catch (r) {
            throw t || this._scheduleTrackedScopesRefresh(0), r;
        }
        this._afterWrite(t, t !== void 0);
    }
    async unstageAll(t) {
        if (this._isDisposed) return;
        const e = this._resolveCwd(t);
        t || this._applyOptimisticScopeTransfer({
            fromScope: "staged",
            toScope: "unstaged",
            pathQueries: this._cache.snapshots.staged.filePaths
        });
        try {
            await this._runOwnWrite(()=>this._gitContextService.unstageAllChanges(e));
        } catch (n) {
            throw t || this._scheduleTrackedScopesRefresh(0), n;
        }
        this._afterWrite(t, t !== void 0);
    }
    async revertFiles({ filePaths: t, subPath: e }) {
        this._isDisposed || t.length === 0 || (await this._runOwnWrite(()=>this._gitContextService.restoreFiles({
                cwd: this._resolveCwd(e),
                filePaths: t
            })), this._afterWrite(e, !1));
    }
    async deleteUntrackedFiles({ filePaths: t, subPath: e }) {
        this._isDisposed || t.length === 0 || (await this._runOwnWrite(()=>this._deleteUntrackedFiles({
                filePaths: t,
                subPath: e
            })), this._afterWrite(e, !1));
    }
    precomputeRevert(t) {
        const e = this._computeMatchedPaths(t), { trackedFilePaths: n, untrackedFilePaths: i } = this._splitTrackedAndUntracked({
            scope: t.scope,
            candidatePaths: e
        });
        let r = i;
        if (t.scope === "staged") {
            const s = this._computeMatchedPaths({
                scope: "unstaged",
                target: t.target
            });
            r = this._splitTrackedAndUntracked({
                scope: "unstaged",
                candidatePaths: s
            }).untrackedFilePaths;
        }
        return Object.freeze({
            scope: t.scope,
            target: t.target,
            trackedFilePaths: Object.freeze([
                ...n
            ]),
            untrackedFilePaths: Object.freeze([
                ...r
            ])
        });
    }
    async revert({ operation: t, deleteUntracked: e }) {
        if (this._isDisposed) return;
        const n = e && t.untrackedFilePaths.length > 0;
        !(t.trackedFilePaths.length > 0) && !n || (await this._runOwnWrite(async ()=>{
            await this._revertTrackedPaths({
                operation: t
            }), n && await this._deleteUntrackedFiles({
                filePaths: t.untrackedFilePaths
            });
        }), this._scheduleTrackedScopesRefresh());
    }
    _computeMatchedPaths(t) {
        const e = this._cache.snapshots[t.scope].filePaths;
        switch(t.target.kind){
            case "all":
                return [
                    ...e
                ];
            case "path":
                return XZl({
                    pathQuery: t.target.filePath,
                    existingFilePaths: e
                });
            case "paths":
                {
                    const n = new Set;
                    for (const i of t.target.filePaths){
                        const r = XZl({
                            pathQuery: i,
                            existingFilePaths: e
                        });
                        for (const s of r)n.add(s);
                    }
                    return [
                        ...n
                    ];
                }
            default:
                return r10(t.target);
        }
    }
    _splitTrackedAndUntracked(t) {
        if (t.scope !== "unstaged") return {
            trackedFilePaths: [
                ...t.candidatePaths
            ],
            untrackedFilePaths: []
        };
        const e = [], n = [];
        for (const i of t.candidatePaths)this._cache.fileEntries.get(QBe({
            scope: "unstaged",
            filePath: i
        }))?.status === "untracked" ? n.push(i) : e.push(i);
        return {
            trackedFilePaths: e,
            untrackedFilePaths: n
        };
    }
    _isHeadUnresolvableError(t) {
        const e = [
            "unknown revision or path not in the working tree",
            "ambiguous argument 'head'",
            "could not resolve head",
            "does not have any commits yet",
            "needed a single revision"
        ], n = t instanceof Error ? t.message : String(t), i = t?.stderr ?? "", r = `${n}
${i}`.toLowerCase();
        return e.some((s)=>r.includes(s));
    }
    async _revertTrackedPaths(t) {
        const { operation: e } = t;
        if (e.trackedFilePaths.length !== 0) {
            if (e.scope === "staged") {
                if (e.target.kind === "all") {
                    try {
                        await this._gitContextService.hardReset({
                            cwd: this._gitCwd,
                            ref: "HEAD"
                        });
                    } catch (n) {
                        if (!this._isHeadUnresolvableError(n)) throw n;
                        try {
                            await this._gitContextService.unstageAllChanges(this._gitCwd);
                        } catch (i) {
                            if (!this._isHeadUnresolvableError(i)) throw i;
                        }
                    }
                    return;
                }
                try {
                    await this._gitContextService.restoreStagedAndWorkingFiles({
                        cwd: this._gitCwd,
                        filePaths: e.trackedFilePaths
                    });
                } catch (n) {
                    if (!this._isHeadUnresolvableError(n)) throw n;
                    try {
                        await this._gitContextService.unstageFiles({
                            cwd: this._gitCwd,
                            filePaths: e.trackedFilePaths
                        });
                    } catch (i) {
                        if (!this._isHeadUnresolvableError(i)) throw i;
                    }
                }
                return;
            }
            await this._gitContextService.restoreFiles({
                cwd: this._gitCwd,
                filePaths: e.trackedFilePaths
            });
        }
    }
    async _deleteUntrackedFiles(t) {
        if (!this._rootUri || t.filePaths.length === 0) return [];
        const e = [];
        for(let n = 0; n < t.filePaths.length; n += QZl){
            const i = t.filePaths.slice(n, n + QZl), r = await Promise.all(i.map(async (s)=>{
                const o = this._resolveWorkspaceFileUri({
                    filePath: s,
                    subPath: t.subPath
                });
                if (o) try {
                    return await this._fileService.del(o), s;
                } catch (a) {
                    console.error(`[GlassDiffService] _deleteUntrackedFiles: failed to delete "${s}"`, a);
                    return;
                }
            }));
            for (const s of r)s !== void 0 && e.push(s);
        }
        return e;
    }
    async commit({ message: t }) {
        this._isDisposed || (await this._runOwnWrite(()=>this._gitContextService.commitChanges(this._gitCwd, t)), this._scheduleTrackedScopesRefresh(), this._scheduleScopeRefresh("committed"));
    }
    getSubmodulePaths() {
        return this._submodulePaths;
    }
    async getSubmoduleDiffSnapshot(t) {
        const e = `${t.scope}:${t.subPath}`, n = this._submoduleDiffCache.get(e);
        if (n) return n.snapshot;
        const i = this._resolveCwd(t.subPath);
        try {
            let r;
            switch(t.scope){
                case "unstaged":
                case "staged":
                    r = await this._fetchScopeFiles({
                        cwd: i,
                        scope: t.scope
                    });
                    break;
                case "committed":
                    {
                        const l = await this._resolveSubmoduleCommittedRefs(t.subPath);
                        if (!l) return {
                            subPath: t.subPath,
                            filePaths: [],
                            isLoading: !1,
                            error: "Could not resolve submodule commits"
                        };
                        const { mergeBaseRefName: c, targetRefName: u } = this._toCommittedDiffRange(l);
                        r = await this._fetchScopeFiles({
                            cwd: i,
                            scope: "committed",
                            mergeBaseRef: c,
                            targetRef: u
                        });
                        break;
                    }
                default:
                    {
                        const l = t.scope;
                        throw new Error(`Unknown diff scope: ${l}`);
                    }
            }
            const s = new Map, o = [];
            for (const l of r)s.set(l.path, l), o.push(l.path);
            const a = {
                subPath: t.subPath,
                filePaths: Object.freeze(o),
                isLoading: !1,
                error: void 0
            };
            return this._submoduleDiffCache.set(e, {
                snapshot: a,
                entries: s
            }), a;
        } catch (r) {
            return {
                subPath: t.subPath,
                filePaths: [],
                isLoading: !1,
                error: r instanceof Error ? r.message : "Failed to load submodule diff"
            };
        }
    }
    async getSubmoduleCommitRange(t) {
        const { oldSha: e, newSha: n } = await this._resolveSubmoduleCommitShas({
            scope: t.scope,
            submodulePath: t.subPath
        });
        let i = 0;
        return e && n && e !== n && (i = await this._gitContextService.getRevListCount({
            cwd: this._resolveCwd(t.subPath),
            fromRef: e,
            toRef: n
        })), {
            oldSha: e,
            newSha: n,
            commitCount: i
        };
    }
    _invalidateSubmoduleCacheForPath(t) {
        for (const e of LFi)this._submoduleDiffCache.delete(`${e}:${t}`);
        this._diffMaterialStore.evictView(DFi(t));
        for (const e of LFi){
            const n = `${e}:${DFi(t)}:`;
            for (const [i, r] of this._mediaBlobUrls)i.startsWith(n) && (r.stale = !0);
        }
    }
    async _fetchCommittedBranchCommits(t) {
        const e = await this._gitContextService.executeGitCommand(t.cwd, [
            "--no-optional-locks",
            "log",
            "--format=%H%x00%s%x00%P",
            "--numstat",
            `${t.fromExclusiveRefName}..${t.toInclusiveRefName}`
        ], {
            caller: "GlassDiffService._fetchCommittedBranchCommits"
        }).catch(()=>"");
        return JS0(e);
    }
    async _resolveCommitParentRefOrEmptyTree(t) {
        const e = t.commitSha.trim();
        return e ? t.knownParentSha !== void 0 ? t.knownParentSha.trim() || ZQt : (await this._gitContextService.resolveGitRevision({
            cwd: t.cwd,
            revision: `${e}^`,
            verify: !0
        }).catch(()=>"")).trim() || ZQt : ZQt;
    }
    async _resolveCommittedScopeDiffRefs() {
        return (await this._refreshCommittedBranchModel({
            skipCommitRefreshWhenAllCommits: !0
        })).effectiveDiffRefs;
    }
    _clearCommittedScopeCaches() {
        for (const t of [
            ...this._submoduleDiffCache.keys()
        ])t.startsWith("committed:") && this._submoduleDiffCache.delete(t);
        for (const [t, e] of [
            ...this._mediaBlobUrls
        ])t.startsWith("committed:") && (URL.revokeObjectURL(e.value), this._mediaBlobUrls.delete(t));
        for (const t of [
            ...this._cache.fileEntries.keys()
        ])t.startsWith("committed:") && this._cache.fileEntries.delete(t);
        this._diffMaterialStore.evictScope("committed"), this._advancedCommittedMergeBaseMemo = void 0, this._committedScopeRefsKey = void 0;
    }
    _runCommittedBranchAutoRefreshTick() {
        if (!this._hostHasFocus) {
            this._committedBranchAutoRefreshSkippedWhileUnfocused = !0;
            return;
        }
        if (this._committedBranchAutoRefreshInFlight || this._consumeAutomaticRefreshDuringGitOperation()) return;
        this._committedBranchAutoRefreshInFlight = !0;
        const t = ++this._committedBranchAutoRefreshEpoch;
        this._refreshCommittedBranchModel().then(()=>{
            this._emitCommittedBranchModelIfChanged(), this._refreshCommittedScopeIfDrifted();
        }).catch((e)=>{
            this._logService.warn("[GlassDiffService] Failed to periodically refresh committed branch commits:", e);
        }).finally(()=>{
            this._committedBranchAutoRefreshEpoch === t && (this._committedBranchAutoRefreshInFlight = !1);
        });
    }
    _runCommittedBranchAutoRefreshCatchUpIfSkipped() {
        !this._committedBranchAutoRefreshSkippedWhileUnfocused || this._committedBranchAutoRefreshTimer === void 0 || this._runCommittedBranchAutoRefreshTick();
    }
    _ensureCommittedBranchAutoRefreshTimer() {
        this._isDisposed || !this._committedBranchAutoRefreshEnabled || this._committedBranchAutoRefreshTimer !== void 0 || (this._committedBranchAutoRefreshTimer = setInterval(()=>{
            this._runCommittedBranchAutoRefreshTick();
        }, p0v), this._runCommittedBranchAutoRefreshTick());
    }
    _stopCommittedBranchAutoRefreshTimer() {
        this._committedBranchAutoRefreshTimer !== void 0 && (clearInterval(this._committedBranchAutoRefreshTimer), this._committedBranchAutoRefreshTimer = void 0), this._committedBranchAutoRefreshEpoch += 1, this._committedBranchAutoRefreshInFlight = !1, this._committedBranchAutoRefreshSkippedWhileUnfocused = !1;
    }
    async _resolveSubmoduleCommittedRefs(t) {
        const { oldSha: e, newSha: n } = await this._resolveSubmoduleCommitShas({
            scope: "committed",
            submodulePath: t
        });
        if (!(!e && !n)) return {
            originalRefName: e,
            modifiedRefName: n
        };
    }
    _toCommittedDiffRange(t) {
        return {
            mergeBaseRefName: t.originalRefName ?? ZQt,
            targetRefName: t.modifiedRefName ?? ZQt
        };
    }
    async _resolveSubmoduleCommitShas(t) {
        return this._gitContextService.resolveSubmoduleCommitShas({
            cwd: this._gitCwd,
            submodulePath: t.submodulePath,
            scope: t.scope,
            mergeBaseRef: t.scope === "committed" ? this.getMergeBaseRefName() : void 0,
            targetRef: t.scope === "committed" ? this._getEffectiveCommittedTargetRefName() : void 0
        });
    }
    _fetchBranchInfo() {
        const t = this._gitCwd;
        return Promise.all([
            this._gitContextService.getOrFetchCurrentBranch({
                cwd: t
            }).catch(()=>{}),
            this._gitContextService.getDefaultBranch({
                withoutOrigin: !0,
                cwd: t
            }).catch(()=>{}),
            this._gitContextService.getDefaultBranch({
                cwd: t
            }).catch(()=>{})
        ]);
    }
    async _fetchSubmodulePaths() {
        try {
            const t = await this._gitContextService.getSubmodules(this._gitCwd);
            return !t || t.length === 0 ? new Set : new Set(t.map((e)=>e.relativePath));
        } catch  {
            return new Set;
        }
    }
    async _fetchScopeFiles(t) {
        const e = this._forceFreshStatusScopeReads ? {
            ...t,
            freshStatus: !0
        } : t, n = await Zbm("GlassDiffService.fetchScopeFiles", ()=>this._gitContextService.getDiffFileEntries(e));
        return this._normalizeDiffEntriesFromGit(t.cwd, n);
    }
    _isDynamicBaseBranchEnabled() {
        return this._experimentService.checkFeatureGate(tQl, {
            disableExposureLog: !0
        });
    }
    _appliedCommittedBaseRefOverride() {
        const t = this._committedBaseRefOverride;
        if (t !== void 0) return t.kind === "pinnedCommit" ? t.sha : this._isDynamicBaseBranchEnabled() ? t.branchName : void 0;
    }
    _isCommittedBaseRefPending() {
        return this._committedBaseRefPending;
    }
    _isPrecomputeDiffTokenizationEnabled() {
        return this._experimentService.checkFeatureGate(w0v, {
            disableExposureLog: !1
        });
    }
    async _initialize() {
        try {
            if (!this._isWorkspaceConnected()) return;
            if (!this._gitContextService.hasGitContextProvider()) {
                this._publishProviderUnavailableForEmptyLoadingSnapshots();
                return;
            }
            if (await this._ensureWorkspacePathLib(), this._isDisposed) return;
            await this._seedBranchContext(), this._scheduleHasUnpushedCommitsRefresh(), await this._refresh(rYe.initialLoad);
        } catch (t) {
            this._isDisposed || (this._logService.warn("[GlassDiffService] Failed to initialize diff service:", t), this._publishProviderUnavailableForEmptyLoadingSnapshots());
        }
    }
    async _seedBranchContext() {
        if (this._cache.currentBranch) return;
        const t = await this._gitContextService.getOrFetchCurrentBranch({
            cwd: this._gitCwd
        }).catch(()=>{});
        this._isDisposed || !t || t === "HEAD" || this._cache.currentBranch || (this._cache.currentBranch = t, this._onDidChangeBranchContext.fire({
            currentBranch: this._cache.currentBranch,
            baseBranch: this._cache.baseBranch
        }));
    }
    _scheduleRefresh() {
        if (this._isDisposed) return;
        const t = this._getStatusDrivenCooldownMs(), e = (i)=>{
            const { delayMs: r, coalesceStartedAtMs: s } = KZl({
                cooldownRemainingMs: i,
                coalesceStartedAtMs: this._fullRefreshCoalesceStartedAt,
                nowMs: Date.now()
            });
            this._fullRefreshCoalesceStartedAt = s, this._pendingRefreshTimer !== void 0 && clearTimeout(this._pendingRefreshTimer), this._pendingRefreshTimer = setTimeout(()=>{
                if (this._pendingRefreshTimer = void 0, this._fullRefreshCoalesceStartedAt = void 0, this._refreshRunning) {
                    e(t);
                    return;
                }
                this._refresh(rYe.cooldownDeferred);
            }, r);
        };
        if (this._refreshRunning) {
            e(t);
            return;
        }
        const n = Date.now() - this._lastRefreshCompletedTime;
        n >= t ? (this._fullRefreshCoalesceStartedAt = void 0, this._refresh(rYe.immediate)) : e(t - n);
    }
    _scheduleScopeRefresh(t, e = XRs, n) {
        if (this._isDisposed) return;
        const { delayMs: i, coalesceStartedAtMs: r } = KZl({
            cooldownRemainingMs: e,
            coalesceStartedAtMs: this._scopeRefreshCoalesceStartedAt.get(t),
            nowMs: Date.now()
        });
        this._scopeRefreshCoalesceStartedAt.set(t, r), this._pendingScopeRefreshTimers.deleteAndDispose(t), this._pendingScopeRefreshTimers.set(t, Ec(()=>{
            if (this._pendingScopeRefreshTimers.deleteAndDispose(t), this._scopeRefreshCoalesceStartedAt.delete(t), this._refreshRunning) {
                const a = t === "unstaged" || t === "staged" ? this._getStatusDrivenCooldownMs() : XRs;
                this._scheduleScopeRefresh(t, a, n);
                return;
            }
            const s = t === "unstaged" || t === "staged";
            s && n !== void 0 && (this._trackedScopeRefreshesInFlight += 1), this._refreshScope(t, !1, n).catch((o)=>{
                this._logService.warn(`[GlassDiffService] Failed to refresh scope (scope=${t}, cwd=${this._gitCwd || "<empty>"}):`, o);
            }).finally(()=>{
                s && n !== void 0 && (this._trackedScopeRefreshesInFlight = Math.max(0, this._trackedScopeRefreshesInFlight - 1));
                const o = this._pendingScopeRefreshTimers.has("unstaged") || this._pendingScopeRefreshTimers.has("staged");
                s && n !== void 0 && n === this._trackedScopesRefreshEpoch && !o && this._trackedScopeRefreshesInFlight === 0 && (this._trackedScopesRefreshScheduled = !1);
            });
        }, i));
    }
    async _refresh(t) {
        if (!this._isDisposed && this._isWorkspaceConnected()) {
            if (!this._gitContextService.hasGitContextProvider()) {
                this._publishProviderUnavailableForEmptyLoadingSnapshots();
                return;
            }
            if (await this._ensureWorkspacePathLib(), !this._isDisposed) {
                if (!this._gitContextService.hasGitContextProvider()) {
                    this._publishProviderUnavailableForEmptyLoadingSnapshots();
                    return;
                }
                this._setRefreshRunning(!0, t), this._pendingScopeRefreshTimers.clearAndDisposeAll(), this._invalidateInFlightTrackedScopeRefreshes();
                try {
                    const e = this._gitRepoRootFsPath, n = await this._getGitRootStatus();
                    if (this._isDisposed || !this._isWorkspaceConnected()) return;
                    if (n.kind === "missing") {
                        this._logService.warn(`[GlassDiffService] Refresh reports missing git repository (reason=${t}, cwd=${this._cwd || "<empty>"}, previousGitRepoRoot=${e || "<none>"}, hasGitContextProvider=${this._gitContextService.hasGitContextProvider()})`), this._gitRepoRootFsPath = "", this._consecutiveGitUnavailableRefreshes = 0, this._publishAllScopesError("Workspace is not a git repository");
                        return;
                    }
                    if (n.kind === "unavailable") {
                        this._handleTransientGitUnavailable(t, n.message);
                        return;
                    }
                    if (n.kind === "error") {
                        this._logService.warn(`[GlassDiffService] Refresh git-root lookup errored (reason=${t}, cwd=${this._cwd || "<empty>"}, previousGitRepoRoot=${e || "<none>"}, hasGitContextProvider=${this._gitContextService.hasGitContextProvider()}, message=${n.message})`), this._gitRepoRootFsPath = "", this._consecutiveGitUnavailableRefreshes = 0, this._publishAllScopesError(n.message);
                        return;
                    }
                    this._consecutiveGitUnavailableRefreshes = 0, this._gitRepoRootFsPath = n.root;
                    const [i, r] = await Promise.all([
                        this._fetchBranchInfo(),
                        this._fetchSubmodulePaths()
                    ]);
                    if (this._isDisposed) return;
                    const [s, o, a] = i;
                    this._submodulePaths = r, this._submoduleDiffCache.clear();
                    const l = this._cache.currentBranch, c = this._cache.baseBranch;
                    if (this._cache.currentBranch = s ?? "", this._cache.baseBranch = o ?? this._cache.baseBranch, this._cache.remoteBaseBranch = a ?? this._cache.remoteBaseBranch, (this._cache.currentBranch !== l || this._cache.baseBranch !== c) && this._onDidChangeBranchContext.fire({
                        currentBranch: this._cache.currentBranch,
                        baseBranch: this._cache.baseBranch
                    }), this._wireScmRepositoryListeners(), await Promise.all([
                        this._refreshScope("unstaged", !0),
                        this._refreshScope("staged", !0),
                        this._refreshScope("committed")
                    ]), this._isDisposed) return;
                } catch (e) {
                    if (this._isDisposed || !this._isWorkspaceConnected() || Ya(e)) return;
                    const n = e instanceof Error ? e.message : "Failed to load diff";
                    if (HEg(n)) {
                        this._handleTransientGitUnavailable(t, n);
                        return;
                    }
                    this._consecutiveGitUnavailableRefreshes = 0, this._logService.warn(`[GlassDiffService] Refresh failed (reason=${t}, cwd=${this._gitCwd || "<empty>"}, gitRepoRoot=${this._gitRepoRootFsPath || "<unknown>"}):`, e), this._publishAllScopesError(n);
                } finally{
                    this._lastRefreshCompletedTime = Date.now(), this._setRefreshRunning(!1, t);
                }
            }
        }
    }
    _isWorkspaceConnected() {
        return this._workspaceConnectionService.connectionState.value === "connected";
    }
    _handleTransientGitUnavailable(t, e) {
        this._logService.warn(`[GlassDiffService] Refresh hit a transient git-subprocess failure (reason=${t}, cwd=${this._gitCwd || "<empty>"}, gitRepoRoot=${this._gitRepoRootFsPath || "<unknown>"}, retry=${this._consecutiveGitUnavailableRefreshes + 1}/${iQl}, message=${e})`), this._publishProviderUnavailableForEmptyLoadingSnapshots(), this._consecutiveGitUnavailableRefreshes < iQl && (this._consecutiveGitUnavailableRefreshes += 1, this._scheduleRefresh());
    }
    async _getGitRootStatus() {
        const t = this._resolveActiveWorkspaceRootRepository()?.rootUri ?? this._resolveWorkspaceRootRepositories()[0]?.rootUri;
        if (t) return {
            kind: "present",
            root: this._uriToWorkspacePath(t)
        };
        const e = this._gitCwd || this._firstWorkspaceFolderCwd();
        if (!e) return {
            kind: "missing"
        };
        try {
            const n = await this._gitContextService.getGitRoot(e);
            return (!n || !n.trim()) && this._logService.warn(`[GlassDiffService] getGitRoot returned empty for known cwd (cwd=${e}, returnedValue=${JSON.stringify(n)})`), zwv({
                gitRoot: n
            });
        } catch (n) {
            if (Ya(n)) throw n;
            return this._logService.warn(`[GlassDiffService] getGitRoot failed (cwd=${e}, hasGitContextProvider=${this._gitContextService.hasGitContextProvider()}):`, n), zwv({
                error: n
            });
        }
    }
    _publishAllScopesError(t) {
        for (const e of LFi){
            const n = this._cache.snapshots[e];
            (n.error !== t || n.filePaths.length > 0 || n.isLoading) && (this._cache.snapshots[e] = Object.freeze({
                filePaths: XQt,
                isLoading: !1,
                error: t
            }), this._emit({
                scope: e,
                event: {
                    type: "scopeSnapshotUpdated",
                    payload: this._cache.snapshots[e]
                }
            }));
        }
    }
    _publishProviderUnavailableForEmptyLoadingSnapshots() {
        for (const t of LFi){
            const e = this._cache.snapshots[t];
            !e.isLoading || e.filePaths.length > 0 || (this._cache.snapshots[t] = Object.freeze({
                filePaths: e.filePaths,
                isLoading: !1,
                error: x0v
            }), this._emit({
                scope: t,
                event: {
                    type: "scopeSnapshotUpdated",
                    payload: this._cache.snapshots[t]
                }
            }));
        }
    }
    async _refreshScope(t, e = !1, n) {
        const i = t === "committed" ? ++this._committedScopeRefreshEpoch : void 0, r = ()=>(t === "unstaged" || t === "staged") && n !== void 0 && n !== this._trackedScopesRefreshEpoch, s = ()=>i !== void 0 && i !== this._committedScopeRefreshEpoch;
        if (await this._ensureWorkspacePathLib(), this._isDisposed || r() || s()) return;
        if (!this._gitCwd) {
            this._scheduleRefresh();
            return;
        }
        let o = !1, a;
        switch(!e && (t === "unstaged" || t === "staged") && this._wireScmRepositoryListeners(), t){
            case "unstaged":
                {
                    a = await this._fetchScopeFiles({
                        cwd: this._gitCwd,
                        scope: "unstaged"
                    });
                    break;
                }
            case "staged":
                {
                    a = await this._fetchScopeFiles({
                        cwd: this._gitCwd,
                        scope: "staged"
                    });
                    break;
                }
            case "committed":
                {
                    const y = this._committedBranchModelState.model;
                    if (!(this._appliedCommittedBaseRefOverride() || this._getDefaultCommittedBaseRefName())) {
                        const I = this._cache.snapshots.committed;
                        (I.isLoading || I.filePaths.length > 0) && (this._cache.snapshots.committed = Object.freeze({
                            filePaths: XQt,
                            isLoading: !1,
                            error: "No default branch configured"
                        }), this._emit({
                            scope: "committed",
                            event: {
                                type: "scopeSnapshotUpdated",
                                payload: this._cache.snapshots.committed
                            }
                        })), this._setCommittedBranchModelState(JBe({
                            previousState: this._committedBranchModelState,
                            configuredTargetRefName: y.configuredTargetRefName
                        })), this._emitCommittedBranchModelIfChanged();
                        return;
                    }
                    const k = this._committedScopeRefsKey, C = await this._resolveCommittedScopeDiffRefs();
                    if (s()) return;
                    if (!C) {
                        const I = this._cache.snapshots.committed;
                        (I.isLoading || I.filePaths.length > 0) && (this._cache.snapshots.committed = Object.freeze({
                            filePaths: XQt,
                            isLoading: !1,
                            error: void 0
                        }), this._emit({
                            scope: "committed",
                            event: {
                                type: "scopeSnapshotUpdated",
                                payload: this._cache.snapshots.committed
                            }
                        })), this._emitCommittedBranchModelIfChanged();
                        return;
                    }
                    const T = `${C.mergeBaseRefName}\0${C.targetRefName}`;
                    if (o = k !== T, this._emitCommittedBranchModelIfChanged(), a = await this._fetchScopeFiles({
                        cwd: this._gitCwd,
                        scope: "committed",
                        mergeBaseRef: C.mergeBaseRefName,
                        targetRef: C.targetRefName
                    }), s()) return;
                    this._committedScopeRefsKey = T;
                    break;
                }
            default:
                {
                    const y = t;
                    throw new Error(`Unknown diff scope: ${y}`);
                }
        }
        if (this._isDisposed || r() || s()) return;
        const l = new Set(a.map((y)=>y.path)), c = this._cache.snapshots[t].filePaths, u = new Set(c), d = new Map, h = new Set;
        for (const y of c){
            const S = this._cache.fileEntries.get(QBe({
                scope: t,
                filePath: y
            }));
            S && d.set(y, S), l.has(y) || (this._diffMaterialStore.evictPath(y), this._evictImageBlobUrl(QBe({
                scope: t,
                filePath: y
            })));
        }
        const p = (y)=>this._mediaBlobUrls.has(QBe({
                scope: t,
                filePath: y
            })), g = `${t}:${KRs}:`;
        for (const [y, S] of this._mediaBlobUrls)y.startsWith(g) && S.stale && !l.has(y.slice(g.length)) && (URL.revokeObjectURL(S.value), this._mediaBlobUrls.delete(y));
        for (const y of this._cache.fileEntries.keys())y.startsWith(g) && this._cache.fileEntries.delete(y);
        for (const y of a){
            const S = this._submodulePaths.has(this._repoRelativePathForGitObjectRead(y.path)) ? {
                ...y,
                isSubmodule: !0
            } : y;
            this._cache.fileEntries.set(QBe({
                scope: t,
                filePath: y.path
            }), S);
            const k = d.get(y.path), C = k !== void 0 && (k.status !== S.status || k.additions !== S.additions || k.deletions !== S.deletions || k.isBinary !== S.isBinary || k.indexObjectName !== S.indexObjectName), T = this._diffMaterialStore.hasMaterial(y.path), I = p(y.path);
            (C || k === void 0 && (T || I) || o && (T || I || u.has(y.path))) && (this._markFileContentStale(y.path), h.add(y.path));
        }
        this._emitFileEntryStatusUpdatedEvents({
            scope: t,
            oldEntriesByPath: d,
            newFiles: a
        }), this._onDidRefreshScopeEntries.fire(t);
        const f = Object.freeze(a.map((y)=>y.path)), _ = this._cache.snapshots[t];
        let b = !1;
        Zm(f, _.filePaths) ? (_.isLoading || _.error !== void 0 || o) && (this._cache.snapshots[t] = Object.freeze({
            filePaths: _.filePaths,
            isLoading: !1,
            error: void 0
        }), b = !0) : (this._cache.snapshots[t] = Object.freeze({
            filePaths: f,
            isLoading: !1,
            error: void 0
        }), b = !0), b && this._emit({
            scope: t,
            event: {
                type: "scopeSnapshotUpdated",
                payload: this._cache.snapshots[t]
            }
        });
        for (const y of h)this._emit({
            scope: t,
            event: {
                type: "fileContentUpdated",
                payload: {
                    path: y
                }
            }
        });
    }
    _emitFileEntryStatusUpdatedEvents(t) {
        const { scope: e, oldEntriesByPath: n, newFiles: i } = t, r = new Map;
        for (const o of i)r.set(o.path, o);
        const s = new Set([
            ...n.keys(),
            ...r.keys()
        ]);
        for (const o of s){
            const a = n.get(o)?.status, l = r.get(o)?.status;
            a && l && a !== l && this._emit({
                scope: e,
                event: {
                    type: "fileGitStatusUpdated",
                    payload: {
                        path: o,
                        previousStatus: a,
                        status: l
                    }
                }
            });
        }
    }
    _markImageBlobUrlStale(t) {
        const e = this._mediaBlobUrls.get(t);
        e && (e.stale = !0);
    }
    _evictImageBlobUrl(t) {
        const e = this._mediaBlobUrls.get(t);
        e && (URL.revokeObjectURL(e.value), this._mediaBlobUrls.delete(t));
    }
    _emit(t) {
        const e = this._listeners.get(t.scope);
        if (e) for (const n of e)n(t.event);
    }
}, e2s = Re([
    F(0, Jv),
    F(1, F_),
    F(2, IRt),
    F(3, BZl),
    F(4, Cr),
    F(5, t_),
    F(6, pI),
    F(7, s9),
    F(8, ege),
    F(9, eu),
    F(10, Qr),
    F(11, fie),
    F(12, vN),
    F(13, ZBe),
    F(14, _N)
], e2s), bn(bU, e2s, 1);

}
