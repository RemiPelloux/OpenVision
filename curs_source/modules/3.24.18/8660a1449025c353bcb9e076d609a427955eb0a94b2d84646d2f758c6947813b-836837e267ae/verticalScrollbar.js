import { RHo, gjd } from "./abstractScrollbar.js";
import { gs, yt } from "./codicons.js";
import { _tt, i2 } from "./mouseEvent.js";
import { AHo, mBt } from "./scrollbarArrow.js";
import { PHo, rCr } from "./scrollbarState.js";
import { E } from "./tslib.es6.js";
var _jd;
export { _jd };
var __wakaru_TMy_initialized = false;
export function TMy() {
if (__wakaru_TMy_initialized) return;
__wakaru_TMy_initialized = true;
"use strict";
E(), i2(), gjd(), AHo(), PHo(), gs(), _jd = class extends RHo {
    constructor(t, e, n){
        const i = t.getScrollDimensions(), r = t.getCurrentScrollPosition();
        if (super({
            lazyRender: e.lazyRender,
            host: n,
            scrollbarState: new rCr(e.verticalHasArrows ? e.arrowSize : 0, e.vertical === 2 ? 0 : e.verticalScrollbarSize, 0, i.height, i.scrollHeight, r.scrollTop),
            visibility: e.vertical,
            extraScrollbarClassName: "vertical",
            scrollable: t,
            scrollByPage: e.scrollByPage
        }), e.verticalHasArrows) {
            const s = (e.arrowSize - mBt) / 2, o = (e.verticalScrollbarSize - mBt) / 2;
            this._createArrow({
                className: "scra",
                icon: yt.scrollbarButtonUp,
                top: s,
                left: o,
                bottom: void 0,
                right: void 0,
                bgWidth: e.verticalScrollbarSize,
                bgHeight: e.arrowSize,
                onActivate: ()=>this._host.onMouseWheel(new _tt(null, 0, 1))
            }), this._createArrow({
                className: "scra",
                icon: yt.scrollbarButtonDown,
                top: void 0,
                left: o,
                bottom: s,
                right: void 0,
                bgWidth: e.verticalScrollbarSize,
                bgHeight: e.arrowSize,
                onActivate: ()=>this._host.onMouseWheel(new _tt(null, 0, -1))
            });
        }
        this._createSlider(0, Math.floor((e.verticalScrollbarSize - e.verticalSliderSize) / 2), e.verticalSliderSize, void 0);
    }
    _updateSlider(t, e) {
        this.slider.setHeight(t), this.slider.setTop(e);
    }
    _renderDomNode(t, e) {
        this.domNode.setWidth(e), this.domNode.setHeight(t), this.domNode.setRight(0), this.domNode.setTop(0);
    }
    onDidScroll(t) {
        return this._shouldRender = this._onElementScrollSize(t.scrollHeight) || this._shouldRender, this._shouldRender = this._onElementScrollPosition(t.scrollTop) || this._shouldRender, this._shouldRender = this._onElementSize(t.height) || this._shouldRender, this._shouldRender;
    }
    _pointerDownRelativePosition(t, e) {
        return e;
    }
    _sliderPointerPosition(t) {
        return t.pageY;
    }
    _sliderOrthogonalPointerPosition(t) {
        return t.pageX;
    }
    _updateScrollbarSize(t) {
        this.slider.setWidth(t);
    }
    writeScrollPosition(t, e) {
        t.scrollTop = e;
    }
    updateOptions(t) {
        this.updateScrollbarSize(t.vertical === 2 ? 0 : t.verticalScrollbarSize), this._scrollbarState.setOppositeScrollbarSize(0), this._visibilityController.setVisibility(t.vertical), this._scrollByPage = t.scrollByPage;
    }
};

}
