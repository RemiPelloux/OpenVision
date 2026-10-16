import { nh } from "./HVr.js";
import { dr } from "./arrays.js";
import { Ci, Sm } from "./color.js";
import { HV, UOc, iQr, lOt, nQr, oQr } from "./editorColorRegistry.js";
import { Tx } from "./fastDomNode.js";
import { Ky, Wp } from "./languages.js";
import { Yn, ya } from "./position.js";
import { x_ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Cle, __i } from "./viewModel.js";
import { aU, mW } from "./viewPart.js";
var o6c, a6c;
export { a6c, o6c };
var __wakaru_p_g_initialized = false;
export function p_g() {
if (__wakaru_p_g_initialized) return;
__wakaru_p_g_initialized = true;
"use strict";
x(), Tx(), Sm(), aU(), ya(), Wp(), HV(), Cle(), dr(), o6c = class {
    constructor(e, t){
        const n = e.options;
        this.lineHeight = n.get(68), this.pixelRatio = n.get(149), this.overviewRulerLanes = n.get(87), this.renderBorder = n.get(86);
        const i = t.getColor(oQr);
        this.borderColor = i ? i.toString() : null, this.hideCursor = n.get(61);
        const r = t.getColor(lOt);
        this.cursorColorSingle = r ? r.transparent(.7).toString() : null;
        const s = t.getColor(nQr);
        this.cursorColorPrimary = s ? s.transparent(.7).toString() : null;
        const o = t.getColor(iQr);
        this.cursorColorSecondary = o ? o.transparent(.7).toString() : null, this.themeType = t.type;
        const a = n.get(74), c = a.enabled, l = a.side, u = t.getColor(UOc), h = Ky.getDefaultBackground();
        u ? this.backgroundColor = u : c && l === "right" ? this.backgroundColor = h : this.backgroundColor = null;
        const g = n.get(151).overviewRuler;
        this.top = g.top, this.right = g.right, this.domWidth = g.width, this.domHeight = g.height, this.overviewRulerLanes === 0 ? (this.canvasWidth = 0, this.canvasHeight = 0) : (this.canvasWidth = this.domWidth * this.pixelRatio | 0, this.canvasHeight = this.domHeight * this.pixelRatio | 0);
        const [f, v] = this._initLanes(1, this.canvasWidth, this.overviewRulerLanes);
        this.x = f, this.w = v;
    }
    _initLanes(e, t, n) {
        const i = t - e;
        if (n >= 3) {
            const r = Math.floor(i / 3), s = Math.floor(i / 3), o = i - r - s, a = e, c = a + r, l = a + r + o;
            return [
                [
                    0,
                    a,
                    c,
                    a,
                    l,
                    a,
                    c,
                    a
                ],
                [
                    0,
                    r,
                    o,
                    r + o,
                    s,
                    r + o + s,
                    o + s,
                    r + o + s
                ]
            ];
        } else if (n === 2) {
            const r = Math.floor(i / 2), s = i - r, o = e, a = o + r;
            return [
                [
                    0,
                    o,
                    o,
                    o,
                    a,
                    o,
                    o,
                    o
                ],
                [
                    0,
                    r,
                    r,
                    r,
                    s,
                    r + s,
                    r + s,
                    r + s
                ]
            ];
        } else {
            const r = e, s = i;
            return [
                [
                    0,
                    r,
                    r,
                    r,
                    r,
                    r,
                    r,
                    r
                ],
                [
                    0,
                    s,
                    s,
                    s,
                    s,
                    s,
                    s,
                    s
                ]
            ];
        }
    }
    equals(e) {
        return this.lineHeight === e.lineHeight && this.pixelRatio === e.pixelRatio && this.overviewRulerLanes === e.overviewRulerLanes && this.renderBorder === e.renderBorder && this.borderColor === e.borderColor && this.hideCursor === e.hideCursor && this.cursorColorSingle === e.cursorColorSingle && this.cursorColorPrimary === e.cursorColorPrimary && this.cursorColorSecondary === e.cursorColorSecondary && this.themeType === e.themeType && Ci.equals(this.backgroundColor, e.backgroundColor) && this.top === e.top && this.right === e.right && this.domWidth === e.domWidth && this.domHeight === e.domHeight && this.canvasWidth === e.canvasWidth && this.canvasHeight === e.canvasHeight;
    }
}, a6c = class extends mW {
    constructor(e){
        super(e), this._actualShouldRender = 0, this._renderedDecorations = [], this._renderedCursorPositions = [], this._domNode = x_(document.createElement("canvas")), this._domNode.setClassName("decorationsOverviewRuler"), this._domNode.setPosition("absolute"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), this._domNode.setAttribute("aria-hidden", "true"), this._updateSettings(!1), this._tokensColorTrackerListener = Ky.onDidChange((t)=>{
            t.changedColorMap && this._updateSettings(!0);
        }), this._cursorPositions = [
            {
                position: new Yn(1, 1),
                color: this._settings.cursorColorSingle
            }
        ];
    }
    dispose() {
        super.dispose(), this._tokensColorTrackerListener.dispose();
    }
    _updateSettings(e) {
        const t = new o6c(this._context.configuration, this._context.theme);
        return this._settings && this._settings.equals(t) ? !1 : (this._settings = t, this._domNode.setTop(this._settings.top), this._domNode.setRight(this._settings.right), this._domNode.setWidth(this._settings.domWidth), this._domNode.setHeight(this._settings.domHeight), this._domNode.domNode.width = this._settings.canvasWidth, this._domNode.domNode.height = this._settings.canvasHeight, e && this._render(), !0);
    }
    _markRenderingIsNeeded() {
        return this._actualShouldRender = 2, !0;
    }
    _markRenderingIsMaybeNeeded() {
        return this._actualShouldRender = 1, !0;
    }
    onConfigurationChanged(e) {
        return this._updateSettings(!1) ? this._markRenderingIsNeeded() : !1;
    }
    onCursorStateChanged(e) {
        this._cursorPositions = [];
        for(let t = 0, n = e.selections.length; t < n; t++){
            let i = this._settings.cursorColorSingle;
            n > 1 && (i = t === 0 ? this._settings.cursorColorPrimary : this._settings.cursorColorSecondary), this._cursorPositions.push({
                position: e.selections[t].getPosition(),
                color: i
            });
        }
        return this._cursorPositions.sort((t, n)=>Yn.compare(t.position, n.position)), this._markRenderingIsMaybeNeeded();
    }
    onDecorationsChanged(e) {
        return e.affectsOverviewRuler ? this._markRenderingIsMaybeNeeded() : !1;
    }
    onFlushed(e) {
        return this._markRenderingIsNeeded();
    }
    onScrollChanged(e) {
        return e.scrollHeightChanged ? this._markRenderingIsNeeded() : !1;
    }
    onZonesChanged(e) {
        return this._markRenderingIsNeeded();
    }
    onThemeChanged(e) {
        return this._updateSettings(!1) ? this._markRenderingIsNeeded() : !1;
    }
    getDomNode() {
        return this._domNode.domNode;
    }
    prepareRender(e) {}
    render(e) {
        this._render(), this._actualShouldRender = 0;
    }
    _render() {
        const e = this._settings.backgroundColor;
        if (this._settings.overviewRulerLanes === 0) {
            this._domNode.setBackgroundColor(e ? Ci.Format.CSS.formatHexA(e) : ""), this._domNode.setDisplay("none");
            return;
        }
        const t = this._context.viewModel.getAllOverviewRulerDecorations(this._context.theme);
        if (t.sort(__i.compareByRenderingProps), this._actualShouldRender === 1 && !__i.equalsArr(this._renderedDecorations, t) && (this._actualShouldRender = 2), this._actualShouldRender === 1 && !nh(this._renderedCursorPositions, this._cursorPositions, (g, f)=>g.position.lineNumber === f.position.lineNumber && g.color === f.color) && (this._actualShouldRender = 2), this._actualShouldRender === 1) return;
        this._renderedDecorations = t, this._renderedCursorPositions = this._cursorPositions, this._domNode.setDisplay("block");
        const n = this._settings.canvasWidth, i = this._settings.canvasHeight, r = this._settings.lineHeight, s = this._context.viewLayout, o = this._context.viewLayout.getScrollHeight(), a = i / o, c = 6 * this._settings.pixelRatio | 0, l = c / 2 | 0, u = this._domNode.domNode.getContext("2d");
        e ? e.isOpaque() ? (u.fillStyle = Ci.Format.CSS.formatHexA(e), u.fillRect(0, 0, n, i)) : (u.clearRect(0, 0, n, i), u.fillStyle = Ci.Format.CSS.formatHexA(e), u.fillRect(0, 0, n, i)) : u.clearRect(0, 0, n, i);
        const h = this._settings.x, p = this._settings.w;
        for (const g of t){
            const f = g.color, v = g.data;
            u.fillStyle = f;
            let b = 0, y = 0, T = 0;
            for(let E = 0, A = v.length / 3; E < A; E++){
                const R = v[3 * E], D = v[3 * E + 1], P = v[3 * E + 2];
                let N = s.getVerticalOffsetForLineNumber(D) * a | 0, O = (s.getVerticalOffsetForLineNumber(P) + r) * a | 0;
                if (O - N < c) {
                    let H = (N + O) / 2 | 0;
                    H < l ? H = l : H + l > i && (H = i - l), N = H - l, O = H + l;
                }
                N > T + 1 || R !== b ? (E !== 0 && u.fillRect(h[b], y, p[b], T - y), b = R, y = N, T = O) : O > T && (T = O);
            }
            u.fillRect(h[b], y, p[b], T - y);
        }
        if (!this._settings.hideCursor) {
            const g = 2 * this._settings.pixelRatio | 0, f = g / 2 | 0, v = this._settings.x[7], b = this._settings.w[7];
            let y = -100, T = -100, E = null;
            for(let A = 0, R = this._cursorPositions.length; A < R; A++){
                const D = this._cursorPositions[A].color;
                if (!D) continue;
                const P = this._cursorPositions[A].position;
                let N = s.getVerticalOffsetForLineNumber(P.lineNumber) * a | 0;
                N < f ? N = f : N + f > i && (N = i - f);
                const O = N - f, F = O + g;
                O > T + 1 || D !== E ? (A !== 0 && E && u.fillRect(v, y, b, T - y), y = O, T = F) : F > T && (T = F), E = D, u.fillStyle = D;
            }
            E && u.fillRect(v, y, b, T - y);
        }
        this._settings.renderBorder && this._settings.borderColor && this._settings.overviewRulerLanes > 0 && (u.beginPath(), u.lineWidth = 1, u.strokeStyle = this._settings.borderColor, u.moveTo(0, 0), u.lineTo(0, i), u.moveTo(1, 0), u.lineTo(n, 0), u.stroke());
    }
};

}
