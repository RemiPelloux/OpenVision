import { Kka, znp } from "./file-tree-selection.js";
import { Vnp, ikn, lfi, tBr } from "./ipa.js";
import { E } from "./tslib.es6.js";
var Xnp, Znp, MO, Qnp, Jnp, nBr, iBr;
export { Jnp, MO, Qnp, Xnp, Znp, iBr, nBr };
var __wakaru_Yka_initialized = false;
export function Yka() {
if (__wakaru_Yka_initialized) return;
__wakaru_Yka_initialized = true;
"use strict";
E(), znp(), Xnp = Object.defineProperty, Znp = (t, e, n)=>e in t ? Xnp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, MO = (t, e, n)=>Znp(t, typeof e != "symbol" ? e + "" : e, n), Qnp = 7, Jnp = .4, nBr = class $Zi {
    constructor({ resolver: e, sortMode: n, compactFolders: i = !1 }){
        MO(this, "_resolver"), MO(this, "_sortMode"), MO(this, "_compactFolders"), MO(this, "_roots"), MO(this, "_knownFileCount", 0), MO(this, "_rootsLoading", !1), MO(this, "_pathPreloadingCount", 0), MO(this, "_rememberedScrollTop"), MO(this, "_activeFilePath"), MO(this, "_loaded", new Set), MO(this, "_loading", new Set), MO(this, "_loadingTimers", new Map), MO(this, "_expanded", new Set), MO(this, "_nodeByPath", new Map), MO(this, "_compactParentByPath", new Map), MO(this, "_elements", new Map), MO(this, "_refocusPath", null), MO(this, "selection", new Kka), MO(this, "_listeners", new Set), MO(this, "_version", 0), MO(this, "_batchDepth", 0), MO(this, "_batchDirty", !1), MO(this, "_cachedVisibleRows"), MO(this, "_cachedStructureVersion", -1), MO(this, "_structureVersion", 0), this._resolver = e, this._sortMode = n, this._compactFolders = i;
    }
    subscribe(e) {
        return this._listeners.add(e), ()=>{
            this._listeners.delete(e);
        };
    }
    _notify() {
        if (this._batchDepth > 0) {
            this._batchDirty = !0;
            return;
        }
        if (this._version++, this.selection.selectedPaths.size > 0) {
            const e = new Set(this.getVisibleRows().map((n)=>n.node.path));
            this.selection.pruneToValid(e);
        }
        this._listeners.forEach((e)=>{
            e();
        });
    }
    _beginBatch() {
        this._batchDepth++;
    }
    _endBatch() {
        this._batchDepth--, this._batchDepth === 0 && this._batchDirty && (this._batchDirty = !1, this._notify());
    }
    _invalidateVisibleRowsCache() {
        this._structureVersion++;
    }
    get version() {
        return this._version;
    }
    setResolver(e) {
        this._resolver = e;
    }
    setSortMode(e) {
        this._sortMode = e;
    }
    async setCompactFolders(e) {
        this._compactFolders !== e && (this._compactFolders = e, this._roots && await this._recomputeLoadedTree());
    }
    async _recomputeLoadedTree() {
        if (this._roots) try {
            await this.refreshRoots(), this._compactFolders || this._compactParentByPath.clear();
            const e = [
                ...this._loaded
            ];
            for (const n of e)this._expanded.has(n) && await this.applyDirectoryMutationRefresh(n);
        } catch  {}
    }
    setActiveFilePath(e) {
        return this._activeFilePath === e ? !1 : (this._activeFilePath = e, this._rememberedScrollTop = void 0, this._notify(), !0);
    }
    rememberScrollTop(e) {
        this._rememberedScrollTop = e;
    }
    getRememberedScrollTop() {
        return this._rememberedScrollTop;
    }
    getPreferredScrollTop({ activeFilePath: e, preferActiveFile: n, currentScrollTop: i, rowPitch: r, viewportHeight: s, scrollHeight: o, revealOffsetRows: a }) {
        const l = s > 0 && r > 0 && o > 0, c = Math.max(0, o - s);
        if (this._rememberedScrollTop !== void 0 && !n) return Math.min(c, Math.max(0, this._rememberedScrollTop));
        if (!e || !l) return;
        const d = this.getVisibleRows().findIndex((b)=>b.node.path === e);
        if (d < 0) return;
        const h = d * r;
        if (a !== void 0) return Math.min(c, Math.max(0, h - a * r));
        const p = h + r, g = Math.max(0, i), f = g + s;
        return n && h >= g && p <= f ? void 0 : h + r <= s ? 0 : Math.min(c, Math.max(0, h - (s - r) / 2));
    }
    get roots() {
        return this._roots;
    }
    get knownFileCount() {
        return this._knownFileCount;
    }
    get isRootsLoading() {
        return this._rootsLoading;
    }
    get isPathPreloading() {
        return this._pathPreloadingCount > 0;
    }
    async _waitForRootsLoadingToFinish() {
        this._rootsLoading && await new Promise((e)=>{
            const n = this.subscribe(()=>{
                this._rootsLoading || (n(), e());
            });
            this._rootsLoading || (n(), e());
        });
    }
    async loadRoots() {
        if (!this._roots) {
            if (this._rootsLoading) {
                await this._waitForRootsLoadingToFinish();
                return;
            }
            this._rootsLoading = !0, this._notify();
            try {
                const e = await this._resolver.getChildren(null), n = await this._createRootNodes(e);
                ikn(n), this._roots = n, this._rebuildNodeIndex(), this._invalidateVisibleRowsCache();
            } catch  {
                this._roots = [], this._rebuildNodeIndex(), this._invalidateVisibleRowsCache();
            } finally{
                this._rootsLoading = !1, this._notify();
            }
        }
    }
    async refreshRoots() {
        if (this._rootsLoading && await this._waitForRootsLoadingToFinish(), !!this._roots) try {
            const e = await this._resolver.getChildren(null), n = await this._createRootNodes(e);
            ikn(n);
            const i = new Map;
            for (const r of this._roots)this._expanded.has(r.path) && r.children !== void 0 && i.set(r.path, r);
            for (const r of n){
                const s = i.get(r.path);
                s?.children !== void 0 && (r.children = s.children, r.ignored && s.children.length > 0 && this._markChildrenIgnored(s.children));
            }
            this._roots = n, this._pruneStaleDirectoryState(n), this._pruneStaleCompactMappings(n), this._rebuildNodeIndex(), this._invalidateVisibleRowsCache(), this._evictCollapsedLoadedDirectories(), this._notify();
        } catch  {}
    }
    _pruneStaleDirectoryState(e) {
        const n = $Zi._collectDirectoryPaths(e);
        for (const i of this._compactParentByPath.keys())n.add(i);
        for (const i of this._loaded)n.has(i) || this._loaded.delete(i);
        for (const i of this._expanded)n.has(i) || this._expanded.delete(i);
    }
    _pruneStaleCompactMappings(e) {
        const n = $Zi._collectDirectoryPaths(e);
        for (const [i, r] of this._compactParentByPath)r !== null && !n.has(r) && this._compactParentByPath.delete(i);
    }
    static _collectDirectoryPaths(e) {
        const n = new Set, i = (r)=>{
            for (const s of r)s.children && (n.add(s.path), i(s.children));
        };
        return i(e), n;
    }
    _markChildrenIgnored(e) {
        let n = !1;
        for (const i of e)i.ignored || (i.ignored = !0, n = !0), i.children && this._markChildrenIgnored(i.children) && (n = !0);
        return n;
    }
    _usesNestedResolution() {
        return this._resolver.resolvesSingleChildDescendants === !0;
    }
    _mapEntriesToNodes(e, n) {
        return e.map((i)=>{
            const r = {
                segments: [
                    i.name
                ],
                path: i.path,
                ignored: !!i.ignored,
                status: i.status
            };
            return i.isDirectory && (n && i.children !== void 0 ? (r.children = this._mapEntriesToNodes(i.children, n), this._loaded.add(i.path)) : r.children = []), r;
        });
    }
    _createRootNodes(e) {
        const n = this._compactFolders && this._usesNestedResolution(), i = tBr(this._mapEntriesToNodes(e, n), this._sortMode);
        return this._compactFolders ? (this._clearCompactMappingsUnder(null), this._compactDirectoryChildren(i, null)) : Promise.resolve(i);
    }
    _clearCompactMappingsUnder(e) {
        if (e === null) {
            this._compactParentByPath.clear();
            return;
        }
        for (const n of this._compactParentByPath.keys())n.startsWith(e) && this._compactParentByPath.delete(n);
    }
    _getCompactRefreshPath(e) {
        return this._compactParentByPath.has(e) ? this._compactParentByPath.get(e) : e;
    }
    async _createDirectoryChildNodes({ entries: e, parentPath: n }) {
        const i = this._compactFolders && this._usesNestedResolution();
        let r = tBr(this._mapEntriesToNodes(e, i), this._sortMode);
        return this._compactFolders && (r = await this._compactDirectoryChildren(r, n)), ikn(r), r;
    }
    async _compactDirectoryChildren(e, n) {
        const i = [];
        for (const r of e){
            if (!lfi(r)) {
                i.push(r);
                continue;
            }
            i.push(await this._compactDirectoryNode(r, n));
        }
        return i;
    }
    async _compactDirectoryNode(e, n) {
        if (this._usesNestedResolution()) return this._compactDirectoryNodeFromNested(e, n);
        let i = e, r;
        const s = [
            ...i.segments
        ], o = [];
        for(;;){
            let a;
            if (r !== void 0) a = r;
            else try {
                const u = await this._resolver.getChildren(i.path);
                this._loaded.add(i.path), a = tBr(Vnp(u), this._sortMode);
            } catch  {
                a = [];
            }
            r = void 0;
            const l = a.length === 1 ? a[0] : void 0;
            if (!l || !lfi(l)) {
                i.children = [], this._loaded.delete(i.path);
                break;
            }
            let c;
            try {
                const u = await this._resolver.getChildren(l.path);
                this._loaded.add(l.path), c = tBr(Vnp(u), this._sortMode);
            } catch  {
                c = [];
            }
            o.push(i.path), s.push(...l.segments), l.children = c, i = l, r = c;
        }
        for (const a of o)this._compactParentByPath.set(a, n);
        return {
            ...i,
            segments: s
        };
    }
    _compactDirectoryNodeFromNested(e, n) {
        let i = e;
        const r = [
            ...i.segments
        ], s = [];
        for(;;){
            const o = i.children, a = o.length === 1 ? o[0] : void 0;
            if (!a || !lfi(a)) break;
            s.push(i.path), r.push(...a.segments), i = a;
        }
        for (const o of s)this._compactParentByPath.set(o, n);
        return {
            ...i,
            segments: r
        };
    }
    async preloadPath(e) {
        if (e) {
            this._pathPreloadingCount++, this._notify();
            try {
                this._roots || await this.loadRoots(), await this.expandPath(e);
            } finally{
                this._pathPreloadingCount = Math.max(0, this._pathPreloadingCount - 1), this._notify();
            }
        }
    }
    isExpanded(e) {
        return this._expanded.has(e);
    }
    isLoading(e) {
        return this._loading.has(e);
    }
    invalidateLoadedDirectory(e) {
        const n = this._getCompactRefreshPath(e);
        if (n === null) {
            this.refreshRoots();
            return;
        }
        this._loaded.has(n) && (this._loaded.delete(n), this._expanded.has(n) && this._loadChildren(n));
    }
    async applyDirectoryMutationRefresh(e) {
        if (!this._roots) return;
        if (e === null) {
            await this.refreshRoots();
            return;
        }
        if (e = this._getCompactRefreshPath(e), e === null) {
            await this.refreshRoots();
            return;
        }
        if (!this._loaded.has(e) || !this._expanded.has(e)) return;
        const n = this._findNode(e);
        if (n) try {
            const r = this._resolver.peekCachedChildren?.(e) ?? await this._resolver.getChildren(e);
            await this._replaceDirectoryChildren(n, r), this._loaded.add(e), this._rebuildNodeIndex(), this._invalidateVisibleRowsCache(), this._evictCollapsedLoadedDirectories(), this._notify();
        } catch  {}
    }
    reconcileOnFocus() {
        this.refreshRoots();
        for (const e of this._loaded)this._expanded.has(e) && this.applyDirectoryMutationRefresh(e);
    }
    async refreshAll() {
        await this.refreshRoots();
        for (const e of [
            ...this._expanded
        ]){
            const n = this._findNode(e);
            if (n) try {
                const i = await this._resolver.getChildren(e);
                await this._replaceDirectoryChildren(n, i), this._loaded.add(e), this._rebuildNodeIndex(), this._invalidateVisibleRowsCache(), this._notify();
            } catch  {}
        }
        this._evictCollapsedLoadedDirectories();
    }
    _evictCollapsedLoadedDirectories() {
        for (const e of [
            ...this._loaded
        ])this._expanded.has(e) || this._loaded.delete(e);
    }
    async applyIgnoredRefresh(e) {
        if (!this._roots) return;
        if (this._compactFolders && e !== null) {
            await this.applyDirectoryMutationRefresh(this._getCompactRefreshPath(e));
            return;
        }
        const n = async (s)=>{
            const o = this._resolver.peekCachedChildren?.(s);
            return o || this._resolver.getChildren(s);
        };
        let i = !1;
        const r = (s, o)=>{
            const a = !!o.ignored;
            s.ignored !== a && (s.ignored = a, i = !0);
        };
        if (e === null) {
            const s = await n(null), o = new Map(s.map((a)=>[
                    a.path,
                    a
                ]));
            for (const a of this._roots){
                const l = o.get(a.path);
                l && r(a, l), !(!a.children || a.children.length === 0) && (a.ignored ? this._markChildrenIgnored(a.children) && (i = !0) : ikn(a.children) && (i = !0));
            }
        } else if (this._loaded.has(e)) {
            const s = this._findNode(e);
            if (s?.children && s.children.length > 0) {
                const o = this._parentDirectoryPath(e), l = (await n(o)).find((d)=>d.path === e);
                l && r(s, l);
                const c = await n(e), u = new Map(c.map((d)=>[
                        d.path,
                        d
                    ]));
                for (const d of s.children){
                    const h = u.get(d.path);
                    h && r(d, h);
                }
                s.ignored ? this._markChildrenIgnored(s.children) && (i = !0) : ikn(s.children) && (i = !0);
            }
        }
        i && this._notify();
    }
    _parentDirectoryPath(e) {
        const n = e.endsWith("/") ? e.slice(0, -1) : e, i = n.lastIndexOf("/");
        if (i < 0) return null;
        const r = n.slice(0, i + 1);
        return r.length > 0 ? r : null;
    }
    async applyDecorationRefresh() {
        if (!this._roots) return;
        if (this._compactFolders) {
            await this._recomputeLoadedTree();
            return;
        }
        let e = !1;
        const n = (s, o)=>{
            const a = o.status;
            s.status !== a && (e = !0, a !== void 0 ? s.status = a : delete s.status);
        }, i = await this._resolver.getChildren(null), r = new Map(i.map((s)=>[
                s.path,
                s
            ]));
        for (const s of this._roots){
            const o = r.get(s.path);
            o && n(s, o);
        }
        for (const s of this._loaded){
            const o = this._findNode(s);
            if (!o?.children || o.children.length === 0) continue;
            const a = await this._resolver.getChildren(s), l = new Map(a.map((c)=>[
                    c.path,
                    c
                ]));
            for (const c of o.children){
                const u = l.get(c.path);
                u && n(c, u);
            }
        }
        e && this._notify();
    }
    async toggle(e) {
        if (this._expanded.has(e)) {
            this._expanded.delete(e), this._invalidateVisibleRowsCache(), this._notify();
            return;
        }
        this._expanded.add(e), this._invalidateVisibleRowsCache(), this._loaded.has(e) ? this._notify() : await this._loadChildren(e);
    }
    async toggleDirectorySiblings(e) {
        const n = this._findSiblingNodes(e);
        if (!n) return;
        const i = n.find((a)=>a.path === e);
        if (!i || !lfi(i)) return;
        const r = !this._expanded.has(e), s = n.filter(lfi), o = [];
        for (const a of s)r ? this._expanded.has(a.path) || (this._expanded.add(a.path), o.push(a)) : this._expanded.delete(a.path);
        this._invalidateVisibleRowsCache(), this._notify();
        for (const a of o)this._loaded.has(a.path) || await this._loadChildren(a.path, a);
    }
    async _loadChildren(e, n) {
        const i = setTimeout(()=>{
            this._loadingTimers.get(e) === i && (this._loadingTimers.delete(e), this._loading.add(e), this._notify());
        }, $Zi._LOADING_INDICATOR_DELAY_MS);
        this._loadingTimers.set(e, i);
        try {
            const r = await this._resolver.getChildren(e), s = this._findNode(e), o = n ?? s;
            o && await this._replaceDirectoryChildren(o, r), this._loaded.add(e), this._rebuildNodeIndex(), this._invalidateVisibleRowsCache(), this._prefetchChildDirectories(o?.children ?? []);
        } catch  {
            const r = n ?? this._findNode(e);
            r && (r.children = []), this._loaded.add(e), this._rebuildNodeIndex(), this._invalidateVisibleRowsCache();
        } finally{
            const r = this._loadingTimers.get(e);
            r !== void 0 && (clearTimeout(r), this._loadingTimers.delete(e)), this._loading.delete(e), this._notify();
        }
    }
    _prefetchChildDirectories(e) {
        let n = 0;
        for (const i of e){
            if (n >= $Zi._PREFETCH_BATCH_LIMIT) break;
            i.children && !this._loaded.has(i.path) && (this._resolver.getChildren(i.path).catch(()=>{}), n++);
        }
    }
    async _replaceDirectoryChildren(e, n) {
        this._clearCompactMappingsUnder(e.path);
        const i = await this._createDirectoryChildNodes({
            entries: n,
            parentPath: e.path
        });
        if (e.children && e.children.length > 0) {
            const r = new Map;
            for (const s of e.children)s.children && s.children.length > 0 && this._expanded.has(s.path) && r.set(s.path, s);
            if (r.size > 0) for (const s of i){
                const a = r.get(s.path)?.children;
                a && (s.children = a, s.ignored && a.length > 0 && this._markChildrenIgnored(a));
            }
        }
        if (e.children = i.length > 0 ? i : [], e.ignored) for (const r of e.children)r.ignored = !0;
        else e.children.length > 0 && (e.ignored = e.children.every((r)=>r.ignored));
    }
    _findNode(e) {
        const n = this._nodeByPath.get(e);
        if (n) return n;
        if (!this._roots) return;
        const i = (r)=>{
            for (const s of r){
                if (s.path === e) return s;
                if (s.children) {
                    const o = i(s.children);
                    if (o) return o;
                }
            }
        };
        return i(this._roots);
    }
    _findSiblingNodes(e) {
        if (!this._roots) return;
        const n = (i)=>{
            for (const r of i){
                if (r.path === e) return i;
                if (r.children) {
                    const s = n(r.children);
                    if (s) return s;
                }
            }
        };
        return n(this._roots);
    }
    _rebuildNodeIndex() {
        if (this._nodeByPath.clear(), this._knownFileCount = 0, !this._roots) {
            this._elements.clear();
            return;
        }
        const e = (n)=>{
            for (const i of n)this._nodeByPath.set(i.path, i), i.children && i.children.length > 0 ? e(i.children) : i.children === void 0 && this._knownFileCount++;
        };
        e(this._roots);
        for (const n of this._elements.keys())this._nodeByPath.has(n) || this._elements.delete(n);
    }
    getVisibleRows() {
        if (!this._roots) return [];
        if (this._cachedVisibleRows !== void 0 && this._cachedStructureVersion === this._structureVersion) return this._cachedVisibleRows;
        const e = [], n = (i, r)=>{
            for (const s of i)e.push({
                node: s,
                depth: r
            }), s.children && this._expanded.has(s.path) && s.children.length > 0 && n(s.children, r + 1);
        };
        return n(this._roots, 0), this._cachedVisibleRows = e, this._cachedStructureVersion = this._structureVersion, e;
    }
    getVirtualWindow({ rowCount: e, scrollTop: n, viewportHeight: i, rowHeight: r, overscan: s }) {
        const o = Math.max(0, Math.floor(n / r) - s), a = Math.min(e, Math.ceil((n + i) / r) + s);
        return {
            startIndex: o,
            endIndex: a,
            totalHeight: e * r
        };
    }
    register(e, n) {
        this._elements.set(e, n), this._refocusPath === e && (this._refocusPath = null, n.focus({
            preventScroll: !0
        }));
    }
    unregister(e) {
        const n = this._elements.get(e);
        this._elements.delete(e), n && n.ownerDocument.activeElement === n && (this._refocusPath = e, queueMicrotask(()=>{
            this._refocusPath === e && (this._refocusPath = null);
        }));
    }
    async expandPath(e) {
        if (!this._roots) return;
        const n = this._getAncestorDirPaths(e);
        if (n.length !== 0) {
            this._beginBatch();
            try {
                let i = this._roots;
                for (const r of n){
                    let s = i.find((l)=>l.children && (l.path === r || l.path.startsWith(r)));
                    if (!s || !s.children) break;
                    this._expanded.has(s.path) || (this._expanded.add(s.path), this._invalidateVisibleRowsCache()), this._loaded.has(s.path) || await this._loadChildren(s.path, s);
                    const o = this._findNode(s.path);
                    o && o !== s && s.children.length > 0 && (!o.children || o.children.length === 0) && (o.children = s.children, this._rebuildNodeIndex(), this._invalidateVisibleRowsCache()), o && (s = o);
                    const a = s.children;
                    if (!a) break;
                    if (s.path !== r && s.path.startsWith(r)) {
                        i = a;
                        continue;
                    }
                    i = a;
                }
            } finally{
                this._endBatch();
            }
        }
    }
    _getAncestorDirPaths(e) {
        const n = e.split("/").filter(Boolean), i = e.endsWith("/") ? n.length : n.length - 1, r = [];
        let s = "";
        for(let o = 0; o < i; o++)s += `${n[o]}/`, r.push(s);
        return r;
    }
    focusNext(e) {
        const n = this.getVisibleRows(), i = n.findIndex((s)=>s.node.path === e);
        if (i === -1 || i + 1 >= n.length) return;
        const r = n[i + 1];
        r && this.focusPath(r.node.path);
    }
    focusPrev(e) {
        const n = this.getVisibleRows(), i = n.findIndex((s)=>s.node.path === e);
        if (i <= 0) return;
        const r = n[i - 1];
        r && this.focusPath(r.node.path);
    }
    focusPath(e, n) {
        const i = this._elements.get(e);
        return i ? (i.focus(n), !0) : !1;
    }
    focusFirstVisible() {
        const e = this.getVisibleRows()[0];
        return e ? this.focusPath(e.node.path) : !1;
    }
}, MO(nBr, "_LOADING_INDICATOR_DELAY_MS", 500), MO(nBr, "_PREFETCH_BATCH_LIMIT", 5), iBr = nBr;

}
