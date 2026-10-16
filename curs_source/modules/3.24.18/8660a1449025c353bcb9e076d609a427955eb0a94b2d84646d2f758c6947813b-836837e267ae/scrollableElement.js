import { Di, Gt, Qe, Vn, _r, tt } from "./Iwo.js";
import { ZE, qn } from "./async.js";
import { A_, ybt } from "./browser_2.js";
import { Hn, Ix, Pr, ws } from "./dom_2.js";
import { i6 } from "./fastDomNode.js";
import { CMy, vjd } from "./horizontalScrollbar.js";
import { _tt, i2 } from "./mouseEvent.js";
import { coe, rHe } from "./scrollable.js";
import { EMy } from "./scrollbars.css";
import { E } from "./tslib.es6.js";
import { TMy, _jd } from "./verticalScrollbar.js";
import { CY, k4 } from "./widget.js";
import { Ew, IMy, li, v7 } from "./ze.js";
var bjd, MHo, DHo, yjd, sCr, Ifn, Csi, oCr, Tsi, Sjd, mwe;
export { Csi, DHo, Ifn, MHo, Sjd, Tsi, bjd, mwe, oCr, sCr, yjd };
var __wakaru_E7_initialized = false;
export function E7() {
if (__wakaru_E7_initialized) return;
__wakaru_E7_initialized = true;
"use strict";
E(), A_(), Hn(), i6(), i2(), CMy(), TMy(), CY(), qn(), Gt(), Qe(), Di(), coe(), EMy(), bjd = 500, MHo = 50, DHo = !0, yjd = class {
    constructor(t, e, n){
        this.timestamp = t, this.deltaX = e, this.deltaY = n, this.score = 0;
    }
}, sCr = class {
    constructor(){
        this._capacity = 5, this._memory = [], this._front = -1, this._rear = -1;
    }
    isPhysicalMouseWheel() {
        if (this._front === -1 && this._rear === -1) return !1;
        let e = 1, n = 0, i = 1, r = this._rear;
        do {
            const s = r === this._front ? e : Math.pow(2, -i);
            if (e -= s, n += this._memory[r].score * s, r === this._front) break;
            r = (this._capacity + r - 1) % this._capacity, i++;
        }while (!0)
        return n <= .5;
    }
    acceptStandardWheelEvent(e) {
        if (ybt) {
            const n = ws(e.browserEvent), i = v7(n);
            this.accept(Date.now(), e.deltaX * i, e.deltaY * i);
        } else this.accept(Date.now(), e.deltaX, e.deltaY);
    }
    accept(e, n, i) {
        let r = null;
        const s = new yjd(e, n, i);
        this._front === -1 && this._rear === -1 ? (this._memory[0] = s, this._front = 0, this._rear = 0) : (r = this._memory[this._rear], this._rear = (this._rear + 1) % this._capacity, this._rear === this._front && (this._front = (this._front + 1) % this._capacity), this._memory[this._rear] = s), s.score = this._computeScore(s, r);
    }
    _computeScore(e, n) {
        if (Math.abs(e.deltaX) > 0 && Math.abs(e.deltaY) > 0) return 1;
        let i = .5;
        if ((!this._isAlmostInt(e.deltaX) || !this._isAlmostInt(e.deltaY)) && (i += .25), n) {
            const r = Math.abs(e.deltaX), s = Math.abs(e.deltaY), o = Math.abs(n.deltaX), a = Math.abs(n.deltaY), l = Math.max(Math.min(r, o), 1), c = Math.max(Math.min(s, a), 1), u = Math.max(r, o), d = Math.max(s, a);
            u % l === 0 && d % c === 0 && (i -= .5);
        }
        return Math.min(Math.max(i, 0), 1);
    }
    _isAlmostInt(e) {
        return Math.abs(Math.round(e) - e) < .01;
    }
}, sCr.INSTANCE = new sCr, Ifn = sCr, Csi = class extends k4 {
    constructor(t, e, n){
        super(), this._mouseWheelListener = this._register(new Vn), this._onScroll = this._register(new tt), this.onScroll = this._onScroll.event, this._onWillScroll = this._register(new tt), this.onWillScroll = this._onWillScroll.event, t.style.overflow = "hidden", this._options = IMy(e), this._scrollable = n, this._register(this._scrollable.onScroll((s)=>{
            this._onWillScroll.fire(s), this._onDidScroll(s), this._onScroll.fire(s);
        }));
        const i = {
            onMouseWheel: (s)=>this._onMouseWheel(s),
            onDragStart: ()=>this._onDragStart(),
            onDragEnd: ()=>this._onDragEnd()
        };
        this._verticalScrollbar = this._register(new _jd(this._scrollable, this._options, i)), this._horizontalScrollbar = this._register(new vjd(this._scrollable, this._options, i)), this._domNode = document.createElement("div"), this._domNode.className = "monaco-scrollable-element " + this._options.className, this._domNode.setAttribute("role", "presentation"), this._domNode.style.position = "relative";
        const r = e.horizontal && e.vertical ? "both" : e.horizontal ? "horizontal" : "vertical";
        r === "both" ? this._domNode.style.overflow = "hidden" : r === "horizontal" ? this._domNode.style.overflowX = "hidden" : this._domNode.style.overflowY = "hidden", this._domNode.appendChild(t), this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode), this._domNode.appendChild(this._verticalScrollbar.domNode.domNode), this._options.useShadows ? (this._leftShadowDomNode = Ew(document.createElement("div")), this._leftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._leftShadowDomNode.domNode), this._topShadowDomNode = Ew(document.createElement("div")), this._topShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topShadowDomNode.domNode), this._topLeftShadowDomNode = Ew(document.createElement("div")), this._topLeftShadowDomNode.setClassName("shadow"), this._domNode.appendChild(this._topLeftShadowDomNode.domNode)) : (this._leftShadowDomNode = null, this._topShadowDomNode = null, this._topLeftShadowDomNode = null), this._listenOnDomNode = this._options.listenOnDomNode || this._domNode, this._setListeningToMouseWheel(this._options.handleMouseWheel), this.onmouseover(this._listenOnDomNode, (s)=>this._onMouseOver(s)), this.onmouseleave(this._listenOnDomNode, (s)=>this._onMouseLeave(s)), this._hideTimeout = this._register(new ZE), this._isDragging = !1, this._mouseIsOver = !1, this._shouldRender = !0, this._revealOnScroll = !0;
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
    delegateVerticalScrollbarPointerDown(t) {
        this._verticalScrollbar.delegatePointerDown(t);
    }
    getScrollDimensions() {
        return this._scrollable.getScrollDimensions();
    }
    setScrollDimensions(t) {
        this._scrollable.setScrollDimensions(t, !1);
    }
    updateClassName(t) {
        this._options.className = t, _r && (this._options.className += " mac"), this._domNode.className = "monaco-scrollable-element " + this._options.className;
    }
    updateOptions(t) {
        typeof t.handleMouseWheel < "u" && (this._options.handleMouseWheel = t.handleMouseWheel, this._setListeningToMouseWheel(this._options.handleMouseWheel)), typeof t.ignoreVerticalScrolling < "u" && (this._options.ignoreVerticalScrolling = t.ignoreVerticalScrolling), typeof t.mouseWheelScrollSensitivity < "u" && (this._options.mouseWheelScrollSensitivity = t.mouseWheelScrollSensitivity), typeof t.fastScrollSensitivity < "u" && (this._options.fastScrollSensitivity = t.fastScrollSensitivity), typeof t.scrollPredominantAxis < "u" && (this._options.scrollPredominantAxis = t.scrollPredominantAxis), typeof t.horizontal < "u" && (this._options.horizontal = t.horizontal), typeof t.vertical < "u" && (this._options.vertical = t.vertical), typeof t.horizontalScrollbarSize < "u" && (this._options.horizontalScrollbarSize = t.horizontalScrollbarSize), typeof t.verticalScrollbarSize < "u" && (this._options.verticalScrollbarSize = t.verticalScrollbarSize), typeof t.scrollByPage < "u" && (this._options.scrollByPage = t.scrollByPage), this._horizontalScrollbar.updateOptions(this._options), this._verticalScrollbar.updateOptions(this._options), this._options.lazyRender || this._render();
    }
    setRevealOnScroll(t) {
        this._revealOnScroll = t;
    }
    delegateScrollFromMouseWheelEvent(t) {
        this._onMouseWheel(new _tt(t));
    }
    _setListeningToMouseWheel(t) {
        if (this._mouseWheelListener.value !== void 0 !== t) if (t) {
            const n = (i)=>{
                this._onMouseWheel(new _tt(i));
            };
            this._mouseWheelListener.value = li(this._listenOnDomNode, Pr.MOUSE_WHEEL, n, {
                passive: !1
            });
        } else this._mouseWheelListener.clear();
    }
    _onMouseWheel(t) {
        if (t.browserEvent?.defaultPrevented) return;
        const e = Ifn.INSTANCE;
        DHo && e.acceptStandardWheelEvent(t);
        let n = !1;
        if (t.deltaY || t.deltaX) {
            let r = t.deltaY * this._options.mouseWheelScrollSensitivity, s = t.deltaX * this._options.mouseWheelScrollSensitivity;
            this._options.scrollPredominantAxis && (this._options.scrollYToX && s + r === 0 ? s = r = 0 : Math.abs(r) >= Math.abs(s) ? s = 0 : r = 0), this._options.ignoreVerticalScrolling === !0 && (r = 0), this._options.flipAxes && ([r, s] = [
                s,
                r
            ]);
            const o = !_r && t.browserEvent && t.browserEvent.shiftKey;
            (this._options.scrollYToX || o) && !s && (s = r, r = 0), t.browserEvent && t.browserEvent.altKey && (s = s * this._options.fastScrollSensitivity, r = r * this._options.fastScrollSensitivity);
            const a = this._scrollable.getFutureScrollPosition();
            let l = {};
            if (r) {
                const c = MHo * r, u = a.scrollTop - (c < 0 ? Math.floor(c) : Math.ceil(c));
                this._verticalScrollbar.writeScrollPosition(l, u);
            }
            if (s) {
                const c = MHo * s, u = a.scrollLeft - (c < 0 ? Math.floor(c) : Math.ceil(c));
                this._horizontalScrollbar.writeScrollPosition(l, u);
            }
            l = this._scrollable.validateScrollPosition(l), (a.scrollLeft !== l.scrollLeft || a.scrollTop !== l.scrollTop) && (DHo && this._options.mouseWheelSmoothScroll && e.isPhysicalMouseWheel() ? this._scrollable.setScrollPositionSmooth(l) : this._scrollable.setScrollPositionNow(l), n = !0);
        }
        let i = n;
        !i && this._options.alwaysConsumeMouseWheel && (i = !0), !i && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded()) && (i = !0), i && (t.preventDefault(), t.stopPropagation());
    }
    _onDidScroll(t) {
        this._shouldRender = this._horizontalScrollbar.onDidScroll(t) || this._shouldRender, this._shouldRender = this._verticalScrollbar.onDidScroll(t) || this._shouldRender, this._options.useShadows && (this._shouldRender = !0), this._revealOnScroll && this._reveal(), this._options.lazyRender || this._render();
    }
    renderNow() {
        if (!this._options.lazyRender) throw new Error("Please use `lazyRender` together with `renderNow`!");
        this._render();
    }
    _render() {
        if (this._shouldRender && (this._shouldRender = !1, this._horizontalScrollbar.render(), this._verticalScrollbar.render(), this._options.useShadows)) {
            const t = this._scrollable.getCurrentScrollPosition(), e = t.scrollTop > 0, n = t.scrollLeft > 0, i = n ? " left" : "", r = e ? " top" : "", s = n || e ? " top-left-corner" : "";
            this._leftShadowDomNode.setClassName(`shadow${i}`), this._topShadowDomNode.setClassName(`shadow${r}`), this._topLeftShadowDomNode.setClassName(`shadow${s}${r}${i}`);
        }
    }
    _onDragStart() {
        this._isDragging = !0, this._reveal();
    }
    _onDragEnd() {
        this._isDragging = !1, this._hide();
    }
    _onMouseLeave(t) {
        this._mouseIsOver = !1, this._hide();
    }
    _onMouseOver(t) {
        this._mouseIsOver = !0, this._reveal();
    }
    _reveal() {
        this._verticalScrollbar.beginReveal(), this._horizontalScrollbar.beginReveal(), this._scheduleHide();
    }
    _hide() {
        !this._mouseIsOver && !this._isDragging && (this._verticalScrollbar.beginHide(), this._horizontalScrollbar.beginHide());
    }
    _scheduleHide() {
        !this._mouseIsOver && !this._isDragging && this._hideTimeout.cancelAndSet(()=>this._hide(), bjd);
    }
}, oCr = class extends Csi {
    constructor(t, e){
        e = e || {}, e.mouseWheelSmoothScroll = !1;
        const n = new rHe({
            forceIntegerValues: !0,
            smoothScrollDuration: 0,
            scheduleAtNextAnimationFrame: (i)=>Ix(ws(t), i)
        });
        super(t, e, n), this._register(n);
    }
    setScrollPosition(t) {
        this._scrollable.setScrollPositionNow(t);
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
}, Tsi = class extends Csi {
    constructor(t, e, n){
        super(t, e, n);
    }
    setScrollPosition(t) {
        t.reuseAnimation ? this._scrollable.setScrollPositionSmooth(t, t.reuseAnimation) : this._scrollable.setScrollPositionNow(t);
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
}, Sjd = class extends Csi {
    constructor(t, e, n){
        super(t, e, n);
    }
}, mwe = class extends Csi {
    constructor(t, e){
        e = e || {}, e.mouseWheelSmoothScroll = !1;
        const n = new rHe({
            forceIntegerValues: !1,
            smoothScrollDuration: 0,
            scheduleAtNextAnimationFrame: (i)=>Ix(ws(t), i)
        });
        super(t, e, n), this._register(n), this._element = t, this._register(this.onScroll((i)=>{
            i.scrollTopChanged && (this._element.scrollTop = i.scrollTop), i.scrollLeftChanged && (this._element.scrollLeft = i.scrollLeft);
        })), this.scanDomNode();
    }
    setScrollPosition(t) {
        this._scrollable.setScrollPositionNow(t);
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
