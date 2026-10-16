import { Zm } from "./Iwo.js";
import { bo } from "./arrays.js";
import { _b, ls } from "./color.js";
import { Zgn, doe, fjo, hjo, mBd, pjo } from "./editorColorRegistry.js";
import { i6 } from "./fastDomNode.js";
import { BI, Iy } from "./languages.js";
import { er, jc } from "./position.js";
import { E } from "./tslib.es6.js";
import { H0r, zAe } from "./viewModel.js";
import { AQ, pz } from "./viewPart.js";
import { Ew } from "./ze.js";
var b$d, y$d;
export { b$d, y$d };
var __wakaru_oDy_initialized = false;
export function oDy() {
if (__wakaru_oDy_initialized) return;
__wakaru_oDy_initialized = true;
"use strict";
E(), i6(), _b(), pz(), jc(), Iy(), doe(), zAe(), bo(), b$d = class {
    constructor(t, e){
        const n = t.options;
        this.lineHeight = n.get(68), this.pixelRatio = n.get(149), this.overviewRulerLanes = n.get(87), this.renderBorder = n.get(86);
        const i = e.getColor(fjo);
        this.borderColor = i ? i.toString() : null, this.hideCursor = n.get(61);
        const r = e.getColor(Zgn);
        this.cursorColorSingle = r ? r.transparent(.7).toString() : null;
        const s = e.getColor(hjo);
        this.cursorColorPrimary = s ? s.transparent(.7).toString() : null;
        const o = e.getColor(pjo);
        this.cursorColorSecondary = o ? o.transparent(.7).toString() : null, this.themeType = e.type;
        const a = n.get(74), l = a.enabled, c = a.side, u = e.getColor(mBd), d = BI.getDefaultBackground();
        u ? this.backgroundColor = u : l && c === "right" ? this.backgroundColor = d : this.backgroundColor = null;
        const p = n.get(151).overviewRuler;
        this.top = p.top, this.right = p.right, this.domWidth = p.width, this.domHeight = p.height, this.overviewRulerLanes === 0 ? (this.canvasWidth = 0, this.canvasHeight = 0) : (this.canvasWidth = this.domWidth * this.pixelRatio | 0, this.canvasHeight = this.domHeight * this.pixelRatio | 0);
        const [g, f] = this._initLanes(1, this.canvasWidth, this.overviewRulerLanes);
        this.x = g, this.w = f;
    }
    _initLanes(t, e, n) {
        const i = e - t;
        if (n >= 3) {
            const r = Math.floor(i / 3), s = Math.floor(i / 3), o = i - r - s, a = t, l = a + r, c = a + r + o;
            return [
                [
                    0,
                    a,
                    l,
                    a,
                    c,
                    a,
                    l,
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
            const r = Math.floor(i / 2), s = i - r, o = t, a = o + r;
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
            const r = t, s = i;
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
    equals(t) {
        return this.lineHeight === t.lineHeight && this.pixelRatio === t.pixelRatio && this.overviewRulerLanes === t.overviewRulerLanes && this.renderBorder === t.renderBorder && this.borderColor === t.borderColor && this.hideCursor === t.hideCursor && this.cursorColorSingle === t.cursorColorSingle && this.cursorColorPrimary === t.cursorColorPrimary && this.cursorColorSecondary === t.cursorColorSecondary && this.themeType === t.themeType && ls.equals(this.backgroundColor, t.backgroundColor) && this.top === t.top && this.right === t.right && this.domWidth === t.domWidth && this.domHeight === t.domHeight && this.canvasWidth === t.canvasWidth && this.canvasHeight === t.canvasHeight;
    }
}, y$d = class extends AQ {
    constructor(t){
        super(t), this._actualShouldRender = 0, this._renderedDecorations = [], this._renderedCursorPositions = [], this._domNode = Ew(document.createElement("canvas")), this._domNode.setClassName("decorationsOverviewRuler"), this._domNode.setPosition("absolute"), this._domNode.setLayerHinting(!0), this._domNode.setContain("strict"), this._domNode.setAttribute("aria-hidden", "true"), this._updateSettings(!1), this._tokensColorTrackerListener = BI.onDidChange((e)=>{
            e.changedColorMap && this._updateSettings(!0);
        }), this._cursorPositions = [
            {
                position: new er(1, 1),
                color: this._settings.cursorColorSingle
            }
        ];
    }
    dispose() {
        super.dispose(), this._tokensColorTrackerListener.dispose();
    }
    _updateSettings(t) {
        const e = new b$d(this._context.configuration, this._context.theme);
        return this._settings && this._settings.equals(e) ? !1 : (this._settings = e, this._domNode.setTop(this._settings.top), this._domNode.setRight(this._settings.right), this._domNode.setWidth(this._settings.domWidth), this._domNode.setHeight(this._settings.domHeight), this._domNode.domNode.width = this._settings.canvasWidth, this._domNode.domNode.height = this._settings.canvasHeight, t && this._render(), !0);
    }
    _markRenderingIsNeeded() {
        return this._actualShouldRender = 2, !0;
    }
    _markRenderingIsMaybeNeeded() {
        return this._actualShouldRender = 1, !0;
    }
    onConfigurationChanged(t) {
        return this._updateSettings(!1) ? this._markRenderingIsNeeded() : !1;
    }
    onCursorStateChanged(t) {
        this._cursorPositions = [];
        for(let e = 0, n = t.selections.length; e < n; e++){
            let i = this._settings.cursorColorSingle;
            n > 1 && (i = e === 0 ? this._settings.cursorColorPrimary : this._settings.cursorColorSecondary), this._cursorPositions.push({
                position: t.selections[e].getPosition(),
                color: i
            });
        }
        return this._cursorPositions.sort((e, n)=>er.compare(e.position, n.position)), this._markRenderingIsMaybeNeeded();
    }
    onDecorationsChanged(t) {
        return t.affectsOverviewRuler ? this._markRenderingIsMaybeNeeded() : !1;
    }
    onFlushed(t) {
        return this._markRenderingIsNeeded();
    }
    onScrollChanged(t) {
        return t.scrollHeightChanged ? this._markRenderingIsNeeded() : !1;
    }
    onZonesChanged(t) {
        return this._markRenderingIsNeeded();
    }
    onThemeChanged(t) {
        return this._updateSettings(!1) ? this._markRenderingIsNeeded() : !1;
    }
    getDomNode() {
        return this._domNode.domNode;
    }
    prepareRender(t) {}
    render(t) {
        this._render(), this._actualShouldRender = 0;
    }
    _render() {
        const t = this._settings.backgroundColor;
        if (this._settings.overviewRulerLanes === 0) {
            this._domNode.setBackgroundColor(t ? ls.Format.CSS.formatHexA(t) : ""), this._domNode.setDisplay("none");
            return;
        }
        const e = this._context.viewModel.getAllOverviewRulerDecorations(this._context.theme);
        if (e.sort(H0r.compareByRenderingProps), this._actualShouldRender === 1 && !H0r.equalsArr(this._renderedDecorations, e) && (this._actualShouldRender = 2), this._actualShouldRender === 1 && !Zm(this._renderedCursorPositions, this._cursorPositions, (p, g)=>p.position.lineNumber === g.position.lineNumber && p.color === g.color) && (this._actualShouldRender = 2), this._actualShouldRender === 1) return;
        this._renderedDecorations = e, this._renderedCursorPositions = this._cursorPositions, this._domNode.setDisplay("block");
        const n = this._settings.canvasWidth, i = this._settings.canvasHeight, r = this._settings.lineHeight, s = this._context.viewLayout, o = this._context.viewLayout.getScrollHeight(), a = i / o, l = 6 * this._settings.pixelRatio | 0, c = l / 2 | 0, u = this._domNode.domNode.getContext("2d");
        t ? t.isOpaque() ? (u.fillStyle = ls.Format.CSS.formatHexA(t), u.fillRect(0, 0, n, i)) : (u.clearRect(0, 0, n, i), u.fillStyle = ls.Format.CSS.formatHexA(t), u.fillRect(0, 0, n, i)) : u.clearRect(0, 0, n, i);
        const d = this._settings.x, h = this._settings.w;
        for (const p of e){
            const g = p.color, f = p.data;
            u.fillStyle = g;
            let _ = 0, b = 0, y = 0;
            for(let S = 0, k = f.length / 3; S < k; S++){
                const C = f[3 * S], T = f[3 * S + 1], I = f[3 * S + 2];
                let A = s.getVerticalOffsetForLineNumber(T) * a | 0, P = (s.getVerticalOffsetForLineNumber(I) + r) * a | 0;
                if (P - A < l) {
                    let O = (A + P) / 2 | 0;
                    O < c ? O = c : O + c > i && (O = i - c), A = O - c, P = O + c;
                }
                A > y + 1 || C !== _ ? (S !== 0 && u.fillRect(d[_], b, h[_], y - b), _ = C, b = A, y = P) : P > y && (y = P);
            }
            u.fillRect(d[_], b, h[_], y - b);
        }
        if (!this._settings.hideCursor) {
            const p = 2 * this._settings.pixelRatio | 0, g = p / 2 | 0, f = this._settings.x[7], _ = this._settings.w[7];
            let b = -100, y = -100, S = null;
            for(let k = 0, C = this._cursorPositions.length; k < C; k++){
                const T = this._cursorPositions[k].color;
                if (!T) continue;
                const I = this._cursorPositions[k].position;
                let A = s.getVerticalOffsetForLineNumber(I.lineNumber) * a | 0;
                A < g ? A = g : A + g > i && (A = i - g);
                const P = A - g, M = P + p;
                P > y + 1 || T !== S ? (k !== 0 && S && u.fillRect(f, b, _, y - b), b = P, y = M) : M > y && (y = M), S = T, u.fillStyle = T;
            }
            S && u.fillRect(f, b, _, y - b);
        }
        this._settings.renderBorder && this._settings.borderColor && this._settings.overviewRulerLanes > 0 && (u.beginPath(), u.lineWidth = 1, u.strokeStyle = this._settings.borderColor, u.moveTo(0, 0), u.lineTo(0, i), u.moveTo(1, 0), u.lineTo(n, 0), u.stroke());
    }
};

}
