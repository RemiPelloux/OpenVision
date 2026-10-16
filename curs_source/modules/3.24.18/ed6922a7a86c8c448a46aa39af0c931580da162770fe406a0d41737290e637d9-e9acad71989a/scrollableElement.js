import { Ai, Se, bt, cn, jn, ve } from "./HVr.js";
import { bn, wE } from "./async.js";
import { bht, n_ } from "./browser_2.js";
import { Fn, Gb, en, xi } from "./dom_2.js";
import { Tx } from "./fastDomNode.js";
import { Dvg, i9c } from "./horizontalScrollbar.js";
import { ew, rBe } from "./mouseEvent.js";
import { Lvg, Xt, lJ, x_ } from "./qIc.js";
import { e6, mwe } from "./scrollable.js";
import { Pvg } from "./scrollbars.css";
import { x } from "./tslib.es6.js";
import { Mvg, r9c } from "./verticalScrollbar.js";
import { RO, pR } from "./widget.js";
var s9c, Aes, Res, o9c, M_i, KOt, Yfn, P_i, YOt, a9c, DO;
export { Aes, DO, KOt, M_i, P_i, Res, YOt, Yfn, a9c, o9c, s9c };
var __wakaru_mA_initialized = false;
export function mA() {
if (__wakaru_mA_initialized) return;
__wakaru_mA_initialized = true;
"use strict";
x(), n_(), en(), Tx(), ew(), Dvg(), Mvg(), RO(), bn(), bt(), Se(), jn(), e6(), Pvg(), s9c = 500, Aes = 50, Res = !0, o9c = class {
    constructor(e, t, n){
        this.timestamp = e, this.deltaX = t, this.deltaY = n, this.score = 0;
    }
}, M_i = class {
    constructor(){
        this._capacity = 5, this._memory = [], this._front = -1, this._rear = -1;
    }
    isPhysicalMouseWheel() {
        if (this._front === -1 && this._rear === -1) return !1;
        let t = 1, n = 0, i = 1, r = this._rear;
        do {
            const s = r === this._front ? t : Math.pow(2, -i);
            if (t -= s, n += this._memory[r].score * s, r === this._front) break;
            r = (this._capacity + r - 1) % this._capacity, i++;
        }while (!0)
        return n <= .5;
    }
    acceptStandardWheelEvent(t) {
        if (bht) {
            const n = xi(t.browserEvent), i = lJ(n);
            this.accept(Date.now(), t.deltaX * i, t.deltaY * i);
        } else this.accept(Date.now(), t.deltaX, t.deltaY);
    }
    accept(t, n, i) {
        let r = null;
        const s = new o9c(t, n, i);
        this._front === -1 && this._rear === -1 ? (this._memory[0] = s, this._front = 0, this._rear = 0) : (r = this._memory[this._rear], this._rear = (this._rear + 1) % this._capacity, this._rear === this._front && (this._front = (this._front + 1) % this._capacity), this._memory[this._rear] = s), s.score = this._computeScore(s, r);
    }
    _computeScore(t, n) {
        if (Math.abs(t.deltaX) > 0 && Math.abs(t.deltaY) > 0) return 1;
        let i = .5;
        if ((!this._isAlmostInt(t.deltaX) || !this._isAlmostInt(t.deltaY)) && (i += .25), n) {
            const r = Math.abs(t.deltaX), s = Math.abs(t.deltaY), o = Math.abs(n.deltaX), a = Math.abs(n.deltaY), c = Math.max(Math.min(r, o), 1), l = Math.max(Math.min(s, a), 1), u = Math.max(r, o), h = Math.max(s, a);
            u % c === 0 && h % l === 0 && (i -= .5);
        }
        return Math.min(Math.max(i, 0), 1);
    }
    _isAlmostInt(t) {
        return Math.abs(Math.round(t) - t) < .01;
    }
}, M_i.INSTANCE = new M_i, KOt = M_i, Yfn = class extends pR {
    constructor(e, t, n){
        super(), this._mouseWheelListener = this._register(new cn), this._onScroll = this._register(new ve), this.onScroll = this._onScroll.event, this._onWillScroll = this._register(new ve), this.onWillScroll = this._onWillScroll.event, e.style.overflow = "hidden", this._options = Lvg(t), this._scrollable = n, this._register(this._scrollable.onScroll((s)=>{
            this._onWillScroll.fire(s), this._onDidScroll(s), this._onScroll.fire(s);
        }));
        const i = {
            onMouseWheel: (s)=>this._onMouseWheel(s),
            onDragStart: ()=>this._onDragStart(),
            onDragEnd: ()=>this._onDragEnd()
        };
        this._verticalScrollbar = this._register(new r9c(this._scrollable, this._options, i)), this._horizontalScrollbar = this._register(new i9c(this._scrollable, this._options, i)), this._domNode = document.createElement("div"), this._domNode.className = "monaco-scrollable-element " + this._options.className, this._domNode.setAttribute("role", "presentation"), this._domNode.style.position = "relative";
        const r = t.horizontal && t.vertical ? "both" : t.horizontal ? "horizontal" : "vertical";
        r === "both" ? this._domNode.style.overflow = "hidden" : r === "horizontal" ? this._domNode.style.overflowX = "hidden" : this._domNode.style.overflowY = "hidden", this._domNode.appendChild(e), this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode), this._domNode.appendChild(this._verticalScrollbar.domNode.domNode), this._options.useShadows ? (this._leftShadowDomNode = x_(document.createElement("div")), this._leftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._leftShadowDomNode.domNode), this._topShadowDomNode = x_(document.createElement("div")), this._topShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topShadowDomNode.domNode), this._topLeftShadowDomNode = x_(document.createElement("div")), this._topLeftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topLeftShadowDomNode.domNode)) : (this._leftShadowDomNode = null, this._topShadowDomNode = null, this._topLeftShadowDomNode = null), this._listenOnDomNode = this._options.listenOnDomNode || this._domNode, this._setListeningToMouseWheel(this._options.handleMouseWheel), this.onmouseover(this._listenOnDomNode, (s)=>this._onMouseOver(s)), this.onmouseleave(this._listenOnDomNode, (s)=>this._onMouseLeave(s)), this._hideTimeout = this._register(new wE), this._isDragging = !1, this._mouseIsOver = !1, this._shouldRender = !0, this._revealOnScroll = !0;
    }
    get options() {
        return this._options;
    }
    getDomNode() {
        return this._domNode;
    }
    getOverviewRulerLayoutInfo() {
        return {
            parent: this._domNode,
            insertBefore: this._verticalScrollbar.domNode.domNode
        };
    }
    delegateVerticalScrollbarPointerDown(e) {
        this._verticalScrollbar.delegatePointerDown(e);
    }
    getScrollDimensions() {
        return this._scrollable.getScrollDimensions();
    }
    setScrollDimensions(e) {
        this._scrollable.setScrollDimensions(e, !1);
    }
    updateClassName(e) {
        this._options.className = e, Ai && (this._options.className += " mac"), this._domNode.className = "monaco-scrollable-element " + this._options.className;
    }
    updateOptions(e) {
        typeof e.handleMouseWheel < "u" && (this._options.handleMouseWheel = e.handleMouseWheel, this._setListeningToMouseWheel(this._options.handleMouseWheel)), typeof e.ignoreVerticalScrolling < "u" && (this._options.ignoreVerticalScrolling = e.ignoreVerticalScrolling), typeof e.mouseWheelScrollSensitivity < "u" && (this._options.mouseWheelScrollSensitivity = e.mouseWheelScrollSensitivity), typeof e.fastScrollSensitivity < "u" && (this._options.fastScrollSensitivity = e.fastScrollSensitivity), typeof e.scrollPredominantAxis < "u" && (this._options.scrollPredominantAxis = e.scrollPredominantAxis), typeof e.horizontal < "u" && (this._options.horizontal = e.horizontal), typeof e.vertical < "u" && (this._options.vertical = e.vertical), typeof e.horizontalScrollbarSize < "u" && (this._options.horizontalScrollbarSize = e.horizontalScrollbarSize), typeof e.verticalScrollbarSize < "u" && (this._options.verticalScrollbarSize = e.verticalScrollbarSize), typeof e.scrollByPage < "u" && (this._options.scrollByPage = e.scrollByPage), this._horizontalScrollbar.updateOptions(this._options), this._verticalScrollbar.updateOptions(this._options), this._options.lazyRender || this._render();
    }
    setRevealOnScroll(e) {
        this._revealOnScroll = e;
    }
    delegateScrollFromMouseWheelEvent(e) {
        this._onMouseWheel(new rBe(e));
    }
    _setListeningToMouseWheel(e) {
        if (this._mouseWheelListener.value !== void 0 !== e) if (e) {
            const n = (i)=>{
                this._onMouseWheel(new rBe(i));
            };
            this._mouseWheelListener.value = Xt(this._listenOnDomNode, Fn.MOUSE_WHEEL, n, {
                passive: !1
            });
        } else this._mouseWheelListener.clear();
    }
    _onMouseWheel(e) {
        if (e.browserEvent?.defaultPrevented) return;
        const t = KOt.INSTANCE;
        Res && t.acceptStandardWheelEvent(e);
        let n = !1;
        if (e.deltaY || e.deltaX) {
            let r = e.deltaY * this._options.mouseWheelScrollSensitivity, s = e.deltaX * this._options.mouseWheelScrollSensitivity;
            this._options.scrollPredominantAxis && (this._options.scrollYToX && s + r === 0 ? s = r = 0 : Math.abs(r) >= Math.abs(s) ? s = 0 : r = 0), this._options.ignoreVerticalScrolling === !0 && (r = 0), this._options.flipAxes && ([r, s] = [
                s,
                r
            ]);
            const o = !Ai && e.browserEvent && e.browserEvent.shiftKey;
            (this._options.scrollYToX || o) && !s && (s = r, r = 0), e.browserEvent && e.browserEvent.altKey && (s = s * this._options.fastScrollSensitivity, r = r * this._options.fastScrollSensitivity);
            const a = this._scrollable.getFutureScrollPosition();
            let c = {};
            if (r) {
                const l = Aes * r, u = a.scrollTop - (l < 0 ? Math.floor(l) : Math.ceil(l));
                this._verticalScrollbar.writeScrollPosition(c, u);
            }
            if (s) {
                const l = Aes * s, u = a.scrollLeft - (l < 0 ? Math.floor(l) : Math.ceil(l));
                this._horizontalScrollbar.writeScrollPosition(c, u);
            }
            c = this._scrollable.validateScrollPosition(c), (a.scrollLeft !== c.scrollLeft || a.scrollTop !== c.scrollTop) && (Res && this._options.mouseWheelSmoothScroll && t.isPhysicalMouseWheel() ? this._scrollable.setScrollPositionSmooth(c) : this._scrollable.setScrollPositionNow(c), n = !0);
        }
        let i = n;
        !i && this._options.alwaysConsumeMouseWheel && (i = !0), !i && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded()) && (i = !0), i && (e.preventDefault(), e.stopPropagation());
    }
    _onDidScroll(e) {
        this._shouldRender = this._horizontalScrollbar.onDidScroll(e) || this._shouldRender, this._shouldRender = this._verticalScrollbar.onDidScroll(e) || this._shouldRender, this._options.useShadows && (this._shouldRender = !0), this._revealOnScroll && this._reveal(), this._options.lazyRender || this._render();
    }
    renderNow() {
        if (!this._options.lazyRender) throw new Error("Please use `lazyRender` together with `renderNow`!");
        this._render();
    }
    _render() {
        if (this._shouldRender && (this._shouldRender = !1, this._horizontalScrollbar.render(), this._verticalScrollbar.render(), this._options.useShadows)) {
            const e = this._scrollable.getCurrentScrollPosition(), t = e.scrollTop > 0, n = e.scrollLeft > 0, i = n ? " left" : "", r = t ? " top" : "", s = n || t ? " top-left-corner" : "";
            this._leftShadowDomNode.setClassName(`shadow${i}`), this._topShadowDomNode.setClassName(`shadow${r}`), this._topLeftShadowDomNode.setClassName(`shadow${s}${r}${i}`);
        }
    }
    _onDragStart() {
        this._isDragging = !0, this._reveal();
    }
    _onDragEnd() {
        this._isDragging = !1, this._hide();
    }
    _onMouseLeave(e) {
        this._mouseIsOver = !1, this._hide();
    }
    _onMouseOver(e) {
        this._mouseIsOver = !0, this._reveal();
    }
    _reveal() {
        this._verticalScrollbar.beginReveal(), this._horizontalScrollbar.beginReveal(), this._scheduleHide();
    }
    _hide() {
        !this._mouseIsOver && !this._isDragging && (this._verticalScrollbar.beginHide(), this._horizontalScrollbar.beginHide());
    }
    _scheduleHide() {
        !this._mouseIsOver && !this._isDragging && this._hideTimeout.cancelAndSet(()=>this._hide(), s9c);
    }
}, P_i = class extends Yfn {
    constructor(e, t){
        t = t || {}, t.mouseWheelSmoothScroll = !1;
        const n = new mwe({
            forceIntegerValues: !0,
            smoothScrollDuration: 0,
            scheduleAtNextAnimationFrame: (i)=>Gb(xi(e), i)
        });
        super(e, t, n), this._register(n);
    }
    setScrollPosition(e) {
        this._scrollable.setScrollPositionNow(e);
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
}, YOt = class extends Yfn {
    constructor(e, t, n){
        super(e, t, n);
    }
    setScrollPosition(e) {
        e.reuseAnimation ? this._scrollable.setScrollPositionSmooth(e, e.reuseAnimation) : this._scrollable.setScrollPositionNow(e);
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
}, a9c = class extends Yfn {
    constructor(e, t, n){
        super(e, t, n);
    }
}, DO = class extends Yfn {
    constructor(e, t){
        t = t || {}, t.mouseWheelSmoothScroll = !1;
        const n = new mwe({
            forceIntegerValues: !1,
            smoothScrollDuration: 0,
            scheduleAtNextAnimationFrame: (i)=>Gb(xi(e), i)
        });
        super(e, t, n), this._register(n), this._element = e, this._register(this.onScroll((i)=>{
            i.scrollTopChanged && (this._element.scrollTop = i.scrollTop), i.scrollLeftChanged && (this._element.scrollLeft = i.scrollLeft);
        })), this.scanDomNode();
    }
    setScrollPosition(e) {
        this._scrollable.setScrollPositionNow(e);
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
    scanDomNode() {
        this.setScrollDimensions({
            width: this._element.clientWidth,
            scrollWidth: this._element.scrollWidth,
            height: this._element.clientHeight,
            scrollHeight: this._element.scrollHeight
        }), this.setScrollPosition({
            scrollLeft: this._element.scrollLeft,
            scrollTop: this._element.scrollTop
        });
    }
};

}
