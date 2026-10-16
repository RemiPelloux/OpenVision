import { C, ie } from "./actions_2.js";
import { Gde, ooe } from "./customEditorLabelService.js";
import { Ni, hn } from "./editorService.js";
import { _S, xc } from "./editor_2.js";
import { Fi, Ii } from "./files.js";
import { $w, aE } from "./filesConfigurationService.js";
import { dc, yu } from "./label.js";
import { gt, li } from "./network.js";
import { Mfn, Q7 } from "./qIc.js";
import { Nl, bc } from "./resolverService.js";
import { hBn, mMh } from "./resourceEditorInput.js";
import { Ac, Li } from "./resources.js";
import { Mv } from "./textModel.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { FBh, _5n } from "./textResourceEditorModel.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
var abe, cbe;
export { abe, cbe };
var __wakaru_i7e_initialized = false;
export function i7e() {
if (__wakaru_i7e_initialized) return;
__wakaru_i7e_initialized = true;
"use strict";
x(), xc(), mMh(), Ag(), Ni(), Fi(), yu(), li(), Li(), Nl(), FBh(), Mv(), aE(), M_(), Gde(), abe = class extends hBn {
    constructor(e, t, n, i, r, s, o, a, c){
        super(e, t, r, s, o, a, c), this.editorService = n, this.textFileService = i;
    }
    save(e, t) {
        return this.resource.scheme !== gt.untitled && !this.fileService.hasProvider(this.resource) ? this.saveAs(e, t) : this.doSave(t, !1, e);
    }
    saveAs(e, t) {
        return this.doSave(t, !0, e);
    }
    async doSave(e, t, n) {
        let i;
        if (t ? i = await this.textFileService.saveAs(this.resource, void 0, {
            ...e,
            suggestedTarget: this.preferredResource
        }) : i = await this.textFileService.save(this.resource, e), !!i) return {
            resource: i
        };
    }
    async revert(e, t) {
        await this.textFileService.revert(this.resource, t);
    }
}, abe = ie([
    C(2, hn),
    C(3, Xp),
    C(4, dc),
    C(5, Ii),
    C(6, $w),
    C(7, $v),
    C(8, ooe)
], abe), cbe = class extends abe {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p){
        super(e, void 0, a, o, l, c, u, h, p), this.name = t, this.description = n, this.preferredLanguageId = i, this.preferredContents = r, this.textModelService = s, this.cachedModel = void 0, this.modelReference = void 0;
    }
    get typeId() {
        return cbe.ID;
    }
    get editorId() {
        return _S.id;
    }
    getName() {
        return this.name || super.getName();
    }
    setName(e) {
        this.name !== e && (this.name = e, this._onDidChangeLabel.fire());
    }
    getDescription() {
        return this.description;
    }
    setDescription(e) {
        this.description !== e && (this.description = e, this._onDidChangeLabel.fire());
    }
    setLanguageId(e, t) {
        this.setPreferredLanguageId(e), this.cachedModel?.setLanguageId(e, t);
    }
    setPreferredLanguageId(e) {
        this.preferredLanguageId = e;
    }
    setPreferredContents(e) {
        this.preferredContents = e;
    }
    async resolve() {
        const e = this.preferredContents, t = this.preferredLanguageId;
        this.preferredContents = void 0, this.preferredLanguageId = void 0, this.modelReference || (this.modelReference = this.textModelService.createModelReference(this.resource));
        const n = await this.modelReference, i = n.object;
        if (!(i instanceof _5n)) throw n.dispose(), this.modelReference = void 0, new Error(`Unexpected model for TextResourceEditorInput: ${this.resource}`);
        return this.cachedModel = i, (typeof e == "string" || typeof t == "string") && i.updateTextEditorModel(typeof e == "string" ? Mfn(e) : void 0, t), i;
    }
    matches(e) {
        return this === e ? !0 : e instanceof cbe ? Ac(e.resource, this.resource) : Q7(e) ? super.matches(e) : !1;
    }
    dispose() {
        this.modelReference && (this.modelReference.then((e)=>e.dispose()), this.modelReference = void 0), this.cachedModel = void 0, super.dispose();
    }
}, cbe.ID = "workbench.editors.resourceEditorInput", cbe = ie([
    C(5, bc),
    C(6, Xp),
    C(7, hn),
    C(8, Ii),
    C(9, dc),
    C(10, $w),
    C(11, $v),
    C(12, ooe)
], cbe);

}
