import { Nt, Pn, Qe, st } from "./Iwo.js";
import { Zqd, poi } from "./diffEditorOptions.js";
import { RTr, soi } from "./diffEditorViewModel.js";
import { It, dn } from "./instantiation.js";
import { dd, xp } from "./model.js";
import { Jc } from "./observable.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { TBt, bwe } from "./utils_13.js";
import { GOd, Iii, Zo, bc, k7o, mg, uE } from "./ze.js";
var M_l, tps;
export { M_l, tps };
var __wakaru_dDg_initialized = false;
export function dDg() {
if (__wakaru_dDg_initialized) return;
__wakaru_dDg_initialized = true;
"use strict";
E(), Qe(), Jc(), It(), xp(), Zqd(), RTr(), bwe(), M_l = class extends st {
    constructor(t, e){
        super(), this.model = t, this._instantiationService = e, this._documents = k7o(this.model, this.model.documents), this._documentsArr = Zo(this, (n)=>{
            const i = this._documents.read(n);
            return i === "loading" ? [] : i;
        }), this.isLoading = Zo(this, (n)=>this._documents.read(n) === "loading"), this.items = Iii(this, this._documentsArr, (n, i)=>i.add(this._instantiationService.createInstance(tps, n, this))).recomputeInitiallyAndOnChange(this._store), this.focusedDiffItem = Zo(this, (n)=>this.items.read(n).find((i)=>i.isFocused.read(n))), this.activeDiffItem = GOd(this, (n, i)=>this.focusedDiffItem.read(n) ?? (i && this.items.read(n).indexOf(i) !== -1) ? i : void 0);
    }
    async waitForDiffs() {
        for (const t of this.items.get())await t.diffEditorViewModel.waitForDiff();
    }
    collapseAll() {
        mg((t)=>{
            for (const e of this.items.get())e.collapsed.set(!0, t);
        });
    }
    expandAll() {
        mg((t)=>{
            for (const e of this.items.get())e.collapsed.set(!1, t);
        });
    }
    get contextKeys() {
        return this.model.contextKeys;
    }
}, tps = class extends st {
    constructor(t, e, n, i){
        super(), this._editorViewModel = e, this._instantiationService = n, this._modelService = i, this.collapsed = bc(this, !1), this.lastTemplateData = bc(this, {
            contentHeight: 500,
            selections: void 0
        }), this.isActive = Zo(this, (c)=>this._editorViewModel.activeDiffItem.read(c) === this), this._isFocusedSource = bc(this, uE(!1)), this.isFocused = Zo(this, (c)=>this._isFocusedSource.read(c).read(c)), this.isAlive = bc(this, !0), this._register(Pn(()=>{
            this.isAlive.set(!1, void 0);
        })), this.documentDiffItemRef = this._register(t.createNewRef(this));
        function r(c) {
            return {
                ...c,
                hideUnchangedRegions: {
                    enabled: !0
                }
            };
        }
        const s = this._instantiationService.createInstance(poi, r(this.documentDiffItem.options || {}));
        this.documentDiffItem.onOptionsDidChange && this._register(this.documentDiffItem.onOptionsDidChange(()=>{
            s.updateOptions(r(this.documentDiffItem.options || {}));
        }));
        const o = new Nt, a = this.documentDiffItem.original ?? o.add(this._modelService.createModel("", null)), l = this.documentDiffItem.modified ?? o.add(this._modelService.createModel("", null));
        o.add(this.documentDiffItemRef.createNewRef(this)), this.diffEditorViewModelRef = this._register(TBt.createWithDisposable(this._instantiationService.createInstance(soi, {
            original: a,
            modified: l
        }, s), o, this));
    }
    get diffEditorViewModel() {
        return this.diffEditorViewModelRef.object;
    }
    get originalUri() {
        return this.documentDiffItem.original?.uri;
    }
    get modifiedUri() {
        return this.documentDiffItem.modified?.uri;
    }
    setIsFocused(t, e) {
        this._isFocusedSource.set(t, e);
    }
    get documentDiffItem() {
        return this.documentDiffItemRef.object;
    }
    getKey() {
        return JSON.stringify([
            this.originalUri?.toString(),
            this.modifiedUri?.toString()
        ]);
    }
}, tps = Re([
    F(2, dn),
    F(3, dd)
], tps);

}
