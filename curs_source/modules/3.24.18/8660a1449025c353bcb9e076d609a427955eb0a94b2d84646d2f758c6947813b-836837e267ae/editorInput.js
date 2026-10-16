import { Gt, tt } from "./Iwo.js";
import { Ik } from "./LYd.js";
import { FVo, Wm, od } from "./editor_2.js";
import { Lr, gu } from "./resources.js";
import { E } from "./tslib.es6.js";
var AA;
export { AA };
var __wakaru_qO_initialized = false;
export function qO() {
if (__wakaru_qO_initialized) return;
__wakaru_qO_initialized = true;
"use strict";
E(), Gt(), od(), Lr(), AA = class extends FVo {
    constructor(){
        super(...arguments), this._onDidChangeDirty = this._register(new tt), this._onDidChangeLabel = this._register(new tt), this._onDidChangeCapabilities = this._register(new tt), this._onWillDispose = this._register(new tt), this.onDidChangeDirty = this._onDidChangeDirty.event, this.onDidChangeLabel = this._onDidChangeLabel.event, this.onDidChangeCapabilities = this._onDidChangeCapabilities.event, this.onWillDispose = this._onWillDispose.event;
    }
    get editorId() {}
    get capabilities() {
        return 2;
    }
    hasCapability(t) {
        return t === 0 ? this.capabilities === 0 : (this.capabilities & t) !== 0;
    }
    isReadonly() {
        return this.hasCapability(2);
    }
    getName() {
        return `Editor ${this.typeId}`;
    }
    getDescription(t) {}
    getTitle(t) {
        return this.getName();
    }
    getLabelExtraClasses() {
        return [];
    }
    getAriaLabel() {
        return this.getTitle(0);
    }
    getIcon() {}
    getTelemetryDescriptor() {
        return {
            typeId: this.typeId
        };
    }
    isDirty() {
        return !1;
    }
    isModified() {
        return this.isDirty();
    }
    isSaving() {
        return !1;
    }
    async resolve() {
        return null;
    }
    async save(t, e) {
        return this;
    }
    async saveAs(t, e) {
        return this;
    }
    async revert(t, e) {}
    async rename(t, e) {}
    copy() {
        return this;
    }
    canMove(t, e) {
        return !0;
    }
    matches(t) {
        if (Ik(t)) return this === t;
        const e = t.options?.override;
        return this.editorId !== e && e !== void 0 && this.editorId !== void 0 ? !1 : gu(this.resource, Wm.getCanonicalUri(t));
    }
    prefersEditorPane(t) {
        return t.at(0);
    }
    toUntyped(t) {}
    isDisposed() {
        return this._store.isDisposed;
    }
    dispose() {
        this.isDisposed() || this._onWillDispose.fire(), super.dispose();
    }
};

}
