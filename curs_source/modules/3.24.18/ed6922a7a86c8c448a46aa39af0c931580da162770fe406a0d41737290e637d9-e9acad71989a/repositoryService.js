import { JDv, QDv, eMv, iMv, qQd, tMv, td } from "./A3u.js";
import { Th, rh } from "./De_3.js";
import { Ct, Se, bt, rn, ve, we } from "./HVr.js";
import { C, ei, ie, pt } from "./actions_2.js";
import { dw, tE } from "./aiServerConfigService.js";
import { IPe, b1e } from "./aiserver_connectweb.js";
import { Za, na } from "./authenticationService.js";
import { db, nE } from "./backendClient.js";
import { Cn, qt } from "./configuration.js";
import { Aht, So, zAc } from "./constants_8.js";
import { PR, ZM } from "./cursorCredsService.js";
import { Pn } from "./extensions.js";
import { vI } from "./extpath.js";
import { Fi, Ii } from "./files.js";
import { zQd } from "./indexingGrepConfiguration.js";
import { Ze, _t } from "./instantiation.js";
import { Ll, fc } from "./model.js";
import { ba } from "./path_2.js";
import { mn, qe, vn } from "./qIc.js";
import { nq, qee } from "./queryBuilder.js";
import { Vp, _Xs } from "./reactiveStorageTypes_2.js";
import { dmo, umo } from "./repository_connectweb.js";
import { kBs, nX } from "./repository_pb.js";
import { Nl, bc } from "./resolverService.js";
import { av, sy } from "./solidEventsWrapper.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { $h, np } from "./telemetry.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ku } from "./utilities_3.js";
import { Fw } from "./utils_24.js";
import { hu } from "./utils_pb.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
var F$, Pqi, KQd;
export { F$, KQd, Pqi };
var __wakaru_iq_initialized = false;
export function iq() {
if (__wakaru_iq_initialized) return;
__wakaru_iq_initialized = true;
"use strict";
x(), dmo(), nX(), IPe(), bt(), Qt(), Pn(), Ze(), Fi(), Vp(), ZM(), Za(), hu(), Se(), Js(), Ll(), Nl(), ei(), ci(), nE(), Fw(), qee(), So(), tE(), Cn(), ba(), vI(), np(), sy(), Ku(), im(), Vn(), zQd(), F$ = vn("repositoryService"), Pqi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h){
        super(), this._cursorAuthenticationService = e, this.cursorCredsService = t, this.fileService = n, this.telemetryService = i, this.textModelService = r, this.workspaceContextService = s, this.serverConfigService = o, this.instantiationService = a, this.modelService = c, this.configurationService = l, this.storageService = u, this.structuredLogService = h, this.clearPollingIntervalFunction = ()=>{}, this.clearRepositoryIntervalFunction = ()=>{}, this.diffProvider = null, this.indexingProvider = void 0, this.grepProvider = void 0, this._onDidRequestRepoIndex = this._register(new ve), this.onDidRequestRepoIndex = this._onDidRequestRepoIndex.event, this._onDidRequestRepoInterrupt = this._register(new ve), this.onDidRequestRepoInterrupt = this._onDidRequestRepoInterrupt.event, this._onDidChangeIndexingStatus = this._register(new ve), this.onDidChangeIndexingStatus = this._onDidChangeIndexingStatus.event, this._onDidChangeIndexingProvider = this._register(new ve), this.onDidChangeIndexingProvider = this._onDidChangeIndexingProvider.event, this.onDidChangeIndexingGrepEnabled = Ct.None, this.isUriCursorIgnored = ()=>!1, this.repositoryIndexingError = this._register(new av(void 0)), this.repositoryIndexingStatus = this._register(new av({
            case: "loading"
        })), this.repositoryIndexingJobs = this._register(new av({})), this.repositoryIndexingProgress = this._register(new av(void 0)), this.indexingData = this._register(Th(this.storageService, "indexingData")), this._indexingGrepEnabled = qQd({
            configuredValue: this.configurationService.getValue(Aht),
            inspection: this.configurationService.inspect(Aht),
            legacyValue: rh(this.storageService, "indexingGrepEnabled")
        }), this.queryBuilder = this.instantiationService.createInstance(nq), this.repositoryClientPromise = this.instantiationService.createInstance(db, {
            service: umo
        }), this.aiServerClientPromise = this.instantiationService.createInstance(db, {
            service: b1e
        }), this._register(Ct.fromObservableLight(this.indexingData)(()=>{
            this.indexMainLocalRepository();
        })), this._register(this.onDidChangeIndexingStatus(async (p)=>{
            const g = p?.globalStatus ?? await this.indexingProvider?.getGlobalStatus();
            if (g !== void 0) switch(g.case === "synced" && (this.repositoryLastSyncedTime = Date.now()), this.repositoryIndexingStatus.change(g), g.case){
                case "not-indexed":
                    break;
                case "not-auto-indexing":
                    break;
                case "error":
                    {
                        this.repositoryIndexingError.change(g.error);
                        break;
                    }
                case "indexing-setup":
                    {
                        if (await this.getNewRepoInfo() === void 0) {
                            this.repositoryIndexingError.change(void 0);
                            return;
                        }
                        break;
                    }
                case "indexing-init-from-similar-codebase":
                    {
                        if (await this.getNewRepoInfo() === void 0) {
                            this.repositoryIndexingError.change(void 0);
                            return;
                        }
                        break;
                    }
                case "indexing":
                    {
                        const f = await this.getNewRepoInfo();
                        if (f === void 0) {
                            this.repositoryIndexingError.change(void 0);
                            return;
                        }
                        const v = f.repoName, b = p?.codebases ?? await this.indexingProvider?.getCodebases();
                        if (b === void 0) return;
                        const y = {};
                        let T = 0;
                        for (const E of b){
                            const A = p?.indexingProgressByCodebase?.[E] ?? await this.indexingProvider?.getIndexingProgress(E);
                            if (A === void 0) continue;
                            const R = p?.jobsByCodebase?.[E] ?? await this.indexingProvider?.getCurrentJobs(E);
                            R !== void 0 && (A > T && (T = A), y[E] = R);
                        }
                        this.repositoryIndexingProgress.change({
                            progress: T
                        }), this.repositoryIndexingJobs.change(y);
                        break;
                    }
                case "synced":
                    break;
                case "paused":
                    break;
                case "loading":
                    break;
                default:
                    return g;
            }
        }));
    }
    get indexingGrepEnabled() {
        return this._indexingGrepEnabled;
    }
    get primaryQueryOnlyIndex() {
        return this._primaryQueryOnlyIndex;
    }
    setQueryOnlyIndex(e) {
        this._primaryQueryOnlyIndex = e;
    }
    get suppressFileExtensionRecommendations() {
        return Date.now() - (this._suppressFileExtensionRecommendationsStart ?? 0) < 2e3;
    }
    async getEmbeddableFilesPath() {
        const e = await this.indexingProvider?.getEmbeddableFilesPath();
        return e ? Ee.from(e) : void 0;
    }
    setIsUriCursorIgnored(e) {
        this.isUriCursorIgnored = e;
    }
    registerIndexingProvider(e) {
        this.indexingProvider = e, this._onDidChangeIndexingProvider.fire();
    }
    unregisterIndexingProvider() {
        this.indexingProvider = void 0, this._onDidChangeIndexingProvider.fire();
    }
    registerGrepProvider(e) {
        this.grepProvider = e;
    }
    unregisterGrepProvider() {
        this.grepProvider = void 0;
    }
    fireOnDidChangeIndexingStatus(e) {
        this._onDidChangeIndexingStatus.fire(e);
    }
    unregisterOnDidChangeIndexingStatus() {}
    async getNewRepoInfo() {
        const e = Date.now();
        for(; !this.indexingProvider && Date.now() - e < 500;)await new Promise((s)=>setTimeout(s, 100));
        if (!this.isIndexedMainLocalRepository()) {
            if (this.primaryQueryOnlyIndex) return this.primaryQueryOnlyIndex.repositoryInfo;
            const s = this.indexingProvider?.getQueryOnlyRepoInfo(), o = 5e3;
            let a;
            const c = s ? new Promise((l)=>{
                a = setTimeout(()=>{
                    this.structuredLogService.debug("composer", "IndexingProvider.getQueryOnlyRepoInfo timed out", {
                        operation: "IndexingProvider.getQueryOnlyRepoInfo",
                        timeoutMs: o,
                        indexingProviderRegistered: this.indexingProvider !== void 0
                    }), l(void 0);
                }, o);
            }) : void 0;
            if (this.queryOnlyIndexFromIndexProvider = s ? await (async ()=>{
                try {
                    return await Promise.race([
                        s,
                        c
                    ]);
                } finally{
                    a !== void 0 && clearTimeout(a);
                }
            })() : void 0, this.queryOnlyIndexFromIndexProvider) return this.queryOnlyIndexFromIndexProvider.repositoryInfo;
        }
        const t = this.indexingProvider?.getRepoInfo(), n = 5e3;
        let i;
        const r = t ? new Promise((s)=>{
            i = setTimeout(()=>{
                this.structuredLogService.debug("composer", "IndexingProvider.getRepoInfo timed out", {
                    operation: "IndexingProvider.getRepoInfo",
                    timeoutMs: n,
                    indexingProviderRegistered: this.indexingProvider !== void 0
                }), s(void 0);
            }, n);
        }) : void 0;
        return t ? await (async ()=>{
            try {
                return await Promise.race([
                    t,
                    r
                ]);
            } finally{
                i !== void 0 && clearTimeout(i);
            }
        })() : void 0;
    }
    async getPathEncryptionKey() {
        const e = Date.now();
        for(; !this.indexingProvider && Date.now() - e < 5e3;)await new Promise((t)=>setTimeout(t, 100));
        return await this.indexingProvider?.getPathEncryptionKey();
    }
    isIndexedRepository() {
        return this.isIndexedMainLocalRepository() || this.primaryQueryOnlyIndex !== void 0 || this.queryOnlyIndexFromIndexProvider !== void 0;
    }
    getQueryOnlyIndex() {
        let e = this.primaryQueryOnlyIndex;
        return e === void 0 && (e = this.queryOnlyIndexFromIndexProvider), e;
    }
    getOverridePathEncryptionKey(e) {
        const t = this.getQueryOnlyIndex();
        if (t !== void 0 && e.repoName === t.repositoryInfo.repoName && e.repoOwner === t.repositoryInfo.repoOwner) return t.pathEncryptionKey;
    }
    maybeGetQueryOnlyRepoAccess(e) {
        const t = this.getQueryOnlyIndex();
        if (!(t === void 0 || e === void 0) && e.repoName === t.repositoryInfo.repoName && e.repoOwner === t.repositoryInfo.repoOwner) return t.queryOnlyRepoAccess;
    }
    getIndexingProgress() {
        return this.repositoryIndexingStatus.value?.case === "synced" ? 1 : this.repositoryIndexingProgress.value?.progress ?? 0;
    }
    getIndexingPhase() {
        return this.repositoryIndexingStatus.value?.case;
    }
    getNumFilesInUnindexedRepo() {
        return this.repositoryIndexingStatus.value?.case === "not-auto-indexing" ? this.repositoryIndexingStatus.value?.numFiles : void 0;
    }
    isIndexedMainLocalRepository(e) {
        const t = e?.indexingProgressThreshold ?? .8;
        if (this.getIndexingProgress() >= t) return !0;
        {
            const n = this.repositoryIndexingStatus.value?.case;
            if ([
                "indexing-setup",
                "indexing",
                "indexing-init-from-similar-codebase",
                "loading",
                "out-of-sync",
                "creating-index",
                "error"
            ].includes(n)) {
                if (n === "indexing" && (this.repositoryIndexingProgress.value?.progress ?? 0) < .5) return !1;
                const r = this.repositoryLastSyncedTime;
                if (r !== void 0 && Date.now() - r < 1e3 * 60 * 60) return !0;
            }
            return !1;
        }
    }
    async deleteMainLocalRepository() {
        const e = await this.getNewRepoInfo();
        if (e === void 0) return;
        await (await this.repositoryClientPromise.get()).removeRepositoryV2(new kBs({
            repository: e
        }), {
            headers: td(zn())
        }), this._onDidRequestRepoInterrupt.fire(!1), this.repositoryIndexingStatus.change({
            case: "not-indexed"
        }), this.repositoryIndexingProgress.change({
            progress: 0
        }), this.repositoryIndexingJobs.change({});
    }
    async pauseIndexingJob() {
        this._onDidRequestRepoInterrupt.fire(!0);
    }
    registerDiffProvider(e) {
        return this.diffProvider = e, rn(()=>{
            this.diffProvider === e && (this.diffProvider = null);
        });
    }
    dispose() {
        super.dispose(), this.clearPollingIntervalFunction(), this.clearRepositoryIntervalFunction();
    }
    repositoryToInfo(e) {
        const t = e.provider.remotes;
        if (t === void 0) return null;
        if (t.length === 0) throw new Error("No remotes found");
        const i = t[0].fetchUrl?.split(/\/|\:/);
        if (i === void 0) throw new Error("Could not parse origin url");
        const r = i[i.length - 2], s = i[i.length - 1].split(".")[0];
        if (r === void 0 || s === void 0) throw new Error("Could not parse repo owner and name");
        return {
            id: e.id,
            repoName: s,
            repoOwner: r,
            relativeWorkspacePath: JDv(e)
        };
    }
    async codeBlockFromRemote(e) {
        const t = e.relativeWorkspacePath, n = this.workspaceContextService.resolveRelativePath(t);
        let i, r = null;
        try {
            this._suppressFileExtensionRecommendationsStart = Date.now(), i = await this.textModelService.createModelReference(n, !0);
            const s = e.range;
            if (s === void 0 || s.startPosition === void 0 || s.endPosition === void 0) return console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it has an invalid range`), null;
            let o, a = [], c;
            const l = [];
            c = i.object.textEditorModel.getValueInRange({
                startLineNumber: s.startPosition.line,
                startColumn: s.startPosition.column,
                endLineNumber: s.endPosition.line,
                endColumn: s.endPosition.column
            }), o = c;
            for (const [h, p] of c.split(`
`).entries())l.push({
                lineNumber: h + (s.startPosition?.line - 1) + 1,
                text: p,
                isSignature: !1
            });
            const u = e.signatures?.ranges;
            if (u) {
                u.sort((p, g)=>!p.startPosition || !g.startPosition ? 0 : p.startPosition.line !== g.startPosition.line ? p.startPosition.line - g.startPosition.line : (p.startPosition.column ?? 0) - (g.startPosition.column ?? 0));
                const h = QDv(u);
                for (const p of h){
                    if (p === void 0 || p.startPosition === void 0 || p.endPosition === void 0) {
                        a.push("");
                        continue;
                    }
                    if (p.endPosition.line >= s.startPosition.line) {
                        a.push("");
                        continue;
                    }
                    a.push(i.object.textEditorModel.getValueInRange({
                        startLineNumber: p.startPosition.line,
                        startColumn: p.startPosition.column,
                        endLineNumber: p.endPosition.line,
                        endColumn: Math.min(i.object.textEditorModel.getLineLength(p.endPosition.line) + 1, p.endPosition.column)
                    }).trimEnd());
                }
                if (a.length !== 0) {
                    let p = "", g = 0;
                    for (const [f, v] of [
                        ...a,
                        o
                    ].entries()){
                        if (f < a.length && v === "") continue;
                        let b;
                        if (f < a.length) {
                            for (const [E, A] of v.split(`
`).entries())l.push({
                                lineNumber: E + (h[f]?.startPosition?.line ?? 1),
                                text: A,
                                isSignature: !0
                            });
                            b = h[f]?.startPosition?.line ?? 1;
                        } else b = s.startPosition?.line ?? 1;
                        if (f === 0) {
                            p += v;
                            continue;
                        }
                        const y = v.match(/^\s*/);
                        let T;
                        y ? T = y[0] : T = "", p += `
` + T + `...
` + v, l.push({
                            lineNumber: b - .5,
                            text: T + "...",
                            isSignature: !0
                        });
                    }
                    o = p;
                }
            }
            l.sort((h, p)=>h.lineNumber - p.lineNumber), r = {
                detailedLines: l,
                contents: o,
                originalContents: c,
                relativeWorkspacePath: this.workspaceContextService.asRelativePath(n),
                range: s
            };
        } catch (s) {
            console.error("Error in codeBlockFromRemote:", s);
        } finally{
            i && i.dispose();
        }
        return r;
    }
    async getRepoAuthId() {
        const e = await (async ()=>{
            if (this.cursorCredsService.getRepoBackendUrl().includes("cursor.sh") && !this.cursorCredsService.getBackendUrl().includes("cursor.sh")) {
                const n = this.serverConfigService.cachedServerConfig;
                if (n.indexingConfig?.repo42AuthToken) return n.indexingConfig.repo42AuthToken;
            }
            return await this._cursorAuthenticationService.getAccessToken();
        })();
        return e ? this._cursorAuthenticationService.getAuthIdFromToken(e) : void 0;
    }
    async compileGlobFilterFromPattern(e) {
        if (this.indexingProvider === void 0) throw new Error("Indexing provider not found");
        const t = {
            globFilter: e?.globFilter ?? await this.compilePatternIntoGlobFilter(e?.includePattern),
            notGlobFilter: await this.compilePatternIntoGlobFilter(e?.excludePattern),
            overridePathEncryptionKey: e.overridePathEncryptionKey ?? this.getOverridePathEncryptionKey(e.repoInfo)
        };
        return await this.indexingProvider.compileGlobFilter(t);
    }
    syncIndexWithGivenRepositoryInfo(e) {
        this._onDidRequestRepoInterrupt.fire(!0), this._onDidRequestRepoIndex.fire({
            forceOverrideRepoInfo: e
        });
    }
    indexMainLocalRepository() {
        this._cursorAuthenticationService.isAuthenticated() && (this._onDidRequestRepoInterrupt.fire(!0), this._onDidRequestRepoIndex.fire(void 0));
    }
    interruptLocalRepository(e) {
        e.id === _Xs.id && this._onDidRequestRepoInterrupt.fire(!1);
    }
    async convertToLocalBlock(e) {
        try {
            const t = await this.codeBlockFromRemote(e);
            return t ? t.contents !== void 0 && t.contents.length > 2e4 ? (console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it's too big`), null) : t : (console.log(`[Cpp] Skipping ${e.relativeWorkspacePath} because it couldn't be converted to a local block`), null);
        } catch (t) {
            return console.error("Failed to convert code block to local block:", t), null;
        }
    }
    async compilePatternIntoGlobFilter(e) {
        if (e === void 0) return;
        const t = tMv(e);
        this.telemetryService.publicLogCapture("SimpleGlobPattern.Attempted");
        const n = await this.generateSimpleGlobPattern(t);
        if (n !== void 0) return this.telemetryService.publicLogCapture("SimpleGlobPattern.Success"), n;
        this.telemetryService.publicLogCapture("SimpleGlobPattern.Fallback");
        const i = this.queryBuilder.parseSearchPaths(t);
        if (i.pattern !== void 0) return iMv(i.pattern);
    }
    async generateSimpleGlobPattern(e) {
        return eMv(e, this.fileService, this.workspaceContextService);
    }
}, Pqi = ie([
    C(0, na),
    C(1, PR),
    C(2, Ii),
    C(3, $h),
    C(4, bc),
    C(5, Jn),
    C(6, dw),
    C(7, _t),
    C(8, fc),
    C(9, qt),
    C(10, yn),
    C(11, Xh)
], Pqi), mn(F$, Pqi, 1), KQd = class extends pt {
    constructor(){
        super({
            id: zAc,
            title: {
                value: "Set Query Only Index",
                original: "Set Query Only Index"
            },
            f1: !1
        });
    }
    run(e, { queryOnlyRepositoryInfo: t }) {
        e.get(F$).setQueryOnlyIndex(t);
    }
}, qe(KQd);

}
