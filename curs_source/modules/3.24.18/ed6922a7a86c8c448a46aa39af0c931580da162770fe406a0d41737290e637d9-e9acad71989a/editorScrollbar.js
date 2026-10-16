import { en } from "./dom_2.js";
import { Tx } from "./fastDomNode.js";
import { Lgn, Xt, x_ } from "./qIc.js";
import { YOt, mA } from "./scrollableElement.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { aU, jge, mW } from "./viewPart.js";
var M9c;
export { M9c };
var __wakaru_qvg_initialized = false;
export function qvg() {
if (__wakaru_qvg_initialized) return;
__wakaru_qvg_initialized = true;
"use strict";
x(), en(), Tx(), mA(), aU(), as(), M9c = class extends mW {
    constructor(e, t, n, i){
        super(e);
        const r = this._context.configuration.options, s = r.get(108), o = r.get(76), a = r.get(42), c = r.get(111), l = {
            listenOnDomNode: n.domNode,
            className: "editor-scrollable " + Lgn(e.theme.type),
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
            scrollPredominantAxis: c,
            scrollByPage: s.scrollByPage
        };
        this.scrollbar = this._register(new YOt(t.domNode, l, this._context.viewLayout.getScrollable())), jge.write(this.scrollbar.getDomNode(), 6), this.scrollbarDomNode = x_(this.scrollbar.getDomNode()), this.scrollbarDomNode.setPosition("absolute"), this._setLayout();
        const u = (h, p, g)=>{
            const f = {};
            if (p) {
                const v = h.scrollTop;
                v && (f.scrollTop = this._context.viewLayout.getCurrentScrollTop() + v, h.scrollTop = 0);
            }
            if (g) {
                const v = h.scrollLeft;
                v && (f.scrollLeft = this._context.viewLayout.getCurrentScrollLeft() + v, h.scrollLeft = 0);
            }
            this._context.viewModel.viewLayout.setScrollPosition(f, 1);
        };
        this._register(Xt(n.domNode, "scroll", (h)=>u(n.domNode, !0, !0))), this._register(Xt(t.domNode, "scroll", (h)=>u(t.domNode, !0, !1))), this._register(Xt(i.domNode, "scroll", (h)=>u(i.domNode, !0, !1))), this._register(Xt(this.scrollbarDomNode.domNode, "scroll", (h)=>u(this.scrollbarDomNode.domNode, !0, !1)));
    }
    dispose() {
        super.dispose();
    }
    _setLayout() {
        const e = this._context.configuration.options, t = e.get(151);
        this.scrollbarDomNode.setLeft(t.contentLeft), e.get(74).side === "right" ? this.scrollbarDomNode.setWidth(t.contentWidth + t.minimap.minimapWidth) : this.scrollbarDomNode.setWidth(t.contentWidth), this.scrollbarDomNode.setHeight(t.height);
    }
    getOverviewRulerLayoutInfo() {
        return this.scrollbar.getOverviewRulerLayoutInfo();
    }
    getDomNode() {
        return this.scrollbarDomNode;
    }
    delegateVerticalScrollbarPointerDown(e) {
        this.scrollbar.delegateVerticalScrollbarPointerDown(e);
    }
    delegateScrollFromMouseWheelEvent(e) {
        this.scrollbar.delegateScrollFromMouseWheelEvent(e);
    }
    onConfigurationChanged(e) {
        if (e.hasChanged(108) || e.hasChanged(76) || e.hasChanged(42)) {
            const t = this._context.configuration.options, n = t.get(108), i = t.get(76), r = t.get(42), s = t.get(111), o = {
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
        return e.hasChanged(151) && this._setLayout(), !0;
    }
    onScrollChanged(e) {
        return !0;
    }
    onThemeChanged(e) {
        return this.scrollbar.updateClassName("editor-scrollable " + Lgn(this._context.theme.type)), !0;
    }
    prepareRender(e) {}
    render(e) {
        this.scrollbar.renderNow();
    }
};

}
