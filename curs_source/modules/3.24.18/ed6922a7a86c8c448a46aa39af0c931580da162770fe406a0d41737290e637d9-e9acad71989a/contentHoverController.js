import { Wku } from "./De_3.js";
import { He, Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ac, bn } from "./async.js";
import { V9i, gcv } from "./contentHoverWidgetWrapper.js";
import { j9i } from "./hover.css";
import { Iyi, Nis, gmt, mmt } from "./hoverActionIds.js";
import { Gku } from "./hoverColorPicker.js";
import { Nyi } from "./hoverUtils.js";
import { Fle, Pyi } from "./inlineCompletionsHintsWidget.js";
import { Ze, _t } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { Lyi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var q9i, Fx;
export { Fx, q9i };
var __wakaru_hMe_initialized = false;
export function hMe() {
if (__wakaru_hMe_initialized) return;
__wakaru_hMe_initialized = true;
"use strict";
x(), Iyi(), Se(), Ze(), Pyi(), no(), bn(), Nyi(), gcv(), j9i(), bt(), Gku(), Pr(), q9i = !1, Fx = class extends we {
    constructor(e, t, n){
        super(), this._editor = e, this._instantiationService = t, this._keybindingService = n, this._onHoverContentsChanged = this._register(new ve), this.onHoverContentsChanged = this._onHoverContentsChanged.event, this.shouldKeepOpenOnEditorMouseMoveOrLeave = !1, this._listenersStore = new He, this._isMouseDown = !1, this._reactToEditorMouseMoveRunner = this._register(new ac(()=>{
            this._mouseMoveEvent && this._reactToEditorMouseMove(this._mouseMoveEvent);
        }, 0)), this._hookListeners(), this._register(this._editor.onDidChangeConfiguration((i)=>{
            i.hasChanged(62) && (this._unhookListeners(), this._hookListeners());
        }));
    }
    static get(e) {
        return e.getContribution(Fx.ID);
    }
    _hookListeners() {
        const e = this._editor.getOption(62);
        this._hoverSettings = {
            enabled: e.enabled,
            sticky: e.sticky,
            hidingDelay: e.hidingDelay
        }, e.enabled || this._cancelSchedulerAndHide(), this._listenersStore.add(this._editor.onMouseDown((t)=>this._onEditorMouseDown(t))), this._listenersStore.add(this._editor.onMouseUp(()=>this._onEditorMouseUp())), this._listenersStore.add(this._editor.onMouseMove((t)=>this._onEditorMouseMove(t))), this._listenersStore.add(this._editor.onKeyDown((t)=>this._onKeyDown(t))), this._listenersStore.add(this._editor.onMouseLeave((t)=>this._onEditorMouseLeave(t))), this._listenersStore.add(this._editor.onDidChangeModel(()=>this._cancelSchedulerAndHide())), this._listenersStore.add(this._editor.onDidChangeModelContent(()=>this._cancelScheduler())), this._listenersStore.add(this._editor.onDidScrollChange((t)=>this._onEditorScrollChanged(t)));
    }
    _unhookListeners() {
        this._listenersStore.clear();
    }
    _cancelSchedulerAndHide() {
        this._cancelScheduler(), this.hideContentHover();
    }
    _cancelScheduler() {
        this._mouseMoveEvent = void 0, this._reactToEditorMouseMoveRunner.cancel();
    }
    _onEditorScrollChanged(e) {
        (e.scrollTopChanged || e.scrollLeftChanged) && this.hideContentHover();
    }
    _onEditorMouseDown(e) {
        this._isMouseDown = !0, !this._shouldKeepHoverWidgetVisible(e) && this.hideContentHover();
    }
    _shouldKeepHoverWidgetVisible(e) {
        return this._isMouseOnContentHoverWidget(e) || this._isContentWidgetResizing() || Wku(e);
    }
    _isMouseOnContentHoverWidget(e) {
        return this._contentWidget ? Lyi(this._contentWidget.getDomNode(), e.event.posx, e.event.posy) : !1;
    }
    _onEditorMouseUp() {
        this._isMouseDown = !1;
    }
    _onEditorMouseLeave(e) {
        this.shouldKeepOpenOnEditorMouseMoveOrLeave || (this._cancelScheduler(), this._shouldKeepHoverWidgetVisible(e)) || q9i || this.hideContentHover();
    }
    _shouldKeepCurrentHover(e) {
        const t = this._contentWidget;
        if (!t) return !1;
        const n = this._hoverSettings.sticky, i = (l, u)=>{
            const h = this._isMouseOnContentHoverWidget(l);
            return u && h;
        }, r = (l)=>{
            const u = t.isColorPickerVisible, h = this._isMouseOnContentHoverWidget(l), p = u && h, g = u && this._isMouseDown;
            return p || g;
        }, s = (l, u)=>{
            const h = l.event.browserEvent.view;
            return h ? u && t.containsNode(h.document.activeElement) && !h.getSelection()?.isCollapsed : !1;
        }, o = t.isFocused, a = t.isResizing, c = this._hoverSettings.sticky && t.isVisibleFromKeyboard;
        return this.shouldKeepOpenOnEditorMouseMoveOrLeave || o || a || c || i(e, n) || r(e) || s(e, n);
    }
    _onEditorMouseMove(e) {
        if (this._mouseMoveEvent = e, this._shouldKeepCurrentHover(e)) {
            this._reactToEditorMouseMoveRunner.cancel();
            return;
        }
        if (this._shouldRescheduleHoverComputation()) {
            this._reactToEditorMouseMoveRunner.isScheduled() || this._reactToEditorMouseMoveRunner.schedule(this._hoverSettings.hidingDelay);
            return;
        }
        this._reactToEditorMouseMove(e);
    }
    _shouldRescheduleHoverComputation() {
        const e = this._hoverSettings.hidingDelay;
        return (this._contentWidget?.isVisible ?? !1) && this._hoverSettings.sticky && e > 0;
    }
    _reactToEditorMouseMove(e) {
        this._hoverSettings.enabled && this._getOrCreateContentWidget().showsOrWillShow(e) || q9i || this.hideContentHover();
    }
    _onKeyDown(e) {
        if (!this._contentWidget) return;
        const t = this._isPotentialKeyboardShortcut(e), n = this._isModifierKeyPressed(e);
        t || n || this._contentWidget.isFocused && e.keyCode === fe.Tab || this.hideContentHover();
    }
    _isPotentialKeyboardShortcut(e) {
        if (!this._editor.hasModel() || !this._contentWidget) return !1;
        const t = this._keybindingService.softDispatch(e, this._editor.getDomNode()), n = t.kind === 1, i = t.kind === 2 && (t.commandId === Nis || t.commandId === mmt || t.commandId === gmt) && this._contentWidget.isVisible;
        return n || i;
    }
    _isModifierKeyPressed(e) {
        return e.keyCode === fe.Ctrl || e.keyCode === fe.Alt || e.keyCode === fe.Meta || e.keyCode === fe.Shift;
    }
    hideContentHover() {
        q9i || Fle.dropDownVisible || this._contentWidget?.hide();
    }
    _getOrCreateContentWidget() {
        return this._contentWidget || (this._contentWidget = this._instantiationService.createInstance(V9i, this._editor), this._listenersStore.add(this._contentWidget.onContentsChanged(()=>this._onHoverContentsChanged.fire()))), this._contentWidget;
    }
    showContentHover(e, t, n, i) {
        this._getOrCreateContentWidget().startShowingAtRange(e, t, n, i);
    }
    _isContentWidgetResizing() {
        return this._contentWidget?.widget.isResizing || !1;
    }
    focusedHoverPartIndex() {
        return this._getOrCreateContentWidget().focusedHoverPartIndex();
    }
    doesHoverAtIndexSupportVerbosityAction(e, t) {
        return this._getOrCreateContentWidget().doesHoverAtIndexSupportVerbosityAction(e, t);
    }
    updateHoverVerbosityLevel(e, t, n) {
        this._getOrCreateContentWidget().updateHoverVerbosityLevel(e, t, n);
    }
    focus() {
        this._contentWidget?.focus();
    }
    focusHoverPartWithIndex(e) {
        this._contentWidget?.focusHoverPartWithIndex(e);
    }
    scrollUp() {
        this._contentWidget?.scrollUp();
    }
    scrollDown() {
        this._contentWidget?.scrollDown();
    }
    scrollLeft() {
        this._contentWidget?.scrollLeft();
    }
    scrollRight() {
        this._contentWidget?.scrollRight();
    }
    pageUp() {
        this._contentWidget?.pageUp();
    }
    pageDown() {
        this._contentWidget?.pageDown();
    }
    goToTop() {
        this._contentWidget?.goToTop();
    }
    goToBottom() {
        this._contentWidget?.goToBottom();
    }
    getWidgetContent() {
        return this._contentWidget?.getWidgetContent();
    }
    getAccessibleWidgetContent() {
        return this._contentWidget?.getAccessibleWidgetContent();
    }
    getAccessibleWidgetContentAtIndex(e) {
        return this._contentWidget?.getAccessibleWidgetContentAtIndex(e);
    }
    get isColorPickerVisible() {
        return this._contentWidget?.isColorPickerVisible;
    }
    get isHoverVisible() {
        return this._contentWidget?.isVisible;
    }
    dispose() {
        super.dispose(), this._unhookListeners(), this._listenersStore.dispose(), this._contentWidget?.dispose();
    }
}, Fx.ID = "editor.contrib.contentHover", Fx = ie([
    C(1, _t),
    C(2, qr)
], Fx);

}
