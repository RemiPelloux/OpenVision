import { He, Lo, Se, XL } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Gde, ooe } from "./customEditorLabelService.js";
import { Ni, hn } from "./editorService.js";
import { _S, xc } from "./editor_2.js";
import { Vr, Yi } from "./environmentService.js";
import { Fi, Ii } from "./files.js";
import { $w, aE } from "./filesConfigurationService.js";
import { dc, yu } from "./label.js";
import { fu, zl } from "./pathService.js";
import { L3t, nKc } from "./qIc.js";
import { Nl, bc } from "./resolverService.js";
import { Ac, Li } from "./resources.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { abe, i7e } from "./textResourceEditorInput.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
var p8;
export { p8 };
var __wakaru_A0t_initialized = false;
export function A0t() {
if (__wakaru_A0t_initialized) return;
__wakaru_A0t_initialized = true;
"use strict";
x(), xc(), i7e(), Ag(), yu(), Ni(), Fi(), Li(), Vr(), fu(), aE(), Nl(), Se(), M_(), Gde(), p8 = class extends abe {
    constructor(e, t, n, i, r, s, o, a, c, l, u){
        super(e.resource, void 0, i, t, n, r, a, l, u), this.model = e, this.environmentService = s, this.pathService = o, this.textModelService = c, this.modelResolve = void 0, this.modelDisposables = this._register(new He), this.cachedUntitledTextEditorModelReference = void 0, this.registerModelListeners(e), this._register(this.textFileService.untitled.onDidCreate((h)=>this.onDidCreateUntitledModel(h)));
    }
    get typeId() {
        return p8.ID;
    }
    get editorId() {
        return _S.id;
    }
    registerModelListeners(e) {
        this.modelDisposables.clear(), this.modelDisposables.add(e.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this.modelDisposables.add(e.onDidChangeName(()=>this._onDidChangeLabel.fire())), this.modelDisposables.add(e.onDidRevert(()=>this.dispose()));
    }
    onDidCreateUntitledModel(e) {
        Ac(e.resource, this.model.resource) && e !== this.model && (this.model = e, this.registerModelListeners(e));
    }
    getName() {
        return this.model.name;
    }
    getDescription(e = 1) {
        if (!this.model.hasAssociatedFilePath) {
            const t = this.resource.path;
            return t !== this.getName() ? t : void 0;
        }
        return super.getDescription(e);
    }
    getTitle(e) {
        if (!this.model.hasAssociatedFilePath) {
            const t = this.getName(), n = this.getDescription();
            return n && n !== t ? `${t} \u2022 ${n}` : t;
        }
        return super.getTitle(e);
    }
    isDirty() {
        return this.model.isDirty();
    }
    getEncoding() {
        return this.model.getEncoding();
    }
    setEncoding(e, t) {
        return this.model.setEncoding(e);
    }
    get hasLanguageSetExplicitly() {
        return this.model.hasLanguageSetExplicitly;
    }
    get hasAssociatedFilePath() {
        return this.model.hasAssociatedFilePath;
    }
    setLanguageId(e, t) {
        this.model.setLanguageId(e, t);
    }
    getLanguageId() {
        return this.model.getLanguageId();
    }
    async resolve() {
        return this.modelResolve || (this.modelResolve = (async ()=>{
            this.cachedUntitledTextEditorModelReference = await this.textModelService.createModelReference(this.resource);
        })()), await this.modelResolve, this.isDisposed() && this.disposeModelReference(), this.model;
    }
    toUntyped(e) {
        const t = {
            resource: this.model.hasAssociatedFilePath ? XL(this.model.resource, this.environmentService.remoteAuthority, this.pathService.defaultUriScheme) : this.resource,
            forceUntitled: !0,
            options: {
                override: this.editorId
            }
        };
        return typeof e?.preserveViewState == "number" && (t.encoding = this.getEncoding(), t.languageId = this.getLanguageId(), t.contents = this.model.isModified() ? this.model.textEditorModel?.getValue() : void 0, t.options.viewState = L3t(this, e.preserveViewState, this.editorService), typeof t.contents == "string" && !this.model.hasAssociatedFilePath && !e.preserveResource && (t.resource = void 0)), t;
    }
    matches(e) {
        return this === e ? !0 : e instanceof p8 ? Ac(e.resource, this.resource) : nKc(e) ? super.matches(e) : !1;
    }
    dispose() {
        this.modelResolve = void 0, this.disposeModelReference(), super.dispose();
    }
    disposeModelReference() {
        Lo(this.cachedUntitledTextEditorModelReference), this.cachedUntitledTextEditorModelReference = void 0;
    }
}, p8.ID = "workbench.editors.untitledEditorInput", p8 = ie([
    C(1, Xp),
    C(2, dc),
    C(3, hn),
    C(4, Ii),
    C(5, Yi),
    C(6, zl),
    C(7, $w),
    C(8, bc),
    C(9, $v),
    C(10, ooe)
], p8);

}
