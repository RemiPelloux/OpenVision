import { Nt, Qe, st } from "./Iwo.js";
import { Yu, qn } from "./async.js";
import { dxk, jRn } from "./glyphHoverWidget.js";
import { uWr } from "./hover.css";
import { REr } from "./hoverUtils.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AEr } from "./ze.js";
var rus, lVe;
export { lVe, rus };
var __wakaru_Eml_initialized = false;
export function Eml() {
if (__wakaru_Eml_initialized) return;
__wakaru_Eml_initialized = true;
"use strict";
E(), Ma(), Qe(), It(), qn(), REr(), uWr(), dxk(), rus = !1, lVe = class extends st {
    constructor(t, e){
        super(), this._editor = t, this._instantiationService = e, this.shouldKeepOpenOnEditorMouseMoveOrLeave = !1, this._listenersStore = new Nt, this._hoverState = {
            mouseDown: !1
        }, this._reactToEditorMouseMoveRunner = this._register(new Yu(()=>this._reactToEditorMouseMove(this._mouseMoveEvent), 0)), this._hookListeners(), this._register(this._editor.onDidChangeConfiguration((n)=>{
            n.hasChanged(62) && (this._unhookListeners(), this._hookListeners());
        }));
    }
    static get(t) {
        return t.getContribution(lVe.ID);
    }
    _hookListeners() {
        const t = this._editor.getOption(62);
        this._hoverSettings = {
            enabled: t.enabled,
            sticky: t.sticky,
            hidingDelay: t.hidingDelay
        }, t.enabled ? (this._listenersStore.add(this._editor.onMouseDown((e)=>this._onEditorMouseDown(e))), this._listenersStore.add(this._editor.onMouseUp(()=>this._onEditorMouseUp())), this._listenersStore.add(this._editor.onMouseMove((e)=>this._onEditorMouseMove(e))), this._listenersStore.add(this._editor.onKeyDown((e)=>this._onKeyDown(e)))) : (this._listenersStore.add(this._editor.onMouseMove((e)=>this._onEditorMouseMove(e))), this._listenersStore.add(this._editor.onKeyDown((e)=>this._onKeyDown(e)))), this._listenersStore.add(this._editor.onMouseLeave((e)=>this._onEditorMouseLeave(e))), this._listenersStore.add(this._editor.onDidChangeModel(()=>{
            this._cancelScheduler(), this.hideGlyphHover();
        })), this._listenersStore.add(this._editor.onDidChangeModelContent(()=>this._cancelScheduler())), this._listenersStore.add(this._editor.onDidScrollChange((e)=>this._onEditorScrollChanged(e)));
    }
    _unhookListeners() {
        this._listenersStore.clear();
    }
    _cancelScheduler() {
        this._mouseMoveEvent = void 0, this._reactToEditorMouseMoveRunner.cancel();
    }
    _onEditorScrollChanged(t) {
        (t.scrollTopChanged || t.scrollLeftChanged) && this.hideGlyphHover();
    }
    _onEditorMouseDown(t) {
        this._hoverState.mouseDown = !0, !this._isMouseOnGlyphHoverWidget(t) && this.hideGlyphHover();
    }
    _isMouseOnGlyphHoverWidget(t) {
        const e = this._glyphWidget?.getDomNode();
        return e ? AEr(e, t.event.posx, t.event.posy) : !1;
    }
    _onEditorMouseUp() {
        this._hoverState.mouseDown = !1;
    }
    _onEditorMouseLeave(t) {
        this.shouldKeepOpenOnEditorMouseMoveOrLeave || (this._cancelScheduler(), this._isMouseOnGlyphHoverWidget(t)) || rus || this.hideGlyphHover();
    }
    _shouldNotRecomputeCurrentHoverWidget(t) {
        const e = this._hoverSettings.sticky, n = this._isMouseOnGlyphHoverWidget(t);
        return e && n;
    }
    _onEditorMouseMove(t) {
        if (this.shouldKeepOpenOnEditorMouseMoveOrLeave) return;
        if (this._mouseMoveEvent = t, this._shouldNotRecomputeCurrentHoverWidget(t)) {
            this._reactToEditorMouseMoveRunner.cancel();
            return;
        }
        this._reactToEditorMouseMove(t);
    }
    _reactToEditorMouseMove(t) {
        !t || this._tryShowHoverWidget(t) || rus || this.hideGlyphHover();
    }
    _tryShowHoverWidget(t) {
        return this._getOrCreateGlyphWidget().showsOrWillShow(t);
    }
    _onKeyDown(t) {
        this._editor.hasModel() && (t.keyCode === Ze.Ctrl || t.keyCode === Ze.Alt || t.keyCode === Ze.Meta || t.keyCode === Ze.Shift || this.hideGlyphHover());
    }
    hideGlyphHover() {
        rus || this._glyphWidget?.hide();
    }
    _getOrCreateGlyphWidget() {
        return this._glyphWidget || (this._glyphWidget = this._instantiationService.createInstance(jRn, this._editor)), this._glyphWidget;
    }
    dispose() {
        super.dispose(), this._unhookListeners(), this._listenersStore.dispose(), this._glyphWidget?.dispose();
    }
}, lVe.ID = "editor.contrib.marginHover", lVe = Re([
    F(1, dn)
], lVe);

}
