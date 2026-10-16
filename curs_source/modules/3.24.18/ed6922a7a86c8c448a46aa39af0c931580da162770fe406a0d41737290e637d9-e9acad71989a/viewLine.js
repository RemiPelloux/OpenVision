import { Q_, jn, vf } from "./HVr.js";
import { Gqe, i5, ile, n_ } from "./browser_2.js";
import { UBe, m1 } from "./editorOptions.js";
import { Tx } from "./fastDomNode.js";
import { Wze, gW } from "./lineDecorations.js";
import { Evg, Hpt, _es, cre, x_, xvg } from "./qIc.js";
import { mvg, qfn } from "./rangeUtil.js";
import { E_i, e5e, qOt } from "./renderingContext.js";
import { x0 } from "./theme.js";
import { x } from "./tslib.es6.js";
import { Gze, Wpt, fes } from "./viewLineRenderer.js";
var V5c, Gpt, bes, Vze, zfn, yes, j5c, Ses;
export { Gpt, Ses, V5c, Vze, bes, j5c, yes, zfn };
var __wakaru_kes_initialized = false;
export function kes() {
if (__wakaru_kes_initialized) return;
__wakaru_kes_initialized = true;
"use strict";
x(), n_(), Tx(), jn(), mvg(), qOt(), Wze(), Wpt(), x0(), m1(), V5c = (function() {
    return Q_ ? !0 : !(vf || i5 || ile);
})(), Gpt = !0, bes = class xkm {
    constructor(t, n){
        this._viewGpuContext = t, this._options = n, this._isMaybeInvalid = !0, this._renderedViewLine = null;
    }
    getDomNode() {
        return this._renderedViewLine && this._renderedViewLine.domNode ? this._renderedViewLine.domNode.domNode : null;
    }
    setDomNode(t) {
        if (this._renderedViewLine) this._renderedViewLine.domNode = x_(t);
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
    onOptionsChanged(t) {
        this._isMaybeInvalid = !0, this._options = t;
    }
    onSelectionChanged() {
        return cre(this._options.themeType) || this._options.renderWhitespace === "selection" ? (this._isMaybeInvalid = !0, !0) : !1;
    }
    renderLine(t, n, i, r, s) {
        if (this._options.useGpu && this._viewGpuContext?.canRender(this._options, r, t)) return this._renderedViewLine?.domNode?.domNode.remove(), this._renderedViewLine = null, !1;
        if (this._isMaybeInvalid === !1) return !1;
        this._isMaybeInvalid = !1;
        const o = r.getViewLineRenderingData(t), a = this._options, c = gW.filter(o.inlineDecorations, t, o.minColumn, o.maxColumn);
        let l = null;
        if (cre(a.themeType) || this._options.renderWhitespace === "selection") {
            const g = r.selections;
            for (const f of g){
                if (f.endLineNumber < t || f.startLineNumber > t) continue;
                const v = f.startLineNumber === t ? f.startColumn : o.minColumn, b = f.endLineNumber === t ? f.endColumn : o.maxColumn;
                v < b && (cre(a.themeType) && c.push(new gW(v, b, "inline-selected-text", 0)), this._options.renderWhitespace === "selection" && (l || (l = []), l.push(new fes(v - 1, b - 1))));
            }
        }
        const u = new Gze(a.useMonospaceOptimizations, a.canUseHalfwidthRightwardsArrow, o.content, o.continuesWithWrappedLine, o.isBasicASCII, o.containsRTL, o.minColumn - 1, o.tokens, c, o.tabSize, o.startVisibleColumn, a.spaceWidth, a.middotWidth, a.wsmiddotWidth, a.stopRenderingLineAfter, a.renderWhitespace, a.renderControlCharacters, a.fontLigatures !== UBe.OFF, l);
        if (this._renderedViewLine && this._renderedViewLine.input.equals(u)) return !1;
        s.appendString('<div style="top:'), s.appendString(String(n)), s.appendString("px;height:"), s.appendString(String(i)), s.appendString('px;" class="'), s.appendString(xkm.CLASS_NAME), s.appendString('">');
        const h = Hpt(u, s);
        s.appendString("</div>");
        let p = null;
        return Gpt && V5c && o.isBasicASCII && a.useMonospaceOptimizations && h.containsForeignElements === 0 && (p = new zfn(this._renderedViewLine ? this._renderedViewLine.domNode : null, u, h.characterMapping)), p || (p = Ses(this._renderedViewLine ? this._renderedViewLine.domNode : null, u, h.characterMapping, h.containsRTL, h.containsForeignElements)), this._renderedViewLine = p, !0;
    }
    layoutLine(t, n, i) {
        this._renderedViewLine && this._renderedViewLine.domNode && (this._renderedViewLine.domNode.setTop(n), this._renderedViewLine.domNode.setHeight(i));
    }
    getWidth(t) {
        return this._renderedViewLine ? this._renderedViewLine.getWidth(t) : 0;
    }
    getWidthIsFast() {
        return this._renderedViewLine ? this._renderedViewLine.getWidthIsFast() : !0;
    }
    needsMonospaceFontCheck() {
        return this._renderedViewLine ? this._renderedViewLine instanceof zfn : !1;
    }
    monospaceAssumptionsAreValid() {
        return this._renderedViewLine && this._renderedViewLine instanceof zfn ? this._renderedViewLine.monospaceAssumptionsAreValid() : Gpt;
    }
    onMonospaceAssumptionsInvalidated() {
        this._renderedViewLine && this._renderedViewLine instanceof zfn && (this._renderedViewLine = this._renderedViewLine.toSlowRenderedLine());
    }
    getVisibleRangesForRange(t, n, i, r) {
        if (!this._renderedViewLine) return null;
        n = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, n)), i = Math.min(this._renderedViewLine.input.lineContent.length + 1, Math.max(1, i));
        const s = this._renderedViewLine.input.stopRenderingLineAfter;
        if (s !== -1 && n > s + 1 && i > s + 1) return new E_i(!0, [
            new e5e(this.getWidth(r), 0)
        ]);
        s !== -1 && n > s + 1 && (n = s + 1), s !== -1 && i > s + 1 && (i = s + 1);
        const o = this._renderedViewLine.getVisibleRangesForRange(t, n, i, r);
        return o && o.length > 0 ? new E_i(!1, o) : null;
    }
    getColumnOfNodeOffset(t, n) {
        return this._renderedViewLine ? this._renderedViewLine.getColumnOfNodeOffset(t, n) : 1;
    }
}, bes.CLASS_NAME = "view-line", Vze = bes, zfn = class {
    constructor(e, t, n){
        this._cachedWidth = -1, this.domNode = e, this.input = t;
        const i = Math.floor(t.lineContent.length / 300);
        if (i > 0) {
            this._keyColumnPixelOffsetCache = new Float32Array(i);
            for(let r = 0; r < i; r++)this._keyColumnPixelOffsetCache[r] = -1;
        } else this._keyColumnPixelOffsetCache = null;
        this._characterMapping = n, this._charWidth = t.spaceWidth;
    }
    getWidth(e) {
        if (!this.domNode || this.input.lineContent.length < 300) {
            const t = this._characterMapping.getHorizontalOffset(this._characterMapping.length);
            return Math.round(this._charWidth * t);
        }
        return this._cachedWidth === -1 && (this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth, e?.markDidDomLayout()), this._cachedWidth;
    }
    getWidthIsFast() {
        return this.input.lineContent.length < 300 || this._cachedWidth !== -1;
    }
    monospaceAssumptionsAreValid() {
        if (!this.domNode) return Gpt;
        if (this.input.lineContent.length < 300) {
            const e = this.getWidth(null), t = this.domNode.domNode.firstChild.offsetWidth;
            Math.abs(e - t) >= 2 && (console.warn("monospace assumptions have been violated, therefore disabling monospace optimizations!"), Gpt = !1);
        }
        return Gpt;
    }
    toSlowRenderedLine() {
        return Ses(this.domNode, this.input, this._characterMapping, !1, 0);
    }
    getVisibleRangesForRange(e, t, n, i) {
        const r = this._getColumnPixelOffset(e, t, i), s = this._getColumnPixelOffset(e, n, i);
        return [
            new e5e(r, s - r)
        ];
    }
    _getColumnPixelOffset(e, t, n) {
        if (t <= 300) {
            const c = this._characterMapping.getHorizontalOffset(t);
            return this._charWidth * c;
        }
        const i = Math.floor((t - 1) / 300) - 1, r = (i + 1) * 300 + 1;
        let s = -1;
        if (this._keyColumnPixelOffsetCache && (s = this._keyColumnPixelOffsetCache[i], s === -1 && (s = this._actualReadPixelOffset(e, r, n), this._keyColumnPixelOffsetCache[i] = s)), s === -1) {
            const c = this._characterMapping.getHorizontalOffset(t);
            return this._charWidth * c;
        }
        const o = this._characterMapping.getHorizontalOffset(r), a = this._characterMapping.getHorizontalOffset(t);
        return s + this._charWidth * (a - o);
    }
    _getReadingTarget(e) {
        return e.domNode.firstChild;
    }
    _actualReadPixelOffset(e, t, n) {
        if (!this.domNode) return -1;
        const i = this._characterMapping.getDomPosition(t), r = qfn.readHorizontalRanges(this._getReadingTarget(this.domNode), i.partIndex, i.charIndex, i.partIndex, i.charIndex, n);
        return !r || r.length === 0 ? -1 : r[0].left;
    }
    getColumnOfNodeOffset(e, t) {
        return _es(this._characterMapping, e, t);
    }
}, yes = class {
    constructor(e, t, n, i, r){
        if (this.domNode = e, this.input = t, this._characterMapping = n, this._isWhitespaceOnly = /^\s*$/.test(t.lineContent), this._containsForeignElements = r, this._cachedWidth = -1, this._pixelOffsetCache = null, !i || this._characterMapping.length === 0) {
            this._pixelOffsetCache = new Float32Array(Math.max(2, this._characterMapping.length + 1));
            for(let s = 0, o = this._characterMapping.length; s <= o; s++)this._pixelOffsetCache[s] = -1;
        }
    }
    _getReadingTarget(e) {
        return e.domNode.firstChild;
    }
    getWidth(e) {
        return this.domNode ? (this._cachedWidth === -1 && (this._cachedWidth = this._getReadingTarget(this.domNode).offsetWidth, e?.markDidDomLayout()), this._cachedWidth) : 0;
    }
    getWidthIsFast() {
        return this._cachedWidth !== -1;
    }
    getVisibleRangesForRange(e, t, n, i) {
        if (!this.domNode) return null;
        if (this._pixelOffsetCache !== null) {
            const r = this._readPixelOffset(this.domNode, e, t, i);
            if (r === -1) return null;
            const s = this._readPixelOffset(this.domNode, e, n, i);
            return s === -1 ? null : [
                new e5e(r, s - r)
            ];
        }
        return this._readVisibleRangesForRange(this.domNode, e, t, n, i);
    }
    _readVisibleRangesForRange(e, t, n, i, r) {
        if (n === i) {
            const s = this._readPixelOffset(e, t, n, r);
            return s === -1 ? null : [
                new e5e(s, 0)
            ];
        } else return this._readRawVisibleRangesForRange(e, n, i, r);
    }
    _readPixelOffset(e, t, n, i) {
        if (this._characterMapping.length === 0) {
            if (this._containsForeignElements === 0 || this._containsForeignElements === 2) return 0;
            if (this._containsForeignElements === 1) return this.getWidth(i);
            const r = this._getReadingTarget(e);
            return r.firstChild ? (i.markDidDomLayout(), r.firstChild.offsetWidth) : 0;
        }
        if (this._pixelOffsetCache !== null) {
            const r = this._pixelOffsetCache[n];
            if (r !== -1) return r;
            const s = this._actualReadPixelOffset(e, t, n, i);
            return this._pixelOffsetCache[n] = s, s;
        }
        return this._actualReadPixelOffset(e, t, n, i);
    }
    _actualReadPixelOffset(e, t, n, i) {
        if (this._characterMapping.length === 0) {
            const a = qfn.readHorizontalRanges(this._getReadingTarget(e), 0, 0, 0, 0, i);
            return !a || a.length === 0 ? -1 : a[0].left;
        }
        if (n === this._characterMapping.length && this._isWhitespaceOnly && this._containsForeignElements === 0) return this.getWidth(i);
        const r = this._characterMapping.getDomPosition(n), s = qfn.readHorizontalRanges(this._getReadingTarget(e), r.partIndex, r.charIndex, r.partIndex, r.charIndex, i);
        if (!s || s.length === 0) return -1;
        const o = s[0].left;
        if (this.input.isBasicASCII) {
            const a = this._characterMapping.getHorizontalOffset(n), c = Math.round(this.input.spaceWidth * a);
            if (Math.abs(c - o) <= 1) return c;
        }
        return o;
    }
    _readRawVisibleRangesForRange(e, t, n, i) {
        if (t === 1 && n === this._characterMapping.length) return [
            new e5e(0, this.getWidth(i))
        ];
        const r = this._characterMapping.getDomPosition(t), s = this._characterMapping.getDomPosition(n);
        return qfn.readHorizontalRanges(this._getReadingTarget(e), r.partIndex, r.charIndex, s.partIndex, s.charIndex, i);
    }
    getColumnOfNodeOffset(e, t) {
        return _es(this._characterMapping, e, t);
    }
}, j5c = class extends yes {
    _readVisibleRangesForRange(e, t, n, i, r) {
        const s = super._readVisibleRangesForRange(e, t, n, i, r);
        if (!s || s.length === 0 || n === i || n === 1 && i === this._characterMapping.length) return s;
        if (!this.input.containsRTL) {
            const o = this._readPixelOffset(e, t, i, r);
            if (o !== -1) {
                const a = s[s.length - 1];
                a.left < o && (a.width = o - a.left);
            }
        }
        return s;
    }
}, Ses = (function() {
    return Gqe ? Evg : xvg;
})();

}
