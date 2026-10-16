import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Yu, qn } from "./async.js";
import { Rn } from "./extensions.js";
import { L6t, Zq } from "./files.js";
import { AL, _N } from "./glass-configuration-service.js";
import { T6i, wtc } from "./glass-file-decoration-service.js";
import { hv, t_ } from "./glass-file-service.js";
import { BP0, Ctc } from "./glass-ignore-tree-service.js";
import { Hut, ZBe } from "./glass-uri-identity-service.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { NB } from "./glob.js";
import { It } from "./instantiation.js";
import { Aa, Lr, Mc, Os, iL } from "./resources.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { gCe } from "./yBp.js";
var Ttc, KRt;
export { KRt, Ttc };
var __wakaru_UP0_initialized = false;
export function UP0() {
if (__wakaru_UP0_initialized) return;
__wakaru_UP0_initialized = true;
"use strict";
E(), qn(), NB(), Qe(), Lr(), hv(), Rn(), It(), Hut(), xd(), AL(), wtc(), BP0(), Ttc = jn("glassFileTreeModelService"), KRt = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._fileService = t, this._workspaceContextService = e, this._configurationService = n, this._uriIdentityService = i, this._glassIgnoreTreeService = r, this._fileDecorationService = s, this.resolvesSingleChildDescendants = !0, this._pathToUri = new Map, this._pendingFileChangeEvents = [], this._directoryCache = new Map, this._cacheKeyToTreePath = new Map, this._cacheKeyToDirectoryUri = new Map, this._cacheKeyToEntryPaths = new Map, this._removedTreePaths = new Set, this._invalidationListeners = new Set, this._mutationListeners = new Set, this._ignoredChangeListeners = new Set, this._pendingInvalidations = new Set, this._pendingMutatedTreePaths = new Set, this._pendingAddMutationsByDirectory = new Map, this._updateFilesExcludeExpression();
        const o = this._register(new Yu(()=>this._processPendingFileChanges(), KRt._FILE_CHANGES_BATCH_DEBOUNCE_MS));
        this._fileChangeBatchScheduler = o, this._register(this._fileService.onDidFilesChange((a)=>{
            this._pendingFileChangeEvents.push(a), this._fileChangeBatchScheduler.isScheduled() || this._fileChangeBatchScheduler.schedule();
        })), this._register(this._fileService.onDidRunOperation((a)=>{
            if (a.isOperation(L6t.CREATE) || a.isOperation(L6t.COPY)) {
                const l = this._canonicalizeResource(a.target.resource);
                if (!this._shouldProcessCachedFileChange(l)) return;
                this._enqueueCachedAddMutation({
                    resource: a.target.resource,
                    stat: a.target,
                    onSettled: ()=>this._scheduleInvalidationFlush()
                }), this._scheduleInvalidationFlush();
                return;
            } else if (a.isOperation(L6t.DELETE)) {
                const l = this._canonicalizeResource(a.resource);
                if (!this._shouldProcessCachedFileChange(l)) return;
                this._handleCachedResourceRemoved(l);
            } else if (a.isOperation(L6t.MOVE)) {
                const l = this._canonicalizeResource(a.resource), c = this._canonicalizeResource(a.target.resource), u = a.target.resource;
                this._shouldProcessCachedFileChange(l) && this._handleCachedResourceRemoved(l), this._shouldProcessCachedFileChange(c) && this._enqueueCachedAddMutation({
                    resource: u,
                    stat: a.target,
                    onSettled: ()=>this._scheduleInvalidationFlush()
                });
            } else return;
            this._scheduleInvalidationFlush();
        })), this._register(this._configurationService.onDidChangeConfiguration((a)=>{
            const l = a.affectsConfiguration("files.exclude"), c = a.affectsConfiguration("explorer.excludeGitIgnore");
            !l && !c || this._handleFileTreeConfigChange({
                affectsFilesExclude: l,
                affectsGitIgnoreBehavior: c
            });
        })), this._register(this._workspaceContextService.onDidChangeWorkspaceFolders(()=>{
            this._handleWorkspaceFoldersChanged();
        }));
    }
    onDirectoryInvalidated(t) {
        return this._invalidationListeners.add(t), ()=>{
            this._invalidationListeners.delete(t);
        };
    }
    onDirectoryMutated(t) {
        return this._mutationListeners.add(t), ()=>{
            this._mutationListeners.delete(t);
        };
    }
    onIgnoredChanged(t) {
        return this._ignoredChangeListeners.add(t), ()=>{
            this._ignoredChangeListeners.delete(t);
        };
    }
    invalidateAllDirectories() {
        this._directoryCache.clear(), this._pathToUri.clear(), this._cacheKeyToTreePath.clear(), this._cacheKeyToDirectoryUri.clear(), this._cacheKeyToEntryPaths.clear(), this._removedTreePaths.clear(), this._pendingInvalidations.clear(), this._pendingMutatedTreePaths.clear(), this._pendingAddMutationsByDirectory.clear(), this._pendingFileChangeEvents = [], this._fileChangeBatchScheduler.cancel();
    }
    refreshCachedDecorations(t) {
        let e = !1;
        for (const n of this._directoryCache.values())for (const i of n){
            const r = this._pathToUri.get(i.path);
            if (!r || !t(r)) continue;
            const o = this._fileDecorationService.getDecoration(r, i.isDirectory)?.status;
            i.status !== o && (o !== void 0 ? i.status = o : delete i.status, e = !0);
        }
        return e;
    }
    resolveUriFromPath(t) {
        const e = this._pathToUri.get(t);
        if (e) return e;
        if (!this._removedTreePaths.has(t)) return this._resolveFolderUriFromTreePath(t);
    }
    async getChildren(t) {
        const e = this._workspaceContextService.getWorkspace().folders;
        if (e.length === 0) return [];
        const n = e.length > 1;
        if (t === null) {
            if (n) return e.map((a)=>({
                    name: a.name,
                    path: `${a.name}/`,
                    isDirectory: !0
                }));
            const o = e[0];
            return this._resolveDirectoryChildren({
                directoryUri: o.uri,
                rootUri: o.uri,
                rootPrefix: "",
                treePath: t
            });
        }
        let i, r, s;
        if (n) {
            const o = t.split("/")[0], a = e.find((c)=>c.name === o);
            if (!a) return [];
            r = a.uri, s = `${a.name}/`;
            const l = t.slice(s.length);
            i = l ? r.with({
                path: `${r.path}/${l.replace(/\/$/, "")}`
            }) : r;
        } else r = e[0].uri, s = "", i = r.with({
            path: `${r.path}/${t.replace(/\/$/, "")}`
        });
        return this._resolveDirectoryChildren({
            directoryUri: i,
            rootUri: r,
            rootPrefix: s,
            treePath: t
        });
    }
    peekCachedChildren(t) {
        if (t === null) {
            const n = this._workspaceContextService.getWorkspace().folders;
            return n.length !== 1 ? void 0 : this._directoryCache.get(this._toCacheKey(n[0].uri));
        }
        const e = this.resolveUriFromPath(t);
        if (e) return this._directoryCache.get(this._toCacheKey(e));
    }
    _processPendingFileChanges() {
        const t = this._pendingFileChangeEvents;
        if (this._pendingFileChangeEvents = [], t.length === 0) return;
        const e = this._collectGitIgnoreChanges(t);
        if (e.length === 0 && !t.some((s)=>s.gotAdded() || s.gotDeleted())) return;
        const n = this._pendingInvalidations.size + this._pendingMutatedTreePaths.size;
        e.length > 0 && this._applyGitIgnoreChanges(e);
        let i = 0;
        const r = [];
        for (const s of t){
            const o = [];
            for (const l of s.rawAdded)this._mightAffectCachedTree(l) && o.push(l);
            const a = [];
            for (const l of s.rawDeleted)this._mightAffectCachedTree(l) && a.push(l);
            (o.length > 0 || a.length > 0) && (r.push({
                event: s,
                added: o,
                deleted: a
            }), i += o.length + a.length);
        }
        if (i > KRt._COARSE_FILE_CHANGES_THRESHOLD) this._applyCoarseFileChanges(r);
        else for (const { event: s, added: o, deleted: a } of r){
            for (const l of o){
                const c = this._canonicalizeResource(l);
                if (!this._shouldProcessCachedFileChange(c)) continue;
                const u = Mc(c);
                s.affects(u, Zq.ADDED) && this._enqueueCachedAddMutation({
                    resource: l,
                    onSettled: ()=>this._scheduleInvalidationFlush()
                });
            }
            for (const l of a){
                const c = this._canonicalizeResource(l);
                this._shouldProcessCachedFileChange(c) && this._handleCachedResourceRemoved(c);
            }
        }
        this._pendingInvalidations.size + this._pendingMutatedTreePaths.size > n && this._scheduleInvalidationFlush();
    }
    _applyCoarseFileChanges(t) {
        const e = new Set;
        for (const { added: n, deleted: i } of t){
            for (const r of n)this._isGitMetadataUri(r) || this._queueDirectoryInvalidation(Mc(r));
            for (const r of i)if (!this._isGitMetadataUri(r) && (this._queueDirectoryInvalidation(Mc(r)), this._isCachedDirectory(r))) {
                const s = this._toCacheKey(r);
                e.has(s) || (e.add(s), this._queueDescendantInvalidations(r));
            }
        }
    }
    _scheduleInvalidationFlush() {
        this._flushPendingInvalidations();
    }
    _pendingAddBlocksStructuralUpdate(t) {
        if (this._pendingAddMutationsByDirectory.has(t)) return !0;
        const e = this._cacheKeyToDirectoryUri.get(t);
        if (!e) return !1;
        for (const n of this._pendingAddMutationsByDirectory.keys()){
            const i = this._cacheKeyToDirectoryUri.get(n);
            if (i && this._uriIdentityService.extUri.isEqualOrParent(e, i)) return !0;
        }
        return !1;
    }
    _pendingAddBlocksMutation(t) {
        if (t === null) return this._pendingAddMutationsByDirectory.size > 0;
        const e = this.resolveUriFromPath(t);
        return e ? this._pendingAddBlocksStructuralUpdate(this._toCacheKey(e)) : !1;
    }
    _takeReadyInvalidations() {
        if (this._pendingAddMutationsByDirectory.size === 0) {
            const e = [
                ...this._pendingInvalidations
            ];
            return this._pendingInvalidations.clear(), e;
        }
        const t = [];
        for (const e of this._pendingInvalidations)this._pendingAddBlocksStructuralUpdate(e) || t.push(e);
        for (const e of t)this._pendingInvalidations.delete(e);
        return t;
    }
    _takeReadyMutations() {
        if (this._pendingAddMutationsByDirectory.size === 0) {
            const e = [
                ...this._pendingMutatedTreePaths
            ];
            return this._pendingMutatedTreePaths.clear(), e;
        }
        const t = [];
        for (const e of this._pendingMutatedTreePaths)this._pendingAddBlocksMutation(e) || t.push(e);
        for (const e of t)this._pendingMutatedTreePaths.delete(e);
        return t;
    }
    _collectGitIgnoreChanges(t) {
        const e = [
            ...this._glassIgnoreTreeService.getKnownIgnoreFileUris()
        ];
        for (const s of this._workspaceContextService.getWorkspace().folders)e.push(Os(s.uri, ".gitignore"));
        for (const s of this._cacheKeyToDirectoryUri.values())e.push(Os(s, ".gitignore"));
        const n = [], i = new Set, r = (s)=>{
            const o = s.toString();
            i.has(o) || (i.add(o), n.push(s));
        };
        for (const s of t){
            for (const o of e)i.has(o.toString()) || s.contains(o, Zq.ADDED, Zq.UPDATED, Zq.DELETED) && r(o);
            for (const o of [
                s.rawAdded,
                s.rawUpdated,
                s.rawDeleted
            ])for (const a of o)Aa(a) === ".gitignore" && r(a);
        }
        return n;
    }
    _applyGitIgnoreChanges(t) {
        const e = new Set, n = new Set, i = this._workspaceContextService.getWorkspace().folders;
        for (const r of t){
            const s = Mc(r);
            let o = !1;
            for (const a of i)if (this._uriIdentityService.extUri.isEqualOrParent(s, a.uri)) {
                o = !0, this._glassIgnoreTreeService.invalidateSubtree({
                    rootUri: a.uri,
                    directoryUri: s
                });
                for (const [l, c] of this._cacheKeyToDirectoryUri){
                    if (!this._uriIdentityService.extUri.isEqualOrParent(c, s) || n.has(l)) continue;
                    const u = this._cacheKeyToTreePath.get(l);
                    if (u === void 0) continue;
                    e.add(u), this._refreshCachedIgnoredState({
                        cacheKey: l,
                        rootUri: a.uri,
                        directoryUri: c
                    }) && n.add(l);
                }
            }
            o || (this._glassIgnoreTreeService.clearAll(), e.clear(), e.add(null));
        }
        for (const r of e)this._notifyIgnoredChanged(r);
    }
    _refreshCachedIgnoredState({ cacheKey: t, rootUri: e, directoryUri: n }) {
        const i = this._directoryCache.get(t);
        if (!i) return !1;
        const r = [];
        for (const s of i){
            const o = this._pathToUri.get(s.path);
            if (!o) return !1;
            r.push({
                resource: o,
                isDirectory: s.isDirectory
            });
        }
        return this._resolveIgnoredAsync({
            cacheKey: t,
            entries: i,
            children: r,
            rootUri: e,
            directoryUri: n
        }), !0;
    }
    _queueDirectoryInvalidation(t) {
        const e = this._toCacheKey(t);
        this._directoryCache.has(e) && (this._pendingInvalidations.add(e), this._queueAncestorInvalidations(t));
    }
    _queueAncestorInvalidations(t) {
        const e = this._toCacheKey(t);
        let n = Mc(t);
        for(;;){
            const i = this._toCacheKey(n);
            if (i === e) return;
            this._directoryCache.has(i) && this._pendingInvalidations.add(i);
            const r = Mc(n);
            if (this._toCacheKey(r) === i) return;
            n = r;
        }
    }
    _handleCachedResourceRemoved(t) {
        this._markTreePathsRemovedForResource(t);
        const e = this._applyCachedDeleteMutation(t);
        e || (this._queueDirectoryInvalidation(Mc(t)), this._isCachedDirectory(t) && this._queueDirectoryInvalidation(t)), (e?.isDirectory || this._isCachedDirectory(t)) && this._queueDescendantInvalidations(t);
    }
    _isGitMetadataUri(t) {
        const e = this._getWorkspaceRootUri(t);
        if (!e) return !1;
        const n = e.path, i = `${n}/.git/`;
        return t.path === `${n}/.git` || t.path.startsWith(i);
    }
    _isCachedDirectory(t) {
        return this._directoryCache.has(this._toCacheKey(t));
    }
    _hasCachedParentDirectory(t) {
        return this._directoryCache.has(this._toCacheKey(Mc(t)));
    }
    _shouldProcessCachedFileChange(t) {
        return this._isGitMetadataUri(t) ? !1 : this._hasCachedParentDirectory(t) || this._isCachedDirectory(t);
    }
    _mightAffectCachedTree(t) {
        return this._hasCachedParentDirectory(t) || this._isCachedDirectory(t);
    }
    _enqueueCachedAddMutation({ resource: t, stat: e, onSettled: n }) {
        const i = this._toCacheKey(Mc(t)), r = this._pendingAddMutationsByDirectory.get(i);
        let s;
        s = (r ?? Promise.resolve()).catch(()=>{}).then(async ()=>{
            try {
                await this._applyCachedAddMutation(t, e) || this._queueDirectoryInvalidation(Mc(t));
            } catch  {
                this._queueDirectoryInvalidation(Mc(t));
            }
        }).finally(()=>{
            this._pendingAddMutationsByDirectory.get(i) === s && this._pendingAddMutationsByDirectory.delete(i), n();
        }), this._pendingAddMutationsByDirectory.set(i, s);
    }
    _queueDescendantInvalidations(t) {
        for (const [e, n] of this._cacheKeyToDirectoryUri)this._uriIdentityService.extUri.isEqualOrParent(n, t) && this._pendingInvalidations.add(e);
    }
    _markTreePathsRemovedForResource(t) {
        for (const [e, n] of this._pathToUri)(this._uriIdentityService.extUri.isEqual(n, t) || this._uriIdentityService.extUri.isEqualOrParent(n, t)) && this._removedTreePaths.add(e);
    }
    _flushPendingInvalidations() {
        const t = this._takeReadyInvalidations(), e = this._takeReadyMutations();
        if (t.length === 0 && e.length === 0) return;
        const n = new Set;
        for (const i of t){
            if (!this._directoryCache.has(i)) continue;
            const r = this._cacheKeyToTreePath.get(i);
            this._dropCachedDirectory(i), r !== void 0 && n.add(r);
        }
        for (const i of n)this._notifyDirectoryInvalidated(i);
        for (const i of e)this._notifyDirectoryMutated(i);
    }
    _notifyDirectoryInvalidated(t) {
        for (const e of this._invalidationListeners)e(t);
    }
    _notifyDirectoryMutated(t) {
        for (const e of this._mutationListeners)e(t);
    }
    _notifyIgnoredChanged(t) {
        for (const e of this._ignoredChangeListeners)e(t);
    }
    _handleWorkspaceFoldersChanged() {
        this.invalidateAllDirectories(), this._notifyDirectoryInvalidated(null);
    }
    _handleFileTreeConfigChange({ affectsFilesExclude: t, affectsGitIgnoreBehavior: e }) {
        const n = new Set;
        for (const i of this._cacheKeyToTreePath.values())i !== void 0 && n.add(i);
        t && this._updateFilesExcludeExpression(), e && this._glassIgnoreTreeService.clearAll(), this.invalidateAllDirectories(), this._notifyDirectoryInvalidated(null);
        for (const i of n)i !== null && this._notifyDirectoryInvalidated(i);
    }
    _updateFilesExcludeExpression() {
        const e = this._configurationService.getValue()?.files?.exclude;
        this._filesExclude = e && Object.keys(e).length > 0 ? gCe(e) : void 0;
    }
    _resolveFolderUriFromTreePath(t) {
        const e = this._workspaceContextService.getWorkspace().folders;
        if (e.length === 0) return;
        const n = t.replace(/\/+$/, "");
        if (n === "") return e.length === 1 ? e[0].uri : void 0;
        if (e.length > 1) {
            const i = n.indexOf("/"), r = i === -1 ? n : n.slice(0, i), s = e.find((a)=>a.name === r);
            if (!s) return;
            const o = i === -1 ? "" : n.slice(i + 1);
            return o === "" ? s.uri : Os(s.uri, o);
        }
        return Os(e[0].uri, n);
    }
    async _resolveDirectoryChildren({ directoryUri: t, rootUri: e, rootPrefix: n, treePath: i }) {
        const r = this._toCacheKey(t), s = this._directoryCache.get(r);
        if (s) return s;
        const o = await this._fileService.resolve(t, {
            resolveMetadata: !1,
            resolveSingleChildDescendants: !0
        });
        return this._ingestResolvedStat({
            stat: o,
            rootUri: e,
            rootPrefix: n,
            treePath: i,
            directoryUri: t
        });
    }
    _ingestResolvedStat({ stat: t, rootUri: e, rootPrefix: n, treePath: i, directoryUri: r }) {
        const s = this._toCacheKey(r), o = t.children ?? [], a = new Set(o.map((h)=>h.name)), l = o.filter((h)=>{
            if (!this._filesExclude) return !0;
            const p = iL(e, h.resource);
            return p ? !this._filesExclude(p, h.name, (g)=>a.has(g)) : !0;
        }).sort((h, p)=>h.isDirectory !== p.isDirectory ? h.isDirectory ? -1 : 1 : h.name.localeCompare(p.name)), c = [], u = [], d = [];
        for (const h of l){
            const p = iL(e, h.resource);
            if (!p) continue;
            const g = p.replace(/\\/g, "/"), f = n ? `${n}${g}` : g;
            if (h.isDirectory) {
                const _ = `${f}/`, b = h.children !== void 0 ? this._ingestResolvedStat({
                    stat: h,
                    rootUri: e,
                    rootPrefix: n,
                    treePath: _,
                    directoryUri: h.resource
                }) : void 0;
                c.push({
                    name: h.name,
                    path: _,
                    isDirectory: !0,
                    ignored: !1,
                    ...b !== void 0 ? {
                        children: b
                    } : {}
                }), this._pathToUri.set(_, this._canonicalizeResource(h.resource)), this._removedTreePaths.delete(_), d.push(_);
            } else c.push({
                name: h.name,
                path: f,
                isDirectory: !1,
                ignored: !1
            }), this._pathToUri.set(f, this._canonicalizeResource(h.resource)), this._removedTreePaths.delete(f), d.push(f);
            u.push({
                resource: h.resource,
                isDirectory: h.isDirectory
            });
        }
        return c.forEach((h, p)=>{
            const g = u[p];
            if (!g) return;
            const f = this._fileDecorationService.getDecoration(g.resource, h.isDirectory);
            f && (h.status = f.status);
        }), this._directoryCache.set(s, c), this._cacheKeyToTreePath.set(s, i), this._cacheKeyToDirectoryUri.set(s, r), this._cacheKeyToEntryPaths.set(s, d), this._resolveIgnoredAsync({
            cacheKey: s,
            entries: c,
            children: u,
            rootUri: e,
            directoryUri: r
        }), c;
    }
    _resolveIgnoredAsync({ cacheKey: t, entries: e, children: n, rootUri: i, directoryUri: r }) {
        this._glassIgnoreTreeService.getIgnoredStates({
            rootUri: i,
            directoryUri: r,
            children: n
        }).then((s)=>{
            let o = !1;
            if (e.forEach((a, l)=>{
                const c = s[l] ?? !1;
                a.ignored !== c && (a.ignored = c, o = !0);
            }), o && this._directoryCache.get(t) === e) {
                const a = this._cacheKeyToTreePath.get(t);
                a !== void 0 && this._notifyIgnoredChanged(a);
            }
        }).catch(()=>{});
    }
    _canonicalizeResource(t) {
        return this._uriIdentityService.asCanonicalUri(t);
    }
    _findCachedEntryIndex(t, e) {
        const n = this._canonicalizeResource(e);
        return t.findIndex((i)=>{
            const r = this._pathToUri.get(i.path);
            return r !== void 0 && this._uriIdentityService.extUri.isEqual(r, n);
        });
    }
    _toCacheKey(t) {
        return this._uriIdentityService.extUri.getComparisonKey(t);
    }
    _getWorkspaceRootUri(t) {
        return this._workspaceContextService.getWorkspace().folders.find((e)=>this._uriIdentityService.extUri.isEqualOrParent(t, e.uri))?.uri;
    }
    _compareEntries(t, e) {
        return t.isDirectory !== e.isDirectory ? t.isDirectory ? -1 : 1 : t.name.localeCompare(e.name);
    }
    async _applyCachedAddMutation(t, e) {
        const n = Mc(t), i = this._toCacheKey(n), r = this._getWorkspaceRootUri(t);
        if (!r) return !1;
        let s;
        try {
            s = e ?? await this._fileService.resolve(t, {
                resolveMetadata: !1
            });
        } catch  {
            return !1;
        }
        if (typeof s.isDirectory != "boolean") return !1;
        const o = s.isDirectory, a = this._directoryCache.get(i), l = this._cacheKeyToTreePath.get(i);
        if (!a || l === void 0) return !1;
        const c = this._canonicalizeResource(t), u = s.name ?? Aa(t), d = l === null ? u : `${l}${u}`, h = o ? `${d}/` : d, p = this._findCachedEntryIndex(a, c);
        if (p >= 0) return this._pathToUri.set(a[p].path, c), this._removedTreePaths.delete(a[p].path), !0;
        if (this._filesExclude) {
            const S = iL(r, t);
            if (!S || S.startsWith("..")) return !1;
            const k = new Set(a.map((T)=>T.name));
            if (k.add(u), this._filesExclude(S.replace(/\\/g, "/"), u, (T)=>k.has(T))) return !0;
        }
        let g = !1;
        try {
            const [S] = await this._glassIgnoreTreeService.getIgnoredStates({
                rootUri: r,
                directoryUri: n,
                children: [
                    {
                        resource: t,
                        isDirectory: o
                    }
                ]
            });
            g = S ?? !1;
        } catch  {
            return !1;
        }
        const f = {
            name: u,
            path: h,
            isDirectory: o,
            ignored: g
        }, _ = this._fileDecorationService.getDecoration(t, o);
        _ && (f.status = _.status);
        const b = [
            ...a
        ], y = b.findIndex((S)=>this._compareEntries(f, S) < 0);
        return y < 0 ? b.push(f) : b.splice(y, 0, f), this._directoryCache.set(i, b), this._pathToUri.set(h, c), this._removedTreePaths.delete(h), this._cacheKeyToEntryPaths.set(i, b.map((S)=>S.path)), this._queueAncestorInvalidations(n), this._pendingMutatedTreePaths.add(l), !0;
    }
    _applyCachedDeleteMutation(t) {
        const e = Mc(t), n = this._toCacheKey(e), i = this._directoryCache.get(n), r = this._cacheKeyToTreePath.get(n);
        if (!i || r === void 0) return;
        const s = this._findCachedEntryIndex(i, t);
        if (s < 0) return;
        const o = i[s], a = [
            ...i
        ];
        a.splice(s, 1), this._directoryCache.set(n, a), this._pathToUri.delete(o.path);
        const l = this._cacheKeyToEntryPaths.get(n);
        return l && this._cacheKeyToEntryPaths.set(n, l.filter((c)=>c !== o.path)), this._queueAncestorInvalidations(e), this._pendingMutatedTreePaths.add(r), {
            isDirectory: o.isDirectory
        };
    }
    _dropCachedDirectory(t) {
        this._directoryCache.delete(t), this._cacheKeyToTreePath.delete(t), this._cacheKeyToDirectoryUri.delete(t);
        const e = this._cacheKeyToEntryPaths.get(t);
        if (e) {
            for (const n of e)this._pathToUri.delete(n);
            this._cacheKeyToEntryPaths.delete(t);
        }
    }
}, KRt._FILE_CHANGES_BATCH_DEBOUNCE_MS = 500, KRt._COARSE_FILE_CHANGES_THRESHOLD = 100, KRt = Re([
    F(0, t_),
    F(1, F_),
    F(2, _N),
    F(3, ZBe),
    F(4, Ctc),
    F(5, T6i)
], KRt), bn(Ttc, KRt, 1);

}
