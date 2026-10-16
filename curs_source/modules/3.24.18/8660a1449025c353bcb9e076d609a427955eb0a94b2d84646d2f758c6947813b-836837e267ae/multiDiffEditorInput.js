import { $m, D, Ei, Gt, Hc, Nt, Qe, Vh, Vn, en, st, xh, xr, zYu } from "./Iwo.js";
import { c_t } from "./SZu.js";
import { bNk, mDg, yNk } from "./Ycg.js";
import { qn, vZu } from "./async.js";
import { Jd } from "./autorun.js";
import { AA, qO } from "./editorInput.js";
import { D6, M6, c0 } from "./editorResolverService.js";
import { od, sT } from "./editor_2.js";
import { D_l, hDg } from "./icons.contribution.js";
import { It, dn } from "./instantiation.js";
import { Yq } from "./marshalling.js";
import { M_l, dDg } from "./multiDiffEditorViewModel.js";
import { F2n, SKt, kKt } from "./multiDiffSourceResolverService.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Jc } from "./observable.js";
import { HOd } from "./promise.js";
import { Em, Rh } from "./resolverService.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { hgn } from "./utils_10.js";
import { TBt, bwe } from "./utils_13.js";
import { Hve, Iii, Zo, bc, k7o, uE } from "./ze.js";
var SG, gDg, B2n, fDg;
export { B2n, SG, fDg, gDg };
var __wakaru_U2n_initialized = false;
export function U2n() {
if (__wakaru_U2n_initialized) return;
__wakaru_U2n_initialized = true;
"use strict";
E(), qn(), Ei(), Gt(), Qe(), Yq(), Ki(), cp(), Jc(), To(), fn(), bwe(), dDg(), Em(), FC(), Bt(), It(), od(), qO(), D6(), u_(), hDg(), kKt(), SG = class extends AA {
    constructor(t, e, n, i = !1, r, s, o, a, l){
        super(), this.multiDiffSource = t, this.label = e, this.initialResources = n, this.isTransient = i, this._textModelService = r, this._textResourceConfigurationService = s, this._instantiationService = o, this._multiDiffSourceResolverService = a, this._textFileService = l, this._name = "", this._viewModel = new vZu(()=>this._createViewModel()), this._resolvedSource = new HOd(async ()=>{
            const c = this.initialResources ? {
                resources: zYu.const(this.initialResources)
            } : await this._multiDiffSourceResolverService.resolve(this.multiDiffSource);
            return {
                source: c,
                resources: c ? k7o(this, c.resources) : uE([])
            };
        }), this.resources = Zo(this, (c)=>this._resolvedSource.cachedPromiseResult.read(c)?.data?.resources.read(c)), this.textFileServiceOnDidChange = this._register(new gDg(this._textFileService.files.onDidChangeDirty, (c)=>c.resource.toString(), (c)=>c.toString())), this._isDirtyObservables = Iii(this, this.resources.map((c)=>c ?? []), (c)=>{
            const u = c.modifiedUri ? mDg(this.textFileServiceOnDidChange, this._textFileService, c.modifiedUri) : uE(!1), d = c.originalUri ? mDg(this.textFileServiceOnDidChange, this._textFileService, c.originalUri) : uE(!1);
            return Zo((h)=>u.read(h) || d.read(h));
        }, (c)=>c.getKey()), this._isDirtyObservable = Zo(this, (c)=>this._isDirtyObservables.read(c).some((u)=>u.read(c))).keepObserved(this._store), this.onDidChangeDirty = en.fromObservableLight(this._isDirtyObservable), this.closeHandler = {
            async confirm () {
                return 1;
            },
            showConfirm () {
                return !1;
            }
        }, this._register(Jd((c)=>{
            const u = this.resources.read(c), d = this.label ?? D(7856, null);
            u && u.length === 1 ? this._name = D(7857, null, d) : u ? this._name = D(7858, null, d, u.length) : this._name = d, this._onDidChangeLabel.fire();
        }));
    }
    static fromResourceMultiDiffEditorInput(t, e) {
        if (!t.multiDiffSource && !t.resources) throw new xh("MultiDiffEditorInput requires either multiDiffSource or resources");
        const n = t.multiDiffSource ?? rt.parse(`multi-diff-editor:${new Date().getMilliseconds().toString() + Math.random().toString()}`);
        return e.createInstance(SG, n, t.label, t.resources?.map((i)=>new SKt(i.original.resource, i.modified.resource, i.goToFileResource)), t.isTransient ?? !1);
    }
    static fromSerialized(t, e) {
        return e.createInstance(SG, rt.parse(t.multiDiffSourceUri), t.label, t.resources?.map((n)=>new SKt(n.originalUri ? rt.parse(n.originalUri) : void 0, n.modifiedUri ? rt.parse(n.modifiedUri) : void 0, n.goToFileUri ? rt.parse(n.goToFileUri) : void 0)), !1);
    }
    get resource() {
        return this.multiDiffSource;
    }
    get capabilities() {
        return 2;
    }
    get typeId() {
        return SG.ID;
    }
    getName() {
        return this._name;
    }
    get editorId() {
        return sT.id;
    }
    getIcon() {
        return D_l;
    }
    serialize() {
        return {
            label: this.label,
            multiDiffSourceUri: this.multiDiffSource.toString(),
            resources: this.initialResources?.map((t)=>({
                    originalUri: t.originalUri?.toString(),
                    modifiedUri: t.modifiedUri?.toString(),
                    goToFileUri: t.goToFileUri?.toString()
                }))
        };
    }
    setLanguageId(t, e) {
        const i = this._viewModel.requireValue().activeDiffItem.get()?.documentDiffItem;
        if (!i) return;
        const r = i.modified ?? i.original;
        r && r.setLanguage(t, e);
    }
    async getViewModel() {
        return this._viewModel.getPromise();
    }
    async _createViewModel() {
        const t = await this._createModel();
        if (this.isDisposed()) throw t.dispose(), new Hc;
        this._register(t);
        const e = new M_l(t, this._instantiationService);
        if (this.isDisposed()) throw e.dispose(), new Hc;
        return this._register(e), await Vh(e.waitForDiffs(), 1e3), e;
    }
    async _createModel() {
        const t = await this._resolvedSource.getPromise(), e = this._textResourceConfigurationService, n = Iii(this, t.resources, async (a, l)=>{
            let c, u;
            const d = new Nt;
            try {
                [c, u] = await Promise.all([
                    a.originalUri ? this._textModelService.createModelReference(a.originalUri) : void 0,
                    a.modifiedUri ? this._textModelService.createModelReference(a.modifiedUri) : void 0
                ]), c && d.add(c), u && d.add(u);
            } catch (g) {
                console.error(g), xr(g);
                return;
            }
            const h = a.modifiedUri ?? a.originalUri, p = {
                multiDiffEditorItem: a,
                original: c?.object.textEditorModel,
                modified: u?.object.textEditorModel,
                contextKeys: a.contextKeys,
                get options () {
                    return {
                        ...bNk(u?.object.isReadonly() ?? !0),
                        ...yNk(e.getValue(h))
                    };
                },
                onOptionsDidChange: (g)=>this._textResourceConfigurationService.onDidChangeConfiguration((f)=>{
                        (f.affectsConfiguration(h, "editor") || f.affectsConfiguration(h, "diffEditor")) && g();
                    })
            };
            return l.add(TBt.createOfNonDisposable(p, d, this));
        }, (a)=>JSON.stringify([
                a.modifiedUri?.toString(),
                a.originalUri?.toString()
            ])), i = bc("documents", "loading"), r = Zo(async (a)=>{
            const l = n.read(a), u = (await Promise.all(l)).filter($m);
            i.set(u, void 0);
        }), s = Hve(r);
        return await r.get(), {
            dispose: ()=>s.dispose(),
            documents: new hgn(i),
            contextKeys: t.source?.contextKeys
        };
    }
    matches(t) {
        return super.matches(t) ? !0 : t instanceof SG ? this.multiDiffSource.toString() === t.multiDiffSource.toString() : !1;
    }
    isDirty() {
        return this._isDirtyObservable.get();
    }
    async save(t, e) {
        return await this.doSaveOrRevert("save", t, e), this;
    }
    revert(t, e) {
        return this.doSaveOrRevert("revert", t, e);
    }
    async doSaveOrRevert(t, e, n) {
        const i = this._viewModel.currentValue?.items.get();
        i && await Promise.all(i.map(async (r)=>{
            const s = r.diffEditorViewModel.model, o = s.original.uri.scheme !== Ot.untitled && this._textFileService.isDirty(s.original.uri);
            await Promise.all([
                o ? t === "save" ? this._textFileService.save(s.original.uri, n) : this._textFileService.revert(s.original.uri, n) : Promise.resolve(),
                t === "save" ? this._textFileService.save(s.modified.uri, n) : this._textFileService.revert(s.modified.uri, n)
            ]);
        }));
    }
}, SG.ID = "workbench.input.multiDiffEditor", SG = Re([
    F(4, Rh),
    F(5, Mw),
    F(6, dn),
    F(7, F2n),
    F(8, Vf)
], SG), gDg = class extends st {
    constructor(t, e, n){
        super(), this._event = t, this._getEventArgsKey = e, this._keyToString = n, this._count = 0, this._buckets = new Map, this._eventSubscription = this._register(new Vn), this._handleEventChange = (i)=>{
            const r = this._getEventArgsKey(i), s = this._buckets.get(r);
            if (s) for (const o of s)o(i);
        };
    }
    filteredEvent(t) {
        return (e)=>{
            const n = this._keyToString(t);
            let i = this._buckets.get(n);
            return i || (i = new Set, this._buckets.set(n, i)), i.add(e), this._count++, this._count === 1 && (this._eventSubscription.value = this._event(this._handleEventChange)), {
                dispose: ()=>{
                    i.delete(e), i.size === 0 && this._buckets.delete(n), this._count--, this._count === 0 && this._eventSubscription.clear();
                }
            };
        };
    }
}, B2n = class extends st {
    constructor(t, e){
        super(), this._register(t.registerEditor("*", {
            id: sT.id,
            label: sT.displayName,
            detail: sT.providerDisplayName,
            priority: c0.builtin
        }, {}, {
            createMultiDiffEditorInput: (n)=>({
                    editor: SG.fromResourceMultiDiffEditorInput(n, e)
                })
        }));
    }
}, B2n.ID = "workbench.contrib.multiDiffEditorResolver", B2n = Re([
    F(0, M6),
    F(1, dn)
], B2n), fDg = class {
    canSerialize(t) {
        return t instanceof SG && !t.isTransient;
    }
    serialize(t) {
        if (this.canSerialize(t)) return JSON.stringify(t.serialize());
    }
    deserialize(t, e) {
        try {
            const n = c_t(e);
            return SG.fromSerialized(n, t);
        } catch (n) {
            xr(n);
            return;
        }
    }
};

}
