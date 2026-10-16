import { Gt, Nt, Qe, st, tt } from "./Iwo.js";
import { Yu, qn } from "./async.js";
import { OI1, cWr } from "./contentHoverWidgetWrapper.js";
import { uWr } from "./hover.css";
import { BBt, UBt, lzo, wEr } from "./hoverActionIds.js";
import { LPp } from "./hoverColorPicker.js";
import { REr } from "./hoverUtils.js";
import { Ewe, xEr } from "./inlineCompletionsHintsWidget.js";
import { It, dn } from "./instantiation.js";
import { NPp } from "./ipa.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AEr } from "./ze.js";
var dWr, X5;
export { X5, dWr };
var __wakaru_G0n_initialized = false;
export function G0n() {
if (__wakaru_G0n_initialized) return;
__wakaru_G0n_initialized = true;
"use strict";
E(), wEr(), Qe(), It(), xEr(), ru(), qn(), REr(), OI1(), uWr(), Gt(), LPp(), Ma(), dWr = !1, X5 = class extends st {
    constructor(t, e, n){
        super(), this._editor = t, this._instantiationService = e, this._keybindingService = n, this._onHoverContentsChanged = this._register(new tt), this.onHoverContentsChanged = this._onHoverContentsChanged.event, this.shouldKeepOpenOnEditorMouseMoveOrLeave = !1, this._listenersStore = new Nt, this._isMouseDown = !1, this._reactToEditorMouseMoveRunner = this._register(new Yu(()=>{
            this._mouseMoveEvent && this._reactToEditorMouseMove(this._mouseMoveEvent);
        }, 0)), this._hookListeners(), this._register(this._editor.onDidChangeConfiguration((i)=>{
            i.hasChanged(62) && (this._unhookListeners(), this._hookListeners());
        }));
    }
    static get(t) {
        return t.getContribution(X5.ID);
    }
    _hookListeners() {
        const t = this._editor.getOption(62);
        this._hoverSettings = {
            enabled: t.enabled,
            sticky: t.sticky,
            hidingDelay: t.hidingDelay
        }, t.enabled || this._cancelSchedulerAndHide(), this._listenersStore.add(this._editor.onMouseDown((e)=>this._onEditorMouseDown(e))), this._listenersStore.add(this._editor.onMouseUp(()=>this._onEditorMouseUp())), this._listenersStore.add(this._editor.onMouseMove((e)=>this._onEditorMouseMove(e))), this._listenersStore.add(this._editor.onKeyDown((e)=>this._onKeyDown(e))), this._listenersStore.add(this._editor.onMouseLeave((e)=>this._onEditorMouseLeave(e))), this._listenersStore.add(this._editor.onDidChangeModel(()=>this._cancelSchedulerAndHide())), this._listenersStore.add(this._editor.onDidChangeModelContent(()=>this._cancelScheduler())), this._listenersStore.add(this._editor.onDidScrollChange((e)=>this._onEditorScrollChanged(e)));
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
    _onEditorScrollChanged(t) {
        (t.scrollTopChanged || t.scrollLeftChanged) && this.hideContentHover();
    }
    _onEditorMouseDown(t) {
        this._isMouseDown = !0, !this._shouldKeepHoverWidgetVisible(t) && this.hideContentHover();
    }
    _shouldKeepHoverWidgetVisible(t) {
        return this._isMouseOnContentHoverWidget(t) || this._isContentWidgetResizing() || NPp(t);
    }
    _isMouseOnContentHoverWidget(t) {
        return this._contentWidget ? AEr(this._contentWidget.getDomNode(), t.event.posx, t.event.posy) : !1;
    }
    _onEditorMouseUp() {
        this._isMouseDown = !1;
    }
    _onEditorMouseLeave(t) {
        this.shouldKeepOpenOnEditorMouseMoveOrLeave || (this._cancelScheduler(), this._shouldKeepHoverWidgetVisible(t)) || dWr || this.hideContentHover();
    }
    _shouldKeepCurrentHover(t) {
        const e = this._contentWidget;
        if (!e) return !1;
        const n = this._hoverSettings.sticky, i = (c, u)=>{
            const d = this._isMouseOnContentHoverWidget(c);
            return u && d;
        }, r = (c)=>{
            const u = e.isColorPickerVisible, d = this._isMouseOnContentHoverWidget(c), h = u && d, p = u && this._isMouseDown;
            return h || p;
        }, s = (c, u)=>{
            const d = c.event.browserEvent.view;
            return d ? u && e.containsNode(d.document.activeElement) && !d.getSelection()?.isCollapsed : !1;
        }, o = e.isFocused, a = e.isResizing, l = this._hoverSettings.sticky && e.isVisibleFromKeyboard;
        return this.shouldKeepOpenOnEditorMouseMoveOrLeave || o || a || l || i(t, n) || r(t) || s(t, n);
    }
    _onEditorMouseMove(t) {
        if (this._mouseMoveEvent = t, this._shouldKeepCurrentHover(t)) {
            this._reactToEditorMouseMoveRunner.cancel();
            return;
        }
        if (this._shouldRescheduleHoverComputation()) {
            this._reactToEditorMouseMoveRunner.isScheduled() || this._reactToEditorMouseMoveRunner.schedule(this._hoverSettings.hidingDelay);
            return;
        }
        this._reactToEditorMouseMove(t);
    }
    _shouldRescheduleHoverComputation() {
        const t = this._hoverSettings.hidingDelay;
        return (this._contentWidget?.isVisible ?? !1) && this._hoverSettings.sticky && t > 0;
    }
    _reactToEditorMouseMove(t) {
        this._hoverSettings.enabled && this._getOrCreateContentWidget().showsOrWillShow(t) || dWr || this.hideContentHover();
    }
    _onKeyDown(t) {
        if (!this._contentWidget) return;
        const e = this._isPotentialKeyboardShortcut(t), n = this._isModifierKeyPressed(t);
        e || n || this._contentWidget.isFocused && t.keyCode === Ze.Tab || this.hideContentHover();
    }
    _isPotentialKeyboardShortcut(t) {
        if (!this._editor.hasModel() || !this._contentWidget) return !1;
        const e = this._keybindingService.softDispatch(t, this._editor.getDomNode()), n = e.kind === 1, i = e.kind === 2 && (e.commandId === lzo || e.commandId === BBt || e.commandId === UBt) && this._contentWidget.isVisible;
        return n || i;
    }
    _isModifierKeyPressed(t) {
        return t.keyCode === Ze.Ctrl || t.keyCode === Ze.Alt || t.keyCode === Ze.Meta || t.keyCode === Ze.Shift;
    }
    hideContentHover() {
        dWr || Ewe.dropDownVisible || this._contentWidget?.hide();
    }
    _getOrCreateContentWidget() {
        return this._contentWidget || (this._contentWidget = this._instantiationService.createInstance(cWr, this._editor), this._listenersStore.add(this._contentWidget.onContentsChanged(()=>this._onHoverContentsChanged.fire()))), this._contentWidget;
    }
    showContentHover(t, e, n, i) {
        this._getOrCreateContentWidget().startShowingAtRange(t, e, n, i);
    }
    _isContentWidgetResizing() {
        return this._contentWidget?.widget.isResizing || !1;
    }
    focusedHoverPartIndex() {
        return this._getOrCreateContentWidget().focusedHoverPartIndex();
    }
    doesHoverAtIndexSupportVerbosityAction(t, e) {
        return this._getOrCreateContentWidget().doesHoverAtIndexSupportVerbosityAction(t, e);
    }
    updateHoverVerbosityLevel(t, e, n) {
        this._getOrCreateContentWidget().updateHoverVerbosityLevel(t, e, n);
    }
    focus() {
        this._contentWidget?.focus();
    }
    focusHoverPartWithIndex(t) {
        this._contentWidget?.focusHoverPartWithIndex(t);
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
    getAccessibleWidgetContentAtIndex(t) {
        return this._contentWidget?.getAccessibleWidgetContentAtIndex(t);
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
}, X5.ID = "editor.contrib.contentHover", X5 = Re([
    F(1, dn),
    F(2, Al)
], X5);

}
