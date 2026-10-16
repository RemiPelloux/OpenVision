import { Ai, Se, cn, jn, we } from "./HVr.js";
import { Fn, Gb, en, xi } from "./dom_2.js";
import { N5c, P5c, jOt, jfn, tRe, ues } from "./editorDom.js";
import { Tle, w_i } from "./editorZoom.js";
import { ew, rBe } from "./mouseEvent.js";
import { A_i, F7, R_i, X5c } from "./mouseTarget.js";
import { Yn, ya } from "./position.js";
import { NV, Ohg, Xqe, Xt, ces, les } from "./qIc.js";
import { KOt, mA } from "./scrollableElement.js";
import { _f, za } from "./selection.js";
import { x } from "./tslib.es6.js";
import { $pt, Hze } from "./viewEventHandler.js";
var L_i, c9c, l9c, u9c, Des, d9c;
export { Des, L_i, c9c, d9c, l9c, u9c };
var __wakaru_Nvg_initialized = false;
export function Nvg() {
if (__wakaru_Nvg_initialized) return;
__wakaru_Nvg_initialized = true;
"use strict";
x(), en(), ew(), Se(), jn(), X5c(), jOt(), w_i(), ya(), _f(), $pt(), mA(), L_i = class extends Hze {
    constructor(e, t, n){
        super(), this._mouseLeaveMonitor = this._register(new cn), this._context = e, this.viewController = t, this.viewHelper = n, this.mouseTargetFactory = new R_i(this._context, n), this._mouseDownOperation = this._register(new c9c(this._context, this.viewController, this.viewHelper, this.mouseTargetFactory, (s, o)=>this._createMouseTarget(s, o), (s)=>this._getMouseColumn(s))), this.lastMouseLeaveTime = -1, this._height = this._context.configuration.options.get(151).height;
        const i = new P5c(this.viewHelper.viewDomNode);
        this._register(i.onContextMenu(this.viewHelper.viewDomNode, (s)=>this._onContextMenu(s, !0))), this._register(i.onMouseMove(this.viewHelper.viewDomNode, (s)=>{
            this._onMouseMove(s), this._mouseLeaveMonitor.value || (this._mouseLeaveMonitor.value = Xt(this.viewHelper.viewDomNode.ownerDocument, "mousemove", (o)=>{
                Ohg(o, this.viewHelper.viewDomNode) || this._onMouseLeave(new tRe(o, !1, this.viewHelper.viewDomNode));
            }));
        })), this._register(i.onMouseUp(this.viewHelper.viewDomNode, (s)=>this._onMouseUp(s))), this._register(i.onMouseLeave(this.viewHelper.viewDomNode, (s)=>this._onMouseLeave(s)));
        let r = 0;
        this._register(i.onPointerDown(this.viewHelper.viewDomNode, (s, o)=>{
            r = o;
        })), this._register(Xt(this.viewHelper.viewDomNode, Fn.POINTER_UP, (s)=>{
            this._mouseDownOperation.onPointerUp();
        })), this._register(i.onMouseDown(this.viewHelper.viewDomNode, (s)=>this._onMouseDown(s, r))), this._setupMouseWheelZoomListener(), this._context.addEventHandler(this);
    }
    _setupMouseWheelZoomListener() {
        const e = KOt.INSTANCE;
        let t = 0, n = Tle.getZoomLevel(), i = !1, r = 0;
        const s = (a)=>{
            if (this.viewController.emitMouseWheel(a), !this._context.configuration.options.get(77)) return;
            const c = new rBe(a);
            if (e.acceptStandardWheelEvent(c), e.isPhysicalMouseWheel()) {
                if (o(a)) {
                    const l = Tle.getZoomLevel(), u = c.deltaY > 0 ? 1 : -1;
                    Tle.setZoomLevel(l + u), c.preventDefault(), c.stopPropagation();
                }
            } else Date.now() - t > 50 && (n = Tle.getZoomLevel(), i = o(a), r = 0), t = Date.now(), r += c.deltaY, i && (Tle.setZoomLevel(n + r / 5), c.preventDefault(), c.stopPropagation());
        };
        this._register(Xt(this.viewHelper.viewDomNode, Fn.MOUSE_WHEEL, s, {
            capture: !0,
            passive: !1
        }));
        function o(a) {
            return Ai ? (a.metaKey || a.ctrlKey) && !a.shiftKey && !a.altKey : a.ctrlKey && !a.metaKey && !a.shiftKey && !a.altKey;
        }
    }
    dispose() {
        this._context.removeEventHandler(this), this._mouseLeaveMonitor.clear(), super.dispose();
    }
    onConfigurationChanged(e) {
        if (e.hasChanged(151)) {
            const t = this._context.configuration.options.get(151).height;
            this._height !== t && (this._height = t, this._mouseDownOperation.onHeightChanged());
        }
        return !1;
    }
    onCursorStateChanged(e) {
        return this._mouseDownOperation.onCursorStateChanged(e), !1;
    }
    onFocusChanged(e) {
        return !1;
    }
    getTargetAtClientPoint(e, t) {
        const i = new ues(e, t).toPageCoordinates(xi(this.viewHelper.viewDomNode)), r = ces(this.viewHelper.viewDomNode);
        if (i.y < r.y || i.y > r.y + r.height || i.x < r.x || i.x > r.x + r.width) return null;
        const s = les(this.viewHelper.viewDomNode, r, i);
        return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), r, i, s, null);
    }
    _createMouseTarget(e, t) {
        let n = e.target;
        if (!this.viewHelper.viewDomNode.contains(n)) {
            const i = Xqe(this.viewHelper.viewDomNode);
            i && (n = i.elementsFromPoint(e.posx, e.posy).find((r)=>this.viewHelper.viewDomNode.contains(r)));
        }
        return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), e.editorPos, e.pos, e.relativePos, t ? n : null);
    }
    _getMouseColumn(e) {
        return this.mouseTargetFactory.getMouseColumn(e.relativePos);
    }
    _onContextMenu(e, t) {
        this.viewController.emitContextMenu({
            event: e,
            target: this._createMouseTarget(e, t)
        });
    }
    _onMouseMove(e) {
        this.mouseTargetFactory.mouseTargetIsWidget(e) || e.preventDefault(), !(this._mouseDownOperation.isActive() || e.timestamp < this.lastMouseLeaveTime) && this.viewController.emitMouseMove({
            event: e,
            target: this._createMouseTarget(e, !0)
        });
    }
    _onMouseLeave(e) {
        this._mouseLeaveMonitor.clear(), this.lastMouseLeaveTime = new Date().getTime(), this.viewController.emitMouseLeave({
            event: e,
            target: null
        });
    }
    _onMouseUp(e) {
        this.viewController.emitMouseUp({
            event: e,
            target: this._createMouseTarget(e, !0)
        });
    }
    _onMouseDown(e, t) {
        const n = this._createMouseTarget(e, !0), i = n.type === 6 || n.type === 7, r = n.type === 2 || n.type === 3 || n.type === 4, s = n.type === 3, o = this._context.configuration.options.get(114), a = this._context.configuration.options.get(158), c = n.type === 8 || n.type === 5, l = n.type === 9;
        let u = e.leftButton || e.middleButton;
        Ai && e.leftButton && e.ctrlKey && (u = !1);
        const h = ()=>{
            e.preventDefault(), this.viewHelper.focusTextArea();
        };
        if (u && (i || s && o && !a)) h(), this._mouseDownOperation.start(n.type, e, t);
        else if (r) e.preventDefault();
        else if (c) {
            const p = n.detail;
            u && this.viewHelper.shouldSuppressMouseDownOnViewZone(p.viewZoneId) && (h(), this._mouseDownOperation.start(n.type, e, t), e.preventDefault());
        } else l && this.viewHelper.shouldSuppressMouseDownOnWidget(n.detail) && (h(), e.preventDefault());
        this.viewController.emitMouseDown({
            event: e,
            target: n
        });
    }
    _onMouseWheel(e) {
        this.viewController.emitMouseWheel(e);
    }
}, c9c = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._context = e, this._viewController = t, this._viewHelper = n, this._mouseTargetFactory = i, this._createMouseTarget = r, this._getMouseColumn = s, this._mouseMoveMonitor = this._register(new N5c(this._viewHelper.viewDomNode)), this._topBottomDragScrolling = this._register(new l9c(this._context, this._viewHelper, this._mouseTargetFactory, (o, a, c)=>this._dispatchMouse(o, a, c))), this._mouseState = new d9c, this._currentSelection = new za(1, 1, 1, 1), this._isActive = !1, this._lastMouseEvent = null;
    }
    dispose() {
        super.dispose();
    }
    isActive() {
        return this._isActive;
    }
    _onMouseDownThenMove(e) {
        this._lastMouseEvent = e, this._mouseState.setModifiers(e);
        const t = this._findMousePosition(e, !1);
        t && (this._mouseState.isDragAndDrop ? this._viewController.emitMouseDrag({
            event: e,
            target: t
        }) : t.type === 13 && (t.outsidePosition === "above" || t.outsidePosition === "below") ? this._topBottomDragScrolling.start(t, e) : (this._topBottomDragScrolling.stop(), this._dispatchMouse(t, !0, 1)));
    }
    start(e, t, n) {
        this._lastMouseEvent = t, this._mouseState.setStartedOnLineNumbers(e === 3), this._mouseState.setStartButtons(t), this._mouseState.setModifiers(t);
        const i = this._findMousePosition(t, !0);
        if (!i || !i.position) return;
        this._mouseState.trySetCount(t.detail, i.position), t.detail = this._mouseState.count;
        const r = this._context.configuration.options;
        if (!r.get(96) && r.get(35) && !r.get(22) && !this._mouseState.altKey && t.detail < 2 && !this._isActive && !this._currentSelection.isEmpty() && i.type === 6 && i.position && this._currentSelection.containsPosition(i.position)) {
            this._mouseState.isDragAndDrop = !0, this._isActive = !0, this._mouseMoveMonitor.startMonitoring(this._viewHelper.viewLinesDomNode, n, t.buttons, (s)=>this._onMouseDownThenMove(s), (s)=>{
                const o = this._findMousePosition(this._lastMouseEvent, !1);
                NV(s) ? this._viewController.emitMouseDropCanceled() : this._viewController.emitMouseDrop({
                    event: this._lastMouseEvent,
                    target: o ? this._createMouseTarget(this._lastMouseEvent, !0) : null
                }), this._stop();
            });
            return;
        }
        this._mouseState.isDragAndDrop = !1, this._dispatchMouse(i, t.shiftKey, 1), this._isActive || (this._isActive = !0, this._mouseMoveMonitor.startMonitoring(this._viewHelper.viewLinesDomNode, n, t.buttons, (s)=>this._onMouseDownThenMove(s), ()=>this._stop()));
    }
    _stop() {
        this._isActive = !1, this._topBottomDragScrolling.stop();
    }
    onHeightChanged() {
        this._mouseMoveMonitor.stopMonitoring();
    }
    onPointerUp() {
        this._mouseMoveMonitor.stopMonitoring();
    }
    onCursorStateChanged(e) {
        this._currentSelection = e.selections[0];
    }
    _getPositionOutsideEditor(e) {
        const t = e.editorPos, n = this._context.viewModel, i = this._context.viewLayout, r = this._getMouseColumn(e);
        if (e.posy < t.y) {
            const o = t.y - e.posy, a = Math.max(i.getCurrentScrollTop() - o, 0), c = A_i.getZoneAtCoord(this._context, a);
            if (c) {
                const u = this._helpPositionJumpOverViewZone(c);
                if (u) return F7.createOutsideEditor(r, u, "above", o);
            }
            const l = i.getLineNumberAtVerticalOffset(a);
            return F7.createOutsideEditor(r, new Yn(l, 1), "above", o);
        }
        if (e.posy > t.y + t.height) {
            const o = e.posy - t.y - t.height, a = i.getCurrentScrollTop() + e.relativePos.y, c = A_i.getZoneAtCoord(this._context, a);
            if (c) {
                const u = this._helpPositionJumpOverViewZone(c);
                if (u) return F7.createOutsideEditor(r, u, "below", o);
            }
            const l = i.getLineNumberAtVerticalOffset(a);
            return F7.createOutsideEditor(r, new Yn(l, n.getLineMaxColumn(l)), "below", o);
        }
        const s = i.getLineNumberAtVerticalOffset(i.getCurrentScrollTop() + e.relativePos.y);
        if (e.posx < t.x) {
            const o = t.x - e.posx;
            return F7.createOutsideEditor(r, new Yn(s, 1), "left", o);
        }
        if (e.posx > t.x + t.width) {
            const o = e.posx - t.x - t.width;
            return F7.createOutsideEditor(r, new Yn(s, n.getLineMaxColumn(s)), "right", o);
        }
        return null;
    }
    _findMousePosition(e, t) {
        const n = this._getPositionOutsideEditor(e);
        if (n) return n;
        const i = this._createMouseTarget(e, t);
        if (!i.position) return null;
        if (i.type === 8 || i.type === 5) {
            const s = this._helpPositionJumpOverViewZone(i.detail);
            if (s) return F7.createViewZone(i.type, i.element, i.mouseColumn, s, i.detail);
        }
        return i;
    }
    _helpPositionJumpOverViewZone(e) {
        const t = new Yn(this._currentSelection.selectionStartLineNumber, this._currentSelection.selectionStartColumn), n = e.positionBefore, i = e.positionAfter;
        return n && i ? n.isBefore(t) ? n : i : null;
    }
    _dispatchMouse(e, t, n) {
        e.position && this._viewController.dispatchMouse({
            position: e.position,
            mouseColumn: e.mouseColumn,
            startedOnLineNumbers: this._mouseState.startedOnLineNumbers,
            revealType: n,
            inSelectionMode: t,
            mouseDownCount: this._mouseState.count,
            altKey: this._mouseState.altKey,
            ctrlKey: this._mouseState.ctrlKey,
            metaKey: this._mouseState.metaKey,
            shiftKey: this._mouseState.shiftKey,
            leftButton: this._mouseState.leftButton,
            middleButton: this._mouseState.middleButton,
            onInjectedText: e.type === 6 && e.detail.injectedText !== null
        });
    }
}, l9c = class extends we {
    constructor(e, t, n, i){
        super(), this._context = e, this._viewHelper = t, this._mouseTargetFactory = n, this._dispatchMouse = i, this._operation = null;
    }
    dispose() {
        super.dispose(), this.stop();
    }
    start(e, t) {
        this._operation ? this._operation.setPosition(e, t) : this._operation = new u9c(this._context, this._viewHelper, this._mouseTargetFactory, this._dispatchMouse, e, t);
    }
    stop() {
        this._operation && (this._operation.dispose(), this._operation = null);
    }
}, u9c = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._context = e, this._viewHelper = t, this._mouseTargetFactory = n, this._dispatchMouse = i, this._animationFrameDisposable = this._register(new cn), this._position = r, this._mouseEvent = s, this._lastTime = Date.now(), this._animationFrameDisposable.value = Gb(xi(s.browserEvent), ()=>this._execute());
    }
    dispose() {
        this._animationFrameDisposable.clear(), super.dispose();
    }
    setPosition(e, t) {
        this._position = e, this._mouseEvent = t;
    }
    _tick() {
        const e = Date.now(), t = e - this._lastTime;
        return this._lastTime = e, t;
    }
    _getScrollSpeed() {
        const e = this._context.configuration.options.get(68), t = this._context.configuration.options.get(151).height / e, n = this._position.outsideDistance / e;
        return n <= 1.5 ? Math.max(30, t * (1 + n)) : n <= 3 ? Math.max(60, t * (2 + n)) : Math.max(200, t * (7 + n));
    }
    _execute() {
        const e = this._context.configuration.options.get(68), t = this._getScrollSpeed(), n = this._tick(), i = t * (n / 1e3) * e, r = this._position.outsidePosition === "above" ? -i : i;
        this._context.viewModel.viewLayout.deltaScrollNow(0, r), this._viewHelper.renderNow();
        const s = this._context.viewLayout.getLinesViewportData(), o = this._position.outsidePosition === "above" ? s.startLineNumber : s.endLineNumber;
        let a;
        {
            const c = ces(this._viewHelper.viewDomNode), l = this._context.configuration.options.get(151).horizontalScrollbarHeight, u = new jfn(this._mouseEvent.pos.x, c.y + c.height - l - .1), h = les(this._viewHelper.viewDomNode, c, u);
            a = this._mouseTargetFactory.createMouseTarget(this._viewHelper.getLastRenderData(), c, u, h, null);
        }
        (!a.position || a.position.lineNumber !== o) && (this._position.outsidePosition === "above" ? a = F7.createOutsideEditor(this._position.mouseColumn, new Yn(o, 1), "above", this._position.outsideDistance) : a = F7.createOutsideEditor(this._position.mouseColumn, new Yn(o, this._context.viewModel.getLineMaxColumn(o)), "below", this._position.outsideDistance)), this._dispatchMouse(a, !0, 2), this._animationFrameDisposable.value = Gb(xi(a.element), ()=>this._execute());
    }
}, Des = class Ikm {
    get altKey() {
        return this._altKey;
    }
    get ctrlKey() {
        return this._ctrlKey;
    }
    get metaKey() {
        return this._metaKey;
    }
    get shiftKey() {
        return this._shiftKey;
    }
    get leftButton() {
        return this._leftButton;
    }
    get middleButton() {
        return this._middleButton;
    }
    get startedOnLineNumbers() {
        return this._startedOnLineNumbers;
    }
    constructor(){
        this._altKey = !1, this._ctrlKey = !1, this._metaKey = !1, this._shiftKey = !1, this._leftButton = !1, this._middleButton = !1, this._startedOnLineNumbers = !1, this._lastMouseDownPosition = null, this._lastMouseDownPositionEqualCount = 0, this._lastMouseDownCount = 0, this._lastSetMouseDownCountTime = 0, this.isDragAndDrop = !1;
    }
    get count() {
        return this._lastMouseDownCount;
    }
    setModifiers(t) {
        this._altKey = t.altKey, this._ctrlKey = t.ctrlKey, this._metaKey = t.metaKey, this._shiftKey = t.shiftKey;
    }
    setStartButtons(t) {
        this._leftButton = t.leftButton, this._middleButton = t.middleButton;
    }
    setStartedOnLineNumbers(t) {
        this._startedOnLineNumbers = t;
    }
    trySetCount(t, n) {
        const i = new Date().getTime();
        i - this._lastSetMouseDownCountTime > Ikm.CLEAR_MOUSE_DOWN_COUNT_TIME && (t = 1), this._lastSetMouseDownCountTime = i, t > this._lastMouseDownCount + 1 && (t = this._lastMouseDownCount + 1), this._lastMouseDownPosition && this._lastMouseDownPosition.equals(n) ? this._lastMouseDownPositionEqualCount++ : this._lastMouseDownPositionEqualCount = 1, this._lastMouseDownPosition = n, this._lastMouseDownCount = Math.min(t, this._lastMouseDownPositionEqualCount);
    }
}, Des.CLEAR_MOUSE_DOWN_COUNT_TIME = 400, d9c = Des;

}
