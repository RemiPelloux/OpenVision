import { D, Gt, Qe, st, tt } from "./Iwo.js";
import { Hi, Rr } from "./contextkey.js";
import { Kve, s2 } from "./editorOptions.js";
import { It, dn } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { Bt } from "./nls.js";
import { Jc } from "./observable.js";
import { FQ } from "./observableCodeEditor.js";
import { Gqd, xY } from "./overviewRulerFeature.js";
import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
import { Zo, b7, lgn, z3 } from "./ze.js";
var OTr;
export { OTr };
var __wakaru_aLy_initialized = false;
export function aLy() {
if (__wakaru_aLy_initialized) return;
__wakaru_aLy_initialized = true;
"use strict";
E(), Gt(), Qe(), Jc(), FQ(), Gqd(), s2(), jc(), Bt(), It(), ru(), Hi(), OTr = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this.originalEditorElement = t, this.modifiedEditorElement = e, this._options = n, this._argCodeEditorWidgetOptions = i, this._createInnerEditor = r, this._contextKeyService = s, this._instantiationService = o, this._keybindingService = a, this.original = this._register(this._createLeftHandSideEditor(this._options.editorOptions.get(), this._argCodeEditorWidgetOptions.originalEditor || {})), this.modified = this._register(this._createRightHandSideEditor(this._options.editorOptions.get(), this._argCodeEditorWidgetOptions.modifiedEditor || {})), this._onDidContentSizeChange = this._register(new tt), this.modifiedScrollTop = Yv(this, this.modified.onDidScrollChange, ()=>this.modified.getScrollTop()), this.modifiedScrollHeight = Yv(this, this.modified.onDidScrollChange, ()=>this.modified.getScrollHeight()), this.modifiedObs = z3(this.modified), this.originalObs = z3(this.original), this.modifiedModel = this.modifiedObs.model, this.modifiedSelections = Yv(this, this.modified.onDidChangeCursorSelection, ()=>this.modified.getSelections() ?? []), this.modifiedCursor = b7({
            owner: this,
            equalsFn: er.equals
        }, (l)=>this.modifiedSelections.read(l)[0]?.getPosition() ?? new er(1, 1)), this.originalCursor = Yv(this, this.original.onDidChangeCursorPosition, ()=>this.original.getPosition() ?? new er(1, 1)), this.isOriginalFocused = z3(this.original).isFocused, this.isModifiedFocused = z3(this.modified).isFocused, this.isFocused = Zo(this, (l)=>this.isOriginalFocused.read(l) || this.isModifiedFocused.read(l)), this._argCodeEditorWidgetOptions = null, this._register(lgn({
            createEmptyChangeSummary: ()=>({}),
            handleChange: (l, c)=>(l.didChange(n.editorOptions) && Object.assign(c, l.change.changedOptions), !0)
        }, (l, c)=>{
            n.editorOptions.read(l), this._options.renderSideBySide.read(l), this.modified.updateOptions(this._adjustOptionsForRightHandSide(l, c)), this.original.updateOptions(this._adjustOptionsForLeftHandSide(l, c));
        }));
    }
    get onDidContentSizeChange() {
        return this._onDidContentSizeChange.event;
    }
    _createLeftHandSideEditor(t, e) {
        const n = this._adjustOptionsForLeftHandSide(void 0, t), i = this._constructInnerEditor(this._instantiationService, this.originalEditorElement, n, e), r = this._contextKeyService.createKey("isInDiffLeftEditor", i.hasWidgetFocus());
        return this._register(i.onDidFocusEditorWidget(()=>r.set(!0))), this._register(i.onDidBlurEditorWidget(()=>r.set(!1))), i;
    }
    _createRightHandSideEditor(t, e) {
        const n = this._adjustOptionsForRightHandSide(void 0, t), i = this._constructInnerEditor(this._instantiationService, this.modifiedEditorElement, n, e), r = this._contextKeyService.createKey("isInDiffRightEditor", i.hasWidgetFocus());
        return this._register(i.onDidFocusEditorWidget(()=>r.set(!0))), this._register(i.onDidBlurEditorWidget(()=>r.set(!1))), i;
    }
    _constructInnerEditor(t, e, n, i) {
        const r = this._createInnerEditor(t, e, n, i);
        return this._register(r.onDidContentSizeChange((s)=>{
            const o = this.original.getContentWidth() + this.modified.getContentWidth() + xY.ENTIRE_DIFF_OVERVIEW_WIDTH, a = Math.max(this.modified.getContentHeight(), this.original.getContentHeight());
            this._onDidContentSizeChange.fire({
                contentHeight: a,
                contentWidth: o,
                contentHeightChanged: s.contentHeightChanged,
                contentWidthChanged: s.contentWidthChanged
            });
        })), r;
    }
    _adjustOptionsForLeftHandSide(t, e) {
        const n = this._adjustOptionsForSubEditor(e);
        return this._options.renderSideBySide.get() ? (n.unicodeHighlight = this._options.editorOptions.get().unicodeHighlight || {}, n.wordWrapOverride1 = this._options.diffWordWrap.get()) : (n.wordWrapOverride1 = "off", n.wordWrapOverride2 = "off", n.stickyScroll = {
            enabled: !1
        }, n.unicodeHighlight = {
            nonBasicASCII: !1,
            ambiguousCharacters: !1,
            invisibleCharacters: !1
        }), n.glyphMargin = this._options.renderSideBySide.get(), e.originalAriaLabel && (n.ariaLabel = e.originalAriaLabel), n.ariaLabel = this._updateAriaLabel(n.ariaLabel), n.readOnly = !this._options.originalEditable.get(), n.dropIntoEditor = {
            enabled: !n.readOnly
        }, n.extraEditorClassName = "original-in-monaco-diff-editor", n;
    }
    _adjustOptionsForRightHandSide(t, e) {
        const n = this._adjustOptionsForSubEditor(e);
        return e.modifiedAriaLabel && (n.ariaLabel = e.modifiedAriaLabel), n.ariaLabel = this._updateAriaLabel(n.ariaLabel), n.wordWrapOverride1 = this._options.diffWordWrap.get(), n.revealHorizontalRightPadding = Kve.revealHorizontalRightPadding.defaultValue + xY.ENTIRE_DIFF_OVERVIEW_WIDTH, n.scrollbar.verticalHasArrows = !1, n.extraEditorClassName = "modified-in-monaco-diff-editor", n;
    }
    _adjustOptionsForSubEditor(t) {
        const e = {
            ...t,
            dimension: {
                height: 0,
                width: 0
            }
        };
        return e.inDiffEditor = !0, e.automaticLayout = !1, e.scrollbar = {
            ...e.scrollbar || {}
        }, e.folding = !1, e.codeLens = this._options.diffCodeLens.get(), e.fixedOverflowWidgets = !0, e.minimap = {
            ...e.minimap || {}
        }, e.minimap.enabled = !1, this._options.hideUnchangedRegions.get() ? e.stickyScroll = {
            enabled: !1
        } : e.stickyScroll = this._options.editorOptions.get().stickyScroll, e;
    }
    _updateAriaLabel(t) {
        t || (t = "");
        const e = D(230, null, this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getAriaLabel());
        return this._options.accessibilityVerbose.get() ? t + e : t ? t.replaceAll(e, "") : "";
    }
}, OTr = Re([
    F(5, Rr),
    F(6, dn),
    F(7, Al)
], OTr);

}
