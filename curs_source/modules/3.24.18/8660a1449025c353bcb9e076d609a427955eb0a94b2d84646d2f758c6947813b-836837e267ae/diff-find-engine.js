import { Gt, Qe, st, tt } from "./Iwo.js";
import { Kt_, Qpc } from "./glass-diff-find.js";
import { E } from "./tslib.es6.js";
var Jpc, Yt_;
export { Jpc, Yt_ };
var __wakaru_VfC_initialized = false;
export function VfC() {
if (__wakaru_VfC_initialized) return;
__wakaru_VfC_initialized = true;
"use strict";
E(), Gt(), Qe(), Kt_(), Jpc = [], Yt_ = class extends st {
    constructor(t){
        super(), this._deps = t, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._matcher = new Qpc, this._documents = [], this._documentByDiffKey = new Map, this._contextLinesByDiffKey = new Map, this._pinnedRevealsByDiffKey = new Map, this._query = "", this._open = !1, this._isSearching = !1, this._currentMatchIndex = 0, this._matches = Jpc, this._matchesByDiffKey = new Map, this._matchSummaryByPath = new Map, this._scrollTarget = null, this._searchStateByRowId = new Map, this._lastAutoNavigateQuery = null;
    }
    get isOpen() {
        return this._open;
    }
    setDocuments(t, e) {
        this._documents = t, this._documentByDiffKey = new Map(t.map((n)=>[
                n.diffKey,
                n
            ])), this._contextLinesByDiffKey = e, this._prunePinnedReveals(new Set(t.map((n)=>n.diffKey))), this._searchStateByRowId.clear(), this._recompute(), this._emitChange(), this._maybeAutoNavigateToFirstMatch();
    }
    updateDocument(t) {
        const e = this._documentByDiffKey.get(t.diffKey);
        if (!e || this._matcher.areDocumentsEqual([
            e
        ], [
            t
        ])) return;
        const n = this._documents.findIndex((r)=>r.diffKey === t.diffKey);
        if (n < 0) return;
        const i = [
            ...this._documents
        ];
        i[n] = t, this._documents = i, this._documentByDiffKey = new Map(this._documentByDiffKey), this._documentByDiffKey.set(t.diffKey, t), this._recompute(), this._emitChange();
    }
    setSearching(t) {
        this._isSearching !== t && (this._isSearching = t, this._emitChange());
    }
    open() {
        this._open || (this._open = !0, this._emitChange());
    }
    close() {
        !this._open && this._query.length === 0 || (this._open = !1, this._query = "", this._currentMatchIndex = 0, this._isSearching = !1, this._lastAutoNavigateQuery = null, this._recompute(), this._emitChange());
    }
    setQuery(t) {
        this._query !== t && (this._query = t, this._currentMatchIndex = 0, this._recompute(), this._emitChange(), this._maybeAutoNavigateToFirstMatch());
    }
    nextMatch() {
        if (this._matches.length === 0) return;
        const t = (this._currentMatchIndex + 1) % this._matches.length, e = this._matches[t];
        e !== void 0 && (this._currentMatchIndex = t, this.navigateToMatch(e), this._emitChange());
    }
    prevMatch() {
        if (this._matches.length === 0) return;
        const t = (this._currentMatchIndex - 1 + this._matches.length) % this._matches.length, e = this._matches[t];
        e !== void 0 && (this._currentMatchIndex = t, this.navigateToMatch(e), this._emitChange());
    }
    navigateToMatch(t) {
        this._scrollTarget = t, this._deps.revealRowForMatch(t), this._emitChange();
    }
    clearScrollTarget() {
        this._scrollTarget && (this._scrollTarget = null, this._emitChange());
    }
    reportPinnedReveals(t, e) {
        if (this._sameRanges(this._pinnedRevealsByDiffKey.get(t), e)) return;
        const n = new Map(this._pinnedRevealsByDiffKey);
        e.length === 0 ? n.delete(t) : n.set(t, e), this._pinnedRevealsByDiffKey = n, this._recompute(), this._emitChange();
    }
    getPinnedRevealsForFile(t) {
        return this._pinnedRevealsByDiffKey.get(t);
    }
    clearAllReveals() {
        this._pinnedRevealsByDiffKey.size !== 0 && (this._pinnedRevealsByDiffKey = new Map, this._recompute(), this._emitChange());
    }
    getSnapshot() {
        const t = this._matches.length === 0 ? 0 : Math.min(this._currentMatchIndex, this._matches.length - 1), e = this._snapshotCache;
        if (e && e.isOpen === this._open && e.query === this._query && e.matches === this._matches && e.currentMatchIndex === t && e.isSearching === this._isSearching && e.scrollTarget === this._scrollTarget && e.matchSummaryByPath === this._matchSummaryByPath) return e;
        const n = {
            isOpen: this._open,
            query: this._query,
            matches: this._matches,
            currentMatchIndex: t,
            isSearching: this._isSearching,
            scrollTarget: this._scrollTarget,
            matchSummaryByPath: this._matchSummaryByPath
        };
        return this._snapshotCache = n, n;
    }
    getSearchStateForRow(t) {
        const e = this._matchesByDiffKey.get(t) ?? Jpc, n = this._matches[this._matches.length === 0 ? 0 : Math.min(this._currentMatchIndex, this._matches.length - 1)], i = n ? e.indexOf(n) : -1, r = this._documentByDiffKey.get(t)?.filePath ?? t, s = this._matchSummaryByPath.get(r), o = this._searchStateByRowId.get(t);
        if (o && o.isOpen === this._open && o.query === this._query && o.matches === e && o.currentMatchIndexForRow === i && o.matchSummary === s) return o;
        const a = {
            isOpen: this._open,
            query: this._query,
            matches: e,
            currentMatchIndexForRow: i,
            matchSummary: s
        };
        return this._searchStateByRowId.set(t, a), a;
    }
    _recompute() {
        const { matches: t, matchSummaryByPath: e } = this._matcher.computeMatches(this._documents, this._query, {
            visibilityByDiffKey: this._buildVisibility()
        });
        this._matches = t, this._matchesByDiffKey = this._buildMatchesByDiffKey(t), this._matchSummaryByPath = e, this._matches.length === 0 ? (this._currentMatchIndex = 0, this._scrollTarget = null) : this._currentMatchIndex >= this._matches.length && (this._currentMatchIndex = this._matches.length - 1), this._invalidateSnapshot();
    }
    _buildVisibility() {
        const t = new Map;
        for (const [e, n] of this._contextLinesByDiffKey)t.set(e, {
            contextLines: n,
            reveals: this._pinnedRevealsByDiffKey.get(e)
        });
        return t;
    }
    _maybeAutoNavigateToFirstMatch() {
        const t = this._query.trim(), e = this._matches[0];
        if (!t || !e) {
            this._lastAutoNavigateQuery = null;
            return;
        }
        this._lastAutoNavigateQuery !== t && (this._lastAutoNavigateQuery = t, this.navigateToMatch(e));
    }
    _buildMatchesByDiffKey(t) {
        const e = new Map;
        for (const n of t){
            const i = e.get(n.diffKey);
            i ? i.push(n) : e.set(n.diffKey, [
                n
            ]);
        }
        return e;
    }
    _prunePinnedReveals(t) {
        if (this._pinnedRevealsByDiffKey.size === 0) return;
        let e = !1;
        const n = new Map(this._pinnedRevealsByDiffKey);
        for (const i of n.keys())t.has(i) || (n.delete(i), e = !0);
        e && (this._pinnedRevealsByDiffKey = n);
    }
    _sameRanges(t, e) {
        if (t === void 0) return e.length === 0;
        if (t.length !== e.length) return !1;
        for(let n = 0; n < t.length; n++){
            const i = t[n], r = e[n];
            if (i?.[0] !== r?.[0] || i?.[1] !== r?.[1]) return !1;
        }
        return !0;
    }
    _emitChange() {
        this._invalidateSnapshot(), this._onDidChange.fire();
    }
    _invalidateSnapshot() {
        this._snapshotCache = void 0;
    }
};

}
