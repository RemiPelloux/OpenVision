import { D, Gt, Md, Qe, Vn, en, tt, wf } from "./Iwo.js";
import { Yhl } from "./Ycg.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { iKt, mVe } from "./editorWithViewState.js";
import { e9 } from "./editor_3.js";
import { is, ms } from "./files.js";
import { It, dn } from "./instantiation.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Zi, ki } from "./storage_2.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { F, Re } from "./userDataProfile.js";
import { fp, rjo } from "./ze.js";
var plt, qfl, UEt;
export { UEt, plt, qfl };
var __wakaru_l2n_initialized = false;
export function l2n() {
if (__wakaru_l2n_initialized) return;
__wakaru_l2n_initialized = true;
"use strict";
E(), Bt(), cp(), Gt(), To(), Qe(), e9(), iKt(), Zi(), It(), Dl(), FC(), Ld(), Wo(), ms(), plt = class extends mVe {
    constructor(t, e, n, i, r, s, o, a, l){
        super(t, e, plt.VIEW_STATE_PREFERENCE_KEY, n, i, r, s, o, a), this.fileService = l, this._onDidChangeSelection = this._register(new tt), this.onDidChangeSelection = this._onDidChangeSelection.event, this._onDidChangeScroll = this._register(new tt), this.onDidChangeScroll = this._onDidChangeScroll.event, this.inputListener = this._register(new Vn), this._register(this.textResourceConfigurationService.onDidChangeConfiguration((c)=>this.handleConfigurationChangeEvent(c))), this._register(en.any(this.editorGroupService.onDidAddGroup, this.editorGroupService.onDidRemoveGroup)(()=>{
            const c = this.computeAriaLabel();
            this.editorContainer?.setAttribute("aria-label", c), this.updateEditorControlOptions({
                ariaLabel: c
            });
        })), this._register(this.fileService.onDidChangeFileSystemProviderCapabilities((c)=>this.onDidChangeFileSystemProvider(c.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderRegistrations((c)=>this.onDidChangeFileSystemProvider(c.scheme)));
    }
    handleConfigurationChangeEvent(t) {
        const e = this.getActiveResource();
        this.shouldHandleConfigurationChangeEvent(t, e) && (this.isVisible() ? this.updateEditorConfiguration(e) : this.hasPendingConfigurationChange = !0);
    }
    shouldHandleConfigurationChangeEvent(t, e) {
        return t.affectsConfiguration(e, "editor") || t.affectsConfiguration(e, "problems.visibility");
    }
    consumePendingConfigurationChangeEvent() {
        this.hasPendingConfigurationChange && (this.updateEditorConfiguration(), this.hasPendingConfigurationChange = !1);
    }
    computeConfiguration(t) {
        const e = wf(t.editor) ? fp(t.editor) : Object.create(null);
        return Object.assign(e, this.getConfigurationOverrides(t)), e.ariaLabel = this.computeAriaLabel(), e;
    }
    computeAriaLabel() {
        return this.input ? Yhl(this.input, void 0, this.group, this.editorGroupService.count) : D(3787, null);
    }
    onDidChangeFileSystemProvider(t) {
        this.input && this.getActiveResource()?.scheme === t && this.updateReadonly(this.input);
    }
    onDidChangeInputCapabilities(t) {
        this.input === t && this.updateReadonly(t);
    }
    updateReadonly(t) {
        this.updateEditorControlOptions({
            ...this.getReadonlyConfiguration(t.isReadonly())
        });
    }
    getReadonlyConfiguration(t) {
        return {
            readOnly: !!t,
            readOnlyMessage: typeof t != "boolean" ? t : void 0
        };
    }
    getConfigurationOverrides(t) {
        return {
            overviewRulerLanes: 3,
            lineNumbersMinChars: 3,
            fixedOverflowWidgets: !0,
            ...this.getReadonlyConfiguration(this.input?.isReadonly()),
            renderValidationDecorations: t.problems?.visibility !== !1 ? "on" : "off"
        };
    }
    createEditor(t) {
        this.editorContainer = t, this.createEditorControl(t, this.computeConfiguration(this.textResourceConfigurationService.getValue(this.getActiveResource()))), this.registerCodeEditorListeners();
    }
    registerCodeEditorListeners() {
        const t = this.getMainControl();
        t && (this._register(t.onDidChangeModelLanguage(()=>this.updateEditorConfiguration())), this._register(t.onDidChangeModel(()=>this.updateEditorConfiguration())), this._register(t.onDidChangeCursorPosition((e)=>this._onDidChangeSelection.fire({
                reason: this.toEditorPaneSelectionChangeReason(e)
            }))), this._register(t.onDidChangeModelContent(()=>this._onDidChangeSelection.fire({
                reason: 3
            }))), this._register(t.onDidScrollChange(()=>this._onDidChangeScroll.fire())));
    }
    toEditorPaneSelectionChangeReason(t) {
        switch(t.source){
            case "api":
                return 1;
            case "code.navigation":
                return 4;
            case "code.jump":
                return 5;
            default:
                return 2;
        }
    }
    getSelection() {
        const t = this.getMainControl();
        if (t) {
            const e = t.getSelection();
            if (e) return new UEt(e);
        }
    }
    async setInput(t, e, n, i) {
        if (await super.setInput(t, e, n, i), this._store.isDisposed || t.isDisposed() || i.isCancellationRequested) return;
        this.inputListener.value = t.onDidChangeCapabilities(()=>this.onDidChangeInputCapabilities(t)), this.updateEditorConfiguration(), Md(this.editorContainer).setAttribute("aria-label", this.computeAriaLabel());
    }
    clearInput() {
        this.inputListener.clear(), super.clearInput();
    }
    getScrollPosition() {
        const t = this.getMainControl();
        if (!t) throw new Error("Control has not yet been initialized");
        return {
            scrollTop: t.getScrollTop() - t.getTopForLineNumber(1),
            scrollLeft: t.getScrollLeft()
        };
    }
    setScrollPosition(t) {
        const e = this.getMainControl();
        if (!e) throw new Error("Control has not yet been initialized");
        e.setScrollTop(t.scrollTop), t.scrollLeft && e.setScrollLeft(t.scrollLeft);
    }
    setEditorVisible(t) {
        t && this.consumePendingConfigurationChangeEvent(), super.setEditorVisible(t);
    }
    toEditorViewStateResource(t) {
        return t.resource;
    }
    updateEditorConfiguration(t = this.getActiveResource()) {
        let e;
        if (t && (e = this.textResourceConfigurationService.getValue(t)), !e) return;
        const n = this.computeConfiguration(e);
        let i = n;
        this.lastAppliedEditorOptions && (i = rjo(this.lastAppliedEditorOptions, i)), Object.keys(i).length > 0 && (this.lastAppliedEditorOptions = n, this.updateEditorControlOptions(i));
    }
    getActiveResource() {
        const t = this.getMainControl();
        if (t) {
            const e = t.getModel();
            if (e) return e.uri;
        }
        if (this.input) return this.input.resource;
    }
    dispose() {
        this.lastAppliedEditorOptions = void 0, super.dispose();
    }
}, plt.VIEW_STATE_PREFERENCE_KEY = "textEditorViewState", plt = Re([
    F(2, dn),
    F(3, ki),
    F(4, Mw),
    F(5, Ml),
    F(6, gr),
    F(7, _a),
    F(8, is)
], plt), qfl = class oeu {
    constructor(e){
        this.textSelection = e;
    }
    compare(e) {
        if (!(e instanceof oeu)) return 3;
        const n = Math.min(this.textSelection.selectionStartLineNumber, this.textSelection.positionLineNumber), i = Math.min(e.textSelection.selectionStartLineNumber, e.textSelection.positionLineNumber);
        return n === i ? 1 : Math.abs(n - i) < oeu.TEXT_EDITOR_SELECTION_THRESHOLD ? 2 : 3;
    }
    restore(e) {
        return {
            ...e,
            selection: this.textSelection,
            selectionRevealType: 1
        };
    }
    getSelection() {
        return this.textSelection;
    }
    log() {
        return `line: ${this.textSelection.startLineNumber}-${this.textSelection.endLineNumber}, col:  ${this.textSelection.startColumn}-${this.textSelection.endColumn}`;
    }
}, qfl.TEXT_EDITOR_SELECTION_THRESHOLD = 10, UEt = qfl;

}
