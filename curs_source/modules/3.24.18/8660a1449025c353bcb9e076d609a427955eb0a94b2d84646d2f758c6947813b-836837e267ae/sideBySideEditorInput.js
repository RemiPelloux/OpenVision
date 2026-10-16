import { D, Gt, en } from "./Iwo.js";
import { $vn, F5e, Hvn, Ik, NVo, PY, Wvn, _Re, hne } from "./LYd.js";
import { AA, qO } from "./editorInput.js";
import { Wo, gr } from "./editorService.js";
import { Zv, od } from "./editor_2.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var dC, tpl, lkg;
export { dC, lkg, tpl };
var __wakaru_bV_initialized = false;
export function bV() {
if (__wakaru_bV_initialized) return;
__wakaru_bV_initialized = true;
"use strict";
E(), Gt(), Bt(), Eo(), Wo(), od(), qO(), dC = class extends AA {
    constructor(t, e, n, i, r){
        super(), this.preferredName = t, this.preferredDescription = e, this.secondary = n, this.primary = i, this.editorService = r, this.hasIdenticalSides = this.primary.matches(this.secondary), this.registerListeners();
    }
    get typeId() {
        return dC.ID;
    }
    get capabilities() {
        let t = this.primary.capabilities;
        return t &= -33, this.secondary.hasCapability(16) && (t |= 16), this.secondary.hasCapability(8) && (t |= 8), t |= 256, t;
    }
    get resource() {
        if (this.hasIdenticalSides) return this.primary.resource;
    }
    registerListeners() {
        this._register(en.once(en.any(this.primary.onWillDispose, this.secondary.onWillDispose))(()=>{
            this.isDisposed() || this.dispose();
        })), this._register(this.primary.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this._register(this.primary.onDidChangeCapabilities(()=>this._onDidChangeCapabilities.fire())), this._register(this.secondary.onDidChangeCapabilities(()=>this._onDidChangeCapabilities.fire())), this._register(this.primary.onDidChangeLabel(()=>this._onDidChangeLabel.fire())), this._register(this.secondary.onDidChangeLabel(()=>this._onDidChangeLabel.fire()));
    }
    getName() {
        const t = this.getPreferredName();
        return t || (this.hasIdenticalSides ? this.primary.getName() : D(4359, null, this.secondary.getName(), this.primary.getName()));
    }
    getPreferredName() {
        return this.preferredName;
    }
    getDescription(t) {
        const e = this.getPreferredDescription();
        return e || (this.hasIdenticalSides ? this.primary.getDescription(t) : super.getDescription(t));
    }
    getPreferredDescription() {
        return this.preferredDescription;
    }
    getTitle(t) {
        let e;
        this.hasIdenticalSides ? e = this.primary.getTitle(t) ?? this.getName() : e = super.getTitle(t);
        const n = this.getPreferredTitle();
        return n && (e = `${n} (${e})`), e;
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
    async save(t, e) {
        const n = await this.primary.save(t, e);
        return this.saveResultToEditor(n);
    }
    async saveAs(t, e) {
        const n = await this.primary.saveAs(t, e);
        return this.saveResultToEditor(n);
    }
    saveResultToEditor(t) {
        if (!t || !this.hasIdenticalSides) return t;
        if (this.primary.matches(t)) return this;
        if (t instanceof AA) return new dC(this.preferredName, this.preferredDescription, t, t, this.editorService);
        if (!hne(t) && !Hvn(t) && !F5e(t) && !_Re(t) && !Wvn(t)) return {
            primary: t,
            secondary: t,
            label: this.preferredName,
            description: this.preferredDescription
        };
    }
    revert(t, e) {
        return this.primary.revert(t, e);
    }
    async rename(t, e) {
        if (!this.hasIdenticalSides) return;
        const n = await this.primary.rename(t, e);
        if (n) {
            if (Ik(n.editor)) return {
                editor: new dC(this.preferredName, this.preferredDescription, n.editor, n.editor, this.editorService),
                options: {
                    ...n.options,
                    viewState: $vn(this, t, this.editorService)
                }
            };
            if (PY(n.editor)) return {
                editor: {
                    label: this.preferredName,
                    description: this.preferredDescription,
                    primary: n.editor,
                    secondary: n.editor,
                    options: {
                        ...n.options,
                        viewState: $vn(this, t, this.editorService)
                    }
                }
            };
        }
    }
    isReadonly() {
        return this.primary.isReadonly();
    }
    toUntyped(t) {
        const e = this.primary.toUntyped(t), n = this.secondary.toUntyped(t);
        if (e && n && !hne(e) && !hne(n) && !Hvn(e) && !Hvn(n) && !F5e(e) && !F5e(n) && !_Re(e) && !_Re(n) && !Wvn(e) && !Wvn(n)) {
            const i = {
                label: this.preferredName,
                description: this.preferredDescription,
                primary: e,
                secondary: n
            };
            return typeof t?.preserveViewState == "number" && (i.options = {
                viewState: $vn(this, t.preserveViewState, this.editorService)
            }), i;
        }
    }
    matches(t) {
        return this === t ? !0 : NVo(t) || hne(t) ? !1 : t instanceof dC ? this.primary.matches(t.primary) && this.secondary.matches(t.secondary) : F5e(t) ? this.primary.matches(t.primary) && this.secondary.matches(t.secondary) : !1;
    }
}, dC.ID = "workbench.editorinputs.sidebysideEditorInput", dC = Re([
    F(4, gr)
], dC), tpl = class {
    canSerialize(t) {
        const e = t;
        if (e.primary && e.secondary) {
            const [n, i] = this.getSerializers(e.secondary.typeId, e.primary.typeId);
            return !!(n?.canSerialize(e.secondary) && i?.canSerialize(e.primary));
        }
        return !1;
    }
    serialize(t) {
        const e = t;
        if (e.primary && e.secondary) {
            const [n, i] = this.getSerializers(e.secondary.typeId, e.primary.typeId);
            if (i && n) {
                const r = i.serialize(e.primary), s = n.serialize(e.secondary);
                if (r && s) {
                    const o = {
                        name: e.getPreferredName(),
                        description: e.getPreferredDescription(),
                        primarySerialized: r,
                        secondarySerialized: s,
                        primaryTypeId: e.primary.typeId,
                        secondaryTypeId: e.secondary.typeId
                    };
                    return JSON.stringify(o);
                }
            }
        }
    }
    deserialize(t, e) {
        const n = JSON.parse(e), [i, r] = this.getSerializers(n.secondaryTypeId, n.primaryTypeId);
        if (r && i) {
            const s = r.deserialize(t, n.primarySerialized), o = i.deserialize(t, n.secondarySerialized);
            if (s instanceof AA && o instanceof AA) return this.createEditorInput(t, n.name, n.description, o, s);
        }
    }
    getSerializers(t, e) {
        const n = Fi.as(Zv.EditorFactory);
        return [
            n.getEditorSerializer(t),
            n.getEditorSerializer(e)
        ];
    }
}, lkg = class extends tpl {
    createEditorInput(t, e, n, i, r) {
        return t.createInstance(dC, e, n, i, r);
    }
};

}
