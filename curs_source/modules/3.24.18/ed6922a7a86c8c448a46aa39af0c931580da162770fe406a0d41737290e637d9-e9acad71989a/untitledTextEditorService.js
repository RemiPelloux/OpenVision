import { Ct, He, Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { Pn } from "./extensions.js";
import { Ze, _t } from "./instantiation.js";
import { Mc, oc } from "./map.js";
import { gt, li } from "./network.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Roe, bDo } from "./untitledTextEditorModel.js";
import { Ee, Qt } from "./uri.js";
var wnt, azt;
export { azt, wnt };
var __wakaru_M0t_initialized = false;
export function M0t() {
if (__wakaru_M0t_initialized) return;
__wakaru_M0t_initialized = true;
"use strict";
x(), Qt(), Ze(), bDo(), Cn(), bt(), oc(), li(), Se(), Pn(), wnt = vn("untitledTextEditorService"), azt = class extends we {
    constructor(e, t){
        super(), this.instantiationService = e, this.configurationService = t, this._onDidSave = this._register(new ve), this.onDidSave = this._onDidSave.event, this._onDidChangeDirty = this._register(new ve), this.onDidChangeDirty = this._onDidChangeDirty.event, this._onDidChangeEncoding = this._register(new ve), this.onDidChangeEncoding = this._onDidChangeEncoding.event, this._onDidCreate = this._register(new ve), this.onDidCreate = this._onDidCreate.event, this._onWillDispose = this._register(new ve), this.onWillDispose = this._onWillDispose.event, this._onDidChangeLabel = this._register(new ve), this.onDidChangeLabel = this._onDidChangeLabel.event, this.mapResourceToModel = new Mc;
    }
    get(e) {
        return this.mapResourceToModel.get(e);
    }
    getValue(e) {
        return this.get(e)?.textEditorModel?.getValue();
    }
    async resolve(e) {
        const t = this.doCreateOrGet(e);
        return await t.resolve(), t;
    }
    create(e) {
        return this.doCreateOrGet(e);
    }
    doCreateOrGet(e = Object.create(null)) {
        const t = this.massageOptions(e);
        return t.untitledResource && this.mapResourceToModel.has(t.untitledResource) ? this.mapResourceToModel.get(t.untitledResource) : this.doCreate(t);
    }
    massageOptions(e) {
        const t = Object.create(null);
        if (e.associatedResource ? (t.untitledResource = Ee.from({
            scheme: gt.untitled,
            authority: e.associatedResource.authority,
            fragment: e.associatedResource.fragment,
            path: e.associatedResource.path,
            query: e.associatedResource.query
        }), t.associatedResource = e.associatedResource) : e.untitledResource?.scheme === gt.untitled && (t.untitledResource = e.untitledResource), e.languageId) t.languageId = e.languageId;
        else if (!t.associatedResource) {
            const n = this.configurationService.getValue();
            n.files?.defaultLanguage && (t.languageId = n.files.defaultLanguage);
        }
        return t.encoding = e.encoding, t.initialValue = e.initialValue, t;
    }
    doCreate(e) {
        let t = e.untitledResource;
        if (!t) {
            let i = 1;
            do t = Ee.from({
                scheme: gt.untitled,
                path: `Untitled-${i}`
            }), i++;
            while (this.mapResourceToModel.has(t))
        }
        const n = this._register(this.instantiationService.createInstance(Roe, t, !!e.associatedResource, e.initialValue, e.languageId, e.encoding));
        return this.registerModel(n), n;
    }
    registerModel(e) {
        const t = new He;
        t.add(e.onDidChangeDirty(()=>this._onDidChangeDirty.fire(e))), t.add(e.onDidChangeName(()=>this._onDidChangeLabel.fire(e))), t.add(e.onDidChangeEncoding(()=>this._onDidChangeEncoding.fire(e))), t.add(e.onWillDispose(()=>this._onWillDispose.fire(e))), Ct.once(e.onWillDispose)(()=>{
            this.mapResourceToModel.delete(e.resource), t.dispose();
        }), this.mapResourceToModel.set(e.resource, e), this._onDidCreate.fire(e), e.isDirty() && this._onDidChangeDirty.fire(e);
    }
    isUntitledWithAssociatedResource(e) {
        return e.scheme === gt.untitled && e.path.length > 1 && !azt.UNTITLED_WITHOUT_ASSOCIATED_RESOURCE_REGEX.test(e.path);
    }
    canDispose(e) {
        return e.isDisposed() ? !0 : this.doCanDispose(e);
    }
    async doCanDispose(e) {
        return e.isDirty() ? (await Ct.toPromise(e.onDidChangeDirty), this.canDispose(e)) : !0;
    }
    notifyDidSave(e, t) {
        this._onDidSave.fire({
            source: e,
            target: t
        });
    }
}, azt.UNTITLED_WITHOUT_ASSOCIATED_RESOURCE_REGEX = /Untitled-\d+/, azt = ie([
    C(0, _t),
    C(1, qt)
], azt), mn(wnt, azt, 1);

}
