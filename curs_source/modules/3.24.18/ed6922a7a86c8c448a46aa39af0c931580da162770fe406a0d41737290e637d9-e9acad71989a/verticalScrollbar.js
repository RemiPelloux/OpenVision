import { t9c, xes } from "./abstractScrollbar.js";
import { Pe, _i } from "./codicons.js";
import { ew, rBe } from "./mouseEvent.js";
import { Ees, qpt } from "./scrollbarArrow.js";
import { D_i, Ies } from "./scrollbarState.js";
import { x } from "./tslib.es6.js";
var r9c;
export { r9c };
var __wakaru_Mvg_initialized = false;
export function Mvg() {
if (__wakaru_Mvg_initialized) return;
__wakaru_Mvg_initialized = true;
"use strict";
x(), ew(), t9c(), Ees(), Ies(), _i(), r9c = class extends xes {
    constructor(e, t, n){
        const i = e.getScrollDimensions(), r = e.getCurrentScrollPosition();
        if (super({
            lazyRender: t.lazyRender,
            host: n,
            scrollbarState: new D_i(t.verticalHasArrows ? t.arrowSize : 0, t.vertical === 2 ? 0 : t.verticalScrollbarSize, 0, i.height, i.scrollHeight, r.scrollTop),
            visibility: t.vertical,
            extraScrollbarClassName: "vertical",
            scrollable: e,
            scrollByPage: t.scrollByPage
        }), t.verticalHasArrows) {
            const s = (t.arrowSize - qpt) / 2, o = (t.verticalScrollbarSize - qpt) / 2;
            this._createArrow({
                className: "scra",
                icon: Pe.scrollbarButtonUp,
                top: s,
                left: o,
                bottom: void 0,
                right: void 0,
                bgWidth: t.verticalScrollbarSize,
                bgHeight: t.arrowSize,
                onActivate: ()=>this._host.onMouseWheel(new rBe(null, 0, 1))
            }), this._createArrow({
                className: "scra",
                icon: Pe.scrollbarButtonDown,
                top: void 0,
                left: o,
                bottom: s,
                right: void 0,
                bgWidth: t.verticalScrollbarSize,
                bgHeight: t.arrowSize,
                onActivate: ()=>this._host.onMouseWheel(new rBe(null, 0, -1))
            });
        }
        this._createSlider(0, Math.floor((t.verticalScrollbarSize - t.verticalSliderSize) / 2), t.verticalSliderSize, void 0);
    }
    _updateSlider(e, t) {
        this.slider.setHeight(e), this.slider.setTop(t);
    }
    _renderDomNode(e, t) {
        this.domNode.setWidth(t), this.domNode.setHeight(e), this.domNode.setRight(0), this.domNode.setTop(0);
    }
    onDidScroll(e) {
        return this._shouldRender = this._onElementScrollSize(e.scrollHeight) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(e.scrollTop) || this._shouldRender, this._shouldRender = this._onElementSize(e.height) || this._shouldRender, this._shouldRender;
    }
    _pointerDownRelativePosition(e, t) {
        return t;
    }
    _sliderPointerPosition(e) {
        return e.pageY;
    }
    _sliderOrthogonalPointerPosition(e) {
        return e.pageX;
    }
    _updateScrollbarSize(e) {
        this.slider.setWidth(e);
    }
    writeScrollPosition(e, t) {
        e.scrollTop = t;
    }
    updateOptions(e) {
        this.updateScrollbarSize(e.vertical === 2 ? 0 : e.verticalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(0), this._visibilityController.setVisibility(e.vertical), this._scrollByPage = e.scrollByPage;
    }
};

}
