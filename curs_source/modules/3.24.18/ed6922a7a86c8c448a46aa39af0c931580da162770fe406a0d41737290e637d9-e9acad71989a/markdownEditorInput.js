import { nFd } from "./A3u.js";
import { He, Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Pe, _i } from "./codicons.js";
import { H0, MA } from "./editorInput.js";
import { Xl, ba } from "./path_2.js";
import { Nl, bc } from "./resolverService.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var u8, ZLh;
export { ZLh, u8 };
var __wakaru_NBn_initialized = false;
export function NBn() {
if (__wakaru_NBn_initialized) return;
__wakaru_NBn_initialized = true;
"use strict";
x(), MA(), _i(), Se(), Qt(), ba(), Ag(), Nl(), bt(), u8 = class extends H0 {
    constructor(e, t, n){
        super(), this._resource = e, this._textFileService = t, this._textModelService = n, this._onDidChangeDirty = this._register(new ve), this._onDidChangeContent = this._register(new ve), this._onDidSave = this._register(new ve), this._onWillSave = this._register(new ve), this._disposables = this._register(new He), this._modelListeners = this._register(new He), this.onWillSave = this._onWillSave.event, this.onDidChangeDirty = this._onDidChangeDirty.event, this.onDidChangeContent = this._onDidChangeContent.event, this.onDidSave = this._onDidSave.event, this._ensureModel().catch(()=>{});
    }
    get typeId() {
        return u8.TypeID;
    }
    get editorId() {
        return u8.EditorID;
    }
    get resource() {
        return this._resource;
    }
    getName() {
        return Xl(this._resource.path);
    }
    getIcon() {
        return Pe.markdown;
    }
    isDirty() {
        return this._textFileService.isDirty(this._resource);
    }
    isModified() {
        return this.isDirty();
    }
    isReadonly() {
        return !1;
    }
    isSaving() {
        return !1;
    }
    hasCapability(e) {
        return !1;
    }
    getResource() {
        return this._resource;
    }
    async _ensureModel() {
        return this._model ? this._model : (this._modelResolve || (this._modelResolve = this._textModelService.createModelReference(this._resource).then((e)=>{
            if (this._store.isDisposed) {
                e.dispose();
                return;
            }
            this._modelRef = e;
            const t = e.object;
            if (!nFd(t)) return;
            const n = t;
            return this._model = n, this._modelListeners.clear(), this._modelListeners.add(n.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this._modelListeners.add(n.onDidChangeContent(()=>this._onDidChangeContent.fire())), this._modelListeners.add(n.onDidSave((i)=>this._onDidSave.fire(i))), this._onDidChangeDirty.fire(), n;
        })), this._modelResolve);
    }
    setContent(e) {
        const t = this._model?.textEditorModel;
        if (!t) {
            this._ensureModel().then(()=>this.setContent(e)).catch(()=>{});
            return;
        }
        t.getValue() !== e && t.pushEditOperations(null, [
            {
                range: t.getFullModelRange(),
                text: e
            }
        ], ()=>null);
    }
    getContent() {
        return this._model?.textEditorModel?.getValue() ?? "";
    }
    async resolve() {
        return await this._ensureModel().catch(()=>{}), null;
    }
    async save(e, t) {
        return this._onWillSave.fire(), await this._textFileService.save(this._resource, t) ? this : void 0;
    }
    async revert(e, t) {
        await this._textFileService.revert(this._resource, t);
    }
    toJSON() {
        return {
            resource: this._resource.toString()
        };
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: u8.EditorID
            }
        };
    }
    matches(e) {
        return super.matches(e) ? !0 : e instanceof u8 ? e.resource.toString() === this.resource.toString() : !1;
    }
    dispose() {
        this._modelListeners.dispose(), this._disposables.dispose(), this._modelRef?.dispose(), this._modelRef = void 0, this._model = void 0, super.dispose();
    }
}, u8.TypeID = "workbench.input.markdown", u8.EditorID = "workbench.editor.markdown", u8 = ie([
    C(1, Xp),
    C(2, bc)
], u8), ZLh = class extends we {
    constructor(){
        super();
    }
    canSerialize(e) {
        return e instanceof u8;
    }
    serialize(e) {
        if (e instanceof u8) return JSON.stringify(e.toJSON());
    }
    deserialize(e, t) {
        try {
            const n = JSON.parse(t);
            if (n.resource) {
                const i = Ee.parse(n.resource);
                return e.createInstance(u8, i);
            }
        } catch (n) {
            console.error("Error deserializing MarkdownEditorInput:", n);
        }
    }
};

}
