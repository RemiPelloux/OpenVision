import { Di, Qe, Vn, _r, st } from "./Iwo.js";
import { Hn, Ix, Pr, ws } from "./dom_2.js";
import { Cfn, VUd, YUd, bsi, mHe, pHo } from "./editorDom.js";
import { fyt, sHo } from "./editorZoom.js";
import { _tt, i2 } from "./mouseEvent.js";
import { iCr, nCr, ujd, wY } from "./mouseTarget.js";
import { er, jc } from "./position.js";
import { E7, Ifn } from "./scrollableElement.js";
import { Cy, bu } from "./selection.js";
import { E } from "./tslib.es6.js";
import { _yt, cBt } from "./viewEventHandler.js";
import { Zxy, dHo, hHo, iwe, li, xbt } from "./ze.js";
var aCr, kjd, wjd, Cjd, NHo, Tjd;
export { Cjd, NHo, Tjd, aCr, kjd, wjd };
var __wakaru_xMy_initialized = false;
export function xMy() {
if (__wakaru_xMy_initialized) return;
__wakaru_xMy_initialized = true;
"use strict";
E(), Hn(), i2(), Qe(), Di(), ujd(), Cfn(), sHo(), jc(), Cy(), cBt(), E7(), aCr = class extends _yt {
    constructor(t, e, n){
        super(), this._mouseLeaveMonitor = this._register(new Vn), this._context = t, this.viewController = e, this.viewHelper = n, this.mouseTargetFactory = new iCr(this._context, n), this._mouseDownOperation = this._register(new kjd(this._context, this.viewController, this.viewHelper, this.mouseTargetFactory, (s, o)=>this._createMouseTarget(s, o), (s)=>this._getMouseColumn(s))), this.lastMouseLeaveTime = -1, this._height = this._context.configuration.options.get(151).height;
        const i = new VUd(this.viewHelper.viewDomNode);
        this._register(i.onContextMenu(this.viewHelper.viewDomNode, (s)=>this._onContextMenu(s, !0))), this._register(i.onMouseMove(this.viewHelper.viewDomNode, (s)=>{
            this._onMouseMove(s), this._mouseLeaveMonitor.value || (this._mouseLeaveMonitor.value = li(this.viewHelper.viewDomNode.ownerDocument, "mousemove", (o)=>{
                Zxy(o, this.viewHelper.viewDomNode) || this._onMouseLeave(new mHe(o, !1, this.viewHelper.viewDomNode));
            }));
        })), this._register(i.onMouseUp(this.viewHelper.viewDomNode, (s)=>this._onMouseUp(s))), this._register(i.onMouseLeave(this.viewHelper.viewDomNode, (s)=>this._onMouseLeave(s)));
        let r = 0;
        this._register(i.onPointerDown(this.viewHelper.viewDomNode, (s, o)=>{
            r = o;
        })), this._register(li(this.viewHelper.viewDomNode, Pr.POINTER_UP, (s)=>{
            this._mouseDownOperation.onPointerUp();
        })), this._register(i.onMouseDown(this.viewHelper.viewDomNode, (s)=>this._onMouseDown(s, r))), this._setupMouseWheelZoomListener(), this._context.addEventHandler(this);
    }
    _setupMouseWheelZoomListener() {
        const t = Ifn.INSTANCE;
        let e = 0, n = fyt.getZoomLevel(), i = !1, r = 0;
        const s = (a)=>{
            if (this.viewController.emitMouseWheel(a), !this._context.configuration.options.get(77)) return;
            const l = new _tt(a);
            if (t.acceptStandardWheelEvent(l), t.isPhysicalMouseWheel()) {
                if (o(a)) {
                    const c = fyt.getZoomLevel(), u = l.deltaY > 0 ? 1 : -1;
                    fyt.setZoomLevel(c + u), l.preventDefault(), l.stopPropagation();
                }
            } else Date.now() - e > 50 && (n = fyt.getZoomLevel(), i = o(a), r = 0), e = Date.now(), r += l.deltaY, i && (fyt.setZoomLevel(n + r / 5), l.preventDefault(), l.stopPropagation());
        };
        this._register(li(this.viewHelper.viewDomNode, Pr.MOUSE_WHEEL, s, {
            capture: !0,
            passive: !1
        }));
        function o(a) {
            return _r ? (a.metaKey || a.ctrlKey) && !a.shiftKey && !a.altKey : a.ctrlKey && !a.metaKey && !a.shiftKey && !a.altKey;
        }
    }
    dispose() {
        this._context.removeEventHandler(this), this._mouseLeaveMonitor.clear(), super.dispose();
    }
    onConfigurationChanged(t) {
        if (t.hasChanged(151)) {
            const e = this._context.configuration.options.get(151).height;
            this._height !== e && (this._height = e, this._mouseDownOperation.onHeightChanged());
        }
        return !1;
    }
    onCursorStateChanged(t) {
        return this._mouseDownOperation.onCursorStateChanged(t), !1;
    }
    onFocusChanged(t) {
        return !1;
    }
    getTargetAtClientPoint(t, e) {
        const i = new pHo(t, e).toPageCoordinates(ws(this.viewHelper.viewDomNode)), r = dHo(this.viewHelper.viewDomNode);
        if (i.y < r.y || i.y > r.y + r.height || i.x < r.x || i.x > r.x + r.width) return null;
        const s = hHo(this.viewHelper.viewDomNode, r, i);
        return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), r, i, s, null);
    }
    _createMouseTarget(t, e) {
        let n = t.target;
        if (!this.viewHelper.viewDomNode.contains(n)) {
            const i = xbt(this.viewHelper.viewDomNode);
            i && (n = i.elementsFromPoint(t.posx, t.posy).find((r)=>this.viewHelper.viewDomNode.contains(r)));
        }
        return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), t.editorPos, t.pos, t.relativePos, e ? n : null);
    }
    _getMouseColumn(t) {
        return this.mouseTargetFactory.getMouseColumn(t.relativePos);
    }
    _onContextMenu(t, e) {
        this.viewController.emitContextMenu({
            event: t,
            target: this._createMouseTarget(t, e)
        });
    }
    _onMouseMove(t) {
        this.mouseTargetFactory.mouseTargetIsWidget(t) || t.preventDefault(), !(this._mouseDownOperation.isActive() || t.timestamp < this.lastMouseLeaveTime) && this.viewController.emitMouseMove({
            event: t,
            target: this._createMouseTarget(t, !0)
        });
    }
    _onMouseLeave(t) {
        this._mouseLeaveMonitor.clear(), this.lastMouseLeaveTime = new Date().getTime(), this.viewController.emitMouseLeave({
            event: t,
            target: null
        });
    }
    _onMouseUp(t) {
        this.viewController.emitMouseUp({
            event: t,
            target: this._createMouseTarget(t, !0)
        });
    }
    _onMouseDown(t, e) {
        const n = this._createMouseTarget(t, !0), i = n.type === 6 || n.type === 7, r = n.type === 2 || n.type === 3 || n.type === 4, s = n.type === 3, o = this._context.configuration.options.get(114), a = this._context.configuration.options.get(158), l = n.type === 8 || n.type === 5, c = n.type === 9;
        let u = t.leftButton || t.middleButton;
        _r && t.leftButton && t.ctrlKey && (u = !1);
        const d = ()=>{
            t.preventDefault(), this.viewHelper.focusTextArea();
        };
        if (u && (i || s && o && !a)) d(), this._mouseDownOperation.start(n.type, t, e);
        else if (r) t.preventDefault();
        else if (l) {
            const h = n.detail;
            u && this.viewHelper.shouldSuppressMouseDownOnViewZone(h.viewZoneId) && (d(), this._mouseDownOperation.start(n.type, t, e), t.preventDefault());
        } else c && this.viewHelper.shouldSuppressMouseDownOnWidget(n.detail) && (d(), t.preventDefault());
        this.viewController.emitMouseDown({
            event: t,
            target: n
        });
    }
    _onMouseWheel(t) {
        this.viewController.emitMouseWheel(t);
    }
}, kjd = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._context = t, this._viewController = e, this._viewHelper = n, this._mouseTargetFactory = i, this._createMouseTarget = r, this._getMouseColumn = s, this._mouseMoveMonitor = this._register(new YUd(this._viewHelper.viewDomNode)), this._topBottomDragScrolling = this._register(new wjd(this._context, this._viewHelper, this._mouseTargetFactory, (o, a, l)=>this._dispatchMouse(o, a, l))), this._mouseState = new Tjd, this._currentSelection = new bu(1, 1, 1, 1), this._isActive = !1, this._lastMouseEvent = null;
    }
    dispose() {
        super.dispose();
    }
    isActive() {
        return this._isActive;
    }
    _onMouseDownThenMove(t) {
        this._lastMouseEvent = t, this._mouseState.setModifiers(t);
        const e = this._findMousePosition(t, !1);
        e && (this._mouseState.isDragAndDrop ? this._viewController.emitMouseDrag({
            event: t,
            target: e
        }) : e.type === 13 && (e.outsidePosition === "above" || e.outsidePosition === "below") ? this._topBottomDragScrolling.start(e, t) : (this._topBottomDragScrolling.stop(), this._dispatchMouse(e, !0, 1)));
    }
    start(t, e, n) {
        this._lastMouseEvent = e, this._mouseState.setStartedOnLineNumbers(t === 3), this._mouseState.setStartButtons(e), this._mouseState.setModifiers(e);
        const i = this._findMousePosition(e, !0);
        if (!i || !i.position) return;
        this._mouseState.trySetCount(e.detail, i.position), e.detail = this._mouseState.count;
        const r = this._context.configuration.options;
        if (!r.get(96) && r.get(35) && !r.get(22) && !this._mouseState.altKey && e.detail < 2 && !this._isActive && !this._currentSelection.isEmpty() && i.type === 6 && i.position && this._currentSelection.containsPosition(i.position)) {
            this._mouseState.isDragAndDrop = !0, this._isActive = !0, this._mouseMoveMonitor.startMonitoring(this._viewHelper.viewLinesDomNode, n, e.buttons, (s)=>this._onMouseDownThenMove(s), (s)=>{
                const o = this._findMousePosition(this._lastMouseEvent, !1);
                iwe(s) ? this._viewController.emitMouseDropCanceled() : this._viewController.emitMouseDrop({
                    event: this._lastMouseEvent,
                    target: o ? this._createMouseTarget(this._lastMouseEvent, !0) : null
                }), this._stop();
            });
            return;
        }
        this._mouseState.isDragAndDrop = !1, this._dispatchMouse(i, e.shiftKey, 1), this._isActive || (this._isActive = !0, this._mouseMoveMonitor.startMonitoring(this._viewHelper.viewLinesDomNode, n, e.buttons, (s)=>this._onMouseDownThenMove(s), ()=>this._stop()));
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
    onCursorStateChanged(t) {
        this._currentSelection = t.selections[0];
    }
    _getPositionOutsideEditor(t) {
        const e = t.editorPos, n = this._context.viewModel, i = this._context.viewLayout, r = this._getMouseColumn(t);
        if (t.posy < e.y) {
            const o = e.y - t.posy, a = Math.max(i.getCurrentScrollTop() - o, 0), l = nCr.getZoneAtCoord(this._context, a);
            if (l) {
                const u = this._helpPositionJumpOverViewZone(l);
                if (u) return wY.createOutsideEditor(r, u, "above", o);
            }
            const c = i.getLineNumberAtVerticalOffset(a);
            return wY.createOutsideEditor(r, new er(c, 1), "above", o);
        }
        if (t.posy > e.y + e.height) {
            const o = t.posy - e.y - e.height, a = i.getCurrentScrollTop() + t.relativePos.y, l = nCr.getZoneAtCoord(this._context, a);
            if (l) {
                const u = this._helpPositionJumpOverViewZone(l);
                if (u) return wY.createOutsideEditor(r, u, "below", o);
            }
            const c = i.getLineNumberAtVerticalOffset(a);
            return wY.createOutsideEditor(r, new er(c, n.getLineMaxColumn(c)), "below", o);
        }
        const s = i.getLineNumberAtVerticalOffset(i.getCurrentScrollTop() + t.relativePos.y);
        if (t.posx < e.x) {
            const o = e.x - t.posx;
            return wY.createOutsideEditor(r, new er(s, 1), "left", o);
        }
        if (t.posx > e.x + e.width) {
            const o = t.posx - e.x - e.width;
            return wY.createOutsideEditor(r, new er(s, n.getLineMaxColumn(s)), "right", o);
        }
        return null;
    }
    _findMousePosition(t, e) {
        const n = this._getPositionOutsideEditor(t);
        if (n) return n;
        const i = this._createMouseTarget(t, e);
        if (!i.position) return null;
        if (i.type === 8 || i.type === 5) {
            const s = this._helpPositionJumpOverViewZone(i.detail);
            if (s) return wY.createViewZone(i.type, i.element, i.mouseColumn, s, i.detail);
        }
        return i;
    }
    _helpPositionJumpOverViewZone(t) {
        const e = new er(this._currentSelection.selectionStartLineNumber, this._currentSelection.selectionStartColumn), n = t.positionBefore, i = t.positionAfter;
        return n && i ? n.isBefore(e) ? n : i : null;
    }
    _dispatchMouse(t, e, n) {
        t.position && this._viewController.dispatchMouse({
            position: t.position,
            mouseColumn: t.mouseColumn,
            startedOnLineNumbers: this._mouseState.startedOnLineNumbers,
            revealType: n,
            inSelectionMode: e,
            mouseDownCount: this._mouseState.count,
            altKey: this._mouseState.altKey,
            ctrlKey: this._mouseState.ctrlKey,
            metaKey: this._mouseState.metaKey,
            shiftKey: this._mouseState.shiftKey,
            leftButton: this._mouseState.leftButton,
            middleButton: this._mouseState.middleButton,
            onInjectedText: t.type === 6 && t.detail.injectedText !== null
        });
    }
}, wjd = class extends st {
    constructor(t, e, n, i){
        super(), this._context = t, this._viewHelper = e, this._mouseTargetFactory = n, this._dispatchMouse = i, this._operation = null;
    }
    dispose() {
        super.dispose(), this.stop();
    }
    start(t, e) {
        this._operation ? this._operation.setPosition(t, e) : this._operation = new Cjd(this._context, this._viewHelper, this._mouseTargetFactory, this._dispatchMouse, t, e);
    }
    stop() {
        this._operation && (this._operation.dispose(), this._operation = null);
    }
}, Cjd = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._context = t, this._viewHelper = e, this._mouseTargetFactory = n, this._dispatchMouse = i, this._animationFrameDisposable = this._register(new Vn), this._position = r, this._mouseEvent = s, this._lastTime = Date.now(), this._animationFrameDisposable.value = Ix(ws(s.browserEvent), ()=>this._execute());
    }
    dispose() {
        this._animationFrameDisposable.clear(), super.dispose();
    }
    setPosition(t, e) {
        this._position = t, this._mouseEvent = e;
    }
    _tick() {
        const t = Date.now(), e = t - this._lastTime;
        return this._lastTime = t, e;
    }
    _getScrollSpeed() {
        const t = this._context.configuration.options.get(68), e = this._context.configuration.options.get(151).height / t, n = this._position.outsideDistance / t;
        return n <= 1.5 ? Math.max(30, e * (1 + n)) : n <= 3 ? Math.max(60, e * (2 + n)) : Math.max(200, e * (7 + n));
    }
    _execute() {
        const t = this._context.configuration.options.get(68), e = this._getScrollSpeed(), n = this._tick(), i = e * (n / 1e3) * t, r = this._position.outsidePosition === "above" ? -i : i;
        this._context.viewModel.viewLayout.deltaScrollNow(0, r), this._viewHelper.renderNow();
        const s = this._context.viewLayout.getLinesViewportData(), o = this._position.outsidePosition === "above" ? s.startLineNumber : s.endLineNumber;
        let a;
        {
            const l = dHo(this._viewHelper.viewDomNode), c = this._context.configuration.options.get(151).horizontalScrollbarHeight, u = new bsi(this._mouseEvent.pos.x, l.y + l.height - c - .1), d = hHo(this._viewHelper.viewDomNode, l, u);
            a = this._mouseTargetFactory.createMouseTarget(this._viewHelper.getLastRenderData(), l, u, d, null);
        }
        (!a.position || a.position.lineNumber !== o) && (this._position.outsidePosition === "above" ? a = wY.createOutsideEditor(this._position.mouseColumn, new er(o, 1), "above", this._position.outsideDistance) : a = wY.createOutsideEditor(this._position.mouseColumn, new er(o, this._context.viewModel.getLineMaxColumn(o)), "below", this._position.outsideDistance)), this._dispatchMouse(a, !0, 2), this._animationFrameDisposable.value = Ix(ws(a.element), ()=>this._execute());
    }
}, NHo = class JAb {
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
    setModifiers(e) {
        this._altKey = e.altKey, this._ctrlKey = e.ctrlKey, this._metaKey = e.metaKey, this._shiftKey = e.shiftKey;
    }
    setStartButtons(e) {
        this._leftButton = e.leftButton, this._middleButton = e.middleButton;
    }
    setStartedOnLineNumbers(e) {
        this._startedOnLineNumbers = e;
    }
    trySetCount(e, n) {
        const i = new Date().getTime();
        i - this._lastSetMouseDownCountTime > JAb.CLEAR_MOUSE_DOWN_COUNT_TIME && (e = 1), this._lastSetMouseDownCountTime = i, e > this._lastMouseDownCount + 1 && (e = this._lastMouseDownCount + 1), this._lastMouseDownPosition && this._lastMouseDownPosition.equals(n) ? this._lastMouseDownPositionEqualCount++ : this._lastMouseDownPositionEqualCount = 1, this._lastMouseDownPosition = n, this._lastMouseDownCount = Math.min(e, this._lastMouseDownPositionEqualCount);
    }
}, NHo.CLEAR_MOUSE_DOWN_COUNT_TIME = 400, Tjd = NHo;

}
