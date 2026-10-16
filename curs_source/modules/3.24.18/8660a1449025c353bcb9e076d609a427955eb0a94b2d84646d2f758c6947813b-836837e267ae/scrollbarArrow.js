import { ZE, qn } from "./async.js";
import { Hn, Pr, bgn, n0, ws } from "./dom_2.js";
import { lBt, wfn } from "./globalPointerMoveMonitor.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { CY, k4 } from "./widget.js";
var mBt, hjd;
export { hjd, mBt };
var __wakaru_AHo_initialized = false;
export function AHo() {
if (__wakaru_AHo_initialized) return;
__wakaru_AHo_initialized = true;
"use strict";
E(), wfn(), CY(), qn(), ta(), Hn(), mBt = 11, hjd = class extends k4 {
    constructor(t){
        super(), this._onActivate = t.onActivate, this.bgDomNode = document.createElement("div"), this.bgDomNode.className = "arrow-background", this.bgDomNode.style.position = "absolute", this.bgDomNode.style.width = t.bgWidth + "px", this.bgDomNode.style.height = t.bgHeight + "px", typeof t.top < "u" && (this.bgDomNode.style.top = "0px"), typeof t.left < "u" && (this.bgDomNode.style.left = "0px"), typeof t.bottom < "u" && (this.bgDomNode.style.bottom = "0px"), typeof t.right < "u" && (this.bgDomNode.style.right = "0px"), this.domNode = document.createElement("div"), this.domNode.className = t.className, this.domNode.classList.add(...Gn.asClassNameArray(t.icon)), this.domNode.style.position = "absolute", this.domNode.style.width = mBt + "px", this.domNode.style.height = mBt + "px", typeof t.top < "u" && (this.domNode.style.top = t.top + "px"), typeof t.left < "u" && (this.domNode.style.left = t.left + "px"), typeof t.bottom < "u" && (this.domNode.style.bottom = t.bottom + "px"), typeof t.right < "u" && (this.domNode.style.right = t.right + "px"), this._pointerMoveMonitor = this._register(new lBt), this._register(n0(this.bgDomNode, Pr.POINTER_DOWN, (e)=>this._arrowPointerDown(e))), this._register(n0(this.domNode, Pr.POINTER_DOWN, (e)=>this._arrowPointerDown(e))), this._pointerdownRepeatTimer = this._register(new bgn), this._pointerdownScheduleRepeatTimer = this._register(new ZE);
    }
    _arrowPointerDown(t) {
        if (!t.target || !(t.target instanceof Element)) return;
        const e = ()=>{
            this._pointerdownRepeatTimer.cancelAndSet(()=>this._onActivate(), 1e3 / 24, ws(t));
        };
        this._onActivate(), this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancelAndSet(e, 200), this._pointerMoveMonitor.startMonitoring(t.target, t.pointerId, t.buttons, (n)=>{}, ()=>{
            this._pointerdownRepeatTimer.cancel(), this._pointerdownScheduleRepeatTimer.cancel();
        }), t.preventDefault();
    }
};

}
