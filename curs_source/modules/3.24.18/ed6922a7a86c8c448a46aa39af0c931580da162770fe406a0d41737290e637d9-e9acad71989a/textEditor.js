import { Ct, S, Se, bt, cn, dp, tl, ve } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { LLe, T0t } from "./editorWithViewState.js";
import { B1 } from "./editor_3.js";
import { Fi, Ii } from "./files.js";
import { Ze, _t } from "./instantiation.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { lu, qZr } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
function ktr(e, t, n, i) {
    let r = e.getAriaLabel();
    return n && !n.isPinned(e) && (r = S(3243, null, r)), n?.isSticky(t ?? e) && (r = S(3244, null, r)), n && typeof i == "number" && i > 1 && (r = `${r}, ${n.ariaLabel}`), r;
}
var t7e, oDo, Vnr;
export { Vnr, ktr, oDo, t7e };
var __wakaru_v5n_initialized = false;
export function v5n() {
if (__wakaru_v5n_initialized) return;
__wakaru_v5n_initialized = true;
"use strict";
x(), rt(), bu(), bt(), gr(), Se(), B1(), T0t(), Vn(), Ze(), as(), M_(), Nc(), Ni(), Fi(), t7e = class extends LLe {
    constructor(e, t, n, i, r, s, o, a, c){
        super(e, t, t7e.VIEW_STATE_PREFERENCE_KEY, n, i, r, s, o, a), this.fileService = c, this._onDidChangeSelection = this._register(new ve), this.onDidChangeSelection = this._onDidChangeSelection.event, this._onDidChangeScroll = this._register(new ve), this.onDidChangeScroll = this._onDidChangeScroll.event, this.inputListener = this._register(new cn), this._register(this.textResourceConfigurationService.onDidChangeConfiguration((l)=>this.handleConfigurationChangeEvent(l))), this._register(Ct.any(this.editorGroupService.onDidAddGroup, this.editorGroupService.onDidRemoveGroup)(()=>{
            const l = this.computeAriaLabel();
            this.editorContainer?.setAttribute("aria-label", l), this.updateEditorControlOptions({
                ariaLabel: l
            });
        })), this._register(this.fileService.onDidChangeFileSystemProviderCapabilities((l)=>this.onDidChangeFileSystemProvider(l.scheme))), this._register(this.fileService.onDidChangeFileSystemProviderRegistrations((l)=>this.onDidChangeFileSystemProvider(l.scheme)));
    }
    handleConfigurationChangeEvent(e) {
        const t = this.getActiveResource();
        this.shouldHandleConfigurationChangeEvent(e, t) && (this.isVisible() ? this.updateEditorConfiguration(t) : this.hasPendingConfigurationChange = !0);
    }
    shouldHandleConfigurationChangeEvent(e, t) {
        return e.affectsConfiguration(t, "editor") || e.affectsConfiguration(t, "problems.visibility");
    }
    consumePendingConfigurationChangeEvent() {
        this.hasPendingConfigurationChange && (this.updateEditorConfiguration(), this.hasPendingConfigurationChange = !1);
    }
    computeConfiguration(e) {
        const t = dp(e.editor) ? lu(e.editor) : Object.create(null);
        return Object.assign(t, this.getConfigurationOverrides(e)), t.ariaLabel = this.computeAriaLabel(), t;
    }
    computeAriaLabel() {
        return this.input ? ktr(this.input, void 0, this.group, this.editorGroupService.count) : S(3787, null);
    }
    onDidChangeFileSystemProvider(e) {
        this.input && this.getActiveResource()?.scheme === e && this.updateReadonly(this.input);
    }
    onDidChangeInputCapabilities(e) {
        this.input === e && this.updateReadonly(e);
    }
    updateReadonly(e) {
        this.updateEditorControlOptions({
            ...this.getReadonlyConfiguration(e.isReadonly())
        });
    }
    getReadonlyConfiguration(e) {
        return {
            readOnly: !!e,
            readOnlyMessage: typeof e != "boolean" ? e : void 0
        };
    }
    getConfigurationOverrides(e) {
        return {
            overviewRulerLanes: 3,
            lineNumbersMinChars: 3,
            fixedOverflowWidgets: !0,
            ...this.getReadonlyConfiguration(this.input?.isReadonly()),
            renderValidationDecorations: e.problems?.visibility !== !1 ? "on" : "off"
        };
    }
    createEditor(e) {
        this.editorContainer = e, this.createEditorControl(e, this.computeConfiguration(this.textResourceConfigurationService.getValue(this.getActiveResource()))), this.registerCodeEditorListeners();
    }
    registerCodeEditorListeners() {
        const e = this.getMainControl();
        e && (this._register(e.onDidChangeModelLanguage(()=>this.updateEditorConfiguration())), this._register(e.onDidChangeModel(()=>this.updateEditorConfiguration())), this._register(e.onDidChangeCursorPosition((t)=>this._onDidChangeSelection.fire({
                reason: this.toEditorPaneSelectionChangeReason(t)
            }))), this._register(e.onDidChangeModelContent(()=>this._onDidChangeSelection.fire({
                reason: 3
            }))), this._register(e.onDidScrollChange(()=>this._onDidChangeScroll.fire())));
    }
    toEditorPaneSelectionChangeReason(e) {
        switch(e.source){
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
        const e = this.getMainControl();
        if (e) {
            const t = e.getSelection();
            if (t) return new Vnr(t);
        }
    }
    async setInput(e, t, n, i) {
        if (await super.setInput(e, t, n, i), this._store.isDisposed || e.isDisposed() || i.isCancellationRequested) return;
        this.inputListener.value = e.onDidChangeCapabilities(()=>this.onDidChangeInputCapabilities(e)), this.updateEditorConfiguration(), tl(this.editorContainer).setAttribute("aria-label", this.computeAriaLabel());
    }
    clearInput() {
        this.inputListener.clear(), super.clearInput();
    }
    getScrollPosition() {
        const e = this.getMainControl();
        if (!e) throw new Error("Control has not yet been initialized");
        return {
            scrollTop: e.getScrollTop() - e.getTopForLineNumber(1),
            scrollLeft: e.getScrollLeft()
        };
    }
    setScrollPosition(e) {
        const t = this.getMainControl();
        if (!t) throw new Error("Control has not yet been initialized");
        t.setScrollTop(e.scrollTop), e.scrollLeft && t.setScrollLeft(e.scrollLeft);
    }
    setEditorVisible(e) {
        e && this.consumePendingConfigurationChangeEvent(), super.setEditorVisible(e);
    }
    toEditorViewStateResource(e) {
        return e.resource;
    }
    updateEditorConfiguration(e = this.getActiveResource()) {
        let t;
        if (e && (t = this.textResourceConfigurationService.getValue(e)), !t) return;
        const n = this.computeConfiguration(t);
        let i = n;
        this.lastAppliedEditorOptions && (i = qZr(this.lastAppliedEditorOptions, i)), Object.keys(i).length > 0 && (this.lastAppliedEditorOptions = n, this.updateEditorControlOptions(i));
    }
    getActiveResource() {
        const e = this.getMainControl();
        if (e) {
            const t = e.getModel();
            if (t) return t.uri;
        }
        if (this.input) return this.input.resource;
    }
    dispose() {
        this.lastAppliedEditorOptions = void 0, super.dispose();
    }
}, t7e.VIEW_STATE_PREFERENCE_KEY = "textEditorViewState", t7e = ie([
    C(2, _t),
    C(3, yn),
    C(4, $v),
    C(5, $r),
    C(6, hn),
    C(7, gs),
    C(8, Ii)
], t7e), oDo = class bAa {
    constructor(t){
        this.textSelection = t;
    }
    compare(t) {
        if (!(t instanceof bAa)) return 3;
        const n = Math.min(this.textSelection.selectionStartLineNumber, this.textSelection.positionLineNumber), i = Math.min(t.textSelection.selectionStartLineNumber, t.textSelection.positionLineNumber);
        return n === i ? 1 : Math.abs(n - i) < bAa.TEXT_EDITOR_SELECTION_THRESHOLD ? 2 : 3;
    }
    restore(t) {
        return {
            ...t,
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
}, oDo.TEXT_EDITOR_SELECTION_THRESHOLD = 10, Vnr = oDo;

}
