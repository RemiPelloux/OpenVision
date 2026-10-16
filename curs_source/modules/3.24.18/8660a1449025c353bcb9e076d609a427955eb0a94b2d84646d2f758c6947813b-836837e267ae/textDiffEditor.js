import { D, Md, wf } from "./Iwo.js";
import { Ik, uXd, uai } from "./LYd.js";
import { fVe } from "./Ycg.js";
import { Hi, Rr } from "./contextkey.js";
import { FP, Lle } from "./diffEditorInput.js";
import { BQ, oRe } from "./diffEditorWidget.js";
import { Hn } from "./dom_2.js";
import { T4, UQ } from "./editor.js";
import { Ld, _a } from "./editorGroupsService.js";
import { BEt } from "./editorOptions_2.js";
import { Wo, gr } from "./editorService.js";
import { Zv, od, yIr } from "./editor_2.js";
import { O6t, Sx, is, ms } from "./files.js";
import { It, dn } from "./instantiation.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Eo, Fi } from "./platform_2.js";
import { My, tD } from "./preferences.js";
import { Lr, gu } from "./resources.js";
import { Zi, ki } from "./storage_2.js";
import { $fl, nRg } from "./textDiffEditorModel.js";
import { l2n, plt } from "./textEditor.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Pii, fp } from "./ze.js";
var A9e;
export { A9e };
var __wakaru_zfl_initialized = false;
export function zfl() {
if (__wakaru_zfl_initialized) return;
__wakaru_zfl_initialized = true;
"use strict";
E(), Hn(), cp(), Lr(), To(), fn(), oRe(), FC(), Bt(), Hi(), T4(), ms(), It(), Eo(), Zi(), Dl(), od(), Lle(), BEt(), nRg(), Ld(), Wo(), tD(), l2n(), A9e = class extends plt {
    constructor(t, e, n, i, r, s, o, a, l){
        super(A9e.ID, t, e, n, i, s, r, o, a), this.preferencesService = l, this.diffEditorControl = void 0, this._previousViewModel = null;
    }
    get scopedContextKeyService() {
        if (!this.diffEditorControl) return;
        const t = this.diffEditorControl.getOriginalEditor(), e = this.diffEditorControl.getModifiedEditor();
        return (t.hasTextFocus() ? t : e).invokeWithinContext((n)=>n.get(Rr));
    }
    getTitle() {
        return this.input ? this.input.getName() : D(3784, null);
    }
    createEditorControl(t, e) {
        this.diffEditorControl = this._register(this.instantiationService.createInstance(BQ, t, e, {
            modifiedEditor: {
                isMultiDiffEditor: !0
            }
        }));
    }
    updateEditorControlOptions(t) {
        this.diffEditorControl?.updateOptions(t);
    }
    getMainControl() {
        return this.diffEditorControl?.getModifiedEditor();
    }
    async setInput(t, e, n, i) {
        this._previousViewModel && (this._previousViewModel.dispose(), this._previousViewModel = null), await super.setInput(t, e, n, i);
        try {
            const r = await t.resolve();
            if (i.isCancellationRequested) return;
            if (!(r instanceof $fl)) {
                this.openAsBinary(t, e);
                return;
            }
            const s = Md(this.diffEditorControl), o = r, a = o.textDiffEditorModel ? s.createViewModel(o.textDiffEditorModel) : null;
            this._previousViewModel = a, await a?.waitForDiff(), s.setModel(a);
            let l = !1;
            uai(e?.viewState) || (l = this.restoreTextDiffEditorViewState(t, e, n, s));
            let c = !1;
            e && (c = fVe(e, s, 1)), !c && !l && s.revealFirstDiff(), s.updateOptions({
                ...this.getReadonlyConfiguration(o.modifiedModel?.isReadonly()),
                originalEditable: !o.originalModel?.isReadonly()
            }), s.handleInitialized();
        } catch (r) {
            await this.handleSetInputError(r, t, e);
        }
    }
    async handleSetInputError(t, e, n) {
        if (this.isFileBinaryError(t)) return this.openAsBinary(e, n);
        if (t.fileOperationResult === 7) {
            let i;
            throw t instanceof O6t ? i = D(3785, null, Sx.formatSize(t.size)) : i = D(3786, null), uXd(this.group, e, n, i, this.preferencesService);
        }
        throw t;
    }
    restoreTextDiffEditorViewState(t, e, n, i) {
        const r = this.loadEditorViewState(t, n);
        return r ? (e?.selection && r.modified && (r.modified.cursorState = []), i.restoreViewState(r), e?.revealIfVisible && i.revealFirstDiff(), !0) : !1;
    }
    openAsBinary(t, e) {
        const n = t.original, i = t.modified, r = this.instantiationService.createInstance(FP, t.getName(), t.getDescription(), n, i, !0), s = Fi.as(Zv.EditorFactory).getFileEditorFactory();
        s.isFileEditor(n) && n.setForceOpenAsBinary(), s.isFileEditor(i) && i.setForceOpenAsBinary(), this.group.replaceEditors([
            {
                editor: t,
                replacement: r,
                options: {
                    ...e,
                    activation: UQ.PRESERVE,
                    pinned: this.group.isPinned(t),
                    sticky: this.group.isSticky(t)
                }
            }
        ]);
    }
    setOptions(t) {
        super.setOptions(t), t && fVe(t, Md(this.diffEditorControl), 0);
    }
    shouldHandleConfigurationChangeEvent(t, e) {
        return super.shouldHandleConfigurationChangeEvent(t, e) ? !0 : t.affectsConfiguration(e, "diffEditor") || t.affectsConfiguration(e, "accessibility.verbosity.diffEditor");
    }
    computeConfiguration(t) {
        const e = super.computeConfiguration(t);
        if (wf(t.diffEditor)) {
            const i = fp(t.diffEditor);
            i.diffCodeLens = i.codeLens, delete i.codeLens, i.diffWordWrap = i.wordWrap, delete i.wordWrap, Object.assign(e, i);
        }
        const n = t.accessibility?.verbosity?.diffEditor ?? !1;
        return e.accessibilityVerbose = n, e;
    }
    getConfigurationOverrides(t) {
        return {
            ...super.getConfigurationOverrides(t),
            ...this.getReadonlyConfiguration(this.input?.isReadonly()),
            originalEditable: this.input instanceof FP && !this.input.original.isReadonly(),
            lineDecorationsWidth: "2ch"
        };
    }
    updateReadonly(t) {
        t instanceof FP ? this.diffEditorControl?.updateOptions({
            ...this.getReadonlyConfiguration(t.isReadonly()),
            originalEditable: !t.original.isReadonly()
        }) : super.updateReadonly(t);
    }
    isFileBinaryError(t) {
        return Array.isArray(t) ? t.some((n)=>this.isFileBinaryError(n)) : t.textFileOperationResult === 0;
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
    setEditorVisible(t) {
        super.setEditorVisible(t), t ? this.diffEditorControl?.onVisible() : this.diffEditorControl?.onHide();
    }
    layout(t) {
        this.diffEditorControl?.layout(t);
    }
    setBoundarySashes(t) {
        this.diffEditorControl?.setBoundarySashes(t);
    }
    tracksEditorViewState(t) {
        return t instanceof FP;
    }
    computeEditorViewState(t) {
        if (!this.diffEditorControl) return;
        const e = this.diffEditorControl.getModel();
        if (!e || !e.modified || !e.original) return;
        const n = this.toEditorViewStateResource(e);
        if (n && gu(n, t)) return this.diffEditorControl.saveViewState() ?? void 0;
    }
    toEditorViewStateResource(t) {
        let e, n;
        if (t instanceof FP ? (e = t.original.resource, n = t.modified.resource) : Ik(t) || (e = t.original.uri, n = t.modified.uri), !(!e || !n)) return rt.from({
            scheme: "diff",
            path: `${Pii(e.toString())}${Pii(n.toString())}`
        });
    }
}, A9e.ID = yIr, A9e = Re([
    F(1, dn),
    F(2, ki),
    F(3, Mw),
    F(4, gr),
    F(5, Ml),
    F(6, _a),
    F(7, is),
    F(8, My)
], A9e);

}
