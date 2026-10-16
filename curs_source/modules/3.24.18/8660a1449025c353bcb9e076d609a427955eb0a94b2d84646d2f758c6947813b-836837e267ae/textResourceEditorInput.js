import { PY } from "./LYd.js";
import { OCe, OPe } from "./customEditorLabelService.js";
import { Wo, gr } from "./editorService.js";
import { od, sT } from "./editor_2.js";
import { is, ms } from "./files.js";
import { YI, fT } from "./filesConfigurationService.js";
import { Yp, qg } from "./label.js";
import { Ki, Ot } from "./network.js";
import { Em, Rh } from "./resolverService.js";
import { GIi, oyg } from "./resourceEditorInput.js";
import { Lr, gu } from "./resources.js";
import { PC } from "./textModel.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { hRg, kAi } from "./textResourceEditorModel.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { lsi } from "./ze.js";
var EMe, R9e;
export { EMe, R9e };
var __wakaru_jEt_initialized = false;
export function jEt() {
if (__wakaru_jEt_initialized) return;
__wakaru_jEt_initialized = true;
"use strict";
E(), od(), oyg(), u_(), Wo(), ms(), qg(), Ki(), Lr(), Em(), hRg(), PC(), YI(), FC(), OPe(), EMe = class extends GIi {
    constructor(t, e, n, i, r, s, o, a, l){
        super(t, e, r, s, o, a, l), this.editorService = n, this.textFileService = i;
    }
    save(t, e) {
        return this.resource.scheme !== Ot.untitled && !this.fileService.hasProvider(this.resource) ? this.saveAs(t, e) : this.doSave(e, !1, t);
    }
    saveAs(t, e) {
        return this.doSave(e, !0, t);
    }
    async doSave(t, e, n) {
        let i;
        if (e ? i = await this.textFileService.saveAs(this.resource, void 0, {
            ...t,
            suggestedTarget: this.preferredResource
        }) : i = await this.textFileService.save(this.resource, t), !!i) return {
            resource: i
        };
    }
    async revert(t, e) {
        await this.textFileService.revert(this.resource, e);
    }
}, EMe = Re([
    F(2, gr),
    F(3, Vf),
    F(4, Yp),
    F(5, is),
    F(6, fT),
    F(7, Mw),
    F(8, OCe)
], EMe), R9e = class extends EMe {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h){
        super(t, void 0, a, o, c, l, u, d, h), this.name = e, this.description = n, this.preferredLanguageId = i, this.preferredContents = r, this.textModelService = s, this.cachedModel = void 0, this.modelReference = void 0;
    }
    get typeId() {
        return R9e.ID;
    }
    get editorId() {
        return sT.id;
    }
    getName() {
        return this.name || super.getName();
    }
    setName(t) {
        this.name !== t && (this.name = t, this._onDidChangeLabel.fire());
    }
    getDescription() {
        return this.description;
    }
    setDescription(t) {
        this.description !== t && (this.description = t, this._onDidChangeLabel.fire());
    }
    setLanguageId(t, e) {
        this.setPreferredLanguageId(t), this.cachedModel?.setLanguageId(t, e);
    }
    setPreferredLanguageId(t) {
        this.preferredLanguageId = t;
    }
    setPreferredContents(t) {
        this.preferredContents = t;
    }
    async resolve() {
        const t = this.preferredContents, e = this.preferredLanguageId;
        this.preferredContents = void 0, this.preferredLanguageId = void 0, this.modelReference || (this.modelReference = this.textModelService.createModelReference(this.resource));
        const n = await this.modelReference, i = n.object;
        if (!(i instanceof kAi)) throw n.dispose(), this.modelReference = void 0, new Error(`Unexpected model for TextResourceEditorInput: ${this.resource}`);
        return this.cachedModel = i, (typeof t == "string" || typeof e == "string") && i.updateTextEditorModel(typeof t == "string" ? lsi(t) : void 0, e), i;
    }
    matches(t) {
        return this === t ? !0 : t instanceof R9e ? gu(t.resource, this.resource) : PY(t) ? super.matches(t) : !1;
    }
    dispose() {
        this.modelReference && (this.modelReference.then((t)=>t.dispose()), this.modelReference = void 0), this.cachedModel = void 0, super.dispose();
    }
}, R9e.ID = "workbench.editors.resourceEditorInput", R9e = Re([
    F(5, Rh),
    F(6, Vf),
    F(7, gr),
    F(8, is),
    F(9, Yp),
    F(10, fT),
    F(11, Mw),
    F(12, OCe)
], R9e);

}
