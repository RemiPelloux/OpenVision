import { Ct, Se, bt, cn } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Nc, gs } from "./editorGroupsService.js";
import { BR, LA } from "./editorPane.js";
import { Ni, hn } from "./editorService.js";
import { jd, vd, xc } from "./editor_2.js";
import { Ze, _t } from "./instantiation.js";
import { Vn, yn } from "./storage_2.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var LLe;
export { LLe };
var __wakaru_T0t_initialized = false;
export function T0t() {
if (__wakaru_T0t_initialized) return;
__wakaru_T0t_initialized = true;
"use strict";
x(), bt(), xc(), BR(), Vn(), Ze(), as(), M_(), Nc(), Ni(), Se(), LLe = class extends LA {
    constructor(e, t, n, i, r, s, o, a, c){
        super(e, t, o, r), this.instantiationService = i, this.textResourceConfigurationService = s, this.editorService = a, this.editorGroupService = c, this.groupListener = this._register(new cn), this.viewState = this.getEditorMemento(c, s, n, 100);
    }
    setEditorVisible(e) {
        this.groupListener.value = this.group.onWillCloseEditor((t)=>this.onWillCloseEditor(t)), super.setEditorVisible(e);
    }
    onWillCloseEditor(e) {
        const t = e.editor;
        t === this.input && this.updateEditorViewState(t);
    }
    clearInput() {
        this.updateEditorViewState(this.input), super.clearInput();
    }
    saveState() {
        this.updateEditorViewState(this.input), super.saveState();
    }
    updateEditorViewState(e) {
        if (!e || !this.tracksEditorViewState(e)) return;
        const t = this.toEditorViewStateResource(e);
        t && (this.tracksDisposedEditorViewState() || (this.editorViewStateDisposables || (this.editorViewStateDisposables = new Map), !this.editorViewStateDisposables.has(e) && !e.isDisposed() && this.editorViewStateDisposables.set(e, Ct.once(e.onWillDispose)(()=>{
            this.clearEditorViewState(t, this.group), this.editorViewStateDisposables?.delete(e);
        }))), e.isDisposed() && !this.tracksDisposedEditorViewState() || !this.shouldRestoreEditorViewState(e) && !this.group.contains(e) ? this.clearEditorViewState(t, this.group) : e.isDisposed() || this.saveEditorViewState(t));
    }
    shouldRestoreEditorViewState(e, t) {
        return t?.newInGroup ? this.textResourceConfigurationService.getValue(vd.getOriginalUri(e, {
            supportSideBySide: jd.PRIMARY
        }), "workbench.editor.restoreViewState") !== !1 : !0;
    }
    getViewState() {
        const e = this.input;
        if (!e || !this.tracksEditorViewState(e)) return;
        const t = this.toEditorViewStateResource(e);
        if (t) return this.computeEditorViewState(t);
    }
    saveEditorViewState(e) {
        const t = this.computeEditorViewState(e);
        t && this.viewState.saveEditorState(this.group, e, t);
    }
    loadEditorViewState(e, t) {
        if (!e || !this.tracksEditorViewState(e) || !this.shouldRestoreEditorViewState(e, t)) return;
        const n = this.toEditorViewStateResource(e);
        if (n) return this.viewState.loadEditorState(this.group, n);
    }
    moveEditorViewState(e, t, n) {
        return this.viewState.moveEditorState(e, t, n);
    }
    clearEditorViewState(e, t) {
        this.viewState.clearEditorState(e, t);
    }
    dispose() {
        if (super.dispose(), this.editorViewStateDisposables) {
            for (const [, e] of this.editorViewStateDisposables)e.dispose();
            this.editorViewStateDisposables = void 0;
        }
    }
    tracksDisposedEditorViewState() {
        return !1;
    }
}, LLe = ie([
    C(3, _t),
    C(4, yn),
    C(5, $v),
    C(6, $r),
    C(7, hn),
    C(8, gs)
], LLe);

}
