import { C_y, D, Di, Ga, Gt, Nt, Pn, Qe, Tr, Vn, en, st, x5, xa } from "./Iwo.js";
import { Ik } from "./LYd.js";
import { osk } from "./anythingQuickAccess.css";
import { Eel, vsk } from "./anythingQuickAccessConfig.js";
import { cG, ule } from "./appLayoutService.js";
import { bo } from "./arrays.js";
import { nW, qn } from "./async.js";
import { MKm, csk } from "./cacheState.js";
import { gs, yt } from "./codicons.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Sv } from "./composerMessageStorageService.js";
import { or, yi } from "./configuration.js";
import { Abe, X6e } from "./cppEventLogger.js";
import { AE, S2 } from "./cursorIgnoreService.js";
import { OCe, OPe } from "./customEditorLabelService.js";
import { Wo, cB, gr, p2 } from "./editorService.js";
import { Wm, od } from "./editor_2.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { is, ms } from "./files.js";
import { YI, fT } from "./filesConfigurationService.js";
import { kJ } from "./fuzzyScorer.js";
import { ask, lsk, ons } from "./gYa.js";
import { EB } from "./getIconClasses.js";
import { LCe, WKm } from "./gotoSymbolQuickAccess_2.js";
import { hV, sI } from "./history_3.js";
import { tRe } from "./iconLabels.js";
import { It, dn } from "./instantiation.js";
import { Nx, gyi, pR } from "./ipa.js";
import { Al, ru } from "./keybinding.js";
import { Yp, qg } from "./label.js";
import { Kp, Ph } from "./language.js";
import { ES, hP } from "./lazy.js";
import { Ji, Li } from "./log.js";
import { du, gd } from "./map.js";
import { dd, xp } from "./model.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Rd, ih } from "./pathService.js";
import { EC, Ul, lh, nL } from "./path_2.js";
import { Ipe, PGt, RGt } from "./pickerQuickAccess.js";
import { Eo, Fi } from "./platform_2.js";
import { f4e, xCe } from "./queryBuilder.js";
import { e4e, ewi, kqe } from "./quickAccess.js";
import { Cl, Dqo, Gu, vz, x7 } from "./quickInput.js";
import { PCi, Zqt } from "./quickaccess_3.js";
import { Qs, qt } from "./range.js";
import { Em, Rh } from "./resolverService.js";
import { Lr, Mc, l7 } from "./resources.js";
import { ICe, wL } from "./search_2.js";
import { ACi } from "./search_3.js";
import { cle, lG } from "./selectedContext.js";
import { Q0 } from "./sentry.js";
import { DKm, I4e } from "./symbolsQuickAccess.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { V4, rF } from "./workingCopyService.js";
import { Sr, yr } from "./workspace.js";
import { Jz, OB, lwi } from "./yBp.js";
import { yBt } from "./ze.js";
var zKm, VKm, DP;
export { DP, VKm, zKm };
var __wakaru_ans_initialized = false;
export function ans() {
if (__wakaru_ans_initialized) return;
__wakaru_ans_initialized = true;
"use strict";
E(), osk(), Gu(), PGt(), kJ(), f4e(), It(), ACi(), wL(), Sr(), Nx(), ih(), fn(), Lr(), fo(), ms(), Qe(), qg(), EB(), xp(), Kp(), Bt(), V4(), or(), od(), Wo(), Qs(), qn(), csk(), _s(), Q0(), hV(), Ki(), YI(), du(), DKm(), kqe(), Zqt(), WKm(), Em(), Gt(), gs(), ta(), Vp(), tRe(), hP(), ru(), Eo(), Ji(), OPe(), vsk(), cle(), X6e(), S2(), Ul(), Di(), Ga(), ule(), Pl(), bo(), zKm = D(9348, null), VKm = class extends st {
    constructor(t, e){
        super(), this.provider = t, this.picker = void 0, this.scorerCache = Object.create(null), this.fileQueryCache = void 0, this.lastOriginalFilter = void 0, this.lastFilter = void 0, this.lastRange = void 0, this.lastGlobalPicks = void 0, this.isQuickNavigating = void 0, this.editorViewState = this._register(e.createInstance(PCi));
    }
    dispose() {
        this.fileQueryCache?.dispose(), this.fileQueryCache = void 0, super.dispose();
    }
    set(t) {
        this.picker = t, en.once(t.onDispose)(()=>{
            t === this.picker && (this.picker = void 0);
        });
        const e = !!t.quickNavigate;
        e || (this.fileQueryCache = this.provider.createFileQueryCache(), this.scorerCache = Object.create(null)), this.isQuickNavigating = e, this.lastOriginalFilter = void 0, this.lastFilter = void 0, this.lastRange = void 0, this.lastGlobalPicks = void 0, this.editorViewState.reset();
    }
}, DP = class extends RGt {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I, A, P, M){
        super(DP.PREFIX, {
            canAcceptInBackground: !0
        }), this.instantiationService = t, this.searchService = e, this.contextService = n, this.appLayoutService = i, this.pathService = r, this.environmentService = s, this.fileService = o, this.labelService = a, this.modelService = l, this.languageService = c, this.workingCopyService = u, this.configurationService = d, this.editorService = h, this.historyService = p, this.filesConfigurationService = g, this.textModelService = f, this.uriIdentityService = _, this.quickInputService = b, this.keybindingService = y, this.logService = S, this.customEditorLabelService = k, this.workspaceContextService = C, this.selectedContextService = T, this.cursorIgnoreService = I, this.cppEventLoggerService = A, this.composerDataService = P, this.experimentService = M, this.labelOnlyEditorHistoryPickAccessor = new Dqo({
            skipDescription: !0
        }), this.fileQueryDelayer = this._register(new nW(DP.TYPING_SEARCH_DELAY)), this.lazyRegistry = new ES(()=>Fi.as(e4e.Quickaccess)), this.pickState = this._register(new VKm(this, this.instantiationService)), this.fileQueryBuilder = this.instantiationService.createInstance(xCe), this.workspaceSymbolsQuickAccess = this._register(this.instantiationService.createInstance(I4e)), this.editorSymbolsQuickAccess = this.instantiationService.createInstance(LCe);
    }
    get scorerCache() {
        return this.pickState.scorerCache;
    }
    get defaultFilterValue() {
        if (this.configuration.preserveInput) return ewi.LAST;
    }
    get configuration() {
        const t = this.configurationService.getValue().workbench?.editor, e = this.configurationService.getValue().search, n = this.configurationService.getValue().workbench.quickOpen;
        return {
            openEditorPinned: !t?.enablePreviewFromQuickOpen || !t?.enablePreview,
            openSideBySideDirection: t?.openSideBySideDirection,
            includeSymbols: e?.quickOpen.includeSymbols,
            includeHistory: e?.quickOpen.includeHistory,
            historyFilterSortOrder: e?.quickOpen.history.filterSortOrder,
            preserveInput: n.preserveInput,
            useVscodeSearch: e?.quickOpen.useVscodeSearch ?? !1
        };
    }
    provide(t, e, n) {
        const i = new Nt;
        this.pickState.set(t), i.add(t.onDidAccept(()=>{
            const s = [], o = new Map;
            for (const a of t.items){
                if (a.type === "separator") {
                    s.push({
                        type: "separator",
                        separatorLabel: a.label ?? ""
                    });
                    continue;
                }
                if (a.type === "section") {
                    s.push({
                        type: "section",
                        sectionHeader: a.label ?? ""
                    });
                    continue;
                }
                a.resource && (s.push({
                    type: "resource",
                    resource: a.resource
                }), o.set(a, s.length - 1));
            }
        }));
        const r = i.add(new Vn);
        return i.add(t.onDidChangeActive(()=>{
            r.value = void 0;
            const [s] = t.activeItems;
            ons(s) && (r.value = this.decorateAndRevealSymbolRange(s));
        })), i.add(en.once(t.onDidHide)(({ reason: s })=>{
            s === vz.Gesture && this.pickState.editorViewState.restore();
        })), i.add(super.provide(t, e, n)), i;
    }
    decorateAndRevealSymbolRange(t) {
        const e = this.editorService.activeEditor;
        if (!this.uriIdentityService.extUri.isEqual(t.resource, e?.resource)) return st.None;
        const n = this.editorService.activeTextEditorControl;
        return n ? (this.pickState.editorViewState.set(), n.revealRangeInCenter(t.range.selection, 0), this.addDecorations(n, t.range.decoration), Pn(()=>this.clearDecorations(n))) : st.None;
    }
    _getPicks(t, e, n, i) {
        const r = lsk(t, [
            LCe.PREFIX
        ]);
        let s;
        if (r ? s = r.filter : s = t, this.pickState.lastRange = r?.range, t !== this.pickState.lastOriginalFilter && s === this.pickState.lastFilter) return null;
        const o = !!this.pickState.lastOriginalFilter;
        this.pickState.lastOriginalFilter = t, this.pickState.lastFilter = s;
        const a = this.pickState.picker?.items, l = this.pickState.picker?.activeItems[0];
        if (a && l) {
            const c = ons(l), u = l === DP.NO_RESULTS_PICK && s.indexOf(LCe.PREFIX) >= 0;
            !c && !u && (this.pickState.lastGlobalPicks = {
                items: a,
                active: l
            });
        }
        return this.doGetPicks(s, {
            ...i,
            enableEditorSymbolSearch: o
        }, e, n);
    }
    initializeCaches() {
        this.reportInitializeCachesToSentry(), this.pickState.fileQueryCache = this.createFileQueryCache(), this.pickState.scorerCache = Object.create(null);
    }
    reportInitializeCachesToSentry() {
        try {
            if (!this.experimentService.getDynamicConfig("ripgrep_invocation_monitor_config", {
                disableExposureLog: !0
            }).report_initialize_caches) return;
            const e = this.pickState.fileQueryCache;
            Sv(new Error("QuickOpen file cache (re)initialized"), {
                captureContext: {
                    level: "info",
                    tags: {
                        client_error_type: "quickopen_cache_init",
                        force_upload: "forced"
                    },
                    extra: {
                        workspaceFolderCount: this.contextService.getWorkspace().folders.length,
                        existingCacheKey: e?.cacheKey ?? null,
                        existingCacheLoaded: !!e?.isLoaded,
                        existingCacheUpdating: !!e?.isUpdating
                    }
                }
            });
        } catch  {}
    }
    doGetPicksPublic(t, e, n, i) {
        return this.doGetPicks(t, e, n, i);
    }
    doGetPicks(t, e, n, i) {
        return this.configuration.useVscodeSearch ? this.doGetVscodePicks(t, e, n, i) : this.doGetCursorPicks(t, e, n, i);
    }
    doGetVscodePicks(t, e, n, i) {
        const r = OB(t);
        if (e.enableEditorSymbolSearch) {
            const c = this.getEditorSymbolPicks(r, n, i);
            if (c) return c;
        }
        const s = this.pickState.picker?.activeItems[0];
        if (ons(s) && this.pickState.lastGlobalPicks) return this.pickState.lastGlobalPicks;
        const o = this.getEditorHistoryPicks(r), a = e.additionPicks?.filter((c)=>c.type !== "section");
        let l = new Array;
        if (a) for (const c of a){
            if (c.type === "separator") {
                l.push(c);
                continue;
            }
            if (!r.original) {
                c.highlights = void 0, l.push(c);
                continue;
            }
            const { score: u, labelMatch: d, descriptionMatch: h } = Jz(c, r, !0, x7, this.pickState.scorerCache);
            u && (c.highlights = {
                label: d,
                description: h
            }, l.push(c));
        }
        return this.pickState.isQuickNavigating ? (l.length > 0 && l.push({
            type: "separator",
            label: D(9350, null)
        }), l = o) : (e.includeHelp && l.push(...this.getHelpPicks(r, i, e)), o.length !== 0 && (l.push({
            type: "separator",
            label: D(9351, null)
        }), l.push(...o))), {
            picks: e.filter ? l.filter((c)=>e.filter?.(c)) : l,
            additionalPicks: (async ()=>{
                const c = new gd((d)=>this.uriIdentityService.extUri.getComparisonKey(d));
                for (const d of o)d.resource && c.set(d.resource, !0);
                let u = await this.getVscodeAdditionalPicks(r, c, this.configuration.includeSymbols, i);
                return e.filter && (u = u.filter((d)=>e.filter?.(d))), i.isCancellationRequested ? [] : u.length > 0 ? [
                    {
                        type: "separator",
                        label: this.configuration.includeSymbols ? D(9352, null) : D(9353, null)
                    },
                    ...u
                ] : [];
            })(),
            mergeDelay: DP.SYMBOL_PICKS_MERGE_DELAY
        };
    }
    doGetCursorPicks(t, e, n, i) {
        const r = e?.excludeCursorIgnore ?? !1, s = OB(t), o = (u)=>u.filter((d)=>!("resource" in d && d.resource && this.cursorIgnoreService.shouldBlockUriFromReading(d.resource)));
        if (e.enableEditorSymbolSearch) {
            const u = this.getEditorSymbolPicks(s, n, i);
            if (u) return u;
        }
        const a = this.pickState.picker?.activeItems[0];
        if (ons(a) && this.pickState.lastGlobalPicks) return this.pickState.lastGlobalPicks;
        let l = r ? o(this.getEditorHistoryPicks(s)) : this.getEditorHistoryPicks(s), c = new Array;
        if (e.additionPicks) for (const u of e.additionPicks){
            if (u.type === "separator") {
                c.push(u);
                continue;
            }
            if (u.type === "section") {
                c.push(u);
                continue;
            }
            if (!s.original) {
                u.highlights = void 0, c.push(u);
                continue;
            }
            const { score: d, labelMatch: h, descriptionMatch: p } = Jz(u, s, !0, x7, this.pickState.scorerCache);
            d && (u.highlights = {
                label: h,
                description: p
            }, c.push(u));
        }
        return this.pickState.isQuickNavigating ? (c.length > 0 && c.push({
            type: "separator",
            label: D(9354, null)
        }), c = l) : (e.includeHelp && c.push(...this.getHelpPicks(s, i, e)), l.length !== 0 && (c.push({
            type: "separator",
            label: D(9355, null)
        }), c.push(...l))), r && (c = c.filter((u)=>u.type === "separator" || !("resource" in u) || !u.resource || !this.cursorIgnoreService.shouldBlockUriFromReading(u.resource))), {
            picks: e.filter ? c.filter((u)=>e.filter?.(u)) : c,
            additionalPicks: (async ()=>{
                const u = new gd;
                for (const b of l)b.resource && u.set(b.resource, !0);
                let { highScoringPicks: d, lowScoringPicks: h } = await this.getCursorAdditionalPicks(s, u, this.configuration.includeSymbols, i);
                if (r && (d = o(d), h = o(h)), e.filter && (d = d.filter(e.filter), h = h.filter(e.filter)), i.isCancellationRequested) return [];
                let p = [];
                const g = this.configuration.includeSymbols ? D(9356, null) : D(9357, null);
                if (!(c.some((b)=>b !== DP.NO_RESULTS_PICK && b.type !== "separator" && b.type !== "section") || d.length > 0 || h.length > 0 || l.length > 0) && this.isValidFilePath(t)) {
                    const b = this.createFilePicksForPath(t);
                    p = [
                        DP.NO_RESULTS_PICK,
                        ...b.slice(1)
                    ];
                } else e.excludeSemanticSearch ? (p = [
                    ...d,
                    ...h
                ], p = p.length > 0 ? [
                    {
                        type: "separator",
                        label: g
                    },
                    ...p
                ] : []) : (d.length > 0 && (p = [
                    ...p,
                    {
                        type: "separator",
                        label: g
                    },
                    ...d
                ]), h.length > 0 && (p = [
                    ...p,
                    {
                        type: "separator",
                        label: zKm
                    },
                    ...h
                ]));
                return p;
            })(),
            mergeDelay: e.isFromComposer ? this.configuration.includeSymbols ? DP.SYMBOL_PICKS_MERGE_DELAY : 50 : DP.SYMBOL_PICKS_MERGE_DELAY
        };
    }
    async getVscodeAdditionalPicks(t, e, n, i) {
        const [r, s] = await Promise.all([
            this.getFilePicks(t, e, i),
            this.getWorkspaceSymbolPicks(t, n, i)
        ]);
        if (i.isCancellationRequested) return [];
        const o = C_y([
            ...r,
            ...s
        ], (l, c)=>lwi(l, c, t, !0, x7, this.pickState.scorerCache), DP.MAX_RESULTS), a = [];
        for (const l of o)if (l.highlights) a.push(l);
        else {
            const { score: c, labelMatch: u, descriptionMatch: d } = Jz(l, t, !0, x7, this.pickState.scorerCache);
            if (!c) continue;
            l.highlights = {
                label: u,
                description: d
            }, a.push(l);
        }
        return a;
    }
    async getCursorAdditionalPicks(t, e, n, i) {
        const [r, s] = await Promise.all([
            this.getFilePicks(t, e, i),
            this.getWorkspaceSymbolPicks(t, n, i)
        ]);
        if (i.isCancellationRequested) return {
            highScoringPicks: [],
            lowScoringPicks: []
        };
        const o = [
            ...r,
            ...s
        ];
        o.sort((f, _)=>lwi(f, _, t, !0, x7, this.pickState.scorerCache));
        const a = Eel.HIGH_SCORING_THRESHOLD, l = Eel.HIGH_SCORING_CAP_ITEMS, c = [], u = [];
        for (const f of o){
            const { score: _, labelMatch: b, descriptionMatch: y } = Jz(f, t, !0, x7, this.pickState.scorerCache), S = {
                ...f,
                highlights: {
                    label: b,
                    description: y
                }
            };
            if (_ >= a && c.length < l ? c.push(S) : u.push(S), c.length + u.length >= DP.MAX_RESULTS) break;
        }
        const d = DP.MAX_RESULTS, h = Math.min(c.length, d), p = Math.min(u.length, d - h);
        return {
            highScoringPicks: c.filter((f)=>{
                const _ = [
                    ...f.highlights?.label ?? [],
                    ...f.highlights?.description ?? []
                ];
                return (t.values?.length ?? 1) <= 1 ? f : _.reduce((y, S)=>y + (S.end - S.start), 0) / _.length > 3;
            }).slice(0, h),
            lowScoringPicks: u.slice(0, p)
        };
    }
    getEditorHistoryPicks(t) {
        const e = this.configuration;
        if (!t.normalized) return this.historyService.getHistory().filter((r)=>{
            const s = r.resource;
            return !s || !s.path.includes("/.cursor/worktrees/");
        }).map((r)=>this.createAnythingPick(r, e));
        if (!this.configuration.includeHistory) return [];
        const n = t.containsPathSeparator ? x7 : this.labelOnlyEditorHistoryPickAccessor, i = [];
        for (const r of this.historyService.getHistory()){
            const s = r.resource;
            if (!s || !this.fileService.hasProvider(s) && s.scheme !== Ot.untitled && s.scheme !== Ot.vscodeTerminal && s.scheme !== Ot.aiChat || s.path.includes("/.cursor/worktrees/")) continue;
            const o = this.createAnythingPick(r, e), { score: a, labelMatch: l, descriptionMatch: c } = Jz(o, t, !1, n, this.pickState.scorerCache);
            a && (o.highlights = {
                label: l,
                description: c
            }, i.push(o));
        }
        return this.configuration.historyFilterSortOrder === "recency" ? i : i.sort((r, s)=>lwi(r, s, t, !1, n, this.pickState.scorerCache));
    }
    getEditorHistoryPickerItems(t) {
        return this.getEditorHistoryPicks(OB(t));
    }
    createFileQueryCache() {
        return new MKm((t)=>this.fileQueryBuilder.file(this.getScopedFoldersForSearch(), this.getFileQueryOptions({
                cacheKey: t
            })), (t)=>this.quickAccessFileSearch(t), (t)=>this.searchService.clearCache(t), this.pickState.fileQueryCache, DP.FILE_QUERY_CACHE_REINIT_COOLDOWN_MS).load();
    }
    getScopedFoldersForSearch() {
        const t = this.contextService.getWorkspace().folders;
        return t.length === 0, t;
    }
    shouldSuppressFileSearch() {
        const t = this.getScopedFoldersForSearch();
        return t.length > 0 && t.every((e)=>{
            const n = rt.isUri(e) ? e.scheme : e.uri.scheme;
            return n === Ot.vscodeRemote && !this.searchService.schemeHasFileSearchProvider(n);
        });
    }
    quickAccessFileSearch(t, e) {
        return this.shouldSuppressFileSearch() ? Promise.resolve({
            results: [],
            messages: [],
            limitHit: !1
        }) : this.searchService.fileSearch(t, e);
    }
    async getFilePicks(t, e, n, i) {
        if (!t.normalized) return [];
        const r = await this.getAbsolutePathFileResult(t, n);
        if (n.isCancellationRequested) return [];
        let s;
        if (r) {
            if (e.has(r)) return [];
            const a = this.createAnythingPick(r, this.configuration);
            return a.highlights = {
                label: [
                    {
                        start: 0,
                        end: a.label.length
                    }
                ],
                description: a.description ? [
                    {
                        start: 0,
                        end: a.description.length
                    }
                ] : void 0
            }, [
                a
            ];
        }
        if (i?.skipTypingDelay || this.pickState.fileQueryCache?.isLoaded ? s = await this.doFileSearch(t, n) : s = await this.fileQueryDelayer.trigger(async ()=>n.isCancellationRequested ? [] : this.doFileSearch(t, n)), n.isCancellationRequested) return [];
        const o = this.configuration;
        return s.filter((a)=>!e.has(a)).map((a)=>this.createAnythingPick(a, o));
    }
    async doFileSearch(t, e) {
        const [n, i] = await Promise.all([
            this.getFileSearchResults(t, e),
            this.getRelativePathFileResults(t, e)
        ]);
        if (e.isCancellationRequested) return [];
        if (!i) return n;
        const r = new gd;
        for (const s of i)r.set(s, !0);
        return [
            ...n.filter((s)=>!r.has(s)),
            ...i
        ];
    }
    async getFileSearchResults(t, e) {
        let n = "";
        t.values && t.values.length > 1 ? n = t.values[0].original : n = t.original;
        const i = await this.doGetFileSearchResults(n, e);
        if (e.isCancellationRequested) return [];
        if (i.limitHit && t.values && t.values.length > 1) {
            const r = await this.doGetFileSearchResults(t.original, e);
            if (e.isCancellationRequested) return [];
            const s = new gd;
            for (const o of i.results)s.set(o.resource, !0);
            for (const o of r.results)s.has(o.resource) || i.results.push(o);
        }
        return i.results.map((r)=>r.resource);
    }
    doGetFileSearchResults(t, e) {
        const n = Date.now();
        return this.quickAccessFileSearch(this.fileQueryBuilder.file(this.getScopedFoldersForSearch(), this.getFileQueryOptions({
            filePattern: t,
            cacheKey: this.pickState.fileQueryCache?.cacheKey,
            maxResults: DP.MAX_RESULTS
        })), e).finally(()=>{
            this.logService.trace(`QuickAccess fileSearch ${Date.now() - n}ms`);
        });
    }
    getFileQueryOptions(t) {
        const e = [];
        return {
            _reason: "openFileHandler",
            extraFileResources: this.instantiationService.invokeFunction(ask),
            filePattern: t.filePattern || "",
            cacheKey: t.cacheKey,
            maxResults: t.maxResults || 0,
            sortByScore: !0,
            excludePattern: e
        };
    }
    async getAbsolutePathFileResult(t, e) {
        if (!t.containsPathSeparator) return;
        const n = await this.pathService.userHome(), i = gyi(t.original, n.scheme === Ot.file ? n.fsPath : n.path);
        if (e.isCancellationRequested) return;
        const r = (await this.pathService.path).isAbsolute(i);
        if (!e.isCancellationRequested && r) {
            const s = x5(await this.pathService.fileURI(i), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
            if (e.isCancellationRequested) return;
            try {
                if ((await this.fileService.stat(s)).isFile) return s;
            } catch  {}
        }
    }
    async getRelativePathFileResults(t, e) {
        if (!t.containsPathSeparator) return;
        if (!(await this.pathService.path).isAbsolute(t.original)) {
            const i = [];
            for (const r of this.contextService.getWorkspace().folders){
                if (e.isCancellationRequested) break;
                const s = x5(r.toResource(t.original), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
                try {
                    (await this.fileService.stat(s)).isFile && i.push(s);
                } catch  {}
            }
            return i;
        }
    }
    getHelpPicks(t, e, n) {
        return t.normalized ? [] : this.lazyRegistry.value.getQuickAccessProviders().filter((r)=>r.helpEntries.some((s)=>s.commandCenterOrder !== void 0)).flatMap((r)=>r.helpEntries.filter((s)=>s.commandCenterOrder !== void 0).map((s)=>{
                const o = {
                    ...n,
                    includeHelp: r.prefix === DP.PREFIX ? !1 : n?.includeHelp
                }, a = s.commandCenterLabel ?? s.description;
                return {
                    label: a,
                    description: s.prefix ?? r.prefix,
                    commandCenterOrder: s.commandCenterOrder,
                    keybinding: s.commandId ? this.keybindingService.lookupKeybinding(s.commandId) : void 0,
                    ariaLabel: D(9358, null, a, s.description),
                    accept: ()=>{
                        this.quickInputService.quickAccess.show(r.prefix, {
                            preserveValue: !0,
                            providerOptions: o
                        });
                    }
                };
            })).sort((r, s)=>r.commandCenterOrder - s.commandCenterOrder);
    }
    async getWorkspaceSymbolPicks(t, e, n) {
        return !t.normalized || !e || this.pickState.lastRange ? [] : this.workspaceSymbolsQuickAccess.getSymbolPicks(t.original, {
            skipLocal: !0,
            skipSorting: !0,
            delay: DP.TYPING_SEARCH_DELAY
        }, n);
    }
    getEditorSymbolPicks(t, e, n) {
        const i = t.original.split(LCe.PREFIX), r = i.length > 1 ? i[i.length - 1].trim() : void 0;
        if (typeof r != "string") return null;
        const s = this.pickState.lastGlobalPicks?.active;
        if (!s) return null;
        const o = s.resource;
        return !o || !this.fileService.hasProvider(o) && o.scheme !== Ot.untitled || (s.label.includes(LCe.PREFIX) || s.description?.includes(LCe.PREFIX)) && i.length < 3 ? null : this.doGetEditorSymbolPicks(s, o, r, e, n);
    }
    async doGetEditorSymbolPicks(t, e, n, i, r) {
        try {
            this.pickState.editorViewState.set(), await this.pickState.editorViewState.openTransientEditor({
                resource: e,
                options: {
                    preserveFocus: !0,
                    revealIfOpened: !0,
                    ignoreError: !0
                }
            });
        } catch  {
            return [];
        }
        if (r.isCancellationRequested) return [];
        let s = this.modelService.getModel(e);
        if (!s) try {
            const a = await this.textModelService.createModelReference(e);
            if (r.isCancellationRequested || i.isDisposed) return a.dispose(), [];
            i.add(a), s = a.object.textEditorModel;
        } catch  {
            return [];
        }
        const o = await this.editorSymbolsQuickAccess.getSymbolPicks(s, n, {
            extraContainerLabel: yBt(t.label)
        }, i, r);
        return r.isCancellationRequested ? [] : o.map((a)=>a.type === "separator" ? a : {
                ...a,
                resource: e,
                description: a.description,
                trigger: (l, c)=>(this.openAnything(e, {
                        keyMods: c,
                        range: a.range?.selection,
                        forceOpenSideBySide: !0
                    }), Ipe.CLOSE_PICKER),
                accept: (l, c)=>this.openAnything(e, {
                        keyMods: l,
                        range: a.range?.selection,
                        preserveFocus: c.inBackground,
                        forcePinned: c.inBackground
                    })
            });
    }
    addDecorations(t, e) {
        this.editorSymbolsQuickAccess.addDecorations(t, e);
    }
    clearDecorations(t) {
        this.editorSymbolsQuickAccess.clearDecorations(t);
    }
    createAnythingPick(t, e) {
        const n = !rt.isUri(t);
        let i, r, s, o, a, l;
        if (Ik(t)) i = Wm.getOriginalUri(t), r = t.getName(), s = t.getDescription(), o = t.isDirty() && !t.isSaving(), a = t.getLabelExtraClasses(), l = t.getIcon();
        else {
            i = rt.isUri(t) ? t : t.resource;
            const h = this.customEditorLabelService.getName(i);
            r = h || l7(i), s = this.labelService.getUriLabel(h ? i : Mc(i), {
                relative: !0
            }), o = this.workingCopyService.isDirty(i) && !this.filesConfigurationService.hasShortAutoSaveDelay(i), a = [];
        }
        const c = s ? `${r} ${s}` : r, u = new ES(()=>pR(this.modelService, this.languageService, i, void 0, l).concat(a)), d = new ES(()=>{
            const h = e.openSideBySideDirection, p = [];
            return p.push({
                iconClass: h === "right" ? Gn.asClassName(yt.splitHorizontal) : Gn.asClassName(yt.splitVertical),
                tooltip: D(h === "right" ? 9359 : 9360, null)
            }), n && p.push({
                iconClass: o ? "dirty-anything " + Gn.asClassName(yt.circleFilled) : Gn.asClassName(yt.close),
                tooltip: D(9361, null),
                alwaysVisible: o
            }), p;
        });
        return {
            resource: i,
            label: r,
            ariaLabel: o ? D(9362, null, c) : c,
            description: s,
            get iconClasses () {
                return u.value;
            },
            get buttons () {
                return d.value;
            },
            trigger: (h, p)=>{
                switch(h){
                    case 0:
                        return this.openAnything(t, {
                            keyMods: p,
                            range: this.pickState.lastRange,
                            forceOpenSideBySide: !0
                        }), Ipe.CLOSE_PICKER;
                    case 1:
                        if (!rt.isUri(t)) return this.historyService.removeFromHistory(t), Ipe.REMOVE_ITEM;
                }
                return Ipe.NO_ACTION;
            },
            accept: (h, p)=>this.openAnything(t, {
                    keyMods: h,
                    range: this.pickState.lastRange,
                    preserveFocus: p.inBackground,
                    forcePinned: p.inBackground
                })
        };
    }
    async openAnything(t, e) {
        const n = {
            preserveFocus: e.preserveFocus,
            pinned: e.keyMods?.ctrlCmd || e.forcePinned || this.configuration.openEditorPinned,
            selection: e.range ? qt.collapseToStart(e.range) : void 0
        }, i = e.keyMods?.alt || this.configuration.openEditorPinned && e.keyMods?.ctrlCmd || e.forceOpenSideBySide ? p2 : cB;
        if (i === p2 && await this.pickState.editorViewState.restore(), Ik(t)) await this.editorService.openEditor(t, n, i);
        else {
            let r;
            rt.isUri(t) ? r = {
                resource: t,
                options: n
            } : r = {
                ...t,
                options: {
                    ...t.options,
                    ...n
                }
            }, await this.editorService.openEditor(r, i);
        }
    }
    isValidFilePath(t) {
        return !t || t.trim().length === 0 || (t = t.trim(), /[\\/]$/.test(t)) ? !1 : !!((xa ? EC : lh).isAbsolute(t) || t.includes("/") || t.includes("\\") || /\.[a-zA-Z0-9]+$/.test(t));
    }
    createFilePicksForPath(t) {
        if (!this.isValidFilePath(t)) return [
            DP.NO_RESULTS_PICK
        ];
        const e = [];
        e.push(DP.NO_RESULTS_PICK);
        const n = nL(t.trim());
        return e.push({
            id: DP.CREATE_FILE_PICK_ID,
            label: D(9363, null, n),
            description: D(9364, null),
            iconClass: Gn.asClassName(yt.newFile),
            accept: async (i, r)=>{
                await this.createNewFile(n, i);
            }
        }), e;
    }
    async createNewFile(t, e) {
        try {
            let n;
            if ((xa ? EC : lh).isAbsolute(t)) n = rt.file(t);
            else {
                const s = this.contextService.getWorkspace().folders;
                if (s.length > 0) n = rt.joinPath(s[0].uri, t);
                else throw new Error("No workspace found");
            }
            const r = Mc(n);
            try {
                await this.fileService.stat(r);
            } catch  {
                await this.fileService.createFolder(r);
            }
            try {
                await this.fileService.stat(n), await this.openAnything(n, {
                    keyMods: e,
                    forceOpenSideBySide: e?.alt || e?.ctrlCmd
                });
            } catch  {
                await this.fileService.writeFile(n, Tr.fromString("")), await this.openAnything(n, {
                    keyMods: e,
                    forceOpenSideBySide: e?.alt || e?.ctrlCmd
                });
            }
        } catch (n) {
            await this.quickInputService.pick([], {
                placeHolder: D(9365, null, n.message)
            });
        }
    }
}, DP.PREFIX = "", DP.NO_RESULTS_PICK = {
    label: D(9349, null),
    isNoResults: !0
}, DP.CREATE_FILE_PICK_ID = "__createFile__", DP.MAX_RESULTS = 512, DP.TYPING_SEARCH_DELAY = 200, DP.SYMBOL_PICKS_MERGE_DELAY = 200, DP.FILE_QUERY_CACHE_REINIT_COOLDOWN_MS = 5e3, DP = Re([
    F(0, dn),
    F(1, ICe),
    F(2, yr),
    F(3, cG),
    F(4, Rd),
    F(5, ps),
    F(6, is),
    F(7, Yp),
    F(8, dd),
    F(9, Ph),
    F(10, rF),
    F(11, yi),
    F(12, gr),
    F(13, sI),
    F(14, fT),
    F(15, Rh),
    F(16, nh),
    F(17, Cl),
    F(18, Al),
    F(19, Li),
    F(20, OCe),
    F(21, yr),
    F(22, lG),
    F(23, AE),
    F(24, Abe),
    F(25, no),
    F(26, Cr)
], DP);

}
