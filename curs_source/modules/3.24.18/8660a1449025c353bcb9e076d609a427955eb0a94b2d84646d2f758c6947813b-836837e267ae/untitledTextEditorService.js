import { Gt, Nt, Qe, en, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { or, yi } from "./configuration.js";
import { Rn } from "./extensions.js";
import { It, dn } from "./instantiation.js";
import { du, gd } from "./map.js";
import { Ki, Ot } from "./network.js";
import { E } from "./tslib.es6.js";
import { Jfl, cye } from "./untitledTextEditorModel.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
var P9e, p2n;
export { P9e, p2n };
var __wakaru_M9e_initialized = false;
export function M9e() {
if (__wakaru_M9e_initialized) return;
__wakaru_M9e_initialized = true;
"use strict";
E(), fn(), It(), Jfl(), or(), Gt(), du(), Ki(), Qe(), Rn(), P9e = jn("untitledTextEditorService"), p2n = class extends st {
    constructor(t, e){
        super(), this.instantiationService = t, this.configurationService = e, this._onDidSave = this._register(new tt), this.onDidSave = this._onDidSave.event, this._onDidChangeDirty = this._register(new tt), this.onDidChangeDirty = this._onDidChangeDirty.event, this._onDidChangeEncoding = this._register(new tt), this.onDidChangeEncoding = this._onDidChangeEncoding.event, this._onDidCreate = this._register(new tt), this.onDidCreate = this._onDidCreate.event, this._onWillDispose = this._register(new tt), this.onWillDispose = this._onWillDispose.event, this._onDidChangeLabel = this._register(new tt), this.onDidChangeLabel = this._onDidChangeLabel.event, this.mapResourceToModel = new gd;
    }
    get(t) {
        return this.mapResourceToModel.get(t);
    }
    getValue(t) {
        return this.get(t)?.textEditorModel?.getValue();
    }
    async resolve(t) {
        const e = this.doCreateOrGet(t);
        return await e.resolve(), e;
    }
    create(t) {
        return this.doCreateOrGet(t);
    }
    doCreateOrGet(t = Object.create(null)) {
        const e = this.massageOptions(t);
        return e.untitledResource && this.mapResourceToModel.has(e.untitledResource) ? this.mapResourceToModel.get(e.untitledResource) : this.doCreate(e);
    }
    massageOptions(t) {
        const e = Object.create(null);
        if (t.associatedResource ? (e.untitledResource = rt.from({
            scheme: Ot.untitled,
            authority: t.associatedResource.authority,
            fragment: t.associatedResource.fragment,
            path: t.associatedResource.path,
            query: t.associatedResource.query
        }), e.associatedResource = t.associatedResource) : t.untitledResource?.scheme === Ot.untitled && (e.untitledResource = t.untitledResource), t.languageId) e.languageId = t.languageId;
        else if (!e.associatedResource) {
            const n = this.configurationService.getValue();
            n.files?.defaultLanguage && (e.languageId = n.files.defaultLanguage);
        }
        return e.encoding = t.encoding, e.initialValue = t.initialValue, e;
    }
    doCreate(t) {
        let e = t.untitledResource;
        if (!e) {
            let i = 1;
            do e = rt.from({
                scheme: Ot.untitled,
                path: `Untitled-${i}`
            }), i++;
            while (this.mapResourceToModel.has(e))
        }
        const n = this._register(this.instantiationService.createInstance(cye, e, !!t.associatedResource, t.initialValue, t.languageId, t.encoding));
        return this.registerModel(n), n;
    }
    registerModel(t) {
        const e = new Nt;
        e.add(t.onDidChangeDirty(()=>this._onDidChangeDirty.fire(t))), e.add(t.onDidChangeName(()=>this._onDidChangeLabel.fire(t))), e.add(t.onDidChangeEncoding(()=>this._onDidChangeEncoding.fire(t))), e.add(t.onWillDispose(()=>this._onWillDispose.fire(t))), en.once(t.onWillDispose)(()=>{
            this.mapResourceToModel.delete(t.resource), e.dispose();
        }), this.mapResourceToModel.set(t.resource, t), this._onDidCreate.fire(t), t.isDirty() && this._onDidChangeDirty.fire(t);
    }
    isUntitledWithAssociatedResource(t) {
        return t.scheme === Ot.untitled && t.path.length > 1 && !p2n.UNTITLED_WITHOUT_ASSOCIATED_RESOURCE_REGEX.test(t.path);
    }
    canDispose(t) {
        return t.isDisposed() ? !0 : this.doCanDispose(t);
    }
    async doCanDispose(t) {
        return t.isDirty() ? (await en.toPromise(t.onDidChangeDirty), this.canDispose(t)) : !0;
    }
    notifyDidSave(t, e) {
        this._onDidSave.fire({
            source: t,
            target: e
        });
    }
}, p2n.UNTITLED_WITHOUT_ASSOCIATED_RESOURCE_REGEX = /Untitled-\d+/, p2n = Re([
    F(0, dn),
    F(1, yi)
], p2n), bn(P9e, p2n, 1);

}
