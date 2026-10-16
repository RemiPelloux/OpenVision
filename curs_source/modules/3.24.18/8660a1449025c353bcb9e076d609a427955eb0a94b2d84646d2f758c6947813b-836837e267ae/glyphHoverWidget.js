import { Nt, Qe, st } from "./Iwo.js";
import { Hn, n0 } from "./dom_2.js";
import { uxk, yCg } from "./glyphHoverComputer.js";
import { IVd, pzo } from "./hoverOperation.js";
import { REr } from "./hoverUtils.js";
import { Iw, jTr } from "./hoverWidget.js";
import { Kp, Ph } from "./language.js";
import { AY, Coe } from "./markdownRenderer_2.js";
import { kc, qc } from "./opener.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AEr, Ii, fr } from "./ze.js";
var Tml, jRn;
export { Tml, jRn };
var __wakaru_dxk_initialized = false;
export function dxk() {
if (__wakaru_dxk_initialized) return;
__wakaru_dxk_initialized = true;
"use strict";
E(), Hn(), Qe(), Coe(), Kp(), IVd(), qc(), Iw(), uxk(), REr(), Tml = Ii, jRn = class extends st {
    constructor(t, e, n){
        super(), this._renderDisposeables = this._register(new Nt), this._editor = t, this._isVisible = !1, this._messages = [], this._hover = this._register(new jTr(!0)), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible), this._markdownRenderer = new AY({
            editor: this._editor
        }, e, n), this._hoverOperation = this._register(new pzo(this._editor, new yCg(this._editor))), this._register(this._hoverOperation.onResult((i)=>this._withResult(i))), this._register(this._editor.onDidChangeModelDecorations(()=>this._onModelDecorationsChanged())), this._register(this._editor.onDidChangeConfiguration((i)=>{
            i.hasChanged(52) && this._updateFont();
        })), this._register(n0(this._hover.containerDomNode, "mouseleave", (i)=>{
            this._onMouseLeave(i);
        })), this._editor.addOverlayWidget(this);
    }
    dispose() {
        this._hoverComputerOptions = void 0, this._editor.removeOverlayWidget(this), super.dispose();
    }
    getId() {
        return jRn.ID;
    }
    getDomNode() {
        return this._hover.containerDomNode;
    }
    getPosition() {
        return null;
    }
    _updateFont() {
        Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName("code")).forEach((e)=>this._editor.applyFontInfo(e));
    }
    _onModelDecorationsChanged() {
        this._isVisible && this._hoverComputerOptions && (this._hoverOperation.cancel(), this._hoverOperation.start(0, this._hoverComputerOptions));
    }
    showsOrWillShow(t) {
        const e = t.target;
        return e.type === 2 && e.detail.glyphMarginLane ? (this._startShowingAt(e.position.lineNumber, e.detail.glyphMarginLane), !0) : e.type === 3 ? (this._startShowingAt(e.position.lineNumber, "lineNo"), !0) : !1;
    }
    _startShowingAt(t, e) {
        this._hoverComputerOptions && this._hoverComputerOptions.lineNumber === t && this._hoverComputerOptions.laneOrLine === e || (this._hoverOperation.cancel(), this.hide(), this._hoverComputerOptions = {
            lineNumber: t,
            laneOrLine: e
        }, this._hoverOperation.start(0, this._hoverComputerOptions));
    }
    hide() {
        this._hoverComputerOptions = void 0, this._hoverOperation.cancel(), this._isVisible && (this._isVisible = !1, this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible));
    }
    _withResult(t) {
        this._messages = t.value, this._messages.length > 0 ? this._renderMessages(t.options.lineNumber, t.options.laneOrLine, this._messages) : this.hide();
    }
    _renderMessages(t, e, n) {
        this._renderDisposeables.clear();
        const i = document.createDocumentFragment();
        for (const r of n){
            const s = Tml("div.hover-row.markdown-hover"), o = fr(s, Tml("div.hover-contents")), a = this._renderDisposeables.add(this._markdownRenderer.render(r.value));
            o.appendChild(a.element), i.appendChild(s);
        }
        this._updateContents(i), this._showAt(t, e);
    }
    _updateContents(t) {
        this._hover.contentsDomNode.textContent = "", this._hover.contentsDomNode.appendChild(t), this._updateFont();
    }
    _showAt(t, e) {
        this._isVisible || (this._isVisible = !0, this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible));
        const n = this._editor.getLayoutInfo(), i = this._editor.getTopForLineNumber(t), r = this._editor.getScrollTop(), s = this._editor.getOption(68), o = this._hover.containerDomNode.clientHeight, a = i - r - (o - s) / 2, l = n.glyphMarginLeft + n.glyphMarginWidth + (e === "lineNo" ? n.lineNumbersWidth : 0);
        this._hover.containerDomNode.style.left = `${l}px`, this._hover.containerDomNode.style.top = `${Math.max(Math.round(a), 0)}px`, this._hover.containerDomNode.style.zIndex = "11";
    }
    _onMouseLeave(t) {
        const e = this._editor.getDomNode();
        (!e || !AEr(e, t.x, t.y)) && this.hide();
    }
}, jRn.ID = "editor.contrib.modesGlyphHoverWidget", jRn = Re([
    F(1, Ph),
    F(2, kc)
], jRn);

}
