import { Gt, Qe, Vn, st, tt } from "./Iwo.js";
import { MVd, TOy } from "./contentHoverComputer.js";
import { LI1, eyi } from "./contentHoverRendered.js";
import { EOy, gzo } from "./contentHoverTypes.js";
import { COy, Toe } from "./contentHoverWidget.js";
import { Hn, n0 } from "./dom_2.js";
import { av, gS } from "./hover.js";
import { IVd, pzo } from "./hoverOperation.js";
import { Zyt, cRe, yEr } from "./hoverTypes.js";
import { REr } from "./hoverUtils.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { BI, Iy } from "./languages.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AEr } from "./ze.js";
var cWr;
export { cWr };
var __wakaru_OI1_initialized = false;
export function OI1() {
if (__wakaru_OI1_initialized) return;
__wakaru_OI1_initialized = true;
"use strict";
E(), Hn(), Ma(), Qe(), Iy(), IVd(), cRe(), It(), ru(), COy(), TOy(), EOy(), Gt(), LI1(), REr(), gS(), cWr = class extends st {
    constructor(t, e, n, i){
        super(), this._editor = t, this._instantiationService = e, this._keybindingService = n, this._hoverService = i, this._currentResult = null, this._renderedContentHover = this._register(new Vn), this._onContentsChanged = this._register(new tt), this.onContentsChanged = this._onContentsChanged.event, this._contentHoverWidget = this._register(this._instantiationService.createInstance(Toe, this._editor)), this._participants = this._initializeHoverParticipants(), this._hoverOperation = this._register(new pzo(this._editor, new MVd(this._editor, this._participants))), this._registerListeners();
    }
    _initializeHoverParticipants() {
        const t = [];
        for (const e of Zyt.getAll()){
            const n = this._instantiationService.createInstance(e, this._editor);
            t.push(n);
        }
        return t.sort((e, n)=>e.hoverOrdinal - n.hoverOrdinal), this._register(this._contentHoverWidget.onDidResize(()=>{
            this._participants.forEach((e)=>e.handleResize?.());
        })), this._register(this._contentHoverWidget.onDidScroll((e)=>{
            this._participants.forEach((n)=>n.handleScroll?.(e));
        })), t;
    }
    _registerListeners() {
        this._register(this._hoverOperation.onResult((e)=>{
            const n = e.hasLoadingMessage ? this._addLoadingMessage(e) : e.value;
            this._withResult(new gzo(n, e.isComplete, e.options));
        }));
        const t = this._contentHoverWidget.getDomNode();
        this._register(n0(t, "keydown", (e)=>{
            e.equals(Ze.Escape) && this.hide();
        })), this._register(n0(t, "mouseleave", (e)=>{
            this._onMouseLeave(e);
        })), this._register(BI.onDidChange(()=>{
            this._contentHoverWidget.position && this._currentResult && this._setCurrentResult(this._currentResult);
        }));
    }
    _startShowingOrUpdateHover(t, e, n, i, r) {
        if (!(this._contentHoverWidget.position && this._currentResult)) return t ? (this._startHoverOperationIfNecessary(t, e, n, i, !1), !0) : !1;
        const o = this._editor.getOption(62).sticky, a = r && this._contentHoverWidget.isMouseGettingCloser(r.event.posx, r.event.posy);
        return o && a ? (t && this._startHoverOperationIfNecessary(t, e, n, i, !0), !0) : t ? this._currentResult && this._currentResult.options.anchor.equals(t) ? !0 : this._currentResult && t.canAdoptVisibleHover(this._currentResult.options.anchor, this._contentHoverWidget.position) ? (this._currentResult && this._setCurrentResult(this._currentResult.filter(t)), this._startHoverOperationIfNecessary(t, e, n, i, !1), !0) : (this._setCurrentResult(null), this._startHoverOperationIfNecessary(t, e, n, i, !1), !0) : (this._setCurrentResult(null), !1);
    }
    _startHoverOperationIfNecessary(t, e, n, i, r) {
        if (this._hoverOperation.options && this._hoverOperation.options.anchor.equals(t)) return;
        this._hoverOperation.cancel();
        const o = {
            anchor: t,
            source: n,
            shouldFocus: i,
            insistOnKeepingHoverVisible: r
        };
        this._hoverOperation.start(e, o);
    }
    _setCurrentResult(t) {
        let e = t;
        if (this._currentResult === e) return;
        e && e.hoverParts.length === 0 && (e = null), this._currentResult = e, this._currentResult ? this._showHover(this._currentResult) : this._hideHover();
    }
    _addLoadingMessage(t) {
        for (const e of this._participants){
            if (!e.createLoadingMessage) continue;
            const n = e.createLoadingMessage(t.options.anchor);
            if (n) return t.value.slice(0).concat([
                n
            ]);
        }
        return t.value;
    }
    _withResult(t) {
        if (this._contentHoverWidget.position && this._currentResult && this._currentResult.isComplete || this._setCurrentResult(t), !t.isComplete) return;
        const i = t.hoverParts.length === 0, r = t.options.insistOnKeepingHoverVisible;
        i && r || this._setCurrentResult(t);
    }
    _showHover(t) {
        const e = this._getHoverContext();
        this._renderedContentHover.value = new eyi(this._editor, t, this._participants, e, this._keybindingService, this._hoverService), this._renderedContentHover.value.domNodeHasChildren ? this._contentHoverWidget.show(this._renderedContentHover.value) : this._renderedContentHover.clear();
    }
    _hideHover() {
        this._contentHoverWidget.hide(), this._participants.forEach((t)=>t.handleHide?.());
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
    showsOrWillShow(t) {
        if (this._contentHoverWidget.isResizing) return !0;
        const n = this._findHoverAnchorCandidates(t);
        if (!(n.length > 0)) return this._startShowingOrUpdateHover(null, 0, 0, !1, t);
        const r = n[0];
        return this._startShowingOrUpdateHover(r, 0, 0, !1, t);
    }
    _findHoverAnchorCandidates(t) {
        const e = [];
        for (const i of this._participants){
            if (!i.suggestHoverAnchor) continue;
            const r = i.suggestHoverAnchor(t);
            r && e.push(r);
        }
        const n = t.target;
        switch(n.type){
            case 6:
                {
                    e.push(new yEr(0, n.range, t.event.posx, t.event.posy));
                    break;
                }
            case 7:
                {
                    const i = this._editor.getOption(52).typicalHalfwidthCharacterWidth / 2;
                    if (!(!n.detail.isAfterLines && typeof n.detail.horizontalDistanceToText == "number" && n.detail.horizontalDistanceToText < i)) break;
                    e.push(new yEr(0, n.range, t.event.posx, t.event.posy));
                    break;
                }
        }
        return e.sort((i, r)=>r.priority - i.priority), e;
    }
    _onMouseLeave(t) {
        const e = this._editor.getDomNode();
        (!e || !AEr(e, t.x, t.y)) && this.hide();
    }
    startShowingAtRange(t, e, n, i) {
        this._startShowingOrUpdateHover(new yEr(0, t, void 0, void 0), e, n, i, null);
    }
    getWidgetContent() {
        const t = this._contentHoverWidget.getDomNode();
        if (t.textContent) return t.textContent;
    }
    async updateHoverVerbosityLevel(t, e, n) {
        this._renderedContentHover.value?.updateHoverVerbosityLevel(t, e, n);
    }
    doesHoverAtIndexSupportVerbosityAction(t, e) {
        return this._renderedContentHover.value?.doesHoverAtIndexSupportVerbosityAction(t, e) ?? !1;
    }
    getAccessibleWidgetContent() {
        return this._renderedContentHover.value?.getAccessibleWidgetContent();
    }
    getAccessibleWidgetContentAtIndex(t) {
        return this._renderedContentHover.value?.getAccessibleWidgetContentAtIndex(t);
    }
    focusedHoverPartIndex() {
        return this._renderedContentHover.value?.focusedHoverPartIndex ?? -1;
    }
    containsNode(t) {
        return t ? this._contentHoverWidget.getDomNode().contains(t) : !1;
    }
    focus() {
        if (this._renderedContentHover.value?.hoverPartsCount === 1) {
            this.focusHoverPartWithIndex(0);
            return;
        }
        this._contentHoverWidget.focus();
    }
    focusHoverPartWithIndex(t) {
        this._renderedContentHover.value?.focusHoverPartWithIndex(t);
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
}, cWr = Re([
    F(1, dn),
    F(2, Al),
    F(3, av)
], cWr);

}
