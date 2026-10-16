import { Qe, Vn, st } from "./Iwo.js";
import { Ah } from "./SZu.js";
import { BOe, qn } from "./async.js";
import { TQm, Wns } from "./branchOptions.js";
import { IQm, Wqt, blk, glk, mlk, sxn, wlk, ylk } from "./gYa.js";
import { Gtl, xQm } from "./localAgentBranchNames.js";
import { cp } from "./objects.js";
import { Kf, ca } from "./reactive.js";
import { klk } from "./remoteRefsFreshness.js";
import { Lr, YR } from "./resources.js";
import { E } from "./tslib.es6.js";
import { Sr } from "./workspace.js";
import { Lh } from "./workspaceMetadataService.js";
import { Rp } from "./ze.js";
var zns, LQm, OQm, FQm;
export { FQm, LQm, OQm, zns };
var __wakaru_Clk_initialized = false;
export function Clk() {
if (__wakaru_Clk_initialized) return;
__wakaru_Clk_initialized = true;
"use strict";
E(), qn(), Qe(), cp(), Lr(), Sr(), Lh(), Kf(), TQm(), xQm(), klk(), zns = 10, LQm = "glass.localRepoBranchRecency.", OQm = 2e3, FQm = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this._workspaceIdentifier = t, this._gitContextService = e, this._scmService = n, this._workspaceContextService = i, this._workspaceMetadataService = r, this._storageService = s, this._workspaceTrustManagementService = o, this._remoteAuthority = a, this._defaultBranches = new ca([]), this.defaultBranches = this._defaultBranches, this._branchOptionsByRepo = new ca([]), this.branchOptionsByRepo = this._branchOptionsByRepo, this._branchStateByRepo = new Map, this._trackedRepoPaths = [], this._trackedRepoPathsSet = new Set, this._idleBranchOptionsPrewarm = this._register(new Vn), this._refreshTrackedRepoPaths(), this._register(this._workspaceMetadataService.onDidChangeMetadata((l)=>{
            l.metadata.workspaceId === this._workspaceIdentifier.id && this._refreshTrackedRepoPaths();
        })), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this._refreshTrackedRepoPaths();
        })), this._register(this._scmService.onDidAddRepository(()=>this._refreshTrackedRepoPaths())), this._register(this._scmService.onDidRemoveRepository(()=>this._refreshTrackedRepoPaths())), this._register(this._scmService.onDidUpdateRepository(()=>this._refreshTrackedRepoPaths())), this._register(this._gitContextService.onDidChangeCachedBranch(({ cwd: l, branch: c })=>{
            !l || !this._trackedRepoPathsSet.has(l) || this._updateCurrentBranchForRepoPath(l, c);
        })), this._register(this._gitContextService.onDidRunGitStatus((l)=>this._invalidateBranchCache(l))), this._register(this._gitContextService.onDidGitHeadChange((l)=>this._invalidateBranchCache(l)));
    }
    setQuery(t, e) {
        if (!this._trackedRepoPathsSet.has(t)) return;
        const n = this._ensureBranchState(t), i = e.trim();
        i.length === 0 && this._gitContextService.refreshCurrentBranch({
            cwd: t
        }), n.defaultBranchResolved || this._fetchDefaultBranch(t);
        const r = n.query !== i, s = n.allBranches === void 0 && !n.isLoading, o = !s && !n.isLoading && this._isBranchCacheStale(n);
        if (!(!r && !s && !o)) {
            if (n.query = i, n.page = 1, s || o) {
                this._fetchBranchOptions(t, {
                    initial: s
                });
                return;
            }
            this._syncBranchOptionsByRepoReactive();
        }
    }
    notifyBranchPickerOpened(t) {
        if (!this._trackedRepoPathsSet.has(t)) return;
        const e = this._ensureBranchState(t), n = {
            gitContextService: this._gitContextService,
            storageService: this._storageService,
            workspaceTrustManagementService: this._workspaceTrustManagementService,
            remoteAuthority: this._remoteAuthority
        }, i = ylk(n, t), r = i !== void 0 && (e.fetchedAtMs === void 0 || i > e.fetchedAtMs);
        r && (glk(this._gitContextService, t, i), e.fetchedAtMs = void 0), (r || !e.hasRemoteNames && !e.remoteNamesPending) && this._fetchBranchOptions(t, {
            initial: e.allBranches === void 0,
            reuseFreshNames: !0
        });
        const s = blk(n, t);
        s && this._subscribeToRemoteRefsAttempt(t, s);
    }
    primeBranchPicker(t) {
        if (!this._trackedRepoPathsSet.has(t)) return;
        const e = this._ensureBranchState(t);
        e.hasRemoteNames || e.remoteNamesPending || this._fetchBranchOptions(t, {
            initial: e.allBranches === void 0,
            reuseFreshNames: !0
        });
    }
    async loadMore(t) {
        if (!this._trackedRepoPathsSet.has(t)) return;
        const e = this._ensureBranchState(t), n = this._applyBranchFilters(e);
        Math.min(n.length, e.page * Wns) >= n.length || (e.page += 1, this._syncBranchOptionsByRepoReactive());
    }
    async refresh(t) {
        this._trackedRepoPathsSet.has(t) && await this._fetchBranchOptions(t, {
            initial: !1
        });
    }
    recordSelection(t, e) {
        if (!this._trackedRepoPathsSet.has(t)) return;
        const n = this._ensureBranchState(t), i = e.trim();
        if (!i) return;
        const r = [
            i,
            ...this._loadRecency(t).filter((s)=>s !== i)
        ].slice(0, zns);
        n.recency = r, this._saveRecency(t, r), this._syncBranchOptionsByRepoReactive();
    }
    _recencyStorageKey(t) {
        return `${LQm}${t}`;
    }
    _loadRecency(t) {
        const e = this._storageService.get(this._recencyStorageKey(t), -1);
        if (!e) return [];
        try {
            const n = JSON.parse(e);
            return Array.isArray(n) ? n.filter((i)=>typeof i == "string").slice(0, zns) : [];
        } catch  {
            return [];
        }
    }
    _saveRecency(t, e) {
        this._storageService.store(this._recencyStorageKey(t), JSON.stringify(e.slice(0, zns)), -1, 1);
    }
    _resolveWorkspaceFolderRepoPaths() {
        const t = new Map;
        for (const e of this._workspaceContextService.getWorkspace().folders){
            const n = this._scmService.getRepository(e.uri)?.provider.rootUri, i = n && Wqt(n);
            i && i.trim().length > 0 && t.set(i, !0);
        }
        return [
            ...t.keys()
        ];
    }
    _resolveScmRepoPathsForAnchors(t) {
        const e = new Map;
        for (const n of this._scmService.repositories){
            const i = n.provider.rootUri, r = i && Wqt(i).trim();
            if (!(!i || !r)) {
                for (const s of t)if (YR(s, i) || YR(i, s)) {
                    e.set(r, !0);
                    break;
                }
            }
        }
        return [
            ...e.keys()
        ];
    }
    _refreshTrackedRepoPaths() {
        const t = this._workspaceMetadataService.getMetadata(this._workspaceIdentifier), e = t?.trackedGitRepos ?? [], n = new Map(e.map((d)=>[
                d.repoPath.trim(),
                d.repoUrl
            ])), i = e.map((d)=>d.repoPath.trim()).filter((d)=>d.length > 0), r = this._workspaceContextService.getWorkspace().folders, s = this._resolveWorkspaceFolderRepoPaths(), o = t?.paths ?? [], a = [
            ...r.map((d)=>d.uri),
            ...o.map((d)=>d.uri)
        ], l = Ah(this._workspaceIdentifier) && a.length > 0 ? this._resolveScmRepoPathsForAnchors(a) : [], c = Ah(this._workspaceIdentifier) ? [
            ...new Set([
                ...i,
                ...s,
                ...l
            ])
        ].filter((d)=>d.length > 0) : i.length > 0 ? [
            ...new Set(i)
        ] : s, u = new Set(c);
        for (const d of this._branchStateByRepo.keys())u.has(d) || this._branchStateByRepo.delete(d);
        this._trackedRepoPaths = c, this._trackedRepoPathsSet = u;
        for (const d of c){
            const h = this._ensureBranchState(d), p = sxn(this._gitContextService.getCachedCurrentBranch({
                cwd: d
            }));
            p && (h.currentBranch = p, h.currentBranchResolved = !0);
        }
        this._setDefaultBranches(c.map((d)=>{
            const h = n.get(d);
            return {
                repoPath: d,
                branch: this._branchStateByRepo.get(d)?.currentBranch,
                ...h ? {
                    repoUrl: h
                } : {}
            };
        })), this._syncBranchOptionsByRepoReactive();
        for (const d of c)this._gitContextService.getOrFetchCurrentBranch({
            cwd: d
        }).catch(()=>{}).then((h)=>this._updateCurrentBranchForRepoPath(d, h));
        this._scheduleIdleBranchOptionsPrewarm();
    }
    _scheduleIdleBranchOptionsPrewarm() {
        this._store.isDisposed || this._idleBranchOptionsPrewarm.value !== void 0 || !this._trackedRepoPaths.some((e)=>{
            const n = this._branchStateByRepo.get(e);
            return n === void 0 || n.allBranches === void 0 && !n.isLoading || !n.defaultBranchResolved;
        }) || (this._idleBranchOptionsPrewarm.value = BOe(()=>{
            if (this._idleBranchOptionsPrewarm.clear(), !this._store.isDisposed) for (const e of this._trackedRepoPaths)this._prewarmBranchOptions(e);
        }, OQm));
    }
    _prewarmBranchOptions(t) {
        const e = this._ensureBranchState(t);
        e.defaultBranchResolved || this._fetchDefaultBranch(t), !(e.isLoading || e.allBranches !== void 0) && this._fetchBranchOptions(t, {
            initial: !0,
            localOnly: !0
        });
    }
    _ensureBranchState(t) {
        let e = this._branchStateByRepo.get(t);
        if (!e) {
            const n = sxn(this._gitContextService.getCachedCurrentBranch({
                cwd: t
            }));
            e = {
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
                recency: this._loadRecency(t)
            }, this._branchStateByRepo.set(t, e);
        }
        return e;
    }
    _subscribeToRemoteRefsAttempt(t, e) {
        const n = this._ensureBranchState(t);
        n.remoteRefsAttemptSubscription !== e && (n.remoteRefsAttemptSubscription = e, e.then((i)=>{
            !i || this._store.isDisposed || !this._trackedRepoPathsSet.has(t) || (n.fetchedAtMs = void 0, this._fetchBranchOptions(t, {
                initial: !1,
                reuseFreshNames: !0
            }));
        }));
    }
    _isBranchCacheStale(t) {
        return t.fetchedAtMs === void 0 || Date.now() - t.fetchedAtMs >= Gtl;
    }
    _invalidateBranchCache(t) {
        if (!this._trackedRepoPathsSet.has(t)) return;
        IQm(this._gitContextService, t);
        const e = this._branchStateByRepo.get(t);
        e && (e.fetchedAtMs = void 0);
    }
    _updateCurrentBranchForRepoPath(t, e) {
        const n = sxn(e), i = this._branchStateByRepo.get(t);
        i && (i.currentBranch = n, i.currentBranchResolved = !0, n !== void 0 && i.allBranches !== void 0 && i.hasRemoteNames && !i.isLoading && !i.allBranches.includes(n) && this._fetchBranchOptions(t, {
            initial: !1
        })), this._setDefaultBranches(this._defaultBranches.value.map((r)=>r.repoPath === t ? {
                repoPath: t,
                branch: n,
                ...r.repoUrl ? {
                    repoUrl: r.repoUrl
                } : {}
            } : r)), this._syncBranchOptionsByRepoReactive();
    }
    async _fetchDefaultBranch(t) {
        const e = this._ensureBranchState(t), n = sxn(await this._gitContextService.getDefaultBranch({
            cwd: t,
            withoutOrigin: !0
        }).catch(()=>{}));
        if (this._store.isDisposed) return;
        const i = e.defaultBranchResolved, r = n !== void 0 && e.defaultBranch !== n;
        e.defaultBranchResolved = !0, n !== void 0 && (e.defaultBranch = n), (r || !i) && this._syncBranchOptionsByRepoReactive();
    }
    async _fetchBranchOptions(t, e) {
        const n = this._ensureBranchState(t), i = ++n.generation;
        n.remoteNamesPending = e.localOnly !== !0, e.initial && (n.isLoading = !0, this._syncBranchOptionsByRepoReactive());
        try {
            const r = mlk({
                gitContextService: this._gitContextService,
                repoPath: t,
                reuseFresh: e.initial || e.reuseFreshNames === !0
            }), s = await r.localOnly;
            if (n.generation !== i || this._store.isDisposed || s === void 0 || ((e.initial || n.allBranches === void 0) && (n.allBranches = s, n.hasRemoteNames = !1, this._syncBranchOptionsByRepoReactive()), e.localOnly)) return;
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
    _applyBranchFilters(t) {
        const e = t.allBranches ?? [];
        if (t.query.length > 0) return wlk(e, t.query);
        const n = this._applyRecencyOrder(e, t.recency);
        return this._pinDefaultAndCurrentFirst({
            names: n,
            defaultBranch: t.defaultBranch,
            currentBranch: t.currentBranch
        });
    }
    _applyRecencyOrder(t, e) {
        if (e.length === 0) return t;
        const n = new Map(e.map((i, r)=>[
                i,
                r
            ]));
        return [
            ...t
        ].sort((i, r)=>{
            const s = n.get(i), o = n.get(r);
            return s !== void 0 && o !== void 0 ? s - o : s !== void 0 ? -1 : o !== void 0 ? 1 : 0;
        });
    }
    _pinDefaultAndCurrentFirst(t) {
        const { names: e, defaultBranch: n, currentBranch: i } = t, r = [], s = new Set;
        return n && e.includes(n) && (r.push(n), s.add(n)), i && i !== n && e.includes(i) && (r.push(i), s.add(i)), r.length === 0 ? e : [
            ...r,
            ...e.filter((o)=>!s.has(o))
        ];
    }
    _buildBranchOptionsState(t) {
        if (t.allBranches === void 0) return t.isLoading ? this._buildLoadingShell(t) : void 0;
        const e = this._applyBranchFilters(t), n = Math.min(e.length, Math.max(1, t.page) * Wns), i = e.slice(0, n), { currentBranch: r, defaultBranch: s } = t;
        return {
            branches: i.map((a)=>({
                    name: a,
                    isDefault: !!s && a === s,
                    isCurrent: !!r && a === r
                })),
            recentBranchNames: t.recency,
            query: t.query,
            page: t.page,
            hasMore: n < e.length,
            isLoading: t.isLoading,
            isLoadingMore: !1,
            isEmptyRepo: t.allBranches.length === 0,
            bootstrapBranch: r
        };
    }
    _buildLoadingShell(t) {
        return {
            branches: [],
            recentBranchNames: t.recency,
            query: t.query,
            page: t.page,
            hasMore: !1,
            isLoading: !0,
            isLoadingMore: !1,
            isEmptyRepo: !1,
            bootstrapBranch: t.currentBranch
        };
    }
    _setDefaultBranches(t) {
        Rp(this._defaultBranches.value, t) || this._defaultBranches.set(t);
    }
    _syncBranchOptionsByRepoReactive() {
        const t = this._trackedRepoPaths.map((e)=>{
            const n = this._branchStateByRepo.get(e);
            return {
                repoPath: e,
                branchOptions: n ? this._buildBranchOptionsState(n) : void 0
            };
        });
        Rp(this._branchOptionsByRepo.value, t) || this._branchOptionsByRepo.set(t);
    }
};

}
