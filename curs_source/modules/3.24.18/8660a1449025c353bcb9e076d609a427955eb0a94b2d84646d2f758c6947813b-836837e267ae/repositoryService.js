import { Gt, Pn, Qe, en, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { es, sn } from "./actions_2.js";
import { C1, Qb } from "./aiServerConfigService.js";
import { eze, v4e } from "./aiserver_connectweb.js";
import { Rs, ss } from "./authenticationService.js";
import { cb, sC } from "./backendClient.js";
import { or, yi } from "./configuration.js";
import { mcd, o4t, pa } from "./constants_8.js";
import { Ub, py } from "./cursorCredsService.js";
import { Rn } from "./extensions.js";
import { pP } from "./extpath.js";
import { is, ms } from "./files.js";
import { XBm } from "./indexingGrepConfiguration.js";
import { It, dn } from "./instantiation.js";
import { Dh, Xh } from "./ipa.js";
import { dd, xp } from "./model.js";
import { Ul } from "./path_2.js";
import { f4e, xCe } from "./queryBuilder.js";
import { SFa, Um } from "./reactiveStorageTypes_2.js";
import { QKa, ZKa } from "./repository_connectweb.js";
import { n3o, qse } from "./repository_pb.js";
import { Em, Rh } from "./resolverService.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { Uv, Xv } from "./telemetry.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { gT } from "./utils_24.js";
import { Hu } from "./utils_pb.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
import { YBm, _G1, bG1, kG1, vG1, vh, yG1 } from "./yBp.js";
import { Ht } from "./ze.js";
var vie, FJr, ZBm;
export { FJr, ZBm, vie };
var __wakaru_Ope_initialized = false;
export function Ope() {
if (__wakaru_Ope_initialized) return;
__wakaru_Ope_initialized = true;
"use strict";
E(), QKa(), qse(), eze(), Gt(), fn(), Rn(), It(), ms(), Um(), py(), Rs(), Hu(), Qe(), Xo(), xp(), Em(), es(), Sr(), sC(), gT(), f4e(), pa(), C1(), or(), Ul(), pP(), Xv(), sk(), wu(), Cm(), Zi(), XBm(), vie = jn("repositoryService"), FJr = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this._cursorAuthenticationService = t, this.cursorCredsService = e, this.fileService = n, this.telemetryService = i, this.textModelService = r, this.workspaceContextService = s, this.serverConfigService = o, this.instantiationService = a, this.modelService = l, this.configurationService = c, this.storageService = u, this.structuredLogService = d, this.clearPollingIntervalFunction = ()=>{}, this.clearRepositoryIntervalFunction = ()=>{}, this.diffProvider = null, this.indexingProvider = void 0, this.grepProvider = void 0, this._onDidRequestRepoIndex = this._register(new tt), this.onDidRequestRepoIndex = this._onDidRequestRepoIndex.event, this._onDidRequestRepoInterrupt = this._register(new tt), this.onDidRequestRepoInterrupt = this._onDidRequestRepoInterrupt.event, this._onDidChangeIndexingStatus = this._register(new tt), this.onDidChangeIndexingStatus = this._onDidChangeIndexingStatus.event, this._onDidChangeIndexingProvider = this._register(new tt), this.onDidChangeIndexingProvider = this._onDidChangeIndexingProvider.event, this.onDidChangeIndexingGrepEnabled = en.None, this.isUriCursorIgnored = ()=>!1, this.repositoryIndexingError = this._register(new vb(void 0)), this.repositoryIndexingStatus = this._register(new vb({
            case: "loading"
        })), this.repositoryIndexingJobs = this._register(new vb({})), this.repositoryIndexingProgress = this._register(new vb(void 0)), this.indexingData = this._register(Xh(this.storageService, "indexingData")), this._indexingGrepEnabled = YBm({
            configuredValue: this.configurationService.getValue(o4t),
            inspection: this.configurationService.inspect(o4t),
            legacyValue: Dh(this.storageService, "indexingGrepEnabled")
        }), this.queryBuilder = this.instantiationService.createInstance(xCe), this.repositoryClientPromise = this.instantiationService.createInstance(cb, {
            service: ZKa
        }), this.aiServerClientPromise = this.instantiationService.createInstance(cb, {
            service: v4e
        }), this._register(en.fromObservableLight(this.indexingData)(()=>{
            this.indexMainLocalRepository();
        })), this._register(this.onDidChangeIndexingStatus(async (h)=>{
            const p = h?.globalStatus ?? await this.indexingProvider?.getGlobalStatus();
            if (p !== void 0) switch(p.case === "synced" && (this.repositoryLastSyncedTime = Date.now()), this.repositoryIndexingStatus.change(p), p.case){
                case "not-indexed":
                    break;
                case "not-auto-indexing":
                    break;
                case "error":
                    {
                        this.repositoryIndexingError.change(p.error);
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
                        const g = await this.getNewRepoInfo();
                        if (g === void 0) {
                            this.repositoryIndexingError.change(void 0);
                            return;
                        }
                        const f = g.repoName, _ = h?.codebases ?? await this.indexingProvider?.getCodebases();
                        if (_ === void 0) return;
                        const b = {};
                        let y = 0;
                        for (const S of _){
                            const k = h?.indexingProgressByCodebase?.[S] ?? await this.indexingProvider?.getIndexingProgress(S);
                            if (k === void 0) continue;
                            const C = h?.jobsByCodebase?.[S] ?? await this.indexingProvider?.getCurrentJobs(S);
                            C !== void 0 && (k > y && (y = k), b[S] = C);
                        }
                        this.repositoryIndexingProgress.change({
                            progress: y
                        }), this.repositoryIndexingJobs.change(b);
                        break;
                    }
                case "synced":
                    break;
                case "paused":
                    break;
                case "loading":
                    break;
                default:
                    return p;
            }
        }));
    }
    get indexingGrepEnabled() {
        return this._indexingGrepEnabled;
    }
    get primaryQueryOnlyIndex() {
        return this._primaryQueryOnlyIndex;
    }
    setQueryOnlyIndex(t) {
        this._primaryQueryOnlyIndex = t;
    }
    get suppressFileExtensionRecommendations() {
        return Date.now() - (this._suppressFileExtensionRecommendationsStart ?? 0) < 2e3;
    }
    async getEmbeddableFilesPath() {
        const t = await this.indexingProvider?.getEmbeddableFilesPath();
        return t ? rt.from(t) : void 0;
    }
    setIsUriCursorIgnored(t) {
        this.isUriCursorIgnored = t;
    }
    registerIndexingProvider(t) {
        this.indexingProvider = t, this._onDidChangeIndexingProvider.fire();
    }
    unregisterIndexingProvider() {
        this.indexingProvider = void 0, this._onDidChangeIndexingProvider.fire();
    }
    registerGrepProvider(t) {
        this.grepProvider = t;
    }
    unregisterGrepProvider() {
        this.grepProvider = void 0;
    }
    fireOnDidChangeIndexingStatus(t) {
        this._onDidChangeIndexingStatus.fire(t);
    }
    unregisterOnDidChangeIndexingStatus() {}
    async getNewRepoInfo() {
        const t = Date.now();
        for(; !this.indexingProvider && Date.now() - t < 500;)await new Promise((s)=>setTimeout(s, 100));
        if (!this.isIndexedMainLocalRepository()) {
            if (this.primaryQueryOnlyIndex) return this.primaryQueryOnlyIndex.repositoryInfo;
            const s = this.indexingProvider?.getQueryOnlyRepoInfo(), o = 5e3;
            let a;
            const l = s ? new Promise((c)=>{
                a = setTimeout(()=>{
                    this.structuredLogService.debug("composer", "IndexingProvider.getQueryOnlyRepoInfo timed out", {
                        operation: "IndexingProvider.getQueryOnlyRepoInfo",
                        timeoutMs: o,
                        indexingProviderRegistered: this.indexingProvider !== void 0
                    }), c(void 0);
                }, o);
            }) : void 0;
            if (this.queryOnlyIndexFromIndexProvider = s ? await (async ()=>{
                try {
                    return await Promise.race([
                        s,
                        l
                    ]);
                } finally{
                    a !== void 0 && clearTimeout(a);
                }
            })() : void 0, this.queryOnlyIndexFromIndexProvider) return this.queryOnlyIndexFromIndexProvider.repositoryInfo;
        }
        const e = this.indexingProvider?.getRepoInfo(), n = 5e3;
        let i;
        const r = e ? new Promise((s)=>{
            i = setTimeout(()=>{
                this.structuredLogService.debug("composer", "IndexingProvider.getRepoInfo timed out", {
                    operation: "IndexingProvider.getRepoInfo",
                    timeoutMs: n,
                    indexingProviderRegistered: this.indexingProvider !== void 0
                }), s(void 0);
            }, n);
        }) : void 0;
        return e ? await (async ()=>{
            try {
                return await Promise.race([
                    e,
                    r
                ]);
            } finally{
                i !== void 0 && clearTimeout(i);
            }
        })() : void 0;
    }
    async getPathEncryptionKey() {
        const t = Date.now();
        for(; !this.indexingProvider && Date.now() - t < 5e3;)await new Promise((e)=>setTimeout(e, 100));
        return await this.indexingProvider?.getPathEncryptionKey();
    }
    isIndexedRepository() {
        return this.isIndexedMainLocalRepository() || this.primaryQueryOnlyIndex !== void 0 || this.queryOnlyIndexFromIndexProvider !== void 0;
    }
    getQueryOnlyIndex() {
        let t = this.primaryQueryOnlyIndex;
        return t === void 0 && (t = this.queryOnlyIndexFromIndexProvider), t;
    }
    getOverridePathEncryptionKey(t) {
        const e = this.getQueryOnlyIndex();
        if (e !== void 0 && t.repoName === e.repositoryInfo.repoName && t.repoOwner === e.repositoryInfo.repoOwner) return e.pathEncryptionKey;
    }
    maybeGetQueryOnlyRepoAccess(t) {
        const e = this.getQueryOnlyIndex();
        if (!(e === void 0 || t === void 0) && t.repoName === e.repositoryInfo.repoName && t.repoOwner === e.repositoryInfo.repoOwner) return e.queryOnlyRepoAccess;
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
    isIndexedMainLocalRepository(t) {
        const e = t?.indexingProgressThreshold ?? .8;
        if (this.getIndexingProgress() >= e) return !0;
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
        const t = await this.getNewRepoInfo();
        if (t === void 0) return;
        await (await this.repositoryClientPromise.get()).removeRepositoryV2(new n3o({
            repository: t
        }), {
            headers: vh(Ai())
        }), this._onDidRequestRepoInterrupt.fire(!1), this.repositoryIndexingStatus.change({
            case: "not-indexed"
        }), this.repositoryIndexingProgress.change({
            progress: 0
        }), this.repositoryIndexingJobs.change({});
    }
    async pauseIndexingJob() {
        this._onDidRequestRepoInterrupt.fire(!0);
    }
    registerDiffProvider(t) {
        return this.diffProvider = t, Pn(()=>{
            this.diffProvider === t && (this.diffProvider = null);
        });
    }
    dispose() {
        super.dispose(), this.clearPollingIntervalFunction(), this.clearRepositoryIntervalFunction();
    }
    repositoryToInfo(t) {
        const e = t.provider.remotes;
        if (e === void 0) return null;
        if (e.length === 0) throw new Error("No remotes found");
        const i = e[0].fetchUrl?.split(/\/|\:/);
        if (i === void 0) throw new Error("Could not parse origin url");
        const r = i[i.length - 2], s = i[i.length - 1].split(".")[0];
        if (r === void 0 || s === void 0) throw new Error("Could not parse repo owner and name");
        return {
            id: t.id,
            repoName: s,
            repoOwner: r,
            relativeWorkspacePath: _G1(t)
        };
    }
    async codeBlockFromRemote(t) {
        const e = t.relativeWorkspacePath, n = this.workspaceContextService.resolveRelativePath(e);
        let i, r = null;
        try {
            this._suppressFileExtensionRecommendationsStart = Date.now(), i = await this.textModelService.createModelReference(n, !0);
            const s = t.range;
            if (s === void 0 || s.startPosition === void 0 || s.endPosition === void 0) return console.log(`[Cpp] Skipping ${t.relativeWorkspacePath} because it has an invalid range`), null;
            let o, a = [], l;
            const c = [];
            l = i.object.textEditorModel.getValueInRange({
                startLineNumber: s.startPosition.line,
                startColumn: s.startPosition.column,
                endLineNumber: s.endPosition.line,
                endColumn: s.endPosition.column
            }), o = l;
            for (const [d, h] of l.split(`
`).entries())c.push({
                lineNumber: d + (s.startPosition?.line - 1) + 1,
                text: h,
                isSignature: !1
            });
            const u = t.signatures?.ranges;
            if (u) {
                u.sort((h, p)=>!h.startPosition || !p.startPosition ? 0 : h.startPosition.line !== p.startPosition.line ? h.startPosition.line - p.startPosition.line : (h.startPosition.column ?? 0) - (p.startPosition.column ?? 0));
                const d = vG1(u);
                for (const h of d){
                    if (h === void 0 || h.startPosition === void 0 || h.endPosition === void 0) {
                        a.push("");
                        continue;
                    }
                    if (h.endPosition.line >= s.startPosition.line) {
                        a.push("");
                        continue;
                    }
                    a.push(i.object.textEditorModel.getValueInRange({
                        startLineNumber: h.startPosition.line,
                        startColumn: h.startPosition.column,
                        endLineNumber: h.endPosition.line,
                        endColumn: Math.min(i.object.textEditorModel.getLineLength(h.endPosition.line) + 1, h.endPosition.column)
                    }).trimEnd());
                }
                if (a.length !== 0) {
                    let h = "", p = 0;
                    for (const [g, f] of [
                        ...a,
                        o
                    ].entries()){
                        if (g < a.length && f === "") continue;
                        let _;
                        if (g < a.length) {
                            for (const [S, k] of f.split(`
`).entries())c.push({
                                lineNumber: S + (d[g]?.startPosition?.line ?? 1),
                                text: k,
                                isSignature: !0
                            });
                            _ = d[g]?.startPosition?.line ?? 1;
                        } else _ = s.startPosition?.line ?? 1;
                        if (g === 0) {
                            h += f;
                            continue;
                        }
                        const b = f.match(/^\s*/);
                        let y;
                        b ? y = b[0] : y = "", h += `
` + y + `...
` + f, c.push({
                            lineNumber: _ - .5,
                            text: y + "...",
                            isSignature: !0
                        });
                    }
                    o = h;
                }
            }
            c.sort((d, h)=>d.lineNumber - h.lineNumber), r = {
                detailedLines: c,
                contents: o,
                originalContents: l,
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
        const t = await (async ()=>{
            if (this.cursorCredsService.getRepoBackendUrl().includes("cursor.sh") && !this.cursorCredsService.getBackendUrl().includes("cursor.sh")) {
                const n = this.serverConfigService.cachedServerConfig;
                if (n.indexingConfig?.repo42AuthToken) return n.indexingConfig.repo42AuthToken;
            }
            return await this._cursorAuthenticationService.getAccessToken();
        })();
        return t ? this._cursorAuthenticationService.getAuthIdFromToken(t) : void 0;
    }
    async compileGlobFilterFromPattern(t) {
        if (this.indexingProvider === void 0) throw new Error("Indexing provider not found");
        const e = {
            globFilter: t?.globFilter ?? await this.compilePatternIntoGlobFilter(t?.includePattern),
            notGlobFilter: await this.compilePatternIntoGlobFilter(t?.excludePattern),
            overridePathEncryptionKey: t.overridePathEncryptionKey ?? this.getOverridePathEncryptionKey(t.repoInfo)
        };
        return await this.indexingProvider.compileGlobFilter(e);
    }
    syncIndexWithGivenRepositoryInfo(t) {
        this._onDidRequestRepoInterrupt.fire(!0), this._onDidRequestRepoIndex.fire({
            forceOverrideRepoInfo: t
        });
    }
    indexMainLocalRepository() {
        this._cursorAuthenticationService.isAuthenticated() && (this._onDidRequestRepoInterrupt.fire(!0), this._onDidRequestRepoIndex.fire(void 0));
    }
    interruptLocalRepository(t) {
        t.id === SFa.id && this._onDidRequestRepoInterrupt.fire(!1);
    }
    async convertToLocalBlock(t) {
        try {
            const e = await this.codeBlockFromRemote(t);
            return e ? e.contents !== void 0 && e.contents.length > 2e4 ? (console.log(`[Cpp] Skipping ${t.relativeWorkspacePath} because it's too big`), null) : e : (console.log(`[Cpp] Skipping ${t.relativeWorkspacePath} because it couldn't be converted to a local block`), null);
        } catch (e) {
            return console.error("Failed to convert code block to local block:", e), null;
        }
    }
    async compilePatternIntoGlobFilter(t) {
        if (t === void 0) return;
        const e = yG1(t);
        this.telemetryService.publicLogCapture("SimpleGlobPattern.Attempted");
        const n = await this.generateSimpleGlobPattern(e);
        if (n !== void 0) return this.telemetryService.publicLogCapture("SimpleGlobPattern.Success"), n;
        this.telemetryService.publicLogCapture("SimpleGlobPattern.Fallback");
        const i = this.queryBuilder.parseSearchPaths(e);
        if (i.pattern !== void 0) return kG1(i.pattern);
    }
    async generateSimpleGlobPattern(t) {
        return bG1(t, this.fileService, this.workspaceContextService);
    }
}, FJr = Re([
    F(0, ss),
    F(1, Ub),
    F(2, is),
    F(3, Uv),
    F(4, Rh),
    F(5, yr),
    F(6, Qb),
    F(7, dn),
    F(8, dd),
    F(9, yi),
    F(10, ki),
    F(11, wh)
], FJr), bn(vie, FJr, 1), ZBm = class extends sn {
    constructor(){
        super({
            id: mcd,
            title: {
                value: "Set Query Only Index",
                original: "Set Query Only Index"
            },
            f1: !1
        });
    }
    run(t, { queryOnlyRepositoryInfo: e }) {
        t.get(vie).setQueryOnlyIndex(e);
    }
}, Ht(ZBm);

}
