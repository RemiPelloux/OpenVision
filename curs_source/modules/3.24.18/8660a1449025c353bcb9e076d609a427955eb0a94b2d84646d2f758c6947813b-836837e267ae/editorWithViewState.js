import { Gt, Qe, Vn, en } from "./Iwo.js";
import { Ld, _a } from "./editorGroupsService.js";
import { DX, KJ } from "./editorPane.js";
import { Wo, gr } from "./editorService.js";
import { Nm, Wm, od } from "./editor_2.js";
import { It, dn } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var mVe;
export { mVe };
var __wakaru_iKt_initialized = false;
export function iKt() {
if (__wakaru_iKt_initialized) return;
__wakaru_iKt_initialized = true;
"use strict";
E(), Gt(), od(), KJ(), Zi(), It(), Dl(), FC(), Ld(), Wo(), Qe(), mVe = class extends DX {
    constructor(t, e, n, i, r, s, o, a, l){
        super(t, e, o, r), this.instantiationService = i, this.textResourceConfigurationService = s, this.editorService = a, this.editorGroupService = l, this.groupListener = this._register(new Vn), this.viewState = this.getEditorMemento(l, s, n, 100);
    }
    setEditorVisible(t) {
        this.groupListener.value = this.group.onWillCloseEditor((e)=>this.onWillCloseEditor(e)), super.setEditorVisible(t);
    }
    onWillCloseEditor(t) {
        const e = t.editor;
        e === this.input && this.updateEditorViewState(e);
    }
    clearInput() {
        this.updateEditorViewState(this.input), super.clearInput();
    }
    saveState() {
        this.updateEditorViewState(this.input), super.saveState();
    }
    updateEditorViewState(t) {
        if (!t || !this.tracksEditorViewState(t)) return;
        const e = this.toEditorViewStateResource(t);
        e && (this.tracksDisposedEditorViewState() || (this.editorViewStateDisposables || (this.editorViewStateDisposables = new Map), !this.editorViewStateDisposables.has(t) && !t.isDisposed() && this.editorViewStateDisposables.set(t, en.once(t.onWillDispose)(()=>{
            this.clearEditorViewState(e, this.group), this.editorViewStateDisposables?.delete(t);
        }))), t.isDisposed() && !this.tracksDisposedEditorViewState() || !this.shouldRestoreEditorViewState(t) && !this.group.contains(t) ? this.clearEditorViewState(e, this.group) : t.isDisposed() || this.saveEditorViewState(e));
    }
    shouldRestoreEditorViewState(t, e) {
        return e?.newInGroup ? this.textResourceConfigurationService.getValue(Wm.getOriginalUri(t, {
            supportSideBySide: Nm.PRIMARY
        }), "workbench.editor.restoreViewState") !== !1 : !0;
    }
    getViewState() {
        const t = this.input;
        if (!t || !this.tracksEditorViewState(t)) return;
        const e = this.toEditorViewStateResource(t);
        if (e) return this.computeEditorViewState(e);
    }
    saveEditorViewState(t) {
        const e = this.computeEditorViewState(t);
        e && this.viewState.saveEditorState(this.group, t, e);
    }
    loadEditorViewState(t, e) {
        if (!t || !this.tracksEditorViewState(t) || !this.shouldRestoreEditorViewState(t, e)) return;
        const n = this.toEditorViewStateResource(t);
        if (n) return this.viewState.loadEditorState(this.group, n);
    }
    moveEditorViewState(t, e, n) {
        return this.viewState.moveEditorState(t, e, n);
    }
    clearEditorViewState(t, e) {
        this.viewState.clearEditorState(t, e);
    }
    dispose() {
        if (super.dispose(), this.editorViewStateDisposables) {
            for (const [, t] of this.editorViewStateDisposables)t.dispose();
            this.editorViewStateDisposables = void 0;
        }
    }
    tracksDisposedEditorViewState() {
        return !1;
    }
}, mVe = Re([
    F(3, dn),
    F(4, ki),
    F(5, Mw),
    F(6, Ml),
    F(7, gr),
    F(8, _a)
], mVe);

}
