import { Di, xa } from "./Iwo.js";
import { Hn, Pr } from "./dom_2.js";
import { i6 } from "./fastDomNode.js";
import { lBt, wfn } from "./globalPointerMoveMonitor.js";
import { AHo, hjd } from "./scrollbarArrow.js";
import { pjd, wMy } from "./scrollbarVisibilityController.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
import { Ew, Ex, li } from "./ze.js";
var mjd, RHo;
export { RHo, mjd };
var __wakaru_gjd_initialized = false;
export function gjd() {
if (__wakaru_gjd_initialized) return;
__wakaru_gjd_initialized = true;
"use strict";
E(), Hn(), i6(), wfn(), AHo(), wMy(), CY(), Di(), mjd = 140, RHo = class extends k4 {
    constructor(t){
        super(), this._lazyRender = t.lazyRender, this._host = t.host, this._scrollable = t.scrollable, this._scrollByPage = t.scrollByPage, this._scrollbarState = t.scrollbarState, this._visibilityController = this._register(new pjd(t.visibility, "visible scrollbar " + t.extraScrollbarClassName, "invisible scrollbar " + t.extraScrollbarClassName)), this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._pointerMoveMonitor = this._register(new lBt), this._shouldRender = !0, this.domNode = Ew(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this._visibilityController.setDomNode(this.domNode), this.domNode.setPosition("absolute"), this._register(li(this.domNode.domNode, Pr.POINTER_DOWN, (e)=>this._domNodePointerDown(e)));
    }
    _createArrow(t) {
        const e = this._register(new hjd(t));
        this.domNode.domNode.appendChild(e.bgDomNode), this.domNode.domNode.appendChild(e.domNode);
    }
    _createSlider(t, e, n, i) {
        this.slider = Ew(document.createElement("div")), this.slider.setClassName("slider"), this.slider.setPosition("absolute"), this.slider.setTop(t), this.slider.setLeft(e), typeof n == "number" && this.slider.setWidth(n), typeof i == "number" && this.slider.setHeight(i), this.slider.setLayerHinting(!0), this.slider.setContain("strict"), this.domNode.domNode.appendChild(this.slider.domNode), this._register(li(this.slider.domNode, Pr.POINTER_DOWN, (r)=>{
            r.button === 0 && (r.preventDefault(), this._sliderPointerDown(r));
        })), this.onclick(this.slider.domNode, (r)=>{
            r.leftButton && r.stopPropagation();
        });
    }
    _onElementSize(t) {
        return this._scrollbarState.setVisibleSize(t) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
    }
    _onElementScrollSize(t) {
        return this._scrollbarState.setScrollSize(t) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
    }
    _onElementScrollPosition(t) {
        return this._scrollbarState.setScrollPosition(t) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
    }
    beginReveal() {
        this._visibilityController.setShouldBeVisible(!0);
    }
    beginHide() {
        this._visibilityController.setShouldBeVisible(!1);
    }
    render() {
        this._shouldRender && (this._shouldRender = !1, this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize()), this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition()));
    }
    _domNodePointerDown(t) {
        t.target === this.domNode.domNode && this._onPointerDown(t);
    }
    delegatePointerDown(t) {
        const e = this.domNode.domNode.getClientRects()[0].top, n = e + this._scrollbarState.getSliderPosition(), i = e + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize(), r = this._sliderPointerPosition(t);
        n <= r && r <= i ? t.button === 0 && (t.preventDefault(), this._sliderPointerDown(t)) : this._onPointerDown(t);
    }
    _onPointerDown(t) {
        let e, n;
        if (t.target === this.domNode.domNode && typeof t.offsetX == "number" && typeof t.offsetY == "number") e = t.offsetX, n = t.offsetY;
        else {
            const r = Ex(this.domNode.domNode);
            e = t.pageX - r.left, n = t.pageY - r.top;
        }
        const i = this._pointerDownRelativePosition(e, n);
        this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(i) : this._scrollbarState.getDesiredScrollPositionFromOffset(i)), t.button === 0 && (t.preventDefault(), this._sliderPointerDown(t));
    }
    _sliderPointerDown(t) {
        if (!t.target || !(t.target instanceof Element)) return;
        const e = this._sliderPointerPosition(t), n = this._sliderOrthogonalPointerPosition(t), i = this._scrollbarState.clone();
        this.slider.toggleClassName("active", !0), this._pointerMoveMonitor.startMonitoring(t.target, t.pointerId, t.buttons, (r)=>{
            const s = this._sliderOrthogonalPointerPosition(r), o = Math.abs(s - n);
            if (xa && o > mjd) {
                this._setDesiredScrollPositionNow(i.getScrollPosition());
                return;
            }
            const l = this._sliderPointerPosition(r) - e;
            this._setDesiredScrollPositionNow(i.getDesiredScrollPositionFromDelta(l));
        }, ()=>{
            this.slider.toggleClassName("active", !1), this._host.onDragEnd();
        }), this._host.onDragStart();
    }
    _setDesiredScrollPositionNow(t) {
        const e = {};
        this.writeScrollPosition(e, t), this._scrollable.setScrollPositionNow(e), this._lazyRender && this.render();
    }
    updateScrollbarSize(t) {
        this._updateScrollbarSize(t), this._scrollbarState.setScrollbarSize(t), this._shouldRender = !0, this._lazyRender || this.render();
    }
    isNeeded() {
        return this._scrollbarState.isNeeded();
    }
};

}
