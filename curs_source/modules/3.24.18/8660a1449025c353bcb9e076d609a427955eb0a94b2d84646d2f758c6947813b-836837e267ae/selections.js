import { Ap } from "./colorRegistry.js";
import { Qtt, kyt } from "./dynamicViewOverlay.js";
import { P6d } from "./editorColors.js";
import { hDy } from "./selections.css";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { _Cr, mDy, nne } from "./ze.js";
var E$d, I$d, Jtt, x$d;
export { E$d, I$d, Jtt, x$d };
var __wakaru_gDy_initialized = false;
export function gDy() {
if (__wakaru_gDy_initialized) return;
__wakaru_gDy_initialized = true;
"use strict";
E(), hDy(), kyt(), Ap(), Dl(), E$d = class {
    constructor(t){
        this.left = t.left, this.width = t.width, this.startStyle = null, this.endStyle = null;
    }
}, I$d = class {
    constructor(t, e){
        this.lineNumber = t, this.ranges = e;
    }
}, Jtt = class gK extends Qtt {
    constructor(e){
        super(), this._previousFrameVisibleRangesWithStyle = [], this._context = e;
        const n = this._context.configuration.options;
        this._roundedSelection = n.get(106), this._typicalHalfwidthCharacterWidth = n.get(52).typicalHalfwidthCharacterWidth, this._selections = [], this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(e) {
        const n = this._context.configuration.options;
        return this._roundedSelection = n.get(106), this._typicalHalfwidthCharacterWidth = n.get(52).typicalHalfwidthCharacterWidth, !0;
    }
    onCursorStateChanged(e) {
        return this._selections = e.selections.slice(0), !0;
    }
    onDecorationsChanged(e) {
        return !0;
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
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return !0;
    }
    _visibleRangesHaveGaps(e) {
        for(let n = 0, i = e.length; n < i; n++)if (e[n].ranges.length > 1) return !0;
        return !1;
    }
    _enrichVisibleRangesWithStyle(e, n, i) {
        const r = this._typicalHalfwidthCharacterWidth / 4;
        let s = null, o = null;
        if (i && i.length > 0 && n.length > 0) {
            const a = n[0].lineNumber;
            if (a === e.startLineNumber) for(let c = 0; !s && c < i.length; c++)i[c].lineNumber === a && (s = i[c].ranges[0]);
            const l = n[n.length - 1].lineNumber;
            if (l === e.endLineNumber) for(let c = i.length - 1; !o && c >= 0; c--)i[c].lineNumber === l && (o = i[c].ranges[0]);
            s && !s.startStyle && (s = null), o && !o.startStyle && (o = null);
        }
        for(let a = 0, l = n.length; a < l; a++){
            const c = n[a].ranges[0], u = c.left, d = c.left + c.width, h = {
                top: 0,
                bottom: 0
            }, p = {
                top: 0,
                bottom: 0
            };
            if (a > 0) {
                const g = n[a - 1].ranges[0].left, f = n[a - 1].ranges[0].left + n[a - 1].ranges[0].width;
                _Cr(u - g) < r ? h.top = 2 : u > g && (h.top = 1), _Cr(d - f) < r ? p.top = 2 : g < d && d < f && (p.top = 1);
            } else s && (h.top = s.startStyle.top, p.top = s.endStyle.top);
            if (a + 1 < l) {
                const g = n[a + 1].ranges[0].left, f = n[a + 1].ranges[0].left + n[a + 1].ranges[0].width;
                _Cr(u - g) < r ? h.bottom = 2 : g < u && u < f && (h.bottom = 1), _Cr(d - f) < r ? p.bottom = 2 : d < f && (p.bottom = 1);
            } else o && (h.bottom = o.startStyle.bottom, p.bottom = o.endStyle.bottom);
            c.startStyle = h, c.endStyle = p;
        }
    }
    _getVisibleRangesWithStyle(e, n, i) {
        const s = (n.linesVisibleRangesForRange(e, !0) || []).map(mDy);
        return !this._visibleRangesHaveGaps(s) && this._roundedSelection && this._enrichVisibleRangesWithStyle(n.visibleRange, s, i), s;
    }
    _createSelectionPiece(e, n, i, r, s) {
        return '<div class="cslr ' + i + '" style="top:' + e.toString() + "px;bottom:" + n.toString() + "px;left:" + r.toString() + "px;width:" + s.toString() + 'px;"></div>';
    }
    _actualRenderOneSelection(e, n, i, r) {
        if (r.length === 0) return;
        const s = !!r[0].ranges[0].startStyle, o = r[0].lineNumber, a = r[r.length - 1].lineNumber;
        for(let l = 0, c = r.length; l < c; l++){
            const u = r[l], d = u.lineNumber, h = d - n, p = i && d === o ? 1 : 0, g = i && d !== o && d === a ? 1 : 0;
            let f = "", _ = "";
            for(let b = 0, y = u.ranges.length; b < y; b++){
                const S = u.ranges[b];
                if (s) {
                    const C = S.startStyle, T = S.endStyle;
                    if (C.top === 1 || C.bottom === 1) {
                        f += this._createSelectionPiece(p, g, gK.SELECTION_CLASS_NAME, S.left - gK.ROUNDED_PIECE_WIDTH, gK.ROUNDED_PIECE_WIDTH);
                        let I = gK.EDITOR_BACKGROUND_CLASS_NAME;
                        C.top === 1 && (I += " " + gK.SELECTION_TOP_RIGHT), C.bottom === 1 && (I += " " + gK.SELECTION_BOTTOM_RIGHT), f += this._createSelectionPiece(p, g, I, S.left - gK.ROUNDED_PIECE_WIDTH, gK.ROUNDED_PIECE_WIDTH);
                    }
                    if (T.top === 1 || T.bottom === 1) {
                        f += this._createSelectionPiece(p, g, gK.SELECTION_CLASS_NAME, S.left + S.width, gK.ROUNDED_PIECE_WIDTH);
                        let I = gK.EDITOR_BACKGROUND_CLASS_NAME;
                        T.top === 1 && (I += " " + gK.SELECTION_TOP_LEFT), T.bottom === 1 && (I += " " + gK.SELECTION_BOTTOM_LEFT), f += this._createSelectionPiece(p, g, I, S.left + S.width, gK.ROUNDED_PIECE_WIDTH);
                    }
                }
                let k = gK.SELECTION_CLASS_NAME;
                if (s) {
                    const C = S.startStyle, T = S.endStyle;
                    C.top === 0 && (k += " " + gK.SELECTION_TOP_LEFT), C.bottom === 0 && (k += " " + gK.SELECTION_BOTTOM_LEFT), T.top === 0 && (k += " " + gK.SELECTION_TOP_RIGHT), T.bottom === 0 && (k += " " + gK.SELECTION_BOTTOM_RIGHT);
                }
                _ += this._createSelectionPiece(p, g, k, S.left, S.width);
            }
            e[h][0] += f, e[h][1] += _;
        }
    }
    prepareRender(e) {
        const n = [], i = e.visibleRange.startLineNumber, r = e.visibleRange.endLineNumber;
        for(let o = i; o <= r; o++){
            const a = o - i;
            n[a] = [
                "",
                ""
            ];
        }
        const s = [];
        for(let o = 0, a = this._selections.length; o < a; o++){
            const l = this._selections[o];
            if (l.isEmpty()) {
                s[o] = null;
                continue;
            }
            const c = this._getVisibleRangesWithStyle(l, e, this._previousFrameVisibleRangesWithStyle[o]);
            s[o] = c, this._actualRenderOneSelection(n, i, this._selections.length > 1, c);
        }
        this._previousFrameVisibleRangesWithStyle = s, this._renderResult = n.map(([o, a])=>o + a);
    }
    render(e, n) {
        if (!this._renderResult) return "";
        const i = n - e;
        return i < 0 || i >= this._renderResult.length ? "" : this._renderResult[i];
    }
}, Jtt.SELECTION_CLASS_NAME = "selected-text", Jtt.SELECTION_TOP_LEFT = "top-left-radius", Jtt.SELECTION_BOTTOM_LEFT = "bottom-left-radius", Jtt.SELECTION_TOP_RIGHT = "top-right-radius", Jtt.SELECTION_BOTTOM_RIGHT = "bottom-right-radius", Jtt.EDITOR_BACKGROUND_CLASS_NAME = "monaco-editor-background", Jtt.ROUNDED_PIECE_WIDTH = 10, x$d = Jtt, nne((t, e)=>{
    const n = t.getColor(P6d);
    n && !n.isTransparent() && e.addRule(`.monaco-editor .view-line span.inline-selected-text { color: ${n}; }`);
});

}
