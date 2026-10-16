import { Se, cn, we } from "./HVr.js";
import { bn, kge } from "./async.js";
import { K7v, gyo } from "./branchOptions.js";
import { Zhh, fyo } from "./localAgentBranchNames.js";
import { bu } from "./objects.js";
import { gk, yh } from "./qIc.js";
import { N1, gh } from "./reactive.js";
import { s$v } from "./remoteRefsFreshness.js";
import { Li, d3 } from "./resources.js";
import { x } from "./tslib.es6.js";
import { ci } from "./workspace.js";
import { a0 } from "./workspaceMetadataService.js";
import { $Gt, Q7v, Xhh, Z7v, dVt, i$v, n$v, o$v } from "./xmo.js";
var IYi, rph, sph, oph;
export { IYi, oph, rph, sph };
var __wakaru_a$v_initialized = false;
export function a$v() {
if (__wakaru_a$v_initialized) return;
__wakaru_a$v_initialized = true;
"use strict";
x(), bn(), Se(), bu(), Li(), ci(), a0(), N1(), K7v(), Zhh(), s$v(), IYi = 10, rph = "glass.localRepoBranchRecency.", sph = 2e3, oph = class extends we {
    constructor(e, t, n, i, r, s, o, a){
        super(), this._workspaceIdentifier = e, this._gitContextService = t, this._scmService = n, this._workspaceContextService = i, this._workspaceMetadataService = r, this._storageService = s, this._workspaceTrustManagementService = o, this._remoteAuthority = a, this._defaultBranches = new gh([]), this.defaultBranches = this._defaultBranches, this._branchOptionsByRepo = new gh([]), this.branchOptionsByRepo = this._branchOptionsByRepo, this._branchStateByRepo = new Map, this._trackedRepoPaths = [], this._trackedRepoPathsSet = new Set, this._idleBranchOptionsPrewarm = this._register(new cn), this._refreshTrackedRepoPaths(), this._register(this._workspaceMetadataService.onDidChangeMetadata((c)=>{
            c.metadata.workspaceId === this._workspaceIdentifier.id && this._refreshTrackedRepoPaths();
        })), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this._refreshTrackedRepoPaths();
        })), this._register(this._scmService.onDidAddRepository(()=>this._refreshTrackedRepoPaths())), this._register(this._scmService.onDidRemoveRepository(()=>this._refreshTrackedRepoPaths())), this._register(this._scmService.onDidUpdateRepository(()=>this._refreshTrackedRepoPaths())), this._register(this._gitContextService.onDidChangeCachedBranch(({ cwd: c, branch: l })=>{
            !c || !this._trackedRepoPathsSet.has(c) || this._updateCurrentBranchForRepoPath(c, l);
        })), this._register(this._gitContextService.onDidRunGitStatus((c)=>this._invalidateBranchCache(c))), this._register(this._gitContextService.onDidGitHeadChange((c)=>this._invalidateBranchCache(c)));
    }
    setQuery(e, t) {
        if (!this._trackedRepoPathsSet.has(e)) return;
        const n = this._ensureBranchState(e), i = t.trim();
        i.length === 0 && this._gitContextService.refreshCurrentBranch({
            cwd: e
        }), n.defaultBranchResolved || this._fetchDefaultBranch(e);
        const r = n.query !== i, s = n.allBranches === void 0 && !n.isLoading, o = !s && !n.isLoading && this._isBranchCacheStale(n);
        if (!(!r && !s && !o)) {
            if (n.query = i, n.page = 1, s || o) {
                this._fetchBranchOptions(e, {
                    initial: s
                });
                return;
            }
            this._syncBranchOptionsByRepoReactive();
        }
    }
    notifyBranchPickerOpened(e) {
        if (!this._trackedRepoPathsSet.has(e)) return;
        const t = this._ensureBranchState(e), n = {
            gitContextService: this._gitContextService,
            storageService: this._storageService,
            workspaceTrustManagementService: this._workspaceTrustManagementService,
            remoteAuthority: this._remoteAuthority
        }, i = i$v(n, e), r = i !== void 0 && (t.fetchedAtMs === void 0 || i > t.fetchedAtMs);
        r && (Q7v(this._gitContextService, e, i), t.fetchedAtMs = void 0), (r || !t.hasRemoteNames && !t.remoteNamesPending) && this._fetchBranchOptions(e, {
            initial: t.allBranches === void 0,
            reuseFreshNames: !0
        });
        const s = n$v(n, e);
        s && this._subscribeToRemoteRefsAttempt(e, s);
    }
    primeBranchPicker(e) {
        if (!this._trackedRepoPathsSet.has(e)) return;
        const t = this._ensureBranchState(e);
        t.hasRemoteNames || t.remoteNamesPending || this._fetchBranchOptions(e, {
            initial: t.allBranches === void 0,
            reuseFreshNames: !0
        });
    }
    async loadMore(e) {
        if (!this._trackedRepoPathsSet.has(e)) return;
        const t = this._ensureBranchState(e), n = this._applyBranchFilters(t);
        Math.min(n.length, t.page * gyo) >= n.length || (t.page += 1, this._syncBranchOptionsByRepoReactive());
    }
    async refresh(e) {
        this._trackedRepoPathsSet.has(e) && await this._fetchBranchOptions(e, {
            initial: !1
        });
    }
    recordSelection(e, t) {
        if (!this._trackedRepoPathsSet.has(e)) return;
        const n = this._ensureBranchState(e), i = t.trim();
        if (!i) return;
        const r = [
            i,
            ...this._loadRecency(e).filter((s)=>s !== i)
        ].slice(0, IYi);
        n.recency = r, this._saveRecency(e, r), this._syncBranchOptionsByRepoReactive();
    }
    _recencyStorageKey(e) {
        return `${rph}${e}`;
    }
    _loadRecency(e) {
        const t = this._storageService.get(this._recencyStorageKey(e), -1);
        if (!t) return [];
        try {
            const n = JSON.parse(t);
            return Array.isArray(n) ? n.filter((i)=>typeof i == "string").slice(0, IYi) : [];
        } catch  {
            return [];
        }
    }
    _saveRecency(e, t) {
        this._storageService.store(this._recencyStorageKey(e), JSON.stringify(t.slice(0, IYi)), -1, 1);
    }
    _resolveWorkspaceFolderRepoPaths() {
        const e = new Map;
        for (const t of this._workspaceContextService.getWorkspace().folders){
            const n = this._scmService.getRepository(t.uri)?.provider.rootUri, i = n && $Gt(n);
            i && i.trim().length > 0 && e.set(i, !0);
        }
        return [
            ...e.keys()
        ];
    }
    _resolveScmRepoPathsForAnchors(e) {
        const t = new Map;
        for (const n of this._scmService.repositories){
            const i = n.provider.rootUri, r = i && $Gt(i).trim();
            if (!(!i || !r)) {
                for (const s of e)if (d3(s, i) || d3(i, s)) {
                    t.set(r, !0);
                    break;
                }
            }
        }
        return [
            ...t.keys()
        ];
    }
    _refreshTrackedRepoPaths() {
        const e = this._workspaceMetadataService.getMetadata(this._workspaceIdentifier), t = e?.trackedGitRepos ?? [], n = new Map(t.map((h)=>[
                h.repoPath.trim(),
                h.repoUrl
            ])), i = t.map((h)=>h.repoPath.trim()).filter((h)=>h.length > 0), r = this._workspaceContextService.getWorkspace().folders, s = this._resolveWorkspaceFolderRepoPaths(), o = e?.paths ?? [], a = [
            ...r.map((h)=>h.uri),
            ...o.map((h)=>h.uri)
        ], c = gk(this._workspaceIdentifier) && a.length > 0 ? this._resolveScmRepoPathsForAnchors(a) : [], l = gk(this._workspaceIdentifier) ? [
            ...new Set([
                ...i,
                ...s,
                ...c
            ])
        ].filter((h)=>h.length > 0) : i.length > 0 ? [
            ...new Set(i)
        ] : s, u = new Set(l);
        for (const h of this._branchStateByRepo.keys())u.has(h) || this._branchStateByRepo.delete(h);
        this._trackedRepoPaths = l, this._trackedRepoPathsSet = u;
        for (const h of l){
            const p = this._ensureBranchState(h), g = dVt(this._gitContextService.getCachedCurrentBranch({
                cwd: h
            }));
            g && (p.currentBranch = g, p.currentBranchResolved = !0);
        }
        this._setDefaultBranches(l.map((h)=>{
            const p = n.get(h);
            return {
                repoPath: h,
                branch: this._branchStateByRepo.get(h)?.currentBranch,
                ...p ? {
                    repoUrl: p
                } : {}
            };
        })), this._syncBranchOptionsByRepoReactive();
        for (const h of l)this._gitContextService.getOrFetchCurrentBranch({
            cwd: h
        }).catch(()=>{}).then((p)=>this._updateCurrentBranchForRepoPath(h, p));
        this._scheduleIdleBranchOptionsPrewarm();
    }
    _scheduleIdleBranchOptionsPrewarm() {
        this._store.isDisposed || this._idleBranchOptionsPrewarm.value !== void 0 || !this._trackedRepoPaths.some((t)=>{
            const n = this._branchStateByRepo.get(t);
            return n === void 0 || n.allBranches === void 0 && !n.isLoading || !n.defaultBranchResolved;
        }) || (this._idleBranchOptionsPrewarm.value = kge(()=>{
            if (this._idleBranchOptionsPrewarm.clear(), !this._store.isDisposed) for (const t of this._trackedRepoPaths)this._prewarmBranchOptions(t);
        }, sph));
    }
    _prewarmBranchOptions(e) {
        const t = this._ensureBranchState(e);
        t.defaultBranchResolved || this._fetchDefaultBranch(e), !(t.isLoading || t.allBranches !== void 0) && this._fetchBranchOptions(e, {
            initial: !0,
            localOnly: !0
        });
    }
    _ensureBranchState(e) {
        let t = this._branchStateByRepo.get(e);
        if (!t) {
            const n = dVt(this._gitContextService.getCachedCurrentBranch({
                cwd: e
            }));
            t = {
                allBranches: void 0,
                hasRemoteNames: !1,
                remoteNamesPending: !1,
                page: 1,
                query: "",
                generation: 0,
                isLoading: !1,
                fetchedAtMs: void 0,
                remoteRefsAttemptSubscription: void 0,
                currentBranch: n,
                defaultBranch: void 0,
                defaultBranchResolved: !1,
                currentBranchResolved: n !== void 0,
                recency: this._loadRecency(e)
            }, this._branchStateByRepo.set(e, t);
        }
        return t;
    }
    _subscribeToRemoteRefsAttempt(e, t) {
        const n = this._ensureBranchState(e);
        n.remoteRefsAttemptSubscription !== t && (n.remoteRefsAttemptSubscription = t, t.then((i)=>{
            !i || this._store.isDisposed || !this._trackedRepoPathsSet.has(e) || (n.fetchedAtMs = void 0, this._fetchBranchOptions(e, {
                initial: !1,
                reuseFreshNames: !0
            }));
        }));
    }
    _isBranchCacheStale(e) {
        return e.fetchedAtMs === void 0 || Date.now() - e.fetchedAtMs >= fyo;
    }
    _invalidateBranchCache(e) {
        if (!this._trackedRepoPathsSet.has(e)) return;
        Xhh(this._gitContextService, e);
        const t = this._branchStateByRepo.get(e);
        t && (t.fetchedAtMs = void 0);
    }
    _updateCurrentBranchForRepoPath(e, t) {
        const n = dVt(t), i = this._branchStateByRepo.get(e);
        i && (i.currentBranch = n, i.currentBranchResolved = !0, n !== void 0 && i.allBranches !== void 0 && i.hasRemoteNames && !i.isLoading && !i.allBranches.includes(n) && this._fetchBranchOptions(e, {
            initial: !1
        })), this._setDefaultBranches(this._defaultBranches.value.map((r)=>r.repoPath === e ? {
                repoPath: e,
                branch: n,
                ...r.repoUrl ? {
                    repoUrl: r.repoUrl
                } : {}
            } : r)), this._syncBranchOptionsByRepoReactive();
    }
    async _fetchDefaultBranch(e) {
        const t = this._ensureBranchState(e), n = dVt(await this._gitContextService.getDefaultBranch({
            cwd: e,
            withoutOrigin: !0
        }).catch(()=>{}));
        if (this._store.isDisposed) return;
        const i = t.defaultBranchResolved, r = n !== void 0 && t.defaultBranch !== n;
        t.defaultBranchResolved = !0, n !== void 0 && (t.defaultBranch = n), (r || !i) && this._syncBranchOptionsByRepoReactive();
    }
    async _fetchBranchOptions(e, t) {
        const n = this._ensureBranchState(e), i = ++n.generation;
        n.remoteNamesPending = t.localOnly !== !0, t.initial && (n.isLoading = !0, this._syncBranchOptionsByRepoReactive());
        try {
            const r = Z7v({
                gitContextService: this._gitContextService,
                repoPath: e,
                reuseFresh: t.initial || t.reuseFreshNames === !0
            }), s = await r.localOnly;
            if (n.generation !== i || this._store.isDisposed || s === void 0 || ((t.initial || n.allBranches === void 0) && (n.allBranches = s, n.hasRemoteNames = !1, this._syncBranchOptionsByRepoReactive()), t.localOnly)) return;
            !n.hasRemoteNames && !n.isLoading && (n.isLoading = !0, this._syncBranchOptionsByRepoReactive());
            const o = await r.full();
            if (n.generation !== i || this._store.isDisposed) return;
            o !== void 0 && (n.allBranches = o, n.hasRemoteNames = !0, n.fetchedAtMs = r.startedAtMs);
        } catch  {
            if (n.generation !== i || this._store.isDisposed) return;
            n.allBranches = n.allBranches ?? [];
        } finally{
            n.generation === i && !this._store.isDisposed && (n.isLoading = !1, n.remoteNamesPending = !1, this._syncBranchOptionsByRepoReactive());
        }
    }
    _applyBranchFilters(e) {
        const t = e.allBranches ?? [];
        if (e.query.length > 0) return o$v(t, e.query);
        const n = this._applyRecencyOrder(t, e.recency);
        return this._pinDefaultAndCurrentFirst({
            names: n,
            defaultBranch: e.defaultBranch,
            currentBranch: e.currentBranch
        });
    }
    _applyRecencyOrder(e, t) {
        if (t.length === 0) return e;
        const n = new Map(t.map((i, r)=>[
                i,
                r
            ]));
        return [
            ...e
        ].sort((i, r)=>{
            const s = n.get(i), o = n.get(r);
            return s !== void 0 && o !== void 0 ? s - o : s !== void 0 ? -1 : o !== void 0 ? 1 : 0;
        });
    }
    _pinDefaultAndCurrentFirst(e) {
        const { names: t, defaultBranch: n, currentBranch: i } = e, r = [], s = new Set;
        return n && t.includes(n) && (r.push(n), s.add(n)), i && i !== n && t.includes(i) && (r.push(i), s.add(i)), r.length === 0 ? t : [
            ...r,
            ...t.filter((o)=>!s.has(o))
        ];
    }
    _buildBranchOptionsState(e) {
        if (e.allBranches === void 0) return e.isLoading ? this._buildLoadingShell(e) : void 0;
        const t = this._applyBranchFilters(e), n = Math.min(t.length, Math.max(1, e.page) * gyo), i = t.slice(0, n), { currentBranch: r, defaultBranch: s } = e;
        return {
            branches: i.map((a)=>({
                    name: a,
                    isDefault: !!s && a === s,
                    isCurrent: !!r && a === r
                })),
            recentBranchNames: e.recency,
            query: e.query,
            page: e.page,
            hasMore: n < t.length,
            isLoading: e.isLoading,
            isLoadingMore: !1,
            isEmptyRepo: e.allBranches.length === 0,
            bootstrapBranch: r
        };
    }
    _buildLoadingShell(e) {
        return {
            branches: [],
            recentBranchNames: e.recency,
            query: e.query,
            page: e.page,
            hasMore: !1,
            isLoading: !0,
            isLoadingMore: !1,
            isEmptyRepo: !1,
            bootstrapBranch: e.currentBranch
        };
    }
    _setDefaultBranches(e) {
        yh(this._defaultBranches.value, e) || this._defaultBranches.set(e);
    }
    _syncBranchOptionsByRepoReactive() {
        const e = this._trackedRepoPaths.map((t)=>{
            const n = this._branchStateByRepo.get(t);
            return {
                repoPath: t,
                branchOptions: n ? this._buildBranchOptionsState(n) : void 0
            };
        });
        yh(this._branchOptionsByRepo.value, e) || this._branchOptionsByRepo.set(e);
    }
};

}
