import { Di, a_ } from "./Iwo.js";
import { Qtt, kyt } from "./dynamicViewOverlay.js";
import { Q9d, doe, hBd } from "./editorColorRegistry.js";
import { WMy } from "./lineNumbers.css";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { nne } from "./ze.js";
var qHo, zHo;
export { qHo, zHo };
var __wakaru_e$d_initialized = false;
export function e$d() {
if (__wakaru_e$d_initialized) return;
__wakaru_e$d_initialized = true;
"use strict";
E(), WMy(), Di(), kyt(), jc(), Qs(), Dl(), doe(), qHo = class vJc extends Qtt {
    constructor(e){
        super(), this._context = e, this._readConfig(), this._lastCursorModelPosition = new er(1, 1), this._renderResult = null, this._activeLineNumber = 1, this._context.addEventHandler(this);
    }
    _readConfig() {
        const e = this._context.configuration.options;
        this._lineHeight = e.get(68);
        const n = e.get(69);
        this._renderLineNumbers = n.renderType, this._renderCustomLineNumbers = n.renderFn, this._renderFinalNewline = e.get(100);
        const i = e.get(151);
        this._lineNumbersLeft = i.lineNumbersLeft, this._lineNumbersWidth = i.lineNumbersWidth;
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(e) {
        return this._readConfig(), !0;
    }
    onCursorStateChanged(e) {
        const n = e.selections[0].getPosition();
        this._lastCursorModelPosition = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(n);
        let i = !1;
        return this._activeLineNumber !== n.lineNumber && (this._activeLineNumber = n.lineNumber, i = !0), (this._renderLineNumbers === 2 || this._renderLineNumbers === 3) && (i = !0), i;
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
        return e.scrollTopChanged || e.scrollHeightChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    onDecorationsChanged(e) {
        return e.affectsLineNumber;
    }
    _getLineRenderLineNumber(e) {
        const n = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new er(e, 1));
        if (n.column !== 1) return "";
        const i = n.lineNumber;
        if (isNaN(i)) return "";
        if (this._renderCustomLineNumbers) return this._renderCustomLineNumbers(i) ?? "";
        if (this._renderLineNumbers === 2) {
            const r = Math.abs(this._lastCursorModelPosition.lineNumber - i);
            return r === 0 ? '<span class="relative-current-line-number">' + i + "</span>" : String(r);
        }
        if (this._renderLineNumbers === 3) {
            if (this._lastCursorModelPosition.lineNumber === i || i % 10 === 0) return String(i);
            const r = this._context.viewModel.getLineCount();
            return i === r ? String(i) : "";
        }
        return isNaN(i) ? "" : String(i);
    }
    prepareRender(e) {
        if (this._renderLineNumbers === 0) {
            this._renderResult = null;
            return;
        }
        const n = a_ ? this._lineHeight % 2 === 0 ? " lh-even" : " lh-odd" : "", i = e.visibleRange.startLineNumber, r = e.visibleRange.endLineNumber, s = this._context.viewModel.getDecorationsInViewport(e.visibleRange).filter((c)=>!!c.options.lineNumberClassName);
        s.sort((c, u)=>qt.compareRangesUsingEnds(c.range, u.range));
        let o = 0;
        const a = this._context.viewModel.getLineCount(), l = [];
        for(let c = i; c <= r; c++){
            const u = c - i;
            let d = this._getLineRenderLineNumber(c), h = "";
            for(; o < s.length && s[o].range.endLineNumber < c;)o++;
            for(let p = o; p < s.length; p++){
                const { range: g, options: f } = s[p];
                g.startLineNumber <= c && (h += " " + f.lineNumberClassName);
            }
            if (!d && !h) {
                l[u] = "";
                continue;
            }
            c === a && this._context.viewModel.getLineLength(c) === 0 && (this._renderFinalNewline === "off" && (d = ""), this._renderFinalNewline === "dimmed" && (h += " dimmed-line-number")), c === this._activeLineNumber && (h += " active-line-number"), l[u] = `<div class="${vJc.CLASS_NAME}${n}${h}" style="left:${this._lineNumbersLeft}px;width:${this._lineNumbersWidth}px;">${d ?? ""}</div>`;
        }
        this._renderResult = l;
    }
    _renderLineNumberFallback(e) {
        if (this._renderLineNumbers === 0) return "";
        let n = this._getLineRenderLineNumber(e);
        if (!n) return "";
        const i = a_ ? this._lineHeight % 2 === 0 ? " lh-even" : " lh-odd" : "";
        let r = e === this._activeLineNumber ? " active-line-number" : "";
        const s = this._context.viewModel.getLineCount();
        if (e === s && this._context.viewModel.getLineLength(e) === 0) {
            if (this._renderFinalNewline === "off") return "";
            this._renderFinalNewline === "dimmed" && (r += " dimmed-line-number");
        }
        return `<div class="${vJc.CLASS_NAME}${i}${r}" style="left:${this._lineNumbersLeft}px;width:${this._lineNumbersWidth}px;">${n}</div>`;
    }
    render(e, n) {
        if (!this._renderResult) return this._renderLineNumberFallback(n);
        const i = n - e;
        return i < 0 || i >= this._renderResult.length ? this._renderLineNumberFallback(n) : this._renderResult[i];
    }
}, qHo.CLASS_NAME = "line-numbers", zHo = qHo, nne((t, e)=>{
    const n = t.getColor(Q9d), i = t.getColor(hBd);
    i ? e.addRule(`.monaco-editor .line-numbers.dimmed-line-number { color: ${i}; }`) : n && e.addRule(`.monaco-editor .line-numbers.dimmed-line-number { color: ${n.transparent(.4)}; }`);
});

}
