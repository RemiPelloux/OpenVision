import { Di, Qe, mCo, sXu, st, tY } from "./Iwo.js";
import { Kte, Sbt } from "./canIUse.js";
import { Hn } from "./dom_2.js";
import { Cfn, KUd, mHe } from "./editorDom.js";
import { aCr, xMy } from "./mouseHandler.js";
import { Rjd, dCr } from "./textAreaEditContextInput.js";
import { fO, kM, mS } from "./touch.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
import { li } from "./ze.js";
var Pjd, Mjd, Djd;
export { Djd, Mjd, Pjd };
var __wakaru_AMy_initialized = false;
export function AMy() {
if (__wakaru_AMy_initialized) return;
__wakaru_AMy_initialized = true;
"use strict";
E(), Sbt(), Hn(), fO(), Bs(), Qe(), Di(), xMy(), Cfn(), Rjd(), Pjd = class extends aCr {
    constructor(t, e, n){
        super(t, e, n), this._register(kM.addTarget(this.viewHelper.linesContentDomNode)), this._register(li(this.viewHelper.linesContentDomNode, mS.Tap, (r)=>this.onTap(r))), this._register(li(this.viewHelper.linesContentDomNode, mS.Change, (r)=>this.onChange(r))), this._register(li(this.viewHelper.linesContentDomNode, mS.Contextmenu, (r)=>this._onContextMenu(new mHe(r, !1, this.viewHelper.viewDomNode), !1))), this._lastPointerType = "mouse", this._register(li(this.viewHelper.linesContentDomNode, "pointerdown", (r)=>{
            const s = r.pointerType;
            if (s === "mouse") {
                this._lastPointerType = "mouse";
                return;
            } else s === "touch" ? this._lastPointerType = "touch" : this._lastPointerType = "pen";
        }));
        const i = new KUd(this.viewHelper.viewDomNode);
        this._register(i.onPointerMove(this.viewHelper.viewDomNode, (r)=>this._onMouseMove(r))), this._register(i.onPointerUp(this.viewHelper.viewDomNode, (r)=>this._onMouseUp(r))), this._register(i.onPointerLeave(this.viewHelper.viewDomNode, (r)=>this._onMouseLeave(r))), this._register(i.onPointerDown(this.viewHelper.viewDomNode, (r, s)=>this._onMouseDown(r, s)));
    }
    onTap(t) {
        !t.initialTarget || !this.viewHelper.linesContentDomNode.contains(t.initialTarget) || (t.preventDefault(), this.viewHelper.focusTextArea(), this._dispatchGesture(t, !1));
    }
    onChange(t) {
        this._lastPointerType === "touch" && this._context.viewModel.viewLayout.deltaScrollNow(-t.translationX, -t.translationY), this._lastPointerType === "pen" && this._dispatchGesture(t, !0);
    }
    _dispatchGesture(t, e) {
        const n = this._createMouseTarget(new mHe(t, !1, this.viewHelper.viewDomNode), !1);
        n.position && this.viewController.dispatchMouse({
            position: n.position,
            mouseColumn: n.position.column,
            startedOnLineNumbers: !1,
            revealType: 1,
            mouseDownCount: t.tapCount,
            inSelectionMode: e,
            altKey: !1,
            ctrlKey: !1,
            metaKey: !1,
            shiftKey: !1,
            leftButton: !1,
            middleButton: !1,
            onInjectedText: n.type === 6 && n.detail.injectedText !== null
        });
    }
    _onMouseDown(t, e) {
        t.browserEvent.pointerType !== "touch" && super._onMouseDown(t, e);
    }
}, Mjd = class extends aCr {
    constructor(t, e, n){
        super(t, e, n), this._register(kM.addTarget(this.viewHelper.linesContentDomNode)), this._register(li(this.viewHelper.linesContentDomNode, mS.Tap, (i)=>this.onTap(i))), this._register(li(this.viewHelper.linesContentDomNode, mS.Change, (i)=>this.onChange(i))), this._register(li(this.viewHelper.linesContentDomNode, mS.Contextmenu, (i)=>this._onContextMenu(new mHe(i, !1, this.viewHelper.viewDomNode), !1)));
    }
    onTap(t) {
        t.preventDefault(), this.viewHelper.focusTextArea();
        const e = this._createMouseTarget(new mHe(t, !1, this.viewHelper.viewDomNode), !1);
        if (e.position) {
            const n = document.createEvent("CustomEvent");
            n.initEvent(dCr.Tap, !1, !0), this.viewHelper.dispatchTextAreaEvent(n), this.viewController.moveTo(e.position, 1);
        }
    }
    onChange(t) {
        this._context.viewModel.viewLayout.deltaScrollNow(-t.translationX, -t.translationY);
    }
}, Djd = class extends st {
    constructor(t, e, n){
        super(), (tY || sXu && mCo) && Kte.pointerEvents ? this.handler = this._register(new Pjd(t, e, n)) : $t.TouchEvent ? this.handler = this._register(new Mjd(t, e, n)) : this.handler = this._register(new aCr(t, e, n));
    }
    getTargetAtClientPoint(t, e) {
        return this.handler.getTargetAtClientPoint(t, e);
    }
};

}
