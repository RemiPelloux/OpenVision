import { Nt, Qe } from "./Iwo.js";
import { Xt_, emc } from "./diff-list-model.js";
import { MRt } from "./glass-diff-types.js";
import { Mt } from "./index_197.js";
import { m2a } from "./ipa.js";
import { O1t } from "./nca.js";
import { tge } from "./ofv.js";
import { E } from "./tslib.es6.js";
import { createContext as rkC } from "./react-runtime/react/esm-index-production.js";
var Jr_, igc;
export { Jr_, igc };
var __wakaru_JOs_initialized = false;
export function JOs() {
if (__wakaru_JOs_initialized) return;
__wakaru_JOs_initialized = true;
"use strict";
E(), Mt(), Qe(), MRt(), Xt_(), Jr_ = class extends emc {
    constructor(t, e){
        super(e.getActiveVirtualizer()), this._diffService = t, this._virtualization = e, this._viewActive = !1, this._scope = "unstaged", this._comparisonMode = "scoped", this._listedFilePaths = [], this._source = {
            kind: "git",
            resolveFileScope: ()=>"unstaged"
        }, this._findDocumentSourcesByPath = new Map, this._fetchGeneration = 0, this._serviceListeners = this._register(new Nt), this._lifetimeAttached = !1;
    }
    attach() {
        this._lifetimeAttached || (this._serviceListeners.add(this._diffService.onDidChangeLoadingState(()=>{
            this._onDiffDataMaybeChanged();
        })), this._serviceListeners.add(this._diffService.onDidRefreshScopeEntries((t)=>{
            this._viewConsumesRefreshedScope(t) && this._warmListedDiffMaterials(), this._onDiffDataMaybeChanged();
        })), this._serviceListeners.add(this._diffService.onDidChangeLargeDiffLoadOptIns(()=>{
            !this._viewActive || !this._findEngine.isOpen || this._pushDocumentsToEngine();
        })), this.bindVirtualizerLifetime(), this._lifetimeAttached = !0);
    }
    detach() {
        this._serviceListeners.clear(), this.unbindVirtualizerLifetime(), this._lifetimeAttached = !1;
    }
    setView(t) {
        if (this._allChangesStatsByPath = t.allChangesStatsByPath, this._viewActive === t.active && this._scope === t.scope && this._comparisonMode === t.comparisonMode && this._subPath === t.subPath && this._isSameSource(t.source) && this._sameStringArray(this._listedFilePaths, t.filePaths)) return;
        const n = this._scope !== t.scope || this._comparisonMode !== t.comparisonMode || this._subPath !== t.subPath;
        this._viewActive = t.active, this._scope = t.scope, this._comparisonMode = t.comparisonMode, this._subPath = t.subPath, this._listedFilePaths = t.filePaths, this._source = t.source;
        const i = this._virtualization.getVirtualizer({
            scope: t.scope,
            subPath: t.subPath
        });
        this.setActiveVirtualizer(i), t.active && i.setFilePaths(t.filePaths), n && this._findEngine.clearAllReveals(), this.setRows(t.filePaths.map((r)=>({
                id: r,
                key: `${t.scope}-${t.comparisonMode}-${t.subPath ?? ""}-${r}`
            }))), this._warmListedDiffMaterials(), this._refreshFileContents();
    }
    _onFindOpened() {
        this._refreshFileContents();
    }
    _onFindClosing() {
        this._fetchGeneration++;
    }
    clearPinnedRevealsForFile(t) {
        this._findEngine.reportPinnedReveals(t, []);
    }
    contextLinesForEntry(t) {
        return this._contextLinesForEntry(t);
    }
    listRevealOffsetPxForMatch(t) {
        return m2a({
            cardRoot: t.cardRoot,
            diffScrollRoot: t.diffScrollRoot,
            lineOneBased: t.lineOneBased,
            side: t.side,
            viewMode: t.viewMode,
            lineHeightPx: t.lineHeightPx,
            original: t.original,
            modified: t.modified,
            precomputedDiff: t.precomputedDiff,
            contextLines: this._contextLinesForEntry(t.displayEntry),
            expandableUnchanged: t.precomputedDiff ? O1t(t.precomputedDiff) : !0,
            revealedRanges: this.getPinnedRevealsForFile(t.filePath)
        });
    }
    _viewConsumesRefreshedScope(t) {
        return t === this._scope || this._comparisonMode === "allChangesAgainstMergeBase" ? !0 : this._comparisonMode === "allChangesAgainstHead" && (t === "unstaged" || t === "staged");
    }
    _warmListedDiffMaterials() {
        if (!this._viewActive || this._source.kind !== "git" || this._listedFilePaths.length === 0) return;
        const t = this.activeVirtualizer, e = t.getTopVisibleFilePath(), n = e !== void 0 ? this._listedFilePaths.indexOf(e) : 0, i = n > 0 ? [
            ...this._listedFilePaths.slice(n),
            ...this._listedFilePaths.slice(0, n)
        ] : this._listedFilePaths;
        this._diffService.warmDiffMaterials(i.filter((r)=>t.getCardOpenState(r)).map((r)=>({
                scope: this._scope,
                filePath: r,
                subPath: this._subPath,
                comparisonMode: this._comparisonMode,
                allChangesStats: tge(this._comparisonMode) ? this._allChangesStatsByPath?.get(r) : void 0
            })));
    }
    _onDiffDataMaybeChanged() {
        !this._viewActive || !this._findEngine.isOpen || this._refreshFileContents();
    }
    async _refreshFileContents() {
        if (!this._findEngine.isOpen || !this._viewActive || this._listedFilePaths.length === 0) return;
        const t = ++this._fetchGeneration;
        this._findEngine.setSearching(!0);
        const e = this._comparisonMode, n = new Map;
        for (const i of this._listedFilePaths){
            if (t !== this._fetchGeneration) return;
            if (this._source.kind === "provided") {
                const o = this._source.fileChangesByPath?.get(i);
                o?.contents && n.set(i, {
                    contents: o.contents,
                    precomputedDiff: o.precomputedDiff
                });
                continue;
            }
            const r = this._source.resolveFileScope(i), s = this._diffService.getCachedDiffMaterial({
                scope: r,
                filePath: i,
                subPath: this._subPath,
                comparisonMode: e
            });
            if (s) {
                n.set(i, {
                    contents: s.contents,
                    precomputedDiff: s.diff
                });
                continue;
            }
            try {
                const o = await this._diffService.getDiffMaterial({
                    scope: r,
                    filePath: i,
                    subPath: this._subPath,
                    comparisonMode: e
                });
                if (t !== this._fetchGeneration) return;
                o && n.set(i, {
                    contents: o.contents,
                    precomputedDiff: o.diff
                });
            } catch  {}
        }
        t === this._fetchGeneration && (this._findDocumentSourcesByPath = n, this._findEngine.setSearching(!1), this._pushDocumentsToEngine());
    }
    _pushDocumentsToEngine() {
        const t = this._comparisonMode, e = [], n = new Map;
        for (const i of this._listedFilePaths){
            const r = this._findDocumentSourcesByPath.get(i);
            if (!r) continue;
            const s = this._source.kind === "provided" ? this._source.fileChangesByPath?.get(i) : void 0;
            if (this._source.kind === "provided" && s === void 0) continue;
            const o = this._source.kind === "git" ? this._source.resolveFileScope(i) : void 0, a = s?.entry ?? (o === void 0 ? void 0 : this._diffService.getFileEntry({
                scope: o,
                filePath: i,
                subPath: this._subPath
            })), l = s !== void 0 ? "exact" : o !== void 0 && this._diffService.classifyDiffRenderability({
                scope: o,
                filePath: i,
                subPath: this._subPath,
                comparisonMode: t
            }).kind === "deferred" ? "deferred" : "exact";
            e.push({
                diffKey: i,
                filePath: i,
                originalContent: r.contents.original,
                modifiedContent: r.contents.modified,
                precomputedDiff: r.precomputedDiff,
                contentsLineSpace: s !== void 0 ? "file" : "diffRows",
                findMode: l
            }), n.set(i, this._contextLinesForEntry(a));
        }
        this._findEngine.setDocuments(e, n);
    }
    _isSameSource(t) {
        const e = this._source;
        if (e.kind !== t.kind) return !1;
        switch(e.kind){
            case "git":
                return !0;
            case "provided":
                return t.kind === "provided" ? e.fileChangesByPath === t.fileChangesByPath : !1;
            default:
                return e;
        }
    }
    _sameStringArray(t, e) {
        if (t.length !== e.length) return !1;
        for(let n = 0; n < t.length; n++)if (t[n] !== e[n]) return !1;
        return !0;
    }
    _contextLinesForEntry(t) {
        return t?.status === "added" || t?.status === "untracked" ? 999 : 3;
    }
}, igc = rkC(null);

}
