import { Oo, jn } from "./HVr.js";
import { Fn, en } from "./dom_2.js";
import { Tx } from "./fastDomNode.js";
import { Upt, VOt } from "./globalPointerMoveMonitor.js";
import { Nk, Xt, x_ } from "./qIc.js";
import { Ees, Q5c } from "./scrollbarArrow.js";
import { J5c, Rvg } from "./scrollbarVisibilityController.js";
import { x } from "./tslib.es6.js";
import { RO, pR } from "./widget.js";
var e9c, xes;
export { e9c, xes };
var __wakaru_t9c_initialized = false;
export function t9c() {
if (__wakaru_t9c_initialized) return;
__wakaru_t9c_initialized = true;
"use strict";
x(), en(), Tx(), VOt(), Ees(), Rvg(), RO(), jn(), e9c = 140, xes = class extends pR {
    constructor(e){
        super(), this._lazyRender = e.lazyRender, this._host = e.host, this._scrollable = e.scrollable, this._scrollByPage = e.scrollByPage, this._scrollbarState = e.scrollbarState, this._visibilityController = this._register(new J5c(e.visibility, "visible scrollbar " + e.extraScrollbarClassName, "invisible scrollbar " + e.extraScrollbarClassName)), this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._pointerMoveMonitor = this._register(new Upt), this._shouldRender = !0, this.domNode = x_(document.createElement("div")), this.domNode.setAttribute("role", "presentation"), this.domNode.setAttribute("aria-hidden", "true"), this._visibilityController.setDomNode(this.domNode), this.domNode.setPosition("absolute"), this._register(Xt(this.domNode.domNode, Fn.POINTER_DOWN, (t)=>this._domNodePointerDown(t)));
    }
    _createArrow(e) {
        const t = this._register(new Q5c(e));
        this.domNode.domNode.appendChild(t.bgDomNode), this.domNode.domNode.appendChild(t.domNode);
    }
    _createSlider(e, t, n, i) {
        this.slider = x_(document.createElement("div")), this.slider.setClassName("slider"), this.slider.setPosition("absolute"), this.slider.setTop(e), this.slider.setLeft(t), typeof n == "number" && this.slider.setWidth(n), typeof i == "number" && this.slider.setHeight(i), this.slider.setLayerHinting(!0), this.slider.setContain("strict"), this.domNode.domNode.appendChild(this.slider.domNode), this._register(Xt(this.slider.domNode, Fn.POINTER_DOWN, (r)=>{
            r.button === 0 && (r.preventDefault(), this._sliderPointerDown(r));
        })), this.onclick(this.slider.domNode, (r)=>{
            r.leftButton && r.stopPropagation();
        });
    }
    _onElementSize(e) {
        return this._scrollbarState.setVisibleSize(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
    }
    _onElementScrollSize(e) {
        return this._scrollbarState.setScrollSize(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
    }
    _onElementScrollPosition(e) {
        return this._scrollbarState.setScrollPosition(e) && (this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded()), this._shouldRender = !0, this._lazyRender || this.render()), this._shouldRender;
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
    _domNodePointerDown(e) {
        e.target === this.domNode.domNode && this._onPointerDown(e);
    }
    delegatePointerDown(e) {
        const t = this.domNode.domNode.getClientRects()[0].top, n = t + this._scrollbarState.getSliderPosition(), i = t + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize(), r = this._sliderPointerPosition(e);
        n <= r && r <= i ? e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e)) : this._onPointerDown(e);
    }
    _onPointerDown(e) {
        let t, n;
        if (e.target === this.domNode.domNode && typeof e.offsetX == "number" && typeof e.offsetY == "number") t = e.offsetX, n = e.offsetY;
        else {
            const r = Nk(this.domNode.domNode);
            t = e.pageX - r.left, n = e.pageY - r.top;
        }
        const i = this._pointerDownRelativePosition(t, n);
        this._setDesiredScrollPositionNow(this._scrollByPage ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(i) : this._scrollbarState.getDesiredScrollPositionFromOffset(i)), e.button === 0 && (e.preventDefault(), this._sliderPointerDown(e));
    }
    _sliderPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) return;
        const t = this._sliderPointerPosition(e), n = this._sliderOrthogonalPointerPosition(e), i = this._scrollbarState.clone();
        this.slider.toggleClassName("active", !0), this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (r)=>{
            const s = this._sliderOrthogonalPointerPosition(r), o = Math.abs(s - n);
            if (Oo && o > e9c) {
                this._setDesiredScrollPositionNow(i.getScrollPosition());
                return;
            }
            const c = this._sliderPointerPosition(r) - t;
            this._setDesiredScrollPositionNow(i.getDesiredScrollPositionFromDelta(c));
        }, ()=>{
            this.slider.toggleClassName("active", !1), this._host.onDragEnd();
        }), this._host.onDragStart();
    }
    _setDesiredScrollPositionNow(e) {
        const t = {};
        this.writeScrollPosition(t, e), this._scrollable.setScrollPositionNow(t), this._lazyRender && this.render();
    }
    updateScrollbarSize(e) {
        this._updateScrollbarSize(e), this._scrollbarState.setScrollbarSize(e), this._shouldRender = !0, this._lazyRender || this.render();
    }
    isNeeded() {
        return this._scrollbarState.isNeeded();
    }
};

}
