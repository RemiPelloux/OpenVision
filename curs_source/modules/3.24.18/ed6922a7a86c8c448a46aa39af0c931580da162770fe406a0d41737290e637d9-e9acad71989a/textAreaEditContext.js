import { Ai, CO, Ps, S, hp, jn } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Ezr, bht, i5, ile, n_ } from "./browser_2.js";
import { Xfn } from "./clipboardUtils.js";
import { Ci, Sm } from "./color.js";
import { WK } from "./domFontInfo.js";
import { _ts, q6c } from "./editContext.js";
import { NK, m1 } from "./editorOptions.js";
import { Tx } from "./fastDomNode.js";
import { j6c, oFt } from "./ime.js";
import { Ze, _t } from "./instantiation.js";
import { no, qr } from "./keybinding.js";
import { Ky, Wp } from "./languages.js";
import { $9c, Ges } from "./lineNumbers.js";
import { q9c, qes } from "./margin.js";
import { Rwe, tFt } from "./mouseCursor.js";
import { rt } from "./nls.js";
import { Yn, ya } from "./position.js";
import { Q_g, bts, c2, h9c, ple, x_, z6c } from "./qIc.js";
import { dt, qi } from "./range.js";
import { K6c, yts } from "./screenReaderUtils.js";
import { _f, za } from "./selection.js";
import { Z_g } from "./textAreaEditContext.css";
import { U_i, f9c, g9c } from "./textAreaEditContextInput.js";
import { fre, p9c, vW } from "./textAreaEditContextState.js";
import { x } from "./tslib.es6.js";
import { Npt, hW } from "./viewEvents.js";
import { aU, jge } from "./viewPart.js";
import { Zmn } from "./wordCharacterClassifier.js";
var Y6c, X_i, Z_i;
export { X_i, Y6c, Z_i };
var __wakaru_J_g_initialized = false;
export function J_g() {
if (__wakaru_J_g_initialized) return;
__wakaru_J_g_initialized = true;
"use strict";
x(), Z_g(), rt(), n_(), Tx(), jn(), Ps(), WK(), aU(), $9c(), q9c(), m1(), ya(), qi(), _f(), Npt(), tFt(), Wp(), Sm(), j6c(), no(), Ze(), q6c(), f9c(), K6c(), Xfn(), p9c(), Zmn(), Y6c = class {
    constructor(e, t, n, i, r){
        this._context = e, this.modelLineNumber = t, this.distanceToModelLineStart = n, this.widthOfHiddenLineTextBefore = i, this.distanceToModelLineEnd = r, this._visibleTextAreaBrand = void 0, this.startPosition = null, this.endPosition = null, this.visibleTextareaStart = null, this.visibleTextareaEnd = null, this._previousPresentation = null;
    }
    prepareRender(e) {
        const t = new Yn(this.modelLineNumber, this.distanceToModelLineStart + 1), n = new Yn(this.modelLineNumber, this._context.viewModel.model.getLineMaxColumn(this.modelLineNumber) - this.distanceToModelLineEnd);
        this.startPosition = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(t), this.endPosition = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(n), this.startPosition.lineNumber === this.endPosition.lineNumber ? (this.visibleTextareaStart = e.visibleRangeForPosition(this.startPosition), this.visibleTextareaEnd = e.visibleRangeForPosition(this.endPosition)) : (this.visibleTextareaStart = null, this.visibleTextareaEnd = null);
    }
    definePresentation(e) {
        return this._previousPresentation || (e ? this._previousPresentation = e : this._previousPresentation = {
            foreground: 1,
            italic: !1,
            bold: !1,
            underline: !1,
            strikethrough: !1
        }), this._previousPresentation;
    }
}, X_i = i5, Z_i = class extends _ts {
    constructor(e, t, n, i, r, s){
        super(e), this._keybindingService = r, this._instantiationService = s, this._primaryCursorPosition = new Yn(1, 1), this._primaryCursorVisibleRange = null, this._viewController = n, this._visibleRangeProvider = i, this._scrollLeft = 0, this._scrollTop = 0;
        const o = this._context.configuration.options, a = o.get(151);
        this._setAccessibilityOptions(o), this._contentLeft = a.contentLeft, this._contentWidth = a.contentWidth, this._contentHeight = a.height, this._fontInfo = o.get(52), this._lineHeight = o.get(68), this._emptySelectionClipboard = o.get(38), this._copyWithSyntaxHighlighting = o.get(25), this._visibleTextArea = null, this._selections = [
            new za(1, 1, 1, 1)
        ], this._modelSelections = [
            new za(1, 1, 1, 1)
        ], this._lastRenderPosition = null, this.textArea = x_(document.createElement("textarea")), jge.write(this.textArea, 7), this.textArea.setClassName(`inputarea ${Rwe}`), this.textArea.setAttribute("wrap", this._textAreaWrapping && !this._visibleTextArea ? "on" : "off");
        const { tabSize: c } = this._context.viewModel.model.getOptions();
        this.textArea.domNode.style.tabSize = `${c * this._fontInfo.spaceWidth}px`, this.textArea.setAttribute("autocorrect", "off"), this.textArea.setAttribute("autocapitalize", "off"), this.textArea.setAttribute("autocomplete", "off"), this.textArea.setAttribute("spellcheck", "false"), this.textArea.setAttribute("aria-label", bts(o, this._keybindingService)), this.textArea.setAttribute("aria-required", o.get(5) ? "true" : "false"), this.textArea.setAttribute("tabindex", String(o.get(129))), this.textArea.setAttribute("role", "textbox"), this.textArea.setAttribute("aria-roledescription", S(186, null)), this.textArea.setAttribute("aria-multiline", "true"), this.textArea.setAttribute("aria-autocomplete", o.get(96) ? "none" : "both"), this._ensureReadOnlyAttribute(), this.textAreaCover = x_(document.createElement("div")), this.textAreaCover.setPosition("absolute"), t.appendChild(this.textArea), t.appendChild(this.textAreaCover);
        const l = {
            getLineCount: ()=>this._context.viewModel.getLineCount(),
            getLineMaxColumn: (p)=>this._context.viewModel.getLineMaxColumn(p),
            getValueInRange: (p, g)=>this._context.viewModel.getValueInRange(p, g),
            getValueLengthInRange: (p, g)=>this._context.viewModel.getValueLengthInRange(p, g),
            modifyPosition: (p, g)=>this._context.viewModel.modifyPosition(p, g)
        }, u = {
            getDataToCopy: ()=>h9c(this._context.viewModel, this._modelSelections, this._emptySelectionClipboard, this._copyWithSyntaxHighlighting),
            getScreenReaderContent: ()=>{
                if (this._accessibilitySupport === 1) {
                    const g = this._selections[0];
                    if (Ai && g.isEmpty()) {
                        const v = g.getStartPosition();
                        let b = this._getWordBeforePosition(v);
                        if (b.length === 0 && (b = this._getCharacterBeforePosition(v)), b.length > 0) return new vW(b, b.length, b.length, dt.fromPositions(v), 0);
                    }
                    if (Ai && !g.isEmpty() && l.getValueLengthInRange(g, 0) < 500) {
                        const v = l.getValueInRange(g, 0);
                        return new vW(v, 0, v.length, g, 0);
                    }
                    if (ile && !g.isEmpty()) {
                        const v = "vscode-placeholder";
                        return new vW(v, 0, v.length, null, void 0);
                    }
                    return vW.EMPTY;
                }
                if (Ezr) {
                    const g = this._selections[0];
                    if (g.isEmpty()) {
                        const f = g.getStartPosition(), [v, b] = this._getAndroidWordAtPosition(f);
                        if (v.length > 0) return new vW(v, b, b, dt.fromPositions(f), 0);
                    }
                    return vW.EMPTY;
                }
                const p = yts.fromEditorSelection(l, this._selections[0], this._accessibilityPageSize, this._accessibilitySupport === 0);
                return vW.fromScreenReaderContentState(p);
            },
            deduceModelPosition: (p, g, f)=>this._context.viewModel.deduceModelPositionRelativeToViewPosition(p, g, f)
        }, h = this._register(new g9c(this.textArea.domNode));
        this._textAreaInput = this._register(this._instantiationService.createInstance(U_i, u, h, hp, {
            isAndroid: Ezr,
            isChrome: bht,
            isFirefox: i5,
            isSafari: ile
        })), this._register(this._textAreaInput.onKeyDown((p)=>{
            this._viewController.emitKeyDown(p);
        })), this._register(this._textAreaInput.onKeyUp((p)=>{
            this._viewController.emitKeyUp(p);
        })), this._register(this._textAreaInput.onPaste((p)=>{
            let g = !1, f = null, v = null;
            p.metadata && (g = this._emptySelectionClipboard && !!p.metadata.isFromEmptySelection, f = typeof p.metadata.multicursorText < "u" ? p.metadata.multicursorText : null, v = p.metadata.mode), this._viewController.paste(p.text, g, f, v);
        })), this._register(this._textAreaInput.onCut(()=>{
            this._viewController.cut();
        })), this._register(this._textAreaInput.onType((p)=>{
            p.replacePrevCharCnt || p.replaceNextCharCnt || p.positionDelta ? (fre && console.log(` => compositionType: <<${p.text}>>, ${p.replacePrevCharCnt}, ${p.replaceNextCharCnt}, ${p.positionDelta}`), this._viewController.compositionType(p.text, p.replacePrevCharCnt, p.replaceNextCharCnt, p.positionDelta)) : (fre && console.log(` => type: <<${p.text}>>`), this._viewController.type(p.text));
        })), this._register(this._textAreaInput.onSelectionChangeRequest((p)=>{
            this._viewController.setSelection(p);
        })), this._register(this._textAreaInput.onCompositionStart((p)=>{
            const g = this.textArea.domNode, f = this._modelSelections[0], { distanceToModelLineStart: v, widthOfHiddenTextBefore: b } = (()=>{
                const T = g.value.substring(0, Math.min(g.selectionStart, g.selectionEnd)), E = T.lastIndexOf(`
`), A = T.substring(E + 1), R = A.lastIndexOf("	"), D = A.length - R - 1, P = f.getStartPosition(), N = Math.min(P.column - 1, D), O = P.column - 1 - N, F = A.substring(0, A.length - N), { tabSize: H } = this._context.viewModel.model.getOptions(), $ = Q_g(this.textArea.domNode.ownerDocument, F, this._fontInfo, H);
                return {
                    distanceToModelLineStart: O,
                    widthOfHiddenTextBefore: $
                };
            })(), { distanceToModelLineEnd: y } = (()=>{
                const T = g.value.substring(Math.max(g.selectionStart, g.selectionEnd)), E = T.indexOf(`
`), A = E === -1 ? T : T.substring(0, E), R = A.indexOf("	"), D = R === -1 ? A.length : A.length - R - 1, P = f.getEndPosition(), N = Math.min(this._context.viewModel.model.getLineMaxColumn(P.lineNumber) - P.column, D);
                return {
                    distanceToModelLineEnd: this._context.viewModel.model.getLineMaxColumn(P.lineNumber) - P.column - N
                };
            })();
            this._context.viewModel.revealRange("keyboard", !0, dt.fromPositions(this._selections[0].getStartPosition()), hW.Simple, 1), this._visibleTextArea = new Y6c(this._context, f.startLineNumber, v, b, y), this.textArea.setAttribute("wrap", this._textAreaWrapping && !this._visibleTextArea ? "on" : "off"), this._visibleTextArea.prepareRender(this._visibleRangeProvider), this._render(), this.textArea.setClassName(`inputarea ${Rwe} ime-input`), this._viewController.compositionStart(), this._context.viewModel.onCompositionStart();
        })), this._register(this._textAreaInput.onCompositionUpdate((p)=>{
            this._visibleTextArea && (this._visibleTextArea.prepareRender(this._visibleRangeProvider), this._render());
        })), this._register(this._textAreaInput.onCompositionEnd(()=>{
            this._visibleTextArea = null, this.textArea.setAttribute("wrap", this._textAreaWrapping && !this._visibleTextArea ? "on" : "off"), this._render(), this.textArea.setClassName(`inputarea ${Rwe}`), this._viewController.compositionEnd(), this._context.viewModel.onCompositionEnd();
        })), this._register(this._textAreaInput.onFocus(()=>{
            this._context.viewModel.setHasFocus(!0);
        })), this._register(this._textAreaInput.onBlur(()=>{
            this._context.viewModel.setHasFocus(!1);
        })), this._register(oFt.onDidChange(()=>{
            this._ensureReadOnlyAttribute();
        }));
    }
    get domNode() {
        return this.textArea;
    }
    writeScreenReaderContent(e) {
        this._textAreaInput.writeNativeTextAreaContent(e);
    }
    getTextAreaDomNode() {
        return this.textArea.domNode;
    }
    dispose() {
        super.dispose(), this.textArea.domNode.remove(), this.textAreaCover.domNode.remove();
    }
    _getAndroidWordAtPosition(e) {
        const t = '`~!@#$%^&*()-=+[{]}\\|;:",.<>/?', n = this._context.viewModel.getLineContent(e.lineNumber), i = ple(t, []);
        let r = !0, s = e.column, o = !0, a = e.column, c = 0;
        for(; c < 50 && (r || o);){
            if (r && s <= 1 && (r = !1), r) {
                const l = n.charCodeAt(s - 2);
                i.get(l) !== 0 ? r = !1 : s--;
            }
            if (o && a > n.length && (o = !1), o) {
                const l = n.charCodeAt(a - 1);
                i.get(l) !== 0 ? o = !1 : a++;
            }
            c++;
        }
        return [
            n.substring(s - 1, a - 1),
            e.column - s
        ];
    }
    _getWordBeforePosition(e) {
        const t = this._context.viewModel.getLineContent(e.lineNumber), n = ple(this._context.configuration.options.get(136), []);
        let i = e.column, r = 0;
        for(; i > 1;){
            const s = t.charCodeAt(i - 2);
            if (n.get(s) !== 0 || r > 50) return t.substring(i - 1, e.column - 1);
            r++, i--;
        }
        return t.substring(0, e.column - 1);
    }
    _getCharacterBeforePosition(e) {
        if (e.column > 1) {
            const n = this._context.viewModel.getLineContent(e.lineNumber).charAt(e.column - 2);
            if (!CO(n.charCodeAt(0))) return n;
        }
        return "";
    }
    _setAccessibilityOptions(e) {
        this._accessibilitySupport = e.get(2);
        const t = e.get(3);
        this._accessibilitySupport === 2 && t === NK.accessibilityPageSize.defaultValue ? this._accessibilityPageSize = 500 : this._accessibilityPageSize = t;
        const i = e.get(151).wrappingColumn;
        if (i !== -1 && this._accessibilitySupport !== 1) {
            const r = e.get(52);
            this._textAreaWrapping = !0, this._textAreaWidth = Math.round(i * r.typicalHalfwidthCharacterWidth);
        } else this._textAreaWrapping = !1, this._textAreaWidth = X_i ? 0 : 1;
    }
    onConfigurationChanged(e) {
        const t = this._context.configuration.options, n = t.get(151);
        this._setAccessibilityOptions(t), this._contentLeft = n.contentLeft, this._contentWidth = n.contentWidth, this._contentHeight = n.height, this._fontInfo = t.get(52), this._lineHeight = t.get(68), this._emptySelectionClipboard = t.get(38), this._copyWithSyntaxHighlighting = t.get(25), this.textArea.setAttribute("wrap", this._textAreaWrapping && !this._visibleTextArea ? "on" : "off");
        const { tabSize: i } = this._context.viewModel.model.getOptions();
        return this.textArea.domNode.style.tabSize = `${i * this._fontInfo.spaceWidth}px`, this.textArea.setAttribute("aria-label", bts(t, this._keybindingService)), this.textArea.setAttribute("aria-required", t.get(5) ? "true" : "false"), this.textArea.setAttribute("tabindex", String(t.get(129))), (e.hasChanged(34) || e.hasChanged(96)) && this._ensureReadOnlyAttribute(), e.hasChanged(2) && this._textAreaInput.writeNativeTextAreaContent("strategy changed"), !0;
    }
    onCursorStateChanged(e) {
        return this._selections = e.selections.slice(0), this._modelSelections = e.modelSelections.slice(0), this._textAreaInput.writeNativeTextAreaContent("selection changed"), !0;
    }
    onDecorationsChanged(e) {
        return !0;
    }
    onFlushed(e) {
        return !0;
    }
    onLinesChanged(e) {
        return !0;
    }
    onLinesDeleted(e) {
        return !0;
    }
    onLinesInserted(e) {
        return !0;
    }
    onScrollChanged(e) {
        return this._scrollLeft = e.scrollLeft, this._scrollTop = e.scrollTop, !0;
    }
    onZonesChanged(e) {
        return !0;
    }
    isFocused() {
        return this._textAreaInput.isFocused();
    }
    focus() {
        this._textAreaInput.focusTextArea();
    }
    refreshFocusState() {
        this._textAreaInput.refreshFocusState();
    }
    getLastRenderData() {
        return this._lastRenderPosition;
    }
    setAriaOptions(e) {
        e.activeDescendant ? (this.textArea.setAttribute("aria-haspopup", "true"), this.textArea.setAttribute("aria-autocomplete", "list"), this.textArea.setAttribute("aria-activedescendant", e.activeDescendant)) : (this.textArea.setAttribute("aria-haspopup", "false"), this.textArea.setAttribute("aria-autocomplete", "both"), this.textArea.removeAttribute("aria-activedescendant")), e.role && this.textArea.setAttribute("role", e.role);
    }
    _ensureReadOnlyAttribute() {
        const e = this._context.configuration.options;
        !oFt.enabled || e.get(34) && e.get(96) ? this.textArea.setAttribute("readonly", "true") : this.textArea.removeAttribute("readonly");
    }
    prepareRender(e) {
        this._primaryCursorPosition = new Yn(this._selections[0].positionLineNumber, this._selections[0].positionColumn), this._primaryCursorVisibleRange = e.visibleRangeForPosition(this._primaryCursorPosition), this._visibleTextArea?.prepareRender(e);
    }
    render(e) {
        this._textAreaInput.writeNativeTextAreaContent("render"), this._render();
    }
    _render() {
        if (this._visibleTextArea) {
            const n = this._visibleTextArea.visibleTextareaStart, i = this._visibleTextArea.visibleTextareaEnd, r = this._visibleTextArea.startPosition, s = this._visibleTextArea.endPosition;
            if (r && s && n && i && i.left >= this._scrollLeft && n.left <= this._scrollLeft + this._contentWidth) {
                const o = this._context.viewLayout.getVerticalOffsetForLineNumber(this._primaryCursorPosition.lineNumber) - this._scrollTop, a = z6c(this.textArea.domNode.value.substr(0, this.textArea.domNode.selectionStart));
                let c = this._visibleTextArea.widthOfHiddenLineTextBefore, l = this._contentLeft + n.left - this._scrollLeft, u = i.left - n.left + 1;
                if (l < this._contentLeft) {
                    const b = this._contentLeft - l;
                    l += b, c += b, u -= b;
                }
                u > this._contentWidth && (u = this._contentWidth);
                const h = this._context.viewModel.getViewLineData(r.lineNumber), p = h.tokens.findTokenIndexAtOffset(r.column - 1), g = h.tokens.findTokenIndexAtOffset(s.column - 1), f = p === g, v = this._visibleTextArea.definePresentation(f ? h.tokens.getPresentation(p) : null);
                this.textArea.domNode.scrollTop = a * this._lineHeight, this.textArea.domNode.scrollLeft = c, this._doRender({
                    lastRenderPosition: null,
                    top: o,
                    left: l,
                    width: u,
                    height: this._lineHeight,
                    useCover: !1,
                    color: (Ky.getColorMap() || [])[v.foreground],
                    italic: v.italic,
                    bold: v.bold,
                    underline: v.underline,
                    strikethrough: v.strikethrough
                });
            }
            return;
        }
        if (!this._primaryCursorVisibleRange) {
            this._renderAtTopLeft();
            return;
        }
        const e = this._contentLeft + this._primaryCursorVisibleRange.left - this._scrollLeft;
        if (e < this._contentLeft || e > this._contentLeft + this._contentWidth) {
            this._renderAtTopLeft();
            return;
        }
        const t = this._context.viewLayout.getVerticalOffsetForLineNumber(this._selections[0].positionLineNumber) - this._scrollTop;
        if (t < 0 || t > this._contentHeight) {
            this._renderAtTopLeft();
            return;
        }
        if (Ai || this._accessibilitySupport === 2) {
            this._doRender({
                lastRenderPosition: this._primaryCursorPosition,
                top: t,
                left: this._textAreaWrapping ? this._contentLeft : e,
                width: this._textAreaWidth,
                height: this._lineHeight,
                useCover: !1
            }), this.textArea.domNode.scrollLeft = this._primaryCursorVisibleRange.left;
            const n = this._textAreaInput.textAreaState.newlineCountBeforeSelection ?? z6c(this.textArea.domNode.value.substring(0, this.textArea.domNode.selectionStart));
            this.textArea.domNode.scrollTop = n * this._lineHeight;
            return;
        }
        this._doRender({
            lastRenderPosition: this._primaryCursorPosition,
            top: t,
            left: this._textAreaWrapping ? this._contentLeft : e,
            width: this._textAreaWidth,
            height: X_i ? 0 : 1,
            useCover: !1
        });
    }
    _renderAtTopLeft() {
        this._doRender({
            lastRenderPosition: null,
            top: 0,
            left: 0,
            width: this._textAreaWidth,
            height: X_i ? 0 : 1,
            useCover: !0
        });
    }
    _doRender(e) {
        this._lastRenderPosition = e.lastRenderPosition;
        const t = this.textArea, n = this.textAreaCover;
        c2(t, this._fontInfo), t.setTop(e.top), t.setLeft(e.left), t.setWidth(e.width), t.setHeight(e.height), t.setColor(e.color ? Ci.Format.CSS.formatHex(e.color) : ""), t.setFontStyle(e.italic ? "italic" : ""), e.bold && t.setFontWeight("bold"), t.setTextDecoration(`${e.underline ? " underline" : ""}${e.strikethrough ? " line-through" : ""}`), n.setTop(e.useCover ? e.top : 0), n.setLeft(e.useCover ? e.left : 0), n.setWidth(e.useCover ? e.width : 0), n.setHeight(e.useCover ? e.height : 0);
        const i = this._context.configuration.options;
        i.get(59) ? n.setClassName("monaco-editor-background textAreaCover " + qes.OUTER_CLASS_NAME) : i.get(69).renderType !== 0 ? n.setClassName("monaco-editor-background textAreaCover " + Ges.CLASS_NAME) : n.setClassName("monaco-editor-background textAreaCover");
    }
}, Z_i = ie([
    C(4, qr),
    C(5, _t)
], Z_i);

}
