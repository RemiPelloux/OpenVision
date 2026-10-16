import { Nc, Nt, Qe, x5 } from "./Iwo.js";
import { $vn, lXd } from "./LYd.js";
import { OCe, OPe } from "./customEditorLabelService.js";
import { Wo, gr } from "./editorService.js";
import { od, sT } from "./editor_2.js";
import { fo, ps } from "./environmentService.js";
import { is, ms } from "./files.js";
import { YI, fT } from "./filesConfigurationService.js";
import { Yp, qg } from "./label.js";
import { Rd, ih } from "./pathService.js";
import { Em, Rh } from "./resolverService.js";
import { Lr, gu } from "./resources.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { EMe, jEt } from "./textResourceEditorInput.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var SV;
export { SV };
var __wakaru_aKt_initialized = false;
export function aKt() {
if (__wakaru_aKt_initialized) return;
__wakaru_aKt_initialized = true;
"use strict";
E(), od(), jEt(), u_(), qg(), Wo(), ms(), Lr(), fo(), ih(), YI(), Em(), Qe(), FC(), OPe(), SV = class extends EMe {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        super(t.resource, void 0, i, e, n, r, a, c, u), this.model = t, this.environmentService = s, this.pathService = o, this.textModelService = l, this.modelResolve = void 0, this.modelDisposables = this._register(new Nt), this.cachedUntitledTextEditorModelReference = void 0, this.registerModelListeners(t), this._register(this.textFileService.untitled.onDidCreate((d)=>this.onDidCreateUntitledModel(d)));
    }
    get typeId() {
        return SV.ID;
    }
    get editorId() {
        return sT.id;
    }
    registerModelListeners(t) {
        this.modelDisposables.clear(), this.modelDisposables.add(t.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this.modelDisposables.add(t.onDidChangeName(()=>this._onDidChangeLabel.fire())), this.modelDisposables.add(t.onDidRevert(()=>this.dispose()));
    }
    onDidCreateUntitledModel(t) {
        gu(t.resource, this.model.resource) && t !== this.model && (this.model = t, this.registerModelListeners(t));
    }
    getName() {
        return this.model.name;
    }
    getDescription(t = 1) {
        if (!this.model.hasAssociatedFilePath) {
            const e = this.resource.path;
            return e !== this.getName() ? e : void 0;
        }
        return super.getDescription(t);
    }
    getTitle(t) {
        if (!this.model.hasAssociatedFilePath) {
            const e = this.getName(), n = this.getDescription();
            return n && n !== e ? `${e} \u2022 ${n}` : e;
        }
        return super.getTitle(t);
    }
    isDirty() {
        return this.model.isDirty();
    }
    getEncoding() {
        return this.model.getEncoding();
    }
    setEncoding(t, e) {
        return this.model.setEncoding(t);
    }
    get hasLanguageSetExplicitly() {
        return this.model.hasLanguageSetExplicitly;
    }
    get hasAssociatedFilePath() {
        return this.model.hasAssociatedFilePath;
    }
    setLanguageId(t, e) {
        this.model.setLanguageId(t, e);
    }
    getLanguageId() {
        return this.model.getLanguageId();
    }
    async resolve() {
        return this.modelResolve || (this.modelResolve = (async ()=>{
            this.cachedUntitledTextEditorModelReference = await this.textModelService.createModelReference(this.resource);
        })()), await this.modelResolve, this.isDisposed() && this.disposeModelReference(), this.model;
    }
    toUntyped(t) {
        const e = {
            resource: this.model.hasAssociatedFilePath ? x5(this.model.resource, this.environmentService.remoteAuthority, this.pathService.defaultUriScheme) : this.resource,
            forceUntitled: !0,
            options: {
                override: this.editorId
            }
        };
        return typeof t?.preserveViewState == "number" && (e.encoding = this.getEncoding(), e.languageId = this.getLanguageId(), e.contents = this.model.isModified() ? this.model.textEditorModel?.getValue() : void 0, e.options.viewState = $vn(this, t.preserveViewState, this.editorService), typeof e.contents == "string" && !this.model.hasAssociatedFilePath && !t.preserveResource && (e.resource = void 0)), e;
    }
    matches(t) {
        return this === t ? !0 : t instanceof SV ? gu(t.resource, this.resource) : lXd(t) ? super.matches(t) : !1;
    }
    dispose() {
        this.modelResolve = void 0, this.disposeModelReference(), super.dispose();
    }
    disposeModelReference() {
        Nc(this.cachedUntitledTextEditorModelReference), this.cachedUntitledTextEditorModelReference = void 0;
    }
}, SV.ID = "workbench.editors.untitledEditorInput", SV = Re([
    F(1, Vf),
    F(2, Yp),
    F(3, gr),
    F(4, is),
    F(5, ps),
    F(6, Rd),
    F(7, fT),
    F(8, Rh),
    F(9, Mw),
    F(10, OCe)
], SV);

}
