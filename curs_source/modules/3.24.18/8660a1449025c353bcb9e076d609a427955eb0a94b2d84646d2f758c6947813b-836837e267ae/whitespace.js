import { Fa, Jxe, sY } from "./Iwo.js";
import { Cw, ti } from "./charCode.js";
import { Qtt, kyt } from "./dynamicViewOverlay.js";
import { Ari, doe } from "./editorColorRegistry.js";
import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
import { bHo, dBt } from "./viewLineRenderer.js";
import { SDy } from "./whitespace.css";
var P$d, pWo;
export { P$d, pWo };
var __wakaru_kDy_initialized = false;
export function kDy() {
if (__wakaru_kDy_initialized) return;
__wakaru_kDy_initialized = true;
"use strict";
E(), SDy(), kyt(), Fa(), Cw(), dBt(), jc(), doe(), P$d = class extends Qtt {
    constructor(t){
        super(), this._context = t, this._options = new pWo(this._context.configuration), this._selection = [], this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(t) {
        const e = new pWo(this._context.configuration);
        return this._options.equals(e) ? t.hasChanged(151) : (this._options = e, !0);
    }
    onCursorStateChanged(t) {
        return this._selection = t.selections, this._options.renderWhitespace === "selection";
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
    prepareRender(t) {
        if (this._options.renderWhitespace === "none") {
            this._renderResult = null;
            return;
        }
        const e = t.visibleRange.startLineNumber, i = t.visibleRange.endLineNumber - e + 1, r = new Array(i);
        for(let o = 0; o < i; o++)r[o] = !0;
        const s = this._context.viewModel.getMinimapLinesRenderingData(t.viewportData.startLineNumber, t.viewportData.endLineNumber, r);
        this._renderResult = [];
        for(let o = t.viewportData.startLineNumber; o <= t.viewportData.endLineNumber; o++){
            const a = o - t.viewportData.startLineNumber, l = s.data[a];
            let c = null;
            if (this._options.renderWhitespace === "selection") {
                const u = this._selection;
                for (const d of u){
                    if (d.endLineNumber < o || d.startLineNumber > o) continue;
                    const h = d.startLineNumber === o ? d.startColumn : l.minColumn, p = d.endLineNumber === o ? d.endColumn : l.maxColumn;
                    h < p && (c || (c = []), c.push(new bHo(h - 1, p - 1)));
                }
            }
            this._renderResult[a] = this._applyRenderWhitespace(t, o, c, l);
        }
    }
    _applyRenderWhitespace(t, e, n, i) {
        if (this._options.renderWhitespace === "selection" && !n || this._options.renderWhitespace === "trailing" && i.continuesWithWrappedLine) return "";
        const r = this._context.theme.getColor(Ari), s = this._options.renderWithSVG, o = i.content, a = this._options.stopRenderingLineAfter === -1 ? o.length : Math.min(this._options.stopRenderingLineAfter, o.length), l = i.continuesWithWrappedLine, c = i.minColumn - 1, u = this._options.renderWhitespace === "boundary", d = this._options.renderWhitespace === "trailing", h = this._options.lineHeight, p = this._options.middotWidth, g = this._options.wsmiddotWidth, f = this._options.spaceWidth, _ = Math.abs(g - f), b = Math.abs(p - f), y = _ < b ? 11825 : 183, S = this._options.canUseHalfwidthRightwardsArrow;
        let k = "", C = !1, T = sY(o), I;
        T === -1 ? (C = !0, T = a, I = a) : I = Jxe(o);
        let A = 0, P = n && n[A], M = 0;
        for(let O = c; O < a; O++){
            const N = o.charCodeAt(O);
            if (P && O >= P.endOffset && (A++, P = n && n[A]), N !== ti.Tab && N !== ti.Space || d && !C && O <= I) continue;
            if (u && O >= T && O <= I && N === ti.Space) {
                const j = O - 1 >= 0 ? o.charCodeAt(O - 1) : ti.Null, $ = O + 1 < a ? o.charCodeAt(O + 1) : ti.Null;
                if (j !== ti.Space && $ !== ti.Space) continue;
            }
            if (u && l && O === a - 1) {
                const j = O - 1 >= 0 ? o.charCodeAt(O - 1) : ti.Null;
                if (N === ti.Space && j !== ti.Space && j !== ti.Tab) continue;
            }
            if (n && (!P || P.startOffset > O || P.endOffset <= O)) continue;
            const U = t.visibleRangeForPosition(new er(e, O + 1));
            U && (s ? (M = Math.max(M, U.left), N === ti.Tab ? k += this._renderArrow(h, f, U.left) : k += `<circle cx="${(U.left + f / 2).toFixed(2)}" cy="${(h / 2).toFixed(2)}" r="${(f / 7).toFixed(2)}" />`) : N === ti.Tab ? k += `<div class="mwh" style="left:${U.left}px;height:${h}px;">${S ? "\uFFEB" : "\u2192"}</div>` : k += `<div class="mwh" style="left:${U.left}px;height:${h}px;">${String.fromCharCode(y)}</div>`);
        }
        return s ? (M = Math.round(M + f), `<svg style="bottom:0;position:absolute;width:${M}px;height:${h}px" viewBox="0 0 ${M} ${h}" xmlns="http://www.w3.org/2000/svg" fill="${r}">` + k + "</svg>") : k;
    }
    _renderArrow(t, e, n) {
        const i = e / 7, r = e, s = t / 2, o = n, a = {
            x: 0,
            y: i / 2
        }, l = {
            x: 100 / 125 * r,
            y: a.y
        }, c = {
            x: l.x - .2 * l.x,
            y: l.y + .2 * l.x
        }, u = {
            x: c.x + .1 * l.x,
            y: c.y + .1 * l.x
        }, d = {
            x: u.x + .35 * l.x,
            y: u.y - .35 * l.x
        }, h = {
            x: d.x,
            y: -d.y
        }, p = {
            x: u.x,
            y: -u.y
        }, g = {
            x: c.x,
            y: -c.y
        }, f = {
            x: l.x,
            y: -l.y
        }, _ = {
            x: a.x,
            y: -a.y
        };
        return `<path d="M ${[
            a,
            l,
            c,
            u,
            d,
            h,
            p,
            g,
            f,
            _
        ].map((S)=>`${(o + S.x).toFixed(2)} ${(s + S.y).toFixed(2)}`).join(" L ")}" />`;
    }
    render(t, e) {
        if (!this._renderResult) return "";
        const n = e - t;
        return n < 0 || n >= this._renderResult.length ? "" : this._renderResult[n];
    }
}, pWo = class {
    constructor(t){
        const e = t.options, n = e.get(52), i = e.get(40);
        i === "off" ? (this.renderWhitespace = "none", this.renderWithSVG = !1) : i === "svg" ? (this.renderWhitespace = e.get(104), this.renderWithSVG = !0) : (this.renderWhitespace = e.get(104), this.renderWithSVG = !1), this.spaceWidth = n.spaceWidth, this.middotWidth = n.middotWidth, this.wsmiddotWidth = n.wsmiddotWidth, this.canUseHalfwidthRightwardsArrow = n.canUseHalfwidthRightwardsArrow, this.lineHeight = e.get(68), this.stopRenderingLineAfter = e.get(122);
    }
    equals(t) {
        return this.renderWhitespace === t.renderWhitespace && this.renderWithSVG === t.renderWithSVG && this.spaceWidth === t.spaceWidth && this.middotWidth === t.middotWidth && this.wsmiddotWidth === t.wsmiddotWidth && this.canUseHalfwidthRightwardsArrow === t.canUseHalfwidthRightwardsArrow && this.lineHeight === t.lineHeight && this.stopRenderingLineAfter === t.stopRenderingLineAfter;
    }
};

}
