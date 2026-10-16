import { RHo, gjd } from "./abstractScrollbar.js";
import { gs, yt } from "./codicons.js";
import { _tt, i2 } from "./mouseEvent.js";
import { AHo, mBt } from "./scrollbarArrow.js";
import { PHo, rCr } from "./scrollbarState.js";
import { E } from "./tslib.es6.js";
var vjd;
export { vjd };
var __wakaru_CMy_initialized = false;
export function CMy() {
if (__wakaru_CMy_initialized) return;
__wakaru_CMy_initialized = true;
"use strict";
E(), i2(), gjd(), AHo(), PHo(), gs(), vjd = class extends RHo {
    constructor(t, e, n){
        const i = t.getScrollDimensions(), r = t.getCurrentScrollPosition();
        if (super({
            lazyRender: e.lazyRender,
            host: n,
            scrollbarState: new rCr(e.horizontalHasArrows ? e.arrowSize : 0, e.horizontal === 2 ? 0 : e.horizontalScrollbarSize, e.vertical === 2 ? 0 : e.verticalScrollbarSize, i.width, i.scrollWidth, r.scrollLeft),
            visibility: e.horizontal,
            extraScrollbarClassName: "horizontal",
            scrollable: t,
            scrollByPage: e.scrollByPage
        }), e.horizontalHasArrows) {
            const s = (e.arrowSize - mBt) / 2, o = (e.horizontalScrollbarSize - mBt) / 2;
            this._createArrow({
                className: "scra",
                icon: yt.scrollbarButtonLeft,
                top: o,
                left: s,
                bottom: void 0,
                right: void 0,
                bgWidth: e.arrowSize,
                bgHeight: e.horizontalScrollbarSize,
                onActivate: ()=>this._host.onMouseWheel(new _tt(null, 1, 0))
            }), this._createArrow({
                className: "scra",
                icon: yt.scrollbarButtonRight,
                top: o,
                left: void 0,
                bottom: void 0,
                right: s,
                bgWidth: e.arrowSize,
                bgHeight: e.horizontalScrollbarSize,
                onActivate: ()=>this._host.onMouseWheel(new _tt(null, -1, 0))
            });
        }
        this._createSlider(Math.floor((e.horizontalScrollbarSize - e.horizontalSliderSize) / 2), 0, void 0, e.horizontalSliderSize);
    }
    _updateSlider(t, e) {
        this.slider.setWidth(t), this.slider.setLeft(e);
    }
    _renderDomNode(t, e) {
        this.domNode.setWidth(t), this.domNode.setHeight(e), this.domNode.setLeft(0), this.domNode.setBottom(0);
    }
    onDidScroll(t) {
        return this._shouldRender = this._onElementScrollSize(t.scrollWidth) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(t.scrollLeft) || this._shouldRender, this._shouldRender = this._onElementSize(t.width) || this._shouldRender, this._shouldRender;
    }
    _pointerDownRelativePosition(t, e) {
        return t;
    }
    _sliderPointerPosition(t) {
        return t.pageX;
    }
    _sliderOrthogonalPointerPosition(t) {
        return t.pageY;
    }
    _updateScrollbarSize(t) {
        this.slider.setHeight(t);
    }
    writeScrollPosition(t, e) {
        t.scrollLeft = e;
    }
    updateOptions(t) {
        this.updateScrollbarSize(t.horizontal === 2 ? 0 : t.horizontalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(t.vertical === 2 ? 0 : t.verticalScrollbarSize), this._visibilityController.setVisibility(t.horizontal), this._scrollByPage = t.scrollByPage;
    }
};

}
