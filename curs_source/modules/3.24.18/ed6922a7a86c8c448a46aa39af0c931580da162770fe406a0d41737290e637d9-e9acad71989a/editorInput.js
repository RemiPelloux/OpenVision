import { bt, ve } from "./HVr.js";
import { Wos, vd, xc } from "./editor_2.js";
import { ay } from "./qIc.js";
import { Ac, Li } from "./resources.js";
import { x } from "./tslib.es6.js";
var H0;
export { H0 };
var __wakaru_MA_initialized = false;
export function MA() {
if (__wakaru_MA_initialized) return;
__wakaru_MA_initialized = true;
"use strict";
x(), bt(), xc(), Li(), H0 = class extends Wos {
    constructor(){
        super(...arguments), this._onDidChangeDirty = this._register(new ve), this._onDidChangeLabel = this._register(new ve), this._onDidChangeCapabilities = this._register(new ve), this._onWillDispose = this._register(new ve), this.onDidChangeDirty = this._onDidChangeDirty.event, this.onDidChangeLabel = this._onDidChangeLabel.event, this.onDidChangeCapabilities = this._onDidChangeCapabilities.event, this.onWillDispose = this._onWillDispose.event;
    }
    get editorId() {}
    get capabilities() {
        return 2;
    }
    hasCapability(e) {
        return e === 0 ? this.capabilities === 0 : (this.capabilities & e) !== 0;
    }
    isReadonly() {
        return this.hasCapability(2);
    }
    getName() {
        return `Editor ${this.typeId}`;
    }
    getDescription(e) {}
    getTitle(e) {
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
    async save(e, t) {
        return this;
    }
    async saveAs(e, t) {
        return this;
    }
    async revert(e, t) {}
    async rename(e, t) {}
    copy() {
        return this;
    }
    canMove(e, t) {
        return !0;
    }
    matches(e) {
        if (ay(e)) return this === e;
        const t = e.options?.override;
        return this.editorId !== t && t !== void 0 && this.editorId !== void 0 ? !1 : Ac(this.resource, vd.getCanonicalUri(e));
    }
    prefersEditorPane(e) {
        return e.at(0);
    }
    toUntyped(e) {}
    isDisposed() {
        return this._store.isDisposed;
    }
    dispose() {
        this.isDisposed() || this._onWillDispose.fire(), super.dispose();
    }
};

}
