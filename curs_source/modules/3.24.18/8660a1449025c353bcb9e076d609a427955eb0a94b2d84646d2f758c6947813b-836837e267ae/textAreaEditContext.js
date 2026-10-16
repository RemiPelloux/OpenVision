import { D, Di, Fa, Hg, K9, _r } from "./Iwo.js";
import { $8o, A_, Zke, _7, ybt } from "./browser_2.js";
import { Esi } from "./clipboardUtils.js";
import { _b, ls } from "./color.js";
import { she } from "./domFontInfo.js";
import { kWo, oHd } from "./editContext.js";
import { Kve, s2 } from "./editorOptions.js";
import { i6 } from "./fastDomNode.js";
import { Ofn, sHd } from "./ime.js";
import { It, dn } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { BI, Iy } from "./languages.js";
import { e$d, zHo } from "./lineNumbers.js";
import { XHo, o$d } from "./margin.js";
import { VHo, gBt } from "./mouseCursor.js";
import { Bt } from "./nls.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { CWo, lHd } from "./screenReaderUtils.js";
import { Cy, bu } from "./selection.js";
import { GDy } from "./textAreaEditContext.css";
import { Ajd, Rjd, hCr } from "./textAreaEditContextInput.js";
import { DQ, Ijd, e_e } from "./textAreaEditContextState.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { sBt, xQ } from "./viewEvents.js";
import { YAe, pz } from "./viewPart.js";
import { $ii } from "./wordCharacterClassifier.js";
import { Ejd, Ew, aHd, oB, owe, qDy, wWo } from "./ze.js";
var cHd, CCr, TCr;
export { CCr, TCr, cHd };
var __wakaru_zDy_initialized = false;
export function zDy() {
if (__wakaru_zDy_initialized) return;
__wakaru_zDy_initialized = true;
"use strict";
E(), GDy(), Bt(), A_(), i6(), Di(), Fa(), she(), pz(), e$d(), o$d(), s2(), jc(), Qs(), Cy(), sBt(), VHo(), Iy(), _b(), sHd(), ru(), It(), oHd(), Rjd(), lHd(), Esi(), Ijd(), $ii(), cHd = class {
    constructor(t, e, n, i, r){
        this._context = t, this.modelLineNumber = e, this.distanceToModelLineStart = n, this.widthOfHiddenLineTextBefore = i, this.distanceToModelLineEnd = r, this._visibleTextAreaBrand = void 0, this.startPosition = null, this.endPosition = null, this.visibleTextareaStart = null, this.visibleTextareaEnd = null, this._previousPresentation = null;
    }
    prepareRender(t) {
        const e = new er(this.modelLineNumber, this.distanceToModelLineStart + 1), n = new er(this.modelLineNumber, this._context.viewModel.model.getLineMaxColumn(this.modelLineNumber) - this.distanceToModelLineEnd);
        this.startPosition = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(e), this.endPosition = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(n), this.startPosition.lineNumber === this.endPosition.lineNumber ? (this.visibleTextareaStart = t.visibleRangeForPosition(this.startPosition), this.visibleTextareaEnd = t.visibleRangeForPosition(this.endPosition)) : (this.visibleTextareaStart = null, this.visibleTextareaEnd = null);
    }
    definePresentation(t) {
        return this._previousPresentation || (t ? this._previousPresentation = t : this._previousPresentation = {
            foreground: 1,
            italic: !1,
            bold: !1,
            underline: !1,
            strikethrough: !1
        }), this._previousPresentation;
    }
}, CCr = _7, TCr = class extends kWo {
    constructor(t, e, n, i, r, s){
        super(t), this._keybindingService = r, this._instantiationService = s, this._primaryCursorPosition = new er(1, 1), this._primaryCursorVisibleRange = null, this._viewController = n, this._visibleRangeProvider = i, this._scrollLeft = 0, this._scrollTop = 0;
        const o = this._context.configuration.options, a = o.get(151);
        this._setAccessibilityOptions(o), this._contentLeft = a.contentLeft, this._contentWidth = a.contentWidth, this._contentHeight = a.height, this._fontInfo = o.get(52), this._lineHeight = o.get(68), this._emptySelectionClipboard = o.get(38), this._copyWithSyntaxHighlighting = o.get(25), this._visibleTextArea = null, this._selections = [
            new bu(1, 1, 1, 1)
        ], this._modelSelections = [
            new bu(1, 1, 1, 1)
        ], this._lastRenderPosition = null, this.textArea = Ew(document.createElement("textarea")), YAe.write(this.textArea, 7), this.textArea.setClassName(`inputarea ${gBt}`), this.textArea.setAttribute("wrap", this._textAreaWrapping && !this._visibleTextArea ? "on" : "off");
        const { tabSize: l } = this._context.viewModel.model.getOptions();
        this.textArea.domNode.style.tabSize = `${l * this._fontInfo.spaceWidth}px`, this.textArea.setAttribute("autocorrect", "off"), this.textArea.setAttribute("autocapitalize", "off"), this.textArea.setAttribute("autocomplete", "off"), this.textArea.setAttribute("spellcheck", "false"), this.textArea.setAttribute("aria-label", wWo(o, this._keybindingService)), this.textArea.setAttribute("aria-required", o.get(5) ? "true" : "false"), this.textArea.setAttribute("tabindex", String(o.get(129))), this.textArea.setAttribute("role", "textbox"), this.textArea.setAttribute("aria-roledescription", D(186, null)), this.textArea.setAttribute("aria-multiline", "true"), this.textArea.setAttribute("aria-autocomplete", o.get(96) ? "none" : "both"), this._ensureReadOnlyAttribute(), this.textAreaCover = Ew(document.createElement("div")), this.textAreaCover.setPosition("absolute"), e.appendChild(this.textArea), e.appendChild(this.textAreaCover);
        const c = {
            getLineCount: ()=>this._context.viewModel.getLineCount(),
            getLineMaxColumn: (h)=>this._context.viewModel.getLineMaxColumn(h),
            getValueInRange: (h, p)=>this._context.viewModel.getValueInRange(h, p),
            getValueLengthInRange: (h, p)=>this._context.viewModel.getValueLengthInRange(h, p),
            modifyPosition: (h, p)=>this._context.viewModel.modifyPosition(h, p)
        }, u = {
            getDataToCopy: ()=>Ejd(this._context.viewModel, this._modelSelections, this._emptySelectionClipboard, this._copyWithSyntaxHighlighting),
            getScreenReaderContent: ()=>{
                if (this._accessibilitySupport === 1) {
                    const p = this._selections[0];
                    if (_r && p.isEmpty()) {
                        const f = p.getStartPosition();
                        let _ = this._getWordBeforePosition(f);
                        if (_.length === 0 && (_ = this._getCharacterBeforePosition(f)), _.length > 0) return new DQ(_, _.length, _.length, qt.fromPositions(f), 0);
                    }
                    if (_r && !p.isEmpty() && c.getValueLengthInRange(p, 0) < 500) {
                        const f = c.getValueInRange(p, 0);
                        return new DQ(f, 0, f.length, p, 0);
                    }
                    if (Zke && !p.isEmpty()) {
                        const f = "vscode-placeholder";
                        return new DQ(f, 0, f.length, null, void 0);
                    }
                    return DQ.EMPTY;
                }
                if ($8o) {
                    const p = this._selections[0];
                    if (p.isEmpty()) {
                        const g = p.getStartPosition(), [f, _] = this._getAndroidWordAtPosition(g);
                        if (f.length > 0) return new DQ(f, _, _, qt.fromPositions(g), 0);
                    }
                    return DQ.EMPTY;
                }
                const h = CWo.fromEditorSelection(c, this._selections[0], this._accessibilityPageSize, this._accessibilitySupport === 0);
                return DQ.fromScreenReaderContentState(h);
            },
            deduceModelPosition: (h, p, g)=>this._context.viewModel.deduceModelPositionRelativeToViewPosition(h, p, g)
        }, d = this._register(new Ajd(this.textArea.domNode));
        this._textAreaInput = this._register(this._instantiationService.createInstance(hCr, u, d, Hg, {
            isAndroid: $8o,
            isChrome: ybt,
            isFirefox: _7,
            isSafari: Zke
        })), this._register(this._textAreaInput.onKeyDown((h)=>{
            this._viewController.emitKeyDown(h);
        })), this._register(this._textAreaInput.onKeyUp((h)=>{
            this._viewController.emitKeyUp(h);
        })), this._register(this._textAreaInput.onPaste((h)=>{
            let p = !1, g = null, f = null;
            h.metadata && (p = this._emptySelectionClipboard && !!h.metadata.isFromEmptySelection, g = typeof h.metadata.multicursorText < "u" ? h.metadata.multicursorText : null, f = h.metadata.mode), this._viewController.paste(h.text, p, g, f);
        })), this._register(this._textAreaInput.onCut(()=>{
            this._viewController.cut();
        })), this._register(this._textAreaInput.onType((h)=>{
            h.replacePrevCharCnt || h.replaceNextCharCnt || h.positionDelta ? (e_e && console.log(` => compositionType: <<${h.text}>>, ${h.replacePrevCharCnt}, ${h.replaceNextCharCnt}, ${h.positionDelta}`), this._viewController.compositionType(h.text, h.replacePrevCharCnt, h.replaceNextCharCnt, h.positionDelta)) : (e_e && console.log(` => type: <<${h.text}>>`), this._viewController.type(h.text));
        })), this._register(this._textAreaInput.onSelectionChangeRequest((h)=>{
            this._viewController.setSelection(h);
        })), this._register(this._textAreaInput.onCompositionStart((h)=>{
            const p = this.textArea.domNode, g = this._modelSelections[0], { distanceToModelLineStart: f, widthOfHiddenTextBefore: _ } = (()=>{
                const y = p.value.substring(0, Math.min(p.selectionStart, p.selectionEnd)), S = y.lastIndexOf(`
`), k = y.substring(S + 1), C = k.lastIndexOf("	"), T = k.length - C - 1, I = g.getStartPosition(), A = Math.min(I.column - 1, T), P = I.column - 1 - A, M = k.substring(0, k.length - A), { tabSize: O } = this._context.viewModel.model.getOptions(), N = qDy(this.textArea.domNode.ownerDocument, M, this._fontInfo, O);
                return {
                    distanceToModelLineStart: P,
                    widthOfHiddenTextBefore: N
                };
            })(), { distanceToModelLineEnd: b } = (()=>{
                const y = p.value.substring(Math.max(p.selectionStart, p.selectionEnd)), S = y.indexOf(`
`), k = S === -1 ? y : y.substring(0, S), C = k.indexOf("	"), T = C === -1 ? k.length : k.length - C - 1, I = g.getEndPosition(), A = Math.min(this._context.viewModel.model.getLineMaxColumn(I.lineNumber) - I.column, T);
                return {
                    distanceToModelLineEnd: this._context.viewModel.model.getLineMaxColumn(I.lineNumber) - I.column - A
                };
            })();
            this._context.viewModel.revealRange("keyboard", !0, qt.fromPositions(this._selections[0].getStartPosition()), xQ.Simple, 1), this._visibleTextArea = new cHd(this._context, g.startLineNumber, f, _, b), this.textArea.setAttribute("wrap", this._textAreaWrapping && !this._visibleTextArea ? "on" : "off"), this._visibleTextArea.prepareRender(this._visibleRangeProvider), this._render(), this.textArea.setClassName(`inputarea ${gBt} ime-input`), this._viewController.compositionStart(), this._context.viewModel.onCompositionStart();
        })), this._register(this._textAreaInput.onCompositionUpdate((h)=>{
            this._visibleTextArea && (this._visibleTextArea.prepareRender(this._visibleRangeProvider), this._render());
        })), this._register(this._textAreaInput.onCompositionEnd(()=>{
            this._visibleTextArea = null, this.textArea.setAttribute("wrap", this._textAreaWrapping && !this._visibleTextArea ? "on" : "off"), this._render(), this.textArea.setClassName(`inputarea ${gBt}`), this._viewController.compositionEnd(), this._context.viewModel.onCompositionEnd();
        })), this._register(this._textAreaInput.onFocus(()=>{
            this._context.viewModel.setHasFocus(!0);
        })), this._register(this._textAreaInput.onBlur(()=>{
            this._context.viewModel.setHasFocus(!1);
        })), this._register(Ofn.onDidChange(()=>{
            this._ensureReadOnlyAttribute();
        }));
    }
    get domNode() {
        return this.textArea;
    }
    writeScreenReaderContent(t) {
        this._textAreaInput.writeNativeTextAreaContent(t);
    }
    getTextAreaDomNode() {
        return this.textArea.domNode;
    }
    dispose() {
        super.dispose(), this.textArea.domNode.remove(), this.textAreaCover.domNode.remove();
    }
    _getAndroidWordAtPosition(t) {
        const e = '`~!@#$%^&*()-=+[{]}\\|;:",.<>/?', n = this._context.viewModel.getLineContent(t.lineNumber), i = owe(e, []);
        let r = !0, s = t.column, o = !0, a = t.column, l = 0;
        for(; l < 50 && (r || o);){
            if (r && s <= 1 && (r = !1), r) {
                const c = n.charCodeAt(s - 2);
                i.get(c) !== 0 ? r = !1 : s--;
            }
            if (o && a > n.length && (o = !1), o) {
                const c = n.charCodeAt(a - 1);
                i.get(c) !== 0 ? o = !1 : a++;
            }
            l++;
        }
        return [
            n.substring(s - 1, a - 1),
            t.column - s
        ];
    }
    _getWordBeforePosition(t) {
        const e = this._context.viewModel.getLineContent(t.lineNumber), n = owe(this._context.configuration.options.get(136), []);
        let i = t.column, r = 0;
        for(; i > 1;){
            const s = e.charCodeAt(i - 2);
            if (n.get(s) !== 0 || r > 50) return e.substring(i - 1, t.column - 1);
            r++, i--;
        }
        return e.substring(0, t.column - 1);
    }
    _getCharacterBeforePosition(t) {
        if (t.column > 1) {
            const n = this._context.viewModel.getLineContent(t.lineNumber).charAt(t.column - 2);
            if (!K9(n.charCodeAt(0))) return n;
        }
        return "";
    }
    _setAccessibilityOptions(t) {
        this._accessibilitySupport = t.get(2);
        const e = t.get(3);
        this._accessibilitySupport === 2 && e === Kve.accessibilityPageSize.defaultValue ? this._accessibilityPageSize = 500 : this._accessibilityPageSize = e;
        const i = t.get(151).wrappingColumn;
        if (i !== -1 && this._accessibilitySupport !== 1) {
            const r = t.get(52);
            this._textAreaWrapping = !0, this._textAreaWidth = Math.round(i * r.typicalHalfwidthCharacterWidth);
        } else this._textAreaWrapping = !1, this._textAreaWidth = CCr ? 0 : 1;
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options, n = e.get(151);
        this._setAccessibilityOptions(e), this._contentLeft = n.contentLeft, this._contentWidth = n.contentWidth, this._contentHeight = n.height, this._fontInfo = e.get(52), this._lineHeight = e.get(68), this._emptySelectionClipboard = e.get(38), this._copyWithSyntaxHighlighting = e.get(25), this.textArea.setAttribute("wrap", this._textAreaWrapping && !this._visibleTextArea ? "on" : "off");
        const { tabSize: i } = this._context.viewModel.model.getOptions();
        return this.textArea.domNode.style.tabSize = `${i * this._fontInfo.spaceWidth}px`, this.textArea.setAttribute("aria-label", wWo(e, this._keybindingService)), this.textArea.setAttribute("aria-required", e.get(5) ? "true" : "false"), this.textArea.setAttribute("tabindex", String(e.get(129))), (t.hasChanged(34) || t.hasChanged(96)) && this._ensureReadOnlyAttribute(), t.hasChanged(2) && this._textAreaInput.writeNativeTextAreaContent("strategy changed"), !0;
    }
    onCursorStateChanged(t) {
        return this._selections = t.selections.slice(0), this._modelSelections = t.modelSelections.slice(0), this._textAreaInput.writeNativeTextAreaContent("selection changed"), !0;
    }
    onDecorationsChanged(t) {
        return !0;
    }
    onFlushed(t) {
        return !0;
    }
    onLinesChanged(t) {
        return !0;
    }
    onLinesDeleted(t) {
        return !0;
    }
    onLinesInserted(t) {
        return !0;
    }
    onScrollChanged(t) {
        return this._scrollLeft = t.scrollLeft, this._scrollTop = t.scrollTop, !0;
    }
    onZonesChanged(t) {
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
    setAriaOptions(t) {
        t.activeDescendant ? (this.textArea.setAttribute("aria-haspopup", "true"), this.textArea.setAttribute("aria-autocomplete", "list"), this.textArea.setAttribute("aria-activedescendant", t.activeDescendant)) : (this.textArea.setAttribute("aria-haspopup", "false"), this.textArea.setAttribute("aria-autocomplete", "both"), this.textArea.removeAttribute("aria-activedescendant")), t.role && this.textArea.setAttribute("role", t.role);
    }
    _ensureReadOnlyAttribute() {
        const t = this._context.configuration.options;
        !Ofn.enabled || t.get(34) && t.get(96) ? this.textArea.setAttribute("readonly", "true") : this.textArea.removeAttribute("readonly");
    }
    prepareRender(t) {
        this._primaryCursorPosition = new er(this._selections[0].positionLineNumber, this._selections[0].positionColumn), this._primaryCursorVisibleRange = t.visibleRangeForPosition(this._primaryCursorPosition), this._visibleTextArea?.prepareRender(t);
    }
    render(t) {
        this._textAreaInput.writeNativeTextAreaContent("render"), this._render();
    }
    _render() {
        if (this._visibleTextArea) {
            const n = this._visibleTextArea.visibleTextareaStart, i = this._visibleTextArea.visibleTextareaEnd, r = this._visibleTextArea.startPosition, s = this._visibleTextArea.endPosition;
            if (r && s && n && i && i.left >= this._scrollLeft && n.left <= this._scrollLeft + this._contentWidth) {
                const o = this._context.viewLayout.getVerticalOffsetForLineNumber(this._primaryCursorPosition.lineNumber) - this._scrollTop, a = aHd(this.textArea.domNode.value.substr(0, this.textArea.domNode.selectionStart));
                let l = this._visibleTextArea.widthOfHiddenLineTextBefore, c = this._contentLeft + n.left - this._scrollLeft, u = i.left - n.left + 1;
                if (c < this._contentLeft) {
                    const _ = this._contentLeft - c;
                    c += _, l += _, u -= _;
                }
                u > this._contentWidth && (u = this._contentWidth);
                const d = this._context.viewModel.getViewLineData(r.lineNumber), h = d.tokens.findTokenIndexAtOffset(r.column - 1), p = d.tokens.findTokenIndexAtOffset(s.column - 1), g = h === p, f = this._visibleTextArea.definePresentation(g ? d.tokens.getPresentation(h) : null);
                this.textArea.domNode.scrollTop = a * this._lineHeight, this.textArea.domNode.scrollLeft = l, this._doRender({
                    lastRenderPosition: null,
                    top: o,
                    left: c,
                    width: u,
                    height: this._lineHeight,
                    useCover: !1,
                    color: (BI.getColorMap() || [])[f.foreground],
                    italic: f.italic,
                    bold: f.bold,
                    underline: f.underline,
                    strikethrough: f.strikethrough
                });
            }
            return;
        }
        if (!this._primaryCursorVisibleRange) {
            this._renderAtTopLeft();
            return;
        }
        const t = this._contentLeft + this._primaryCursorVisibleRange.left - this._scrollLeft;
        if (t < this._contentLeft || t > this._contentLeft + this._contentWidth) {
            this._renderAtTopLeft();
            return;
        }
        const e = this._context.viewLayout.getVerticalOffsetForLineNumber(this._selections[0].positionLineNumber) - this._scrollTop;
        if (e < 0 || e > this._contentHeight) {
            this._renderAtTopLeft();
            return;
        }
        if (_r || this._accessibilitySupport === 2) {
            this._doRender({
                lastRenderPosition: this._primaryCursorPosition,
                top: e,
                left: this._textAreaWrapping ? this._contentLeft : t,
                width: this._textAreaWidth,
                height: this._lineHeight,
                useCover: !1
            }), this.textArea.domNode.scrollLeft = this._primaryCursorVisibleRange.left;
            const n = this._textAreaInput.textAreaState.newlineCountBeforeSelection ?? aHd(this.textArea.domNode.value.substring(0, this.textArea.domNode.selectionStart));
            this.textArea.domNode.scrollTop = n * this._lineHeight;
            return;
        }
        this._doRender({
            lastRenderPosition: this._primaryCursorPosition,
            top: e,
            left: this._textAreaWrapping ? this._contentLeft : t,
            width: this._textAreaWidth,
            height: CCr ? 0 : 1,
            useCover: !1
        });
    }
    _renderAtTopLeft() {
        this._doRender({
            lastRenderPosition: null,
            top: 0,
            left: 0,
            width: this._textAreaWidth,
            height: CCr ? 0 : 1,
            useCover: !0
        });
    }
    _doRender(t) {
        this._lastRenderPosition = t.lastRenderPosition;
        const e = this.textArea, n = this.textAreaCover;
        oB(e, this._fontInfo), e.setTop(t.top), e.setLeft(t.left), e.setWidth(t.width), e.setHeight(t.height), e.setColor(t.color ? ls.Format.CSS.formatHex(t.color) : ""), e.setFontStyle(t.italic ? "italic" : ""), t.bold && e.setFontWeight("bold"), e.setTextDecoration(`${t.underline ? " underline" : ""}${t.strikethrough ? " line-through" : ""}`), n.setTop(t.useCover ? t.top : 0), n.setLeft(t.useCover ? t.left : 0), n.setWidth(t.useCover ? t.width : 0), n.setHeight(t.useCover ? t.height : 0);
        const i = this._context.configuration.options;
        i.get(59) ? n.setClassName("monaco-editor-background textAreaCover " + XHo.OUTER_CLASS_NAME) : i.get(69).renderType !== 0 ? n.setClassName("monaco-editor-background textAreaCover " + zHo.CLASS_NAME) : n.setClassName("monaco-editor-background textAreaCover");
    }
}, TCr = Re([
    F(4, Al),
    F(5, dn)
], TCr);

}
