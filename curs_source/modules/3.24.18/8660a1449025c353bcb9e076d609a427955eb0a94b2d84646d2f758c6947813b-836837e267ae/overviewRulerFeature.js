import { Qe, st } from "./Iwo.js";
import { Jd } from "./autorun.js";
import { Ap } from "./colorRegistry.js";
import { Hn, Pr, n0 } from "./dom_2.js";
import { $bt, H6d, Lwr, Owr, Ptt, W6d } from "./editorColors.js";
import { i6 } from "./fastDomNode.js";
import { Jc } from "./observable.js";
import { cWo, k$d } from "./overviewZoneManager.js";
import { er, jc } from "./position.js";
import { PHo, rCr } from "./scrollbarState.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
import { bwe } from "./utils_13.js";
import { DI, Ew, Jsi, Zo, dW, li, xv } from "./ze.js";
var xY;
export { xY };
var __wakaru_Gqd_initialized = false;
export function Gqd() {
if (__wakaru_Gqd_initialized) return;
__wakaru_Gqd_initialized = true;
"use strict";
E(), Hn(), i6(), PHo(), Qe(), Jc(), bwe(), jc(), k$d(), Ap(), Dl(), xY = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this._editors = t, this._rootElement = e, this._diffModel = n, this._rootWidth = i, this._rootHeight = r, this._modifiedEditorLayoutInfo = s, this._themeService = o, this.width = xY.ENTIRE_DIFF_OVERVIEW_WIDTH;
        const a = Yv(this._themeService.onDidColorThemeChange, ()=>this._themeService.getColorTheme()), l = Zo((d)=>{
            const h = a.read(d), p = h.getColor(H6d) || (h.getColor($bt) || Lwr).transparent(2), g = h.getColor(W6d) || (h.getColor(Ptt) || Owr).transparent(2);
            return {
                insertColor: p,
                removeColor: g
            };
        }), c = Ew(document.createElement("div"));
        c.setClassName("diffViewport"), c.setPosition("absolute");
        const u = xv("div.diffOverview", {
            style: {
                position: "absolute",
                top: "0px",
                width: xY.ENTIRE_DIFF_OVERVIEW_WIDTH + "px"
            }
        }).root;
        this._register(Jsi(u, c.domNode)), this._register(n0(u, Pr.POINTER_DOWN, (d)=>{
            this._editors.modified.delegateVerticalScrollbarPointerDown(d);
        })), this._register(li(u, Pr.MOUSE_WHEEL, (d)=>{
            this._editors.modified.delegateScrollFromMouseWheelEvent(d);
        }, {
            passive: !1
        })), this._register(Jsi(this._rootElement, u)), this._register(DI((d, h)=>{
            const p = this._diffModel.read(d), g = this._editors.original.createOverviewRuler("original diffOverviewRuler");
            g && (h.add(g), h.add(Jsi(u, g.getDomNode())));
            const f = this._editors.modified.createOverviewRuler("modified diffOverviewRuler");
            if (f && (h.add(f), h.add(Jsi(u, f.getDomNode()))), !g || !f) return;
            const _ = dW("viewZoneChanged", this._editors.original.onDidChangeViewZones), b = dW("viewZoneChanged", this._editors.modified.onDidChangeViewZones), y = dW("hiddenRangesChanged", this._editors.original.onDidChangeHiddenAreas), S = dW("hiddenRangesChanged", this._editors.modified.onDidChangeHiddenAreas);
            h.add(Jd((k)=>{
                _.read(k), b.read(k), y.read(k), S.read(k);
                const C = l.read(k), T = p?.diff.read(k)?.mappings;
                function I(M, O, N) {
                    const U = N._getViewModel();
                    return U ? M.filter((j)=>j.length > 0).map((j)=>{
                        const $ = U.coordinatesConverter.convertModelPositionToViewPosition(new er(j.startLineNumber, 1)), H = U.coordinatesConverter.convertModelPositionToViewPosition(new er(j.endLineNumberExclusive, 1)), G = H.lineNumber - $.lineNumber;
                        return new cWo($.lineNumber, H.lineNumber, G, O.toString());
                    }) : [];
                }
                const A = I((T || []).map((M)=>M.lineRangeMapping.original), C.removeColor, this._editors.original), P = I((T || []).map((M)=>M.lineRangeMapping.modified), C.insertColor, this._editors.modified);
                g?.setZones(A), f?.setZones(P);
            })), h.add(Jd((k)=>{
                const C = this._rootHeight.read(k), T = this._rootWidth.read(k), I = this._modifiedEditorLayoutInfo.read(k);
                if (I) {
                    const A = xY.ENTIRE_DIFF_OVERVIEW_WIDTH - 2 * xY.ONE_OVERVIEW_WIDTH;
                    g.setLayout({
                        top: 0,
                        height: C,
                        right: A + xY.ONE_OVERVIEW_WIDTH,
                        width: xY.ONE_OVERVIEW_WIDTH
                    }), f.setLayout({
                        top: 0,
                        height: C,
                        right: 0,
                        width: xY.ONE_OVERVIEW_WIDTH
                    });
                    const P = this._editors.modifiedScrollTop.read(k), M = this._editors.modifiedScrollHeight.read(k), O = this._editors.modified.getOption(108), N = new rCr(O.verticalHasArrows ? O.arrowSize : 0, O.verticalScrollbarSize, 0, I.height, M, P);
                    c.setTop(N.getSliderPosition()), c.setHeight(N.getSliderSize());
                } else c.setTop(0), c.setHeight(0);
                u.style.height = C + "px", u.style.left = T - xY.ENTIRE_DIFF_OVERVIEW_WIDTH + "px", c.setWidth(xY.ENTIRE_DIFF_OVERVIEW_WIDTH);
            }));
        }));
    }
}, xY.ONE_OVERVIEW_WIDTH = 15, xY.ENTIRE_DIFF_OVERVIEW_WIDTH = xY.ONE_OVERVIEW_WIDTH * 2, xY = Re([
    F(6, Ml)
], xY);

}
