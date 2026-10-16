import { Hn } from "./dom_2.js";
import { i6 } from "./fastDomNode.js";
import { E7, Tsi } from "./scrollableElement.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { AQ, YAe, pz } from "./viewPart.js";
import { Ew, li, wri } from "./ze.js";
var zjd;
export { zjd };
var __wakaru_UMy_initialized = false;
export function UMy() {
if (__wakaru_UMy_initialized) return;
__wakaru_UMy_initialized = true;
"use strict";
E(), Hn(), i6(), E7(), pz(), Dl(), zjd = class extends AQ {
    constructor(t, e, n, i){
        super(t);
        const r = this._context.configuration.options, s = r.get(108), o = r.get(76), a = r.get(42), l = r.get(111), c = {
            listenOnDomNode: n.domNode,
            className: "editor-scrollable " + wri(t.theme.type),
            useShadows: !1,
            lazyRender: !0,
            vertical: s.vertical,
            horizontal: s.horizontal,
            verticalHasArrows: s.verticalHasArrows,
            horizontalHasArrows: s.horizontalHasArrows,
            verticalScrollbarSize: s.verticalScrollbarSize,
            verticalSliderSize: s.verticalSliderSize,
            horizontalScrollbarSize: s.horizontalScrollbarSize,
            horizontalSliderSize: s.horizontalSliderSize,
            handleMouseWheel: s.handleMouseWheel,
            ignoreVerticalScrolling: s.ignoreVerticalScrolling,
            alwaysConsumeMouseWheel: s.alwaysConsumeMouseWheel,
            arrowSize: s.arrowSize,
            mouseWheelScrollSensitivity: o,
            fastScrollSensitivity: a,
            scrollPredominantAxis: l,
            scrollByPage: s.scrollByPage
        };
        this.scrollbar = this._register(new Tsi(e.domNode, c, this._context.viewLayout.getScrollable())), YAe.write(this.scrollbar.getDomNode(), 6), this.scrollbarDomNode = Ew(this.scrollbar.getDomNode()), this.scrollbarDomNode.setPosition("absolute"), this._setLayout();
        const u = (d, h, p)=>{
            const g = {};
            if (h) {
                const f = d.scrollTop;
                f && (g.scrollTop = this._context.viewLayout.getCurrentScrollTop() + f, d.scrollTop = 0);
            }
            if (p) {
                const f = d.scrollLeft;
                f && (g.scrollLeft = this._context.viewLayout.getCurrentScrollLeft() + f, d.scrollLeft = 0);
            }
            this._context.viewModel.viewLayout.setScrollPosition(g, 1);
        };
        this._register(li(n.domNode, "scroll", (d)=>u(n.domNode, !0, !0))), this._register(li(e.domNode, "scroll", (d)=>u(e.domNode, !0, !1))), this._register(li(i.domNode, "scroll", (d)=>u(i.domNode, !0, !1))), this._register(li(this.scrollbarDomNode.domNode, "scroll", (d)=>u(this.scrollbarDomNode.domNode, !0, !1)));
    }
    dispose() {
        super.dispose();
    }
    _setLayout() {
        const t = this._context.configuration.options, e = t.get(151);
        this.scrollbarDomNode.setLeft(e.contentLeft), t.get(74).side === "right" ? this.scrollbarDomNode.setWidth(e.contentWidth + e.minimap.minimapWidth) : this.scrollbarDomNode.setWidth(e.contentWidth), this.scrollbarDomNode.setHeight(e.height);
    }
    getOverviewRulerLayoutInfo() {
        return this.scrollbar.getOverviewRulerLayoutInfo();
    }
    getDomNode() {
        return this.scrollbarDomNode;
    }
    delegateVerticalScrollbarPointerDown(t) {
        this.scrollbar.delegateVerticalScrollbarPointerDown(t);
    }
    delegateScrollFromMouseWheelEvent(t) {
        this.scrollbar.delegateScrollFromMouseWheelEvent(t);
    }
    onConfigurationChanged(t) {
        if (t.hasChanged(108) || t.hasChanged(76) || t.hasChanged(42)) {
            const e = this._context.configuration.options, n = e.get(108), i = e.get(76), r = e.get(42), s = e.get(111), o = {
                vertical: n.vertical,
                horizontal: n.horizontal,
                verticalScrollbarSize: n.verticalScrollbarSize,
                horizontalScrollbarSize: n.horizontalScrollbarSize,
                scrollByPage: n.scrollByPage,
                handleMouseWheel: n.handleMouseWheel,
                mouseWheelScrollSensitivity: i,
                fastScrollSensitivity: r,
                scrollPredominantAxis: s
            };
            this.scrollbar.updateOptions(o);
        }
        return t.hasChanged(151) && this._setLayout(), !0;
    }
    onScrollChanged(t) {
        return !0;
    }
    onThemeChanged(t) {
        return this.scrollbar.updateClassName("editor-scrollable " + wri(this._context.theme.type)), !0;
    }
    prepareRender(t) {}
    render(t) {
        this.scrollbar.renderNow();
    }
};

}
