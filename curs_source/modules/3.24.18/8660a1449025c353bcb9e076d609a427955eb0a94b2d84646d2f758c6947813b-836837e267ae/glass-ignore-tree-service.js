import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { h_t } from "./files.js";
import { hv, t_ } from "./glass-file-service.js";
import { Hut, ZBe } from "./glass-uri-identity-service.js";
import { FP0, O2v } from "./ignoreFile.js";
import { It } from "./instantiation.js";
import { du, gQ, gd } from "./map.js";
import { Lr, Os, iL } from "./resources.js";
import { Xq, wve } from "./ternarySearchTree.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Ctc, DPs;
export { Ctc, DPs };
var __wakaru_BP0_initialized = false;
export function BP0() {
if (__wakaru_BP0_initialized) return;
__wakaru_BP0_initialized = true;
"use strict";
E(), Qe(), du(), Lr(), wve(), hv(), Rn(), It(), Hut(), FP0(), Ctc = jn("glassIgnoreTreeService"), DPs = class extends st {
    constructor(t, e){
        super(), this._fileService = t, this._uriIdentityService = e, this._rootState = new Map;
    }
    async getIgnoredStates({ rootUri: t, directoryUri: e, children: n }) {
        if (n.length === 0) return [];
        const i = this._getOrCreateRootState(t);
        return await this._ensureIgnoreChain({
            rootUri: t,
            directoryUri: e,
            rootState: i
        }), n.map((r)=>this._isIgnored(i, r.resource, r.isDirectory));
    }
    getKnownIgnoreFileUris() {
        if (this._knownIgnoreFileUrisCache === void 0) {
            const t = [];
            for (const e of this._rootState.values())for (const n of e.loadedIgnoreFiles)t.push(n);
            this._knownIgnoreFileUrisCache = t;
        }
        return this._knownIgnoreFileUrisCache;
    }
    invalidateSubtree({ rootUri: t, directoryUri: e }) {
        const n = this._rootState.get(t.toString());
        if (!n) return;
        n.ignoreTree.deleteSuperstr(e), n.ignoreTree.delete(e), this._deleteResourceSetSubtree(n.loadedIgnoreFiles, e), this._deleteResourceSetSubtree(n.missingIgnoreFiles, e);
        const i = [];
        for (const r of n.pendingIgnoreLoads.keys())this._uriIdentityService.extUri.isEqualOrParent(r, e) && i.push(r);
        for (const r of i)n.pendingIgnoreLoads.delete(r);
        this._knownIgnoreFileUrisCache = void 0;
    }
    clearAll() {
        this._rootState.clear(), this._knownIgnoreFileUrisCache = void 0;
    }
    _deleteResourceSetSubtree(t, e) {
        const n = [];
        for (const i of t)this._uriIdentityService.extUri.isEqualOrParent(i, e) && n.push(i);
        for (const i of n)t.delete(i);
    }
    _isIgnored(t, e, n) {
        const r = t.ignoreTree.findSubstr(e)?.isPathIncludedInTraversal(e.path, n);
        return r === void 0 ? !1 : !r;
    }
    async _ensureIgnoreChain({ rootUri: t, directoryUri: e, rootState: n }) {
        const i = this._getDirectoryChain({
            rootUri: t,
            directoryUri: e
        });
        for (const r of i)await this._ensureIgnoreFile(n, r);
    }
    _ensureIgnoreFile(t, e) {
        const n = Os(e, ".gitignore");
        if (t.loadedIgnoreFiles.has(n) || t.missingIgnoreFiles.has(n)) return Promise.resolve();
        const i = t.pendingIgnoreLoads.get(e);
        if (i) return i;
        const r = this._loadIgnoreFile(t, e, n).finally(()=>{
            t.pendingIgnoreLoads.delete(e);
        });
        return t.pendingIgnoreLoads.set(e, r), r;
    }
    async _loadIgnoreFile(t, e, n) {
        let i = !1;
        try {
            i = await this._fileService.exists(n);
        } catch  {
            i = !1;
        }
        if (!i) {
            t.missingIgnoreFiles.add(n);
            return;
        }
        try {
            const r = await this._fileService.readFile(n), s = this._uriIdentityService.extUri.dirname(e), o = t.ignoreTree.findSubstr(s), a = !this._fileService.hasCapability(n, h_t.PathCaseSensitive);
            t.ignoreTree.set(e, new O2v(r.value.toString(), e.path, o, a)), t.loadedIgnoreFiles.add(n), t.missingIgnoreFiles.delete(n), this._knownIgnoreFileUrisCache = void 0;
        } catch  {
            t.missingIgnoreFiles.add(n);
        }
    }
    _getDirectoryChain({ rootUri: t, directoryUri: e }) {
        const n = iL(t, e);
        if (!n || n.startsWith("..")) return [
            t
        ];
        const i = n.replace(/\\/g, "/").split("/").filter((o)=>o.length > 0);
        if (i.length === 0) return [
            t
        ];
        const r = [
            t
        ];
        let s = t;
        for (const o of i)s = Os(s, o), r.push(s);
        return r;
    }
    _getOrCreateRootState(t) {
        const e = t.toString();
        let n = this._rootState.get(e);
        return n || (n = {
            ignoreTree: Xq.forUris((i)=>this._uriIdentityService.extUri.ignorePathCasing(i)),
            loadedIgnoreFiles: new gQ((i)=>this._uriIdentityService.extUri.getComparisonKey(i)),
            missingIgnoreFiles: new gQ((i)=>this._uriIdentityService.extUri.getComparisonKey(i)),
            pendingIgnoreLoads: new gd((i)=>this._uriIdentityService.extUri.getComparisonKey(i))
        }, this._rootState.set(e, n)), n;
    }
}, DPs = Re([
    F(0, t_),
    F(1, ZBe)
], DPs), bn(Ctc, DPs, 1);

}
