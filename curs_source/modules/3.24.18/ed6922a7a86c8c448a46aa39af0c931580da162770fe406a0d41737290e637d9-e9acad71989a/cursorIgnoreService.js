import { Jpo, XQd, iF, tGi } from "./A3u.js";
import { Lhv } from "./De_3.js";
import { Cl, Kl, Oo, Se, ZL, bt, fge, iIc, jn, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Am, bn, wE } from "./async.js";
import { Yu } from "./browser.ts";
import { Ar, Eo } from "./cancellation.js";
import { tmo } from "./cloudWorkerFileUri.js";
import { Cn, qt } from "./configuration.js";
import { So, mgi } from "./constants_8.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { vI } from "./extpath.js";
import { Fi, Ii } from "./files.js";
import { kk, r0 } from "./gitContextService.js";
import { qM } from "./glob.js";
import { TPe, sQd } from "./ignore.js";
import { Ze, _t } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { ag, oc } from "./map.js";
import { Cp, vp } from "./metricsService.js";
import { gt, li } from "./network.js";
import { Bk, LI } from "./output.js";
import { fu, zl } from "./pathService.js";
import { K3 } from "./pathUtils.js";
import { mn, vn } from "./qIc.js";
import { nq, qee } from "./queryBuilder.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { F$, iq } from "./repositoryService.js";
import { Li, jr, ml } from "./resources.js";
import { rMv } from "./searchGitRepos.js";
import { DX, sE } from "./search_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ea, rl } from "./uriIdentity.js";
import { Jn, ci } from "./workspace.js";
import { Yv, lL } from "./workspaceCollectionService.js";
import { B$, Kse } from "./worktree.js";
var QM, $qi, tJd, nJd, iJd, jmo, qmo, rJd, Hqi;
export { $qi, Hqi, QM, iJd, jmo, nJd, qmo, rJd, tJd };
var __wakaru_R2_initialized = false;
export function R2() {
if (__wakaru_R2_initialized) return;
__wakaru_R2_initialized = true;
"use strict";
x(), Pn(), Ze(), Qt(), ci(), Fi(), Se(), bt(), Li(), Qn(), sQd(), li(), tmo(), qM(), sE(), Ha(), qee(), iq(), r0(), Cn(), So(), oc(), vI(), jn(), Yu(), rMv(), rl(), Ar(), B$(), Cp(), bn(), LI(), fu(), Vr(), K3(), Yv(), QM = vn("cursorIgnoreService"), $qi = "hierarchical allow file list is still loading, please retry the tool call", tJd = /[*?[\]{}!]/, nJd = 1e3, iJd = 3e4, jmo = 10, qmo = 6e4, rJd = 9e4, Hqi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v){
        super(), this.workspaceContextService = e, this.fileService = t, this.logService = n, this.searchService = i, this.reactiveStorageService = r, this.instantiationService = s, this.repositoryService = o, this.gitContextService = a, this.configurationService = c, this.uriIdentityService = l, this.worktreeManagerService = u, this.metricsService = h, this.outputService = p, this.pathService = g, this.workspaceCollectionService = f, this.environmentService = v, this._ignoreMapping = {}, this._ignorePatternsMapping = {}, this._pendingIgnorePaths = new Set, this._globalIgnorePatterns = [], this._rulesLoaded = new Am, this._rulesLoadStalled = new Am, this._didLogRulesWithheld = !1, this._gitRepoLocations = [], this._gitRepoUpstreamUrls = new Map, this._gitRepoScanSkippedFolders = [], this._ignoreScanSkippedFolders = [], this._cursorWorkerRepoUrls = new Map, this._didStartGitRepoScanning = !1, this._gitReposInitialized = !1, this._gitRepoRemapRunning = !1, this._gitRepoRemapPending = !1, this._materializedWorkspaceFoldersCache = void 0, this._onDidCursorIgnoreChange = this._register(new ve), this.onDidCursorIgnoreChange = this._onDidCursorIgnoreChange.event, this._cache = new ag(2e3, .5), this._parsedBaseCache = new Map, this._scannedOutOfWorkspaceRoots = new Set, this._scannedOutOfWorkspaceAncestorRoots = new Set, this._realPathCache = new Map, this._initTimeout = this._register(new wE), this._isAggregateWorkspaceInstance = this.environmentService.glassWorkspaceRole === "rootWorkspace";
        const b = this.pathService.userHome({
            preferLocal: !0
        }), y = Ee.joinPath(b, ".cursor");
        this._cursorDataDirPath = this.normalizePathForComparison(y.scheme === gt.vscodeRemote ? y.path : y.fsPath);
        const T = Ee.joinPath(b, ".cursor", "worktrees");
        this._worktreesDirPath = this.normalizePathForComparison(T.scheme === gt.vscodeRemote ? T.path : T.fsPath), this._cancellationTokenSource = new Eo, this._cancellationToken = this._cancellationTokenSource.token, this._register({
            dispose: ()=>{
                this._cancellationTokenSource.dispose(!0);
            }
        }), this._register(this._onDidCursorIgnoreChange.event(()=>{
            this.clearCaches();
        })), this._register(this.fileService.onDidFilesChange(async (A)=>{
            if (A.gotAdded()) {
                const R = A.rawAdded.filter((D)=>D.path.endsWith(".cursorignore"));
                for (const D of R){
                    const P = D.toString(), N = P.substring(0, P.lastIndexOf(".cursorignore"));
                    try {
                        const O = await this.fileService.readFile(D), F = this.parseIgnoreRules(O.value.toString());
                        F.length > 0 ? (this._ignoreMapping[N] = TPe().add(F), this._ignorePatternsMapping[N] = F) : (this._ignoreMapping[N] = "no-ignore", this._ignorePatternsMapping[N] = "no-ignore"), this._onDidCursorIgnoreChange.fire({});
                    } catch (O) {
                        console.error(`Error processing new .cursorignore file at ${D.toString()}:`, O);
                    }
                }
            }
            if (A.gotDeleted()) {
                const R = A.rawDeleted.filter((D)=>D.path.endsWith(".cursorignore"));
                for (const D of R){
                    const P = D.toString(), N = P.substring(0, P.lastIndexOf(".cursorignore"));
                    delete this._ignoreMapping[N], delete this._ignorePatternsMapping[N];
                }
                R.length > 0 && this._onDidCursorIgnoreChange.fire({});
            }
            if (A.gotUpdated()) {
                const R = A.rawUpdated.filter((D)=>D.path.endsWith(".cursorignore"));
                for (const D of R){
                    const P = this.findIgnoreMappingKeyForCursorignoreUri(D);
                    if (P !== void 0) try {
                        const N = await this.fileService.readFile(D), O = this.parseIgnoreRules(N.value.toString());
                        O.length > 0 ? (this._ignoreMapping[P] = TPe().add(O), this._ignorePatternsMapping[P] = O) : (this._ignoreMapping[P] = "no-ignore", this._ignorePatternsMapping[P] = "no-ignore"), this._onDidCursorIgnoreChange.fire({});
                    } catch (N) {
                        this.logService.error(`Error processing updated .cursorignore file at ${D.toString()}:`, N);
                    }
                }
            }
        }));
        const E = this.reactiveStorageService.onChangeEffectManuallyDisposed({
            onChange: ({ deps: A })=>{
                const [R, D, P] = A;
                (R !== void 0 || D !== void 0 || P !== void 0) && (this.startGitRepoMappingIfNeeded(), this.getEffectiveWorkspaceFolders().length > 0 && this._onDidCursorIgnoreChange.fire({}));
            },
            deps: [
                ()=>this.reactiveStorageService.applicationUserPersistentStorage.teamAllowlist,
                ()=>this.reactiveStorageService.applicationUserPersistentStorage.teamBlocklist,
                ()=>this.reactiveStorageService.applicationUserPersistentStorage.teamBlockRepos
            ]
        });
        this._register(E), this._isAggregateWorkspaceInstance && (this._register(this.workspaceCollectionService.onDidChangeMaterializedWorkspaceIdentifiers(()=>{
            this._onMaterializedWorkspacesChanged();
        })), this._register(this.workspaceCollectionService.onDidChangeMaterializedWorkspaceFolders(()=>{
            this._onMaterializedWorkspacesChanged();
        }))), this._register(this.fileService.onDidChangeFileSystemProviderRegistrations((A)=>{
            this.doesAnyWorkspaceFolderUseScheme(A.scheme) && this._onMaterializedWorkspacesChanged();
        })), this._register(this.configurationService.onDidChangeConfiguration((A)=>{
            A.affectsConfiguration(mgi) && (this.initializeGlobalIgnoreList(), this._onDidCursorIgnoreChange.fire({}));
        })), this._register(this.worktreeManagerService.onDidRemoveWorktree((A)=>{
            this.cleanupWorktreeCursorIgnoreEntries(A);
        })), this._queryBuilder = this.instantiationService.createInstance(nq), this.initializeGlobalIgnoreList(), this._register(Cl(()=>this._rulesLoadStalled.complete(), rJd)), this._register(rn(()=>this._rulesLoadStalled.complete())), this.initializeIgnoreMapping(), this.repositoryService.setIsUriCursorIgnored((A)=>this.shouldBlockUriFromReading(A)), this.startGitRepoMappingIfNeeded();
    }
    get _ignoreLoaded() {
        return this._rulesLoaded.isResolved;
    }
    getEffectiveWorkspaceFolders() {
        const e = this.workspaceContextService.getWorkspace().folders;
        if (!this._isAggregateWorkspaceInstance) return [
            ...e
        ];
        const t = this.getMaterializedWorkspaceFoldersCached();
        if (t.length === 0) return [
            ...e
        ];
        const n = new Set, i = [];
        for (const r of e){
            const s = this.uriIdentityService.extUri.getComparisonKey(r.uri, !0);
            n.has(s) || (n.add(s), i.push(r));
        }
        for (const r of t){
            if (!this.fileService.hasProvider(r.uri)) continue;
            const s = this.uriIdentityService.extUri.getComparisonKey(r.uri, !0);
            n.has(s) || (n.add(s), i.push(r));
        }
        return i;
    }
    getMaterializedWorkspaceFoldersCached() {
        return this._materializedWorkspaceFoldersCache === void 0 && (this._materializedWorkspaceFoldersCache = this.workspaceCollectionService.getMaterializedWorkspaceFolders()), this._materializedWorkspaceFoldersCache;
    }
    doesAnyWorkspaceFolderUseScheme(e) {
        for (const t of this.workspaceContextService.getWorkspace().folders)if (t.uri.scheme === e) return !0;
        if (!this._isAggregateWorkspaceInstance) return !1;
        for (const t of this.getMaterializedWorkspaceFoldersCached())if (t.uri.scheme === e) return !0;
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
                    } catch (e) {
                        this.logService.error("[CursorIgnore] Error initializing git repo mapping:", e);
                    }
                }
            } finally{
                this._gitRepoRemapRunning = !1;
            }
        }
    }
    uriFromFsPathUsingBase(e, t) {
        if (!t) return Ee.file(e);
        const n = e.replace(/\\/g, "/"), i = n.startsWith("/") ? n : "/" + n;
        return Ee.from({
            scheme: t.scheme,
            authority: t.authority,
            path: i
        });
    }
    async getRealUriAsync(e) {
        if (e.scheme !== gt.file && e.scheme !== gt.vscodeRemote) return e;
        const t = e.toString(), n = this._realPathCache.get(t);
        if (n !== void 0) return n;
        try {
            const i = await this.fileService.realpath(e);
            return this._realPathCache.set(t, i), i;
        } catch  {
            try {
                const r = ml(e), s = await this.fileService.realpath(r), o = this.uriIdentityService.extUri.relativePath(r, e) ?? null, a = o !== null && o !== "" ? jr(s, o) : s;
                return this._realPathCache.set(t, a), a;
            } catch  {
                return this._realPathCache.set(t, e), e;
            }
        }
    }
    async getRealWorkspaceFolders() {
        const e = this.getEffectiveWorkspaceFolders();
        if (e.length === 0) return e;
        const t = [];
        for (const n of e){
            const i = await this.getRealUriAsync(n.uri);
            if (this.uriIdentityService.extUri.isEqual(i, n.uri)) {
                t.push(n);
                continue;
            }
            t.push({
                uri: i,
                name: n.name,
                index: n.index,
                toResource: (r)=>jr(i, r)
            });
        }
        return t;
    }
    cleanupWorktreeCursorIgnoreEntries(e) {
        const t = Ee.file(e), n = [];
        for (const i of Object.keys(this._ignoreMapping))try {
            const r = Ee.parse(i);
            this.uriIdentityService.extUri.isEqualOrParent(r, t) && n.push(i);
        } catch  {}
        if (n.length > 0) {
            for (const i of n)delete this._ignoreMapping[i], delete this._ignorePatternsMapping[i];
            this.logService.info(`[CursorIgnore] Cleaned up ${n.length} .cursorignore entries for removed worktree at ${e}`), this._onDidCursorIgnoreChange.fire({});
        }
    }
    async shouldIgnoreUri(e, t) {
        const n = await this.getRealUriAsync(e), i = await this.getRealWorkspaceFolders();
        return this.shouldIgnoreUriWithWorkspaceFolders(n, t, i);
    }
    initializeGlobalIgnoreList() {
        const e = this.configurationService.getValue(mgi) || [];
        this._globalIgnorePatterns = e, e.length > 0 ? this._globalIgnore = TPe({
            allowRelativePaths: !0
        }).add(e) : this._globalIgnore = void 0;
    }
    addOnCursorIgnoreLoadedCallback(e) {
        this._ignoreLoaded ? e() : this._rulesLoaded.p.then(e);
    }
    async waitForRulesLoaded(e) {
        return this._ignoreLoaded || !this._rulesLoadStalled.isSettled && await Promise.race([
            this._rulesLoaded.p.then(()=>!0),
            this._rulesLoadStalled.p.then(()=>!1)
        ]) ? !0 : (this._didLogRulesWithheld || (this._didLogRulesWithheld = !0, this.logService.warn(`[CursorIgnore] .cursorignore rules are not loaded; withholding file content (first reader: ${e})`)), this.metricsService.increment({
            stat: "cursor_ignore.rules_wait_timeout",
            tags: {
                reader: e
            }
        }), !1);
    }
    async initializeIgnoreMapping() {
        const e = Date.now();
        this._initTimeout.setIfNotSet(()=>{
            this.logService.warn(`[CursorIgnore] .cursorignore discovery has not completed after ${qmo}ms; context reads that wait for it are still blocked`), this.metricsService.increment({
                stat: "cursor_ignore.initial_load_slow"
            });
        }, qmo);
        for(let t = 1;; t++){
            if (this._cancellationToken.isCancellationRequested) return;
            try {
                await this.loadIgnoreMapping();
            } catch (r) {
                if (this._cancellationToken.isCancellationRequested) return;
                this.logService.warn(`[CursorIgnore] .cursorignore discovery failed (attempt ${t}); retrying`, r), this.metricsService.increment({
                    stat: "cursor_ignore.initial_load_retry",
                    tags: {
                        attempt: String(Math.min(t, jmo))
                    }
                });
                const s = Math.min(nJd * 2 ** (t - 1), iJd);
                try {
                    await Kl(s, this._cancellationToken);
                } catch  {
                    return;
                }
                continue;
            }
            this._rulesLoaded.complete(), this._initTimeout.cancel(), this.clearCaches();
            const i = Date.now() - e;
            this.metricsService.distribution({
                stat: "cursor_ignore.initial_load_time_ms",
                value: i,
                tags: {
                    attempts: String(Math.min(t, jmo))
                }
            });
            return;
        }
    }
    async loadIgnoreMapping() {
        const e = this.getEffectiveWorkspaceFolders(), t = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.ignoreSymlinks ?? !1, n = this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings, r = n?.cursorIgnore?.ignoreSymlinks || t, s = this._queryBuilder.file(e, {
            _reason: "cursorIgnoreCheck",
            includePattern: [
                "**/.cursorignore"
            ],
            maxResults: 0,
            ignoreSymlinks: r
        }), o = await this.searchService.fileSearch(s, this._cancellationToken);
        this._ignoreScanSkippedFolders = this.getScanSkippedFolders(e.map((h)=>h.uri)).map((h)=>Ee.file(h));
        for (const h of o.results)try {
            const p = await this.fileService.readFile(h.resource), g = this.parseIgnoreRules(p.value.toString()), f = h.resource.toString().substring(0, h.resource.toString().lastIndexOf(".cursorignore"));
            g.length > 0 ? (this._ignoreMapping[f] = TPe().add(g), this._ignorePatternsMapping[f] = g) : (this._ignoreMapping[f] = "no-ignore", this._ignorePatternsMapping[f] = "no-ignore");
        } catch (p) {
            this.logService.error(`Error processing .cursorignore file at ${h.resource.toString()}:`, p);
        }
        const a = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.hierarchicalEnabled ?? !1, l = n?.cursorIgnore?.hierarchicalEnabled || a;
        let u = 0;
        if (l) for (const h of e){
            const p = this.collectHierarchicalDirectories(h.uri, {
                skipWorkspace: !1
            });
            for (const g of p)try {
                await this.handleNewHierarchyCursorIgnore(g), this._ignoreMapping[g.toString()] !== "no-ignore" && u++;
            } catch (f) {
                this.logService.error(`Error loading hierarchical .cursorignore at ${g.toString()}:`, f);
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
        return this.getAdminBlockRepos().some((t)=>t.type === "ALLOW");
    }
    findIgnoreMappingKeyForCursorignoreUri(e) {
        const t = e.toString(), n = t.substring(0, t.lastIndexOf(".cursorignore"));
        if (n in this._ignoreMapping) return n;
        for (const i of Object.keys(this._ignoreMapping)){
            const r = Ee.parse(i + ".cursorignore");
            if (this.uriIdentityService.extUri.isEqual(e, r)) return i;
        }
    }
    getScanSkippedFolders(e) {
        const t = {
            platform: fge ?? "",
            homeDirectory: this.pathService.userHome({
                preferLocal: !0
            }).fsPath
        };
        return e.filter((n)=>n.scheme === gt.file).flatMap((n)=>Lhv(n.fsPath, t));
    }
    isInIgnoreScanSkippedFolder(e) {
        return this._ignoreScanSkippedFolders.some((t)=>this.uriIdentityService.extUri.isEqualOrParent(e, t));
    }
    async handleNewHierarchyCursorIgnore(e) {
        const t = Ee.joinPath(e, ".cursorignore");
        if (await this.fileService.exists(t)) {
            const n = await this.fileService.readFile(t), i = this.parseIgnoreRules(n.value.toString());
            i.length > 0 ? (this._ignoreMapping[e.toString()] = TPe().add(i), this._ignorePatternsMapping[e.toString()] = i) : (this._ignoreMapping[e.toString()] = "no-ignore", this._ignorePatternsMapping[e.toString()] = "no-ignore");
        } else this._ignoreMapping[e.toString()] = "no-ignore", this._ignorePatternsMapping[e.toString()] = "no-ignore";
    }
    collectHierarchicalDirectories(e, t = {
        skipWorkspace: !1
    }) {
        const n = [];
        let i = e, r = 0;
        const s = 100;
        for(; ml(i) !== i;){
            if (r >= s) {
                console.error(`Max depth of ${s} reached while populating hierarchy cursor ignore.`);
                break;
            }
            i = ml(i), i.toString().endsWith("/") || (i = Ee.parse(i.toString() + "/")), !(t.skipWorkspace && this.workspaceContextService.isInsideWorkspace(i) && this._ignoreLoaded && !this.isInIgnoreScanSkippedFolder(i)) && (t.skipPending && this._pendingIgnorePaths.has(i.toString()) || this._ignoreMapping[i.toString()] === void 0 && (n.push(i), r++));
        }
        return n;
    }
    populatesHierarchyCursorIgnore(e) {
        if (!this.fileService.hasProvider(e)) return !1;
        const t = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.hierarchicalEnabled ?? !1, r = this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings?.cursorIgnore?.hierarchicalEnabled || t, s = this.isInIgnoreScanSkippedFolder(e);
        if (!r && !s) return !1;
        const o = this.collectHierarchicalDirectories(e, {
            skipWorkspace: !0,
            skipPending: !1
        }).filter((l)=>r || this.isInIgnoreScanSkippedFolder(l));
        let a = !1;
        const c = [];
        for (const l of o)this._pendingIgnorePaths.has(l.toString()) ? a = !0 : (c.push(l), this._pendingIgnorePaths.add(l.toString()));
        return c.length > 0 && Promise.all(c.map((l)=>this.handleNewHierarchyCursorIgnore(l).catch((u)=>{
                this.logService.error(`Error populating hierarchy cursor ignore for ${l.toString()}:`, u);
            }).finally(()=>{
                this._pendingIgnorePaths.delete(l.toString());
            }))).finally(()=>{
            this._ignoreLoaded && this._onDidCursorIgnoreChange.fire({});
        }), a || c.length > 0;
    }
    baseUriFor(e) {
        let t = this._parsedBaseCache.get(e);
        return t === void 0 && (t = Ee.parse(e), this._parsedBaseCache.set(e, t)), t;
    }
    clearCaches() {
        this._cache.clear(), this._parsedBaseCache.clear();
    }
    shouldIgnoreUriSync(e, t) {
        e = Ee.revive(e);
        const n = e.toString();
        if (this._cache.has(n)) {
            const s = this._cache.get(n);
            return s === null ? void 0 : s;
        }
        const i = this.getEffectiveWorkspaceFolders(), r = this.shouldIgnoreUriWithWorkspaceFolders(e, t, i);
        return r?.type === "cursorIgnore" && r.source === $qi || this._cache.set(n, r ?? null), r;
    }
    shouldIgnoreUriWithWorkspaceFolders(e, t, n) {
        if (this.isAdminBlocked(e)) return {
            type: "adminBlock"
        };
        if (this.isUnderWorktreesDir(e) || e.scheme !== gt.file && e.scheme !== gt.vscodeRemote) return;
        if (n.length === 0 && !t?.gitWorktree) return {
            type: "outOfWorkspace"
        };
        const r = t?.gitWorktree ? !1 : this.populatesHierarchyCursorIgnore(e);
        let s = !1;
        for (const [p, g] of Object.entries(this._ignoreMapping)){
            const f = this.baseUriFor(p);
            if (!this.uriIdentityService.extUri.isEqualOrParent(e, f)) continue;
            const b = this.uriIdentityService.extUri.relativePath(f, e) ?? "";
            if (g && g === "no-ignore" || b === "" || /^[a-zA-Z]:[\\/]/.test(b) || /^\.*\/|^\.+$/.test(b)) continue;
            const y = g.test(b);
            if (y.ignored && !y.unignored) return {
                type: "cursorIgnore",
                source: p
            };
            y.unignored && (s = !0);
        }
        if (!s && this._globalIgnore) {
            let p, g = n, f;
            if (t?.gitWorktree) {
                if (f = this.uriFromFsPathUsingBase(t.gitWorktree.worktreePath, e), !f) return {
                    type: "outOfWorkspace"
                };
                const v = g[0]?.name ?? "workspace";
                g = [
                    {
                        uri: f,
                        name: v,
                        index: 0,
                        toResource: (b)=>jr(f, b)
                    }
                ];
            }
            if (g.length > 0) {
                const v = g.find((b)=>this.uriIdentityService.extUri.isEqualOrParent(e, b.uri));
                if (v) {
                    if (f && this.uriIdentityService.extUri.isEqualOrParent(e, f) ? p = this.uriIdentityService.extUri.relativePath(f, e) ?? "" : p = this.uriIdentityService.extUri.relativePath(v.uri, e) ?? "", p === "" || /^[a-zA-Z]:[\\/]/.test(p)) return;
                } else {
                    const b = e.path.split("/");
                    p = b[b.length - 1];
                }
            } else {
                const v = e.path.split("/");
                p = v[v.length - 1];
            }
            if (this._globalIgnore.ignores(p)) return {
                type: "cursorIgnore",
                source: "globalIgnore"
            };
        }
        let o = n, a;
        if (t?.gitWorktree) {
            if (a = this.uriFromFsPathUsingBase(t.gitWorktree.worktreePath, e), !a) return {
                type: "outOfWorkspace"
            };
            const p = o[0]?.name ?? "workspace";
            o = [
                {
                    uri: a,
                    name: p,
                    index: 0,
                    toResource: (g)=>jr(a, g)
                }
            ];
        }
        if (o.length === 0) return {
            type: "outOfWorkspace"
        };
        const c = o.find((p)=>this.uriIdentityService.extUri.isEqualOrParent(e, p.uri));
        if (!c) return {
            type: "outOfWorkspace"
        };
        let l;
        if (a && this.uriIdentityService.extUri.isEqualOrParent(e, a)) {
            if (l = this.uriIdentityService.extUri.relativePath(a, e) ?? "", l === "") return;
        } else l = this.uriIdentityService.extUri.relativePath(c.uri, e) ?? "";
        const h = (Oo ? iIc(l) : l).split("/");
        if (r) return t && this.metricsService.increment({
            stat: "cursor_ignore.hierarchical_blocked_still_loading",
            value: 1
        }), {
            type: "cursorIgnore",
            source: $qi
        };
    }
    shouldIgnoreUriUncached(e, t) {
        const n = this.getEffectiveWorkspaceFolders();
        return this.shouldIgnoreUriWithWorkspaceFolders(e, t, n);
    }
    shouldBlockUriFromReading(e) {
        if (e.scheme === gt.cursorWorker) {
            if (Jpo(e)) return this.getAdminBlockRepos().length > 0;
            const n = this._cursorWorkerRepoUrls.get(e.authority);
            return this.isAdminBlockedForRepoPaths({
                repoUrls: n?.at(-1) ?? [],
                relativePath: e.path
            });
        }
        const t = this.shouldIgnoreUriSync(e);
        return t !== void 0 && t.type !== "outOfWorkspace";
    }
    registerCursorWorkerRepoUrls(e) {
        const t = this._cursorWorkerRepoUrls.get(e.agentId) ?? [], n = [
            ...e.repoUrls
        ];
        return t.push(n), this._cursorWorkerRepoUrls.set(e.agentId, t), rn(()=>{
            const i = t.indexOf(n);
            i !== -1 && t.splice(i, 1), t.length === 0 && this._cursorWorkerRepoUrls.delete(e.agentId);
        });
    }
    getSerializableIgnoreMapping() {
        const e = {};
        for (const [t, n] of Object.entries(this._ignorePatternsMapping))Array.isArray(n) && (e[t] = n);
        if (this._globalIgnore && this._globalIgnorePatterns.length > 0) {
            const t = this.getEffectiveWorkspaceFolders();
            for (const n of t){
                const i = n.uri.toString(), r = e[i];
                Array.isArray(r) ? e[i] = [
                    ...this._globalIgnorePatterns,
                    ...r
                ] : e[i] = [
                    ...this._globalIgnorePatterns
                ];
            }
        }
        return e;
    }
    async filterCursorIgnoredFiles(e, t, n) {
        if (await this.waitForRulesLoaded(n)) return e.filter((i)=>!this.shouldBlockUriFromReading(t(i)));
    }
    async reloadCursorIgnoreForDirectory(e) {
        const t = await this.getRealUriAsync(e), i = Ee.joinPath(t, ".cursorignore").toString(), r = i.substring(0, i.lastIndexOf(".cursorignore")), o = Ee.joinPath(e, ".cursorignore").toString(), a = o.substring(0, o.lastIndexOf(".cursorignore"));
        a !== r && (delete this._ignoreMapping[a], delete this._ignorePatternsMapping[a]), delete this._ignoreMapping[r], delete this._ignorePatternsMapping[r];
        const c = Ee.joinPath(e, ".cursorignore");
        try {
            const l = await this.fileService.readFile(c), u = this.parseIgnoreRules(l.value.toString());
            u.length > 0 ? (this._ignoreMapping[r] = TPe().add(u), this._ignorePatternsMapping[r] = u) : (this._ignoreMapping[r] = "no-ignore", this._ignorePatternsMapping[r] = "no-ignore");
        } catch  {
            this._ignoreMapping[r] = "no-ignore", this._ignorePatternsMapping[r] = "no-ignore";
        }
        this.clearCaches(), this._onDidCursorIgnoreChange.fire({});
    }
    async initializeGitRepoMapping() {
        await this.gitContextService.waitForGitContextProvider();
        const e = this.getEffectiveWorkspaceFolders(), t = new Set, n = e.map((l)=>l.uri.scheme === gt.vscodeRemote ? l.uri.path : l.uri.fsPath), i = this.getScanSkippedFolders(e.map((l)=>l.uri)), r = 100, s = new Set([
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
        await XQd(this.fileService, this.logService, e.map((l)=>l.uri), t, n, {
            maxDepth: r,
            dirsToSkip: s,
            pathsToSkip: new Set(i),
            maxConcurrent: 20
        }), this._gitRepoLocations = n;
        const a = new Map;
        let c = 0;
        for (const l of this._gitRepoLocations)try {
            const u = await this.gitContextService.getGitUpstreamURL(l), h = await this.gitContextService.getGitRoot(l);
            h && a.set(h, u);
        } catch (u) {
            c++, console.warn(`Failed to get Git upstream URL for ${l}: ${u}`);
        }
        this._gitRepoUpstreamUrls = a, this._gitRepoScanSkippedFolders = i.map((l)=>this.normalizePathForComparison(l).toLowerCase()), this._gitReposInitialized = !0, this.emitAdminRepoListGitMappingMetrics({
            candidateRepoCount: this._gitRepoLocations.length,
            mappedRepoWithUpstreamCount: Array.from(a.values()).filter((l)=>l !== void 0).length,
            repoMetadataFailureCount: c
        }), this._onDidCursorIgnoreChange.fire({});
    }
    normalizePathForComparison(e) {
        return tGi(e, {
            lowercaseOnWindows: !0
        });
    }
    isOutsideGitRepoScan(e) {
        if (this._gitRepoScanSkippedFolders.length === 0) return !1;
        const t = e.toLowerCase();
        return this._gitRepoScanSkippedFolders.some((n)=>t === n || t.startsWith(n + "/"));
    }
    isUnderWorktreesDir(e) {
        const t = e.scheme === gt.vscodeRemote ? e.path : e.fsPath, n = this.normalizePathForComparison(t);
        return n === this._worktreesDirPath || n.startsWith(this._worktreesDirPath + "/");
    }
    isWildcardUrl(e) {
        return e.trim() === "*";
    }
    isPathPatternUrl(e) {
        return !e.includes("://") && !e.includes("github.com") && !e.includes("gitlab.com") && !e.includes("bitbucket.org") && !e.includes("@");
    }
    matchesRepoFilePattern(e, t) {
        const n = e.trim();
        return n === "*" ? t !== "" && this.relativePathKind(t) === "inside" : (t === "" || t === ".") && (n === "**" || n === "**/*") ? !0 : iF(n, t);
    }
    getRelativePathFromWorkspaceRoot(e) {
        const t = this.getEffectiveWorkspaceFolders();
        let n, i = -1;
        for (const r of t){
            const s = this.normalizePathForComparison(r.uri.fsPath);
            (e === s || e.startsWith(s + "/")) && s.length > i && (i = s.length, n = e === s ? "" : e.substring(s.length + 1));
        }
        return n ?? e;
    }
    matchesWildcardOrPathPatternBlockRepos(e, t) {
        for (const n of e)if (this.isWildcardUrl(n.url)) {
            if (n.patterns.some((r)=>iF(r.pattern, t))) return !0;
        } else if (this.isPathPatternUrl(n.url) && iF(n.url, t)) return !0;
        return !1;
    }
    matchesPotentialGlobRepoUrlBlockReposBeforeGitInit(e, t) {
        const n = this.relativePathKind(t);
        if (n !== "inside" && n !== "empty") return !1;
        for (const i of e){
            const r = this.normalizeRepoUrl(i.url);
            if (!(this.isWildcardUrl(i.url) || this.isPathPatternUrl(i.url) || !tJd.test(r)) && i.patterns.some((s)=>this.matchesRepoFilePattern(s.pattern, t))) return !0;
        }
        return !1;
    }
    doesBlockPatternAffectDirectoryListing(e, t) {
        const n = e.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
        if (!n) return !1;
        const i = t.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, ""), r = n.split("/").filter((o)=>o.length > 0), s = i ? i.split("/").filter((o)=>o.length > 0) : [];
        return this.canBlockPatternMatchDirectoryPrefix(r, s, !1, !1);
    }
    canBlockPatternMatchDirectoryPrefix(e, t, n, i) {
        if (t.length === 0) return this.canRemainingBlockPatternAffectDirectoryListing(e, n);
        if (e.length === 0) return !1;
        const r = e[0], s = t[0];
        return !r || !s ? !1 : r === "**" ? this.canBlockPatternMatchDirectoryPrefix(e.slice(1), t, n, !0) || this.canBlockPatternMatchDirectoryPrefix(e, t.slice(1), !0, !0) : iF(r, s) ? this.canBlockPatternMatchDirectoryPrefix(e.slice(1), t.slice(1), !1, !1) : !i && this.canListedGlobSegmentMatchPatternSegment(s, r) ? this.canBlockPatternMatchDirectoryPrefix(e.slice(1), t.slice(1), !1, !1) : !1;
    }
    canRemainingBlockPatternAffectDirectoryListing(e, t) {
        return e.every((n)=>n === "**") || this.canBlockPatternMatchSingleListedChild(e) ? !0 : !t && e[0] !== "**";
    }
    canBlockPatternMatchSingleListedChild(e) {
        if (e.length === 0) return !1;
        const t = e.slice(1);
        return e[0] === "**" ? t.every((n)=>n === "**") || this.canBlockPatternMatchSingleListedChild(t) : t.every((n)=>n === "**");
    }
    canListedGlobSegmentMatchPatternSegment(e, t) {
        return this.containsShellGlobMetacharacter(e) && iF(e, t);
    }
    containsShellGlobMetacharacter(e) {
        return /[*?[{]/.test(e);
    }
    relativePathKind(e) {
        return e === void 0 ? "unknown" : e === "" ? "empty" : e === ".." || e.startsWith("../") || e.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(e) ? "outside_or_unknown" : "inside";
    }
    isAdminBlockedForRepoPaths(e) {
        return this.createAdminBlockedRepoPathsPredicate(e.repoUrls)?.(e.relativePath) ?? !1;
    }
    createAdminBlockedRepoPathsPredicate(e) {
        const t = this.getAdminBlockRepos();
        if (t.length === 0) return;
        const n = t.filter((a)=>a.type !== "ALLOW"), i = t.filter((a)=>a.type === "ALLOW"), r = n.filter((a)=>e.some((c)=>this.doesRepoUrlMatch(a.url, c))), s = e.map((a)=>i.filter((c)=>this.doesRepoUrlMatch(c.url, a))), o = (a, c)=>a.some((l)=>l.patterns.some((u)=>this.matchesRepoFilePattern(u.pattern, c)));
        return (a)=>{
            const c = a.replaceAll("\\", "/").replace(/^\/+/, "");
            return this.relativePathKind(c) !== "inside" || this.matchesWildcardOrPathPatternBlockRepos(n, c) || o(r, c) ? !0 : i.length > 0 && (e.length === 0 || s.some((l)=>!o(l, c)));
        };
    }
    isAdminBlocked(e) {
        const t = Ee.revive(e);
        let n, i, r = 0;
        const s = t.scheme === gt.vscodeRemote ? t.path : t.fsPath, o = this.normalizePathForComparison(s);
        for (const g of this._gitRepoUpstreamUrls.keys())if (this._gitRepoUpstreamUrls.get(g) !== void 0) {
            const f = this.normalizePathForComparison(g);
            o.startsWith(f) && (o.length === f.length || o[f.length] === "/") && f.length > r && (n = g, i = f, r = f.length);
        }
        const a = this.getAdminBlockRepos(), c = this.hasAllowlistRepos(), l = a.filter((g)=>g.type !== "ALLOW"), u = a.filter((g)=>g.type === "ALLOW"), h = l.some((g)=>!this.isWildcardUrl(g.url) && !this.isPathPatternUrl(g.url)), p = this.getAdminBlocklistPatterns();
        if (this._gitReposInitialized && a.length > 0 && this.isOutsideGitRepoScan(o)) return this.emitAdminRepoListPathEvaluationMetric({
            outcome: "blocked",
            reason: "repo_unknown_outside_scan",
            gitState: "outside_scan",
            relativePath: this.getRelativePathFromWorkspaceRoot(o),
            hasBlockRepos: l.length > 0,
            hasAllowRepos: u.length > 0,
            hasRepoUrlBlockRepos: h
        }), !0;
        if (this._gitReposInitialized && n && i) {
            const g = this._gitRepoUpstreamUrls.get(n), f = o.substring(i.length + 1);
            if (g) {
                if (a.length > 0) {
                    let v = !1;
                    for (const b of a)if (b.type !== "ALLOW" && this.doesRepoUrlMatch(b.url, g) && (v = !0, b.patterns.some((T)=>this.matchesRepoFilePattern(T.pattern, f)))) return this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "blocked",
                        reason: "repo_pattern",
                        gitState: "matched_repo",
                        relativePath: f,
                        hasBlockRepos: l.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: h
                    }), !0;
                    if (c && !a.some((y)=>y.type === "ALLOW" && this.doesRepoUrlMatch(y.url, g) && y.patterns.some((T)=>this.matchesRepoFilePattern(T.pattern, f)))) return this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "blocked",
                        reason: "allowlist_miss",
                        gitState: "matched_repo",
                        relativePath: f,
                        hasBlockRepos: l.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: h
                    }), !0;
                    this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "allowed",
                        reason: v ? "repo_url_match_pattern_miss" : "repo_url_miss",
                        gitState: "matched_repo",
                        relativePath: f,
                        hasBlockRepos: l.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: h
                    });
                }
                return !1;
            }
        } else if (this._gitReposInitialized && !n) {
            if (a.length > 0) {
                const g = this.getRelativePathFromWorkspaceRoot(o);
                if (this.matchesWildcardOrPathPatternBlockRepos(l, g)) return this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "blocked",
                    reason: "wildcard_or_path_pattern",
                    gitState: "no_repo",
                    relativePath: g,
                    hasBlockRepos: l.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: h
                }), !0;
                if (c) {
                    if (this._cursorDataDirPath && (o === this._cursorDataDirPath || o.startsWith(this._cursorDataDirPath + "/"))) return this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "allowed",
                        reason: "cursor_data_exempt",
                        gitState: "no_repo",
                        relativePath: g,
                        hasBlockRepos: l.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: h
                    }), !1;
                    if (!this.matchesWildcardOrPathPatternBlockRepos(u, g)) return this.emitAdminRepoListPathEvaluationMetric({
                        outcome: "blocked",
                        reason: "allowlist_miss",
                        gitState: "no_repo",
                        relativePath: g,
                        hasBlockRepos: l.length > 0,
                        hasAllowRepos: u.length > 0,
                        hasRepoUrlBlockRepos: h
                    }), !0;
                }
                this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "allowed",
                    reason: "no_matching_policy",
                    gitState: "no_repo",
                    relativePath: g,
                    hasBlockRepos: l.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: h
                });
            }
            return !1;
        } else if (!this._gitReposInitialized) {
            if (p.length !== 0) {
                const g = e.path;
                if (g === void 0) return !1;
                for (const f of p)if (iF(f, g)) return this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "blocked",
                    reason: "legacy_pattern",
                    gitState: "not_initialized",
                    relativePath: g,
                    hasBlockRepos: l.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: h
                }), !0;
            }
            if (a.length > 0) {
                const g = this.getRelativePathFromWorkspaceRoot(o);
                if (this.matchesWildcardOrPathPatternBlockRepos(l, g)) return this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "blocked",
                    reason: "wildcard_or_path_pattern",
                    gitState: "not_initialized",
                    relativePath: g,
                    hasBlockRepos: l.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: h
                }), !0;
                if (this.matchesPotentialGlobRepoUrlBlockReposBeforeGitInit(l, g)) return this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "blocked",
                    reason: "repo_url_pending_git_mapping",
                    gitState: "not_initialized",
                    relativePath: g,
                    hasBlockRepos: l.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: h
                }), !0;
                this.emitAdminRepoListPathEvaluationMetric({
                    outcome: "allowed",
                    reason: "no_matching_policy",
                    gitState: "not_initialized",
                    relativePath: g,
                    hasBlockRepos: l.length > 0,
                    hasAllowRepos: u.length > 0,
                    hasRepoUrlBlockRepos: h
                });
            }
        }
        return !1;
    }
    emitAdminRepoListGitMappingMetrics(e) {
        const t = {
            has_candidate_repos: String(e.candidateRepoCount > 0),
            has_metadata_failures: String(e.repoMetadataFailureCount > 0),
            has_unmapped_or_no_upstream_repos: String(e.candidateRepoCount > e.mappedRepoWithUpstreamCount)
        };
        this.metricsService.increment({
            stat: "cursor_admin_repo_list.git_mapping",
            value: 1,
            tags: t
        }), this.metricsService.distribution({
            stat: "cursor_admin_repo_list.mapped_repo_with_upstream_count",
            value: e.mappedRepoWithUpstreamCount,
            tags: t
        }), this.metricsService.distribution({
            stat: "cursor_admin_repo_list.repo_metadata_failure_count",
            value: e.repoMetadataFailureCount,
            tags: t
        });
    }
    emitAdminRepoListPathEvaluationMetric(e) {
        this.metricsService.increment({
            stat: "cursor_admin_repo_list.path_evaluated",
            value: 1,
            tags: {
                outcome: e.outcome,
                reason: e.reason,
                git_state: e.gitState,
                relative_path_kind: this.relativePathKind(e.relativePath),
                has_block_repos: String(e.hasBlockRepos),
                has_allow_repos: String(e.hasAllowRepos),
                has_repo_url_block_repos: String(e.hasRepoUrlBlockRepos)
            }
        });
    }
    getBlockedChildPatternForDirectory(e) {
        const t = this.getAdminBlockRepos().filter((o)=>o.type !== "ALLOW"), n = this.getAdminBlocklistPatterns(), i = e.fsPath, r = this.normalizePathForComparison(i), s = this.getRelativePathFromWorkspaceRoot(r);
        for (const o of n)if (this.doesBlockPatternAffectDirectoryListing(o, s)) return o;
        for (const o of t)if (this.isWildcardUrl(o.url)) for (const a of o.patterns){
            const c = a.pattern;
            if (this.doesBlockPatternAffectDirectoryListing(c, s)) return c;
        }
        else if (this.isPathPatternUrl(o.url)) {
            const a = o.url, c = a.split("/");
            if (c.length > 0) {
                const l = c[0].replace(/\*+$/, ""), u = !s || s === "", h = a.startsWith(s + "/"), p = s.startsWith(l);
                if (l && !l.includes("*") && (!s || s === "" || a.startsWith(s + "/") || s.startsWith(l))) return a;
            }
        }
    }
    async getBlockedChildPatternForListingPath(e) {
        try {
            if (!(await this.fileService.stat(e)).isDirectory) return;
        } catch  {}
        return this.getBlockedChildPatternForDirectory(e);
    }
    getDirectoryBlockType(e) {
        if (this.isAdminBlocked(e)) return "directory";
        const t = this.getBlockedChildPatternForDirectory(e);
        if (t) return t.endsWith("/**") ? "all-contents" : t.endsWith("/*") ? "files-only" : "all-contents";
    }
    normalizeRepoUrl(e) {
        let t = e.trim().toLowerCase();
        t.startsWith("git@") && (t = "https://" + t.slice(4).replace(":", "/")), /^[a-z][a-z0-9+.-]*:\/\//i.test(t) && !/^https?:\/\//i.test(t) && (t = t.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "https://")), /^https?:\/\//i.test(t) || (t = "https://" + t);
        try {
            const n = new URL(t), i = n.pathname.replace(/\/+$/, "").replace(/\.git$/i, "").replace(/\/+$/, "");
            return n.hostname + i;
        } catch  {
            return t = t.replace(/^https?:\/\//i, ""), t = t.replace(/[?#].*$/, ""), t = t.replace(/\/+$/, ""), t = t.replace(/\.git$/i, ""), t = t.replace(/\/+$/, ""), t;
        }
    }
    doesRepoUrlMatch(e, t) {
        const n = this.normalizeRepoUrl(e), i = this.normalizeRepoUrl(t), r = e.trim().toLowerCase().replace(/\.git$/i, "");
        return e.includes("*") ? e.trim() === "*" ? !0 : r.startsWith("*/") ? i.endsWith(r.substring(1)) : iF(n, i) : n === i;
    }
    parseIgnoreRules(e) {
        return e.split(`
`).map((t)=>t.replace(/\r$/, "").trimStart()).filter((t)=>t !== "" && !t.startsWith("#"));
    }
    async listCursorIgnoreFilesByRoot(e, t) {
        const n = {};
        for (const r of e)n[r.fsPath.replace(/\\/g, "/")] = [];
        if (t.isCancellationRequested) throw new Error("Cancellation requested");
        this._ignoreLoaded || await ZL(this._rulesLoaded.p, t);
        const i = (r)=>!this.workspaceContextService.isInsideWorkspace(r) || this.isInIgnoreScanSkippedFolder(r);
        for (const r of e)if (i(r)) {
            const s = r.fsPath.replace(/\\/g, "/");
            this._scannedOutOfWorkspaceRoots.has(s) || (await this.scanAndLoadCursorIgnoresUnderRoot(r, t), this._scannedOutOfWorkspaceRoots.add(s)), this._scannedOutOfWorkspaceAncestorRoots.has(s) || (await this.scanAndLoadAncestorCursorIgnores(r), this._scannedOutOfWorkspaceAncestorRoots.add(s));
        }
        for (const [r, s] of Object.entries(this._ignoreMapping)){
            if (s === "no-ignore") continue;
            let o;
            try {
                o = Ee.parse(r.endsWith(".cursorignore") ? r : r + ".cursorignore");
            } catch  {
                continue;
            }
            for (const a of e){
                const c = a.toString(), l = o.toString(), u = l.startsWith(c), h = i(a) && c.startsWith(r);
                if (u || h) {
                    const p = a.fsPath.replace(/\\/g, "/"), g = n[p];
                    g.some((f)=>f.toString() === l) || g.push(o);
                }
            }
        }
        return n;
    }
    async scanAndLoadCursorIgnoresUnderRoot(e, t) {
        const n = await this.detectPrimaryWorkspaceUnderVersionControl() === !1;
        try {
            const i = this.reactiveStorageService.applicationUserPersistentStorage.cursorIgnore?.ignoreSymlinks ?? !1, o = this.reactiveStorageService.applicationUserPersistentStorage.teamAdminSettings?.cursorIgnore?.ignoreSymlinks || i, a = this._queryBuilder.file([
                e
            ], {
                _reason: "cursorIgnoreCheck-outOfWorkspace",
                expandPatterns: !1,
                ignoreSymlinks: o,
                maxDepth: n ? 4 : void 0
            });
            a.includePattern = {
                "**/.cursorignore": !0
            };
            const c = await this.searchService.fileSearch(a, t);
            for (const l of c.results)try {
                const u = await this.fileService.readFile(l.resource), h = this.parseIgnoreRules(u.value.toString()), p = l.resource.toString().substring(0, l.resource.toString().lastIndexOf(".cursorignore"));
                h.length > 0 ? (this._ignoreMapping[p] = TPe().add(h), this._ignorePatternsMapping[p] = h) : (this._ignoreMapping[p] = "no-ignore", this._ignorePatternsMapping[p] = "no-ignore");
            } catch (u) {
                console.error(`Error processing .cursorignore file at ${l.resource.toString()}:`, u);
            }
            this._onDidCursorIgnoreChange.fire({});
        } catch (i) {
            console.warn("scanAndLoadCursorIgnoresUnderRoot failed", i);
        }
    }
    async detectPrimaryWorkspaceUnderVersionControl() {
        const e = this.workspaceContextService.getWorkspace().folders;
        if (e.length === 0) return !1;
        const t = jr(e[0].uri, ".git");
        try {
            const n = await this.fileService.stat(t);
            return n.isFile || n.isDirectory;
        } catch  {
            return !1;
        }
    }
    async scanAndLoadAncestorCursorIgnores(e) {
        try {
            let t = ml(e);
            const n = new Set;
            let i = 0;
            const r = 100;
            for(; ml(t) !== t && !(i++ > r);){
                const s = t.toString().endsWith("/") ? t.toString() : t.toString() + "/";
                if (n.has(s)) break;
                n.add(s);
                const o = Ee.parse(s + ".cursorignore");
                try {
                    if (await this.fileService.exists(o)) {
                        const c = await this.fileService.readFile(o), l = this.parseIgnoreRules(c.value.toString());
                        l.length > 0 ? (this._ignoreMapping[s] = TPe().add(l), this._ignorePatternsMapping[s] = l) : (this._ignoreMapping[s] = "no-ignore", this._ignorePatternsMapping[s] = "no-ignore");
                    }
                } catch  {}
                const a = ml(t);
                if (a.toString() === t.toString()) break;
                t = a;
            }
            this._onDidCursorIgnoreChange.fire({});
        } catch (t) {
            console.warn("scanAndLoadAncestorCursorIgnores failed", t);
        }
    }
}, Hqi = ie([
    C(0, Jn),
    C(1, Ii),
    C(2, Wn),
    C(3, DX),
    C(4, Do),
    C(5, _t),
    C(6, F$),
    C(7, kk),
    C(8, qt),
    C(9, Ea),
    C(10, Kse),
    C(11, vp),
    C(12, Bk),
    C(13, zl),
    C(14, lL),
    C(15, Yi)
], Hqi), mn(QM, Hqi, 1);

}
