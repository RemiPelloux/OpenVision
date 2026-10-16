import { Ct, S, bt } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { H0, MA } from "./editorInput.js";
import { Ni, hn } from "./editorService.js";
import { Wh, xc } from "./editor_2.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { Fos, L3t, N3t, O3t, Q7, Ywe, ay, ij, vfe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Tk, RIo, gNh;
export { RIo, Tk, gNh };
var __wakaru_d8_initialized = false;
export function d8() {
if (__wakaru_d8_initialized) return;
__wakaru_d8_initialized = true;
"use strict";
x(), bt(), rt(), rr(), Ni(), xc(), MA(), Tk = class extends H0 {
    constructor(e, t, n, i, r){
        super(), this.preferredName = e, this.preferredDescription = t, this.secondary = n, this.primary = i, this.editorService = r, this.hasIdenticalSides = this.primary.matches(this.secondary), this.registerListeners();
    }
    get typeId() {
        return Tk.ID;
    }
    get capabilities() {
        let e = this.primary.capabilities;
        return e &= -33, this.secondary.hasCapability(16) && (e |= 16), this.secondary.hasCapability(8) && (e |= 8), e |= 256, e;
    }
    get resource() {
        if (this.hasIdenticalSides) return this.primary.resource;
    }
    registerListeners() {
        this._register(Ct.once(Ct.any(this.primary.onWillDispose, this.secondary.onWillDispose))(()=>{
            this.isDisposed() || this.dispose();
        })), this._register(this.primary.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this._register(this.primary.onDidChangeCapabilities(()=>this._onDidChangeCapabilities.fire())), this._register(this.secondary.onDidChangeCapabilities(()=>this._onDidChangeCapabilities.fire())), this._register(this.primary.onDidChangeLabel(()=>this._onDidChangeLabel.fire())), this._register(this.secondary.onDidChangeLabel(()=>this._onDidChangeLabel.fire()));
    }
    getName() {
        const e = this.getPreferredName();
        return e || (this.hasIdenticalSides ? this.primary.getName() : S(4359, null, this.secondary.getName(), this.primary.getName()));
    }
    getPreferredName() {
        return this.preferredName;
    }
    getDescription(e) {
        const t = this.getPreferredDescription();
        return t || (this.hasIdenticalSides ? this.primary.getDescription(e) : super.getDescription(e));
    }
    getPreferredDescription() {
        return this.preferredDescription;
    }
    getTitle(e) {
        let t;
        this.hasIdenticalSides ? t = this.primary.getTitle(e) ?? this.getName() : t = super.getTitle(e);
        const n = this.getPreferredTitle();
        return n && (t = `${n} (${t})`), t;
    }
    getPreferredTitle() {
        if (this.preferredName && this.preferredDescription) return `${this.preferredName} ${this.preferredDescription}`;
        if (this.preferredName || this.preferredDescription) return this.preferredName ?? this.preferredDescription;
    }
    getLabelExtraClasses() {
        return this.hasIdenticalSides ? this.primary.getLabelExtraClasses() : super.getLabelExtraClasses();
    }
    getAriaLabel() {
        return this.hasIdenticalSides ? this.primary.getAriaLabel() : super.getAriaLabel();
    }
    getTelemetryDescriptor() {
        return {
            ...this.primary.getTelemetryDescriptor(),
            ...super.getTelemetryDescriptor()
        };
    }
    isDirty() {
        return this.primary.isDirty();
    }
    isSaving() {
        return this.primary.isSaving();
    }
    async save(e, t) {
        const n = await this.primary.save(e, t);
        return this.saveResultToEditor(n);
    }
    async saveAs(e, t) {
        const n = await this.primary.saveAs(e, t);
        return this.saveResultToEditor(n);
    }
    saveResultToEditor(e) {
        if (!e || !this.hasIdenticalSides) return e;
        if (this.primary.matches(e)) return this;
        if (e instanceof H0) return new Tk(this.preferredName, this.preferredDescription, e, e, this.editorService);
        if (!ij(e) && !N3t(e) && !Ywe(e) && !vfe(e) && !O3t(e)) return {
            primary: e,
            secondary: e,
            label: this.preferredName,
            description: this.preferredDescription
        };
    }
    revert(e, t) {
        return this.primary.revert(e, t);
    }
    async rename(e, t) {
        if (!this.hasIdenticalSides) return;
        const n = await this.primary.rename(e, t);
        if (n) {
            if (ay(n.editor)) return {
                editor: new Tk(this.preferredName, this.preferredDescription, n.editor, n.editor, this.editorService),
                options: {
                    ...n.options,
                    viewState: L3t(this, e, this.editorService)
                }
            };
            if (Q7(n.editor)) return {
                editor: {
                    label: this.preferredName,
                    description: this.preferredDescription,
                    primary: n.editor,
                    secondary: n.editor,
                    options: {
                        ...n.options,
                        viewState: L3t(this, e, this.editorService)
                    }
                }
            };
        }
    }
    isReadonly() {
        return this.primary.isReadonly();
    }
    toUntyped(e) {
        const t = this.primary.toUntyped(e), n = this.secondary.toUntyped(e);
        if (t && n && !ij(t) && !ij(n) && !N3t(t) && !N3t(n) && !Ywe(t) && !Ywe(n) && !vfe(t) && !vfe(n) && !O3t(t) && !O3t(n)) {
            const i = {
                label: this.preferredName,
                description: this.preferredDescription,
                primary: t,
                secondary: n
            };
            return typeof e?.preserveViewState == "number" && (i.options = {
                viewState: L3t(this, e.preserveViewState, this.editorService)
            }), i;
        }
    }
    matches(e) {
        return this === e ? !0 : Fos(e) || ij(e) ? !1 : e instanceof Tk ? this.primary.matches(e.primary) && this.secondary.matches(e.secondary) : Ywe(e) ? this.primary.matches(e.primary) && this.secondary.matches(e.secondary) : !1;
    }
}, Tk.ID = "workbench.editorinputs.sidebysideEditorInput", Tk = ie([
    C(4, hn)
], Tk), RIo = class {
    canSerialize(e) {
        const t = e;
        if (t.primary && t.secondary) {
            const [n, i] = this.getSerializers(t.secondary.typeId, t.primary.typeId);
            return !!(n?.canSerialize(t.secondary) && i?.canSerialize(t.primary));
        }
        return !1;
    }
    serialize(e) {
        const t = e;
        if (t.primary && t.secondary) {
            const [n, i] = this.getSerializers(t.secondary.typeId, t.primary.typeId);
            if (i && n) {
                const r = i.serialize(t.primary), s = n.serialize(t.secondary);
                if (r && s) {
                    const o = {
                        name: t.getPreferredName(),
                        description: t.getPreferredDescription(),
                        primarySerialized: r,
                        secondarySerialized: s,
                        primaryTypeId: t.primary.typeId,
                        secondaryTypeId: t.secondary.typeId
                    };
                    return JSON.stringify(o);
                }
            }
        }
    }
    deserialize(e, t) {
        const n = JSON.parse(t), [i, r] = this.getSerializers(n.secondaryTypeId, n.primaryTypeId);
        if (r && i) {
            const s = r.deserialize(e, n.primarySerialized), o = i.deserialize(e, n.secondarySerialized);
            if (s instanceof H0 && o instanceof H0) return this.createEditorInput(e, n.name, n.description, o, s);
        }
    }
    getSerializers(e, t) {
        const n = kn.as(Wh.EditorFactory);
        return [
            n.getEditorSerializer(e),
            n.getEditorSerializer(t)
        ];
    }
}, gNh = class extends RIo {
    createEditorInput(e, t, n, i, r) {
        return e.createInstance(Tk, t, n, i, r);
    }
};

}
