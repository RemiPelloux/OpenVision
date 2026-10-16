import { Se, bt, cn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { $$c, VSg } from "./contentHoverComputer.js";
import { mcv, oRn } from "./contentHoverRendered.js";
import { Wis, jSg } from "./contentHoverTypes.js";
import { GSg, YK } from "./contentHoverWidget.js";
import { en, zp } from "./dom_2.js";
import { du, va } from "./hover.js";
import { $is, N$c } from "./hoverOperation.js";
import { Tyi, ife, vKe } from "./hoverTypes.js";
import { Nyi } from "./hoverUtils.js";
import { Ze, _t } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { Ky, Wp } from "./languages.js";
import { Lyi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var V9i;
export { V9i };
var __wakaru_gcv_initialized = false;
export function gcv() {
if (__wakaru_gcv_initialized) return;
__wakaru_gcv_initialized = true;
"use strict";
x(), en(), Pr(), Se(), Wp(), N$c(), ife(), Ze(), no(), GSg(), VSg(), jSg(), bt(), mcv(), Nyi(), du(), V9i = class extends we {
    constructor(e, t, n, i){
        super(), this._editor = e, this._instantiationService = t, this._keybindingService = n, this._hoverService = i, this._currentResult = null, this._renderedContentHover = this._register(new cn), this._onContentsChanged = this._register(new ve), this.onContentsChanged = this._onContentsChanged.event, this._contentHoverWidget = this._register(this._instantiationService.createInstance(YK, this._editor)), this._participants = this._initializeHoverParticipants(), this._hoverOperation = this._register(new $is(this._editor, new $$c(this._editor, this._participants))), this._registerListeners();
    }
    _initializeHoverParticipants() {
        const e = [];
        for (const t of vKe.getAll()){
            const n = this._instantiationService.createInstance(t, this._editor);
            e.push(n);
        }
        return e.sort((t, n)=>t.hoverOrdinal - n.hoverOrdinal), this._register(this._contentHoverWidget.onDidResize(()=>{
            this._participants.forEach((t)=>t.handleResize?.());
        })), this._register(this._contentHoverWidget.onDidScroll((t)=>{
            this._participants.forEach((n)=>n.handleScroll?.(t));
        })), e;
    }
    _registerListeners() {
        this._register(this._hoverOperation.onResult((t)=>{
            const n = t.hasLoadingMessage ? this._addLoadingMessage(t) : t.value;
            this._withResult(new Wis(n, t.isComplete, t.options));
        }));
        const e = this._contentHoverWidget.getDomNode();
        this._register(zp(e, "keydown", (t)=>{
            t.equals(fe.Escape) && this.hide();
        })), this._register(zp(e, "mouseleave", (t)=>{
            this._onMouseLeave(t);
        })), this._register(Ky.onDidChange(()=>{
            this._contentHoverWidget.position && this._currentResult && this._setCurrentResult(this._currentResult);
        }));
    }
    _startShowingOrUpdateHover(e, t, n, i, r) {
        if (!(this._contentHoverWidget.position && this._currentResult)) return e ? (this._startHoverOperationIfNecessary(e, t, n, i, !1), !0) : !1;
        const o = this._editor.getOption(62).sticky, a = r && this._contentHoverWidget.isMouseGettingCloser(r.event.posx, r.event.posy);
        return o && a ? (e && this._startHoverOperationIfNecessary(e, t, n, i, !0), !0) : e ? this._currentResult && this._currentResult.options.anchor.equals(e) ? !0 : this._currentResult && e.canAdoptVisibleHover(this._currentResult.options.anchor, this._contentHoverWidget.position) ? (this._currentResult && this._setCurrentResult(this._currentResult.filter(e)), this._startHoverOperationIfNecessary(e, t, n, i, !1), !0) : (this._setCurrentResult(null), this._startHoverOperationIfNecessary(e, t, n, i, !1), !0) : (this._setCurrentResult(null), !1);
    }
    _startHoverOperationIfNecessary(e, t, n, i, r) {
        if (this._hoverOperation.options && this._hoverOperation.options.anchor.equals(e)) return;
        this._hoverOperation.cancel();
        const o = {
            anchor: e,
            source: n,
            shouldFocus: i,
            insistOnKeepingHoverVisible: r
        };
        this._hoverOperation.start(t, o);
    }
    _setCurrentResult(e) {
        let t = e;
        if (this._currentResult === t) return;
        t && t.hoverParts.length === 0 && (t = null), this._currentResult = t, this._currentResult ? this._showHover(this._currentResult) : this._hideHover();
    }
    _addLoadingMessage(e) {
        for (const t of this._participants){
            if (!t.createLoadingMessage) continue;
            const n = t.createLoadingMessage(e.options.anchor);
            if (n) return e.value.slice(0).concat([
                n
            ]);
        }
        return e.value;
    }
    _withResult(e) {
        if (this._contentHoverWidget.position && this._currentResult && this._currentResult.isComplete || this._setCurrentResult(e), !e.isComplete) return;
        const i = e.hoverParts.length === 0, r = e.options.insistOnKeepingHoverVisible;
        i && r || this._setCurrentResult(e);
    }
    _showHover(e) {
        const t = this._getHoverContext();
        this._renderedContentHover.value = new oRn(this._editor, e, this._participants, t, this._keybindingService, this._hoverService), this._renderedContentHover.value.domNodeHasChildren ? this._contentHoverWidget.show(this._renderedContentHover.value) : this._renderedContentHover.clear();
    }
    _hideHover() {
        this._contentHoverWidget.hide(), this._participants.forEach((e)=>e.handleHide?.());
    }
    _getHoverContext() {
        return {
            hide: ()=>{
                this.hide();
            },
            onContentsChanged: ()=>{
                this._onContentsChanged.fire(), this._contentHoverWidget.onContentsChanged();
            },
            setMinimumDimensions: (r)=>{
                this._contentHoverWidget.setMinimumDimensions(r);
            },
            focus: ()=>this.focus()
        };
    }
    showsOrWillShow(e) {
        if (this._contentHoverWidget.isResizing) return !0;
        const n = this._findHoverAnchorCandidates(e);
        if (!(n.length > 0)) return this._startShowingOrUpdateHover(null, 0, 0, !1, e);
        const r = n[0];
        return this._startShowingOrUpdateHover(r, 0, 0, !1, e);
    }
    _findHoverAnchorCandidates(e) {
        const t = [];
        for (const i of this._participants){
            if (!i.suggestHoverAnchor) continue;
            const r = i.suggestHoverAnchor(e);
            r && t.push(r);
        }
        const n = e.target;
        switch(n.type){
            case 6:
                {
                    t.push(new Tyi(0, n.range, e.event.posx, e.event.posy));
                    break;
                }
            case 7:
                {
                    const i = this._editor.getOption(52).typicalHalfwidthCharacterWidth / 2;
                    if (!(!n.detail.isAfterLines && typeof n.detail.horizontalDistanceToText == "number" && n.detail.horizontalDistanceToText < i)) break;
                    t.push(new Tyi(0, n.range, e.event.posx, e.event.posy));
                    break;
                }
        }
        return t.sort((i, r)=>r.priority - i.priority), t;
    }
    _onMouseLeave(e) {
        const t = this._editor.getDomNode();
        (!t || !Lyi(t, e.x, e.y)) && this.hide();
    }
    startShowingAtRange(e, t, n, i) {
        this._startShowingOrUpdateHover(new Tyi(0, e, void 0, void 0), t, n, i, null);
    }
    getWidgetContent() {
        const e = this._contentHoverWidget.getDomNode();
        if (e.textContent) return e.textContent;
    }
    async updateHoverVerbosityLevel(e, t, n) {
        this._renderedContentHover.value?.updateHoverVerbosityLevel(e, t, n);
    }
    doesHoverAtIndexSupportVerbosityAction(e, t) {
        return this._renderedContentHover.value?.doesHoverAtIndexSupportVerbosityAction(e, t) ?? !1;
    }
    getAccessibleWidgetContent() {
        return this._renderedContentHover.value?.getAccessibleWidgetContent();
    }
    getAccessibleWidgetContentAtIndex(e) {
        return this._renderedContentHover.value?.getAccessibleWidgetContentAtIndex(e);
    }
    focusedHoverPartIndex() {
        return this._renderedContentHover.value?.focusedHoverPartIndex ?? -1;
    }
    containsNode(e) {
        return e ? this._contentHoverWidget.getDomNode().contains(e) : !1;
    }
    focus() {
        if (this._renderedContentHover.value?.hoverPartsCount === 1) {
            this.focusHoverPartWithIndex(0);
            return;
        }
        this._contentHoverWidget.focus();
    }
    focusHoverPartWithIndex(e) {
        this._renderedContentHover.value?.focusHoverPartWithIndex(e);
    }
    scrollUp() {
        this._contentHoverWidget.scrollUp();
    }
    scrollDown() {
        this._contentHoverWidget.scrollDown();
    }
    scrollLeft() {
        this._contentHoverWidget.scrollLeft();
    }
    scrollRight() {
        this._contentHoverWidget.scrollRight();
    }
    pageUp() {
        this._contentHoverWidget.pageUp();
    }
    pageDown() {
        this._contentHoverWidget.pageDown();
    }
    goToTop() {
        this._contentHoverWidget.goToTop();
    }
    goToBottom() {
        this._contentHoverWidget.goToBottom();
    }
    hide() {
        this._hoverOperation.cancel(), this._setCurrentResult(null);
    }
    getDomNode() {
        return this._contentHoverWidget.getDomNode();
    }
    get isColorPickerVisible() {
        return this._renderedContentHover.value?.isColorPickerVisible() ?? !1;
    }
    get isVisibleFromKeyboard() {
        return this._contentHoverWidget.isVisibleFromKeyboard;
    }
    get isVisible() {
        return this._contentHoverWidget.isVisible;
    }
    get isFocused() {
        return this._contentHoverWidget.isFocused;
    }
    get isResizing() {
        return this._contentHoverWidget.isResizing;
    }
    get widget() {
        return this._contentHoverWidget;
    }
}, V9i = ie([
    C(1, _t),
    C(2, qr),
    C(3, va)
], V9i);

}
