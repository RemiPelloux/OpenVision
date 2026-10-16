import { INn, Qj, y_e } from "./A3u.js";
import { T1, mHs, sT } from "./De_3.js";
import { Ct, Fo, He, Olg, Oo, S, Se, XL, bt, cn, jn, rn, we, wi } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { K4v } from "./anythingQuickAccess.css";
import { lbo, tUv } from "./anythingQuickAccessConfig.js";
import { q5, uq } from "./appLayoutService.js";
import { dr } from "./arrays.js";
import { TO, bn } from "./async.js";
import { X4v, rlh } from "./cacheState.js";
import { Pe, _i } from "./codicons.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Km } from "./composerMessageStorageService.js";
import { Cn, qt } from "./configuration.js";
import { Gse, r1e } from "./cppEventLogger.js";
import { QM, R2 } from "./cursorIgnoreService.js";
import { Gde, ooe } from "./customEditorLabelService.js";
import { Ni, _1, hn, ib } from "./editorService.js";
import { vd, xc } from "./editor_2.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Fi, Ii } from "./files.js";
import { $w, aE } from "./filesConfigurationService.js";
import { S_e } from "./fuzzyScorer.js";
import { WM } from "./getIconClasses.js";
import { cbo, soe } from "./gotoSymbolQuickAccess_2.js";
import { c0, i8 } from "./history_3.js";
import { bW } from "./iconLabels.js";
import { Ze, _t } from "./instantiation.js";
import { no, qr } from "./keybinding.js";
import { dc, yu } from "./label.js";
import { kl, pc } from "./language.js";
import { Yf, qC } from "./lazy.js";
import { Qn, Wn } from "./log.js";
import { Mc, oc } from "./map.js";
import { Ll, fc } from "./model.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { fu, zl } from "./pathService.js";
import { Cw, Eu, ba, gD } from "./path_2.js";
import { L$, Rde, Uee } from "./pickerQuickAccess.js";
import { kn, rr } from "./platform_2.js";
import { _re, ay } from "./qIc.js";
import { nq, qee } from "./queryBuilder.js";
import { IX, P$, pWt } from "./quickAccess.js";
import { Gs, Iis, Ya, v5e, wre } from "./quickInput.js";
import { A1e, qGt } from "./quickaccess_3.js";
import { dt, qi } from "./range.js";
import { Nl, bc } from "./resolverService.js";
import { Li, mM, ml } from "./resources.js";
import { DX, sE } from "./search_2.js";
import { Zet } from "./search_3.js";
import { WX, aoe } from "./selectedContext.js";
import { Lk } from "./sentry.js";
import { Hde, q_o } from "./symbolsQuickAccess.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ea, rl } from "./uriIdentity.js";
import { $D, dL } from "./workingCopyService.js";
import { Jn, ci } from "./workspace.js";
import { KKi, OKi, Y4v } from "./xmo.js";
var glh, flh, qE;
export { flh, glh, qE };
var __wakaru_YKi_initialized = false;
export function YKi() {
if (__wakaru_YKi_initialized) return;
__wakaru_YKi_initialized = true;
"use strict";
x(), K4v(), Ya(), Rde(), S_e(), qee(), Ze(), Zet(), sE(), ci(), sT(), fu(), Qt(), Li(), Vr(), Fi(), Se(), yu(), WM(), Ll(), kl(), rt(), dL(), Cn(), xc(), Ni(), qi(), bn(), X4v(), qs(), Lk(), i8(), li(), aE(), oc(), q_o(), IX(), A1e(), cbo(), Nl(), bt(), _i(), Sr(), rl(), bW(), qC(), no(), rr(), Qn(), Gde(), tUv(), aoe(), r1e(), R2(), ba(), jn(), Fo(), uq(), nl(), dr(), glh = S(9348, null), flh = class extends we {
    constructor(e, t){
        super(), this.provider = e, this.picker = void 0, this.scorerCache = Object.create(null), this.fileQueryCache = void 0, this.lastOriginalFilter = void 0, this.lastFilter = void 0, this.lastRange = void 0, this.lastGlobalPicks = void 0, this.isQuickNavigating = void 0, this.editorViewState = this._register(t.createInstance(qGt));
    }
    dispose() {
        this.fileQueryCache?.dispose(), this.fileQueryCache = void 0, super.dispose();
    }
    set(e) {
        this.picker = e, Ct.once(e.onDispose)(()=>{
            e === this.picker && (this.picker = void 0);
        });
        const t = !!e.quickNavigate;
        t || (this.fileQueryCache = this.provider.createFileQueryCache(), this.scorerCache = Object.create(null)), this.isQuickNavigating = t, this.lastOriginalFilter = void 0, this.lastFilter = void 0, this.lastRange = void 0, this.lastGlobalPicks = void 0, this.editorViewState.reset();
    }
}, qE = class extends Uee {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A, R, D, P, N, O, F){
        super(qE.PREFIX, {
            canAcceptInBackground: !0
        }), this.instantiationService = e, this.searchService = t, this.contextService = n, this.appLayoutService = i, this.pathService = r, this.environmentService = s, this.fileService = o, this.labelService = a, this.modelService = c, this.languageService = l, this.workingCopyService = u, this.configurationService = h, this.editorService = p, this.historyService = g, this.filesConfigurationService = f, this.textModelService = v, this.uriIdentityService = b, this.quickInputService = y, this.keybindingService = T, this.logService = E, this.customEditorLabelService = A, this.workspaceContextService = R, this.selectedContextService = D, this.cursorIgnoreService = P, this.cppEventLoggerService = N, this.composerDataService = O, this.experimentService = F, this.labelOnlyEditorHistoryPickAccessor = new Iis({
            skipDescription: !0
        }), this.fileQueryDelayer = this._register(new TO(qE.TYPING_SEARCH_DELAY)), this.lazyRegistry = new Yf(()=>kn.as(P$.Quickaccess)), this.pickState = this._register(new flh(this, this.instantiationService)), this.fileQueryBuilder = this.instantiationService.createInstance(nq), this.workspaceSymbolsQuickAccess = this._register(this.instantiationService.createInstance(Hde)), this.editorSymbolsQuickAccess = this.instantiationService.createInstance(soe);
    }
    get scorerCache() {
        return this.pickState.scorerCache;
    }
    get defaultFilterValue() {
        if (this.configuration.preserveInput) return pWt.LAST;
    }
    get configuration() {
        const e = this.configurationService.getValue().workbench?.editor, t = this.configurationService.getValue().search, n = this.configurationService.getValue().workbench.quickOpen;
        return {
            openEditorPinned: !e?.enablePreviewFromQuickOpen || !e?.enablePreview,
            openSideBySideDirection: e?.openSideBySideDirection,
            includeSymbols: t?.quickOpen.includeSymbols,
            includeHistory: t?.quickOpen.includeHistory,
            historyFilterSortOrder: t?.quickOpen.history.filterSortOrder,
            preserveInput: n.preserveInput,
            useVscodeSearch: t?.quickOpen.useVscodeSearch ?? !1
        };
    }
    provide(e, t, n) {
        const i = new He;
        this.pickState.set(e), i.add(e.onDidAccept(()=>{
            const s = [], o = new Map;
            for (const a of e.items){
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
        const r = i.add(new cn);
        return i.add(e.onDidChangeActive(()=>{
            r.value = void 0;
            const [s] = e.activeItems;
            KKi(s) && (r.value = this.decorateAndRevealSymbolRange(s));
        })), i.add(Ct.once(e.onDidHide)(({ reason: s })=>{
            s === v5e.Gesture && this.pickState.editorViewState.restore();
        })), i.add(super.provide(e, t, n)), i;
    }
    decorateAndRevealSymbolRange(e) {
        const t = this.editorService.activeEditor;
        if (!this.uriIdentityService.extUri.isEqual(e.resource, t?.resource)) return we.None;
        const n = this.editorService.activeTextEditorControl;
        return n ? (this.pickState.editorViewState.set(), n.revealRangeInCenter(e.range.selection, 0), this.addDecorations(n, e.range.decoration), rn(()=>this.clearDecorations(n))) : we.None;
    }
    _getPicks(e, t, n, i) {
        const r = Y4v(e, [
            soe.PREFIX
        ]);
        let s;
        if (r ? s = r.filter : s = e, this.pickState.lastRange = r?.range, e !== this.pickState.lastOriginalFilter && s === this.pickState.lastFilter) return null;
        const o = !!this.pickState.lastOriginalFilter;
        this.pickState.lastOriginalFilter = e, this.pickState.lastFilter = s;
        const a = this.pickState.picker?.items, c = this.pickState.picker?.activeItems[0];
        if (a && c) {
            const l = KKi(c), u = c === qE.NO_RESULTS_PICK && s.indexOf(soe.PREFIX) >= 0;
            !l && !u && (this.pickState.lastGlobalPicks = {
                items: a,
                active: c
            });
        }
        return this.doGetPicks(s, {
            ...i,
            enableEditorSymbolSearch: o
        }, t, n);
    }
    initializeCaches() {
        this.reportInitializeCachesToSentry(), this.pickState.fileQueryCache = this.createFileQueryCache(), this.pickState.scorerCache = Object.create(null);
    }
    reportInitializeCachesToSentry() {
        try {
            if (!this.experimentService.getDynamicConfig("ripgrep_invocation_monitor_config", {
                disableExposureLog: !0
            }).report_initialize_caches) return;
            const t = this.pickState.fileQueryCache;
            Km(new Error("QuickOpen file cache (re)initialized"), {
                captureContext: {
                    level: "info",
                    tags: {
                        client_error_type: "quickopen_cache_init",
                        force_upload: "forced"
                    },
                    extra: {
                        workspaceFolderCount: this.contextService.getWorkspace().folders.length,
                        existingCacheKey: t?.cacheKey ?? null,
                        existingCacheLoaded: !!t?.isLoaded,
                        existingCacheUpdating: !!t?.isUpdating
                    }
                }
            });
        } catch  {}
    }
    doGetPicksPublic(e, t, n, i) {
        return this.doGetPicks(e, t, n, i);
    }
    doGetPicks(e, t, n, i) {
        return this.configuration.useVscodeSearch ? this.doGetVscodePicks(e, t, n, i) : this.doGetCursorPicks(e, t, n, i);
    }
    doGetVscodePicks(e, t, n, i) {
        const r = Qj(e);
        if (t.enableEditorSymbolSearch) {
            const l = this.getEditorSymbolPicks(r, n, i);
            if (l) return l;
        }
        const s = this.pickState.picker?.activeItems[0];
        if (KKi(s) && this.pickState.lastGlobalPicks) return this.pickState.lastGlobalPicks;
        const o = this.getEditorHistoryPicks(r), a = t.additionPicks?.filter((l)=>l.type !== "section");
        let c = new Array;
        if (a) for (const l of a){
            if (l.type === "separator") {
                c.push(l);
                continue;
            }
            if (!r.original) {
                l.highlights = void 0, c.push(l);
                continue;
            }
            const { score: u, labelMatch: h, descriptionMatch: p } = y_e(l, r, !0, wre, this.pickState.scorerCache);
            u && (l.highlights = {
                label: h,
                description: p
            }, c.push(l));
        }
        return this.pickState.isQuickNavigating ? (c.length > 0 && c.push({
            type: "separator",
            label: S(9350, null)
        }), c = o) : (t.includeHelp && c.push(...this.getHelpPicks(r, i, t)), o.length !== 0 && (c.push({
            type: "separator",
            label: S(9351, null)
        }), c.push(...o))), {
            picks: t.filter ? c.filter((l)=>t.filter?.(l)) : c,
            additionalPicks: (async ()=>{
                const l = new Mc((h)=>this.uriIdentityService.extUri.getComparisonKey(h));
                for (const h of o)h.resource && l.set(h.resource, !0);
                let u = await this.getVscodeAdditionalPicks(r, l, this.configuration.includeSymbols, i);
                return t.filter && (u = u.filter((h)=>t.filter?.(h))), i.isCancellationRequested ? [] : u.length > 0 ? [
                    {
                        type: "separator",
                        label: this.configuration.includeSymbols ? S(9352, null) : S(9353, null)
                    },
                    ...u
                ] : [];
            })(),
            mergeDelay: qE.SYMBOL_PICKS_MERGE_DELAY
        };
    }
    doGetCursorPicks(e, t, n, i) {
        const r = t?.excludeCursorIgnore ?? !1, s = Qj(e), o = (u)=>u.filter((h)=>!("resource" in h && h.resource && this.cursorIgnoreService.shouldBlockUriFromReading(h.resource)));
        if (t.enableEditorSymbolSearch) {
            const u = this.getEditorSymbolPicks(s, n, i);
            if (u) return u;
        }
        const a = this.pickState.picker?.activeItems[0];
        if (KKi(a) && this.pickState.lastGlobalPicks) return this.pickState.lastGlobalPicks;
        let c = r ? o(this.getEditorHistoryPicks(s)) : this.getEditorHistoryPicks(s), l = new Array;
        if (t.additionPicks) for (const u of t.additionPicks){
            if (u.type === "separator") {
                l.push(u);
                continue;
            }
            if (u.type === "section") {
                l.push(u);
                continue;
            }
            if (!s.original) {
                u.highlights = void 0, l.push(u);
                continue;
            }
            const { score: h, labelMatch: p, descriptionMatch: g } = y_e(u, s, !0, wre, this.pickState.scorerCache);
            h && (u.highlights = {
                label: p,
                description: g
            }, l.push(u));
        }
        return this.pickState.isQuickNavigating ? (l.length > 0 && l.push({
            type: "separator",
            label: S(9354, null)
        }), l = c) : (t.includeHelp && l.push(...this.getHelpPicks(s, i, t)), c.length !== 0 && (l.push({
            type: "separator",
            label: S(9355, null)
        }), l.push(...c))), r && (l = l.filter((u)=>u.type === "separator" || !("resource" in u) || !u.resource || !this.cursorIgnoreService.shouldBlockUriFromReading(u.resource))), {
            picks: t.filter ? l.filter((u)=>t.filter?.(u)) : l,
            additionalPicks: (async ()=>{
                const u = new Mc;
                for (const y of c)y.resource && u.set(y.resource, !0);
                let { highScoringPicks: h, lowScoringPicks: p } = await this.getCursorAdditionalPicks(s, u, this.configuration.includeSymbols, i);
                if (r && (h = o(h), p = o(p)), t.filter && (h = h.filter(t.filter), p = p.filter(t.filter)), i.isCancellationRequested) return [];
                let g = [];
                const f = this.configuration.includeSymbols ? S(9356, null) : S(9357, null);
                if (!(l.some((y)=>y !== qE.NO_RESULTS_PICK && y.type !== "separator" && y.type !== "section") || h.length > 0 || p.length > 0 || c.length > 0) && this.isValidFilePath(e)) {
                    const y = this.createFilePicksForPath(e);
                    g = [
                        qE.NO_RESULTS_PICK,
                        ...y.slice(1)
                    ];
                } else t.excludeSemanticSearch ? (g = [
                    ...h,
                    ...p
                ], g = g.length > 0 ? [
                    {
                        type: "separator",
                        label: f
                    },
                    ...g
                ] : []) : (h.length > 0 && (g = [
                    ...g,
                    {
                        type: "separator",
                        label: f
                    },
                    ...h
                ]), p.length > 0 && (g = [
                    ...g,
                    {
                        type: "separator",
                        label: glh
                    },
                    ...p
                ]));
                return g;
            })(),
            mergeDelay: t.isFromComposer ? this.configuration.includeSymbols ? qE.SYMBOL_PICKS_MERGE_DELAY : 50 : qE.SYMBOL_PICKS_MERGE_DELAY
        };
    }
    async getVscodeAdditionalPicks(e, t, n, i) {
        const [r, s] = await Promise.all([
            this.getFilePicks(e, t, i),
            this.getWorkspaceSymbolPicks(e, n, i)
        ]);
        if (i.isCancellationRequested) return [];
        const o = Olg([
            ...r,
            ...s
        ], (c, l)=>INn(c, l, e, !0, wre, this.pickState.scorerCache), qE.MAX_RESULTS), a = [];
        for (const c of o)if (c.highlights) a.push(c);
        else {
            const { score: l, labelMatch: u, descriptionMatch: h } = y_e(c, e, !0, wre, this.pickState.scorerCache);
            if (!l) continue;
            c.highlights = {
                label: u,
                description: h
            }, a.push(c);
        }
        return a;
    }
    async getCursorAdditionalPicks(e, t, n, i) {
        const [r, s] = await Promise.all([
            this.getFilePicks(e, t, i),
            this.getWorkspaceSymbolPicks(e, n, i)
        ]);
        if (i.isCancellationRequested) return {
            highScoringPicks: [],
            lowScoringPicks: []
        };
        const o = [
            ...r,
            ...s
        ];
        o.sort((v, b)=>INn(v, b, e, !0, wre, this.pickState.scorerCache));
        const a = lbo.HIGH_SCORING_THRESHOLD, c = lbo.HIGH_SCORING_CAP_ITEMS, l = [], u = [];
        for (const v of o){
            const { score: b, labelMatch: y, descriptionMatch: T } = y_e(v, e, !0, wre, this.pickState.scorerCache), E = {
                ...v,
                highlights: {
                    label: y,
                    description: T
                }
            };
            if (b >= a && l.length < c ? l.push(E) : u.push(E), l.length + u.length >= qE.MAX_RESULTS) break;
        }
        const h = qE.MAX_RESULTS, p = Math.min(l.length, h), g = Math.min(u.length, h - p);
        return {
            highScoringPicks: l.filter((v)=>{
                const b = [
                    ...v.highlights?.label ?? [],
                    ...v.highlights?.description ?? []
                ];
                return (e.values?.length ?? 1) <= 1 ? v : b.reduce((T, E)=>T + (E.end - E.start), 0) / b.length > 3;
            }).slice(0, p),
            lowScoringPicks: u.slice(0, g)
        };
    }
    getEditorHistoryPicks(e) {
        const t = this.configuration;
        if (!e.normalized) return this.historyService.getHistory().filter((r)=>{
            const s = r.resource;
            return !s || !s.path.includes("/.cursor/worktrees/");
        }).map((r)=>this.createAnythingPick(r, t));
        if (!this.configuration.includeHistory) return [];
        const n = e.containsPathSeparator ? wre : this.labelOnlyEditorHistoryPickAccessor, i = [];
        for (const r of this.historyService.getHistory()){
            const s = r.resource;
            if (!s || !this.fileService.hasProvider(s) && s.scheme !== gt.untitled && s.scheme !== gt.vscodeTerminal && s.scheme !== gt.aiChat || s.path.includes("/.cursor/worktrees/")) continue;
            const o = this.createAnythingPick(r, t), { score: a, labelMatch: c, descriptionMatch: l } = y_e(o, e, !1, n, this.pickState.scorerCache);
            a && (o.highlights = {
                label: c,
                description: l
            }, i.push(o));
        }
        return this.configuration.historyFilterSortOrder === "recency" ? i : i.sort((r, s)=>INn(r, s, e, !1, n, this.pickState.scorerCache));
    }
    getEditorHistoryPickerItems(e) {
        return this.getEditorHistoryPicks(Qj(e));
    }
    createFileQueryCache() {
        return new rlh((e)=>this.fileQueryBuilder.file(this.getScopedFoldersForSearch(), this.getFileQueryOptions({
                cacheKey: e
            })), (e)=>this.quickAccessFileSearch(e), (e)=>this.searchService.clearCache(e), this.pickState.fileQueryCache, qE.FILE_QUERY_CACHE_REINIT_COOLDOWN_MS).load();
    }
    getScopedFoldersForSearch() {
        const e = this.contextService.getWorkspace().folders;
        return e.length === 0, e;
    }
    shouldSuppressFileSearch() {
        const e = this.getScopedFoldersForSearch();
        return e.length > 0 && e.every((t)=>{
            const n = Ee.isUri(t) ? t.scheme : t.uri.scheme;
            return n === gt.vscodeRemote && !this.searchService.schemeHasFileSearchProvider(n);
        });
    }
    quickAccessFileSearch(e, t) {
        return this.shouldSuppressFileSearch() ? Promise.resolve({
            results: [],
            messages: [],
            limitHit: !1
        }) : this.searchService.fileSearch(e, t);
    }
    async getFilePicks(e, t, n, i) {
        if (!e.normalized) return [];
        const r = await this.getAbsolutePathFileResult(e, n);
        if (n.isCancellationRequested) return [];
        let s;
        if (r) {
            if (t.has(r)) return [];
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
        if (i?.skipTypingDelay || this.pickState.fileQueryCache?.isLoaded ? s = await this.doFileSearch(e, n) : s = await this.fileQueryDelayer.trigger(async ()=>n.isCancellationRequested ? [] : this.doFileSearch(e, n)), n.isCancellationRequested) return [];
        const o = this.configuration;
        return s.filter((a)=>!t.has(a)).map((a)=>this.createAnythingPick(a, o));
    }
    async doFileSearch(e, t) {
        const [n, i] = await Promise.all([
            this.getFileSearchResults(e, t),
            this.getRelativePathFileResults(e, t)
        ]);
        if (t.isCancellationRequested) return [];
        if (!i) return n;
        const r = new Mc;
        for (const s of i)r.set(s, !0);
        return [
            ...n.filter((s)=>!r.has(s)),
            ...i
        ];
    }
    async getFileSearchResults(e, t) {
        let n = "";
        e.values && e.values.length > 1 ? n = e.values[0].original : n = e.original;
        const i = await this.doGetFileSearchResults(n, t);
        if (t.isCancellationRequested) return [];
        if (i.limitHit && e.values && e.values.length > 1) {
            const r = await this.doGetFileSearchResults(e.original, t);
            if (t.isCancellationRequested) return [];
            const s = new Mc;
            for (const o of i.results)s.set(o.resource, !0);
            for (const o of r.results)s.has(o.resource) || i.results.push(o);
        }
        return i.results.map((r)=>r.resource);
    }
    doGetFileSearchResults(e, t) {
        const n = Date.now();
        return this.quickAccessFileSearch(this.fileQueryBuilder.file(this.getScopedFoldersForSearch(), this.getFileQueryOptions({
            filePattern: e,
            cacheKey: this.pickState.fileQueryCache?.cacheKey,
            maxResults: qE.MAX_RESULTS
        })), t).finally(()=>{
            this.logService.trace(`QuickAccess fileSearch ${Date.now() - n}ms`);
        });
    }
    getFileQueryOptions(e) {
        const t = [];
        return {
            _reason: "openFileHandler",
            extraFileResources: this.instantiationService.invokeFunction(OKi),
            filePattern: e.filePattern || "",
            cacheKey: e.cacheKey,
            maxResults: e.maxResults || 0,
            sortByScore: !0,
            excludePattern: t
        };
    }
    async getAbsolutePathFileResult(e, t) {
        if (!e.containsPathSeparator) return;
        const n = await this.pathService.userHome(), i = mHs(e.original, n.scheme === gt.file ? n.fsPath : n.path);
        if (t.isCancellationRequested) return;
        const r = (await this.pathService.path).isAbsolute(i);
        if (!t.isCancellationRequested && r) {
            const s = XL(await this.pathService.fileURI(i), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
            if (t.isCancellationRequested) return;
            try {
                if ((await this.fileService.stat(s)).isFile) return s;
            } catch  {}
        }
    }
    async getRelativePathFileResults(e, t) {
        if (!e.containsPathSeparator) return;
        if (!(await this.pathService.path).isAbsolute(e.original)) {
            const i = [];
            for (const r of this.contextService.getWorkspace().folders){
                if (t.isCancellationRequested) break;
                const s = XL(r.toResource(e.original), this.environmentService.remoteAuthority, this.pathService.defaultUriScheme);
                try {
                    (await this.fileService.stat(s)).isFile && i.push(s);
                } catch  {}
            }
            return i;
        }
    }
    getHelpPicks(e, t, n) {
        return e.normalized ? [] : this.lazyRegistry.value.getQuickAccessProviders().filter((r)=>r.helpEntries.some((s)=>s.commandCenterOrder !== void 0)).flatMap((r)=>r.helpEntries.filter((s)=>s.commandCenterOrder !== void 0).map((s)=>{
                const o = {
                    ...n,
                    includeHelp: r.prefix === qE.PREFIX ? !1 : n?.includeHelp
                }, a = s.commandCenterLabel ?? s.description;
                return {
                    label: a,
                    description: s.prefix ?? r.prefix,
                    commandCenterOrder: s.commandCenterOrder,
                    keybinding: s.commandId ? this.keybindingService.lookupKeybinding(s.commandId) : void 0,
                    ariaLabel: S(9358, null, a, s.description),
                    accept: ()=>{
                        this.quickInputService.quickAccess.show(r.prefix, {
                            preserveValue: !0,
                            providerOptions: o
                        });
                    }
                };
            })).sort((r, s)=>r.commandCenterOrder - s.commandCenterOrder);
    }
    async getWorkspaceSymbolPicks(e, t, n) {
        return !e.normalized || !t || this.pickState.lastRange ? [] : this.workspaceSymbolsQuickAccess.getSymbolPicks(e.original, {
            skipLocal: !0,
            skipSorting: !0,
            delay: qE.TYPING_SEARCH_DELAY
        }, n);
    }
    getEditorSymbolPicks(e, t, n) {
        const i = e.original.split(soe.PREFIX), r = i.length > 1 ? i[i.length - 1].trim() : void 0;
        if (typeof r != "string") return null;
        const s = this.pickState.lastGlobalPicks?.active;
        if (!s) return null;
        const o = s.resource;
        return !o || !this.fileService.hasProvider(o) && o.scheme !== gt.untitled || (s.label.includes(soe.PREFIX) || s.description?.includes(soe.PREFIX)) && i.length < 3 ? null : this.doGetEditorSymbolPicks(s, o, r, t, n);
    }
    async doGetEditorSymbolPicks(e, t, n, i, r) {
        try {
            this.pickState.editorViewState.set(), await this.pickState.editorViewState.openTransientEditor({
                resource: t,
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
        let s = this.modelService.getModel(t);
        if (!s) try {
            const a = await this.textModelService.createModelReference(t);
            if (r.isCancellationRequested || i.isDisposed) return a.dispose(), [];
            i.add(a), s = a.object.textEditorModel;
        } catch  {
            return [];
        }
        const o = await this.editorSymbolsQuickAccess.getSymbolPicks(s, n, {
            extraContainerLabel: _re(e.label)
        }, i, r);
        return r.isCancellationRequested ? [] : o.map((a)=>a.type === "separator" ? a : {
                ...a,
                resource: t,
                description: a.description,
                trigger: (c, l)=>(this.openAnything(t, {
                        keyMods: l,
                        range: a.range?.selection,
                        forceOpenSideBySide: !0
                    }), L$.CLOSE_PICKER),
                accept: (c, l)=>this.openAnything(t, {
                        keyMods: c,
                        range: a.range?.selection,
                        preserveFocus: l.inBackground,
                        forcePinned: l.inBackground
                    })
            });
    }
    addDecorations(e, t) {
        this.editorSymbolsQuickAccess.addDecorations(e, t);
    }
    clearDecorations(e) {
        this.editorSymbolsQuickAccess.clearDecorations(e);
    }
    createAnythingPick(e, t) {
        const n = !Ee.isUri(e);
        let i, r, s, o, a, c;
        if (ay(e)) i = vd.getOriginalUri(e), r = e.getName(), s = e.getDescription(), o = e.isDirty() && !e.isSaving(), a = e.getLabelExtraClasses(), c = e.getIcon();
        else {
            i = Ee.isUri(e) ? e : e.resource;
            const p = this.customEditorLabelService.getName(i);
            r = p || mM(i), s = this.labelService.getUriLabel(p ? i : ml(i), {
                relative: !0
            }), o = this.workingCopyService.isDirty(i) && !this.filesConfigurationService.hasShortAutoSaveDelay(i), a = [];
        }
        const l = s ? `${r} ${s}` : r, u = new Yf(()=>T1(this.modelService, this.languageService, i, void 0, c).concat(a)), h = new Yf(()=>{
            const p = t.openSideBySideDirection, g = [];
            return g.push({
                iconClass: p === "right" ? Ft.asClassName(Pe.splitHorizontal) : Ft.asClassName(Pe.splitVertical),
                tooltip: S(p === "right" ? 9359 : 9360, null)
            }), n && g.push({
                iconClass: o ? "dirty-anything " + Ft.asClassName(Pe.circleFilled) : Ft.asClassName(Pe.close),
                tooltip: S(9361, null),
                alwaysVisible: o
            }), g;
        });
        return {
            resource: i,
            label: r,
            ariaLabel: o ? S(9362, null, l) : l,
            description: s,
            get iconClasses () {
                return u.value;
            },
            get buttons () {
                return h.value;
            },
            trigger: (p, g)=>{
                switch(p){
                    case 0:
                        return this.openAnything(e, {
                            keyMods: g,
                            range: this.pickState.lastRange,
                            forceOpenSideBySide: !0
                        }), L$.CLOSE_PICKER;
                    case 1:
                        if (!Ee.isUri(e)) return this.historyService.removeFromHistory(e), L$.REMOVE_ITEM;
                }
                return L$.NO_ACTION;
            },
            accept: (p, g)=>this.openAnything(e, {
                    keyMods: p,
                    range: this.pickState.lastRange,
                    preserveFocus: g.inBackground,
                    forcePinned: g.inBackground
                })
        };
    }
    async openAnything(e, t) {
        const n = {
            preserveFocus: t.preserveFocus,
            pinned: t.keyMods?.ctrlCmd || t.forcePinned || this.configuration.openEditorPinned,
            selection: t.range ? dt.collapseToStart(t.range) : void 0
        }, i = t.keyMods?.alt || this.configuration.openEditorPinned && t.keyMods?.ctrlCmd || t.forceOpenSideBySide ? ib : _1;
        if (i === ib && await this.pickState.editorViewState.restore(), ay(e)) await this.editorService.openEditor(e, n, i);
        else {
            let r;
            Ee.isUri(e) ? r = {
                resource: e,
                options: n
            } : r = {
                ...e,
                options: {
                    ...e.options,
                    ...n
                }
            }, await this.editorService.openEditor(r, i);
        }
    }
    isValidFilePath(e) {
        return !e || e.trim().length === 0 || (e = e.trim(), /[\\/]$/.test(e)) ? !1 : !!((Oo ? Cw : Eu).isAbsolute(e) || e.includes("/") || e.includes("\\") || /\.[a-zA-Z0-9]+$/.test(e));
    }
    createFilePicksForPath(e) {
        if (!this.isValidFilePath(e)) return [
            qE.NO_RESULTS_PICK
        ];
        const t = [];
        t.push(qE.NO_RESULTS_PICK);
        const n = gD(e.trim());
        return t.push({
            id: qE.CREATE_FILE_PICK_ID,
            label: S(9363, null, n),
            description: S(9364, null),
            iconClass: Ft.asClassName(Pe.newFile),
            accept: async (i, r)=>{
                await this.createNewFile(n, i);
            }
        }), t;
    }
    async createNewFile(e, t) {
        try {
            let n;
            if ((Oo ? Cw : Eu).isAbsolute(e)) n = Ee.file(e);
            else {
                const s = this.contextService.getWorkspace().folders;
                if (s.length > 0) n = Ee.joinPath(s[0].uri, e);
                else throw new Error("No workspace found");
            }
            const r = ml(n);
            try {
                await this.fileService.stat(r);
            } catch  {
                await this.fileService.createFolder(r);
            }
            try {
                await this.fileService.stat(n), await this.openAnything(n, {
                    keyMods: t,
                    forceOpenSideBySide: t?.alt || t?.ctrlCmd
                });
            } catch  {
                await this.fileService.writeFile(n, wi.fromString("")), await this.openAnything(n, {
                    keyMods: t,
                    forceOpenSideBySide: t?.alt || t?.ctrlCmd
                });
            }
        } catch (n) {
            await this.quickInputService.pick([], {
                placeHolder: S(9365, null, n.message)
            });
        }
    }
}, qE.PREFIX = "", qE.NO_RESULTS_PICK = {
    label: S(9349, null),
    isNoResults: !0
}, qE.CREATE_FILE_PICK_ID = "__createFile__", qE.MAX_RESULTS = 512, qE.TYPING_SEARCH_DELAY = 200, qE.SYMBOL_PICKS_MERGE_DELAY = 200, qE.FILE_QUERY_CACHE_REINIT_COOLDOWN_MS = 5e3, qE = ie([
    C(0, _t),
    C(1, DX),
    C(2, Jn),
    C(3, q5),
    C(4, zl),
    C(5, Yi),
    C(6, Ii),
    C(7, dc),
    C(8, fc),
    C(9, pc),
    C(10, $D),
    C(11, qt),
    C(12, hn),
    C(13, c0),
    C(14, $w),
    C(15, bc),
    C(16, Ea),
    C(17, Gs),
    C(18, qr),
    C(19, Wn),
    C(20, ooe),
    C(21, Jn),
    C(22, WX),
    C(23, QM),
    C(24, Gse),
    C(25, Zs),
    C(26, Kr)
], qE);

}
