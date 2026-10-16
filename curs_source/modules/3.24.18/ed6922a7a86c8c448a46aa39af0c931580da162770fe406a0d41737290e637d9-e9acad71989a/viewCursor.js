import { Ps, jxc } from "./HVr.js";
import { WK } from "./domFontInfo.js";
import { en, xi } from "./dom_2.js";
import { m1, t6 } from "./editorOptions.js";
import { Tx } from "./fastDomNode.js";
import { Rwe, tFt } from "./mouseCursor.js";
import { Yn, ya } from "./position.js";
import { Lgi, c2, x_ } from "./qIc.js";
import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var sts, iFt, ots;
export { iFt, ots, sts };
var __wakaru_C_g_initialized = false;
export function C_g() {
if (__wakaru_C_g_initialized) return;
__wakaru_C_g_initialized = true;
"use strict";
x(), en(), Tx(), tFt(), Ps(), m1(), ya(), qi(), WK(), sts = class {
    constructor(e, t, n, i, r, s, o){
        this.top = e, this.left = t, this.paddingLeft = n, this.width = i, this.height = r, this.textContent = s, this.textContentClassName = o;
    }
}, iFt = ((e)=>(e[e.Single = 0] = "Single", e[e.MultiPrimary = 1] = "MultiPrimary", e[e.MultiSecondary = 2] = "MultiSecondary", e))(iFt || {}), ots = class {
    constructor(e, t){
        this._context = e;
        const n = this._context.configuration.options, i = n.get(52);
        this._cursorStyle = n.get(147), this._lineHeight = n.get(68), this._typicalHalfwidthCharacterWidth = i.typicalHalfwidthCharacterWidth, this._lineCursorWidth = Math.min(n.get(31), this._typicalHalfwidthCharacterWidth), this._isVisible = !0, this._domNode = x_(document.createElement("div")), this._domNode.setClassName(`cursor ${Rwe}`), this._domNode.setHeight(this._lineHeight), this._domNode.setTop(0), this._domNode.setLeft(0), c2(this._domNode, i), this._domNode.setDisplay("none"), this._position = new Yn(1, 1), this._pluralityClass = "", this.setPlurality(t), this._lastRenderedContent = "", this._renderData = null;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return this._position;
    }
    setPlurality(e) {
        switch(e){
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
    onConfigurationChanged(e) {
        const t = this._context.configuration.options, n = t.get(52);
        return this._cursorStyle = t.get(147), this._lineHeight = t.get(68), this._typicalHalfwidthCharacterWidth = n.typicalHalfwidthCharacterWidth, this._lineCursorWidth = Math.min(t.get(31), this._typicalHalfwidthCharacterWidth), c2(this._domNode, n), !0;
    }
    onCursorPositionChanged(e, t) {
        return t ? this._domNode.domNode.style.transitionProperty = "none" : this._domNode.domNode.style.transitionProperty = "", this._position = e, !0;
    }
    _getGraphemeAwarePosition() {
        const { lineNumber: e, column: t } = this._position, n = this._context.viewModel.getLineContent(e), [i, r] = jxc(n, t - 1);
        return [
            new Yn(e, i + 1),
            n.substring(i, r)
        ];
    }
    _prepareRender(e) {
        let t = "", n = "";
        const [i, r] = this._getGraphemeAwarePosition();
        if (this._cursorStyle === t6.Line || this._cursorStyle === t6.LineThin) {
            const h = e.visibleRangeForPosition(i);
            if (!h || h.outsideRenderedLine) return null;
            const p = xi(this._domNode.domNode);
            let g;
            this._cursorStyle === t6.Line ? (g = Lgi(p, this._lineCursorWidth > 0 ? this._lineCursorWidth : 2), g > 2 && (t = r, n = this._getTokenClassName(i))) : g = Lgi(p, 1);
            let f = h.left, v = 0;
            g >= 2 && f >= 1 && (v = 1, f -= v);
            const b = e.getVerticalOffsetForLineNumber(i.lineNumber) - e.bigNumbersDelta;
            return new sts(b, f, v, g, this._lineHeight, t, n);
        }
        const s = e.linesVisibleRangesForRange(new dt(i.lineNumber, i.column, i.lineNumber, i.column + r.length), !1);
        if (!s || s.length === 0) return null;
        const o = s[0];
        if (o.outsideRenderedLine || o.ranges.length === 0) return null;
        const a = o.ranges[0], c = r === "	" ? this._typicalHalfwidthCharacterWidth : a.width < 1 ? this._typicalHalfwidthCharacterWidth : a.width;
        this._cursorStyle === t6.Block && (t = r, n = this._getTokenClassName(i));
        let l = e.getVerticalOffsetForLineNumber(i.lineNumber) - e.bigNumbersDelta, u = this._lineHeight;
        return (this._cursorStyle === t6.Underline || this._cursorStyle === t6.UnderlineThin) && (l += this._lineHeight - 2, u = 2), new sts(l, a.left, 0, c, u, t, n);
    }
    _getTokenClassName(e) {
        const t = this._context.viewModel.getViewLineData(e.lineNumber), n = t.tokens.findTokenIndexAtOffset(e.column - 1);
        return t.tokens.getClassName(n);
    }
    prepareRender(e) {
        this._renderData = this._prepareRender(e);
    }
    render(e) {
        return this._renderData ? (this._lastRenderedContent !== this._renderData.textContent && (this._lastRenderedContent = this._renderData.textContent, this._domNode.domNode.textContent = this._lastRenderedContent), this._domNode.setClassName(`cursor ${this._pluralityClass} ${Rwe} ${this._renderData.textContentClassName}`), this._domNode.setDisplay("block"), this._domNode.setTop(this._renderData.top), this._domNode.setLeft(this._renderData.left), this._domNode.setPaddingLeft(this._renderData.paddingLeft), this._domNode.setWidth(this._renderData.width), this._domNode.setLineHeight(this._renderData.height), this._domNode.setHeight(this._renderData.height), {
            domNode: this._domNode.domNode,
            position: this._position,
            contentLeft: this._renderData.left,
            height: this._renderData.height,
            width: 2
        }) : (this._domNode.setDisplay("none"), null);
    }
};

}
