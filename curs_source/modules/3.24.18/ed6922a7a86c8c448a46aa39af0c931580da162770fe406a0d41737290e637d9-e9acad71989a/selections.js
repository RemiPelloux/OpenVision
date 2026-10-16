import { tc } from "./colorRegistry.js";
import { jze, n5e } from "./dynamicViewOverlay.js";
import { ALc } from "./editorColors.js";
import { S_g, j_i, kI } from "./qIc.js";
import { b_g } from "./selections.css";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
var p6c, m6c, i5e, g6c;
export { g6c, i5e, m6c, p6c };
var __wakaru_k_g_initialized = false;
export function k_g() {
if (__wakaru_k_g_initialized) return;
__wakaru_k_g_initialized = true;
"use strict";
x(), b_g(), jze(), tc(), as(), p6c = class {
    constructor(e){
        this.left = e.left, this.width = e.width, this.startStyle = null, this.endStyle = null;
    }
}, m6c = class {
    constructor(e, t){
        this.lineNumber = e, this.ranges = t;
    }
}, i5e = class j8 extends n5e {
    constructor(t){
        super(), this._previousFrameVisibleRangesWithStyle = [], this._context = t;
        const n = this._context.configuration.options;
        this._roundedSelection = n.get(106), this._typicalHalfwidthCharacterWidth = n.get(52).typicalHalfwidthCharacterWidth, this._selections = [], this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(t) {
        const n = this._context.configuration.options;
        return this._roundedSelection = n.get(106), this._typicalHalfwidthCharacterWidth = n.get(52).typicalHalfwidthCharacterWidth, !0;
    }
    onCursorStateChanged(t) {
        return this._selections = t.selections.slice(0), !0;
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
        return t.scrollTopChanged;
    }
    onZonesChanged(t) {
        return !0;
    }
    _visibleRangesHaveGaps(t) {
        for(let n = 0, i = t.length; n < i; n++)if (t[n].ranges.length > 1) return !0;
        return !1;
    }
    _enrichVisibleRangesWithStyle(t, n, i) {
        const r = this._typicalHalfwidthCharacterWidth / 4;
        let s = null, o = null;
        if (i && i.length > 0 && n.length > 0) {
            const a = n[0].lineNumber;
            if (a === t.startLineNumber) for(let l = 0; !s && l < i.length; l++)i[l].lineNumber === a && (s = i[l].ranges[0]);
            const c = n[n.length - 1].lineNumber;
            if (c === t.endLineNumber) for(let l = i.length - 1; !o && l >= 0; l--)i[l].lineNumber === c && (o = i[l].ranges[0]);
            s && !s.startStyle && (s = null), o && !o.startStyle && (o = null);
        }
        for(let a = 0, c = n.length; a < c; a++){
            const l = n[a].ranges[0], u = l.left, h = l.left + l.width, p = {
                top: 0,
                bottom: 0
            }, g = {
                top: 0,
                bottom: 0
            };
            if (a > 0) {
                const f = n[a - 1].ranges[0].left, v = n[a - 1].ranges[0].left + n[a - 1].ranges[0].width;
                j_i(u - f) < r ? p.top = 2 : u > f && (p.top = 1), j_i(h - v) < r ? g.top = 2 : f < h && h < v && (g.top = 1);
            } else s && (p.top = s.startStyle.top, g.top = s.endStyle.top);
            if (a + 1 < c) {
                const f = n[a + 1].ranges[0].left, v = n[a + 1].ranges[0].left + n[a + 1].ranges[0].width;
                j_i(u - f) < r ? p.bottom = 2 : f < u && u < v && (p.bottom = 1), j_i(h - v) < r ? g.bottom = 2 : h < v && (g.bottom = 1);
            } else o && (p.bottom = o.startStyle.bottom, g.bottom = o.endStyle.bottom);
            l.startStyle = p, l.endStyle = g;
        }
    }
    _getVisibleRangesWithStyle(t, n, i) {
        const s = (n.linesVisibleRangesForRange(t, !0) || []).map(S_g);
        return !this._visibleRangesHaveGaps(s) && this._roundedSelection && this._enrichVisibleRangesWithStyle(n.visibleRange, s, i), s;
    }
    _createSelectionPiece(t, n, i, r, s) {
        return '<div class="cslr ' + i + '" style="top:' + t.toString() + "px;bottom:" + n.toString() + "px;left:" + r.toString() + "px;width:" + s.toString() + 'px;"></div>';
    }
    _actualRenderOneSelection(t, n, i, r) {
        if (r.length === 0) return;
        const s = !!r[0].ranges[0].startStyle, o = r[0].lineNumber, a = r[r.length - 1].lineNumber;
        for(let c = 0, l = r.length; c < l; c++){
            const u = r[c], h = u.lineNumber, p = h - n, g = i && h === o ? 1 : 0, f = i && h !== o && h === a ? 1 : 0;
            let v = "", b = "";
            for(let y = 0, T = u.ranges.length; y < T; y++){
                const E = u.ranges[y];
                if (s) {
                    const R = E.startStyle, D = E.endStyle;
                    if (R.top === 1 || R.bottom === 1) {
                        v += this._createSelectionPiece(g, f, j8.SELECTION_CLASS_NAME, E.left - j8.ROUNDED_PIECE_WIDTH, j8.ROUNDED_PIECE_WIDTH);
                        let P = j8.EDITOR_BACKGROUND_CLASS_NAME;
                        R.top === 1 && (P += " " + j8.SELECTION_TOP_RIGHT), R.bottom === 1 && (P += " " + j8.SELECTION_BOTTOM_RIGHT), v += this._createSelectionPiece(g, f, P, E.left - j8.ROUNDED_PIECE_WIDTH, j8.ROUNDED_PIECE_WIDTH);
                    }
                    if (D.top === 1 || D.bottom === 1) {
                        v += this._createSelectionPiece(g, f, j8.SELECTION_CLASS_NAME, E.left + E.width, j8.ROUNDED_PIECE_WIDTH);
                        let P = j8.EDITOR_BACKGROUND_CLASS_NAME;
                        D.top === 1 && (P += " " + j8.SELECTION_TOP_LEFT), D.bottom === 1 && (P += " " + j8.SELECTION_BOTTOM_LEFT), v += this._createSelectionPiece(g, f, P, E.left + E.width, j8.ROUNDED_PIECE_WIDTH);
                    }
                }
                let A = j8.SELECTION_CLASS_NAME;
                if (s) {
                    const R = E.startStyle, D = E.endStyle;
                    R.top === 0 && (A += " " + j8.SELECTION_TOP_LEFT), R.bottom === 0 && (A += " " + j8.SELECTION_BOTTOM_LEFT), D.top === 0 && (A += " " + j8.SELECTION_TOP_RIGHT), D.bottom === 0 && (A += " " + j8.SELECTION_BOTTOM_RIGHT);
                }
                b += this._createSelectionPiece(g, f, A, E.left, E.width);
            }
            t[p][0] += v, t[p][1] += b;
        }
    }
    prepareRender(t) {
        const n = [], i = t.visibleRange.startLineNumber, r = t.visibleRange.endLineNumber;
        for(let o = i; o <= r; o++){
            const a = o - i;
            n[a] = [
                "",
                ""
            ];
        }
        const s = [];
        for(let o = 0, a = this._selections.length; o < a; o++){
            const c = this._selections[o];
            if (c.isEmpty()) {
                s[o] = null;
                continue;
            }
            const l = this._getVisibleRangesWithStyle(c, t, this._previousFrameVisibleRangesWithStyle[o]);
            s[o] = l, this._actualRenderOneSelection(n, i, this._selections.length > 1, l);
        }
        this._previousFrameVisibleRangesWithStyle = s, this._renderResult = n.map(([o, a])=>o + a);
    }
    render(t, n) {
        if (!this._renderResult) return "";
        const i = n - t;
        return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
}, i5e.SELECTION_CLASS_NAME = "selected-text", i5e.SELECTION_TOP_LEFT = "top-left-radius", i5e.SELECTION_BOTTOM_LEFT = "bottom-left-radius", i5e.SELECTION_TOP_RIGHT = "top-right-radius", i5e.SELECTION_BOTTOM_RIGHT = "bottom-right-radius", i5e.EDITOR_BACKGROUND_CLASS_NAME = "monaco-editor-background", i5e.ROUNDED_PIECE_WIDTH = 10, g6c = i5e, kI((e, t)=>{
    const n = e.getColor(ALc);
    n && !n.isTransparent() && t.addRule(`.monaco-editor .view-line span.inline-selected-text { color: ${n}; }`);
});

}
