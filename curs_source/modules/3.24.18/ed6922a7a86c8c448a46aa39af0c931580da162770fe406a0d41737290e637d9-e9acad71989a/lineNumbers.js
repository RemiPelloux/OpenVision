import { jn, vf } from "./HVr.js";
import { jze, n5e } from "./dynamicViewOverlay.js";
import { FOc, HV, wOc } from "./editorColorRegistry.js";
import { Xvg } from "./lineNumbers.css";
import { Yn, ya } from "./position.js";
import { kI } from "./qIc.js";
import { dt, qi } from "./range.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var Wes, Ges;
export { Ges, Wes };
var __wakaru_$9c_initialized = false;
export function $9c() {
if (__wakaru_$9c_initialized) return;
__wakaru_$9c_initialized = true;
"use strict";
x(), Xvg(), jn(), jze(), ya(), qi(), as(), HV(), Wes = class LIa extends n5e {
    constructor(t){
        super(), this._context = t, this._readConfig(), this._lastCursorModelPosition = new Yn(1, 1), this._renderResult = null, this._activeLineNumber = 1, this._context.addEventHandler(this);
    }
    _readConfig() {
        const t = this._context.configuration.options;
        this._lineHeight = t.get(68);
        const n = t.get(69);
        this._renderLineNumbers = n.renderType, this._renderCustomLineNumbers = n.renderFn, this._renderFinalNewline = t.get(100);
        const i = t.get(151);
        this._lineNumbersLeft = i.lineNumbersLeft, this._lineNumbersWidth = i.lineNumbersWidth;
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(t) {
        return this._readConfig(), !0;
    }
    onCursorStateChanged(t) {
        const n = t.selections[0].getPosition();
        this._lastCursorModelPosition = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(n);
        let i = !1;
        return this._activeLineNumber !== n.lineNumber && (this._activeLineNumber = n.lineNumber, i = !0), (this._renderLineNumbers === 2 || this._renderLineNumbers === 3) && (i = !0), i;
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
        return t.scrollTopChanged || t.scrollHeightChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    onDecorationsChanged(t) {
        return t.affectsLineNumber;
    }
    _getLineRenderLineNumber(t) {
        const n = this._context.viewModel.coordinatesConverter.convertViewPositionToModelPosition(new Yn(t, 1));
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
    prepareRender(t) {
        if (this._renderLineNumbers === 0) {
            this._renderResult = null;
            return;
        }
        const n = vf ? this._lineHeight % 2 === 0 ? " lh-even" : " lh-odd" : "", i = t.visibleRange.startLineNumber, r = t.visibleRange.endLineNumber, s = this._context.viewModel.getDecorationsInViewport(t.visibleRange).filter((l)=>!!l.options.lineNumberClassName);
        s.sort((l, u)=>dt.compareRangesUsingEnds(l.range, u.range));
        let o = 0;
        const a = this._context.viewModel.getLineCount(), c = [];
        for(let l = i; l <= r; l++){
            const u = l - i;
            let h = this._getLineRenderLineNumber(l), p = "";
            for(; o < s.length && s[o].range.endLineNumber < l;)o++;
            for(let g = o; g < s.length; g++){
                const { range: f, options: v } = s[g];
                f.startLineNumber <= l && (p += " " + v.lineNumberClassName);
            }
            if (!h && !p) {
                c[u] = "";
                continue;
            }
            l === a && this._context.viewModel.getLineLength(l) === 0 && (this._renderFinalNewline === "off" && (h = ""), this._renderFinalNewline === "dimmed" && (p += " dimmed-line-number")), l === this._activeLineNumber && (p += " active-line-number"), c[u] = `<div class="${LIa.CLASS_NAME}${n}${p}" style="left:${this._lineNumbersLeft}px;width:${this._lineNumbersWidth}px;">${h ?? ""}</div>`;
        }
        this._renderResult = c;
    }
    _renderLineNumberFallback(t) {
        if (this._renderLineNumbers === 0) return "";
        let n = this._getLineRenderLineNumber(t);
        if (!n) return "";
        const i = vf ? this._lineHeight % 2 === 0 ? " lh-even" : " lh-odd" : "";
        let r = t === this._activeLineNumber ? " active-line-number" : "";
        const s = this._context.viewModel.getLineCount();
        if (t === s && this._context.viewModel.getLineLength(t) === 0) {
            if (this._renderFinalNewline === "off") return "";
            this._renderFinalNewline === "dimmed" && (r += " dimmed-line-number");
        }
        return `<div class="${LIa.CLASS_NAME}${i}${r}" style="left:${this._lineNumbersLeft}px;width:${this._lineNumbersWidth}px;">${n}</div>`;
    }
    render(t, n) {
        if (!this._renderResult) return this._renderLineNumberFallback(n);
        const i = n - t;
        return i < 0 || i >= this._renderResult.length ? this._renderLineNumberFallback(n) : this._renderResult[i];
    }
}, Wes.CLASS_NAME = "line-numbers", Ges = Wes, kI((e, t)=>{
    const n = e.getColor(wOc), i = e.getColor(FOc);
    i ? t.addRule(`.monaco-editor .line-numbers.dimmed-line-number { color: ${i}; }`) : n && t.addRule(`.monaco-editor .line-numbers.dimmed-line-number { color: ${n.transparent(.4)}; }`);
});

}
