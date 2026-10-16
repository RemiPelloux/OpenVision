import { Eqr, KL, Mxc, Se, jn, we } from "./HVr.js";
import { D7, EAe } from "./canIUse.js";
import { en } from "./dom_2.js";
import { L5c, jOt, tRe } from "./editorDom.js";
import { L_i, Nvg } from "./mouseHandler.js";
import { Xt } from "./qIc.js";
import { B_i, f9c } from "./textAreaEditContextInput.js";
import { Ex, ov, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var v9c, _9c, b9c;
export { _9c, b9c, v9c };
var __wakaru_Ovg_initialized = false;
export function Ovg() {
if (__wakaru_Ovg_initialized) return;
__wakaru_Ovg_initialized = true;
"use strict";
x(), EAe(), en(), Ex(), lo(), Se(), jn(), Nvg(), jOt(), f9c(), v9c = class extends L_i {
    constructor(e, t, n){
        super(e, t, n), this._register(zT.addTarget(this.viewHelper.linesContentDomNode)), this._register(Xt(this.viewHelper.linesContentDomNode, ov.Tap, (r)=>this.onTap(r))), this._register(Xt(this.viewHelper.linesContentDomNode, ov.Change, (r)=>this.onChange(r))), this._register(Xt(this.viewHelper.linesContentDomNode, ov.Contextmenu, (r)=>this._onContextMenu(new tRe(r, !1, this.viewHelper.viewDomNode), !1))), this._lastPointerType = "mouse", this._register(Xt(this.viewHelper.linesContentDomNode, "pointerdown", (r)=>{
            const s = r.pointerType;
            if (s === "mouse") {
                this._lastPointerType = "mouse";
                return;
            } else s === "touch" ? this._lastPointerType = "touch" : this._lastPointerType = "pen";
        }));
        const i = new L5c(this.viewHelper.viewDomNode);
        this._register(i.onPointerMove(this.viewHelper.viewDomNode, (r)=>this._onMouseMove(r))), this._register(i.onPointerUp(this.viewHelper.viewDomNode, (r)=>this._onMouseUp(r))), this._register(i.onPointerLeave(this.viewHelper.viewDomNode, (r)=>this._onMouseLeave(r))), this._register(i.onPointerDown(this.viewHelper.viewDomNode, (r, s)=>this._onMouseDown(r, s)));
    }
    onTap(e) {
        !e.initialTarget || !this.viewHelper.linesContentDomNode.contains(e.initialTarget) || (e.preventDefault(), this.viewHelper.focusTextArea(), this._dispatchGesture(e, !1));
    }
    onChange(e) {
        this._lastPointerType === "touch" && this._context.viewModel.viewLayout.deltaScrollNow(-e.translationX, -e.translationY), this._lastPointerType === "pen" && this._dispatchGesture(e, !0);
    }
    _dispatchGesture(e, t) {
        const n = this._createMouseTarget(new tRe(e, !1, this.viewHelper.viewDomNode), !1);
        n.position && this.viewController.dispatchMouse({
            position: n.position,
            mouseColumn: n.position.column,
            startedOnLineNumbers: !1,
            revealType: 1,
            mouseDownCount: e.tapCount,
            inSelectionMode: t,
            altKey: !1,
            ctrlKey: !1,
            metaKey: !1,
            shiftKey: !1,
            leftButton: !1,
            middleButton: !1,
            onInjectedText: n.type === 6 && n.detail.injectedText !== null
        });
    }
    _onMouseDown(e, t) {
        e.browserEvent.pointerType !== "touch" && super._onMouseDown(e, t);
    }
}, _9c = class extends L_i {
    constructor(e, t, n){
        super(e, t, n), this._register(zT.addTarget(this.viewHelper.linesContentDomNode)), this._register(Xt(this.viewHelper.linesContentDomNode, ov.Tap, (i)=>this.onTap(i))), this._register(Xt(this.viewHelper.linesContentDomNode, ov.Change, (i)=>this.onChange(i))), this._register(Xt(this.viewHelper.linesContentDomNode, ov.Contextmenu, (i)=>this._onContextMenu(new tRe(i, !1, this.viewHelper.viewDomNode), !1)));
    }
    onTap(e) {
        e.preventDefault(), this.viewHelper.focusTextArea();
        const t = this._createMouseTarget(new tRe(e, !1, this.viewHelper.viewDomNode), !1);
        if (t.position) {
            const n = document.createEvent("CustomEvent");
            n.initEvent(B_i.Tap, !1, !0), this.viewHelper.dispatchTextAreaEvent(n), this.viewController.moveTo(t.position, 1);
        }
    }
    onChange(e) {
        this._context.viewModel.viewLayout.deltaScrollNow(-e.translationX, -e.translationY);
    }
}, b9c = class extends we {
    constructor(e, t, n){
        super(), (KL || Mxc && Eqr) && D7.pointerEvents ? this.handler = this._register(new v9c(e, t, n)) : on.TouchEvent ? this.handler = this._register(new _9c(e, t, n)) : this.handler = this._register(new L_i(e, t, n));
    }
    getTargetAtClientPoint(e, t) {
        return this.handler.getTargetAtClientPoint(e, t);
    }
};

}
