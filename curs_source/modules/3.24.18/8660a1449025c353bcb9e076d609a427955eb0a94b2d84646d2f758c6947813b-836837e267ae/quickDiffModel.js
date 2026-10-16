import { Ei, Gt, N0o, Nt, Qe, Zm, da, en, st, tt, udn, xr } from "./Iwo.js";
import { jn } from "./SZu.js";
import { I_l, aDg } from "./Ycg.js";
import { bo } from "./arrays.js";
import { nW, qn } from "./async.js";
import { or, yi } from "./configuration.js";
import { RTr, ooi } from "./diffEditorViewModel.js";
import { oRe } from "./diffEditorWidget.js";
import { FD, yW } from "./editorWorker.js";
import { It, dn } from "./instantiation.js";
import { IT, np } from "./iterator.js";
import { du, gd } from "./map.js";
import { J0 } from "./model_2.js";
import { B1, ab } from "./progress.js";
import { L2n, yKt } from "./quickDiff.js";
import { Em, Rh } from "./resolverService.js";
import { aC, cN } from "./scm.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { KTn } from "./yBp.js";
import { sHe, wzd } from "./ze.js";
var Tlt, uDg, Qhs, Jhs, eps;
export { Jhs, Qhs, Tlt, eps, uDg };
var __wakaru_O2n_initialized = false;
export function O2n() {
if (__wakaru_O2n_initialized) return;
__wakaru_O2n_initialized = true;
"use strict";
E(), du(), It(), u_(), Qe(), yW(), Vp(), Em(), J0(), yKt(), qn(), cN(), bo(), Ei(), IT(), RTr(), oRe(), or(), ab(), Gt(), Tlt = jn("IQuickDiffModelService"), uDg = {
    algorithm: "legacy",
    maxComputationTimeMs: 1e3
}, Qhs = class extends udn {
    constructor(t){
        super(), this._instantiationService = t;
    }
    createReferencedObject(t, e, n) {
        return this._instantiationService.createInstance(eps, e, n);
    }
    destroyReferencedObject(t, e) {
        e.dispose();
    }
}, Qhs = Re([
    F(0, dn)
], Qhs), Jhs = class {
    constructor(t, e, n){
        this.instantiationService = t, this.textFileService = e, this.uriIdentityService = n, this._references = this.instantiationService.createInstance(Qhs);
    }
    createQuickDiffModelReference(t, e = uDg) {
        const n = this.textFileService.files.get(t);
        if (n?.isResolved()) return t = this.uriIdentityService.asCanonicalUri(t).with({
            query: JSON.stringify(e)
        }), this._references.acquire(t.toString(), n, e);
    }
}, Jhs = Re([
    F(0, dn),
    F(1, Vf),
    F(2, nh)
], Jhs), eps = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this.options = e, this.scmService = n, this.quickDiffService = i, this.editorWorkerService = r, this.configurationService = s, this.textModelResolverService = o, this.progressService = a, this._originalEditorModels = new gd, this._originalEditorModelsDisposables = this._register(new Nt), this._disposed = !1, this._quickDiffs = [], this._diffDelayer = new nW(200), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._changes = [], this._quickDiffChanges = new Map, this._repositoryDisposables = new da, this._model = t, this._register(t.textEditorModel.onDidChangeContent(()=>this.triggerDiff())), this._register(en.filter(s.onDidChangeConfiguration, (l)=>l.affectsConfiguration("scm.diffDecorationsIgnoreTrimWhitespace") || l.affectsConfiguration("diffEditor.ignoreTrimWhitespace"))(this.triggerDiff, this)), this._register(n.onDidAddRepository(this.onDidAddRepository, this));
        for (const l of n.repositories)this.onDidAddRepository(l);
        this._register(this._model.onDidChangeEncoding(()=>{
            this._diffDelayer.cancel(), this._quickDiffs = [], this._originalEditorModels.clear(), this._quickDiffsPromise = void 0, this.setChanges([], new Map), this.triggerDiff();
        })), this._register(this.quickDiffService.onDidChangeQuickDiffProviders(()=>this.triggerDiff())), this.triggerDiff();
    }
    get originalTextModels() {
        return np.map(this._originalEditorModels.values(), (t)=>t.textEditorModel);
    }
    get changes() {
        return this._changes;
    }
    get quickDiffChanges() {
        return this._quickDiffChanges;
    }
    get quickDiffs() {
        return this._quickDiffs;
    }
    getQuickDiffResults() {
        return this._quickDiffs.map((t)=>{
            const e = this.changes.filter((n)=>n.label === t.label);
            return {
                label: t.label,
                original: t.originalResource,
                modified: this._model.resource,
                changes: e.map((n)=>n.change),
                changes2: e.map((n)=>n.change2)
            };
        });
    }
    getDiffEditorModel(t) {
        const e = this._originalEditorModels.get(t);
        return e ? {
            modified: this._model.textEditorModel,
            original: e.textEditorModel
        } : void 0;
    }
    onDidAddRepository(t) {
        const e = new Nt;
        e.add(t.provider.onDidChangeResources(this.triggerDiff, this));
        const n = en.filter(this.scmService.onDidRemoveRepository, (i)=>i === t);
        e.add(n(()=>this._repositoryDisposables.deleteAndDispose(t))), this._repositoryDisposables.set(t, e), this.triggerDiff();
    }
    triggerDiff() {
        this._diffDelayer && this._diffDelayer.trigger(async ()=>{
            const t = await this.diff(), e = Array.from(this._originalEditorModels.values());
            !t || this._disposed || this._model.isDisposed() || e.some((n)=>n.isDisposed()) || this.setChanges(t.changes, t.mapChanges);
        }).catch((t)=>xr(t));
    }
    setChanges(t, e) {
        const n = N0o(this.changes, t, (i, r)=>aDg(i.change, r.change));
        this._changes = t, this._quickDiffChanges = e, this._onDidChange.fire({
            changes: t,
            diff: n
        });
    }
    diff() {
        return this.progressService.withProgress({
            location: 3,
            delay: 250
        }, async ()=>{
            if (this._disposed || this._model.isDisposed()) return null;
            const t = await this.getQuickDiffsPromise();
            if (this._disposed || this._model.isDisposed() || t.length === 0) return Promise.resolve({
                changes: [],
                mapChanges: new Map
            });
            const e = t.filter((a)=>this.editorWorkerService.canComputeDirtyDiff(a.originalResource, this._model.resource));
            if (e.length === 0) return Promise.resolve({
                changes: [],
                mapChanges: new Map
            });
            const n = this.configurationService.getValue("scm.diffDecorationsIgnoreTrimWhitespace"), i = n === "inherit" ? this.configurationService.getValue("diffEditor.ignoreTrimWhitespace") : n !== "false", r = [];
            for (const a of e){
                const l = await this._diff(a.originalResource, this._model.resource, i);
                if (l.changes && l.changes2 && l.changes.length === l.changes2.length) for(let c = 0; c < l.changes.length; c++)r.push({
                    label: a.label,
                    original: a.originalResource,
                    modified: this._model.resource,
                    change: l.changes[c],
                    change2: l.changes2[c]
                });
            }
            const s = r.sort((a, l)=>aDg(a.change, l.change)), o = new Map;
            for(let a = 0; a < s.length; a++){
                const l = s[a].label;
                o.has(l) || o.set(l, []), o.get(l).push(a);
            }
            return {
                changes: s,
                mapChanges: o
            };
        });
    }
    async _diff(t, e, n) {
        const i = this.options.maxComputationTimeMs ?? Number.MAX_SAFE_INTEGER, r = await this.editorWorkerService.computeDiff(t, e, {
            computeMoves: !1,
            ignoreTrimWhitespace: n,
            maxComputationTimeMs: i
        }, this.options.algorithm);
        return {
            changes: r ? wzd(ooi.fromDiffResult(r)) : null,
            changes2: r?.changes ?? null
        };
    }
    getQuickDiffsPromise() {
        return this._quickDiffsPromise ? this._quickDiffsPromise : (this._quickDiffsPromise = this.getOriginalResource().then(async (t)=>this._disposed ? [] : t.length === 0 ? (this._quickDiffs = [], this._originalEditorModels.clear(), []) : Zm(this._quickDiffs, t, (e, n)=>e.originalResource.toString() === n.originalResource.toString() && e.label === n.label) ? t : (this._quickDiffs = t, this._originalEditorModels.clear(), this._originalEditorModelsDisposables.clear(), (await Promise.all(t.map(async (e)=>{
                try {
                    const n = await this.textModelResolverService.createModelReference(e.originalResource);
                    if (this._originalEditorModelsDisposables.isDisposed) return n.dispose(), [];
                    if (this._originalEditorModels.set(e.originalResource, n.object), KTn(n.object)) {
                        const i = this._model.getEncoding();
                        i && n.object.setEncoding(i, 1);
                    }
                    return this._originalEditorModelsDisposables.add(n), this._originalEditorModelsDisposables.add(n.object.textEditorModel.onDidChangeContent(()=>this.triggerDiff())), e;
                } catch  {
                    return [];
                }
            }))).flat())), this._quickDiffsPromise.finally(()=>{
            this._quickDiffsPromise = void 0;
        }));
    }
    async getOriginalResource() {
        if (this._disposed) return Promise.resolve([]);
        const t = this._model.resource, e = this._model.textEditorModel ? sHe(this._model.textEditorModel) : void 0;
        return this.quickDiffService.getQuickDiffs(t, this._model.getLanguageId(), e);
    }
    findNextClosestChange(t, e = !0, n) {
        let i;
        !n && e && (i = this.quickDiffs.find((o)=>o.isSCM)?.label);
        const r = new Set(this.quickDiffs.filter((o)=>o.visible).map((o)=>o.label)), s = [];
        for(let o = 0; o < this.changes.length; o++){
            if (n && this.changes[o].label !== n || !r.has(this.changes[o].label)) continue;
            const a = this.changes[o], l = s.length;
            if (e) {
                if (I_l(a.change) >= t) if (i && a.label !== i) s.push(o);
                else return o;
            } else if (a.change.modifiedStartLineNumber > t) return o;
            if (s.length > 0 && s.length === l) return s[0];
        }
        return s.length > 0 ? s[0] : 0;
    }
    findPreviousClosestChange(t, e = !0, n) {
        const i = new Set(this.quickDiffs.filter((r)=>r.visible).map((r)=>r.label));
        for(let r = this.changes.length - 1; r >= 0; r--){
            if (n && this.changes[r].label !== n || !i.has(this.changes[r].label)) continue;
            const s = this.changes[r].change;
            if (e) {
                if (s.modifiedStartLineNumber <= t) return r;
            } else if (I_l(s) < t) return r;
        }
        return this.changes.length - 1;
    }
    dispose() {
        this._disposed = !0, this._quickDiffs = [], this._diffDelayer.cancel(), this._originalEditorModels.clear(), this._repositoryDisposables.dispose(), super.dispose();
    }
}, eps = Re([
    F(2, aC),
    F(3, L2n),
    F(4, FD),
    F(5, yi),
    F(6, Rh),
    F(7, B1)
], eps);

}
