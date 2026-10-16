import { S, Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dn, xn } from "./contextkey.js";
import { NK, m1 } from "./editorOptions.js";
import { Ze, _t } from "./instantiation.js";
import { no, qr } from "./keybinding.js";
import { rt } from "./nls.js";
import { qa } from "./observable.js";
import { kW } from "./observableCodeEditor.js";
import { f7c, q7 } from "./overviewRulerFeature.js";
import { Yn, ya } from "./position.js";
import { Ds, e2t, g3, gR } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
var syi;
export { syi };
var __wakaru_pSg_initialized = false;
export function pSg() {
if (__wakaru_pSg_initialized) return;
__wakaru_pSg_initialized = true;
"use strict";
x(), bt(), Se(), qa(), kW(), f7c(), m1(), ya(), rt(), Ze(), no(), dn(), syi = class extends we {
    constructor(e, t, n, i, r, s, o, a){
        super(), this.originalEditorElement = e, this.modifiedEditorElement = t, this._options = n, this._argCodeEditorWidgetOptions = i, this._createInnerEditor = r, this._contextKeyService = s, this._instantiationService = o, this._keybindingService = a, this.original = this._register(this._createLeftHandSideEditor(this._options.editorOptions.get(), this._argCodeEditorWidgetOptions.originalEditor || {})), this.modified = this._register(this._createRightHandSideEditor(this._options.editorOptions.get(), this._argCodeEditorWidgetOptions.modifiedEditor || {})), this._onDidContentSizeChange = this._register(new ve), this.modifiedScrollTop = qp(this, this.modified.onDidScrollChange, ()=>this.modified.getScrollTop()), this.modifiedScrollHeight = qp(this, this.modified.onDidScrollChange, ()=>this.modified.getScrollHeight()), this.modifiedObs = gR(this.modified), this.originalObs = gR(this.original), this.modifiedModel = this.modifiedObs.model, this.modifiedSelections = qp(this, this.modified.onDidChangeCursorSelection, ()=>this.modified.getSelections() ?? []), this.modifiedCursor = g3({
            owner: this,
            equalsFn: Yn.equals
        }, (c)=>this.modifiedSelections.read(c)[0]?.getPosition() ?? new Yn(1, 1)), this.originalCursor = qp(this, this.original.onDidChangeCursorPosition, ()=>this.original.getPosition() ?? new Yn(1, 1)), this.isOriginalFocused = gR(this.original).isFocused, this.isModifiedFocused = gR(this.modified).isFocused, this.isFocused = Ds(this, (c)=>this.isOriginalFocused.read(c) || this.isModifiedFocused.read(c)), this._argCodeEditorWidgetOptions = null, this._register(e2t({
            createEmptyChangeSummary: ()=>({}),
            handleChange: (c, l)=>(c.didChange(n.editorOptions) && Object.assign(l, c.change.changedOptions), !0)
        }, (c, l)=>{
            n.editorOptions.read(c), this._options.renderSideBySide.read(c), this.modified.updateOptions(this._adjustOptionsForRightHandSide(c, l)), this.original.updateOptions(this._adjustOptionsForLeftHandSide(c, l));
        }));
    }
    get onDidContentSizeChange() {
        return this._onDidContentSizeChange.event;
    }
    _createLeftHandSideEditor(e, t) {
        const n = this._adjustOptionsForLeftHandSide(void 0, e), i = this._constructInnerEditor(this._instantiationService, this.originalEditorElement, n, t), r = this._contextKeyService.createKey("isInDiffLeftEditor", i.hasWidgetFocus());
        return this._register(i.onDidFocusEditorWidget(()=>r.set(!0))), this._register(i.onDidBlurEditorWidget(()=>r.set(!1))), i;
    }
    _createRightHandSideEditor(e, t) {
        const n = this._adjustOptionsForRightHandSide(void 0, e), i = this._constructInnerEditor(this._instantiationService, this.modifiedEditorElement, n, t), r = this._contextKeyService.createKey("isInDiffRightEditor", i.hasWidgetFocus());
        return this._register(i.onDidFocusEditorWidget(()=>r.set(!0))), this._register(i.onDidBlurEditorWidget(()=>r.set(!1))), i;
    }
    _constructInnerEditor(e, t, n, i) {
        const r = this._createInnerEditor(e, t, n, i);
        return this._register(r.onDidContentSizeChange((s)=>{
            const o = this.original.getContentWidth() + this.modified.getContentWidth() + q7.ENTIRE_DIFF_OVERVIEW_WIDTH, a = Math.max(this.modified.getContentHeight(), this.original.getContentHeight());
            this._onDidContentSizeChange.fire({
                contentHeight: a,
                contentWidth: o,
                contentHeightChanged: s.contentHeightChanged,
                contentWidthChanged: s.contentWidthChanged
            });
        })), r;
    }
    _adjustOptionsForLeftHandSide(e, t) {
        const n = this._adjustOptionsForSubEditor(t);
        return this._options.renderSideBySide.get() ? (n.unicodeHighlight = this._options.editorOptions.get().unicodeHighlight || {}, n.wordWrapOverride1 = this._options.diffWordWrap.get()) : (n.wordWrapOverride1 = "off", n.wordWrapOverride2 = "off", n.stickyScroll = {
            enabled: !1
        }, n.unicodeHighlight = {
            nonBasicASCII: !1,
            ambiguousCharacters: !1,
            invisibleCharacters: !1
        }), n.glyphMargin = this._options.renderSideBySide.get(), t.originalAriaLabel && (n.ariaLabel = t.originalAriaLabel), n.ariaLabel = this._updateAriaLabel(n.ariaLabel), n.readOnly = !this._options.originalEditable.get(), n.dropIntoEditor = {
            enabled: !n.readOnly
        }, n.extraEditorClassName = "original-in-monaco-diff-editor", n;
    }
    _adjustOptionsForRightHandSide(e, t) {
        const n = this._adjustOptionsForSubEditor(t);
        return t.modifiedAriaLabel && (n.ariaLabel = t.modifiedAriaLabel), n.ariaLabel = this._updateAriaLabel(n.ariaLabel), n.wordWrapOverride1 = this._options.diffWordWrap.get(), n.revealHorizontalRightPadding = NK.revealHorizontalRightPadding.defaultValue + q7.ENTIRE_DIFF_OVERVIEW_WIDTH, n.scrollbar.verticalHasArrows = !1, n.extraEditorClassName = "modified-in-monaco-diff-editor", n;
    }
    _adjustOptionsForSubEditor(e) {
        const t = {
            ...e,
            dimension: {
                height: 0,
                width: 0
            }
        };
        return t.inDiffEditor = !0, t.automaticLayout = !1, t.scrollbar = {
            ...t.scrollbar || {}
        }, t.folding = !1, t.codeLens = this._options.diffCodeLens.get(), t.fixedOverflowWidgets = !0, t.minimap = {
            ...t.minimap || {}
        }, t.minimap.enabled = !1, this._options.hideUnchangedRegions.get() ? t.stickyScroll = {
            enabled: !1
        } : t.stickyScroll = this._options.editorOptions.get().stickyScroll, t;
    }
    _updateAriaLabel(e) {
        e || (e = "");
        const t = S(230, null, this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getAriaLabel());
        return this._options.accessibilityVerbose.get() ? e + t : e ? e.replaceAll(t, "") : "";
    }
}, syi = ie([
    C(5, xn),
    C(6, _t),
    C(7, qr)
], syi);

}
