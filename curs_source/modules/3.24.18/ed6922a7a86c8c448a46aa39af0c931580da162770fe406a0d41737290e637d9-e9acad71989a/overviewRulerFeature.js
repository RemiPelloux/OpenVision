import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Hc } from "./autorun.js";
import { tc } from "./colorRegistry.js";
import { Fn, en, zp } from "./dom_2.js";
import { Cgn, RK, Tgn, XXr, YXr, vle } from "./editorColors.js";
import { Tx } from "./fastDomNode.js";
import { qa } from "./observable.js";
import { l6c, rts } from "./overviewZoneManager.js";
import { Yn, ya } from "./position.js";
import { Ds, Xt, cu, kvn, tw, x_, z9 } from "./qIc.js";
import { D_i, Ies } from "./scrollbarState.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
import { Dle } from "./utils_13.js";
var q7;
export { q7 };
var __wakaru_f7c_initialized = false;
export function f7c() {
if (__wakaru_f7c_initialized) return;
__wakaru_f7c_initialized = true;
"use strict";
x(), en(), Tx(), Ies(), Se(), qa(), Dle(), ya(), l6c(), tc(), as(), q7 = class extends we {
    constructor(e, t, n, i, r, s, o){
        super(), this._editors = e, this._rootElement = t, this._diffModel = n, this._rootWidth = i, this._rootHeight = r, this._modifiedEditorLayoutInfo = s, this._themeService = o, this.width = q7.ENTIRE_DIFF_OVERVIEW_WIDTH;
        const a = qp(this._themeService.onDidColorThemeChange, ()=>this._themeService.getColorTheme()), c = Ds((h)=>{
            const p = a.read(h), g = p.getColor(YXr) || (p.getColor(vle) || Cgn).transparent(2), f = p.getColor(XXr) || (p.getColor(RK) || Tgn).transparent(2);
            return {
                insertColor: g,
                removeColor: f
            };
        }), l = x_(document.createElement("div"));
        l.setClassName("diffViewport"), l.setPosition("absolute");
        const u = cu("div.diffOverview", {
            style: {
                position: "absolute",
                top: "0px",
                width: q7.ENTIRE_DIFF_OVERVIEW_WIDTH + "px"
            }
        }).root;
        this._register(kvn(u, l.domNode)), this._register(zp(u, Fn.POINTER_DOWN, (h)=>{
            this._editors.modified.delegateVerticalScrollbarPointerDown(h);
        })), this._register(Xt(u, Fn.MOUSE_WHEEL, (h)=>{
            this._editors.modified.delegateScrollFromMouseWheelEvent(h);
        }, {
            passive: !1
        })), this._register(kvn(this._rootElement, u)), this._register(tw((h, p)=>{
            const g = this._diffModel.read(h), f = this._editors.original.createOverviewRuler("original diffOverviewRuler");
            f && (p.add(f), p.add(kvn(u, f.getDomNode())));
            const v = this._editors.modified.createOverviewRuler("modified diffOverviewRuler");
            if (v && (p.add(v), p.add(kvn(u, v.getDomNode()))), !f || !v) return;
            const b = z9("viewZoneChanged", this._editors.original.onDidChangeViewZones), y = z9("viewZoneChanged", this._editors.modified.onDidChangeViewZones), T = z9("hiddenRangesChanged", this._editors.original.onDidChangeHiddenAreas), E = z9("hiddenRangesChanged", this._editors.modified.onDidChangeHiddenAreas);
            p.add(Hc((A)=>{
                b.read(A), y.read(A), T.read(A), E.read(A);
                const R = c.read(A), D = g?.diff.read(A)?.mappings;
                function P(F, H, $) {
                    const W = $._getViewModel();
                    return W ? F.filter((G)=>G.length > 0).map((G)=>{
                        const q = W.coordinatesConverter.convertModelPositionToViewPosition(new Yn(G.startLineNumber, 1)), z = W.coordinatesConverter.convertModelPositionToViewPosition(new Yn(G.endLineNumberExclusive, 1)), X = z.lineNumber - q.lineNumber;
                        return new rts(q.lineNumber, z.lineNumber, X, H.toString());
                    }) : [];
                }
                const N = P((D || []).map((F)=>F.lineRangeMapping.original), R.removeColor, this._editors.original), O = P((D || []).map((F)=>F.lineRangeMapping.modified), R.insertColor, this._editors.modified);
                f?.setZones(N), v?.setZones(O);
            })), p.add(Hc((A)=>{
                const R = this._rootHeight.read(A), D = this._rootWidth.read(A), P = this._modifiedEditorLayoutInfo.read(A);
                if (P) {
                    const N = q7.ENTIRE_DIFF_OVERVIEW_WIDTH - 2 * q7.ONE_OVERVIEW_WIDTH;
                    f.setLayout({
                        top: 0,
                        height: R,
                        right: N + q7.ONE_OVERVIEW_WIDTH,
                        width: q7.ONE_OVERVIEW_WIDTH
                    }), v.setLayout({
                        top: 0,
                        height: R,
                        right: 0,
                        width: q7.ONE_OVERVIEW_WIDTH
                    });
                    const O = this._editors.modifiedScrollTop.read(A), F = this._editors.modifiedScrollHeight.read(A), H = this._editors.modified.getOption(108), $ = new D_i(H.verticalHasArrows ? H.arrowSize : 0, H.verticalScrollbarSize, 0, P.height, F, O);
                    l.setTop($.getSliderPosition()), l.setHeight($.getSliderSize());
                } else l.setTop(0), l.setHeight(0);
                u.style.height = R + "px", u.style.left = D - q7.ENTIRE_DIFF_OVERVIEW_WIDTH + "px", l.setWidth(q7.ENTIRE_DIFF_OVERVIEW_WIDTH);
            }));
        }));
    }
}, q7.ONE_OVERVIEW_WIDTH = 15, q7.ENTIRE_DIFF_OVERVIEW_WIDTH = q7.ONE_OVERVIEW_WIDTH * 2, q7 = ie([
    C(6, $r)
], q7);

}
