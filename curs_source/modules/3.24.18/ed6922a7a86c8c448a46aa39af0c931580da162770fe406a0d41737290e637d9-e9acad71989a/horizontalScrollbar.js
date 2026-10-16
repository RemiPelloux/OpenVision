import { t9c, xes } from "./abstractScrollbar.js";
import { Pe, _i } from "./codicons.js";
import { ew, rBe } from "./mouseEvent.js";
import { Ees, qpt } from "./scrollbarArrow.js";
import { D_i, Ies } from "./scrollbarState.js";
import { x } from "./tslib.es6.js";
var i9c;
export { i9c };
var __wakaru_Dvg_initialized = false;
export function Dvg() {
if (__wakaru_Dvg_initialized) return;
__wakaru_Dvg_initialized = true;
"use strict";
x(), ew(), t9c(), Ees(), Ies(), _i(), i9c = class extends xes {
    constructor(e, t, n){
        const i = e.getScrollDimensions(), r = e.getCurrentScrollPosition();
        if (super({
            lazyRender: t.lazyRender,
            host: n,
            scrollbarState: new D_i(t.horizontalHasArrows ? t.arrowSize : 0, t.horizontal === 2 ? 0 : t.horizontalScrollbarSize, t.vertical === 2 ? 0 : t.verticalScrollbarSize, i.width, i.scrollWidth, r.scrollLeft),
            visibility: t.horizontal,
            extraScrollbarClassName: "horizontal",
            scrollable: e,
            scrollByPage: t.scrollByPage
        }), t.horizontalHasArrows) {
            const s = (t.arrowSize - qpt) / 2, o = (t.horizontalScrollbarSize - qpt) / 2;
            this._createArrow({
                className: "scra",
                icon: Pe.scrollbarButtonLeft,
                top: o,
                left: s,
                bottom: void 0,
                right: void 0,
                bgWidth: t.arrowSize,
                bgHeight: t.horizontalScrollbarSize,
                onActivate: ()=>this._host.onMouseWheel(new rBe(null, 1, 0))
            }), this._createArrow({
                className: "scra",
                icon: Pe.scrollbarButtonRight,
                top: o,
                left: void 0,
                bottom: void 0,
                right: s,
                bgWidth: t.arrowSize,
                bgHeight: t.horizontalScrollbarSize,
                onActivate: ()=>this._host.onMouseWheel(new rBe(null, -1, 0))
            });
        }
        this._createSlider(Math.floor((t.horizontalScrollbarSize - t.horizontalSliderSize) / 2), 0, void 0, t.horizontalSliderSize);
    }
    _updateSlider(e, t) {
        this.slider.setWidth(e), this.slider.setLeft(t);
    }
    _renderDomNode(e, t) {
        this.domNode.setWidth(e), this.domNode.setHeight(t), this.domNode.setLeft(0), this.domNode.setBottom(0);
    }
    onDidScroll(e) {
        return this._shouldRender = this._onElementScrollSize(e.scrollWidth) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(e.scrollLeft) || this._shouldRender, this._shouldRender = this._onElementSize(e.width) || this._shouldRender, this._shouldRender;
    }
    _pointerDownRelativePosition(e, t) {
        return e;
    }
    _sliderPointerPosition(e) {
        return e.pageX;
    }
    _sliderOrthogonalPointerPosition(e) {
        return e.pageY;
    }
    _updateScrollbarSize(e) {
        this.slider.setHeight(e);
    }
    writeScrollPosition(e, t) {
        e.scrollLeft = t;
    }
    updateOptions(e) {
        this.updateScrollbarSize(e.horizontal === 2 ? 0 : e.horizontalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(e.vertical === 2 ? 0 : e.verticalScrollbarSize), this._visibilityController.setVisibility(e.horizontal), this._scrollByPage = e.scrollByPage;
    }
};

}
