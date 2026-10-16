import { Di, Ec, Gt, OXu, Pn, Qe, Wd, Zxe, aO, st, tt, xa } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { ZE, df, qn } from "./async.js";
import { kl } from "./browser.ts";
import { El, yo } from "./cancellation.js";
import { EJr } from "./cloudWorkerFileUri.js";
import { or, yi } from "./configuration.js";
import { D_r, pa } from "./constants_8.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { pP } from "./extpath.js";
import { is, ms } from "./files.js";
import { Jv, hy } from "./gitContextService.js";
import { NB } from "./glob.js";
import { Xqe, cBm } from "./ignore.js";
import { It, dn } from "./instantiation.js";
import { gP1 } from "./ipa.js";
import { Ji, Li } from "./log.js";
import { du, kv } from "./map.js";
import { Uh, ip } from "./metricsService.js";
import { Ki, Ot } from "./network.js";
import { JD, UT } from "./output.js";
import { Rd, ih } from "./pathService.js";
import { MB } from "./pathUtils.js";
import { f4e, xCe } from "./queryBuilder.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Ope, vie } from "./repositoryService.js";
import { Lr, Mc, Os } from "./resources.js";
import { wG1 } from "./searchGitRepos.js";
import { ICe, wL } from "./search_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Cu, ey } from "./workspaceCollectionService.js";
import { WO, qM } from "./worktree.js";
import { JBm, TJr, gGt, u$ } from "./yBp.js";
var AE, M0i, c8m, u8m, d8m, AYa, RYa, h8m, GJr;
export { AE, AYa, GJr, M0i, RYa, c8m, d8m, h8m, u8m };
var __wakaru_S2_initialized = false;
export function S2() {
if (__wakaru_S2_initialized) return;
__wakaru_S2_initialized = true;
"use strict";
E(), Rn(), It(), fn(), Sr(), ms(), Qe(), Gt(), Lr(), Ji(), cBm(), Ki(), EJr(), NB(), wL(), el(), f4e(), Ope(), hy(), or(), pa(), du(), pP(), Di(), kl(), wG1(), Vp(), yo(), qM(), ip(), qn(), JD(), ih(), fo(), MB(), Cu(), AE = jn("cursorIgnoreService"), M0i = "hierarchical allow file list is still loading, please retry the tool call", c8m = /[*?[\]{}!]/, u8m = 1e3, d8m = 3e4, AYa = 10, RYa = 6e4, h8m = 9e4, GJr = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f){
        super(), this.workspaceContextService = t, this.fileService = e, this.logService = n, this.searchService = i, this.reactiveStorageService = r, this.instantiationService = s, this.repositoryService = o, this.gitContextService = a, this.configurationService = l, this.uriIdentityService = c, this.worktreeManagerService = u, this.metricsService = d, this.outputService = h, this.pathService = p, this.workspaceCollectionService = g, this.environmentService = f, this._ignoreMapping = {}, this._ignorePatternsMapping = {}, this._pendingIgnorePaths = new Set, this._globalIgnorePatterns = [], this._rulesLoaded = new df, this._rulesLoadStalled = new df, this._didLogRulesWithheld = !1, this._gitRepoLocations = [], this._gitRepoUpstreamUrls = new Map, this._gitRepoScanSkippedFolders = [], this._ignoreScanSkippedFolders = [], this._cursorWorkerRepoUrls = new Map, this._didStartGitRepoScanning = !1, this._gitReposInitialized = !1, this._gitRepoRemapRunning = !1, this._gitRepoRemapPending = !1, this._materializedWorkspaceFoldersCache = void 0, this._onDidCursorIgnoreChange = this._register(new tt), this.onDidCursorIgnoreChange = this._onDidCursorIgnoreChange.event, this._cache = new kv(2e3, .5), this._parsedBaseCache = new Map, this._scannedOutOfWorkspaceRoots = new Set, this._scannedOutOfWorkspaceAncestorRoots = new Set, this._realPathCache = new Map, this._initTimeout = this._register(new ZE), this._isAggregateWorkspaceInstance = this.environmentService.glassWorkspaceRole === "rootWorkspace";
        const _ = this.pathService.userHome({
            preferLocal: !0
        }), b = rt.joinPath(_, ".cursor");
        this._cursorDataDirPath = this.normalizePathForComparison(b.scheme === Ot.vscodeRemote ? b.path : b.fsPath);
        const y = rt.joinPath(_, ".cursor", "worktrees");
        this._worktreesDirPath = this.normalizePathForComparison(y.scheme === Ot.vscodeRemote ? y.path : y.fsPath), this._cancellationTokenSource = new El, this._cancellationToken = this._cancellationTokenSource.token, this._register({
            dispose: ()=>{
                this._cancellationTokenSource.dispose(!0);
            }
        }), this._register(this._onDidCursorIgnoreChange.event(()=>{
            this.clearCaches();
        })), this._register(this.fileService.onDidFilesChange(async (k)=>{
            if (k.gotAdded()) {
                const C = k.rawAdded.filter((T)=>T.path.endsWith(".cursorignore"));
                for (const T of C){
                    const I = T.toString(), A = I.substring(0, I.lastIndexOf(".cursorignore"));
                    try {
                        const P = await this.fileService.readFile(T), M = this.parseIgnoreRules(P.value.toString());
                        M.length > 0 ? (this._ignoreMapping[A] = Xqe().add(M), this._ignorePatternsMapping[A] = M) : (this._ignoreMapping[A] = "no-ignore", this._ignorePatternsMapping[A] = "no-ignore"), this._onDidCursorIgnoreChange.fire({});
                    } catch (P) {
                        console.error(`Error processing new .cursorignore file at ${T.toString()}:`, P);
                    }
                }
            }
            if (k.gotDeleted()) {
                const C = k.rawDeleted.filter((T)=>T.path.endsWith(".cursorignore"));
                for (const T of C){
                    const I = T.toString(), A = I.substring(0, I.lastIndexOf(".cursorignore"));
                    delete this._ignoreMapping[A], delete this._ignorePatternsMapping[A];
                }
                C.length > 0 && this._onDidCursorIgnoreChange.fire({});
            }
            if (k.gotUpdated()) {
                const C = k.rawUpdated.filter((T)=>T.path.endsWith(".cursorignore"));
                for (const T of C){
                    const I = this.findIgnoreMappingKeyForCursorignoreUri(T);
                    if (I !== void 0) try {
                        const A = await this.fileService.readFile(T), P = this.parseIgnoreRules(A.value.toString());
                        P.length > 0 ? (this._ignoreMapping[I] = Xqe().add(P), this._ignorePatternsMapping[I] = P) : (this._ignoreMapping[I] = "no-ignore", this._ignorePatternsMapping[I] = "no-ignore"), this._onDidCursorIgnoreChange.fire({});
                    } catch (A) {
                        this.logService.error(`Error processing updated .cursorignore file at ${T.toString()}:`, A);
                    }
                }
            }
        }));
        const S = this.reactiveStorageService.onChangeEffectManuallyDisposed({
            onChange: ({ deps: k })=>{
                const [C, T, I] = k;
                (C !== void 0 || T !== void 0 || I !== void 0) && (this.startGitRepoMappingIfNeeded(), this.getEffectiveWorkspaceFolders().length > 0 && this._onDidCursorIgnoreChange.fire({}));
            },
            deps: [
                ()=>this.reactiveStorageService.applicationUserPersistentStorage.teamAllowlist,
                ()=>this.reactiveStorageService.applicationUserPersistentStorage.teamBlocklist,
                ()=>this.reactiveStorageService.applicationUserPersistentStorage.teamBlockRepos
            ]
        });
        this._register(S), this._isAggregateWorkspaceInstance && (this._register(this.workspaceCollectionService.onDidChangeMaterializedWorkspaceIdentifiers(()=>{
            this._onMaterializedWorkspacesChanged();
        })), this._register(this.workspaceCollectionService.onDidChangeMaterializedWorkspaceFolders(()=>{
            this._onMaterializedWorkspacesChanged();
        }))), this._register(this.fileService.onDidChangeFileSystemProviderRegistrations((k)=>{
            this.doesAnyWorkspaceFolderUseScheme(k.scheme) && this._onMaterializedWorkspacesChanged();
        })), this._register(this.configurationService.onDidChangeConfiguration((k)=>{
            k.affectsConfiguration(D_r) && (this.initializeGlobalIgnoreList(), this._onDidCursorIgnoreChange.fire({}));
        })), this._register(this.worktreeManagerService.onDidRemoveWorktree((k)=>{
            this.cleanupWorktreeCursorIgnoreEntries(k);
        })), this._queryBuilder = this.instantiationService.createInstance(xCe), this.initializeGlobalIgnoreList(), this._register(Ec(()=>this._rulesLoadStalled.complete(), h8m)), this._register(Pn(()=>this._rulesLoadStalled.complete())), this.initializeIgnoreMapping(), this.repositoryService.setIsUriCursorIgnored((k)=>this.shouldBlockUriFromReading(k)), this.startGitRepoMappingIfNeeded();
    }
    get _ignoreLoaded() {
        return this._rulesLoaded.isResolved;
    }
    getEffectiveWorkspaceFolders() {
        const t = this.workspaceContextService.getWorkspace().folders;
        if (!this._isAggregateWorkspaceInstance) return [
            ...t
        ];
        const e = this.getMaterializedWorkspaceFoldersCached();
        if (e.length === 0) return [
            ...t
        ];
        const n = new Set, i = [];
        for (const r of t){
            const s = this.uriIdentityService.extUri.getComparisonKey(r.uri, !0);
            n.has(s) || (n.add(s), i.push(r));
        }
        for (const r of e){
            if (!this.fileService.hasProvider(r.uri)) continue;
            const s = this.uriIdentityService.extUri.getComparisonKey(r.uri, !0);
            n.has(s) || (n.add(s), i.push(r));
        }
        return i;
    }
    getMaterializedWorkspaceFoldersCached() {
        return this._materializedWorkspaceFoldersCache === void 0 && (this._materializedWorkspaceFoldersCache = this.workspaceCollectionService.getMaterializedWorkspaceFolders()), this._materializedWorkspaceFoldersCache;
    }
    doesAnyWorkspaceFolderUseScheme(t) {
        for (const e of this.workspaceContextService.getWorkspace().folders)if (e.uri.scheme === t) return !0;
        if (!this._isAggregateWorkspaceInstance) return !1;
        for (const e of this.getMaterializedWorkspaceFoldersCached())if (e.uri.scheme === t) return !0;
        return !1;
    }
    _onMaterializedWorkspacesChanged() {
        this._materializedWorkspaceFoldersCache = void 0, this._didStartGitRepoScanning ? this._requestGitRepoRemap() : this.startGitRepoMappingIfNeeded(), this._onDidCursorIgnoreChange.fire({});
    }
    startGitRepoMappingIfNeeded() {
        this._didStartGitRepoScanning || this.getAdminBlockRepos().length === 0 || this._isAggregateWorkspaceInstance && this.getEffectiveWorkspaceFolders().length === 0 || (this._didStartGitRepoScanning = !0, this._requestGitRepoRemap());
    }
    _requestGitRepoRemap() {
        this._gitRepoRemapPending = !0, this._runGitRepoRemap();
    }
    async _runGitRepoRemap() {
        if (!this._gitRepoRemapRunning) {
            this._gitRepoRemapRunning = !0;
            try {
                for(; this._gitRepoRemapPending;){
                    this._gitRepoRemapPending = !1;
                    try {
                        await this.initializeGitRepoMapping();
                    } catch (t) {
                        this.logService.error("[CursorIgnore] Error initializing git repo mapping:", t);
                    }
                }
            } finally{
                this._gitRepoRemapRunning = !1;
            }
        }
    }
    uriFromFsPathUsingBase(t, e) {
        if (!e) return rt.file(t);
        const n = t.replace(/\\/g, "/"), i = n.startsWith("/") ? n : "/" + n;
        return rt.from({
            scheme: e.scheme,
            authority: e.authority,
            path: i
        });
    }
    async getRealUriAsync(t) {
        if (t.scheme !== Ot.file && t.scheme !== Ot.vscodeRemote) return t;
        const e = t.toString(), n = this._realPathCache.get(e);
        if (n !== void 0) return n;
        try {
            const i = await this.fileService.realpath(t);
            return this._realPathCache.set(e, i), i;
        } catch  {
            try {
                const r = Mc(t), s = await this.fileService.realpath(r), o = this.uriIdentityService.extUri.relativePath(r, t) ?? null, a = o !== null && o !== "" ? Os(s, o) : s;
                return this._realPathCache.set(e, a), a;
            } catch  {
                return this._realPathCache.set(e, t), t;
            }
        }
    }
    async getRealWorkspaceFolders() {
        const t = this.getEffectiveWorkspaceFolders();
        if (t.length === 0) return t;
        const e = [];
        for (const n of t){
            const i = await this.getRealUriAsync(n.uri);
            if (this.uriIdentityService.extUri.isEqual(i, n.uri)) {
                e.push(n);
                continue;
            }
            e.push({
                uri: i,
                name: n.name,
                index: n.index,
                toResource: (r)=>Os(i, r)
            });
        }
        return e;
    }
    cleanupWorktreeCursorIgnoreEntries(t) {
        const e = rt.file(t), n = [];
        for (const i of Object.keys(this._ignoreMapping))try {
            const r = rt.parse(i);
            this.uriIdentityService.extUri.isEqualOrParent(r, e) && n.push(i);
        } catch  {}
        if (n.length > 0) {
            for (const i of n)delete this._ignoreMapping[i], delete this._ignorePatternsMapping[i];
            this.logService.info(`[CursorIgnore] Cleaned up ${n.length} .cursorignore entries for removed worktree at ${t}`), this._onDidCursorIgnoreChange.fire({});
        }
    }
    async shouldIgnoreUri(t, e) {
        const n = await this.getRealUriAsync(t), i = await this.getRealWorkspaceFolders();
        return this.shouldIgnoreUriWithWorkspaceFolders(n, e, i);
    }
    initializeGlobalIgnoreList() {
        const t = this.configurationService.getValue(D_r) || [];
        this._globalIgnorePatterns = t, t.length > 0 ? this._globalIgnore = Xqe({
            allowRelativePaths: !0
        }).add(t) : this._globalIgnore = void 0;
    }
    addOnCursorIgnoreLoadedCallback(t) {
        this._ignoreLoaded ? t() : this._rulesLoaded.p.then(t);
    }
    async waitForRulesLoaded(t) {
        return this._ignoreLoaded || !this._rulesLoadStalled.isSettled && await Promise.race([
            this._rulesLoaded.p.then(()=>!0),
            this._rulesLoadStalled.p.then(()=>!1)
        ]) ? !0 : (this._didLogRulesWithheld || (this._didLogRulesWithheld = !0, this.logService.warn(`[CursorIgnore] .cursorignore rules are not loaded; withholding file content (first reader: ${t})`)), this.metricsService.increment({
            stat: "cursor_ignore.rules_wait_timeout",
            tags: {
                reader: t
            }
        }), !1);
    }
    async initializeIgnoreMapping() {
        const t = Date.now();
        this._initTimeout.setIfNotSet(()=>{
            this.logService.warn(`[CursorIgnore] .cursorignore discovery has not completed after ${RYa}ms; context reads that wait for it are still blocked`), this.metricsService.increment({
                stat: "cursor_ignore.initial_load_slow"
            });
        }, RYa);
        for(let e = 1;; e++){
            if (this._cancellationToken.isCancellationRequested) return;
            try {
                await this.loadIgnoreMapping();
            } catch (r) {
                if (this._cancellationToken.isCancellationRequested) return;
                this.logService.warn(`[CursorIgnore] .cursorignore discovery failed (attempt ${e}); retrying`, r), this.metricsService.increment({
                    stat: "cursor_ignore.initial_load_retry",
                    tags: {
                        attempt: String(Math.min(e, AYa))
                    }
                });
                const s = Math.min(u8m * 2 ** (e - 1), d8m);
                try {
                    await Wd(s, this._cancellationToken);
                } catch  {
                    return;
                }
                continue;
            }
            this._rulesLoaded.complete(), this._initTimeout.cancel(), this.clearCaches();
            const i = Date.now() - t;
            this.metricsService.distribution({
                stat: "cursor_ignore.initial_load_time_ms",
                value: i,
                tags: {
                    attempts: String(Math.min(e, AYa))
                }
            });
            return;
        }
    }
    async loadIgnoreMapping() {
        const t = this.getEffectiveWorkspaceFolders(), e = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.ignoreSymlinks ?? !1, n = this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings, r = n?.cursorIgnore?.ignoreSymlinks || e, s = this._queryBuilder.file(t, {
            _reason: "cursorIgnoreCheck",
            includePattern: [
                "**/.cursorignore"
            ],
            maxResults: 0,
            ignoreSymlinks: r
        }), o = await this.searchService.fileSearch(s, this._cancellationToken);
        this._ignoreScanSkippedFolders = this.getScanSkippedFolders(t.map((d)=>d.uri)).map((d)=>rt.file(d));
        for (const d of o.results)try {
            const h = await this.fileService.readFile(d.resource), p = this.parseIgnoreRules(h.value.toString()), g = d.resource.toString().substring(0, d.resource.toString().lastIndexOf(".cursorignore"));
            p.length > 0 ? (this._ignoreMapping[g] = Xqe().add(p), this._ignorePatternsMapping[g] = p) : (this._ignoreMapping[g] = "no-ignore", this._ignorePatternsMapping[g] = "no-ignore");
        } catch (h) {
            this.logService.error(`Error processing .cursorignore file at ${d.resource.toString()}:`, h);
        }
        const a = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.hierarchicalEnabled ?? !1, c = n?.cursorIgnore?.hierarchicalEnabled || a;
        let u = 0;
        if (c) for (const d of t){
            const h = this.collectHierarchicalDirectories(d.uri, {
                skipWorkspace: !1
            });
            for (const p of h)try {
                await this.handleNewHierarchyCursorIgnore(p), this._ignoreMapping[p.toString()] !== "no-ignore" && u++;
            } catch (g) {
                this.logService.error(`Error loading hierarchical .cursorignore at ${p.toString()}:`, g);
            }
        }
    }
    getAdminBlocklistPatterns() {
        return this.reactiveStorageService.applicationUserPersistentStorage.teamBlocklist ?? [];
    }
    getAdminBlockRepos() {
        return this.reactiveStorageService.applicationUserPersistentStorage.teamBlockRepos ?? [];
    }
    hasAllowlistRepos() {
        return this.getAdminBlockRepos().some((e)=>e.type === "ALLOW");
    }
    findIgnoreMappingKeyForCursorignoreUri(t) {
        const e = t.toString(), n = e.substring(0, e.lastIndexOf(".cursorignore"));
        if (n in this._ignoreMapping) return n;
        for (const i of Object.keys(this._ignoreMapping)){
            const r = rt.parse(i + ".cursorignore");
            if (this.uriIdentityService.extUri.isEqual(t, r)) return i;
        }
    }
    getScanSkippedFolders(t) {
        const e = {
            platform: Zxe ?? "",
            homeDirectory: this.pathService.userHome({
                preferLocal: !0
            }).fsPath
        };
        return t.filter((n)=>n.scheme === Ot.file).flatMap((n)=>gP1(n.fsPath, e));
    }
    isInIgnoreScanSkippedFolder(t) {
        return this._ignoreScanSkippedFolders.some((e)=>this.uriIdentityService.extUri.isEqualOrParent(t, e));
    }
    async handleNewHierarchyCursorIgnore(t) {
        const e = rt.joinPath(t, ".cursorignore");
        if (await this.fileService.exists(e)) {
            const n = await this.fileService.readFile(e), i = this.parseIgnoreRules(n.value.toString());
            i.length > 0 ? (this._ignoreMapping[t.toString()] = Xqe().add(i), this._ignorePatternsMapping[t.toString()] = i) : (this._ignoreMapping[t.toString()] = "no-ignore", this._ignorePatternsMapping[t.toString()] = "no-ignore");
        } else this._ignoreMapping[t.toString()] = "no-ignore", this._ignorePatternsMapping[t.toString()] = "no-ignore";
    }
    collectHierarchicalDirectories(t, e = {
        skipWorkspace: !1
    }) {
        const n = [];
        let i = t, r = 0;
        const s = 100;
        for(; Mc(i) !== i;){
            if (r >= s) {
                console.error(`Max depth of ${s} reached while populating hierarchy cursor ignore.`);
                break;
            }
            i = Mc(i), i.toString().endsWith("/") || (i = rt.parse(i.toString() + "/")), !(e.skipWorkspace && this.workspaceContextService.isInsideWorkspace(i) && this._ignoreLoaded && !this.isInIgnoreScanSkippedFolder(i)) && (e.skipPending && this._pendingIgnorePaths.has(i.toString()) || this._ignoreMapping[i.toString()] === void 0 && (n.push(i), r++));
        }
        return n;
    }
    populatesHierarchyCursorIgnore(t) {
        if (!this.fileService.hasProvider(t)) return !1;
        const e = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.hierarchicalEnabled ?? !1, r = this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings?.cursorIgnore?.hierarchicalEnabled || e, s = this.isInIgnoreScanSkippedFolder(t);
        if (!r && !s) return !1;
        const o = this.collectHierarchicalDirectories(t, {
            skipWorkspace: !0,
            skipPending: !1
        }).filter((c)=>r || this.isInIgnoreScanSkippedFolder(c));
        let a = !1;
        const l = [];
        for (const c of o)this._pendingIgnorePaths.has(c.toString()) ? a = !0 : (l.push(c), this._pendingIgnorePaths.add(c.toString()));
        return l.length > 0 && Promise.all(l.map((c)=>this.handleNewHierarchyCursorIgnore(c).catch((u)=>{
                this.logService.error(`Error populating hierarchy cursor ignore for ${c.toString()}:`, u);
            }).finally(()=>{
                this._pendingIgnorePaths.delete(c.toString());
            }))).finally(()=>{
            this._ignoreLoaded && this._onDidCursorIgnoreChange.fire({});
        }), a || l.length > 0;
    }
    baseUriFor(t) {
        let e = this._parsedBaseCache.get(t);
        return e === void 0 && (e = rt.parse(t), this._parsedBaseCache.set(t, e)), e;
    }
    clearCaches() {
        this._cache.clear(), this._parsedBaseCache.clear();
    }
    shouldIgnoreUriSync(t, e) {
        t = rt.revive(t);
        const n = t.toString();
        if (this._cache.has(n)) {
            const s = this._cache.get(n);
            return s === null ? void 0 : s;
        }
        const i = this.getEffectiveWorkspaceFolders(), r = this.shouldIgnoreUriWithWorkspaceFolders(t, e, i);
        return r?.type === "cursorIgnore" && r.source === M0i || this._cache.set(n, r ?? null), r;
    }
    shouldIgnoreUriWithWorkspaceFolders(t, e, n) {
        if (this.isAdminBlocked(t)) return {
            type: "adminBlock"
        };
        if (this.isUnderWorktreesDir(t) || t.scheme !== Ot.file && t.scheme !== Ot.vscodeRemote) return;
        if (n.length === 0 && !e?.gitWorktree) return {
            type: "outOfWorkspace"
        };
        const r = e?.gitWorktree ? !1 : this.populatesHierarchyCursorIgnore(t);
        let s = !1;
        for (const [h, p] of Object.entries(this._ignoreMapping)){
            const g = this.baseUriFor(h);
            if (!this.uriIdentityService.extUri.isEqualOrParent(t, g)) continue;
            const _ = this.uriIdentityService.extUri.relativePath(g, t) ?? "";
            if (p && p === "no-ignore" || _ === "" || /^[a-zA-Z]:[\\/]/.test(_) || /^\.*\/|^\.+$/.test(_)) continue;
            const b = p.test(_);
            if (b.ignored && !b.unignored) return {
                type: "cursorIgnore",
                source: h
            };
            b.unignored && (s = !0);
        }
        if (!s && this._globalIgnore) {
            let h, p = n, g;
            if (e?.gitWorktree) {
                if (g = this.uriFromFsPathUsingBase(e.gitWorktree.worktreePath, t), !g) return {
                    type: "outOfWorkspace"
                };
                const f = p[0]?.name ?? "workspace";
                p = [
                    {
                        uri: g,
                        name: f,
                        index: 0,
                        toResource: (_)=>Os(g, _)
                    }
                ];
            }
            if (p.length > 0) {
                const f = p.find((_)=>this.uriIdentityService.extUri.isEqualOrParent(t, _.uri));
                if (f) {
                    if (g && this.uriIdentityService.extUri.isEqualOrParent(t, g) ? h = this.uriIdentityService.extUri.relativePath(g, t) ?? "" : h = this.uriIdentityService.extUri.relativePath(f.uri, t) ?? "", h === "" || /^[a-zA-Z]:[\\/]/.test(h)) return;
                } else {
                    const _ = t.path.split("/");
                    h = _[_.length - 1];
                }
            } else {
                const f = t.path.split("/");
                h = f[f.length - 1];
            }
            if (this._globalIgnore.ignores(h)) return {
                type: "cursorIgnore",
                source: "globalIgnore"
            };
        }
        let o = n, a;
        if (e?.gitWorktree) {
            if (a = this.uriFromFsPathUsingBase(e.gitWorktree.worktreePath, t), !a) return {
                type: "outOfWorkspace"
            };
            const h = o[0]?.name ?? "workspace";
            o = [
                {
                    uri: a,
                    name: h,
                    index: 0,
                    toResource: (p)=>Os(a, p)
                }
            ];
        }
        if (o.length === 0) return {
            type: "outOfWorkspace"
        };
        const l = o.find((h)=>this.uriIdentityService.extUri.isEqualOrParent(t, h.uri));
        if (!l) return {
            type: "outOfWorkspace"
        };
        let c;
        if (a && this.uriIdentityService.extUri.isEqualOrParent(t, a)) {
            if (c = this.uriIdentityService.extUri.relativePath(a, t) ?? "", c === "") return;
        } else c = this.uriIdentityService.extUri.relativePath(l.uri, t) ?? "";
        const d = (xa ? OXu(c) : c).split("/");
        if (r) return e && this.metricsService.increment({
            stat: "cursor_ignore.hierarchical_blocked_still_loading",
            value: 1
        }), {
            type: "cursorIgnore",
            source: M0i
        };
    }
    shouldIgnoreUriUncached(t, e) {
        const n = this.getEffectiveWorkspaceFolders();
        return this.shouldIgnoreUriWithWorkspaceFolders(t, e, n);
    }
    shouldBlockUriFromReading(t) {
        if (t.scheme === Ot.cursorWorker) {
            if (TJr(t)) return this.getAdminBlockRepos().length > 0;
            const n = this._cursorWorkerRepoUrls.get(t.authority);
            return this.isAdminBlockedForRepoPaths({
                repoUrls: n?.at(-1) ?? [],
                relativePath: t.path
            });
        }
        const e = this.shouldIgnoreUriSync(t);
        return e !== void 0 && e.type !== "outOfWorkspace";
    }
    registerCursorWorkerRepoUrls(t) {
        const e = this._cursorWorkerRepoUrls.get(t.agentId) ?? [], n = [
            ...t.repoUrls
        ];
        return e.push(n), this._cursorWorkerRepoUrls.set(t.agentId, e), Pn(()=>{
            const i = e.indexOf(n);
            i !== -1 && e.splice(i, 1), e.length === 0 && this._cursorWorkerRepoUrls.delete(t.agentId);
        });
    }
    getSerializableIgnoreMapping() {
        const t = {};
        for (const [e, n] of Object.entries(this._ignorePatternsMapping))Array.isArray(n) && (t[e] = n);
        if (this._globalIgnore && this._globalIgnorePatterns.length > 0) {
            const e = this.getEffectiveWorkspaceFolders();
            for (const n of e){
                const i = n.uri.toString(), r = t[i];
                Array.isArray(r) ? t[i] = [
                    ...this._globalIgnorePatterns,
                    ...r
                ] : t[i] = [
                    ...this._globalIgnorePatterns
                ];
            }
        }
        return t;
    }
    async filterCursorIgnoredFiles(t, e, n) {
        if (await this.waitForRulesLoaded(n)) return t.filter((i)=>!this.shouldBlockUriFromReading(e(i)));
    }
    async reloadCursorIgnoreForDirectory(t) {
        const e = await this.getRealUriAsync(t), i = rt.joinPath(e, ".cursorignore").toString(), r = i.substring(0, i.lastIndexOf(".cursorignore")), o = rt.joinPath(t, ".cursorignore").toString(), a = o.substring(0, o.lastIndexOf(".cursorignore"));
        a !== r && (delete this._ignoreMapping[a], delete this._ignorePatternsMapping[a]), delete this._ignoreMapping[r], delete this._ignorePatternsMapping[r];
        const l = rt.joinPath(t, ".cursorignore");
        try {
            const c = await this.fileService.readFile(l), u = this.parseIgnoreRules(c.value.toString());
            u.length > 0 ? (this._ignoreMapping[r] = Xqe().add(u), this._ignorePatternsMapping[r] = u) : (this._ignoreMapping[r] = "no-ignore", this._ignorePatternsMapping[r] = "no-ignore");
        } catch  {
            this._ignoreMapping[r] = "no-ignore", this._ignorePatternsMapping[r] = "no-ignore";
        }
        this.clearCaches(), this._onDidCursorIgnoreChange.fire({});
    }
    async initializeGitRepoMapping() {
        await this.gitContextService.waitForGitContextProvider();
        const t = this.getEffectiveWorkspaceFolders(), e = new Set, n = t.map((c)=>c.uri.scheme === Ot.vscodeRemote ? c.uri.path : c.uri.fsPath), i = this.getScanSkippedFolders(t.map((c)=>c.uri)), r = 100, s = new Set([
            "node_modules",
            ".turbo",
            ".next",
            ".cache",
            ".pnpm",
            ".yarn",
            "dist",
            "build",
            "out",
            "target",
            ".vscode",
            ".idea",
            "venv",
            "__pycache__",
            "logs",
            "tmp",
            "temp"
        ]);
        await JBm(this.fileService, this.logService, t.map((c)=>c.uri), e, n, {
            maxDepth: r,
            dirsToSkip: s,
            pathsToSkip: new Set(i),
            maxConcurrent: 20
        }), this._gitRepoLocations = n;
        const a = new Map;
        let l = 0;
        for (const c of this._gitRepoLocations)try {
            const u = await this.gitContextService.getGitUpstreamURL(c), d = await this.gitContextService.getGitRoot(c);
            d && a.set(d, u);
        } catch (u) {
            l++, console.warn(`Failed to get Git upstream URL for ${c}: ${u}`);
        }
        this._gitRepoUpstreamUrls = a, this._gitRepoScanSkippedFolders = i.map((c)=>this.normalizePathForComparison(c).toLowerCase()), this._gitReposInitialized = !0, this.emitAdminRepoListGitMappingMetrics({
            candidateRepoCount: this._gitRepoLocations.length,
            mappedRepoWithUpstreamCount: Array.from(a.values()).filter((c)=>c !== void 0).length,
            repoMetadataFailureCount: l
        }), this._onDidCursorIgnoreChange.fire({});
    }
    normalizePathForComparison(t) {
        return gGt(t, {
            lowercaseOnWindows: !0
        });
    }
    isOutsideGitRepoScan(t) {
        if (this._gitRepoScanSkippedFolders.length === 0) return !1;
        const e = t.toLowerCase();
        return this._gitRepoScanSkippedFolders.some((n)=>e === n || e.startsWith(n + "/"));
    }
    isUnderWorktreesDir(t) {
        const e = t.scheme === Ot.vscodeRemote ? t.path : t.fsPath, n = this.normalizePathForComparison(e);
        return n === this._worktreesDirPath || n.startsWith(this._worktreesDirPath + "/");
    }
    isWildcardUrl(t) {
        return t.trim() === "*";
    }
    isPathPatternUrl(t) {
        return !t.includes("://") && !t.includes("github.com") && !t.includes("gitlab.com") && !t.includes("bitbucket.org") && !t.includes("@");
    }
    matchesRepoFilePattern(t, e) {
        const n = t.trim();
        return n === "*" ? e !== "" && this.relativePathKind(e) === "inside" : (e === "" || e === ".") && (n === "**" || n === "**/*") ? !0 : u$(n, e);
    }
    getRelativePathFromWorkspaceRoot(t) {
        const e = this.getEffectiveWorkspaceFolders();
        let n, i = -1;
        for (const r of e){
            const s = this.normalizePathForComparison(r.uri.fsPath);
            (t === s || t.startsWith(s + "/")) && s.length > i && (i = s.length, n = t === s ? "" : t.substring(s.length + 1));
        }
        return n ?? t;
    }
    matchesWildcardOrPathPatternBlockRepos(t, e) {
        for (const n of t)if (this.isWildcardUrl(n.url)) {
            if (n.patterns.some((r)=>u$(r.pattern, e))) return !0;
        } else if (this.isPathPatternUrl(n.url) && u$(n.url, e)) return !0;
        return !1;
    }
    matchesPotentialGlobRepoUrlBlockReposBeforeGitInit(t, e) {
        const n = this.relativePathKind(e);
        if (n !== "inside" && n !== "empty") return !1;
        for (const i of t){
            const r = this.normalizeRepoUrl(i.url);
            if (!(this.isWildcardUrl(i.url) || this.isPathPatternUrl(i.url) || !c8m.test(r)) && i.patterns.some((s)=>this.matchesRepoFilePattern(s.pattern, e))) return !0;
        }
        return !1;
    }
    doesBlockPatternAffectDirectoryListing(t, e) {
        const n = t.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
        if (!n) return !1;
        const i = e.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, ""), r = n.split("/").filter((o)=>o.length > 0), s = i ? i.split("/").filter((o)=>o.length > 0) : [];
        return this.canBlockPatternMatchDirectoryPrefix(r, s, !1, !1);
    }
    canBlockPatternMatchDirectoryPrefix(t, e, n, i) {
        if (e.length === 0) return this.canRemainingBlockPatternAffectDirectoryListing(t, n);
        if (t.length === 0) return !1;
        const r = t[0], s = e[0];
        return !r || !s ? !1 : r === "**" ? this.canBlockPatternMatchDirectoryPrefix(t.slice(1), e, n, !0) || this.canBlockPatternMatchDirectoryPrefix(t, e.slice(1), !0, !0) : u$(r, s) ? this.canBlockPatternMatchDirectoryPrefix(t.slice(1), e.slice(1), !1, !1) : !i && this.canListedGlobSegmentMatchPatternSegment(s, r) ? this.canBlockPatternMatchDirectoryPrefix(t.slice(1), e.slice(1), !1, !1) : !1;
    }
    canRemainingBlockPatternAffectDirectoryListing(t, e) {
        return t.every((n)=>n === "**") || this.canBlockPatternMatchSingleListedChild(t) ? !0 : !e && t[0] !== "**";
    }
    canBlockPatternMatchSingleListedChild(t) {
        if (t.length === 0) return !1;
        const e = t.slice(1);
        return t[0] === "**" ? e.every((n)=>n === "**") || this.canBlockPatternMatchSingleListedChild(e) : e.every((n)=>n === "**");
    }
    canListedGlobSegmentMatchPatternSegment(t, e) {
        return this.containsShellGlobMetacharacter(t) && u$(t, e);
    }
    containsShellGlobMetacharacter(t) {
        return /[*?[{]/.test(t);
    }
    relativePathKind(t) {
        return t === void 0 ? "unknown" : t === "" ? "empty" : t === ".." || t.startsWith("../") || t.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(t) ? "outside_or_unknown" : "inside";
    }
    isAdminBlockedForRepoPaths(t) {
        return this.createAdminBlockedRepoPathsPredicate(t.repoUrls)?.(t.relativePath) ?? !1;
    }
    createAdminBlockedRepoPathsPredicate(t) {
        const e = this.getAdminBlockRepos();
        if (e.length === 0) return;
        const n = e.filter((a)=>a.type !== "ALLOW"), i = e.filter((a)=>a.type === "ALLOW"), r = n.filter((a)=>t.some((l)=>this.doesRepoUrlMatch(a.url, l))), s = t.map((a)=>i.filter((l)=>this.doesRepoUrlMatch(l.url, a))), o = (a, l)=>a.some((c)=>c.patterns.some((u)=>this.matchesRepoFilePattern(u.pattern, l)));
        return (a)=>{
            const l = a.replaceAll("\\", "/").replace(/^\/+/, "");
            return this.relativePathKind(l) !== "inside" || this.matchesWildcardOrPathPatternBlockRepos(n, l) || o(r, l) ? !0 : i.length > 0 && (t.length === 0 || s.some((c)=>!o(c, l)));
        };
    }
    isAdminBlocked(t) {
        const e = rt.revive(t);
        let n, i, r = 0;
        const s = e.scheme === Ot.vscodeRemote ? e.path : e.fsPath, o = this.normalizePathForComparison(s);
        for (const p of this._gitRepoUpstreamUrls.keys())if (this._gitRepoUpstreamUrls.get(p) !== void 0) {
            const g = this.normalizePathForComparison(p);
            o.startsWith(g) && (o.length === g.length || o[g.length] === "/") && g.length > r && (n = p, i = g, r = g.length);
        }
        const a = this.getAdminBlockRepos(), l = this.hasAllowlistRepos(), c = a.filter((p)=>p.type !== "ALLOW"), u = a.filter((p)=>p.type === "ALLOW"), d = c.some((p)=>!this.isWildcardUrl(p.url) && !this.isPathPatternUrl(p.url)), h = this.getAdminBlocklistPatterns();
        if (this._gitReposInitialized && a.length > 0 && this.isOutsideGitRepoScan(o)) return this.emitAdminRepoListPathEvaluationMetric({
            outcome: "blocked",
            reason: "repo_unknown_outside_scan",
            gitState: "outside_scan",
            relativePath: this.getRelativePathFromWorkspaceRoot(o),
            hasBlockRepos: c.length > 0,
            hasAllowRepos: u.length > 0,
            hasRepoUrlBlockRepos: d
        }), !0;
        if (this._gitReposInitialized && n && i) {
            const p = this._gitRepoUpstreamUrls.get(n), g = o.substring(i.length + 1);
            if (p) {
                if (a.length > 0) {
                    let f = !1;
                    for (const _ of a)if (_.type !== "ALLOW" && this.doesRepoUrlMatch(_.url, p) && (f = !0, _.patterns.some((y)=>this.matchesRepoFilePattern(y.pattern, g)))) return this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "blocked",
                        reason: "repo_pattern",
                        gitState: "matched_repo",
                        relativePath: g,
                        hasBlockRepos: c.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: d
                    }), !0;
                    if (l && !a.some((b)=>b.type === "ALLOW" && this.doesRepoUrlMatch(b.url, p) && b.patterns.some((y)=>this.matchesRepoFilePattern(y.pattern, g)))) return this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "blocked",
                        reason: "allowlist_miss",
                        gitState: "matched_repo",
                        relativePath: g,
                        hasBlockRepos: c.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: d
                    }), !0;
                    this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "allowed",
                        reason: f ? "repo_url_match_pattern_miss" : "repo_url_miss",
                        gitState: "matched_repo",
                        relativePath: g,
                        hasBlockRepos: c.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: d
                    });
                }
                return !1;
            }
        } else if (this._gitReposInitialized && !n) {
            if (a.length > 0) {
                const p = this.getRelativePathFromWorkspaceRoot(o);
                if (this.matchesWildcardOrPathPatternBlockRepos(c, p)) return this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "blocked",
                    reason: "wildcard_or_path_pattern",
                    gitState: "no_repo",
                    relativePath: p,
                    hasBlockRepos: c.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: d
                }), !0;
                if (l) {
                    if (this._cursorDataDirPath && (o === this._cursorDataDirPath || o.startsWith(this._cursorDataDirPath + "/"))) return this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "allowed",
                        reason: "cursor_data_exempt",
                        gitState: "no_repo",
                        relativePath: p,
                        hasBlockRepos: c.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: d
                    }), !1;
                    if (!this.matchesWildcardOrPathPatternBlockRepos(u, p)) return this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "blocked",
                        reason: "allowlist_miss",
                        gitState: "no_repo",
                        relativePath: p,
                        hasBlockRepos: c.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: d
                    }), !0;
                }
                this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "allowed",
                    reason: "no_matching_policy",
                    gitState: "no_repo",
                    relativePath: p,
                    hasBlockRepos: c.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: d
                });
            }
            return !1;
        } else if (!this._gitReposInitialized) {
            if (h.length !== 0) {
                const p = t.path;
                if (p === void 0) return !1;
                for (const g of h)if (u$(g, p)) return this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "blocked",
                    reason: "legacy_pattern",
                    gitState: "not_initialized",
                    relativePath: p,
                    hasBlockRepos: c.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: d
                }), !0;
            }
            if (a.length > 0) {
                const p = this.getRelativePathFromWorkspaceRoot(o);
                if (this.matchesWildcardOrPathPatternBlockRepos(c, p)) return this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "blocked",
                    reason: "wildcard_or_path_pattern",
                    gitState: "not_initialized",
                    relativePath: p,
                    hasBlockRepos: c.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: d
                }), !0;
                if (this.matchesPotentialGlobRepoUrlBlockReposBeforeGitInit(c, p)) return this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "blocked",
                    reason: "repo_url_pending_git_mapping",
                    gitState: "not_initialized",
                    relativePath: p,
                    hasBlockRepos: c.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: d
                }), !0;
                this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "allowed",
                    reason: "no_matching_policy",
                    gitState: "not_initialized",
                    relativePath: p,
                    hasBlockRepos: c.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: d
                });
            }
        }
        return !1;
    }
    emitAdminRepoListGitMappingMetrics(t) {
        const e = {
            has_candidate_repos: String(t.candidateRepoCount > 0),
            has_metadata_failures: String(t.repoMetadataFailureCount > 0),
            has_unmapped_or_no_upstream_repos: String(t.candidateRepoCount > t.mappedRepoWithUpstreamCount)
        };
        this.metricsService.increment({
            stat: "cursor_admin_repo_list.git_mapping",
            value: 1,
            tags: e
        }), this.metricsService.distribution({
            stat: "cursor_admin_repo_list.mapped_repo_with_upstream_count",
            value: t.mappedRepoWithUpstreamCount,
            tags: e
        }), this.metricsService.distribution({
            stat: "cursor_admin_repo_list.repo_metadata_failure_count",
            value: t.repoMetadataFailureCount,
            tags: e
        });
    }
    emitAdminRepoListPathEvaluationMetric(t) {
        this.metricsService.increment({
            stat: "cursor_admin_repo_list.path_evaluated",
            value: 1,
            tags: {
                outcome: t.outcome,
                reason: t.reason,
                git_state: t.gitState,
                relative_path_kind: this.relativePathKind(t.relativePath),
                has_block_repos: String(t.hasBlockRepos),
                has_allow_repos: String(t.hasAllowRepos),
                has_repo_url_block_repos: String(t.hasRepoUrlBlockRepos)
            }
        });
    }
    getBlockedChildPatternForDirectory(t) {
        const e = this.getAdminBlockRepos().filter((o)=>o.type !== "ALLOW"), n = this.getAdminBlocklistPatterns(), i = t.fsPath, r = this.normalizePathForComparison(i), s = this.getRelativePathFromWorkspaceRoot(r);
        for (const o of n)if (this.doesBlockPatternAffectDirectoryListing(o, s)) return o;
        for (const o of e)if (this.isWildcardUrl(o.url)) for (const a of o.patterns){
            const l = a.pattern;
            if (this.doesBlockPatternAffectDirectoryListing(l, s)) return l;
        }
        else if (this.isPathPatternUrl(o.url)) {
            const a = o.url, l = a.split("/");
            if (l.length > 0) {
                const c = l[0].replace(/\*+$/, ""), u = !s || s === "", d = a.startsWith(s + "/"), h = s.startsWith(c);
                if (c && !c.includes("*") && (!s || s === "" || a.startsWith(s + "/") || s.startsWith(c))) return a;
            }
        }
    }
    async getBlockedChildPatternForListingPath(t) {
        try {
            if (!(await this.fileService.stat(t)).isDirectory) return;
        } catch  {}
        return this.getBlockedChildPatternForDirectory(t);
    }
    getDirectoryBlockType(t) {
        if (this.isAdminBlocked(t)) return "directory";
        const e = this.getBlockedChildPatternForDirectory(t);
        if (e) return e.endsWith("/**") ? "all-contents" : e.endsWith("/*") ? "files-only" : "all-contents";
    }
    normalizeRepoUrl(t) {
        let e = t.trim().toLowerCase();
        e.startsWith("git@") && (e = "https://" + e.slice(4).replace(":", "/")), /^[a-z][a-z0-9+.-]*:\/\//i.test(e) && !/^https?:\/\//i.test(e) && (e = e.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://")), /^https?:\/\//i.test(e) || (e = "https://" + e);
        try {
            const n = new URL(e), i = n.pathname.replace(/\/+$/, "").replace(/\.git$/i, "").replace(/\/+$/, "");
            return n.hostname + i;
        } catch  {
            return e = e.replace(/^https?:\/\//i, ""), e = e.replace(/[?#].*$/, ""), e = e.replace(/\/+$/, ""), e = e.replace(/\.git$/i, ""), e = e.replace(/\/+$/, ""), e;
        }
    }
    doesRepoUrlMatch(t, e) {
        const n = this.normalizeRepoUrl(t), i = this.normalizeRepoUrl(e), r = t.trim().toLowerCase().replace(/\.git$/i, "");
        return t.includes("*") ? t.trim() === "*" ? !0 : r.startsWith("*/") ? i.endsWith(r.substring(1)) : u$(n, i) : n === i;
    }
    parseIgnoreRules(t) {
        return t.split(`
`).map((e)=>e.replace(/\r$/, "").trimStart()).filter((e)=>e !== "" && !e.startsWith("#"));
    }
    async listCursorIgnoreFilesByRoot(t, e) {
        const n = {};
        for (const r of t)n[r.fsPath.replace(/\\/g, "/")] = [];
        if (e.isCancellationRequested) throw new Error("Cancellation requested");
        this._ignoreLoaded || await aO(this._rulesLoaded.p, e);
        const i = (r)=>!this.workspaceContextService.isInsideWorkspace(r) || this.isInIgnoreScanSkippedFolder(r);
        for (const r of t)if (i(r)) {
            const s = r.fsPath.replace(/\\/g, "/");
            this._scannedOutOfWorkspaceRoots.has(s) || (await this.scanAndLoadCursorIgnoresUnderRoot(r, e), this._scannedOutOfWorkspaceRoots.add(s)), this._scannedOutOfWorkspaceAncestorRoots.has(s) || (await this.scanAndLoadAncestorCursorIgnores(r), this._scannedOutOfWorkspaceAncestorRoots.add(s));
        }
        for (const [r, s] of Object.entries(this._ignoreMapping)){
            if (s === "no-ignore") continue;
            let o;
            try {
                o = rt.parse(r.endsWith(".cursorignore") ? r : r + ".cursorignore");
            } catch  {
                continue;
            }
            for (const a of t){
                const l = a.toString(), c = o.toString(), u = c.startsWith(l), d = i(a) && l.startsWith(r);
                if (u || d) {
                    const h = a.fsPath.replace(/\\/g, "/"), p = n[h];
                    p.some((g)=>g.toString() === c) || p.push(o);
                }
            }
        }
        return n;
    }
    async scanAndLoadCursorIgnoresUnderRoot(t, e) {
        const n = await this.detectPrimaryWorkspaceUnderVersionControl() === !1;
        try {
            const i = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.ignoreSymlinks ?? !1, o = this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings?.cursorIgnore?.ignoreSymlinks || i, a = this._queryBuilder.file([
                t
            ], {
                _reason: "cursorIgnoreCheck-outOfWorkspace",
                expandPatterns: !1,
                ignoreSymlinks: o,
                maxDepth: n ? 4 : void 0
            });
            a.includePattern = {
                "**/.cursorignore": !0
            };
            const l = await this.searchService.fileSearch(a, e);
            for (const c of l.results)try {
                const u = await this.fileService.readFile(c.resource), d = this.parseIgnoreRules(u.value.toString()), h = c.resource.toString().substring(0, c.resource.toString().lastIndexOf(".cursorignore"));
                d.length > 0 ? (this._ignoreMapping[h] = Xqe().add(d), this._ignorePatternsMapping[h] = d) : (this._ignoreMapping[h] = "no-ignore", this._ignorePatternsMapping[h] = "no-ignore");
            } catch (u) {
                console.error(`Error processing .cursorignore file at ${c.resource.toString()}:`, u);
            }
            this._onDidCursorIgnoreChange.fire({});
        } catch (i) {
            console.warn("scanAndLoadCursorIgnoresUnderRoot failed", i);
        }
    }
    async detectPrimaryWorkspaceUnderVersionControl() {
        const t = this.workspaceContextService.getWorkspace().folders;
        if (t.length === 0) return !1;
        const e = Os(t[0].uri, ".git");
        try {
            const n = await this.fileService.stat(e);
            return n.isFile || n.isDirectory;
        } catch  {
            return !1;
        }
    }
    async scanAndLoadAncestorCursorIgnores(t) {
        try {
            let e = Mc(t);
            const n = new Set;
            let i = 0;
            const r = 100;
            for(; Mc(e) !== e && !(i++ > r);){
                const s = e.toString().endsWith("/") ? e.toString() : e.toString() + "/";
                if (n.has(s)) break;
                n.add(s);
                const o = rt.parse(s + ".cursorignore");
                try {
                    if (await this.fileService.exists(o)) {
                        const l = await this.fileService.readFile(o), c = this.parseIgnoreRules(l.value.toString());
                        c.length > 0 ? (this._ignoreMapping[s] = Xqe().add(c), this._ignorePatternsMapping[s] = c) : (this._ignoreMapping[s] = "no-ignore", this._ignorePatternsMapping[s] = "no-ignore");
                    }
                } catch  {}
                const a = Mc(e);
                if (a.toString() === e.toString()) break;
                e = a;
            }
            this._onDidCursorIgnoreChange.fire({});
        } catch (e) {
            console.warn("scanAndLoadAncestorCursorIgnores failed", e);
        }
    }
}, GJr = Re([
    F(0, yr),
    F(1, is),
    F(2, Li),
    F(3, ICe),
    F(4, sa),
    F(5, dn),
    F(6, vie),
    F(7, Jv),
    F(8, yi),
    F(9, nh),
    F(10, WO),
    F(11, Uh),
    F(12, UT),
    F(13, Rd),
    F(14, ey),
    F(15, ps)
], GJr), bn(AE, GJr, 1);

}
