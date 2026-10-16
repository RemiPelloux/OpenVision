import { He, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { en, zp } from "./dom_2.js";
import { OFh, xl_ } from "./glyphHoverComputer.js";
import { $is, N$c } from "./hoverOperation.js";
import { Nyi } from "./hoverUtils.js";
import { Tb, lyi } from "./hoverWidget.js";
import { kl, pc } from "./language.js";
import { g5, u2 } from "./markdownRenderer_2.js";
import { eo, ko } from "./opener.js";
import { Lyi, Ve, Ye } from "./qIc.js";
import { x } from "./tslib.es6.js";
var rRo, $qt;
export { $qt, rRo };
var __wakaru_Il__initialized = false;
export function Il_() {
if (__wakaru_Il__initialized) return;
__wakaru_Il__initialized = true;
"use strict";
x(), en(), Se(), g5(), kl(), N$c(), ko(), Tb(), xl_(), Nyi(), rRo = Ve, $qt = class extends we {
    constructor(e, t, n){
        super(), this._renderDisposeables = this._register(new He), this._editor = e, this._isVisible = !1, this._messages = [], this._hover = this._register(new lyi(!0)), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible), this._markdownRenderer = new u2({
            editor: this._editor
        }, t, n), this._hoverOperation = this._register(new $is(this._editor, new OFh(this._editor))), this._register(this._hoverOperation.onResult((i)=>this._withResult(i))), this._register(this._editor.onDidChangeModelDecorations(()=>this._onModelDecorationsChanged())), this._register(this._editor.onDidChangeConfiguration((i)=>{
            i.hasChanged(52) && this._updateFont();
        })), this._register(zp(this._hover.containerDomNode, "mouseleave", (i)=>{
            this._onMouseLeave(i);
        })), this._editor.addOverlayWidget(this);
    }
    dispose() {
        this._hoverComputerOptions = void 0, this._editor.removeOverlayWidget(this), super.dispose();
    }
    getId() {
        return $qt.ID;
    }
    getDomNode() {
        return this._hover.containerDomNode;
    }
    getPosition() {
        return null;
    }
    _updateFont() {
        Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName("code")).forEach((t)=>this._editor.applyFontInfo(t));
    }
    _onModelDecorationsChanged() {
        this._isVisible && this._hoverComputerOptions && (this._hoverOperation.cancel(), this._hoverOperation.start(0, this._hoverComputerOptions));
    }
    showsOrWillShow(e) {
        const t = e.target;
        return t.type === 2 && t.detail.glyphMarginLane ? (this._startShowingAt(t.position.lineNumber, t.detail.glyphMarginLane), !0) : t.type === 3 ? (this._startShowingAt(t.position.lineNumber, "lineNo"), !0) : !1;
    }
    _startShowingAt(e, t) {
        this._hoverComputerOptions && this._hoverComputerOptions.lineNumber === e && this._hoverComputerOptions.laneOrLine === t || (this._hoverOperation.cancel(), this.hide(), this._hoverComputerOptions = {
            lineNumber: e,
            laneOrLine: t
        }, this._hoverOperation.start(0, this._hoverComputerOptions));
    }
    hide() {
        this._hoverComputerOptions = void 0, this._hoverOperation.cancel(), this._isVisible && (this._isVisible = !1, this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible));
    }
    _withResult(e) {
        this._messages = e.value, this._messages.length > 0 ? this._renderMessages(e.options.lineNumber, e.options.laneOrLine, this._messages) : this.hide();
    }
    _renderMessages(e, t, n) {
        this._renderDisposeables.clear();
        const i = document.createDocumentFragment();
        for (const r of n){
            const s = rRo("div.hover-row.markdown-hover"), o = Ye(s, rRo("div.hover-contents")), a = this._renderDisposeables.add(this._markdownRenderer.render(r.value));
            o.appendChild(a.element), i.appendChild(s);
        }
        this._updateContents(i), this._showAt(e, t);
    }
    _updateContents(e) {
        this._hover.contentsDomNode.textContent = "", this._hover.contentsDomNode.appendChild(e), this._updateFont();
    }
    _showAt(e, t) {
        this._isVisible || (this._isVisible = !0, this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible));
        const n = this._editor.getLayoutInfo(), i = this._editor.getTopForLineNumber(e), r = this._editor.getScrollTop(), s = this._editor.getOption(68), o = this._hover.containerDomNode.clientHeight, a = i - r - (o - s) / 2, c = n.glyphMarginLeft + n.glyphMarginWidth + (t === "lineNo" ? n.lineNumbersWidth : 0);
        this._hover.containerDomNode.style.left = `${c}px`, this._hover.containerDomNode.style.top = `${Math.max(Math.round(a), 0)}px`, this._hover.containerDomNode.style.zIndex = "11";
    }
    _onMouseLeave(e) {
        const t = this._editor.getDomNode();
        (!t || !Lyi(t, e.x, e.y)) && this.hide();
    }
}, $qt.ID = "editor.contrib.modesGlyphHoverWidget", $qt = ie([
    C(1, pc),
    C(2, eo)
], $qt);

}
