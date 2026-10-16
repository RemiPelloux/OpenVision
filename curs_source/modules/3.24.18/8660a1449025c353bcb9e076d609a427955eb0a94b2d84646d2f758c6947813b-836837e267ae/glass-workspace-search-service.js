import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Jlw, Qlw, WEf, acw, icw, ncw, rcw, scw, tcw, ucw } from "./Ycg.js";
import { II, qn } from "./async.js";
import { Uj, aRe, x5e } from "./bulkEditService.js";
import { El, yo } from "./cancellation.js";
import { Oh, ZS } from "./draftIds.js";
import { jt, k_ } from "./editor-panel-tab-kind.js";
import { od, wW } from "./editor_2.js";
import { Rn } from "./extensions.js";
import { id, ld } from "./extensions_4.js";
import { Zq } from "./files.js";
import { hv, t_ } from "./glass-file-service.js";
import { JDn, jDi } from "./glass-references-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { Ds, NE } from "./glass-tab-persistence-constants.js";
import { $d, vT } from "./glass-tab-persistence-service.contract.js";
import { AXt, Mxt } from "./glass-text-model-service.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { Hv, vm } from "./glassActiveAgentService.js";
import { NB } from "./glob.js";
import { It, dn } from "./instantiation.js";
import { Ki, Ot } from "./network.js";
import { f4e, xCe } from "./queryBuilder.js";
import { Qs, qt } from "./range.js";
import { ecw } from "./remote-search-liveness.js";
import { $Mg, Fhs } from "./replace.js";
import { Lr } from "./resources.js";
import { ICe, wL } from "./search_2.js";
import { Wg, io } from "./storage_2.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Re } from "./userDataProfile.js";
import { Lpe, fie } from "./workspaceConnectionService.js";
import { $Ka, XEn } from "./yBp.js";
var gNl, fNl, Aye, GEf, qEf, $Di, Dxt, Nxt, zEf, vNl, VEf, KEf, HDi, Kys, Yys, e3n;
export { $Di, Aye, Dxt, GEf, HDi, KEf, Kys, Nxt, VEf, Yys, e3n, fNl, gNl, qEf, vNl, zEf };
var __wakaru_Lxt_initialized = false;
export function Lxt() {
if (__wakaru_Lxt_initialized) return;
__wakaru_Lxt_initialized = true;
"use strict";
E(), AXt(), qn(), yo(), Gt(), NB(), Qe(), Ki(), Lr(), fn(), Uj(), Qs(), hv(), Rn(), It(), xd(), od(), ZS(), Hv(), ld(), f4e(), $Mg(), wL(), u_(), Lpe(), k_(), jDi(), xc(), NE(), vT(), ecw(), gNl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), fNl = (t)=>{
    throw TypeError(t);
}, Aye = (t, e)=>(n, i)=>e(n, i, t), GEf = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && fNl("Object expected");
        var i, r;
        n && (i = e[gNl("asyncDispose")]), i === void 0 && (i = e[gNl("dispose")], n && (r = i)), typeof i != "function" && fNl("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, qEf = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, $Di = {
    revision: {
        query: 0,
        resultSet: 0
    },
    query: "",
    options: {
        isCaseSensitive: !1,
        isWholeWord: !1,
        isRegExp: !1
    },
    status: "idle",
    matchCount: 0,
    limitHit: !1,
    wasIndexed: !1,
    results: []
}, Dxt = jn("glassWorkspaceSearchService"), Nxt = {
    sidebarMode: "files",
    searchQuery: "",
    searchOptions: {
        isCaseSensitive: !1,
        isWholeWord: !1,
        isRegExp: !1
    },
    searchMode: "indexed",
    includePattern: "",
    excludePattern: "",
    replaceValue: "",
    preserveCase: !1,
    searchSnapshot: null,
    collapsedFiles: {},
    dismissedFiles: {},
    dismissedMatches: {},
    isReplaceExpanded: !1
}, zEf = 80, vNl = 300, VEf = 2e4, KEf = 5e3, HDi = 100, Kys = "cursor/glass.workspaceSearch.filters", Yys = {
    searchQuery: "",
    includePattern: "",
    excludePattern: "",
    searchOptions: Nxt.searchOptions,
    searchHistory: []
}, e3n = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h){
        super(), this._workspaceContextService = e, this._searchService = n, this._textModelService = i, this._bulkEditService = r, this._textFileService = s, this._fileService = o, this._storageService = a, this._referencesService = l, this._glassActiveAgentService = c, this._glassTabPersistenceService = u, this._workspaceConnectionService = d, this._extensionService = h, this._state = {
            ...Nxt
        }, this._queryRevision = 0, this._resultSetRevision = 0, this._currentSnapshotRevision = {
            query: 0,
            resultSet: 0
        }, this._onDidChangeState = this._register(new tt), this.onDidChangeState = this._onDidChangeState.event, this.scrollTop = 0, this._searchVersion = 0, this._triggerQueryDelayer = this._register(new II(vNl)), this._fileMap = new Map, this._deletedResourceKeys = new Set, this._dirty = !1, this._register(this._fileService.onDidFilesChange((g)=>this._onFilesChanged(g))), this._queryBuilder = t.createInstance(xCe);
        const p = ncw(this._storageService.get(Kys, io.WORKSPACE));
        this._searchHistoryEntries = p.searchHistory.length > HDi ? p.searchHistory.slice(-HDi) : [
            ...p.searchHistory
        ], this._searchHistoryIndex = this._searchHistoryEntries.length, this._state = {
            ...Nxt,
            searchQuery: p.searchQuery,
            includePattern: p.includePattern,
            excludePattern: p.excludePattern,
            searchOptions: p.searchOptions
        };
    }
    get state() {
        return this._state;
    }
    updateState(t) {
        const e = "searchQuery" in t || "includePattern" in t || "excludePattern" in t || "searchOptions" in t, n = this._state.sidebarMode === "references" && t.sidebarMode !== void 0 && t.sidebarMode !== "references", i = {
            ...this._state,
            ...t
        };
        if (t.sidebarMode === "search" && icw(i) && (i.isReplaceExpanded = !0), this._didSearchInputChange(i)) {
            const r = this._advanceQueryRevision();
            this._pendingStateQueryGeneration = {
                revision: r,
                query: i.searchQuery,
                options: i.searchOptions,
                includePattern: i.includePattern,
                excludePattern: i.excludePattern
            }, i.searchSnapshot !== null && (i.searchSnapshot = {
                ...i.searchSnapshot,
                revision: r
            });
        }
        n && this._referencesService.clear(), this._state = i, e && this._persistSearchInput(), this._onDidChangeState.fire();
    }
    _didSearchInputChange(t) {
        return this._state.searchQuery !== t.searchQuery || this._state.searchMode !== t.searchMode || this._state.includePattern !== t.includePattern || this._state.excludePattern !== t.excludePattern || this._state.searchOptions.isCaseSensitive !== t.searchOptions.isCaseSensitive || this._state.searchOptions.isWholeWord !== t.searchOptions.isWholeWord || this._state.searchOptions.isRegExp !== t.searchOptions.isRegExp;
    }
    _advanceQueryRevision() {
        return this._queryRevision++, this._currentSnapshotRevision = {
            query: this._queryRevision,
            resultSet: this._resultSetRevision
        }, this._currentSnapshotRevision;
    }
    _advanceResultSetRevision(t) {
        return this._resultSetRevision++, this._currentSnapshotRevision = {
            query: t.query,
            resultSet: this._resultSetRevision
        }, this._currentSnapshotRevision;
    }
    _claimQueryRevision({ query: t, options: e, includePattern: n, excludePattern: i }) {
        const r = this._pendingStateQueryGeneration;
        return this._pendingStateQueryGeneration = void 0, r?.query === t && r.includePattern === n && r.excludePattern === i && r.options.isCaseSensitive === e.isCaseSensitive && r.options.isWholeWord === e.isWholeWord && r.options.isRegExp === e.isRegExp ? r.revision : this._advanceQueryRevision();
    }
    _publishQueryRevision(t) {
        const e = this._state.searchSnapshot;
        e === null || e.revision === t || this.updateState({
            searchSnapshot: {
                ...e,
                revision: t
            }
        });
    }
    _isCurrentSearch(t, e) {
        return this._searchVersion === t && this._currentSnapshotRevision === e;
    }
    clearSearch() {
        this.cancel(), this.scrollTop = 0, this.updateState({
            searchQuery: "",
            includePattern: "",
            excludePattern: "",
            replaceValue: "",
            searchMode: "indexed",
            searchSnapshot: null,
            collapsedFiles: {},
            dismissedFiles: {},
            dismissedMatches: {}
        });
    }
    syncSearchFromState(t) {
        const e = this._state.searchQuery;
        if (e.length === 0) {
            this.cancel();
            const n = {};
            this._state.searchMode !== "indexed" && (n.searchMode = "indexed"), this._state.searchSnapshot !== null && (n.searchSnapshot = null), Object.keys(n).length > 0 && this.updateState(n);
            return;
        }
        this.triggerQueryChange(e, this._state.searchOptions, {
            delay: t?.delay,
            canUseIndex: (t?.canUseIndex ?? !1) && this._state.searchMode === "indexed" && e.length >= 3,
            includePattern: this._state.includePattern,
            excludePattern: this._state.excludePattern,
            recordHistory: t?.recordHistory
        });
    }
    _persistSearchInput() {
        const t = {
            searchQuery: this._state.searchQuery,
            includePattern: this._state.includePattern,
            excludePattern: this._state.excludePattern,
            searchOptions: this._state.searchOptions,
            searchHistory: [
                ...this._searchHistoryEntries
            ]
        }, e = t.searchOptions.isCaseSensitive || t.searchOptions.isWholeWord || t.searchOptions.isRegExp;
        if (!t.searchQuery && !t.includePattern && !t.excludePattern && t.searchHistory.length === 0 && !e) {
            this._storageService.remove(Kys, io.WORKSPACE);
            return;
        }
        this._storageService.store(Kys, JSON.stringify(t), io.WORKSPACE, Wg.USER);
    }
    _capSearchHistoryEntries(t) {
        return t.length <= HDi ? [
            ...t
        ] : t.slice(-HDi);
    }
    _resetSearchHistoryCursorToEnd() {
        this._searchHistoryIndex = this._searchHistoryEntries.length;
    }
    _replaceLastSearchHistoryEntry(t) {
        const e = this._searchHistoryEntries.slice(0, -1), n = e[e.length - 1] === t ? e : [
            ...e,
            t
        ];
        this._searchHistoryEntries = this._capSearchHistoryEntries(n), this._resetSearchHistoryCursorToEnd(), this._persistSearchInput();
    }
    _noteSearchQueryForNavigation(t) {
        if (t.length === 0) return;
        const e = this._searchHistoryEntries;
        if (this._historyCurrent() === t) return;
        const n = e[e.length - 1];
        if (n !== t) {
            if (n && t.startsWith(n)) {
                this._replaceLastSearchHistoryEntry(t);
                return;
            }
            e.includes(t) || (this._searchHistoryEntries = this._capSearchHistoryEntries([
                ...e,
                t
            ]), this._resetSearchHistoryCursorToEnd(), this._persistSearchInput());
        }
    }
    _recordSearchQueryFromExecution(t) {
        if (t.length === 0) return;
        const e = this._searchHistoryEntries, n = e[e.length - 1];
        if (n !== t) {
            if (n && t.startsWith(n)) {
                this._replaceLastSearchHistoryEntry(t);
                return;
            }
            this._searchHistoryEntries = this._capSearchHistoryEntries([
                ...e,
                t
            ]), this._resetSearchHistoryCursorToEnd(), this._persistSearchInput();
        }
    }
    _historyCurrent() {
        const t = this._searchHistoryEntries.length;
        return this._searchHistoryIndex < 0 || this._searchHistoryIndex >= t ? null : this._searchHistoryEntries[this._searchHistoryIndex];
    }
    _historyPrevious() {
        return this._searchHistoryIndex <= 0 ? null : (this._searchHistoryIndex--, this._historyCurrent());
    }
    _historyNext() {
        const t = this._searchHistoryEntries.length;
        return this._searchHistoryIndex = Math.min(this._searchHistoryIndex + 1, t), this._historyCurrent();
    }
    _updateSearchQueryFromHistory(t) {
        this._state.searchQuery !== t && (this.updateState({
            searchMode: "indexed",
            searchQuery: t,
            collapsedFiles: {},
            dismissedFiles: {},
            dismissedMatches: {}
        }), this.syncSearchFromState({
            recordHistory: !1
        }));
    }
    showPreviousSearchQuery() {
        const t = this._state.searchQuery;
        this._noteSearchQueryForNavigation(t);
        let e = this._historyPrevious();
        for(; e === t;)e = this._historyPrevious();
        e !== null && this._updateSearchQueryFromHistory(e);
    }
    showNextSearchQuery() {
        const t = this._state.searchQuery;
        this._noteSearchQueryForNavigation(t);
        let e = this._historyNext();
        for(; e === t;)e = this._historyNext();
        this._updateSearchQueryFromHistory(e ?? "");
    }
    triggerQueryChange(t, e, n) {
        const i = n?.includePattern ?? "", r = n?.excludePattern ?? "", s = this._claimQueryRevision({
            query: t,
            options: e,
            includePattern: i,
            excludePattern: r
        });
        if (t.length === 0) {
            this._triggerQueryDelayer.cancel(), this.updateState({
                searchMode: "indexed",
                searchSnapshot: null
            }), this.cancel();
            return;
        }
        const o = n?.delay ?? vNl, a = n?.canUseIndex ?? !1, l = n?.maxResults ?? KEf, c = n?.recordHistory ?? !0;
        this.cancel(), this._publishQueryRevision(s), this._triggerQueryDelayer.trigger(()=>{
            this._currentSnapshotRevision === s && this.search(t, e, a, l, i, r, c, this._getCurrentEditorPanelAgentId(), s);
        }, o);
    }
    _computeDisplayInfo(t) {
        if (this._workspaceContextService.getWorkspace().folders.length === 0) {
            const n = t.path.split("/").pop() || t.path;
            return {
                displayPath: n,
                rootRelativePath: n
            };
        }
        return scw(t, this._workspaceContextService);
    }
    _onFilesChanged(t) {
        if (!t.gotDeleted()) return;
        let e = !1;
        for (const [s, o] of this._fileMap)t.contains(o.uri, Zq.DELETED) && (this._fileMap.delete(s), this._deletedResourceKeys.add(s), e = !0);
        const n = this._state.searchSnapshot;
        if (!n || n.results.length === 0) return;
        const i = [];
        let r = 0;
        for (const s of n.results){
            if (t.contains(s.uri, Zq.DELETED)) {
                this._deletedResourceKeys.add(s.uriString), e = !0;
                continue;
            }
            r += s.matches.length, i.push(s);
        }
        e && this.updateState({
            searchSnapshot: {
                ...n,
                matchCount: r,
                results: i
            }
        });
    }
    _ingestFileMatch(t) {
        const e = t.resource.toString();
        if (this._deletedResourceKeys.has(e)) return;
        let n = this._fileMap.get(e);
        if (!n) {
            const i = this._computeDisplayInfo(t.resource);
            n = {
                uri: t.resource,
                uriString: e,
                ...i,
                matches: new Map
            }, this._fileMap.set(e, n);
        }
        for (const i of t.results ?? [])if (XEn(i)) for (const r of tcw(i))n.matches.set(rcw(r), r);
    }
    _snapshotFromFileMap() {
        let t = 0;
        const e = [];
        for (const n of this._fileMap.values()){
            if (n.matches.size === 0) continue;
            const i = [
                ...n.matches.values()
            ];
            t += i.length, e.push({
                uri: n.uri,
                uriString: n.uriString,
                displayPath: n.displayPath,
                rootRelativePath: n.rootRelativePath,
                workspaceFolderName: n.workspaceFolderName,
                workspaceFolderUriString: n.workspaceFolderUriString,
                workspaceFolderIndex: n.workspaceFolderIndex,
                matches: i
            });
        }
        return e.sort(acw), {
            results: e,
            matchCount: t
        };
    }
    _clearPendingFlush() {
        this._fileMap.clear(), this._dirty = !1, this._flushTimer !== void 0 && (clearTimeout(this._flushTimer), this._flushTimer = void 0);
    }
    _getOpenFileUrisForAgent(t) {
        if (!this._glassTabPersistenceService.manager.getGroup(Ds)) return [];
        const e = new Set, n = [];
        for (const i of this._glassTabPersistenceService.manager.getAllTabs()){
            if (i.kind !== jt.File) continue;
            const r = i.props, s = r.filePath;
            typeof s != "string" || s.length === 0 || this._glassTabPersistenceService.isTabVisibleForAgent({
                kind: i.kind,
                props: r
            }, t) && (e.has(s) || (e.add(s), n.push(rt.parse(s))));
        }
        return n;
    }
    _getCurrentEditorPanelAgentId() {
        return this._glassActiveAgentService.getActiveAgentId() ?? Oh;
    }
    search(t, e, n = !1, i = VEf, r = "", s = "", o = !0, a, l) {
        const c = l ?? this._claimQueryRevision({
            query: t,
            options: e,
            includePattern: r,
            excludePattern: s
        });
        this._search({
            query: t,
            options: e,
            useIndex: n,
            maxResults: i,
            includePattern: r,
            excludePattern: s,
            recordHistory: o,
            agentId: a,
            queryRevision: c
        });
    }
    _search({ query: t, options: e, useIndex: n, maxResults: i, includePattern: r, excludePattern: s, recordHistory: o, agentId: a, queryRevision: l }) {
        if (this._currentSnapshotRevision !== l) return;
        o && this._recordSearchQueryFromExecution(t), this._cancelCurrentSearch(), this._clearPendingFlush(), this._deletedResourceKeys.clear(), this._searchVersion++;
        const c = this._searchVersion, u = this._advanceResultSetRevision(l), d = this._workspaceContextService.getWorkspace().folders.map((U)=>U.uri), h = Qlw(d), p = h === void 0 ? void 0 : ucw(this._workspaceConnectionService.connectionState.value);
        if (p !== void 0) {
            this.updateState({
                searchSnapshot: {
                    revision: u,
                    query: t,
                    options: e,
                    status: "error",
                    matchCount: 0,
                    limitHit: !1,
                    wasIndexed: n,
                    results: [],
                    errorMessage: p
                }
            });
            return;
        }
        const g = r.trim(), f = s.trim(), _ = WEf(g), b = WEf(f), y = {
            pattern: t,
            isCaseSensitive: e.isCaseSensitive,
            isWordMatch: e.isWholeWord,
            isRegExp: e.isRegExp
        };
        let S;
        if (d.length === 0) {
            const U = a === void 0 ? [] : this._getOpenFileUrisForAgent(a).filter((j)=>j.scheme === "file");
            if (U.length === 0) {
                this.updateState({
                    searchSnapshot: {
                        ...$Di,
                        revision: u
                    }
                });
                return;
            }
            S = this._queryBuilder.textFromFileList(y, U, {
                previewOptions: {
                    matchLines: 1,
                    charsPerLine: e.isRegExp ? 1e4 : 1e3
                },
                maxResults: i,
                includePattern: _ || void 0,
                excludePattern: b ? [
                    {
                        pattern: b
                    }
                ] : void 0,
                expandPatterns: !0
            });
        } else S = this._queryBuilder.text(y, d, {
            previewOptions: {
                matchLines: 1,
                charsPerLine: e.isRegExp ? 1e4 : 1e3
            },
            maxResults: i,
            useIndex: n && d.every((U)=>U.scheme === Ot.file),
            includePattern: _ || void 0,
            excludePattern: b ? [
                {
                    pattern: b
                }
            ] : void 0,
            expandPatterns: !0
        });
        const k = ()=>{
            if (!this._isCurrentSearch(c, u) || !this._dirty) return;
            this._dirty = !1;
            const { results: U, matchCount: j } = this._snapshotFromFileMap(), $ = this._state.searchSnapshot ?? $Di;
            this.updateState({
                searchSnapshot: {
                    ...$,
                    revision: u,
                    results: U,
                    matchCount: j
                }
            });
        }, C = ()=>{
            this._flushTimer === void 0 && (this._flushTimer = setTimeout(()=>{
                this._flushTimer = void 0, k();
            }, zEf));
        }, T = (U)=>{
            this._isCurrentSearch(c, u) && $Ka(U) && (this._ingestFileMatch(U), this._dirty = !0, C());
        }, I = new El;
        this._searchCts = I;
        const { syncResults: A, asyncResults: P } = this._searchService.textSearchSplitSyncAsync(S, I.token, T);
        for (const U of A.results)this._ingestFileMatch(U);
        this._dirty = !1, this._flushTimer !== void 0 && (clearTimeout(this._flushTimer), this._flushTimer = void 0);
        const { results: M, matchCount: O } = this._snapshotFromFileMap();
        this.updateState({
            searchSnapshot: {
                revision: u,
                query: t,
                options: e,
                status: "searching",
                matchCount: O,
                limitHit: A.limitHit ?? !1,
                wasIndexed: S.useIndex ?? !1,
                results: M
            }
        }), (h === void 0 ? P : Jlw(this._extensionService, h, I.token, P)).then((U)=>{
            if (!this._isCurrentSearch(c, u)) return;
            this._flushTimer !== void 0 && (clearTimeout(this._flushTimer), this._flushTimer = void 0);
            const { results: j, matchCount: $ } = this._snapshotFromFileMap();
            this._fileMap.clear();
            const H = this._state.searchSnapshot ?? $Di;
            this.updateState({
                searchSnapshot: {
                    ...H,
                    revision: u,
                    status: "done",
                    results: j,
                    matchCount: $,
                    limitHit: U.limitHit || A.limitHit || !1,
                    wasIndexed: S.useIndex ?? !1
                }
            });
        }, (U)=>{
            if (!this._isCurrentSearch(c, u)) return;
            this._retireCurrentSearch(), this._clearPendingFlush();
            const j = U instanceof Error ? U.message : "Search failed";
            this.updateState({
                searchSnapshot: {
                    revision: u,
                    query: t,
                    options: e,
                    status: "error",
                    matchCount: 0,
                    limitHit: !1,
                    wasIndexed: n,
                    results: [],
                    errorMessage: j
                }
            });
        });
    }
    async replace(t, e, n, i, r = !1) {
        if (t.length === 0) return;
        const s = new Fhs(i, {
            pattern: e,
            isRegExp: n.isRegExp,
            isCaseSensitive: n.isCaseSensitive,
            isWordMatch: n.isWholeWord
        }), o = [];
        for (const d of t){
            var a = [];
            try {
                const p = GEf(a, await this._textModelService.createModelReference(d.fileTarget.uri)).object.textEditorModel, { lineNumber: g, startColumn: f, endLineNumber: _, endColumn: b } = d.match, y = new qt(g, f, _, b), S = p.getValueInRange(y), k = this._getReplaceString(s, S, r);
                k !== null && o.push(new aRe(d.fileTarget.uri, {
                    range: y,
                    text: k
                }));
            } catch (h) {
                var l = h, c = !0;
            } finally{
                qEf(a, l, c);
            }
        }
        if (o.length === 0) return;
        await this._bulkEditService.apply(o, {
            quotableLabel: "Search and Replace"
        });
        const u = e3n.REPLACE_SAVE_SOURCE;
        await Promise.all(o.map((d)=>this._textFileService.files.get(d.resource)?.save({
                source: u
            })));
    }
    _getReplaceString(t, e, n = !1) {
        const i = t.getReplaceString(e, n);
        if (i !== null) return i;
        const r = e.replace(/\r\n/g, `
`);
        return r !== e ? t.getReplaceString(r, n) : null;
    }
    cancel() {
        this._triggerQueryDelayer.cancel(), this._searchVersion++, this._cancelCurrentSearch(), this._clearPendingFlush();
    }
    dispose() {
        this.cancel(), this._pendingStateQueryGeneration = void 0, this._state = {
            ...Nxt
        }, this.scrollTop = 0, super.dispose();
    }
    _cancelCurrentSearch() {
        this._searchCts?.cancel(), this._searchCts?.dispose(), this._searchCts = void 0;
    }
    _retireCurrentSearch() {
        this._searchVersion++, this._cancelCurrentSearch();
    }
}, e3n.REPLACE_SAVE_SOURCE = wW.registerSource("glassSearchReplace.source", "Search and Replace"), e3n = Re([
    Aye(0, dn),
    Aye(1, F_),
    Aye(2, ICe),
    Aye(3, Mxt),
    Aye(4, x5e),
    Aye(5, Vf),
    Aye(6, t_),
    Aye(7, Nu),
    Aye(8, JDn),
    Aye(9, vm),
    Aye(10, $d),
    Aye(11, fie),
    Aye(12, id)
], e3n), bn(Dxt, e3n, 1);

}
