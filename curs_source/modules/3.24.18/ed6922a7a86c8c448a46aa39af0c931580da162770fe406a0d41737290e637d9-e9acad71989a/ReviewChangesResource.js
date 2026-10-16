import { He, Se, we } from "./HVr.js";
import { j__, nsr } from "./composerMultiDiffContentProvider.js";
import { So, wgi } from "./constants_8.js";
import { HHh, Y__, eNo } from "./diffCommentViewZoneManager.js";
import { lyt, vee } from "./linesDiffComputers.js";
import { U0t, _zt } from "./multiDiffSourceResolverService.js";
import { qa } from "./observable.js";
import { Uh, Xo } from "./qIc.js";
import { tNo } from "./reviewChangesEditorLifetime.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
function WHh(e) {
    return e.length === 0 ? [] : e.split(/\r\n|\r|\n/);
}
function X__(e, t) {
    const n = e ?? "", i = t ?? "";
    if (n.length === 0) return {
        linesAdded: WHh(i).length,
        linesRemoved: 0
    };
    if (i.length === 0) return {
        linesAdded: 0,
        linesRemoved: WHh(n).length
    };
    const r = n.split(/\r\n|\r|\n/), s = i.split(/\r\n|\r|\n/), a = vee.getDefault().computeDiff(r, s, {
        ignoreTrimWhitespace: !1,
        maxComputationTimeMs: 1e3,
        computeMoves: !1,
        skipDiffRefinement: !0
    });
    let c = 0, l = 0;
    for (const u of a.changes){
        const h = u.original.length, p = u.modified.length;
        h === 0 && p > 0 ? c += p : h > 0 && p === 0 ? l += h : h > 0 && p > 0 && (l += h, c += p);
    }
    return {
        linesAdded: c,
        linesRemoved: l
    };
}
var _te, GLe, sP;
export { GLe, WHh, X__, _te, sP };
var __wakaru_b9n_initialized = false;
export function b9n() {
if (__wakaru_b9n_initialized) return;
__wakaru_b9n_initialized = true;
"use strict";
x(), So(), Se(), qa(), Qt(), lyt(), j__(), _zt(), Y__(), tNo(), _te = class XCm extends U0t {
    constructor(t){
        if (super(t.originalUri, t.modifiedUri, t.goToFileUri, t.contextKeys, t.status, t.originalContents, t.modifiedContents), this.type = "skeleton", this.args = t, t.linesAdded !== void 0 && t.linesRemoved !== void 0) this.linesAdded = t.linesAdded, this.linesRemoved = t.linesRemoved;
        else {
            const i = X__(t.originalContents, t.modifiedContents);
            this.linesAdded = i.linesAdded, this.linesRemoved = i.linesRemoved;
        }
        this.skipInlineDiffSync = t.skipInlineDiffSync ?? !1, this.skipLineCounts = t.skipLineCounts ?? !1, this.renamedFromPath = t.renamedFromPath;
    }
    getKey() {
        return JSON.stringify([
            this.modifiedUri?.toString(),
            this.originalUri?.toString()
        ]);
    }
    static revive(t, n, i) {
        const r = t.originalUri ? Ee.revive(t.originalUri) : void 0, s = t.modifiedUri ? Ee.revive(t.modifiedUri) : void 0, o = t.goToFileUri ? Ee.revive(t.goToFileUri) : void 0, a = {
            instantiationService: n,
            composerTextModelService: i,
            originalUri: r,
            modifiedUri: s,
            goToFileUri: o,
            contextKeys: t.contextKeys,
            status: t.status,
            originalContents: t.originalContents,
            modifiedContents: t.modifiedContents,
            linesAdded: t.linesAdded,
            linesRemoved: t.linesRemoved,
            skipLineCounts: t.skipLineCounts,
            renamedFromPath: t.renamedFromPath
        };
        return new XCm(a);
    }
}, GLe = class bQn extends U0t {
    constructor(t){
        super(t.originalUri, t.modifiedUri, t.goToFileUri, t.contextKeys, t.status, t.originalContents, t.modifiedContents), this.type = "resource", this._textModelDisposables = new He, this.args = t, this.instantiationService = t.instantiationService, this.composerTextModelService = t.composerTextModelService, this.skipInlineDiffSync = t.skipInlineDiffSync ?? !1, this._skipLineCounts = t.skipLineCounts === !0 && t.linesAdded !== void 0 && t.linesRemoved !== void 0, this._linesAdded = Xo("ReviewChangesResource.linesAdded", 0), this.linesAdded = this._linesAdded, this._linesRemoved = Xo("ReviewChangesResource.linesRemoved", 0), this.linesRemoved = this._linesRemoved, t.linesAdded !== void 0 && t.linesRemoved !== void 0 && (this._linesAdded.set(t.linesAdded, void 0), this._linesRemoved.set(t.linesRemoved, void 0)), this._comments = Xo("ReviewChangesResource.comments", []), this.comments = this._comments, this.hydrate();
    }
    static hydrateSkeleton(t) {
        const n = t.args;
        return new bQn(n);
    }
    static generateScheme(t) {
        const n = this.computeStableHash(t);
        return `${wgi}-${n}-anysphere`;
    }
    static computeStableHash(t) {
        const n = this._hashCache.get(t);
        if (n !== void 0) return this._hashCache.delete(t), this._hashCache.set(t, n), n;
        let i = 2166136261;
        const r = (a, c)=>{
            for(let l = a; l < c; l++)i ^= t.charCodeAt(l), i += (i << 1) + (i << 4) + (i << 7) + (i << 8) + (i << 24);
        };
        if (t.length <= bQn.STABLE_HASH_SAMPLE_LIMIT) r(0, t.length);
        else {
            const a = bQn.STABLE_HASH_SAMPLE_WINDOWS, c = Math.floor(bQn.STABLE_HASH_SAMPLE_LIMIT / a), l = (t.length - c) / (a - 1);
            for(let u = 0; u < a; u++){
                const h = Math.round(u * l);
                r(h, Math.min(h + c, t.length));
            }
            for(let u = t.length; u > 0; u = Math.floor(u / 256))i ^= u & 255, i += (i << 1) + (i << 4) + (i << 7) + (i << 8) + (i << 24);
        }
        const o = (i >>> 0).toString(16).padStart(8, "0");
        if (t.length <= this._hashCacheMaxKeyUnits) for(this._hashCache.set(t, o), this._hashCacheUnits += t.length; this._hashCache.size > this._hashCacheMaxEntries || this._hashCacheUnits > this._hashCacheMaxUnits;){
            const a = this._hashCache.keys().next();
            if (a.done) break;
            this._hashCache.delete(a.value), this._hashCacheUnits -= a.value.length;
        }
        return o;
    }
    getSkeleton() {
        return new _te(this.args);
    }
    hydrate() {
        this.originalUri && this._registerURI(this.originalUri, "original"), this.modifiedUri && this._registerURI(this.modifiedUri, "modified"), Promise.all([
            this.originalModel,
            this.modifiedModel
        ]).then(([t, n])=>{
            this._updateCounts();
        });
    }
    _registerURI(t, n) {
        const i = t.scheme, r = n === "original" ? this.originalContents : this.modifiedContents;
        if ((i.startsWith(wgi) || i === "untitled") && r !== void 0) {
            const a = this.instantiationService.createInstance(nsr, r), c = this.composerTextModelService.registerTextModelContentProvider(i, a);
            this._textModelDisposables.add(c);
        }
        const o = this.composerTextModelService.createModelReference(t, void 0).then(async (a)=>this._textModelDisposables.isDisposed ? (a.dispose(), a) : (this._textModelDisposables.add(a), this._textModelDisposables.add(a.object.textEditorModel.onDidChangeContent(()=>{
                this._updateCounts();
            })), a));
        n === "original" ? this.originalModel = o : this.modifiedModel = o;
    }
    async _updateCounts() {
        if (!this._skipLineCounts) {
            if (!this.originalModel && this.modifiedModel) {
                try {
                    const n = (await this.modifiedModel).object.textEditorModel;
                    Uh((i)=>{
                        this._linesAdded.set(n.getLineCount(), i), this._linesRemoved.set(0, i);
                    });
                } catch  {
                    Uh((t)=>{
                        this._linesAdded.set(0, t), this._linesRemoved.set(0, t);
                    });
                }
                return;
            }
            if (this.originalModel && !this.modifiedModel) {
                try {
                    const n = (await this.originalModel).object.textEditorModel;
                    Uh((i)=>{
                        this._linesAdded.set(0, i), this._linesRemoved.set(n.getLineCount(), i);
                    });
                } catch  {
                    Uh((t)=>{
                        this._linesAdded.set(0, t), this._linesRemoved.set(0, t);
                    });
                }
                return;
            }
            if (!(!this.originalModel || !this.modifiedModel)) try {
                const t = await this.originalModel, n = await this.modifiedModel, i = t.object.textEditorModel, r = n.object.textEditorModel;
                if (i.getValueLength() === 0) {
                    Uh((h)=>{
                        this._linesAdded.set(r.getLineCount(), h), this._linesRemoved.set(0, h);
                    });
                    return;
                }
                const s = i.getLinesContent(), o = r.getLinesContent(), c = vee.getDefault().computeDiff(s, o, {
                    ignoreTrimWhitespace: !1,
                    maxComputationTimeMs: 1e3,
                    computeMoves: !1,
                    skipDiffRefinement: !0
                });
                let l = 0, u = 0;
                for (const h of c.changes){
                    const p = h.original.length, g = h.modified.length;
                    p === 0 && g > 0 ? l += g : p > 0 && g === 0 ? u += p : p > 0 && g > 0 && (u += p, l += g);
                }
                Uh((h)=>{
                    this._linesAdded.set(l, h), this._linesRemoved.set(u, h);
                });
            } catch  {
                Uh((n)=>{
                    this._linesAdded.set(0, n), this._linesRemoved.set(0, n);
                });
            }
        }
    }
    setComments(t) {
        this._comments.set(t, void 0);
    }
    addComment(t) {
        const n = this._comments.get(), i = n.findIndex((r)=>r.id === t.id);
        if (i >= 0) {
            const r = [
                ...n
            ];
            r[i] = t, this._comments.set(r, void 0);
        } else this._comments.set([
            ...n,
            t
        ], void 0);
    }
    removeComment(t) {
        const n = this._comments.get();
        this._comments.set(n.filter((i)=>i.id !== t), void 0);
    }
    clearComments() {
        this._comments.set([], void 0);
    }
    createCommentRenderer(t, n, i, r) {
        if (eNo(t)) return we.None;
        const s = new HHh({
            comments: this.comments,
            editor: t,
            widget: n,
            githubPRService: i,
            onCommentPosted: r,
            instantiationService: this.instantiationService
        });
        return {
            dispose: ()=>s.dispose()
        };
    }
    dispose() {
        const t = this.originalUri?.toString(), n = this.modifiedUri?.toString();
        this._textModelDisposables.dispose();
    }
    toArgs() {
        return {
            instantiationService: this.instantiationService,
            composerTextModelService: this.composerTextModelService,
            originalUri: this.originalUri,
            modifiedUri: this.modifiedUri,
            goToFileUri: this.goToFileUri,
            contextKeys: this.contextKeys,
            status: this.status,
            originalContents: this.originalContents,
            modifiedContents: this.modifiedContents
        };
    }
}, GLe.STABLE_HASH_SAMPLE_LIMIT = 2 * 1024 * 1024, GLe.STABLE_HASH_SAMPLE_WINDOWS = 32, GLe._hashCache = new Map, GLe._hashCacheUnits = 0, GLe._hashCacheMaxEntries = 512, GLe._hashCacheMaxUnits = 16 * 1024 * 1024, GLe._hashCacheMaxKeyUnits = GLe._hashCacheMaxUnits / 2, sP = GLe;

}
