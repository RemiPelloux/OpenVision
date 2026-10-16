import { S, dp, tl } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dn, xn } from "./contextkey.js";
import { Mq, ZE } from "./diffEditorInput.js";
import { kre, rN } from "./diffEditorWidget.js";
import { en } from "./dom_2.js";
import { EM, _U } from "./editor.js";
import { Nc, gs } from "./editorGroupsService.js";
import { E0t } from "./editorOptions_2.js";
import { Ni, hn } from "./editorService.js";
import { Mki, Wh, xc } from "./editor_2.js";
import { Fi, GT, Ii, mpt } from "./files.js";
import { Ze, _t } from "./instantiation.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { kn, rr } from "./platform_2.js";
import { ig, tk } from "./preferences.js";
import { Bos, Gbn, Umn, ay, lu } from "./qIc.js";
import { Ac, Li } from "./resources.js";
import { Vn, yn } from "./storage_2.js";
import { RBh, iDo } from "./textDiffEditorModel.js";
import { t7e, v5n } from "./textEditor.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
function e7e(e, t, n) {
    let i = !1;
    const r = Vu_(e);
    if (Gbn(r) && (t.restoreViewState(r), i = !0), e.selection) {
        const s = {
            startLineNumber: e.selection.startLineNumber,
            startColumn: e.selection.startColumn,
            endLineNumber: e.selection.endLineNumber ?? e.selection.startLineNumber,
            endColumn: e.selection.endColumn ?? e.selection.startColumn
        };
        t.setSelection(s, e.selectionSource ?? "code.navigation"), e.selectionRevealType === 2 ? t.revealRangeNearTop(s, n) : e.selectionRevealType === 3 ? t.revealRangeNearTopIfOutsideViewport(s, n) : e.selectionRevealType === 1 ? t.revealRangeInCenterIfOutsideViewport(s, n) : t.revealRangeInCenter(s, n), i = !0;
    }
    return i;
}
function Vu_(e) {
    if (!e.selection || !e.viewState) return e.viewState;
    const t = e.viewState;
    if (t.modified) return t.modified.cursorState = [], t;
    const n = e.viewState;
    return n.cursorState && (n.cursorState = []), n;
}
var yTe;
export { Vu_, e7e, yTe };
var __wakaru_aDo_initialized = false;
export function aDo() {
if (__wakaru_aDo_initialized) return;
__wakaru_aDo_initialized = true;
"use strict";
x(), en(), bu(), Li(), gr(), Qt(), kre(), M_(), rt(), dn(), EM(), Fi(), Ze(), rr(), Vn(), as(), xc(), Mq(), E0t(), RBh(), Nc(), Ni(), tk(), v5n(), yTe = class extends t7e {
    constructor(e, t, n, i, r, s, o, a, c){
        super(yTe.ID, e, t, n, i, s, r, o, a), this.preferencesService = c, this.diffEditorControl = void 0, this._previousViewModel = null;
    }
    get scopedContextKeyService() {
        if (!this.diffEditorControl) return;
        const e = this.diffEditorControl.getOriginalEditor(), t = this.diffEditorControl.getModifiedEditor();
        return (e.hasTextFocus() ? e : t).invokeWithinContext((n)=>n.get(xn));
    }
    getTitle() {
        return this.input ? this.input.getName() : S(3784, null);
    }
    createEditorControl(e, t) {
        this.diffEditorControl = this._register(this.instantiationService.createInstance(rN, e, t, {
            modifiedEditor: {
                isMultiDiffEditor: !0
            }
        }));
    }
    updateEditorControlOptions(e) {
        this.diffEditorControl?.updateOptions(e);
    }
    getMainControl() {
        return this.diffEditorControl?.getModifiedEditor();
    }
    async setInput(e, t, n, i) {
        this._previousViewModel && (this._previousViewModel.dispose(), this._previousViewModel = null), await super.setInput(e, t, n, i);
        try {
            const r = await e.resolve();
            if (i.isCancellationRequested) return;
            if (!(r instanceof iDo)) {
                this.openAsBinary(e, t);
                return;
            }
            const s = tl(this.diffEditorControl), o = r, a = o.textDiffEditorModel ? s.createViewModel(o.textDiffEditorModel) : null;
            this._previousViewModel = a, await a?.waitForDiff(), s.setModel(a);
            let c = !1;
            Gbn(t?.viewState) || (c = this.restoreTextDiffEditorViewState(e, t, n, s));
            let l = !1;
            t && (l = e7e(t, s, 1)), !l && !c && s.revealFirstDiff(), s.updateOptions({
                ...this.getReadonlyConfiguration(o.modifiedModel?.isReadonly()),
                originalEditable: !o.originalModel?.isReadonly()
            }), s.handleInitialized();
        } catch (r) {
            await this.handleSetInputError(r, e, t);
        }
    }
    async handleSetInputError(e, t, n) {
        if (this.isFileBinaryError(e)) return this.openAsBinary(t, n);
        if (e.fileOperationResult === 7) {
            let i;
            throw e instanceof mpt ? i = S(3785, null, GT.formatSize(e.size)) : i = S(3786, null), Bos(this.group, t, n, i, this.preferencesService);
        }
        throw e;
    }
    restoreTextDiffEditorViewState(e, t, n, i) {
        const r = this.loadEditorViewState(e, n);
        return r ? (t?.selection && r.modified && (r.modified.cursorState = []), i.restoreViewState(r), t?.revealIfVisible && i.revealFirstDiff(), !0) : !1;
    }
    openAsBinary(e, t) {
        const n = e.original, i = e.modified, r = this.instantiationService.createInstance(ZE, e.getName(), e.getDescription(), n, i, !0), s = kn.as(Wh.EditorFactory).getFileEditorFactory();
        s.isFileEditor(n) && n.setForceOpenAsBinary(), s.isFileEditor(i) && i.setForceOpenAsBinary(), this.group.replaceEditors([
            {
                editor: e,
                replacement: r,
                options: {
                    ...t,
                    activation: _U.PRESERVE,
                    pinned: this.group.isPinned(e),
                    sticky: this.group.isSticky(e)
                }
            }
        ]);
    }
    setOptions(e) {
        super.setOptions(e), e && e7e(e, tl(this.diffEditorControl), 0);
    }
    shouldHandleConfigurationChangeEvent(e, t) {
        return super.shouldHandleConfigurationChangeEvent(e, t) ? !0 : e.affectsConfiguration(t, "diffEditor") || e.affectsConfiguration(t, "accessibility.verbosity.diffEditor");
    }
    computeConfiguration(e) {
        const t = super.computeConfiguration(e);
        if (dp(e.diffEditor)) {
            const i = lu(e.diffEditor);
            i.diffCodeLens = i.codeLens, delete i.codeLens, i.diffWordWrap = i.wordWrap, delete i.wordWrap, Object.assign(t, i);
        }
        const n = e.accessibility?.verbosity?.diffEditor ?? !1;
        return t.accessibilityVerbose = n, t;
    }
    getConfigurationOverrides(e) {
        return {
            ...super.getConfigurationOverrides(e),
            ...this.getReadonlyConfiguration(this.input?.isReadonly()),
            originalEditable: this.input instanceof ZE && !this.input.original.isReadonly(),
            lineDecorationsWidth: "2ch"
        };
    }
    updateReadonly(e) {
        e instanceof ZE ? this.diffEditorControl?.updateOptions({
            ...this.getReadonlyConfiguration(e.isReadonly()),
            originalEditable: !e.original.isReadonly()
        }) : super.updateReadonly(e);
    }
    isFileBinaryError(e) {
        return Array.isArray(e) ? e.some((n)=>this.isFileBinaryError(n)) : e.textFileOperationResult === 0;
    }
    clearInput() {
        this._previousViewModel && (this._previousViewModel.dispose(), this._previousViewModel = null), super.clearInput(), this.diffEditorControl?.setModel(null);
    }
    getControl() {
        return this.diffEditorControl;
    }
    focus() {
        super.focus(), this.diffEditorControl?.focus();
    }
    hasFocus() {
        return this.diffEditorControl?.hasTextFocus() || super.hasFocus();
    }
    setEditorVisible(e) {
        super.setEditorVisible(e), e ? this.diffEditorControl?.onVisible() : this.diffEditorControl?.onHide();
    }
    layout(e) {
        this.diffEditorControl?.layout(e);
    }
    setBoundarySashes(e) {
        this.diffEditorControl?.setBoundarySashes(e);
    }
    tracksEditorViewState(e) {
        return e instanceof ZE;
    }
    computeEditorViewState(e) {
        if (!this.diffEditorControl) return;
        const t = this.diffEditorControl.getModel();
        if (!t || !t.modified || !t.original) return;
        const n = this.toEditorViewStateResource(t);
        if (n && Ac(n, e)) return this.diffEditorControl.saveViewState() ?? void 0;
    }
    toEditorViewStateResource(e) {
        let t, n;
        if (e instanceof ZE ? (t = e.original.resource, n = e.modified.resource) : ay(e) || (t = e.original.uri, n = e.modified.uri), !(!t || !n)) return Ee.from({
            scheme: "diff",
            path: `${Umn(t.toString())}${Umn(n.toString())}`
        });
    }
}, yTe.ID = Mki, yTe = ie([
    C(1, _t),
    C(2, yn),
    C(3, $v),
    C(4, hn),
    C(5, $r),
    C(6, gs),
    C(7, Ii),
    C(8, ig)
], yTe);

}
