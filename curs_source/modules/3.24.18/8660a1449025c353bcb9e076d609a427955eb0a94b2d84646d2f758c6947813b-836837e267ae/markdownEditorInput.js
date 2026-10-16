import { Gt, Nt, Qe, st, tt } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { AA, qO } from "./editorInput.js";
import { Ku, Ul } from "./path_2.js";
import { Em, Rh } from "./resolverService.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { KTn } from "./yBp.js";
var fG, q1g;
export { fG, q1g };
var __wakaru_pRn_initialized = false;
export function pRn() {
if (__wakaru_pRn_initialized) return;
__wakaru_pRn_initialized = true;
"use strict";
E(), qO(), gs(), Qe(), fn(), Ul(), u_(), Em(), Gt(), fG = class extends AA {
    constructor(t, e, n){
        super(), this._resource = t, this._textFileService = e, this._textModelService = n, this._onDidChangeDirty = this._register(new tt), this._onDidChangeContent = this._register(new tt), this._onDidSave = this._register(new tt), this._onWillSave = this._register(new tt), this._disposables = this._register(new Nt), this._modelListeners = this._register(new Nt), this.onWillSave = this._onWillSave.event, this.onDidChangeDirty = this._onDidChangeDirty.event, this.onDidChangeContent = this._onDidChangeContent.event, this.onDidSave = this._onDidSave.event, this._ensureModel().catch(()=>{});
    }
    get typeId() {
        return fG.TypeID;
    }
    get editorId() {
        return fG.EditorID;
    }
    get resource() {
        return this._resource;
    }
    getName() {
        return Ku(this._resource.path);
    }
    getIcon() {
        return yt.markdown;
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
    hasCapability(t) {
        return !1;
    }
    getResource() {
        return this._resource;
    }
    async _ensureModel() {
        return this._model ? this._model : (this._modelResolve || (this._modelResolve = this._textModelService.createModelReference(this._resource).then((t)=>{
            if (this._store.isDisposed) {
                t.dispose();
                return;
            }
            this._modelRef = t;
            const e = t.object;
            if (!KTn(e)) return;
            const n = e;
            return this._model = n, this._modelListeners.clear(), this._modelListeners.add(n.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this._modelListeners.add(n.onDidChangeContent(()=>this._onDidChangeContent.fire())), this._modelListeners.add(n.onDidSave((i)=>this._onDidSave.fire(i))), this._onDidChangeDirty.fire(), n;
        })), this._modelResolve);
    }
    setContent(t) {
        const e = this._model?.textEditorModel;
        if (!e) {
            this._ensureModel().then(()=>this.setContent(t)).catch(()=>{});
            return;
        }
        e.getValue() !== t && e.pushEditOperations(null, [
            {
                range: e.getFullModelRange(),
                text: t
            }
        ], ()=>null);
    }
    getContent() {
        return this._model?.textEditorModel?.getValue() ?? "";
    }
    async resolve() {
        return await this._ensureModel().catch(()=>{}), null;
    }
    async save(t, e) {
        return this._onWillSave.fire(), await this._textFileService.save(this._resource, e) ? this : void 0;
    }
    async revert(t, e) {
        await this._textFileService.revert(this._resource, e);
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
                override: fG.EditorID
            }
        };
    }
    matches(t) {
        return super.matches(t) ? !0 : t instanceof fG ? t.resource.toString() === this.resource.toString() : !1;
    }
    dispose() {
        this._modelListeners.dispose(), this._disposables.dispose(), this._modelRef?.dispose(), this._modelRef = void 0, this._model = void 0, super.dispose();
    }
}, fG.TypeID = "workbench.input.markdown", fG.EditorID = "workbench.editor.markdown", fG = Re([
    F(1, Vf),
    F(2, Rh)
], fG), q1g = class extends st {
    constructor(){
        super();
    }
    canSerialize(t) {
        return t instanceof fG;
    }
    serialize(t) {
        if (t instanceof fG) return JSON.stringify(t.toJSON());
    }
    deserialize(t, e) {
        try {
            const n = JSON.parse(e);
            if (n.resource) {
                const i = rt.parse(n.resource);
                return t.createInstance(fG, i);
            }
        } catch (n) {
            console.error("Error deserializing MarkdownEditorInput:", n);
        }
    }
};

}
