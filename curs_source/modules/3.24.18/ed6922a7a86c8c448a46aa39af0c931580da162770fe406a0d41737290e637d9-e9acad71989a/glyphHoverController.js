import { He, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ac, bn } from "./async.js";
import { $qt, Il_ } from "./glyphHoverWidget.js";
import { j9i } from "./hover.css";
import { Nyi } from "./hoverUtils.js";
import { Ze, _t } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { Lyi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var ynr, Aoe;
export { Aoe, ynr };
var __wakaru_Hqt_initialized = false;
export function Hqt() {
if (__wakaru_Hqt_initialized) return;
__wakaru_Hqt_initialized = true;
"use strict";
x(), Pr(), Se(), Ze(), bn(), Nyi(), j9i(), Il_(), ynr = !1, Aoe = class extends we {
    constructor(e, t){
        super(), this._editor = e, this._instantiationService = t, this.shouldKeepOpenOnEditorMouseMoveOrLeave = !1, this._listenersStore = new He, this._hoverState = {
            mouseDown: !1
        }, this._reactToEditorMouseMoveRunner = this._register(new ac(()=>this._reactToEditorMouseMove(this._mouseMoveEvent), 0)), this._hookListeners(), this._register(this._editor.onDidChangeConfiguration((n)=>{
            n.hasChanged(62) && (this._unhookListeners(), this._hookListeners());
        }));
    }
    static get(e) {
        return e.getContribution(Aoe.ID);
    }
    _hookListeners() {
        const e = this._editor.getOption(62);
        this._hoverSettings = {
            enabled: e.enabled,
            sticky: e.sticky,
            hidingDelay: e.hidingDelay
        }, e.enabled ? (this._listenersStore.add(this._editor.onMouseDown((t)=>this._onEditorMouseDown(t))), this._listenersStore.add(this._editor.onMouseUp(()=>this._onEditorMouseUp())), this._listenersStore.add(this._editor.onMouseMove((t)=>this._onEditorMouseMove(t))), this._listenersStore.add(this._editor.onKeyDown((t)=>this._onKeyDown(t)))) : (this._listenersStore.add(this._editor.onMouseMove((t)=>this._onEditorMouseMove(t))), this._listenersStore.add(this._editor.onKeyDown((t)=>this._onKeyDown(t)))), this._listenersStore.add(this._editor.onMouseLeave((t)=>this._onEditorMouseLeave(t))), this._listenersStore.add(this._editor.onDidChangeModel(()=>{
            this._cancelScheduler(), this.hideGlyphHover();
        })), this._listenersStore.add(this._editor.onDidChangeModelContent(()=>this._cancelScheduler())), this._listenersStore.add(this._editor.onDidScrollChange((t)=>this._onEditorScrollChanged(t)));
    }
    _unhookListeners() {
        this._listenersStore.clear();
    }
    _cancelScheduler() {
        this._mouseMoveEvent = void 0, this._reactToEditorMouseMoveRunner.cancel();
    }
    _onEditorScrollChanged(e) {
        (e.scrollTopChanged || e.scrollLeftChanged) && this.hideGlyphHover();
    }
    _onEditorMouseDown(e) {
        this._hoverState.mouseDown = !0, !this._isMouseOnGlyphHoverWidget(e) && this.hideGlyphHover();
    }
    _isMouseOnGlyphHoverWidget(e) {
        const t = this._glyphWidget?.getDomNode();
        return t ? Lyi(t, e.event.posx, e.event.posy) : !1;
    }
    _onEditorMouseUp() {
        this._hoverState.mouseDown = !1;
    }
    _onEditorMouseLeave(e) {
        this.shouldKeepOpenOnEditorMouseMoveOrLeave || (this._cancelScheduler(), this._isMouseOnGlyphHoverWidget(e)) || ynr || this.hideGlyphHover();
    }
    _shouldNotRecomputeCurrentHoverWidget(e) {
        const t = this._hoverSettings.sticky, n = this._isMouseOnGlyphHoverWidget(e);
        return t && n;
    }
    _onEditorMouseMove(e) {
        if (this.shouldKeepOpenOnEditorMouseMoveOrLeave) return;
        if (this._mouseMoveEvent = e, this._shouldNotRecomputeCurrentHoverWidget(e)) {
            this._reactToEditorMouseMoveRunner.cancel();
            return;
        }
        this._reactToEditorMouseMove(e);
    }
    _reactToEditorMouseMove(e) {
        !e || this._tryShowHoverWidget(e) || ynr || this.hideGlyphHover();
    }
    _tryShowHoverWidget(e) {
        return this._getOrCreateGlyphWidget().showsOrWillShow(e);
    }
    _onKeyDown(e) {
        this._editor.hasModel() && (e.keyCode === fe.Ctrl || e.keyCode === fe.Alt || e.keyCode === fe.Meta || e.keyCode === fe.Shift || this.hideGlyphHover());
    }
    hideGlyphHover() {
        ynr || this._glyphWidget?.hide();
    }
    _getOrCreateGlyphWidget() {
        return this._glyphWidget || (this._glyphWidget = this._instantiationService.createInstance($qt, this._editor)), this._glyphWidget;
    }
    dispose() {
        super.dispose(), this._unhookListeners(), this._listenersStore.dispose(), this._glyphWidget?.dispose();
    }
}, Aoe.ID = "editor.contrib.marginHover", Aoe = ie([
    C(1, _t)
], Aoe);

}
