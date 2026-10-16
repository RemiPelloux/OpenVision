import { Jce, Ps, R7 } from "./HVr.js";
import { En, qy } from "./charCode.js";
import { jze, n5e } from "./dynamicViewOverlay.js";
import { HV, zgn } from "./editorColorRegistry.js";
import { Yn, ya } from "./position.js";
import { x } from "./tslib.es6.js";
import { Wpt, fes } from "./viewLineRenderer.js";
import { I_g } from "./whitespace.css";
var _6c, cts;
export { _6c, cts };
var __wakaru_A_g_initialized = false;
export function A_g() {
if (__wakaru_A_g_initialized) return;
__wakaru_A_g_initialized = true;
"use strict";
x(), I_g(), jze(), Ps(), qy(), Wpt(), ya(), HV(), _6c = class extends n5e {
    constructor(e){
        super(), this._context = e, this._options = new cts(this._context.configuration), this._selection = [], this._renderResult = null, this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this), this._renderResult = null, super.dispose();
    }
    onConfigurationChanged(e) {
        const t = new cts(this._context.configuration);
        return this._options.equals(t) ? e.hasChanged(151) : (this._options = t, !0);
    }
    onCursorStateChanged(e) {
        return this._selection = e.selections, this._options.renderWhitespace === "selection";
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
    prepareRender(e) {
        if (this._options.renderWhitespace === "none") {
            this._renderResult = null;
            return;
        }
        const t = e.visibleRange.startLineNumber, i = e.visibleRange.endLineNumber - t + 1, r = new Array(i);
        for(let o = 0; o < i; o++)r[o] = !0;
        const s = this._context.viewModel.getMinimapLinesRenderingData(e.viewportData.startLineNumber, e.viewportData.endLineNumber, r);
        this._renderResult = [];
        for(let o = e.viewportData.startLineNumber; o <= e.viewportData.endLineNumber; o++){
            const a = o - e.viewportData.startLineNumber, c = s.data[a];
            let l = null;
            if (this._options.renderWhitespace === "selection") {
                const u = this._selection;
                for (const h of u){
                    if (h.endLineNumber < o || h.startLineNumber > o) continue;
                    const p = h.startLineNumber === o ? h.startColumn : c.minColumn, g = h.endLineNumber === o ? h.endColumn : c.maxColumn;
                    p < g && (l || (l = []), l.push(new fes(p - 1, g - 1)));
                }
            }
            this._renderResult[a] = this._applyRenderWhitespace(e, o, l, c);
        }
    }
    _applyRenderWhitespace(e, t, n, i) {
        if (this._options.renderWhitespace === "selection" && !n || this._options.renderWhitespace === "trailing" && i.continuesWithWrappedLine) return "";
        const r = this._context.theme.getColor(zgn), s = this._options.renderWithSVG, o = i.content, a = this._options.stopRenderingLineAfter === -1 ? o.length : Math.min(this._options.stopRenderingLineAfter, o.length), c = i.continuesWithWrappedLine, l = i.minColumn - 1, u = this._options.renderWhitespace === "boundary", h = this._options.renderWhitespace === "trailing", p = this._options.lineHeight, g = this._options.middotWidth, f = this._options.wsmiddotWidth, v = this._options.spaceWidth, b = Math.abs(f - v), y = Math.abs(g - v), T = b < y ? 11825 : 183, E = this._options.canUseHalfwidthRightwardsArrow;
        let A = "", R = !1, D = R7(o), P;
        D === -1 ? (R = !0, D = a, P = a) : P = Jce(o);
        let N = 0, O = n && n[N], F = 0;
        for(let H = l; H < a; H++){
            const $ = o.charCodeAt(H);
            if (O && H >= O.endOffset && (N++, O = n && n[N]), $ !== En.Tab && $ !== En.Space || h && !R && H <= P) continue;
            if (u && H >= D && H <= P && $ === En.Space) {
                const G = H - 1 >= 0 ? o.charCodeAt(H - 1) : En.Null, q = H + 1 < a ? o.charCodeAt(H + 1) : En.Null;
                if (G !== En.Space && q !== En.Space) continue;
            }
            if (u && c && H === a - 1) {
                const G = H - 1 >= 0 ? o.charCodeAt(H - 1) : En.Null;
                if ($ === En.Space && G !== En.Space && G !== En.Tab) continue;
            }
            if (n && (!O || O.startOffset > H || O.endOffset <= H)) continue;
            const W = e.visibleRangeForPosition(new Yn(t, H + 1));
            W && (s ? (F = Math.max(F, W.left), $ === En.Tab ? A += this._renderArrow(p, v, W.left) : A += `<circle cx="${(W.left + v / 2).toFixed(2)}" cy="${(p / 2).toFixed(2)}" r="${(v / 7).toFixed(2)}" />`) : $ === En.Tab ? A += `<div class="mwh" style="left:${W.left}px;height:${p}px;">${E ? "\uFFEB" : "\u2192"}</div>` : A += `<div class="mwh" style="left:${W.left}px;height:${p}px;">${String.fromCharCode(T)}</div>`);
        }
        return s ? (F = Math.round(F + v), `<svg style="bottom:0;position:absolute;width:${F}px;height:${p}px" viewBox="0 0 ${F} ${p}" xmlns="http://www.w3.org/2000/svg" fill="${r}">` + A + "</svg>") : A;
    }
    _renderArrow(e, t, n) {
        const i = t / 7, r = t, s = e / 2, o = n, a = {
            x: 0,
            y: i / 2
        }, c = {
            x: 100 / 125 * r,
            y: a.y
        }, l = {
            x: c.x - .2 * c.x,
            y: c.y + .2 * c.x
        }, u = {
            x: l.x + .1 * c.x,
            y: l.y + .1 * c.x
        }, h = {
            x: u.x + .35 * c.x,
            y: u.y - .35 * c.x
        }, p = {
            x: h.x,
            y: -h.y
        }, g = {
            x: u.x,
            y: -u.y
        }, f = {
            x: l.x,
            y: -l.y
        }, v = {
            x: c.x,
            y: -c.y
        }, b = {
            x: a.x,
            y: -a.y
        };
        return `<path d="M ${[
            a,
            c,
            l,
            u,
            h,
            p,
            g,
            f,
            v,
            b
        ].map((E)=>`${(o + E.x).toFixed(2)} ${(s + E.y).toFixed(2)}`).join(" L ")}" />`;
    }
    render(e, t) {
        if (!this._renderResult) return "";
        const n = t - e;
        return n < 0 || n >= this._renderResult.length ? "" : this._renderResult[n];
    }
}, cts = class {
    constructor(e){
        const t = e.options, n = t.get(52), i = t.get(40);
        i === "off" ? (this.renderWhitespace = "none", this.renderWithSVG = !1) : i === "svg" ? (this.renderWhitespace = t.get(104), this.renderWithSVG = !0) : (this.renderWhitespace = t.get(104), this.renderWithSVG = !1), this.spaceWidth = n.spaceWidth, this.middotWidth = n.middotWidth, this.wsmiddotWidth = n.wsmiddotWidth, this.canUseHalfwidthRightwardsArrow = n.canUseHalfwidthRightwardsArrow, this.lineHeight = t.get(68), this.stopRenderingLineAfter = t.get(122);
    }
    equals(e) {
        return this.renderWhitespace === e.renderWhitespace && this.renderWithSVG === e.renderWithSVG && this.spaceWidth === e.spaceWidth && this.middotWidth === e.middotWidth && this.wsmiddotWidth === e.wsmiddotWidth && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.lineHeight === e.lineHeight && this.stopRenderingLineAfter === e.stopRenderingLineAfter;
    }
};

}
