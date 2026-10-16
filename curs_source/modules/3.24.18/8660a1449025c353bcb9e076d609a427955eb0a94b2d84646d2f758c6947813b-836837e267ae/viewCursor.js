import { Fa, SXu } from "./Iwo.js";
import { she } from "./domFontInfo.js";
import { Hn, ws } from "./dom_2.js";
import { s2, the } from "./editorOptions.js";
import { i6 } from "./fastDomNode.js";
import { VHo, gBt } from "./mouseCursor.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
import { Ew, Okr, oB } from "./ze.js";
var uWo, Dfn, dWo;
export { Dfn, dWo, uWo };
var __wakaru_vDy_initialized = false;
export function vDy() {
if (__wakaru_vDy_initialized) return;
__wakaru_vDy_initialized = true;
"use strict";
E(), Hn(), i6(), VHo(), Fa(), s2(), jc(), Qs(), she(), uWo = class {
    constructor(t, e, n, i, r, s, o){
        this.top = t, this.left = e, this.paddingLeft = n, this.width = i, this.height = r, this.textContent = s, this.textContentClassName = o;
    }
}, Dfn = ((t)=>(t[t.Single = 0] = "Single", t[t.MultiPrimary = 1] = "MultiPrimary", t[t.MultiSecondary = 2] = "MultiSecondary", t))(Dfn || {}), dWo = class {
    constructor(t, e){
        this._context = t;
        const n = this._context.configuration.options, i = n.get(52);
        this._cursorStyle = n.get(147), this._lineHeight = n.get(68), this._typicalHalfwidthCharacterWidth = i.typicalHalfwidthCharacterWidth, this._lineCursorWidth = Math.min(n.get(31), this._typicalHalfwidthCharacterWidth), this._isVisible = !0, this._domNode = Ew(document.createElement("div")), this._domNode.setClassName(`cursor ${gBt}`), this._domNode.setHeight(this._lineHeight), this._domNode.setTop(0), this._domNode.setLeft(0), oB(this._domNode, i), this._domNode.setDisplay("none"), this._position = new er(1, 1), this._pluralityClass = "", this.setPlurality(e), this._lastRenderedContent = "", this._renderData = null;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return this._position;
    }
    setPlurality(t) {
        switch(t){
            default:
            case 0:
                this._pluralityClass = "";
                break;
            case 1:
                this._pluralityClass = "cursor-primary";
                break;
            case 2:
                this._pluralityClass = "cursor-secondary";
                break;
        }
    }
    show() {
        this._isVisible || (this._domNode.setVisibility("inherit"), this._isVisible = !0);
    }
    hide() {
        this._isVisible && (this._domNode.setVisibility("hidden"), this._isVisible = !1);
    }
    onConfigurationChanged(t) {
        const e = this._context.configuration.options, n = e.get(52);
        return this._cursorStyle = e.get(147), this._lineHeight = e.get(68), this._typicalHalfwidthCharacterWidth = n.typicalHalfwidthCharacterWidth, this._lineCursorWidth = Math.min(e.get(31), this._typicalHalfwidthCharacterWidth), oB(this._domNode, n), !0;
    }
    onCursorPositionChanged(t, e) {
        return e ? this._domNode.domNode.style.transitionProperty = "none" : this._domNode.domNode.style.transitionProperty = "", this._position = t, !0;
    }
    _getGraphemeAwarePosition() {
        const { lineNumber: t, column: e } = this._position, n = this._context.viewModel.getLineContent(t), [i, r] = SXu(n, e - 1);
        return [
            new er(t, i + 1),
            n.substring(i, r)
        ];
    }
    _prepareRender(t) {
        let e = "", n = "";
        const [i, r] = this._getGraphemeAwarePosition();
        if (this._cursorStyle === the.Line || this._cursorStyle === the.LineThin) {
            const d = t.visibleRangeForPosition(i);
            if (!d || d.outsideRenderedLine) return null;
            const h = ws(this._domNode.domNode);
            let p;
            this._cursorStyle === the.Line ? (p = Okr(h, this._lineCursorWidth > 0 ? this._lineCursorWidth : 2), p > 2 && (e = r, n = this._getTokenClassName(i))) : p = Okr(h, 1);
            let g = d.left, f = 0;
            p >= 2 && g >= 1 && (f = 1, g -= f);
            const _ = t.getVerticalOffsetForLineNumber(i.lineNumber) - t.bigNumbersDelta;
            return new uWo(_, g, f, p, this._lineHeight, e, n);
        }
        const s = t.linesVisibleRangesForRange(new qt(i.lineNumber, i.column, i.lineNumber, i.column + r.length), !1);
        if (!s || s.length === 0) return null;
        const o = s[0];
        if (o.outsideRenderedLine || o.ranges.length === 0) return null;
        const a = o.ranges[0], l = r === "	" ? this._typicalHalfwidthCharacterWidth : a.width < 1 ? this._typicalHalfwidthCharacterWidth : a.width;
        this._cursorStyle === the.Block && (e = r, n = this._getTokenClassName(i));
        let c = t.getVerticalOffsetForLineNumber(i.lineNumber) - t.bigNumbersDelta, u = this._lineHeight;
        return (this._cursorStyle === the.Underline || this._cursorStyle === the.UnderlineThin) && (c += this._lineHeight - 2, u = 2), new uWo(c, a.left, 0, l, u, e, n);
    }
    _getTokenClassName(t) {
        const e = this._context.viewModel.getViewLineData(t.lineNumber), n = e.tokens.findTokenIndexAtOffset(t.column - 1);
        return e.tokens.getClassName(n);
    }
    prepareRender(t) {
        this._renderData = this._prepareRender(t);
    }
    render(t) {
        return this._renderData ? (this._lastRenderedContent !== this._renderData.textContent && (this._lastRenderedContent = this._renderData.textContent, this._domNode.domNode.textContent = this._lastRenderedContent), this._domNode.setClassName(`cursor ${this._pluralityClass} ${gBt} ${this._renderData.textContentClassName}`), this._domNode.setDisplay("block"), this._domNode.setTop(this._renderData.top), this._domNode.setLeft(this._renderData.left), this._domNode.setPaddingLeft(this._renderData.paddingLeft), this._domNode.setWidth(this._renderData.width), this._domNode.setLineHeight(this._renderData.height), this._domNode.setHeight(this._renderData.height), {
            domNode: this._domNode.domNode,
            position: this._position,
            contentLeft: this._renderData.left,
            height: this._renderData.height,
            width: 2
        }) : (this._domNode.setDisplay("none"), null);
    }
};

}
