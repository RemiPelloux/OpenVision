import { Di, I0, a_ } from "./Iwo.js";
import { A_, Zke, _7, bbt } from "./browser_2.js";
import { Ltt, s2 } from "./editorOptions.js";
import { i6 } from "./fastDomNode.js";
import { RQ, byt } from "./lineDecorations.js";
import { aMy, ysi } from "./rangeUtil.js";
import { J0r, Ktt, Tfn } from "./renderingContext.js";
import { LI } from "./theme.js";
import { E } from "./tslib.es6.js";
import { bHo, dBt, yyt } from "./viewLineRenderer.js";
import { $Ae, Ew, SHo, bMy, uBt, yMy } from "./ze.js";
var rjd, hBt, kHo, Syt, Ssi, wHo, sjd, CHo;
export { CHo, Ssi, Syt, hBt, kHo, rjd, sjd, wHo };
var __wakaru_THo_initialized = false;
export function THo() {
if (__wakaru_THo_initialized) return;
__wakaru_THo_initialized = true;
"use strict";
E(), A_(), i6(), Di(), aMy(), Tfn(), byt(), dBt(), LI(), s2(), rjd = (function() {
    return I0 ? !0 : !(a_ || _7 || Zke);
})(), hBt = !0, kHo = class QAb {
    constructor(e, n){
        this._viewGpuContext = e, this._options = n, this._isMaybeInvalid = !0, this._renderedViewLine = null;
    }
    getDomNode() {
        return this._renderedViewLine && this._renderedViewLine.domNode ? this._renderedViewLine.domNode.domNode : null;
    }
    setDomNode(e) {
        if (this._renderedViewLine) this._renderedViewLine.domNode = Ew(e);
        else throw new Error("I have no rendered view line to set the dom node to...");
    }
    onContentChanged() {
        this._isMaybeInvalid = !0;
    }
    onTokensChanged() {
        this._isMaybeInvalid = !0;
    }
    onDecorationsChanged() {
        this._isMaybeInvalid = !0;
    }
    onOptionsChanged(e) {
        this._isMaybeInvalid = !0, this._options = e;
    }
    onSelectionChanged() {
        return $Ae(this._options.themeType) || this._options.renderWhitespace === "selection" ? (this._isMaybeInvalid = !0, !0) : !1;
    }
    renderLine(e, n, i, r, s) {
        if (this._options.useGpu && this._viewGpuContext?.canRender(this._options, r, e)) return this._renderedViewLine?.domNode?.domNode.remove(), this._renderedViewLine = null, !1;
        if (this._isMaybeInvalid === !1) return !1;
        this._isMaybeInvalid = !1;
        const o = r.getViewLineRenderingData(e), a = this._options, l = RQ.filter(o.inlineDecorations, e, o.minColumn, o.maxColumn);
        let c = null;
        if ($Ae(a.themeType) || this._options.renderWhitespace === "selection") {
            const p = r.selections;
            for (const g of p){
                if (g.endLineNumber < e || g.startLineNumber > e) continue;
                const f = g.startLineNumber === e ? g.startColumn : o.minColumn, _ = g.endLineNumber === e ? g.endColumn : o.maxColumn;
                f < _ && ($Ae(a.themeType) && l.push(new RQ(f, _, "inline-selected-text", 0)), this._options.renderWhitespace === "selection" && (c || (c = []), c.push(new bHo(f - 1, _ - 1))));
            }
        }
        const u = new yyt(a.useMonospaceOptimizations, a.canUseHalfwidthRightwardsArrow, o.content, o.continuesWithWrappedLine, o.isBasicASCII, o.containsRTL, o.minColumn - 1, o.tokens, l, o.tabSize, o.startVisibleColumn, a.spaceWidth, a.middotWidth, a.wsmiddotWidth, a.stopRenderingLineAfter, a.renderWhitespace, a.renderControlCharacters, a.fontLigatures !== Ltt.OFF, c);
        if (this._renderedViewLine && this._renderedViewLine.input.equals(u)) return !1;
        s.appendString('<div style="top:'), s.appendString(String(n)), s.appendString("px;height:"), s.appendString(String(i)), s.appendString('px;" class="'), s.appendString(QAb.CLASS_NAME), s.appendString('">');
        const d = uBt(u, s);
        s.appendString("</div>");
        let h = null;
        return hBt && rjd && o.isBasicASCII && a.useMonospaceOptimizations && d.containsForeignElements === 0 && (h = new Ssi(this._renderedViewLine ? this._renderedViewLine.domNode : null, u, d.characterMapping)), h || (h = CHo(this._renderedViewLine ? this._renderedViewLine.domNode : null, u, d.characterMapping, d.containsRTL, d.containsForeignElements)), this._renderedViewLine = h, !0;
    }
    layoutLine(e, n, i) {
        this._renderedViewLine && this._renderedViewLine.domNode && (this._renderedViewLine.domNode.setTop(n), this._renderedViewLine.domNode.setHeight(i));
    }
    getWidth(e) {
        return this._renderedViewLine ? this._renderedViewLine.getWidth(e) : 0;
    }
    getWidthIsFast() {
        return this._renderedViewLine ? this._renderedViewLine.getWidthIsFast() : !0;
    }
    needsMonospaceFontCheck() {
        return this._renderedViewLine ? this._renderedViewLine instanceof Ssi : !1;
    }
    monospaceAssumptionsAreValid() {
        return this._renderedViewLine && this._renderedViewLine instanceof Ssi ? this._renderedViewLine.monospaceAssumptionsAreValid() : hBt;
    }
    onMonospaceAssumptionsInvalidated() {
        this._renderedViewLine && this._renderedViewLine instanceof Ssi && (this._renderedViewLine = this._renderedViewLine.toSlowRenderedLine());
    }
    getVisibleRangesForRange(e, n, i, r) {
        if (!this._renderedViewLine) return null;
        n = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, n)), i = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, i));
        const s = this._renderedViewLine.input.stopRenderingLineAfter;
        if (s !== -1 && n > s + 1 && i > s + 1) return new J0r(!0, [
            new Ktt(this.getWidth(r), 0)
        ]);
        s !== -1 && n > s + 1 && (n = s + 1), s !== -1 && i > s + 1 && (i = s + 1);
        const o = this._renderedViewLine.getVisibleRangesForRange(e, n, i, r);
        return o && o.length > 0 ? new J0r(!1, o) : null;
    }
    getColumnOfNodeOffset(e, n) {
        return this._renderedViewLine ? this._renderedViewLine.getColumnOfNodeOffset(e, n) : 1;
    }
}, kHo.CLASS_NAME = "view-line", Syt = kHo, Ssi = class {
    constructor(t, e, n){
        this._cachedWidth = -1, this.domNode = t, this.input = e;
        const i = Math.floor(e.lineContent.length / 300);
        if (i > 0) {
            this._keyColumnPixelOffsetCache = new Float32Array(i);
            for(let r = 0; r < i; r++)this._keyColumnPixelOffsetCache[r] = -1;
        } else this._keyColumnPixelOffsetCache = null;
        this._characterMapping = n, this._charWidth = e.spaceWidth;
    }
    getWidth(t) {
        if (!this.domNode || this.input.lineContent.length < 300) {
            const e = this._characterMapping.getHorizontalOffset(this._characterMapping.length);
            return Math.round(this._charWidth * e);
        }
        return this._cachedWidth === -1 && (this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth, t?.markDidDomLayout()), this._cachedWidth;
    }
    getWidthIsFast() {
        return this.input.lineContent.length < 300 || this._cachedWidth !== -1;
    }
    monospaceAssumptionsAreValid() {
        if (!this.domNode) return hBt;
        if (this.input.lineContent.length < 300) {
            const t = this.getWidth(null), e = this.domNode.domNode.firstChild.offsetWidth;
            Math.abs(t - e) >= 2 && (console.warn("monospace assumptions have been violated, therefore disabling monospace optimizations!"), hBt = !1);
        }
        return hBt;
    }
    toSlowRenderedLine() {
        return CHo(this.domNode, this.input, this._characterMapping, !1, 0);
    }
    getVisibleRangesForRange(t, e, n, i) {
        const r = this._getColumnPixelOffset(t, e, i), s = this._getColumnPixelOffset(t, n, i);
        return [
            new Ktt(r, s - r)
        ];
    }
    _getColumnPixelOffset(t, e, n) {
        if (e <= 300) {
            const l = this._characterMapping.getHorizontalOffset(e);
            return this._charWidth * l;
        }
        const i = Math.floor((e - 1) / 300) - 1, r = (i + 1) * 300 + 1;
        let s = -1;
        if (this._keyColumnPixelOffsetCache && (s = this._keyColumnPixelOffsetCache[i], s === -1 && (s = this._actualReadPixelOffset(t, r, n), this._keyColumnPixelOffsetCache[i] = s)), s === -1) {
            const l = this._characterMapping.getHorizontalOffset(e);
            return this._charWidth * l;
        }
        const o = this._characterMapping.getHorizontalOffset(r), a = this._characterMapping.getHorizontalOffset(e);
        return s + this._charWidth * (a - o);
    }
    _getReadingTarget(t) {
        return t.domNode.firstChild;
    }
    _actualReadPixelOffset(t, e, n) {
        if (!this.domNode) return -1;
        const i = this._characterMapping.getDomPosition(e), r = ysi.readHorizontalRanges(this._getReadingTarget(this.domNode), i.partIndex, i.charIndex, i.partIndex, i.charIndex, n);
        return !r || r.length === 0 ? -1 : r[0].left;
    }
    getColumnOfNodeOffset(t, e) {
        return SHo(this._characterMapping, t, e);
    }
}, wHo = class {
    constructor(t, e, n, i, r){
        if (this.domNode = t, this.input = e, this._characterMapping = n, this._isWhitespaceOnly = /^\s*$/.test(e.lineContent), this._containsForeignElements = r, this._cachedWidth = -1, this._pixelOffsetCache = null, !i || this._characterMapping.length === 0) {
            this._pixelOffsetCache = new Float32Array(Math.max(2, this._characterMapping.length + 1));
            for(let s = 0, o = this._characterMapping.length; s <= o; s++)this._pixelOffsetCache[s] = -1;
        }
    }
    _getReadingTarget(t) {
        return t.domNode.firstChild;
    }
    getWidth(t) {
        return this.domNode ? (this._cachedWidth === -1 && (this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth, t?.markDidDomLayout()), this._cachedWidth) : 0;
    }
    getWidthIsFast() {
        return this._cachedWidth !== -1;
    }
    getVisibleRangesForRange(t, e, n, i) {
        if (!this.domNode) return null;
        if (this._pixelOffsetCache !== null) {
            const r = this._readPixelOffset(this.domNode, t, e, i);
            if (r === -1) return null;
            const s = this._readPixelOffset(this.domNode, t, n, i);
            return s === -1 ? null : [
                new Ktt(r, s - r)
            ];
        }
        return this._readVisibleRangesForRange(this.domNode, t, e, n, i);
    }
    _readVisibleRangesForRange(t, e, n, i, r) {
        if (n === i) {
            const s = this._readPixelOffset(t, e, n, r);
            return s === -1 ? null : [
                new Ktt(s, 0)
            ];
        } else return this._readRawVisibleRangesForRange(t, n, i, r);
    }
    _readPixelOffset(t, e, n, i) {
        if (this._characterMapping.length === 0) {
            if (this._containsForeignElements === 0 || this._containsForeignElements === 2) return 0;
            if (this._containsForeignElements === 1) return this.getWidth(i);
            const r = this._getReadingTarget(t);
            return r.firstChild ? (i.markDidDomLayout(), r.firstChild.offsetWidth) : 0;
        }
        if (this._pixelOffsetCache !== null) {
            const r = this._pixelOffsetCache[n];
            if (r !== -1) return r;
            const s = this._actualReadPixelOffset(t, e, n, i);
            return this._pixelOffsetCache[n] = s, s;
        }
        return this._actualReadPixelOffset(t, e, n, i);
    }
    _actualReadPixelOffset(t, e, n, i) {
        if (this._characterMapping.length === 0) {
            const a = ysi.readHorizontalRanges(this._getReadingTarget(t), 0, 0, 0, 0, i);
            return !a || a.length === 0 ? -1 : a[0].left;
        }
        if (n === this._characterMapping.length && this._isWhitespaceOnly && this._containsForeignElements === 0) return this.getWidth(i);
        const r = this._characterMapping.getDomPosition(n), s = ysi.readHorizontalRanges(this._getReadingTarget(t), r.partIndex, r.charIndex, r.partIndex, r.charIndex, i);
        if (!s || s.length === 0) return -1;
        const o = s[0].left;
        if (this.input.isBasicASCII) {
            const a = this._characterMapping.getHorizontalOffset(n), l = Math.round(this.input.spaceWidth * a);
            if (Math.abs(l - o) <= 1) return l;
        }
        return o;
    }
    _readRawVisibleRangesForRange(t, e, n, i) {
        if (e === 1 && n === this._characterMapping.length) return [
            new Ktt(0, this.getWidth(i))
        ];
        const r = this._characterMapping.getDomPosition(e), s = this._characterMapping.getDomPosition(n);
        return ysi.readHorizontalRanges(this._getReadingTarget(t), r.partIndex, r.charIndex, s.partIndex, s.charIndex, i);
    }
    getColumnOfNodeOffset(t, e) {
        return SHo(this._characterMapping, t, e);
    }
}, sjd = class extends wHo {
    _readVisibleRangesForRange(t, e, n, i, r) {
        const s = super._readVisibleRangesForRange(t, e, n, i, r);
        if (!s || s.length === 0 || n === i || n === 1 && i === this._characterMapping.length) return s;
        if (!this.input.containsRTL) {
            const o = this._readPixelOffset(t, e, i, r);
            if (o !== -1) {
                const a = s[s.length - 1];
                a.left < o && (a.width = o - a.left);
            }
        }
        return s;
    }
}, CHo = (function() {
    return bbt ? bMy : yMy;
})();

}
